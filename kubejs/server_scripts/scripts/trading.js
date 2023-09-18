onEvent('recipes', event => {
	trading(event)
	packages(event)
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
				Item.of(output).toResultJson(),
				{
					"fluid": "cofh_core:experience",
					"amount": 1
				}
			],
			energy: 1000
		})
	}

	let trade2 = (card_id, ingredient, output) => {
		event.custom({
			type: 'thermal:press',
			ingredients: [
				Ingredient.of(ingredient).toJson(),
				Ingredient.of(card_id).toJson(),
			],
			result: [
				Item.of(output).toResultJson(),
				{
					"fluid": "cofh_core:experience",
					"amount": 5
				}
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
				trade2(KJ('profession_card_' + element), transaction.in, transaction.out)
				trade(KJ('profession_agreement_' + element), transaction.in, transaction.out)
			})
	});
}

function packages(event) {
event.recipes.create.itemApplication(
	Item.of('kubejs:express_delivery', '{Tags:["test1"],display:{Lore:[\'{"text":"收件人: ","color":"gray","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}\',\'{"text":"测试1","color":"light_purple","bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}\']}}'), [
	KJ('empty_express_delivery'), 
	Item.of('supplementaries:sack', '{BlockEntityTag:{ForgeCaps:{},Items:[{Count:64b,Slot:0b,id:"thermal:silver_coin"}]}}')])
}