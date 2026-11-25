(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;

/* ---------- Data ---------- */
const PLAY=[
 ['images/onedata.png','AI faces landing page','Web'],
 ['videos/vid2.mp4','Buy Me a Coffee shop landing page','Motion'],
 ['images/3.png','Challenge app login','Mobile'],
 ['videos/vid1.mp4','Buy Me a Coffee donation widget','Motion'],
 ['images/4.png','Buy Me a Coffee podcast feature','Web'],
 ['images/2.png','Staycation website concept','Web'],
 ['images/5.png','1-on-1 landing page','Web'],
 ['videos/vid3.mp4','Notification interaction','Motion'],
 ['images/6.png','Dentsoft medical admin dashboard','Dashboard'],
 ['images/7.png','Internal notification banners','Web'],
 ['images/8.png','Pixel creative agency','Web'],
 ['images/9.png','Hip Pip — challenge app','Mobile'],
 ['images/10.png','Revamped checkout page','Web'],
 ['videos/vid9.mp4','More option','Motion'],
 ['images/12.png','Sidebar for item purchase details','Web'],
 ['videos/vid4.mp4','Revamped mobile application','Motion'],
 ['images/11.png','Shop discount feature','Web'],
 ['videos/vid8.mp4','Emails','Motion'],
 ['images/15.png','Dentsoft medical app UI elements','Dashboard'],
 ['images/14.png','Cake shop landing page','Web'],
 ['videos/vid5.mp4','Bio.Link PRO screens','Motion'],
 ['images/13.png','Shop detailed view','Web'],
 ['videos/vid7.mp4','Features of Buy Me a Coffee','Motion'],
 ['videos/vid6.mp4','1-on-1 landing page Figma prototype','Motion']
];

const CASES={
 archer:{
  next:'bmc', title:'Archer IRM', kicker:'Website · Trantor Technologies', thumb:'',
  meta:[['Role','Senior UI/UX Designer'],['Company','Trantor Technologies (outsourced to Archer IRM)'],['When','Jul 2024 – Present'],['Scope','Website design, WordPress & Wix build']],
  stats:[['66%','sales growth, up from 30%, according to the growth team'],['0 → 1','website designed and launched'],['2','platforms: WordPress & Wix']],
  blocks:[
   {h:'Goal',lead:'Give Archer IRM, a leading integrated risk management software company, a website that makes complex enterprise risk solutions easy to understand and easy to act on.',p:'I joined as an outsourced design partner through Trantor Technologies, working remotely with Archer’s marketing and development teams.'},
   {h:'Challenge',list:[['Complex subject matter','Integrated risk management is dense. Pages had to explain it clearly without overwhelming visitors.'],['Two platforms','The website had to be implemented in both WordPress and Wix while staying visually consistent.'],['Growth targets','Design decisions needed to support the sales goals tracked by the growth team.']]},
   {h:'Approach',list:[['Design from scratch','Page layouts, reusable components and responsive templates built for the Archer brand.'],['Build in WordPress & Wix','Designs implemented directly on both platforms so marketing can keep iterating without developer bottlenecks.'],['Concept to production','Regular collaboration with marketing and development to move designs live.']]},
   {h:'Outcome',lead:'According to the growth team, sales growth increased from 30% to 66% after the new website launched.',p:'The site gave Archer a clearer story, reusable building blocks and a platform their teams can update themselves.'}
  ]
 },
 bmc:{
  next:'shop', title:'Buy Me a Coffee — Mobile App', kicker:'UX/UI Design · Design system', thumb:'images/b.png',
  meta:[['Role','Lead Product Designer'],['When','2022 – 2024'],['Focus','Mobile app, design system'],['Platforms','iOS, Android']],
  stats:[['9M → 32M','daily user engagement'],['+60%','engagement from user studies and personas'],['30+','features launched in 24 months']],
  blocks:[
   {m:[['images/b.png',1]]},
   {h:'Goal',lead:'BMAC’s mobile application faced usability and design challenges that hindered the user experience and could limit its potential for growth.',p:'These included navigation issues, inconsistent design elements, and limited functionality compared to the web version. Users struggled to explore content, make donations and interact with creators seamlessly.'},
   {h:'Process',p:'A preliminary wireframe was sketched out using Mockflow, then refined through user studies and personas distilled from 100+ hours of research into a unified product vision.',m:[['images/b1.png',1]]},
   {h:'Challenges',list:[['Cross-platform development','Creating a cohesive user experience across both Android and iOS.'],['Feature integration','Embedding the unique features of Buy Me a Coffee in a mobile interface without compromising user-friendliness.'],['White-label customization','Designing a system that adapts to various brand identities without losing the core functionality and feel of the app.']],m:[['images/b2.png'],['images/b3.png'],['images/b4.png'],['images/b5.png']]},
   {h:'Solution',list:[['Unified design system','Built from 0 to 1 to keep visuals and interactions consistent across platforms while allowing branding variations. It cut development time by 50% and improved collaboration by 85%.'],['Feature-first approach','User-centric features first, so the core essence of Buy Me a Coffee is evident in every interaction.'],['Seamless switching','Supporters and creators use the app with a simple switch, removing the need for two separate applications.']],m:[['videos/vid4.mp4',1]]},
   {h:'My role',lead:'I prioritized a cleaner, more intuitive interface with better accessibility and responsiveness.',p:'I optimized navigation for key features, streamlined payments to offer more options and faster transactions, and integrated messaging and community tools to improve interaction between creators and supporters. The redesign also includes stronger security and improved privacy controls to protect user data.'}
  ]
 },
 shop:{
  next:'bio', title:'Buy Me a Coffee — Shop', kicker:'UX/UI Design · Brainstorming', thumb:'images/s.png',
  meta:[['Role','Lead Product Designer'],['When','2022 – 2024'],['Focus','E-commerce, checkout, discounts'],['Platform','Web']],
  stats:[['100+','hours of user research distilled'],['PWYW','users’ most loved feature'],['1','checkout flow, simplified']],
  blocks:[
   {m:[['images/s.png',1]]},
   {h:'Goal',lead:'The Shop lets creators sell digital products like e-books and music directly to supporters.',p:'It is user-friendly, supports various file formats, integrates with Buy Me a Coffee, and offers customizable listings, flexible pricing, instant payments and sales tracking.'},
   {h:'User research',p:'The user research process shaped the shop experience, from how creators list products to how supporters check out.',m:[['images/s0.png'],['images/s0.1.png'],['images/s0.2.png'],['images/s1.png']]},
   {h:'What the Shop offers',list:[['Customization','Creators can sell e-books, guides, templates, music, videos and presets in common formats such as PDF, MP3, MP4 and ZIP, with detailed listings, images and flexible pricing.'],['Payment and delivery','Payments are processed instantly so funds reach creators immediately, and shipping can be enabled by country to manage deliveries by buyer location.'],['Analytics and support','Sales tracking tools help creators monitor product performance and customer behaviour, backed by customer support for creators and buyers.']],m:[['images/s4.png',1],['images/s2.png']]},
   {h:'Most loved feature',lead:'Pay what you want (PWYW) lets supporters choose the amount they pay.',p:'It fosters generosity, lets supporters contribute according to their means and appreciation for the creator’s work, and encourages a closer connection between creators and their audience.'},
   {h:'Discount feature',lead:'Creators can create and distribute discounts on products or memberships.',p:'They can set specific discount codes or apply automatic discounts for certain products or membership tiers, customized by percentage or fixed amount. This helps run promotions, reward loyal supporters and attract new patrons.',m:[['images/s3.png']]},
   {h:'My role',lead:'I refined the checkout process, highlighted the shopping cart and enabled discounts for "pay what you want" purchases.',p:'The focus was an intuitive interface that improves navigation and the overall shopping experience, streamlining transactions and increasing user satisfaction on the platform.'}
  ]
 },
 bio:{
  next:'archer', title:'Bio.Link', kicker:'UX/UI Design · Product design', thumb:'images/L.png',
  meta:[['Role','User Interface Designer'],['When','2022 (Part-time)'],['Focus','Dashboard, themes, mobile app'],['Users','10M+ loved by']],
  stats:[['10+','streamlined themes introduced'],['10M+','users loving the product'],['Pro','subscription designed & launched']],
  blocks:[
   {m:[['images/L.png',1]]},
   {h:'Goal',lead:'Provide a streamlined digital presence where users consolidate all their links in one easily accessible place.',p:'The product allows seamless hosting on custom domains and publishing of newsletters and articles.'},
   {h:'Details',list:[['Link consolidation','Aggregate all your online links into a single, customizable URL for easy sharing and management.'],['User-friendly interface','A simple, intuitive interface designed for users of all tech levels.'],['Custom domains','Host your Bio.Link page on your own domain for a personalized, professional presence.'],['Analytics','Track page performance with integrated analytics to understand visitor behaviour and engagement.']],m:[['videos/vid10.mp4',1]]},
   {h:'More features',list:[['Social media integration','Integrate your social profiles for a comprehensive view of your online presence.'],['Customization options','Personalize your page with design and layout options to match your brand or style.'],['Security and privacy','Robust security features to keep data safe and control the privacy of your content.']],m:[['videos/vid11.mp4',1]]},
   {h:'My role',lead:'I revamped the admin dashboard, introduced 10+ streamlined themes, led the launch of a Pro subscription and overhauled the mobile app.',p:'The dashboard revamp boosted engagement within a year, the Pro subscription for the free tier targeted revenue growth, and the mobile overhaul reinforced the brand identity.',m:[['images/L1.png'],['videos/vid5.mp4']]}
  ]
 }
};
const CASE_ORDER=['archer','bmc','shop','bio'];

const XP=[
 ['Trantor Technologies','Senior UI/UX Designer · Remote','Jul 2024 – Now',['Outsourced design partner for Archer IRM, focused on its website.','Designed the website from scratch and implemented it in WordPress and Wix; sales growth rose from 30% to 66%, according to the growth team.','Built layouts and reusable components with Archer’s marketing and development teams.'],'archer'],
 ['Buy Me a Coffee','Lead Product Designer · Remote','2022 – 2024',['Established a design system from scratch; adoption by marketing and web teams improved consistency in handoff and async collaboration by 50%.','Launched 30+ features in 24 months from 100+ hours of user research.','Boosted engagement 60% through user studies and personas.'],'bmc'],
 ['Bio.Link','User Interface Designer · Part-time','2022',['Revamped the admin dashboard and introduced 10+ themes.','Led the launch of a Pro subscription.','Overhauled the mobile app.'],'bio'],
 ['Riafy Technologies','UI/UX Designer','2020 – 2022',['Curated an internal style compendium across web, mobile and CRM platforms.','Ran interviews, surveys and usability testing to validate design decisions.'],null]
];
const SKILLS=['Figma','UI Design','UX Design','Design Systems','User Research','Interaction Design','Product Strategy','Prototyping','Website Design','WordPress','Wix','Branding'];

/* ---------- Helpers ---------- */
const isVid=s=>/\.mp4$/.test(s);
const media=(src,alt='',eager)=>isVid(src)?`<video data-src="${src}" muted loop playsinline preload="none"></video>`:`<img src="${src}" alt="${alt}" loading="${eager?'eager':'lazy'}" decoding="async">`;

/* ---------- Headline word reveal ---------- */
const h=$('#headline');
h.innerHTML=h.textContent.trim().split(/\s+/).map((w,i)=>`<span class="w"><span style="transition-delay:${i*45}ms">${w}</span></span>`).join(' ');
requestAnimationFrame(()=>setTimeout(()=>h.classList.add('in'),80));

/* ---------- Clock ---------- */
function clock(){
  const t=new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'Asia/Kolkata'}).format(new Date());
  $('#clock').textContent=t; $('#clockInfo').textContent=t+' IST';
}
clock(); setInterval(clock,20000);

