goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.string_QMARK_.call(null,sel))
{return sel;
} else
{if(cljs.core.fn_QMARK_.call(null,sel))
{var temp__2221__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__2221__auto__))
{var cm = temp__2221__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else
{return sel;
}
} else
{if(cljs.core.keyword_QMARK_.call(null,sel))
{return cljs.core.name.call(null,sel);
} else
{if("\uFDD0'else")
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__5268){
var vec__5270 = p__5268;
var context = cljs.core.nth.call(null,vec__5270,0,null);
if(cljs.core.not.call(null,context))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context);
}
};
var $ = function (sel,var_args){
var p__5268 = null;
if (goog.isDef(var_args)) {
  p__5268 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__5268);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__5271){
var sel = cljs.core.first(arglist__5271);
var p__5268 = cljs.core.rest(arglist__5271);
return $__delegate(sel, p__5268);
});
$.cljs$lang$arity$variadic = $__delegate;
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var or__2074__auto__ = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__2074__auto__))
{return or__2074__auto__;
} else
{return null;
}
});
jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{if((void 0 === not_found))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
if((cljs.core.count.call(null,this$) > 1))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__5272 = null;
var G__5272__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__5272__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__5272 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__5272__2.call(this,_,k);
case 3:
return G__5272__3.call(this,_,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__5272;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.keyword_QMARK_.call(null,opts))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__5273){
var vec__5275 = p__5273;
var v = cljs.core.nth.call(null,vec__5275,0,null);
var a__$1 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v))
{return $elem.attr(a__$1);
} else
{return $elem.attr(a__$1,v);
}
};
var attr = function ($elem,a,var_args){
var p__5273 = null;
if (goog.isDef(var_args)) {
  p__5273 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__5273);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__5276){
var $elem = cljs.core.first(arglist__5276);
var a = cljs.core.first(cljs.core.next(arglist__5276));
var p__5273 = cljs.core.rest(cljs.core.next(arglist__5276));
return attr__delegate($elem, a, p__5273);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__5277){
var vec__5279 = p__5277;
var v = cljs.core.nth.call(null,vec__5279,0,null);
var k__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v))
{return $elem.data(k__$1);
} else
{return $elem.data(k__$1,v);
}
};
var data = function ($elem,k,var_args){
var p__5277 = null;
if (goog.isDef(var_args)) {
  p__5277 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__5277);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__5280){
var $elem = cljs.core.first(arglist__5280);
var k = cljs.core.first(cljs.core.next(arglist__5280));
var p__5277 = cljs.core.rest(cljs.core.next(arglist__5280));
return data__delegate($elem, k, p__5277);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__$1 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__$1);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__$1 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__$1);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__5281){
var vec__5283 = p__5281;
var speed = cljs.core.nth.call(null,vec__5283,0,null);
var on_finish = cljs.core.nth.call(null,vec__5283,1,null);
return $elem.hide(speed,on_finish);
};
var hide = function ($elem,var_args){
var p__5281 = null;
if (goog.isDef(var_args)) {
  p__5281 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__5281);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__5284){
var $elem = cljs.core.first(arglist__5284);
var p__5281 = cljs.core.rest(arglist__5284);
return hide__delegate($elem, p__5281);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__5285){
var vec__5287 = p__5285;
var speed = cljs.core.nth.call(null,vec__5287,0,null);
var on_finish = cljs.core.nth.call(null,vec__5287,1,null);
return $elem.show(speed,on_finish);
};
var show = function ($elem,var_args){
var p__5285 = null;
if (goog.isDef(var_args)) {
  p__5285 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__5285);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__5288){
var $elem = cljs.core.first(arglist__5288);
var p__5285 = cljs.core.rest(arglist__5288);
return show__delegate($elem, p__5285);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__5289){
var vec__5291 = p__5289;
var speed = cljs.core.nth.call(null,vec__5291,0,null);
var on_finish = cljs.core.nth.call(null,vec__5291,1,null);
return $elem.toggle(speed,on_finish);
};
var toggle = function ($elem,var_args){
var p__5289 = null;
if (goog.isDef(var_args)) {
  p__5289 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__5289);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__5292){
var $elem = cljs.core.first(arglist__5292);
var p__5289 = cljs.core.rest(arglist__5292);
return toggle__delegate($elem, p__5289);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__5293){
var vec__5295 = p__5293;
var speed = cljs.core.nth.call(null,vec__5295,0,null);
var on_finish = cljs.core.nth.call(null,vec__5295,1,null);
return $elem.fadeOut(speed,on_finish);
};
var fade_out = function ($elem,var_args){
var p__5293 = null;
if (goog.isDef(var_args)) {
  p__5293 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__5293);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__5296){
var $elem = cljs.core.first(arglist__5296);
var p__5293 = cljs.core.rest(arglist__5296);
return fade_out__delegate($elem, p__5293);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__5297){
var vec__5299 = p__5297;
var speed = cljs.core.nth.call(null,vec__5299,0,null);
var on_finish = cljs.core.nth.call(null,vec__5299,1,null);
return $elem.fadeIn(speed,on_finish);
};
var fade_in = function ($elem,var_args){
var p__5297 = null;
if (goog.isDef(var_args)) {
  p__5297 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__5297);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__5300){
var $elem = cljs.core.first(arglist__5300);
var p__5297 = cljs.core.rest(arglist__5300);
return fade_in__delegate($elem, p__5297);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__5301){
var vec__5303 = p__5301;
var speed = cljs.core.nth.call(null,vec__5303,0,null);
var on_finish = cljs.core.nth.call(null,vec__5303,1,null);
return $elem.slideUp(speed,on_finish);
};
var slide_up = function ($elem,var_args){
var p__5301 = null;
if (goog.isDef(var_args)) {
  p__5301 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__5301);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__5304){
var $elem = cljs.core.first(arglist__5304);
var p__5301 = cljs.core.rest(arglist__5304);
return slide_up__delegate($elem, p__5301);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__5305){
var vec__5307 = p__5305;
var speed = cljs.core.nth.call(null,vec__5307,0,null);
var on_finish = cljs.core.nth.call(null,vec__5307,1,null);
return $elem.slideDown(speed,on_finish);
};
var slide_down = function ($elem,var_args){
var p__5305 = null;
if (goog.isDef(var_args)) {
  p__5305 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__5305);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__5308){
var $elem = cljs.core.first(arglist__5308);
var p__5305 = cljs.core.rest(arglist__5308);
return slide_down__delegate($elem, p__5305);
});
slide_down.cljs$lang$arity$variadic = slide_down__delegate;
return slide_down;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.clone = (function clone($elem){
return $elem.clone();
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__5309){
var vec__5311 = p__5309;
var v = cljs.core.nth.call(null,vec__5311,0,null);
if(cljs.core.truth_(v))
{return $elem.val(v);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__5309 = null;
if (goog.isDef(var_args)) {
  p__5309 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__5309);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__5312){
var $elem = cljs.core.first(arglist__5312);
var p__5309 = cljs.core.rest(arglist__5312);
return val__delegate($elem, p__5309);
});
val.cljs$lang$arity$variadic = val__delegate;
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__5313,content,callback){
var vec__5315 = p__5313;
var method = cljs.core.nth.call(null,vec__5315,0,null);
var uri = cljs.core.nth.call(null,vec__5315,1,null);
var params = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri,params);
});
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.keyword_QMARK_.call(null,e))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.map_QMARK_.call(null,e))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.coll_QMARK_.call(null,e))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Unknown event type: "),cljs.core.str(e)].join('')));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__5316){
var vec__5318 = p__5316;
var sel = cljs.core.nth.call(null,vec__5318,0,null);
var data = cljs.core.nth.call(null,vec__5318,1,null);
var handler = cljs.core.nth.call(null,vec__5318,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
};
var on = function ($elem,events,var_args){
var p__5316 = null;
if (goog.isDef(var_args)) {
  p__5316 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__5316);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__5319){
var $elem = cljs.core.first(arglist__5319);
var events = cljs.core.first(cljs.core.next(arglist__5319));
var p__5316 = cljs.core.rest(cljs.core.next(arglist__5319));
return on__delegate($elem, events, p__5316);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__5320){
var vec__5322 = p__5320;
var sel = cljs.core.nth.call(null,vec__5322,0,null);
var data = cljs.core.nth.call(null,vec__5322,1,null);
var handler = cljs.core.nth.call(null,vec__5322,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
};
var one = function ($elem,events,var_args){
var p__5320 = null;
if (goog.isDef(var_args)) {
  p__5320 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__5320);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__5323){
var $elem = cljs.core.first(arglist__5323);
var events = cljs.core.first(cljs.core.next(arglist__5323));
var p__5320 = cljs.core.rest(cljs.core.next(arglist__5323));
return one__delegate($elem, events, p__5320);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__5324){
var vec__5326 = p__5324;
var sel = cljs.core.nth.call(null,vec__5326,0,null);
var handler = cljs.core.nth.call(null,vec__5326,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
};
var off = function ($elem,events,var_args){
var p__5324 = null;
if (goog.isDef(var_args)) {
  p__5324 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__5324);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__5327){
var $elem = cljs.core.first(arglist__5327);
var events = cljs.core.first(cljs.core.next(arglist__5327));
var p__5324 = cljs.core.rest(cljs.core.next(arglist__5327));
return off__delegate($elem, events, p__5324);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
