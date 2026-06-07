(function(){
  const summaryText="Crea una copia privada o restaura una existente. Nada se sube a un servidor de la app.";
  const noteText="Guarda tu contrase\u00f1a: no se almacena ni se puede recuperar.";
  const stepMarkup=`
   <ol>
     <li>En el dispositivo donde ya tienes tus datos, escribe una contrase&ntilde;a y toca Crear copia privada.</li>
       <li>Guarda el archivo .json que se descarga.</li>
         <li>Pasa ese archivo al tel&eacute;fono, compu o iPad donde quieres restaurar tu progreso.</li>
           <li>En ese otro dispositivo abre asolascondios.app y entra a Mi espacio.</li>
             <li>Escribe exactamente la misma contrase&ntilde;a.</li>
               <li>Selecciona el archivo .json y toca Restaurar copia. Luego revisa Mi Diario, Mis Vers&iacute;culos, Cartas y Orar.</li>
                </ol>
                `;
  function addStyles(){
     if(document.querySelector("#backupStepsBetterStylesV4"))return;
     document.head.insertAdjacentHTML("beforeend",`<style id="backupStepsBetterStylesV4">
     .backup-help-panel:not([hidden]){max-height:190px!important}
     .backup-help-panel ol{font-size:.82rem!important;line-height:1.43!important}
     .backup-help-panel li+li{margin-top:5px!important}
     @media(max-width:720px){.backup-help-panel:not([hidden]){max-height:210px!important}}
     </style>`);
  }
  function updateSteps(){
     const card=document.querySelector("#localBackupCard");
     if(!card)return false;
     const intro=card.querySelector("h3 + p");
     if(intro&&intro.textContent!==summaryText)intro.textContent=summaryText;
     const note=card.querySelector(".backup-note");
     if(note&&note.textContent!==noteText)note.textContent=noteText;
     const panel=card.querySelector("#backupHelpPanel");
     if(panel&&panel.innerHTML.trim()!==stepMarkup.trim())panel.innerHTML=stepMarkup;
     return true;
  }
  function init(){
     addStyles();
     updateSteps();
     document.addEventListener("click",event=>{
         if(event.target.closest?.("#localLoginTrigger,[aria-haspopup='dialog']")){
              setTimeout(updateSteps,80);
              setTimeout(updateSteps,300);
         }
     });
     let tries=0;
     const timer=setInterval(()=>{
         tries+=1;
         if(updateSteps()||tries>14)clearInterval(timer);
     },250);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
})();
