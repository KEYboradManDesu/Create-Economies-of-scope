
onEvent('recipes', event => {
	rune(event)
})

function rune(event) {

//一级符文	
event.remove({ output: BO('rune_water') })//水之符文
event.recipes.botania.runic_altar(BO("rune_water", 2), [
	BO('mana_powder'), 
	BO('manasteel_ingot'), 
	AC('iron_hook'), 
	MC('kelp'), 
], 4500)
event.recipes.botania.runic_altar(BO("rune_water", 6), [
	BO('mana_powder'), 
	BO('manasteel_ingot'), 
	BO('manasteel_ingot'), 
	AC('gold_hook'), 
	'upgrade_aquatic:polar_kelp', 
], 8000)

event.remove({ output: BO('rune_air') })//风之符文
event.recipes.botania.runic_altar(BO("rune_air", 2), [
	BO('mana_powder'), 
	BO('manasteel_ingot'), 
	CR('propeller'), 
	MC('feather'), 
	MC('#carpets'), 
], 4500)
event.recipes.botania.runic_altar(BO("rune_air", 8), [
	BO('mana_powder'), 
	BO('manasteel_ingot'), 
	BO('manasteel_ingot'), 
	CR('propeller'),
	FA('golden_feather'), 
	IM('hemp_fabric'), 
], 8000)

event.remove({ output: BO('rune_earth') })//地之符文
event.recipes.botania.runic_altar(BO("rune_earth", 2), [
	BO('mana_powder'), 
	BO('manasteel_ingot'), 
	MC('#saplings'), 
	MC('#dirt'), 
	MC('bone_meal'), 
], 4500)
event.recipes.botania.runic_altar(BO("rune_earth", 8), [
	BO('mana_powder'), 
	BO('manasteel_ingot'), 
	BO('manasteel_ingot'), 
	ARS('green_archwood_sapling'), 
	MC('#dirt'), 
	FA('arcane_bone_meal'), 
], 8000)

event.remove({ output: BO('rune_fire') })//火之符文
event.recipes.botania.runic_altar(BO("rune_fire", 2), [
	BO('mana_powder'), 
	BO('manasteel_ingot'), 
	[TE('sulfur_dust'), MC('gunpowder')], 
	CR('cinder_flour'), 
	MC('nether_wart'), 
], 4500)
event.recipes.botania.runic_altar(BO("rune_fire", 8), [
	BO('mana_powder'), 
	BO('manasteel_ingot'), 
	BO('manasteel_ingot'), 
	MC('gunpowder'), 
	MC('fire_charge'), 
], 8000)

event.remove({ output: BO('rune_mana') })//魔力符文
event.recipes.botania.runic_altar(BO("rune_mana"), [
	BO('mana_powder'), 
	BO('mana_pearl'), 
	BO('manasteel_ingot')
], 10000)
}