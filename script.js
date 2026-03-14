:root{
  --bg:#f8fafc;
  --bg-soft:#eef4f7;
  --card:#ffffff;
  --text:#0f172a;
  --muted:#5b6470;
  --line:rgba(15,23,42,.10);
  --accent:#1f8f88;
  --accent-dark:#166963;
  --whatsapp:#25D366;
  --shadow:0 12px 30px rgba(15,23,42,.08);
  --radius:18px;
  --container:1180px;
}

*{
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  margin:0;
  font-family:"Inter",sans-serif;
  background:var(--bg);
  color:var(--text);
  line-height:1.6;
}

img{
  max-width:100%;
  display:block;
}

a{
  color:inherit;
  text-decoration:none;
}

button,
input,
select,
textarea{
  font:inherit;
}

.container{
  width:min(var(--container),calc(100% - 32px));
  margin-inline:auto;
}

.section{
  padding:72px 0;
}

.section-soft{
  background:var(--bg-soft);
}

.section-head{
  text-align:center;
  margin-bottom:28px;
}

.section-head h2{
  margin:0 0 10px;
  font-size:clamp(28px,4vw,40px);
}

.section-head p{
  margin:0;
  color:var(--muted);
  font-weight:600;
}

/* Header */
.site-header{
  position:sticky;
  top:0;
  z-index:50;
  background:rgba(255,255,255,.88);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--line);
}

.nav-wrap{
  min-height:78px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:20px;
}

.brand{
  display:flex;
  align-items:center;
  gap:12px;
  min-width:0;
}

.brand-logo{
  width:54px;
  height:54px;
  object-fit:contain;
}

.brand-text{
  display:flex;
  flex-direction:column;
  line-height:1.1;
}

.brand-name{
  font-size:19px;
  font-weight:900;
}

.brand-sub{
  font-size:13px;
  color:var(--muted);
  font-weight:700;
}

.main-nav{
  display:flex;
  gap:22px;
  align-items:center;
}

.main-nav a{
  font-weight:700;
}

.main-nav a:hover{
  color:var(--accent);
}

.nav-actions{
  display:flex;
  align-items:center;
  gap:10px;
}

.lang-switch{
  display:flex;
  gap:6px;
}

.lang__btn{
  border:1px solid var(--line);
  background:#fff;
  border-radius:12px;
  padding:8px 10px;
  cursor:pointer;
  font-weight:800;
}

.lang__btn.is-active{
  background:var(--accent);
  color:#fff;
  border-color:var(--accent);
}

.menu-btn{
  display:none;
}

/* Buttons */
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  border-radius:14px;
  padding:12px 18px;
  font-weight:800;
  border:1px solid transparent;
  cursor:pointer;
  transition:.25s ease;
}

.btn-primary{
  background:var(--accent);
  color:#fff;
}

.btn-primary:hover{
  background:var(--accent-dark);
}

.btn-ghost{
  background:#fff;
  border-color:var(--line);
  color:var(--accent-dark);
}

.btn-ghost:hover{
  background:rgba(31,143,136,.08);
}

.desktop-only{
  display:inline-flex;
}

/* Mobile nav */
.mobile-nav{
  display:none;
  flex-direction:column;
  gap:12px;
  padding:0 16px 16px;
  border-top:1px solid var(--line);
}

.mobile-nav.is-open{
  display:flex;
}

.mobile-nav a{
  font-weight:700;
}

