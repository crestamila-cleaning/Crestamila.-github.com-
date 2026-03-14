// ===== Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Simple i18n
const i18n = {
  nl: {
    brand_tag: "Maastricht & Limburg",
    nav_services: "Diensten",
    nav_about: "Over ons",
    nav_gallery: "Foto’s",
    nav_contact: "Contact",
    btn_prices: "Tarieven",

    hero_pill: "Maastricht • Limburg • Eco-vriendelijk",
    hero_title: "Professionele schoonmaak voor woningen, kantoren en VvE’s.",
    hero_subtitle:
      "Betrouwbare schoonmaak met duidelijke afspraken, flexibele planning en een nette oplevering.",
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
    svc_home_price: "Vanaf €30/uur",
    svc_home_text:
      "Fris en netjes, met vaste afspraken. Ideaal voor wekelijks, tweewekelijks of eenmalig.",

    svc_office_title: "Kantoor schoonmaak",
    svc_office_price: "Vanaf €40/uur",
    svc_office_text:
      "Een rustige, schone werkplek — flexibel gepland rond jullie openingstijden.",
    svc_office_micro: "Bezoekfrequentie: 1×/wk • 2×/wk • 3×/wk+",

    svc_deep_title: "Deep Cleaning",
    svc_deep_price: "Vanaf €45/uur (min. 3 uur)",
    svc_deep_text: "Intensief en grondig schoonmaken voor zichtbaar resultaat.",

    svc_vve_title: "VvE (entree & trappenhuis)",
    svc_vve_price: "Vanaf €/uur",
    svc_vve_text: "Voor gezamenlijke ruimtes zoals entree, trappen en vloeren.",
    svc_vve_micro: "Meestal: wekelijks of 2-wekelijks",

    svc_windows_title: "Glazenwasser",
    svc_windows_price: "Vanaf €35/uur",
    svc_windows_text: "Streeploze ramen en kozijnen, binnen of buiten.",

    svc_build_title: "Oplevering / Bouwschoonmaak",
    svc_build_price: "Vanaf €45/uur",
    svc_build_text: "Na verbouwing of verhuizing: stof, resten en detailwerk.",

    services_prices_btn: "Bekijk tariefuitleg",
    services_prices_note:
      "Tarieven zijn richtprijzen. Definitieve prijs altijd via offerte.",

    about_title: "Over Crestamila",
    about_p1:
      "Wij zijn een schoonmaakservice actief in Maastricht en heel Limburg. We staan voor kwaliteit, betrouwbaarheid en duidelijke afspraken.",
    about_p2:
      "Of het nu gaat om een woning, kantoor of een VvE: we maken een plan dat past bij jouw ruimte en jouw ritme.",
    stat_1_n: "Eco",
    stat_1_t: "Bewuste middelen",
    stat_2_n: "Flex",
    stat_2_t: "Flexibel schema",
    stat_3_n: "Top",
    stat_3_t: "Net resultaat",
    about_note: "Professioneel • Betrouwbaar • Discreet",

    gallery_title: "Foto’s",
    gallery_subtitle: "Een kleine indruk van ons werk en onze diensten.",
    gallery_note:
      "Deze foto’s geven een realistische indruk van ons werk. Elke locatie is anders en wordt met zorg behandeld.",

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
    brand_tag: "Maastricht & Limburg",
    nav_services: "Services",
    nav_about: "About",
    nav_gallery: "Photos",
    nav_contact: "Contact",
    btn_prices: "Pricing",

    hero_pill: "Maastricht • Limburg • Eco-friendly",
    hero_title: "Professional cleaning for homes, offices and VvE buildings.",
    hero_subtitle:
      "Reliable cleaning with clear agreements, flexible planning and a neat finish.",
    hero_cta_quote: "Request a quote",
    hero_cta_whatsapp: "WhatsApp us",
    hero_check_1: "Reliable & discreet",
    hero_check_2: "Flexible scheduling",
    hero_check_3: "Eco products",
    hero_fastcontact: "Quick contact",
    hero_region_k: "Region:",
    hero_fastnote: "We usually respond the same day.",

    val1_t: "Eco conscious",
    val1_d: "We use eco-friendly products whenever possible.",
    val2_t: "Tailored",
    val2_d: "Weekly, bi-weekly or one-off.",
    val3_t: "Clear",
    val3_d: "Clear agreements and a tidy finish.",

    services_title: "Services",
    services_subtitle: "For homes, businesses and VvE buildings in Maastricht and Limburg.",
    svc_cta: "Request a quote →",

    svc_home_title: "Residential cleaning",
    svc_home_price: "From €30/hour",
    svc_home_text:
      "Fresh and tidy, with clear agreements. Ideal for weekly, bi-weekly or one-off.",

    svc_office_title: "Office cleaning",
    svc_office_price: "From €40/hour",
    svc_office_text:
      "A calm, clean workplace — flexibly scheduled around your opening hours.",
    svc_office_micro: "Visit frequency: 1×/wk • 2×/wk • 3×/wk+",

    svc_deep_title: "Deep cleaning",
    svc_deep_price: "From €45/hour (min. 3 hours)",
    svc_deep_text: "Intensive and thorough cleaning for visible results.",

    svc_vve_title: "VvE (entrance & stairwell)",
    svc_vve_price: "From €/hour",
    svc_vve_text: "For shared spaces such as entrance, stairs and floors.",
    svc_vve_micro: "Usually: weekly or bi-weekly",

    svc_windows_title: "Window cleaning",
    svc_windows_price: "From €35/hour",
    svc_windows_text: "Streak-free windows and frames, inside or outside.",

    svc_build_title: "Move-out / post-build cleaning",
    svc_build_price: "From €45/hour",
    svc_build_text: "After renovation or moving: dust, residue and detail work.",

    services_prices_btn: "See pricing details",
    services_prices_note:
      "Rates are indicative. Final price is always confirmed via a quote.",

    about_title: "About Crestamila",
    about_p1:
      "We are a cleaning service active in Maastricht and throughout Limburg. We stand for quality, reliability and clear agreements.",
    about_p2:
      "Whether it is a home, office or a VvE building: we create a plan that fits your space and rhythm.",
    stat_1_n: "Eco",
    stat_1_t: "Conscious products",
    stat_2_n: "Flex",
    stat_2_t: "Flexible schedule",
    stat_3_n: "Top",
    stat_3_t: "Neat result",
    about_note: "Professional • Reliable • Discreet",

    gallery_title: "Photos",
    gallery_subtitle: "A small impression of our work and services.",
    gallery_note:
      "These photos give a realistic impression of our work. Every location is different and treated with care.",

    contact_title: "Contact",
    contact_sub: "Service area: Maastricht & Limburg",
    quote_title: "Request a quote",
    form_name: "Name",
    form_phone: "Phone",
    form_service: "Service",
    form_msg: "Message",
    form_send: "Send",
    form_note: "After the first time, you will receive a confirmation email from FormSubmit.",

    opt_home: "Residential cleaning",
    opt_office: "Office cleaning",
    opt_deep: "Deep Cleaning",
    opt_vve: "VvE (entrance & stairwell)",
    opt_windows: "Window cleaning",
    opt_build: "Move-out / post-build cleaning",

    modal_pricing_title: "Pricing — transparent & realistic",
    modal_pricing_p1: "Our rates are hourly guidelines. The final price depends on:",
    modal_pricing_li1: "Size of the space",
    modal_pricing_li2: "Condition of the property",
    modal_pricing_li3: "Cleaning frequency",
    modal_pricing_li4: "Accessibility and arrangements",
    modal_pricing_li5: "Extra requests",
    modal_pricing_p2: "We always confirm a clear quote first.",
    modal_pricing_cta: "Request a quote"
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
