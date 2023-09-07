onEvent('recipes', event => {
	andesite_alloy(event)//安山合金
	granite_alloy(event)//花岗合金
	diorite_alloy(event)//闪长合金
	steel(event)//钢
	ManaSteel(event)//魔力钢
	metal(event)
})

function andesite_alloy(event) {
event.remove({ id: TC('compat/create/andesite_alloy_iron') })
event.remove({ id: CR('crafting/materials/andesite_alloy') })
event.remove({ id: CR('crafting/materials/andesite_alloy_from_zinc') })
event.remove({ id: CR('mixing/andesite_alloy') })
event.remove({ id: CR('mixing/andesite_alloy_from_zinc') })
event.remove({ id: TE('compat/create/smelter_create_alloy_andesite_alloy') })
event.remove({ id: TE('compat/create/smelter_create_alloy_andesite_alloy') })
event.remove({ id: TC('compat/create/andesite_alloy_zinc') })
event.remove({ id: TC('compat/create/andesite_alloy_iron') })
event.remove({ output: AP('algal_brick') })
event.remove({ id: AP('algal_blend') })

event.smelting(AP('algal_brick'), AP('algal_blend')).xp(0).cookingTime(120)

//安山合金复杂合成
event.shaped(Item.of(KJ('andesite_alloy_ingot')), [
	'SSS',
	'SAB',
	'BBB',
], {
	S: 'architects_palette:algal_brick',
	B: 'minecraft:andesite',
	A: ['minecraft:iron_ingot', 'create:zinc_ingot', 'thermal:nickel_ingot']
})
event.shaped(Item.of(KJ('andesite_alloy_ingot')), [
	'BBB',
	'BAS',
	'SSS',
], {
	S: 'architects_palette:algal_brick',
	B: 'minecraft:andesite',
	A: ['minecraft:iron_ingot', 'create:zinc_ingot', 'thermal:nickel_ingot']
})
event.shapeless(CR('andesite_alloy', 2), [F('#saws'), KJ('andesite_alloy_ingot')]).id("kubejs:andesite_alloy_manual_only")
.damageIngredient(Item.of(KJ('stone_saw'))).damageIngredient(Item.of(KJ('iron_saw'))).damageIngredient(Item.of(KJ('diamond_saw'))).damageIngredient(Item.of(KJ('netherite_saw')))
event.recipes.createCutting(CR('andesite_alloy', 2), KJ('andesite_alloy_ingot')).processingTime(150)

//安山合金
event.shaped(Item.of(AP('algal_blend'), 4), [
	'SS',
	'AA'
], {
	A: 'minecraft:clay_ball',
	S: ['minecraft:kelp', 'minecraft:seagrass', 'aquaculture:algae']
})
event.shaped(Item.of(AP('algal_blend'), 4), [
	'AA',
	'SS'
], {
	A: 'minecraft:clay_ball',
	S: ['minecraft:kelp', 'minecraft:seagrass', 'aquaculture:algae']
})


event.shaped(Item.of(AP('algal_blend'), 8), [//魔法双倍
	'SS',
	'AA'
], {
	A: 'minecraft:clay_ball',
	S: 'upgrade_aquatic:polar_kelp'
})
event.shaped(Item.of(AP('algal_blend'), 8), [
	'AA',
	'SS'
], {
	A: 'minecraft:clay_ball',
	S: 'upgrade_aquatic:polar_kelp'
})

	/*event.shaped(Item.of(CR('andesite_alloy'), 2), [
		'SS',
		'AA'
	], {
		A: ['minecraft:andesite', MC('andesite')],
		S: AP('algal_brick')
	})
	event.shaped(Item.of(CR('andesite_alloy'), 2), [
		'AA',
		'SS'
	], {
		A: ['minecraft:andesite', MC('andesite')],
		S: AP('algal_brick')
	})*/
event.recipes.immersiveengineering.alloy('create:andesite_alloy', 'architects_palette:algal_brick', '2x minecraft:andesite')
event.recipes.immersiveengineering.alloy('create:andesite_alloy', 'architects_palette:algal_blend', '2x minecraft:andesite')
event.recipes.immersiveengineering.alloy('kubejs:andesite_alloy_ingot', 'create:andesite_alloy', 'create:andesite_alloy')

event.recipes.createMixing(Item.of(AP('algal_blend'), 2), ['minecraft:clay_ball', ['minecraft:kelp', 'minecraft:seagrass', 'aquaculture:algae']])
event.recipes.createMixing(Item.of(AP('algal_blend'), 8), ['minecraft:clay_ball', 'upgrade_aquatic:polar_kelp'])
event.recipes.createMixing(Item.of(CR('andesite_alloy'), 2), [AP('algal_brick'), ['minecraft:andesite', CR('andesite_cobblestone')]])
}

