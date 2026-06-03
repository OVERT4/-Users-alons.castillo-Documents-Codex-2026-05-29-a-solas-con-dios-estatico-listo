(function(){
const owner="Alonso Castillo";
const appName="A Solas con Dios — Brújula Bíblica";
const officialUrl="https://users-alons-castillo-documents-code-nine.vercel.app/";
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
document.title=appName;
meta("author",owner);
meta("copyright",`© 2026 ${owner}. Todos los derechos reservados.`);
meta("application-name",appName);
meta("creator",owner);
meta("publisher",owner);
meta("robots","index,follow");
meta("og:site_name",appName,"property");
meta("og:title",appName,"property");
meta("og:url",officialUrl,"property");
link("canonical",officialUrl);
document.querySelectorAll('a[href="privacidad.html"],a[href="/privacidad.html"],a[href="/privacidad-v2.html"]').forEach(a=>a.setAttribute("href","/privacidad-v3.html"));
const footer=document.querySelector(".home-privacy-link");
if(footer){
 footer.classList.add("legal-footer");
 footer.innerHTML=`
  <div class="legal-footer-copy">
   <span>Privacidad, propiedad y propósito</span>
   <p>© 2026 ${owner}. ${appName}. Todos los derechos reservados.</p>
  </div>
  <div class="legal-footer-links">
   <a href="/privacidad-v3.html" target="_blank" rel="noreferrer">Aviso de privacidad</a>
   <a href="/propiedad.html" target="_blank" rel="noreferrer">Propiedad intelectual</a>
  </div>`;
}
document.head.insertAdjacentHTML("beforeend",`<style>
.legal-footer{align-items:flex-start!important}
.legal-footer-copy{display:grid;gap:6px}
.legal-footer-copy p{margin:0;color:var(--muted);font-size:.86rem;line-height:1.5}
.legal-footer-links{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:12px 18px}
.legal-actions{display:flex;flex-wrap:wrap;gap:10px}
.legal-document .privacy-content a{color:var(--green-dark);font-weight:900}
body.dark .legal-footer-copy p{color:#cbd3ca}
body.dark .legal-document .privacy-content a{color:#ead8a7}
@media(max-width:680px){.legal-footer-links{justify-content:flex-start}.legal-footer{gap:16px}}
</style>`);
})();
