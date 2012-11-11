goog.provide('game.util');
goog.require('cljs.core');
goog.require('game.lib.core');
goog.require('game.lib.physics');
game.util.brush = null;
game.util.offset = 100000;
game.util.adjust_center = (function adjust_center(pos,dim){
return {"\uFDD0'x":((pos["\uFDD0'x"]) - (dim["\uFDD0'hw"])),"\uFDD0'y":((pos["\uFDD0'y"]) - (dim["\uFDD0'hh"]))};
});
game.util.kstr = (function kstr(a,b){
return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,a)),cljs.core.str(cljs.core.name.call(null,b))].join(''));
});
game.util.obj_equal_QMARK_ = Game.equal;
game.util.destroy_BANG_ = (function destroy_BANG_(e){
game.lib.physics.rem_BANG_.call(null,e);
return game.lib.core.rem_BANG_.call(null,e);
});
