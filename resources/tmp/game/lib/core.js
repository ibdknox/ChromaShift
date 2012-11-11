goog.provide('game.lib.core');
goog.require('cljs.core');
cljs.core._STAR_print_fn_STAR_ = (function (p1__3075_SHARP_){
return console.log(p1__3075_SHARP_);
});
game.lib.core.frame = (function (){var or__2074__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__2074__auto__))
{return or__2074__auto__;
} else
{var or__2074__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__2074__auto____$1))
{return or__2074__auto____$1;
} else
{var or__2074__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__2074__auto____$2))
{return or__2074__auto____$2;
} else
{var or__2074__auto____$3 = window.oRequestAnimationFrame;
if(cljs.core.truth_(or__2074__auto____$3))
{return or__2074__auto____$3;
} else
{var or__2074__auto____$4 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__2074__auto____$4))
{return or__2074__auto____$4;
} else
{return (function (callback){
return setTimeout(callback,17);
});
}
}
}
}
}
})();
/**
* @param {...*} var_args
*/
game.lib.core.entity = (function() { 
var entity__delegate = function (name,comps){
var ent = Game.create(name);
var G__3077 = cljs.core.seq.call(null,comps);
while(true){
if(G__3077)
{var c = cljs.core.first.call(null,G__3077);
Game.addC(ent,c);
{
var G__3078 = cljs.core.next.call(null,G__3077);
G__3077 = G__3078;
continue;
}
} else
{return null;
}
break;
}
};
var entity = function (name,var_args){
var comps = null;
if (goog.isDef(var_args)) {
  comps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return entity__delegate.call(this, name, comps);
};
entity.cljs$lang$maxFixedArity = 1;
entity.cljs$lang$applyTo = (function (arglist__3079){
var name = cljs.core.first(arglist__3079);
var comps = cljs.core.rest(arglist__3079);
return entity__delegate(name, comps);
});
entity.cljs$lang$arity$variadic = entity__delegate;
return entity;
})()
;
game.lib.core.rem_BANG_ = (function rem_BANG_(e){
return Game.destroy(e);
});
game.lib.core._BANG_ = cljs.core.aset;
game.lib.core._QMARK_ = cljs.core.aget;
game.lib.core._GT__LT_ = Game.merge;
game.lib.core.add_c = Game.addC;
game.lib.core.rem_c = Game.remC;
game.lib.core.all_e = Game.allE;
game.lib.core.has_QMARK_ = Game.has;
game.lib.core.as = Game.as;
game.lib.core.clear_BANG_ = Game.clear;
game.lib.core.load_scene = (function load_scene(scene){
game.lib.core.clear_BANG_.call(null);
var G__3083 = cljs.core.seq.call(null,cljs.core.partition_all.call(null,2,scene));
while(true){
if(G__3083)
{var vec__3084 = cljs.core.first.call(null,G__3083);
var name = cljs.core.nth.call(null,vec__3084,0,null);
var comps = cljs.core.nth.call(null,vec__3084,1,null);
var ent = Game.create(name);
var G__3085 = cljs.core.seq.call(null,comps);
while(true){
if(G__3085)
{var c = cljs.core.first.call(null,G__3085);
Game.addC(ent,c);
{
var G__3086 = cljs.core.next.call(null,G__3085);
G__3085 = G__3086;
continue;
}
} else
{}
break;
}
{
var G__3087 = cljs.core.next.call(null,G__3083);
G__3083 = G__3087;
continue;
}
} else
{return null;
}
break;
}
});
