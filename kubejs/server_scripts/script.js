let MysteriousItemConversionCategory = java('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
let ConversionRecipe = java('com.simibubi.create.compat.jei.ConversionRecipe')

console.info('Initializing CEOS Modified Recipes')

onEvent('recipes', event => {
	unwantedRecipes(event)
	tweaks(event)
	//avaritia(event)

	immersiveengineering(event)
	//mekanism(event)
	pneumatic(event)

	magic(event)
})

function ifiniDeploying(output, input, tool) {
	return {
		"type": "create:deploying",
		"ingredients": [
			Ingredient.of(input).toJson(),
			Ingredient.of(tool).toJson()
		],
		"results": [
			Item.of(output).toResultJson()
		],
		"keepHeldItem": true
	}
}

let donutCraft = (event, output, center, ring) => {
	event.shaped(output, [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: center,
		S: ring
	})
}

let switchCraft = (event, a, b) => {
	event.shaped(a, [
		'S'
	], {
		S: b
	})
	event.shaped(b, [
		'S'
	], {
		S: a
	})
}

function unwantedRecipes(event) {  //不想要的配方
	event.remove({ output: '#forge:coins' }) //禁用钱币制作
	//event.remove({ input: '#forge:coins' })
	event.remove({ id: CR('cutting/andesite_alloy') })
	event.remove({ mod: ('extendedgears') })
	event.remove({ id: ('alloyed/mixing/steel_ingot') })
	event.remove({ mod: ('creatania') })
	event.remove({ mod: ('create_brass_coated') })
	event.remove({ id: ('create:botanist/elven_trade/andesite_casing') })
	event.remove({ id: ('create:botanist/elven_trade/copper_casing') })
	event.remove({ id: ('create:botanist/elven_trade/brass_casing') })
	event.remove({ id: TE("machines/pyrolyzer/pyrolyzer_coal") })
	event.remove({ id: TE("machines/pyrolyzer/pyrolyzer_logs") })
	event.remove({ id: TE('storage/carrot_block') })
	event.remove({ id: TE('fire_charge/invar_ingot_3') })
	event.remove({ id: TE('fire_charge/enderium_ingot_2') })
	event.remove({ id: TE('fire_charge/constantan_ingot_2') })
	event.remove({ id: TE('fire_charge/bronze_ingot_4') })
	event.remove({ id: TE('fire_charge/electrum_ingot_2') })
	event.remove({ id: TE('fire_charge/lumium_ingot_4') })
	event.remove({ id: TE('fire_charge/signalum_ingot_4') })
	event.remove({ id: TE('machine/pulverizer/pulverizer_cinnabar') })
	event.remove({ id: TE('machine/smelter/smelter_alloy_signalum') })
	event.remove({ id: TE('machine/smelter/smelter_alloy_lumium') })
	event.remove({ id: TE('machine/smelter/smelter_alloy_electrum') })
	event.remove({ id: TE('machine/smelter/smelter_alloy_enderium') })
	event.remove({ id: TE('machine/smelter/smelter_alloy_invar') })
	event.remove({ id: TE('machine/smelter/smelter_alloy_constantan') })
	event.remove({ id: TE('machine/smelter/smelter_alloy_bronze') })
	event.remove({ id: TE('compat/tconstruct/smelter_alloy_tconstruct_rose_gold_ingot') })
	event.remove({ id: TE('machine/pulverizer/pulverizer_ender_pearl') })
	event.remove({ id: TE('storage/electrum_block') })
	event.remove({ id: TE('storage/electrum_nugget_from_ingot') })
	event.remove({ id: TE('machine/pulverizer/pulverizer_electrum_ingot_to_dust') })
	event.remove({ id: TE('parts/electrum_gear') })
	event.remove({ id: MEK('reaction/substrate/ethene_oxygen') })
	event.remove({ id: PC('pressure_chamber/wheat_flour') })
	event.remove({ id: PC('explosion_crafting/wheat_flour') })
	event.remove({ id: 'explosion_crafting/wheat_flour' })
	event.remove({ id: FA("eternal_stella") })
	event.remove({ output: 'tinkers_thinking:fried_egg' })
	event.remove({ id: TC("smeltery/melting/metal/electrum/coin") })
	event.remove({ id: TC("smeltery/melting/metal/lead/coin") })
	event.remove({ id: TC("smeltery/melting/metal/copper/coin") })
	event.remove({ id: TC("smeltery/melting/metal/netherite/coin") })
	event.remove({ id: TC("smeltery/melting/metal/tin/coin") })
	event.remove({ id: TC("smeltery/melting/metal/lumium/coin") })
	event.remove({ id: TC("smeltery/melting/metal/bronze/coin") })
	event.remove({ id: TC("smeltery/melting/metal/nickel/coin") })
	event.remove({ id: TC("smeltery/melting/metal/constantan/coin") })
	event.remove({ id: TC("smeltery/melting/metal/enderium/coin") })
    event.remove({ id: /thermal:fuels\/numismatic.*/ })
	event.remove({ output: 'createindustry:heavy_plate' })
	event.remove({ id: "create:crushing/diamond/scarp_diamond" })
	event.remove({ id: "create:crushing/netherite/scarp_netherite" })
	event.remove({ output: 'twilightforest:uncrafting_table' })
	event.remove({ output: 'twilightdelight:ironwood_knife' })
    event.remove({ id: /beyond_earth_giselle_addon:compat\/mekanism\/pigment_extracting.*/ })
	event.remove({ output: 'create_dd:chromatic_compound' })
	event.remove({ id: "createaddition:compat/immersiveengineering/item_application/kiln_brick" })
	event.remove({ id: CR('item_application/copper_casing_from_wood') })//铜机壳
    event.remove({ id: CR('item_application/copper_casing_from_log') })
    event.remove({ id: CR('item_application/andesite_casing_from_wood') })//安山机壳
    event.remove({ id: CR('item_application/andesite_casing_from_log') })
}

/*function avaritia(event) {
event.remove({ mod: "avaritia" })

//魔法币奇点
event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:amethyst_singularity",
    },
    cost: 256,
    ingredients: [
      {
        item: "thermal:nickel_coin",
      },
    ],
});

//科技币奇点
event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:silver_singularity",
    },
    cost: 25600,
    ingredients: [
      {
        item: "thermal:electrum_coin",
      },
    ],
  });

//巴迪币奇点
event.recipes.avaritia.compressor({
    result: {
      item: "avaritia:platinum_singularity",
    },
    cost: 16,
    ingredients: [
      {
        item: "thermal:bronze_coin",
      },
    ],
  });

//水晶矩阵锭
let ed = MEK('enriched_diamond')
	event.recipes.createSequencedAssembly([
		'avaritia:crystal_matrix_ingot',
	], MEK('enriched_diamond'), [
		event.recipes.createPressing(ed, ed),
		event.recipes.createDeploying(ed, [ed, F('#nether_stars')]),
		event.recipes.createPressing(ed, ed),
	]).transitionalItem(ed)
		.loops(2)
		.id('kubejs:crystal_matrix_ingot')

event.shaped(KJ("calculator"), [
	'S',
	'M',
	'S',
], {
	S: F("#plates/netherite"),
	M: MEK("ultimate_control_circuit")
})

event.shaped('rubber_duck:rubber_duck_item', [//橡皮鸭
	'SSS',
	'SMS',
	'SSS',
], {
	S: TE("cured_rubber"),
	M: FA("golden_dragon_scale")
})

event.recipes.createMilling('kubejs:gold_matter', 'rubber_duck:rubber_duck_item')//金物质

event.custom({
    type: 'thermal:press',
    ingredients: [
      Ingredient.of('kubejs:computation_matrix', 1),
      Ingredient.of('kubejs:calculator'),
    ],
    result: [
      Item.of('thermal:tin_coin'),
      
    ],
    energy: 10000
})

event.custom({
    type: 'thermal:press',
    ingredients: [
      Ingredient.of('kubejs:energy_matrix_c', 1),
      Ingredient.of('kubejs:calculator'),
    ],
    result: [
      Item.of('thermal:tin_coin', 4),
      
    ],
    energy: 10000
})  

//中子素
event.recipes.createCrushing([
	Item.of('avaritia:neutron_pile').withChance(1),
	Item.of('2x thermal:electrum_coin').withChance(0.25),
	Item.of('2x thermal:lumium_coin').withChance(0.25),
	Item.of('2x thermal:silver_coin').withChance(0.25),
	Item.of('thermal:enderium_coin').withChance(0.02),
	Item.of('thermal:bronze_coin').withChance(0.02),
	Item.of('thermal:nickel_coin').withChance(0.02),
], TE('tin_coin')).processingTime(30)//尘埃

event.recipes.create.deploying({//币
    ingredients: [
      Ingredient.of("avaritia:neutron_pile"),
      [Ingredient.of("tconstruct:coin_cast"), Ingredient.of("thermal:press_coin_die")]
    ],
    results: [Item.of("avaritia:neutron_nugget")],
    keepHeldItem: true,
  });
  event.recipes.createCompacting("2x avaritia:neutronium_ingot", ['27x avaritia:neutron_nugget']).superheated()

//无尽催化剂
event.recipes.createMechanicalCrafting(Item.of('avaritia:infinity_catalyst', 5), [
	'A B A',
	' ACA ',
	'BEFGB',
	' ADA ',
	'A B A'
], {
	A: 'avaritia:crystal_matrix_ingot',
	B: 'avaritia:neutron_nugget',
	C: 'avaritia:silver_singularity',
	D: 'kubejs:gold_matter',
	E: 'avaritia:platinum_singularity',
	F: 'kubejs:dye_entangled_singularity',
	G: 'avaritia:amethyst_singularity',
})

//无尽锭
event.recipes.createMechanicalCrafting(Item.of('avaritia:infinity_ingot', 1), [
      "NNNNNNNNN", 
      "NCIIDIICN", 
      "NICCICCIN", 
      "NCIIDIICN", 
      "NNNNNNNNN"
], {
    C: "avaritia:neutronium_ingot",
    N: "kubejs:matter_plastics",
    I: "avaritia:infinity_catalyst",
	D: "avaritia:cosmic_meatballs"
    
})
//无尽之块
event.shaped('avaritia:infinity_block', [
	'SS',
	'SS'
], {
	S: 'avaritia:infinity_ingot',
})
event.shaped('4x avaritia:infinity_ingot', [
	'S'
], {
	S: 'avaritia:infinity_block',
})

//奎特币
let cc = 'mekanism:pellet_antimatter'
	event.recipes.createSequencedAssembly([
		'thermal:constantan_coin',
	], 'mekanism:pellet_antimatter', [
		event.recipes.createPressing(cc, cc),
		event.recipes.createDeploying(cc, [cc, 'avaritia:neutron_nugget']),
		event.recipes.createPressing(cc, cc),
	]).transitionalItem(cc)
		.loops(64)
		.id('kubejs:create_coin')

//超临界移相器
event.remove({ id: MEK("sps_casing") })
event.remove({ id: MEK("supercharged_coil") })
event.shaped(MEK("supercharged_coil"), [
	'SCS',
	'SBS',
	'SAS',
], {
	S: 'mekanism:ultimate_control_circuit',
	A: 'avaritia:infinity_block',
	B: 'minecraft:copper_block',
	C: 'mekanism:laser',
})

}*/

function immersiveengineering(event) {
event.remove({ id: IM('crafting/concrete_leaded') })
event.remove({ id: IM('crafting/blastbrick_reinforced') })

event.remove({ id: IM('crafting/cokebrick') })//焦炉砖
event.shaped(IM('cokebrick', 3), [
		'PPP',
		'PLP',
		'PPP'
	], {
		P: KJ('diorite_alloy'),
		L: F('#sandstone')
	})	
event.shaped(IM('cokebrick', 3), [
		'PPP',
		'PLP',
		'PPP'
	], {
		P: KJ('diorite_alloy'),
		L: F('#deepslate')
	})		

event.remove({ id: IM('crafting/blastbrick') })//高炉砖
event.shaped(IM('blastbrick', 3), [
		'NPN',
		'PLP',
		'NPN'
	], {
		N: TC('scorched_brick'),
		P: KJ('granite_alloy'),
		L: F('#magma')
	})	
		
event.remove({ id: IM('crafting/alloybrick') })//窑砖
event.shaped(IM('alloybrick', 2), [
		'NP',
		'PN'
	], {
		P: TC('#seared_blocks'),
		N: KJ('granite_alloy')
	})	

//传动带
event.remove({ id: IM('crafting/conveyor_basic') })
event.shaped(IM('conveyor_basic', 8), [
		'PPP',
		'CNC'
	], {
		P: CR('belt_connector'),
		C: CR('iron_sheet'),
		N: IM('component_iron')
	})	


//连接器
event.remove({ id: IM('crafting/connector_lv') })
event.shapeless(
	IM("connector_lv", 4), [
	'createaddition:connector',
	F("#rods/copper"), 
	IM("#connector_insulator")
	])  
event.remove({ id: IM('crafting/connector_lv_relay') })
event.shapeless(
	IM("connector_lv_relay", 4), [
	'createaddition:connector',
	F("#rods/copper"), 
	IM("#connector_insulator"), 
	IM("#connector_insulator")
	])  
event.remove({ id: IM('crafting/connector_mv') })
event.shapeless(
	IM("connector_mv", 4), [
	'createaddition:connector',
	F("#plates/electrum"), 
	IM("#connector_insulator")
	])  
	event.remove({ id: IM('crafting/connector_mv_relay') })
	event.shapeless(
	IM("connector_mv_relay", 4), [
	'createaddition:connector',
	F("#plates/electrum"), 
	IM("#connector_insulator"), 
	IM("#connector_insulator")
	])  
event.remove({ id: IM('crafting/connector_hv') })
event.shapeless(
	IM("connector_hv", 4), [
	'createaddition:connector',
	F("#rods/aluminum"), 
	KJ("#insulating_glass"),
	KJ("#insulating_glass")
	])  
event.remove({ id: IM('crafting/connector_hv_relay') })
event.shapeless(
	IM("connector_hv_relay", 4), [
	'createaddition:connector',
	F("#rods/aluminum"), 
	IM("#connector_insulator"), 
	IM("#connector_insulator")
	])  

/*
let connectors = (event, output, output2, rod, texture) => {
		event.remove({ id: IM('crafting/' + output) })
		event.remove({ id: IM('crafting/' + output2) })
		event.shapeless(
			output, [
				'createaddition:connector',
				rod, 
				texture
			])
		event.shapeless(
			output2, [
				'createaddition:connector',
				rod, 
				texture,
				texture
			])
	connectors(event, IM("connector_lv", 4), IM("connector_lv_relay", 4), F("#rods/copper"), IM("#connector_insulator"))
	connectors(event, IM("connector_mv", 4), IM("connector_mv_relay", 4), F("#plates/electrum"), IM("#connector_insulator"))
	connectors(event, IM("connector_hv", 4), IM("connector_hv_relay", 4), F("#rods/aluminum"), KJ("#insulating_glass"))}
*/

//酚醛树脂
event.custom({
	"type": "tconstruct:casting_table",
	"cast": {
	"item": IM('mold_plate')},
	"fluid": {
	"name": "immersiveengineering:phenolic_resin",
	"amount": 250},
	"result": Item.of(IM("plate_duroplast")),
 	"cooling_time": 15
})
event.custom({
	"type": "tconstruct:casting_basin",
	"fluid": {
	"name": "immersiveengineering:phenolic_resin",
	"amount": 1000},
	"result": Item.of(IM("duroplast")),
 	"cooling_time": 60
})

//人造皮革
event.recipes.createFilling(IM("ersatz_leather"), [IM('hemp_fabric'), Fluid.of('createaddition:seed_oil', 125)])
event.recipes.createFilling(IM("ersatz_leather"), [IM('hemp_fabric'), Fluid.of(PC('vegetable_oil'), 125)])
event.recipes.createFilling(IM("ersatz_leather"), [IM('hemp_fabric'), Fluid.of(IM('plantoil'), 125)])

//水车相关
event.remove({ id: IM("crafting/waterwheel_segment") })
event.shaped(IM("waterwheel_segment", 2), [//水车部件
	'SS',
	'SM'
], {
	S: F('#treated_wood'),
	M: CR('andesite_alloy')
})
event.remove({ id: CR("crafting/kinetics/water_wheel") })
event.shaped(CR("water_wheel"), [//机械动力水车
	'SS',
	'SS'
], {
	S: IM('waterwheel_segment')
})
event.remove({ id: CR("crafting/kinetics/large_water_wheel") })
event.shaped(CR("large_water_wheel"), [//机械动力水车
	'SSS',
	'SAS',
	'SSS'
], {
	S: F('#treated_wood'),
	A: CR('water_wheel'),
})

//风车相关
event.remove({ id: IM("crafting/windmill_blade") })
event.remove({ id: "createaddition:compat/immersiveengineering/fabric_sail" })
event.shaped(IM("windmill_blade", 2), [//风车扇叶
	'SS',
	'MS'
], {
	S: F('#treated_wood'),
	M: F('#rods/wooden')
})
event.shaped(CR("white_sail", 6), [//风帆
	'AS',
	'SM'
], {
	A: IM('hemp_fabric'),
	S: IM('windmill_blade'),
	M: CR('andesite_alloy')
})
event.replaceInput({ id: "create:crafting/kinetics/windmill_bearing" }, MC('#wooden_slabs'), F('#treated_wood_slab'))

//坚韧布料
let t = KJ('incomplete_hemp_fabric')
	event.recipes.createSequencedAssembly([
		IM('hemp_fabric'),
	], F('#rods/wooden'), [
		event.recipes.createDeploying(t, [t, [IM('hemp_fiber'), MC('string')]]),
	]).transitionalItem(t)
		.loops(6)
		.id('kubejs:hemp_fabric')
event.replaceInput({ id: IM("crafting/hemp_fabric") }, IM('hemp_fiber'), [IM('hemp_fiber'), MC('string')])

//工程块
event.replaceInput({ id: IM('crafting/rs_engineering') }, MC('redstone'), TE('redstone_servo'))
event.replaceInput({ id: IM('crafting/light_engineering') }, MC('copper_ingot'), CR('brass_ingot'))

//电子元件
let ce1 = KJ('incomplete_component_electronic')
	event.recipes.createSequencedAssembly([
		IM('component_electronic'),
	], F('#treated_wood_slab'), [
		event.recipes.createDeploying(ce1, [ce1, KJ('purified_nether_quartz_crystal')]),
		event.recipes.createDeploying(ce1, [ce1, IM('wire_electrum')]),
		event.recipes.createFilling(ce1, [ce1, Fluid.of(IM('redstone_acid'), 75)]),
		event.recipes.createPressing(ce1, ce1)
	]).transitionalItem(ce1)
		.loops(1)
		.id('kubejs:component_electronic')

let ce2 = KJ('incomplete_component_electronic_adv')
	event.recipes.createSequencedAssembly([
		IM('component_electronic_adv'),
	], IM('plate_duroplast'), [
		event.recipes.createDeploying(ce2, [ce2, IM('electron_tube')]),
		event.recipes.createDeploying(ce2, [ce2, IM('electron_tube')]),
		event.recipes.createDeploying(ce2, [ce2, IM('wire_aluminum')]),
		event.recipes.createPressing(ce2, ce2)
	]).transitionalItem(ce2)
		.loops(1)
		.id('kubejs:component_electronic_adv')
//

//流体管道
event.remove({ id: IM("crafting/fluid_pipe") })
event.shaped(IM("fluid_pipe", 3), [
	' S ',
	'MMM',
	' S '
], {
	S: CR('iron_sheet'),
	M: CR('fluid_pipe')
})

}

/*function mekanism(event) {

//氟石
event.recipes.botania.mana_infusion(MC('glowstone_dust'), MEK('dust_fluorite'), 750)//氟石变荧石

event.remove({ output: MEK("digital_miner") })
event.recipes.createMechanicalCrafting(MEK('digital_miner'), [
	'MMMMM',
	'GSDSG',
	'MMAMM'
], {
	A: MEK("teleportation_core"),
	M: MEK("steel_casing"),
	G: CR("smart_chute"),
	S: MEK("ultimate_control_circuit"),
	D: MEK("robit"),
})

event.remove({ output: 'mekanismgenerators:wind_generator' })
event.recipes.createMechanicalCrafting('mekanismgenerators:wind_generator', [
	' B ',
	'BAB',
	' B ',
	' D ',
	' D ',
	'DCD',
], {
	A: IM("windmill"),
	B: KJ("matter_plastics"),
	C: MEK("ultimate_energy_cube"),
	D: KJ("matter_casing"),
})

event.remove({ output: 'mekanismgenerators:solar_panel' })
let sp = 'alloyed:steel_sheet'//太阳能板
	event.recipes.createSequencedAssembly([
		'3x mekanismgenerators:solar_panel',
	], 'alloyed:steel_sheet', [
		event.recipes.createDeploying(sp, [sp, MEK('basic_control_circuit')]),
		event.recipes.createDeploying(sp, [sp, PC('solar_cell')]),
		event.recipes.createDeploying(sp, [sp, TE('#glass/hardened')]),
		event.recipes.createPressing(sp, sp)
	]).transitionalItem(sp)
		.loops(6)
		.id('kubejs:solar_panel')

event.remove({ output: 'mekanismgenerators:solar_generator' })
event.recipes.createMechanicalCrafting('mekanismgenerators:solar_generator', [
	'BBB',
	' C ',
	' A ',
], {
	A: MEK("advanced_energy_cube"),
	B: 'mekanismgenerators:solar_panel',
	C: IM("heavy_engineering"),
})

event.remove({ output: 'mekanismgenerators:advanced_solar_generator' })
event.recipes.createMechanicalCrafting('mekanismgenerators:advanced_solar_generator', [
	'B B',
	'BAB',
	' D ',
	' D ',
	' C ',
], {
	A: KJ("matter_casing"),
	B: 'mekanismgenerators:solar_generator',
	C: MEK("elite_energy_cube"),
	D: IM("heavy_engineering"),
})

event.remove({ output: MEK("teleportation_core") })
event.recipes.createMechanicalCrafting(MEK("teleportation_core"), [
	'ADA',
	'DCD',
	'ADA'
], {
	A: F("#dusts/diamond"),
	C: MEK("alloy_atomic"),
	D: AE2("quantum_entangled_singularity")
})

//工厂安装器
event.remove({ output: MEK("basic_tier_installer") })
let ti1 = KJ("blank_tier_installer")
	event.recipes.createSequencedAssembly([
		MEK("basic_tier_installer"),
	], 'compressedcreativity:brass_coated_upgrade_matrix', [
		event.recipes.createFilling(ti1, [ti1, Fluid.of(TC('molten_tin'), 45)]),
		event.recipes.createDeploying(ti1, [ti1, MEK('basic_control_circuit')]),
		event.recipes.createDeploying(ti1, [ti1, TE('rf_coil')]),
	]).transitionalItem(ti1)
		.loops(2)
		.id('kubejs:basic_tier_installer')

event.remove({ output: MEK("advanced_tier_installer") })
let ti2 = KJ("blank_tier_installer")
	event.recipes.createSequencedAssembly([
		MEK("advanced_tier_installer"),
	], MEK("basic_tier_installer"), [
		event.recipes.createFilling(ti2, [ti2, Fluid.of(TC('molten_osmium'), 45)]),
		event.recipes.createDeploying(ti2, [ti2, MEK('advanced_control_circuit')]),
		event.recipes.createDeploying(ti2, [ti2, MEK('alloy_infused')]),
	]).transitionalItem(ti2)
		.loops(2)
		.id('kubejs:advanced_tier_installer')

event.remove({ output: MEK("elite_tier_installer") })
let ti3 = KJ("blank_tier_installer")
	event.recipes.createSequencedAssembly([
		MEK("elite_tier_installer"),
	], MEK("advanced_tier_installer"), [
		event.recipes.createFilling(ti3, [ti3, Fluid.of(TC('molten_electrum'), 45)]),
		event.recipes.createDeploying(ti3, [ti3, MEK('elite_control_circuit')]),
		event.recipes.createDeploying(ti3, [ti3, MEK('alloy_reinforced')]),
	]).transitionalItem(ti3)
		.loops(2)
		.id('kubejs:elite_tier_installer')

event.remove({ output: MEK("ultimate_tier_installer") })
let ti4 = KJ("blank_tier_installer")
	event.recipes.createSequencedAssembly([
		MEK("ultimate_tier_installer"),
	], MEK("elite_tier_installer"), [
		event.recipes.createFilling(ti4, [ti4, Fluid.of(TC('molten_refined_obsidian'), 45)]),
		event.recipes.createDeploying(ti4, [ti4, MEK('ultimate_control_circuit')]),
		event.recipes.createDeploying(ti4, [ti4, MEK('alloy_atomic')]),
	]).transitionalItem(ti4)
		.loops(2)
		.id('kubejs:ultimate_tier_installer')

//结构玻璃
event.remove({ id: MEK("structural_glass") })
event.recipes.thermal.smelter(MEK("structural_glass", 6), [F("#gems/quartz"), CR("shadow_steel_casing"), MEK("dust_refined_obsidian")]).energy(4000)

}*/

function magic(event) {

//bloodmagic

event.replaceInput({ id: 'bloodsmeltery:altar/bloodbrass' }, MC('copper_ingot'), CR('brass_ingot'))//血气黄铜

event.remove({ id: BM('blood_altar')})//血之祭坛
event.recipes.botania.runic_altar(BM('altar'), [CR('depot'), TC('bloodbone'), TC('bloodbone'), TC('bloodbone'), TC('bloodbone'), FA('corrupti_dust')], 5000)

event.remove({ id: BM('alchemy_table') })//炼金术桌
event.recipes.bloodmagic.altar(BM('alchemytable'), ARS('scribes_table')).upgradeLevel(0).altarSyphon(2500).consumptionRate(5).drainRate(5)

//生命源质
event.recipes.createMixing([Fluid.of('bloodmagic:life_essence_fluid', 1)], [Fluid.of('creatania:real_mana', 10), Fluid.of(TC('blood'), 1)]).processingTime(1)
event.recipes.createMixing([Fluid.of('bloodmagic:life_essence_fluid', 1)], [Fluid.of('creatania:real_mana', 10), Fluid.of(BOP('blood'), 1)]).processingTime(1)

/*
let willname = ['default', 'corrosive', 'destructive', 'vengeful', 'steadfast']
event.recipes.createMixing([Fluid.of('bloodmagic:life_essence_fluid', 1)], [Fluid.of("bloodsmeltery:" + willname + "_will", 10), Fluid.of(TC('blood'), 1)]).processingTime(1)
event.recipes.createMixing([Fluid.of('bloodmagic:life_essence_fluid', 1)], [Fluid.of("bloodsmeltery:" + willname + "_will", 10), Fluid.of(BOP('blood'), 1)]).processingTime(1)
*/

//arsnouveau

event.remove({ id: ARS('novice_spell_book') })//初学者法术书
event.shapeless(ARS("novice_spell_book"), [MC('writable_book'), FA('arcane_gold_ingot'), FA('rune'), MC('iron_sword'), MC('iron_pickaxe'), MC('iron_axe'), MC('iron_shovel')])
event.remove({ id: ARS('apprentice_spell_book_upgrade') })//法师法术书
event.recipes.botania.runic_altar(ARS('apprentice_spell_book'), [ARS('novice_spell_book'), FA('arcane_gold_block'), BO('pixie_dust'), BO('pixie_dust'), RQ('witch_hat')], 12000)
event.remove({ id: ARS('archmage_spell_book_upgrade') })//大法师法术书
event.recipes.botania.runic_altar(ARS("archmage_spell_book"), [ARS('apprentice_spell_book'), ARS('wilden_tribute'), FA('dark_nether_star'), BO('life_essence'), FA('stellarite_piece'), BM('arcaneashes'), BM('arcaneashes')], 24000)


//魔源浆果派
event.remove({ id: ARS('source_berry_pie') })
event.shaped(ARS('source_berry_pie'), [
	'DAD',
	'PPP',
	'BCB'
], {
	P: ARS('source_berry'),
	A: ARS('magebloom'),
	D: F('#milk'),
	B: MC('sugar'),
	C: FD('pie_crust')
})	
let source_berry_pie = FD('pie_crust')
event.recipes.createSequencedAssembly([
	ARS('source_berry_pie'),
], FD('pie_crust'), [
	event.recipes.createDeploying(source_berry_pie, [source_berry_pie, ARS('source_berry')]),
	event.recipes.createDeploying(source_berry_pie, [source_berry_pie, ARS('source_berry')]),
	event.recipes.createDeploying(source_berry_pie, [source_berry_pie, ARS('magebloom')]),
	event.recipes.createDeploying(source_berry_pie, [source_berry_pie, MC('sugar')]),
]).transitionalItem(source_berry_pie)
	.loops(1)
	.id('kubejs:source_berry_pie')


//奥术石
event.remove({ id: ARS('arcane_stone') })
event.shaped(ARS('arcane_stone', 8), [
		'PA',
		'AP'
	], {
		P: 'hexcasting:charged_amethyst',
		A: KJ('metamorphic_alloy')
	})	

event.shaped(ARS('arcane_stone', 12), [
		'PA',
		'AP'
	], {
		P: ARS('source_gem'),
		A: KJ('metamorphic_alloy')
	})	

	/*event.shaped(ARS('arcane_stone', 16), [
		'AP',
		'PP'
	], {
		P: BO('livingrock'),
		A: BM('arcaneashes')
	})*/

event.remove({ id: ARS('scribes_table') })//抄写台
event.shaped(ARS('scribes_table', 1), [
		'AAA',
		'BPC'
	], {
		P: KJ('mysterious_casing'),
		B: CR('schematic_table'),
		C: TC('tinkers_chest'),
		A: MC('smooth_stone_slab')
	})	

//魔源灌注器	
event.remove({ id: ARS('imbuement_chamber') })
event.shaped(ARS('imbuement_chamber', 1), [
		' C ',
		'CBC',
		' C '
	], {
		B: KJ('mysterious_casing'),
		C: FA('arcane_gold_ingot'),
	})

 //奥术核心
event.remove({ id: ARS('arcane_core') })
event.shaped(ARS('arcane_core', 1), [
		'AAA',
		'PBP',
		'AAA'
	], {
		P: 'moreminecarts:hard_light_lens',
		B: KJ('mysterious_casing'),
		A: ARS('arcane_stone')
	})	
let arcane_core = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), 'ars_nouveau:arcane_core', other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'ars_nouveau:arcane_core', B: other_ingredient })
		}
		else
			event.stonecutting(Item.of(id, amount), 'ars_nouveau:arcane_core')
	}

