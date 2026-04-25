/* MOBILE NAV */

const toggle = document.getElementById('mobileToggle');
const nav = document.getElementById('navLinks');

if(toggle){
toggle.addEventListener('click',()=>{
nav.classList.toggle('open');
});
}



/* REVEALS */

const observer = new IntersectionObserver(
(entries)=>{
entries.forEach((entry)=>{

if(entry.isIntersecting){
entry.target.classList.add('active');
}

});
},
{
threshold:.15
}
);

document
.querySelectorAll('.reveal')
.forEach(el=>{
observer.observe(el);
});



/* PARALLAX */

const heroZoom=document.querySelector('.hero-bg-zoom');

window.addEventListener('scroll',()=>{

const y=window.pageYOffset;

if(heroZoom){
heroZoom.style.transform=
`scale(1.08) translateY(${y*.08}px)`;
}

document.querySelectorAll('.parallax').forEach(el=>{
el.style.transform=
`translateY(${y*.15}px)`;
});

});



/* STAGGER CARDS */

const cards=document.querySelectorAll(
'.dish-card,.feature-card,.hours-panel'
);

cards.forEach((card,i)=>{
card.style.transitionDelay=
`${i*90}ms`;
});



/* SUBTLE CURSOR GLOW */

const glow=document.createElement('div');
glow.classList.add('cursor-glow');

document.body.appendChild(glow);

window.addEventListener('mousemove',(e)=>{

glow.style.left=e.clientX+'px';
glow.style.top=e.clientY+'px';

});



/* HEADER SHRINK */

const header=document.querySelector('.site-header');

window.addEventListener('scroll',()=>{

if(window.scrollY>80){
header.classList.add('scrolled');
}
else{
header.classList.remove('scrolled');
}

});



/* FLOATING BUTTON MOTION */

document.querySelectorAll('.btn').forEach(btn=>{

btn.addEventListener('mousemove',(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

btn.style.transform=
`translateY(-4px) rotateX(${(y-20)/14}deg)
rotateY(${(x-60)/18}deg)`;

});

btn.addEventListener('mouseleave',()=>{

btn.style.transform='translateY(0)';

});

});



/* OPTIONAL CINEMATIC PAGE FADE */

window.addEventListener('load',()=>{
document.body.classList.add('loaded');
});