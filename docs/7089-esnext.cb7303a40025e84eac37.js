(self.webpackChunkeventCal=self.webpackChunkeventCal||[]).push([[7089],{7089:function(e,t,s){"use strict";s.r(t),s.d(t,{startFocusVisible:function(){return o}});const n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],o=()=>{let e=[],t=!0;const s=document,o=t=>{e.forEach(e=>e.classList.remove("ion-focused")),t.forEach(e=>e.classList.add("ion-focused")),e=t},c=()=>{t=!1,o([])};s.addEventListener("keydown",e=>{t=n.includes(e.key),t||o([])}),s.addEventListener("focusin",e=>{if(t&&e.composedPath){const t=e.composedPath().filter(e=>!!e.classList&&e.classList.contains("ion-focusable"));o(t)}}),s.addEventListener("focusout",()=>{s.activeElement===s.body&&o([])}),s.addEventListener("touchstart",c),s.addEventListener("mousedown",c)}}}]);