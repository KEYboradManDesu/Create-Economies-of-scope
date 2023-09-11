// priority: 0

onEvent('jei.hide.items', event => {
	event.hide('appliedenergistics2:facade')
	event.hide(`#buddycards:cards`)
	event.hide(`#buddycards:gummy_cards`)
})

onEvent('jei.subtypes', event => {
	event.useNBT('advancedrocketry:planet_id_chip')
})

onEvent('jei.hide.fluids', event => {
})

onEvent('jei.add.items', event => {
	event.add('thermal:ruby')
	event.add('thermal:ruby_dust')
	event.add('thermal:ruby_ore')
	event.add('thermal:apatite_ore')
	event.add('thermal:sapphire')
	event.add('thermal:sapphire_dust')
	event.add('thermal:sapphire_ore')

	event.add(Item.of("advancedrocketry:planet_id_chip", { dimId: "custommoon:moon", DimensionName: " The Moon " }))
	event.add(Item.of("advancedrocketry:planet_id_chip", { dimId: "minecraft:overworld", DimensionName: " Earth " }))

})

onEvent('jei.remove.categories', event => {
	event.yeetIf(element => {
		let name = (element.getUid() + "")
		return name.startsWith('advancedrocketry:') || name.startsWith("thermal:centrifuge")
	});
})