function granite_alloy(event) {
event.shaped(Item.of(KJ('granite_alloy'), 2), [
	'SS',
	'AA'
], {
	A: ['minecraft:granite'],
	S: [MC('iron_nugget'), TE('nickel_nugget')]
})
event.shaped(Item.of(KJ('granite_alloy'), 2), [
	'AA',
	'SS'
], {
	A: ['minecraft:granite'],
	S: [MC('iron_nugget'), TE('nickel_nugget')]
})

event.recipes.createMixing(Item.of(KJ('granite_alloy'), 2), ['minecraft:granite', [MC('iron_nugget'), TE('nickel_nugget')]])
}

function diorite_alloy(event) {
event.smelting(SP('ash_brick'), F('#dusts/ash')).xp(0).cookingTime(120)
event.shaped(Item.of(KJ('diorite_alloy'), 2), [
	'SS',
	'AA'
], {
	A: ['minecraft:diorite'],
	S: [SP('ash_brick')]
})
event.shaped(Item.of(KJ('diorite_alloy'), 2), [
	'AA',
	'SS'
], {
	A: ['minecraft:diorite'],
	S: [SP('ash_brick')]
})

event.recipes.createMixing(Item.of(KJ('diorite_alloy'), 2), ['minecraft:diorite', SP('ash_brick')])
//event.recipes.createMixing(Item.of(SP('ash'), 6), ('#minecraft:logs_that_burn')).heated()
//event.recipes.createMixing(Item.of(SP('ash'), 2), ('#minecraft:planks')).heated()
}

