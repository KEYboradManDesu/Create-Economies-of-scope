onEvent('recipes', event => {
	electronTube(event)//电子管
	seed_growing(event)//催化
})

function electronTube(event) {
event.recipes.createFilling(CR("electron_tube"), [CR('polished_rose_quartz'), Fluid.of(TC('molten_iron'), 20)])
event.recipes.createFilling(KJ("empty_tube"), [TE('nickel_nugget'), Fluid.of(TC('molten_glass'), 20)])

let redstone = MC('redstone')
event.shapeless('create:rose_quartz', [[MC('quartz'), KJ('purified_nether_quartz_crystal') , AE2('certus_quartz_crystal'), AE2('charged_certus_quartz_crystal')], redstone, redstone, redstone, redstone])

event.recipes.createMilling([AE2('certus_quartz_dust')], '#ae2:crystals/certus').processingTime(200)

event.remove({ id: CR('compat/ae2/milling/sky_stone_block') })
event.remove({ id: CR('compat/ae2/milling/certus_quartz') })
event.remove({ id: CR('crafting/materials/electron_tube') })
event.remove({ id: CR('crafting/materials/rose_quartz') })
event.remove({ id: TC('smeltery/melting/metal/slimesteel/reinforcement') })
event.remove({ id: TC('smeltery/melting/metal/iron/reinforcement') })
event.remove({ id: TC('smeltery/melting/diamond/enchanting_table') })

event.recipes.createMechanicalCrafting(Item.of(AE2('certus_crystal_seed'), 2), ['A'], { A: F('#gems/certus_quartz') })
event.recipes.createMechanicalCrafting(Item.of(AE2('fluix_crystal_seed'), 2), ['A'], { A: F('#gems/fluix') })
event.recipes.createMechanicalCrafting(Item.of(KJ('nether_seed'), 2), ['A'], { A: F('#gems/quartz') })
event.custom({
	"type": "occultism:spirit_fire",
	"ingredient": { "tag": F("gems/arcane_crystal") },
	"result": { "item": KJ("arcane_crystal_seed") }
})
event.recipes.botania.mana_infusion(FA('arcane_crystal', 2), KJ('purified_arcane_crystal'), 1000)

event.recipes.createMixing(Fluid.of(KJ("sky_stone"), 500), [AE2('sky_dust', 4), Fluid.of(MC('water'), 500)])
event.recipes.createMixing(CR('polished_rose_quartz'), [[AE2('certus_quartz_crystal'), KJ('purified_certus_quartz_crystal')], Fluid.of(TE("redstone"), 250)])
event.recipes.createMixing([AE2('certus_quartz_crystal'), Fluid.of(TE('redstone'), 250)], [AE2('charged_certus_quartz_crystal'), Fluid.of(KJ('sky_stone'), 250)])
event.recipes.createMixing([AE2('certus_quartz_crystal'), Fluid.of(TE('glowstone'), 500)], [AE2('charged_certus_quartz_crystal'), MC('glowstone_dust'), Fluid.of(KJ('sky_stone'), 500)])

let electronTube = 'kubejs:empty_tube'//双倍电子管
	event.recipes.createSequencedAssembly([
		Item.of(CR('electron_tube', 2)),
	], KJ('empty_tube'), [
		event.recipes.createDeploying(electronTube, [electronTube, CR('polished_rose_quartz')]),
	]).transitionalItem(electronTube)
		.loops(1)
		.id('kubejs:electronTube');

let electronTube2 = 'kubejs:empty_tube'//真空管
	event.recipes.createSequencedAssembly([
		Item.of(IM('electron_tube', 2)),
	], KJ('empty_tube'), [
		event.recipes.createDeploying(electronTube2, [electronTube2, 'supercircuitmaker:tiny_redstone']),
		event.recipes.createDeploying(electronTube2, [electronTube2, F('#wires/copper')]),
	]).transitionalItem(electronTube2)
		.loops(1)
		.id('kubejs:electronTube2');

let light_bulb = 'kubejs:empty_tube'//电灯泡
	event.recipes.createSequencedAssembly([
		Item.of(IM('light_bulb', 3)),
	], KJ('empty_tube'), [
		event.recipes.createDeploying(light_bulb, [light_bulb, [MC('paper'), MC('bamboo')]]),
	]).transitionalItem(light_bulb)
		.loops(3)
		.id('kubejs:light_bulb');
}

function seed_growing(event) {	
let grow = (from, via, to) => {
	event.recipes.createSequencedAssembly([to], from, [
		event.recipes.createFilling(via, [via, Fluid.of(MC("water"), 500)]),
	]).transitionalItem(via)
		.loops(4)
		.id('kubejs:grow_' + to.split(':')[1])
}
let grow2 = (from, via, to) => {
	event.recipes.createSequencedAssembly([to], from, [
		event.recipes.createFilling(via, [via, Fluid.of('creatania:pure_mana', 500)]),
	]).transitionalItem(via)
		.loops(4)
		.id('kubejs:grow_' + to.split(':')[1])
	event.recipes.botania.mana_infusion(to, from, 800)
}	

	grow(AE2("certus_crystal_seed"), KJ('growing_certus_seed'), KJ('tiny_certus_crystal'))
	grow(AE2("fluix_crystal_seed"), KJ('growing_fluix_seed'), KJ('tiny_fluix_crystal'))
	grow(KJ("nether_seed"), KJ('growing_nether_seed'), KJ('tiny_nether_crystal'))
	grow2(KJ("arcane_crystal_seed"), KJ('growing_arcane_seed'), KJ('tiny_arcane_crystal'))

	grow(KJ("tiny_certus_crystal"), KJ('growing_tiny_certus_crystal'), KJ('small_certus_crystal'))
	grow(KJ("tiny_fluix_crystal"), KJ('growing_tiny_fluix_crystal'), KJ('small_fluix_crystal'))
	grow(KJ("tiny_nether_crystal"), KJ('growing_tiny_nether_crystal'), KJ('small_nether_crystal'))
	grow2(KJ("tiny_arcane_crystal"), KJ('growing_tiny_arcane_crystal'), KJ('small_arcane_crystal'))

	grow(KJ("small_certus_crystal"), KJ('growing_small_certus_crystal'), KJ('purified_certus_quartz_crystal'))
	grow(KJ("small_fluix_crystal"), KJ('growing_small_fluix_crystal'), AE2('fluix_crystal'))
	grow(KJ("small_nether_crystal"), KJ('growing_small_nether_crystal'), KJ('purified_nether_quartz_crystal'))
	grow2(KJ("small_arcane_crystal"), KJ('growing_small_arcane_crystal'), KJ('purified_arcane_crystal'))
}