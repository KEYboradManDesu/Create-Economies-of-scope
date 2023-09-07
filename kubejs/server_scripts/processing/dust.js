const Dust = (obj, event) => {
  Dusts(obj.name, obj.ore, obj.rawOre, obj.rawOreBlock, obj.crushed, obj.ingot, obj.gem, obj.dust, obj.dirtyDust, event);
};

const Dusts = (name, ore, rawOre, rawBlock, crushed, ingot, gem, dust, dirtyDust, event) => {
  if (dust === "") return;

  event.remove({
    type: "create:crushing",
    output: `#forge:dusts/${name}`,
  });
  event.remove({
    type: "create:milling",
    output: `#forge:dusts/${name}`,
  });

  if (crushed !== "") {
  
    event.recipes.createMilling( [
      `2x ${dust}`], 
      crushed)

		event.recipes.createCrushing( [
      `2x ${dust}`,
      Item.of(dust, 2).withChance(0.5)], 
      crushed)

    event.recipes.thermal.pulverizer([Item.of(dust, 4)], crushed).energy(15000)

    event.recipes.immersiveengineeringCrusher(
      `3x ${dust}`,
      `${crushed}`
    );
  }

  if (ingot !== "") {
    event.remove({
      type: "mekanism:crushing",
      input: `#forge:ingots/${name}`,
      output: `#forge:dusts/${name}`,
    });

    event.recipes.mekanismCrushing(`${dust}`, `#forge:ingots/${name}`);

    event.recipes.createMilling([dust], `#forge:ingots/${name}`);
  }

  if (ore !== "") {
    if (gem !== "") {
      event.remove({
        type: "mekanism:enriching",
        input: `#forge:ores/${name}`,
        output: `#forge:gems/${name}`,
      });
      event.recipes.mekanismEnriching(`2x ${gem}`, `#forge:ores/${name}`);
    }

    if (ingot !== "") {
      event.remove({
        type: "mekanism:enriching",
        input: `#forge:ores/${name}`,
        output: `#forge:dusts/${name}`,
      });
      event.recipes.mekanismEnriching(`2x ${dust}`, `#forge:ores/${name}`);
    }
  }

  if (rawBlock !== "") {
    event.remove({
      type: "mekanism:enriching",
      input: `#forge:storage_blocks/raw_${name}`,
      output: `#forge:dusts/${name}`,
    });
    event.recipes.mekanismEnriching(
      `12x ${dust}`,
      `#forge:storage_blocks/raw_${name}`
    );
  }

  if (rawOre !== "") {
    event.remove({
      type: "mekanism:enriching",
      input: `#forge:raw_materials/${name}`,
      output: `#forge:dusts/${name}`,
    });
    event.recipes.mekanismEnriching(
      `4x ${dust}`,
      `3x #forge:raw_materials/${name}`
    );
  }

  if (gem !== "") {
    event.remove({
      type: "mekanism:enriching",
      input: `#forge:dusts/${name}`,
      output: `#forge:gems/${name}`,
    });

    event.recipes.mekanismEnriching(gem, dust);

    event.recipes.createMilling([dust], gem);
  }

  if (dirtyDust !== "") {
    event.remove({
      type: "mekanism:enriching",
      input: `#mekanism:dirty_dusts/${name}`,
      output: `#forge:dusts/${name}`,
    });
    
    event.recipes.mekanismEnriching(`${dust}`, `#mekanism:dirty_dusts/${name}`);
  }
};