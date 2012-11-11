goog.provide('game.main');
goog.require('cljs.core');
goog.require('game.lib.core');
goog.require('jayq.core');
goog.require('game.lib.util');
goog.require('game.systems.chroma');
goog.require('game.systems.camera');
goog.require('game.systems.sync');
goog.require('game.lib.dev');
goog.require('game.systems.health');
goog.require('game.lib.core');
goog.require('game.lib.util');
goog.require('game.comps');
goog.require('game.lib.physics');
goog.require('game.util');
goog.require('game.systems.moveable');
goog.require('jayq.core');
game.main.key_QMARK_ = input.key;
game.main.game_loop = (function game_loop(brush,opponent_brush){
game.lib.dev.begin.call(null);
game.lib.physics.add_BAR_rem.call(null);
game.systems.moveable.keyboard.call(null,game.lib.core.all_e.call(null,"\uFDD0'keyboard"));
game.systems.moveable.move.call(null,game.lib.core.all_e.call(null,"\uFDD0'player-actions"));
game.systems.moveable.bounce.call(null,game.lib.core.all_e.call(null,"\uFDD0'bouncy"));
game.systems.moveable.jump.call(null,game.lib.core.all_e.call(null,"\uFDD0'player-actions"));
game.systems.moveable.animate_actions.call(null,game.lib.core.all_e.call(null,"\uFDD0'player-actions"));
game.systems.chroma.chroma.call(null,game.lib.core.all_e.call(null,"\uFDD0'chroma"));
game.systems.chroma.chroma_physics.call(null,game.lib.core.all_e.call(null,"\uFDD0'chroma-activated"));
game.systems.chroma.chromatons.call(null,game.lib.core.all_e.call(null,"\uFDD0'chromaton"));
game.systems.health.death_conditions.call(null,game.lib.core.all_e.call(null,"\uFDD0'health"));
game.systems.health.kill.call(null,game.lib.core.all_e.call(null,"\uFDD0'health"));
game.systems.health.respawn_point.call(null,game.lib.core.all_e.call(null,"\uFDD0'respawn"));
game.systems.health.spawn.call(null,game.lib.core.all_e.call(null,"\uFDD0'spawn"));
game.systems.health.single_use.call(null,game.lib.core.all_e.call(null,"\uFDD0'single-use"));
game.systems.sync.sync_actions.call(null,game.lib.core.all_e.call(null,"\uFDD0'synced"));
game.lib.physics.step.call(null);
var player = cljs.core.first.call(null,game.lib.core.all_e.call(null,"\uFDD0'player"));
game.systems.camera.follow_player.call(null,player,game.lib.core.all_e.call(null,"\uFDD0'camera"));
var brush68608 = game.util.brush;
try{game.util.brush = brush;
game.systems.camera.renderer.call(null,player);
if(false)
{game.lib.dev.phys_debug.call(null);
} else
{}
game.systems.camera.restore.call(null);
}finally {game.util.brush = brush68608;
}if(cljs.core.truth_(game.util.opponent_QMARK_))
{var opponent = cljs.core.first.call(null,game.lib.core.all_e.call(null,"\uFDD0'opponent"));
game.systems.camera.follow_player.call(null,opponent,game.lib.core.all_e.call(null,"\uFDD0'camera"));
var brush68610 = game.util.brush;
try{game.util.brush = opponent_brush;
game.systems.camera.renderer.call(null,opponent);
if(false)
{game.lib.dev.phys_debug.call(null);
} else
{}
game.systems.camera.restore.call(null);
}finally {game.util.brush = brush68610;
}} else
{}
game.lib.dev.end.call(null);
game.systems.health.func_activates.call(null,game.lib.core.all_e.call(null,"\uFDD0'func-activate"));
return game.lib.core.frame.call(null,(function (){
return game_loop.call(null,brush,opponent_brush);
}));
});
game.main.run = (function run(){
game.lib.dev.add_stats.call(null);
game.lib.physics.init.call(null,"#game");
game.lib.physics.contact_BANG_.call(null,game.systems.moveable.on_foot,game.systems.moveable.off_foot);
game.lib.physics.contact_BANG_.call(null,game.systems.moveable.on_side,game.systems.moveable.off_side);
game.lib.physics.contact_BANG_.call(null,game.systems.health.on_trip,game.systems.health.off_trip);
return game.main.game_loop.call(null,window.brush("#game"),window.brush("#opponent-game"));
});
game.main.run.call(null);
