goog.provide('game.entities.background');
goog.require('cljs.core');
goog.require('game.util');
goog.require('game.lib.core');
goog.require('game.util');
goog.require('game.lib.core');
game.entities.background.render_normal = (function render_normal(ent){
var pos = Game.as(ent,"\uFDD0'position");
var dim = Game.as(ent,"\uFDD0'dimensions");
game.util.brush.fillStyle("black");
return game.util.brush.rect(game.lib.core._GT__LT_.call(null,game.util.adjust_center.call(null,pos,dim),dim));
});