arcane_core('ars_nouveau:arcane_pedestal', 2)
arcane_core('ars_nouveau:agronomic_sourcelink', 1, F('#hoes'))
arcane_core('ars_nouveau:source_jar', 1, CR('fluid_tank'))
arcane_core('ars_nouveau:enchanting_apparatus', 1, 'create_enchantment_industry:enchanting_guide')
arcane_core('ars_nouveau:relay', 1, ARS('source_gem_block'))
arcane_core('ars_nouveau:volcanic_sourcelink', 1, MC('lava_bucket'))
arcane_core('ars_nouveau:basic_spell_turret', 1, MC('dispenser'))
arcane_core('ars_nouveau:alchemical_sourcelink', 1, MC('brewing_stand'))
arcane_core('ars_nouveau:vitalic_sourcelink', 1, BM('soulsnare'))
arcane_core('ars_nouveau:mycelial_sourcelink', 1, FA('fungyss_hyphae'))

	//活根
	event.recipes.botania.mana_infusion(BO("living_root"), F('#rods/wooden'), 100)

	event.remove({ id: OC('crafting/otherstone_tablet') })//异界石板
	event.shaped(OC('otherstone_tablet', 3), [
		' A ',
		'PPP'
	], {
		P: OC('otherstone'),
		A: 'hexcasting:amethyst_dust'
	})	

	let transitionalB = 'occultism:burnt_otherstone'//异界石板装配
	event.recipes.createSequencedAssembly([
		'3x occultism:otherstone_tablet',
	], 'occultism:burnt_otherstone', [
		event.recipes.createDeploying(transitionalB, [transitionalB, 'hexcasting:amethyst_dust']),
		event.recipes.createPressing(transitionalB, [transitionalB]),
	]).transitionalItem(transitionalB)
		.loops(1)
		.id('occultism:otherstone_tablet')

	let transitionalC = 'occultism:otherstone_slab'//异界石板更简便的装配
	event.recipes.createSequencedAssembly([
		'3x occultism:otherstone_tablet',
	], 'occultism:otherstone_slab', [
		event.recipes.createFilling(transitionalC, [transitionalC, Fluid.of(TC('molten_amethyst'), 25)]),
		event.recipes.createPressing(transitionalC, [transitionalC]),
	]).transitionalItem(transitionalC)
		.loops(2)
		.id('occultism:otherstone_tablet_2')

	event.recipes.createPressing('hexcasting:amethyst_dust', [MC('amethyst_shard')])//紫水晶粉
	event.shapeless("hexcasting:amethyst_dust", [IM('#tools/hammers'), MC('amethyst_shard')])
	event.custom({//紫水晶粉融化
		"type": "tconstruct:melting",
		"ingredient": { "item": "hexcasting:amethyst_dust" },
		"result": {
			"fluid": "tconstruct:molten_amethyst",
			"amount": 20
		},
		"temperature": 930,
		"time": 30
	})
	event.custom({//紫水晶粉块融化
		"type": "tconstruct:melting",
		"ingredient": { "item": "hexcasting:amethyst_dust_block" },
		"result": {
			"fluid": "tconstruct:molten_amethyst",
			"amount": 80
		},
		"temperature": 930,
		"time": 30
	})
    //充能紫水晶
	event.recipes.bloodmagic.altar('hexcasting:charged_amethyst', MC('amethyst_shard')).upgradeLevel(0).altarSyphon(1000).consumptionRate(5).drainRate(5)
	event.recipes.botania.mana_infusion('hexcasting:charged_amethyst', MC('amethyst_shard'), 1000)

    //玻璃质仙人掌
	event.recipes.botania.mana_infusion('moreminecarts:glass_cactus', MC('cactus'), 750)
    event.recipes.createHaunting([
	 Item.of("moreminecarts:glass_cactus").withChance(0.125)
    ], 'minecraft:cactus')
	event.recipes.createCompacting('moreminecarts:glass_spines', [MEK("dust_fluorite")]).heated()

	//硬光透镜
	event.recipes.createFilling('moreminecarts:hard_light_lens', ['moreminecarts:organic_glass', Fluid.of(TC('molten_emerald'), 125)])
	event.recipes.createFilling('moreminecarts:hard_light_lens', ['moreminecarts:organic_glass', Fluid.of(TC('molten_amethyst'), 125)])


	//空白符文
	event.replaceInput({ id: BM('blood_rune_blank') }, F("#stone"), FA("dark_rune"))

	event.remove({ id: BM('altar/slate')})//空白石板
	event.recipes.bloodmagic.altar(BM('blankslate'), OC('otherstone_tablet')).upgradeLevel(0).altarSyphon(1000).consumptionRate(5).drainRate(5)

    //永恒之石
	event.recipes.botania.mana_infusion(FA('xpetrified_orb'), 'create_sa:heap_of_experience', 1200)//石化经验球
	event.recipes.botania.runic_altar(
	FA("eternal_stella"), 
		[FA('xpetrified_orb'), 
		BO('terrasteel_ingot'), 
		FA('xpetrified_orb'), 
		FA('stellarite_piece'), 
		'rubber_duck:rubber_duck_item', 
		FA('xpetrified_orb'), 
		BO('terrasteel_ingot'), 
		FA('xpetrified_orb'), 
		FA('stellarite_piece')
	], 5000)
}

