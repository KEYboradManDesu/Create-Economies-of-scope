const Ingot = (obj, event) => {
  tinkersIngot(obj.name, obj.ingot, obj.fluid, obj.gem, event);
  Plate_to_Ingot(obj.name, obj.plate, obj.ingot, event);
};

const tinkersIngot = (name, item, fluid, gem, event) => {
  if (item === "" || fluid === "") return;

  event.remove({
    output: `#forge:ingots/${name}`,
    type: "tconstruct:casting_table",
  });

  event.recipes
    .tconstructCastingTable(Item.of(item), fluid, gem ? 100 : 90)
    .singleUseCast("ingot")
    .coolingTime(90)
    .id(`unify:tconstruct/ingot/single_${name}`);

  event.recipes
    .tconstructCastingTable(item, fluid, gem ? 100 : 90)
    .multiUseCast("ingot")
    .coolingTime(90)
    .id(`unify:tconstruct/ingot/multi_${name}`);
};

const Plate_to_Ingot = (name, plate, ingot, event) => {
  if (ingot === "") return;
  
  if (plate) {
    event.remove({
      type: "minecraft:blasting",
      output: `#forge:ingots/${name}`,
    });

    event.blasting(ingot, [`#forge:plates/${name}`])
  }
};