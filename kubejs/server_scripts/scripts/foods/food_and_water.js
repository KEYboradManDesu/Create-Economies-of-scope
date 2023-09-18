onEvent('recipes', event => {
	cake(event)
	water(event)
})

function cake(event) {

event.recipes.createMixing([Fluid.of(KJ("egg_liquid"), 50), 'exoticbirds:eggshell'], F('#eggs'))//蛋液
event.recipes.createMixing(Fluid.of(KJ("flour_paste"), 45), [Fluid.of(KJ("egg_liquid"), 50), CR('wheat_flour', 2), MC('sugar')])//面糊
event.recipes.createMixing(Fluid.of(KJ("flour_paste"), 75), [Fluid.of(KJ("egg_liquid"), 50),Fluid.of(PC("yeast_culture"), 25), CR('wheat_flour', 2), MC('sugar')])//面糊倍产
event.recipes.createCompacting(CR("dough"), [Fluid.of(KJ("flour_paste"), 15)])//面团
event.recipes.createCompacting("createaddition:cake_base", [Fluid.of(KJ("flour_paste"), 20)])//蛋糕底座
}

function water(event) {
////烧开水
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:-1}"
		}
	],
	"results": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:3}"
		},
		{
		  "item": "mekanism:salt",
		  "chance": 0.02
		}
	],
	"processingTime": 0,
	"heatRequirement": "lowheated"
})
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:0}"
		}
	],
	"results": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:3}"
		},
		{
		  "item": "mekanism:salt",
		  "chance": 0.015
		}
	],
	"processingTime": 0,
	"heatRequirement": "lowheated"
})
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:1}"
		}
	],
	"results": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:3}"
		}
	],
	"processingTime": 0,
	"heatRequirement": "lowheated"
})
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:2}"
		}
	],
	"results": [
		{
			"amount": 1,
			"fluid": "minecraft:water",
			"nbt": "{Purity:3}"
		}
	],
	"processingTime": 0,
	"heatRequirement": "lowheated"
})

//盐水
event.recipes.createMixing(Fluid.of(MEK("brine"), 15), ['mekanism:salt', Fluid.of('minecraft:water', 15)])
event.custom({
	"type": "createdieselgenerators:basin_fermenting",
	"ingredients": [
		{
			"amount": 15,
			"fluid": "mekanism:brine"
		}
	],
	"results": [
		{
		  "item": "mekanism:salt",
		}
	],
	"processingTime": 5,
	"heatRequirement": "lowheated"
})
}