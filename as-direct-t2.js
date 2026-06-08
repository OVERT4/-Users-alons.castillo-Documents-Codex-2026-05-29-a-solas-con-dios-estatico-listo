(function(){
 function replaceTexts(){
   const pairs=[
      ["Elige una situaci\u00f3n y recibe una oraci\u00f3n corta para empezar. Puedes copiarla o guardarla aqu\u00ed mismo.","Elige una situaci\u00f3n; cada toque puede mostrar otra oraci\u00f3n."],
      ["Elige una situaci\u00f3n y recibe una oraci\u00f3n corta para empezar. Si vuelves a tocar la misma situaci\u00f3n, aparecer\u00e1 otra oraci\u00f3n.","Elige una situaci\u00f3n; cada toque puede mostrar otra oraci\u00f3n."],
      ["Elige un tema, lee con calma y guarda en \u201cMis Vers\u00edculos\u201d lo que quieras recordar.","Explora por tema y guarda lo que quieras recordar."],
      ["Filtra por palabras relacionadas con lo que necesitas recordar de Dios, lee con calma y guarda en \u201cMis Vers\u00edculos\u201d lo que quieras volver a ver.","Explora por tema y guarda lo que quieras recordar."]
     ];
   const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
   const nodes=[];
   while(walker.nextNode())nodes.push(walker.currentNode);
   nodes.forEach(node=>pairs.forEach(([from,to])=>{if(node.nodeValue.includes(from))node.nodeValue=node.nodeValue.replace(from,to)}));
 }
 function renamePrayerSavedSection(){
   const section=document.querySelector(".saved-prayers-section");
   if(!section)return false;
   const eyebrow=section.querySelector(".section-minihead .eyebrow");
   const title=section.querySelector(".section-minihead h3");
   if(eyebrow)eyebrow.textContent="Oraciones libres";
   if(title)title.textContent="Oraciones libres guardadas";
   const freeList=document.querySelector("#freePrayersList");
   if(freeList&&freeList.parentElement!==section){
      section.appendChild(freeList);
   }
   return true;
 }
 function addStyles(){
   if(document.querySelector("#prayerSavedFormatFix"))return;
   document.head.insertAdjacentHTML("beforeend",'<style id="prayerSavedFormatFix">.saved-prayers-section #freePrayersList,.saved-prayers-section #savedPrayersList{display:grid!important;grid-template-columns:1fr!important;gap:16px!important}.saved-prayers-section .journal-entry{width:100%;box-sizing:border-box}.saved-prayers-section .empty-state{text-align:center}.free-prayer-section #freePrayersList:empty{display:none!important}</style>');
 }
 function loadSpellingFix(){
   if(document.querySelector('script[src*="as-direct-u1.js"]'))return;
   const script=document.createElement("script");
   script.src="/as-direct-u1.js?v=37";
   document.body.appendChild(script);
 }
 function init(){
   addStyles();
   replaceTexts();
   renamePrayerSavedSection();
   loadSpellingFix();
   let tries=0;
   const timer=setInterval(()=>{replaceTexts();renamePrayerSavedSection();loadSpellingFix();if(++tries>10)clearInterval(timer)},300);
 }
 document.readyState==="loading"?document.addEventListener("DOMContentLoaded",init):init();
})();
