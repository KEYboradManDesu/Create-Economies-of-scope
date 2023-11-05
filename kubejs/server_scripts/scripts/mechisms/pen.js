//起始物品配方命名规范：pens_1M1 [1M1中第一个1代表第一章，M代表主线，第二个1代表第一个配方]

onEvent('recipes', event => {
    pens_1M1(event) // 第一章-主线-木板
    pens_1M2(event) // 第一章-主线-模板
    pens_1B1(event) // 第一章-支线A-动力构件
    //pens_1M4(event) // 钢笔-1_4
})

let switchCutting = (event, a, b) => {
	event.stonecutting(a, b)
    event.stonecutting(b, a)
}

// 第一章-主线-木板
function pens_1M1(event){
    event.recipes.createDeploying(KJ('pen_regis_1M0A'), ['#minecraft:wooden_slabs', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    //event.recipes.createDeploying('kubejs:pen_regis_02', ['kubejs:pen_regis_01', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    //event.recipes.createDeploying('kubejs:pen_regis_03', ['kubejs:pen_regis_02', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    //event.recipes.createDeploying('kubejs:pen_regis_01', ['kubejs:pen_regis_03', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen') // 回溯
    switchCutting(event, KJ('pen_regis_1M1A'), KJ('pen_regis_1M0A'))
    switchCutting(event, KJ('pen_regis_1M2A'), KJ('pen_regis_1M0A'))
    switchCutting(event, KJ('pen_regis_1M3A'), KJ('pen_regis_1M0A'))
    switchCutting(event, KJ('pen_regis_1M4A'), KJ('pen_regis_1M0A'))

    event.shaped(KJ('pen_regis_1M1A'), [
		'S  ',
        '   ',
        '  B'
	], {
		S: '#minecraft:wooden_slabs',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped(KJ('pen_regis_1M2A'), [
		' S ',
        '   ',
        '  B'
	], {
		S: '#minecraft:wooden_slabs',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped(KJ('pen_regis_1M3A'), [
		'  S',
        '   ',
        '  B'
	], {
		S: '#minecraft:wooden_slabs',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped(KJ('pen_regis_1M4A'), [
		'   ',
        'S  ',
        '  B'
	], {
		S: '#minecraft:wooden_slabs',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
}

function pens_1M2(event){
    event.recipes.createDeploying(KJ('pen_regis_1M0B'), ['tconstruct:pattern', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    switchCutting(event, KJ('pen_regis_1M1B'), 'kubejs:pen_regis_10')
    switchCutting(event, KJ('pen_regis_1M2B'), 'kubejs:pen_regis_10')
    switchCutting(event, KJ('pen_regis_1M3B'), 'kubejs:pen_regis_10')
    switchCutting(event, KJ('pen_regis_1M4B'), 'kubejs:pen_regis_10')

    event.shaped(KJ('pen_regis_1M0B'), [
		'S  ',
        '   ',
        '  B'
	], {
		S: 'tconstruct:pattern',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped(KJ('pen_regis_1M0B'), [
		' S ',
        '   ',
        '  B'
	], {
		S: 'tconstruct:pattern',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped(KJ('pen_regis_1M0B'), [
		'  S',
        '   ',
        '  B'
	], {
		S: 'tconstruct:pattern',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped(KJ('pen_regis_1M0B'), [
		'   ',
        'S  ',
        '  B'
	], {
		S: 'tconstruct:pattern',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
}

function pens_1B1(event){
    //event.recipes.createDeploying('kubejs:pen_regis_20', ['kubejs:kinetic_mechanism', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    switchCutting(event, KJ('pen_regis_1B1'), 'kubejs:kinetic_mechanism')
    switchCutting(event, KJ('pen_regis_1B2'), 'kubejs:kinetic_mechanism')
    switchCutting(event, KJ('pen_regis_1B3'), 'kubejs:kinetic_mechanism')
    switchCutting(event, KJ('pen_regis_1B4'), 'kubejs:kinetic_mechanism')

    event.shaped(KJ('pen_regis_1B1'), [
		'S  ',
        '   ',
        '  B'
	], {
		S: 'kubejs:kinetic_mechanism',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped(KJ('pen_regis_1B2'), [
		' S ',
        '   ',
        '  B'
	], {
		S: 'kubejs:kinetic_mechanism',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped(KJ('pen_regis_1B3'), [
		'  S',
        '   ',
        '  B'
	], {
		S: 'kubejs:kinetic_mechanism',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped(KJ('pen_regis_1B4'), [
		'   ',
        'S  ',
        '  B'
	], {
		S: 'kubejs:kinetic_mechanism',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
}

/*
function pens_1B(event){
    //event.recipes.createDeploying('kubejs:pen_regis_30', ['create_dd:inductive_mechanism', 'kubejs:golden_pen']).keepIngredient('kubejs:golden_pen')
    switchCutting(event, 'kubejs:pen_regis_31', 'create_dd:inductive_mechanism')
    switchCutting(event, 'kubejs:pen_regis_32', 'create_dd:inductive_mechanism')
    switchCutting(event, 'kubejs:pen_regis_33', 'create_dd:inductive_mechanism')
    switchCutting(event, 'kubejs:pen_regis_34', 'create_dd:inductive_mechanism')

    event.shaped('kubejs:pen_regis_31', [
		'S  ',
        '   ',
        '  B'
	], {
		S: 'create_dd:inductive_mechanism',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped('kubejs:pen_regis_32', [
		' S ',
        '   ',
        '  B'
	], {
		S: 'create_dd:inductive_mechanism',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped('kubejs:pen_regis_33', [
		'  S',
        '   ',
        '  B'
	], {
		S: 'create_dd:inductive_mechanism',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')
    event.shaped('kubejs:pen_regis_34', [
		'   ',
        'S  ',
        '  B'
	], {
		S: 'create_dd:inductive_mechanism',
        B: 'kubejs:golden_pen'
	}).keepIngredient('kubejs:golden_pen')

}
*/