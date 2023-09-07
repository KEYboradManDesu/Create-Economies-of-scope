onEvent('recipes', event => {
	rocketScience(event)//火箭
})

function rocketScience(event) {
	event.remove({ output: 'beyond_earth:solar_panel' })
	event.remove({ output: 'beyond_earth:coal_generator' })
	event.remove({ output: 'beyond_earth:compressor' })
	event.remove({ output: 'beyond_earth:fuel_refinery' })
	event.remove({ output: 'beyond_earth:oxygen_gear' })
	event.remove({ output: 'beyond_earth:water_pump' })

	let gear = TE("diamond_gear")
	let plastic = KJ("matter_plastics")
	let machine = AE2("controller")
	let matrix = KJ("computation_matrix")

	event.remove({ id: "beyond_earth:nasa_workbenching/tier1", })
	event.recipes.createMechanicalCrafting("beyond_earth:rocket_t1", [
		'  A  ',
		' AAA ',
		' SES ',
		' AEA ',
		'GAAAG',
		'ABMBA',
		'A D A'
	], {
		A: plastic,
		M: machine,
		G: gear,
		S: matrix,
		B: 'beyond_earth:steel_tank',
		D: 'beyond_earth:steel_engine',
		E: '#thermal:glass/hardened'
	})

	event.remove({ id: "beyond_earth:oxygen_loader" })
	event.recipes.createMechanicalCrafting("beyond_earth:oxygen_loader", [
		'AAA',
		'GSG',
		'AMA'
	], {
		A: plastic,
		M: machine,
		G: gear,
		S: MC("bucket")
	})

	event.remove({ id: "beyond_earth:oxygen_bubble_distributor" })
	event.recipes.createMechanicalCrafting("beyond_earth:oxygen_bubble_distributor", [
		'AAA',
		'GSG',
		'AMA'
	], {
		A: plastic,
		M: machine,
		G: gear,
		S: CR("propeller")
	})

	let pattern = [
		' A ',
		'GSG',
		' A '
	];

	event.remove({ id: "beyond_earth:space_suit" })
	event.recipes.createMechanicalCrafting("beyond_earth:space_suit", pattern,
		{
			A: plastic,
			G: CR("golden_sheet"),
			S: CR("netherite_backtank")
		})

	event.remove({ id: "beyond_earth:oxygen_mask" })	
	event.recipes.createMechanicalCrafting("beyond_earth:oxygen_mask", pattern,
		{
			A: plastic,
			G: CR("golden_sheet"),
			S: CR("netherite_diving_helmet")
		})

    event.remove({ id: "beyond_earth:space_leggings" })	
	event.recipes.createMechanicalCrafting("beyond_earth:space_pants", pattern,
		{
			A: plastic,
			G: CR("golden_sheet"),
			S: MC("iron_leggings")
		})

	event.remove({ id: "beyond_earth:space_boots" })		
	event.recipes.createMechanicalCrafting("beyond_earth:space_boots", pattern,
		{
			A: plastic,
			G: CR("golden_sheet"),
			S: MC("iron_boots")
		})

	event.remove({ id: "beyond_earth:rocket_launch_pad" })	
	let smithAndMechCraft = (r, i1, i2) => {
		event.smithing(r, i1, i2)
		event.recipes.createMechanicalCrafting(r, "AB", { A: i1, B: i2 })
	}

	smithAndMechCraft("9x beyond_earth:rocket_launch_pad", 'create:industrial_iron_block', plastic)

	//event.recipes.thermal.compression_fuel(Fluid.of("advancedrocketry:hydrogen")).energy(100000)
	//event.recipes.thermal.compression_fuel(Fluid.of("advancedrocketry:oxygen")).energy(10000)

}