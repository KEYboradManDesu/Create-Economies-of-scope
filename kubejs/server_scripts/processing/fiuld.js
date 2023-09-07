const Fiuld = (obj, event) => {
  fiuld_dust(obj.name, obj.dust, obj.fluid, obj.fluid_byproduct, event);
  //fiulds(obj.name, obj.ingot, obj.gem, obj.fluid, event);
};

const fiuld_dust = (name, dust, fluid, fluid_byproduct, event) => {
  if (dust === "" || fluid === "") return;
  
  if (fluid_byproduct == "") {
  event.remove({
      type: "tconstruct:melting",
      input: `#forge:dusts/${name}`,
    });
    
  event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": dust
    },
    "result": {
      "fluid": fluid,
      "amount": 90
    },
    "temperature": 500,
    "time": 30
  });

  event.recipes.createMixing([Fluid.of(fluid, 630)], [Item.of(dust, 3), AE2('matter_ball')]).superheated()
  }

  event.custom({
    "type": "createbigcannons:melting",
    "ingredients": [
      {
        "item": dust
      }
    ],
    "results": [
      {
        "fluid": fluid,
        "amount": 90
      }
    ],
    "processingTime": 180,
    "heatRequirement": "heated"
  });

  if (fluid_byproduct !== "") {
  event.remove({
      type: "tconstruct:melting",
      input: `#forge:dusts/${name}`,
    });
    
    event.custom({
			"type": "tconstruct:melting",
			"ingredient": {
				"item": dust
			},
			"result": {
				"fluid": fluid,
				"amount": 90
			},
			"temperature": 500,
			"time": 30,
			"byproducts": [
				{
					"fluid": fluid_byproduct,
					"amount": 30
				}
			]
		});

    event.recipes.createMixing([Fluid.of(fluid, 630), Fluid.of(fluid_byproduct, 210)], [Item.of(dust, 3), AE2('matter_ball')]).superheated()

    event.custom({
      "type": "createbigcannons:melting",
      "ingredients": [
        {
          "item": dust
        }
      ],
      "results": [
        {
          "fluid": fluid,
          "amount": 90
        },
        {
          "fluid": fluid_byproduct,
          "amount": 30
        }
      ],
      "processingTime": 180,
      "heatRequirement": "heated"
    });
  }

};