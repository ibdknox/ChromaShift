goog.provide('game.systems.sync');
goog.require('cljs.core');
goog.require('game.lib.core');
goog.require('game.util');
goog.require('game.lib.physics');
goog.require('game.systems.chroma');
goog.require('game.util');
goog.require('game.lib.core');
goog.require('goog.object');
game.systems.sync.sock = io.connect("http://192.168.0.161");
game.systems.sync.emit = (function emit(k,v){
return game.systems.sync.sock.emit(cljs.core.name.call(null,k),v);
});
game.systems.sync.action = (function action(data){
console.log("got actions");
var c__2909__auto__ = cljs.core.count.call(null,game.lib.core.all_e.call(null,"\uFDD0'opponent"));
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (game.lib.core.all_e.call(null,"\uFDD0'opponent")[i__2910__auto__]);
var action__$1 = Game.as(e,"\uFDD0'player-actions");
var chroma = Game.as(e,"\uFDD0'chroma");
(action__$1["\uFDD0'move-left"] = (data["\uFDD0'move-left"]));
(action__$1["\uFDD0'move-right"] = (data["\uFDD0'move-right"]));
(action__$1["\uFDD0'jump"] = (data["\uFDD0'jump"]));
(chroma["\uFDD0'active"] = (data["\uFDD0'active"]));
(chroma["\uFDD0'color"] = (data["\uFDD0'color"]));
game.systems.chroma.flip_active.call(null,(data["\uFDD0'color"]),(data["\uFDD0'active"]));
game.lib.physics.set_position.call(null,e,(game.util.offset + (data["\uFDD0'x"])),(data["\uFDD0'y"]));
{
var G__61506 = (i__2910__auto__ + 1);
i__2910__auto__ = G__61506;
continue;
}
} else
{return null;
}
break;
}
});
game.systems.sync.sync = (function sync(data){
return null;
});
game.systems.sync.game_data = (function game_data(data){
game.systems.chroma.color = (data["\uFDD0'color"]);
game.systems.chroma.opponent_color = (data["\uFDD0'opponent-color"]);
return game.lib.core.load_scene.call(null,game.levels.opening.level());
});
game.systems.sync.sock.on("action",game.systems.sync.action);
game.systems.sync.sock.on("sync",game.systems.sync.sync);
game.systems.sync.sock.on("game",game.systems.sync.game_data);
game.systems.sync.sock.on("news",(function (d){
return console.log("got news");
}));
game.systems.sync.sync_actions = (function sync_actions(ents){
var c__2909__auto__ = cljs.core.count.call(null,ents);
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (ents[i__2910__auto__]);
var synced = Game.as(e,"\uFDD0'synced");
var pos = Game.as(e,"\uFDD0'position");
var actions = Game.as(e,"\uFDD0'player-actions");
var chroma = Game.as(e,"\uFDD0'chroma");
if(cljs.core.truth_(game.util.obj_equal_QMARK_.call(null,actions,(synced["\uFDD0'last-actions"]))))
{} else
{console.log(actions);
game.systems.sync.emit.call(null,"action",game.lib.core._GT__LT_.call(null,game.lib.core._GT__LT_.call(null,pos,actions),chroma));
(synced["\uFDD0'last-actions"] = goog.object.clone(actions));
}
{
var G__61507 = (i__2910__auto__ + 1);
i__2910__auto__ = G__61507;
continue;
}
} else
{return null;
}
break;
}
});