function pneumatic(event) {
event.remove({ id: 'compressedcreativity:item_application/compressed_iron_casing_from_wood' })
event.remove({ id: 'compressedcreativity:item_application/compressed_iron_casing_from_log' })
event.remove({ id: PC('pressure_chamber/capacitor') })
event.replaceInput({ id: PC("network_io_port") }, PC('capacitor'), 'createaddition:capacitor')

//太阳能单元
event.remove({ id: PC("pressure_chamber/solar_wafer") })
let ss = PC('solar_wafer')
	event.recipes.createSequencedAssembly([
		PC('solar_cell'),
	], PC('solar_wafer'), [
		event.recipes.createPressing(ss, ss)
	]).transitionalItem(ss)
		.loops(16)
		.id('kubejs:solar_cell')

event.replaceInput({ id: PC("reinforced_chest") }, MC('gold_nugget'), CR('brass_nugget'))

//压缩铁锭
event.shapeless(PC('ingot_iron_compressed'), [MC('iron_ingot'), MC('iron_ingot'), TE('earth_charge')])
event.recipes.createPressing(KJ("iron_compressed_sheet"), PC("ingot_iron_compressed"))//压缩铁板
event.blasting(PC('ingot_iron_compressed'), KJ('iron_compressed_sheet'))

//手摇压缩机
event.remove({ id: PC("manual_compressor") })
event.shaped(PC('manual_compressor', 2), [
	'B',
	'A',
	'C'
], {
	A: PC('cannon_barrel'),
	B: 'createindustry:rebar',
	C: PC('stone_base')
})

//压力管道
event.remove({ id: PC("pressure_tube") })
event.shaped(PC('pressure_tube', 8), [
	'SCS',
], {
	C: PC('compressed_iron_gear'),
	S: KJ('iron_compressed_sheet')
})

//炮管
event.remove({ id: PC("cannon_barrel") })
let cb = PC('pressure_tube')
	event.recipes.createSequencedAssembly([
		PC('cannon_barrel'),
	], PC('pressure_tube'), [
		event.recipes.createCutting(cb, cb)
	]).transitionalItem(cb)
		.loops(3)
		.id('kubejs:cannon_barrel')

//气缸
event.remove({ id: PC("pneumatic_cylinder") })
let pc = PC('cannon_barrel')
	event.recipes.createSequencedAssembly([
		PC('pneumatic_cylinder'),
	], PC('cannon_barrel'), [
		event.recipes.createDeploying(pc, [pc, TE('lapis_gear')]),
		event.recipes.createDeploying(pc, [pc, PC('plastic')]),
		event.recipes.createDeploying(pc, [pc, PC('plastic')]),
		event.recipes.createPressing(pc, pc)
	]).transitionalItem(pc)
		.loops(2)
		.id('kubejs:pneumatic_cylinder')


//液态蒸汽
event.recipes.createMixing(Fluid.of('mekanism:steam', 4), [Fluid.of(IM('creosote'), 2)]).heated().processingTime(1)
//event.recipes.createCompacting(Fluid.of(IM('creosote'), 100), [Fluid.of('mekanism:steam', 200)])

//隔热板
event.remove({ id: PC('thermal_lagging') })
event.shaped(PC('thermal_lagging', 8), [
	'SCS',
], {
	C: TE('#glass/hardened'),
	S: TE('#rockwool')
})
event.remove({ id: TE('rockwool/white_rockwool_from_blasting') })//石棉
event.remove({ id: TE('rockwool/white_rockwool_from_smelting') })
event.recipes.createCompacting(TE("white_rockwool"), [F("#slag")]).heated()

//气动盔甲
event.remove({ id: PC("pneumatic_helmet") })
event.recipes.createMechanicalCrafting(PC("pneumatic_helmet"), [
	'SBS',
	'SCS',
	'SSS'
], {
	C: PC('compressed_iron_helmet'),
	B: MEK("basic_control_circuit"),
	S: PC('air_canister')
})
event.remove({ id: PC("pneumatic_chestplate") })
event.recipes.createMechanicalCrafting(PC("pneumatic_chestplate"), [
	'SBS',
	'SCS',
	'SSS'
], {
	C: PC('compressed_iron_chestplate'),
	B: MEK("basic_control_circuit"),
	S: PC('air_canister')
})
event.remove({ id: PC("pneumatic_leggings") })
event.recipes.createMechanicalCrafting(PC("pneumatic_leggings"), [
	'SBS',
	'SCS',
	'D D'
], {
	C: PC('compressed_iron_leggings'),
	B: MEK("basic_control_circuit"),
	S: PC('air_canister'),
	D: KJ("iron_compressed_sheet"),
})
event.remove({ id: PC("pneumatic_boots") })
event.recipes.createMechanicalCrafting(PC("pneumatic_boots"), [
	'BCB',
	'BSB'
], {
	C: PC('compressed_iron_boots'),
	S: MEK("basic_control_circuit"),
	B: PC('air_canister')
})
//


//无人机升级
event.remove({ id: PC("drone_upgrade") })
event.shapeless(PC('drone'), [MEK("basic_control_circuit"),[PC('logistics_drone'), PC('harvesting_drone'), PC('guard_drone'), PC('collector_drone')]])

//装配钻头
event.remove({ id: PC("assembly_laser") })
event.remove({ id: PC("assembly_drill") })
event.smithing(PC('assembly_laser'), PC('assembly_io_unit_export'), CR("electron_tube"))
event.smithing(PC('assembly_drill'), PC('assembly_io_unit_export'), TE("drill_head"))
event.smithing(PC('assembly_laser'), PC('assembly_io_unit_import'), CR("electron_tube"))
event.smithing(PC('assembly_drill'), PC('assembly_io_unit_import'), TE("drill_head"))
event.recipes.createMechanicalCrafting(PC('assembly_laser'), "AB", { A: [PC('assembly_io_unit_import'), PC('assembly_io_unit_export')], B: CR("electron_tube") })
event.recipes.createMechanicalCrafting(PC('assembly_drill'), "AB", { A: [PC('assembly_io_unit_import'), PC('assembly_io_unit_export')], B: TE("drill_head") })
//

event.remove({ id: PC('heat_pipe') })
donutCraft(event, PC('heat_pipe', 4), PC('compressed_iron_block'), TE("#rockwool"))

//记忆棒
event.remove({ id: PC("memory_stick") })
event.shaped(PC("memory_stick"), [
	'CSB',
], {
	C: 'create_sa:heap_of_experience',
	S: MC('soul_sand'),
	B: MC('iron_ingot'),
})

//空气罐
event.remove({ id: PC("air_canister") })
event.shaped(PC("air_canister"), [
	' S ',
	'C C',
	'CBC',
], {
	C: KJ('iron_compressed_sheet'),
	S: PC('pressure_tube'),
	B: MEK('ingot_osmium'),
})

//流体储罐
event.remove({ id: PC("small_tank") })//一级
event.shaped(PC("small_tank"), [
	'C',
	'S',
	'C',
], {
	C: KJ('iron_compressed_sheet'),
	S: CR('fluid_tank'),
})
event.remove({ id: PC("medium_tank") })//二级
event.shaped(PC("medium_tank"), [
	'B',
	'S',
	'C',
], {
	C: TE('gold_gear'),
	S: PC("small_tank"),
	B: PC("pressure_tube"),
})
event.remove({ id: PC("large_tank") })//三级
event.shaped(PC("large_tank"), [
	'B',
	'S',
	'C',
], {
	C: TE('diamond_gear'),
	S: PC("medium_tank"),
	B: PC("advanced_pressure_tube"),
})
event.remove({ id: PC("huge_tank") })//四级
event.shaped(PC("huge_tank"), [
	'B',
	'S',
	'C',
], {
	C: TE('netherite_gear'),
	S: PC("large_tank"),
	B: PC("reinforced_air_canister"),
})

	event.shaped(PC('assembly_io_unit_import'), [
		'S',
	], {
		S: PC('assembly_io_unit_export')
	})
	event.shaped(PC('assembly_io_unit_export'), [
		'S',
	], {
		S: PC('assembly_io_unit_import')
	})

}

