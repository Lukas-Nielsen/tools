if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const o=e=>n(e,c),b={module:{uri:c},exports:s,require:o};i[c]=Promise.all(d.map((e=>b[e]||o(e)))).then((e=>(r(...e),s)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"9b3e42cd8ca9a82ecdb451e42fbf7463"},{url:"android-chrome-512x512.png",revision:"62d1b2fe9e09b67209831a115d4dbc14"},{url:"apple-touch-icon.png",revision:"55e94774c724682bb7a4225f97d855e3"},{url:"assets/index-BAB5Znqk.js",revision:null},{url:"assets/index-DS6HLBNt.css",revision:null},{url:"favicon-16x16.png",revision:"169e1892d805e929a8a9d1d0bbd97cbb"},{url:"favicon-32x32.png",revision:"3ca3d8f0bb278d5de9a9b83bcab56dde"},{url:"favicon.ico",revision:"df66bff2e07bda5c615ade0ebb9e3d03"},{url:"index.html",revision:"a8da5cf68f5bd298d8ad4ad57f48cccc"},{url:"mstile-150x150.png",revision:"c3cb1c2bb564bcecde17228e1b51adba"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"safari-pinned-tab.svg",revision:"edd68dee9ccb638be172891065b45ebc"},{url:"manifest.webmanifest",revision:"37dfa5a57cdc88745617c28d1b852443"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