/* Hero */
.hero{
  padding:64px 0;
  background:linear-gradient(180deg,#ffffff 0%,#f5f8fb 100%);
}

.hero-grid{
  display:grid;
  grid-template-columns:1.1fr .9fr;
  gap:28px;
  align-items:center;
}

.hero-pill{
  display:inline-flex;
  padding:8px 12px;
  border-radius:999px;
  background:rgba(31,143,136,.10);
  color:var(--accent-dark);
  font-size:13px;
  font-weight:800;
  margin-bottom:16px;
}

.hero-copy h1{
  margin:0 0 14px;
  font-size:clamp(34px,5vw,58px);
  line-height:1.08;
}

.hero-copy p{
  margin:0 0 18px;
  color:var(--muted);
  font-size:17px;
  font-weight:600;
  max-width:700px;
}

.hero-cta{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  margin-bottom:18px;
}

.hero-checks{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-bottom:18px;
}

.hero-checks span{
  background:#fff;
  border:1px solid var(--line);
  border-radius:999px;
  padding:8px 12px;
  font-size:14px;
  font-weight:700;
}

.hero-contact-box{
  background:#fff;
  border:1px solid var(--line);
  border-radius:var(--radius);
  padding:16px;
  box-shadow:var(--shadow);
  max-width:420px;
}

.hero-contact-box strong{
  display:block;
  margin-bottom:6px;
}

.hero-contact-box p{
  margin:0 0 6px;
  font-size:14px;
}

.hero-media img{
  width:100%;
  min-height:420px;
  object-fit:cover;
  border-radius:24px;
  box-shadow:var(--shadow);
}

/* Values */
.values-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}

.value-card{
  background:#fff;
  border:1px solid var(--line);
  border-radius:var(--radius);
  padding:22px;
  box-shadow:var(--shadow);
}

.value-card h3{
  margin:0 0 8px;
  font-size:18px;
}

.value-card p{
  margin:0;
  color:var(--muted);
  font-weight:600;
}

/* Services */
.services-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.service-card{
  background:#fff;
  border:1px solid var(--line);
  border-radius:var(--radius);
  overflow:hidden;
  box-shadow:var(--shadow);
  display:flex;
  flex-direction:column;
}

.service-img{
  width:100%;
  height:220px;
  object-fit:cover;
}

.service-body{
  padding:16px;
  flex:1;
}

.service-top{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:12px;
  margin-bottom:10px;
}

.service-top h3{
  margin:0;
  font-size:19px;
}

.price-tag{
  white-space:nowrap;
  font-size:13px;
  font-weight:900;
  background:rgba(31,143,136,.10);
  color:var(--accent-dark);
  border-radius:999px;
  padding:7px 10px;
}

.service-body p{
  margin:0;
  color:var(--muted);
  font-weight:600;
}

.service-body small{
  display:block;
  margin-top:10px;
  color:var(--muted);
  font-weight:700;
}

.service-footer{
  padding:0 16px 16px;
}

.service-footer a{
  font-weight:900;
  color:var(--accent-dark);
}

.pricing-hint{
  margin-top:24px;
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  align-items:center;
}

.pricing-hint span{
  color:var(--muted);
  font-weight:600;
}

/* About */
.about-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:24px;
  align-items:center;
}

.about-box{
  background:#fff;
  border:1px solid var(--line);
  border-radius:var(--radius);
  padding:24px;
  box-shadow:var(--shadow);
}

.about-box h2{
  margin:0 0 12px;
}

.about-box p{
  color:var(--muted);
  font-weight:600;
}

.about-stats{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  margin-top:18px;
}

.stat{
  background:#f8fbfc;
  border:1px solid var(--line);
  border-radius:16px;
  padding:12px 14px;
  min-width:130px;
}

.stat strong{
  display:block;
  font-size:18px;
}

.stat span{
  color:var(--muted);
  font-size:14px;
  font-weight:700;
}

.about-note{
  margin-top:18px;
  display:inline-flex;
  padding:10px 14px;
  border-radius:999px;
  background:rgba(31,143,136,.10);
  color:var(--accent-dark);
  font-weight:800;
}

.about-media img{
  width:100%;
  height:100%;
  min-height:420px;
  object-fit:cover;
  border-radius:24px;
  box-shadow:var(--shadow);
}

/* Gallery */
.gallery-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:16px;
}

.gallery-grid img{
  width:100%;
  height:220px;
  object-fit:cover;
  border-radius:20px;
  box-shadow:var(--shadow);
  border:1px solid var(--line);
}

.gallery-note{
  margin-top:16px;
  color:var(--muted);
  font-weight:600;
  text-align:center;
}

/* Contact */
.contact-grid{
  display:grid;
  grid-template-columns:.9fr 1.1fr;
  gap:24px;
}

