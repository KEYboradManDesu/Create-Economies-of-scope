onEvent('recipes', event => {
	leather(event)//皮革
	backpack(event)//背包
})

function leather(event) {
//鞣制皮革
donutCraft(event, '8x minecraft:leather', 'thermal:niter_dust', MC("rotten_flesh"))
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"item": "minecraft:rotten_flesh",
		},
		{
			"amount": 15,
			"fluid": "mekanism:brine"
		}
	],
	"results": [
		{
			"item": "forbidden_arcanus:rotten_leather",
		}
	],
	"processingTime": 200,
	"heatRequirement": "lowheated"
})
event.custom({
	"type": "create:mixing",
	"ingredients": [
		{
			"item": "forbidden_arcanus:rotten_leather",
		},
		{
			"amount": 15,
			"fluid": "mekanism:brine"
		}
	],
	"results": [
		{
			"item": "minecraft:leather",
			"count": 2
		}
	],
	"processingTime": 200,
	"heatRequirement": "lowheated"
})

//腐肉制取
event.recipes.createHaunting([Item.of("minecraft:rotten_flesh")], '#brewinandchewin:raw_meats')

//缝纫线轴
donutCraft(event, KJ('sewing_spool'), 'createaddition:spool', MC("string"))

//空白背包升级
event.remove({ id: 'sophisticatedbackpacks:upgrade_base' })
let transitional = 'kubejs:incomplete_upgrade_base'
	event.recipes.createSequencedAssembly([
		Item.of('sophisticatedbackpacks:upgrade_base'),
	], '#forge:leather', [
		event.recipes.createDeploying(transitional, [transitional, F('#leather')]),
		event.recipes.createDeploying(transitional, [transitional, F('#sewing_spool')])
	]).transitionalItem(transitional)
		.loops(3)
		.id('kubejs:backpack_upgrade_base')
}

function backpack(event) {
//初级背包
event.remove({ output: 'sophisticatedbackpacks:backpack' })
event.shaped('sophisticatedbackpacks:backpack', [
	'SSS',
	'BCB',
	'SSS'

], {
	C: F('#chests/wooden'),
	B: CR('golden_sheet'),
	S: 'sophisticatedbackpacks:upgrade_base'
})
//铁背包
event.remove({ output: 'sophisticatedbackpacks:iron_backpack' })
event.custom({
	"type": "sophisticatedbackpacks:backpack_upgrade",
	"conditions": [
	  {
		"itemRegistryName": "sophisticatedbackpacks:iron_backpack",
		"type": "sophisticatedcore:item_enabled"
	  }
	],
	"pattern": [
	  "SSS",
	  "IBI",
	  "SSS"
	],
	"key": {
	  "I": {
		"tag": "forge:ingots/iron"
	  },
	  "B": {
		"item": "sophisticatedbackpacks:backpack"
	  },
	  "S": {
		"item": "sophisticatedbackpacks:upgrade_base"
	  }
	},
	"result": {
	  "item": "sophisticatedbackpacks:iron_backpack"
	}
})
//金背包
event.remove({ output: 'sophisticatedbackpacks:gold_backpack' })
event.custom({
	"type": "sophisticatedbackpacks:backpack_upgrade",
	"conditions": [
	  {
		"itemRegistryName": "sophisticatedbackpacks:gold_backpack",
		"type": "sophisticatedcore:item_enabled"
	  }
	],
	"pattern": [
	  "SSS",
	  "IBI",
	  "SSS"
	],
	"key": {
	  "I": {
		"item": "create:golden_sheet"
	  },
	  "B": {
		"item": "sophisticatedbackpacks:iron_backpack"
	  },
	  "S": {
		"item": "sophisticatedbackpacks:upgrade_base"
	  }
	},
	"result": {
	  "item": "sophisticatedbackpacks:gold_backpack"
	}
})
//钻石背包
event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })
event.custom({
	"type": "sophisticatedbackpacks:backpack_upgrade",
	"conditions": [
	  {
		"itemRegistryName": "sophisticatedbackpacks:diamond_backpack",
		"type": "sophisticatedcore:item_enabled"
	  }
	],
	"pattern": [
	  "SSS",
	  "IBI",
	  "SSS"
	],
	"key": {
	  "I": {
		"item": "thermal:diamond_gear"
	  },
	  "B": {
		"item": "sophisticatedbackpacks:gold_backpack"
	  },
	  "S": {
		"item": "sophisticatedbackpacks:upgrade_base"
	  }
	},
	"result": {
	  "item": "sophisticatedbackpacks:diamond_backpack"
	}
})
}