/* ---------- Count-up ---------- */
function countUp(el){
  if(el.dataset.done) return; el.dataset.done=1;
  const end=+el.dataset.count, suf=el.dataset.suffix||'', dur=1400, t0=performance.now();
  if(reduce){el.textContent=end+suf;return}
  (function f(t){const p=Math.min((t-t0)/dur,1),e=1-Math.pow(1-p,4);el.textContent=Math.round(end*e)+suf;if(p<1)requestAnimationFrame(f)})(t0);
}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){countUp(e.target);io.unobserve(e.target)}}),{threshold:.4});
$$('[data-count]').forEach(n=>io.observe(n));

/* ---------- Lazy video play/pause ---------- */
const vio=new IntersectionObserver(es=>es.forEach(e=>{
  const v=e.target;
  if(e.isIntersecting){ if(!v.src&&v.dataset.src) v.src=v.dataset.src; v.play().catch(()=>{}); }
  else v.pause();
}),{rootMargin:'200px'});
const watchVideos=r=>$$('video[data-src]',r).forEach(v=>vio.observe(v));

/* ---------- Project cards: hover video, cursor, stacking ---------- */
const projects=$$('.project');
projects.forEach(p=>{
  p.addEventListener('click',()=>openCase(p.dataset.project));
  p.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openCase(p.dataset.project)}});
  const v=$('video',p);
  p.addEventListener('mouseenter',()=>{if(v){if(!v.src)v.src=v.dataset.src;v.play().catch(()=>{})}});
  p.addEventListener('mouseleave',()=>{if(v)v.pause()});
  p.addEventListener('pointermove',e=>{const r=p.getBoundingClientRect();p.style.setProperty('--mx',(e.clientX-r.left)+'px');p.style.setProperty('--my',(e.clientY-r.top)+'px')});
});
function stack(){
  projects.forEach((p,i)=>{
    const n=projects[i+1]; if(!n){return}
    const nr=n.getBoundingClientRect(), pr=p.getBoundingClientRect();
    const prog=Math.min(Math.max(1-(nr.top-pr.top)/pr.height,0),1);
    p.style.transform=`scale(${1-prog*.05})`; p.style.filter=`brightness(${1-prog*.08})`;
  });
}

