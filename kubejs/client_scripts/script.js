onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

onEvent('jei.remove.categories', event => {
	event.remove("twilightforest:uncrafting")
})

onEvent('rei.add.items', event => {
    event.add(Item.of('create:refined_radiance'));
    event.add(Item.of('create:shadow_steel'));
    event.add(Item.of('create:chromatic_compound'));
  })