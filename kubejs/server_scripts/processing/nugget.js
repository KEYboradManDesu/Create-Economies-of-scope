const Nugget = (obj, event) => {
  nuggets(obj.name, obj.nugget, obj.crushed, obj.dust, obj.byproduct, event);
};

const nuggets = (name, nugget, crushed, dust, byproduct, event) => {
  if (nugget === "") return;

  if (crushed !== "") {
    event.remove({
      type: "minecraft:smelting",
      input: `create:crushed_raw_${name}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `create:crushed_raw_${name}`,
    });
    event.remove({
      type: "create:splashing",
      input: `create:crushed_raw_${name}`,
    });

    event.smelting(Item.of(nugget, 3), crushed)

    if (byproduct !== "") {
      event.custom({
        "type": "thermal:smelter",
        "ingredient": {
          "item": crushed
        },
        "result": [
          {
            "item": nugget,
            "chance": 9.0
          },
          {
            "item": byproduct,
            "chance": (byproduct.endsWith('nugget') ? 1.8 : 0.2)
          },
          {
            "item": "thermal:rich_slag",
            "chance": 0.2
          }
        ],
        "experience": 0.2,
        "energy": 20000
      })
    }
  }

  if (dust !== "") {
    event.remove({
      type: "minecraft:smelting",
      input: `#forge:dusts/${name}`,
    });
    event.remove({
      type: "minecraft:blasting",
      input: `#forge:dusts/${name}`,
    });

    event.recipes.createSplashing([Item.of(nugget, 2)], dust)

    event.smelting(Item.of(nugget, 1), dust).cookingTime(40)
    event.blasting(Item.of(nugget, 2), dust).cookingTime(40)
  }
};