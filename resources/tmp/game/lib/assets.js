goog.provide('game.lib.assets');
goog.require('cljs.core');
game.lib.assets.__GT_elem = (function (){var method_table__2560__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2561__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2562__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2563__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2564__auto__ = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("->elem","\uFDD0'type","\uFDD0'default",hierarchy__2564__auto__,method_table__2560__auto__,prefer_table__2561__auto__,method_cache__2562__auto__,cached_hierarchy__2563__auto__));
})();
cljs.core._add_method.call(null,game.lib.assets.__GT_elem,"\uFDD0'image",(function (p__4530){
var map__4531 = p__4530;
var map__4531__$1 = ((cljs.core.seq_QMARK_.call(null,map__4531))?cljs.core.apply.call(null,cljs.core.hash_map,map__4531):map__4531);
var src = cljs.core._lookup.call(null,map__4531__$1,"\uFDD0'src",null);
var I = (new Image());
I.src = src;
return I;
}));
cljs.core._add_method.call(null,game.lib.assets.__GT_elem,"\uFDD0'audio",(function (p__4532){
var map__4533 = p__4532;
var map__4533__$1 = ((cljs.core.seq_QMARK_.call(null,map__4533))?cljs.core.apply.call(null,cljs.core.hash_map,map__4533):map__4533);
var src = cljs.core._lookup.call(null,map__4533__$1,"\uFDD0'src",null);
var a = document.createElement("audio");
a.src = src;
a.load();
return a;
}));
cljs.core.ObjMap.fromObject(["\uFDD0'background","\uFDD0'maintheme"],{"\uFDD0'background":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"blah/cool.jpg"}),"\uFDD0'maintheme":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'audio","\uFDD0'src":"zomg.ogg"})});
game.lib.assets.on_load = (function on_load(e,k,_BANG_set,cb){
cljs.core.swap_BANG_.call(null,_BANG_set,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray(["\uFDD0'items",k,"\uFDD0'elem"], true),e);
e.addEventListener("loadeddata",(function (){
cljs.core.swap_BANG_.call(null,_BANG_set,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray(["\uFDD0'items",k,"\uFDD0'loaded"], true),true);
cljs.core.swap_BANG_.call(null,_BANG_set,cljs.core.update_in,cljs.core.PersistentVector.fromArray(["\uFDD0'game.lib.assets/loaded-count"], true),cljs.core.inc);
if(cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'game.lib.assets/loaded-count")).call(null,cljs.core.deref.call(null,_BANG_set)),(new cljs.core.Keyword("\uFDD0'game.lib.assets/count")).call(null,cljs.core.deref.call(null,_BANG_set))))
{cljs.core.swap_BANG_.call(null,_BANG_set,cljs.core.assoc,"\uFDD0'game.lib.assets/loaded",true);
return cb.call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,_BANG_set)));
} else
{return null;
}
}));
return e.addEventListener("load",(function (){
cljs.core.swap_BANG_.call(null,_BANG_set,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray(["\uFDD0'items",k,"\uFDD0'loaded"], true),true);
cljs.core.swap_BANG_.call(null,_BANG_set,cljs.core.update_in,cljs.core.PersistentVector.fromArray(["\uFDD0'game.lib.assets/loaded-count"], true),cljs.core.inc);
if(cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'game.lib.assets/loaded-count")).call(null,cljs.core.deref.call(null,_BANG_set)),(new cljs.core.Keyword("\uFDD0'game.lib.assets/count")).call(null,cljs.core.deref.call(null,_BANG_set))))
{cljs.core.swap_BANG_.call(null,_BANG_set,cljs.core.assoc,"\uFDD0'game.lib.assets/loaded",true);
return cb.call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,_BANG_set)));
} else
{return null;
}
}));
});
game.lib.assets.load_all = (function load_all(_BANG_set,cb){
var G__4536 = cljs.core.seq.call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,_BANG_set)));
while(true){
if(G__4536)
{var vec__4537 = cljs.core.first.call(null,G__4536);
var k = cljs.core.nth.call(null,vec__4537,0,null);
var v = cljs.core.nth.call(null,vec__4537,1,null);
var elem = game.lib.assets.__GT_elem.call(null,v);
game.lib.assets.on_load.call(null,elem,k,_BANG_set,cb);
{
var G__4538 = cljs.core.next.call(null,G__4536);
G__4536 = G__4538;
continue;
}
} else
{return null;
}
break;
}
});
game.lib.assets.load_set = (function load_set(name,set,cb){
var _BANG_set = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'items","\uFDD0'game.lib.assets/count","\uFDD0'game.lib.assets/loaded-count"],{"\uFDD0'items":set,"\uFDD0'game.lib.assets/count":cljs.core.count.call(null,cljs.core.keys.call(null,set)),"\uFDD0'game.lib.assets/loaded-count":0}));
game.lib.assets.load_all.call(null,_BANG_set,cb);
return _BANG_set;
});
game.lib.assets.s = game.lib.assets.load_set.call(null,"\uFDD0'test",cljs.core.ObjMap.fromObject(["\uFDD0'logo","\uFDD0'lightning"],{"\uFDD0'logo":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"file:///users/chris/repos/gambit/resources/img/running.png"}),"\uFDD0'lightning":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'audio","\uFDD0'src":"file:///Users/chris/Downloads/lightning.ogg"})}),(function (){
return cljs.core.List.EMPTY;
}));
