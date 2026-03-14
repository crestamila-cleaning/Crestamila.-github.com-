const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const i18n = {
  nl: {
    brand_sub: "Maastricht & Limburg",
    nav_services: "Diensten",
    nav_about: "Over ons",
    nav_gallery: "Foto’s",
    nav_contact: "Contact",
    btn_quote: "Offerte",

    hero_pill: "Maastricht • Limburg • Eco-vriendelijk",
    hero_title: "Professionele schoonmaak voor woningen, kantoren en VvE’s.",
    hero_subtitle: "Betrouwbare schoonmaak met duidelijke afspraken, flexibele planning en een nette oplevering.",
    hero_cta_quote: "Vraag een offerte",
    hero_cta_whatsapp: "WhatsApp ons",
    hero_check_1: "Betrouwbaar & discreet",
    hero_check_2: "Flexibele planning",
    hero_check_3: "Eco-producten",
    hero_fastcontact: "Snel contact",
    hero_region_k: "Regio:",
    hero_fastnote: "We reageren meestal dezelfde dag.",

    val1_t: "Milieubewust",
    val1_d: "We gebruiken waar mogelijk eco-vriendelijke middelen.",
    val2_t: "Op maat",
    val2_d: "Wekelijks, tweewekelijks of eenmalig.",
    val3_t: "Duidelijk",
    val3_d: "Heldere afspraken en nette oplevering.",

    services_title: "Diensten",
    services_subtitle: "Voor particulieren, bedrijven en VvE’s in Maastricht en Limburg.",
    svc_cta: "Offerte aanvragen →",

    svc_home_title: "Woning schoonmaak",
    svc_home_price: "Vanaf €25/uur",
    svc_home_text: "Fris en netjes, met vaste afspraken. Ideaal voor wekelijks, tweewekelijks of eenmalig.",

    svc_office_title: "Kantoor schoonmaak",
    svc_office_price: "Vanaf €30/uur",
    svc_office_text: "Een rustige, schone werkplek — flexibel gepland rond jullie openingstijden.",
    svc_office_micro: "Bezoekfrequentie: 1×/wk • 2×/wk • 3×/wk+",

    svc_deep_title: "Deep Cleaning",
    svc_deep_price: "Vanaf €45/uur (min. 3 uur)",
    svc_deep_text: "Intensief en grondig schoonmaken voor zichtbaar resultaat.",

    svc_vve_title: "VvE (entree & trappenhuis)",
    svc_vve_price: "Vanaf €30/uur",
    svc_vve_text: "Voor gezamenlijke ruimtes zoals entree, trappen en vloeren.",
    svc_vve_micro: "Meestal: wekelijks of 2-wekelijks",

    svc_windows_title: "Glazenwasser",
    svc_windows_price: "Vanaf €35/uur",
    svc_windows_text: "Streeploze ramen en kozijnen, binnen of buiten.",

    svc_build_title: "Oplevering / Bouwschoonmaak",
    svc_build_price: "Vanaf €30/uur",
    svc_build_text: "Na verbouwing of verhuizing: stof, resten en detailwerk.",

    services_prices_btn: "Bekijk tariefuitleg",
    services_prices_note: "Tarieven zijn richtprijzen. Definitieve prijs altijd via offerte.",

    about_title: "Over Crestamila",
    about_p1: "Wij zijn een schoonmaakservice actief in Maastricht en heel Limburg. We staan voor kwaliteit, betrouwbaarheid en duidelijke afspraken.",
    about_p2: "Of het nu gaat om een woning, kantoor of een VvE: we maken een plan dat past bij jouw ruimte en jouw ritme.",
    stat_1_n: "Eco",
    stat_1_t: "Bewuste middelen",
    stat_2_n: "Flex",
    stat_2_t: "Flexibel schema",
    stat_3_n: "Top",
    stat_3_t: "Net resultaat",
    about_note: "Professioneel • Betrouwbaar • Discreet",

    gallery_title: "Foto’s",
    gallery_subtitle: "Een kleine indruk van ons werk en onze diensten.",
    gallery_note: "Deze foto’s geven een realistische indruk van ons werk. Elke locatie is anders en wordt met zorg behandeld.",

    contact_title: "Contact",
    contact_sub: "Werkgebied: Maastricht & Limburg",
    quote_title: "Offerte aanvragen",
    form_name: "Naam",
    form_phone: "Telefoon",
    form_service: "Service",
    form_msg: "Bericht",
    form_send: "Versturen",
    form_note: "Na eerste keer ontvang je een bevestigingsmail van FormSubmit.",

    opt_home: "Woning schoonmaak",
    opt_office: "Kantoor schoonmaak",
    opt_deep: "Deep Cleaning",
    opt_vve: "VvE (entree & trappenhuis)",
    opt_windows: "Glazenwasser",
    opt_build: "Oplevering / Bouwschoonmaak",

    modal_pricing_title: "Tarieven — transparant & realistisch",
    modal_pricing_p1: "Onze tarieven zijn richtprijzen per uur. De definitieve prijs hangt af van:",
    modal_pricing_li1: "Grootte van de ruimte",
    modal_pricing_li2: "Staat van het pand",
    modal_pricing_li3: "Frequentie van schoonmaak",
    modal_pricing_li4: "Bereikbaarheid en afspraken",
    modal_pricing_li5: "Extra wensen",
    modal_pricing_p2: "We bevestigen altijd eerst een duidelijke offerte.",
    modal_pricing_cta: "Offerte aanvragen"
  },

  en: {
    brand_sub: "Maastricht & Limburg",
    nav_services: "Services",
    nav_about: "About",
    nav_gallery: "Photos",
    nav_contact: "Contact",
    btn_quote: "Quote",

    hero_pill: "Maastricht • Limburg • Eco-friendly",
    hero_title: "Professional cleaning for homes, offices and VvE buildings.",
    hero_subtitle: "Reliable cleaning with clear agreements, flexible planning and a neat finish.",
    hero_cta_quote: "Request a quote",
    hero_cta_whatsapp: "WhatsApp us",
    hero_check_1: "Reliable & discreet",
    hero_check_2: "Flexible scheduling",
    hero_check_3: "Eco products",
    hero_fastcontact: "Quick contact",
    hero_region_k: "Region:",
    hero_fastnote: "We usually respond the same day."
  }
};

function applyI18n(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = i18n[lang]?.[key];
    if (value) el.textContent = value;
  });

  document.querySelectorAll("option[data-i18n]").forEach((opt) => {
    const key = opt.dataset.i18n;
    const value = i18n[lang]?.[key];
    if (value) opt.textContent = value;
  });
}

document.addEventListener("click", (e) => {
  const langBtn = e.target.closest(".lang__btn");
  if (langBtn) {
    applyI18n(langBtn.dataset.lang);
    return;
  }

  const openBtn = e.target.closest("[data-modal-open]");
  if (openBtn) {
    const modal = document.querySelector(openBtn.dataset.modalOpen);
    if (modal) {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
    }
    return;
  }

  const closeBtn = e.target.closest("[data-modal-close]");
  if (closeBtn) {
    const modal = closeBtn.closest(".modal");
    if (modal) {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    }
    return;
  }

  const menuBtn = e.target.closest("#menuBtn");
  if (menuBtn) {
    document.getElementById("mobileNav")?.classList.toggle("is-open");
    return;
  }

  const navLink = e.target.closest(".mobile-nav a");
  if (navLink) {
    document.getElementById("mobileNav")?.classList.remove("is-open");
  }
});

applyI18n("nl");
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("is-open");
  });
    }
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("is-open");
  });
    }
