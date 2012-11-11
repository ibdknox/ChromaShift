goog.provide('game.util');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('game.lib.core');
goog.require('jayq.core');
goog.require('game.lib.physics');
game.util.brush = null;
game.util.offset = 100000;
game.util.opponent_QMARK_ = false;
game.util.width = 1000;
game.util.height = 500;
game.util.resize = (function resize(w,h){
game.util.width = w;
game.util.height = h;
jayq.core.attr.call(null,jayq.core.$.call(null,"#game"),"\uFDD0'width",w);
jayq.core.attr.call(null,jayq.core.$.call(null,"#game"),"\uFDD0'height",h);
jayq.core.attr.call(null,jayq.core.$.call(null,"#opponent-game"),"\uFDD0'width",w);
return jayq.core.attr.call(null,jayq.core.$.call(null,"#opponent-game"),"\uFDD0'height",h);
});
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
