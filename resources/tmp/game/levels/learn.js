goog.provide('game.levels.learn');
goog.require('cljs.core');
goog.require('game.util');
goog.require('game.renderers');
goog.require('game.lib.core');
goog.require('game.comps');
goog.require('game.comps');
goog.require('game.systems.sync');
goog.require('game.util');
goog.require('game.systems.chroma');
goog.require('game.flow');
goog.require('game.renderers');
goog.require('game.entities.background');
goog.require('game.lib.physics');
goog.require('game.lib.core');
goog.require('game.lib.assets');
game.renderers.render_ground = (function render_ground(ent){
var pos = Game.as(ent,"\uFDD0'position");
var dim = Game.as(ent,"\uFDD0'dimensions");
game.util.brush.fillStyle("#666");
return game.util.brush.rect(game.lib.core._GT__LT_.call(null,game.util.adjust_center.call(null,pos,dim),dim));
});
game.levels.learn.level = (function level(){
return cljs.core.PersistentVector.fromArray(["\uFDD0'background",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__17554__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.entities.background.render_normal,r__2953__auto__);
};
var G__17554 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17554__delegate.call(this, r__2953__auto__);
};
G__17554.cljs$lang$maxFixedArity = 0;
G__17554.cljs$lang$applyTo = (function (arglist__17555){
var r__2953__auto__ = cljs.core.seq(arglist__17555);;
return G__17554__delegate(r__2953__auto__);
});
G__17554.cljs$lang$arity$variadic = G__17554__delegate;
return G__17554;
})()
),game.comps.backing_layer.call(null),game.comps.position.call(null,250,250,0),game.comps.dimensions.call(null,2000,1500)], true),"\uFDD0'camera",cljs.core.PersistentVector.fromArray([game.comps.position.call(null,0,0),game.comps.dimensions.call(null,500,500),game.comps.camera.call(null)], true),"\uFDD0'player",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__17556__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.draw_image,r__2953__auto__);
};
var G__17556 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17556__delegate.call(this, r__2953__auto__);
};
G__17556.cljs$lang$maxFixedArity = 0;
G__17556.cljs$lang$applyTo = (function (arglist__17557){
var r__2953__auto__ = cljs.core.seq(arglist__17557);;
return G__17556__delegate(r__2953__auto__);
});
G__17556.cljs$lang$arity$variadic = G__17556__delegate;
return G__17556;
})()
),game.comps.position.call(null,250,330,0),game.comps.dimensions.call(null,57,70),game.comps.keyboard.call(null),game.comps.chroma.call(null,game.systems.chroma.color),game.comps.animated.call(null,"\uFDD0'standing-right"),game.comps.facing.call(null),game.comps.synced.call(null),game.comps.blocked.call(null),game.comps.player.call(null),game.comps.points.call(null),game.comps.spawn.call(null,250,330),game.comps.health.call(null),game.comps.player_actions.call(null),game.comps.jump.call(null),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'fixedRotation","\uFDD0'allowSleep"],{"\uFDD0'fixedRotation":true,"\uFDD0'allowSleep":false}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'restitution"],{"\uFDD0'w":25,"\uFDD0'h":70,"\uFDD0'restitution":0})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":-12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'left-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'right-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":15,"\uFDD0'h":10,"\uFDD0'x":0,"\uFDD0'y":35,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'foot","\uFDD0'sensor":true}))], true))], true),"\uFDD0'hint",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__17558__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_hint,r__2953__auto__);
};
var G__17558 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17558__delegate.call(this, r__2953__auto__);
};
G__17558.cljs$lang$maxFixedArity = 0;
G__17558.cljs$lang$applyTo = (function (arglist__17559){
var r__2953__auto__ = cljs.core.seq(arglist__17559);;
return G__17558__delegate(r__2953__auto__);
});
G__17558.cljs$lang$arity$variadic = G__17558__delegate;
return G__17558;
})()
),game.comps.trippable.call(null),game.comps.hint.call(null,"This is you."),game.comps.object_layer.call(null),game.comps.position.call(null,250,300),game.comps.dimensions.call(null,70,80),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":200,"\uFDD0'h":200,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'hint",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__17560__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_hint,r__2953__auto__);
};
var G__17560 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17560__delegate.call(this, r__2953__auto__);
};
G__17560.cljs$lang$maxFixedArity = 0;
G__17560.cljs$lang$applyTo = (function (arglist__17561){
var r__2953__auto__ = cljs.core.seq(arglist__17561);;
return G__17560__delegate(r__2953__auto__);
});
G__17560.cljs$lang$arity$variadic = G__17560__delegate;
return G__17560;
})()
),game.comps.trippable.call(null),game.comps.hint.call(null,"Use the arrows to move. ->"),game.comps.object_layer.call(null),game.comps.position.call(null,250,300),game.comps.dimensions.call(null,150,-290),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":200,"\uFDD0'h":200,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'hint",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__17562__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_hint,r__2953__auto__);
};
var G__17562 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17562__delegate.call(this, r__2953__auto__);
};
G__17562.cljs$lang$maxFixedArity = 0;
G__17562.cljs$lang$applyTo = (function (arglist__17563){
var r__2953__auto__ = cljs.core.seq(arglist__17563);;
return G__17562__delegate(r__2953__auto__);
});
G__17562.cljs$lang$arity$variadic = G__17562__delegate;
return G__17562;
})()
),game.comps.trippable.call(null),game.comps.hint.call(null,"Use z to chromashift."),game.comps.object_layer.call(null),game.comps.position.call(null,500,300),game.comps.dimensions.call(null,150,-290),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":300,"\uFDD0'h":200,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'hint",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__17564__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_hint,r__2953__auto__);
};
var G__17564 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17564__delegate.call(this, r__2953__auto__);
};
G__17564.cljs$lang$maxFixedArity = 0;
G__17564.cljs$lang$applyTo = (function (arglist__17565){
var r__2953__auto__ = cljs.core.seq(arglist__17565);;
return G__17564__delegate(r__2953__auto__);
});
G__17564.cljs$lang$arity$variadic = G__17564__delegate;
return G__17564;
})()
),game.comps.trippable.call(null),game.comps.hint.call(null,"Use space to jump."),game.comps.object_layer.call(null),game.comps.position.call(null,850,300),game.comps.dimensions.call(null,150,-290),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":300,"\uFDD0'h":200,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'hint",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__17566__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_hint,r__2953__auto__);
};
var G__17566 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17566__delegate.call(this, r__2953__auto__);
};
G__17566.cljs$lang$maxFixedArity = 0;
G__17566.cljs$lang$applyTo = (function (arglist__17567){
var r__2953__auto__ = cljs.core.seq(arglist__17567);;
return G__17566__delegate(r__2953__auto__);
});
G__17566.cljs$lang$arity$variadic = G__17566__delegate;
return G__17566;
})()
),game.comps.hint.call(null,"<- get this"),game.comps.object_layer.call(null),game.comps.position.call(null,870,205),game.comps.dimensions.call(null,0,0)], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__17568__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_goal,r__2953__auto__);
};
var G__17568 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17568__delegate.call(this, r__2953__auto__);
};
G__17568.cljs$lang$maxFixedArity = 0;
G__17568.cljs$lang$applyTo = (function (arglist__17569){
var r__2953__auto__ = cljs.core.seq(arglist__17569);;
return G__17568__delegate(r__2953__auto__);
});
G__17568.cljs$lang$arity$variadic = G__17568__delegate;
return G__17568;
})()
),game.comps.trippable.call(null),game.comps.func_activate.call(null,game.flow.menu),game.comps.single_use.call(null),game.comps.object_layer.call(null),game.comps.position.call(null,850,200,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__17570__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__17570 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17570__delegate.call(this, r__2953__auto__);
};
G__17570.cljs$lang$maxFixedArity = 0;
G__17570.cljs$lang$applyTo = (function (arglist__17571){
var r__2953__auto__ = cljs.core.seq(arglist__17571);;
return G__17570__delegate(r__2953__auto__);
});
G__17570.cljs$lang$arity$variadic = G__17570__delegate;
return G__17570;
})()
),game.comps.position.call(null,600,300,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.comps.dimensions.call(null,10,200),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":10,"\uFDD0'h":150}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__17572__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__17572 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__17572__delegate.call(this, r__2953__auto__);
};
G__17572.cljs$lang$maxFixedArity = 0;
G__17572.cljs$lang$applyTo = (function (arglist__17573){
var r__2953__auto__ = cljs.core.seq(arglist__17573);;
return G__17572__delegate(r__2953__auto__);
});
G__17572.cljs$lang$arity$variadic = G__17572__delegate;
return G__17572;
})()
),game.comps.position.call(null,650,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,1200,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":1200,"\uFDD0'h":10}))], true))], true)], true);
});
