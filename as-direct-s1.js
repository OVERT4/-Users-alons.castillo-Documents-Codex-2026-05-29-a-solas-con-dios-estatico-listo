(function(){
  const profileKey="asolas.profile.static.v1";
  const vaultKey="asolas.localSpaces.static.v1";
  const personalKeys=[
     "asolas.searchState.static.v1",
     "asolas.journal.static.v1",
     "asolas.favoriteVerses.static.v1",
     "asolas.letters.static.v1",
     "asolas.prayerFavorites.static.v1",
     "asolas.freePrayers.static.v1",
     "asolas.prayerState.static.v1",
     "asolas.memory.static.v1",
     "asolas.habit.static.v1",
     "asolas.reminder.static.v1"
    ];
  function $(selector,root=document){return root.querySelector(selector)}
  function safeJson(raw,fallback=null){try{return JSON.parse(raw)}catch{return fallback}}
  function toast(message){if(typeof window.showToast==="function")window.showToast(message);else alert(message)}
  function readVault(){
     const vault=safeJson(localStorage.getItem(vaultKey));
     if(vault&&vault.version===1&&vault.spaces)return vault;
     return {version:1,activeId:"",spaces:{}};
  }
  function saveVault(vault){localStorage.setItem(vaultKey,JSON.stringify(vault))}
  function currentProfileName(){
     const profile=safeJson(localStorage.getItem(profileKey),{});
     return (profile?.name||"").trim();
  }
  function inputName(){return ($("#profileName")?.value||"").trim().slice(0,40)}
  function spaceId(name){
     const clean=(name||"espacio")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g,"")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g,"-")
      .replace(/^-+|-+$/g,"")
      .slice(0,44)||"espacio";
     return "space-"+clean;
  }
  function valueHasContent(raw){
     if(raw===null||raw===undefined||raw==="")return false;
     const parsed=safeJson(raw,null);
     if(Array.isArray(parsed))return parsed.length>0;
     if(parsed&&typeof parsed==="object")return Object.keys(parsed).length>0;
     return raw!=="[]"&&raw!=="{}"&&raw!=="null";
  }
  function hasWorkingData(){return personalKeys.some(key=>valueHasContent(localStorage.getItem(key)))}
  function snapshotValues(name){
     const values={};
     personalKeys.forEach(key=>{
         const raw=localStorage.getItem(key);
         if(raw!==null)values[key]=raw;
     });
     values[profileKey]=JSON.stringify({name});
     return values;
  }
  function clearWorkingData(){
     personalKeys.forEach(key=>localStorage.removeItem(key));
     localStorage.removeItem(profileKey);
  }
  function restoreSpace(space){
     clearWorkingData();
     Object.entries(space.values||{}).forEach(([key,value])=>{
         if(key===profileKey||personalKeys.includes(key))localStorage.setItem(key,value);
     });
     localStorage.setItem(profileKey,JSON.stringify({name:space.name||""}));
  }
  function saveCurrentSpace(nameOverride){
     const vault=readVault();
     const activeId=vault.activeId||"";
     const name=(nameOverride||currentProfileName()||inputName()||"Espacio anterior").trim().slice(0,40);
     if(!activeId&&!currentProfileName()&&!hasWorkingData())return vault;
     const id=activeId||spaceId(name);
     vault.spaces[id]={id,name,updatedAt:new Date().toISOString(),values:snapshotValues(name)};
     saveVault(vault);
     return vault;
  }
  function enterSpace(name){
     const clean=name.trim().slice(0,40);
     if(!clean){
         logoutSpace();
         return;
     }
     let vault=readVault();
     const targetId=spaceId(clean);
     const activeId=vault.activeId||"";
     if(activeId&&activeId!==targetId)vault=saveCurrentSpace();
     if(vault.spaces[targetId]){
         vault.activeId=targetId;
         saveVault(vault);
         restoreSpace(vault.spaces[targetId]);
         toast("Espacio abierto. Actualizando...");
         setTimeout(()=>location.reload(),350);
         return;
     }
     if(!activeId&&hasWorkingData()){
         localStorage.setItem(profileKey,JSON.stringify({name:clean}));
         vault.spaces[targetId]={id:targetId,name:clean,updatedAt:new Date().toISOString(),values:snapshotValues(clean)};
         vault.activeId=targetId;
         saveVault(vault);
         toast("Tu espacio quedo guardado con ese nombre.");
         setTimeout(()=>location.reload(),350);
         return;
     }
     clearWorkingData();
     localStorage.setItem(profileKey,JSON.stringify({name:clean}));
     vault.spaces[targetId]={id:targetId,name:clean,updatedAt:new Date().toISOString(),values:snapshotValues(clean)};
     vault.activeId=targetId;
     saveVault(vault);
     toast("Nuevo espacio creado en este dispositivo.");
     setTimeout(()=>location.reload(),350);
  }
  function logoutSpace(){
     let vault=saveCurrentSpace();
     vault.activeId="";
     saveVault(vault);
     clearWorkingData();
     toast("Sesion cerrada. Tus datos quedaron ocultos en este dispositivo.");
     setTimeout(()=>location.replace(location.origin+location.pathname+location.search),350);
  }
  function openSavedSpace(id){
     let vault=readVault();
     if(!vault.spaces[id])return;
     if(vault.activeId&&vault.activeId!==id)vault=saveCurrentSpace();
     vault.activeId=id;
     saveVault(vault);
     restoreSpace(vault.spaces[id]);
     toast("Espacio abierto. Actualizando...");
     setTimeout(()=>location.reload(),350);
  }
  function addStyles(){
     if($("#localSpacesVaultStyles"))return;
     document.head.insertAdjacentHTML("beforeend",`<style id="localSpacesVaultStyles">
     .local-spaces-list{margin-top:10px;border-top:1px solid rgba(184,138,52,.22);padding-top:10px}
     .local-spaces-list strong{display:block;color:var(--green-dark);font-size:.82rem;margin-bottom:7px}
     .local-spaces-list p{margin:0 0 8px!important;color:var(--muted);font-size:.78rem!important;line-height:1.35!important}
     .local-spaces-actions{display:flex;flex-wrap:wrap;gap:7px}
     .local-space-open{min-height:34px;border:1px solid rgba(184,138,52,.3);border-radius:8px;background:rgba(255,255,255,.56);color:var(--green-dark);padding:0 10px;font-weight:900;cursor:pointer}
     body.dark .local-spaces-list strong,body.dark .local-space-open{color:var(--gold)}
     body.dark .local-space-open{background:rgba(18,25,21,.62);border-color:rgba(208,170,93,.28)}
     </style>`);
  }
  function renderSpacesList(){
     const panel=$(".local-login-panel");
     const card=$(".featured-profile",panel||document);
     if(!panel||!card)return false;
     $(".local-spaces-list",panel)?.remove();
     const note=$(".local-login-note",panel);
     if(note)note.textContent="Cada nombre abre un espacio separado en este dispositivo. Al cerrar sesion, tus datos se ocultan hasta que vuelvas a abrir ese espacio.";
     const clear=$(".local-profile-clear",panel);
     if(clear)clear.textContent="Cerrar sesion y ocultar datos";
     const vault=readVault();
     const spaces=Object.values(vault.spaces||{}).sort((a,b)=>Date.parse(b.updatedAt||0)-Date.parse(a.updatedAt||0));
     if(!spaces.length)return true;
     const wrap=document.createElement("div");
     wrap.className="local-spaces-list";
     wrap.innerHTML=`
       <strong>Espacios guardados en este dispositivo</strong>
         <p>Elige uno para volver a ver sus datos. Si escribes otro nombre, se crea un espacio nuevo.</p>
           <div class="local-spaces-actions">
              ${spaces.map(space=>`<button class="local-space-open" type="button" data-local-space-open="${space.id}">${escapeHtml(space.name||"Espacio")}</button>`).join("")}
                </div>
                 `;
     const backup=$("#localBackupCard",panel);
     if(backup)panel.insertBefore(wrap,backup);
     else card.insertAdjacentElement("afterend",wrap);
     return true;
  }
  function escapeHtml(text){return String(text).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[char]))}
  function init(){
     addStyles();
     renderSpacesList();
     document.addEventListener("click",event=>{
         const save=event.target.closest?.("#profileSave");
         if(save){
              event.preventDefault();
              event.stopPropagation();
              event.stopImmediatePropagation?.();
              enterSpace(inputName());
              return;
         }
         const clear=event.target.closest?.(".local-profile-clear");
         if(clear){
              event.preventDefault();
              event.stopPropagation();
              event.stopImmediatePropagation?.();
              logoutSpace();
              return;
         }
         const open=event.target.closest?.("[data-local-space-open]");
         if(open){
              event.preventDefault();
              openSavedSpace(open.getAttribute("data-local-space-open"));
              return;
         }
         if(event.target.closest?.("#localLoginTrigger,[aria-haspopup='dialog']")){
              setTimeout(renderSpacesList,90);
              setTimeout(renderSpacesList,320);
         }
     },true);
     document.addEventListener("keydown",event=>{
         if(event.key==="Enter"&&event.target?.id==="profileName"){
              event.preventDefault();
              event.stopPropagation();
              event.stopImmediatePropagation?.();
              enterSpace(inputName());
         }
     },true);
     let tries=0;
     const timer=setInterval(()=>{
         tries+=1;
         if(renderSpacesList()||tries>14)clearInterval(timer);
     },250);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
})();
