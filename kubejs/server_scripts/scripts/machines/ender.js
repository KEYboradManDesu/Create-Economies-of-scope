
onEvent('recipes', event => {
	enderMachine(event)
})

function enderMachine(event) {

event.remove({ id: TE("machines/crucible/crucible_ender_pearl") })
event.remove({ id: TE("machines/smelter/smelter_alloy_enderium") })
//event.recipes.createMixing(Fluid.of(TE("ender"), 576), [Fluid.of('tconstruct:molten_silver', 144), Fluid.of('tconstruct:ender_slime', 1000)]).heated()
//event.recipes.createMixing(Fluid.of(TC("ender_slime"), 1000), [Fluid.of('createcafe:melted_sugar', 950), "moreminecarts:levitation_powder"]).heated()
//event.recipes.createCompacting(AP("oracle_jelly"), [Fluid.of(TC('ender_slime'), 250)])
//event.recipes.botania.mana_infusion("moreminecarts:levitation_powder", AE2('ender_dust'), 750)//魔力转化悬浮粉
//event.recipes.thermal.smelter(TE("enderium_ingot", 8), [F("#ingots/silver", 4), F("#ingots/lead", 4), AP("oracle_jelly", 1)]).energy(10000)
//event.recipes.thermal.smelter(AP("oracle_jelly", 4), [MC("sugar", 4), 'moreminecarts:levitation_powder']).energy(8000)

/*//天蓝冰淇淋
event.recipes.createMixing(Fluid.of(KJ("zure_berry_ice_cream"), 500), [Fluid.of('minecraft:milk', 250), "neapolitan:ice_cubes", "minecraft:sugar", "enlightened_end:zure_berry"])
event.recipes.thermal.chiller("exquisito:zure_berry_ice_cream_block", [Fluid.of(KJ("zure_berry_ice_cream"), 250)]).energy(1000)
event.recipes.createFilling('exquisito:zure_berry_ice_cream', ['minecraft:bowl', Fluid.of(KJ("zure_berry_ice_cream"), 500)])*/

//event.recipes.thermal.insolator(['enlightened_end:cerulean_vine_tip'], 'enlightened_end:zure_berry').water(1000)
//event.recipes.thermal.insolator(['tconstruct:ender_slime_ball', '3x enlightened_end:zure_berry'], 'enlightened_end:cerulean_vine_tip').water(1000)

//event.recipes.thermal.smelter(TE("enderium_ingot"), [TE("silver_ingot"), ["enlightened_end:zure_berry", "exquisito:zure_berry_ice_cream_block"], MC("ender_pearl")]).energy(10000)
//event.recipes.thermal.smelter(TE("enderium_ingot"), [TE("silver_ingot"), ["enlightened_end:zure_berry", "exquisito:zure_berry_ice_cream_block"], AE2("ender_dust", 4)]).energy(10000)

event.custom({
	"type": "thermal:smelter",
	"ingredient": [{
	  "item": "kubejs:inductive_mechanism"
	},
	{
	  "item": "thermal:enderium_gear",
		  "count": 2
	}
  ],
	"result": [
	  {
		"item": "kubejs:abstruse_mechanism",
		"chance": 0.9,
		"locked": true
	  },
	  {
		"item": "kubejs:abstruse_mechanism",
		"chance": 0.1,
		"locked": false
	  }
	]
})

event.custom({
	"type": "thermal:smelter",
	"ingredient": [{
	  "item": "kubejs:inductive_mechanism",
	  "count": 1
	},
	{
	  "item": "mekanism:elite_control_circuit",
		  "count": 1
	}
  ],
	"result": [
	  {
		"item": "kubejs:abstruse_mechanism",
		"chance": 0.9,
		"count": 2,
		"locked": true
	  },
	  {
		"item": "kubejs:abstruse_mechanism",
		"count": 1,
		"chance": 0.1,
		"locked": false
	  }
	]
})

let t = KJ('incomplete_abstruse_mechanism')
event.recipes.createSequencedAssembly([
KJ('abstruse_mechanism'),
], KJ('inductive_mechanism'), [
event.recipes.createDeploying(t, [t, TE('enderium_gear')]),
event.recipes.createDeploying(t, [t, TE('enderium_gear')]),
]).transitionalItem(t)
.loops(1)
.id('kubejs:abstruse_mechanism1')

let t2 = KJ('incomplete_abstruse_mechanism')
event.recipes.createSequencedAssembly([
KJ('abstruse_mechanism', 2),
], KJ('inductive_mechanism'), [
event.recipes.createDeploying(t2, [t2, MEK('elite_control_circuit')]),
]).transitionalItem(t2)
.loops(1)
.id('kubejs:abstruse_mechanism2')

event.custom({
	type: 'thermal:press',
	ingredients: [
		Ingredient.of(TE('enderium_coin', 6)),
		Ingredient.of(KJ('enderium_casing')),
	],
	result: [
		Item.of(KJ('enderium_machine'))
	],
	energy: 1000
})

event.shaped(KJ('enderium_machine'), [
	'SSS',
	'SCS',
	'SSS'
], {
	C: KJ('enderium_casing'),
	S: KJ('abstruse_mechanism')
})

let ender_machine = (id, amount, other_ingredient) => {
	event.remove({ output: id })
	if (other_ingredient) {
		event.smithing(Item.of(id, amount), 'kubejs:enderium_machine', other_ingredient)
		event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:enderium_machine', B: other_ingredient })
	}
	else
	event.stonecutting(Item.of(id, amount), 'kubejs:enderium_machine')
}

ender_machine("enderstorage:ender_chest", 1, MC('chest'))
ender_machine("enderstorage:ender_tank", 1, CR('fluid_tank'))
ender_machine("portality:controller", 1, MC('diamond'))
ender_machine(TE("upgrade_augment_3"), 1, MC('redstone'))
ender_machine(TE("dynamo_lapidary"), 1, TE('rf_coil'))
ender_machine(AE2("quantum_ring"), 1, AE2('energy_cell'))
ender_machine(AE2("quantum_link"), 1, AE2('fluix_pearl'))
ender_machine('kubejs:pipe_module_tier_3', 4)

}