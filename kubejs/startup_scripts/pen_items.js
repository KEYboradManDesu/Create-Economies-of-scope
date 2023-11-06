console.info('Initializing CEOS Unique Assemble Recipes')
console.info('You are going to love it ;)')

//钢笔命名规范：KJ(pen_regis_1M1) [1M1中第一个1代表第一章，M代表主线，第二个1代表第一个配方]

onEvent('item.registry', event => {
// 钢笔
event.create('golden_pen').texture("kubejs:item/pens/pen").displayName('金质钢笔').maxStackSize(1)

//钢笔中间物品

//第一章开始
//第一章成品注册
event.create(KJ('pen_regis_1M1'), 'create:sequenced_assembly')
.textureJson({layer0: "kubejs:item/mechanism/kinetic_mechanism", layer1: "kubejs:item/namber/1"}).displayName('动力构件')
event.create(KJ('pen_regis_1M2'), 'create:sequenced_assembly')
.textureJson({layer0: "kubejs:item/mechanism/kinetic_mechanism", layer1: "kubejs:item/namber/2"}).displayName('动力构件')
event.create(KJ('pen_regis_1M3'), 'create:sequenced_assembly')
.textureJson({layer0: "kubejs:item/mechanism/kinetic_mechanism", layer1: "kubejs:item/namber/3"}).displayName('动力构件')
event.create(KJ('pen_regis_1M4'), 'create:sequenced_assembly')
.textureJson({layer0: "kubejs:item/mechanism/kinetic_mechanism", layer1: "kubejs:item/namber/4"}).displayName('动力构件')
event.create(KJ('pen_regis_1M5'), 'create:sequenced_assembly')
.textureJson({layer0: "kubejs:item/mechanism/kinetic_mechanism", layer1: "kubejs:item/namber/3"}).displayName('动力构件')
event.create(KJ('pen_regis_1M6'), 'create:sequenced_assembly')
.textureJson({layer0: "kubejs:item/mechanism/kinetic_mechanism", layer1: "kubejs:item/namber/4"}).displayName('动力构件')

event.create(KJ('pen_regis_1B1'), 'create:sequenced_assembly')
.textureJson({layer0: "create_dd:item/inductive_mechanism", layer1: "kubejs:item/namber/1"}).displayName('物流构件')
event.create(KJ('pen_regis_1B2'), 'create:sequenced_assembly')
.textureJson({layer0: "create_dd:item/inductive_mechanism", layer1: "kubejs:item/namber/2"}).displayName('物流构件')
event.create(KJ('pen_regis_1B3'), 'create:sequenced_assembly')
.textureJson({layer0: "create_dd:item/inductive_mechanism", layer1: "kubejs:item/namber/3"}).displayName('物流构件')
event.create(KJ('pen_regis_1B4'), 'create:sequenced_assembly')
.textureJson({layer0: "create_dd:item/inductive_mechanism", layer1: "kubejs:item/namber/4"}).displayName('物流构件')
event.create(KJ('pen_regis_1B5'), 'create:sequenced_assembly')
.textureJson({layer0: "create_dd:item/inductive_mechanism", layer1: "kubejs:item/namber/3"}).displayName('物流构件')
event.create(KJ('pen_regis_1B6'), 'create:sequenced_assembly')
.textureJson({layer0: "create_dd:item/inductive_mechanism", layer1: "kubejs:item/namber/4"}).displayName('物流构件')

//初始物品注册
event.create(KJ('pen_regis_1M0A'))
.parentModel("kubejs:item/pen_regis/marked_slab").textureJson({layer0: "minecraft:block/oak_planks", layer1: "kubejs:block/namber/0"}).displayName('标记木板（等待切割）')
event.create(KJ('pen_regis_1M1A'), 'create:sequenced_assembly')
.parentModel("kubejs:item/pen_regis/marked_slab").textureJson({layer0: "minecraft:block/oak_planks", layer1: "kubejs:block/namber/1"}).displayName('标记木板')
event.create(KJ('pen_regis_1M2A'), 'create:sequenced_assembly')
.parentModel("kubejs:item/pen_regis/marked_slab").textureJson({layer0: "minecraft:block/oak_planks", layer1: "kubejs:block/namber/2"}).displayName('标记木板')
event.create(KJ('pen_regis_1M3A'), 'create:sequenced_assembly')
.parentModel("kubejs:item/pen_regis/marked_slab").textureJson({layer0: "minecraft:block/oak_planks", layer1: "kubejs:block/namber/3"}).displayName('标记木板')
event.create(KJ('pen_regis_1M4A'), 'create:sequenced_assembly')
.parentModel("kubejs:item/pen_regis/marked_slab").textureJson({layer0: "minecraft:block/oak_planks", layer1: "kubejs:block/namber/4"}).displayName('标记木板')

event.create(KJ('pen_regis_1M0B'))
.textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:item/namber/0"}).displayName('标记模具（等待切割）')
event.create(KJ('pen_regis_1M1B'), 'create:sequenced_assembly')
.textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:item/namber/1"}).displayName('标记模具')
event.create(KJ('pen_regis_1M2B'), 'create:sequenced_assembly')
.textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:item/namber/1"}).displayName('标记模具')
event.create(KJ('pen_regis_1M3B'), 'create:sequenced_assembly')
.textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:item/namber/1"}).displayName('标记模具')
event.create(KJ('pen_regis_1M4B'), 'create:sequenced_assembly')
.textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:item/namber/1"}).displayName('标记模具')

//event.create('kubejs:pen_regis_20')
//.textureJson({layer0: "kubejs:item/mechanism/kinetic_mechanism", layer1: "kubejs:item/namber/0"}).displayName('标记模具（等待切割）')

})
