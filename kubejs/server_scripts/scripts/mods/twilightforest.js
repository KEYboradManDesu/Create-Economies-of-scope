
onEvent('recipes', event => {
	twilightforest(event)
})

function twilightforest(event) {
//渡鸦羽毛
event.recipes.botania.mana_infusion(TF('raven_feather'), MC('feather'), 5000)

//魔法地图核心
event.shapeless(TF('magic_map_focus'), [
	TF('raven_feather'), 
	TF('torchberries'), 
	MC('glow_berries')
])

event.remove({ id: PC("cannon_barrel") })
event.shaped(PC("cannon_barrel"), [
	'A A',
	'A A',
	'ASA',
], {
	A: ['kubejs:iron_compressed_sheet', 'create_dd:industrial_iron_sheet'],
	S: 'pneumaticcraft:pressure_tube'
})

}