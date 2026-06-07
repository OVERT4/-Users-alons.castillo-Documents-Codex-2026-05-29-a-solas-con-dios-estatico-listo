(function(){
const officialUrl="https://users-alons-castillo-documents-code-nine.vercel.app/";
const previewImage=officialUrl+"assets/hero-symbolic.jpg";
const title="A Solas con Dios — Brújula Bíblica";
const description="Un espacio privado para llevar lo que sientes a Dios y recibir versículos, oración, gratitud y reflexión bíblica.";
function meta(name,content,attr="name"){
 let el=document.head.querySelector(`meta[${attr}="${name}"]`);
 if(!el){el=document.createElement("meta");el.setAttribute(attr,name);document.head.appendChild(el)}
 el.setAttribute("content",content);
}
function link(rel,href){
 let el=document.head.querySelector(`link[rel="${rel}"]`);
 if(!el){el=document.createElement("link");el.setAttribute("rel",rel);document.head.appendChild(el)}
 el.setAttribute("href",href);
}
document.title=title;
meta("description",description);
meta("theme-color","#223a31");
meta("apple-mobile-web-app-title","A Solas con Dios");
meta("mobile-web-app-capable","yes");
meta("og:type","website","property");
meta("og:locale","es_MX","property");
meta("og:site_name",title,"property");
meta("og:title",title,"property");
meta("og:description",description,"property");
meta("og:url",officialUrl,"property");
meta("og:image",previewImage,"property");
meta("og:image:secure_url",previewImage,"property");
meta("og:image:width","1200","property");
meta("og:image:height","640","property");
meta("twitter:card","summary_large_image");
meta("twitter:title",title);
meta("twitter:description",description);
meta("twitter:image",previewImage);
link("canonical",officialUrl);
const careText="Este espacio puede acompañarte en oración, pero no reemplaza ayuda profesional, pastoral o de emergencia. Si estás en peligro, con pensamientos de hacerte daño o viviendo una crisis intensa, busca apoyo inmediato con alguien de confianza o servicios de emergencia de tu país. No tienes que cargarlo a solas.";
function addCareNote(){
 const homePrivacy=document.querySelector(".privacy-note");
 if(homePrivacy&&!document.querySelector(".home-care-note")){
  homePrivacy.insertAdjacentHTML("afterend",`<p class="care-note home-care-note" role="note"><strong>Nota de cuidado:</strong> ${careText}</p>`);
 }
 const formSubtext=document.querySelector("#escribirView .form-subtext");
 if(formSubtext&&!document.querySelector(".write-care-note")){
  formSubtext.insertAdjacentHTML("afterend",`<p class="care-note write-care-note" role="note"><strong>Antes de seguir:</strong> ${careText}</p>`);
 }
}
addCareNote();
document.head.insertAdjacentHTML("beforeend",`<style id="as-launch-polish">
.care-note{max-width:760px;margin:16px auto 0;border:1px solid rgba(184,138,52,.26);border-left:4px solid var(--gold);border-radius:8px;background:rgba(255,249,232,.78);color:#405047;font-size:.92rem;font-weight:650;line-height:1.58;padding:14px 16px;text-align:left;box-shadow:0 12px 32px rgba(37,43,39,.06)}
.care-note strong{color:var(--green-dark);font-weight:950}
.write-care-note{max-width:660px;margin:14px 0 0;background:rgba(255,255,255,.72);backdrop-filter:blur(12px)}
.home-care-note{margin-top:18px}
.primary-cta{box-shadow:0 16px 34px rgba(34,58,49,.18)}
body.dark .care-note{background:rgba(54,43,25,.72);border-color:rgba(214,181,111,.28);color:#d9dfd7}
body.dark .care-note strong{color:#ead8a7}
@media(max-width:700px){.care-note{font-size:.86rem;line-height:1.5;padding:12px 13px}.home-care-note{margin-inline:0}.write-care-note{max-width:none}.home-privacy-link{padding-bottom:28px}}
</style>`);
})();
