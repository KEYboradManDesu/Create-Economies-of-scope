// 此文件未完成

console.info('Initializing CEOS Unique Assembly Recipes')
console.info('You are going to love it ;)')

onEvent('recipes', event => {
    kinetic(event) //动力
    seal(event) //密封
    //g_source(event) //金源
    
    //sturdy(event) //坚实
    //infernal(event) //酷热
    //abstruse(event) //谐振
    //calcu(event) //计算
    //inductive(event) //感应
    //meta(event) //异构
})

// 此处初始化变量
var output_item
var trans_item
var success_chance
var fail_chance
var input_item
var cons_item
var cons_item2
var cons_fiuld
var rand_item
var round

// 以下配方可直接复制替换

// 开始注册动力构件，共8个配方
function kinetic(event){
    output_item = 'kubejs:kinetic_mechanism' //此处修改输出
    trans_item = 'kubejs:incomplete_kinetic_mechanism'
    round = 1

    // 初级合成，40%成功率，共一个配方 
    success_chance = 40.0
    fail_chance = 60.0
    input_item = KJ('pen_regis_1M1A') //此处修改输入
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
   ]).transitionalItem(trans_item).loops(round)

    // 中级合成，60%成功率，共3个配方
    success_chance = 60.0
    fail_chance = 40.0
    input_item = KJ('pen_regis_1M2A') //此处修改输入
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
   ]).transitionalItem(trans_item).loops(round)

   // 机械手锯
    input_item = KJ('pen_regis_1M3A')
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
   ]).transitionalItem(trans_item).loops(round)

   // 模板装配
    input_item = KJ('pen_regis_1M1B')
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
   ]).transitionalItem(trans_item).loops(round)

    // 高级合成，80%成功率，共3个配方
    success_chance = 80.0
    fail_chance = 20.0
    input_item = KJ('pen_regis_1M2B') //此处修改输入
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
   ]).transitionalItem(trans_item).loops(round)

   // 模板+机械手锯
    input_item = KJ('pen_regis_1M3B') //此处修改输入
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
   ]).transitionalItem(trans_item).loops(round)

   // 齿轮+手锯
    input_item = KJ('pen_regis_1M4A')
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
   ]).transitionalItem(trans_item).loops(round)

    // 终级合成，100%成功率，共1个配方
    input_item = KJ('pen_regis_1M1B') //此处修改输入
    cons_item = 'kubejs:andesite_alloy_gear'

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


