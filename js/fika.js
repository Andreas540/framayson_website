document.getElementById('year').textContent=new Date().getFullYear();document.getElementById('inquiry').addEventListener('submit',function(e){e.preventDefault();const d=new FormData(this);const subject='Fika & Wine event inquiry — '+d.get('type');const body=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nEvent: ${d.get('type')}\nGuests: ${d.get('guests')}\n\n${d.get('details')}`;const businessEmail='YOUR_EMAIL@example.com';if(businessEmail.startsWith('YOUR_')){document.getElementById('form-note').textContent='Preview mode: business email not yet configured. Your message is ready to copy below.';const out=document.createElement('textarea');out.value='Subject: '+subject+'\n'+body;out.readOnly=true;out.setAttribute('aria-label','Copy inquiry');this.appendChild(out);out.select();return;}location.href='mailto:'+businessEmail+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body)});(function(){
 const menu=document.querySelector('.mobile-menu');
 if(!menu)return;
 const closeMenu=()=>{menu.removeAttribute('open');};
 menu.querySelectorAll('.mobile-menu-links a').forEach(link=>{
   link.addEventListener('click',closeMenu);
   link.addEventListener('touchend',()=>{setTimeout(closeMenu,0)},{passive:true});
 });
 document.addEventListener('click',event=>{if(!menu.contains(event.target))closeMenu();});
 document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
 window.addEventListener('hashchange',closeMenu);
 window.addEventListener('pageshow',closeMenu);
})();
