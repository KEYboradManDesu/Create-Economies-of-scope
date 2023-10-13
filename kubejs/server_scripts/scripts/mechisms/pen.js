onEvent('recipes', event => {
    pens_1(event) // 钢笔-1
})

function pens_1(event){
    event.recipes.createDeploying('kubejs:pen_regis_01', ['#minecraft:wooden_slabs', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    event.recipes.createDeploying('kubejs:pen_regis_02', ['kubejs:pen_regis_01', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    event.recipes.createDeploying('kubejs:pen_regis_03', ['kubejs:pen_regis_02', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    event.recipes.createDeploying('kubejs:pen_regis_01', ['kubejs:pen_regis_03', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen') // 回溯

}