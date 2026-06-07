(function(){
const officialUrl="https://asolascondios.app/";
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
meta("application-name",title);
meta("theme-color","#223a31");
meta("robots","index,follow");
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
document.querySelectorAll('a[href="/propiedad.html"],a[href="propiedad.html"]').forEach(a=>a.setAttribute("href","/propiedad-v2.html"));
document.querySelectorAll('a[href="/privacidad-v3.html"],a[href="privacidad-v3.html"],a[href="/privacidad.html"],a[href="privacidad.html"]').forEach(a=>a.setAttribute("href","/privacidad-v4.html"));
const footer=document.querySelector(".home-privacy-link");
if(footer){
 const privacy=footer.querySelector('a[href="/privacidad-v3.html"],a[href="/privacidad.html"],a[href="privacidad.html"]');
 const legal=footer.querySelector('a[href="/propiedad.html"],a[href="propiedad.html"]');
 if(privacy)privacy.setAttribute("href","/privacidad-v4.html");
 if(legal)legal.setAttribute("href","/propiedad-v2.html");
}
})();