function steel(event) {
event.remove({ output: 'createindustry:steel_block' })
event.remove({ output: 'createbigcannons:cast_iron_ingot' })
event.remove({ id: ('createindustry:mixing/steel_ingot' )})
event.remove({ id: ('create_dd:compacting/steel_ingot' )})
event.remove({ id: TE('machines/smelter/smelter_alloy_steel') })
event.remove({ id: TC('smeltery/alloys/molten_pig_iron') })
event.remove({ id: ('createaddition:compat/tconstruct/pig_iron') })
event.remove({ id: ('createaddition:compat/tconstruct/pig_iron_2') })
event.remove({ id: ('thermal:compat/tconstruct/smelter_alloy_tconstruct_pigiron_ingot') })
event.remove({ id: 'create_dd:mixing/steel_ingot' })
event.remove({ id: 'create_dd:compacting/industrial_iron_ingot' })
event.remove({ id: 'minecraft:compacting/cast_iron_ingot' })
event.remove({ id: 'minecraft:compacting/cast_iron_block' })
event.remove({ id: 'createindustry:mixing/cast_iron_ingot' })
event.remove({ id: 'create:industrial_iron_block_from_ingots_iron_stonecutting' })
event.remove({ id: 'beyond_earth:steel_ingot_blasting' })

//铸铁
event.recipes.createMixing(Fluid.of('createbigcannons:molten_cast_iron', 90), [
	Fluid.of(TC('molten_iron'), 90), 
	F('#dusts/charcoal')
]).heated().processingTime(90)

event.custom({
	"type": "tconstruct:casting_basin",
	"fluid": { "name": "createbigcannons:molten_cast_iron", "amount": 810 },
	"result": { "item": 'create:industrial_iron_block' },
	"cooling_time": 405
})

//熔融铸铁
event.custom({
	"type": "tconstruct:melting",
	"ingredient": {
		"tag": "forge:ingots/cast_iron"
	},
	"result": {
		"fluid": "createbigcannons:molten_cast_iron",
		"amount": 90
	},
	"temperature": 790,
	"time": 45
})
event.custom({
	"type": "tconstruct:melting",
	"ingredient": {
		"tag": "forge:plates/cast_iron"
	},
	"result": {
		"fluid": "createbigcannons:molten_cast_iron",
		"amount": 90
	},
	"temperature": 790,
	"time": 45
})
event.custom({
	"type": "tconstruct:melting",
	"ingredient": {
		"tag": "forge:storage_blocks/industrial_iron"
	},
	"result": {
		"fluid": "createbigcannons:molten_cast_iron",
		"amount": 810
	},
	"temperature": 790,
	"time": 405
})
event.custom({
	"type": "tconstruct:melting",
	"ingredient": {
		"tag": "forge:nuggets/cast_iron"
	},
	"result": {
		"fluid": "createbigcannons:molten_cast_iron",
		"amount": 10
	},
	"temperature": 790,
	"time": 5
})

//生铁
event.recipes.createMixing(Fluid.of(TC('molten_pig_iron'), 180), [
	Fluid.of(TC('molten_iron'), 180), 
	Fluid.of(('create:honey'), 250), 
	'createindustry:limesand'
]).heated().processingTime(180)

event.recipes.createMixing(Fluid.of(TC('molten_pig_iron'), 180), [
	Fluid.of(TC('molten_iron'), 180), 
	Fluid.of(('tconstruct:honey'), 250), 
	'createindustry:limesand'
]).heated().processingTime(180)

event.recipes.createMixing(Fluid.of(TC('molten_pig_iron'), 180), [
	Fluid.of(TC('molten_iron'), 180), 
	Fluid.of(('create_central_kitchen:syrup'), 250), 
	'createindustry:limesand'
]).heated().processingTime(180)

event.recipes.createMixing(Fluid.of(TC('molten_pig_iron'), 180), [
	Fluid.of(TC('molten_iron'), 180), 
	Fluid.of(('tconstruct:blood'), 500), 
	'createindustry:limesand'
]).heated().processingTime(180)

event.recipes.thermal.smelter(TC("pig_iron_ingot"), ["create_dd:industrial_iron_ingot", IM("slag_gravel")]).energy(10000)
event.recipes.immersiveengineering.alloy(TC("pig_iron_ingot"), "create_dd:industrial_iron_ingot", 'tconstruct:blood_slime')
event.recipes.immersiveengineering.alloy(TC("pig_iron_ingot"), "create_dd:industrial_iron_ingot", 'minecraft:honey_block')

//生铁变钢
event.remove({ id: IM("blastfurnace/steel") })
event.remove({ id: IM("arcfurnace/steel") })
event.recipes.immersiveengineering.blast_furnace('alloyed:steel_ingot', TC('pig_iron_ingot'), TE('slag')).time(460)
event.recipes.immersiveengineering.blast_furnace('alloyed:steel_block', TC('pig_iron_block'), TE('slag_block')).time(3680)

event.recipes.createMixing([Fluid.of(TC("molten_steel"), 120), TE('slag')], [Fluid.of(TC("molten_pig_iron"), 120), F('#dusts/charcoal')]).processingTime(480)

event.recipes.thermal.smelter(['alloyed:steel_ingot', TE('rich_slag')], [TC('pig_iron_ingot'), F('#dusts/charcoal')]).energy(38000)
event.recipes.immersiveengineering.arc_furnace('3x alloyed:steel_ingot', TC('pig_iron_ingot', 3), [F('#dusts/charcoal')], TE('rich_slag')).time(400).energy(102400)
}

