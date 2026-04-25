const toggle=document.getElementById('mobileToggle');
const nav=document.getElementById('navLinks');

if(toggle){
toggle.addEventListener('click',()=>{
nav.classList.toggle('open');
});
}

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('active');
}
});
});

document.querySelectorAll('.reveal').forEach(el=>{
observer.observe(el);
});