(function(){
const D=document,W=window,$=s=>D.querySelector(s),all=s=>[...D.querySelectorAll(s)],key="asolas.profile.static.v1",img="https://commons.wikimedia.org/wiki/Special:FilePath/Hands_Praying.jpg?width=1600";
all('a[href="privacidad.html"],a[href="/privacidad.html"],a[href="/privacidad-v2.html"]').forEach(a=>a.setAttribute("href","/privacidad-v3.html"));
const fp=$(".free-prayer-visual img"),fc=$(".free-prayer-visual .visual-caption");if(fp){fp.src=img;fp.alt="Manos en oración para acompañar una oración escrita"}if(fc)fc.textContent="Escribe con calma; lo que guardes vive solo en este dispositivo.";
const header=$(".header-actions"),card=$(".featured-profile"),name=$("#profileName"),save=$("#profileSave"),greet=$("#profileGreeting");
function pname(){try{return(JSON.parse(W.localStorage.getItem(key))?.name||"").trim()}catch{return""}}
function label(b){const n=pname();b.textContent=n?`Mi espacio: ${n}`:"Iniciar sesión";b.classList.toggle("has-profile",!!n)}
if(header&&card&&!$("#localLoginTrigger")){
 const btn=D.createElement("button");btn.id="localLoginTrigger";btn.className="utility-button local-login-trigger";btn.type="button";btn.setAttribute("aria-haspopup","dialog");btn.setAttribute("aria-expanded","false");label(btn);header.prepend(btn);
 const modal=D.createElement("div");modal.id="localLoginModal";modal.className="local-login-modal";modal.hidden=true;modal.innerHTML='<div class="local-login-backdrop" data-close-login></div><section class="local-login-panel" role="dialog" aria-modal="true" aria-labelledby="localLoginTitle"><button class="entry-button local-login-close" type="button" data-close-login>Cerrar</button></section>';D.body.appendChild(modal);
 const panel=modal.querySelector(".local-login-panel");card.classList.remove("reveal","is-visible");card.querySelector(".eyebrow").textContent="Inicio de sesión local";card.querySelector("strong").id="localLoginTitle";
 const note=D.createElement("span");note.className="local-login-note";note.textContent="Funciona como una cuenta privada de este navegador: guarda tu nombre, progreso y preferencias solo aquí.";
 const clear=D.createElement("button");clear.className="entry-button local-profile-clear";clear.type="button";clear.textContent="Cerrar sesión local";card.append(note,clear);panel.appendChild(card);
 const open=()=>{modal.hidden=false;btn.setAttribute("aria-expanded","true");setTimeout(()=>name?.focus(),60)},close=()=>{modal.hidden=true;btn.setAttribute("aria-expanded","false");label(btn)};
 btn.addEventListener("click",open);modal.addEventListener("click",e=>{if(e.target.matches("[data-close-login]"))close()});D.addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden)close()});
 save?.addEventListener("click",()=>setTimeout(()=>label(btn),80));name?.addEventListener("keydown",e=>{if(e.key==="Enter")setTimeout(()=>label(btn),100)});
 clear.addEventListener("click",()=>{if(!name||!save)return;name.value="";save.click();setTimeout(()=>{if(greet)greet.textContent="Hola, bienvenido";label(btn)},80)});
}
})();
