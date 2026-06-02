(function(){
devotionalContent.transicion={prayer:s=>`Señor, pongo delante de ti ${s}. Me cuesta soltar lo familiar, y aunque esta nueva etapa puede ser buena, también siento vacío, rareza y miedo. Acompáñame con tu presencia; ayúdame a agradecer lo vivido sin quedarme atrapado en ello, y a recibir con fe lo nuevo que estás permitiendo. Amén.`,gratitude:["Porque extrañar algo también muestra que hubo personas, rutinas o momentos que fueron un regalo.","Porque una nueva etapa puede traer crecimiento sin borrar lo valioso de lo anterior.","Porque Dios no se queda atrás cuando cambia tu rutina; Él va contigo y delante de ti."]};
reflectionContent.transicion={questions:["¿Qué parte de lo anterior necesito agradecer antes de intentar soltarla?","¿Qué miedo específico aparece al entrar en esta nueva rutina?","¿Dónde puedo buscar la presencia de Dios en este nuevo trabajo o etapa, en vez de solo comparar con lo que quedó atrás?"],lessons:["Si le pides acompañamiento, Dios puede darte paz diaria más que una explicación completa de por qué todo cambió.","Dios no siempre restaura una etapa exactamente como era; a veces sana el corazón para caminar una etapa nueva.","Extrañar no significa que estés retrocediendo: puede ser parte de despedirte con gratitud y avanzar con fe."]};
const previousFindBestTopicH1=findBestTopic;
function hasAny(q,arr){return arr.some(x=>q.includes(x))}
function countAny(q,arr){return arr.reduce((n,x)=>n+(q.includes(x)?1:0),0)}
findBestTopic=function(query){
 const q=normalize(query);
 const transitionWords=["cambio","cambios","cambiar","transicion","transición","rutina","nuevo trabajo","trabajo nuevo","nueva etapa","dejar atras","dejar atrás","personas","situaciones","desconcert","incomod","raro","extrañ","vacio","vacío","desconsol","acompanamiento","acompañamiento","adaptarme","soltar","regresara","diferente"];
 const moneyWords=["dinero","deuda","pagar","no alcanza","escasez","provision","provisión","necesidad economica","necesidad económica","sin trabajo","desempleo","alimento","recursos"];
 const emotionalTransition=["miedo","temor","incomod","vacio","vacío","desconsol","raro","extrañ","acompanamiento","acompañamiento"];
 const transitionScore=countAny(q,transitionWords),moneyScore=countAny(q,moneyWords);
 if(transitionScore>=3||((q.includes("nuevo trabajo")||q.includes("trabajo nuevo"))&&hasAny(q,emotionalTransition)))return getTopicById("transicion");
 if(moneyScore>=1&&(moneyScore>=transitionScore||!transitionScore))return getTopicById("provision");
 return previousFindBestTopicH1(query);
};
})();
