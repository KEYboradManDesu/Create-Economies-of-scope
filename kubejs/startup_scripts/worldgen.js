onEvent("worldgen.remove", (event) => {
	event.removeOres(ore => {//矿物移除
	  ore.blocks = [ 
		//红石
		'minecraft:redstone_ore', 
		'minecraft:deepslate_redstone_ore', 
        //铅
		'thermal:lead_ore', 
		'thermal:deepslate_lead_ore', 
		//锡
		'mekanism:tin_ore', 
		'mekanism:deepslate_tin_ore', 
		'thermal:tin_ore', 
		'thermal:deepslate_tin_ore', 
		'create_dd:tin_ore', 
		'create_dd:deepslate_tin_ore', 
		//镍
		'thermal:nickel_ore', 
		'thermal:deepslate_nickel_ore', 
		'immersiveengineering:ore_nickel', 
		'immersiveengineering:deepslate_ore_nickel', 
		//银
		'occultism:silver_ore', 
		'occultism:silver_ore_deepslate', 
		'thermal:silver_ore',
		'thermal:deepslate_silver_ore',
		'darkerdepths:silver_ore',
		'darkerdepths:aridrock_silver_ore',
		'darkerdepths:limestone_silver_ore',
		//铝
		'createindustry:bauxite',
		//硫磺
		'createindustry:sulfur',
		//铀
		'mekanism:uranium_ore',
		'mekanism:deepslate_uranium_ore'
	]
	})
})
  