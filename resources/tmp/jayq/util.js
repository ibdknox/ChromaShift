goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out = {};
var G__5330 = cljs.core.seq.call(null,m);
while(true){
if(G__5330)
{var vec__5331 = cljs.core.first.call(null,G__5330);
var k = cljs.core.nth.call(null,vec__5331,0,null);
var v = cljs.core.nth.call(null,vec__5331,1,null);
(out[cljs.core.name.call(null,k)] = v);
{
var G__5332 = cljs.core.next.call(null,G__5330);
G__5330 = G__5332;
continue;
}
} else
{}
break;
}
return out;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__5333){
var v = cljs.core.first(arglist__5333);
var text = cljs.core.rest(arglist__5333);
return log__delegate(v, text);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce.call(null,(function (m,p__5336){
var vec__5337 = p__5336;
var k = cljs.core.nth.call(null,vec__5337,0,null);
var v = cljs.core.nth.call(null,vec__5337,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k),clj__GT_js.call(null,v));
}),cljs.core.ObjMap.EMPTY,x).strobj;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
