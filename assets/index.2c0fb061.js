import{j as l,r as d,R as h,a as f}from"./vendor.8ab39df8.js";const m=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}};m();var p="https://vicropht.com/assets/avatar.e404bf51.jpg",u="https://vicropht.com/assets/aestethic-avatar.787e5485.jpg";const e=l.exports.jsx,a=l.exports.jsxs;function v(r){return e("div",{className:`${r.isAestethic?"aesthetic-effect-crt":""} profile-pic`,children:r.isAestethic?e("img",{src:u}):e("img",{src:p})})}function g(r){return e("div",{className:"container-center",children:a("div",{className:`wrapper ${r.isAestethic?"aesthetic-mode":""}`,children:[e("h1",{className:`title ${r.isAestethic?"aesthetic-effect-text-glitch":""}`,"data-glitch":"V I C R O P H T",children:"V I C R O P H T"}),e("a",{className:"discord",href:"https://discord.com/users/355435413705326597",children:"[root]#6722"}),e(v,{isAestethic:r.isAestethic}),a("div",{className:"socials",children:[e("a",{href:"https://twitter.com/CristophVictor",children:"Twitter"}),e("a",{href:"https://github.com/Vicropht",children:"GitHub"}),e("a",{href:"mailto:vicropht@protonmail.com",children:"Contact"}),e("a",{href:"https://www.linkedin.com/in/vicropht/",children:"LinkedIn"})]})]})})}var A="https://vicropht.com/assets/win_logo.c872e364.svg";function N(){const[r,c]=d.exports.useState(!1),o=()=>{c(s=>!s)};return a("div",{className:`App ${r?"aestethic":""}`,children:[e("div",{className:"background-effect",children:[...Array(200)].map((s,t)=>e("div",{className:"circle-container",children:e("div",{className:"circle"})},t))}),e("div",{children:e(g,{isAestethic:r})}),e("div",{className:"win-wrapper",children:e("button",{title:"A E S T E T H I C  M O D E",onClick:o,children:e("img",{src:A,width:30})})})]})}h.render(e(f.StrictMode,{children:e(N,{})}),document.getElementById("root"));