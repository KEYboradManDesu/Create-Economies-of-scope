
onEvent('recipes', event => {
	pneumaticMachine(event)
})

function pneumaticMachine(event) {
//混凝土流体
event.remove({ id: 'createindustry:mixing/liquid_concrete' })
event.replaceInput({ id: TE("machines/smelter/smelter_gravel") }, F('#gravel'), MC('gravel'))
event.remove({ id: IM('mixer/concrete') })
event.remove({ id: IM('crafting/concrete') })
event.recipes.createMilling([Item.of(IM('slag_gravel')).withChance(0.85)], Item.of(TE("slag")))//矿渣砂砾
event.recipes.createMilling([Item.of(IM('slag_gravel')), Item.of(IM('slag_gravel', 2)).withChance(0.75)], Item.of(TE("rich_slag")))
event.recipes.immersiveengineeringCrusher(IM('slag_gravel', 3), TE("rich_slag"))

event.recipes.createMixing(Fluid.of(IM('concrete'), 750), [Item.of(IM('slag_gravel', 1)), Fluid.of(KJ('fine_sand'), 150), Fluid.of(MC('water'), 500)])
event.recipes.createMixing(Fluid.of(IM('concrete'), 1000), [Item.of(IM('slag_gravel', 1)), Item.of('createindustry:cement', 1), Fluid.of(MC('water'), 500)])
event.recipes.createMixing(Fluid.of(IM('concrete'), 1000), [Item.of(F('#concrete_powders', 1)), Item.of('createindustry:cement', 1), Fluid.of(MC('water'), 500)])

event.stonecutting('createindustry:concrete', 'immersiveengineering:concrete')
event.stonecutting('immersiveengineering:concrete', 'createindustry:concrete')
event.replaceInput('createindustry:concrete',Ingredient.of("immersiveengineering:concrete"));

//钢筋捆
event.remove({ id: IM('crafting/stick_steel') })
event.shaped(KJ('rebar_bunch'), [
	'B  ',
	' B ',
	'  B'
], {
	B: 'createindustry:rebar'
})
event.shaped('3x createindustry:rebar', [
	'B',
], {
	B: KJ('rebar_bunch')
})

//强化石
event.remove({ id: PC('reinforced_stone') })
event.custom({
	"type": "tconstruct:casting_basin",
	"cast": { "item": 'kubejs:rebar_bunch' },
	"cast_consumed": true,
	"fluid": {
		"name": "immersiveengineering:concrete",
		"amount": 1000
	},
	"result": 'pneumaticcraft:reinforced_stone',
	"cooling_time": 150
})

//刨花板
event.recipes.createMixing(['createindustry:chipwood'], ['createindustry:sawdust_block', Fluid.of(TC("earth_slime"), 50)])

//青金合金
event.remove({ id: 'create_dd:crafting/lapis_alloy' })
event.shaped(Item.of('create_dd:lapis_alloy', 2), [
	'SS',
	'AA'
], {
	A: 'minecraft:lapis_lazuli',
	S: 'thermal:tin_nugget'
})
event.shaped(Item.of('create_dd:lapis_alloy', 2), [
	'AA',
	'SS'
], {
	A: 'minecraft:lapis_lazuli',
	S: 'thermal:tin_nugget'
})

event.recipes.createMixing(Item.of('create_dd:lapis_alloy', 2), ['minecraft:lapis_lazuli', 'thermal:tin_nugget'])

//集成芯片
event.remove({ id: 'create_dd:sequenced_assembly/integrated_circuit' })
let ic = 'create_dd:incomplete_integrated_circuit'//100%集成芯片
	event.recipes.createSequencedAssembly([
		'create_dd:integrated_circuit',
	], 'create_dd:lapis_sheet', [
		event.recipes.createDeploying(ic, [ic, CR('brass_nugget')]),
		event.recipes.createDeploying(ic, [ic, MEK('nugget_osmium')]),
		event.recipes.createDeploying(ic, [ic, CR('brass_nugget')])
	]).transitionalItem(ic)
		.loops(3)
		.id('kubejs:integrated_circuit1')

let ic2 = 'create_dd:incomplete_integrated_circuit'//更便宜的100%集成芯片
	event.recipes.createSequencedAssembly([
		'create_dd:integrated_circuit',
	], 'create_dd:lapis_sheet', [
		event.recipes.createFilling(ic2, [ic2, Fluid.of(IM("redstone_acid"), 100)]),
		event.recipes.createDeploying(ic2, [ic2, CR('brass_nugget')]),
		event.recipes.createDeploying(ic2, [ic2, MEK('nugget_osmium')]),
		event.recipes.createDeploying(ic2, [ic2, CR('brass_nugget')]),
	]).transitionalItem(ic2)
		.loops(1)
		.id('kubejs:integrated_circuit2')
		
let ic3 = 'create_dd:incomplete_integrated_circuit'//40%集成芯片
	event.recipes.createSequencedAssembly([
	 Item.of('create_dd:integrated_circuit').withChance(0.4),
     Item.of('create_dd:lapis_alloy').withChance(0.6),
	], 'create_dd:lapis_sheet', [
		event.recipes.createDeploying(ic3, [ic3, CR('brass_nugget')])
	]).transitionalItem(ic3)
		.loops(9)
		.id('kubejs:integrated_circuit3')

event.remove({ output: "createindustry:engine_chamber" })
event.recipes.createMechanicalCrafting(Item.of('createindustry:engine_chamber'), [
	'A',
	'B',
], {
	A: 'createindustry:spark_plug',
	B: KJ('iron_compressed_sheet')
})

event.remove({ id: 'create_sa:steam_engine_recipe' })
let se = 'create_sa:incomplete_steam_engine'
	event.recipes.createSequencedAssembly([
		'create_sa:steam_engine',
	], CR('precision_mechanism'), [
		event.recipes.createDeploying(se, [se, 'createindustry:engine_chamber']),
		event.recipes.createDeploying(se, [se, 'createindustry:engine_chamber']),
		event.recipes.createFilling(se, [se, Fluid.of("mekanism:steam", 500)]),
		event.recipes.createDeploying(se, [se, 'create_dd:integrated_circuit'])
	]).transitionalItem(se)
		.loops(1)
		.id('kubejs:steam_engine1')

let se2 = 'create_sa:incomplete_steam_engine'
	event.recipes.createSequencedAssembly([
		'create_sa:steam_engine',
	], CR('precision_mechanism'), [
		event.recipes.createDeploying(se2, [se2, 'createindustry:engine_chamber']),
		event.recipes.createDeploying(se2, [se2, 'createindustry:engine_chamber']),
		event.recipes.createDeploying(se2, [se2, 'createindustry:turbine_blade']),
		event.recipes.createDeploying(se2, [se2, 'create_dd:integrated_circuit'])
	]).transitionalItem(se2)
		.loops(1)
		.id('kubejs:steam_engine2')

event.custom({
	type: 'thermal:press',
	ingredients: [
		Ingredient.of(TE('lead_coin', 8)),
		Ingredient.of('compressedcreativity:compressed_iron_casing'),
	],
	result: [
		Item.of(KJ('pneumatic_machine'))
	],
	energy: 1000
})

event.shaped(KJ('pneumatic_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: 'compressedcreativity:compressed_iron_casing',
	S: 'create_sa:steam_engine'
})

let pneumatic_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:pneumatic_machine', other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:pneumatic_machine', B: other_ingredient })
		}
		else
		event.stonecutting(Item.of(id, amount), 'kubejs:pneumatic_machine')
	}
	
	//pneumatic_machine(PC('manual_compressor'))
	pneumatic_machine(PC('heat_frame', 3))
	pneumatic_machine(PC('thermopneumatic_processing_plant'), 1, CR('blaze_burner'))
	pneumatic_machine(PC('liquid_compressor'), 1, CR('fluid_tank'))
	pneumatic_machine(PC('air_compressor'), 1, MC('furnace'))
	pneumatic_machine(PC('etching_tank'), 1, CR('spout'))
	pneumatic_machine(PC('assembly_io_unit_import', 1))
	pneumatic_machine(PC('assembly_io_unit_export', 1))
	pneumatic_machine(PC('assembly_platform'), 1, CR('depot'))
	pneumatic_machine(PC('spawner_extractor'), 1, PC('spawner_agitator'))
	pneumatic_machine(PC('reinforced_chest'), 1, F('#chests/wooden'))
	pneumatic_machine(PC('refinery'), 1, TE('invar_gear'))
	pneumatic_machine(PC('refinery_output'), 1, TE('diamond_gear'))
	pneumatic_machine(PC('fluid_mixer'), 1, CR('whisk'))
	pneumatic_machine(PC('vacuum_trap'), 1, 'forbidden_arcanus:dark_matter')
	pneumatic_machine(PC('flux_compressor'), 1, TE('rf_coil'))

}