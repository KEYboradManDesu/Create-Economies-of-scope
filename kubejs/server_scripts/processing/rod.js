const Rod = (obj, event) => {
  CARod(obj.name, obj.rod, obj.ingot, event);
  thermalsRod(obj.name, obj.rod, event);
  IERod(obj.name, obj.rod, obj.ingot, obj.gem, event);
  tinkersRod(obj.name, obj.rod, obj.fluid, obj.gem, event);
};

const CARod = (name, rod, ingot, event) => {
  if (rod === "") return;

  if (ingot) {
    event.remove({
      type: "createaddition:rolling",
      output: `#forge:rods/${name}`,
    });

    event.recipes.createaddition.rolling({
      input: Ingredient.of(`#forge:ingots/${name}`).toJson(),
      result: Item.of(`2x ${rod}`).toResultJson(),
    });
  }
};

const thermalsRod = (name, rod, event) => {
  if (rod === "") return;

  event.recipes.thermalPress(`2x ${rod}`, [
    `#forge:ingots/${name}`,
    "kubejs:press_rod_die",
  ]);
};

const IERod = (name, rod, ingot, gem, event) => {
  if (rod === "") return;

  event.remove({
    id: `immersiveengineering:metalpress/rod_${name}`,
  });

  if (ingot !== "") {
    event.recipes.immersiveengineeringMetalPress(
      Item.of(rod, 2),
      `#forge:ingots/${name}`,
      "immersiveengineering:mold_rod"
    );
  }

  if (gem !== "") {
    event.recipes.immersiveengineeringMetalPress(
      Item.of(rod, 2),
      `#forge:gems/${name}`,
      "immersiveengineering:mold_rod"
    );
  }
};

const tinkersRod = (name, item, fluid, gem, event) => {
  if (item === "" || fluid === "") return;

  event.remove({
    output: `#forge:rods/${name}`,
    type: "tconstruct:casting_table",
  });

  event.recipes
    .tconstructCastingTable(Item.of(item), fluid, 45)
    .singleUseCast("rod")
    .coolingTime(60)
    .id(`unify:tconstruct/rod/single_${name}`);

  event.recipes
    .tconstructCastingTable(item, fluid, 45)
    .multiUseCast("rod")
    .coolingTime(60)
    .id(`unify:tconstruct/rod/multi_${name}`);
};