(function(){
const previousRenderTopicNote=renderTopic;
renderTopic=function(topic,query="",variant=null){
 const out=previousRenderTopicNote(topic,query,variant);
 const note=document.querySelector("#semanticInsight");
 if(note&&query.trim())note.textContent=`Lectura semántica: prioricé este tema por el sentido principal de lo que escribiste.`;
 return out;
};
})();
