goog.provide('game.levels.opening');
goog.require('cljs.core');
goog.require('game.util');
goog.require('game.renderers');
goog.require('game.lib.core');
goog.require('game.comps');
goog.require('game.comps');
goog.require('game.entities.background');
goog.require('game.lib.assets');
goog.require('game.systems.chroma');
goog.require('game.systems.sync');
goog.require('game.renderers');
goog.require('game.util');
goog.require('game.lib.physics');
goog.require('game.lib.core');
game.levels.opening.level = (function level(){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'background",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77636__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.entities.background.render_normal,r__2953__auto__);
};
var G__77636 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77636__delegate.call(this, r__2953__auto__);
};
G__77636.cljs$lang$maxFixedArity = 0;
G__77636.cljs$lang$applyTo = (function (arglist__77637){
var r__2953__auto__ = cljs.core.seq(arglist__77637);;
return G__77636__delegate(r__2953__auto__);
});
G__77636.cljs$lang$arity$variadic = G__77636__delegate;
return G__77636;
})()
),game.comps.backing_layer.call(null),game.comps.position.call(null,250,250,0),game.comps.dimensions.call(null,2000,1500)], true),"\uFDD0'camera",cljs.core.PersistentVector.fromArray([game.comps.position.call(null,0,0),game.comps.dimensions.call(null,500,500),game.comps.camera.call(null)], true),"\uFDD0'score",cljs.core.PersistentVector.fromArray([game.comps.position.call(null,470,30),game.comps.overlay_layer.call(null),game.comps.renderable.call(null,(function() { 
var G__77638__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_score,r__2953__auto__);
};
var G__77638 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77638__delegate.call(this, r__2953__auto__);
};
G__77638.cljs$lang$maxFixedArity = 0;
G__77638.cljs$lang$applyTo = (function (arglist__77639){
var r__2953__auto__ = cljs.core.seq(arglist__77639);;
return G__77638__delegate(r__2953__auto__);
});
G__77638.cljs$lang$arity$variadic = G__77638__delegate;
return G__77638;
})()
)], true),"\uFDD0'player",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77640__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.draw_image,r__2953__auto__);
};
var G__77640 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77640__delegate.call(this, r__2953__auto__);
};
G__77640.cljs$lang$maxFixedArity = 0;
G__77640.cljs$lang$applyTo = (function (arglist__77641){
var r__2953__auto__ = cljs.core.seq(arglist__77641);;
return G__77640__delegate(r__2953__auto__);
});
G__77640.cljs$lang$arity$variadic = G__77640__delegate;
return G__77640;
})()
),game.comps.position.call(null,20,300,0),game.comps.dimensions.call(null,57,70),game.comps.keyboard.call(null),game.comps.chroma.call(null,game.systems.chroma.color),game.comps.animated.call(null,"\uFDD0'standing-right"),game.comps.facing.call(null),game.comps.synced.call(null),game.comps.blocked.call(null),game.comps.player.call(null),game.comps.points.call(null),game.comps.spawn.call(null,20,300),game.comps.health.call(null),game.comps.player_actions.call(null),game.comps.jump.call(null),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'fixedRotation","\uFDD0'allowSleep"],{"\uFDD0'fixedRotation":true,"\uFDD0'allowSleep":false}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'restitution"],{"\uFDD0'w":25,"\uFDD0'h":70,"\uFDD0'restitution":0})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":-12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'left-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'right-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":15,"\uFDD0'h":10,"\uFDD0'x":0,"\uFDD0'y":35,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'foot","\uFDD0'sensor":true}))], true))], true),"\uFDD0'bounce",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77642__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__77642 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77642__delegate.call(this, r__2953__auto__);
};
G__77642.cljs$lang$maxFixedArity = 0;
G__77642.cljs$lang$applyTo = (function (arglist__77643){
var r__2953__auto__ = cljs.core.seq(arglist__77643);;
return G__77642__delegate(r__2953__auto__);
});
G__77642.cljs$lang$arity$variadic = G__77642__delegate;
return G__77642;
})()
),game.comps.trippable.call(null),game.comps.terrain_layer.call(null),game.comps.bouncy.call(null),game.comps.position.call(null,100,290,0),game.comps.dimensions.call(null,40,2),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":40,"\uFDD0'h":2,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'mine",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77644__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_mine,r__2953__auto__);
};
var G__77644 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77644__delegate.call(this, r__2953__auto__);
};
G__77644.cljs$lang$maxFixedArity = 0;
G__77644.cljs$lang$applyTo = (function (arglist__77645){
var r__2953__auto__ = cljs.core.seq(arglist__77645);;
return G__77644__delegate(r__2953__auto__);
});
G__77644.cljs$lang$arity$variadic = G__77644__delegate;
return G__77644;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.single_use.call(null),game.comps.deadly.call(null),game.comps.position.call(null,100,387,0),game.comps.dimensions.call(null,30,15),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":30,"\uFDD0'h":15}))], true))], true),"\uFDD0'hint",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77646__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_hint,r__2953__auto__);
};
var G__77646 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77646__delegate.call(this, r__2953__auto__);
};
G__77646.cljs$lang$maxFixedArity = 0;
G__77646.cljs$lang$applyTo = (function (arglist__77647){
var r__2953__auto__ = cljs.core.seq(arglist__77647);;
return G__77646__delegate(r__2953__auto__);
});
G__77646.cljs$lang$arity$variadic = G__77646__delegate;
return G__77646;
})()
),game.comps.trippable.call(null),game.comps.hint.call(null,"Land mines will kill you."),game.comps.object_layer.call(null),game.comps.position.call(null,-30,300),game.comps.dimensions.call(null,200,80),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":200,"\uFDD0'h":200,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'respawn",cljs.core.PersistentVector.fromArray([game.comps.trippable.call(null),game.comps.respawn.call(null,600,330),game.comps.position.call(null,600,300),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":200,"\uFDD0'h":200,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77648__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chromaton,r__2953__auto__);
};
var G__77648 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77648__delegate.call(this, r__2953__auto__);
};
G__77648.cljs$lang$maxFixedArity = 0;
G__77648.cljs$lang$applyTo = (function (arglist__77649){
var r__2953__auto__ = cljs.core.seq(arglist__77649);;
return G__77648__delegate(r__2953__auto__);
});
G__77648.cljs$lang$arity$variadic = G__77648__delegate;
return G__77648;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.chromaton.call(null),game.comps.single_use.call(null),game.comps.position.call(null,50,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77650__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chromaton,r__2953__auto__);
};
var G__77650 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77650__delegate.call(this, r__2953__auto__);
};
G__77650.cljs$lang$maxFixedArity = 0;
G__77650.cljs$lang$applyTo = (function (arglist__77651){
var r__2953__auto__ = cljs.core.seq(arglist__77651);;
return G__77650__delegate(r__2953__auto__);
});
G__77650.cljs$lang$arity$variadic = G__77650__delegate;
return G__77650;
})()
),game.comps.trippable.call(null),game.comps.chromaton.call(null),game.comps.single_use.call(null),game.comps.object_layer.call(null),game.comps.position.call(null,450,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77652__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chromaton,r__2953__auto__);
};
var G__77652 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77652__delegate.call(this, r__2953__auto__);
};
G__77652.cljs$lang$maxFixedArity = 0;
G__77652.cljs$lang$applyTo = (function (arglist__77653){
var r__2953__auto__ = cljs.core.seq(arglist__77653);;
return G__77652__delegate(r__2953__auto__);
});
G__77652.cljs$lang$arity$variadic = G__77652__delegate;
return G__77652;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.single_use.call(null),game.comps.chromaton.call(null,20),game.comps.position.call(null,550,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77654__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chromaton,r__2953__auto__);
};
var G__77654 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77654__delegate.call(this, r__2953__auto__);
};
G__77654.cljs$lang$maxFixedArity = 0;
G__77654.cljs$lang$applyTo = (function (arglist__77655){
var r__2953__auto__ = cljs.core.seq(arglist__77655);;
return G__77654__delegate(r__2953__auto__);
});
G__77654.cljs$lang$arity$variadic = G__77654__delegate;
return G__77654;
})()
),game.comps.trippable.call(null),game.comps.chromaton.call(null),game.comps.single_use.call(null),game.comps.object_layer.call(null),game.comps.position.call(null,650,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77656__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__77656 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77656__delegate.call(this, r__2953__auto__);
};
G__77656.cljs$lang$maxFixedArity = 0;
G__77656.cljs$lang$applyTo = (function (arglist__77657){
var r__2953__auto__ = cljs.core.seq(arglist__77657);;
return G__77656__delegate(r__2953__auto__);
});
G__77656.cljs$lang$arity$variadic = G__77656__delegate;
return G__77656;
})()
),game.comps.position.call(null,10,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,400,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":400,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77658__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__77658 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77658__delegate.call(this, r__2953__auto__);
};
G__77658.cljs$lang$maxFixedArity = 0;
G__77658.cljs$lang$applyTo = (function (arglist__77659){
var r__2953__auto__ = cljs.core.seq(arglist__77659);;
return G__77658__delegate(r__2953__auto__);
});
G__77658.cljs$lang$arity$variadic = G__77658__delegate;
return G__77658;
})()
),game.comps.position.call(null,700,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,600,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":600,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77660__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__77660 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77660__delegate.call(this, r__2953__auto__);
};
G__77660.cljs$lang$maxFixedArity = 0;
G__77660.cljs$lang$applyTo = (function (arglist__77661){
var r__2953__auto__ = cljs.core.seq(arglist__77661);;
return G__77660__delegate(r__2953__auto__);
});
G__77660.cljs$lang$arity$variadic = G__77660__delegate;
return G__77660;
})()
),game.comps.position.call(null,370,120,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,10,100),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":10,"\uFDD0'h":100}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77662__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__77662 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77662__delegate.call(this, r__2953__auto__);
};
G__77662.cljs$lang$maxFixedArity = 0;
G__77662.cljs$lang$applyTo = (function (arglist__77663){
var r__2953__auto__ = cljs.core.seq(arglist__77663);;
return G__77662__delegate(r__2953__auto__);
});
G__77662.cljs$lang$arity$variadic = G__77662__delegate;
return G__77662;
})()
),game.comps.position.call(null,100,300,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,100,10),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":100,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77664__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__77664 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77664__delegate.call(this, r__2953__auto__);
};
G__77664.cljs$lang$maxFixedArity = 0;
G__77664.cljs$lang$applyTo = (function (arglist__77665){
var r__2953__auto__ = cljs.core.seq(arglist__77665);;
return G__77664__delegate(r__2953__auto__);
});
G__77664.cljs$lang$arity$variadic = G__77664__delegate;
return G__77664;
})()
),game.comps.position.call(null,300,500,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,100,10),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":100,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77666__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__77666 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77666__delegate.call(this, r__2953__auto__);
};
G__77666.cljs$lang$maxFixedArity = 0;
G__77666.cljs$lang$applyTo = (function (arglist__77667){
var r__2953__auto__ = cljs.core.seq(arglist__77667);;
return G__77666__delegate(r__2953__auto__);
});
G__77666.cljs$lang$arity$variadic = G__77666__delegate;
return G__77666;
})()
),game.comps.position.call(null,220,200,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,50,10),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":50,"\uFDD0'h":10}))], true))], true)], true),(function (){var pos_offset77634 = game.comps.pos_offset;
try{game.comps.pos_offset = game.util.offset;
return cljs.core.PersistentVector.fromArray(["\uFDD0'other-player",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77668__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.draw_image,r__2953__auto__);
};
var G__77668 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77668__delegate.call(this, r__2953__auto__);
};
G__77668.cljs$lang$maxFixedArity = 0;
G__77668.cljs$lang$applyTo = (function (arglist__77669){
var r__2953__auto__ = cljs.core.seq(arglist__77669);;
return G__77668__delegate(r__2953__auto__);
});
G__77668.cljs$lang$arity$variadic = G__77668__delegate;
return G__77668;
})()
),game.comps.position.call(null,20,300,0),game.comps.dimensions.call(null,25,70),game.comps.chroma.call(null,game.systems.chroma.opponent_color),game.comps.player.call(null),game.comps.animated.call(null,"\uFDD0'standing-right"),game.comps.blocked.call(null),game.comps.opponent.call(null),game.comps.facing.call(null),game.comps.points.call(null),game.comps.spawn.call(null,20,300),game.comps.health.call(null),game.comps.player_actions.call(null),game.comps.jump.call(null),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'fixedRotation","\uFDD0'allowSleep"],{"\uFDD0'fixedRotation":true,"\uFDD0'allowSleep":false}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":25,"\uFDD0'h":70})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":-12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'left-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":5,"\uFDD0'h":67,"\uFDD0'x":12,"\uFDD0'y":0,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'right-side","\uFDD0'sensor":true})),game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'x","\uFDD0'y","\uFDD0'density","\uFDD0'data","\uFDD0'sensor"],{"\uFDD0'w":15,"\uFDD0'h":10,"\uFDD0'x":0,"\uFDD0'y":35,"\uFDD0'density":0,"\uFDD0'data":"\uFDD0'foot","\uFDD0'sensor":true}))], true))], true),"\uFDD0'bounce",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77670__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__77670 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77670__delegate.call(this, r__2953__auto__);
};
G__77670.cljs$lang$maxFixedArity = 0;
G__77670.cljs$lang$applyTo = (function (arglist__77671){
var r__2953__auto__ = cljs.core.seq(arglist__77671);;
return G__77670__delegate(r__2953__auto__);
});
G__77670.cljs$lang$arity$variadic = G__77670__delegate;
return G__77670;
})()
),game.comps.trippable.call(null),game.comps.terrain_layer.call(null),game.comps.bouncy.call(null),game.comps.position.call(null,100,290,0),game.comps.dimensions.call(null,40,2),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":40,"\uFDD0'h":2,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'mine",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77672__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__77672 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77672__delegate.call(this, r__2953__auto__);
};
G__77672.cljs$lang$maxFixedArity = 0;
G__77672.cljs$lang$applyTo = (function (arglist__77673){
var r__2953__auto__ = cljs.core.seq(arglist__77673);;
return G__77672__delegate(r__2953__auto__);
});
G__77672.cljs$lang$arity$variadic = G__77672__delegate;
return G__77672;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.deadly.call(null),game.comps.position.call(null,100,390,0),game.comps.dimensions.call(null,10,10),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":10,"\uFDD0'h":10}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77674__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chromaton,r__2953__auto__);
};
var G__77674 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77674__delegate.call(this, r__2953__auto__);
};
G__77674.cljs$lang$maxFixedArity = 0;
G__77674.cljs$lang$applyTo = (function (arglist__77675){
var r__2953__auto__ = cljs.core.seq(arglist__77675);;
return G__77674__delegate(r__2953__auto__);
});
G__77674.cljs$lang$arity$variadic = G__77674__delegate;
return G__77674;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.chromaton.call(null),game.comps.single_use.call(null),game.comps.position.call(null,50,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77676__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chromaton,r__2953__auto__);
};
var G__77676 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77676__delegate.call(this, r__2953__auto__);
};
G__77676.cljs$lang$maxFixedArity = 0;
G__77676.cljs$lang$applyTo = (function (arglist__77677){
var r__2953__auto__ = cljs.core.seq(arglist__77677);;
return G__77676__delegate(r__2953__auto__);
});
G__77676.cljs$lang$arity$variadic = G__77676__delegate;
return G__77676;
})()
),game.comps.trippable.call(null),game.comps.chromaton.call(null),game.comps.single_use.call(null),game.comps.object_layer.call(null),game.comps.position.call(null,450,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77678__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chromaton,r__2953__auto__);
};
var G__77678 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77678__delegate.call(this, r__2953__auto__);
};
G__77678.cljs$lang$maxFixedArity = 0;
G__77678.cljs$lang$applyTo = (function (arglist__77679){
var r__2953__auto__ = cljs.core.seq(arglist__77679);;
return G__77678__delegate(r__2953__auto__);
});
G__77678.cljs$lang$arity$variadic = G__77678__delegate;
return G__77678;
})()
),game.comps.trippable.call(null),game.comps.object_layer.call(null),game.comps.chromaton.call(null,20),game.comps.single_use.call(null),game.comps.position.call(null,550,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'chromaton",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77680__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chromaton,r__2953__auto__);
};
var G__77680 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77680__delegate.call(this, r__2953__auto__);
};
G__77680.cljs$lang$maxFixedArity = 0;
G__77680.cljs$lang$applyTo = (function (arglist__77681){
var r__2953__auto__ = cljs.core.seq(arglist__77681);;
return G__77680__delegate(r__2953__auto__);
});
G__77680.cljs$lang$arity$variadic = G__77680__delegate;
return G__77680;
})()
),game.comps.trippable.call(null),game.comps.chromaton.call(null),game.comps.single_use.call(null),game.comps.object_layer.call(null),game.comps.position.call(null,650,390,0),game.comps.dimensions.call(null,10,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h","\uFDD0'sensor"],{"\uFDD0'w":10,"\uFDD0'h":10,"\uFDD0'sensor":true}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77682__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__77682 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77682__delegate.call(this, r__2953__auto__);
};
G__77682.cljs$lang$maxFixedArity = 0;
G__77682.cljs$lang$applyTo = (function (arglist__77683){
var r__2953__auto__ = cljs.core.seq(arglist__77683);;
return G__77682__delegate(r__2953__auto__);
});
G__77682.cljs$lang$arity$variadic = G__77682__delegate;
return G__77682;
})()
),game.comps.position.call(null,10,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,400,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":400,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77684__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_ground,r__2953__auto__);
};
var G__77684 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77684__delegate.call(this, r__2953__auto__);
};
G__77684.cljs$lang$maxFixedArity = 0;
G__77684.cljs$lang$applyTo = (function (arglist__77685){
var r__2953__auto__ = cljs.core.seq(arglist__77685);;
return G__77684__delegate(r__2953__auto__);
});
G__77684.cljs$lang$arity$variadic = G__77684__delegate;
return G__77684;
})()
),game.comps.position.call(null,700,400,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,600,10),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":600,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77686__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__77686 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77686__delegate.call(this, r__2953__auto__);
};
G__77686.cljs$lang$maxFixedArity = 0;
G__77686.cljs$lang$applyTo = (function (arglist__77687){
var r__2953__auto__ = cljs.core.seq(arglist__77687);;
return G__77686__delegate(r__2953__auto__);
});
G__77686.cljs$lang$arity$variadic = G__77686__delegate;
return G__77686;
})()
),game.comps.position.call(null,370,120,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,10,100),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":10,"\uFDD0'h":100}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77688__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__77688 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77688__delegate.call(this, r__2953__auto__);
};
G__77688.cljs$lang$maxFixedArity = 0;
G__77688.cljs$lang$applyTo = (function (arglist__77689){
var r__2953__auto__ = cljs.core.seq(arglist__77689);;
return G__77688__delegate(r__2953__auto__);
});
G__77688.cljs$lang$arity$variadic = G__77688__delegate;
return G__77688;
})()
),game.comps.position.call(null,100,300,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,100,10),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":100,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77690__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__77690 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77690__delegate.call(this, r__2953__auto__);
};
G__77690.cljs$lang$maxFixedArity = 0;
G__77690.cljs$lang$applyTo = (function (arglist__77691){
var r__2953__auto__ = cljs.core.seq(arglist__77691);;
return G__77690__delegate(r__2953__auto__);
});
G__77690.cljs$lang$arity$variadic = G__77690__delegate;
return G__77690;
})()
),game.comps.position.call(null,300,500,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,100,10),game.comps.chroma_activated.call(null,game.systems.chroma.color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":100,"\uFDD0'h":10}))], true))], true),"\uFDD0'platform",cljs.core.PersistentVector.fromArray([game.comps.renderable.call(null,(function() { 
var G__77692__delegate = function (r__2953__auto__){
return cljs.core.apply.call(null,game.renderers.render_chroma_ground,r__2953__auto__);
};
var G__77692 = function (var_args){
var r__2953__auto__ = null;
if (goog.isDef(var_args)) {
  r__2953__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__77692__delegate.call(this, r__2953__auto__);
};
G__77692.cljs$lang$maxFixedArity = 0;
G__77692.cljs$lang$applyTo = (function (arglist__77693){
var r__2953__auto__ = cljs.core.seq(arglist__77693);;
return G__77692__delegate(r__2953__auto__);
});
G__77692.cljs$lang$arity$variadic = G__77692__delegate;
return G__77692;
})()
),game.comps.position.call(null,220,200,0),game.comps.solid.call(null),game.comps.terrain_layer.call(null),game.comps.dimensions.call(null,50,10),game.comps.chroma_activated.call(null,game.systems.chroma.opponent_color),game.lib.physics.simulate.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'static"],{"\uFDD0'static":true}),cljs.core.PersistentVector.fromArray([game.lib.physics.box_fixture.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'w","\uFDD0'h"],{"\uFDD0'w":50,"\uFDD0'h":10}))], true))], true)], true);
}finally {game.comps.pos_offset = pos_offset77634;
}})());
});
