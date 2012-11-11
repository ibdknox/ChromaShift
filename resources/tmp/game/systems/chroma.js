goog.provide('game.systems.chroma');
goog.require('cljs.core');
goog.require('game.lib.core');
goog.require('game.util');
goog.require('game.util');
goog.require('game.lib.physics');
goog.require('game.lib.core');
game.systems.chroma.color = "\uFDD0'blue";
game.systems.chroma.opponent_color = "\uFDD0'green";
game.systems.chroma.flip_active = (function flip_active(color,active){
var c__2909__auto__ = cljs.core.count.call(null,game.lib.core.all_e.call(null,"\uFDD0'chroma-activated"));
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (game.lib.core.all_e.call(null,"\uFDD0'chroma-activated")[i__2910__auto__]);
var chroma = Game.as(e,"\uFDD0'chroma-activated");
if(cljs.core._EQ_.call(null,(chroma["\uFDD0'color"]),color))
{(chroma["\uFDD0'active"] = active);
} else
{}
{
var G__58122 = (i__2910__auto__ + 1);
i__2910__auto__ = G__58122;
continue;
}
} else
{return null;
}
break;
}
});
game.systems.chroma.chroma = (function chroma(ents){
var c__2909__auto__ = cljs.core.count.call(null,ents);
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (ents[i__2910__auto__]);
var actions = Game.as(e,"\uFDD0'player-actions");
var chroma__$1 = Game.as(e,"\uFDD0'chroma");
if(((chroma__$1["\uFDD0'count"]) > 0))
{(chroma__$1["\uFDD0'count"] = ((chroma__$1["\uFDD0'count"]) - 1));
} else
{if(cljs.core.truth_((actions["\uFDD0'chroma"])))
{console.log("color switch");
(chroma__$1["\uFDD0'active"] = cljs.core.not.call(null,(chroma__$1["\uFDD0'active"])));
(chroma__$1["\uFDD0'count"] = 20);
game.systems.chroma.flip_active.call(null,(chroma__$1["\uFDD0'color"]),(chroma__$1["\uFDD0'active"]));
} else
{}
}
{
var G__58123 = (i__2910__auto__ + 1);
i__2910__auto__ = G__58123;
continue;
}
} else
{return null;
}
break;
}
});
game.systems.chroma.chroma_physics = (function chroma_physics(ents){
var c__2909__auto__ = cljs.core.count.call(null,ents);
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (ents[i__2910__auto__]);
var chroma = Game.as(e,"\uFDD0'chroma-activated");
var body = Game.as(e,"\uFDD0'body");
var body__$1 = (body["\uFDD0'body"]);
if(cljs.core.truth_((chroma["\uFDD0'active"])))
{body__$1.SetActive(true);
} else
{body__$1.SetActive(false);
}
{
var G__58124 = (i__2910__auto__ + 1);
i__2910__auto__ = G__58124;
continue;
}
} else
{return null;
}
break;
}
});
game.systems.chroma.chromatons = (function chromatons(ents){
var c__2909__auto__ = cljs.core.count.call(null,ents);
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (ents[i__2910__auto__]);
var value = Game.as(e,"\uFDD0'chromaton");
var trip = Game.as(e,"\uFDD0'trippable");
if(cljs.core.truth_((trip["\uFDD0'active"])))
{var points = Game.as((trip["\uFDD0'target"]),"\uFDD0'points");
(points["\uFDD0'points"] = ((points["\uFDD0'points"]) + (value["\uFDD0'value"])));
game.util.destroy_BANG_.call(null,e);
} else
{}
{
var G__58125 = (i__2910__auto__ + 1);
i__2910__auto__ = G__58125;
continue;
}
} else
{return null;
}
break;
}
});