/* ---------- Custom cursor ---------- */
const cur=$('#cursor'), curLabel=$('#cursorLabel');
let cx=0,cy=0,tx=0,ty=0;
if(fine&&!reduce){
  document.body.classList.add('has-cursor');
  addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;cur.classList.add('on')});
  document.addEventListener('mouseleave',()=>cur.classList.remove('on'));
  (function loop(){cx+=(tx-cx)*.2;cy+=(ty-cy)*.2;cur.style.left=cx+'px';cur.style.top=cy+'px';requestAnimationFrame(loop)})();
  const bind=(sel,cls,label)=>document.addEventListener('pointerover',e=>{
    const t=e.target.closest(sel); if(!t)return;
    cur.classList.add(cls); if(label)curLabel.textContent=label;
    const out=()=>{cur.classList.remove(cls);t.removeEventListener('pointerleave',out)}; t.addEventListener('pointerleave',out);
  });
  bind('.project','big','View');
  bind('.tile','big','Open');
  bind('.cs-next','big','Next');
  bind('a,button,.xp li,.skills span','link');
}

/* ---------- Hero blob follows pointer ---------- */
const blob=$('#blob'), hero=$('#hero');
let bx=innerWidth*.3,by=innerHeight*.4,btx=bx,bty=by;
hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();btx=e.clientX-r.left;bty=e.clientY-r.top});
(function bl(){bx+=(btx-bx)*.06;by+=(bty-by)*.06;blob.style.left=bx+'px';blob.style.top=by+'px';requestAnimationFrame(bl)})();

