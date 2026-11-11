'use strict';
// Actual rendered image frames are selected by scroll position, not a CSS loop.
(()=>{
const canvas=document.getElementById('cinemaCanvas'),ctx=canvas.getContext('2d');
const reduced=matchMedia('(prefers-reduced-motion: reduce)'),mobile=matchMedia('(max-width: 700px)');
const frames=new Map();let index=0,queued=false,previous=-1;
const lite=()=>(reduced.matches&&!document.documentElement.classList.contains('motion-enabled'))||mobile.matches;
const paused=()=>document.documentElement.classList.contains('motion-paused');
function paint(){const image=frames.get(index)||frames.get(previous);if(!image?.complete||!image.naturalWidth)return;const d=Math.min(devicePixelRatio||1,1.5),w=innerWidth,h=innerHeight;if(canvas.width!==Math.round(w*d)||canvas.height!==Math.round(h*d)){canvas.width=Math.round(w*d);canvas.height=Math.round(h*d)}ctx.setTransform(d,0,0,d,0,0);const scale=Math.max(w/image.naturalWidth,h/image.naturalHeight),iw=image.naturalWidth*scale,ih=image.naturalHeight*scale;ctx.clearRect(0,0,w,h);ctx.drawImage(image,(w-iw)/2,(h-ih)/2,iw,ih)}
function load(n){if(n<0||n>159||frames.has(n))return;const img=new Image();img.decoding='async';frames.set(n,img);img.onload=()=>{if(n===index){previous=n;paint()}};img.onerror=()=>frames.delete(n);img.src=`assets/cinematic/frame-${String(n).padStart(3,'0')}.webp`}
function update(){queued=false;if(paused()){paint();return}const hero=document.getElementById('home'),range=Math.max(innerHeight*1.7,hero.offsetHeight);index=lite()?0:Math.min(159,Math.max(0,Math.round(scrollY/range*159)));load(index);paint();if(!lite()){for(const offset of [-2,-1,1,2])load(index+offset);for(const [key,img] of frames){if(Math.abs(key-index)>8&&key!==previous)frames.delete(key)}}}
function requestUpdate(){if(!queued){queued=true;requestAnimationFrame(update)}}
addEventListener('scroll',requestUpdate,{passive:true});addEventListener('resize',requestUpdate);reduced.addEventListener('change',requestUpdate);mobile.addEventListener('change',requestUpdate);update();
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('arrived');observer.unobserve(entry.target)}}},{threshold:.06});
document.querySelectorAll('section .glass, .section-title, .hero>div').forEach((el,i)=>{el.classList.add('motion-ready');el.style.setProperty('--delay',(i%3)*70+'ms');observer.observe(el)});
const cursor=document.getElementById('neonCursor');let x=innerWidth/2,y=innerHeight/2,pending=false;
addEventListener('pointermove',e=>{if(lite()||paused()||e.pointerType!=='mouse')return;x=e.clientX;y=e.clientY;if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;cursor.style.transform=`translate3d(${x}px,${y}px,0)`;document.documentElement.style.setProperty('--pointer-x',((x/innerWidth-.5)*12)+'px');document.documentElement.style.setProperty('--pointer-y',((y/innerHeight-.5)*12)+'px')})},{passive:true});
// Update legacy wording inside the local guide as well as the header.
document.getElementById('volume').setAttribute('aria-label','Click sound volume');
})();
