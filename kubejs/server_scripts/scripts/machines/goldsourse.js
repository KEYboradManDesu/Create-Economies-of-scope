
onEvent('recipes', event => {
    goldsourseMachine(event)
	flowers(event)
	manastuffs(event)
})

function goldsourseMachine(event) {
event.remove({ id: BO('pure_daisy/livingwood') })

//event.recipes.botania.mana_infusion(FA("arcane_gold_ingot"), MC('gold_ingot'), 6000)//神秘金锭
event.recipes.botania.mana_infusion('upgrade_aquatic:polar_kelp', MC('kelp'), 100000)//极光海带

//黄兰花
event.recipes.botania.petal_apothecary(FA("yellow_orchid"), [BO("yellow_petal"), BO("yellow_petal"), BO("yellow_petal"), BO("yellow_petal"), BO("yellow_petal"), BO("yellow_petal")])
//金兰花
event.recipes.botania.petal_apothecary(FA("golden_orchid_seeds"), [FA("yellow_orchid"), 'occultism:datura_seeds', FA("arcane_gold_nugget"), FA("arcane_gold_nugget"), FA("arcane_gold_nugget"), FA("arcane_gold_nugget"), FA("arcane_gold_nugget")])

//符文粉
event.recipes.createMilling([KJ('rune_dust', 3)], FA('rune')).processingTime(700)
event.recipes.createCrushing([KJ('rune_dust', 4), Item.of(KJ("rune_dust"), 2).withChance(0.75)], FA('rune')).processingTime(500)
event.recipes.thermal.pulverizer([KJ('rune_dust', 8)], FA('rune')).energy(10000)
//还原
event.blasting(FA('rune'), KJ('rune_dust'))

//娜迦鳞粉
event.recipes.createMilling([KJ('naga_dust', 16)], 'twilightforest:naga_scale').processingTime(700)
event.recipes.createCrushing([KJ('naga_dust', 24), Item.of(KJ("naga_dust"), 6).withChance(0.75)], 'twilightforest:naga_scale').processingTime(500)
event.recipes.thermal.pulverizer([KJ('naga_dust', 32)], 'twilightforest:naga_scale').energy(10000)
//鳞片再生
event.recipes.bloodmagic.altar('twilightforest:naga_scale', KJ('naga_dust')).upgradeLevel(2).altarSyphon(4000).consumptionRate(400).drainRate(10)

event.shapeless(KJ('gold_source_mechanism'), [KJ('naga_dust'), BO('livingwood_planks_slab'), KJ('arcane_golden_sheet'), FA('arcane_gold_nugget'), FA('arcane_gold_nugget')]).id("kubejs:gold_source_mechanism_manual_only")

let transitionalS = 'kubejs:incomplete_gold_source_mechanism'//25%金源构件
	event.recipes.createSequencedAssembly([
		Item.of(KJ("gold_source_mechanism")).withChance(0.25),
		Item.of(KJ("arcane_golden_sheet")).withChance(0.75),
	], BO('livingwood_planks_slab'), [
		event.recipes.createDeploying(transitionalS, [transitionalS, KJ('rune_dust')]),
		event.recipes.createDeploying(transitionalS, [transitionalS, FA('arcane_gold_nugget')]),
		event.recipes.createDeploying(transitionalS, [transitionalS, FA('arcane_gold_nugget')]),
		event.recipes.createDeploying(transitionalS, [transitionalS, FA('arcane_gold_nugget')])
	]).transitionalItem(transitionalS)
		.loops(3)
		.id('kubejs:gold_source_mechanism')

let transitionalS2 = 'kubejs:incomplete_gold_source_mechanism'//100%金源构件
	event.recipes.createSequencedAssembly([
		Item.of(KJ("gold_source_mechanism"))
	], BO('livingwood_planks_slab'), [
		event.recipes.createDeploying(transitionalS2, [transitionalS2, KJ('naga_dust')]),
		event.recipes.createDeploying(transitionalS2, [transitionalS2, KJ('arcane_golden_sheet')]),
		event.recipes.createDeploying(transitionalS2, [transitionalS2, F('#saws')])
	]).transitionalItem(transitionalS2)
		.loops(1)
		.id('kubejs:gold_source_mechanism2')

event.recipes.botania.runic_altar(KJ("gold_source_mechanism", 2), [//200%金源构件
	BO('livingwood_planks_slab'), 
	KJ("arcane_golden_sheet"), 
	KJ('naga_dust')
], 3500)

event.shaped(KJ('gold_source_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: KJ('gold_source_casing'),
	S: KJ('gold_source_mechanism')
})
event.shaped(BO('mana_spreader'), [
	'PPP',
	'PA ',
	'PPP'
], {
	P: BO('#livingwood_logs'),
	A: KJ('living_core')
})	
let gold_source_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:gold_source_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:gold_source_machine', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'kubejs:gold_source_machine')
}

//gold_source_machine(KJ('life_gold_source'), 1)
gold_source_machine(BO('bellows'), 4)
gold_source_machine(BO('open_crate'), 4)
gold_source_machine(BO('mana_spreader'), 8, KJ('living_core'))
gold_source_machine(BO('turntable'), 1, CR('turntable'))
}