// 开始注册密封构件，共12个配方
function seal(event){
    
    output_item = 'kubejs:sealed_mechanism' //此处修改输出
    trans_item = 'kubejs:incomplete_sealed_mechanism2'
    round = 1

    //密封构件:

    //动力构件:30%
    //物流构件:40%
    
    //2x防腐海带:20%
    //2x焦化橡胶:30%
    
    //蜜脾:20%
    //憎水涂料:30%
    //杂酚油:40% 

    // 动力构件开局，共6个配方
    // 70%成功率，共一个配方 
    success_chance = 70.0
    fail_chance = 30.0
    // 防腐海带+蜜脾
    input_item = KJ('pen_regis_1M1') //此处修改输入
    cons_item = 'kubejs:treated_kelp'
    cons_item2 = '#immersive_weathering:wax'
    rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:15,type:"sm"}')

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
        event.recipes.createDeploying(trans_item, [trans_item, cons_item2])//第三步
   ]).transitionalItem(trans_item).loops(round)

   // 80% 成功率，共两个配方
   success_chance = 80.0
   fail_chance = 20.0
   // 防腐海带+憎水涂料
   input_item = KJ('pen_regis_1M2') //此处修改输入
   cons_item = 'kubejs:treated_kelp'
   cons_item2 = Item.of('createindustry:water_insulation')
   rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:15,type:"sm"}') // 需要修改

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
       event.recipes.createDeploying(trans_item, [trans_item, cons_item2])//第三步
  ]).transitionalItem(trans_item).loops(round)

   // 硫化橡胶+蜜脾
   input_item = KJ('pen_regis_1M3') //此处修改输入
   cons_item = 'thermal:cured_rubber'
   cons_item2 = '#immersive_weathering:wax'
   rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:15,type:"sm"}') // 需要修改

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
       event.recipes.createDeploying(trans_item, [trans_item, cons_item2])//第三步
  ]).transitionalItem(trans_item).loops(round)

     // 90% 成功率，共两个配方
     success_chance = 90.0
     fail_chance = 10.0
     // 防腐海带+杂酚油
     input_item = KJ('pen_regis_1M4') //此处修改输入
     cons_item = 'kubejs:treated_kelp'
     rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:15,type:"sm"}') // 需要修改
  
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
         event.recipes.createFilling(trans_item, [trans_item,Fluid.of('immersiveengineering:creosote', 100)])//第三步
    ]).transitionalItem(trans_item).loops(round)
  
     // 硫化橡胶+憎水涂料
     input_item = KJ('pen_regis_1M5') //此处修改输入
     cons_item = 'thermal:cured_rubber'
     cons_item2 = Item.of('createindustry:water_insulation')
     rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:15,type:"sm"}') // 需要修改
  
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
         event.recipes.createDeploying(trans_item, [trans_item, cons_item2])//第三步
    ]).transitionalItem(trans_item).loops(round)

    // 100%成功率，共一个配方 
    // 硫化橡胶+杂酚油
    input_item = KJ('pen_regis_1M6') //此处修改输入
    cons_item = 'thermal:cured_rubber'
    rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:15,type:"sm"}') // 需要修改

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
        event.recipes.createFilling(trans_item, [trans_item,Fluid.of('immersiveengineering:creosote', 100)])//第三步
   ]).transitionalItem(trans_item).loops(round)

    // 物流构件开局，共6个配方
    // 80%成功率，共一个配方 
    success_chance = 80.0
    fail_chance = 20.0
    // 防腐海带+蜜脾
    input_item = KJ('pen_regis_1B1') //此处修改输入
    cons_item = 'kubejs:treated_kelp'
    cons_item2 = '#immersive_weathering:wax'
    rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:15,type:"sm"}') // 需要修改

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
        event.recipes.createDeploying(trans_item, [trans_item, cons_item2])//第三步
   ]).transitionalItem(trans_item).loops(round)

   // 90% 成功率，共两个配方
   success_chance = 90.0
   fail_chance = 10.0
   // 防腐海带+憎水涂料
   input_item = KJ('pen_regis_1B2') //此处修改输入
   cons_item = 'kubejs:treated_kelp'
   cons_item2 = Item.of('createindustry:water_insulation')
   rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:15,type:"sm"}') // 需要修改

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
       event.recipes.createDeploying(trans_item, [trans_item, cons_item2])//第三步
  ]).transitionalItem(trans_item).loops(round)

   // 硫化橡胶+蜜脾
   input_item = KJ('pen_regis_1B3') //此处修改输入
   cons_item = 'thermal:cured_rubber'
   cons_item2 = '#immersive_weathering:wax'
   rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:15,type:"sm"}') // 需要修改

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
       event.recipes.createDeploying(trans_item, [trans_item, cons_item2])//第三步
  ]).transitionalItem(trans_item).loops(round)

     // 100% 成功率，共三个配方
     // 防腐海带+杂酚油
     input_item = KJ('pen_regis_1B4') //此处修改输入
     cons_item = 'kubejs:treated_kelp'
     rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:15,type:"sm"}') // 需要修改
  
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
         event.recipes.createFilling(trans_item, [trans_item,Fluid.of('immersiveengineering:creosote', 100)])//第三步
    ]).transitionalItem(trans_item).loops(round)
  
     // 硫化橡胶+憎水涂料
     input_item = KJ('pen_regis_1B5') //此处修改输入
     cons_item = 'thermal:cured_rubber'
     cons_item2 = Item.of('createindustry:water_insulation')
     rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:15,type:"sm"}') // 需要修改
  
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
         event.recipes.createDeploying(trans_item, [trans_item, cons_item2])//第三步
    ]).transitionalItem(trans_item).loops(round)

    // 硫化橡胶+杂酚油
    input_item = KJ('pen_regis_1B6') //此处修改输入
    cons_item = 'thermal:cured_rubber'
    rand_item = Item.of('ftbquests:lootcrate', '{CustomModelData:15,type:"sm"}') // 需要修改

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
        event.recipes.createFilling(trans_item, [trans_item,Fluid.of('immersiveengineering:creosote', 100)])//第三步
   ]).transitionalItem(trans_item).loops(round)
}