.contact-box,
.quote-form{
  background:#fff;
  border:1px solid var(--line);
  border-radius:var(--radius);
  padding:24px;
  box-shadow:var(--shadow);
}

.contact-box h2,
.quote-form h3{
  margin-top:0;
}

.contact-box p{
  color:var(--muted);
  font-weight:600;
}

.contact-links{
  display:flex;
  flex-direction:column;
  gap:12px;
  margin-top:18px;
}

.contact-links a{
  font-weight:700;
  color:var(--accent-dark);
}

.quote-form label{
  display:block;
  margin-bottom:14px;
}

.quote-form span{
  display:block;
  margin-bottom:6px;
  font-weight:800;
  color:var(--text);
}

.quote-form input,
.quote-form select,
.quote-form textarea{
  width:100%;
  border:1px solid var(--line);
  border-radius:14px;
  padding:12px 14px;
  background:#fff;
  color:var(--text);
  outline:none;
}

.quote-form input:focus,
.quote-form select:focus,
.quote-form textarea:focus{
  border-color:rgba(31,143,136,.45);
  box-shadow:0 0 0 4px rgba(31,143,136,.10);
}

.form-note{
  margin:12px 0 0;
  color:var(--muted);
  font-size:14px;
  font-weight:600;
}

/* Footer */
.site-footer{
  padding:36px 0 46px;
  border-top:1px solid var(--line);
  background:#fff;
}

.footer-inner{
  text-align:center;
}

.footer-logo{
  width:120px;
  margin:0 auto 12px;
}

/* WhatsApp */
.wa-float{
  position:fixed;
  right:18px;
  bottom:18px;
  z-index:999;
  display:inline-flex;
  align-items:center;
  gap:10px;
  background:var(--whatsapp);
  color:#fff;
  padding:14px 18px;
  border-radius:999px;
  font-weight:800;
  box-shadow:0 14px 30px rgba(0,0,0,.18);
}

.wa-icon{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:34px;
  height:34px;
  border-radius:50%;
  background:rgba(255,255,255,.18);
}

.wa-text{
  white-space:nowrap;
}

/* Modal */
.modal{
  position:fixed;
  inset:0;
  display:none;
  z-index:200;
}

.modal.is-open{
  display:block;
}

.modal-overlay{
  position:absolute;
  inset:0;
  background:rgba(15,23,42,.55);
  backdrop-filter:blur(4px);
}

.modal-card{
  position:relative;
  width:min(720px,calc(100% - 24px));
  margin:8vh auto 0;
  background:#fff;
  border-radius:22px;
  box-shadow:0 24px 60px rgba(15,23,42,.28);
  overflow:hidden;
}

.modal-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:16px 18px;
  border-bottom:1px solid var(--line);
}

.modal-head h3{
  margin:0;
  font-size:18px;
}

.modal-close{
  width:40px;
  height:40px;
  border:1px solid var(--line);
  border-radius:12px;
  background:#fff;
  cursor:pointer;
  font-size:22px;
}

.modal-body{
  padding:18px;
}

.modal-body p{
  color:var(--muted);
  font-weight:600;
}

.modal-body ul{
  margin:12px 0 0;
  padding-left:20px;
  color:var(--muted);
  font-weight:600;
}

.modal-actions{
  padding:18px;
  border-top:1px solid var(--line);
}

/* Responsive */
@media (max-width:980px){
  .hero-grid,
  .about-grid,
  .contact-grid{
    grid-template-columns:1fr;
  }

  .services-grid,
  .gallery-grid,
  .values-grid{
    grid-template-columns:1fr 1fr;
  }

  .hero-media img,
  .about-media img{
    min-height:320px;
  }

  .main-nav{
    display:none;
  }

  .menu-btn{
    display:inline-flex;
  }

  .desktop-only{
    display:none;
  }
}

@media (max-width:640px){
  .services-grid,
  .gallery-grid,
  .values-grid{
    grid-template-columns:1fr;
  }

  .hero{
    padding:42px 0;
  }

  .hero-copy h1{
    font-size:34px;
  }

  .service-img,
  .gallery-grid img{
    height:200px;
  }

  .wa-text{
    display:none;
  }

  .wa-float{
    padding:14px;
  }
}
