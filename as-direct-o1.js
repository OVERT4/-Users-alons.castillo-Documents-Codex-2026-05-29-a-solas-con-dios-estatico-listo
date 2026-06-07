(function(){
  function fixHomeWidgets(){
     const mini=document.querySelector("#backupMiniCard");
     if(mini)mini.remove();
     const widgets=document.querySelector(".home-widgets");
     if(!widgets)return;
     widgets.style.gridTemplateColumns="";
     widgets.querySelectorAll(".widget-card").forEach(card=>{
         card.style.gridColumn="";
         card.style.order="";
         card.classList.add("is-visible");
     });
  }
  function init(){
     fixHomeWidgets();
     const observer=new MutationObserver(fixHomeWidgets);
     observer.observe(document.body,{childList:true,subtree:true});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
})();