onEvent('item.tooltip', tooltip => {
	let holds = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§7${slots} 格`])
	let main_assembly = (id, stage) => tooltip.add(id, [`§7主目标： ${stage == "4" ? "§6最终章" : "§6章节 " + stage}`, '§8建议自动化制作'])
	let bonus_assembly = (id, stage) => tooltip.add(id, [`§7额外目标： §6章节 ${stage}`])
	let not_consumed = (id, stage) => tooltip.add(id, [`§7在序列组装`, `§7配方中不消耗`])
	let ore = (id, y1, y2) => tooltip.add(id, [`§o§7生成高度Y=§6${y1} §7- §6${y2}`])

	tooltip.add("minecraft:redstone_ore", [`§7不会生成，你需要研磨朱砂来获得红石。`]);

	ore("forbidden_arcanus:arcane_crystal_ore", 1, 9)
	ore("appliedenergistics2:charged_quartz_ore", 1, 30)
	ore("forbidden_arcanus:xpetrified_ore", 1, 30)
	ore("appliedenergistics2:quartz_ore", 1, 30)
	ore("thermal:apatite_ore", 1, 30)
	ore("thermal:cinnabar_ore", 1, 30)
	ore("thermal:niter_ore", 1, 30)
	ore("thermal:nickel_ore", 1, 40)
	ore("thermal:ruby_ore", 1, 30)
	ore("thermal:sapphire_ore", 1, 30)
	ore("thermal:lead_ore", 1, 20)
	ore("minecraft:emerald_ore", 1, 30)
	ore("thermal:sulfur_ore", 12, 36)
	ore("create:zinc_ore", 15, 70)
	ore("create:copper_ore", 40, 85)

	ore("minecraft:coal_ore", 1, 128)
	ore("minecraft:iron_ore", 1, 64)
	ore("minecraft:lapis_ore", 1, 32)
	ore("minecraft:gold_ore", 1, 32)
	ore("minecraft:diamond_ore", 1, 16)

	tooltip.add("advancedrocketry:planet_id_chip", [`§3使用方式：`, `1. §7使用配方合成`, `2. §7打开火箭UI`, `3. §7点击UI中的导航电脑图标`, `4. §7插入星球ID芯片`, "§8§o(使用选择目的地菜单会使游戏崩溃)"]);
	
	holds('copper', 5 * 9)
	holds('iron', 6 * 9)
	holds('silver', 8 * 9)
	holds('gold', 9 * 9)

	main_assembly('kubejs:kinetic_mechanism', "1")
	bonus_assembly('kubejs:sealed_mechanism', "1A")
	main_assembly('create:precision_mechanism', "2")
	bonus_assembly('kubejs:infernal_mechanism', "2A")
	main_assembly('kubejs:inductive_mechanism', "3")
	bonus_assembly('kubejs:abstruse_mechanism', "3A")
	main_assembly('kubejs:calculation_mechanism', "4")

	not_consumed('cb_microblock:stone_saw')
	not_consumed('cb_microblock:iron_saw')
	not_consumed('cb_microblock:diamond_saw')
	not_consumed('projectred-core:screwdriver')
	// not_consumed('create:super_glue')
	not_consumed('kubejs:chromatic_resonator')
	not_consumed('kubejs:flash_drive')
	// not_consumed('xreliquary:mercy_cross')
	// not_consumed('xreliquary:ender_staff')

	global.substrates[0].forEach(e => tooltip.add(e.id, [`§8类型：§7火成`]));
	global.substrates[1].forEach(e => tooltip.add(e.id, [`§8类型：§7草本`]));
	global.substrates[2].forEach(e => tooltip.add(e.id, [`§8类型：§7不稳定`]));
	global.substrates[3].forEach(e => tooltip.add(e.id, [`§8类型：§7晶化`]));
	global.substrates[4].forEach(e => tooltip.add(e.id, [`§8类型：§7金属`]));
	global.substrates[5].forEach(e => tooltip.add(e.id, [`§8类型：§7宝石`]));
	global.substrates[6].forEach(e => tooltip.add(e.id, [`§8类型：§7催化`]));

	tooltip.add("structurescompass:structures_compass", [`§7右键激活`]);

	tooltip.add("magicfeather:magicfeather", [`§6获得创造飞行的能力`]);

	tooltip.add("xreliquary:alkahestry_tome", [`§6无法用于动力合成`]);

	tooltip.add("pipez:energy_pipe", [`§7你需要用§f扳手`, `§7潜行右键管道连接处`, `§7来调整管道的§f输入口`]);
	
	tooltip.add("kubejs:accellerator_redstone", ["§7用于催化剂研究时：", "  §6会使§e正确的§6反应物 ",
		"  §6在§e不正确的§6矿车槽位中不被消耗"]);
	tooltip.add("kubejs:accellerator_glowstone", ["§7用于催化剂研究时：", "  §6会使§e正确的§6反应物 ",
		"  §6在§e不正确的§6矿车槽位中不被消耗"]);

	for (i = 0; i < 15; i++)
		tooltip.add(`kubejs:failed_alchemy_${i}`, [
			`§7放在离心分离机中分析。`,
			"",
			"§6产物",
			"- 灰烬 §7标志着每个不正确的材料",
			"- 红石 §7标志着每个正确的材料",
			"   §7但在不正确的格中",
			"- 荧石 §7标志着每个正确的材料",
			"   §7并且在正确的格中"
		])
})

onEvent('jei.information', event => {
	// event.add('thermal:blitz_rod', ["Obtain by running a §9Charged Staff§0 (with Charge) and any amount of §9Tiny Smoke Clouds§0 through an §5Alchemical Laser§0."])
	event.add('thermal:blizz_rod', ["用§9熵变机械臂§0（充能的）和任意数量§9雪球§0通过§5炼金镭射§0制作而成。"])
	event.add('thermal:basalz_rod', ["用§9通量磁铁§0（充能的）和任意数量§9玄武岩§0通过§5炼金镭射§0制作而成。"])
	event.add('kubejs:substrate_silicon', ["只能用§9混沌催化剂§0和任意数量特定种类的§9反应物§0通过§5炼金镭射§0制作而成。", " ", "特定反应物§9根据世界种子号不同而变化§0。"])

	event.add('kubejs:alchemical_laser', ["此物品代表§5炼金镭射§0机器。查看§9思索内容§0了解如何搭建炼金镭射结构。"])

	let catalyst = (name, me) =>
		[
			`§0通过在§5炼金镭射§0中§9正确找出并混合§0四种§9${me ? name : name + " §0反应物"}§0获得。`, " ",
			`§81.§0 在漏斗矿车最前面四格里分别放入一个§9${me ? name : name + " §0反应物"}§0`,
			`§82.§0 对放入反应物的漏斗矿车使用§5炼金镭射§0来获得§9${me ? me : name + " §9催化剂"}§0，或是该催化剂混合配方的§9提示§0。`, " ",
			"§8注意：§0 正确的混合配方也许会有同种§9反应物§0",
			"§8注意：§0 正确的混合配方§9根据世界种子号不同而变化§0",
			"§8可选：§0 在第五格放置§9红石促成剂§0或§9荧石促成剂§0来获得§9额外的提示§0",
		]

	event.add('kubejs:substrate_igneous', catalyst("火成"))
	event.add('kubejs:substrate_herbal', catalyst("草本"))
	event.add('kubejs:substrate_volatile', catalyst("不稳定"))
	event.add('kubejs:substrate_crystal', catalyst("晶化"))
	event.add('kubejs:substrate_metal', catalyst("金属"))
	event.add('kubejs:substrate_gem', catalyst("宝石"))

	let beer = (id, igs) =>
		event.add('drinkbeer:beer_mug' + id, ["在酒桶中放入4个空啤酒杯，" + igs + "来酿造这种饮料。"])

	beer("", "3个小麦和1桶水")
	beer("_blaze_stout", "2个小麦，1个烈焰粉和1桶水")
	beer("_blaze_milk_stout", "1个小麦，1个糖，1个烈焰粉和1桶水") //wtf are these drinks
	beer("_apple_lambic", "2个小麦，1个苹果和1桶水")
	beer("_sweet_berry_kriek", "2个小麦，1个甜浆果和1桶水")
	beer("_haars_icey_pale_lager", "3个小麦和1块蓝冰")
	beer("_pumpkin_kvass", "2个面包，1个南瓜和1桶水")

	event.add('kubejs:substrate_chaos', catalyst("催化剂", "混沌催化剂").concat([
		" ", "§8用法：§0", "用§9混沌催化剂§0与一种任意数量§9反应物§0通过§5炼金镭射§0§9转变成§0另一种反应物。嬗变配方§9根据世界种子号不同而变化§0。"
	]))
})