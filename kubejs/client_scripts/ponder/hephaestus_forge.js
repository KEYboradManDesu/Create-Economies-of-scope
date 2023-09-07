onEvent("ponder.tag", (event) => {
    /**
     * "kubejs:getting_started" -> The tag name
     * "minecraft:paper"        -> The icon
     * "Getting Started"        -> The title
     * "This is a description"  -> The description
     * [...items]               -> Default items
     */
    event.createTag("kubejs:hephaestus_forge_setup", "forbidden_arcanus:hephaestus_forge", "Hephaestus Forge", "Setup Guide For Hephaestus Forge", [
        // some default items!
        "forbidden_arcanus:hephaestus_forge",
        "forbidden_arcanus:arcane_crystal_obelisk",
    ]);
});
onEvent("ponder.registry", (event) => {
    /**
     * scene with custom structure
     */
    event.create("forbidden_arcanus:hephaestus_forge")
        .scene(
            "hephaestus",
            "Hephaestus Forge Setup",
            "kubejs:forge",
            (scene, util) => {
               scene.showStructure();
               scene.addKeyframe();
               scene
               .text(40, "Have a Clear Area With This Pattern", [5, 2, 5])
               scene.world.setBlock([4, 1, 4,], "minecraft:air", false);
               scene.world.showSection(util.select.layersFrom(1), Facing.UP)
               scene.idle(45);
               scene.addKeyframe();
               scene
               .text(40, "Place A Smithing Table", [5, 2, 5])
               scene.world.setBlock([4, 1, 4,], "minecraft:smithing_table", false);
               scene.idle(45);
               scene.addKeyframe();
               scene
               .showControls(60, [4.5, 2.5, 4.5], "down")
               /**
                * Use mouse right click as icon. Alternative you can use `.leftClick()`,
                * or `.showing(icon)` with a custom icon.
                */
               .rightClick()
               /**
                * Which item should be shown together with the icon
                */
               .withItem("forbidden_arcanus:mundabitur_dust")
               /**
                * Optional. You cannot use `.whileSneaking()` and `withCTRL()` together.
                */
               .whileSneaking()
               scene.idle(60);
               scene.world.setBlock([4, 1, 4,], "forbidden_arcanus:hephaestus_forge", false);
             })
             event.create("forbidden_arcanus:hephaestus_forge")
             .scene(
                 "hephaestus_pedestals",
                 "Pedestals",
                 "kubejs:forge",
                 (scene, util) => {
                   scene.showStructure();
                   scene.addKeyframe();
                   scene
                   scene.world.setBlock([4, 1, 4,], "forbidden_arcanus:hephaestus_forge", false);
                   scene.idle(40);
                   scene.addKeyframe();
                   scene
                   scene.world.setBlock([4, 1, 1,], "forbidden_arcanus:darkstone_pedestal", false);
                   scene.idle(5);
                   scene.world.setBlock([6, 1, 2,], "forbidden_arcanus:darkstone_pedestal", false);
                   scene.idle(5);
                   scene.world.setBlock([7, 1, 4,], "forbidden_arcanus:darkstone_pedestal", false);
                   scene.idle(5);
                   scene.world.setBlock([6, 1, 6,], "forbidden_arcanus:darkstone_pedestal", false);
                   scene.idle(5);
                   scene.world.setBlock([4, 1, 7,], "forbidden_arcanus:darkstone_pedestal", false);
                   scene.idle(5);
                   scene.world.setBlock([2, 1, 6,], "forbidden_arcanus:darkstone_pedestal", false);
                   scene.idle(5);
                   scene.world.setBlock([1, 1, 4,], "forbidden_arcanus:darkstone_pedestal", false);
                   scene.idle(5);
                   scene.world.setBlock([2, 1, 2,], "forbidden_arcanus:darkstone_pedestal", false);
                   })
                   event.create("forbidden_arcanus:arcane_crystal_obelisk")
                       .scene(
                           "obelisk_construction",
                           "Obelisk Construction",
                           "kubejs:obelisk.setup",
                           (scene, util) => {
                             scene.showStructure();
                             scene.addKeyframe();
                             scene
                             .text(40, "Build This Structure", [1, 2, 1])
                             scene.idle(40);
                             scene.addKeyframe();
                             scene
                             .showControls(60, [1.5, 4, 1.5], "down")
                             /**
                              * Use mouse right click as icon. Alternative you can use `.leftClick()`,
                              * or `.showing(icon)` with a custom icon.
                              */
                             .rightClick()
                             /**
                              * Which item should be shown together with the icon
                              */
                             .withItem("forbidden_arcanus:mundabitur_dust")
                             scene.idle(60);
                             scene.addKeyframe();
                             scene
                             scene.world.setBlock([1, 1, 1], "forbidden_arcanus:arcane_crystal_obelisk", true)
                             scene.world.modifyBlock([1, 1, 1], (curState) => curState.with("part", "lower"), true);
                             scene.world.setBlock([1, 2, 1], "forbidden_arcanus:arcane_crystal_obelisk", true)
                             scene.world.modifyBlock([1, 2, 1], (curState) => curState.with("part", "middle"), true);
                             scene.world.setBlock([1, 3, 1], "forbidden_arcanus:arcane_crystal_obelisk", true)
                             scene.world.modifyBlock([1, 3, 1], (curState) => curState.with("part", "upper"), true);
                             scene.idle(40);
                              })
                              event.create("forbidden_arcanus:arcane_crystal_obelisk")
                                  .scene(
                                      "obelisk_forge",
                                      "Obelisk Layout",
                                      "kubejs:forge.obelisk",
                                      (scene, util) => {
                                        scene.showStructure();
                                        scene.addKeyframe();
                                        scene
                                        .text(80, "The Forge Only Requires Six Pedestals So You Can Replace Spares With Obelisks To Power It Passively", [5, 2, 5])
                                        scene.idle(80);
                                        scene.addKeyframe();
                                        scene
                                        scene.world.setBlock([4, 1, 1], "forbidden_arcanus:arcane_crystal_obelisk", true)
                                        scene.world.modifyBlock([4, 1, 1], (curState) => curState.with("part", "lower"), true);
                                        scene.world.setBlock([4, 2, 1], "forbidden_arcanus:arcane_crystal_obelisk", false)
                                        scene.world.modifyBlock([4, 2, 1], (curState) => curState.with("part", "middle"), false);
                                        scene.world.setBlock([4, 3, 1], "forbidden_arcanus:arcane_crystal_obelisk", false)
                                        scene.world.modifyBlock([4, 3, 1], (curState) => curState.with("part", "upper"), false);
                                        scene.world.setBlock([4, 1, 7], "forbidden_arcanus:arcane_crystal_obelisk", true)
                                        scene.world.modifyBlock([4, 1, 7], (curState) => curState.with("part", "lower"), true);
                                        scene.world.setBlock([4, 2, 7], "forbidden_arcanus:arcane_crystal_obelisk", false)
                                        scene.world.modifyBlock([4, 2, 7], (curState) => curState.with("part", "middle"), false);
                                        scene.world.setBlock([4, 3, 7], "forbidden_arcanus:arcane_crystal_obelisk", false)
                                        scene.world.modifyBlock([4, 3, 7], (curState) => curState.with("part", "upper"), false);
                                        scene.idle(40);
                                        })
      });
