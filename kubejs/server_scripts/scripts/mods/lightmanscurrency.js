
onEvent('recipes', event => {
	
    lightmanscurrency_remove(event)
    lightmanscurrency(event)

})

function lightmanscurrency_remove(event) {

event.remove({ output: '#forge:coins' }) //禁用钱币制作
//event.remove({ input: '#forge:coins' })    
event.remove({ output: 'lightmanscurrency:coinmint' })
event.remove({ type: "lightmanscurrency:coin_mint" });

}

function lightmanscurrency(event) {

let coinstack = (coinstack, coin) => {
	event.remove({ output: coinstack })
    event.remove({ input: coinstack })
	event.shaped(Item.of(coinstack), [
		'AAA',
		'AAA',
        'AAA',
	], {
		A: Item.of(coin)
    })	
    event.shaped(Item.of(coin, 9), [
		'A',
	], {
		A: Item.of(coinstack)
    })	
}

coinstack('createdeco:copper_coinstack', TE('copper_coin'))
coinstack('createdeco:zinc_coinstack', TE('silver_coin'))
coinstack('createdeco:gold_coinstack', TE('gold_coin'))
coinstack('createdeco:brass_coinstack', TE('bronze_coin'))
coinstack('createdeco:netherite_coinstack', TE('netherite_coin'))
coinstack('createdeco:iron_coinstack', TE('constantan_coin'))


}