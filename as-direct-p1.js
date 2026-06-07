(function(){
  function addStableHomeFix(){
     if(document.querySelector("#stableHomeFixStyles"))return;
     document.head.insertAdjacentHTML("beforeend",`<style id="stableHomeFixStyles">
     #backupMiniCard{display:none!important}
     .home-widgets{grid-auto-flow:row!important}
     .home-widgets>.widget-card:not(#backupMiniCard){grid-column:auto!important;order:initial!important}
     </style>`);
  }
  function revealHomeCards(){
     document.querySelectorAll(".home-widgets>.widget-card:not(#backupMiniCard)").forEach(card=>{
         card.classList.add("is-visible");
     });
  }
  function init(){
     addStableHomeFix();
     revealHomeCards();
     setTimeout(revealHomeCards,300);
     setTimeout(revealHomeCards,1000);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
})();
