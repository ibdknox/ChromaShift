goog.provide('game.renderers');
goog.require('cljs.core');
goog.require('game.util');
goog.require('game.lib.core');
goog.require('game.comps');
goog.require('game.comps');
goog.require('game.entities.background');
goog.require('game.lib.assets');
goog.require('game.systems.chroma');
goog.require('game.flow');
goog.require('game.systems.sync');
goog.require('game.util');
goog.require('game.lib.physics');
goog.require('game.lib.core');
game.renderers.__GT_color = cljs.core.ObjMap.fromObject(["\uFDD0'blue","\uFDD0'green"],{"\uFDD0'blue":"#33a3ff","\uFDD0'green":"#50f050"});
game.renderers.load_clear = (function load_clear(scene){
game.lib.physics.clear_BANG_.call(null);
return game.lib.core.load_scene.call(null,scene);
});
game.renderers.render_player = (function render_player(ent){
var pos = Game.as(ent,"\uFDD0'position");
var dim = Game.as(ent,"\uFDD0'dimensions");
var chroma = Game.as(ent,"\uFDD0'chroma");
var color = (cljs.core.truth_((chroma["\uFDD0'active"]))?game.renderers.__GT_color.call(null,(chroma["\uFDD0'color"])):"#666");
game.util.brush.fillStyle(color);
return game.util.brush.rect(game.lib.core._GT__LT_.call(null,game.util.adjust_center.call(null,pos,dim),dim));
});
game.renderers.render_ground = (function render_ground(ent){
var pos = Game.as(ent,"\uFDD0'position");
var dim = Game.as(ent,"\uFDD0'dimensions");
game.util.brush.fillStyle("#666");
return game.util.brush.rect(game.lib.core._GT__LT_.call(null,game.util.adjust_center.call(null,pos,dim),dim));
});
game.renderers.render_chroma_ground = (function render_chroma_ground(ent){
var pos = Game.as(ent,"\uFDD0'position");
var dim = Game.as(ent,"\uFDD0'dimensions");
var chroma = Game.as(ent,"\uFDD0'chroma-activated");
game.util.brush.save();
if(cljs.core.truth_((chroma["\uFDD0'active"])))
{} else
{game.util.brush.opacity(0.4);
}
game.util.brush.fillStyle(game.renderers.__GT_color.call(null,(chroma["\uFDD0'color"])));
game.util.brush.rect(game.lib.core._GT__LT_.call(null,game.util.adjust_center.call(null,pos,dim),dim));
return game.util.brush.restore();
});
game.renderers.render_mine = (function render_mine(ent){
var pos = Game.as(ent,"\uFDD0'position");
var dim = Game.as(ent,"\uFDD0'dimensions");
var chroma = Game.as(ent,"\uFDD0'chroma-activated");
var img = game.util.kstr.call(null,(chroma["\uFDD0'color"]),"landmine");
game.util.brush.save();
if(cljs.core.truth_((chroma["\uFDD0'active"])))
{} else
{game.util.brush.opacity(0.5);
}
game.util.brush.image((new cljs.core.Keyword("\uFDD0'elem")).call(null,img.call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),game.util.adjust_center.call(null,pos,dim));
return game.util.brush.restore();
});
game.renderers.render_hint = (function render_hint(ent){
var pos = Game.as(ent,"\uFDD0'position");
var dim = Game.as(ent,"\uFDD0'dimensions");
var hint = Game.as(ent,"\uFDD0'hint");
var trip = Game.as(ent,"\uFDD0'trippable");
if(cljs.core.truth_((function (){var or__2074__auto__ = cljs.core.not.call(null,trip);
if(or__2074__auto__)
{return or__2074__auto__;
} else
{return (trip["\uFDD0'active"]);
}
})()))
{game.util.brush.fillStyle("#fff");
game.util.brush.font("14pt Share Tech");
return game.util.brush.text(game.util.adjust_center.call(null,pos,dim),(hint["\uFDD0'hint"]));
} else
{return null;
}
});
game.renderers.render_chromaton = (function render_chromaton(ent){
var pos = Game.as(ent,"\uFDD0'position");
var dim = Game.as(ent,"\uFDD0'dimensions");
game.util.brush.save();
game.util.brush.opacity(0.8);
game.util.brush.image((new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'chromaton")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),game.util.adjust_center.call(null,pos,dim));
return game.util.brush.restore();
});
game.renderers.render_goal = (function render_goal(ent){
var pos = Game.as(ent,"\uFDD0'position");
var dim = Game.as(ent,"\uFDD0'dimensions");
game.util.brush.save();
game.util.brush.opacity(0.8);
game.util.brush.image((new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'goal")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),game.util.adjust_center.call(null,pos,dim));
return game.util.brush.restore();
});
game.renderers.render_score = (function render_score(ent){
var player = cljs.core.first.call(null,game.lib.core.all_e.call(null,"\uFDD0'player"));
var pos = Game.as(ent,"\uFDD0'position");
var points = Game.as(player,"\uFDD0'points");
game.util.brush.fillStyle("#fff");
game.util.brush.font("14pt Share Tech");
return game.util.brush.text(pos,[cljs.core.str((points["\uFDD0'points"]))].join(''));
});
game.renderers.s = game.lib.assets.load_set.call(null,"\uFDD0'test",cljs.core.ObjMap.fromObject(["\uFDD0'bluelandmine","\uFDD0'bluerunning","\uFDD0'greenlandmine","\uFDD0'greenjumping","\uFDD0'greenrunning","\uFDD0'goal","\uFDD0'bluejumping","\uFDD0'bluedeath","\uFDD0'greendeath","\uFDD0'chromaton","\uFDD0'greenstanding","\uFDD0'bluestanding"],{"\uFDD0'bluelandmine":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/bluelandmine.png"}),"\uFDD0'bluerunning":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/bluerunning.png"}),"\uFDD0'greenlandmine":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/greenlandmine.png"}),"\uFDD0'greenjumping":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/greenjumping.png"}),"\uFDD0'greenrunning":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/greenrunning.png"}),"\uFDD0'goal":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/goal.png"}),"\uFDD0'bluejumping":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/bluejumping.png"}),"\uFDD0'bluedeath":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/bluedeath.png"}),"\uFDD0'greendeath":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/greendeath.png"}),"\uFDD0'chromaton":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/chromaton.png"}),"\uFDD0'greenstanding":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/greenstanding.png"}),"\uFDD0'bluestanding":cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'src"],{"\uFDD0'type":"\uFDD0'image","\uFDD0'src":"/assets/img/bluestanding.png"})}),(function (){
game.renderers.init.call(null);
return game.flow.intro.call(null);
}));
game.renderers.init = (function init(){
game.renderers.blue_anim = cljs.core.ObjMap.fromObject(["\uFDD0'jump-left","\uFDD0'falling-left","\uFDD0'running-right","\uFDD0'standing-right","\uFDD0'jump-right","\uFDD0'falling-right","\uFDD0'running-left","\uFDD0'standing-left","\uFDD0'death"],{"\uFDD0'jump-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":1,"\uFDD0'speed":15,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluejumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":210,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'falling-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":2,"\uFDD0'speed":5,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluejumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":114,"\uFDD0'y":210,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'running-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":11,"\uFDD0'speed":3,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluerunning")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":140,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'standing-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":0,"\uFDD0'speed":0,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluestanding")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":140,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'jump-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":1,"\uFDD0'speed":15,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluejumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":140,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'falling-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":2,"\uFDD0'speed":5,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluejumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":114,"\uFDD0'y":140,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'running-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":11,"\uFDD0'speed":3,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluerunning")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":210,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'standing-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":0,"\uFDD0'speed":0,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluestanding")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":210,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'death":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":10,"\uFDD0'speed":3,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluedeath")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":70,"\uFDD0'w":68,"\uFDD0'h":93})});
game.renderers.blue_anim_off = cljs.core.ObjMap.fromObject(["\uFDD0'jump-left","\uFDD0'falling-left","\uFDD0'running-right","\uFDD0'standing-right","\uFDD0'jump-right","\uFDD0'falling-right","\uFDD0'running-left","\uFDD0'standing-left","\uFDD0'death"],{"\uFDD0'jump-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":1,"\uFDD0'speed":15,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluejumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":70,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'falling-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":2,"\uFDD0'speed":5,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluejumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":114,"\uFDD0'y":70,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'running-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":11,"\uFDD0'speed":3,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluerunning")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'standing-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":0,"\uFDD0'speed":0,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluestanding")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'jump-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":1,"\uFDD0'speed":15,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluejumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'falling-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":2,"\uFDD0'speed":5,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluejumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":114,"\uFDD0'y":0,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'running-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":11,"\uFDD0'speed":3,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluerunning")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":70,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'standing-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":0,"\uFDD0'speed":0,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluestanding")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":70,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'death":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":10,"\uFDD0'speed":3,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'bluedeath")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'w":68,"\uFDD0'h":93})});
game.renderers.green_anim = cljs.core.ObjMap.fromObject(["\uFDD0'jump-left","\uFDD0'falling-left","\uFDD0'running-right","\uFDD0'standing-right","\uFDD0'jump-right","\uFDD0'falling-right","\uFDD0'running-left","\uFDD0'standing-left","\uFDD0'death"],{"\uFDD0'jump-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":1,"\uFDD0'speed":15,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenjumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":210,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'falling-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":2,"\uFDD0'speed":5,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenjumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":114,"\uFDD0'y":210,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'running-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":11,"\uFDD0'speed":3,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenrunning")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":140,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'standing-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":0,"\uFDD0'speed":0,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenstanding")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":140,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'jump-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":1,"\uFDD0'speed":15,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenjumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":140,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'falling-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":2,"\uFDD0'speed":5,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenjumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":114,"\uFDD0'y":140,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'running-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":11,"\uFDD0'speed":3,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenrunning")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":210,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'standing-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":0,"\uFDD0'speed":0,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenstanding")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":210,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'death":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":10,"\uFDD0'speed":3,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greendeath")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":70,"\uFDD0'w":68,"\uFDD0'h":93})});
game.renderers.green_anim_off = cljs.core.ObjMap.fromObject(["\uFDD0'jump-left","\uFDD0'falling-left","\uFDD0'running-right","\uFDD0'standing-right","\uFDD0'jump-right","\uFDD0'falling-right","\uFDD0'running-left","\uFDD0'standing-left","\uFDD0'death"],{"\uFDD0'jump-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":1,"\uFDD0'speed":15,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenjumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":70,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'falling-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":2,"\uFDD0'speed":5,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenjumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":114,"\uFDD0'y":70,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'running-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":11,"\uFDD0'speed":3,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenrunning")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'standing-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":0,"\uFDD0'speed":0,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenstanding")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'jump-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":1,"\uFDD0'speed":15,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenjumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'falling-right":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":2,"\uFDD0'speed":5,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenjumping")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":114,"\uFDD0'y":0,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'running-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":11,"\uFDD0'speed":3,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenrunning")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":70,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'standing-left":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":0,"\uFDD0'speed":0,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greenstanding")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":70,"\uFDD0'w":57,"\uFDD0'h":70}),"\uFDD0'death":cljs.core.ObjMap.fromObject(["\uFDD0'frames","\uFDD0'speed","\uFDD0'freeze","\uFDD0'img","\uFDD0'x","\uFDD0'y","\uFDD0'w","\uFDD0'h"],{"\uFDD0'frames":10,"\uFDD0'speed":3,"\uFDD0'freeze":true,"\uFDD0'img":(new cljs.core.Keyword("\uFDD0'elem")).call(null,(new cljs.core.Keyword("\uFDD0'greendeath")).call(null,(new cljs.core.Keyword("\uFDD0'items")).call(null,cljs.core.deref.call(null,game.renderers.s)))),"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'w":68,"\uFDD0'h":93})});
game.renderers.animations = cljs.core.ObjMap.fromObject(["\uFDD0'blue-on","\uFDD0'blue-off","\uFDD0'green-on","\uFDD0'green-off"],{"\uFDD0'blue-on":game.renderers.blue_anim,"\uFDD0'blue-off":game.renderers.blue_anim_off,"\uFDD0'green-on":game.renderers.green_anim,"\uFDD0'green-off":game.renderers.green_anim_off});
});
game.renderers.__GT_anim_set = (function __GT_anim_set(chroma){
return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,(chroma["\uFDD0'color"]))),cljs.core.str("-"),cljs.core.str((cljs.core.truth_((chroma["\uFDD0'active"]))?"on":"off"))].join(''));
});
game.renderers.animate = (function animate(chroma,anim,pos,dim){
var a = game.renderers.animations.call(null,game.renderers.__GT_anim_set.call(null,chroma)).call(null,(anim["\uFDD0'animation"]));
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
game.renderers.draw_image = (function draw_image(ent){
var pos = Game.as(ent,"\uFDD0'position");
var rend = Game.as(ent,"\uFDD0'renderable");
var dim = Game.as(ent,"\uFDD0'dimensions");
var anim = Game.as(ent,"\uFDD0'animated");
var chroma = Game.as(ent,"\uFDD0'chroma");
game.util.brush.save();
game.renderers.animate.call(null,chroma,anim,pos,dim);
return game.util.brush.restore();
});
