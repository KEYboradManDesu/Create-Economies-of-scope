
onEvent('recipes', event => {
	iron_compressed(event)
    concrete(event)
	obsidianMachine(event)
})

function iron_compressed(event) {
////压缩铁锭
event.remove({ id: PC("pressure_chamber/compressed_iron_ingot") })
event.remove({ id: PC("pressure_chamber/compressed_iron_block") })
event.remove({ id: PC("explosion_crafting/compressed_iron_ingot") })
event.remove({ id: PC("explosion_crafting/compressed_iron_block") })
///爆炸合成
event.custom({
	"type": "pneumaticcraft:explosion_crafting",
	"input": {
	  "item": "create_dd:industrial_iron_ingot"
	},
	"results": [
	  {
		"item": "pneumaticcraft:ingot_iron_compressed"
	  }
	],
	"loss_rate": 40
})//锭合成
event.custom({
	"type": "pneumaticcraft:explosion_crafting",
	"input": {
	  "item": "create:industrial_iron_block"
	},
	"results": [
	  {
		"item": "pneumaticcraft:compressed_iron_block"
	  }
	],
	"loss_rate": 40
})//块合成
///工作盆加工
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"item": "create_dd:industrial_iron_ingot"
		},
		{
			"item": "create_dd:industrial_iron_ingot"
		}
	],
	"results": [
		{
			"item": "pneumaticcraft:ingot_iron_compressed"
		},
		{
			"item": "pneumaticcraft:ingot_iron_compressed",
			"chance": 0.75
		}
	],
	"processingTime": 250,
	"heatRequirement": "heated"
})
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"item": "create:industrial_iron_block"
		},
		{
			"item": "create:industrial_iron_block"
		}
	],
	"results": [
		{
			"item": "pneumaticcraft:compressed_iron_block"
		},
		{
			"item": "pneumaticcraft:compressed_iron_block",
			"chance": 0.75
		}
	],
	"processingTime": 250,
	"heatRequirement": "heated"
})
///压缩加工
event.custom({
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
	  {
		"item": "create_dd:industrial_iron_ingot"
	  }
	],
	"pressure": 2.0,
	"results": [
	  {
		"item": "pneumaticcraft:ingot_iron_compressed"
	  }
	]
})
event.custom({
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
	  {
		"item": "create:industrial_iron_block"
	  }
	],
	"pressure": 2.0,
	"results": [
	  {
		"item": "pneumaticcraft:compressed_iron_block"
	  }
	]
})
//无序合成
event.shapeless(PC('ingot_iron_compressed'), ['create_dd:industrial_iron_ingot', 'create_dd:industrial_iron_ingot', TE('earth_charge')])
//板材
event.recipes.createPressing(KJ("iron_compressed_sheet"), PC("ingot_iron_compressed"))//压缩铁板
//还原
event.blasting(PC('ingot_iron_compressed'), KJ('iron_compressed_sheet'))

//压缩铁齿轮
event.remove({ id: 'pneumaticcraft:compressed_iron_gear' })
//合成
event.shaped('4x pneumaticcraft:compressed_iron_gear', [
	' A ',
	'ASA',
	' A ',
], {
	A: 'pneumaticcraft:ingot_iron_compressed',
	S: ['minecraft:iron_nugget', 'create:zinc_nugget', 'thermal:nickel_nugget', 'thermal:tin_nugget']
})
//冲压
event.recipes.thermalPress('pneumaticcraft:compressed_iron_gear', [
	'pneumaticcraft:ingot_iron_compressed',
	"thermal:press_gear_die",
])
event.recipes.create.deploying({
	ingredients: [
	  Ingredient.of('pneumaticcraft:ingot_iron_compressed'),
	  [Ingredient.of("immersiveengineering:mold_gear"), Ingredient.of("thermal:press_gear_die"), Ingredient.of("tconstruct:gear_cast")]
	],
	results: [Item.of('pneumaticcraft:compressed_iron_gear')],
	keepHeldItem: true,
})
event.recipes.immersiveengineeringMetalPress(
	'pneumaticcraft:compressed_iron_gear',
	'pneumaticcraft:ingot_iron_compressed',
	"immersiveengineering:mold_gear"
)
}

