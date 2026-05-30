(function(){
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
function norm(t){return String(t).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^\w\s]/g,' ').trim()}
function boot(){
 var fr=document.getElementById('app'),D=fr&&fr.contentDocument,W=fr&&fr.contentWindow;if(!D||!W||!window.AS_PROMISES)return setTimeout(boot,500);
 var K={fav:'asolas.favoriteVerses.static.v1'},fil='todos';
 var P=window.AS_PROMISES.map(a=>({reference:a[0],text:a[1],context:a[2],tags:a[3].split(' ')}));
 var order='Todos Ansiedad Paz Miedo Confianza Esperanza Fortaleza Descanso Cansancio Tristeza Dolor Duelo Consuelo Soledad Presencia Perdon Culpa Arrepentimiento Misericordia Direccion Decisiones Sabiduria Provision Necesidad Gratitud Gozo Tentacion Dominio Enojo Conflicto Relaciones Familia Proposito Identidad Oracion Palabra Sanidad Renovacion Humildad Amor Fe Futuro Prioridades Justicia Valor Obediencia Paciencia Verdad Pureza Servicio Generosidad'.split(' ');
 var label={todos:'Todos',perdon:'Perdón',direccion:'Dirección',sabiduria:'Sabiduría',provision:'Provisión',tentacion:'Tentación',proposito:'Propósito',oracion:'Oración'};
 var id=x=>x==='Todos'?'todos':norm(x);var view=()=>D.querySelector('#promesasView');var active=()=>view()&&view().classList.contains('is-active');var get=(k,f)=>{try{return JSON.parse(W.localStorage.getItem(k))||f}catch(e){return f}};var set=(k,v)=>{try{W.localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
 function filtered(){return fil==='todos'?P:P.filter(x=>x.tags.some(t=>id(t)===fil))}
 function render(){var f=D.querySelector('#promiseFilters'),g=D.querySelector('#promisesGrid');if(!f||!g)return;var known=new Set(P.flatMap(x=>x.tags));var labs=[...order.filter(x=>x==='Todos'||known.has(x)),...[...known].filter(x=>!order.includes(x))];f.innerHTML=labs.map(x=>'<button class="situation-button '+(id(x)===fil?'is-active':'')+'" data-pf="'+id(x)+'">'+esc(label[id(x)]||x)+'</button>').join('');g.innerHTML=filtered().map((x,i)=>'<article class="promise-card"><span class="example-ref">'+esc(x.tags.slice(0,3).map(t=>label[id(t)]||t).join(' · '))+'</span><strong>'+esc(x.reference)+'</strong><p class="promise-text">“'+esc(x.text)+'”</p><p>'+esc(x.context)+'</p><button class="verse-button primary" data-pr="'+i+'">Guardar en Mis Versículos</button></article>').join('')}
 D.querySelector('#promiseFilters')?.addEventListener('click',function(e){var b=e.target.closest('[data-pf]');if(!b)return;e.stopImmediatePropagation();fil=b.dataset.pf;render()},true);
 D.querySelector('#promisesGrid')?.addEventListener('click',function(e){var b=e.target.closest('[data-pr]');if(!b)return;e.stopImmediatePropagation();var x=filtered()[+b.dataset.pr],a=get(K.fav,[]);if(x&&!a.some(v=>v.reference===x.reference&&v.text===x.text)){a.unshift({reference:x.reference,text:x.text,action:x.context,topic:'Promesa: '+(label[id(x.tags[0])]||x.tags[0]),savedAt:new Date().toISOString()});set(K.fav,a)}},true);
 D.querySelector('[data-view-target="promesas"]')?.addEventListener('click',()=>setTimeout(render,250),true);
 D.querySelector('[data-view-target="orar"]')?.addEventListener('click',()=>setTimeout(()=>{D.querySelectorAll('button,#guidedPrayerOption,.eyebrow,h3,p').forEach(el=>{el.childNodes.forEach(n=>{if(n.nodeType===3)n.nodeValue=n.nodeValue.replace(/Oracion/g,'Oración').replace(/oracion/g,'oración').replace(/Opcion/g,'Opción').replace(/Tentacion/g,'Tentación')})})},250),true);
 setInterval(()=>{if(active())render()},1500);render();
}
boot();
})();
