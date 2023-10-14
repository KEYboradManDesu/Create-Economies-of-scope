
onEvent('recipes', event => {
	andesiteMachine(event)
	inductiveMachine(event)
})

function andesiteMachine(event) {

event.shapeless(KJ('kinetic_mechanism'), [F('#saws'), CR('cogwheel'), CR('andesite_alloy'), '#minecraft:logs']).id("kubejs:kinetic_mechanism_manual_only")
.damageIngredient(Item.of(KJ('stone_saw'))).damageIngredient(Item.of(KJ('iron_saw'))).damageIngredient(Item.of(KJ('diamond_saw'))).damageIngredient(Item.of(KJ('netherite_saw')))

//木屑处理
event.remove({ id: "createindustry:crafting/sawdust_from_block" })
event.remove({ id: "createindustry:compacting/sawdust_block" })
event.recipes.createCompacting(TC("pattern"), [F("#sawdust"), F("#sawdust"), F("#sawdust")])
event.recipes.createCompacting('createindustry:sawdust_block', [F("#sawdust"), F("#sawdust"), F("#sawdust"), F("#sawdust"), F("#sawdust"), F("#sawdust")])

event.recipes.createCompacting(MC("dripstone_block"), [MC("calcite"), MC("calcite"), MC("calcite")])

/*let transitionalA = 'kubejs:incomplete_kinetic_mechanism'//85%动力构件
	event.recipes.createSequencedAssembly([
		Item.of(KJ("kinetic_mechanism")).withChance(0.85),
		Item.of(KJ("handmade_kinetic_mechanism")).withChance(0.15),
	], '#minecraft:wooden_slabs', [
		event.recipes.createDeploying(transitionalA, [transitionalA, CR('andesite_alloy')]),
		event.recipes.createDeploying(transitionalA, [transitionalA, CR('andesite_alloy')]),
		event.recipes.createDeploying(transitionalA, [transitionalA, F('#saws')])
	]).transitionalItem(transitionalA)
		.loops(1)
		.id('kubejs:kinetic_mechanism')

let transitionalB = 'kubejs:incomplete_kinetic_mechanism'//动力构件
	event.recipes.createSequencedAssembly([
		Item.of(KJ("kinetic_mechanism"))
	], 'tconstruct:pattern', [
		event.recipes.createDeploying(transitionalB, [transitionalB, CR('andesite_alloy')]),
		event.recipes.createDeploying(transitionalB, [transitionalB, CR('andesite_alloy')]),
		event.recipes.createDeploying(transitionalB, [transitionalB, F('#saws')])
	]).transitionalItem(transitionalB)
		.loops(1)
		.id('kubejs:kinetic_mechanism_2')

let transitionalc = 'kubejs:incomplete_kinetic_mechanism'//200%动力构件
	event.recipes.createSequencedAssembly([
		Item.of(KJ("kinetic_mechanism", 2)).withChance(0.45),
		Item.of(KJ("handmade_kinetic_mechanism")).withChance(0.55),
	], 'tconstruct:pattern', [
		event.recipes.createDeploying(transitionalc, [transitionalc, KJ('andesite_alloy_ingot')]),
		event.recipes.createDeploying(transitionalc, [transitionalc, F('#saws')])
	]).transitionalItem(transitionalc)
		.loops(1)
		.id('kubejs:kinetic_mechanism_3')*/

event.custom({
	type: 'thermal:press',
	ingredients: [
		Ingredient.of(TE('electrum_coin', 3)),
		Ingredient.of(CR('andesite_casing')),
	],
	result: [
		Item.of(KJ('andesite_machine'))
	],
	energy: 1000
})

	event.shaped(KJ('andesite_machine'), [
			'SSS',
			'SCS',
			'SSS'
		], {
			C: CR('andesite_casing'),
			S: KJ('kinetic_mechanism')
		})

	let andesite_machine = (id, amount, other_ingredient) => {
			event.remove({ output: id })
			if (other_ingredient) {
				event.smithing(Item.of(id, amount), 'kubejs:andesite_machine', other_ingredient)
				event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:andesite_machine', B: other_ingredient })
			}
			else
				event.stonecutting(Item.of(id, amount), 'kubejs:andesite_machine')
		}

	andesite_machine('create:portable_storage_interface', 2)
	andesite_machine('create:encased_fan', 1, CR('propeller'))
	andesite_machine('create:mechanical_press', 1, MC('iron_block'))
	andesite_machine('waterstrainer:strainer_base', 1, MC('iron_bars'))
	andesite_machine('thermal:device_fisher', 1, AC('iron_hook'))
	andesite_machine('create:mechanical_mixer', 1, CR('whisk'))
	andesite_machine('create:mechanical_drill', 1, TE('drill_head'))
	andesite_machine('create:mechanical_saw', 1, TE('saw_blade'))
	andesite_machine('create:deployer', 1, CR('brass_hand'))
	andesite_machine('create:mechanical_harvester', 2)
	andesite_machine('create:mechanical_plough', 2)
	andesite_machine('thermal:device_tree_extractor', 1, MC('bucket'))
	andesite_machine(AE2('sky_compass'), 1, AE2('charged_certus_quartz_crystal'))
	andesite_machine(AE2('charger'), 1, F('#gems/fluix'))
	andesite_machine('thermal:dynamo_stirling', 1, TE('rf_coil'))
	andesite_machine('thermal:device_hive_extractor', 1, F('#shears'))
	andesite_machine('thermal:device_composter', 1, MC('composter'))
	andesite_machine('create:andesite_funnel', 4)
	andesite_machine('create:andesite_tunnel', 4)
	andesite_machine('kubejs:pipe_module_utility', 4)
	andesite_machine('createaddition:rolling_mill', 1, ('create:shaft'))
	andesite_machine('create:mechanical_roller', 1, CR('crushing_wheel'))
	andesite_machine('create:contraption_controls', 1, MC('#buttons'))
	andesite_machine('create:rope_pulley', 1, SP('#ropes'))


	event.remove({ output: TE('drill_head') })
	event.shaped(TE('drill_head'), [
			'NN ',
			'NLP',
			' PL'
		], {
			N: MC('iron_nugget'),
			P: CR('iron_sheet'),
			L: TE('lead_ingot')
		})
	
	event.remove({ output: TE('saw_blade') })
	event.shaped(TE('saw_blade'), [
			'NPN',
			'PLP',
			'NPN'
		], {
			N: MC('iron_nugget'),
			P: CR('iron_sheet'),
			L: TE('lead_ingot')
		})	
}

