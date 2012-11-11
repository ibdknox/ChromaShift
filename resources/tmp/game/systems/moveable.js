goog.provide('game.systems.moveable');
goog.require('cljs.core');
goog.require('game.lib.core');
goog.require('game.util');
goog.require('game.lib.physics');
goog.require('game.util');
goog.require('game.lib.core');
game.systems.moveable.key_QMARK_ = input.key;
game.systems.moveable.foot_QMARK_ = (function foot_QMARK_(a,b){
var adata = a.GetUserData();
var bdata = b.GetUserData();
if(cljs.core._EQ_.call(null,adata,"\uFDD0'foot"))
{return cljs.core.PersistentVector.fromArray([a,b], true);
} else
{if(cljs.core._EQ_.call(null,bdata,"\uFDD0'foot"))
{return cljs.core.PersistentVector.fromArray([b,a], true);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
game.systems.moveable.on_foot = (function on_foot(a,b){
var temp__2223__auto__ = game.systems.moveable.foot_QMARK_.call(null,a,b);
if(cljs.core.truth_(temp__2223__auto__))
{var vec__4606 = temp__2223__auto__;
var f = cljs.core.nth.call(null,vec__4606,0,null);
var g = cljs.core.nth.call(null,vec__4606,1,null);
if(cljs.core.truth_(game.lib.core.has_QMARK_.call(null,game.lib.physics.fix__GT_ent.call(null,g),"\uFDD0'solid")))
{var jump = Game.as(game.lib.physics.fix__GT_ent.call(null,f),"\uFDD0'jump");
(jump["\uFDD0'ground-count"] = ((jump["\uFDD0'ground-count"]) + 1));
return (jump["\uFDD0'ground"] = true);
} else
{return null;
}
} else
{return null;
}
});
game.systems.moveable.off_foot = (function off_foot(a,b){
var temp__2223__auto__ = game.systems.moveable.foot_QMARK_.call(null,a,b);
if(cljs.core.truth_(temp__2223__auto__))
{var vec__4608 = temp__2223__auto__;
var f = cljs.core.nth.call(null,vec__4608,0,null);
var g = cljs.core.nth.call(null,vec__4608,1,null);
if(cljs.core.truth_(game.lib.core.has_QMARK_.call(null,game.lib.physics.fix__GT_ent.call(null,g),"\uFDD0'solid")))
{var jump = Game.as(game.lib.physics.fix__GT_ent.call(null,f),"\uFDD0'jump");
(jump["\uFDD0'ground-count"] = ((jump["\uFDD0'ground-count"]) - 1));
if(cljs.core._EQ_.call(null,(jump["\uFDD0'ground-count"]),0))
{return (jump["\uFDD0'ground"] = false);
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
});
game.systems.moveable.side_QMARK_ = (function side_QMARK_(a,b){
var adata = a.GetUserData();
var bdata = b.GetUserData();
if(cljs.core._EQ_.call(null,adata,"\uFDD0'left-side"))
{return cljs.core.PersistentVector.fromArray(["\uFDD0'left",a,b], true);
} else
{if(cljs.core._EQ_.call(null,bdata,"\uFDD0'left-side"))
{return cljs.core.PersistentVector.fromArray(["\uFDD0'left",b,a], true);
} else
{if(cljs.core._EQ_.call(null,adata,"\uFDD0'right-side"))
{return cljs.core.PersistentVector.fromArray(["\uFDD0'right",a,b], true);
} else
{if(cljs.core._EQ_.call(null,bdata,"\uFDD0'right-side"))
{return cljs.core.PersistentVector.fromArray(["\uFDD0'right",b,a], true);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
});
game.systems.moveable.on_side = (function on_side(a,b){
var temp__2223__auto__ = game.systems.moveable.side_QMARK_.call(null,a,b);
if(cljs.core.truth_(temp__2223__auto__))
{var vec__4610 = temp__2223__auto__;
var side = cljs.core.nth.call(null,vec__4610,0,null);
var s = cljs.core.nth.call(null,vec__4610,1,null);
var g = cljs.core.nth.call(null,vec__4610,2,null);
var blocked = Game.as(game.lib.physics.fix__GT_ent.call(null,s),"\uFDD0'blocked");
if(cljs.core.truth_((function (){var and__2072__auto__ = blocked;
if(cljs.core.truth_(and__2072__auto__))
{return game.lib.core.has_QMARK_.call(null,game.lib.physics.fix__GT_ent.call(null,g),"\uFDD0'solid");
} else
{return and__2072__auto__;
}
})()))
{console.log([cljs.core.str("Touching "),cljs.core.str(side)].join(''));
return (blocked[side] = true);
} else
{return null;
}
} else
{return null;
}
});
game.systems.moveable.off_side = (function off_side(a,b){
var temp__2223__auto__ = game.systems.moveable.side_QMARK_.call(null,a,b);
if(cljs.core.truth_(temp__2223__auto__))
{var vec__4612 = temp__2223__auto__;
var side = cljs.core.nth.call(null,vec__4612,0,null);
var s = cljs.core.nth.call(null,vec__4612,1,null);
var g = cljs.core.nth.call(null,vec__4612,2,null);
var blocked = Game.as(game.lib.physics.fix__GT_ent.call(null,s),"\uFDD0'blocked");
if(cljs.core.truth_((function (){var and__2072__auto__ = blocked;
if(cljs.core.truth_(and__2072__auto__))
{return game.lib.core.has_QMARK_.call(null,game.lib.physics.fix__GT_ent.call(null,g),"\uFDD0'solid");
} else
{return and__2072__auto__;
}
})()))
{return (blocked[side] = false);
} else
{return null;
}
} else
{return null;
}
});
game.systems.moveable.keyboard = (function keyboard(ents){
var c__4106__auto__ = cljs.core.count.call(null,ents);
var i__4107__auto__ = 0;
while(true){
if((i__4107__auto__ < c__4106__auto__))
{var e = (ents[i__4107__auto__]);
var actions = Game.as(e,"\uFDD0'player-actions");
(actions["\uFDD0'jump"] = false);
(actions["\uFDD0'move-left"] = false);
(actions["\uFDD0'move-right"] = false);
(actions["\uFDD0'chroma"] = false);
if(cljs.core.truth_((actions["\uFDD0'can-act?"])))
{if(cljs.core.truth_(game.systems.moveable.key_QMARK_.call(null,"\uFDD0'left")))
{(actions["\uFDD0'move-left"] = true);
} else
{if(cljs.core.truth_(game.systems.moveable.key_QMARK_.call(null,"\uFDD0'right")))
{(actions["\uFDD0'move-right"] = true);
} else
{}
}
if(cljs.core.truth_(game.systems.moveable.key_QMARK_.call(null,"\uFDD0'z")))
{(actions["\uFDD0'chroma"] = true);
} else
{}
if(cljs.core.truth_(game.systems.moveable.key_QMARK_.call(null,"\uFDD0'space")))
{(actions["\uFDD0'jump"] = true);
} else
{}
} else
{}
{
var G__4613 = (i__4107__auto__ + 1);
i__4107__auto__ = G__4613;
continue;
}
} else
{return null;
}
break;
}
});
game.systems.moveable.jump = (function jump(ents){
var c__4106__auto__ = cljs.core.count.call(null,ents);
var i__4107__auto__ = 0;
while(true){
if((i__4107__auto__ < c__4106__auto__))
{var e = (ents[i__4107__auto__]);
var actions = Game.as(e,"\uFDD0'player-actions");
var jump__$1 = Game.as(e,"\uFDD0'jump");
(jump__$1["\uFDD0'prev-falling"] = (jump__$1["\uFDD0'falling"]));
var v = game.lib.physics.__GT_velocity.call(null,e);
if((function (){var and__2072__auto__ = cljs.core.not.call(null,(jump__$1["\uFDD0'ground"]));
if(and__2072__auto__)
{return (v.y > 0);
} else
{return and__2072__auto__;
}
})())
{(jump__$1["\uFDD0'falling"] = true);
} else
{(jump__$1["\uFDD0'falling"] = false);
}
if(((jump__$1["\uFDD0'count"]) > 0))
{(jump__$1["\uFDD0'count"] = ((jump__$1["\uFDD0'count"]) - 1));
} else
{if(cljs.core.truth_((function (){var and__2072__auto__ = (actions["\uFDD0'jump"]);
if(cljs.core.truth_(and__2072__auto__))
{var and__2072__auto____$1 = cljs.core._EQ_.call(null,(jump__$1["\uFDD0'count"]),0);
if(and__2072__auto____$1)
{return (jump__$1["\uFDD0'ground"]);
} else
{return and__2072__auto____$1;
}
} else
{return and__2072__auto__;
}
})()))
{game.lib.physics.impulse.call(null,e,0,-35);
(jump__$1["\uFDD0'count"] = 15);
} else
{}
}
{
var G__4614 = (i__4107__auto__ + 1);
i__4107__auto__ = G__4614;
continue;
}
} else
{return null;
}
break;
}
});
game.systems.moveable.move = (function move(ents){
var c__4106__auto__ = cljs.core.count.call(null,ents);
var i__4107__auto__ = 0;
while(true){
if((i__4107__auto__ < c__4106__auto__))
{var e = (ents[i__4107__auto__]);
var actions = Game.as(e,"\uFDD0'player-actions");
var facing = Game.as(e,"\uFDD0'facing");
var blocked = Game.as(e,"\uFDD0'blocked");
if(cljs.core.truth_((actions["\uFDD0'move-left"])))
{(facing["\uFDD0'dir"] = "\uFDD0'left");
} else
{}
if(cljs.core.truth_((actions["\uFDD0'move-right"])))
{(facing["\uFDD0'dir"] = "\uFDD0'right");
} else
{}
if(cljs.core.truth_((function (){var and__2072__auto__ = (actions["\uFDD0'move-left"]);
if(cljs.core.truth_(and__2072__auto__))
{return cljs.core.not.call(null,(blocked["\uFDD0'left"]));
} else
{return and__2072__auto__;
}
})()))
{game.lib.physics.velocity.call(null,e,-8,null);
} else
{if(cljs.core.truth_((function (){var and__2072__auto__ = (actions["\uFDD0'move-right"]);
if(cljs.core.truth_(and__2072__auto__))
{return cljs.core.not.call(null,(blocked["\uFDD0'right"]));
} else
{return and__2072__auto__;
}
})()))
{game.lib.physics.velocity.call(null,e,8,null);
} else
{if("\uFDD0'else")
{game.lib.physics.velocity.call(null,e,0,null);
} else
{}
}
}
{
var G__4615 = (i__4107__auto__ + 1);
i__4107__auto__ = G__4615;
continue;
}
} else
{return null;
}
break;
}
});
game.systems.moveable.set_anim = (function set_anim(anim,facing,root,frame){
(anim["\uFDD0'animation"] = game.util.kstr.call(null,root,(facing["\uFDD0'dir"])));
(anim["\uFDD0'frame"] = (function (){var or__2074__auto__ = frame;
if(cljs.core.truth_(or__2074__auto__))
{return or__2074__auto__;
} else
{return -1;
}
})());
return (anim["\uFDD0'count"] = 0);
});
game.systems.moveable.animate_actions = (function animate_actions(ents){
var c__4106__auto__ = cljs.core.count.call(null,ents);
var i__4107__auto__ = 0;
while(true){
if((i__4107__auto__ < c__4106__auto__))
{var e = (ents[i__4107__auto__]);
var actions = Game.as(e,"\uFDD0'player-actions");
var anim = Game.as(e,"\uFDD0'animated");
var facing = Game.as(e,"\uFDD0'facing");
var jump = Game.as(e,"\uFDD0'jump");
if(cljs.core.truth_((actions["\uFDD0'can-act?"])))
{if(cljs.core.truth_((function (){var and__2072__auto__ = (jump["\uFDD0'falling"]);
if(cljs.core.truth_(and__2072__auto__))
{return cljs.core.not.call(null,(jump["\uFDD0'prev-falling"]));
} else
{return and__2072__auto__;
}
})()))
{game.systems.moveable.set_anim.call(null,anim,facing,"\uFDD0'falling-");
} else
{if(cljs.core.truth_((jump["\uFDD0'falling"])))
{(anim["\uFDD0'animation"] = game.util.kstr.call(null,"\uFDD0'falling-",(facing["\uFDD0'dir"])));
} else
{if(cljs.core.truth_((function (){var and__2072__auto__ = (actions["\uFDD0'jump"]);
if(cljs.core.truth_(and__2072__auto__))
{return (jump["\uFDD0'ground"]);
} else
{return and__2072__auto__;
}
})()))
{game.systems.moveable.set_anim.call(null,anim,facing,"\uFDD0'jump-");
} else
{if(cljs.core.truth_((function (){var and__2072__auto__ = (actions["\uFDD0'jump"]);
if(cljs.core.truth_(and__2072__auto__))
{return ((jump["\uFDD0'count"]) > 0);
} else
{return and__2072__auto__;
}
})()))
{(anim["\uFDD0'animation"] = game.util.kstr.call(null,"\uFDD0'jump-",(facing["\uFDD0'dir"])));
} else
{if(cljs.core.not.call(null,(jump["\uFDD0'ground"])))
{game.systems.moveable.set_anim.call(null,anim,facing,"\uFDD0'jump-");
} else
{if(cljs.core.truth_((actions["\uFDD0'move-left"])))
{(anim["\uFDD0'animation"] = "\uFDD0'running-left");
} else
{if(cljs.core.truth_((actions["\uFDD0'move-right"])))
{(anim["\uFDD0'animation"] = "\uFDD0'running-right");
} else
{if("\uFDD0'else")
{(anim["\uFDD0'animation"] = game.util.kstr.call(null,"\uFDD0'standing-",(facing["\uFDD0'dir"])));
} else
{}
}
}
}
}
}
}
}
} else
{}
{
var G__4616 = (i__4107__auto__ + 1);
i__4107__auto__ = G__4616;
continue;
}
} else
{return null;
}
break;
}
});
game.systems.moveable.bounce = (function bounce(ents){
var c__4106__auto__ = cljs.core.count.call(null,ents);
var i__4107__auto__ = 0;
while(true){
if((i__4107__auto__ < c__4106__auto__))
{var e = (ents[i__4107__auto__]);
var trip = Game.as(e,"\uFDD0'trippable");
var bouncy = Game.as(e,"\uFDD0'bouncy");
if(((bouncy["\uFDD0'count"]) > 0))
{(bouncy["\uFDD0'count"] = ((bouncy["\uFDD0'count"]) - 1));
} else
{if(cljs.core.truth_((trip["\uFDD0'active"])))
{(game.lib.core.as.call(null,(trip["\uFDD0'target"]),"\uFDD0'jump")["\uFDD0'count"] = 15);
(bouncy["\uFDD0'count"] = 20);
game.lib.physics.impulse.call(null,(trip["\uFDD0'target"]),0,-70);
} else
{}
}
{
var G__4617 = (i__4107__auto__ + 1);
i__4107__auto__ = G__4617;
continue;
}
} else
{return null;
}
break;
}
});