function ManaSteel(event) {

	//黑莲花
	event.recipes.createMixing(Item.of(BO('black_lotus')), [BO('#petals', 8), Fluid.of('creatania:pure_mana', 1000)]).heated()
	
	//魔力尘
	event.remove({ output: BO('mana_powder') })
	event.recipes.botania.mana_infusion(BO('mana_powder'), KJ('rune_dust'), 900)
	event.recipes.createMilling([BO('mana_powder', 4)], BO('mana_pearl')).processingTime(150)
	
	//魔力珍珠
	event.recipes.botania.mana_infusion(BO('mana_pearl'), [MC('ender_pearl'), MC('ender_eye')], 4000)
	event.recipes.createMixing(Item.of(BO('mana_pearl')), [BO('mana_powder', 4), [MC('ender_pearl'), MC('ender_eye')]])
	event.recipes.createMixing(Item.of(BO('mana_pearl')), [BO('mana_powder', 4), FA('ender_pearl_fragment', 3)])
	
	//魔力钢
	event.remove({ id: BO('mana_infusion/manasteel') })
	event.recipes.botania.mana_infusion(BO('manasteel_ingot'), MC('iron_ingot'), 6000)
	event.recipes.botania.mana_infusion(KJ('raw_mana_steel'), MC('raw_iron'), 4000)
	
	event.recipes.createMixing(Fluid.of('materialis:molten_manasteel', 90), [Fluid.of(TC('molten_iron'), 90), Fluid.of('creatania:pure_mana', 1000)]).processingTime(90)
	event.recipes.createMixing(Fluid.of('materialis:molten_manasteel', 180), [Fluid.of(TC('molten_iron'), 180), BO('mana_pearl')]).processingTime(180)
	event.recipes.createMixing(Fluid.of('materialis:molten_manasteel', 180), [Fluid.of(TC('molten_iron'), 180), BO('mana_powder', 4)]).processingTime(180)
	}

