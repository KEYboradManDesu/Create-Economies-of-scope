
onEvent('recipes', event => {
	fluixMachine(event)
})

function fluixMachine(event) {

event.shaped(KJ("boot_medium"), [
	'SCA'
], {
	A: TC('cobalt_ingot'),
	C: AE2('logic_processor'),
	S: MC('iron_ingot')
})

let t = KJ('incomplete_calculation_mechanism')
event.recipes.createSequencedAssembly([
	KJ('calculation_mechanism'),
], KJ('inductive_mechanism'), [
	event.recipes.createDeploying(t, [t, AE2('printed_silicon')]),
	event.recipes.createDeploying(t, [t, AE2('printed_silicon')]),
	event.recipes.createDeploying(t, [t, '#forge:boot_mediums'])
]).transitionalItem(t)
	.loops(1)
	.id('kubejs:calculation_mechanism')

let t2 = KJ('incomplete_calculation_mechanism')
event.recipes.createSequencedAssembly([
	KJ('calculation_mechanism', 2),
], KJ('inductive_mechanism'), [
	event.recipes.createDeploying(t2, [t2, MEK('ultimate_control_circuit')])
]).transitionalItem(t2)
	.loops(1)
	.id('kubejs:calculation_mechanism2')

event.remove({ output: 'computercraft:computer_normal' })
event.shaped('computercraft:computer_normal', [
	'SSS',
	'SCS',
	'SSS'
], {
	C: KJ('fluix_casing'),
	S: KJ('calculation_mechanism')
})
event.remove({ output: 'computercraft:computer_advanced' })
event.shaped('computercraft:computer_advanced', [
	' S ',
	'SCS',
	' S '
], {
	C: 'computercraft:computer_normal',
	S: TE('electrum_gear')
})
event.remove({ output: 'computercraft:turtle_advanced' })
event.shaped('computercraft:turtle_advanced', [
	' S ',
	'SCS',
	' S '
], {
	C: 'computercraft:turtle_normal',
	S: TE('electrum_gear')
})
event.remove({ output: 'computercraft:pocket_computer_advanced' })
event.shaped('computercraft:pocket_computer_advanced', [
	' S ',
	'SCS',
	' S '
], {
	C: 'computercraft:pocket_computer_normal',
	S: TE('electrum_gear')
})

event.shaped('computercraft:wired_modem_full', [
	'S'
], {
	S: 'computercraft:wired_modem'
})
event.shaped('computercraft:wired_modem', [
	'S'
], {
	S: 'computercraft:wired_modem_full'
})

let fluix_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'computercraft:computer_normal', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'computercraft:computer_normal', B: other_ingredient })
	}
	else
		event.stonecutting(Item.of(id, amount), 'computercraft:computer_normal')
}

fluix_machine('computercraft:turtle_normal', 1, TE("invar_gear"))
fluix_machine('computercraft:pocket_computer_normal', 1, MC("golden_apple"))
fluix_machine('computercraft:monitor_normal', 2, AE2("view_cell"))
fluix_machine('computercraft:wired_modem', 4)
fluix_machine('computercraft:cable', 16)
fluix_machine('computercraft:speaker', 1, MC("note_block"))
fluix_machine('computercraft:disk_drive', 1, 'computercraft:disk')
fluix_machine('computercraft:wireless_modem_normal', 1, TE("iron_gear"))
fluix_machine('computercraft:wireless_modem_advanced', 1, TE("enderium_gear"))
fluix_machine(AE2('condenser'), 1, AE2("fluix_pearl"))

event.replaceInput({ id: AE2("network/cells/storage_components_cell_1k_part") }, MC("redstone"), KJ('calculation_mechanism'))
event.replaceInput({ id: AE2("network/cells/storage_components_cell_1k_part") }, AE2("logic_processor"), F('#dusts/redstone'))
event.replaceInput({ id: AE2("network/cells/fluid_storage_components_cell_1k_part") }, MC("green_dye"), KJ('calculation_mechanism'))
event.replaceInput({ id: AE2("network/cells/fluid_storage_components_cell_1k_part") }, AE2("logic_processor"), F('#dyes/green'))
event.replaceInput({ id: AE2("network/cells/spatial_components") }, MC("glowstone_dust"), KJ('calculation_mechanism'))
event.replaceInput({ id: AE2("network/cells/spatial_components") }, AE2("engineering_processor"), F('#dusts/glowstone'))
event.replaceInput({ id: AE2("network/crafting/patterns_blank") }, MC("glowstone_dust"), KJ('calculation_mechanism'))
event.recipes.thermal.smelter(AE2("fluix_crystal", 2), [AE2("#crystals/nether"), AE2("charged_certus_quartz_crystal"), MC("redstone")]).energy(4000)

}