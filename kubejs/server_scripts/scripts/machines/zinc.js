
onEvent('recipes', event => {
	zincMachine(event)
})

function zincMachine(event) {
event.remove({ id: TC('smeltery/casting/scorched/foundry_controller') })
event.remove({ id: TC('smeltery/melting/soul/sand') })

event.recipes.createDeploying([FA('soulless_sand'), FA('soul')], [MC('soul_sand'), FA('soul_extractor')])//灵魂沙提魂
event.recipes.createSplashing([//失魂沙缠魂
	Item.of(MC('soul_sand'))
], FA('soulless_sand'))

//液态灵魂
event.recipes.createMixing(Fluid.of(TC("liquid_soul"), 500), [MC('twisting_vines'), MC('weeping_vines')]).heated()
event.recipes.createEmptying(Fluid.of(TC("liquid_soul"), 125), FA("soul"))

//焦黑炉核心
donutCraft(event, TC('foundry_controller'), TC('scorched_bricks'), KJ('infernal_mechanism'))

event.remove({ output: 'create_sa:heat_engine' })
event.replaceInput("create_sa:heat_engine",Ingredient.of(Item.of('kubejs:infernal_mechanism')).toJson())

let t = KJ('incomplete_infernal_mechanism')
event.recipes.createSequencedAssembly([
	KJ('infernal_mechanism'),
], CR('precision_mechanism'), [
	event.recipes.createFilling(t, [t, Fluid.of(TC("liquid_soul"), 500)]),
	event.recipes.createFilling(t, [t, Fluid.of(MC("lava"), 1000)]),
	event.recipes.createFilling(t, [t, Fluid.of(MC("lava"), 1000)]),
	event.recipes.createFilling(t, [t, Fluid.of(MC("lava"), 1000)])
]).transitionalItem(t)
	.loops(1)
	.id('kubejs:infernal_mechanism')

event.shaped(KJ('zinc_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: [KJ('zinc_casing'), 'create_dd:industrial_casing'],
	S: KJ('infernal_mechanism')
})

event.custom({
	type: 'thermal:press',
	ingredients: [
		Ingredient.of(TE('lead_coin', 6)),
		Ingredient.of(KJ('zinc_casing')),
	],
	result: [
		Item.of(KJ('zinc_machine'))
	],
	energy: 1000
})

let zinc_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:zinc_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:zinc_machine', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'kubejs:zinc_machine')
}

zinc_machine(TE('device_rock_gen'), 1, MC('piston'))
zinc_machine(TE('device_collector'), 1, MC('ender_pearl'))
zinc_machine(TE('device_nullifier'), 1, MC('lava_bucket'))
zinc_machine(TE('device_potion_diffuser'), 1, MC('glass_bottle'))
zinc_machine('storagedrawers:controller', 1, MC('diamond'))
zinc_machine('storagedrawers:controller_slave', 1, MC('gold_ingot'))
zinc_machine('torchmaster:megatorch', 1, MC('torch'))
zinc_machine('thermal:upgrade_augment_2', 1, MC('redstone'))
zinc_machine('create_dd:industrial_fan', 1, CR('propeller'))
zinc_machine('create_dd:superheating_sail', 1)

zinc_machine('chickens:breeder', 1, F('#seeds'))
zinc_machine('chickens:roost', 1, MC('hay_block'))

}