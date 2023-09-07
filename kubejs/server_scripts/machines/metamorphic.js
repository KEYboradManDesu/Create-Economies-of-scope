
onEvent('recipes', event => {
    metamorphicMachine(event)
})

function metamorphicMachine(event) {
//异构合金
event.shaped(Item.of(KJ('metamorphic_alloy'), 2), [
	'SS',
	'AA'
], {
	A: KJ('#metamorphic_stones'),
	S: FA('arcane_crystal_dust')
})
event.shaped(Item.of(KJ('metamorphic_alloy'), 2), [
	'AA',
	'SS'
], {
	A: KJ('#metamorphic_stones'),
	S: FA('arcane_crystal_dust')
})

event.recipes.createMixing(Item.of(KJ('metamorphic_alloy'), 2), [KJ('#metamorphic_stones'), FA('arcane_crystal_dust')])

//腐化核心
event.recipes.createMilling([KJ('metamorphic_lich_core')], KJ('#scepters')).processingTime(1500)

event.shaped(Item.of(KJ('metamorphic_lich_rod')), [
	' FA',
	'DSE',
	'BC ',
], {
	A: KJ('metamorphic_lich_core'),
	B: BO('rune_mana'),
	C: BO('rune_earth'),
	D: BO('rune_air'),
	E: BO('rune_water'),
	F: BO('rune_fire'),
	S: BO('livingwood_twig')
})

event.shapeless(KJ('metamorphic_mechanism'), [KJ('gold_source_mechanism'), KJ('metamorphic_alloy'), KJ('metamorphic_alloy'), BO('manasteel_nugget'), BO('manasteel_nugget'), Item.of(KJ('metamorphic_lich_rod')).ignoreNBT()]).id("kubejs:metamorphic_mechanism_manual_only")
.damageIngredient(Item.of(KJ('metamorphic_lich_rod')).ignoreNBT())

//异构黄铜漏斗
event.recipes.botania.runic_altar(Item.of('create:brass_funnel', "{display:{Lore:['[\"§b放置后自动幻化为黄铜漏斗\"]'],Name:'[\"§d异构漏斗\"]'},CustomModelData:1}"), [
	CR('andesite_funnel'), 
	KJ('gold_source_mechanism'), 
	FA('arcane_crystal_block'), 
], 8000)

event.recipes.botania.runic_altar(Item.of('create:brass_funnel', "{display:{Lore:['[\"§b放置后自动幻化为黄铜漏斗\"]'],Name:'[\"§d异构漏斗\"]'},CustomModelData:1}"), [
	CR('andesite_funnel'), 
	KJ('metamorphic_mechanism')
], 4000)

let transitionalm = 'kubejs:incomplete_metamorphic_mechanism'//异构构件
	event.recipes.createSequencedAssembly([
		Item.of(KJ('metamorphic_mechanism')),
	], KJ('gold_source_mechanism'), [
		event.recipes.createDeploying(transitionalm, [transitionalm, KJ('metamorphic_alloy')]),
		event.recipes.createDeploying(transitionalm, [transitionalm, KJ('metamorphic_alloy')]),
		event.recipes.createDeploying(transitionalm, [transitionalm, BO('manasteel_nugget')]),
		event.recipes.createDeploying(transitionalm, [transitionalm, '#forge:metamorphic_lich_rods'])
	]).transitionalItem(transitionalm)
		.loops(1)
		.id('kubejs:metamorphic_mechanism')

let transitionalm2 = 'kubejs:incomplete_metamorphic_mechanism'//25%异构构件
	event.recipes.createSequencedAssembly([
		Item.of(KJ('metamorphic_mechanism')).withChance(0.25),
		Item.of(KJ('gold_source_mechanism')).withChance(0.75),
	], KJ('gold_source_mechanism'), [
		event.recipes.createPressing(transitionalm2, [transitionalm2]),
		event.recipes.createDeploying(transitionalm2, [transitionalm2, KJ('metamorphic_alloy')]),
		event.recipes.createDeploying(transitionalm2, [transitionalm2, BO('manasteel_nugget')]),
		event.recipes.createPressing(transitionalm2, [transitionalm2])
	]).transitionalItem(transitionalm2)
		.loops(3)
		.id('kubejs:metamorphic_mechanism2')

event.shaped(KJ('metamorphic_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: KJ('mana_casing'),
	S: KJ('metamorphic_mechanism')
})
let metamorphic_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:metamorphic_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:metamorphic_machine', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'kubejs:metamorphic_machine')
}

metamorphic_machine(BO('mana_distributor'), 2)
metamorphic_machine(BO('pump'), 4)
metamorphic_machine(BO('mana_distributor'), 1, MC('obsidian'))
metamorphic_machine(BO('mana_detector'), 1, MC('target'))
metamorphic_machine(BO('forest_eye'), 1, BO('mana_pearl'))
metamorphic_machine(BO('brewery'), 1, MC('brewing_stand'))
metamorphic_machine(BO('alchemy_catalyst'), 1, BO('brewery'))
metamorphic_machine('creatania:mana_generator', 1, CR('mechanical_pump'))
metamorphic_machine('creatania:mana_motor', 1, KJ('motor'))
metamorphic_machine('creatania:mana_condenser', 1, CR('propeller'))
metamorphic_machine('creatania:omnibox', 1, CR('gearbox'))

}