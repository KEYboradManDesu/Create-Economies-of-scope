
onEvent('recipes', event => {
	heavysteelmachine(event)
})

function heavysteelmachine(event) {

event.remove({ output: 'compressedcreativity:brass_gilded_lapis_lazuli' })//黄铜镀层青金石
event.recipes.createMixing('compressedcreativity:brass_gilded_lapis_lazuli', [MC('lapis_lazuli'), Fluid.of(TC("molten_brass"), 45)])


//红石通量单元
event.remove({ id: TE("energy_cell") })
event.shaped(TE('energy_cell'), [
	' S ',
	'SCS',
	' S '
], {
	C: TE('energy_cell_frame'),
	S: TE('rf_coil')
})
//红石通量单元框架
event.remove({ id: TE("energy_cell_frame") })
event.shaped(TE('energy_cell_frame', 2), [
	'S S',
	' C ',
	'S S'
], {
	C: TE('electrum_gear'),
	S: TE('lead_plate')
})

//钢机壳
event.remove({ id: MEK("steel_casing") })
event.custom({
	"type": "tconstruct:casting_basin",
	"cast": {
		"item": TE("energy_cell_frame")
	},
	"cast_consumed": true,
	"fluid": {
		"name": "tconstruct:molten_steel",
		"amount": 360
	},
	"result": Item.of(MEK("steel_casing")),
	"cooling_time": 20
})


event.remove({ id: /mekanism:factory\/basic\/.*/ })
event.remove({ id: /mekanism:factory\/advanced\/.*/ })
event.remove({ id: /mekanism:factory\/elite\/.*/ })
event.remove({ id: /mekanism:factory\/ultimate\/.*/ })
event.replaceInput({ id: MEK('security_desk') }, MEK('steel_casing'), KJ('steel_machine'))



event.shaped(KJ('steel_machine'), [
	'SBS',
	'SCS',
	'SSS'
], {
	C: MEK('steel_casing'),
	B: 'create_dd:integrated_circuit',
	S: IM('component_steel')
})
let steel_machineA = (id, amount, ainput, binput, cinput, dinput) => {
	event.remove({ output: id })
	event.shaped(Item.of(id, amount), [
		' A ',
		'DCD',
		'SBS'
	], {
		C: KJ('steel_machine'),
		B: ainput,
		S: binput,
		D: cinput,
		A: dinput,
	})
}
steel_machineA(MEK('enrichment_chamber'), 1, MEK('basic_control_circuit'), PC('compressed_iron_gear'), KJ('iron_compressed_sheet'), PC('pressure_gauge'))
steel_machineA(MEK('osmium_compressor'), 1, MEK('advanced_control_circuit'), PC('compressed_iron_gear'), MEK('ingot_osmium'), MC('bucket'))
steel_machineA(MEK('combiner'), 1, MEK('elite_control_circuit'), PC('compressed_iron_gear'), F('#cobblestone'), CR('whisk'))
steel_machineA(MEK('crusher'), 1, MEK('basic_control_circuit'), PC('compressed_iron_gear'), CR('crushing_wheel'), MC('blaze_powder'))
steel_machineA(MEK('energized_smelter'), 1, MEK('basic_control_circuit'), PC('compressed_iron_gear'), TE('#glass/hardened'), MC('blast_furnace'))
steel_machineA(MEK('rotary_condensentrator'), 1, MEK('basic_control_circuit'), TE('#glass/hardened'), MEK('energy_tablet'), MEK('basic_chemical_tank'))
steel_machineA(MEK('chemical_oxidizer'), 1, MEK('basic_control_circuit'), MEK('dynamic_tank'), MEK('#personal_storage'), MEK('basic_chemical_tank'))
steel_machineA(MEK('nutritional_liquifier'), 1, MEK('basic_control_circuit'), PC('compressed_iron_gear'), MC('bowl'), CR('whisk'))
steel_machineA(MEK('chemical_infuser'), 1, MEK('basic_control_circuit'), PC('compressed_iron_gear'), MEK('basic_chemical_tank'), MEK('basic_chemical_tank'))
steel_machineA(MEK('chemical_injection_chamber'), 1, MEK('elite_control_circuit'), PC('compressed_iron_gear'), IM('heavy_engineering'), CR('electron_tube'))
steel_machineA(MEK('precision_sawmill'), 1, MEK('basic_control_circuit'), PC('compressed_iron_gear'), MC('iron_ingot'), TE('saw_blade'))
steel_machineA(MEK('chemical_dissolution_chamber'), 1, MEK('ultimate_control_circuit'), MEK('ingot_refined_obsidian'), MEK('basic_chemical_tank'), TE('#glass/hardened'))
steel_machineA(MEK('chemical_washer'), 1, MEK('ultimate_control_circuit'), MEK('ingot_refined_obsidian'), MEK('basic_fluid_tank'), MEK('basic_chemical_tank'))
steel_machineA(MEK('chemical_crystallizer'), 1, MEK('ultimate_control_circuit'), MEK('ingot_refined_obsidian'), MEK('fluorite_gem'), MEK('basic_fluid_tank'))
steel_machineA('mekanismgenerators:bio_generator', 1, MEK('basic_control_circuit'), MEK('ingot_osmium'), 'createaddition:biomass', TE('redstone_servo'))
steel_machineA('mekanismgenerators:gas_burning_generator', 1, MEK('basic_control_circuit'), MEK('ingot_osmium'), MEK('basic_chemical_tank'), MEK('electrolytic_core'))
steel_machineA('mekanismgenerators:heat_generator', 1, MEK('basic_control_circuit'), MEK('ingot_osmium'), TE('#rockwool'), TE('dynamo_magmatic'))
steel_machineA(MEK('modification_station'), 1, MEK('ultimate_control_circuit'), MEK('pellet_polonium'), MEK('hdpe_sheet'), MC('smithing_table'))
steel_machineA(MEK('robit'), 2, MEK('ultimate_control_circuit'), KJ('matter_plastics'), '#computercraft:turtle', MEK('#personal_storage'))
steel_machineA(MEK('isotopic_centrifuge'), 1, MEK('ultimate_control_circuit'), TE('lead_ingot'), KJ('matter_plastics'), MEK('basic_chemical_tank'))

let steel_machineB = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:steel_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:steel_machine', B: other_ingredient })
	}
	/*else
		event.stonecutting(Item.of(id, amount), 'kubejs:steel_machine')*/
}
steel_machineB(MEK('personal_chest'), 1, '#balm:wooden_chests')
steel_machineB(MEK('personal_barrel'), 1, F('#barrels'))


}