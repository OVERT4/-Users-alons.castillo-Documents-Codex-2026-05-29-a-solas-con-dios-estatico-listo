(function(){
    const replacements=[
          ["situacion","situaci\u00f3n"],["Situacion","Situaci\u00f3n"],
          ["sesion","sesi\u00f3n"],["Sesion","Sesi\u00f3n"],
          ["oracion","oraci\u00f3n"],["Oracion","Oraci\u00f3n"],
          ["versiculos","vers\u00edculos"],["Versiculos","Vers\u00edculos"],
          ["telefono","tel\u00e9fono"],["Telefono","Tel\u00e9fono"],
          ["pagina","p\u00e1gina"],["Pagina","P\u00e1gina"],
          ["aqui","aqu\u00ed"],["Aqui","Aqu\u00ed"],
          ["tambien","tambi\u00e9n"],["Tambien","Tambi\u00e9n"],
          ["despues","despu\u00e9s"],["Despues","Despu\u00e9s"],
          ["dificil","dif\u00edcil"],["Dificil","Dif\u00edcil"],
          ["facil","f\u00e1cil"],["Facil","F\u00e1cil"],
          ["companero","compa\u00f1ero"],["Companero","Compa\u00f1ero"],
          ["companera","compa\u00f1era"],["Companera","Compa\u00f1era"],
          ["acompanamiento","acompa\u00f1amiento"],["Acompanamiento","Acompa\u00f1amiento"]
        ];
    const rules=replacements.map(([from,to])=>[new RegExp("\\b"+from+"\\b","g"),to]);
    const skipTags=new Set(["SCRIPT","STYLE","NOSCRIPT","TEXTAREA","INPUT"]);
    const textAttrs=["alt","aria-label","title","placeholder"];

   function fix(value){
         if(!value)return value;
         let next=value;
         rules.forEach(([rule,to])=>{next=next.replace(rule,to)});
         return next;
   }

   function fixTextNodes(root){
         if(!root)return;
         const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{
                 acceptNode(node){
                           const parent=node.parentElement;
                           return parent&&!skipTags.has(parent.tagName)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
                 }
         });
         const nodes=[];
         while(walker.nextNode())nodes.push(walker.currentNode);
         nodes.forEach(node=>{
                 const next=fix(node.nodeValue);
                 if(next!==node.nodeValue)node.nodeValue=next;
         });
   }

   function fixAttributes(root){
         if(!root||!root.querySelectorAll)return;
         root.querySelectorAll("*").forEach(el=>{
                 textAttrs.forEach(attr=>{
                           if(!el.hasAttribute(attr))return;
                           const current=el.getAttribute(attr);
                           const next=fix(current);
                           if(next!==current)el.setAttribute(attr,next);
                 });
         });
   }

   function run(){
         fixTextNodes(document.body);
         fixAttributes(document.body);
   }

   function init(){
         run();
         let tries=0;
         const timer=setInterval(()=>{
                 run();
                 tries+=1;
                 if(tries>12)clearInterval(timer);
         },250);
         document.addEventListener("click",()=>setTimeout(run,80),true);
   }

   document.readyState==="loading"?document.addEventListener("DOMContentLoaded",init):init();
})();
