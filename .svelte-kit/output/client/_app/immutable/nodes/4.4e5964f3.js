import{S as v,i as y,s as w,k as h,q as p,a as V,e as k,l as g,m as b,r as _,h as f,c as E,b as m,C as u,D as d,I as H}from"../chunks/index.13b2c16a.js";import{p as $}from"../chunks/stores.2b8e767d.js";function q(c){let e,r,o=c[0][0]+"",s,n,i=c[0][1]+"",l;return{c(){e=h("h1"),r=p("Viewing docs for feature "),s=p(o),n=p(" and concept "),l=p(i)},l(t){e=g(t,"H1",{});var a=b(e);r=_(a,"Viewing docs for feature "),s=_(a,o),n=_(a," and concept "),l=_(a,i),a.forEach(f)},m(t,a){m(t,e,a),u(e,r),u(e,s),u(e,n),u(e,l)},p:d,d(t){t&&f(e)}}}function A(c){let e,r,o=c[0][0]+"",s;return{c(){e=h("h1"),r=p("Viewing docs for feature "),s=p(o)},l(n){e=g(n,"H1",{});var i=b(e);r=_(i,"Viewing docs for feature "),s=_(i,o),i.forEach(f)},m(n,i){m(n,e,i),u(e,r),u(e,s)},p:d,d(n){n&&f(e)}}}function C(c){let e,r,o,s;function n(t,a){if(t[0].length===1)return A;if(t[0].length==2)return q}let i=n(c),l=i&&i(c);return{c(){e=h("h1"),r=p("docs home page"),o=V(),l&&l.c(),s=k()},l(t){e=g(t,"H1",{});var a=b(e);r=_(a,"docs home page"),a.forEach(f),o=E(t),l&&l.l(t),s=k()},m(t,a){m(t,e,a),u(e,r),m(t,o,a),l&&l.m(t,a),m(t,s,a)},p(t,[a]){l&&l.p(t,a)},i:d,o:d,d(t){t&&f(e),t&&f(o),l&&l.d(t),t&&f(s)}}}function S(c,e,r){let o;return H(c,$,n=>r(1,o=n)),console.log(o.params),[o.params.slug.split("/")]}class I extends v{constructor(e){super(),y(this,e,S,C,w,{})}}export{I as component};
