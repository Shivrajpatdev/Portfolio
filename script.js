
const nav=document.querySelector('.nav');
const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));

const page=(location.pathname.split('/').pop()||'index.html');
document.querySelectorAll('.navlinks a').forEach(a=>{
  if(a.getAttribute('href')===page || (page===''&&a.getAttribute('href')==='index.html')) a.classList.add('active');
});

const glow=document.querySelector('.cursor-glow'), dot=document.querySelector('.cursor-dot');
let tx=innerWidth/2,ty=innerHeight/2,x=tx,y=ty;
addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY});
function tick(){
 x+=(tx-x)*.13;y+=(ty-y)*.13;
 if(glow){glow.style.left=x+'px';glow.style.top=y+'px'}
 if(dot){dot.style.left=tx+'px';dot.style.top=ty+'px'}
 requestAnimationFrame(tick);
} tick();

document.querySelectorAll('.card').forEach(c=>{
 c.addEventListener('pointermove',e=>{
   const r=c.getBoundingClientRect();
   c.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');
   c.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%');
 })
});

const obs=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})
},{threshold:.08});
document.querySelectorAll('.fade').forEach(e=>obs.observe(e));
