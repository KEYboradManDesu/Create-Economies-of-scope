onEvent('recipes', event => {
	trading(event)
})

function trading(event) { //交易系统
	let trade = (card_id, ingredient, output) => {
		event.custom({
			type: 'thermal:press',
			ingredients: [
				Ingredient.of(ingredient).toJson(),
				Ingredient.of(card_id).toJson(),
			],
			result: [
				Item.of(output).toResultJson()
			],
			energy: 1000
		})
	}

	global.trades.forEach(element => {
		if (global.transactions[element])
			global.transactions[element].forEach(transaction => {
				trade(KJ('trade_card_' + element), transaction.in, transaction.out)
			})
	});

	global.professions.forEach(element => {
		if (global.transactions[element])
			global.transactions[element].forEach(transaction => {
				trade(KJ('profession_card_' + element), transaction.in, transaction.out)
			})
	});


/*let TCA = 'kubejs:tech_coin_a'
let TCB = 'kubejs:tech_coin_b'
let TCC = 'kubejs:tech_coin_c'
let TCD = 'kubejs:tech_coin_d'

//安山科技币
event.recipes.createMixing([Fluid.of(TCA, 10), KJ('gold_matter')], [KJ('andesite_machine', 1), KJ('gold_matter')])

//黄铜科技币
event.recipes.createMixing([Fluid.of(TCB, 10), KJ('gold_matter')], [KJ('brass_machine', 1), KJ('gold_matter')])

//信素科技币
event.recipes.createMixing([Fluid.of(TCC, 10), KJ('gold_matter')], [TE('machine_frame', 1), KJ('gold_matter')])

//谐振科技币
event.recipes.createMixing([Fluid.of(TCD, 10), KJ('gold_matter')], [KJ('enderium_machine', 1), KJ('gold_matter')])

//垃圾回收
//event.recipes.createMixing([Fluid.of(TCA, 5), KJ('gold_matter')], ['rubber_duck:rubber_duck_item', KJ('gold_matter')])

//钱币铸造
event.custom({
	"type": "tconstruct:casting_table",
	"cast": { "item": TC("coin_cast") },
	"cast_consumed": false,
	"fluid": { "name": "kubejs:tech_coin_a", "amount": 10 },
	"result": { "item": TE("electrum_coin") },
	"cooling_time": 15
})
event.custom({
	"type": "tconstruct:casting_table",
	"cast": { "tag": TC("casts/single_use/coin") },
	"cast_consumed": true,
	"fluid": { "name": "kubejs:tech_coin_a", "amount": 10 },
	"result": { "item": TE("electrum_coin") },
	"cooling_time": 15
})

event.custom({
	"type": "tconstruct:casting_table",
	"cast": { "item": TC("coin_cast") },
	"cast_consumed": false,
	"fluid": { "name": "kubejs:tech_coin_b", "amount": 10 },
	"result": { "item": TE("lead_coin") },
	"cooling_time": 15
})
event.custom({
	"type": "tconstruct:casting_table",
	"cast": { "tag": TC("casts/single_use/coin") },
	"cast_consumed": true,
	"fluid": { "name": "kubejs:tech_coin_b", "amount": 10 },
	"result": { "item": TE("lead_coin") },
	"cooling_time": 15
})

event.custom({
	"type": "tconstruct:casting_table",
	"cast": { "item": TC("coin_cast") },
	"cast_consumed": false,
	"fluid": { "name": "kubejs:tech_coin_c", "amount": 10 },
	"result": { "item": TE("signalum_coin") },
	"cooling_time": 15
})
event.custom({
	"type": "tconstruct:casting_table",
	"cast": { "tag": TC("casts/single_use/coin") },
	"cast_consumed": true,
	"fluid": { "name": "kubejs:tech_coin_c", "amount": 10 },
	"result": { "item": TE("signalum_coin") },
	"cooling_time": 15
})

event.custom({
	"type": "tconstruct:casting_table",
	"cast": { "item": TC("coin_cast") },
	"cast_consumed": false,
	"fluid": { "name": "kubejs:tech_coin_d", "amount": 10 },
	"result": { "item": TE("enderium_coin") },
	"cooling_time": 15
})
event.custom({
	"type": "tconstruct:casting_table",
	"cast": { "tag": TC("casts/single_use/coin") },
	"cast_consumed": true,
	"fluid": { "name": "kubejs:tech_coin_d", "amount": 10 },
	"result": { "item": TE("enderium_coin") },
	"cooling_time": 15
})

//钱币换算
event.recipes.createCompacting(Fluid.of(KJ("tech_coin_a"), 50), [CR('andesite_alloy'), Fluid.of(KJ("tech_coin_b"), 10)])
//event.recipes.createCompacting(Fluid.of(KJ("tech_coin_b"), 10), [CR('brass_nugget'), Fluid.of(KJ("tech_coin_a"), 50)])
event.recipes.createCompacting(Fluid.of(KJ("tech_coin_b"), 50), [CR('brass_nugget'), Fluid.of(KJ("tech_coin_c"), 10)])
//event.recipes.createCompacting(Fluid.of(KJ("tech_coin_c"), 10), [TE('signalum_nugget'), Fluid.of(KJ("tech_coin_b"), 50)])
event.recipes.createCompacting(Fluid.of(KJ("tech_coin_c"), 50), [TE('signalum_nugget'), Fluid.of(KJ("tech_coin_d"), 10)])
//event.recipes.createCompacting(Fluid.of(KJ("tech_coin_d"), 10), [TE('enderium_nugget'), Fluid.of(KJ("tech_coin_c"), 50)])
*/
}