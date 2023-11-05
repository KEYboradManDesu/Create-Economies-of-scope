
onEvent('recipes', event => {
	pcb(event)
})

function pcb(event) {
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