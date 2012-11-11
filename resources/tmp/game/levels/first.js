goog.provide('game.levels.first');
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
game.levels.first.level = (function level(){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'background",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75406__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.entities.background.render_normal,r__2953__auto__);
};
var G__75406 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75406__delegate.call(this, r__2953__auto__);
};
G__75406.cljs$lang$maxFixedArity = 0;
G__75406.cljs$lang$applyTo = (function (arglist__75407){
var r__2953__auto__ = cljs.core.seq(arglist__75407);;
return G__75406__delegate(r__2953__auto__);
});
G__75406.cljs$lang$arity$variadic = G__75406__delegate;
return G__75406;
})()
),game.comps.backing_layer.call(null),game.comps.position.call(null,250,250,0),game.comps.dimensions.call(null,2000,1500)], true),"\uFDD0'camera",cljs.core.PersistentVector.fromArray([game.comps.position.call(null,0,0),game.comps.dimensions.call(null,500,500),game.comps.camera.call(null)], true),"\uFDD0'player",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75408__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.draw_image,r__2953__auto__);
};
var G__75408 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75408__delegate.call(this, r__2953__auto__);
};
G__75408.cljs$lang$maxFixedArity = 0;
G__75408.cljs$lang$applyTo = (function (arglist__75409){
var r__2953__auto__ = cljs.core.seq(arglist__75409);;
return G__75408__delegate(r__2953__auto__);
});
G__75408.cljs$lang$arity$variadic = G__75408__delegate;
return G__75408;
})()
),game.comps.position.call(null,20,300,0),game.comps.dimensions.call(null,57,70),game.comps.keyboard.call(null),game.comps.chroma.call(null,game.systems.chroma.color),game.comps.animated.call(null,"\uFDD0'standing-right"),game.comps.facing.call(null),game.comps.synced.call(null),game.comps.blocked.call(null),game.comps.player.call(null),game.comps.points.call(null),game.comps.spawn.call(null,20,300),game.comps.health.call(null),game.comps.player_actions.call(null),game.comps.jump.call(null),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'fixedRotation","\uFDD0'allowSleep"],{"\uFDD0'fixedRotation":true,"\uFDD0'allowSleep":false}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'restitution"],{"\uFDD0'w":25,"\uFDD0'h":70,"\uFDD0'restitution":0})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":-12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'left-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'right-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":15,"\uFDD0'h":10,"\uFDD0'x":0,"\uFDD0'y":35,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'foot","\uFDD0'sensor":true}))], true))], true),"\uFDD0'respawn",cljs.core.PersistentVector.fromArray([game.comps.trippable.call(null),game.comps.respawn.call(null,600,330),game.comps.position.call(null,600,300),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":200,"\uFDD0'h":200,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75410__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75410 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75410__delegate.call(this, r__2953__auto__);
};
G__75410.cljs$lang$maxFixedArity = 0;
G__75410.cljs$lang$applyTo = (function (arglist__75411){
var r__2953__auto__ = cljs.core.seq(arglist__75411);;
return G__75410__delegate(r__2953__auto__);
});
G__75410.cljs$lang$arity$variadic = G__75410__delegate;
return G__75410;
})()
),game.comps.position.call(null,10,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,400,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":400,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75412__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__75412 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75412__delegate.call(this, r__2953__auto__);
};
G__75412.cljs$lang$maxFixedArity = 0;
G__75412.cljs$lang$applyTo = (function (arglist__75413){
var r__2953__auto__ = cljs.core.seq(arglist__75413);;
return G__75412__delegate(r__2953__auto__);
});
G__75412.cljs$lang$arity$variadic = G__75412__delegate;
return G__75412;
})()
),game.comps.position.call(null,300,200,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,10,100),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":10,"\uFDD0'h":100}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75414__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75414 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75414__delegate.call(this, r__2953__auto__);
};
G__75414.cljs$lang$maxFixedArity = 0;
G__75414.cljs$lang$applyTo = (function (arglist__75415){
var r__2953__auto__ = cljs.core.seq(arglist__75415);;
return G__75414__delegate(r__2953__auto__);
});
G__75414.cljs$lang$arity$variadic = G__75414__delegate;
return G__75414;
})()
),game.comps.position.call(null,500,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,300,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":300,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75416__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__75416 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75416__delegate.call(this, r__2953__auto__);
};
G__75416.cljs$lang$maxFixedArity = 0;
G__75416.cljs$lang$applyTo = (function (arglist__75417){
var r__2953__auto__ = cljs.core.seq(arglist__75417);;
return G__75416__delegate(r__2953__auto__);
});
G__75416.cljs$lang$arity$variadic = G__75416__delegate;
return G__75416;
})()
),game.comps.position.call(null,700,300,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,100,10),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":100,"\uFDD0'h":10}))], true))], true),"\uFDD0'bounce",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75418__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__75418 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75418__delegate.call(this, r__2953__auto__);
};
G__75418.cljs$lang$maxFixedArity = 0;
G__75418.cljs$lang$applyTo = (function (arglist__75419){
var r__2953__auto__ = cljs.core.seq(arglist__75419);;
return G__75418__delegate(r__2953__auto__);
});
G__75418.cljs$lang$arity$variadic = G__75418__delegate;
return G__75418;
})()
),game.comps.trippable.call(null),game.comps.terrain_layer.call(null),game.comps.bouncy.call(null),game.comps.position.call(null,700,290,0),game.comps.dimensions.call(null,40,2),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":40,"\uFDD0'h":2,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75420__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75420 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75420__delegate.call(this, r__2953__auto__);
};
G__75420.cljs$lang$maxFixedArity = 0;
G__75420.cljs$lang$applyTo = (function (arglist__75421){
var r__2953__auto__ = cljs.core.seq(arglist__75421);;
return G__75420__delegate(r__2953__auto__);
});
G__75420.cljs$lang$arity$variadic = G__75420__delegate;
return G__75420;
})()
),game.comps.position.call(null,1200,200,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,400,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":400,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75422__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__75422 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75422__delegate.call(this, r__2953__auto__);
};
G__75422.cljs$lang$maxFixedArity = 0;
G__75422.cljs$lang$applyTo = (function (arglist__75423){
var r__2953__auto__ = cljs.core.seq(arglist__75423);;
return G__75422__delegate(r__2953__auto__);
});
G__75422.cljs$lang$arity$variadic = G__75422__delegate;
return G__75422;
})()
),game.comps.position.call(null,1500,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,200,10),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":200,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75424__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__75424 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75424__delegate.call(this, r__2953__auto__);
};
G__75424.cljs$lang$maxFixedArity = 0;
G__75424.cljs$lang$applyTo = (function (arglist__75425){
var r__2953__auto__ = cljs.core.seq(arglist__75425);;
return G__75424__delegate(r__2953__auto__);
});
G__75424.cljs$lang$arity$variadic = G__75424__delegate;
return G__75424;
})()
),game.comps.position.call(null,1800,300,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,100,10),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":100,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75426__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75426 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75426__delegate.call(this, r__2953__auto__);
};
G__75426.cljs$lang$maxFixedArity = 0;
G__75426.cljs$lang$applyTo = (function (arglist__75427){
var r__2953__auto__ = cljs.core.seq(arglist__75427);;
return G__75426__delegate(r__2953__auto__);
});
G__75426.cljs$lang$arity$variadic = G__75426__delegate;
return G__75426;
})()
),game.comps.position.call(null,2100,200,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,150,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":150,"\uFDD0'h":10}))], true))], true),"\uFDD0'mine",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75428__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_mine,r__2953__auto__);
};
var G__75428 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75428__delegate.call(this, r__2953__auto__);
};
G__75428.cljs$lang$maxFixedArity = 0;
G__75428.cljs$lang$applyTo = (function (arglist__75429){
var r__2953__auto__ = cljs.core.seq(arglist__75429);;
return G__75428__delegate(r__2953__auto__);
});
G__75428.cljs$lang$arity$variadic = G__75428__delegate;
return G__75428;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.single_use.call(null),game.comps.deadly.call(null),game.comps.position.call(null,2100,187,0),game.comps.dimensions.call(null,30,15),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":30,"\uFDD0'h":15}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75430__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75430 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75430__delegate.call(this, r__2953__auto__);
};
G__75430.cljs$lang$maxFixedArity = 0;
G__75430.cljs$lang$applyTo = (function (arglist__75431){
var r__2953__auto__ = cljs.core.seq(arglist__75431);;
return G__75430__delegate(r__2953__auto__);
});
G__75430.cljs$lang$arity$variadic = G__75430__delegate;
return G__75430;
})()
),game.comps.position.call(null,2550,300,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,400,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":400,"\uFDD0'h":10}))], true))], true),"\uFDD0'respawn",cljs.core.PersistentVector.fromArray([game.comps.trippable.call(null),game.comps.respawn.call(null,2550,230),game.comps.position.call(null,2550,250),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":200,"\uFDD0'h":200,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'bounce",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75432__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75432 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75432__delegate.call(this, r__2953__auto__);
};
G__75432.cljs$lang$maxFixedArity = 0;
G__75432.cljs$lang$applyTo = (function (arglist__75433){
var r__2953__auto__ = cljs.core.seq(arglist__75433);;
return G__75432__delegate(r__2953__auto__);
});
G__75432.cljs$lang$arity$variadic = G__75432__delegate;
return G__75432;
})()
),game.comps.trippable.call(null),game.comps.terrain_layer.call(null),game.comps.bouncy.call(null),game.comps.position.call(null,2710,290,0),game.comps.dimensions.call(null,80,2),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":80,"\uFDD0'h":2,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75434__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75434 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75434__delegate.call(this, r__2953__auto__);
};
G__75434.cljs$lang$maxFixedArity = 0;
G__75434.cljs$lang$applyTo = (function (arglist__75435){
var r__2953__auto__ = cljs.core.seq(arglist__75435);;
return G__75434__delegate(r__2953__auto__);
});
G__75434.cljs$lang$arity$variadic = G__75434__delegate;
return G__75434;
})()
),game.comps.position.call(null,2950,200,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,100,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":100,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75436__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__75436 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75436__delegate.call(this, r__2953__auto__);
};
G__75436.cljs$lang$maxFixedArity = 0;
G__75436.cljs$lang$applyTo = (function (arglist__75437){
var r__2953__auto__ = cljs.core.seq(arglist__75437);;
return G__75436__delegate(r__2953__auto__);
});
G__75436.cljs$lang$arity$variadic = G__75436__delegate;
return G__75436;
})()
),game.comps.position.call(null,3100,-25,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,10,500),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":10,"\uFDD0'h":500}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75438__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75438 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75438__delegate.call(this, r__2953__auto__);
};
G__75438.cljs$lang$maxFixedArity = 0;
G__75438.cljs$lang$applyTo = (function (arglist__75439){
var r__2953__auto__ = cljs.core.seq(arglist__75439);;
return G__75438__delegate(r__2953__auto__);
});
G__75438.cljs$lang$arity$variadic = G__75438__delegate;
return G__75438;
})()
),game.comps.position.call(null,3100,350,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,200,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":200,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75440__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75440 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75440__delegate.call(this, r__2953__auto__);
};
G__75440.cljs$lang$maxFixedArity = 0;
G__75440.cljs$lang$applyTo = (function (arglist__75441){
var r__2953__auto__ = cljs.core.seq(arglist__75441);;
return G__75440__delegate(r__2953__auto__);
});
G__75440.cljs$lang$arity$variadic = G__75440__delegate;
return G__75440;
})()
),game.comps.position.call(null,3600,250,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,500,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":500,"\uFDD0'h":10}))], true))], true),"\uFDD0'mine",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75442__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_mine,r__2953__auto__);
};
var G__75442 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75442__delegate.call(this, r__2953__auto__);
};
G__75442.cljs$lang$maxFixedArity = 0;
G__75442.cljs$lang$applyTo = (function (arglist__75443){
var r__2953__auto__ = cljs.core.seq(arglist__75443);;
return G__75442__delegate(r__2953__auto__);
});
G__75442.cljs$lang$arity$variadic = G__75442__delegate;
return G__75442;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.single_use.call(null),game.comps.deadly.call(null),game.comps.position.call(null,3500,237,0),game.comps.dimensions.call(null,30,15),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":30,"\uFDD0'h":15}))], true))], true),"\uFDD0'mine",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75444__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_mine,r__2953__auto__);
};
var G__75444 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75444__delegate.call(this, r__2953__auto__);
};
G__75444.cljs$lang$maxFixedArity = 0;
G__75444.cljs$lang$applyTo = (function (arglist__75445){
var r__2953__auto__ = cljs.core.seq(arglist__75445);;
return G__75444__delegate(r__2953__auto__);
});
G__75444.cljs$lang$arity$variadic = G__75444__delegate;
return G__75444;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.single_use.call(null),game.comps.deadly.call(null),game.comps.position.call(null,3585,237,0),game.comps.dimensions.call(null,30,15),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":30,"\uFDD0'h":15}))], true))], true),"\uFDD0'mine",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75446__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_mine,r__2953__auto__);
};
var G__75446 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75446__delegate.call(this, r__2953__auto__);
};
G__75446.cljs$lang$maxFixedArity = 0;
G__75446.cljs$lang$applyTo = (function (arglist__75447){
var r__2953__auto__ = cljs.core.seq(arglist__75447);;
return G__75446__delegate(r__2953__auto__);
});
G__75446.cljs$lang$arity$variadic = G__75446__delegate;
return G__75446;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.single_use.call(null),game.comps.deadly.call(null),game.comps.position.call(null,3670,237,0),game.comps.dimensions.call(null,30,15),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":30,"\uFDD0'h":15}))], true))], true),"\uFDD0'mine",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75448__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_mine,r__2953__auto__);
};
var G__75448 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75448__delegate.call(this, r__2953__auto__);
};
G__75448.cljs$lang$maxFixedArity = 0;
G__75448.cljs$lang$applyTo = (function (arglist__75449){
var r__2953__auto__ = cljs.core.seq(arglist__75449);;
return G__75448__delegate(r__2953__auto__);
});
G__75448.cljs$lang$arity$variadic = G__75448__delegate;
return G__75448;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.single_use.call(null),game.comps.deadly.call(null),game.comps.position.call(null,3755,237,0),game.comps.dimensions.call(null,30,15),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":30,"\uFDD0'h":15}))], true))], true),"\uFDD0'goal",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75450__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_goal,r__2953__auto__);
};
var G__75450 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75450__delegate.call(this, r__2953__auto__);
};
G__75450.cljs$lang$maxFixedArity = 0;
G__75450.cljs$lang$applyTo = (function (arglist__75451){
var r__2953__auto__ = cljs.core.seq(arglist__75451);;
return G__75450__delegate(r__2953__auto__);
});
G__75450.cljs$lang$arity$variadic = G__75450__delegate;
return G__75450;
})()
),game.comps.trippable.call(null),game.comps.func_activate.call(null,game.flow.end),game.comps.single_use.call(null),game.comps.object_layer.call(null),game.comps.position.call(null,3950,40,0),game.comps.dimensions.call(null,95,85),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":95,"\uFDD0'h":85,"\uFDD0'sensor":true}))], true))], true)], true),(function (){var pos_offset75404 = game.comps.pos_offset;
try{game.comps.pos_offset = game.util.offset;
return cljs.core.PersistentVector.fromArray(["\uFDD0'other-player",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75452__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.draw_image,r__2953__auto__);
};
var G__75452 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75452__delegate.call(this, r__2953__auto__);
};
G__75452.cljs$lang$maxFixedArity = 0;
G__75452.cljs$lang$applyTo = (function (arglist__75453){
var r__2953__auto__ = cljs.core.seq(arglist__75453);;
return G__75452__delegate(r__2953__auto__);
});
G__75452.cljs$lang$arity$variadic = G__75452__delegate;
return G__75452;
})()
),game.comps.position.call(null,20,300,0),game.comps.dimensions.call(null,25,70),game.comps.chroma.call(null,game.systems.chroma.opponent_color),game.comps.player.call(null),game.comps.animated.call(null,"\uFDD0'standing-right"),game.comps.blocked.call(null),game.comps.opponent.call(null),game.comps.facing.call(null),game.comps.points.call(null),game.comps.spawn.call(null,20,300),game.comps.health.call(null),game.comps.player_actions.call(null),game.comps.jump.call(null),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'fixedRotation","\uFDD0'allowSleep"],{"\uFDD0'fixedRotation":true,"\uFDD0'allowSleep":false}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":25,"\uFDD0'h":70})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":-12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'left-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'right-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":15,"\uFDD0'h":10,"\uFDD0'x":0,"\uFDD0'y":35,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'foot","\uFDD0'sensor":true}))], true))], true),"\uFDD0'respawn",cljs.core.PersistentVector.fromArray([game.comps.trippable.call(null),game.comps.respawn.call(null,600,330),game.comps.position.call(null,600,300),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":200,"\uFDD0'h":200,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75454__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75454 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75454__delegate.call(this, r__2953__auto__);
};
G__75454.cljs$lang$maxFixedArity = 0;
G__75454.cljs$lang$applyTo = (function (arglist__75455){
var r__2953__auto__ = cljs.core.seq(arglist__75455);;
return G__75454__delegate(r__2953__auto__);
});
G__75454.cljs$lang$arity$variadic = G__75454__delegate;
return G__75454;
})()
),game.comps.position.call(null,10,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,400,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":400,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75456__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__75456 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75456__delegate.call(this, r__2953__auto__);
};
G__75456.cljs$lang$maxFixedArity = 0;
G__75456.cljs$lang$applyTo = (function (arglist__75457){
var r__2953__auto__ = cljs.core.seq(arglist__75457);;
return G__75456__delegate(r__2953__auto__);
});
G__75456.cljs$lang$arity$variadic = G__75456__delegate;
return G__75456;
})()
),game.comps.position.call(null,300,200,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,10,100),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":10,"\uFDD0'h":100}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75458__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75458 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75458__delegate.call(this, r__2953__auto__);
};
G__75458.cljs$lang$maxFixedArity = 0;
G__75458.cljs$lang$applyTo = (function (arglist__75459){
var r__2953__auto__ = cljs.core.seq(arglist__75459);;
return G__75458__delegate(r__2953__auto__);
});
G__75458.cljs$lang$arity$variadic = G__75458__delegate;
return G__75458;
})()
),game.comps.position.call(null,500,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,300,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":300,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75460__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__75460 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75460__delegate.call(this, r__2953__auto__);
};
G__75460.cljs$lang$maxFixedArity = 0;
G__75460.cljs$lang$applyTo = (function (arglist__75461){
var r__2953__auto__ = cljs.core.seq(arglist__75461);;
return G__75460__delegate(r__2953__auto__);
});
G__75460.cljs$lang$arity$variadic = G__75460__delegate;
return G__75460;
})()
),game.comps.position.call(null,700,300,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,100,10),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":100,"\uFDD0'h":10}))], true))], true),"\uFDD0'bounce",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75462__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__75462 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75462__delegate.call(this, r__2953__auto__);
};
G__75462.cljs$lang$maxFixedArity = 0;
G__75462.cljs$lang$applyTo = (function (arglist__75463){
var r__2953__auto__ = cljs.core.seq(arglist__75463);;
return G__75462__delegate(r__2953__auto__);
});
G__75462.cljs$lang$arity$variadic = G__75462__delegate;
return G__75462;
})()
),game.comps.trippable.call(null),game.comps.terrain_layer.call(null),game.comps.bouncy.call(null),game.comps.position.call(null,700,290,0),game.comps.dimensions.call(null,40,2),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":40,"\uFDD0'h":2,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75464__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75464 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75464__delegate.call(this, r__2953__auto__);
};
G__75464.cljs$lang$maxFixedArity = 0;
G__75464.cljs$lang$applyTo = (function (arglist__75465){
var r__2953__auto__ = cljs.core.seq(arglist__75465);;
return G__75464__delegate(r__2953__auto__);
});
G__75464.cljs$lang$arity$variadic = G__75464__delegate;
return G__75464;
})()
),game.comps.position.call(null,1200,200,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,400,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":400,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75466__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__75466 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75466__delegate.call(this, r__2953__auto__);
};
G__75466.cljs$lang$maxFixedArity = 0;
G__75466.cljs$lang$applyTo = (function (arglist__75467){
var r__2953__auto__ = cljs.core.seq(arglist__75467);;
return G__75466__delegate(r__2953__auto__);
});
G__75466.cljs$lang$arity$variadic = G__75466__delegate;
return G__75466;
})()
),game.comps.position.call(null,1500,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,200,10),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":200,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75468__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__75468 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75468__delegate.call(this, r__2953__auto__);
};
G__75468.cljs$lang$maxFixedArity = 0;
G__75468.cljs$lang$applyTo = (function (arglist__75469){
var r__2953__auto__ = cljs.core.seq(arglist__75469);;
return G__75468__delegate(r__2953__auto__);
});
G__75468.cljs$lang$arity$variadic = G__75468__delegate;
return G__75468;
})()
),game.comps.position.call(null,1800,300,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,100,10),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":100,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75470__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75470 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75470__delegate.call(this, r__2953__auto__);
};
G__75470.cljs$lang$maxFixedArity = 0;
G__75470.cljs$lang$applyTo = (function (arglist__75471){
var r__2953__auto__ = cljs.core.seq(arglist__75471);;
return G__75470__delegate(r__2953__auto__);
});
G__75470.cljs$lang$arity$variadic = G__75470__delegate;
return G__75470;
})()
),game.comps.position.call(null,2100,200,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,150,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":150,"\uFDD0'h":10}))], true))], true),"\uFDD0'mine",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75472__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_mine,r__2953__auto__);
};
var G__75472 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75472__delegate.call(this, r__2953__auto__);
};
G__75472.cljs$lang$maxFixedArity = 0;
G__75472.cljs$lang$applyTo = (function (arglist__75473){
var r__2953__auto__ = cljs.core.seq(arglist__75473);;
return G__75472__delegate(r__2953__auto__);
});
G__75472.cljs$lang$arity$variadic = G__75472__delegate;
return G__75472;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.single_use.call(null),game.comps.deadly.call(null),game.comps.position.call(null,2100,187,0),game.comps.dimensions.call(null,30,15),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":30,"\uFDD0'h":15}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75474__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75474 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75474__delegate.call(this, r__2953__auto__);
};
G__75474.cljs$lang$maxFixedArity = 0;
G__75474.cljs$lang$applyTo = (function (arglist__75475){
var r__2953__auto__ = cljs.core.seq(arglist__75475);;
return G__75474__delegate(r__2953__auto__);
});
G__75474.cljs$lang$arity$variadic = G__75474__delegate;
return G__75474;
})()
),game.comps.position.call(null,2550,300,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,400,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":400,"\uFDD0'h":10}))], true))], true),"\uFDD0'respawn",cljs.core.PersistentVector.fromArray([game.comps.trippable.call(null),game.comps.respawn.call(null,2550,230),game.comps.position.call(null,2550,250),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":200,"\uFDD0'h":200,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'bounce",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75476__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75476 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75476__delegate.call(this, r__2953__auto__);
};
G__75476.cljs$lang$maxFixedArity = 0;
G__75476.cljs$lang$applyTo = (function (arglist__75477){
var r__2953__auto__ = cljs.core.seq(arglist__75477);;
return G__75476__delegate(r__2953__auto__);
});
G__75476.cljs$lang$arity$variadic = G__75476__delegate;
return G__75476;
})()
),game.comps.trippable.call(null),game.comps.terrain_layer.call(null),game.comps.bouncy.call(null),game.comps.position.call(null,2710,290,0),game.comps.dimensions.call(null,80,2),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":80,"\uFDD0'h":2,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75478__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75478 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75478__delegate.call(this, r__2953__auto__);
};
G__75478.cljs$lang$maxFixedArity = 0;
G__75478.cljs$lang$applyTo = (function (arglist__75479){
var r__2953__auto__ = cljs.core.seq(arglist__75479);;
return G__75478__delegate(r__2953__auto__);
});
G__75478.cljs$lang$arity$variadic = G__75478__delegate;
return G__75478;
})()
),game.comps.position.call(null,2950,200,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,100,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":100,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75480__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__75480 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75480__delegate.call(this, r__2953__auto__);
};
G__75480.cljs$lang$maxFixedArity = 0;
G__75480.cljs$lang$applyTo = (function (arglist__75481){
var r__2953__auto__ = cljs.core.seq(arglist__75481);;
return G__75480__delegate(r__2953__auto__);
});
G__75480.cljs$lang$arity$variadic = G__75480__delegate;
return G__75480;
})()
),game.comps.position.call(null,3100,-25,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,10,500),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":10,"\uFDD0'h":500}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75482__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75482 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75482__delegate.call(this, r__2953__auto__);
};
G__75482.cljs$lang$maxFixedArity = 0;
G__75482.cljs$lang$applyTo = (function (arglist__75483){
var r__2953__auto__ = cljs.core.seq(arglist__75483);;
return G__75482__delegate(r__2953__auto__);
});
G__75482.cljs$lang$arity$variadic = G__75482__delegate;
return G__75482;
})()
),game.comps.position.call(null,3100,350,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,200,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":200,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75484__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__75484 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75484__delegate.call(this, r__2953__auto__);
};
G__75484.cljs$lang$maxFixedArity = 0;
G__75484.cljs$lang$applyTo = (function (arglist__75485){
var r__2953__auto__ = cljs.core.seq(arglist__75485);;
return G__75484__delegate(r__2953__auto__);
});
G__75484.cljs$lang$arity$variadic = G__75484__delegate;
return G__75484;
})()
),game.comps.position.call(null,3600,250,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,500,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":500,"\uFDD0'h":10}))], true))], true),"\uFDD0'mine",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75486__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_mine,r__2953__auto__);
};
var G__75486 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75486__delegate.call(this, r__2953__auto__);
};
G__75486.cljs$lang$maxFixedArity = 0;
G__75486.cljs$lang$applyTo = (function (arglist__75487){
var r__2953__auto__ = cljs.core.seq(arglist__75487);;
return G__75486__delegate(r__2953__auto__);
});
G__75486.cljs$lang$arity$variadic = G__75486__delegate;
return G__75486;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.single_use.call(null),game.comps.deadly.call(null),game.comps.position.call(null,3500,237,0),game.comps.dimensions.call(null,30,15),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":30,"\uFDD0'h":15}))], true))], true),"\uFDD0'mine",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75488__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_mine,r__2953__auto__);
};
var G__75488 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75488__delegate.call(this, r__2953__auto__);
};
G__75488.cljs$lang$maxFixedArity = 0;
G__75488.cljs$lang$applyTo = (function (arglist__75489){
var r__2953__auto__ = cljs.core.seq(arglist__75489);;
return G__75488__delegate(r__2953__auto__);
});
G__75488.cljs$lang$arity$variadic = G__75488__delegate;
return G__75488;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.single_use.call(null),game.comps.deadly.call(null),game.comps.position.call(null,3585,237,0),game.comps.dimensions.call(null,30,15),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":30,"\uFDD0'h":15}))], true))], true),"\uFDD0'mine",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75490__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_mine,r__2953__auto__);
};
var G__75490 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75490__delegate.call(this, r__2953__auto__);
};
G__75490.cljs$lang$maxFixedArity = 0;
G__75490.cljs$lang$applyTo = (function (arglist__75491){
var r__2953__auto__ = cljs.core.seq(arglist__75491);;
return G__75490__delegate(r__2953__auto__);
});
G__75490.cljs$lang$arity$variadic = G__75490__delegate;
return G__75490;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.single_use.call(null),game.comps.deadly.call(null),game.comps.position.call(null,3670,237,0),game.comps.dimensions.call(null,30,15),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":30,"\uFDD0'h":15}))], true))], true),"\uFDD0'mine",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75492__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_mine,r__2953__auto__);
};
var G__75492 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75492__delegate.call(this, r__2953__auto__);
};
G__75492.cljs$lang$maxFixedArity = 0;
G__75492.cljs$lang$applyTo = (function (arglist__75493){
var r__2953__auto__ = cljs.core.seq(arglist__75493);;
return G__75492__delegate(r__2953__auto__);
});
G__75492.cljs$lang$arity$variadic = G__75492__delegate;
return G__75492;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.single_use.call(null),game.comps.deadly.call(null),game.comps.position.call(null,3755,237,0),game.comps.dimensions.call(null,30,15),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":30,"\uFDD0'h":15}))], true))], true),"\uFDD0'goal",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__75494__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_goal,r__2953__auto__);
};
var G__75494 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__75494__delegate.call(this, r__2953__auto__);
};
G__75494.cljs$lang$maxFixedArity = 0;
G__75494.cljs$lang$applyTo = (function (arglist__75495){
var r__2953__auto__ = cljs.core.seq(arglist__75495);;
return G__75494__delegate(r__2953__auto__);
});
G__75494.cljs$lang$arity$variadic = G__75494__delegate;
return G__75494;
})()
),game.comps.trippable.call(null),game.comps.single_use.call(null),game.comps.object_layer.call(null),game.comps.position.call(null,3950,40,0),game.comps.dimensions.call(null,95,85),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":95,"\uFDD0'h":85,"\uFDD0'sensor":true}))], true))], true)], true);
}finally {game.comps.pos_offset = pos_offset75404;
}})());
});