function flowers(event) {
//金源之魂
event.recipes.botania.mana_infusion(KJ('life_gold_source', 2), KJ('gold_source_machine'), 8000)
event.custom({
	"type": "occultism:spirit_fire",
	"ingredient": { "tag": KJ("gold_source_machine") },
	"result": { "item": KJ("life_gold_source") }
})


//活力核心
event.shaped(KJ('living_core'), [
	'PAP'
], {
	P: KJ('arcane_golden_sheet'),
	A: F('#gems')
})

//产能花
event.remove({ output: BO('endoflame') })//火红莲
event.recipes.botania.petal_apothecary(BO('endoflame'), [
	KJ("life_gold_source"), 
	BO('#petals/light_gray'), 
	BO('#petals/red'),
	BO('#petals/brown'), 
	BO('#petals/brown')])

/*event.remove({ output: BO('hydroangeas') })//水绣球
event.recipes.botania.petal_apothecary(BO('hydroangeas'), [
	KJ("life_gold_source"), 
	BO('#petals/cyan'), 
	BO('#petals/blue')])*/

//功能花
event.remove({ output: BO('hopperhock') })//漏斗花
event.recipes.botania.petal_apothecary(BO('hopperhock'), [
	KJ("life_gold_source"), 
	BO('redstone_root'), 
	BO('#petals/gray'),
	BO('#petals/light_gray')])

event.remove({ output: BO('manastar') })//魔力星
event.recipes.botania.petal_apothecary(BO('manastar'), [
	KJ("life_gold_source"), 
	BO('#petals/red'),
	BO('#petals/green'),
	BO('#petals/cyan'),
	BO('#petals/light_blue')])

event.remove({ output: BO('daffomill') })//扇水仙
event.recipes.botania.petal_apothecary(BO('daffomill'), [
	KJ("life_gold_source"), 
	BO('redstone_root'), 
	BO('rune_air'),
	BO('#petals/yellow'),
	BO('#petals/brown'),
	BO('#petals/white')])

event.remove({ output: BO('tangleberrie') })//束缚莓
event.recipes.botania.petal_apothecary(BO('tangleberrie'), [
	KJ("life_gold_source"), 
	BO('rune_earth'),
	BO('rune_air'),
	BO('#petals/cyan'),
	BO('#petals/cyan'),
	BO('#petals/gray'),
	BO('#petals/light_gray')])

event.remove({ output: BO('medumone') })//石化草
event.recipes.botania.petal_apothecary(BO('medumone'), [
	KJ("life_gold_source"), 
	BO('redstone_root'),
	BO('rune_earth'),
	BO('#petals/brown'),
	BO('#petals/brown'),
	BO('#petals/gray')])

event.remove({ output: 'creatania:blazunia' })//烈焰轰花
event.recipes.botania.petal_apothecary('creatania:blazunia', [
	KJ("life_gold_source"), 
	BO('rune_gluttony'),
	BO('#petals/yellow'),
	BO('#petals/yellow'),
	BO('#petals/red'),
	BO('#petals/light_blue')])

event.remove({ output: BO('marimorphosis') })//异构花
event.recipes.botania.petal_apothecary(BO('marimorphosis'), [
	KJ("life_gold_source"), 
	BO('redstone_root'),
	BO('rune_earth'),
	BO('rune_mana'),
	BO('#petals/green'),
	BO('#petals/yellow'),
	BO('#petals/red'),
	BO('#petals/light_blue')])

}

function manastuffs(event) {
//纯净魔力
event.custom({
	"type": "botania:pure_daisy",
	"input": {
	  "type": "block",
	  "block": "creatania:mana/blocks/corrupt"
	},
	"time": 6,
	"output": {
	  "name": "creatania:pure_mana"
	}
})

////魔力尘
//魔力灌注
event.recipes.botania.mana_infusion(BO('mana_powder'), KJ('rune_dust'), 1000)
//磨粉
event.recipes.createMilling([BO('mana_powder', 4)], BO('mana_pearl')).processingTime(150)
//魔力结晶
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"amount": 1000,
			"fluid": "creatania:pure_mana"
		}
	],
	"results": [
		{
		  "item": "kubejs:mana_crystal"
		}
	],
	"processingTime": 90,
	"heatRequirement": "lowheated"
})
event.shaped(BO('mana_powder'), [
	'RR',
	'RR'
], {
	R: KJ('mana_crystal')
})

////魔力珍珠
//魔力灌注
event.recipes.botania.mana_infusion(BO('mana_pearl'), [MC('ender_pearl'), MC('ender_eye')], 4500)
//动力搅拌
event.recipes.createMixing([Item.of(BO('mana_pearl')), Item.of(KJ('rune_dust', 4))], [BO('mana_powder', 4), [MC('ender_pearl'), MC('ender_eye')]])
event.recipes.createMixing([Item.of(BO('mana_pearl')), Item.of(KJ('rune_dust', 4))], [BO('mana_powder', 4), FA('ender_pearl_fragment', 3)])
		
}