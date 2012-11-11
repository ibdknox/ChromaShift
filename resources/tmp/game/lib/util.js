goog.provide('game.lib.util');
goog.require('cljs.core');
game.lib.util.every = (function every(ms,func){
return setInterval(func,ms);
});
game.lib.util.wait = (function wait(ms,func){
return setTimeout(func,ms);
});
game.lib.util.now = (function now(){
return (new Date()).getTime();
});
