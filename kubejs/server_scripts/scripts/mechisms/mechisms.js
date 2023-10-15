// 此文件未完成
onEvent('recipes', event => {
    kinetic(event) //动力
    //seal(event) //密封
    //sturdy(event) //坚实
    //infernal(event) //酷热
    //abstruse(event) //谐振
    //calcu(event) //计算
    //inductive(event) //感应
    //g_source(event) //金源
    //meta(event) //异构
})

// 此处初始化变量
var output_item
var trans_item
var success_chance
var fail_chance
var input_item
var cons_item
var rand_item
var round

// 以下配方可直接复制替换
// 开始注册动力构件
function kinetic(event){
    output_item = 'kubejs:kinetic_mechanism' //此处修改输出
    trans_item = 'kubejs:incomplete_kinetic_mechanism'
    // 初级合成，40%成功率，共一个配方 
    success_chance = 40.0
    fail_chance = 60.0
    input_item = 'kubejs:pen_regis_01' //此处修改输入
    cons_item = 'create:andesite_alloy'
    rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:13,type:"km"}')

    event.recipes.createSequencedAssembly([
        //成品：
        Item.of(output_item).withChance(success_chance),
        //随机废料：
        Item.of(rand_item).withChance(fail_chance),
       ], 
       //输入物品：
       input_item, 
       [
       //每步的配方
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第一步
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第二步
        event.recipes.createCutting(trans_item, trans_item).processingTime(10)//第三步
   ]).transitionalItem(trans_item)

    // 中级合成，60%成功率，共3个配方
    success_chance = 60.0
    fail_chance = 40.0
    input_item = 'kubejs:pen_regis_02' //此处修改输入
    rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:14,type:"km"}')
    cons_item = 'kubejs:andesite_alloy_gear'

    // 安山齿轮
    event.recipes.createSequencedAssembly([
        //成品：
        Item.of(output_item).withChance(success_chance),
        //随机废料：
        Item.of(rand_item).withChance(fail_chance),
       ], 
       //输入物品：
       input_item, 
       [
       //每步的配方
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第一步
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第二步
        event.recipes.createCutting(trans_item, trans_item).processingTime(10)//第三步
   ]).transitionalItem(trans_item)

   // 机械手锯
    input_item = 'kubejs:pen_regis_03'
    cons_item = 'create:andesite_alloy'
    event.recipes.createSequencedAssembly([
        //成品：
        Item.of(output_item).withChance(success_chance),
        //随机废料：
        Item.of(rand_item).withChance(fail_chance),
       ], 
       //输入物品：
       input_item, 
       [
       //每步的配方
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第一步
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第二步
        event.recipes.createDeploying(trans_item, [trans_item, F('#saws')])//第三步
   ]).transitionalItem(trans_item)

   // 模板装配
    input_item = 'kubejs:pen_regis_11'
    event.recipes.createSequencedAssembly([
        //成品：
        Item.of(output_item).withChance(success_chance),
        //随机废料：
        Item.of(rand_item).withChance(fail_chance),
       ], 
       //输入物品：
       input_item, 
       [
       //每步的配方
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第一步
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第二步
        event.recipes.createCutting(trans_item, trans_item).processingTime(10)//第三步
   ]).transitionalItem(trans_item)

    // 高级合成，80%成功率，共3个配方
    success_chance = 80.0
    fail_chance = 20.0
    input_item = 'kubejs:pen_regis_12' //此处修改输入
    rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:14,type:"km"}')
    cons_item = 'kubejs:andesite_alloy_gear'

    // 模板+齿轮
    event.recipes.createSequencedAssembly([
        //成品：
        Item.of(output_item).withChance(success_chance),
        //随机废料：
        Item.of(rand_item).withChance(fail_chance),
       ], 
       //输入物品：
       input_item, 
       [
       //每步的配方
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第一步
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第二步
        event.recipes.createCutting(trans_item, trans_item).processingTime(10)//第三步
   ]).transitionalItem(trans_item)

   // 模板+机械手锯
    cons_item = 'create:andesite_alloy'
    event.recipes.createSequencedAssembly([
        //成品：
        Item.of(output_item).withChance(success_chance),
        //随机废料：
        Item.of(rand_item).withChance(fail_chance),
       ], 
       //输入物品：
       input_item, 
       [
       //每步的配方
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第一步
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第二步
        event.recipes.createDeploying(trans_item, [trans_item, F('#saws')])//第三步
   ]).transitionalItem(trans_item)

   // 齿轮+手锯
    input_item = 'kubejs:pen_regis_04'
    event.recipes.createSequencedAssembly([
        //成品：
        Item.of(output_item).withChance(success_chance),
        //随机废料：
        Item.of(rand_item).withChance(fail_chance),
       ], 
       //输入物品：
       input_item, 
       [
       //每步的配方
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第一步
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第二步
        event.recipes.createDeploying(trans_item, [trans_item, F('#saws')])//第三步
   ]).transitionalItem(trans_item)

    // 终级合成，100%成功率，共1个配方
    input_item = 'kubejs:pen_regis_13' //此处修改输入
    cons_item = 'kubejs:andesite_alloy_gear'
    round = 1

    // 模板+齿轮+手锯
    event.recipes.createSequencedAssembly([
        //成品：
        Item.of(output_item)
       ], 
       //输入物品：
       input_item, 
       [
       //每步的配方
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第一步
        event.recipes.createDeploying(trans_item, [trans_item, cons_item]),//第二步
        event.recipes.createDeploying(trans_item, [trans_item, F('#saws')])//第三步
   ]).transitionalItem(trans_item).loops(round)
}