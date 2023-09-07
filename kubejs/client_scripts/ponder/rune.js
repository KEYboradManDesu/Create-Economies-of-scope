onEvent("ponder.registry", (event) => {
    /**
     * Create a new ponder entry with one scene for "minecraft:paper".
     */
    event.create("#bloodmagic:rune")
    .scene(
        "runes",
        "upgraded rune",
        "kubejs:rune",
        (scene, util) => {
        scene.showBasePlate();
        scene.world.replaceBlocks([3, 1, 3, 5, 1, 5], "bloodmagic:blankrune", false);
        scene.world.replaceBlocks([4, 2, 4], "bloodmagic:altar", false);
        scene.idle(15);
        scene.world.showSection([3, 1, 3, 5, 1, 5], Facing.DOWN);
        scene.world.showSection([4, 2, 4,], Facing.DOWN);
        scene.addKeyframe();
        scene.idle(15);
        scene
        .text(40, "二级血之祭坛下方的符文方块可替换为任意升级符文", [5, 2, 5])
        scene.idle(35);
        scene.addKeyframe();
        scene.idle(10);
        scene
        .showControls(40, [4.5, 2, 3.5], "down")
        .withItem("bloodmagic:speedrune")
        scene.idle(15);
        scene.world.replaceBlocks([4, 1, 3,], "bloodmagic:speedrune", true);
        scene.idle(15);
        scene
        .showControls(40, [3.5, 2, 4.5], "down")
        .withItem("bloodmagic:sacrificerune")
        scene.idle(15);
        scene.world.replaceBlocks([3, 1, 4,], "bloodmagic:sacrificerune", true);
        scene.idle(15);
        scene
        .showControls(40, [4.5, 2, 5.5], "down")
        .withItem("bloodmagic:selfsacrificerune")
        scene.idle(15);
        scene.world.replaceBlocks([4, 1, 5,], "bloodmagic:selfsacrificerune", true);
        scene.idle(15);
        scene
        .showControls(40, [5.5, 2, 4.5], "down")
        .withItem("bloodmagic:dislocationrune")
        scene.idle(15);
        scene.world.replaceBlocks([5, 1, 4,], "bloodmagic:dislocationrune", true);
        scene.idle(35);
        scene.addKeyframe();
        scene
        .text(40, "注意，只有二级血之祭坛底座四角的升级符文无法生效！", [3, 2, 3])
        scene.idle(4);
        scene.world.replaceBlocks([3, 1, 3,], "minecraft:red_concrete", false);
        scene.world.replaceBlocks([3, 1, 5,], "minecraft:red_concrete", false);
        scene.world.replaceBlocks([5, 1, 5,], "minecraft:red_concrete", false);
        scene.world.replaceBlocks([5, 1, 3,], "minecraft:red_concrete", false);
        scene.idle(4);
        scene.world.replaceBlocks([3, 1, 3,], "bloodmagic:blankrune", false);
        scene.world.replaceBlocks([3, 1, 5,], "bloodmagic:blankrune", false);
        scene.world.replaceBlocks([5, 1, 5,], "bloodmagic:blankrune", false);
        scene.world.replaceBlocks([5, 1, 3,], "bloodmagic:blankrune", false);
        scene.idle(4);
        scene.world.replaceBlocks([3, 1, 3,], "minecraft:red_concrete", false);
        scene.world.replaceBlocks([3, 1, 5,], "minecraft:red_concrete", false);
        scene.world.replaceBlocks([5, 1, 5,], "minecraft:red_concrete", false);
        scene.world.replaceBlocks([5, 1, 3,], "minecraft:red_concrete", false);
        scene.idle(4);
        scene.world.replaceBlocks([3, 1, 3,], "bloodmagic:blankrune", false);
        scene.world.replaceBlocks([3, 1, 5,], "bloodmagic:blankrune", false);
        scene.world.replaceBlocks([5, 1, 5,], "bloodmagic:blankrune", false);
        scene.world.replaceBlocks([5, 1, 3,], "bloodmagic:blankrune", false);
        scene.idle(60);
         })
  });
