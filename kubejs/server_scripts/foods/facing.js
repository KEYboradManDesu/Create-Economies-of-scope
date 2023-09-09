onEvent('item.right_click', event => {
    if(event.item.id == "kubejs:steel_facing" && !event.player.stages.has('steel_facing')){
        event.player.stages.add('steel_facing')
        event.player.tell("你戴上了钢牙套")
        event.item.count--
        return
    }
})

onEvent('player.tick', event => {
    if(!event.player.alive && event.player.stages.has('steel_facing')){
        let loc_facing = event.player
        var mySteel_facing = event.level.createEntity("item")
        mySteel_facing.item = Item.of("kubejs:steel_facing")
        mySteel_facing.setPosition(loc_facing.x, loc_facing.y, loc_facing.z)
        mySteel_facing.spawn()
        event.player.stages.remove('steel_facing')
    }
})