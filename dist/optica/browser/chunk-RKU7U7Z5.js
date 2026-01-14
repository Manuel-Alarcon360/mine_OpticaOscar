import{$ as v,Ab as bn,Bb as K,Cb as be,Db as ye,Gb as ke,Ib as Me,J as lt,Jb as Be,Ka as I,Kb as Ot,L as b,La as un,Lb as yn,M as V,Ma as Pe,Nb as ht,O as Q,Oa as Se,Ob as gt,Pa as O,Q as J,R as h,Ra as ct,S as sn,Sa as It,Vb as $,Wa as j,X as ne,Xa as G,Xb as Lt,Ya as _,Za as cn,_ as an,_a as L,ab as me,ba as Tt,cb as dn,db as pn,eb as fn,f as X,fa as ut,ga as ln,hb as ee,ia as ie,ib as E,ja as oe,jb as hn,ka as he,kb as dt,kc as He,lb as gn,lc as Dn,mb as ve,mc as Cn,oa as ge,oc as C,pc as Rt,qc as Ue,rc as ze,sb as Ee,sc as We,tb as we,ub as re,vb as pt,wb as ft,xb as mn}from"./chunk-3POYB5FS.js";import{a as w}from"./chunk-TSRGIXR5.js";var P=new Q("");var En=null;function mt(){return En}function Ri(e){En??=e}var xt=class{},Ve=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>h(wn),providedIn:"platform"})}return e})(),xi=new Q(""),wn=(()=>{class e extends Ve{_location;_history;_doc=h(P);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return mt().getBaseHref(this._doc)}onPopState(t){let n=mt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=mt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,i){this._history.pushState(t,n,i)}replaceState(t,n,i){this._history.replaceState(t,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function bt(e,o){return e?o?e.endsWith("/")?o.startsWith("/")?e+o.slice(1):e+o:o.startsWith("/")?e+o:`${e}/${o}`:e:o}function Sn(e){let o=e.search(/#|\?|$/);return e[o-1]==="/"?e.slice(0,o-1)+e.slice(o):e}function Y(e){return e&&e[0]!=="?"?`?${e}`:e}var _e=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>h(_n),providedIn:"root"})}return e})(),yt=new Q(""),_n=(()=>{class e extends _e{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??h(P).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return bt(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+Y(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${n}${i}`:n}pushState(t,n,i,r){let s=this.prepareExternalUrl(i+Y(r));this._platformLocation.pushState(t,n,s)}replaceState(t,n,i,r){let s=this.prepareExternalUrl(i+Y(r));this._platformLocation.replaceState(t,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(n){return new(n||e)(J(Ve),J(yt,8))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),An=(()=>{class e{_subject=new X;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=Pi(Sn(vn(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+Y(n))}normalize(t){return e.stripTrailingSlash($i(this._basePath,vn(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",i=null){this._locationStrategy.pushState(i,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Y(n)),i)}replaceState(t,n="",i=null){this._locationStrategy.replaceState(i,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Y(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(i=>i(t,n))}subscribe(t,n,i){return this._subject.subscribe({next:t,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=Y;static joinWithSlash=bt;static stripTrailingSlash=Sn;static \u0275fac=function(n){return new(n||e)(J(_e))};static \u0275prov=b({token:e,factory:()=>Ni(),providedIn:"root"})}return e})();function Ni(){return new An(J(_e))}function $i(e,o){if(!e||!o.startsWith(e))return o;let t=o.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:o}function vn(e){return e.replace(/\/index.html$/,"")}function Pi(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var ki=(()=>{class e extends _e{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(t){let n=bt(this._baseHref,t);return n.length>0?"#"+n:n}pushState(t,n,i,r){let s=this.prepareExternalUrl(i+Y(r))||this._platformLocation.pathname;this._platformLocation.pushState(t,n,s)}replaceState(t,n,i,r){let s=this.prepareExternalUrl(i+Y(r))||this._platformLocation.pathname;this._platformLocation.replaceState(t,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(n){return new(n||e)(J(Ve),J(yt,8))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Nt=/\s+/,Fn=[],kt=(()=>{class e{_ngEl;_renderer;initialClasses=Fn;rawClass;stateMap=new Map;constructor(t,n){this._ngEl=t,this._renderer=n}set klass(t){this.initialClasses=t!=null?t.trim().split(Nt):Fn}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(Nt):t}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let n of t)this._updateState(n,!0);else if(t!=null)for(let n of Object.keys(t))this._updateState(n,!!t[n]);this._applyStateDiff()}_updateState(t,n){let i=this.stateMap.get(t);i!==void 0?(i.enabled!==n&&(i.changed=!0,i.enabled=n),i.touched=!0):this.stateMap.set(t,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let n=t[0],i=t[1];i.changed?(this._toggleClass(n,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),i.touched=!1}}_toggleClass(t,n){t=t.trim(),t.length>0&&t.split(Nt).forEach(i=>{n?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(n){return new(n||e)(O(oe),O(Se))};static \u0275dir=_({type:e,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return e})();var Dt=class{$implicit;ngForOf;index;count;constructor(o,t,n,i){this.$implicit=o,this.ngForOf=t,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},On=(()=>{class e{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,n,i){this._viewContainer=t,this._template=n,this._differs=i}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let n=this._viewContainer;t.forEachOperation((i,r,s)=>{if(i.previousIndex==null)n.createEmbeddedView(this._template,new Dt(i.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),Tn(a,i)}});for(let i=0,r=n.length;i<r;i++){let a=n.get(i).context;a.index=i,a.count=r,a.ngForOf=this._ngForOf}t.forEachIdentityChange(i=>{let r=n.get(i.currentIndex);Tn(r,i)})}static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||e)(O(ct),O(Pe),O(Dn))};static \u0275dir=_({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return e})();function Tn(e,o){e.context.$implicit=o.item}var Mt=(()=>{class e{_viewContainer;_context=new Ct;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,n){this._viewContainer=t,this._thenTemplateRef=n}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){In(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){In(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||e)(O(ct),O(Pe))};static \u0275dir=_({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return e})(),Ct=class{$implicit=null;ngIf=null};function In(e,o){if(e&&!e.createEmbeddedView)throw new lt(2020,!1)}var Bt=(()=>{class e{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(t,n,i){this._ngEl=t,this._differs=n,this._renderer=i}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,n){let[i,r]=t.split("."),s=i.indexOf("-")===-1?void 0:un.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,i,s)}_applyChanges(t){t.forEachRemovedItem(n=>this._setStyle(n.key,null)),t.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),t.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||e)(O(oe),O(Cn),O(Se))};static \u0275dir=_({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return e})(),Ht=(()=>{class e{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(t,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||e)(O(ct))};static \u0275dir=_({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ne]})}return e})();function Mi(e,o){return new lt(2100,!1)}var $t=class{createSubscription(o,t){return Ue(()=>o.subscribe({next:t,error:n=>{throw n}}))}dispose(o){Ue(()=>o.unsubscribe())}},Pt=class{createSubscription(o,t){return o.then(n=>t?.(n),n=>{throw n}),{unsubscribe:()=>{t=null}}}dispose(o){o.unsubscribe()}},Bi=new Pt,Hi=new $t,Ui=(()=>{class e{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;constructor(t){this._ref=t}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(t){if(!this._obj){if(t)try{this.markForCheckOnValueUpdate=!1,this._subscribe(t)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,n=>this._updateLatestValue(t,n))}_selectStrategy(t){if(dn(t))return Bi;if(pn(t))return Hi;throw Mi(e,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,n){t===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||e)(O(He,16))};static \u0275pipe=cn({name:"async",type:e,pure:!1})}return e})();var se=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=V({})}return e})();function zi(e,o){o=encodeURIComponent(o);for(let t of e.split(";")){let n=t.indexOf("="),[i,r]=n==-1?[t,""]:[t.slice(0,n),t.slice(n+1)];if(i.trim()===o)return decodeURIComponent(r)}return null}var Ln="browser",Rn="server";function je(e){return e===Ln}function zt(e){return e===Rn}var Ut=class{};var js=(()=>{class e{static \u0275prov=b({token:e,providedIn:"root",factory:()=>new Wt(h(P),window)})}return e})(),Wt=class{document;window;offset=()=>[0,0];constructor(o,t){this.document=o,this.window=t}setOffset(o){Array.isArray(o)?this.offset=()=>o:this.offset=o}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(o){this.window.scrollTo(o[0],o[1])}scrollToAnchor(o){let t=Wi(this.document,o);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(o){this.window.history.scrollRestoration=o}scrollToElement(o){let t=o.getBoundingClientRect(),n=t.left+this.window.pageXOffset,i=t.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(n-r[0],i-r[1])}};function Wi(e,o){let t=e.getElementById(o)||e.getElementsByName(o)[0];if(t)return t;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let n=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let r=i.shadowRoot;if(r){let s=r.getElementById(o)||r.querySelector(`[name="${o}"]`);if(s)return s}i=n.nextNode()}}return null}function xn(e,o){return e?e.classList?e.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(e.className):!1}function ae(e,o){if(e&&o){let t=n=>{xn(e,n)||(e.classList?e.classList.add(n):e.className+=" "+n)};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function ji(){return window.innerWidth-document.documentElement.offsetWidth}function Ae(e){for(let o of document?.styleSheets)try{for(let t of o?.cssRules)for(let n of t?.style)if(e.test(n))return{name:n,value:t.style.getPropertyValue(n).trim()}}catch{}return null}function Xs(e="p-overflow-hidden"){let o=Ae(/-scrollbar-width$/);o?.name&&document.body.style.setProperty(o.name,ji()+"px"),ae(document.body,e)}function De(e,o){if(e&&o){let t=n=>{e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function Qs(e="p-overflow-hidden"){let o=Ae(/-scrollbar-width$/);o?.name&&document.body.style.removeProperty(o.name),De(document.body,e)}function Nn(e){let o={width:0,height:0};return e&&(e.style.visibility="hidden",e.style.display="block",o.width=e.offsetWidth,o.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),o}function $n(){let e=window,o=document,t=o.documentElement,n=o.getElementsByTagName("body")[0],i=e.innerWidth||t.clientWidth||n.clientWidth,r=e.innerHeight||t.clientHeight||n.clientHeight;return{width:i,height:r}}function Gi(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function Ki(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function Js(e,o,t=!0){var n,i,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Nn(e),l=a.height,u=a.width,c=o.offsetHeight,d=o.offsetWidth,p=o.getBoundingClientRect(),f=Ki(),m=Gi(),y=$n(),A,x,F="top";p.top+c+l>y.height?(A=p.top+f-l,F="bottom",A<0&&(A=f)):A=c+p.top+f,p.left+u>y.width?x=Math.max(0,p.left+m+d-u):x=p.left+m,e.style.top=A+"px",e.style.left=x+"px",e.style.transformOrigin=F,t&&(e.style.marginTop=F==="bottom"?`calc(${(i=(n=Ae(/-anchor-gutter$/))==null?void 0:n.value)!=null?i:"2px"} * -1)`:(s=(r=Ae(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function ea(e,o){e&&(typeof o=="string"?e.style.cssText=o:Object.entries(o||{}).forEach(([t,n])=>e.style[t]=n))}function Pn(e,o){if(e instanceof HTMLElement){let t=e.offsetWidth;if(o){let n=getComputedStyle(e);t+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return t}return 0}function ta(e,o,t=!0){var n,i,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Nn(e),l=o.offsetHeight,u=o.getBoundingClientRect(),c=$n(),d,p,f="top";u.top+l+a.height>c.height?(d=-1*a.height,f="bottom",u.top+d<0&&(d=-1*u.top)):d=l,a.width>c.width?p=u.left*-1:u.left+a.width>c.width?p=(u.left+a.width-c.width)*-1:p=0,e.style.top=d+"px",e.style.left=p+"px",e.style.transformOrigin=f,t&&(e.style.marginTop=f==="bottom"?`calc(${(i=(n=Ae(/-anchor-gutter$/))==null?void 0:n.value)!=null?i:"2px"} * -1)`:(s=(r=Ae(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function Fe(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function Vt(e){let o=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?o=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?o=e.el.nativeElement:o=e.el)),Fe(o)?o:void 0}function na(e,o){let t=Vt(e);if(t)t.appendChild(o);else throw new Error("Cannot append "+o+" to "+e)}function St(e,o={}){if(Fe(e)){let t=(n,i)=>{var r,s;let a=(r=e?.$attrs)!=null&&r[n]?[(s=e?.$attrs)==null?void 0:s[n]]:[];return[i].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?t(n,u):Object.entries(u).map(([p,f])=>n==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(o).forEach(([n,i])=>{if(i!=null){let r=n.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),i):n==="p-bind"||n==="pBind"?St(e,i):(i=n==="class"?[...new Set(t("class",i))].join(" ").trim():n==="style"?t("style",i).join(";").trim():i,(e.$attrs=e.$attrs||{})&&(e.$attrs[n]=i),e.setAttribute(n,i))}})}}function ia(e,o={},...t){if(e){let n=document.createElement(e);return St(n,o),n.append(...t),n}}function oa(e,o){if(e){e.style.opacity="0";let t=+new Date,n="0",i=function(){n=`${+e.style.opacity+(new Date().getTime()-t)/o}`,e.style.opacity=n,t=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(i)||setTimeout(i,16))};i()}}function Yi(e,o){return Fe(e)?Array.from(e.querySelectorAll(o)):[]}function Te(e,o){return Fe(e)?e.matches(o)?e:e.querySelector(o):null}function ra(e,o){e&&document.activeElement!==e&&e.focus(o)}function sa(e,o){if(Fe(e)){let t=e.getAttribute(o);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function kn(e,o=""){let t=Yi(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`),n=[];for(let i of t)getComputedStyle(i).display!="none"&&getComputedStyle(i).visibility!="hidden"&&n.push(i);return n}function aa(e,o){let t=kn(e,o);return t.length>0?t[0]:null}function jt(e){if(e){let o=e.offsetHeight,t=getComputedStyle(e);return o-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),o}return 0}function Mn(e){if(e){let o=e.parentNode;return o&&o instanceof ShadowRoot&&o.host&&(o=o.host),o}return null}function la(e){var o;if(e){let t=(o=Mn(e))==null?void 0:o.childNodes,n=0;if(t)for(let i=0;i<t.length;i++){if(t[i]===e)return n;t[i].nodeType===1&&n++}}return-1}function ua(e,o){let t=kn(e,o);return t.length>0?t[t.length-1]:null}function Bn(e){if(e){let o=e.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Gt(e,o){if(e){let t=e.offsetHeight;if(o){let n=getComputedStyle(e);t+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return t}return 0}function ca(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Zi(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&Mn(e))}function da(e,o){var t;if(e)switch(e){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@parent":return o?.parentElement;case"@grandparent":return(t=o?.parentElement)==null?void 0:t.parentElement;default:if(typeof e=="string")return document.querySelector(e);let i=Vt((r=>!!(r&&r.constructor&&r.call&&r.apply))(e)?e():e);return i?.nodeType===9||Zi(i)?i:void 0}}function Kt(e){if(e){let o=e.offsetWidth,t=getComputedStyle(e);return o-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),o}return 0}function qi(e){return!!(e&&e.offsetParent!=null)}function pa(e){return!qi(e)}function fa(e){return e?getComputedStyle(e).direction==="rtl":!1}function ha(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Hn(e){var o;e&&("remove"in Element.prototype?e.remove():(o=e.parentNode)==null||o.removeChild(e))}function ga(e,o){let t=Vt(e);if(t)t.removeChild(o);else throw new Error("Cannot remove "+o+" from "+e)}function ma(e,o){let t=getComputedStyle(e).getPropertyValue("borderTopWidth"),n=t?parseFloat(t):0,i=getComputedStyle(e).getPropertyValue("paddingTop"),r=i?parseFloat(i):0,s=e.getBoundingClientRect(),l=o.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,u=e.scrollTop,c=e.clientHeight,d=Gt(o);l<0?e.scrollTop=u+l:l+d>c&&(e.scrollTop=u+l-c+d)}function ba(e,o="",t){Fe(e)&&t!==null&&t!==void 0&&e.setAttribute(o,t)}function Un(){let e=new Map;return{on(o,t){let n=e.get(o);return n?n.push(t):n=[t],e.set(o,n),this},off(o,t){let n=e.get(o);return n&&n.splice(n.indexOf(t)>>>0,1),this},emit(o,t){let n=e.get(o);n&&n.slice().map(i=>{i(t)})},clear(){e.clear()}}}var Xi=Object.defineProperty,zn=Object.getOwnPropertySymbols,Qi=Object.prototype.hasOwnProperty,Ji=Object.prototype.propertyIsEnumerable,Wn=(e,o,t)=>o in e?Xi(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,eo=(e,o)=>{for(var t in o||(o={}))Qi.call(o,t)&&Wn(e,t,o[t]);if(zn)for(var t of zn(o))Ji.call(o,t)&&Wn(e,t,o[t]);return e};function R(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function Yt(e,o,t=new WeakSet){if(e===o)return!0;if(!e||!o||typeof e!="object"||typeof o!="object"||t.has(e)||t.has(o))return!1;t.add(e).add(o);let n=Array.isArray(e),i=Array.isArray(o),r,s,a;if(n&&i){if(s=e.length,s!=o.length)return!1;for(r=s;r--!==0;)if(!Yt(e[r],o[r],t))return!1;return!0}if(n!=i)return!1;let l=e instanceof Date,u=o instanceof Date;if(l!=u)return!1;if(l&&u)return e.getTime()==o.getTime();let c=e instanceof RegExp,d=o instanceof RegExp;if(c!=d)return!1;if(c&&d)return e.toString()==o.toString();let p=Object.keys(e);if(s=p.length,s!==Object.keys(o).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(o,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!Yt(e[a],o[a],t))return!1;return!0}function to(e,o){return Yt(e,o)}function jn(e){return!!(e&&e.constructor&&e.call&&e.apply)}function D(e){return!R(e)}function vt(e,o){if(!e||!o)return null;try{let t=e[o];if(D(t))return t}catch{}if(Object.keys(e).length){if(jn(o))return o(e);if(o.indexOf(".")===-1)return e[o];{let t=o.split("."),n=e;for(let i=0,r=t.length;i<r;++i){if(n==null)return null;n=n[t[i]]}return n}}return null}function Zt(e,o,t){return t?vt(e,t)===vt(o,t):to(e,o)}function Sa(e,o){if(e!=null&&o&&o.length){for(let t of o)if(Zt(e,t))return!0}return!1}function va(e,o){let t=-1;if(D(e))try{t=e.findLastIndex(o)}catch{t=e.lastIndexOf([...e].reverse().find(o))}return t}function Z(e,o=!0){return e instanceof Object&&e.constructor===Object&&(o||Object.keys(e).length!==0)}function z(e,...o){return jn(e)?e(...o):e}function le(e,o=!0){return typeof e=="string"&&(o||e!=="")}function Vn(e){return le(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function Et(e,o="",t={}){let n=Vn(o).split("."),i=n.shift();return i?Z(e)?Et(z(e[Object.keys(e).find(r=>Vn(r)===i)||""],t),n.join("."),t):void 0:z(e,t)}function wt(e,o=!0){return Array.isArray(e)&&(o||e.length!==0)}function Ea(e){return e instanceof Date&&e.constructor===Date}function Gn(e){return D(e)&&!isNaN(e)}function wa(e=""){return D(e)&&e.length===1&&!!e.match(/\S| /)}function k(e,o){if(o){let t=o.test(e);return o.lastIndex=0,t}return!1}function ue(...e){let o=(t={},n={})=>{let i=eo({},t);return Object.keys(n).forEach(r=>{Z(n[r])&&r in t&&Z(t[r])?i[r]=o(t[r],n[r]):i[r]=n[r]}),i};return e.reduce((t,n,i)=>i===0?n:o(t,n),{})}function Ce(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function M(e){if(e&&/[\xC0-\xFF\u0100-\u017E]/.test(e)){let t={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let n in t)e=e.replace(t[n],n)}return e}function _t(e){return le(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(o,t)=>t===0?o:"-"+o.toLowerCase()).toLowerCase():e}function qt(e){return le(e)?e.replace(/[A-Z]/g,(o,t)=>t===0?o:"."+o.toLowerCase()).toLowerCase():e}var At={};function Ge(e="pui_id_"){return At.hasOwnProperty(e)||(At[e]=0),At[e]++,`${e}${At[e]}`}function no(){let e=[],o=(s,a,l=999)=>{let u=i(s,a,l),c=u.value+(u.key===s?0:l)+1;return e.push({key:s,value:c}),c},t=s=>{e=e.filter(a=>a.value!==s)},n=(s,a)=>i(s,a).value,i=(s,a,l=0)=>[...e].reverse().find(u=>a?!0:u.key===s)||{key:s,value:l},r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,a,l)=>{a&&(a.style.zIndex=String(o(s,!0,l)))},clear:s=>{s&&(t(r(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var Fa=no();var Kn=["*"],io=function(e){return e[e.ACCEPT=0]="ACCEPT",e[e.REJECT=1]="REJECT",e[e.CANCEL=2]="CANCEL",e}(io||{}),Ha=(()=>{class e{requireConfirmationSource=new X;acceptConfirmationSource=new X;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(t){return this.requireConfirmationSource.next(t),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var T=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})(),Ua=(()=>{class e{static AND="and";static OR="or"}return e})(),za=(()=>{class e{filter(t,n,i,r,s){let a=[];if(t)for(let l of t)for(let u of n){let c=vt(l,u);if(this.filters[r](c,i,s)){a.push(l);break}}return a}filters={startsWith:(t,n,i)=>{if(n==null||n.trim()==="")return!0;if(t==null)return!1;let r=M(n.toString()).toLocaleLowerCase(i);return M(t.toString()).toLocaleLowerCase(i).slice(0,r.length)===r},contains:(t,n,i)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(t==null)return!1;let r=M(n.toString()).toLocaleLowerCase(i);return M(t.toString()).toLocaleLowerCase(i).indexOf(r)!==-1},notContains:(t,n,i)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(t==null)return!1;let r=M(n.toString()).toLocaleLowerCase(i);return M(t.toString()).toLocaleLowerCase(i).indexOf(r)===-1},endsWith:(t,n,i)=>{if(n==null||n.trim()==="")return!0;if(t==null)return!1;let r=M(n.toString()).toLocaleLowerCase(i),s=M(t.toString()).toLocaleLowerCase(i);return s.indexOf(r,s.length-r.length)!==-1},equals:(t,n,i)=>n==null||typeof n=="string"&&n.trim()===""?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()===n.getTime():t==n?!0:M(t.toString()).toLocaleLowerCase(i)==M(n.toString()).toLocaleLowerCase(i),notEquals:(t,n,i)=>n==null||typeof n=="string"&&n.trim()===""?!1:t==null?!0:t.getTime&&n.getTime?t.getTime()!==n.getTime():t==n?!1:M(t.toString()).toLocaleLowerCase(i)!=M(n.toString()).toLocaleLowerCase(i),in:(t,n)=>{if(n==null||n.length===0)return!0;for(let i=0;i<n.length;i++)if(Zt(t,n[i]))return!0;return!1},between:(t,n)=>n==null||n[0]==null||n[1]==null?!0:t==null?!1:t.getTime?n[0].getTime()<=t.getTime()&&t.getTime()<=n[1].getTime():n[0]<=t&&t<=n[1],lt:(t,n,i)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()<n.getTime():t<n,lte:(t,n,i)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()<=n.getTime():t<=n,gt:(t,n,i)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()>n.getTime():t>n,gte:(t,n,i)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()>=n.getTime():t>=n,is:(t,n,i)=>this.filters.equals(t,n,i),isNot:(t,n,i)=>this.filters.notEquals(t,n,i),before:(t,n,i)=>this.filters.lt(t,n,i),after:(t,n,i)=>this.filters.gt(t,n,i),dateIs:(t,n)=>n==null?!0:t==null?!1:t.toDateString()===n.toDateString(),dateIsNot:(t,n)=>n==null?!0:t==null?!1:t.toDateString()!==n.toDateString(),dateBefore:(t,n)=>n==null?!0:t==null?!1:t.getTime()<n.getTime(),dateAfter:(t,n)=>n==null?!0:t==null?!1:(t.setHours(0,0,0,0),t.getTime()>n.getTime())};register(t,n){this.filters[t]=n}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Wa=(()=>{class e{messageSource=new X;clearSource=new X;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(t){t&&this.messageSource.next(t)}addAll(t){t&&t.length&&this.messageSource.next(t)}clear(t){this.clearSource.next(t||null)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Va=(()=>{class e{clickSource=new X;clickObservable=this.clickSource.asObservable();add(t){t&&this.clickSource.next(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ja=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=j({type:e,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Kn,decls:1,vars:0,template:function(n,i){n&1&&(be(),ye(0))},encapsulation:2})}return e})(),Ga=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=j({type:e,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Kn,decls:1,vars:0,template:function(n,i){n&1&&(be(),ye(0))},encapsulation:2})}return e})(),Yn=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(n){return new(n||e)(O(Pe))};static \u0275dir=_({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),ce=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=V({imports:[se]})}return e})(),Ka=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return e})();var oo=Object.defineProperty,ro=Object.defineProperties,so=Object.getOwnPropertyDescriptors,Ft=Object.getOwnPropertySymbols,Xn=Object.prototype.hasOwnProperty,Qn=Object.prototype.propertyIsEnumerable,Zn=(e,o,t)=>o in e?oo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,S=(e,o)=>{for(var t in o||(o={}))Xn.call(o,t)&&Zn(e,t,o[t]);if(Ft)for(var t of Ft(o))Qn.call(o,t)&&Zn(e,t,o[t]);return e},Oe=(e,o)=>ro(e,so(o)),te=(e,o)=>{var t={};for(var n in e)Xn.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&Ft)for(var n of Ft(e))o.indexOf(n)<0&&Qn.call(e,n)&&(t[n]=e[n]);return t};function qa(...e){return ue(...e)}var ao=Un(),B=ao;function qn(e,o){wt(e)?e.push(...o||[]):Z(e)&&Object.assign(e,o)}function lo(e){return Z(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function uo(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Xt(e="",o=""){return uo(`${le(e,!1)&&le(o,!1)?`${e}-`:e}${o}`)}function Jn(e="",o=""){return`--${Xt(e,o)}`}function co(e=""){let o=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(o+t)%2!==0}function ei(e,o="",t="",n=[],i){if(le(e)){let r=/{([^}]*)}/g,s=e.trim();if(co(s))return;if(k(s,r)){let a=s.replaceAll(r,c=>{let p=c.replace(/{|}/g,"").split(".").filter(f=>!n.some(m=>k(f,m)));return`var(${Jn(t,_t(p.join("-")))}${D(i)?`, ${i}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,u=/var\([^)]+\)/g;return k(a.replace(u,"0"),l)?`calc(${a})`:a}return s}else if(Gn(e))return e}function po(e,o,t){le(o,!1)&&e.push(`${o}:${t};`)}function Ie(e,o){return e?`${e}{${o}}`:""}var Le=(...e)=>fo(g.getTheme(),...e),fo=(e={},o,t,n)=>{if(o){let{variable:i,options:r}=g.defaults||{},{prefix:s,transform:a}=e?.options||r||{},u=k(o,/{([^}]*)}/g)?o:`{${o}}`;return n==="value"||R(n)&&a==="strict"?g.getTokenValue(o):ei(u,void 0,s,[i.excludedKeyRegex],t)}return""};var ho=(e={})=>{let{preset:o,options:t}=e;return{preset(n){return o=o?ue(o,n):n,this},options(n){return t=t?S(S({},t),n):n,this},primaryPalette(n){let{semantic:i}=o||{};return o=Oe(S({},o),{semantic:Oe(S({},i),{primary:n})}),this},surfacePalette(n){var i,r;let{semantic:s}=o||{},a=n?.hasOwnProperty("light")?n?.light:n,l=n?.hasOwnProperty("dark")?n?.dark:n,u={colorScheme:{light:S(S({},(i=s?.colorScheme)==null?void 0:i.light),!!a&&{surface:a}),dark:S(S({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return o=Oe(S({},o),{semantic:S(S({},s),u)}),this},define({useDefaultPreset:n=!1,useDefaultOptions:i=!1}={}){return{preset:n?g.getPreset():o,options:i?g.getOptions():t}},update({mergePresets:n=!0,mergeOptions:i=!0}={}){let r={preset:n?ue(g.getPreset(),o):o,options:i?S(S({},g.getOptions()),t):t};return g.setTheme(r),r},use(n){let i=this.define(n);return g.setTheme(i),i}}};function go(e,o={}){let t=g.defaults.variable,{prefix:n=t.prefix,selector:i=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=o,s=(u,c="")=>Object.entries(u).reduce((d,[p,f])=>{let m=k(p,r)?Xt(c):Xt(c,_t(p)),y=lo(f);if(Z(y)){let{variables:A,tokens:x}=s(y,m);qn(d.tokens,x),qn(d.variables,A)}else d.tokens.push((n?m.replace(`${n}-`,""):m).replaceAll("-",".")),po(d.variables,Jn(m),ei(y,m,n,[r]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(e,n);return{value:a,tokens:l,declarations:a.join(""),css:Ie(i,a.join(""))}}var q={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let o=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var n;return(n=o.map(i=>i.resolve(t)).find(i=>i.matched))!=null?n:this.rules.custom.resolve(t)})}},_toVariables(e,o){return go(e,{prefix:o?.prefix})},getCommon({name:e="",theme:o={},params:t,set:n,defaults:i}){var r,s,a,l,u,c,d;let{preset:p,options:f}=o,m,y,A,x,F,fe,W;if(D(p)&&f.transform!=="strict"){let{primitive:Ke,semantic:Ye,extend:Ze}=p,xe=Ye||{},{colorScheme:qe}=xe,Xe=te(xe,["colorScheme"]),Qe=Ze||{},{colorScheme:Je}=Qe,Ne=te(Qe,["colorScheme"]),$e=qe||{},{dark:et}=$e,tt=te($e,["dark"]),nt=Je||{},{dark:it}=nt,ot=te(nt,["dark"]),rt=D(Ke)?this._toVariables({primitive:Ke},f):{},st=D(Xe)?this._toVariables({semantic:Xe},f):{},at=D(tt)?this._toVariables({light:tt},f):{},tn=D(et)?this._toVariables({dark:et},f):{},nn=D(Ne)?this._toVariables({semantic:Ne},f):{},on=D(ot)?this._toVariables({light:ot},f):{},rn=D(it)?this._toVariables({dark:it},f):{},[hi,gi]=[(r=rt.declarations)!=null?r:"",rt.tokens],[mi,bi]=[(s=st.declarations)!=null?s:"",st.tokens||[]],[yi,Di]=[(a=at.declarations)!=null?a:"",at.tokens||[]],[Ci,Si]=[(l=tn.declarations)!=null?l:"",tn.tokens||[]],[vi,Ei]=[(u=nn.declarations)!=null?u:"",nn.tokens||[]],[wi,_i]=[(c=on.declarations)!=null?c:"",on.tokens||[]],[Ai,Fi]=[(d=rn.declarations)!=null?d:"",rn.tokens||[]];m=this.transformCSS(e,hi,"light","variable",f,n,i),y=gi;let Ti=this.transformCSS(e,`${mi}${yi}`,"light","variable",f,n,i),Ii=this.transformCSS(e,`${Ci}`,"dark","variable",f,n,i);A=`${Ti}${Ii}`,x=[...new Set([...bi,...Di,...Si])];let Oi=this.transformCSS(e,`${vi}${wi}color-scheme:light`,"light","variable",f,n,i),Li=this.transformCSS(e,`${Ai}color-scheme:dark`,"dark","variable",f,n,i);F=`${Oi}${Li}`,fe=[...new Set([...Ei,..._i,...Fi])],W=z(p.css,{dt:Le})}return{primitive:{css:m,tokens:y},semantic:{css:A,tokens:x},global:{css:F,tokens:fe},style:W}},getPreset({name:e="",preset:o={},options:t,params:n,set:i,defaults:r,selector:s}){var a,l,u;let c,d,p;if(D(o)&&t.transform!=="strict"){let f=e.replace("-directive",""),m=o,{colorScheme:y,extend:A,css:x}=m,F=te(m,["colorScheme","extend","css"]),fe=A||{},{colorScheme:W}=fe,Ke=te(fe,["colorScheme"]),Ye=y||{},{dark:Ze}=Ye,xe=te(Ye,["dark"]),qe=W||{},{dark:Xe}=qe,Qe=te(qe,["dark"]),Je=D(F)?this._toVariables({[f]:S(S({},F),Ke)},t):{},Ne=D(xe)?this._toVariables({[f]:S(S({},xe),Qe)},t):{},$e=D(Ze)?this._toVariables({[f]:S(S({},Ze),Xe)},t):{},[et,tt]=[(a=Je.declarations)!=null?a:"",Je.tokens||[]],[nt,it]=[(l=Ne.declarations)!=null?l:"",Ne.tokens||[]],[ot,rt]=[(u=$e.declarations)!=null?u:"",$e.tokens||[]],st=this.transformCSS(f,`${et}${nt}`,"light","variable",t,i,r,s),at=this.transformCSS(f,ot,"dark","variable",t,i,r,s);c=`${st}${at}`,d=[...new Set([...tt,...it,...rt])],p=z(x,{dt:Le})}return{css:c,tokens:d,style:p}},getPresetC({name:e="",theme:o={},params:t,set:n,defaults:i}){var r;let{preset:s,options:a}=o,l=(r=s?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:n,defaults:i})},getPresetD({name:e="",theme:o={},params:t,set:n,defaults:i}){var r;let s=e.replace("-directive",""),{preset:a,options:l}=o,u=(r=a?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:u,options:l,params:t,set:n,defaults:i})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,o){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?o.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:o.options.darkModeSelector):[]},getLayerOrder(e,o={},t,n){let{cssLayer:i}=o;return i?`@layer ${z(i.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:o={},params:t,props:n={},set:i,defaults:r}){let s=this.getCommon({name:e,theme:o,params:t,set:i,defaults:r}),a=Object.entries(n).reduce((l,[u,c])=>l.push(`${u}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,c])=>{if(c?.css){let d=Ce(c?.css),p=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:o={},params:t,props:n={},set:i,defaults:r}){var s;let a={name:e,theme:o,params:t,set:i,defaults:r},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((c,[d,p])=>c.push(`${d}="${p}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${u}>${Ce(l)}</style>`:""},createTokens(e={},o,t="",n="",i={}){return Object.entries(e).forEach(([r,s])=>{let a=k(r,o.variable.excludedKeyRegex)?t:t?`${t}.${qt(r)}`:qt(r),l=n?`${n}.${r}`:r;Z(s)?this.createTokens(s,o,a,l,i):(i[a]||(i[a]={paths:[],computed(u,c={}){var d,p;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,c.binding):u&&u!=="none"?(p=this.paths.find(f=>f.scheme===u))==null?void 0:p.computed(u,c.binding):this.paths.map(f=>f.computed(f.scheme,c[f.scheme]))}}),i[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(u,c={}){let d=/{([^}]*)}/g,p=s;if(c.name=this.path,c.binding||(c.binding={}),k(s,d)){let m=s.trim().replaceAll(d,x=>{var F;let fe=x.replace(/{|}/g,""),W=(F=i[fe])==null?void 0:F.computed(u,c);return wt(W)&&W.length===2?`light-dark(${W[0].value},${W[1].value})`:W?.value}),y=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,A=/var\([^)]+\)/g;p=k(m.replace(A,"0"),y)?`calc(${m})`:m}return R(c.binding)&&delete c.binding,{colorScheme:u,path:this.path,paths:c,value:p.includes("undefined")?void 0:p}}}))}),i},getTokenValue(e,o,t){var n;let r=(l=>l.split(".").filter(c=>!k(c.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(o),s=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,a=[(n=e[r])==null?void 0:n.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},u)=>{let c=u,{colorScheme:d}=c,p=te(c,["colorScheme"]);return l[d]=p,l},void 0)},getSelectorRule(e,o,t,n){return t==="class"||t==="attr"?Ie(D(o)?`${e}${o},${e} ${o}`:e,n):Ie(e,D(o)?Ie(o,n):n)},transformCSS(e,o,t,n,i={},r,s,a){if(D(o)){let{cssLayer:l}=i;if(n!=="style"){let u=this.getColorSchemeOption(i,s);o=t==="dark"?u.reduce((c,{type:d,selector:p})=>(D(p)&&(c+=p.includes("[CSS]")?p.replace("[CSS]",o):this.getSelectorRule(p,a,d,o)),c),""):Ie(a??":root",o)}if(l){let u={name:"primeui",order:"primeui"};Z(l)&&(u.name=z(l.name,{name:e,type:n})),D(u.name)&&(o=Ie(`@layer ${u.name}`,o),r?.layerNames(u.name))}return o}return""}},g={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:o}=e;o&&(this._theme=Oe(S({},o),{options:S(S({},this.defaults.options),o.options)}),this._tokens=q.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),B.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=Oe(S({},this.theme),{preset:e}),this._tokens=q.createTokens(e,this.defaults),this.clearLoadedStyleNames(),B.emit("preset:change",e),B.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=Oe(S({},this.theme),{options:e}),this.clearLoadedStyleNames(),B.emit("options:change",e),B.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return q.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",o){return q.getCommon({name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return q.getPresetC(t)},getDirective(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return q.getPresetD(t)},getCustomPreset(e="",o,t,n){let i={name:e,preset:o,options:this.options,selector:t,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return q.getPreset(i)},getLayerOrderCSS(e=""){return q.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",o,t="style",n){return q.transformCSS(e,o,n,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",o,t={}){return q.getCommonStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,o,t={}){return q.getStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),B.emit(`theme:${o}:load`,e),!this._loadingStyles.size&&B.emit("theme:load"))}};function rl(...e){let o=ue(g.getPreset(),...e);return g.setPreset(o),o}function sl(e){return ho().surfacePalette(e).update().preset}var mo=0,ti=(()=>{class e{document=h(P);use(t,n={}){let i=!1,r=t,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++mo}`,id:c=void 0,media:d=void 0,nonce:p=void 0,first:f=!1,props:m={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),!s.isConnected){r=t;let y=this.document.head;f&&y.firstChild?y.insertBefore(s,y.firstChild):y.appendChild(s),St(s,{type:"text/css",media:d,nonce:p,"data-primeng-style-id":u})}return s.textContent!==r&&(s.textContent=r),{id:c,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Re={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},bo=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,yo=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,N=(()=>{class e{name="base";useStyle=h(ti);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,n={},i=r=>r)=>{let r=i(z(t,{dt:Le}));return r?this.useStyle.use(Ce(r),w({name:this.name},n)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},n="")=>this.load(this.theme,t,(i="")=>g.transformCSS(t.name||this.name,`${i}${n}`));loadGlobalCSS=(t={})=>this.load(yo,t);loadGlobalTheme=(t={},n="")=>this.load(bo,t,(i="")=>g.transformCSS(t.name||this.name,`${i}${n}`));getCommonTheme=t=>g.getCommon(this.name,t);getComponentTheme=t=>g.getComponent(this.name,t);getDirectiveTheme=t=>g.getDirective(this.name,t);getPresetTheme=(t,n,i)=>g.getCustomPreset(this.name,t,n,i);getLayerOrderThemeCSS=()=>g.getLayerOrderCSS(this.name);getStyleSheet=(t="",n={})=>{if(this.css){let i=z(this.css,{dt:Le}),r=Ce(`${i}${t}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,n={})=>g.getCommonStyleSheet(this.name,t,n);getThemeStyleSheet=(t,n={})=>{let i=[g.getStyleSheet(this.name,t,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=z(this.theme,{dt:Le}),a=Ce(g.transformCSS(r,s)),l=Object.entries(n).reduce((u,[c,d])=>u.push(`${c}="${d}"`)&&u,[]).join(" ");i.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return i.join("")};static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Do=(()=>{class e{theme=he(void 0);csp=he({nonce:void 0});isThemeChanged=!1;document=h(P);baseStyle=h(N);constructor(){We(()=>{B.on("theme:change",t=>{Ue(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),We(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){g.clearLoadedStyleNames(),B.clear()}onThemeChange(t){g.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!g.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:i,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,w({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,w({name:"semantic-variables"},s)),this.baseStyle.load(i?.css,w({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(w({name:"global-style"},s),r),g.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:n,csp:i}=t||{};n&&this.theme.set(n),i&&this.csp.set(i)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Qt=(()=>{class e extends Do{ripple=he(!1);platformId=h(ge);inputStyle=he(null);inputVariant=he(null);overlayOptions={};csp=he({nonce:void 0});filterMatchModeOptions={text:[T.STARTS_WITH,T.CONTAINS,T.NOT_CONTAINS,T.ENDS_WITH,T.EQUALS,T.NOT_EQUALS],numeric:[T.EQUALS,T.NOT_EQUALS,T.LESS_THAN,T.LESS_THAN_OR_EQUAL_TO,T.GREATER_THAN,T.GREATER_THAN_OR_EQUAL_TO],date:[T.DATE_IS,T.DATE_IS_NOT,T.DATE_BEFORE,T.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new X;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=w(w({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:n,ripple:i,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:c}=t||{};n&&this.csp.set(n),i&&this.ripple.set(i),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Co=new Q("PRIME_NG_CONFIG");function Tl(...e){let o=e?.map(n=>({provide:Co,useValue:n,multi:!1})),t=fn(()=>{let n=h(Qt);e?.forEach(i=>n.setConfig(i))});return sn([...o,t])}var ni=(()=>{class e extends N{name="common";static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),H=(()=>{class e{document=h(P);platformId=h(ge);el=h(oe);injector=h(Tt);cd=h(He);renderer=h(Se);config=h(Qt);baseComponentStyle=h(ni);baseStyle=h(N);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Ge("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,n="",i={}){return Et(t,n,i)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!zt(this.platformId)){let{dt:n}=t;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>B.off("theme:change",t))}_loadStyles(){let t=()=>{Re.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Re.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!Re.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Re.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!g.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,w({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,w({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,w({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(w({name:"global-style"},this.styleOptions),r),g.setLoadedStyleName("common")}if(!g.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,w({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(w({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),g.setLoadedStyleName(this.componentStyle?.name)}if(!g.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,w({name:"layer-order",first:!0},this.styleOptions)),g.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:n}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(n,w({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Re.clearLoadedStyleNames(),B.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,n){let i=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:t}sx(t){let n=this.componentStyle?.inlineStyles?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:w({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||e)};static \u0275dir=_({type:e,inputs:{dt:"dt"},features:[$([ni,N]),ne]})}return e})();var So=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,vo={root:({props:e,instance:o})=>["p-badge p-component",{"p-badge-circle":D(e.value)&&String(e.value).length===1,"p-badge-dot":R(e.value)&&!o.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},ii=(()=>{class e extends N{name="badge";theme=So;classes=vo;static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Jt=(()=>{class e extends H{styleClass=ie();style=ie();badgeSize=ie();size=ie();severity=ie();value=ie();badgeDisabled=ie(!1,{transform:C});_componentStyle=h(ii);containerClass=ze(()=>{let t="p-badge p-component";return D(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),R(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275cmp=j({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,i){n&2&&(gn(i.style()),ve(i.containerClass()),hn("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[$([ii]),L],decls:1,vars:1,template:function(n,i){n&1&&ht(0),n&2&&gt(i.value())},dependencies:[se,ce],encapsulation:2,changeDetection:0})}return e})(),oi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=V({imports:[Jt,ce,ce]})}return e})();var en=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)t.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)t.className+=" "+i[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==t)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(t,n){let i=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==t)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,i="self"){i!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,i="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),i==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,i=!0){let r=F=>{if(F)return getComputedStyle(F).getPropertyValue("position")==="relative"?F:r(F.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),d=this.getViewport(),f=r(t)?.getBoundingClientRect()||{top:-1*u,left:-1*c},m,y;l.top+a+s.height>d.height?(m=l.top-f.top-s.height,t.style.transformOrigin="bottom",l.top+m<0&&(m=-1*l.top)):(m=a+l.top-f.top,t.style.transformOrigin="top");let A=l.left+s.width-d.width,x=l.left-f.left;s.width>d.width?y=(l.left-f.left)*-1:A>0?y=x-A:y=l.left-f.left,t.style.top=m+"px",t.style.left=y+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,n,i=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=n.offsetHeight,u=n.offsetWidth,c=n.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),f=this.getViewport(),m,y;c.top+l+s>f.height?(m=c.top+d-s,t.style.transformOrigin="bottom",m<0&&(m=d)):(m=l+c.top+d,t.style.transformOrigin="top"),c.left+a>f.width?y=Math.max(0,c.left+p+u-a):y=c.left+p,t.style.top=m+"px",t.style.left=y+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let i=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let c of u){let d=this.findSingle(a,c);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=t.scrollTop,p=t.clientHeight,f=this.getOuterHeight(n);c<0?t.scrollTop=d+c:c+f>p&&(t.scrollTop=d+c-p+f)}static fadeIn(t,n){t.style.opacity=0;let i=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,t.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,n){var i=1,r=50,s=n,a=r/s;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),t.style.opacity=i},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let i=t.offsetWidth;if(n){let r=getComputedStyle(t);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(t,n){let i=t.offsetHeight;if(n){let r=getComputedStyle(t);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let t=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||i.clientWidth||r.clientWidth,a=t.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var i=t.indexOf("Trident/");if(i>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,i){t[n].apply(t,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let i=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let i=this.findSingle(t,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(t,n=""){let i=this.getFocusableElements(t,n);return i.length>0?i[0]:null}static getLastFocusableElement(t,n){let i=this.getFocusableElements(t,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,n=!1){let i=e.getFocusableElements(t),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let i=typeof t;if(i==="string")return document.querySelector(t);if(i==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let i=t.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...i){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(t,n="",i){this.isElement(t)&&i!==null&&i!==void 0&&t.setAttribute(n,i)}static setAttributes(t,n={}){if(this.isElement(t)){let i=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?i(r,u):Object.entries(u).map(([p,f])=>r==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})(),ri=class{element;listener;scrollableParents;constructor(o,t=()=>{}){this.element=o,this.listener=t}bindScrollListener(){this.scrollableParents=en.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var si=(()=>{class e extends H{autofocus=!1;_autofocus=!1;focused=!1;platformId=h(ge);document=h(P);host=h(oe);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){je(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=en.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275dir=_({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",C],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[L]})}return e})();var wo=["*"],_o=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Ao=(()=>{class e extends N{name="baseicon";inlineStyles=_o;static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var ai=(()=>{class e extends H{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=R(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275cmp=j({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",C],styleClass:"styleClass"},features:[$([Ao]),L],ngContentSelectors:wo,decls:1,vars:0,template:function(n,i){n&1&&(be(),ye(0))},encapsulation:2,changeDetection:0})}return e})();var li=(()=>{class e extends ai{pathId;ngOnInit(){this.pathId="url(#"+Ge()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275cmp=j({type:e,selectors:[["SpinnerIcon"]],features:[L],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(an(),Ee(0,"svg",0)(1,"g"),re(2,"path",1),we(),Ee(3,"defs")(4,"clipPath",2),re(5,"rect",3),we()()()),n&2&&(ve(i.getClassNames()),ee("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),I(),ee("clip-path",i.pathId),I(3),E("id",i.pathId))},encapsulation:2})}return e})();var Fo=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,To={root:"p-ink"},ui=(()=>{class e extends N{name="ripple";theme=Fo;classes=To;static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var ci=(()=>{class e extends H{zone=h(ln);_componentStyle=h(ui);animationListener;mouseDownListener;timeout;constructor(){super(),We(()=>{je(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(De(n,"p-ink-active"),!jt(n)&&!Kt(n)){let a=Math.max(Pn(this.el.nativeElement),Gt(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let i=Bn(this.el.nativeElement),r=t.pageX-i.left+this.document.body.scrollTop-Kt(n)/2,s=t.pageY-i.top+this.document.body.scrollLeft-jt(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),ae(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&De(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&De(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),De(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Hn(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=_({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[$([ui]),L]})}return e})(),Lu=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=V({})}return e})();var Io=["content"],Oo=["loadingicon"],Lo=["icon"],Ro=["*"],fi=e=>({class:e});function xo(e,o){e&1&&mn(0)}function No(e,o){if(e&1&&re(0,"span",8),e&2){let t=K(3);E("ngClass",t.iconClass()),ee("aria-hidden",!0)("data-pc-section","loadingicon")}}function $o(e,o){if(e&1&&re(0,"SpinnerIcon",9),e&2){let t=K(3);E("styleClass",t.spinnerIconClass())("spin",!0),ee("aria-hidden",!0)("data-pc-section","loadingicon")}}function Po(e,o){if(e&1&&(pt(0),me(1,No,1,3,"span",6)(2,$o,1,4,"SpinnerIcon",7),ft()),e&2){let t=K(2);I(),E("ngIf",t.loadingIcon),I(),E("ngIf",!t.loadingIcon)}}function ko(e,o){}function Mo(e,o){if(e&1&&me(0,ko,0,0,"ng-template",10),e&2){let t=K(2);E("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Bo(e,o){if(e&1&&(pt(0),me(1,Po,3,2,"ng-container",2)(2,Mo,1,1,null,5),ft()),e&2){let t=K();I(),E("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),I(),E("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Lt(3,fi,t.iconClass()))}}function Ho(e,o){if(e&1&&re(0,"span",8),e&2){let t=K(2);ve(t.icon),E("ngClass",t.iconClass()),ee("data-pc-section","icon")}}function Uo(e,o){}function zo(e,o){if(e&1&&me(0,Uo,0,0,"ng-template",10),e&2){let t=K(2);E("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Wo(e,o){if(e&1&&(pt(0),me(1,Ho,1,4,"span",11)(2,zo,1,1,null,5),ft()),e&2){let t=K();I(),E("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),I(),E("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Lt(3,fi,t.iconClass()))}}function Vo(e,o){if(e&1&&(Ee(0,"span",12),ht(1),we()),e&2){let t=K();ee("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),I(),gt(t.label)}}function jo(e,o){if(e&1&&re(0,"p-badge",13),e&2){let t=K();E("value",t.badge)("severity",t.badgeSeverity)}}var Go=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${e("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${e("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${e("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${e("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Ko={root:({instance:e,props:o})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},pe=(()=>{class e extends N{name="button";theme=Go;classes=Ko;static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var de={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},di=(()=>{class e extends H{_componentStyle=h(pe);static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275dir=_({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,i){n&2&&dt("p-button-label",!0)},features:[$([pe]),L]})}return e})(),pi=(()=>{class e extends H{_componentStyle=h(pe);static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275dir=_({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,i){n&2&&dt("p-button-icon",!0)},features:[$([pe]),L]})}return e})(),Ju=(()=>{class e extends H{iconPos="left";loadingIcon;set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=It(pi);labelSignal=It(di);isIconOnly=ze(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}_severity;get severity(){return this._severity}set severity(t){this._severity=t,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(de);isTextButton=ze(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=h(pe);ngAfterViewInit(){super.ngAfterViewInit(),ae(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:n}=t;if(n){let i=n.currentValue;for(let r in i)this[r]=i[r]}}getStyleClass(){let t=[de.button,de.component];return this.icon&&!this.label&&R(this.htmlElement.textContent)&&t.push(de.iconOnly),this.loading&&(t.push(de.disabled,de.loading),!this.icon&&this.label&&t.push(de.labelOnly),this.icon&&!this.label&&!R(this.htmlElement.textContent)&&t.push(de.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return R(this.fluid)?!!n:this.fluid}setStyleClass(){let t=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}removeExistingSeverityClass(){let t=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(i=>t.some(r=>i===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Te(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Te(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let i=this.label?"p-button-icon-"+this.iconPos:null;i&&ae(n,i);let r=this.getIconClass();r&&ae(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let t=Te(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=Te(this.htmlElement,".p-button-icon"),n=Te(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275dir=_({type:e,selectors:[["","pButton",""]],contentQueries:function(n,i,r){n&1&&(Ot(r,i.iconSignal,pi,5),Ot(r,i.labelSignal,di,5)),n&2&&yn(2)},hostVars:4,hostBindings:function(n,i){n&2&&dt("p-button-icon-only",i.isIconOnly())("p-button-text",i.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",C],rounded:[2,"rounded","rounded",C],text:[2,"text","text",C],outlined:[2,"outlined","outlined",C],size:"size",plain:[2,"plain","plain",C],fluid:[2,"fluid","fluid",C],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[$([pe]),L,ne]})}return e})(),Yo=(()=>{class e extends H{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new ut;onFocus=new ut;onBlur=new ut;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return R(this.fluid)?!!n:this.fluid}_componentStyle=h(pe);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:n}=t;if(n){let i=n.currentValue;for(let r in i)this[r]=i[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275cmp=j({type:e,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(ke(r,Io,5),ke(r,Oo,5),ke(r,Lo,5),ke(r,Yn,4)),n&2){let s;Me(s=Be())&&(i.contentTemplate=s.first),Me(s=Be())&&(i.loadingIconTemplate=s.first),Me(s=Be())&&(i.iconTemplate=s.first),Me(s=Be())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",C],loading:[2,"loading","loading",C],loadingIcon:"loadingIcon",raised:[2,"raised","raised",C],rounded:[2,"rounded","rounded",C],text:[2,"text","text",C],plain:[2,"plain","plain",C],severity:"severity",outlined:[2,"outlined","outlined",C],link:[2,"link","link",C],tabindex:[2,"tabindex","tabindex",Rt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",C],fluid:[2,"fluid","fluid",C],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[$([pe]),L,ne],ngContentSelectors:Ro,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,i){n&1&&(be(),Ee(0,"button",0),bn("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),ye(1),me(2,xo,1,0,"ng-container",1)(3,Bo,3,5,"ng-container",2)(4,Wo,3,5,"ng-container",2)(5,Vo,2,3,"span",3)(6,jo,1,2,"p-badge",4),we()),n&2&&(E("ngStyle",i.style)("disabled",i.disabled||i.loading)("ngClass",i.buttonClass)("pAutoFocus",i.autofocus),ee("type",i.type)("aria-label",i.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex),I(2),E("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),I(),E("ngIf",i.loading),I(),E("ngIf",!i.loading),I(),E("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),I(),E("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[se,kt,Mt,Ht,Bt,ci,si,li,oi,Jt,ce],encapsulation:2,changeDetection:0})}return e})(),ec=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=V({imports:[se,Yo,ce,ce]})}return e})();export{P as a,mt as b,Ri as c,xt as d,xi as e,_e as f,_n as g,An as h,ki as i,kt as j,On as k,Mt as l,Bt as m,Ht as n,Ui as o,se as p,zi as q,Ln as r,je as s,zt as t,Ut as u,js as v,xn as w,ae as x,Xs as y,De as z,Qs as A,$n as B,Gi as C,Ki as D,Js as E,ea as F,Pn as G,ta as H,na as I,ia as J,oa as K,Yi as L,Te as M,ra as N,sa as O,kn as P,aa as Q,jt as R,la as S,ua as T,Bn as U,Gt as V,ca as W,da as X,Kt as Y,qi as Z,pa as _,fa as $,ha as aa,ga as ba,ma as ca,ba as da,R as ea,to as fa,D as ga,vt as ha,Zt as ia,Sa as ja,va as ka,wt as la,Ea as ma,wa as na,Ge as oa,io as pa,Ha as qa,T as ra,Ua as sa,za as ta,Wa as ua,Va as va,ja as wa,Ga as xa,Yn as ya,ce as za,Ka as Aa,qa as Ba,ho as Ca,rl as Da,sl as Ea,N as Fa,Qt as Ga,Tl as Ha,H as Ia,en as Ja,ri as Ka,si as La,Jt as Ma,oi as Na,ai as Oa,li as Pa,ci as Qa,Lu as Ra,Ju as Sa,Yo as Ta,ec as Ua};