function tweaks(event) {

//rei神秘转化
MysteriousItemConversionCategory.RECIPES.add(ConversionRecipe.create('ae2:singularity', 'ae2:quantum_entangled_singularity'))
MysteriousItemConversionCategory.RECIPES.add(ConversionRecipe.create('create:chromatic_compound', 'create:shadow_steel'))
MysteriousItemConversionCategory.RECIPES.add(ConversionRecipe.create('create:chromatic_compound', 'create:refined_radiance'))

////机壳合成
let tweak_casing = (output, input1, input2) => {
		event.remove({ output: output })
		event.recipes.create.itemApplication(output, [input2, input1])
	}

//科技线
tweak_casing(CR('andesite_casing'), 'create:andesite_alloy', '#forge:stripped_wood')
tweak_casing(CR('andesite_casing'), 'create:andesite_alloy', '#forge:stripped_logs')
tweak_casing(CR('copper_casing'), 'minecraft:copper_ingot', 'createindustry:waterproof_planks')
tweak_casing(CR('copper_casing'), 'createaddition:copper_rod', 'kubejs:treated_kelp_block')
tweak_casing(CR('brass_casing'), 'create:brass_ingot', '#forge:treated_wood')
tweak_casing('kubejs:redstone_casing', 'minecraft:iron_ingot', '#forge:stone')
tweak_casing('kubejs:zinc_casing', 'create:zinc_ingot', '#forge:stone')
tweak_casing('kubejs:invar_casing', 'thermal:invar_ingot', 'minecraft:basalt')
tweak_casing('compressedcreativity:compressed_iron_casing', 'pneumaticcraft:ingot_iron_compressed', 'createindustry:chipwood')
tweak_casing('createindustry:steel_casing', 'alloyed:steel_ingot', 'createindustry:hardened_planks')
tweak_casing('immersiveengineering:concrete_leaded', 'thermal:lead_ingot', 'immersiveengineering:concrete')
tweak_casing('kubejs:enderium_casing', 'minecraft:ender_pearl', '#forge:obsidian')
tweak_casing('kubejs:fluix_casing', 'thermal:lead_ingot', 'minecraft:blackstone')
//魔法线
tweak_casing('kubejs:gold_source_casing', 'forbidden_arcanus:arcane_gold_ingot', 'botania:livingwood_planks')
tweak_casing('kubejs:mana_casing', 'botania:mana_pearl', 'botania:livingrock')
tweak_casing('kubejs:mysterious_casing', 'kubejs:arcane_golden_sheet', 'ars_nouveau:arcane_stone')

tweak_casing('create_dd:refined_radiance_casing', 'create:refined_radiance', '#create_dd:glow_base')
tweak_casing('create_dd:shadow_steel_casing', 'create:shadow_steel', '#forge:obsidian')
//防腐系列
tweak_casing('kubejs:treated_kelp_block', '#immersive_weathering:wax', 'minecraft:dried_kelp_block')
tweak_casing('kubejs:treated_kelp_block', 'kubejs:creosote_pellet', 'minecraft:dried_kelp_block')
tweak_casing('createindustry:waterproof_planks', '#immersive_weathering:wax', '#minecraft:planks')
tweak_casing('createindustry:waterproof_planks', 'kubejs:creosote_pellet', '#minecraft:planks')
event.custom(//防水木板
	{
	  "type": "create:item_application",
	  "ingredients": [
		{
		  "tag": "minecraft:planks"
		},
		{
		  "item": "createindustry:water_insulation"
		}
	  ],
	  "results": [
		{
		  "item": "createindustry:waterproof_planks"
		}
	  ]
})
event.custom(//防腐海带
	{
	  "type": "create:item_application",
	  "ingredients": [
		{
		  "item": "minecraft:dried_kelp_block"
		},
		{
		  "item": "createindustry:water_insulation"
		}
	  ],
	  "results": [
		{
		  "item": "kubejs:treated_kelp_block"
		}
	  ]
})

////热力刷石机
let bedrock_cobblegen = (adjacent, output) => {
	event.custom({
		"type": "thermal:rock_gen",
		"adjacent": adjacent,
		"below": "minecraft:bedrock",
		"result": { "item": output }
	})
}

bedrock_cobblegen(MC("packed_ice"), MC("andesite"))
bedrock_cobblegen(AP("polished_packed_ice"), MC("granite"))
bedrock_cobblegen(AP("chiseled_packed_ice"), MC("diorite"))
bedrock_cobblegen(AP("packed_ice_pillar"), MC("dripstone_block"))
bedrock_cobblegen('chipped:blue_ice_1', CR("limestone"))
bedrock_cobblegen(FA("dark_rune_block"), FA("darkstone"))


//////前期优化游戏体验
event.replaceInput({ id: CR("crafting/kinetics/brass_hand") }, F('#plates/brass'), [CR('golden_sheet'), KJ('arcane_golden_sheet')])//黄铜手部件改金制手部件
event.replaceInput({ id: CR("crafting/kinetics/item_vault") }, F('#plates/iron'), TE('lead_plate'))//保险库

//木炭
event.remove({ id: MC("charcoal") })
event.smelting('immersive_weathering:charred_log', MC('#logs_that_burn')).xp("0.15").id("kubejs:charcoal");
event.smelting('6x supplementaries:ash', 'immersive_weathering:charred_log').xp("0.15").id("kubejs:ash");
event.shapeless(MC("charcoal"), [("immersive_weathering:charred_log")])

//储存标签Labels
donutCraft(event, '8x labels:label', "#forge:dyes/black", MC("paper"))

//垂泪藤，缠冤藤互相转换
donutCraft(event, MC("weeping_vines"), "forbidden_arcanus:rune", MC("twisting_vines"))
donutCraft(event, MC("twisting_vines"), "forbidden_arcanus:rune", MC("weeping_vines"))


//下界合金锯
event.smithing(KJ("netherite_saw"), ('cb_microblock:diamond_saw'), MC("netherite_ingot"))

//潜水靴
event.shaped(CR("copper_diving_boots"), [
	'P P',
	'P P',
	'S S'
], {
	P: MC("copper_ingot"),
	S: TE("lead_ingot")
})
//铜背罐
event.shaped(CR("copper_backtank"), [
	'PAP',
	'PBP',
	'PSP'
], {
	P: F("#leather"),
	A: CR("andesite_alloy"),
	B: MC("copper_block"),
	S: CR("cogwheel")
})


event.remove({ id: FA("arcane_crystal_block_from_arcane_crystal") })
event.shaped('forbidden_arcanus:arcane_crystal_block', [
	'SSS',
	'SSS',
	'SSS'
], { 
	S: '#forge:gems/arcane_crystal'
})

event.remove({ output: TE("side_config_augment") })
event.shaped(TE("side_config_augment"), [
	' S ',
	'PMP',
	' S '
], {
	P: TE("invar_ingot"),
	M: TE("redstone_servo"),
	S: TE("gold_gear")
})

event.stonecutting(AE2("silicon_press"), KJ("circuit_scrap"))
event.stonecutting(AE2("engineering_processor_press"), KJ("circuit_scrap"))
event.stonecutting(AE2("calculation_processor_press"), KJ("circuit_scrap"))
event.stonecutting(AE2("logic_processor_press"), KJ("circuit_scrap"))
event.shaped(KJ("circuit_scrap", 2),
[" A ", "ABA", " A "], { A: TE("invar_ingot"), B: F("#circuit_press") })
event.recipes.createMilling(KJ("circuit_scrap"), F("#circuit_press"))

event.replaceInput({ output: CR('adjustable_chain_gearshift') }, CR('electron_tube'), MC('redstone'))
event.replaceInput({ id: TE("rf_coil") }, MC('gold_ingot'), F('#rods/gold'))//红石通量线圈
event.replaceInput({ id: CR("crafting/kinetics/filter") }, MC('#wool'), [IM('hemp_fabric'), MC('#wool')])//过滤器
event.replaceInput({ id: CR("crafting/kinetics/attribute_filter") }, MC('#wool'), [IM('hemp_fabric'), MC('#wool')])//属性过滤器
event.replaceInput({ id: "immersive_weathering:nulch_block" }, 'immersive_weathering:ash_layer_block', 'supplementaries:ash')//沃土
event.replaceInput({ id: "immersive_weathering:mulch_block" }, 'immersive_weathering:ash_layer_block', 'supplementaries:ash')//地狱沃土
event.replaceOutput({ id: AC("tin_can_to_iron_nugget") }, MC('iron_nugget'), TE('tin_nugget'))
event.replaceOutput({ id: AC("tin_can_to_iron_nugget_from_blasting") }, MC('iron_nugget'), TE('tin_nugget'))
event.replaceInput({ id: CR("mechanical_crafting/wand_of_symmetry") }, MC('ender_pearl'), CR('refined_radiance'))//对称之杖
event.replaceInput({ id: MC("hopper") }, F('#ingots/iron'), TE('lead_plate'))//漏斗

event.recipes.createCrushing([Item.of(TE("bitumen")), Item.of(TE("bitumen"), 2).withChance(0.75), Item.of(TE("tar"), 1).withChance(0.75), Item.of(MC("sand")).withChance(0.25)], TE("oil_sand"))
event.recipes.createCrushing([Item.of(TE("bitumen")), Item.of(TE("bitumen"), 2).withChance(0.75), Item.of(TE("tar"), 1).withChance(0.75), Item.of(MC("red_sand")).withChance(0.25)], TE("oil_red_sand"))

event.remove({ id: TE("augments/item_filter_augment") })
event.shapeless(TE("item_filter_augment"), [CR("filter"), TE("lapis_gear")])

//金金金金金金
event.remove({ id: 'createdeco:gold_coinstack' })
event.remove({ id: 'createdeco:gold_coin' })
event.shapeless("createdeco:gold_coinstack", [TE('gold_coin'), TE('gold_coin'), TE('gold_coin'), TE('gold_coin'), TE('gold_coin'), TE('gold_coin')])
event.shaped(TE('gold_coin', 6), [
	'C'
], {
	C: 'createdeco:gold_coinstack',
})


//削弱刷铁轨收益
event.remove({ id: TC('smeltery/melting/metal/iron/nugget_3') })
event.remove({ id: TC('smeltery/melting/metal/gold/powered_rail') })
event.remove({ id: TC('smeltery/melting/metal/iron/ingot_1') })
event.recipes.createCrushing(
	[Item.of(MC("stick")).withChance(0.35), 
	Item.of(MC("iron_nugget")).withChance(0.07), 
	Item.of(TE("iron_dust")).withChance(0.01)], 
	MC('rail')).processingTime(250)
event.recipes.createCrushing(
	[Item.of(MC("stick")).withChance(0.35), 
	Item.of(MC("iron_nugget")).withChance(0.07), 
	Item.of(TE("iron_dust")).withChance(0.01)], 
	 MC('detector_rail')).processingTime(250)
event.recipes.createCrushing(
	[Item.of(MC("stick")).withChance(0.35), 
	Item.of(MC("iron_nugget")).withChance(0.07), 
	Item.of(TE("iron_dust")).withChance(0.01)], 
	MC('activator_rail')).processingTime(250)		 
event.recipes.createCrushing(
	[Item.of(MC("stick")).withChance(0.35), 
	Item.of(MC("gold_nugget")).withChance(0.07), 
	Item.of(TE("gold_dust")).withChance(0.01)], 
	MC('powered_rail')).processingTime(250)

event.smoking('minecraft:cooked_chicken', 'chickens:chicken_item').xp(0.25)

event.recipes.createCrushing([Item.of(AC('neptunium_ingot', 2)), Item.of(AC('neptunium_nugget', 5)).withChance(.5)], AC('neptunes_bounty')).processingTime(500)

event.replaceInput({ id: "architects_palette:withered_bone_block" }, AP('withered_bone'), TC('necrotic_bone'))
event.remove({ id: "architects_palette:withered_bone" })

/*event.remove({ output: TC('obsidian_pane') })
event.shaped(TC('obsidian_pane', 8), [
		'SSS',
		'SSS'
	], {
		S: MC('obsidian')
	})*/
event.custom({
	"type": "tconstruct:melting",
	"ingredient": {
		"tag": "forge:rods/blaze"
	},
	"result": {
		"fluid": "tconstruct:blazing_blood",
		"amount": 100
	},
	"temperature": 790,
	"time": 40
})


////waterstrainer
event.remove({ id: 'waterstrainer:string_mesh' })
event.remove({ id: 'waterstrainer:iron_mesh' })
event.remove({ id: 'waterstrainer:obsidian_mesh' })
event.remove({ id: 'waterstrainer:strainer_survivalist' })
event.remove({ id: 'waterstrainer:strainer_survivalist_solid' })
event.remove({ id: 'waterstrainer:strainer_survivalist_reinforced' })
event.remove({ id: 'waterstrainer:strainer_fisherman' })
event.remove({ id: 'waterstrainer:strainer_fisherman_solid' })
event.remove({ id: 'waterstrainer:strainer_fisherman_reinforced' })

event.shaped('waterstrainer:strainer_survivalist', [
	'SSS',
	'MMM',
	'SSS'
], {
	M: FD('canvas'),
	S: 'minecraft:stick'
})

event.shaped('waterstrainer:strainer_fisherman', [
	'SSS',
	'MMM',
	'SSS'
], {
	M: FD('canvas'),
	S: MC('bamboo')
})

event.shaped('waterstrainer:strainer_fisherman_reinforced', [
	'SSS',
	'MAM',
	'SSS'
], {
	A: AC('neptunium_ingot'),
	M: FD('canvas'),
	S: MC('bamboo')
})

}

