(function(){
function cleanMatchedTopic(){
 const box=document.querySelector("#matchedTopic");if(!box)return;
 const strong=box.querySelector("strong");if(strong){strong.textContent="";strong.hidden=true}
 let note=box.querySelector("#semanticInsight");if(!note){note=document.createElement("p");note.id="semanticInsight";note.className="semantic-insight";box.appendChild(note)}
 note.textContent="Lectura semántica: prioricé este tema por el sentido principal de lo que escribiste.";
}
function resetSessionHistory(){
 searchState={counters:{},history:[],activeIndex:-1};
 try{localStorage.removeItem(storageKeys.search)}catch(e){}
 updateHistoryControls();
}
resetSessionHistory();
rememberVariant=function(variant){
 searchState.history.push(variant);
 if(searchState.history.length>20)searchState.history.shift();
 searchState.activeIndex=searchState.history.length-1;
 updateHistoryControls();
};
renderHistoryAt=function(index){
 if(!searchState.history[index])return;
 searchState.activeIndex=index;
 const variant=searchState.history[index];
 input.value=variant.query;
 renderTopic(getTopicById(variant.topicId),variant.query,variant);
 updateHistoryControls();
};
const previousRenderTopicG1=renderTopic;
renderTopic=function(topic,query="",variant=null){
 const out=previousRenderTopicG1(topic,query,variant);
 cleanMatchedTopic();
 return out;
};
document.head.insertAdjacentHTML("beforeend",`<style>.matched-topic{display:grid;grid-template-columns:max-content minmax(0,1fr);align-items:center;column-gap:12px;row-gap:4px}.matched-topic strong{display:none!important}.matched-topic .semantic-insight{margin:0;color:var(--muted);font-size:.84rem;font-weight:800;line-height:1.35}@media(max-width:620px){.matched-topic{grid-template-columns:1fr}.matched-topic .semantic-insight{margin-top:4px}}</style>`);
cleanMatchedTopic();
})();
