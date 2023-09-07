onEvent("ponder.tag", (event) => {
    /**
     * "kubejs:getting_started" -> the tag name
     * "minecraft:paper"        -> the icon
     * "Getting Started"        -> the title
     * "This is a description"  -> the description
     * [...items]               -> default items
     */
    event.createTag("kubejs:bloodmagic", "bloodmagic:altar", "血魔法", "以血液获取的生命本质为基础的魔法", [
        // some default items
        "bloodmagic:altar",
        "bloodmagic:blankrune",
    ]);
});
onEvent("ponder.registry", (event) => {
    /**
     * Create a new ponder entry with one scene for "minecraft:paper".
     */
    event.create("bloodmagic:altar")
    .scene(
        "altar",
        "Altar Setup",
        "kubejs:altar",
        (scene, util) => {
           scene.showBasePlate();
           scene.addKeyframe();
           scene.idle(15);
           scene
           .text(40, "一级血之祭坛只需要血之祭坛方块本身就行了", [5, 2, 5])
           scene.idle(45);
           scene.world.replaceBlocks([4, 1, 4,], "bloodmagic:altar", false);
           scene.world.showSection([4, 1, 4,], Facing.DOWN);
           scene.idle(15);
           scene.addKeyframe();
           scene
           .text(40, "一级血之祭坛完成！", [5, 1, 5])
           scene.idle(45);
           scene.world.hideSection([4, 1, 4,], Facing.DOWN);
           scene.idle(15);
           scene.world.replaceBlocks([3, 1, 3, 5, 1, 5], "bloodmagic:blankrune", false);
           scene.addKeyframe();
           scene
           .text(40, "二级的血之祭坛有着类似于信标的结构", [5, 2, 5])
           scene.idle(45);
           scene.world.showSection([3, 1, 3,], Facing.DOWN);
           scene.idle(5);
           scene.world.showSection([3, 1, 4,], Facing.DOWN);
           scene.idle(5);
           scene.world.showSection([3, 1, 5,], Facing.DOWN);
           scene.idle(5);
           scene.world.showSection([4, 1, 3,], Facing.DOWN);
           scene.idle(5);
           scene
           .text(40, "这里的符文方块无法生效，仅有装饰作用，可用任何方块代替", [4, 2.5, 4])
           scene.world.replaceBlocks([4, 2, 4,], "bloodmagic:altar", false);
           scene.world.showSection([4, 1, 4,], Facing.DOWN);
           scene.idle(35);
           scene.world.showSection([4, 1, 5,], Facing.DOWN);
           scene.idle(5);
           scene.world.showSection([5, 1, 3,], Facing.DOWN);
           scene.idle(5);
           scene.world.showSection([5, 1, 4,], Facing.DOWN);
           scene.idle(5);
           scene.world.showSection([5, 1, 5,], Facing.DOWN);
           scene.idle(5);
           scene.world.showSection([4, 2, 4,], Facing.DOWN);
           scene.idle(15);
           scene.addKeyframe();
           scene
           .text(40, "二级血之祭坛完成！", [5, 1, 5])
           scene.idle(60);
           scene.world.hideSection([3, 1, 3, 5, 1, 5], Facing.DOWN);
           scene.world.hideSection([4, 2, 4], Facing.DOWN);
           scene.idle(35);
           scene.world.replaceBlocks([3, 1, 3, 5, 1, 5], "bloodmagic:stonetilepath", false);
           scene.world.replaceBlocks([4, 1, 4], "bloodmagic:obsidiantilepath", false);
           scene.world.replaceBlocks([4, 2, 4,], "bloodmagic:blankrune", false);
           scene.addKeyframe();
           scene.world.showSection([3, 1, 3, 5, 1, 5], Facing.UP);
           scene.idle(3);
           scene
           .text(40, "三级血之祭坛需要很多的符文方块", [5, 2, 5])
           scene.idle(45);
            for (let z1 = 2; z1 < 7; z1++) {
                scene.world.showSection([7, 1, z1], Facing.DOWN); }
            scene.idle(5);
            for (let x1 = 2; x1 < 7; x1++) {
                scene.world.showSection([x1, 1, 7], Facing.DOWN); }
            scene.idle(5);
            for (let z2 = 2; z2 < 7; z2++) {
                scene.world.showSection([1, 1, z2], Facing.DOWN); }
            scene.idle(5);
            for (let x2 = 2; x2 < 7; x2++) {
                scene.world.showSection([x2, 1, 1], Facing.DOWN); }
            scene.idle(20);
            scene.addKeyframe();
            scene.world.showSection([3, 2, 3, 5, 2, 5], Facing.DOWN);
            scene.idle(5);
            scene.world.showSection([4, 3, 4], Facing.DOWN);
            scene.idle(20);
           for (let y1 = 1; y1 < 5; y1++) {
            scene.world.showSection([1, y1, 7], Facing.DOWN); }
            scene.idle(5);
           for (let y1 = 1; y1 < 5; y1++) {
            scene.world.showSection([7, y1, 7], Facing.DOWN); }
            scene.idle(5);
           for (let y1 = 1; y1 < 5; y1++) {
            scene.world.showSection([7, y1, 1], Facing.DOWN); }
            scene.idle(5);
           for (let y1 = 1; y1 < 5; y1++) {
            scene.world.showSection([1, y1, 1], Facing.DOWN); }
            scene.idle(15);
            scene
           .text(40, "其中荧石可以全部替换为海晶灯，石砖也全部可以换成任意实心方块", [1, 4, 1])
           scene.idle(5);
           scene
            .showControls(40, [1.5, 4, 1.5], "down")
            .withItem("minecraft:sea_lantern")
           scene.idle(5);
           scene.world.replaceBlocks([1, 4, 1], "minecraft:sea_lantern", true);
           scene.idle(40);
           scene.world.replaceBlocks([1, 4, 1], "minecraft:glowstone", true);
           scene.idle(15);
           scene
            .showControls(40, [1.5, 3, 1.5], "down")
            .withItem("minecraft:polished_deepslate")
           scene.idle(5);
           scene.world.replaceBlocks([1, 3, 1, 1, 1, 1], "minecraft:polished_deepslate", true);
           scene.idle(40);
           scene.world.replaceBlocks([1, 3, 1, 1, 1, 1], "minecraft:stone_bricks", true);
           scene.idle(40);
           scene.addKeyframe();
           scene
           .text(40, "三级血之祭坛完成！", [5, 1, 5])
           scene.idle(60);
         })

         event.create("bloodmagic:altar")
         .scene(
             "altar2",
             "Altar Setup",
             "kubejs:altar_2",
             (scene, util) => {
                scene.showBasePlate();
                scene.world.showSection([6, 1, 8, 8, 2, 6], Facing.UP);
                scene.world.showSection([3, 1, 3, 11, 1, 11], Facing.UP);
                scene.addKeyframe();
                scene.idle(15);
                scene
                .text(40, "请清理好场地，即将搭建四级血之祭坛！", [7, 3, 7])
                scene.idle(45);
                scene.world.showSection([6, 3, 6, 8, 3, 8], Facing.DOWN);
                scene.idle(5);
                scene.world.showSection([7, 4, 7], Facing.DOWN);
                scene.idle(5);
                scene.world.showSection([5, 2, 10, 9, 2, 10], Facing.DOWN);
                scene.idle(5);
                scene.world.showSection([10, 2, 9, 10, 2, 5], Facing.DOWN);
                scene.idle(5);
                scene.world.showSection([4, 2, 9, 4, 2, 5], Facing.DOWN);
                scene.idle(5);
                scene.world.showSection([5, 2, 4, 9, 2, 4], Facing.DOWN);
                scene.addKeyframe();
                scene.idle(15);
                scene.world.showSection([10, 5, 10, 10, 2, 10], Facing.DOWN);
                scene.idle(5);
                scene.world.showSection([4, 5, 10, 4, 2, 10], Facing.DOWN);
                scene.idle(5);
                scene.world.showSection([10, 5, 4, 10, 2, 4], Facing.DOWN);
                scene.idle(5);
                scene.world.showSection([4, 5, 4, 4, 2, 4], Facing.DOWN);
                scene.addKeyframe();
                scene.idle(15);
                scene.world.showSection([11, 1, 12, 3, 1, 12], Facing.UP);
                scene.idle(5);
                scene.world.showSection([12, 1, 11, 12, 1, 3], Facing.UP);
                scene.idle(5);
                scene.world.showSection([11, 1, 2, 3, 1, 2], Facing.UP);
                scene.idle(5);
                scene.world.showSection([2, 1, 3, 2, 1, 11], Facing.UP);
                scene.addKeyframe();
                scene.idle(15);
                scene.world.showSection([12, 5, 12, 12, 1, 12], Facing.UP);
                scene.idle(5);
                scene.world.showSection([2, 5, 12, 2, 1, 12], Facing.UP);
                scene.idle(5);
                scene.world.showSection([12, 5, 2, 12, 1, 2], Facing.UP);
                scene.idle(5);
                scene.world.showSection([2, 5, 2, 2, 1, 2], Facing.UP);
                scene.addKeyframe();
                scene.idle(15);
                scene
               .text(40, "其中大血石砖可以全部替换为血石砖", [2, 5, 2])
               scene.idle(5);
               scene
                .showControls(40, [2.5, 5, 2.5], "down")
                .withItem("bloodmagic:bloodstonebrick")
               scene.idle(5);
               scene.world.replaceBlocks([2, 5, 2], "bloodmagic:bloodstonebrick", true);
               scene.idle(40);
               scene.world.replaceBlocks([2, 5, 2], "bloodmagic:largebloodstonebrick", true);
               scene.idle(40);
               scene.addKeyframe();
               scene
               .text(40, "四级血之祭坛完成！", [7, 4, 7])
               scene.idle(60);
              })
  });
