
onEvent('recipes', event => {
	
    lightmanscurrency_remove(event)


})

function lightmanscurrency_remove(event) {

event.remove({ output: '#forge:coins' }) //禁用钱币制作
//event.remove({ input: '#forge:coins' })    
event.remove({ output: 'lightmanscurrency:coinmint' })
event.remove({ type: "lightmanscurrency:coin_mint" });


}