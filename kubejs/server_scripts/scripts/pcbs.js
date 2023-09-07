
onEvent('recipes', event => {
	pcb(event)
})

function pcb(event) {
event.remove({ output: 'createindustry:distillation_tower_controller' })
event.remove({ output: 'createindustry:distiller' })
event.remove({ output: 'createindustry:cast_iron_distillation_controller' })
event.remove({ output: 'createindustry:machine_input' })
event.remove({ output: 'createindustry:pumpjack_crank' })
event.remove({ output: 'createindustry:deposit_scanner' })
event.remove({ output: 'createindustry:pumpjack_hammer_holder' })
event.remove({ output: 'createindustry:pumpjack_base' })
event.remove({ output: 'createindustry:distillation_tower_output' })
event.remove({ output: 'createindustry:turbine_engine' })
event.remove({ id: 'createindustry:distillation/heavy_oil' })
event.replaceOutput({ id: 'createindustry:mixing/coal_coke' }, 'createindustry:coal_coke', 'thermal:coal_coke')
event.remove({ id: "createaddition:compacting/bioethanol" })
event.remove({ id: "createaddition:mixing/bioethanol" })
event.remove({ id: /createaddition:mixing\/biomass_.*/ })
event.remove({ id: "createaddition:compacting/biomass_pellet" })
event.remove({ id: "createaddition:compacting/seed_oil" })
event.remove({ id: "immersiveengineering:squeezer/melon_seeds" })
event.remove({ id: "immersiveengineering:squeezer/beetroot_seeds" })
event.remove({ id: "immersiveengineering:squeezer/pumpkin_seeds" })
event.remove({ id: "immersiveengineering:squeezer/hemp_seeds" })
event.remove({ id: "immersiveengineering:squeezer/wheat_seeds" })
event.remove({ id: "farmersdelight:integration/immersiveengineering/squeezer/cabbage_seeds" })
event.remove({ id: "farmersdelight:integration/immersiveengineering/squeezer/tomato_seeds" })
event.remove({ id: "thermal:compat/immersiveengineering/press_ie_hemp_to_plantoil" })
event.remove({ id: PC("thermo_plant/ethanol_from_sugar") })
event.remove({ id: PC("thermo_plant/ethanol_from_poisonous_potato") })
event.remove({ id: PC("thermo_plant/ethanol_from_potato") })
event.remove({ id: PC("thermo_plant/ethanol_from_sweet_berries") })
event.remove({ id: PC("thermo_plant/ethanol_from_apple") })
event.remove({ id: PC("thermo_plant/ethanol_from_melon") })
event.remove({ id: "immersiveengineering:fermenter/beetroot" })
event.remove({ id: "immersiveengineering:fermenter/potato" })
event.remove({ id: "immersiveengineering:fermenter/glow_berries" })
event.remove({ id: "immersiveengineering:fermenter/honey" })
event.remove({ id: "immersiveengineering:fermenter/sugar_cane" })
event.remove({ id: "immersiveengineering:fermenter/sweet_berries" })
event.remove({ id: "immersiveengineering:fermenter/apple" })
event.remove({ id: "immersiveengineering:fermenter/melon_slice" })
event.remove({ id: "farmersdelight:integration/immersiveengineering/fermenter/tomato" })
event.remove({ id: "immersiveengineering:refinery/biodiesel" })
event.remove({ id: PC("fluid_mixer/biodiesel") })
event.remove({ id: 'immersivepetroleum:hydrotreater/ethylene_plastic' })
event.remove({ id: 'immersivepetroleum:hydrotreater/propylene_plastic' })
event.remove({ id: PC('pressure_chamber/empty_pcb') })
event.remove({ id: PC('print_circuit_board') })
event.remove({ id: IM('blueprint/circuit_board') })
event.replaceInput({ id: IM("crafting/logic_unit") }, IM('circuit_board'), PC('empty_pcb'))
event.remove({ id: MEK("control_circuit/basic") })
event.remove({ id: 'pneumaticcraft:printed_circuit_board' })
event.replaceInput(PC("printed_circuit_board"), MEK("basic_control_circuit"));
event.remove({ id: PC("pressure_chamber/transistor") })
event.remove({ id: MEK("control_circuit/advanced") })
event.remove({ id: MEK("control_circuit/elite") })
event.remove({ id: MEK("control_circuit/ultimate") })
event.replaceInput(
	"pneumaticcraft:transistor",
	Ingredient.of([Item.of("createaddition:capacitor")])
)

//////酵母菌相关

////蘑菇加工
//动力搅拌机加工蘑菇
event.recipes.createMixing([Fluid.of(PC('yeast_culture'), 100)], [F('#mushrooms'), Fluid.of(MC('water'), 1000)]).heated()
//动力辊压机挤压蘑菇
event.recipes.createCompacting(Fluid.of(PC('yeast_culture'), 5), [F('#mushrooms'), Fluid.of(MC('water'), 100)]).heated()
//工业挤压机挤压蘑菇
event.custom({
    "type":"immersiveengineering:squeezer",
	"result":{"item":"botania:mycelium_seeds"},//副产物：菌丝孢子
    "fluid":{"fluid":"pneumaticcraft:yeast_culture","amount": 50 },
    "input":{"tag":"forge:mushrooms"},
    "energy": 18000
})

////菌丝孢子再利用
//动力搅拌机加工菌丝孢子
event.recipes.createMixing([Fluid.of(PC('yeast_culture'), 200)], [BO('mycelium_seeds'), Fluid.of(MC('water'), 1000)]).heated()
//菌丝孢子缠魂
event.recipes.createSplashing([
	Item.of(SP('ash')).withChance(0.75),
	Item.of(TE('redstone_mushroom_spores')).withChance(0.0625),
	Item.of(TE('glowstone_mushroom_spores')).withChance(0.0625),
	Item.of(TE('slime_mushroom_spores')).withChance(0.0625),
	Item.of(TE('gunpowder_mushroom_spores')).withChance(0.0625),
], BO('mycelium_seeds'))

////酵母菌再生
//动力搅拌再生酵母菌
event.recipes.createMixing([Fluid.of(PC('yeast_culture'), 300)], [MC('sugar'), Fluid.of('immersiveengineering:plantoil', 150), Fluid.of(PC('yeast_culture'), 150)]).heated()
//酵母面包
event.remove({ id: PC("sourdough") })
event.recipes.createFilling(PC("sourdough"), [F('#dough'), Fluid.of(PC('yeast_culture'), 125)])
event.shapeless(PC("sourdough", 8), [PC('yeast_culture_bucket'), F('#dough'), F('#dough'), F('#dough'), F('#dough'), F('#dough'), F('#dough'), F('#dough'), F('#dough')])


//////乙醇相关

////生物质
//动力辊压加工
event.recipes.createCompacting(['createaddition:biomass'], ['createaddition:biomass_pellet', Fluid.of('pneumaticcraft:yeast_culture', 150)]).heated()
//动力辊压生物质
event.recipes.createCompacting([Fluid.of(('immersiveengineering:ethanol'), 50)], ['createaddition:biomass']).heated()
//工业发酵生物质
event.custom({
    "type":"immersiveengineering:fermenter",
    "fluid":{"fluid":"immersiveengineering:ethanol","amount": 80},
    "input":{"item":"createaddition:biomass"},
    "energy": 10000
})

///植物油
//树油转化植物油
event.recipes.createMixing([Fluid.of('immersiveengineering:plantoil', 1)], [Fluid.of(TE('tree_oil'), 5)]).heated().processingTime(5)
//树油获取
event.recipes.createMixing([
	Fluid.of(TE('tree_oil'), 100),
	Item.of(TE('rosin')).withChance(0.75)
], [Fluid.of(TE('resin'), 200)]).heated()
//动力辊压植物油
event.recipes.createCompacting([Fluid.of(('immersiveengineering:plantoil'), 160), Fluid.of(('immersiveengineering:ethanol'), 50)], [KJ("#oil_crops", 2)]).superheated()
event.recipes.createCompacting([Fluid.of(('immersiveengineering:plantoil'), 75), Fluid.of(('immersiveengineering:ethanol'), 15)], [F("#seeds", 2)]).superheated()
event.recipes.createCompacting([Fluid.of(('immersiveengineering:plantoil'), 160), Fluid.of(('immersiveengineering:ethanol'), 50)], [IM("seed", 2)]).superheated()
//工业挤压植物油
event.custom({
    "type":"immersiveengineering:squeezer",
	"result":{"item":"createaddition:biomass_pellet", "count":2 },//副产物：生物质颗粒x2
    "fluid":{"fluid":"immersiveengineering:plantoil","amount": 80 },
    "input":{"tag":"kubejs:oil_crops"},//输入：油性农作物
    "energy": 15000
})
event.custom({
    "type":"immersiveengineering:squeezer",
	"result":{"item":"createaddition:biomass_pellet", "count":1 },//副产物：生物质颗粒
    "fluid":{"fluid":"immersiveengineering:plantoil","amount": 50 },
    "input":{"tag":"forge:seeds"},//输入：种子
    "energy": 15000
})
event.custom({
    "type":"immersiveengineering:squeezer",
	"result":{"item":"createaddition:biomass_pellet", "count":2 },//副产物：生物质颗粒x2
    "fluid":{"fluid":"immersiveengineering:plantoil","amount": 80 },
    "input":{"item":"immersiveengineering:seed"},//输入：工业大麻种子
    "energy": 15000
})
//热气动加工机挤压植物油
event.custom({
	"type": "pneumaticcraft:thermo_plant",
	"item_input": {
	  "tag": "kubejs:oil_crops"//输入：油性农作物
	},
	"item_output": {
	  "item": "createaddition:biomass_pellet",//副产物：生物质颗粒x6
	  "count": 6
	},
	"fluid_output": {
	  "fluid": "immersiveengineering:plantoil",
	  "amount": 20
	},
	"pressure": 2.0,
	"speed": 0.5,
	"exothermic": false
})
event.custom({
	"type": "pneumaticcraft:thermo_plant",
	"item_input": {
	  "tag": "forge:seeds"//输入：种子
	},
	"item_output": {
		"item": "createaddition:biomass_pellet",//副产物：生物质颗粒x2
		"count": 2
	  },
	"fluid_output": {
	  "fluid": "immersiveengineering:plantoil",
	  "amount": 20
	},
	"pressure": 2.0,
	"speed": 0.5,
	"exothermic": false
})
event.custom({
	"type": "pneumaticcraft:thermo_plant",
	"item_input": {
	  "item": "immersiveengineering:seed"//输入：工业大麻种子
	},
	"item_output": {
		"item": "createaddition:biomass_pellet",//副产物：生物质颗粒x4
		"count": 4
	  },
	"fluid_output": {
	  "fluid": "immersiveengineering:plantoil",
	  "amount": 50
	},
	"pressure": 2.0,
	"speed": 0.5,
	"exothermic": false
})


//////生物柴油相关

//机械搅拌加工
event.recipes.createMixing([
	Fluid.of(IM('biodiesel'), 12),
	Item.of(PC('glycerol')).withChance(0.75)
], 
	[F('#dusts/saltpeter'), 
	Fluid.of('immersiveengineering:plantoil', 6), 
	Fluid.of(IM('ethanol'), 6)
]).superheated().processingTime(12)
//沉浸炼油厂加工
event.custom({
	"type":"immersiveengineering:refinery",
	"result":{"fluid":"immersiveengineering:biodiesel","amount":32},
	"catalyst":{"tag":"forge:dusts/saltpeter"},
	"input0":{"tag":"forge:plantoil","amount":16},
	"input1":{"tag":"forge:ethanol","amount":16},
	"energy":80
})
//气动流体混合机加工
event.custom({
	"type": "pneumaticcraft:fluid_mixer",
	"input1": {
	  "type": "pneumaticcraft:fluid",
	  "tag": "forge:plantoil",
	  "amount": 16
	},
	"input2": {
	  "type": "pneumaticcraft:fluid",
	  "tag": "forge:ethanol",
	  "amount": 16
	},
	"fluid_output": {
	  "fluid": "immersiveengineering:biodiesel",
	  "amount": 16
	},
	"item_output": {
	  "item": "pneumaticcraft:glycerol"
	},
	"pressure": 2.0,
	"time": 300
})


//////塑料相关
//塑料片成型
event.recipes.createCompacting(PC("plastic"), [Fluid.of(PC('plastic'), 1000)])
//塑料加工
event.custom({//乙烯加工塑料
	"type": "immersivepetroleum:hydrotreater",
	"time": 60,
	"energy": 61440,
	"result": {
	  "fluid": "pneumaticcraft:plastic",
	  "amount": 1000
	},
	"conditions": [
	  {
		"modid": "pneumaticcraft",
		"type": "forge:mod_loaded"
	  }
	],
	"input": {
	  "tag": "forge:ethylene",
	  "amount": 100
	},
	"secondary_result": {
	  "item": "thermal:bitumen",
	  "chance": "0.1"
	}
})
event.custom({//生物柴油加工塑料
	"type": "immersivepetroleum:hydrotreater",
	"time": 60,
	"energy": 61440,
	"result": {
	  "fluid": "pneumaticcraft:plastic",
	  "amount": 1000
	},
	"conditions": [
	  {
		"modid": "pneumaticcraft",
		"type": "forge:mod_loaded"
	  }
	],
	"input": {
	  "tag": "forge:biodiesel",
	  "amount": 200
	}
})
event.custom({//丙烯加工塑料
	"type": "immersivepetroleum:hydrotreater",
	"time": 60,
	"energy": 61440,
	"result": {
	  "fluid": "pneumaticcraft:plastic",
	  "amount": 2000
	},
	"conditions": [
	  {
		"modid": "pneumaticcraft",
		"type": "forge:mod_loaded"
	  }
	],
	"input": {
	  "tag": "forge:propylene",
	  "amount": 100
	},
	"secondary_result": {
	  "item": "thermal:bitumen",
	  "chance": "0.2"
	}
})


//////电路板相关

//空pcb
let epcb = KJ('incomplete_pcb')
	event.recipes.createSequencedAssembly([
		Item.of(PC("empty_pcb")),
	],Item.of(IM("plate_duroplast")), [
		event.recipes.createFilling(epcb, [epcb, Fluid.of(TC("molten_electrum"), 30)]),
		event.recipes.createFilling(epcb, [epcb, Fluid.of(PC("plastic"), 200)]),
	]).transitionalItem(epcb)
		.loops(1)
		.id('kubejs:epcb')
//pcb刻蚀
//25%~50%
let pcb1 = KJ('incomplete_unassembled_pcb')
	event.recipes.createSequencedAssembly([
		Item.of(PC("unassembled_pcb")).withChance(0.50),
		Item.of(PC("failed_pcb")).withChance(0.50),
	], [
		Item.of('pneumaticcraft:empty_pcb', '{"pneumaticcraft:uv_exposure":25}'),
		Item.of('pneumaticcraft:empty_pcb', '{"pneumaticcraft:uv_exposure":50}')], [
		event.recipes.createFilling(pcb1, [pcb1, Fluid.of(PC("etching_acid"), 100)]),
	]).transitionalItem(pcb1)
		.loops(10)
		.id('kubejs:empty_pcb1')
//75%
let pcb2 = KJ('incomplete_unassembled_pcb')
	event.recipes.createSequencedAssembly([
		Item.of(PC("unassembled_pcb")).withChance(0.75),
        Item.of(PC("failed_pcb")).withChance(0.25),
	], [
		Item.of('pneumaticcraft:empty_pcb', '{"pneumaticcraft:uv_exposure":75}')], [
		event.recipes.createFilling(pcb2, [pcb2, Fluid.of(PC("etching_acid"), 100)]),
	]).transitionalItem(pcb2)
		.loops(10)
		.id('kubejs:empty_pcb2')
//100%
let pcb3 = KJ('incomplete_unassembled_pcb')
	event.recipes.createSequencedAssembly([
		Item.of(PC("unassembled_pcb")),
	], [Item.of('pneumaticcraft:empty_pcb', '{"pneumaticcraft:uv_exposure":100}')], [
		event.recipes.createFilling(pcb3, [pcb3, Fluid.of(PC("etching_acid"), 100)]),
	]).transitionalItem(pcb3)
		.loops(10)
		.id('kubejs:empty_pcb3')

//刻蚀酸
event.recipes.createMixing(Fluid.of('pneumaticcraft:etching_acid', 500), [
	Fluid.of('immersiveengineering:redstone_acid', 250), 
	'kubejs:earth_slimy_fern_paste', 
])

////pcbs
//一级pcb
let fpcb = PC("unassembled_pcb")
	event.recipes.createSequencedAssembly([
		MEK("basic_control_circuit"),
	], PC("unassembled_pcb"), [
		event.recipes.createDeploying(fpcb, [fpcb, 'create_dd:integrated_circuit']),
		event.recipes.createDeploying(fpcb, [fpcb, [CR('electron_tube'), IM('electron_tube')]]),
		event.recipes.createDeploying(fpcb, [fpcb, [CR('electron_tube'), IM('electron_tube')]]),
	]).transitionalItem(fpcb)
		.loops(1)
		.id('kubejs:basic_control_circuit')

let fpcb2 = PC("unassembled_pcb")
	event.recipes.createSequencedAssembly([
		MEK("basic_control_circuit"),
	], PC("unassembled_pcb"), [
		event.recipes.createDeploying(fpcb2, [fpcb2, 'createaddition:capacitor']),
		event.recipes.createDeploying(fpcb2, [fpcb2, 'createaddition:capacitor']),
		event.recipes.createDeploying(fpcb2, [fpcb2, [CR('electron_tube'), IM('electron_tube')]]),
	]).transitionalItem(fpcb2)
		.loops(2)
		.id('kubejs:basic_control_circuit2')

//二级pcb
let f2pcb = KJ("incomplete_advanced_control_circuit")
	event.recipes.createSequencedAssembly([
		MEK("advanced_control_circuit"),
	], [MEK("basic_control_circuit"), KJ("radiance_control_circuit")], [
		event.recipes.createFilling(f2pcb, [f2pcb, Fluid.of(TC("molten_signalum"), 15)])
	]).transitionalItem(f2pcb)
		.loops(2)
		.id('kubejs:advanced_printed_circuit_board')

//三级pcb
let f3pcb = KJ("incomplete_advanced_control_circuit")
	event.recipes.createSequencedAssembly([
		MEK("elite_control_circuit"),
	], [MEK("basic_control_circuit"), KJ("radiance_control_circuit")], [
		event.recipes.createFilling(f3pcb, [f3pcb, Fluid.of(TC("molten_enderium"), 30)]),
		event.recipes.createDeploying(f3pcb, [f3pcb, 'kubejs:hop_slime'])
	]).transitionalItem(f3pcb)
		.loops(3)
		.id('kubejs:elite_printed_circuit_board')

//高定向热解石莱姆
event.shaped('kubejs:hop_slime', [
	'SSS',
	'SCS',
	'SSS'
], {
	C: [KJ('creosote_ball'), '#forge:slimeballs'],
	S: [IM('dust_hop_graphite'), IM('ingot_hop_graphite')]
})

//四级pcb
let f4pcb = KJ("incomplete_ultimate_control_circuit")
	event.recipes.createSequencedAssembly([
		MEK("ultimate_control_circuit"),
	], [MEK("basic_control_circuit"), KJ("radiance_control_circuit")], [
		event.recipes.createFilling(f4pcb, [f4pcb, Fluid.of(KJ("matter_plastics"), 90)]),
		event.recipes.createFilling(f4pcb, [f4pcb, Fluid.of(KJ("matrix"), 25)]),
		event.recipes.createDeploying(f4pcb, [f4pcb, 'kubejs:thermal_grease'])
	]).transitionalItem(f4pcb)
		.loops(1)
		.id('kubejs:ultimate_printed_circuit_board')

let f4pcb2 = KJ("incomplete_ultimate_control_circuit")
	event.recipes.createSequencedAssembly([
		MEK("ultimate_control_circuit"),
	], [MEK("basic_control_circuit"), KJ("radiance_control_circuit")], [
		event.recipes.createFilling(f4pcb2, [f4pcb2, Fluid.of(KJ("matter_plastics"), 90)]),
		event.recipes.createFilling(f4pcb2, [f4pcb2, Fluid.of(KJ("raw_logic"), 120)]),
		event.recipes.createDeploying(f4pcb2, [f4pcb2, 'kubejs:thermal_grease'])
	]).transitionalItem(f4pcb2)
		.loops(1)
		.id('kubejs:ultimate_printed_circuit_board2')

//散热硅脂
event.shaped('kubejs:thermal_grease', [
	'CS',
	'BC'
], {
	C: AE2('silicon'),
	S: CR('iron_sheet'),
	B: MC('iron_nugget'),
})
}