/* ---------- Play grid ---------- */
const grid=$('#grid');
grid.innerHTML=PLAY.map((p,i)=>`<figure class="tile" data-i="${i}">${media(p[0],p[1])}<span class="tag">${p[2]}</span><figcaption class="cap">${p[1]}</figcaption></figure>`).join('');
const tio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');tio.unobserve(e.target)}}),{threshold:.08});
$$('.tile',grid).forEach(t=>{tio.observe(t);t.addEventListener('click',()=>openLb(+t.dataset.i))});
watchVideos(grid);

/* ---------- Case study list ---------- */
$('#csList').innerHTML=CASE_ORDER.map((k,i)=>{const c=CASES[k];return `<li data-case="${k}" tabindex="0" role="button"><span class="n">${String(i+1).padStart(2,'0')}</span><span class="t">${c.title}</span><span class="k">${c.kicker}</span><span class="a">Read →</span>${c.thumb?`<img class="peek" src="${c.thumb}" alt="" loading="lazy">`:''}</li>`}).join('');
$$('#csList>li').forEach(li=>{li.addEventListener('click',()=>openCase(li.dataset.case));li.addEventListener('keydown',e=>{if(e.key==='Enter')openCase(li.dataset.case)});
  li.addEventListener('pointermove',e=>{const p=$('.peek',li);if(!p)return;const r=li.getBoundingClientRect();p.style.left=(e.clientX-r.left)+'px';p.style.top=(e.clientY-r.top)+'px'})});

