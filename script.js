(()=>{"use strict";
const one=(s,r=document)=>r.querySelector(s),all=(s,r=document)=>Array.from(r.querySelectorAll(s));const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;const G=window.gsap,S=window.ScrollTrigger;
const hd=one("#header"),prog=one("#progress-fill"),burger=one("#burger"),nav=one("#mobile-nav");const year=one("#year");if(year)year.textContent=String(new Date().getFullYear());
function closeNav(){if(!nav||!burger)return;nav.hidden=true;burger.setAttribute("aria-expanded","false");burger.setAttribute("aria-label","Abrir menu");document.body.style.overflow=""}
if(burger&&nav){burger.addEventListener("click",()=>{const opened=burger.getAttribute("aria-expanded")==="true";if(opened)closeNav();else{nav.hidden=false;burger.setAttribute("aria-expanded","true");burger.setAttribute("aria-label","Fechar menu");document.body.style.overflow="hidden"}});all("a",nav).forEach(a=>a.addEventListener("click",closeNav));addEventListener("keydown",e=>{if(e.key==="Escape")closeNav()});addEventListener("resize",()=>{if(innerWidth>960)closeNav()})}
let tick=false;addEventListener("scroll",()=>{if(tick)return;tick=true;requestAnimationFrame(()=>{hd?.classList.toggle("is-scrolled",scrollY>30);const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);if(prog)prog.style.transform="scaleX("+Math.min(1,scrollY/max)+")";tick=false})},{passive:true});
const reviews=one("#reviews-rail");function moveReview(d){const card=one(".review",reviews);if(!reviews||!card)return;reviews.scrollBy({left:d*(card.getBoundingClientRect().width+18),behavior:reduced?"auto":"smooth"})}one("#review-prev")?.addEventListener("click",()=>moveReview(-1));one("#review-next")?.addEventListener("click",()=>moveReview(1));
if(reduced)return;
if(window.Lenis){try{const lenis=new window.Lenis({duration:1.15,anchors:true});if(G&&S){lenis.on("scroll",S.update);G.ticker.add(t=>lenis.raf(t*1000));G.ticker.lagSmoothing(0)}else{function raf(t){lenis.raf(t);requestAnimationFrame(raf)}requestAnimationFrame(raf)}}catch(e){console.warn("Smooth-scroll fallback",e)}}
if(!G||!S){one(".hero__arch")?.style.setProperty("clip-path","none");return;}
G.registerPlugin(S);
G.set(".hero__line>span",{yPercent:105,opacity:0});
G.to(".hero__line>span",{yPercent:0,opacity:1,stagger:.12,duration:1.1,ease:"power4.out",delay:.2,clearProps:"transform,opacity"});
G.to(".hero__arch",{clipPath:"inset(0% 0 0 0)",duration:1.5,ease:"power3.inOut",delay:.1});
G.fromTo(".hero__arch img",{scale:1.22},{scale:1.02,duration:1.8,ease:"power3.out",delay:.1});
G.fromTo(".orbit",{opacity:0,scale:.6,rotation:-40},{opacity:1,scale:1,rotation:0,duration:1.2,delay:.9,ease:"back.out(1.4)"});
all("[data-reveal]").forEach(el=>{G.fromTo(el,{opacity:0,y:33},{opacity:1,y:0,duration:.85,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 92%",once:true}})});
G.to(".hero__right",{yPercent:7,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});
G.to(".statement__image",{yPercent:14,ease:"none",scrollTrigger:{trigger:".statement",start:"top bottom",end:"bottom top",scrub:1}});
G.to(".statement__content h2",{yPercent:-9,ease:"none",scrollTrigger:{trigger:".statement",start:"top bottom",end:"bottom top",scrub:1}});
G.fromTo(".method__steps article",{y:50,opacity:.15},{y:0,opacity:1,stagger:.18,duration:1,ease:"power3.out",scrollTrigger:{trigger:".method__steps",start:"top 80%",once:true}});
G.to(".about__portrait img",{yPercent:-8,ease:"none",scrollTrigger:{trigger:".about",start:"top bottom",end:"bottom top",scrub:1}});
G.fromTo(".venue__wide",{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",ease:"none",scrollTrigger:{trigger:".venue__collage",start:"top 90%",end:"top 37%",scrub:1}});
G.fromTo(".venue__narrow",{clipPath:"inset(100% 0 0 0)"},{clipPath:"inset(0% 0 0 0)",ease:"none",scrollTrigger:{trigger:".venue__collage",start:"top 85%",end:"top 32%",scrub:1}});
const pics=all(".benefits__picture"),sections=all(".benefit");let active=-1;function swap(i){if(i===active)return;active=i;pics.forEach((p,j)=>p.classList.toggle("is-active",j===i));const c=one("#picture-counter");if(c)c.textContent=String(i+1).padStart(2,"0")}
if(matchMedia("(min-width: 701px)").matches){sections.forEach((section,i)=>S.create({trigger:section,start:"top 55%",end:"bottom 45%",onEnter:()=>swap(i),onEnterBack:()=>swap(i)}))}
addEventListener("load",()=>S.refresh(),{once:true});
})();