let float_and_lights = (event, item) => {//光辉石漂浮效果
    if (event.entity.type == 'minecraft:item' && event.entity.item == item) {
        event.entity.noGravity = true  //particle minecraft: end_rod ~ ~50 ~0.1 0.1 0.1 1 10000 force
        event.server.runCommandSilent(`particle minecraft:end_rod ${event.entity.x} ${event.entity.y} ${event.entity.z} 0 0 0 0.01 1 force`)
        //event.server.runCommandSilent(`particle minecraft:end_rod ${event.entity.x + Math.random() / 8} ${event.entity.y + Math.random() / 8} ${event.entity.z + Math.random() / 8} 0 0 0.05 0.01 1 force`)
        //event.server.runCommandSilent(`particle minecraft:end_rod ${event.entity.x + Math.random() / 8} ${event.entity.y + Math.random() / 8} ${event.entity.z + Math.random() / 8} 0 0 0.05 0.01 1 force`)
    }
}

onEvent('entity.spawned', event => {
    float_and_lights(event, KJ("radiant_coil"))
	float_and_lights(event, KJ("radiant_sheet"))
	float_and_lights(event, KJ("radiant_wire"))
	float_and_lights(event, KJ("radiant_rod"))
	float_and_lights(event, KJ("shadow_steel_rod"))

})
