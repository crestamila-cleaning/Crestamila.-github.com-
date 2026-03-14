const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const i18n = {

nl:{

brand_sub:"Maastricht & Limburg",
nav_services:"Diensten",
nav_about:"Over ons",
nav_gallery:"Foto’s",
nav_contact:"Contact",
btn_quote:"Offerte",

hero_pill:"Maastricht • Limburg • Eco-vriendelijk",
hero_title:"Professionele schoonmaak voor woningen, kantoren en VvE’s.",
hero_subtitle:"Betrouwbare schoonmaak met duidelijke afspraken, flexibele planning en een nette oplevering.",
hero_cta_quote:"Vraag een offerte",
hero_cta_whatsapp:"WhatsApp ons",
hero_check_1:"Betrouwbaar & discreet",
hero_check_2:"Flexibele planning",
hero_check_3:"Eco-producten",
hero_fastcontact:"Snel contact",
hero_region_k:"Regio:",
hero_fastnote:"We reageren meestal dezelfde dag.",

val1_t:"Milieubewust",
val1_d:"We gebruiken waar mogelijk eco-vriendelijke middelen.",
val2_t:"Op maat",
val2_d:"Wekelijks, tweewekelijks of eenmalig.",
val3_t:"Duidelijk",
val3_d:"Heldere afspraken en nette oplevering.",

services_title:"Diensten",
services_subtitle:"Voor particulieren, bedrijven en VvE’s in Maastricht en Limburg.",
svc_cta:"Offerte aanvragen →",

svc_home_title:"Woning schoonmaak",
svc_home_price:"Vanaf €30/uur",
svc_home_text:"Fris en netjes, met vaste afspraken. Ideaal voor wekelijks, tweewekelijks of eenmalig.",

svc_office_title:"Kantoor schoonmaak",
svc_office_price:"Vanaf €40/uur",
svc_office_text:"Een rustige, schone werkplek — flexibel gepland rond jullie openingstijden.",
svc_office_micro:"Bezoekfrequentie: 1×/wk • 2×/wk • 3×/wk+",

svc_deep_title:"Deep Cleaning",
svc_deep_price:"Vanaf €45/uur",
svc_deep_text:"Intensief en grondig schoonmaken voor zichtbaar resultaat.",

svc_vve_title:"VvE (entree & trappenhuis)",
svc_vve_price:"",
svc_vve_text:"Voor gezamenlijke ruimtes zoals entree, trappen en vloeren.",
svc_vve_micro:"Meestal: wekelijks of 2-wekelijks",

svc_windows_title:"Glazenwasser",
svc_windows_price:"Vanaf €35/uur",
svc_windows_text:"Streeploze ramen en kozijnen, binnen of buiten.",

svc_build_title:"Oplevering / Bouwschoonmaak",
svc_build_price:"Vanaf €45/uur",
svc_build_text:"Na verbouwing of verhuizing: stof, resten en detailwerk.",

services_prices_btn:"Bekijk tariefuitleg",
services_prices_note:"Tarieven zijn richtprijzen. Definitieve prijs altijd via offerte.",

contact_title:"Contact",
contact_sub:"Werkgebied: Maastricht & Limburg",

opt_home:"Woning schoonmaak",
opt_office:"Kantoor schoonmaak",
opt_deep:"Deep Cleaning",
opt_vve:"VvE (entree & trappenhuis)",
opt_windows:"Glazenwasser",
opt_build:"Oplevering / Bouwschoonmaak"

},

en:{

brand_sub:"Maastricht & Limburg",
nav_services:"Services",
nav_about:"About",
nav_gallery:"Photos",
nav_contact:"Contact",
btn_quote:"Quote",

hero_pill:"Maastricht • Limburg • Eco-friendly",
hero_title:"Professional cleaning for homes, offices and VvE buildings.",
hero_subtitle:"Reliable cleaning with clear agreements and flexible planning.",
hero_cta_quote:"Request a quote",
hero_cta_whatsapp:"WhatsApp us",

svc_home_title:"Home cleaning",
svc_home_price:"From €30/hour",

svc_office_title:"Office cleaning",
svc_office_price:"From €40/hour",

svc_deep_title:"Deep cleaning",
svc_deep_price:"From €45/hour",

svc_vve_title:"VvE cleaning",
svc_vve_price:"",

svc_windows_title:"Window cleaning",
svc_windows_price:"From €35/hour",

svc_build_title:"Post-construction cleaning",
svc_build_price:"From €45/hour"

}

};

function applyI18n(lang){

document.documentElement.lang=lang;

document.querySelectorAll(".lang__btn").forEach(btn=>{
btn.classList.toggle("is-active",btn.dataset.lang===lang);
});

document.querySelectorAll("[data-i18n]").forEach(el=>{

const key=el.dataset.i18n;
const value=i18n[lang]?.[key];

if(value!==undefined){

if(value===""){
el.style.display="none";
}else{
el.style.display="";
el.textContent=value;
}

}

});

}

document.addEventListener("click",e=>{

const langBtn=e.target.closest(".lang__btn");

if(langBtn){
applyI18n(langBtn.dataset.lang);
return;
}

const menuBtn=e.target.closest("#menuBtn");

if(menuBtn){
document.getElementById("mobileNav")?.classList.toggle("is-open");
}

});

applyI18n("nl");
