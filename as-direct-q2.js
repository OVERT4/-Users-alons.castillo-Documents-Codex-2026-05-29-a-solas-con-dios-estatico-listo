(function(){
  const introText="Crea o restaura una copia cifrada para mover tu progreso entre dispositivos.";
  function addStyles(){
     if(document.querySelector("#mobileBackupFixStylesV2"))return;
     document.head.insertAdjacentHTML("beforeend",`<style id="mobileBackupFixStylesV2">
     .backup-help,.backup-help-panel{margin-top:12px;border-top:1px solid rgba(184,138,52,.24);padding-top:10px;color:var(--muted)}
     .backup-help-toggle{width:100%;min-height:38px;border:1px solid rgba(184,138,52,.28);border-radius:8px;background:rgba(255,255,255,.58);color:var(--green-dark);font:inherit;font-weight:900;text-align:left;padding:0 12px;display:flex;align-items:center;justify-content:space-between;gap:10px;cursor:pointer}
     .backup-help-toggle span{color:var(--gold-dark);font-weight:900}
     .backup-help-panel[hidden]{display:none!important}
     .backup-help-panel ol{margin:0 0 0 18px;padding:0;color:var(--muted);font-size:.86rem;line-height:1.5}
     .backup-help-panel li+li{margin-top:6px}
     body.dark .backup-help-toggle{background:rgba(18,25,21,.62);color:var(--gold);border-color:rgba(208,170,93,.28)}
     @media(max-width:720px){
      .local-login-modal{display:block!important;overflow-y:auto!important;overscroll-behavior:contain;padding:10px!important;-webkit-overflow-scrolling:touch}
       .local-login-backdrop{position:fixed!important}
        .local-login-panel{width:min(100%,520px)!important;max-height:calc(100dvh - 20px)!important;overflow-y:auto!important;margin:0 auto!important;padding:14px!important;-webkit-overflow-scrolling:touch}
         .local-login-close{position:sticky;top:0;z-index:3;float:none!important;display:block;margin:0 0 8px auto;min-height:36px;background:rgba(255,252,242,.95)}
          .local-login-panel .featured-profile{padding:4px 2px 2px!important}
           .local-login-panel .profile-row{grid-template-columns:1fr!important}
            .local-backup-card{margin-top:12px;padding:13px!important}
             .local-backup-card h3{font-size:1.22rem!important;margin-bottom:6px!important}
              .local-backup-card p:not(.eyebrow){font-size:.9rem;line-height:1.45}
               .backup-grid{grid-template-columns:1fr!important;gap:10px!important;margin-top:12px!important}
                .backup-field span{font-size:.8rem}
                 .backup-field input{min-height:42px;font-size:.9rem;max-width:100%;box-sizing:border-box}
                  #backupFile{height:auto;min-height:42px;padding:10px 8px;font-size:.78rem;line-height:1.25;white-space:normal}
                   .backup-actions{display:grid!important;grid-template-columns:1fr!important;gap:9px!important}
                    .backup-actions button{width:100%;min-height:42px}
                     .backup-note{font-size:.76rem;line-height:1.4}
                      body.dark .local-login-close{background:rgba(32,42,36,.96)}
                      }
                      </style>`);
  }
  function ensureHelp(){
     const card=document.querySelector("#localBackupCard");
     if(!card)return false;
     card.querySelectorAll(".backup-help").forEach(el=>el.remove());
     const intro=card.querySelector("h3 + p");
     if(intro&&intro.textContent!==introText)intro.textContent=introText;
     if(!card.querySelector(".backup-help-toggle")){
         const wrap=document.createElement("div");
         wrap.className="backup-help-panel-wrap";
         wrap.innerHTML=`
            <button class="backup-help-toggle" type="button" aria-expanded="false" aria-controls="backupHelpPanel">Ver paso a paso <span aria-hidden="true">+</span></button>
               <div class="backup-help-panel" id="backupHelpPanel" hidden>
                   <ol>
                        <li>En el dispositivo donde ya tienes tus datos, escribe una contrase&ntilde;a y toca Crear copia privada.</li>
                             <li>Guarda o env&iacute;a el archivo .json a tu otro dispositivo.</li>
                                  <li>En el otro dispositivo abre asolascondios.app y entra a Mi espacio.</li>
                                       <li>Escribe la misma contrase&ntilde;a, elige el archivo y toca Restaurar copia.</li>
                                           </ol>
                                              </div>
                                                `;
         const note=card.querySelector(".backup-note");
         if(note)note.insertAdjacentElement("afterend",wrap);
         else card.appendChild(wrap);
     }
     return true;
  }
  function toggleHelp(button){
     const panel=document.querySelector("#backupHelpPanel");
     if(!panel)return;
     const open=panel.hidden;
     panel.hidden=!open;
     button.setAttribute("aria-expanded",String(open));
     const mark=button.querySelector("span");
     if(mark)mark.textContent=open?"-":"+";
  }
  function init(){
     addStyles();
     ensureHelp();
     document.addEventListener("click",event=>{
         const button=event.target.closest?.(".backup-help-toggle");
         if(button){
              event.preventDefault();
              toggleHelp(button);
              return;
         }
         if(event.target.closest?.("#localLoginTrigger,[aria-haspopup='dialog']")){
              setTimeout(ensureHelp,80);
              setTimeout(ensureHelp,300);
         }
     });
     let tries=0;
     const timer=setInterval(()=>{
         tries+=1;
         if(ensureHelp()||tries>12)clearInterval(timer);
     },250);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
})();
