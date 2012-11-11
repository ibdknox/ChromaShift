goog.provide('game.levels.opening');
goog.require('cljs.core');
goog.require('game.util');
goog.require('game.lib.core');
goog.require('game.comps');
goog.require('game.comps');
goog.require('game.entities.background');
goog.require('game.lib.assets');
goog.require('game.systems.chroma');
goog.require('game.systems.sync');
goog.require('game.util');
goog.require('game.lib.physics');
goog.require('game.lib.core');
game.levels.opening.__GT_color = cljs.core.ObjMap.fromObject(["\uFDD0'blue","\uFDD0'green"],{"\uFDD0'blue":"#77f","\uFDD0'green":"#50f050"});
game.levels.opening.load_clear = (function load_clear(scene){
game.lib.physics.clear_BANG_.call(null);
return game.lib.core.load_scene.call(null,scene);
});
game.levels.opening.render_player = (function render_player(ent){
var pos = Game.as(ent,"\uFDD0'position");
var dim = Game.as(ent,"\uFDD0'dimensions");
var chroma = Game.as(ent,"\uFDD0'chroma");
var color = (cljs.core.truth_((chroma["\uFDD0'active"]))?game.levels.opening.__GT_color.call(null,(chroma["\uFDD0'color"])):"#666");
game.util.brush.fillStyle(color);
return game.util.brush.rect(game.lib.core._GT__LT_.call(null,game.util.adjust_center.call(null,pos,dim),dim));
});
game.levels.opening.render_ground = (function render_ground(ent){
var pos = Game.as(ent,"\uFDD0'position");
var dim = Game.as(ent,"\uFDD0'dimensions");
game.util.brush.fillStyle("#666");
return game.util.brush.rect(game.lib.core._GT__LT_.call(null,game.util.adjust_center.call(null,pos,dim),dim));
});
game.levels.opening.render_chroma_ground = (function render_chroma_ground(ent){
var pos = Game.as(ent,"\uFDD0'position");
var dim = Game.as(ent,"\uFDD0'dimensions");
var chroma = Game.as(ent,"\uFDD0'chroma-activated");
game.util.brush.save();
if(cljs.core.truth_((chroma["\uFDD0'active"])))
{} else
{game.util.brush.opacity(0.5);
}
game.util.brush.fillStyle(game.levels.opening.__GT_color.call(null,(chroma["\uFDD0'color"])));
game.util.brush.rect(game.lib.core._GT__LT_.call(null,game.util.adjust_center.call(null,pos,dim),dim));
return game.util.brush.restore();
});
game.levels.opening.render_mine = (function render_mine(ent){
var pos = Game.as(ent,"\uFDD0'position");
var dim = Game.as(ent,"\uFDD0'dimensions");
var chroma = Game.as(ent,"\uFDD0'chroma-activated");
game.util.brush.save();
if(cljs.core.truth_((chroma["\uFDD0'active"])))
{} else
{game.util.brush.opacity(0.5);
}
game.util.brush.fillStyle("red");
game.util.brush.rect(game.lib.core._GT__LT_.call(null,game.util.adjust_center.call(null,pos,dim),dim));
return game.util.brush.restore();
});
game.levels.opening.render_chromaton = (function render_chromaton(ent){
var pos = Game.as(ent,"\uFDD0'position");
var dim = Game.as(ent,"\uFDD0'dimensions");
game.util.brush.fillStyle("#fff");
return game.util.brush.rect(game.lib.core._GT__LT_.call(null,game.util.adjust_center.call(null,pos,dim),dim));
});
game.levels.opening.render_score = (function render_score(ent){
var player = cljs.core.first.call(null,game.lib.core.all_e.call(null,"\uFDD0'player"));
var pos = Game.as(ent,"\uFDD0'position");
var points = Game.as(player,"\uFDD0'points");
game.util.brush.fillStyle("#fff");
game.util.brush.font("12pt Helvetica");
return game.util.brush.text(pos,[cljs.core.str((points["\uFDD0'points"]))].join(''));
});
game.levels.opening.s = game.lib.assets.load_set.call(null,"\uFDD0'test",cljs.core.ObjMap.fromObject(["\uFDD0'running","\uFDD0'standing","\uFDD0'jumping","\uFDD0'death"],{"\uFDD0'running":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/running.png"}),"\uFDD0'standing":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/standing.png"}),"\uFDD0'jumping":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/jumping.png"}),"\uFDD0'death":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/death.png"})}),(function (){
return cljs.core.List.EMPTY;
}));
cljs.core.identity.call(null,(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'standing")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.levels.opening.s)))));
game.levels.opening.animations = cljs.core.ObjMap.fromObject(["\uFDD0'jump-left","\uFDD0'falling-left","\uFDD0'running-right","\uFDD0'standing-right","\uFDD0'jump-right","\uFDD0'falling-right","\uFDD0'running-left","\uFDD0'standing-left","\uFDD0'death"],{"\uFDD0'jump-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":1,"\uFDD0'speed":15,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'jumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.levels.opening.s)))),"\uFDD0'x":0,"\uFDD0'y":70,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'falling-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":2,"\uFDD0'speed":5,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'jumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.levels.opening.s)))),"\uFDD0'x":114,"\uFDD0'y":70,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'running-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":11,"\uFDD0'speed":3,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'running")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.levels.opening.s)))),"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'standing-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":0,"\uFDD0'speed":0,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'standing")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.levels.opening.s)))),"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'jump-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":1,"\uFDD0'speed":15,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'jumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.levels.opening.s)))),"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'falling-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":2,"\uFDD0'speed":5,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'jumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.levels.opening.s)))),"\uFDD0'x":114,"\uFDD0'y":0,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'running-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":11,"\uFDD0'speed":3,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'running")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.levels.opening.s)))),"\uFDD0'x":0,"\uFDD0'y":70,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'standing-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":0,"\uFDD0'speed":0,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'standing")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.levels.opening.s)))),"\uFDD0'x":0,"\uFDD0'y":70,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'death":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":10,"\uFDD0'speed":3,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'death")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.levels.opening.s)))),"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'w":68,"\uFDD0'h":93})});
game.levels.opening.animate = (function animate(anim,pos,dim){
var a = game.levels.opening.animations.call(null,(anim["\uFDD0'animation"]));
if(cljs.core._EQ_.call(null,0,(anim["\uFDD0'count"])))
{(anim["\uFDD0'frame"] = ((anim["\uFDD0'frame"]) + 1));
(anim["\uFDD0'count"] = (new cljs.core.Keyword("\uFDD0'speed")).call(null,a));
} else
{}
if((function (){var and__2072__auto__ = ((anim["\uFDD0'count"]) > 0);
if(and__2072__auto__)
{return ((anim["\uFDD0'frame"]) <= (new cljs.core.Keyword("\uFDD0'frames")).call(null,a));
} else
{return and__2072__auto__;
}
})())
{(anim["\uFDD0'count"] = ((anim["\uFDD0'count"]) - 1));
} else
{}
if((function (){var and__2072__auto__ = ((anim["\uFDD0'frame"]) > (new cljs.core.Keyword("\uFDD0'frames")).call(null,a));
if(and__2072__auto__)
{return cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0'freeze")).call(null,a));
} else
{return and__2072__auto__;
}
})())
{(anim["\uFDD0'frame"] = 0);
} else
{}
return game.util.brush.clippedImage((new cljs.core.Keyword("\uFDD0'img")).call(null,a),((anim["\uFDD0'frame"]) * (new cljs.core.Keyword("\uFDD0'w")).call(null,a)),(new cljs.core.Keyword("\uFDD0'y")).call(null,a),(new cljs.core.Keyword("\uFDD0'w")).call(null,a),(new cljs.core.Keyword("\uFDD0'h")).call(null,a),game.util.adjust_center.call(null,pos,{"\uFDD0'hw":((new cljs.core.Keyword("\uFDD0'w")).call(null,a) / 2),"\uFDD0'hh":((new cljs.core.Keyword("\uFDD0'h")).call(null,a) / 2)}));
});
game.levels.opening.draw_image = (function draw_image(ent){
var temp__2223__auto__ = (new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'standing")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.levels.opening.s))));
if(cljs.core.truth_(temp__2223__auto__))
{var img = temp__2223__auto__;
var pos = Game.as(ent,"\uFDD0'position");
var rend = Game.as(ent,"\uFDD0'renderable");
var dim = Game.as(ent,"\uFDD0'dimensions");
var anim = Game.as(ent,"\uFDD0'animated");
var chroma = Game.as(ent,"\uFDD0'chroma");
game.util.brush.save();
if(cljs.core.truth_((chroma["\uFDD0'active"])))
{} else
{game.util.brush.opacity(0.5);
}
game.levels.opening.animate.call(null,anim,pos,dim);
return game.util.brush.restore();
} else
{return null;
}
});
game.levels.opening.level = (function level(){
console.log(game.systems.chroma.opponent_color);
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'background",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66048__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.entities.background.render_normal,r__2953__auto__);
};
var G__66048 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66048__delegate.call(this, r__2953__auto__);
};
G__66048.cljs$lang$maxFixedArity = 0;
G__66048.cljs$lang$applyTo = (function (arglist__66049){
var r__2953__auto__ = cljs.core.seq(arglist__66049);;
return G__66048__delegate(r__2953__auto__);
});
G__66048.cljs$lang$arity$variadic = G__66048__delegate;
return G__66048;
})()
),game.comps.backing_layer.call(null),game.comps.position.call(null,250,250,0),game.comps.dimensions.call(null,2000,1500)], true),"\uFDD0'camera",cljs.core.PersistentVector.fromArray([game.comps.position.call(null,0,0),game.comps.dimensions.call(null,500,500),game.comps.camera.call(null)], true),"\uFDD0'score",cljs.core.PersistentVector.fromArray([game.comps.position.call(null,470,30),game.comps.overlay_layer.call(null),game.comps.renderable.call(null,(function() { 
var G__66050__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_score,r__2953__auto__);
};
var G__66050 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66050__delegate.call(this, r__2953__auto__);
};
G__66050.cljs$lang$maxFixedArity = 0;
G__66050.cljs$lang$applyTo = (function (arglist__66051){
var r__2953__auto__ = cljs.core.seq(arglist__66051);;
return G__66050__delegate(r__2953__auto__);
});
G__66050.cljs$lang$arity$variadic = G__66050__delegate;
return G__66050;
})()
)], true),"\uFDD0'player",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66052__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.draw_image,r__2953__auto__);
};
var G__66052 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66052__delegate.call(this, r__2953__auto__);
};
G__66052.cljs$lang$maxFixedArity = 0;
G__66052.cljs$lang$applyTo = (function (arglist__66053){
var r__2953__auto__ = cljs.core.seq(arglist__66053);;
return G__66052__delegate(r__2953__auto__);
});
G__66052.cljs$lang$arity$variadic = G__66052__delegate;
return G__66052;
})()
),game.comps.position.call(null,20,300,0),game.comps.dimensions.call(null,57,70),game.comps.keyboard.call(null),game.comps.chroma.call(null,game.systems.chroma.color),game.comps.animated.call(null,"\uFDD0'standing-right"),game.comps.facing.call(null),game.comps.synced.call(null),game.comps.blocked.call(null),game.comps.player.call(null),game.comps.points.call(null),game.comps.spawn.call(null,20,300),game.comps.health.call(null),game.comps.player_actions.call(null),game.comps.jump.call(null),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'fixedRotation","\uFDD0'allowSleep"],{"\uFDD0'fixedRotation":true,"\uFDD0'allowSleep":false}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'restitution"],{"\uFDD0'w":25,"\uFDD0'h":70,"\uFDD0'restitution":0})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":-12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'left-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'right-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":15,"\uFDD0'h":10,"\uFDD0'x":0,"\uFDD0'y":35,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'foot","\uFDD0'sensor":true}))], true))], true),"\uFDD0'bounce",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66054__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chroma_ground,r__2953__auto__);
};
var G__66054 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66054__delegate.call(this, r__2953__auto__);
};
G__66054.cljs$lang$maxFixedArity = 0;
G__66054.cljs$lang$applyTo = (function (arglist__66055){
var r__2953__auto__ = cljs.core.seq(arglist__66055);;
return G__66054__delegate(r__2953__auto__);
});
G__66054.cljs$lang$arity$variadic = G__66054__delegate;
return G__66054;
})()
),game.comps.trippable.call(null),game.comps.terrain_layer.call(null),game.comps.bouncy.call(null),game.comps.position.call(null,100,290,0),game.comps.dimensions.call(null,40,2),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":40,"\uFDD0'h":2,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'mine",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66056__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chroma_ground,r__2953__auto__);
};
var G__66056 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66056__delegate.call(this, r__2953__auto__);
};
G__66056.cljs$lang$maxFixedArity = 0;
G__66056.cljs$lang$applyTo = (function (arglist__66057){
var r__2953__auto__ = cljs.core.seq(arglist__66057);;
return G__66056__delegate(r__2953__auto__);
});
G__66056.cljs$lang$arity$variadic = G__66056__delegate;
return G__66056;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.deadly.call(null),game.comps.position.call(null,100,390,0),game.comps.dimensions.call(null,10,10),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":10,"\uFDD0'h":10}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66058__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chromaton,r__2953__auto__);
};
var G__66058 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66058__delegate.call(this, r__2953__auto__);
};
G__66058.cljs$lang$maxFixedArity = 0;
G__66058.cljs$lang$applyTo = (function (arglist__66059){
var r__2953__auto__ = cljs.core.seq(arglist__66059);;
return G__66058__delegate(r__2953__auto__);
});
G__66058.cljs$lang$arity$variadic = G__66058__delegate;
return G__66058;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.chromaton.call(null),game.comps.position.call(null,50,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66060__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chromaton,r__2953__auto__);
};
var G__66060 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66060__delegate.call(this, r__2953__auto__);
};
G__66060.cljs$lang$maxFixedArity = 0;
G__66060.cljs$lang$applyTo = (function (arglist__66061){
var r__2953__auto__ = cljs.core.seq(arglist__66061);;
return G__66060__delegate(r__2953__auto__);
});
G__66060.cljs$lang$arity$variadic = G__66060__delegate;
return G__66060;
})()
),game.comps.trippable.call(null),game.comps.chromaton.call(null),game.comps.object_layer.call(null),game.comps.position.call(null,450,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66062__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chromaton,r__2953__auto__);
};
var G__66062 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66062__delegate.call(this, r__2953__auto__);
};
G__66062.cljs$lang$maxFixedArity = 0;
G__66062.cljs$lang$applyTo = (function (arglist__66063){
var r__2953__auto__ = cljs.core.seq(arglist__66063);;
return G__66062__delegate(r__2953__auto__);
});
G__66062.cljs$lang$arity$variadic = G__66062__delegate;
return G__66062;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.chromaton.call(null,20),game.comps.position.call(null,550,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66064__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chromaton,r__2953__auto__);
};
var G__66064 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66064__delegate.call(this, r__2953__auto__);
};
G__66064.cljs$lang$maxFixedArity = 0;
G__66064.cljs$lang$applyTo = (function (arglist__66065){
var r__2953__auto__ = cljs.core.seq(arglist__66065);;
return G__66064__delegate(r__2953__auto__);
});
G__66064.cljs$lang$arity$variadic = G__66064__delegate;
return G__66064;
})()
),game.comps.trippable.call(null),game.comps.chromaton.call(null),game.comps.object_layer.call(null),game.comps.position.call(null,650,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66066__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_ground,r__2953__auto__);
};
var G__66066 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66066__delegate.call(this, r__2953__auto__);
};
G__66066.cljs$lang$maxFixedArity = 0;
G__66066.cljs$lang$applyTo = (function (arglist__66067){
var r__2953__auto__ = cljs.core.seq(arglist__66067);;
return G__66066__delegate(r__2953__auto__);
});
G__66066.cljs$lang$arity$variadic = G__66066__delegate;
return G__66066;
})()
),game.comps.position.call(null,10,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,400,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":400,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66068__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_ground,r__2953__auto__);
};
var G__66068 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66068__delegate.call(this, r__2953__auto__);
};
G__66068.cljs$lang$maxFixedArity = 0;
G__66068.cljs$lang$applyTo = (function (arglist__66069){
var r__2953__auto__ = cljs.core.seq(arglist__66069);;
return G__66068__delegate(r__2953__auto__);
});
G__66068.cljs$lang$arity$variadic = G__66068__delegate;
return G__66068;
})()
),game.comps.position.call(null,700,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,600,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":600,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66070__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chroma_ground,r__2953__auto__);
};
var G__66070 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66070__delegate.call(this, r__2953__auto__);
};
G__66070.cljs$lang$maxFixedArity = 0;
G__66070.cljs$lang$applyTo = (function (arglist__66071){
var r__2953__auto__ = cljs.core.seq(arglist__66071);;
return G__66070__delegate(r__2953__auto__);
});
G__66070.cljs$lang$arity$variadic = G__66070__delegate;
return G__66070;
})()
),game.comps.position.call(null,370,120,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,10,100),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":10,"\uFDD0'h":100}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66072__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chroma_ground,r__2953__auto__);
};
var G__66072 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66072__delegate.call(this, r__2953__auto__);
};
G__66072.cljs$lang$maxFixedArity = 0;
G__66072.cljs$lang$applyTo = (function (arglist__66073){
var r__2953__auto__ = cljs.core.seq(arglist__66073);;
return G__66072__delegate(r__2953__auto__);
});
G__66072.cljs$lang$arity$variadic = G__66072__delegate;
return G__66072;
})()
),game.comps.position.call(null,100,300,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,100,10),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":100,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66074__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chroma_ground,r__2953__auto__);
};
var G__66074 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66074__delegate.call(this, r__2953__auto__);
};
G__66074.cljs$lang$maxFixedArity = 0;
G__66074.cljs$lang$applyTo = (function (arglist__66075){
var r__2953__auto__ = cljs.core.seq(arglist__66075);;
return G__66074__delegate(r__2953__auto__);
});
G__66074.cljs$lang$arity$variadic = G__66074__delegate;
return G__66074;
})()
),game.comps.position.call(null,300,500,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,100,10),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":100,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66076__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chroma_ground,r__2953__auto__);
};
var G__66076 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66076__delegate.call(this, r__2953__auto__);
};
G__66076.cljs$lang$maxFixedArity = 0;
G__66076.cljs$lang$applyTo = (function (arglist__66077){
var r__2953__auto__ = cljs.core.seq(arglist__66077);;
return G__66076__delegate(r__2953__auto__);
});
G__66076.cljs$lang$arity$variadic = G__66076__delegate;
return G__66076;
})()
),game.comps.position.call(null,220,200,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,50,10),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":50,"\uFDD0'h":10}))], true))], true)], true),(function (){var pos_offset66046 = game.comps.pos_offset;
try{game.comps.pos_offset = game.util.offset;
return cljs.core.PersistentVector.fromArray(["\uFDD0'other-player",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66078__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.draw_image,r__2953__auto__);
};
var G__66078 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66078__delegate.call(this, r__2953__auto__);
};
G__66078.cljs$lang$maxFixedArity = 0;
G__66078.cljs$lang$applyTo = (function (arglist__66079){
var r__2953__auto__ = cljs.core.seq(arglist__66079);;
return G__66078__delegate(r__2953__auto__);
});
G__66078.cljs$lang$arity$variadic = G__66078__delegate;
return G__66078;
})()
),game.comps.position.call(null,20,300,0),game.comps.dimensions.call(null,25,70),game.comps.chroma.call(null,game.systems.chroma.opponent_color),game.comps.player.call(null),game.comps.animated.call(null,"\uFDD0'standing-right"),game.comps.blocked.call(null),game.comps.opponent.call(null),game.comps.facing.call(null),game.comps.points.call(null),game.comps.spawn.call(null,20,300),game.comps.health.call(null),game.comps.player_actions.call(null),game.comps.jump.call(null),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'fixedRotation","\uFDD0'allowSleep"],{"\uFDD0'fixedRotation":true,"\uFDD0'allowSleep":false}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":25,"\uFDD0'h":70})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":-12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'left-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'right-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":15,"\uFDD0'h":10,"\uFDD0'x":0,"\uFDD0'y":35,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'foot","\uFDD0'sensor":true}))], true))], true),"\uFDD0'bounce",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66080__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chroma_ground,r__2953__auto__);
};
var G__66080 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66080__delegate.call(this, r__2953__auto__);
};
G__66080.cljs$lang$maxFixedArity = 0;
G__66080.cljs$lang$applyTo = (function (arglist__66081){
var r__2953__auto__ = cljs.core.seq(arglist__66081);;
return G__66080__delegate(r__2953__auto__);
});
G__66080.cljs$lang$arity$variadic = G__66080__delegate;
return G__66080;
})()
),game.comps.trippable.call(null),game.comps.terrain_layer.call(null),game.comps.bouncy.call(null),game.comps.position.call(null,100,290,0),game.comps.dimensions.call(null,40,2),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":40,"\uFDD0'h":2,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'mine",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66082__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chroma_ground,r__2953__auto__);
};
var G__66082 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66082__delegate.call(this, r__2953__auto__);
};
G__66082.cljs$lang$maxFixedArity = 0;
G__66082.cljs$lang$applyTo = (function (arglist__66083){
var r__2953__auto__ = cljs.core.seq(arglist__66083);;
return G__66082__delegate(r__2953__auto__);
});
G__66082.cljs$lang$arity$variadic = G__66082__delegate;
return G__66082;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.deadly.call(null),game.comps.position.call(null,100,390,0),game.comps.dimensions.call(null,10,10),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":10,"\uFDD0'h":10}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66084__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chromaton,r__2953__auto__);
};
var G__66084 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66084__delegate.call(this, r__2953__auto__);
};
G__66084.cljs$lang$maxFixedArity = 0;
G__66084.cljs$lang$applyTo = (function (arglist__66085){
var r__2953__auto__ = cljs.core.seq(arglist__66085);;
return G__66084__delegate(r__2953__auto__);
});
G__66084.cljs$lang$arity$variadic = G__66084__delegate;
return G__66084;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.chromaton.call(null),game.comps.position.call(null,50,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66086__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chromaton,r__2953__auto__);
};
var G__66086 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66086__delegate.call(this, r__2953__auto__);
};
G__66086.cljs$lang$maxFixedArity = 0;
G__66086.cljs$lang$applyTo = (function (arglist__66087){
var r__2953__auto__ = cljs.core.seq(arglist__66087);;
return G__66086__delegate(r__2953__auto__);
});
G__66086.cljs$lang$arity$variadic = G__66086__delegate;
return G__66086;
})()
),game.comps.trippable.call(null),game.comps.chromaton.call(null),game.comps.object_layer.call(null),game.comps.position.call(null,450,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66088__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chromaton,r__2953__auto__);
};
var G__66088 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66088__delegate.call(this, r__2953__auto__);
};
G__66088.cljs$lang$maxFixedArity = 0;
G__66088.cljs$lang$applyTo = (function (arglist__66089){
var r__2953__auto__ = cljs.core.seq(arglist__66089);;
return G__66088__delegate(r__2953__auto__);
});
G__66088.cljs$lang$arity$variadic = G__66088__delegate;
return G__66088;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.chromaton.call(null,20),game.comps.position.call(null,550,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66090__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chromaton,r__2953__auto__);
};
var G__66090 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66090__delegate.call(this, r__2953__auto__);
};
G__66090.cljs$lang$maxFixedArity = 0;
G__66090.cljs$lang$applyTo = (function (arglist__66091){
var r__2953__auto__ = cljs.core.seq(arglist__66091);;
return G__66090__delegate(r__2953__auto__);
});
G__66090.cljs$lang$arity$variadic = G__66090__delegate;
return G__66090;
})()
),game.comps.trippable.call(null),game.comps.chromaton.call(null),game.comps.object_layer.call(null),game.comps.position.call(null,650,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66092__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_ground,r__2953__auto__);
};
var G__66092 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66092__delegate.call(this, r__2953__auto__);
};
G__66092.cljs$lang$maxFixedArity = 0;
G__66092.cljs$lang$applyTo = (function (arglist__66093){
var r__2953__auto__ = cljs.core.seq(arglist__66093);;
return G__66092__delegate(r__2953__auto__);
});
G__66092.cljs$lang$arity$variadic = G__66092__delegate;
return G__66092;
})()
),game.comps.position.call(null,10,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,400,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":400,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66094__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_ground,r__2953__auto__);
};
var G__66094 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66094__delegate.call(this, r__2953__auto__);
};
G__66094.cljs$lang$maxFixedArity = 0;
G__66094.cljs$lang$applyTo = (function (arglist__66095){
var r__2953__auto__ = cljs.core.seq(arglist__66095);;
return G__66094__delegate(r__2953__auto__);
});
G__66094.cljs$lang$arity$variadic = G__66094__delegate;
return G__66094;
})()
),game.comps.position.call(null,700,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,600,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":600,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66096__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chroma_ground,r__2953__auto__);
};
var G__66096 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66096__delegate.call(this, r__2953__auto__);
};
G__66096.cljs$lang$maxFixedArity = 0;
G__66096.cljs$lang$applyTo = (function (arglist__66097){
var r__2953__auto__ = cljs.core.seq(arglist__66097);;
return G__66096__delegate(r__2953__auto__);
});
G__66096.cljs$lang$arity$variadic = G__66096__delegate;
return G__66096;
})()
),game.comps.position.call(null,370,120,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,10,100),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":10,"\uFDD0'h":100}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66098__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chroma_ground,r__2953__auto__);
};
var G__66098 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66098__delegate.call(this, r__2953__auto__);
};
G__66098.cljs$lang$maxFixedArity = 0;
G__66098.cljs$lang$applyTo = (function (arglist__66099){
var r__2953__auto__ = cljs.core.seq(arglist__66099);;
return G__66098__delegate(r__2953__auto__);
});
G__66098.cljs$lang$arity$variadic = G__66098__delegate;
return G__66098;
})()
),game.comps.position.call(null,100,300,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,100,10),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":100,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66100__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chroma_ground,r__2953__auto__);
};
var G__66100 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66100__delegate.call(this, r__2953__auto__);
};
G__66100.cljs$lang$maxFixedArity = 0;
G__66100.cljs$lang$applyTo = (function (arglist__66101){
var r__2953__auto__ = cljs.core.seq(arglist__66101);;
return G__66100__delegate(r__2953__auto__);
});
G__66100.cljs$lang$arity$variadic = G__66100__delegate;
return G__66100;
})()
),game.comps.position.call(null,300,500,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,100,10),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":100,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__66102__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.levels.opening.render_chroma_ground,r__2953__auto__);
};
var G__66102 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__66102__delegate.call(this, r__2953__auto__);
};
G__66102.cljs$lang$maxFixedArity = 0;
G__66102.cljs$lang$applyTo = (function (arglist__66103){
var r__2953__auto__ = cljs.core.seq(arglist__66103);;
return G__66102__delegate(r__2953__auto__);
});
G__66102.cljs$lang$arity$variadic = G__66102__delegate;
return G__66102;
})()
),game.comps.position.call(null,220,200,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,50,10),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":50,"\uFDD0'h":10}))], true))], true)], true);
}finally {game.comps.pos_offset = pos_offset66046;
}})());
});
