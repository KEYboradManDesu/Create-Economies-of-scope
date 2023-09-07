// priority: 0

// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) => MOD("ae2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let AP = (id, x) => MOD("architects_palette", id, x)
let CR = (id, x) => MOD("create", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let EG = (id, x) => MOD("endergetic", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let BOP = (id, x) => MOD("biomesoplenty", id, x)
let RQ = (id, x) => MOD("reliquary", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x)
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) => MOD("forge", id, x)
let AC = (id, x) => MOD("aquaculture", id, x)
let PP = (id, x) => MOD("prettypipes", id, x)
let OC = (id, x) => MOD("occultism", id, x)
let IM = (id, x) => MOD("immersiveengineering", id, x)
let CO = (id, x) => MOD("createoreexcavation", id, x)
let BO = (id, x) => MOD("botania", id, x)
let FA = (id, x) => MOD("forbidden_arcanus", id, x)
let ARS = (id, x) => MOD("ars_nouveau", id, x)
//


onEvent('item.registry', event => {

	global.trades = []
	global.professions = []
	global.transactions = []

	let profession = (zhname, name, c1, c2, transactions) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
		global.professions.push(id)
		global.transactions[id] = transactions
			event.create(`profession_card_${id}`)
			.color(1, c1)
			.color(2, c2)
			.parentModel("kubejs:item/profession_card")
			.texture("kubejs:item/profession_card_0")
			.displayName(`§6职业铭牌：§r${zhname}`)
			.unstackable()
	}

	let profession_tech = (zhname, name, transactions) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
		global.professions.push(id)
		global.transactions[id] = transactions
			event.create(`profession_card_${id}`)
			.parentModel("kubejs:item/profession_card_engineer")
			.displayName(`§6职业铭牌：§r${zhname}`)
			.unstackable()
	}

	let profession_magic = (zhname, name, transactions) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
		global.professions.push(id)
		global.transactions[id] = transactions
			event.create(`profession_card_${id}`)
			.parentModel("kubejs:item/profession_card_magician")
			.displayName(`§6职业铭牌：§r${zhname}`)
			.unstackable()
	}

	let profession_cook = (zhname, name, transactions) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
		global.professions.push(id)
		global.transactions[id] = transactions
			event.create(`profession_card_${id}`)
			.parentModel("kubejs:item/profession_card_chef")
			.displayName(`§6职业铭牌：§r${zhname}`)
			.unstackable()
	}

	let trade = (zhname, name, c1, c2, transactions, custom) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
		global.trades.push(id)
		global.transactions[id] = transactions
		event.create(`trade_card_${id}`)
			.color(1, c1)
			.color(2, c2)
			.parentModel("kubejs:item/trade_card")
			.texture("kubejs:item/trade_card_0")
			.displayName((custom ? "" : "产品铭牌：") + zhname)
			.unstackable()
	}

	//货币
	let S = (x) => TE('silver_coin', x)
	let G = (x) => TE('gold_coin', x)
	let BU = (x) => TE('bronze_coin', x)

	//烹饪币
	let CO = (x) => TE('copper_coin', x)

	//科技币
	let A = (x) => TE('electrum_coin', x)
	let B = (x) => TE('lead_coin', x)
	let SI = (x) => TE('signalum_coin', x)
	let E = (x) => TE('enderium_coin', x)

	//魔力币
	let M = (x) => TE('lumium_coin', x)
	let T = (x) => TE('netherite_coin', x)
	let EL = (x) => TE('nickel_coin', x)

	profession_tech("科技工程师", "Engineer", [
		{ in: KJ('andesite_machine', 1), out: A(1)},
		{ in: KJ('copper_machine', 1), out: A(2)},
		{ in: KJ('brass_machine', 1), out: B(1)},
		{ in: KJ('obsidian_machine', 1), out: B(2)},
		{ in: KJ('zinc_machine', 1), out: B(3)},
		{ in: KJ('pneumatic_machine', 1), out: B(3)},
		{ in: TE('machine_frame', 1), out: SI(1)},
		{ in: KJ('enderium_machine', 1), out: E(1)},
		{ in: 'computercraft:computer_normal', out: E(2)}
	])

	profession_magic("魔法师", "Magician", [
	])

	profession_cook("厨师", "Chef", [
	])

	profession("农民", "Farming", 0xFFCC29, 0x81B214, [
	])

	profession("木匠", "Carpentry", 0xD0AF84, 0x966C3B, [
	])

	profession("矿工", "Mining", 0x1C1124, 0x88FFF7, [
	])

	profession("石匠", "Masonry", 0x5E6F64, 0xBA7967, [
	])

	profession("猎人", "Hunting", 0x393E46, 0xCF0000, [
	])

	let quota = 8
	profession("渔夫", "Fishing", 0x9DDFD3, 0xDBF6E9, [
	])

	profession("铁匠", "Smithing", 0xFFC93C, 0xFF7A00, [
	])

	trade("§6货币兑换卡(银↔金)", "Exchange Currencies A", 0xEBA83A, 0xF4F4F4, [
		{ in: G(1), out: S(64) },
		{ in: S(64), out: G(1) },
	], true)

	trade("§6货币兑换卡(金↔铂金)", "Exchange Currencies B", 0xF4F4F4, 0xEBA83A, [
		{ in: BU(1), out: G(64) },
		{ in: G(64), out: BU(1) },
	], true)

	let DATAGEN_QUESTS = false

	let data = []
	let group_max_width = []
	let current_group_max_width = 0
	let simulate = DATAGEN_QUESTS
	let entry_cost = 10

	let row = 0
	let col = 0
	let group = 0

	let next_group = () => {
		group++
		if (simulate)
			group_max_width.push(current_group_max_width)
		current_group_max_width = 0
		col = 0
		row++
	}

	let simple = (zhname, name, item, coin, unit, c1, c2) => {
		if (!simulate)
			trade(zhname, name, c1, c2, [{ in: unit(coin), out: item }])
		if (!DATAGEN_QUESTS)
			return

		current_group_max_width = Math.min(8, current_group_max_width + 1)
		if (simulate)
			return

		let silver = unit == S
		let split = item.split('x')
		let amount = split[0]
		let id = split.splice(1).join('x').replace(' ', '')
		let card_id = KJ("trade_card_" + name.toLowerCase().replace("'", "").split(' ').join('_'))

		if (col > 7) {
			col = 0
			row++
		}

		let x = col - (group_max_width[group] - 1) / 2
		let y = row + group / 2
		col++

		let template = `
		{
			title: "${amount}x ${zhname}"
			icon: "${id}"
			disable_toast: true
			x: ${x}d
			y: ${y}d
			shape: "hexagon"
			subtitle: "${coin} ${silver ? "银" : "金"}"
			tasks: [{
				type: "item"
				item: "thermal:silver_coin"
				icon: { id: "thermal:silver_coin", Count: ${entry_cost}b }
				count: ${entry_cost}L
			}]
			rewards: [
				{
					type: "item"
					auto: "enabled"
					item: "${card_id}"
				}
				{
					type: "custom"
					title: "可重复"
					icon: "thermal:machine_cycle_augment"
					tags: ["reset"]
					auto: "no_toast"
				}
			]
		}`
		data.push(template)
	}

	while (true) {
		group = 0
		row = 0

		

		if (!DATAGEN_QUESTS)
			break
		if (!simulate)
			break
		simulate = false
	}


	if (DATAGEN_QUESTS) {
		console.log("QUEST PASTER:")
		console.log(data.join(""))
		console.log(":QUEST PASTER END")
	}

})