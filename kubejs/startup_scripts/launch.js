// priority: 0

console.info('Initializing CEOS Modified Recipes')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

//event.create('thermal_cast').texture("kubejs:item/thermal_cast").displayName('热力模板').unstackable()
event.create('three_cast').texture("kubejs:item/three_cast").displayName('整数铸模 (3)').unstackable()
event.create('eight_cast').texture("kubejs:item/eight_cast").displayName('整数铸模 (8)').unstackable()
event.create('plus_cast').texture("kubejs:item/plus_cast").displayName('运算符铸模 (＋)').unstackable()
event.create('minus_cast').texture("kubejs:item/minus_cast").displayName('运算符铸模 (－)').unstackable()
event.create('multiply_cast').texture("kubejs:item/multiply_cast").displayName('运算符铸模 (x)').unstackable()
event.create('divide_cast').texture("kubejs:item/divide_cast").displayName('运算符铸模 (÷)').unstackable()
event.create('computation_matrix').parentModel("kubejs:item/computation_matrix").displayName('计算矩阵').unstackable().rarity(RARITY_EPIC)
event.create('programming_matrix').parentModel("kubejs:item/programming_matrix").displayName('§c编程矩阵§r').maxStackSize(4)
event.create('energy_matrix').parentModel("kubejs:item/energy_matrix_c").displayName('§6能量矩阵§r').maxStackSize(2)