function metal(event) {
event.remove({ id: "createbigcannons:compacting/iron_to_cast_iron_ingot" })
event.remove({ id: TC('smeltery/alloys/molten_bronze') })
event.remove({ id: TC('smeltery/alloys/molten_brass') })
event.remove({ id: TC('smeltery/alloys/molten_invar') })
event.remove({ id: TC('smeltery/alloys/molten_electrum') })
event.remove({ id: TC('smeltery/alloys/molten_constantan') })
event.remove({ id: TC('smeltery/alloys/molten_rose_gold') })
event.remove({ id: TC('smeltery/alloys/molten_enderium') })
event.remove({ id: CR('mixing/brass_ingot') })
event.remove({ id: 'alloyed:mixing/bronze_ingot' })
event.remove({ id: 'alloyed:mixing/steel_ingot' })
event.remove({ id: 'alloyed:mixing/bronze_ingot_x3' })
event.remove({ id: 'createaddition:compat/immersiveengineering/constantan' })
event.remove({ id: 'createaddition:compat/immersiveengineering/electrum' })
event.remove({ id: 'createaddition:compat/tconstruct/rose_gold' })
event.remove({ id: 'createbigcannons:melting/melt_bronze_ingot' })
event.remove({ id: 'createbigcannons:melting/melt_bronze_nugget' })
event.remove({ id: 'createbigcannons:melting/melt_bronze_block' })
event.remove({ id: 'createbigcannons:melting/melt_steel_ingot' })
event.remove({ id: 'createbigcannons:melting/melt_steel_nugget' })
event.remove({ id: 'createbigcannons:melting/melt_steel_block' })
event.remove({ id: 'minecraft:netherite_ingot' })
event.remove({ id: 'raw_netherite:thermal/netherite_ingot_fire_charge' })
event.remove({ id: IM('alloysmelter/brass') })
event.remove({ id: IM('blastfurnace/steel_block') })
event.remove({ id: 'twilightforest:material/raw_ironwood' })
event.replaceOutput({ id: IM("alloysmelter/invar") }, F('#ingots/invar'), KJ('nickel_compound'))

event.remove({ type: MC("crafting_shapeless"), output: TE('constantan_dust') })
event.remove({ type: MC("crafting_shapeless"), output: TE('electrum_dust') })
event.remove({ type: MC("crafting_shapeless"), output: TE('lumium_dust') })
event.remove({ type: MC("crafting_shapeless"), output: TE('signalum_dust') })
event.remove({ type: MC("crafting_shapeless"), output: TE('enderium_dust') })
event.remove({ type: MC("crafting_shapeless"), output: TE('bronze_dust') })
event.remove({ type: MC("crafting_shapeless"), output: TE('invar_dust') })

//下界合金
event.recipes.createMixing(Item.of(MC('netherite_ingot'), 1), [MC('netherite_scrap', 4), MC('gold_ingot', 4)]).superheated()
event.recipes.createMixing(Fluid.of(TC('molten_netherite'), 8), [Fluid.of(TC('molten_debris'), 4), Fluid.of(TC('molten_gold'), 4)]).processingTime(1)

//液体合金搅拌
event.recipes.createMixing(Fluid.of(TC('molten_brass'), 8), [Fluid.of(TC('molten_copper'), 4), Fluid.of(TC('molten_zinc'), 4)]).processingTime(1)
event.recipes.createMixing(Fluid.of(TC('molten_constantan'), 8), [Fluid.of(TC('molten_copper'), 4), Fluid.of(TC('molten_nickel'), 4)]).processingTime(1)
event.recipes.createMixing(Fluid.of(TC('molten_rose_gold'), 8), [Fluid.of(TC('molten_copper'), 6), Fluid.of(TC('molten_gold'), 2)]).processingTime(1)
event.recipes.createMixing(Fluid.of(TC('molten_bronze'), 8), [Fluid.of(TC('molten_copper'), 2), Fluid.of(TC('molten_tin'), 6)]).processingTime(1)
event.recipes.createMixing(Fluid.of(TC('molten_electrum'), 8), [Fluid.of(TC('molten_gold'), 4), Fluid.of(TC('molten_silver'), 4)]).processingTime(1)

//流明
event.recipes.createMixing(Item.of(TE('lumium_ingot'), 4), ['3x #forge:ingots/tin', '#forge:ingots/silver', '#forge:dusts/glowstone']).heated()

//巧克力
event.recipes.createMixing(Fluid.of('tinkers_thinking:molten_white_chocolate', 4), [Fluid.of('create_confectionery:caramel', 2), Fluid.of(('create_confectionery:white_chocolate'), 2)]).processingTime(1)
event.recipes.createMixing(Fluid.of('tinkers_thinking:molten_black_chocolate', 4), [Fluid.of('create_confectionery:caramel', 2), Fluid.of(('create_confectionery:black_chocolate'), 2)]).processingTime(1)

//event.recipes.createMixing(Item.of(FA('arcane_gold_ingot'), 1), [MC('gold_ingot'), FA('arcane_crystal_dust', 3), FA('mundabitur_dust')])
event.recipes.createMixing(Item.of(FA('dark_rune'), 4), [FA('rune', 4), FA('corrupti_dust')])

event.recipes.thermal.smelter([KJ("invar_compound"), KJ("invar_compound")], [TE("nickel_ingot"), MC("iron_ingot")])
event.recipes.thermal.smelter(CR("brass_ingot", 2), [MC("copper_ingot"), CR("zinc_ingot")])
event.recipes.thermal.smelter(TC("rose_gold_ingot", 2), [MC("copper_ingot"), MC("gold_ingot")])
event.recipes.thermal.smelter(TE("constantan_ingot", 2), [MC("copper_ingot"), TE("nickel_ingot")])

}
