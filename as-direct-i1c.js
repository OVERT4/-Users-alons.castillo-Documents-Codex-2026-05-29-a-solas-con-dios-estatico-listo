(function(){
function makeFallbackReadings(topic){
 const bank=(topic.verseBank||topic.verses||[]).slice(0,3);
 if(!bank.length)return [["Salmos 25:4-15","Una lectura para pedir dirección, humildad y cercanía de Dios cuando no sabes cómo nombrar lo que pasa."]];
 return bank.map(v=>[v.reference,`Empieza por esta referencia y lee el párrafo completo que la rodea para ver cómo Dios habla del tema de ${topic.title.toLowerCase()}.`]);
}
function readingsHtml(topic){
 const list=(window.asReadingPlans&&window.asReadingPlans[topic.id])||makeFallbackReadings(topic);
 return `<section class="personal-reading-panel" id="personalReadingPanel">
  <div class="personal-reading-heading">
   <p class="eyebrow">Para abrir tu Biblia</p>
   <h3>Lecturas completas para meditar este tema</h3>
   <p>Lee estos pasajes en tu Biblia personal con calma. No son solo citas sueltas: cada lectura desarrolla el tema con más contexto para orar y entender mejor lo que Dios puede estar mostrando.</p>
  </div>
  <div class="personal-reading-grid">${list.map(item=>`<article class="personal-reading-card"><strong>${escapeHtml(item[0])}</strong><p>${escapeHtml(item[1])}</p></article>`).join("")}</div>
 </section>`;
}
function renderPersonalReadings(topic){
 const old=document.querySelector("#personalReadingPanel");if(old)old.remove();
 const grid=document.querySelector("#verseGrid");if(!grid)return;
 grid.insertAdjacentHTML("afterend",readingsHtml(topic));
}
const previousRenderTopicI1=renderTopic;
renderTopic=function(topic,query="",variant=null){
 const out=previousRenderTopicI1(topic,query,variant);
 renderPersonalReadings(topic);
 return out;
};
document.head.insertAdjacentHTML("beforeend",`<style>
.personal-reading-panel{margin-top:18px;border:1px solid rgba(184,138,52,.28);border-radius:8px;background:linear-gradient(135deg,rgba(255,249,232,.9),rgba(255,255,255,.88));box-shadow:0 18px 44px rgba(37,43,39,.07);padding:clamp(22px,3vw,30px)}
.personal-reading-heading{display:grid;grid-template-columns:minmax(0,.75fr) minmax(260px,.7fr);gap:18px;align-items:end;margin-bottom:18px}
.personal-reading-heading h3{margin:0;color:var(--green-dark);font-family:Georgia,"Times New Roman",serif;font-size:clamp(1.7rem,3vw,2.45rem);line-height:1.05}
.personal-reading-heading p:last-child{margin:0;color:var(--muted);line-height:1.62}
.personal-reading-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.personal-reading-card{min-height:150px;border:1px solid var(--line);border-radius:8px;background:rgba(255,255,255,.8);padding:20px;display:flex;flex-direction:column;gap:12px}
.personal-reading-card strong{color:var(--gold);font-size:1.02rem}
.personal-reading-card p{margin:0;color:#3d4d44;line-height:1.55}
body.dark .personal-reading-panel{background:linear-gradient(135deg,rgba(54,43,25,.84),rgba(32,42,36,.9));border-color:rgba(214,181,111,.24)}
body.dark .personal-reading-card{background:#202a24;border-color:rgba(255,255,255,.1)}
body.dark .personal-reading-card p{color:#d9dfd7}
body.dark .personal-reading-heading p:last-child{color:#cbd3ca}
@media(max-width:850px){.personal-reading-heading,.personal-reading-grid{grid-template-columns:1fr}.personal-reading-card{min-height:auto}}
</style>`);
})();