/* ---------- Experience ---------- */
$('#xp').innerHTML=XP.map((x,i)=>`<li data-i="${i}"><span class="co">${x[0]}</span><span class="role">${x[1]}</span><span class="when">${x[2]}</span><div class="detail"><ul>${x[3].map(b=>`<li>${b}</li>`).join('')}</ul>${x[4]?`<p style="margin-top:10px"><a href="#" data-case="${x[4]}" style="color:var(--blue);font-weight:600">View case study →</a></p>`:''}</div></li>`).join('');
$$('#xp>li').forEach(li=>li.addEventListener('click',e=>{
  const c=e.target.closest('[data-case]'); if(c){e.preventDefault();openCase(c.dataset.case);return}
  const was=li.classList.contains('open'); $$('#xp>li').forEach(o=>o.classList.remove('open')); if(!was) li.classList.add('open');
}));
$('#xp>li').classList.add('open');
$('#skills').innerHTML=SKILLS.map(s=>`<span>${s}</span>`).join('');

/* ---------- Case study sheet ---------- */
const sheet=$('#sheet'), body=$('#sheetBody');
let lastFocus=null, openId=null;
function blockHTML(b,title){
  let h='';
  if(b.h||b.lead||b.p||b.list){
    h+=`<section class="cs-sec">${b.h?`<h4>${b.h}</h4>`:'<h4></h4>'}<div>`;
    if(b.lead)h+=`<p class="lead">${b.lead}</p>`;
    if(b.p)h+=`<p>${b.p}</p>`;
    if(b.list)h+=`<ol class="cs-list">${b.list.map((x,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><div><b>${x[0]}</b><p>${x[1]}</p></div></li>`).join('')}</ol>`;
    h+=`</div></section>`;
  }
  if(b.m) h+=`<div class="cs-gallery">${b.m.map(g=>`<figure class="${g[1]?'wide':''}">${media(g[0],title)}</figure>`).join('')}</div>`;
  return h;
}
function openCase(id){
  const c=CASES[id]; if(!c) return; openId=id; lastFocus=document.activeElement;
  const nx=CASES[c.next];
  body.innerHTML=`
   <div class="cs-hero"><small>${c.kicker}</small><h2>${c.title}</h2>
     <div class="cs-meta">${c.meta.map(m=>`<div><span>${m[0]}</span><b>${m[1]}</b></div>`).join('')}</div></div>
   <div class="cs-stats">${c.stats.map(s=>`<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div>
   ${c.blocks.map(b=>blockHTML(b,c.title)).join('')}
   <a href="#" class="cs-next" id="csNext"><small>Next case study</small><b>${nx.title} →</b></a>`;
  sheet.classList.add('on'); sheet.setAttribute('aria-hidden','false'); document.body.classList.add('lock'); sheet.scrollTop=0;
  watchVideos(body);
  const fio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');fio.unobserve(e.target)}}),{root:sheet,threshold:.06});
  $$('.cs-gallery figure',body).forEach(f=>fio.observe(f));
  $$('[data-count]',body).forEach(n=>io.observe(n));
  $('#csNext').addEventListener('click',e=>{e.preventDefault();sheet.scrollTo({top:0});openCase(c.next)});
  history.replaceState(null,'','#'+id);
  setTimeout(()=>$('#sheetClose').focus(),500);
}
function closeCase(){
  sheet.classList.remove('on'); sheet.setAttribute('aria-hidden','true'); document.body.classList.remove('lock');
  $$('video',body).forEach(v=>v.pause()); history.replaceState(null,'',location.pathname+location.search);
  if(lastFocus) lastFocus.focus({preventScroll:true}); openId=null;
}
$('#sheetClose').addEventListener('click',closeCase);

/* ---------- Lightbox ---------- */
const lb=$('#lightbox'), stage=$('#lbStage'), cap=$('#lbCap'); let li=0;
function showLb(){
  const [src,t]=PLAY[li];
  stage.innerHTML=isVid(src)?`<video src="${src}" autoplay muted loop playsinline controls></video>`:`<img src="${src}" alt="${t}">`;
  cap.textContent=`${t}  ·  ${li+1} / ${PLAY.length}`;
}
function openLb(i){li=i;showLb();lb.classList.add('on');lb.setAttribute('aria-hidden','false');document.body.classList.add('lock')}
function closeLb(){lb.classList.remove('on');lb.setAttribute('aria-hidden','true');stage.innerHTML='';if(!sheet.classList.contains('on'))document.body.classList.remove('lock')}
const step=d=>{li=(li+d+PLAY.length)%PLAY.length;showLb()};
$('#lbClose').onclick=closeLb; $('#lbPrev').onclick=()=>step(-1); $('#lbNext').onclick=()=>step(1);
lb.addEventListener('click',e=>{if(e.target===lb||e.target===stage)closeLb()});
let sx=0; lb.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)step(d<0?1:-1)});

