'use strict';
const entry=document.getElementById('entry-screen');
const enterButton=document.getElementById('enter-site');
const mutedButton=document.getElementById('enter-muted');
const protectedSections=[...document.querySelectorAll('body>header,body>main,body>footer,body>.mobile-nav,body>.music-widget')];
protectedSections.forEach(el=>el.inert=true);
let entered=false;
function enterWebsite(withMusic){
 if(entered)return;entered=true;
 // Call play synchronously inside this click, before transitions or awaits.
 if(withMusic)startMusic();else audio.pause();
 protectedSections.forEach(el=>el.inert=false);
 document.body.classList.remove('entry-pending');
 entry.classList.add('leaving');
 const finish=()=>{entry.hidden=true;document.querySelector('.header .brand')?.focus({preventScroll:true});};
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)finish();else setTimeout(finish,460);
}
enterButton.addEventListener('click',()=>enterWebsite(true));
mutedButton.addEventListener('click',()=>enterWebsite(false));
entry.addEventListener('keydown',event=>{if(event.key==='Tab'){const first=enterButton,last=mutedButton;if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}});
enterButton.focus({preventScroll:true});
// Pause for interruptions; the play button always remains available to resume.
audio.addEventListener('error',()=>{if(entered)toast('Nhạc chưa tải được. Nhấn Bật nhạc để thử lại.');});
