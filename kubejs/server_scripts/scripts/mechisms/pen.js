onEvent('recipes', event => {
    pens_1(event) // 钢笔-1
    pens_1_2(event) // 钢笔-1_2
})

let switchCutting = (event, a, b) => {
	event.stonecutting(a, b)
    event.stonecutting(b, a)
}

function pens_1(event){
    event.recipes.createDeploying('kubejs:pen_regis_00', ['#minecraft:wooden_slabs', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    //event.recipes.createDeploying('kubejs:pen_regis_02', ['kubejs:pen_regis_01', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    //event.recipes.createDeploying('kubejs:pen_regis_03', ['kubejs:pen_regis_02', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    //event.recipes.createDeploying('kubejs:pen_regis_01', ['kubejs:pen_regis_03', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen') // 回溯
    switchCutting(event, 'kubejs:pen_regis_01', 'kubejs:pen_regis_00')
    switchCutting(event, 'kubejs:pen_regis_02', 'kubejs:pen_regis_00')
    switchCutting(event, 'kubejs:pen_regis_03', 'kubejs:pen_regis_00')
    switchCutting(event, 'kubejs:pen_regis_04', 'kubejs:pen_regis_00')

    event.shaped('kubejs:pen_regis_01', [
		'S  ',
        '   ',
        '  B'
	], {
		S: '#minecraft:wooden_slabs',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped('kubejs:pen_regis_02', [
		' S ',
        '   ',
        '  B'
	], {
		S: '#minecraft:wooden_slabs',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped('kubejs:pen_regis_03', [
		'  S',
        '   ',
        '  B'
	], {
		S: '#minecraft:wooden_slabs',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped('kubejs:pen_regis_04', [
		'   ',
        'S  ',
        '  B'
	], {
		S: '#minecraft:wooden_slabs',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
}

function pens_1_2(event){
    event.recipes.createDeploying('kubejs:pen_regis_10', ['tconstruct:pattern', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    //event.recipes.createDeploying('kubejs:pen_regis_02', ['kubejs:pen_regis_01', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    //event.recipes.createDeploying('kubejs:pen_regis_03', ['kubejs:pen_regis_02', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    //event.recipes.createDeploying('kubejs:pen_regis_01', ['kubejs:pen_regis_03', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen') // 回溯
    switchCutting(event, 'kubejs:pen_regis_11', 'kubejs:pen_regis_10')
    switchCutting(event, 'kubejs:pen_regis_12', 'kubejs:pen_regis_10')
    switchCutting(event, 'kubejs:pen_regis_13', 'kubejs:pen_regis_10')
    switchCutting(event, 'kubejs:pen_regis_14', 'kubejs:pen_regis_10')

    event.shaped('kubejs:pen_regis_11', [
		'S  ',
        '   ',
        '  B'
	], {
		S: 'tconstruct:pattern',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped('kubejs:pen_regis_12', [
		' S ',
        '   ',
        '  B'
	], {
		S: 'tconstruct:pattern',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped('kubejs:pen_regis_13', [
		'  S',
        '   ',
        '  B'
	], {
		S: 'tconstruct:pattern',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped('kubejs:pen_regis_14', [
		'   ',
        'S  ',
        '  B'
	], {
		S: 'tconstruct:pattern',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
}