function concrete(event) {
//矿渣砂砾
event.replaceInput({ id: TE("machines/smelter/smelter_gravel") }, F('#gravel'), MC('gravel'))
event.recipes.createMilling([Item.of(IM('slag_gravel'))], Item.of(TE("slag")))
event.recipes.createMilling([Item.of(IM('slag_gravel')), Item.of(IM('slag_gravel', 2)).withChance(0.75)], Item.of(TE("rich_slag")))
event.recipes.immersiveengineeringCrusher(IM('slag_gravel', 3), TE("rich_slag"))

///混凝土粉末
//无序合成
event.shapeless(MC('light_gray_concrete_powder', 8), [
	MC("#sand"),
	MC("#sand"),
	MC("#sand"),
	MC("#sand"),
	[F("#gravel"), MEK("dust_fluorite")],
	[F("#gravel"), MEK("dust_fluorite")],
	[F("#gravel"), MEK("dust_fluorite")],
	[F("#gravel"), MEK("dust_fluorite")]
]).id("kubejs:concrete_powder_manual_only")
//动力搅拌
event.recipes.createMixing(MC('light_gray_concrete_powder', 2), ['#minecraft:sand', '#forge:gravel'])
event.recipes.createMixing(MC('light_gray_concrete_powder', 2), [Fluid.of(KJ('fine_sand'), 500), '#forge:gravel'])

//混凝土流体
event.remove({ id: 'createindustry:mixing/liquid_concrete' })
event.remove({ id: IM('mixer/concrete') })
event.remove({ id: IM('crafting/concrete') })
event.recipes.createMixing([Fluid.of(IM('concrete'), 500)], [F('#concrete_powders'), Fluid.of(MC('water'), 500)])
event.recipes.createMixing([Fluid.of(IM('concrete'), 1000)], [F('#concrete_powders'), 'createindustry:cement', Fluid.of(MC('water'), 500)])
event.custom({"type":"immersiveengineering:mixer",
"inputs":[
	{"count":1,"base_ingredient":{"tag":"forge:concrete_powders"}},
	{"item":"createindustry:cement"}
],
"result":
    {"fluid":"immersiveengineering:concrete","amount":1250},
	"fluid":{"tag":"minecraft:water","amount":1000}
	,"energy":3200
})

switchCutting(event, 'createindustry:concrete', 'immersiveengineering:concrete')
//event.replaceInput('createindustry:concrete',Ingredient.of("immersiveengineering:concrete"));

//强化石
event.remove({ id: PC('reinforced_stone') })
event.custom({
	"type": "tconstruct:casting_basin",
	"cast": { "item": 'create_dd:train_scaffolding' },
	"cast_consumed": true,
	"fluid": {
		"name": "immersiveengineering:concrete",
		"amount": 500
	},
	"result": 'pneumaticcraft:reinforced_stone',
	"cooling_time": 100
})

}

function obsidianMachine(event) {
//坚固板
event.custom({
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
	  {
		"item": "create:powdered_obsidian"
	  },
	  {
		"item": "minecraft:magma_cream"
	  }
	],
	"pressure": 2.5,
	"results": [
	  {
		"type": "pneumaticcraft:stacked_item",
		"item": "create:sturdy_sheet",
        "count": 2
	  }
	]
})
event.custom({
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
	  {
		"item": "create:powdered_obsidian"
	  }
	],
	"pressure": 4.5,
	"results": [
	  {
		"item": "create:sturdy_sheet"
	  }
	]
})
	
event.shaped(KJ("obsidian_machine"), [
	"SSS",
	"SCS",
	"SSS"
], {
	C: [CR("railway_casing"), 'compressedcreativity:compressed_iron_casing'],
	S: KJ("sturdy_mechanism")
})

event.custom({
	type: 'thermal:press',
	ingredients: [
		Ingredient.of(TE('lead_coin', 4)),
		Ingredient.of(CR('railway_casing')),
	],
	result: [
		Item.of(KJ('obsidian_machine'))
	],
	energy: 1000
})

let transitional = "kubejs:incomplete_sturdy_mechanism"
event.recipes.createSequencedAssembly([
	"kubejs:sturdy_mechanism",
], CR('precision_mechanism'), [
	event.recipes.createDeploying(transitional, [transitional, CR("sturdy_sheet")]),
	event.recipes.createDeploying(transitional, [transitional, CR("sturdy_sheet")]),
	//event.recipes.createDeploying(transitional, [transitional, KJ("density_detector")]),
	event.recipes.createPressing(transitional, transitional)
]).transitionalItem(transitional)
	.loops(1)
	.id("kubejs:sturdy_mechanism")

event.custom({
	"type": "pneumaticcraft:pressure_chamber",
	"inputs": [
	  {
		"item": "create:precision_mechanism"
	  },
	  {
		"type": "pneumaticcraft:stacked_item",
		"item": "create:sturdy_sheet",
        "count": 2
	  }
	],
	"pressure": -0.6,
	"results": [
	  {
		"item": "kubejs:sturdy_mechanism"
	  }
	]
})

let obsidian_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), "kubejs:obsidian_machine", other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: "kubejs:obsidian_machine", B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), "kubejs:obsidian_machine")
	}
obsidian_machine(CR("track_station"), 1, MC("compass"))
obsidian_machine(CR("track_signal"), 1, CR("electron_tube"))
obsidian_machine(CR("track_observer"), 1, MC("observer"))
obsidian_machine(CR("controls"), 1, MC("lever"))
obsidian_machine("toms_storage:ts.storage_terminal", 1, ("create_sa:vault_component"))
//气动
obsidian_machine(PC('air_compressor'), 1, MC('furnace'))
obsidian_machine(PC('fluid_mixer'), 1, CR('whisk'))
obsidian_machine(PC('etching_tank'), 1, TE('#glass/hardened'))
obsidian_machine(PC('thermopneumatic_processing_plant'), 1, CR('blaze_burner'))
obsidian_machine(PC('vacuum_trap'), 1, MC('ender_eye'))
obsidian_machine(PC('amadron_tablet'), 1, PC('gps_tool'))
obsidian_machine(PC('kerosene_lamp'), 1)

event.remove({ output: 'pneumaticcraft:refinery' })
event.remove({ output: 'pneumaticcraft:refinery_output' })

//通量压缩机
event.remove({ id: PC("flux_compressor") })
event.shaped(PC('flux_compressor'), [
	' A ',
	'DCD',
	'SBS'
], {
	A: 'thermal:rf_coil',
	D: 'mekanism:basic_control_circuit',
	C: 'pneumaticcraft:advanced_pressure_tube',
	S: 'pneumaticcraft:ingot_iron_compressed',
	B: 'minecraft:blast_furnace',
})


}