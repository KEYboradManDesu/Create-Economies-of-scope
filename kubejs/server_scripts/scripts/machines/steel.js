
onEvent('recipes', event => {
	steelmachine(event)
})

function steelmachine(event) {
event.remove({ id: "createaddition:crafting/modular_accumulator" })
event.remove({ id: "createaddition:crafting/accumulator_conversion" })
event.remove({ id: "createaddition:crafting/capacitor_1" })
event.remove({ id: "createaddition:crafting/capacitor_2" })
event.remove({ output: 'createindustry:saltpeter' })
event.replaceOutput('createindustry:sulfur_powder',Ingredient.of('thermal:sulfur_dust'));	

//红石酸
event.remove({ id: IM("crafting/redstone_acid") })
event.remove({ id: IM("mixer/redstone_acid") })
event.recipes.createMixing(Fluid.of(IM("redstone_acid"), 200), [Fluid.of(MC("water"), 200), F('#dusts/redstone'), F('#dusts/saltpeter')])
event.recipes.createMixing(Fluid.of(IM("redstone_acid"), 200), [Fluid.of(TE("redstone"), 250), F('#dusts/saltpeter')])

//亚硝酸盐
event.recipes.createSplashing([
	Item.of(MC('red_sand', 3)).withChance(0.3),
	Item.of(IM('dust_saltpeter')).withChance(0.55),
	Item.of(MC('gold_nugget', 4)).withChance(0.25),
], '#forge:sandstone/red')

event.recipes.createSplashing([
	Item.of(IM('dust_saltpeter')).withChance(0.40),
], 'minecraft:dirt')

event.recipes.createSplashing([
	Item.of(IM('dust_saltpeter')).withChance(0.50),
], 'minecraft:coarse_dirt')

event.recipes.createSplashing([
	Item.of(IM('dust_saltpeter', 1)).withChance(0.85),
	Item.of(IM('dust_saltpeter', 2)).withChance(0.15)
], TE('niter_dust'))

//电池	
event.recipes.createFilling(KJ('battery_incomplete'), [TE('redstone_servo'), Fluid.of(IM('redstone_acid'), 50)])
event.custom({
	type: "createaddition:charging",
	input: {
		item: KJ('battery_incomplete'),
		count: 1,
	},
	result: {
		item: KJ('battery'),
		count: 1,
	},
	energy: 8000,
});

//铁机械零件
event.remove({ id: IM("crafting/component_iron") })
event.remove({ id: IM("blueprint/component_iron") })
event.custom({"type":"immersiveengineering:blueprint",
    "inputs":[
        {"item":"thermal:iron_gear"}, {"item":"createaddition:copper_wire"}],
    "category":"components",
    "result":{"item":"immersiveengineering:component_iron"}
})

//马达
let mo = 'create_dd:industrial_iron_sheet'
event.recipes.createSequencedAssembly([
	KJ('motor'),
], 'create_dd:industrial_iron_sheet', [
	event.recipes.createDeploying(mo, [mo, CR('shaft')]),
	event.recipes.createDeploying(mo, [mo, IM('component_iron')]),
	event.recipes.createDeploying(mo, [mo, '#forge:prospector_tool']),
]).transitionalItem(mo)
	.loops(1)
	.id('kubejs:motor')

//钢机械零件	
event.remove({ id: IM("crafting/component_steel") })
event.remove({ id: IM("blueprint/component_steel") })
let cs = 'create:precision_mechanism'
event.recipes.createSequencedAssembly([
	IM('component_steel'),
], 'create:precision_mechanism', [
	event.recipes.createDeploying(cs, [cs, KJ('motor')]),
	event.recipes.createDeploying(cs, [cs, KJ('battery')]),
	event.recipes.createDeploying(cs, [cs, 'alloyed:steel_sheet']),
]).transitionalItem(cs)
	.loops(1)
	.id('kubejs:component_steel')

event.custom({"type":"immersiveengineering:blueprint",
    "inputs":[
        {"item":"create:precision_mechanism"}, {"item":"kubejs:battery"}, {"item":"kubejs:motor"}, {"item":"alloyed:steel_sheet"}],
    "category":"components",
    "result":{"item":"immersiveengineering:component_steel"}
})

event.remove({ output: 'create_dd:steel_casing' })
event.shaped('create_dd:steel_casing', [
	' S ',
	'SCS',
	' S '
], {
	C: 'createindustry:steel_casing',
	S: 'immersiveengineering:component_steel'
})

let steel_engineering = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'create_dd:steel_casing', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'create_dd:steel_casing', B: other_ingredient })
	}
	else
	event.stonecutting(Item.of(id, amount), 'create_dd:steel_casing')
}
	
steel_engineering(IM('light_engineering'), 4, CR('brass_ingot'))
steel_engineering(IM('rs_engineering'), 4, MC('redstone'))
steel_engineering(IM('heavy_engineering'), 4, TE('electrum_ingot'))

}