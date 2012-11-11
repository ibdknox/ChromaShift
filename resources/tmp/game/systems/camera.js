goog.provide('game.systems.camera');
goog.require('cljs.core');
goog.require('game.util');
goog.require('game.lib.core');
goog.require('game.lib.physics');
goog.require('game.util');
goog.require('game.lib.core');
game.systems.camera.adjust_camera = (function adjust_camera(){
var temp__2223__auto__ = cljs.core.first.call(null,game.lib.core.all_e.call(null,"\uFDD0'camera"));
if(cljs.core.truth_(temp__2223__auto__))
{var camera = temp__2223__auto__;
var pos = Game.as(camera,"\uFDD0'position");
var dim = Game.as(camera,"\uFDD0'dimensions");
return game.util.brush.translate({"\uFDD0'x":((pos["\uFDD0'x"]) + (dim["\uFDD0'hw"])),"\uFDD0'y":((pos["\uFDD0'y"]) + (0.5 * (dim["\uFDD0'w"])))});
} else
{return null;
}
});
game.systems.camera.follow_player = (function follow_player(player,ents){
if(cljs.core.truth_(player))
{var p_pos = game.lib.core.as.call(null,player,"\uFDD0'position");
var c__2909__auto__ = cljs.core.count.call(null,ents);
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (ents[i__2910__auto__]);
var pos = Game.as(e,"\uFDD0'position");
var dim = Game.as(e,"\uFDD0'dimensions");
if("\uFDD0'else")
{(pos["\uFDD0'x"] = (- (p_pos["\uFDD0'x"])));
} else
{}
(pos["\uFDD0'y"] = (- (p_pos["\uFDD0'y"])));
{
var G__37448 = (i__2910__auto__ + 1);
i__2910__auto__ = G__37448;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
game.systems.camera.renderer = (function renderer(player){
game.util.brush.clearRect({"\uFDD0'w":500,"\uFDD0'h":500});
var c__2909__auto__ = cljs.core.count.call(null,game.lib.core.all_e.call(null,"\uFDD0'backing-layer"));
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (game.lib.core.all_e.call(null,"\uFDD0'backing-layer")[i__2910__auto__]);
var rend = Game.as(e,"\uFDD0'renderable");
(rend["\uFDD0'fn"]).call(null,e);
{
var G__37449 = (i__2910__auto__ + 1);
i__2910__auto__ = G__37449;
continue;
}
} else
{}
break;
}
game.util.brush.save();
game.systems.camera.adjust_camera.call(null);
var c__2909__auto__ = cljs.core.count.call(null,game.lib.core.all_e.call(null,"\uFDD0'terrain-layer"));
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (game.lib.core.all_e.call(null,"\uFDD0'terrain-layer")[i__2910__auto__]);
var rend = Game.as(e,"\uFDD0'renderable");
(rend["\uFDD0'fn"]).call(null,e);
{
var G__37450 = (i__2910__auto__ + 1);
i__2910__auto__ = G__37450;
continue;
}
} else
{}
break;
}
var c__2909__auto__ = cljs.core.count.call(null,game.lib.core.all_e.call(null,"\uFDD0'object-layer"));
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (game.lib.core.all_e.call(null,"\uFDD0'object-layer")[i__2910__auto__]);
var rend = Game.as(e,"\uFDD0'renderable");
(rend["\uFDD0'fn"]).call(null,e);
{
var G__37451 = (i__2910__auto__ + 1);
i__2910__auto__ = G__37451;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(player))
{var rend = Game.as(player,"\uFDD0'renderable");
return (rend["\uFDD0'fn"]).call(null,player);
} else
{return null;
}
});
game.systems.camera.restore = (function restore(){
game.util.brush.restore();
var c__2909__auto__ = cljs.core.count.call(null,game.lib.core.all_e.call(null,"\uFDD0'overlay-layer"));
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (game.lib.core.all_e.call(null,"\uFDD0'overlay-layer")[i__2910__auto__]);
var rend = Game.as(e,"\uFDD0'renderable");
(rend["\uFDD0'fn"]).call(null,e);
{
var G__37452 = (i__2910__auto__ + 1);
i__2910__auto__ = G__37452;
continue;
}
} else
{return null;
}
break;
}
});
