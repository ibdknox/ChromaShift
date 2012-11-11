goog.provide('game.systems.health');
goog.require('cljs.core');
goog.require('game.lib.core');
goog.require('game.lib.physics');
goog.require('game.lib.core');
game.systems.health.off_map_death = (function off_map_death(ents){
var c__2909__auto__ = cljs.core.count.call(null,ents);
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (ents[i__2910__auto__]);
var pos = Game.as(e,"\uFDD0'position");
var health = Game.as(e,"\uFDD0'health");
if(((pos["\uFDD0'y"]) > 1000))
{(health["\uFDD0'dead"] = true);
} else
{}
{
var G__64980 = (i__2910__auto__ + 1);
i__2910__auto__ = G__64980;
continue;
}
} else
{return null;
}
break;
}
});
game.systems.health.trippable_death = (function trippable_death(ents){
var c__2909__auto__ = cljs.core.count.call(null,ents);
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (ents[i__2910__auto__]);
var trip = Game.as(e,"\uFDD0'trippable");
if(cljs.core.truth_((trip["\uFDD0'active"])))
{var health = Game.as((trip["\uFDD0'target"]),"\uFDD0'health");
(health["\uFDD0'dead"] = true);
} else
{}
{
var G__64981 = (i__2910__auto__ + 1);
i__2910__auto__ = G__64981;
continue;
}
} else
{return null;
}
break;
}
});
game.systems.health.kill = (function kill(ents){
var c__2909__auto__ = cljs.core.count.call(null,ents);
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (ents[i__2910__auto__]);
var health = Game.as(e,"\uFDD0'health");
var pos = Game.as(e,"\uFDD0'position");
var actions = Game.as(e,"\uFDD0'player-actions");
var anim = Game.as(e,"\uFDD0'animated");
var spawn = Game.as(e,"\uFDD0'spawn");
if(cljs.core.truth_((health["\uFDD0'dead"])))
{if(cljs.core.not.call(null,(health["\uFDD0'count"])))
{(health["\uFDD0'count"] = 60);
(actions["\uFDD0'can-act?"] = false);
(anim["\uFDD0'animation"] = "\uFDD0'death");
(anim["\uFDD0'count"] = 0);
(anim["\uFDD0'frame"] = -1);
} else
{if(cljs.core._EQ_.call(null,(health["\uFDD0'count"]),0))
{(health["\uFDD0'count"] = false);
(health["\uFDD0'dead"] = false);
(spawn["\uFDD0'respawn"] = true);
} else
{if("\uFDD0'else")
{(health["\uFDD0'count"] = ((health["\uFDD0'count"]) - 1));
} else
{}
}
}
} else
{}
{
var G__64982 = (i__2910__auto__ + 1);
i__2910__auto__ = G__64982;
continue;
}
} else
{return null;
}
break;
}
});
game.systems.health.trippable_and_player_QMARK_ = (function trippable_and_player_QMARK_(a,b){
var a__$1 = game.lib.physics.fix__GT_ent.call(null,a);
var b__$1 = game.lib.physics.fix__GT_ent.call(null,b);
if(cljs.core.truth_((function (){var and__2072__auto__ = game.lib.core.has_QMARK_.call(null,a__$1,"\uFDD0'player");
if(cljs.core.truth_(and__2072__auto__))
{return game.lib.core.has_QMARK_.call(null,b__$1,"\uFDD0'trippable");
} else
{return and__2072__auto__;
}
})()))
{return cljs.core.PersistentVector.fromArray([a__$1,b__$1], true);
} else
{if(cljs.core.truth_((function (){var and__2072__auto__ = game.lib.core.has_QMARK_.call(null,b__$1,"\uFDD0'player");
if(cljs.core.truth_(and__2072__auto__))
{return game.lib.core.has_QMARK_.call(null,a__$1,"\uFDD0'trippable");
} else
{return and__2072__auto__;
}
})()))
{return cljs.core.PersistentVector.fromArray([b__$1,a__$1], true);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
game.systems.health.on_trip = (function on_trip(a,b){
var temp__2223__auto__ = game.systems.health.trippable_and_player_QMARK_.call(null,a,b);
if(cljs.core.truth_(temp__2223__auto__))
{var vec__64984 = temp__2223__auto__;
var p = cljs.core.nth.call(null,vec__64984,0,null);
var t = cljs.core.nth.call(null,vec__64984,1,null);
var trip = Game.as(t,"\uFDD0'trippable");
(trip["\uFDD0'target"] = p);
return (trip["\uFDD0'active"] = true);
} else
{return null;
}
});
game.systems.health.off_trip = (function off_trip(a,b){
var temp__2223__auto__ = game.systems.health.trippable_and_player_QMARK_.call(null,a,b);
if(cljs.core.truth_(temp__2223__auto__))
{var vec__64986 = temp__2223__auto__;
var p = cljs.core.nth.call(null,vec__64986,0,null);
var t = cljs.core.nth.call(null,vec__64986,1,null);
var trip = Game.as(t,"\uFDD0'trippable");
(trip["\uFDD0'target"] = null);
return (trip["\uFDD0'active"] = false);
} else
{return null;
}
});
game.systems.health.death_conditions = (function death_conditions(ents){
game.systems.health.off_map_death.call(null,ents);
return game.systems.health.trippable_death.call(null,game.lib.core.all_e.call(null,"\uFDD0'deadly"));
});
game.systems.health.spawn = (function spawn(ents){
var c__2909__auto__ = cljs.core.count.call(null,ents);
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (ents[i__2910__auto__]);
var spawn__$1 = Game.as(e,"\uFDD0'spawn");
var actions = Game.as(e,"\uFDD0'player-actions");
var pos = Game.as(e,"\uFDD0'position");
if(cljs.core.truth_((spawn__$1["\uFDD0'respawn"])))
{game.lib.physics.set_position.call(null,e,(spawn__$1["\uFDD0'x"]),(spawn__$1["\uFDD0'y"]));
(pos["\uFDD0'x"] = (spawn__$1["\uFDD0'x"]));
(pos["\uFDD0'y"] = (spawn__$1["\uFDD0'y"]));
(actions["\uFDD0'can-act?"] = true);
(spawn__$1["\uFDD0'respawn"] = false);
} else
{}
{
var G__64987 = (i__2910__auto__ + 1);
i__2910__auto__ = G__64987;
continue;
}
} else
{return null;
}
break;
}
});
