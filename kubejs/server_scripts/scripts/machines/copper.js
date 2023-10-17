
onEvent('recipes', event => {
	rubber(event)
	copperMachine(event)
})

function rubber(event) {
let overrideTreeOutput = (id, trunk, leaf, fluid) => {
	event.remove({ id: id })
	event.custom({
		"type": "thermal:tree_extractor",
		"trunk": trunk,
		"leaves": leaf,
		"result": {
			"fluid": fluid,
			"amount": 25
		}
	});
}

overrideTreeOutput(TE('devices/tree_extractor/tree_extractor_jungle'), MC('jungle_log'), MC('jungle_leaves'), "thermal:resin")
overrideTreeOutput(TE('devices/tree_extractor/tree_extractor_spruce'), MC('spruce_log'), MC('spruce_leaves'), "thermal:resin")
overrideTreeOutput(TE('devices/tree_extractor/tree_extractor_dark_oak'), MC('dark_oak_log'), MC('dark_oak_leaves'), "thermal:resin")

overrideTreeOutput("", MC('oak_log'), 'biomesoplenty:maple_leaves', "create_central_kitchen:sap")
overrideTreeOutput("", 'autumnity:maple_log', 'autumnity:red_maple_leaves', "create_central_kitchen:sap")
overrideTreeOutput("", 'autumnity:maple_log', 'autumnity:orange_maple_leaves', "create_central_kitchen:sap")
overrideTreeOutput("", 'autumnity:maple_log', 'autumnity:yellow_maple_leaves', "create_central_kitchen:sap")
overrideTreeOutput("", 'autumnity:maple_log', 'autumnity:maple_leaves', "create_central_kitchen:sap")

event.custom({
	"type": "create:mixing",
	"ingredients": [
	  {
		"item": "darkerdepths:resin"
	  }
	],
	"results": [
	  {
		"fluid": "thermal:resin",
		"amount": 250
	  }
	],
	"heatRequirement": "lowheated"
})

event.recipes.createCompacting('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), "4x #chipped:vine"])
event.recipes.createCompacting('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), '4x #minecraft:flowers'])
event.recipes.createCompacting('1x ' + TE("rubber"), [Fluid.of(MC('water'), 250), '8x #botania:petals'])
event.recipes.createCompacting('1x ' + TE("rubber"), [Fluid.of(TE('resin'), 250)])//橡胶
}

function copperMachine(event) {
	event.shaped(Item.of(KJ('treated_kelp_block'), 1), [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: [KJ('treated_kelp')]
	})
	event.shaped(Item.of(KJ('treated_kelp'), 9), [
		'A'
	], {
		A: [KJ('treated_kelp_block')]
	})

/*event.shapeless(KJ("treated_kelp_block"), [MC('dried_kelp_block'), IM('creosote_bucket')]).id("kubejs:treated_kelp_block_manual_only")
event.shaped(Item.of(KJ('treated_kelp'), 8), [
	'AAA',
	'ABA',
	'AAA'
], {
	A: [MC('dried_kelp')],
	B: [IM('creosote_bucket')]
})*/

event.remove({ id: CR('crafting/kinetics/belt_connector') })
event.shaped(CR('belt_connector', 3), [
	'SSS',
	'SSS'
], {
	S: TE('cured_rubber')
})//橡胶合成传动带
event.shaped(CR('belt_connector', 1), [
	'SSS',
	'SSS'
], {
	S: KJ('treated_kelp')
})//防腐海带合成传动带

event.recipes.createCompacting(KJ("creosote_ball"), [Fluid.of(IM('creosote'), 120)])//杂酚油球合成
event.shapeless(KJ("creosote_ball"), [IM('creosote_bucket')])
event.custom({
	"type": "thermal:chiller",
	"ingredients": [
	  {
		"fluid": "immersiveengineering:creosote",
		"amount": 120
	  },
	  {
		"item": "thermal:chiller_ball_cast"
	  }
	],
	"result": [
	  {
		"item": "kubejs:creosote_ball",
		"count": 1
	  }
	],
	"energy": 1000
});


event.remove({ id: 'thermal:rubber_3' })
event.remove({ id: 'thermal:rubber_from_dandelion' })
event.remove({ id: 'thermal:rubber_from_vine' })

event.recipes.createFilling(KJ("treated_kelp_block"), [MC('dried_kelp_block'), Fluid.of(IM('creosote'), 125)])
event.recipes.createFilling(KJ("treated_kelp"), [MC('dried_kelp'), Fluid.of(IM('creosote'), 10)])
event.recipes.createFilling(IM("treated_wood_horizontal"), ['createindustry:waterproof_planks', Fluid.of(IM('creosote'), 25)])

event.shapeless(KJ('sealed_mechanism'), [TE('cured_rubber'), KJ('kinetic_mechanism'), TE('cured_rubber'), Item.of('createindustry:water_insulation').ignoreNBT()
]).id("kubejs:sealed_mechanism_manual_only").damageIngredient(Item.of('createindustry:water_insulation').ignoreNBT())

event.shaped(KJ('copper_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: CR('copper_casing'),
	S: KJ('sealed_mechanism')
})
event.custom({
	type: 'thermal:press',
	ingredients: [
		Ingredient.of(TE('electrum_coin', 6)),
		Ingredient.of(CR('copper_casing')),
	],
	result: [
		Item.of(KJ('copper_machine'))
	],
	energy: 1000
})

//治炼炉核心
event.remove({ id: TC("smeltery/casting/seared/smeltery_controller") })
event.remove({ id: TC("smeltery/melting/copper/smeltery_controller") })
donutCraft(event, TC('smeltery_controller'), TC('seared_bricks'), KJ('sealed_mechanism'))

let copper_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:copper_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:copper_machine', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'kubejs:copper_machine')
}

copper_machine('create:copper_backtank', 1, MC("copper_block"))
copper_machine('create:portable_fluid_interface', 2)
copper_machine('create:spout', 1, MC('hopper'))
copper_machine('thermal:upgrade_augment_1', 1, MC('redstone'))
copper_machine('create:hose_pulley', 1)
copper_machine('create:item_drain', 1, MC("iron_bars"))
copper_machine('thermal:dynamo_magmatic', 1, TE('rf_coil'))
copper_machine('thermal:device_water_gen', 1, MC('bucket'))
copper_machine('create:smart_fluid_pipe', 2)
copper_machine('create_enchantment_industry:disenchanter', 1, CR('#sandpaper'))
copper_machine('create_enchantment_industry:printer', 1, F('#plates/iron'))
copper_machine('create:steam_engine', 1, MC('piston'))
copper_machine('create:steam_whistle', 1, F('#plates/gold'))
copper_machine('compressedcreativity:compressed_air_engine', 1, ('compressedcreativity:engine_rotor'))
copper_machine('compressedcreativity:air_blower', 1, PC('pressure_tube'))
copper_machine('cookingforblockheads:sink', 1, BO('rune_water'))
copper_machine('create_dd:hydraulic_press', 1, F('#storage_blocks/bronze'))

}