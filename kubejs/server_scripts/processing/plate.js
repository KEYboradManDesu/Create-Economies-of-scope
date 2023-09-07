const Plate = (obj, event) => {
  CreatePlate(obj.name, obj.plate, obj.ingot, event);
  tinkersPlate(obj.name, obj.plate, obj.fluid, obj.gem, event);
  IEPlate(obj.name, obj.plate, obj.ingot, obj.gem, event);
};

const CreatePlate = (name, plate, ingot, event) => {
  if (plate === "") return;

  if (ingot) {
    event.remove({
      type: "create:pressing",
      output: `#forge:plates/${name}`,
    });

    event.recipes.createPressing(plate, [`#forge:ingots/${name}`]);
  }
};

const IEPlate = (name, plate, ingot, gem, event) => {
  if (plate === "") return;

  event.remove({
    id: `immersiveengineering:crafting/plate_${name}_hammering`,
  });

  event.remove({
    id: `immersiveengineering:metalpress/plate_${name}`,
  });

  if (ingot !== "") {
    event.shapeless(plate, [
      `#forge:ingots/${name}`,
      Item.of("immersiveengineering:hammer").ignoreNBT(),
    ]);

    event.recipes.immersiveengineeringMetalPress(
      plate,
      `#forge:ingots/${name}`,
      "immersiveengineering:mold_plate"
    );
  }

  if (gem !== "") {
    event.shapeless(plate, [
      `#forge:gems/${name}`,
      Item.of("immersiveengineering:hammer").ignoreNBT(),
    ]);

    event.recipes.immersiveengineeringMetalPress(
      plate,
      `#forge:gems/${name}`,
      "immersiveengineering:mold_plate"
    );
  }
};

const tinkersPlate = (name, item, fluid, gem, event) => {
  if (item === "" || fluid === "") return;

  event.remove({
    output: `#forge:plates/${name}`,
    type: "tconstruct:casting_table",
  });

  event.recipes
    .tconstructCastingTable(Item.of(item), fluid, gem ? 100 : 90)
    .singleUseCast("plate")
    .coolingTime(60)
    .id(`unify:tconstruct/plate/single_${name}`);

  event.recipes
    .tconstructCastingTable(item, fluid, gem ? 100 : 90)
    .multiUseCast("plate")
    .coolingTime(60)
    .id(`unify:tconstruct/plate/multi_${name}`);
};