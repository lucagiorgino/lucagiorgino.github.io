"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2334],{697:(e,n,t)=>{t.d(n,{T:()=>r.T});var r=t(7981)},2334:(e,n,t)=>{t.d(n,{Zp:()=>Rn});var r=t(8058),o=t(8894),i=0;const u=function(e){var n=++i;return(0,o.A)(e)+n};var a=t(9142),s=t(4098),d=t(4722),c=Math.ceil,h=Math.max;const f=function(e,n,t,r){for(var o=-1,i=h(c((n-e)/(t||1)),0),u=Array(i);i--;)u[r?i:++o]=e,e+=t;return u};var v=t(6832),l=t(4342);const g=function(e){return function(n,t,r){return r&&"number"!=typeof r&&(0,v.A)(n,t,r)&&(t=r=void 0),n=(0,l.A)(n),void 0===t?(t=n,n=0):t=(0,l.A)(t),r=void 0===r?n<t?1:-1:(0,l.A)(r),f(n,t,r,e)}}();var p=t(697);class A{constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,n=e._prev;if(n!==e)return w(n),n}enqueue(e){var n=this._sentinel;e._prev&&e._next&&w(e),e._next=n._next,n._next._prev=e,n._next=e,e._prev=n}toString(){for(var e=[],n=this._sentinel,t=n._prev;t!==n;)e.push(JSON.stringify(t,b)),t=t._prev;return"["+e.join(", ")+"]"}}function w(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function b(e,n){if("_next"!==e&&"_prev"!==e)return n}var m=a.A(1);function y(e,n){if(e.nodeCount()<=1)return[];var t=function(e,n){var t=new p.T,o=0,i=0;r.A(e.nodes(),(function(e){t.setNode(e,{v:e,in:0,out:0})})),r.A(e.edges(),(function(e){var r=t.edge(e.v,e.w)||0,u=n(e),a=r+u;t.setEdge(e.v,e.w,a),i=Math.max(i,t.node(e.v).out+=u),o=Math.max(o,t.node(e.w).in+=u)}));var u=g(i+o+3).map((function(){return new A})),a=o+1;return r.A(t.nodes(),(function(e){E(u,a,t.node(e))})),{graph:t,buckets:u,zeroIdx:a}}(e,n||m),o=function(e,n,t){var r,o=[],i=n[n.length-1],u=n[0];for(;e.nodeCount();){for(;r=u.dequeue();)_(e,n,t,r);for(;r=i.dequeue();)_(e,n,t,r);if(e.nodeCount())for(var a=n.length-2;a>0;--a)if(r=n[a].dequeue()){o=o.concat(_(e,n,t,r,!0));break}}return o}(t.graph,t.buckets,t.zeroIdx);return s.A(d.A(o,(function(n){return e.outEdges(n.v,n.w)})))}function _(e,n,t,o,i){var u=i?[]:void 0;return r.A(e.inEdges(o.v),(function(r){var o=e.edge(r),a=e.node(r.v);i&&u.push({v:r.v,w:r.w}),a.out-=o,E(n,t,a)})),r.A(e.outEdges(o.v),(function(r){var o=e.edge(r),i=r.w,u=e.node(i);u.in-=o,E(n,t,u)})),e.removeNode(o.v),u}function E(e,n,t){t.out?t.in?e[t.out-t.in+n].enqueue(t):e[e.length-1].enqueue(t):e[0].enqueue(t)}function x(e){var n="greedy"===e.graph().acyclicer?y(e,function(e){return function(n){return e.edge(n).weight}}(e)):function(e){var n=[],t={},o={};function i(u){Object.prototype.hasOwnProperty.call(o,u)||(o[u]=!0,t[u]=!0,r.A(e.outEdges(u),(function(e){Object.prototype.hasOwnProperty.call(t,e.w)?n.push(e):i(e.w)})),delete t[u])}return r.A(e.nodes(),i),n}(e);r.A(n,(function(n){var t=e.edge(n);e.removeEdge(n),t.forwardName=n.name,t.reversed=!0,e.setEdge(n.w,n.v,t,u("rev"))}))}var O=t(2837),k=t(9354),N=t(9188);const P=function(e,n){return(0,k.A)(e,n,(function(n,t){return(0,N.A)(e,t)}))};var j=t(6875),C=t(7525);const I=function(e){return(0,C.A)((0,j.A)(e,void 0,s.A),e+"")}((function(e,n){return null==e?{}:P(e,n)}));var L=t(3068),T=t(2559);const M=function(e,n){return e>n};var R=t(9008);const F=function(e){return e&&e.length?(0,T.A)(e,R.A,M):void 0};var D=t(6666),S=t(147),G=t(9841),V=t(3958);const B=function(e,n){var t={};return n=(0,V.A)(n,3),(0,G.A)(e,(function(e,r,o){(0,S.A)(t,r,n(e,r,o))})),t};var q=t(9592),Y=t(6452),z=t(8585),$=t(1917);const J=function(){return $.A.Date.now()};function Z(e,n,t,r){var o;do{o=u(r)}while(e.hasNode(o));return t.dummy=n,e.setNode(o,t),o}function H(e){var n=new p.T({multigraph:e.isMultigraph()}).setGraph(e.graph());return r.A(e.nodes(),(function(t){e.children(t).length||n.setNode(t,e.node(t))})),r.A(e.edges(),(function(t){n.setEdge(t,e.edge(t))})),n}function K(e,n){var t,r,o=e.x,i=e.y,u=n.x-o,a=n.y-i,s=e.width/2,d=e.height/2;if(!u&&!a)throw new Error("Not possible to find intersection inside of the rectangle");return Math.abs(a)*s>Math.abs(u)*d?(a<0&&(d=-d),t=d*u/a,r=d):(u<0&&(s=-s),t=s,r=s*a/u),{x:o+t,y:i+r}}function Q(e){var n=d.A(g(W(e)+1),(function(){return[]}));return r.A(e.nodes(),(function(t){var r=e.node(t),o=r.rank;q.A(o)||(n[o][r.order]=t)})),n}function U(e,n,t,r){var o={width:0,height:0};return arguments.length>=4&&(o.rank=t,o.order=r),Z(e,"border",o,n)}function W(e){return F(d.A(e.nodes(),(function(n){var t=e.node(n).rank;if(!q.A(t))return t})))}function X(e,n){var t=J();try{return n()}finally{console.log(e+" time: "+(J()-t)+"ms")}}function ee(e,n){return n()}function ne(e,n,t,r,o,i){var u={width:0,height:0,rank:i,borderType:n},a=o[n][i-1],s=Z(e,"border",u,t);o[n][i]=s,e.setParent(s,r),a&&e.setEdge(a,s,{weight:1})}function te(e){var n=e.graph().rankdir.toLowerCase();"bt"!==n&&"rl"!==n||function(e){r.A(e.nodes(),(function(n){ie(e.node(n))})),r.A(e.edges(),(function(n){var t=e.edge(n);r.A(t.points,ie),Object.prototype.hasOwnProperty.call(t,"y")&&ie(t)}))}(e),"lr"!==n&&"rl"!==n||(!function(e){r.A(e.nodes(),(function(n){ue(e.node(n))})),r.A(e.edges(),(function(n){var t=e.edge(n);r.A(t.points,ue),Object.prototype.hasOwnProperty.call(t,"x")&&ue(t)}))}(e),re(e))}function re(e){r.A(e.nodes(),(function(n){oe(e.node(n))})),r.A(e.edges(),(function(n){oe(e.edge(n))}))}function oe(e){var n=e.width;e.width=e.height,e.height=n}function ie(e){e.y=-e.y}function ue(e){var n=e.x;e.x=e.y,e.y=n}function ae(e){e.graph().dummyChains=[],r.A(e.edges(),(function(n){!function(e,n){var t=n.v,r=e.node(t).rank,o=n.w,i=e.node(o).rank,u=n.name,a=e.edge(n),s=a.labelRank;if(i===r+1)return;e.removeEdge(n);var d,c,h=void 0;for(c=0,++r;r<i;++c,++r)a.points=[],d=Z(e,"edge",h={width:0,height:0,edgeLabel:a,edgeObj:n,rank:r},"_d"),r===s&&(h.width=a.width,h.height=a.height,h.dummy="edge-label",h.labelpos=a.labelpos),e.setEdge(t,d,{weight:a.weight},u),0===c&&e.graph().dummyChains.push(d),t=d;e.setEdge(t,o,{weight:a.weight},u)}(e,n)}))}var se=t(6224);const de=function(e,n){return e&&e.length?(0,T.A)(e,(0,V.A)(n,2),se.A):void 0};function ce(e){var n={};r.A(e.sources(),(function t(r){var o=e.node(r);if(Object.prototype.hasOwnProperty.call(n,r))return o.rank;n[r]=!0;var i=Y.A(d.A(e.outEdges(r),(function(n){return t(n.w)-e.edge(n).minlen})));return i!==Number.POSITIVE_INFINITY&&null!=i||(i=0),o.rank=i}))}function he(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}function fe(e){var n,t,r=new p.T({directed:!1}),o=e.nodes()[0],i=e.nodeCount();for(r.setNode(o,{});ve(r,e)<i;)n=le(r,e),t=r.hasNode(n.v)?he(e,n):-he(e,n),ge(r,e,t);return r}function ve(e,n){return r.A(e.nodes(),(function t(o){r.A(n.nodeEdges(o),(function(r){var i=r.v,u=o===i?r.w:i;e.hasNode(u)||he(n,r)||(e.setNode(u,{}),e.setEdge(o,u,{}),t(u))}))})),e.nodeCount()}function le(e,n){return de(n.edges(),(function(t){if(e.hasNode(t.v)!==e.hasNode(t.w))return he(n,t)}))}function ge(e,n,t){r.A(e.nodes(),(function(e){n.node(e).rank+=t}))}var pe=t(6145),Ae=t(4092);a.A(1);a.A(1);t(1852),t(9779),t(8446),t(9703);(0,t(805).A)("length");RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var we="\\ud800-\\udfff",be="["+we+"]",me="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",ye="\\ud83c[\\udffb-\\udfff]",_e="[^"+we+"]",Ee="(?:\\ud83c[\\udde6-\\uddff]){2}",xe="[\\ud800-\\udbff][\\udc00-\\udfff]",Oe="(?:"+me+"|"+ye+")"+"?",ke="[\\ufe0e\\ufe0f]?",Ne=ke+Oe+("(?:\\u200d(?:"+[_e,Ee,xe].join("|")+")"+ke+Oe+")*"),Pe="(?:"+[_e+me+"?",me,Ee,xe,be].join("|")+")";RegExp(ye+"(?="+ye+")|"+Pe+Ne,"g");function je(){}je.prototype=new Error;var Ce=t(2049);function Ie(e,n,t){Ce.A(n)||(n=[n]);var o=(e.isDirected()?e.successors:e.neighbors).bind(e),i=[],u={};return r.A(n,(function(n){if(!e.hasNode(n))throw new Error("Graph does not have node: "+n);Le(e,n,"post"===t,u,o,i)})),i}function Le(e,n,t,o,i,u){Object.prototype.hasOwnProperty.call(o,n)||(o[n]=!0,t||u.push(n),r.A(i(n),(function(n){Le(e,n,t,o,i,u)})),t&&u.push(n))}t(7981);function Te(e){e=function(e){var n=(new p.T).setGraph(e.graph());return r.A(e.nodes(),(function(t){n.setNode(t,e.node(t))})),r.A(e.edges(),(function(t){var r=n.edge(t.v,t.w)||{weight:0,minlen:1},o=e.edge(t);n.setEdge(t.v,t.w,{weight:r.weight+o.weight,minlen:Math.max(r.minlen,o.minlen)})})),n}(e),ce(e);var n,t=fe(e);for(Fe(t),Me(t,e);n=Se(t);)Ve(t,e,n,Ge(t,e,n))}function Me(e,n){var t=function(e,n){return Ie(e,n,"post")}(e,e.nodes());t=t.slice(0,t.length-1),r.A(t,(function(t){!function(e,n,t){var r=e.node(t),o=r.parent;e.edge(t,o).cutvalue=Re(e,n,t)}(e,n,t)}))}function Re(e,n,t){var o=e.node(t).parent,i=!0,u=n.edge(t,o),a=0;return u||(i=!1,u=n.edge(o,t)),a=u.weight,r.A(n.nodeEdges(t),(function(r){var u,s,d=r.v===t,c=d?r.w:r.v;if(c!==o){var h=d===i,f=n.edge(r).weight;if(a+=h?f:-f,u=t,s=c,e.hasEdge(u,s)){var v=e.edge(t,c).cutvalue;a+=h?-v:v}}})),a}function Fe(e,n){arguments.length<2&&(n=e.nodes()[0]),De(e,{},1,n)}function De(e,n,t,o,i){var u=t,a=e.node(o);return n[o]=!0,r.A(e.neighbors(o),(function(r){Object.prototype.hasOwnProperty.call(n,r)||(t=De(e,n,t,r,o))})),a.low=u,a.lim=t++,i?a.parent=i:delete a.parent,t}function Se(e){return pe.A(e.edges(),(function(n){return e.edge(n).cutvalue<0}))}function Ge(e,n,t){var r=t.v,o=t.w;n.hasEdge(r,o)||(r=t.w,o=t.v);var i=e.node(r),u=e.node(o),a=i,s=!1;i.lim>u.lim&&(a=u,s=!0);var d=Ae.A(n.edges(),(function(n){return s===Be(e,e.node(n.v),a)&&s!==Be(e,e.node(n.w),a)}));return de(d,(function(e){return he(n,e)}))}function Ve(e,n,t,o){var i=t.v,u=t.w;e.removeEdge(i,u),e.setEdge(o.v,o.w,{}),Fe(e),Me(e,n),function(e,n){var t=pe.A(e.nodes(),(function(e){return!n.node(e).parent})),o=function(e,n){return Ie(e,n,"pre")}(e,t);o=o.slice(1),r.A(o,(function(t){var r=e.node(t).parent,o=n.edge(t,r),i=!1;o||(o=n.edge(r,t),i=!0),n.node(t).rank=n.node(r).rank+(i?o.minlen:-o.minlen)}))}(e,n)}function Be(e,n,t){return t.low<=n.lim&&n.lim<=t.lim}function qe(e){switch(e.graph().ranker){case"network-simplex":default:ze(e);break;case"tight-tree":!function(e){ce(e),fe(e)}(e);break;case"longest-path":Ye(e)}}Te.initLowLimValues=Fe,Te.initCutValues=Me,Te.calcCutValue=Re,Te.leaveEdge=Se,Te.enterEdge=Ge,Te.exchangeEdges=Ve;var Ye=ce;function ze(e){Te(e)}var $e=t(8207),Je=t(9463);function Ze(e){var n=Z(e,"root",{},"_root"),t=function(e){var n={};function t(o,i){var u=e.children(o);u&&u.length&&r.A(u,(function(e){t(e,i+1)})),n[o]=i}return r.A(e.children(),(function(e){t(e,1)})),n}(e),o=F($e.A(t))-1,i=2*o+1;e.graph().nestingRoot=n,r.A(e.edges(),(function(n){e.edge(n).minlen*=i}));var u=function(e){return Je.A(e.edges(),(function(n,t){return n+e.edge(t).weight}),0)}(e)+1;r.A(e.children(),(function(r){He(e,n,i,u,o,t,r)})),e.graph().nodeRankFactor=i}function He(e,n,t,o,i,u,a){var s=e.children(a);if(s.length){var d=U(e,"_bt"),c=U(e,"_bb"),h=e.node(a);e.setParent(d,a),h.borderTop=d,e.setParent(c,a),h.borderBottom=c,r.A(s,(function(r){He(e,n,t,o,i,u,r);var s=e.node(r),h=s.borderTop?s.borderTop:r,f=s.borderBottom?s.borderBottom:r,v=s.borderTop?o:2*o,l=h!==f?1:i-u[a]+1;e.setEdge(d,h,{weight:v,minlen:l,nestingEdge:!0}),e.setEdge(f,c,{weight:v,minlen:l,nestingEdge:!0})})),e.parent(a)||e.setEdge(n,d,{weight:0,minlen:i+u[a]})}else a!==n&&e.setEdge(n,a,{weight:0,minlen:t})}var Ke=t(8675);const Qe=function(e){return(0,Ke.A)(e,5)};function Ue(e,n,t){var o=function(e){var n;for(;e.hasNode(n=u("_root")););return n}(e),i=new p.T({compound:!0}).setGraph({root:o}).setDefaultNodeLabel((function(n){return e.node(n)}));return r.A(e.nodes(),(function(u){var a=e.node(u),s=e.parent(u);(a.rank===n||a.minRank<=n&&n<=a.maxRank)&&(i.setNode(u),i.setParent(u,s||o),r.A(e[t](u),(function(n){var t=n.v===u?n.w:n.v,r=i.edge(t,u),o=q.A(r)?0:r.weight;i.setEdge(t,u,{weight:e.edge(n).weight+o})})),Object.prototype.hasOwnProperty.call(a,"minRank")&&i.setNode(u,{borderLeft:a.borderLeft[n],borderRight:a.borderRight[n]}))})),i}var We=t(2851);const Xe=function(e,n,t){for(var r=-1,o=e.length,i=n.length,u={};++r<o;){var a=r<i?n[r]:void 0;t(u,e[r],a)}return u};const en=function(e,n){return Xe(e||[],n||[],We.A)};var nn=t(3588),tn=t(5572),rn=t(6318),on=t(2568);const un=function(e,n){var t=e.length;for(e.sort(n);t--;)e[t]=e[t].value;return e};var an=t(2789),sn=t(1882);const dn=function(e,n){if(e!==n){var t=void 0!==e,r=null===e,o=e==e,i=(0,sn.A)(e),u=void 0!==n,a=null===n,s=n==n,d=(0,sn.A)(n);if(!a&&!d&&!i&&e>n||i&&u&&s&&!a&&!d||r&&u&&s||!t&&s||!o)return 1;if(!r&&!i&&!d&&e<n||d&&t&&o&&!r&&!i||a&&t&&o||!u&&o||!s)return-1}return 0};const cn=function(e,n,t){for(var r=-1,o=e.criteria,i=n.criteria,u=o.length,a=t.length;++r<u;){var s=dn(o[r],i[r]);if(s)return r>=a?s:s*("desc"==t[r]?-1:1)}return e.index-n.index};const hn=function(e,n,t){n=n.length?(0,tn.A)(n,(function(e){return(0,Ce.A)(e)?function(n){return(0,rn.A)(n,1===e.length?e[0]:e)}:e})):[R.A];var r=-1;n=(0,tn.A)(n,(0,an.A)(V.A));var o=(0,on.A)(e,(function(e,t,o){return{criteria:(0,tn.A)(n,(function(n){return n(e)})),index:++r,value:e}}));return un(o,(function(e,n){return cn(e,n,t)}))};const fn=(0,t(4326).A)((function(e,n){if(null==e)return[];var t=n.length;return t>1&&(0,v.A)(e,n[0],n[1])?n=[]:t>2&&(0,v.A)(n[0],n[1],n[2])&&(n=[n[0]]),hn(e,(0,nn.A)(n,1),[])}));function vn(e,n){for(var t=0,r=1;r<n.length;++r)t+=ln(e,n[r-1],n[r]);return t}function ln(e,n,t){for(var o=en(t,d.A(t,(function(e,n){return n}))),i=s.A(d.A(n,(function(n){return fn(d.A(e.outEdges(n),(function(n){return{pos:o[n.w],weight:e.edge(n).weight}})),"pos")}))),u=1;u<t.length;)u<<=1;var a=2*u-1;u-=1;var c=d.A(new Array(a),(function(){return 0})),h=0;return r.A(i.forEach((function(e){var n=e.pos+u;c[n]+=e.weight;for(var t=0;n>0;)n%2&&(t+=c[n+1]),c[n=n-1>>1]+=e.weight;h+=e.weight*t}))),h}function gn(e,n){var t={};return r.A(e,(function(e,n){var r=t[e.v]={indegree:0,in:[],out:[],vs:[e.v],i:n};q.A(e.barycenter)||(r.barycenter=e.barycenter,r.weight=e.weight)})),r.A(n.edges(),(function(e){var n=t[e.v],r=t[e.w];q.A(n)||q.A(r)||(r.indegree++,n.out.push(t[e.w]))})),function(e){var n=[];function t(e){return function(n){n.merged||(q.A(n.barycenter)||q.A(e.barycenter)||n.barycenter>=e.barycenter)&&function(e,n){var t=0,r=0;e.weight&&(t+=e.barycenter*e.weight,r+=e.weight);n.weight&&(t+=n.barycenter*n.weight,r+=n.weight);e.vs=n.vs.concat(e.vs),e.barycenter=t/r,e.weight=r,e.i=Math.min(n.i,e.i),n.merged=!0}(e,n)}}function o(n){return function(t){t.in.push(n),0==--t.indegree&&e.push(t)}}for(;e.length;){var i=e.pop();n.push(i),r.A(i.in.reverse(),t(i)),r.A(i.out,o(i))}return d.A(Ae.A(n,(function(e){return!e.merged})),(function(e){return I(e,["vs","i","barycenter","weight"])}))}(Ae.A(t,(function(e){return!e.indegree})))}function pn(e,n){var t,o=function(e,n){var t={lhs:[],rhs:[]};return r.A(e,(function(e){n(e)?t.lhs.push(e):t.rhs.push(e)})),t}(e,(function(e){return Object.prototype.hasOwnProperty.call(e,"barycenter")})),i=o.lhs,u=fn(o.rhs,(function(e){return-e.i})),a=[],d=0,c=0,h=0;i.sort((t=!!n,function(e,n){return e.barycenter<n.barycenter?-1:e.barycenter>n.barycenter?1:t?n.i-e.i:e.i-n.i})),h=An(a,u,h),r.A(i,(function(e){h+=e.vs.length,a.push(e.vs),d+=e.barycenter*e.weight,c+=e.weight,h=An(a,u,h)}));var f={vs:s.A(a)};return c&&(f.barycenter=d/c,f.weight=c),f}function An(e,n,t){for(var r;n.length&&(r=D.A(n)).i<=t;)n.pop(),e.push(r.vs),t++;return t}function wn(e,n,t,o){var i=e.children(n),u=e.node(n),a=u?u.borderLeft:void 0,c=u?u.borderRight:void 0,h={};a&&(i=Ae.A(i,(function(e){return e!==a&&e!==c})));var f=function(e,n){return d.A(n,(function(n){var t=e.inEdges(n);if(t.length){var r=Je.A(t,(function(n,t){var r=e.edge(t),o=e.node(t.v);return{sum:n.sum+r.weight*o.order,weight:n.weight+r.weight}}),{sum:0,weight:0});return{v:n,barycenter:r.sum/r.weight,weight:r.weight}}return{v:n}}))}(e,i);r.A(f,(function(n){if(e.children(n.v).length){var r=wn(e,n.v,t,o);h[n.v]=r,Object.prototype.hasOwnProperty.call(r,"barycenter")&&(i=n,u=r,q.A(i.barycenter)?(i.barycenter=u.barycenter,i.weight=u.weight):(i.barycenter=(i.barycenter*i.weight+u.barycenter*u.weight)/(i.weight+u.weight),i.weight+=u.weight))}var i,u}));var v=gn(f,t);!function(e,n){r.A(e,(function(e){e.vs=s.A(e.vs.map((function(e){return n[e]?n[e].vs:e})))}))}(v,h);var l=pn(v,o);if(a&&(l.vs=s.A([a,l.vs,c]),e.predecessors(a).length)){var g=e.node(e.predecessors(a)[0]),p=e.node(e.predecessors(c)[0]);Object.prototype.hasOwnProperty.call(l,"barycenter")||(l.barycenter=0,l.weight=0),l.barycenter=(l.barycenter*l.weight+g.order+p.order)/(l.weight+2),l.weight+=2}return l}function bn(e){var n=W(e),t=mn(e,g(1,n+1),"inEdges"),o=mn(e,g(n-1,-1,-1),"outEdges"),i=function(e){var n={},t=Ae.A(e.nodes(),(function(n){return!e.children(n).length})),o=F(d.A(t,(function(n){return e.node(n).rank}))),i=d.A(g(o+1),(function(){return[]})),u=fn(t,(function(n){return e.node(n).rank}));return r.A(u,(function t(o){if(!z.A(n,o)){n[o]=!0;var u=e.node(o);i[u.rank].push(o),r.A(e.successors(o),t)}})),i}(e);_n(e,i);for(var u,a=Number.POSITIVE_INFINITY,s=0,c=0;c<4;++s,++c){yn(s%2?t:o,s%4>=2);var h=vn(e,i=Q(e));h<a&&(c=0,u=Qe(i),a=h)}_n(e,u)}function mn(e,n,t){return d.A(n,(function(n){return Ue(e,n,t)}))}function yn(e,n){var t=new p.T;r.A(e,(function(e){var o=e.graph().root,i=wn(e,o,t,n);r.A(i.vs,(function(n,t){e.node(n).order=t})),function(e,n,t){var o,i={};r.A(t,(function(t){for(var r,u,a=e.parent(t);a;){if((r=e.parent(a))?(u=i[r],i[r]=a):(u=o,o=a),u&&u!==a)return void n.setEdge(u,a);a=r}}))}(e,t,i.vs)}))}function _n(e,n){r.A(n,(function(n){r.A(n,(function(n,t){e.node(n).order=t}))}))}function En(e){var n=function(e){var n={},t=0;function o(i){var u=t;r.A(e.children(i),o),n[i]={low:u,lim:t++}}return r.A(e.children(),o),n}(e);r.A(e.graph().dummyChains,(function(t){for(var r=e.node(t),o=r.edgeObj,i=function(e,n,t,r){var o,i,u=[],a=[],s=Math.min(n[t].low,n[r].low),d=Math.max(n[t].lim,n[r].lim);o=t;do{o=e.parent(o),u.push(o)}while(o&&(n[o].low>s||d>n[o].lim));i=o,o=r;for(;(o=e.parent(o))!==i;)a.push(o);return{path:u.concat(a.reverse()),lca:i}}(e,n,o.v,o.w),u=i.path,a=i.lca,s=0,d=u[s],c=!0;t!==o.w;){if(r=e.node(t),c){for(;(d=u[s])!==a&&e.node(d).maxRank<r.rank;)s++;d===a&&(c=!1)}if(!c){for(;s<u.length-1&&e.node(d=u[s+1]).minRank<=r.rank;)s++;d=u[s]}e.setParent(t,d),t=e.successors(t)[0]}}))}var xn=t(9922);const On=function(e,n){return e&&(0,G.A)(e,(0,xn.A)(n))};var kn=t(4574),Nn=t(5615);const Pn=function(e,n){return null==e?e:(0,kn.A)(e,(0,xn.A)(n),Nn.A)};function jn(e,n){var t={};return Je.A(n,(function(n,o){var i=0,u=0,a=n.length,s=D.A(o);return r.A(o,(function(n,d){var c=function(e,n){if(e.node(n).dummy)return pe.A(e.predecessors(n),(function(n){return e.node(n).dummy}))}(e,n),h=c?e.node(c).order:a;(c||n===s)&&(r.A(o.slice(u,d+1),(function(n){r.A(e.predecessors(n),(function(r){var o=e.node(r),u=o.order;!(u<i||h<u)||o.dummy&&e.node(n).dummy||Cn(t,r,n)}))})),u=d+1,i=h)})),o})),t}function Cn(e,n,t){if(n>t){var r=n;n=t,t=r}var o=e[n];o||(e[n]=o={}),o[t]=!0}function In(e,n,t){if(n>t){var r=n;n=t,t=r}return!!e[n]&&Object.prototype.hasOwnProperty.call(e[n],t)}function Ln(e,n,t,o,i){var u={},a=function(e,n,t,o){var i=new p.T,u=e.graph(),a=function(e,n,t){return function(r,o,i){var u,a=r.node(o),s=r.node(i),d=0;if(d+=a.width/2,Object.prototype.hasOwnProperty.call(a,"labelpos"))switch(a.labelpos.toLowerCase()){case"l":u=-a.width/2;break;case"r":u=a.width/2}if(u&&(d+=t?u:-u),u=0,d+=(a.dummy?n:e)/2,d+=(s.dummy?n:e)/2,d+=s.width/2,Object.prototype.hasOwnProperty.call(s,"labelpos"))switch(s.labelpos.toLowerCase()){case"l":u=s.width/2;break;case"r":u=-s.width/2}return u&&(d+=t?u:-u),u=0,d}}(u.nodesep,u.edgesep,o);return r.A(n,(function(n){var o;r.A(n,(function(n){var r=t[n];if(i.setNode(r),o){var u=t[o],s=i.edge(u,r);i.setEdge(u,r,Math.max(a(e,n,o),s||0))}o=n}))})),i}(e,n,t,i),s=i?"borderLeft":"borderRight";function d(e,n){for(var t=a.nodes(),r=t.pop(),o={};r;)o[r]?e(r):(o[r]=!0,t.push(r),t=t.concat(n(r))),r=t.pop()}return d((function(e){u[e]=a.inEdges(e).reduce((function(e,n){return Math.max(e,u[n.v]+a.edge(n))}),0)}),a.predecessors.bind(a)),d((function(n){var t=a.outEdges(n).reduce((function(e,n){return Math.min(e,u[n.w]-a.edge(n))}),Number.POSITIVE_INFINITY),r=e.node(n);t!==Number.POSITIVE_INFINITY&&r.borderType!==s&&(u[n]=Math.max(u[n],t))}),a.successors.bind(a)),r.A(o,(function(e){u[e]=u[t[e]]})),u}function Tn(e){var n,t=Q(e),o=O.A(jn(e,t),function(e,n){var t={};function o(n,o,i,u,a){var s;r.A(g(o,i),(function(o){s=n[o],e.node(s).dummy&&r.A(e.predecessors(s),(function(n){var r=e.node(n);r.dummy&&(r.order<u||r.order>a)&&Cn(t,n,s)}))}))}return Je.A(n,(function(n,t){var i,u=-1,a=0;return r.A(t,(function(r,s){if("border"===e.node(r).dummy){var d=e.predecessors(r);d.length&&(i=e.node(d[0]).order,o(t,a,s,u,i),a=s,u=i)}o(t,a,t.length,i,n.length)})),t})),t}(e,t)),i={};r.A(["u","d"],(function(u){n="u"===u?t:$e.A(t).reverse(),r.A(["l","r"],(function(t){"r"===t&&(n=d.A(n,(function(e){return $e.A(e).reverse()})));var a=("u"===u?e.predecessors:e.successors).bind(e),s=function(e,n,t,o){var i={},u={},a={};return r.A(n,(function(e){r.A(e,(function(e,n){i[e]=e,u[e]=e,a[e]=n}))})),r.A(n,(function(e){var n=-1;r.A(e,(function(e){var r=o(e);if(r.length){r=fn(r,(function(e){return a[e]}));for(var s=(r.length-1)/2,d=Math.floor(s),c=Math.ceil(s);d<=c;++d){var h=r[d];u[e]===e&&n<a[h]&&!In(t,e,h)&&(u[h]=e,u[e]=i[e]=i[h],n=a[h])}}}))})),{root:i,align:u}}(0,n,o,a),c=Ln(e,n,s.root,s.align,"r"===t);"r"===t&&(c=B(c,(function(e){return-e}))),i[u+t]=c}))}));var u=function(e,n){return de($e.A(n),(function(n){var t=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY;return Pn(n,(function(n,o){var i=function(e,n){return e.node(n).width}(e,o)/2;t=Math.max(n+i,t),r=Math.min(n-i,r)})),t-r}))}(e,i);return function(e,n){var t=$e.A(n),o=Y.A(t),i=F(t);r.A(["u","d"],(function(t){r.A(["l","r"],(function(r){var u,a=t+r,s=e[a];if(s!==n){var d=$e.A(s);(u="l"===r?o-Y.A(d):i-F(d))&&(e[a]=B(s,(function(e){return e+u})))}}))}))}(i,u),function(e,n){return B(e.ul,(function(t,r){if(n)return e[n.toLowerCase()][r];var o=fn(d.A(e,r));return(o[1]+o[2])/2}))}(i,e.graph().align)}function Mn(e){(function(e){var n=Q(e),t=e.graph().ranksep,o=0;r.A(n,(function(n){var i=F(d.A(n,(function(n){return e.node(n).height})));r.A(n,(function(n){e.node(n).y=o+i/2})),o+=i+t}))})(e=H(e)),On(Tn(e),(function(n,t){e.node(t).x=n}))}function Rn(e,n){var t=n&&n.debugTiming?X:ee;t("layout",(()=>{var n=t("  buildLayoutGraph",(()=>function(e){var n=new p.T({multigraph:!0,compound:!0}),t=$n(e.graph());return n.setGraph(O.A({},Dn,zn(t,Fn),I(t,Sn))),r.A(e.nodes(),(function(t){var r=$n(e.node(t));n.setNode(t,L.A(zn(r,Gn),Vn)),n.setParent(t,e.parent(t))})),r.A(e.edges(),(function(t){var r=$n(e.edge(t));n.setEdge(t,O.A({},qn,zn(r,Bn),I(r,Yn)))})),n}(e)));t("  runLayout",(()=>function(e,n){n("    makeSpaceForEdgeLabels",(()=>function(e){var n=e.graph();n.ranksep/=2,r.A(e.edges(),(function(t){var r=e.edge(t);r.minlen*=2,"c"!==r.labelpos.toLowerCase()&&("TB"===n.rankdir||"BT"===n.rankdir?r.width+=r.labeloffset:r.height+=r.labeloffset)}))}(e))),n("    removeSelfEdges",(()=>function(e){r.A(e.edges(),(function(n){if(n.v===n.w){var t=e.node(n.v);t.selfEdges||(t.selfEdges=[]),t.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n)}}))}(e))),n("    acyclic",(()=>x(e))),n("    nestingGraph.run",(()=>Ze(e))),n("    rank",(()=>qe(H(e)))),n("    injectEdgeLabelProxies",(()=>function(e){r.A(e.edges(),(function(n){var t=e.edge(n);if(t.width&&t.height){var r=e.node(n.v),o={rank:(e.node(n.w).rank-r.rank)/2+r.rank,e:n};Z(e,"edge-proxy",o,"_ep")}}))}(e))),n("    removeEmptyRanks",(()=>function(e){var n=Y.A(d.A(e.nodes(),(function(n){return e.node(n).rank}))),t=[];r.A(e.nodes(),(function(r){var o=e.node(r).rank-n;t[o]||(t[o]=[]),t[o].push(r)}));var o=0,i=e.graph().nodeRankFactor;r.A(t,(function(n,t){q.A(n)&&t%i!=0?--o:o&&r.A(n,(function(n){e.node(n).rank+=o}))}))}(e))),n("    nestingGraph.cleanup",(()=>function(e){var n=e.graph();e.removeNode(n.nestingRoot),delete n.nestingRoot,r.A(e.edges(),(function(n){e.edge(n).nestingEdge&&e.removeEdge(n)}))}(e))),n("    normalizeRanks",(()=>function(e){var n=Y.A(d.A(e.nodes(),(function(n){return e.node(n).rank})));r.A(e.nodes(),(function(t){var r=e.node(t);z.A(r,"rank")&&(r.rank-=n)}))}(e))),n("    assignRankMinMax",(()=>function(e){var n=0;r.A(e.nodes(),(function(t){var r=e.node(t);r.borderTop&&(r.minRank=e.node(r.borderTop).rank,r.maxRank=e.node(r.borderBottom).rank,n=F(n,r.maxRank))})),e.graph().maxRank=n}(e))),n("    removeEdgeLabelProxies",(()=>function(e){r.A(e.nodes(),(function(n){var t=e.node(n);"edge-proxy"===t.dummy&&(e.edge(t.e).labelRank=t.rank,e.removeNode(n))}))}(e))),n("    normalize.run",(()=>ae(e))),n("    parentDummyChains",(()=>En(e))),n("    addBorderSegments",(()=>function(e){r.A(e.children(),(function n(t){var o=e.children(t),i=e.node(t);if(o.length&&r.A(o,n),Object.prototype.hasOwnProperty.call(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(var u=i.minRank,a=i.maxRank+1;u<a;++u)ne(e,"borderLeft","_bl",t,i,u),ne(e,"borderRight","_br",t,i,u)}}))}(e))),n("    order",(()=>bn(e))),n("    insertSelfEdges",(()=>function(e){var n=Q(e);r.A(n,(function(n){var t=0;r.A(n,(function(n,o){var i=e.node(n);i.order=o+t,r.A(i.selfEdges,(function(n){Z(e,"selfedge",{width:n.label.width,height:n.label.height,rank:i.rank,order:o+ ++t,e:n.e,label:n.label},"_se")})),delete i.selfEdges}))}))}(e))),n("    adjustCoordinateSystem",(()=>function(e){var n=e.graph().rankdir.toLowerCase();"lr"!==n&&"rl"!==n||re(e)}(e))),n("    position",(()=>Mn(e))),n("    positionSelfEdges",(()=>function(e){r.A(e.nodes(),(function(n){var t=e.node(n);if("selfedge"===t.dummy){var r=e.node(t.e.v),o=r.x+r.width/2,i=r.y,u=t.x-o,a=r.height/2;e.setEdge(t.e,t.label),e.removeNode(n),t.label.points=[{x:o+2*u/3,y:i-a},{x:o+5*u/6,y:i-a},{x:o+u,y:i},{x:o+5*u/6,y:i+a},{x:o+2*u/3,y:i+a}],t.label.x=t.x,t.label.y=t.y}}))}(e))),n("    removeBorderNodes",(()=>function(e){r.A(e.nodes(),(function(n){if(e.children(n).length){var t=e.node(n),r=e.node(t.borderTop),o=e.node(t.borderBottom),i=e.node(D.A(t.borderLeft)),u=e.node(D.A(t.borderRight));t.width=Math.abs(u.x-i.x),t.height=Math.abs(o.y-r.y),t.x=i.x+t.width/2,t.y=r.y+t.height/2}})),r.A(e.nodes(),(function(n){"border"===e.node(n).dummy&&e.removeNode(n)}))}(e))),n("    normalize.undo",(()=>function(e){r.A(e.graph().dummyChains,(function(n){var t,r=e.node(n),o=r.edgeLabel;for(e.setEdge(r.edgeObj,o);r.dummy;)t=e.successors(n)[0],e.removeNode(n),o.points.push({x:r.x,y:r.y}),"edge-label"===r.dummy&&(o.x=r.x,o.y=r.y,o.width=r.width,o.height=r.height),n=t,r=e.node(n)}))}(e))),n("    fixupEdgeLabelCoords",(()=>function(e){r.A(e.edges(),(function(n){var t=e.edge(n);if(Object.prototype.hasOwnProperty.call(t,"x"))switch("l"!==t.labelpos&&"r"!==t.labelpos||(t.width-=t.labeloffset),t.labelpos){case"l":t.x-=t.width/2+t.labeloffset;break;case"r":t.x+=t.width/2+t.labeloffset}}))}(e))),n("    undoCoordinateSystem",(()=>te(e))),n("    translateGraph",(()=>function(e){var n=Number.POSITIVE_INFINITY,t=0,o=Number.POSITIVE_INFINITY,i=0,u=e.graph(),a=u.marginx||0,s=u.marginy||0;function d(e){var r=e.x,u=e.y,a=e.width,s=e.height;n=Math.min(n,r-a/2),t=Math.max(t,r+a/2),o=Math.min(o,u-s/2),i=Math.max(i,u+s/2)}r.A(e.nodes(),(function(n){d(e.node(n))})),r.A(e.edges(),(function(n){var t=e.edge(n);Object.prototype.hasOwnProperty.call(t,"x")&&d(t)})),n-=a,o-=s,r.A(e.nodes(),(function(t){var r=e.node(t);r.x-=n,r.y-=o})),r.A(e.edges(),(function(t){var i=e.edge(t);r.A(i.points,(function(e){e.x-=n,e.y-=o})),Object.prototype.hasOwnProperty.call(i,"x")&&(i.x-=n),Object.prototype.hasOwnProperty.call(i,"y")&&(i.y-=o)})),u.width=t-n+a,u.height=i-o+s}(e))),n("    assignNodeIntersects",(()=>function(e){r.A(e.edges(),(function(n){var t,r,o=e.edge(n),i=e.node(n.v),u=e.node(n.w);o.points?(t=o.points[0],r=o.points[o.points.length-1]):(o.points=[],t=u,r=i),o.points.unshift(K(i,t)),o.points.push(K(u,r))}))}(e))),n("    reversePoints",(()=>function(e){r.A(e.edges(),(function(n){var t=e.edge(n);t.reversed&&t.points.reverse()}))}(e))),n("    acyclic.undo",(()=>function(e){r.A(e.edges(),(function(n){var t=e.edge(n);if(t.reversed){e.removeEdge(n);var r=t.forwardName;delete t.reversed,delete t.forwardName,e.setEdge(n.w,n.v,t,r)}}))}(e)))}(n,t))),t("  updateInputGraph",(()=>function(e,n){r.A(e.nodes(),(function(t){var r=e.node(t),o=n.node(t);r&&(r.x=o.x,r.y=o.y,n.children(t).length&&(r.width=o.width,r.height=o.height))})),r.A(e.edges(),(function(t){var r=e.edge(t),o=n.edge(t);r.points=o.points,Object.prototype.hasOwnProperty.call(o,"x")&&(r.x=o.x,r.y=o.y)})),e.graph().width=n.graph().width,e.graph().height=n.graph().height}(e,n)))}))}var Fn=["nodesep","edgesep","ranksep","marginx","marginy"],Dn={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},Sn=["acyclicer","ranker","rankdir","align"],Gn=["width","height"],Vn={width:0,height:0},Bn=["minlen","weight","width","height","labeloffset"],qn={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},Yn=["labelpos"];function zn(e,n){return B(I(e,n),Number)}function $n(e){var n={};return r.A(e,(function(e,t){n[t.toLowerCase()]=e})),n}},2559:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(1882);const o=function(e,n,t){for(var o=-1,i=e.length;++o<i;){var u=e[o],a=n(u);if(null!=a&&(void 0===s?a==a&&!(0,r.A)(a):t(a,s)))var s=a,d=u}return d}},2568:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(6240),o=t(8446);const i=function(e,n){var t=-1,i=(0,o.A)(e)?Array(e.length):[];return(0,r.A)(e,(function(e,r,o){i[++t]=n(e,r,o)})),i}},3068:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(4326),o=t(6984),i=t(6832),u=t(5615),a=Object.prototype,s=a.hasOwnProperty;const d=(0,r.A)((function(e,n){e=Object(e);var t=-1,r=n.length,d=r>2?n[2]:void 0;for(d&&(0,i.A)(n[0],n[1],d)&&(r=1);++t<r;)for(var c=n[t],h=(0,u.A)(c),f=-1,v=h.length;++f<v;){var l=h[f],g=e[l];(void 0===g||(0,o.A)(g,a[l])&&!s.call(e,l))&&(e[l]=c[l])}return e}))},4098:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(3588);const o=function(e){return(null==e?0:e.length)?(0,r.A)(e,1):[]}},4342:(e,n,t)=>{t.d(n,{A:()=>g});var r=/\s/;const o=function(e){for(var n=e.length;n--&&r.test(e.charAt(n)););return n};var i=/^\s+/;const u=function(e){return e?e.slice(0,o(e)+1).replace(i,""):e};var a=t(3149),s=t(1882),d=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,h=/^0o[0-7]+$/i,f=parseInt;const v=function(e){if("number"==typeof e)return e;if((0,s.A)(e))return NaN;if((0,a.A)(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=(0,a.A)(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=u(e);var t=c.test(e);return t||h.test(e)?f(e.slice(2),t?2:8):d.test(e)?NaN:+e};var l=1/0;const g=function(e){return e?(e=v(e))===l||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},4722:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(5572),o=t(3958),i=t(2568),u=t(2049);const a=function(e,n){return((0,u.A)(e)?r.A:i.A)(e,(0,o.A)(n,3))}},6145:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(3958),o=t(8446),i=t(7422);const u=function(e){return function(n,t,u){var a=Object(n);if(!(0,o.A)(n)){var s=(0,r.A)(t,3);n=(0,i.A)(n),t=function(e){return s(a[e],e,a)}}var d=e(n,t,u);return d>-1?a[s?n[d]:d]:void 0}};var a=t(5707),s=t(8593),d=Math.max;const c=u((function(e,n,t){var o=null==e?0:e.length;if(!o)return-1;var i=null==t?0:(0,s.A)(t);return i<0&&(i=d(o+i,0)),(0,a.A)(e,(0,r.A)(n,3),i)}))},6224:(e,n,t)=>{t.d(n,{A:()=>r});const r=function(e,n){return e<n}},6452:(e,n,t)=>{t.d(n,{A:()=>u});var r=t(2559),o=t(6224),i=t(9008);const u=function(e){return e&&e.length?(0,r.A)(e,i.A,o.A):void 0}},6666:(e,n,t)=>{t.d(n,{A:()=>r});const r=function(e){var n=null==e?0:e.length;return n?e[n-1]:void 0}},7981:(e,n,t)=>{t.d(n,{T:()=>w});var r=t(9142),o=t(9610),i=t(7422),u=t(4092),a=t(6401),s=t(8058),d=t(9592),c=t(3588),h=t(4326),f=t(9902),v=t(3533);const l=(0,h.A)((function(e){return(0,f.A)((0,c.A)(e,1,v.A,!0))}));var g=t(8207),p=t(9463),A="\0";class w{constructor(e={}){this._isDirected=!Object.prototype.hasOwnProperty.call(e,"directed")||e.directed,this._isMultigraph=!!Object.prototype.hasOwnProperty.call(e,"multigraph")&&e.multigraph,this._isCompound=!!Object.prototype.hasOwnProperty.call(e,"compound")&&e.compound,this._label=void 0,this._defaultNodeLabelFn=r.A(void 0),this._defaultEdgeLabelFn=r.A(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[A]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return o.A(e)||(e=r.A(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return i.A(this._nodes)}sources(){var e=this;return u.A(this.nodes(),(function(n){return a.A(e._in[n])}))}sinks(){var e=this;return u.A(this.nodes(),(function(n){return a.A(e._out[n])}))}setNodes(e,n){var t=arguments,r=this;return s.A(e,(function(e){t.length>1?r.setNode(e,n):r.setNode(e)})),this}setNode(e,n){return Object.prototype.hasOwnProperty.call(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=n),this):(this._nodes[e]=arguments.length>1?n:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=A,this._children[e]={},this._children[A][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)}node(e){return this._nodes[e]}hasNode(e){return Object.prototype.hasOwnProperty.call(this._nodes,e)}removeNode(e){if(Object.prototype.hasOwnProperty.call(this._nodes,e)){var n=e=>this.removeEdge(this._edgeObjs[e]);delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],s.A(this.children(e),(e=>{this.setParent(e)})),delete this._children[e]),s.A(i.A(this._in[e]),n),delete this._in[e],delete this._preds[e],s.A(i.A(this._out[e]),n),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,n){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(d.A(n))n=A;else{for(var t=n+="";!d.A(t);t=this.parent(t))if(t===e)throw new Error("Setting "+n+" as parent of "+e+" would create a cycle");this.setNode(n)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=n,this._children[n][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var n=this._parent[e];if(n!==A)return n}}children(e){if(d.A(e)&&(e=A),this._isCompound){var n=this._children[e];if(n)return i.A(n)}else{if(e===A)return this.nodes();if(this.hasNode(e))return[]}}predecessors(e){var n=this._preds[e];if(n)return i.A(n)}successors(e){var n=this._sucs[e];if(n)return i.A(n)}neighbors(e){var n=this.predecessors(e);if(n)return l(n,this.successors(e))}isLeaf(e){return 0===(this.isDirected()?this.successors(e):this.neighbors(e)).length}filterNodes(e){var n=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});n.setGraph(this.graph());var t=this;s.A(this._nodes,(function(t,r){e(r)&&n.setNode(r,t)})),s.A(this._edgeObjs,(function(e){n.hasNode(e.v)&&n.hasNode(e.w)&&n.setEdge(e,t.edge(e))}));var r={};function o(e){var i=t.parent(e);return void 0===i||n.hasNode(i)?(r[e]=i,i):i in r?r[i]:o(i)}return this._isCompound&&s.A(n.nodes(),(function(e){n.setParent(e,o(e))})),n}setDefaultEdgeLabel(e){return o.A(e)||(e=r.A(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return g.A(this._edgeObjs)}setPath(e,n){var t=this,r=arguments;return p.A(e,(function(e,o){return r.length>1?t.setEdge(e,o,n):t.setEdge(e,o),o})),this}setEdge(){var e,n,t,r,o=!1,i=arguments[0];"object"==typeof i&&null!==i&&"v"in i?(e=i.v,n=i.w,t=i.name,2===arguments.length&&(r=arguments[1],o=!0)):(e=i,n=arguments[1],t=arguments[3],arguments.length>2&&(r=arguments[2],o=!0)),e=""+e,n=""+n,d.A(t)||(t=""+t);var u=y(this._isDirected,e,n,t);if(Object.prototype.hasOwnProperty.call(this._edgeLabels,u))return o&&(this._edgeLabels[u]=r),this;if(!d.A(t)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(n),this._edgeLabels[u]=o?r:this._defaultEdgeLabelFn(e,n,t);var a=function(e,n,t,r){var o=""+n,i=""+t;if(!e&&o>i){var u=o;o=i,i=u}var a={v:o,w:i};r&&(a.name=r);return a}(this._isDirected,e,n,t);return e=a.v,n=a.w,Object.freeze(a),this._edgeObjs[u]=a,b(this._preds[n],e),b(this._sucs[e],n),this._in[n][u]=a,this._out[e][u]=a,this._edgeCount++,this}edge(e,n,t){var r=1===arguments.length?_(this._isDirected,arguments[0]):y(this._isDirected,e,n,t);return this._edgeLabels[r]}hasEdge(e,n,t){var r=1===arguments.length?_(this._isDirected,arguments[0]):y(this._isDirected,e,n,t);return Object.prototype.hasOwnProperty.call(this._edgeLabels,r)}removeEdge(e,n,t){var r=1===arguments.length?_(this._isDirected,arguments[0]):y(this._isDirected,e,n,t),o=this._edgeObjs[r];return o&&(e=o.v,n=o.w,delete this._edgeLabels[r],delete this._edgeObjs[r],m(this._preds[n],e),m(this._sucs[e],n),delete this._in[n][r],delete this._out[e][r],this._edgeCount--),this}inEdges(e,n){var t=this._in[e];if(t){var r=g.A(t);return n?u.A(r,(function(e){return e.v===n})):r}}outEdges(e,n){var t=this._out[e];if(t){var r=g.A(t);return n?u.A(r,(function(e){return e.w===n})):r}}nodeEdges(e,n){var t=this.inEdges(e,n);if(t)return t.concat(this.outEdges(e,n))}}function b(e,n){e[n]?e[n]++:e[n]=1}function m(e,n){--e[n]||delete e[n]}function y(e,n,t,r){var o=""+n,i=""+t;if(!e&&o>i){var u=o;o=i,i=u}return o+"\x01"+i+"\x01"+(d.A(r)?"\0":r)}function _(e,n){return y(e,n.v,n.w,n.name)}w.prototype._nodeCount=0,w.prototype._edgeCount=0},8585:(e,n,t)=>{t.d(n,{A:()=>u});var r=Object.prototype.hasOwnProperty;const o=function(e,n){return null!=e&&r.call(e,n)};var i=t(5054);const u=function(e,n){return null!=e&&(0,i.A)(e,n,o)}},8593:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(4342);const o=function(e){var n=(0,r.A)(e),t=n%1;return n==n?t?n-t:n:0}},9354:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(6318),o=t(2851),i=t(7819),u=t(5353),a=t(3149),s=t(901);const d=function(e,n,t,r){if(!(0,a.A)(e))return e;for(var d=-1,c=(n=(0,i.A)(n,e)).length,h=c-1,f=e;null!=f&&++d<c;){var v=(0,s.A)(n[d]),l=t;if("__proto__"===v||"constructor"===v||"prototype"===v)return e;if(d!=h){var g=f[v];void 0===(l=r?r(g,v,f):void 0)&&(l=(0,a.A)(g)?g:(0,u.A)(n[d+1])?[]:{})}(0,o.A)(f,v,l),f=f[v]}return e};const c=function(e,n,t){for(var o=-1,u=n.length,a={};++o<u;){var s=n[o],c=(0,r.A)(e,s);t(c,s)&&d(a,(0,i.A)(s,e),c)}return a}},9703:(e,n,t)=>{t.d(n,{A:()=>u});var r=t(8496),o=t(2049),i=t(3098);const u=function(e){return"string"==typeof e||!(0,o.A)(e)&&(0,i.A)(e)&&"[object String]"==(0,r.A)(e)}}}]);