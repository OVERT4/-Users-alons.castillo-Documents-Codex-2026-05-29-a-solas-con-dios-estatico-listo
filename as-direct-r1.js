(function(){
  const introText="Usa una copia cifrada para mover tu progreso entre dispositivos.";
  const summaryText="Crea una copia privada o restaura una existente. Nada se sube a un servidor de la app.";
  const noteText="Guarda tu contrase\u00f1a: no se almacena ni se puede recuperar.";
  function addStyles(){
     if(document.querySelector("#backupPanelLayoutStylesV3"))return;
     document.head.insertAdjacentHTML("beforeend",`<style id="backupPanelLayoutStylesV3">
     .local-login-modal:not([hidden]){position:fixed!important;inset:0!important;z-index:80!important;display:grid!important;place-items:center!important;padding:clamp(12px,2.4vw,26px)!important;overflow:hidden!important}
     .local-login-backdrop{position:absolute!important;inset:0!important}
     .local-login-panel{position:relative!important;z-index:1!important;width:min(720px,calc(100vw - 32px))!important;max-height:min(760px,calc(100dvh - 32px))!important;overflow-y:auto!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;scrollbar-gutter:stable!important;margin:0!important;padding:18px!important;display:grid!important;gap:12px!important}
     .local-login-close{position:sticky!important;top:0!important;z-index:5!important;justify-self:end!important;float:none!important;margin:0!important;min-height:34px!important;padding:0 12px!important;background:rgba(255,252,242,.96)!important}
     .local-login-panel .featured-profile{padding:0 2px 2px!important}
     .local-login-panel .featured-profile strong{font-size:clamp(1.35rem,2.4vw,1.8rem)!important;line-height:1.05!important}
     .local-login-panel .featured-profile .muted-copy{font-size:.9rem!important;line-height:1.42!important;margin-top:6px!important}
     .local-login-note{display:block!important;margin-top:8px!important;font-size:.78rem!important;line-height:1.35!important;color:var(--muted)!important}
     .local-login-panel .profile-row{display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;gap:10px!important;align-items:end!important;margin-top:12px!important}
     .local-login-panel .profile-row input{min-width:0!important;min-height:42px!important}
     .local-login-panel .profile-row button{min-height:42px!important;white-space:nowrap!important}
     .local-profile-clear{margin-top:8px!important}
     .local-backup-card{margin-top:0!important;padding:14px!important;border-radius:10px!important}
     .local-backup-card .eyebrow{font-size:.72rem!important;margin-bottom:4px!important}
     .local-backup-card h3{font-size:clamp(1.22rem,2.2vw,1.48rem)!important;line-height:1.05!important;margin:2px 0 6px!important}
     .local-backup-card p:not(.eyebrow){font-size:.9rem!important;line-height:1.42!important;margin:0!important}
     .backup-grid{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:10px!important;margin-top:12px!important}
     .backup-field{min-width:0!important}
     .backup-field span{font-size:.78rem!important;line-height:1.2!important}
     .backup-field input{box-sizing:border-box!important;width:100%!important;min-width:0!important;min-height:42px!important;font-size:.88rem!important;padding:0 10px!important}
     #backupFile{height:auto!important;min-height:42px!important;padding:9px 8px!important;font-size:.78rem!important;line-height:1.2!important}
     .backup-actions{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:10px!important;margin-top:12px!important}
     .backup-actions button{width:100%!important;min-height:42px!important;padding-left:10px!important;padding-right:10px!important}
     .backup-status{min-height:18px!important;margin-top:9px!important;font-size:.8rem!important;line-height:1.3!important}
     .backup-note{display:block!important;margin-top:6px!important;font-size:.76rem!important;line-height:1.35!important}
     .backup-help-panel-wrap{margin-top:10px!important}
     .backup-help,.backup-help-panel{margin-top:9px!important;border-top:1px solid rgba(184,138,52,.24)!important;padding-top:9px!important;color:var(--muted)!important}
     .backup-help-toggle{width:100%!important;min-height:36px!important;border:1px solid rgba(184,138,52,.28)!important;border-radius:8px!important;background:rgba(255,255,255,.58)!important;color:var(--green-dark)!important;font:inherit!important;font-weight:900!important;text-align:left!important;padding:0 12px!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:10px!important;cursor:pointer!important}
     .backup-help-toggle span{color:var(--gold-dark)!important;font-weight:900!important}
     .backup-help-panel[hidden]{display:none!important}
     .backup-help-panel:not([hidden]){display:block!important;max-height:148px!important;overflow-y:auto!important;overscroll-behavior:contain!important}
     .backup-help-panel ol{margin:0 0 0 18px!important;padding:0!important;color:var(--muted)!important;font-size:.8rem!important;line-height:1.42!important}
     .backup-help-panel li+li{margin-top:5px!important}
     body.dark .local-login-close{background:rgba(32,42,36,.96)!important}
     body.dark .backup-help-toggle{background:rgba(18,25,21,.62)!important;color:var(--gold)!important;border-color:rgba(208,170,93,.28)!important}
     @media(max-width:720px){
      .local-login-modal:not([hidden]){display:block!important;overflow-y:auto!important;padding:10px!important}
       .local-login-panel{width:min(100%,520px)!important;max-height:calc(100dvh - 20px)!important;margin:0 auto!important;padding:14px!important;gap:10px!important}
        .local-login-panel .profile-row{grid-template-columns:1fr!important}
         .local-login-panel .profile-row button{width:100%!important}
          .backup-grid,.backup-actions{grid-template-columns:1fr!important}
           .local-backup-card{padding:13px!important}
            .backup-help-panel:not([hidden]){max-height:156px!important}
            }
            </style>`);
  }
  function updateCopy(card){
     const title=card.querySelector("h3");
     if(title&&title.textContent.trim()!=="Copia para otros dispositivos")title.textContent="Copia para otros dispositivos";
     const intro=card.querySelector("h3 + p");
     if(intro&&intro.textContent!==summaryText)intro.textContent=summaryText;
     const note=card.querySelector(".backup-note");
     if(note&&note.textContent!==noteText)note.textContent=noteText;
  }
  function ensureHelp(){
     const card=document.querySelector("#localBackupCard");
     if(!card)return false;
     updateCopy(card);
     card.querySelectorAll(".backup-help").forEach(el=>el.remove());
     const intro=card.querySelector("h3 + p");
     if(intro&&intro.textContent!==summaryText)intro.textContent=summaryText;
     if(!card.querySelector(".backup-help-toggle")){
         const wrap=document.createElement("div");
         wrap.className="backup-help-panel-wrap";
         wrap.innerHTML=`
            <button class="backup-help-toggle" type="button" aria-expanded="false" aria-controls="backupHelpPanel">Ver paso a paso <span aria-hidden="true">+</span></button>
               <div class="backup-help-panel" id="backupHelpPanel" hidden>
                   <ol>
                        <li>En el dispositivo donde ya tienes tus datos, escribe una contrase&ntilde;a y toca Crear copia privada.</li>
                             <li>Guarda el archivo .json en un lugar seguro.</li>
                                  <li>En el otro dispositivo abre asolascondios.app y entra a Mi espacio.</li>
                                       <li>Escribe la misma contrase&ntilde;a, selecciona el archivo y toca Restaurar copia.</li>
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
         const helpButton=event.target.closest?.(".backup-help-toggle");
         if(helpButton){
              event.preventDefault();
              toggleHelp(helpButton);
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
         if(ensureHelp()||tries>14)clearInterval(timer);
     },250);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
})();
