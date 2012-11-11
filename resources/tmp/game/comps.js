goog.provide('game.comps');
goog.require('cljs.core');
game.comps.pos_offset = 0;
game.comps.position = (function position(x,y,a){
return {"name":"\uFDD0'position","\uFDD0'x":(game.comps.pos_offset + x),"\uFDD0'y":y,"\uFDD0'a":(function (){var or__2074__auto__ = a;
if(cljs.core.truth_(or__2074__auto__))
{return or__2074__auto__;
} else
{return 0;
}
})()};
});
game.comps.dimensions = (function dimensions(w,h){
return {"name":"\uFDD0'dimensions","\uFDD0'w":w,"\uFDD0'h":h,"\uFDD0'hw":(w / 2),"\uFDD0'hh":(h / 2)};
});
game.comps.renderable = (function renderable(func){
return {"name":"\uFDD0'renderable","\uFDD0'fn":func};
});
game.comps.backing_layer = (function backing_layer(){
return {"name":"\uFDD0'backing-layer"};
});
game.comps.terrain_layer = (function terrain_layer(){
return {"name":"\uFDD0'terrain-layer"};
});
game.comps.object_layer = (function object_layer(){
return {"name":"\uFDD0'object-layer"};
});
game.comps.overlay_layer = (function overlay_layer(){
return {"name":"\uFDD0'overlay-layer"};
});
game.comps.player_actions = (function player_actions(){
return {"name":"\uFDD0'player-actions","\uFDD0'can-act?":true,"\uFDD0'move-left":false,"\uFDD0'move-right":false,"\uFDD0'chroma":false,"\uFDD0'jump":false};
});
game.comps.synced = (function synced(){
return {"name":"\uFDD0'synced","\uFDD0'last-actions":{}};
});
game.comps.jump = (function jump(){
return {"name":"\uFDD0'jump","\uFDD0'count":0,"\uFDD0'ground-count":0,"\uFDD0'falling":false,"\uFDD0'ground":true};
});
game.comps.blocked = (function blocked(){
return {"name":"\uFDD0'blocked","\uFDD0'left":false,"\uFDD0'right":false};
});
game.comps.camera = (function camera(){
return {"name":"\uFDD0'camera"};
});
game.comps.player = (function player(current_QMARK_){
return {"name":"\uFDD0'player","\uFDD0'current":current_QMARK_};
});
game.comps.opponent = (function opponent(){
return {"name":"\uFDD0'opponent"};
});
game.comps.chroma = (function chroma(color){
return {"name":"\uFDD0'chroma","\uFDD0'count":0,"\uFDD0'color":color,"\uFDD0'active":true};
});
game.comps.chroma_activated = (function chroma_activated(color){
return {"name":"\uFDD0'chroma-activated","\uFDD0'color":color,"\uFDD0'active":true};
});
game.comps.health = (function health(){
return {"name":"\uFDD0'health","\uFDD0'dead":false,"\uFDD0'count":false};
});
game.comps.spawn = (function spawn(x,y){
return {"name":"\uFDD0'spawn","\uFDD0'respawn":false,"\uFDD0'x":(game.comps.pos_offset + x),"\uFDD0'y":y};
});
game.comps.respawn = (function respawn(x,y){
return {"name":"\uFDD0'respawn","\uFDD0'x":(game.comps.pos_offset + x),"\uFDD0'y":y};
});
game.comps.trippable = (function trippable(){
return {"name":"\uFDD0'trippable","\uFDD0'active":false};
});
game.comps.deadly = (function deadly(){
return {"name":"\uFDD0'deadly"};
});
game.comps.bouncy = (function bouncy(){
return {"name":"\uFDD0'bouncy","\uFDD0'count":0};
});
game.comps.chromaton = (function chromaton(v){
return {"name":"\uFDD0'chromaton","\uFDD0'value":(function (){var or__2074__auto__ = v;
if(cljs.core.truth_(or__2074__auto__))
{return or__2074__auto__;
} else
{return 1;
}
})()};
});
game.comps.points = (function points(){
return {"name":"\uFDD0'points","\uFDD0'points":0};
});
game.comps.solid = (function solid(){
return {"name":"\uFDD0'solid"};
});
game.comps.animated = (function animated(anim){
return {"name":"\uFDD0'animated","\uFDD0'animation":anim,"\uFDD0'frame":-1,"\uFDD0'count":0};
});
game.comps.single_use = (function single_use(count){
return {"name":"\uFDD0'single-use","\uFDD0'counting":false,"\uFDD0'count":(function (){var or__2074__auto__ = count;
if(cljs.core.truth_(or__2074__auto__))
{return or__2074__auto__;
} else
{return 0;
}
})()};
});
game.comps.keyboard = (function keyboard(){
return {"name":"\uFDD0'keyboard"};
});
game.comps.facing = (function facing(){
return {"name":"\uFDD0'facing","\uFDD0'dir":"\uFDD0'right"};
});
game.comps.hint = (function hint(hint__$1){
return {"name":"\uFDD0'hint","\uFDD0'hint":hint__$1};
});
game.comps.func_activate = (function func_activate(func){
return {"name":"\uFDD0'func-activate","\uFDD0'fn":func};
});