/* ---------- Info card ---------- */
const info=$('#info'), scrim=$('#scrim'), infoBtn=$('#infoBtn');
function setInfo(on){info.classList.toggle('on',on);scrim.classList.toggle('on',on);infoBtn.setAttribute('aria-expanded',on);info.setAttribute('aria-hidden',!on)}
infoBtn.addEventListener('click',()=>setInfo(!info.classList.contains('on')));
scrim.addEventListener('click',()=>setInfo(false));

/* ---------- Keyboard ---------- */
addEventListener('keydown',e=>{
  if(e.key==='Escape'){ if(lb.classList.contains('on'))closeLb(); else if(sheet.classList.contains('on'))closeCase(); else setInfo(false) }
  if(lb.classList.contains('on')){ if(e.key==='ArrowRight')step(1); if(e.key==='ArrowLeft')step(-1) }
  if(e.key.toLowerCase()==='i' && !e.metaKey && !e.ctrlKey && !sheet.classList.contains('on') && !lb.classList.contains('on')) setInfo(!info.classList.contains('on'));
});


/* ---------- Copy email ---------- */
$('#mail').addEventListener('click',async()=>{
  const m=$('#mail').dataset.email;
  try{await navigator.clipboard.writeText(m)}catch(_){const t=document.createElement('textarea');t.value=m;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove()}
  const t=$('#toast');t.classList.add('on');setTimeout(()=>t.classList.remove('on'),1800);
});

/* ---------- Scroll: progress + stacking ---------- */
const prog=$('#progress'); let tick=false;
function onScroll(){
  if(tick)return; tick=true;
  requestAnimationFrame(()=>{
    const d=document.documentElement; prog.style.width=(d.scrollTop/(d.scrollHeight-d.clientHeight)*100)+'%';
    if(!reduce) stack(); tick=false;
  });
}
addEventListener('scroll',onScroll,{passive:true}); onScroll();

/* nav hash links close overlays */
$$('.nav a').forEach(a=>a.addEventListener('click',()=>setInfo(false)));

/* deep link */
if(CASES[location.hash.slice(1)]) openCase(location.hash.slice(1));
watchVideos(document);
})();