event.create('growing_certus_seed', 'create:sequenced_assembly').texture("ae2:item/crystal_seed_certus").displayName('赛特斯石英种子')
event.create('tiny_certus_crystal').texture("ae2:item/crystal_seed_certus2").displayName('微型赛特斯石英')
event.create('growing_tiny_certus_crystal', 'create:sequenced_assembly').texture("ae2:item/crystal_seed_certus2").displayName('微型赛特斯石英')
event.create('small_certus_crystal').texture("ae2:item/crystal_seed_certus3").displayName('小块赛特斯石英')
event.create('growing_small_certus_crystal', 'create:sequenced_assembly').texture("ae2:item/crystal_seed_certus3").displayName('小块赛特斯石英')
event.create('growing_fluix_seed', 'create:sequenced_assembly').texture("ae2:item/crystal_seed_fluix").displayName('福鲁伊克斯石英种子')
event.create('tiny_fluix_crystal').texture("ae2:item/crystal_seed_fluix2").displayName('微型福鲁伊克斯石英')
event.create('growing_tiny_fluix_crystal', 'create:sequenced_assembly').texture("ae2:item/crystal_seed_fluix2").displayName('微型福鲁伊克斯石英')
event.create('small_fluix_crystal').texture("ae2:item/crystal_seed_fluix3").displayName('小块福鲁伊克斯石英')
event.create('growing_small_fluix_crystal', 'create:sequenced_assembly').texture("ae2:item/crystal_seed_fluix3").displayName('小块福鲁伊克斯石英')
event.create('purified_certus_quartz_crystal').texture("kubejs:item/quartz/purified_certus_quartz_crystal").displayName('高纯赛特斯石英水晶')
event.create('purified_nether_quartz_crystal').texture("kubejs:item/quartz/purified_nether_quartz_crystal").displayName('高纯下界石英水晶')
event.create('nether_seed').texture("kubejs:item/quartz/crystal_seed_nether").displayName('下界石英种子')
event.create('growing_nether_seed', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_nether").displayName('下界石英种子')
event.create('tiny_nether_crystal').texture("kubejs:item/quartz/crystal_seed_nether2").displayName('微型下界石英')
event.create('growing_tiny_nether_crystal', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_nether2").displayName('微型下界石英')
event.create('small_nether_crystal').texture("kubejs:item/quartz/crystal_seed_nether3").displayName('小块下界石英')
event.create('growing_small_nether_crystal', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_nether3").displayName('小块下界石英')
event.create('purified_arcane_crystal').texture("kubejs:item/quartz/purified_arcane_crystal").displayName('高纯神秘水晶')
event.create('arcane_crystal_seed').texture("kubejs:item/quartz/crystal_seed_arcane").displayName('神秘水晶种子')
event.create('growing_arcane_seed', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_arcane").displayName('神秘水晶种子')
event.create('tiny_arcane_crystal').texture("kubejs:item/quartz/crystal_seed_arcane2").displayName('微型神秘水晶')
event.create('growing_tiny_arcane_crystal', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_arcane2").displayName('微型神秘水晶')
event.create('small_arcane_crystal').texture("kubejs:item/quartz/crystal_seed_arcane3").displayName('小块神秘水晶')
event.create('growing_small_arcane_crystal', 'create:sequenced_assembly').texture("kubejs:item/quartz/crystal_seed_arcane3").displayName('小块神秘水晶')

event.create('pipe_module_utility').texture("kubejs:item/pipe_module_utility").displayName('通用管道模块')
event.create('pipe_module_tier_1').texture("kubejs:item/pipe_module_tier_1").displayName('黄铜管道模块')
event.create('pipe_module_tier_2').texture("kubejs:item/pipe_module_tier_2").displayName('殷钢管道模块')
event.create('pipe_module_tier_3').texture("kubejs:item/pipe_module_tier_3").displayName('谐振管道模块')

event.create('diorite_alloy').texture("kubejs:item/diorite_alloy").displayName('闪长合金')
event.create('granite_alloy').texture("kubejs:item/granite_alloy").displayName('花岗合金')
event.create('metamorphic_alloy').texture("kubejs:item/metamorphic_alloy").displayName('异构合金')

event.create('mana_petal').texture("kubejs:item/mana_petal").displayName('魔力花瓣')

event.create('treated_kelp').texture("kubejs:item/treated_kelp").displayName('防腐海带')
event.create('creosote_ball').texture("kubejs:item/creosote_ball").displayName('杂酚油球')

event.create('brass_dust').texture("kubejs:item/dust/brass_dust").displayName('黄铜粉')
event.create('cobalt_dust').texture("kubejs:item/dust/cobalt_dust").displayName('钴粉')
event.create('zinc_dust').texture("kubejs:item/dust/zinc_dust").displayName('锌粉')
event.create('rune_dust').texture("kubejs:item/dust/rune_dust").displayName('符文粉')
event.create('naga_dust').texture("kubejs:item/dust/naga_dust").displayName('娜迦鳞粉').rarity(RARITY_EPIC)
event.create('mysterywood_sawdust').texture("kubejs:item/dust/mysterywood_sawdust").displayName('神秘木锯末')

event.create('earth_slimy_fern_leaf').texture("kubejs:item/fern/leaf/earth_slimy_fern_leaf").displayName('大地黏性蕨叶')
event.create('ender_slimy_fern_leaf').texture("kubejs:item/fern/leaf/ender_slimy_fern_leaf").displayName('末影黏性蕨叶')
event.create('sky_slimy_fern_leaf').texture("kubejs:item/fern/leaf/sky_slimy_fern_leaf").displayName('碧空黏性蕨叶')
event.create('earth_slimy_fern_paste').texture("kubejs:item/fern/paste/earth_slimy_fern_paste").displayName('大地黏性蕨粉末')
event.create('ender_slimy_fern_paste').texture("kubejs:item/fern/paste/ender_slimy_fern_paste").displayName('末影黏性蕨粉末')
event.create('sky_slimy_fern_paste').texture("kubejs:item/fern/paste/sky_slimy_fern_paste").displayName('碧空黏性蕨粉末')

event.create('netherite_saw').parentModel("kubejs:item/tool/netherite_saw").displayName('下界合金手锯').maxDamage(2653)
event.create('chromatic_resonator').texture("kubejs:item/tool/chromatic_resonator").displayName('异彩共鸣器').maxDamage(512).rarity(RARITY_UNCOMMON)
event.create('calculator').texture("kubejs:item/tool/calculator").displayName('计算器').maxDamage(256).rarity(RARITY_UNCOMMON)
event.create('boot_medium').texture("kubejs:item/tool/boot_medium").displayName('闪存盘').maxDamage(256).rarity(RARITY_UNCOMMON)
event.create('thermal_grease').texture("kubejs:item/tool/thermal_grease").displayName('散热硅脂').maxDamage(192).rarity(RARITY_UNCOMMON)
event.create('hop_slime').texture("kubejs:item/tool/hop_slime").displayName('高定向热解石莱姆').maxDamage(256).rarity(RARITY_UNCOMMON)
event.create('metamorphic_lich_rod').texture("kubejs:item/tool/metamorphic_lich_rod").displayName('巫妖腐化法杖').maxDamage(256).rarity(RARITY_EPIC)

event.create('circuit_scrap').texture("kubejs:item/circuit_scrap").displayName('模板碎片')
//event.create('integrated_cpu').texture("kubejs:item/integrated_circuit").displayName('集成CPU')
event.create('incomplete_coke_chunk', 'create:sequenced_assembly').texture("kubejs:item/incomplete_coke_chunk").displayName('碎焦碳')
event.create('coke_chunk').texture("kubejs:item/coke_chunk").displayName('焦碳块')
event.create('creosote_pellet').texture("kubejs:item/creosote_pellet").displayName('杂酚油滴')
event.create('smoke_mote').texture("kubejs:item/smoke_mote").displayName('微小烟云')
event.create('sand_ball').texture("kubejs:item/sand_ball").displayName('沙球').maxStackSize(4)
event.create('rough_sand').texture("kubejs:item/rough_sand").displayName('沙块')
event.create('purified_sand').texture("kubejs:item/purified_sand").displayName('高纯沙')
event.create('press_rod_die').texture("kubejs:item/press_rod_die").displayName('杆冲压模具').unstackable()
event.create('motor').texture("kubejs:item/motor").displayName('电动马达')
event.create('battery').texture("kubejs:item/battery").displayName('电池')
event.create('battery_incomplete', 'create:sequenced_assembly').texture("kubejs:item/battery_incomplete").displayName('电池（缺电）')
event.create('sculk_motor').texture("kubejs:item/sculk_motor").displayName('循声马达').rarity(RARITY_UNCOMMON)
//event.create('golden_electron_tube').texture("kubejs:item/golden_electron_tube").displayName('金制电子管')
event.create('iron_compressed_sheet').texture("kubejs:item/iron_compressed_sheet").displayName('压缩铁板')
event.create('matter_plastics').texture("kubejs:item/matter_plastics").displayName('物质塑料').rarity(RARITY_UNCOMMON)
event.create('dye_entangled_singularity').texture("kubejs:item/dye_entangled_singularity").displayName('异彩奇点').rarity(RARITY_UNCOMMON)
event.create('incomplete_component_electronic', 'create:sequenced_assembly').texture("kubejs:item/incomplete_component_electronic").displayName('电子元件（未完成）')
event.create('incomplete_component_electronic_adv', 'create:sequenced_assembly').texture("kubejs:item/incomplete_component_electronic_adv").displayName('高级电子元件（未完成）')
event.create('blank_tier_installer').texture("kubejs:item/blank_tier_installer").displayName('空白工厂安装器')
event.create('gold_matter').texture("kubejs:item/gold_matter").displayName('金物质').rarity(RARITY_UNCOMMON).unstackable()
event.create('arcane_golden_sheet').texture("kubejs:item/arcane_golden_sheet").displayName('神秘金板')
event.create('living_core').texture("kubejs:item/living_core").displayName('活力核心')
event.create('metamorphic_lich_core').texture("kubejs:item/metamorphic_lich_core").displayName('腐化核心').rarity(RARITY_UNCOMMON)
event.create('life_gold_source').texture("kubejs:item/life_gold_source").displayName('金源机魂').rarity(RARITY_UNCOMMON)
event.create('empty_tube').texture("kubejs:item/empty_tube").displayName('空玻璃管')
event.create('rebar_bunch').texture("kubejs:item/rebar_bunch").displayName('钢筋捆')
event.create('mana_crystal').texture("kubejs:item/mana_crystal").displayName('魔力结晶')
event.create('andesite_alloy_gear').texture("kubejs:item/andesite_alloy_gear").displayName('安山合金齿轮')
event.create('zinc_wire').texture("kubejs:item/zinc_wire").displayName('锌线')


// 构件
event.create('incomplete_hemp_fabric', 'create:sequenced_assembly').texture("kubejs:item/incomplete_hemp_fabric").displayName('坚韧布料（未完成）')
event.create('plate', 'create:sequenced_assembly').texture("kubejs:item/handmade_mechanism/plate").displayName('红石电路板（未完成）')
event.create('handmade_kinetic_mechanism').texture("kubejs:item/handmade_mechanism/kinetic_mechanism").displayName('动力构件（粗制）')
//event.create('incomplete_handmade_kinetic_mechanism').texture("kubejs:item/handmade_mechanism/incomplete_kinetic_mechanism").displayName('动力构件（粗制/半成品）')
event.create('handmade_precision_mechanism').texture("kubejs:item/handmade_mechanism/precision_mechanism").displayName('精密构件（粗制）')
//event.create('incomplete_handmade_precision_mechanism').texture("kubejs:item/handmade_mechanism/incomplete_precision_mechanism").displayName('精密构件（粗制/半成品）')
event.create('handmade_sealed_mechanism').texture("kubejs:item/handmade_mechanism/sealed_mechanism").displayName('密封构件（粗制）')
//event.create('incomplete_handmade_sealed_mechanism').texture("kubejs:item/handmade_mechanism/incomplete_sealed_mechanism").displayName('密封构件（粗制/半成品）')
event.create('handmade_inductive_mechanism').texture("kubejs:item/handmade_mechanism/inductive_mechanism").displayName('感应构件（粗制）').rarity(RARITY_UNCOMMON)
//event.create('incomplete_handmade_inductive_mechanism').texture("kubejs:item/handmade_mechanism/incomplete_calculation_mechanism").displayName('感应构件（粗制/半成品）')
event.create('handmade_infernal_mechanism').texture("kubejs:item/handmade_mechanism/infernal_mechanism").displayName('酷热构件（粗制）').rarity(RARITY_UNCOMMON).burnTime(10000)
event.create('handmade_abstruse_mechanism').texture("kubejs:item/handmade_mechanism/abstruse_mechanism").displayName('§3谐振构件（粗制）')

event.create('kinetic_mechanism').texture("kubejs:item/mechanism/kinetic_mechanism").displayName('动力构件')
event.create('incomplete_kinetic_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_kinetic_mechanism").displayName('动力构件（未完成）')
event.create('incomplete_precision_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_precision_mechanism").displayName('精密构件（未完成）')
event.create('sealed_mechanism').texture("kubejs:item/mechanism/sealed_mechanism").displayName('密封构件')
event.create('incomplete_sealed_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_sealed_mechanism2").displayName('密封构件（未完成）')
event.create('incomplete_sealed_mechanism2', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_sealed_mechanism").displayName('密封构件（未完成）')
event.create('sturdy_mechanism').texture("kubejs:item/mechanism/sturdy_mechanism").displayName('坚实构件').rarity(RARITY_UNCOMMON)
event.create('incomplete_sturdy_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_sturdy_mechanism").displayName('坚实构件（未完成）').rarity(RARITY_UNCOMMON)
event.create('infernal_mechanism').texture("kubejs:item/mechanism/infernal_mechanism").displayName('酷热构件').rarity(RARITY_UNCOMMON).burnTime(12000)
event.create('incomplete_infernal_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_infernal_mechanism").displayName('酷热构件（未完成）').rarity(RARITY_UNCOMMON)
event.create('abstruse_mechanism').texture("kubejs:item/mechanism/abstruse_mechanism").displayName('§3谐振构件')
event.create('incomplete_abstruse_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_abstruse_mechanism").displayName('§3谐振构件（未完成）').rarity(RARITY_UNCOMMON)
event.create('calculation_mechanism').texture("kubejs:item/mechanism/calculation_mechanism").displayName('计算构件').rarity(RARITY_UNCOMMON)
event.create('incomplete_calculation_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_calculation_mechanism").displayName('计算构件（未完成）').rarity(RARITY_UNCOMMON)
event.create('inductive_mechanism').texture("kubejs:item/mechanism/inductive_mechanism").displayName('感应构件').rarity(RARITY_UNCOMMON)
event.create('incomplete_inductive_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_inductive_mechanism").displayName('感应构件（未完成）').rarity(RARITY_UNCOMMON)

event.create('gold_source_mechanism').texture("kubejs:item/mechanism/gold_source_mechanism").displayName('金源构件')
event.create('incomplete_gold_source_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_gold_source_mechanism").displayName('金源构件（未完成）')
event.create('metamorphic_mechanism').texture("kubejs:item/mechanism/metamorphic_mechanism").displayName('异构构件')
event.create('incomplete_metamorphic_mechanism', 'create:sequenced_assembly').texture("kubejs:item/mechanism/incomplete_metamorphic_mechanism").displayName('异构构件（未完成）')

// 钢笔
event.create('golden_pen').texture("kubejs:item/pens/pen").displayName('金质钢笔').maxStackSize(1)

//钢笔中间物品
event.create('kubejs:pen_regis_00')
.parentModel("minecraft:block/oak_planks").textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:block/namber/0"}).displayName('标记木板（等待切割）')
event.create('kubejs:pen_regis_01', 'create:sequenced_assembly')
.parentModel("minecraft:block/oak_planks").textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:block/namber/1"}).displayName('标记木板')
event.create('kubejs:pen_regis_02', 'create:sequenced_assembly')
.parentModel("minecraft:block/oak_planks").textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:block/namber/2"}).displayName('标记木板')
event.create('kubejs:pen_regis_03', 'create:sequenced_assembly')
.parentModel("minecraft:block/oak_planks").textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:block/namber/3"}).displayName('标记木板')
event.create('kubejs:pen_regis_04', 'create:sequenced_assembly')
.parentModel("minecraft:block/oak_planks").textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:block/namber/4"}).displayName('标记木板')

event.create('kubejs:pen_regis_10')
.textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:item/namber/0"}).displayName('标记模具（等待切割）')
event.create('kubejs:pen_regis_11', 'create:sequenced_assembly')
.textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:item/namber/1"}).displayName('标记模具')
event.create('kubejs:pen_regis_12', 'create:sequenced_assembly')
.textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:item/namber/1"}).displayName('标记模具')
event.create('kubejs:pen_regis_13', 'create:sequenced_assembly')
.textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:item/namber/1"}).displayName('标记模具')
event.create('kubejs:pen_regis_14', 'create:sequenced_assembly')
.textureJson({layer0: "tconstruct:item/materials/pattern", layer1: "kubejs:item/namber/1"}).displayName('标记模具')

//event.create('kubejs:pen_regis_20')
//.textureJson({layer0: "kubejs:item/mechanism/kinetic_mechanism", layer1: "kubejs:item/namber/0"}).displayName('标记模具（等待切割）')
event.create('kubejs:pen_regis_21', 'create:sequenced_assembly')
.textureJson({layer0: "kubejs:item/mechanism/kinetic_mechanism", layer1: "kubejs:item/namber/1"}).displayName('动力构件')
event.create('kubejs:pen_regis_22', 'create:sequenced_assembly')
.textureJson({layer0: "kubejs:item/mechanism/kinetic_mechanism", layer1: "kubejs:item/namber/2"}).displayName('动力构件')
event.create('kubejs:pen_regis_23', 'create:sequenced_assembly')
.textureJson({layer0: "kubejs:item/mechanism/kinetic_mechanism", layer1: "kubejs:item/namber/3"}).displayName('动力构件')
event.create('kubejs:pen_regis_24', 'create:sequenced_assembly')
.textureJson({layer0: "kubejs:item/mechanism/kinetic_mechanism", layer1: "kubejs:item/namber/4"}).displayName('动力构件')

//抽屉
event.create('osmium_drawersop').parentModel("kubejs:item/drawersop_casing").displayName('锇加固抽屉')

////矿物
event.create('crushed_raw_cobalt').texture("kubejs:item/ore/crushed_raw_cobalt").displayName('粉碎钴矿石')
event.create('crushed_raw_mana_steel').texture("kubejs:item/ore/crushed_raw_mana_steel").displayName('粉碎魔钢矿石')

event.create('raw_mana_steel').texture("kubejs:item/ore/raw_mana_steel").displayName('粗魔力钢')

////混合物
event.create('andesite_alloy_ingot').texture("kubejs:item/compound/andesite_alloy_classic").displayName('安山合金锭')
event.create('silicon_compound').texture("kubejs:item/compound/silicon_compound").displayName('硅混合物')
event.create('nickel_compound').texture("kubejs:item/compound/nickel_compound").displayName('铁镍混合物')
event.create('invar_compound', 'create:sequenced_assembly').texture("kubejs:item/compound/invar_compound").displayName('殷瓦钢胚')
event.create('steel_compound', 'create:sequenced_assembly').texture("kubejs:item/compound/steel_compound").displayName('钢胚')
event.create('netherite_compound', 'create:sequenced_assembly').texture("kubejs:item/compound/netherite_compound").displayName('下界合金胚')
event.create('brass_compound').texture("kubejs:item/compound/brass_compound").displayName('铜锌混合物')
event.create('bronze_compound').texture("kubejs:item/compound/bronze_compound").displayName('铜锡混合物')
event.create('constantan_compound').texture("kubejs:item/compound/constantan_compound").displayName('铜镍混合物')
event.create('rose_gold_compound').texture("kubejs:item/compound/rose_gold_compound").displayName('铜金混合物')
event.create('pigiron_compound').texture("kubejs:item/compound/pigiron_compound").displayName('生铁混合物')
event.create('electrum_compound').texture("kubejs:item/compound/electrum_compound").displayName('金银混合物')
event.create('manasteel_compound').texture("kubejs:item/compound/manasteel_compound").displayName('魔力钢混合物')
event.create('steel_block_compound', 'create:sequenced_assembly').parentModel("kubejs:item/incomplete_steel_block").displayName('钢胚块')

////背包相关
event.create('sewing_spool').texture("kubejs:item/backpack/sewing_spool").displayName('缝纫线轴').maxDamage(12)
event.create('incomplete_upgrade_base', 'create:sequenced_assembly').texture("kubejs:item/backpack/incomplete_upgrade_base").displayName('空白背包升级（半成品）')


////电路板相关
event.create('radiant_coil').glow(true).texture("kubejs:item/radiant_coil").displayName('光辉线圈').rarity(RARITY_UNCOMMON)
event.create('radiant_sheet').glow(true).texture("kubejs:item/radiant_sheet").displayName('光辉板').rarity(RARITY_UNCOMMON)
event.create('radiant_wire').glow(true).texture("kubejs:item/radiant_wire").displayName('光辉线').rarity(RARITY_UNCOMMON)
event.create('radiant_rod').glow(true).texture("kubejs:item/radiant_rod").displayName('光辉杆').rarity(RARITY_UNCOMMON)
event.create('shadow_steel_rod').texture("kubejs:item/shadow_steel_rod").displayName('暗影杆').rarity(RARITY_UNCOMMON)
event.create('radiance_control_circuit').glow(true).texture("kubejs:item/radiance_control_circuit").displayName('光辉控制电路').rarity(RARITY_UNCOMMON)

event.create('incomplete_pcb', 'create:sequenced_assembly').texture("kubejs:item/pcb/incomplete_pcb").displayName('电路板（未完成）')
event.create('incomplete_unassembled_pcb', 'create:sequenced_assembly').texture("kubejs:item/pcb/incomplete_unassembled_pcb").displayName('印刷电路板（刻蚀中）')
event.create('incomplete_radiance_control_circuit', 'create:sequenced_assembly').glow(true).texture("kubejs:item/pcb/incomplete_radiance_control_circuit").displayName('光辉控制电路（未完成）')
event.create('incomplete_advanced_control_circuit', 'create:sequenced_assembly').texture("kubejs:item/pcb/incomplete_advanced_control_circuit").displayName('高级电路板（未完成）')
event.create('incomplete_elite_control_circuit', 'create:sequenced_assembly').texture("kubejs:item/pcb/incomplete_elite_control_circuit").displayName('精英电路板（未完成）')
event.create('incomplete_ultimate_control_circuit', 'create:sequenced_assembly').texture("kubejs:item/pcb/incomplete_ultimate_control_circuit").displayName('终极电路板（未完成）')

event.create('incomplete_calculation_processor', 'create:sequenced_assembly').texture("kubejs:item/processor/incomplete_calculation_processor").displayName('运算处理器（半成品）')
event.create('incomplete_logic_processor', 'create:sequenced_assembly').texture("kubejs:item/processor/incomplete_logic_processor").displayName('逻辑处理器（半成品）')
event.create('incomplete_engineering_processor', 'create:sequenced_assembly').texture("kubejs:item/processor/incomplete_engineering_processor").displayName('工程处理器（半成品）')


////弹药
event.create('complex_bullet').texture("kubejs:item/arms/complex_bullet").displayName('复合弹药')
event.create('advanced_bullet_casing').texture("kubejs:item/arms/advanced_bullet_casing").displayName('高级空弹壳')
event.create('complex_bullet_casing').texture("kubejs:item/arms/complex_bullet_casing").displayName('复合空弹壳')
event.create('compressed_air_canister').texture("kubejs:item/arms/compressed_air_canister").displayName('压缩气瓶')
event.create('incomplete_advanced_bullet', 'create:sequenced_assembly').texture("kubejs:item/arms/incomplete_advanced_bullet").displayName('高级弹药（未完成）')
event.create('incomplete_basic_bullet', 'create:sequenced_assembly').texture("kubejs:item/arms/incomplete_basic_bullet").displayName('初级弹药（未完成）')
event.create('incomplete_complex_bullet', 'create:sequenced_assembly').texture("kubejs:item/arms/incomplete_complex_bullet").displayName('复合弹药（未完成）')
event.create('incomplete_shell', 'create:sequenced_assembly').texture("kubejs:item/arms/incomplete_shell").displayName('霰弹（未完成）')
event.create('unarmed_missile', 'create:sequenced_assembly').texture("kubejs:item/arms/unarmed_missile").displayName('导弹（待组装）')

////数字
event.create('zero').texture("kubejs:item/math/zero").displayName('0').glow(true).rarity(RARITY_UNCOMMON)
event.create('one').texture("kubejs:item/math/one").displayName('1').glow(true).rarity(RARITY_UNCOMMON)
event.create('two').texture("kubejs:item/math/two").displayName('2').glow(true).rarity(RARITY_UNCOMMON)
event.create('three').texture("kubejs:item/math/three").displayName('3').glow(true).rarity(RARITY_UNCOMMON)
event.create('four').texture("kubejs:item/math/four").displayName('4').glow(true).rarity(RARITY_UNCOMMON)
event.create('five').texture("kubejs:item/math/five").displayName('5').glow(true).rarity(RARITY_UNCOMMON)
event.create('six').texture("kubejs:item/math/six").displayName('6').glow(true).rarity(RARITY_UNCOMMON)
event.create('seven').texture("kubejs:item/math/seven").displayName('7').glow(true).rarity(RARITY_UNCOMMON)
event.create('eight').texture("kubejs:item/math/eight").displayName('8').glow(true).rarity(RARITY_UNCOMMON)
event.create('nine').texture("kubejs:item/math/nine").displayName('9').glow(true).rarity(RARITY_UNCOMMON)
event.create('plus').texture("kubejs:item/math/plus").displayName('+').glow(true).rarity(RARITY_UNCOMMON)
event.create('minus').texture("kubejs:item/math/minus").displayName('-').glow(true).rarity(RARITY_UNCOMMON)
event.create('multiply').texture("kubejs:item/math/multiply").displayName('×').glow(true).rarity(RARITY_UNCOMMON)
event.create('divide').texture("kubejs:item/math/divide").displayName('÷').glow(true).rarity(RARITY_UNCOMMON)
event.create('missingno').texture("kubejs:item/math/missingno").displayName('#DIV/0').glow(true).rarity(RARITY_UNCOMMON)

event.create('kubejs:incomplete_steel_facing', 'create:sequenced_assembly').texture("kubejs:item/cans/steel_facing").displayName('钢牙套（未完成）')
event.create('steel_facing').texture("kubejs:item/cans/steel_facing").displayName('钢牙套')

////罐装食品
event.create('iron_thin_plate').texture("kubejs:item/cans/iron_thin_plate").displayName('薄铁板')
event.create('iron_thin_plate_with_tin').texture("kubejs:item/cans/iron_thin_plate_with_tin").displayName('镀锡薄铁板')
event.create('can_empty').texture("kubejs:item/cans/can_empty").displayName('空罐头').maxStackSize(32)
event.create('can_sealed').texture("kubejs:item/cans/can_sealed").displayName('封装罐头')
	.food((food) => {
		food.hunger(2)
		.meat(true)
		.alwaysEdible(true)
	})

event.create('can_sealed_vegetable_soup').texture("kubejs:item/cans/can_sealed").displayName('封装蔬菜汤罐头')
	.food((food) => {
		food.hunger(2)
		.meat(true)
		.alwaysEdible(true)
	})

event.create('can_opened_vegetable_soup').texture("kubejs:item/cans/can_opened").displayName('蔬菜汤罐头')
	.food((food) => {
		food.hunger(14)
		food.saturation(15)
		.meat(false)
		.alwaysEdible(true)
		.fastToEat(true)
		.effect('farmersdelight:comfort', 240, 1, 1)
	})

})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	event.create('treated_kelp_block')
	   .model('kubejs:block/treated_kelp_block')
       .material('leaves')
       .hardness(0.5)
       .displayName('防腐海带块')
	   .tagBlock("create:wrench_pickup")

	event.create('enderium_casing').model('kubejs:block/enderium_casing').material('metal').hardness(4.0).displayName('末影机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('zinc_casing').material('metal').hardness(3.0).displayName('锌机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('invar_casing').material('metal').hardness(3.0).displayName('殷钢机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('fluix_casing').material('metal').hardness(3.0).displayName('福鲁伊克斯机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('matter_casing').material('stone').hardness(8.0).displayName('物质机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('redstone_casing').material('stone').hardness(3.0).displayName('红石机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('creative_casing').material('stone').hardness(-1.0).displayName('§d创造机壳§r').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")

	event.create('gold_source_casing').material('wood').hardness(2.0).displayName('金源机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('mana_casing').material('stone').hardness(2.0).displayName('魔力机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")
	event.create('mysterious_casing').material('stone').hardness(2.0).displayName('神秘机壳').tagBlock("create:wrench_pickup").tagBlock("minecraft:mineable/pickaxe")


	let machine = (name, layer, material , display) => {
	let id = name.toLowerCase()
		event.create(id + '_machine')
			.model('kubejs:block/' + id + '_machine')
			.material(material)
			.hardness(3.0)
			.displayName(display)
			.notSolid()
			.renderType(layer)
			.tagBlock("create:wrench_pickup")
			.tagBlock("minecraft:mineable/pickaxe")
	}

	machine('Andesite', "translucent", "lantern", "安山机器")
	machine('Inductive', "translucent", "lantern", "物流机器")
	
	machine('Brass', "translucent", "lantern", "黄铜机器")
	machine('Copper', "cutout", "lantern", "铜机器")
	machine('Zinc', "cutout", "lantern", "锌机器")
	machine('Enderium', "cutout", "lantern", "谐振机器")
	machine('Obsidian', "translucent", "lantern", "坚实机器")
	machine('Pneumatic', "translucent", "lantern", "气动机器")
	machine('Redstone', "solid", "stone", "红石机器")
	machine('Steel', "translucent", "lantern", "钢机器")

	machine('Gold_Source', "solid", "lantern", "金源机器")
	machine('Metamorphic', "translucent", "lantern", "异构机器")

	/*let mechanism_block = (name, material, display) => {
		let id = name.toLowerCase()
			event.create(id)
				.material(material)
				.hardness(3.0)
				.displayName(display)
				.tagBlock("create:wrench_pickup")
				.tagBlock("minecraft:mineable/pickaxe")
		}
	
		mechanism_block('Andesite', "lantern", "安山机器")
*/
})

onEvent('fluid.registry', event => {

	event.create("fine_sand").displayName("细砂").bucketColor(0xE3DBB0).stillTexture('kubejs:fluid/fine_sand_still').flowingTexture('kubejs:fluid/fine_sand_flow')

	event.create("egg_liquid").displayName("蛋液").bucketColor(0xFFB90F).stillTexture('kubejs:fluid/egg_liquid_still').flowingTexture('kubejs:fluid/egg_liquid_flow')
	event.create("flour_paste").displayName("面糊").bucketColor(0xFFFAF0).stillTexture('kubejs:fluid/flour_paste_still').flowingTexture('kubejs:fluid/flour_paste_flow')

	event.create("waste").displayName("异彩废液").bucketColor(0x123d36).stillTexture('kubejs:fluid/waste_still').flowingTexture('kubejs:fluid/waste_flow')

	event.create("sky_stone").displayName("不稳陨石").bucketColor(0x595959).stillTexture('kubejs:fluid/sky_stone_still').flowingTexture('kubejs:fluid/sky_stone_flowing')

	event.create("zure_berry_ice_cream").displayName("天蓝冰淇淋").bucketColor(0x97FFFF).stillTexture('kubejs:fluid/zure_berry_ice_cream_still').flowingTexture('kubejs:fluid/zure_berry_ice_cream_flow')

	event.create("matter").displayName("熔融物质").bucketColor(0xF7F7F7).stillTexture('kubejs:fluid/matter_still').flowingTexture('kubejs:fluid/matter_flow')
	event.create("matter_plastics").displayName("熔融物质塑料").bucketColor(0xD4D4D4).stillTexture('kubejs:fluid/matter_plastics_still').flowingTexture('kubejs:fluid/matter_plastics_flow')

	event.create("programming")
	    .displayName("玻色-爱因斯坦凝聚态逻辑（编程）")
	    .thinTexture(0xFF3030)
	    .bucketColor(0xFF3030)
	    .stillTexture('kubejs:fluid/number_still')
	    .flowingTexture('kubejs:fluid/number_flow')
	    .color(0xFF3030)

	event.create("raw_logic")
		.displayName("玻色-爱因斯坦凝聚态逻辑（未处理）")
		.thinTexture(0xE7FFCB)
		.bucketColor(0xE7FFCB)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0xE7FFCB)

	event.create("number_0")
		.displayName("玻色-爱因斯坦凝聚态逻辑（0）")
		.thinTexture(0xCBE827)
		.bucketColor(0xCBE827)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0xAEE827)
		
	event.create("number_1")
		.displayName("玻色-爱因斯坦凝聚态逻辑（1）")
		.thinTexture(0xAEE827)
		.bucketColor(0xAEE827)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0xAEE827)
		
	event.create("number_2")
		.displayName("玻色-爱因斯坦凝聚态逻辑（2）")
		.thinTexture(0x68E827)
		.bucketColor(0x68E827)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0x68E827)
		
	event.create("number_3")
		.displayName("玻色-爱因斯坦凝聚态逻辑（3）")
		.thinTexture(0x27E86E)
		.bucketColor(0x27E86E)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0x27E86E)
		
	event.create("number_4")
		.displayName("玻色-爱因斯坦凝聚态逻辑（4）")
		.thinTexture(0x27E8B1)
		.bucketColor(0x27E8B1)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0x27E8B1)
		
	event.create("number_5")
		.displayName("玻色-爱因斯坦凝聚态逻辑（5）")
		.thinTexture(0x27DEE8)
		.bucketColor(0x27DEE8)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0x27DEE8)
		
	event.create("number_6")
		.displayName("玻色-爱因斯坦凝聚态逻辑（6）")
		.thinTexture(0x27B5E8)
		.bucketColor(0x27B5E8)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0x27B5E8)
		
	event.create("number_7")
		.displayName("玻色-爱因斯坦凝聚态逻辑（7）")
		.thinTexture(0x2798E8)
		.bucketColor(0x2798E8)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0x2798E8)
		
	event.create("number_8")
		.displayName("玻色-爱因斯坦凝聚态逻辑（8）")
		.thinTexture(0x2778E8)
		.bucketColor(0x2778E8)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0x2778E8)
		
	event.create("number_9")
		.displayName("玻色-爱因斯坦凝聚态逻辑（9）")
		.thinTexture(0x2748E8)
		.bucketColor(0x2748E8)
		.stillTexture('kubejs:fluid/number_still')
		.flowingTexture('kubejs:fluid/number_flow')
		.color(0x2748E8)
		

	event.create("matrix")
		.displayName("§d液态智能§r")
		.thinTexture(0xCBE827)
		.bucketColor(0xCBE827)
		.stillTexture('kubejs:fluid/matrix_still')
		.flowingTexture('kubejs:fluid/matrix_flow')
		
})

onEvent('item.modification', event => {
	let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
	colors.forEach(element => {
		event.modify('ae2:' + element + '_paint_ball', item => {
			item.maxStackSize = 1
		})
	});
	event.modify('cgm:basic_bullet', item => {
		item.maxStackSize = 48
	});
	event.modify('kubejs:complex_bullet', item => {
		item.maxStackSize = 32
	});
	event.modify('cgm:advanced_bullet', item => {
		item.maxStackSize = 32
	});
	event.modify('cgm:shell', item => {
		item.maxStackSize = 16
	});
	event.modify('cgm:grenade', item => {
		item.maxStackSize = 8
	});
	event.modify('cgm:stun_grenade', item => {
		item.maxStackSize = 8
	});
	event.modify('cgm:missile', item => {
		item.maxStackSize = 8
	});
	event.modify('avaritia:infinity_ingot', item => {
		item.maxStackSize = 1
	});
	event.modify('avaritia:neutronium_ingot', item => {
		item.maxStackSize = 4
	});
	event.modify('avaritia:infinity_catalyst', item => {
		item.maxStackSize = 11
	});
	
})