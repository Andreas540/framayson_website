(function(){
  const pages=Array.from(document.querySelectorAll('.page'));
  const navButtons=Array.from(document.querySelectorAll('.links [data-page]'));
  const menu=document.querySelector('details.mobile-nav');
  function showPage(name){
    const target=document.getElementById(name);
    if(!target || !target.classList.contains('page')) name='home';
    pages.forEach(p=>p.classList.toggle('active',p.id===name));
    navButtons.forEach(b=>b.classList.toggle('active',b.dataset.page===name));
    if(menu) menu.open=false;
    window.scrollTo(0,0);
  }
  function navigate(name){
    if(location.hash !== '#'+name) location.hash=name;
    showPage(name);
  }
  // Mobile navigation uses native anchor links so it works even in limited previews.
  document.querySelectorAll('a[data-page]').forEach(a=>{
    a.setAttribute('href','#'+a.dataset.page);
    a.addEventListener('click',()=>{if(menu) menu.open=false;});
  });
  document.querySelectorAll('button[data-page]').forEach(b=>{
    b.setAttribute('type','button');
    b.addEventListener('click',()=>navigate(b.dataset.page));
  });
  window.addEventListener('hashchange',()=>showPage(location.hash.slice(1)||'home'));
  window.addEventListener('popstate',()=>showPage(location.hash.slice(1)||'home'));
  showPage(location.hash.slice(1)||'home');
  const year=document.getElementById('year');
  if(year) year.textContent=new Date().getFullYear();
  const inquiry=document.getElementById('inquiry');
  if(inquiry) inquiry.addEventListener('submit',e=>{
    e.preventDefault();
    const v=id=>(document.getElementById(id)?.value||'').trim();
    const subject='Framayson Inquiry: '+v('service');
    const body='Name: '+v('name')+'\nCompany: '+v('company')+'\nEmail: '+v('email')+'\nService: '+v('service')+'\n\nMessage: '+v('message');
    location.href='mailto:lilianaamaya@framayson.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  });
})();