function inductiveMachine(event) {
//移除物流构件
event.remove({ output: 'create_dd:inductive_mechanism' })	
event.remove({ output: 'create_dd:crafting_inductive_mechanism1' })	
event.remove({ output: 'create_dd:crafting_inductive_mechanism2' })	
event.remove({ input: 'create_dd:inductive_mechanism' })

let im = 'create_dd:incomplete_inductive_mechanism'
	event.recipes.createSequencedAssembly([
		Item.of('create_dd:inductive_mechanism')
	], 'create_dd:andesite_sheet', [
		event.recipes.createDeploying(im, [im, KJ('kinetic_mechanism')]),
		event.recipes.createDeploying(im, [im, KJ('zinc_wire')]),
		event.recipes.createDeploying(im, [im, F('#prospector_tool')])
	]).transitionalItem(im)
		.loops(1)
		.id('kubejs:inductive_mechanism')

event.shapeless('create_dd:inductive_mechanism', [F('#prospector_tool'), 'create_dd:andesite_sheet', KJ('kinetic_mechanism'), KJ('zinc_wire')]).id("kubejs:inductive_mechanism_manual_only")
.damageIngredient(Item.of(F('#prospector_tool')))


event.shaped(KJ('inductive_machine'), [
	'SBS',
	'BCB',
	'SBS'
	], {
		C: CR('andesite_casing'),
		S: KJ('kinetic_mechanism'),
		B: 'create_dd:inductive_mechanism',
	})
event.shaped(KJ('inductive_machine'), [
	'SBS',
	'BCB',
	'SBS'
	], {
		C: CR('andesite_casing'),
		B: KJ('kinetic_mechanism'),
		S: 'create_dd:inductive_mechanism',
	})

event.remove({ output: 'create_dd:kinetic_motor' })

let inductive_machine = (id, amount, other_ingredient) => {
			//event.remove({ output: id })
			if (other_ingredient) {
				event.smithing(Item.of(id, amount), 'kubejs:inductive_machine', other_ingredient)
				event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:inductive_machine', B: other_ingredient })
			}
			else
				event.stonecutting(Item.of(id, amount), 'kubejs:inductive_machine')
		}

inductive_machine('create:encased_chain_drive', 4)
inductive_machine('create:gearbox', 6)
inductive_machine('create:vertical_gearbox', 6)
inductive_machine('create_dd:kinetic_motor', 1)
inductive_machine('create_dd:deforester_saw', 1, CR('mechanical_saw'))
}
