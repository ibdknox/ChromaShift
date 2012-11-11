goog.provide('game.lib.physics');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('game.lib.core');
goog.require('jayq.core');
goog.require('game.lib.core');
game.lib.physics.b_Vec = Box2D.Common.Math.b2Vec2;
game.lib.physics.b_BodyDef = Box2D.Dynamics.b2BodyDef;
game.lib.physics.b_Body = Box2D.Dynamics.b2Body;
game.lib.physics.b_FixtureDef = Box2D.Dynamics.b2FixtureDef;
game.lib.physics.b_Fixture = Box2D.Dynamics.b2Fixture;
game.lib.physics.b_World = Box2D.Dynamics.b2World;
game.lib.physics.b_MassData = Box2D.Collision.Shapes.b2MassData;
game.lib.physics.b_PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
game.lib.physics.b_CircleShape = Box2D.Collision.Shapes.b2CircleShape;
game.lib.physics.b_DebugDraw = Box2D.Dynamics.b2DebugDraw;
game.lib.physics.b_ContactListener = Box2D.Dynamics.b2ContactListener;
game.lib.physics.world = null;
game.lib.physics.gravity = 30;
game.lib.physics.scale = 30;
game.lib.physics.scaled = (function scaled(n){
return (n / game.lib.physics.scale);
});
game.lib.physics.hscaled = (function hscaled(n){
return (game.lib.physics.scaled.call(null,n) / 2.0);
});
var default_box = cljs.core.ObjMap.fromObject(["\uFDD0'friction","\uFDD0'a","\uFDD0'restitution","\uFDD0'bullet","\uFDD0'h","\uFDD0'density","\uFDD0'sensor","\uFDD0'type","\uFDD0'shape","\uFDD0'w"],{"\uFDD0'friction":0.5,"\uFDD0'a":0,"\uFDD0'restitution":0.0,"\uFDD0'bullet":false,"\uFDD0'h":10,"\uFDD0'density":1.0,"\uFDD0'sensor":false,"\uFDD0'type":"\uFDD0'normal","\uFDD0'shape":"\uFDD0'box","\uFDD0'w":10});
game.lib.physics.box_fixture = (function box_fixture(props){
var oriented_QMARK_ = (new cljs.core.Keyword("\uFDD0'x")).call(null,props);
var final$ = cljs.core.merge.call(null,default_box,props,cljs.core.ObjMap.fromObject(["\uFDD0'type"],{"\uFDD0'type":oriented_QMARK_}));
var fix = (new game.lib.physics.b_FixtureDef());
var poly = (new game.lib.physics.b_PolygonShape());
fix.isSensor = final$.call(null,"\uFDD0'sensor");
fix.isBullet = final$.call(null,"\uFDD0'bullet");
fix.density = final$.call(null,"\uFDD0'density");
fix.friction = final$.call(null,"\uFDD0'friction");
fix.restitution = final$.call(null,"\uFDD0'restitution");
fix.userData = final$.call(null,"\uFDD0'data");
if(cljs.core.truth_(oriented_QMARK_))
{poly.SetAsOrientedBox(game.lib.physics.hscaled.call(null,(new cljs.core.Keyword("\uFDD0'w")).call(null,final$)),game.lib.physics.hscaled.call(null,(new cljs.core.Keyword("\uFDD0'h")).call(null,final$)),(new game.lib.physics.b_Vec(game.lib.physics.scaled.call(null,(new cljs.core.Keyword("\uFDD0'x")).call(null,final$)),game.lib.physics.scaled.call(null,(new cljs.core.Keyword("\uFDD0'y")).call(null,final$)))),(new cljs.core.Keyword("\uFDD0'a")).call(null,final$));
} else
{poly.SetAsBox(game.lib.physics.hscaled.call(null,(new cljs.core.Keyword("\uFDD0'w")).call(null,final$)),game.lib.physics.hscaled.call(null,(new cljs.core.Keyword("\uFDD0'h")).call(null,final$)));
}
fix.shape = poly;
return fix;
});
game.lib.physics.simulate = (function simulate(props,fixs){
return {"name":"\uFDD0'simulate","\uFDD0'props":props,"\uFDD0'fixtures":fixs};
});
game.lib.physics.unsimulate = (function unsimulate(){
return {"name":"\uFDD0'unsimulate"};
});
game.lib.physics.body = (function body(b){
return {"name":"\uFDD0'body","\uFDD0'body":b};
});
game.lib.physics.init_debug = (function init_debug(canvas){
var deb = (new game.lib.physics.b_DebugDraw());
deb.SetSprite(jayq.core.$.call(null,canvas).get(0).getContext("2d"));
deb.m_sprite.graphics.clear = (function (){
return null;
});
deb.SetDrawScale(game.lib.physics.scale);
deb.SetFillAlpha(0.3);
deb.SetAlpha(0.8);
deb.SetLineThickness(1.0);
deb.SetFlags((game.lib.physics.b_DebugDraw.e_shapeBit | game.lib.physics.b_DebugDraw.e_jointBit));
return deb;
});
game.lib.physics.ons = [];
game.lib.physics.offs = [];
game.lib.physics.on_contact = (function on_contact(contact){
var a = contact.GetFixtureA();
var b = contact.GetFixtureB();
var c__2909__auto__ = cljs.core.count.call(null,game.lib.physics.ons);
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var l = (game.lib.physics.ons[i__2910__auto__]);
l.call(null,a,b);
{
var G__32057 = (i__2910__auto__ + 1);
i__2910__auto__ = G__32057;
continue;
}
} else
{return null;
}
break;
}
});
game.lib.physics.off_contact = (function off_contact(contact){
var a = contact.GetFixtureA();
var b = contact.GetFixtureB();
var c__2909__auto__ = cljs.core.count.call(null,game.lib.physics.offs);
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var l = (game.lib.physics.offs[i__2910__auto__]);
l.call(null,a,b);
{
var G__32058 = (i__2910__auto__ + 1);
i__2910__auto__ = G__32058;
continue;
}
} else
{return null;
}
break;
}
});
game.lib.physics.contact_listener = (function contact_listener(world){
var listener = (new game.lib.physics.b_ContactListener());
listener.BeginContact = game.lib.physics.on_contact;
listener.EndContact = game.lib.physics.off_contact;
return world.SetContactListener(listener);
});
game.lib.physics.init = (function init(canvas){
game.lib.physics.world = (new game.lib.physics.b_World((new game.lib.physics.b_Vec(0,game.lib.physics.gravity)),true));
game.lib.physics.contact_listener.call(null,game.lib.physics.world);
return game.lib.physics.world.SetDebugDraw(game.lib.physics.init_debug.call(null,canvas));
});
game.lib.physics.__GT_body = (function __GT_body(e,sim){
var pos = Game.as(e,"\uFDD0'position");
var cur_body = (new game.lib.physics.b_BodyDef());
var props = (sim["\uFDD0'props"]);
var body_type = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0'static")).call(null,props))?game.lib.physics.b_Body.b2_staticBody:game.lib.physics.b_Body.b2_dynamicBody);
var G__32061 = cljs.core.seq.call(null,cljs.core.dissoc.call(null,props,"\uFDD0'static"));
while(true){
if(G__32061)
{var vec__32062 = cljs.core.first.call(null,G__32061);
var k = cljs.core.nth.call(null,vec__32062,0,null);
var v = cljs.core.nth.call(null,vec__32062,1,null);
(cur_body[cljs.core.name.call(null,k)] = v);
{
var G__32063 = cljs.core.next.call(null,G__32061);
G__32061 = G__32063;
continue;
}
} else
{}
break;
}
cur_body.type = body_type;
cur_body.position.x = game.lib.physics.scaled.call(null,(pos["\uFDD0'x"]));
cur_body.position.y = game.lib.physics.scaled.call(null,(pos["\uFDD0'y"]));
cur_body.angle = (pos["\uFDD0'a"]);
cur_body.userData = e;
return cur_body;
});
game.lib.physics.contact_BANG_ = (function contact_BANG_(b,e){
game.lib.physics.ons.push(b);
return game.lib.physics.offs.push(e);
});
game.lib.physics.add_BANG_ = (function add_BANG_(body,fixs){
var body__$1 = game.lib.physics.world.CreateBody(body);
var G__32065 = cljs.core.seq.call(null,fixs);
while(true){
if(G__32065)
{var f = cljs.core.first.call(null,G__32065);
body__$1.CreateFixture(f);
{
var G__32066 = cljs.core.next.call(null,G__32065);
G__32065 = G__32066;
continue;
}
} else
{}
break;
}
return body__$1;
});
game.lib.physics.simulate_new = (function simulate_new(ents){
var c__2909__auto__ = cljs.core.count.call(null,ents);
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (ents[i__2910__auto__]);
var sim = Game.as(e,"\uFDD0'simulate");
var fixs = (sim["\uFDD0'fixtures"]);
var b = game.lib.physics.__GT_body.call(null,e,sim);
var b__$1 = game.lib.physics.add_BANG_.call(null,b,fixs);
game.lib.core.add_c.call(null,e,game.lib.physics.body.call(null,b__$1));
game.lib.core.rem_c.call(null,e,"\uFDD0'simulate");
{
var G__32067 = (i__2910__auto__ + 1);
i__2910__auto__ = G__32067;
continue;
}
} else
{return null;
}
break;
}
});
game.lib.physics.rem_BANG_ = (function rem_BANG_(e){
var body = Game.as(e,"\uFDD0'body");
game.lib.physics.world.DestroyBody((body["\uFDD0'body"]));
return game.lib.core.rem_c.call(null,e,"\uFDD0'body");
});
game.lib.physics.remove_unsimulate = (function remove_unsimulate(ents){
var c__2909__auto__ = cljs.core.count.call(null,ents);
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (ents[i__2910__auto__]);
game.lib.physics.rem_BANG_.call(null,e);
{
var G__32068 = (i__2910__auto__ + 1);
i__2910__auto__ = G__32068;
continue;
}
} else
{return null;
}
break;
}
});
game.lib.physics.__GT_velocity = (function __GT_velocity(e){
var bod = Game.as(e,"\uFDD0'body");
var vel = (bod["\uFDD0'body"]).GetLinearVelocity();
return vel;
});
game.lib.physics.velocity = (function velocity(e,x,y){
var bod = Game.as(e,"\uFDD0'body");
var b = (bod["\uFDD0'body"]);
var cur_vel = b.GetLinearVelocity();
return b.SetLinearVelocity((new game.lib.physics.b_Vec((function (){var or__2074__auto__ = x;
if(cljs.core.truth_(or__2074__auto__))
{return or__2074__auto__;
} else
{return cur_vel.x;
}
})(),(function (){var or__2074__auto__ = y;
if(cljs.core.truth_(or__2074__auto__))
{return or__2074__auto__;
} else
{return cur_vel.y;
}
})())));
});
game.lib.physics.impulse = (function impulse(e,x,y){
var body = Game.as(e,"\uFDD0'body");
var body__$1 = (body["\uFDD0'body"]);
return body__$1.ApplyImpulse((new game.lib.physics.b_Vec(x,y)),body__$1.GetWorldCenter());
});
game.lib.physics.reposition = (function reposition(ents){
var c__2909__auto__ = cljs.core.count.call(null,ents);
var i__2910__auto__ = 0;
while(true){
if((i__2910__auto__ < c__2909__auto__))
{var e = (ents[i__2910__auto__]);
var pos = Game.as(e,"\uFDD0'position");
var body = Game.as(e,"\uFDD0'body");
var body__$1 = (body["\uFDD0'body"]);
var bpos = body__$1.GetWorldCenter();
(pos["\uFDD0'x"] = (bpos.x * game.lib.physics.scale));
(pos["\uFDD0'y"] = (bpos.y * game.lib.physics.scale));
(pos["\uFDD0'a"] = body__$1.GetAngle());
{
var G__32069 = (i__2910__auto__ + 1);
i__2910__auto__ = G__32069;
continue;
}
} else
{return null;
}
break;
}
});
game.lib.physics.set_position = (function set_position(ent,x,y){
var body = Game.as(ent,"\uFDD0'body");
var body__$1 = (body["\uFDD0'body"]);
return body__$1.SetPosition((new game.lib.physics.b_Vec(game.lib.physics.scaled.call(null,x),game.lib.physics.scaled.call(null,y))));
});
game.lib.physics.clear_BANG_ = (function clear_BANG_(){
if(cljs.core.truth_(game.lib.physics.world))
{var bodies = game.lib.physics.world.GetBodyList();
console.log(game.lib.physics.world);
var b = bodies;
while(true){
if(cljs.core.truth_(b))
{game.lib.physics.world.DestroyBody(b);
{
var G__32070 = b.GetNext();
b = G__32070;
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
game.lib.physics.fix__GT_ent = (function fix__GT_ent(fix){
return fix.GetBody().GetUserData();
});
game.lib.physics.add_BAR_rem = (function add_BAR_rem(){
game.lib.physics.simulate_new.call(null,game.lib.core.all_e.call(null,"\uFDD0'simulate"));
return game.lib.physics.remove_unsimulate.call(null,game.lib.core.all_e.call(null,"\uFDD0'unsimulate"));
});
game.lib.physics.step = (function step(){
game.lib.physics.world.Step((1 / 60),8,3);
game.lib.physics.reposition.call(null,game.lib.core.all_e.call(null,"\uFDD0'body"));
return game.lib.physics.world.ClearForces();
});
