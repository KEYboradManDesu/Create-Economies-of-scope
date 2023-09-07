const Wire = (obj, event) => {
  CAWire(obj.name, obj.wire, obj.plate, event);
  IEWire(obj.name, obj.wire, obj.plate, obj.ingot, event);
  tinkersWire(obj.name, obj.wire, obj.fluid, obj.gem, event);
};

const CAWire = (name, wire, plate, event) => {
  if (wire === "") return;

  if (plate) {
    event.remove({
      type: "createaddition:rolling",
      output: `#forge:wires/${name}`,
    });

    event.recipes.createaddition.rolling({
      input: Ingredient.of(`#forge:plates/${name}`).toJson(),
      result: Item.of(`2x ${wire}`).toResultJson(),
    });
  }
};

const IEWire = (name, wire, plate, ingot, event) => {
  if (wire === "") return;

  if (plate !== "") {
    event.remove({
      id: `immersiveengineering:crafting/wire_${name}`,
    });

    event.shapeless(wire, [
      [`#forge:plates/${name}`],
      Item.of("immersiveengineering:wirecutter").ignoreNBT(),
    ]);
  }

  if (ingot !== "") {
    event.remove({
      id: `immersiveengineering:metalpress/wire_${name}`,
    });

    event.recipes.immersiveengineeringMetalPress(
      Item.of(wire, 2),
      `#forge:ingots/${name}`,
      "immersiveengineering:mold_wire"
    );
  }
};

const tinkersWire = (name, item, fluid, gem, event) => {
  if (item === "" || fluid === "") return;

  event.remove({
    output: `#forge:wires/${name}`,
    type: "tconstruct:casting_table",
  });

  event.recipes
    .tconstructCastingTable(Item.of(item), fluid, 45)
    .singleUseCast("wire")
    .coolingTime(60)
    .id(`unify:tconstruct/wire/single_${name}`);

  event.recipes
    .tconstructCastingTable(item, fluid, 45)
    .multiUseCast("wire")
    .coolingTime(60)
    .id(`unify:tconstruct/wire/multi_${name}`);
};