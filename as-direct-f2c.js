(function(){
const previousFindBestTopic=findBestTopic;
function has(q,items){return items.some(x=>q.includes(x))}
findBestTopic=function(query){
 const q=normalize(query);
 if(!q)return getTopicById("ansiedad");
 if(has(q,["oportun","plan","proposit","propósit","voluntad de dios","dios da","dios otorga","dios concede","puerta abierta","dadiv","dádiv","dones","segun van saliendo","según van saliendo"]))return getTopicById("planes");
 if(has(q,["provision","provisión","dinero","deuda","no alcanza","sin trabajo","trabajo","pagar","escasez","necesidad"]))return getTopicById("provision");
 if(has(q,["ansios","preocup","estres","estrés","angusti","inquiet","afan","afán","panico","pánico","nervios"]))return getTopicById("ansiedad");
 if(has(q,["cansad","agotad","fatiga","sobrecarg","carga pesada","descans","quemad"]))return getTopicById("cansancio");
 if(has(q,["miedo","temor","asust","insegur","terror","amenaza"]))return getTopicById("miedo");
 if(has(q,["triste","llor","dolor","quebrant","deprim","desanim","duelo","vacío","vacio"]))return getTopicById("tristeza");
 if(has(q,["culpa","pecado","fallé","falle","verguenza","vergüenza","arrepent","condenad"]))return getTopicById("culpa");
 if(has(q,["solo","sola","soledad","abandon","nadie","olvidad","rechazad","invisible"]))return getTopicById("soledad");
 if(has(q,["enojo","enojad","ira","rabia","coraje","resent","pelea","conflicto","venganza"]))return getTopicById("enojo");
 if(has(q,["perdonar","perdon","perdón","herida","traicion","traición","rencor","amargura","odio","lastimaron"]))return getTopicById("perdonar");
 if(has(q,["tentacion","tentación","adiccion","adicción","recaer","impulso","dominio propio","debilidad"]))return getTopicById("tentacion");
 return previousFindBestTopic(query);
};
})();
