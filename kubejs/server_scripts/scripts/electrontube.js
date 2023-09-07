onEvent('recipes', event => {
let electronTube = 'kubejs:empty_tube'//双倍电子管
	event.recipes.createSequencedAssembly([
		Item.of(CR('electron_tube', 2)),
	], KJ('empty_tube'), [
		event.recipes.createDeploying(electronTube, [electronTube, CR('polished_rose_quartz')]),
	]).transitionalItem(electronTube)
		.loops(1)
		.id('kubejs:electronTube');
})
onEvent('recipes', event => {
event.remove({ output: IM('electron_tube') })	
let electronTube2 = 'kubejs:empty_tube'//真空管
	event.recipes.createSequencedAssembly([
		Item.of(IM('electron_tube', 2)),
	], KJ('empty_tube'), [
		event.recipes.createDeploying(electronTube2, [electronTube2, 'supercircuitmaker:tiny_redstone']),
		event.recipes.createDeploying(electronTube2, [electronTube2, F('#wires/copper')]),
	]).transitionalItem(electronTube2)
		.loops(1)
		.id('kubejs:electronTube2');
})
onEvent('recipes', event => {
	event.remove({ output: IM('light_bulb') })	
	let light_bulb = 'kubejs:empty_tube'//电灯泡
		event.recipes.createSequencedAssembly([
			Item.of(IM('light_bulb', 3)),
		], KJ('empty_tube'), [
			event.recipes.createDeploying(light_bulb, [light_bulb, [MC('paper'), MC('bamboo')]]),
		]).transitionalItem(light_bulb)
			.loops(3)
			.id('kubejs:light_bulb');
	})