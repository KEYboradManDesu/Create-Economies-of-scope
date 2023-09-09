onEvent('recipes', event => {
    fixpotion(event)
})

function fixpotion(event) {
    event.remove({output:'#tconstruct:potion_bucket'})
}
