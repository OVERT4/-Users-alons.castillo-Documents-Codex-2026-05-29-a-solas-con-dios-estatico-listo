(function(){
const backupKeys=[
 "asolas.journal.static.v1",
 "asolas.favoriteVerses.static.v1",
 "asolas.letters.static.v1",
 "asolas.prayerFavorites.static.v1",
 "asolas.freePrayers.static.v1",
 "asolas.prayerState.static.v1",
 "asolas.memory.static.v1",
 "asolas.habit.static.v1",
 "asolas.profile.static.v1",
 "asolas.theme.static.v1",
 "asolas.reminder.static.v1"
];
const backupMetaKey="asolas.backup.last.static.v1";
const appName="A Solas con Dios";
const enc=new TextEncoder();
const dec=new TextDecoder();
function $(selector,root=document){return root.querySelector(selector)}
function toast(message){
 if(typeof window.showToast==="function")window.showToast(message);
 else window.alert(message);
}
function addStyle(){
 if($("#privateBackupStyles"))return;
 document.head.insertAdjacentHTML("beforeend",`<style id="privateBackupStyles">
.backup-mini-card{border:1px solid rgba(184,138,52,.34);background:rgba(255,252,242,.76)}
.backup-mini-card .backup-mini-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}
.backup-mini-card .entry-button{background:rgba(255,255,255,.62)}
.local-backup-card{margin-top:16px;border:1px solid rgba(184,138,52,.34);border-radius:10px;background:rgba(255,252,242,.82);padding:16px;box-shadow:0 16px 42px rgba(31,45,37,.08)}
.local-backup-card h3{font-family:"Times New Roman",Times,serif;font-size:1.55rem;line-height:1.05;margin:4px 0 8px;color:var(--green-dark)}
.local-backup-card p{margin:0;color:var(--muted);line-height:1.5}
.backup-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px}
.backup-field{display:grid;gap:7px;font-weight:900;color:var(--green-dark)}
.backup-field span{font-size:.86rem}
.backup-field input{width:100%;min-height:44px;border:1px solid rgba(38,58,49,.18);border-radius:8px;background:rgba(255,255,255,.74);padding:0 12px;color:var(--ink);font:inherit}
.backup-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}
.backup-file-label{position:relative;overflow:hidden}
.backup-file-label input{position:absolute;inset:0;opacity:0;cursor:pointer}
.backup-status{display:block;min-height:20px;margin-top:12px;color:var(--gold-dark);font-size:.86rem;font-weight:900;line-height:1.35}
.backup-note{display:block;margin-top:10px;color:var(--muted);font-size:.8rem;font-weight:800;line-height:1.45}
.backup-danger{margin-top:10px;color:#8a4a25}
body.dark .backup-mini-card,body.dark .local-backup-card{background:rgba(34,43,37,.86);border-color:rgba(208,170,93,.28)}
body.dark .backup-field,body.dark .local-backup-card h3{color:var(--gold)}
body.dark .backup-field input{background:rgba(18,25,21,.7);border-color:rgba(208,170,93,.24);color:var(--paper)}
body.dark .backup-status{color:var(--gold)}
@media(max-width:720px){.backup-grid{grid-template-columns:1fr}.local-backup-card{padding:14px}.local-backup-card h3{font-size:1.35rem}}
</style>`);
}
function safeJsonParse(raw,fallback=null){
 try{return JSON.parse(raw)}catch{return fallback}
}
function b64(bytes){
 let bin="";
 bytes.forEach(byte=>bin+=String.fromCharCode(byte));
 return btoa(bin);
}
function fromB64(text){
 const bin=atob(text);
 const bytes=new Uint8Array(bin.length);
 for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
 return bytes;
}
function randomBytes(length){
 const bytes=new Uint8Array(length);
 crypto.getRandomValues(bytes);
 return bytes;
}
async function deriveKey(password,salt,iterations){
 const base=await crypto.subtle.importKey("raw",enc.encode(password),"PBKDF2",false,["deriveKey"]);
 return crypto.subtle.deriveKey(
  {name:"PBKDF2",salt,iterations,hash:"SHA-256"},
  base,
  {name:"AES-GCM",length:256},
  false,
  ["encrypt","decrypt"]
 );
}
function getBackupData(){
 const values={};
 backupKeys.forEach(key=>{
  const raw=localStorage.getItem(key);
  if(raw!==null)values[key]=raw;
 });
 return {
  app:appName,
  version:1,
  createdAt:new Date().toISOString(),
  sourceOrigin:location.origin,
  sourceUrl:location.href,
  values
 };
}
function downloadFile(name,text){
 const blob=new Blob([text],{type:"application/json"});
 const url=URL.createObjectURL(blob);
 const a=document.createElement("a");
 a.href=url;
 a.download=name;
 document.body.appendChild(a);
 a.click();
 a.remove();
 setTimeout(()=>URL.revokeObjectURL(url),800);
}
async function createBackup(password){
 if(!crypto?.subtle)throw new Error("Tu navegador no permite cifrado seguro en esta página.");
 const salt=randomBytes(16);
 const iv=randomBytes(12);
 const iterations=140000;
 const key=await deriveKey(password,salt,iterations);
 const payload=enc.encode(JSON.stringify(getBackupData()));
 const cipher=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv},key,payload));
 const file={
  app:appName,
  type:"private-backup",
  version:1,
  createdAt:new Date().toISOString(),
  kdf:{name:"PBKDF2",hash:"SHA-256",iterations,salt:b64(salt)},
  encryption:{name:"AES-GCM",iv:b64(iv)},
  payload:b64(cipher)
 };
 const date=new Date().toISOString().slice(0,10);
 downloadFile(`a-solas-con-dios-copia-privada-${date}.json`,JSON.stringify(file,null,2));
 localStorage.setItem(backupMetaKey,JSON.stringify({createdAt:file.createdAt,origin:location.origin}));
 return file;
}
async function readBackupFile(file,password){
 const text=await file.text();
 const wrapper=safeJsonParse(text);
 if(!wrapper||wrapper.type!=="private-backup"||!wrapper.payload)throw new Error("Ese archivo no parece ser una copia privada de A Solas con Dios.");
 const salt=fromB64(wrapper.kdf.salt);
 const iv=fromB64(wrapper.encryption.iv);
 const cipher=fromB64(wrapper.payload);
 const key=await deriveKey(password,salt,wrapper.kdf.iterations||140000);
 const plain=await crypto.subtle.decrypt({name:"AES-GCM",iv},key,cipher).catch(()=>null);
 if(!plain)throw new Error("No se pudo abrir la copia. Revisa que la contraseña sea la correcta.");
 const data=safeJsonParse(dec.decode(plain));
 if(!data||!data.values)throw new Error("La copia se abrió, pero no tiene datos reconocibles.");
 return data;
}
function itemId(item){
 if(!item||typeof item!=="object")return JSON.stringify(item);
 return item.id||item.reference&&item.text&&`${item.reference}|${item.text}`||item.createdAt&&item.text&&`${item.createdAt}|${item.text}`||item.savedAt&&item.text&&`${item.savedAt}|${item.text}`||JSON.stringify(item);
}
function dateValue(item){
 const raw=item?.createdAt||item?.savedAt||item?.date||"";
 const time=Date.parse(raw);
 return Number.isFinite(time)?time:0;
}
function mergeRawValue(currentRaw,incomingRaw){
 const current=safeJsonParse(currentRaw);
 const incoming=safeJsonParse(incomingRaw);
 if(Array.isArray(current)&&Array.isArray(incoming)){
  const map=new Map();
  [...incoming,...current].forEach(item=>map.set(itemId(item),item));
  return JSON.stringify([...map.values()].sort((a,b)=>dateValue(b)-dateValue(a)).slice(0,200));
 }
 if(current&&incoming&&typeof current==="object"&&typeof incoming==="object"&&!Array.isArray(current)&&!Array.isArray(incoming)){
  return JSON.stringify({...current,...incoming});
 }
 return incomingRaw;
}
function restoreBackup(data){
 Object.entries(data.values).forEach(([key,incomingRaw])=>{
  if(!backupKeys.includes(key))return;
  const currentRaw=localStorage.getItem(key);
  localStorage.setItem(key,currentRaw===null?incomingRaw:mergeRawValue(currentRaw,incomingRaw));
 });
 localStorage.setItem(backupMetaKey,JSON.stringify({restoredAt:new Date().toISOString(),sourceOrigin:data.sourceOrigin||""}));
}
function backupCount(){
 let total=0;
 backupKeys.forEach(key=>{
  const parsed=safeJsonParse(localStorage.getItem(key));
  if(Array.isArray(parsed))total+=parsed.length;
  else if(parsed&&typeof parsed==="object"&&Object.keys(parsed).length)total+=1;
 });
 return total;
}
function setStatus(text,isError=false){
 const status=$("#backupStatus");
 if(status){
  status.textContent=text;
  status.classList.toggle("backup-danger",isError);
 }
}
function openLoginModal(){
 const trigger=$("#localLoginTrigger");
 if(trigger)trigger.click();
}
function buildBackupCard(){
 if($("#localBackupCard"))return null;
 const card=document.createElement("section");
 card.className="local-backup-card";
 card.id="localBackupCard";
 card.innerHTML=`
  <p class="eyebrow">Copia privada cifrada</p>
  <h3>Lleva tu progreso a otro dispositivo</h3>
  <p>Guarda un archivo protegido con contraseña para restaurar tu diario, cartas, oraciones y versículos en tu celular, compu o iPad.</p>
  <div class="backup-grid">
   <label class="backup-field" for="backupPassword"><span>Contraseña de la copia</span><input id="backupPassword" type="password" autocomplete="new-password" placeholder="Escribe una contraseña" /></label>
   <label class="backup-field" for="backupFile"><span>Archivo para restaurar</span><input id="backupFile" type="file" accept=".json,application/json" /></label>
  </div>
  <div class="backup-actions">
   <button class="primary-small" id="backupExport" type="button">Crear copia privada</button>
   <button class="entry-button" id="backupImport" type="button">Restaurar copia</button>
  </div>
  <span class="backup-status" id="backupStatus" role="status" aria-live="polite"></span>
  <span class="backup-note">La contraseña no se guarda. Si la olvidas, nadie puede abrir esa copia. Al restaurar, se une con lo que ya tengas en este dispositivo.</span>
 `;
 return card;
}
function installBackupCenter(){
 addStyle();
 const panel=$(".local-login-panel");
 if(panel&&!$("#localBackupCard")){
  panel.appendChild(buildBackupCard());
 }
 const homeWidgets=$(".home-widgets");
 if(homeWidgets&&!$("#backupMiniCard")){
  const mini=document.createElement("article");
  mini.className="widget-card backup-mini-card reveal";
  mini.id="backupMiniCard";
  mini.innerHTML=`
   <p class="eyebrow">Copia privada</p>
   <strong>Protege tu progreso</strong>
   <p class="muted-copy">Exporta o restaura tu diario y versículos entre dispositivos, sin crear cuenta ni subir tus textos a la app.</p>
   <div class="backup-mini-actions"><button class="primary-small" id="openBackupCenter" type="button">Copias privadas</button></div>
  `;
  const profileInHome=homeWidgets.querySelector(".featured-profile");
  if(profileInHome)profileInHome.insertAdjacentElement("afterend",mini);
  else homeWidgets.insertBefore(mini,homeWidgets.firstElementChild||null);
  $("#openBackupCenter")?.addEventListener("click",openLoginModal);
 }
 wireBackupActions();
}
function wireBackupActions(){
 const exportButton=$("#backupExport");
 const importButton=$("#backupImport");
 if(exportButton&&!exportButton.dataset.backupReady){
  exportButton.dataset.backupReady="true";
  exportButton.addEventListener("click",async()=>{
   const password=$("#backupPassword")?.value||"";
   if(password.length<8){
    setStatus("Usa una contraseña de mínimo 8 caracteres para proteger la copia.",true);
    return;
   }
   exportButton.disabled=true;
   setStatus("Creando copia privada...");
   try{
    await createBackup(password);
    setStatus(`Copia creada. Incluyó ${backupCount()} elementos guardados de este dispositivo.`);
    toast("Copia privada creada. Guárdala en un lugar seguro.");
   }catch(error){
    setStatus(error.message||"No se pudo crear la copia.",true);
   }finally{
    exportButton.disabled=false;
   }
  });
 }
 if(importButton&&!importButton.dataset.backupReady){
  importButton.dataset.backupReady="true";
  importButton.addEventListener("click",async()=>{
   const password=$("#backupPassword")?.value||"";
   const file=$("#backupFile")?.files?.[0];
   if(!file){
    setStatus("Elige primero el archivo de copia privada.",true);
    return;
   }
   if(!password){
    setStatus("Escribe la contraseña con la que se creó la copia.",true);
    return;
   }
   importButton.disabled=true;
   setStatus("Abriendo copia privada...");
   try{
    const data=await readBackupFile(file,password);
    restoreBackup(data);
    setStatus("Copia restaurada. La página se actualizará para mostrar tu progreso.");
    toast("Copia restaurada en este dispositivo.");
    setTimeout(()=>location.reload(),900);
   }catch(error){
    setStatus(error.message||"No se pudo restaurar la copia.",true);
   }finally{
    importButton.disabled=false;
   }
  });
 }
}
function updatePrivacyLinks(){
 document.querySelectorAll('a[href="/privacidad-v4.html"],a[href="privacidad-v4.html"],a[href="/privacidad.html"],a[href="privacidad.html"]').forEach(a=>a.setAttribute("href","/privacidad-v5.html"));
}
function replaceText(from,to){
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 const nodes=[];
 while(walker.nextNode())nodes.push(walker.currentNode);
 nodes.forEach(node=>{
  if(node.nodeValue&&node.nodeValue.includes(from))node.nodeValue=node.nodeValue.replace(from,to);
 });
}
function updatePrivacyCopy(){
 replaceText(
  "Todo lo que escribes es 100% privado. Vive solo en este dispositivo, nunca se guarda en ningún servidor y nadie más lo verá.",
  "Todo lo que escribes es privado. Vive en este dispositivo y, si tú eliges, puedes llevar tu progreso a otro equipo con una copia privada cifrada. Nada se sube a un servidor de la app."
 );
 replaceText("Local y privado","Local + copia privada");
 replaceText(
  "Tu diario vive solo en este dispositivo. Nunca se sube a ningún servidor.",
  "Tu diario vive en este dispositivo. También puedes llevarlo a otro equipo con una copia privada cifrada; nada se sube a un servidor de la app."
 );
 replaceText(
  "Los versículos que marques se guardan únicamente en este dispositivo.",
  "Los versículos que marques se guardan en este dispositivo y pueden incluirse en tu copia privada cifrada."
 );
 replaceText(
  "Escribe con calma; lo que guardes vive solo en este dispositivo.",
  "Escribe con calma; lo que guardes vive en este dispositivo y puede ir en tu copia privada."
 );
}
function patchToastCopy(){
 if(typeof window.showToast!=="function"||window.showToast.backupCopyReady)return;
 const original=window.showToast;
 window.showToast=function(message){
  const replacements={
   "Carta guardada solo en este dispositivo.":"Carta guardada en este dispositivo. Puedes incluirla en tu copia privada cifrada.",
   "Oración guardada solo en este dispositivo.":"Oración guardada en este dispositivo. Puedes incluirla en tu copia privada cifrada."
  };
  return original.call(this,replacements[message]||message);
 };
 window.showToast.backupCopyReady=true;
}
function init(){
 installBackupCenter();
 updatePrivacyLinks();
 updatePrivacyCopy();
 patchToastCopy();
 const observer=new MutationObserver(()=>{installBackupCenter();updatePrivacyLinks();updatePrivacyCopy();patchToastCopy()});
 observer.observe(document.body,{childList:true,subtree:true});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
else init();
})();
