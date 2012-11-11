goog.provide('game.levels.intro');
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
game.levels.intro.level = (function level(){
return cljs.core.PersistentVector.fromArray(["\uFDD0'background",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__22314__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.entities.background.render_normal,r__2953__auto__);
};
var G__22314 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__22314__delegate.call(this, r__2953__auto__);
};
G__22314.cljs$lang$maxFixedArity = 0;
G__22314.cljs$lang$applyTo = (function (arglist__22315){
var r__2953__auto__ = cljs.core.seq(arglist__22315);;
return G__22314__delegate(r__2953__auto__);
});
G__22314.cljs$lang$arity$variadic = G__22314__delegate;
return G__22314;
})()
),game.comps.backing_layer.call(null),game.comps.position.call(null,250,250,0),game.comps.dimensions.call(null,2000,1500)], true),"\uFDD0'camera",cljs.core.PersistentVector.fromArray([game.comps.position.call(null,0,0),game.comps.dimensions.call(null,500,500),game.comps.camera.call(null)], true),"\uFDD0'player",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__22316__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.draw_image,r__2953__auto__);
};
var G__22316 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__22316__delegate.call(this, r__2953__auto__);
};
G__22316.cljs$lang$maxFixedArity = 0;
G__22316.cljs$lang$applyTo = (function (arglist__22317){
var r__2953__auto__ = cljs.core.seq(arglist__22317);;
return G__22316__delegate(r__2953__auto__);
});
G__22316.cljs$lang$arity$variadic = G__22316__delegate;
return G__22316;
})()
),game.comps.position.call(null,250,330,0),game.comps.dimensions.call(null,57,70),game.comps.keyboard.call(null),game.comps.chroma.call(null,game.systems.chroma.color),game.comps.animated.call(null,"\uFDD0'standing-right"),game.comps.facing.call(null),game.comps.synced.call(null),game.comps.blocked.call(null),game.comps.player.call(null),game.comps.points.call(null),game.comps.spawn.call(null,250,330),game.comps.health.call(null),game.comps.player_actions.call(null),game.comps.jump.call(null),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'fixedRotation","\uFDD0'allowSleep"],{"\uFDD0'fixedRotation":true,"\uFDD0'allowSleep":false}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'restitution"],{"\uFDD0'w":25,"\uFDD0'h":70,"\uFDD0'restitution":0})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":-12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'left-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'right-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":15,"\uFDD0'h":10,"\uFDD0'x":0,"\uFDD0'y":35,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'foot","\uFDD0'sensor":true}))], true))], true),"\uFDD0'hint",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__22318__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_hint,r__2953__auto__);
};
var G__22318 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__22318__delegate.call(this, r__2953__auto__);
};
G__22318.cljs$lang$maxFixedArity = 0;
G__22318.cljs$lang$applyTo = (function (arglist__22319){
var r__2953__auto__ = cljs.core.seq(arglist__22319);;
return G__22318__delegate(r__2953__auto__);
});
G__22318.cljs$lang$arity$variadic = G__22318__delegate;
return G__22318;
})()
),game.comps.trippable.call(null),game.comps.hint.call(null,"This is you."),game.comps.object_layer.call(null),game.comps.position.call(null,250,300),game.comps.dimensions.call(null,70,80),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":200,"\uFDD0'h":200,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'hint",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__22320__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_hint,r__2953__auto__);
};
var G__22320 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__22320__delegate.call(this, r__2953__auto__);
};
G__22320.cljs$lang$maxFixedArity = 0;
G__22320.cljs$lang$applyTo = (function (arglist__22321){
var r__2953__auto__ = cljs.core.seq(arglist__22321);;
return G__22320__delegate(r__2953__auto__);
});
G__22320.cljs$lang$arity$variadic = G__22320__delegate;
return G__22320;
})()
),game.comps.trippable.call(null),game.comps.hint.call(null,"Use the arrows to move. ->"),game.comps.object_layer.call(null),game.comps.position.call(null,250,300),game.comps.dimensions.call(null,150,-290),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":200,"\uFDD0'h":200,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'hint",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__22322__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_hint,r__2953__auto__);
};
var G__22322 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__22322__delegate.call(this, r__2953__auto__);
};
G__22322.cljs$lang$maxFixedArity = 0;
G__22322.cljs$lang$applyTo = (function (arglist__22323){
var r__2953__auto__ = cljs.core.seq(arglist__22323);;
return G__22322__delegate(r__2953__auto__);
});
G__22322.cljs$lang$arity$variadic = G__22322__delegate;
return G__22322;
})()
),game.comps.trippable.call(null),game.comps.hint.call(null,"Use z to chromashift."),game.comps.object_layer.call(null),game.comps.position.call(null,500,300),game.comps.dimensions.call(null,150,-290),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":300,"\uFDD0'h":200,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'hint",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__22324__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_hint,r__2953__auto__);
};
var G__22324 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__22324__delegate.call(this, r__2953__auto__);
};
G__22324.cljs$lang$maxFixedArity = 0;
G__22324.cljs$lang$applyTo = (function (arglist__22325){
var r__2953__auto__ = cljs.core.seq(arglist__22325);;
return G__22324__delegate(r__2953__auto__);
});
G__22324.cljs$lang$arity$variadic = G__22324__delegate;
return G__22324;
})()
),game.comps.trippable.call(null),game.comps.hint.call(null,"Use space to jump."),game.comps.object_layer.call(null),game.comps.position.call(null,850,300),game.comps.dimensions.call(null,150,-290),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":300,"\uFDD0'h":200,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'hint",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__22326__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_hint,r__2953__auto__);
};
var G__22326 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__22326__delegate.call(this, r__2953__auto__);
};
G__22326.cljs$lang$maxFixedArity = 0;
G__22326.cljs$lang$applyTo = (function (arglist__22327){
var r__2953__auto__ = cljs.core.seq(arglist__22327);;
return G__22326__delegate(r__2953__auto__);
});
G__22326.cljs$lang$arity$variadic = G__22326__delegate;
return G__22326;
})()
),game.comps.hint.call(null,"<- get this"),game.comps.object_layer.call(null),game.comps.position.call(null,890,215),game.comps.dimensions.call(null,0,0)], true),"\uFDD0'goal",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__22328__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_goal,r__2953__auto__);
};
var G__22328 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__22328__delegate.call(this, r__2953__auto__);
};
G__22328.cljs$lang$maxFixedArity = 0;
G__22328.cljs$lang$applyTo = (function (arglist__22329){
var r__2953__auto__ = cljs.core.seq(arglist__22329);;
return G__22328__delegate(r__2953__auto__);
});
G__22328.cljs$lang$arity$variadic = G__22328__delegate;
return G__22328;
})()
),game.comps.trippable.call(null),game.comps.func_activate.call(null,game.flow.menu),game.comps.single_use.call(null),game.comps.object_layer.call(null),game.comps.position.call(null,850,200,0),game.comps.dimensions.call(null,95,85),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":95,"\uFDD0'h":85,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__22330__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__22330 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__22330__delegate.call(this, r__2953__auto__);
};
G__22330.cljs$lang$maxFixedArity = 0;
G__22330.cljs$lang$applyTo = (function (arglist__22331){
var r__2953__auto__ = cljs.core.seq(arglist__22331);;
return G__22330__delegate(r__2953__auto__);
});
G__22330.cljs$lang$arity$variadic = G__22330__delegate;
return G__22330;
})()
),game.comps.position.call(null,600,300,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.comps.dimensions.call(null,10,200),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":10,"\uFDD0'h":150}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__22332__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__22332 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__22332__delegate.call(this, r__2953__auto__);
};
G__22332.cljs$lang$maxFixedArity = 0;
G__22332.cljs$lang$applyTo = (function (arglist__22333){
var r__2953__auto__ = cljs.core.seq(arglist__22333);;
return G__22332__delegate(r__2953__auto__);
});
G__22332.cljs$lang$arity$variadic = G__22332__delegate;
return G__22332;
})()
),game.comps.position.call(null,650,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,1200,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":1200,"\uFDD0'h":10}))], true))], true)], true);
});
