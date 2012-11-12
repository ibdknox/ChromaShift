goog.provide('game.flow');
goog.require('cljs.core');
goog.require('game.util');
goog.require('jayq.core');
goog.require('game.lib.util');
goog.require('game.lib.core');
goog.require('game.util');
goog.require('game.lib.util');
goog.require('game.lib.physics');
goog.require('jayq.core');
game.flow.match = (function match(){
return null;
});
game.flow.menu = (function menu(){
return jayq.core.fade_out.call(null,jayq.core.$.call(null,"#game-container"),500,(function (){
game.lib.physics.clear_BANG_.call(null);
game.lib.core.clear_BANG_.call(null);
jayq.core.fade_out.call(null,jayq.core.$.call(null,"#win"),"fast");
jayq.core.fade_out.call(null,jayq.core.$.call(null,"#lose"),"fast");
return jayq.core.fade_in.call(null,jayq.core.$.call(null,"#main-page"),"fast");
}));
});
game.flow.learn = (function learn(){
return jayq.core.fade_out.call(null,jayq.core.$.call(null,"#main-page"),500,(function (){
game.lib.physics.clear_BANG_.call(null);
game.lib.core.clear_BANG_.call(null);
jayq.core.hide.call(null,jayq.core.$.call(null,"#opponent-game"));
game.util.opponent_QMARK_ = false;
game.lib.core.load_scene.call(null,game.levels.learn.level());
game.util.resize.call(null,1000,500);
return jayq.core.fade_in.call(null,jayq.core.$.call(null,"#game-container"),"fast");
}));
});
game.flow.match = (function match(){
return jayq.core.fade_out.call(null,jayq.core.$.call(null,"#main-page"),500,(function (){
game.lib.physics.clear_BANG_.call(null);
game.lib.core.clear_BANG_.call(null);
jayq.core.fade_in.call(null,jayq.core.$.call(null,"#searching"),"fast");
return game.systems.sync.queue();
}));
});
game.flow.match_found = (function match_found(level){
return jayq.core.fade_out.call(null,jayq.core.$.call(null,"#searching"),500,(function (){
game.lib.physics.clear_BANG_.call(null);
game.lib.core.clear_BANG_.call(null);
game.lib.core.load_scene.call(null,(game.levels[level]).level());
game.util.resize.call(null,500,500);
jayq.core.show.call(null,jayq.core.$.call(null,"#opponent-game"));
game.util.opponent_QMARK_ = true;
return jayq.core.fade_in.call(null,jayq.core.$.call(null,"#game-container"),"fast");
}));
});
game.flow.intro = (function intro(){
return jayq.core.fade_out.call(null,jayq.core.$.call(null,"#loading"),500,(function (){
game.lib.physics.clear_BANG_.call(null);
game.lib.core.clear_BANG_.call(null);
game.lib.core.load_scene.call(null,game.levels.intro.level());
jayq.core.hide.call(null,jayq.core.$.call(null,"#opponent-game"));
game.util.opponent_QMARK_ = false;
game.util.resize.call(null,1000,500);
return jayq.core.fade_in.call(null,jayq.core.$.call(null,"#game-container"),"fast");
}));
});
game.flow.end = (function end(){
game.lib.physics.clear_BANG_.call(null);
game.lib.core.clear_BANG_.call(null);
game.systems.sync.end();
return jayq.core.fade_out.call(null,jayq.core.$.call(null,"#game-container"),"slow");
});
game.flow.win = (function win(){
game.lib.physics.clear_BANG_.call(null);
game.lib.core.clear_BANG_.call(null);
return jayq.core.fade_in.call(null,jayq.core.$.call(null,"#win"),500,(function (){
return game.lib.util.wait.call(null,3000,game.flow.menu);
}));
});
game.flow.lose = (function lose(){
game.lib.physics.clear_BANG_.call(null);
game.lib.core.clear_BANG_.call(null);
jayq.core.fade_out.call(null,jayq.core.$.call(null,"#game-container"),"slow");
return jayq.core.fade_in.call(null,jayq.core.$.call(null,"#lose"),500,(function (){
return game.lib.util.wait.call(null,3000,game.flow.menu);
}));
});
jayq.core.bind.call(null,jayq.core.$.call(null,"#learn"),"\uFDD0'click",game.flow.learn);
jayq.core.bind.call(null,jayq.core.$.call(null,"#fight"),"\uFDD0'click",game.flow.match);
