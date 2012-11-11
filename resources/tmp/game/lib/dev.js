goog.provide('game.lib.dev');
goog.require('cljs.core');
goog.require('game.lib.physics');
game.lib.dev.stats = (new Stats());
game.lib.dev.add_stats = (function add_stats(){
game.lib.dev.stats.setMode(2);
return document.body.appendChild(game.lib.dev.stats.domElement);
});
game.lib.dev.begin = game.lib.dev.stats.begin;
game.lib.dev.end = game.lib.dev.stats.end;
game.lib.dev.phys_debug = (function phys_debug(){
return game.lib.physics.world.DrawDebugData();
});
