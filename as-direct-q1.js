(function(){
  function addMobileBackupStyles(){
     if(document.querySelector("#mobileBackupFixStyles"))return;
     document.head.insertAdjacentHTML("beforeend",`<style id="mobileBackupFixStyles">
     .backup-help{margin-top:12px;border-top:1px solid rgba(184,138,52,.24);padding-top:10px;color:var(--muted)}
     .backup-help summary{cursor:pointer;color:var(--green-dark);font-weight:900;list-style:none}
     .backup-help summary::-webkit-details-marker{display:none}
     .backup-help summary:after{content:" +";color:var(--gold-dark)}
     .backup-help[open] summary:after{content:" -"}
     .backup-help ol{margin:10px 0 0 18px;padding:0;color:var(--muted);font-size:.86rem;line-height:1.5}
     .backup-help li+li{margin-top:6px}
     body.dark .backup-help summary{color:var(--gold)}
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
  function addBackupHelp(){
     const card=document.querySelector("#localBackupCard");
     if(!card)return;
     const intro=card.querySelector("h3 + p");
     if(intro)intro.textContent="Crea o restaura una copia cifrada para mover tu progreso entre dispositivos.";
     if(card.querySelector(".backup-help"))return;
     const help=document.createElement("details");
     help.className="backup-help";
     help.innerHTML=`
       <summary>Ver paso a paso</summary>
         <ol>
            <li>En el dispositivo donde ya tienes tus datos, escribe una contrase&ntilde;a y toca Crear copia privada.</li>
               <li>Guarda o env&iacute;a el archivo .json a tu otro dispositivo.</li>
                  <li>En el otro dispositivo abre asolascondios.app y entra a Mi espacio.</li>
                     <li>Escribe la misma contrase&ntilde;a, elige el archivo y toca Restaurar copia.</li>
                       </ol>
                        `;
     const note=card.querySelector(".backup-note");
     if(note)note.insertAdjacentElement("afterend",help);
     else card.appendChild(help);
  }
  function init(){
     addMobileBackupStyles();
     addBackupHelp();
     setTimeout(addBackupHelp,400);
     setTimeout(addBackupHelp,1200);
     const observer=new MutationObserver(addBackupHelp);
     observer.observe(document.body,{childList:true,subtree:true});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
})();
