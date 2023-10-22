
onEvent('recipes', event => {
	casing(event) //机壳配方
})

function casing(event) {
let tweak_casing = (output, input1, input2) => {
    event.remove({ output: output })
    event.recipes.create.itemApplication(output, [input2, input1])
}
//安山机壳
tweak_casing(CR('andesite_casing'), 'create:andesite_alloy', '#forge:stripped_wood')
tweak_casing(CR('andesite_casing'), 'create:andesite_alloy', '#forge:stripped_logs')
//强化镀层
tweak_casing('create_dd:reinforcement_plating', 'create_dd:industrial_iron_sheet', 'create_dd:bronze_casing')
//防腐系列
tweak_casing('kubejs:treated_kelp_block', '#immersive_weathering:wax', 'minecraft:dried_kelp_block')
tweak_casing('kubejs:treated_kelp_block', '#forge:water_insulation', 'minecraft:dried_kelp_block')
tweak_casing('createindustry:waterproof_planks', '#immersive_weathering:wax', '#minecraft:planks')
tweak_casing('createindustry:waterproof_planks', '#forge:water_insulation', '#minecraft:planks')
//铜机壳
tweak_casing(CR('copper_casing'), 'minecraft:copper_ingot', '#forge:treated_wood')
tweak_casing(CR('copper_casing'), 'minecraft:copper_ingot', 'createindustry:waterproof_planks')
tweak_casing(CR('copper_casing'), 'minecraft:copper_ingot', 'kubejs:treated_kelp_block')
//黄铜机壳
tweak_casing(CR('brass_casing'), 'create:brass_ingot', '#forge:treated_wood')
//压缩机壳
tweak_casing('compressedcreativity:compressed_iron_casing', 'pneumaticcraft:ingot_iron_compressed', 'createindustry:chipwood')
tweak_casing('compressedcreativity:compressed_iron_casing', 'pneumaticcraft:ingot_iron_compressed', 'create:copper_casing')
//钢机壳
tweak_casing('createindustry:steel_casing', 'create_dd:steel_ingot', 'createindustry:hardened_planks')

tweak_casing('kubejs:redstone_casing', 'minecraft:iron_ingot', '#forge:stone')
tweak_casing('kubejs:zinc_casing', 'create:zinc_ingot', '#forge:stone')
tweak_casing('kubejs:invar_casing', 'thermal:invar_ingot', 'minecraft:basalt')
tweak_casing('immersiveengineering:concrete_leaded', 'thermal:lead_ingot', 'immersiveengineering:concrete')
tweak_casing('kubejs:enderium_casing', 'minecraft:ender_pearl', '#forge:obsidian')
tweak_casing('kubejs:fluix_casing', 'thermal:lead_ingot', 'minecraft:blackstone')

tweak_casing('kubejs:gold_source_casing', 'forbidden_arcanus:arcane_gold_ingot', 'botania:livingwood_planks')
tweak_casing('kubejs:mana_casing', 'botania:mana_pearl', 'botania:livingrock')
tweak_casing('kubejs:mysterious_casing', 'kubejs:arcane_golden_sheet', 'ars_nouveau:arcane_stone')

tweak_casing('create_dd:refined_radiance_casing', 'create:refined_radiance', '#create_dd:glow_base')
tweak_casing('create_dd:shadow_steel_casing', 'create:shadow_steel', '#forge:obsidian')
}