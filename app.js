/* ============================================
   CASCO VELLO STAYS — Interactive Logic & i18n
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ——— Language / Internationalization System (ES / EN) ———
  const translations = {
    es: {
      page_title: "Casco Vello Residences | Apartamentos de Lujo en Vigo, España",
      meta_desc: "Cuatro apartamentos de lujo sereno en el corazón peatonal del Casco Vello de Vigo. Estancias minimalistas con comodidades premium y vistas.",
      nav_units: "Alojamientos",
      nav_experience: "Experiencia",
      nav_reviews: "Opiniones",
      nav_location: "Ubicación",
      nav_cta: "Reservar",
      hero_meta: "Escapadas Urbanas Exclusivas • Vigo, España",
      hero_title: "Patrimonio Renovado.<br>Diseño y Confort Minimalista.",
      hero_sub: "Cuatro apartamentos de lujo sereno en el corazón peatonal del Casco Vello de Vigo, diseñados para el descanso, el teletrabajo y el disfrute sin prisas.",
      hero_btn_explore: "Explorar la Colección",
      hero_btn_direct: "Reservar Estancia ↗",
      hero_scroll: "Desplazar",
      
      // Booking Section (at the end)
      booking_section_title: "Reserva tu Estancia",
      booking_section_count: "Disponibilidad Oficial",
      booking_section_sub: "Selecciona tu apartamento preferido y fechas para comprobar disponibilidad en tiempo real y reservar de forma segura a través de Airbnb.",
      
      // Booking Mask Fields
      mask_unit_label: "Alojamiento",
      mask_checkin_label: "Llegada",
      mask_checkout_label: "Salida",
      mask_guests_label: "Huéspedes",
      mask_btn: "Buscar en Airbnb ↗",
      mask_opt_1: "Estudio Plaza Tranquila (★ 5.0)",
      mask_opt_2: "Estudio Casco Vello a Pie (★ 4.33)",
      mask_opt_3: "Estudio Vistas Históricas (★ 5.0)",
      mask_opt_4: "Ático Dúplex Vistas Mar (★ Nuevo)",
      mask_guest_1: "1 Huésped",
      mask_guest_2: "2 Huéspedes",
      mask_guest_3: "3 Huéspedes",
      mask_guest_4: "4 Huéspedes",
      
      collection_title: "Nuestros Alojamientos",
      collection_count: "4 Espacios Exclusivos",
      
      // Direct Links Ribbon
      ribbon_unit1: "Estudio Plaza Tranquila",
      ribbon_unit2: "Estudio Casco Vello a Pie",
      ribbon_unit3: "Estudio Vistas Históricas",
      ribbon_unit4: "Ático Dúplex Vistas Mar",
      
      // Card 1
      card1_badge_view: "Plaza Tranquila",
      card1_badge_rating: "★ 5.0 (1 opinión)",
      card1_title: "Estudio con Encanto en Pleno Casco Vello",
      card1_desc: "Estudio moderno en el casco histórico de Vigo, situado en una plaza tranquila sin tráfico rodado. Equipado con Wi-Fi fibra de alta velocidad, aire acondicionado, cama doble más sofá cama y cocina completa. Check-in online y autónomo.",
      card1_tag1: "Estudio / 1 Baño",
      card1_tag2: "Cama Doble + Sofá",
      card1_tag3: "Aire Acondicionado",
      card1_tag4: "Cocina Equipada",
      card1_tag5: "Check-in Autónomo",
      
      // Card 2
      card2_badge_view: "Máxima Comodidad",
      card2_badge_rating: "★ 4.33 (3 opiniones)",
      card2_title: "Estudio Ideal para Disfrutar Vigo a Pie",
      card2_desc: "Espacio moderno y acogedor en el Casco Vello. Dispone de Wi-Fi rápido, aire acondicionado, cocina equipada con lavavajillas, lavadora/secadora, cama doble y sofá cama en una plaza sin ruidos.",
      card2_tag1: "Estudio / 1 Baño",
      card2_tag2: "Lavavajillas",
      card2_tag3: "Lavadora / Secadora",
      card2_tag4: "Cama Doble + Sofá",
      card2_tag5: "Aire Acondicionado",
      
      // Card 3
      card3_badge_view: "Vistas Casco Histórico",
      card3_badge_rating: "★ 5.0 (2 opiniones)",
      card3_title: "Estudio Moderno y Luminoso con Vistas",
      card3_desc: "Disfruta de una estancia especial en este luminoso estudio con vistas al casco histórico. Aislamiento acústico de primera, Wi-Fi fibra, aire acondicionado, lavavajillas, lavadora/secadora y cama doble más sofá.",
      card3_tag1: "Estudio / 1 Baño",
      card3_tag2: "Vistas Casco Histórico",
      card3_tag3: "Lavavajillas",
      card3_tag4: "Lavadora / Secadora",
      card3_tag5: "Wi-Fi Rápido",
      
      // Card 4
      card4_badge_view: "Ático Dúplex",
      card4_badge_rating: "★ Nuevo · Vistas al Mar",
      card4_title: "Espectacular Ático Dúplex con Vistas al Mar",
      card4_desc: "Ático dúplex moderno y muy luminoso en el corazón del Casco Vello con vistas a la ría y el océano Atlántico. Cama doble, espacio de trabajo dedicado, cocina completa y aire acondicionado frío/calor.",
      card4_tag1: "Ático Dúplex",
      card4_tag2: "Vistas al Mar",
      card4_tag3: "Espacio de Trabajo",
      card4_tag4: "A/C Frío / Calor",
      card4_tag5: "Wi-Fi Rápido",
      
      btn_book_airbnb: "Reservar en Airbnb",
      
      // Experience
      exp_title: "La Experiencia Casco Vello",
      exp_count: "Lo que te espera",
      exp1_title: "Totalmente Peatonal",
      exp1_desc: "Todo a pocos minutos a pie: mercados, restaurantes, el puerto y el centro comercial. Sin necesidad de coche.",
      exp2_title: "Gastronomía Gallega",
      exp2_desc: "Rodeado de tascas tradicionales de marisco, bares de tapas y restaurantes de autor en la zona más auténtica.",
      exp3_title: "Historia Viva",
      exp3_desc: "Restos romanos, murallas medievales y arquitectura noble de granito crean un entorno cultural único.",
      exp4_title: "Cercanía al Atlántico",
      exp4_desc: "La Ría de Vigo y sus paseos a un paso. Puestas de sol inolvidables hacia las Islas Cíes.",
      
      // Reviews
      rev_title: "Voces de Huéspedes",
      rev_count: "De Nuestros Visitantes",
      rev1_text: "\"El apartamento estaba impecable y perfectamente ubicado. Fuimos a pie a todas partes: al mercado, a cenar, al puerto. El aislamiento acústico es excelente; silencio total en pleno casco histórico.\"",
      rev1_author: "Maria C.",
      rev1_from: "Barcelona, España",
      rev2_text: "\"Teletrabajé dos semanas desde el ático. El Wi-Fi de fibra nunca falló, el espacio de trabajo está muy bien pensado y ver el atardecer sobre las Islas Cíes fue un auténtico lujo cada tarde.\"",
      rev2_author: "James T.",
      rev2_from: "Londres, Reino Unido",
      rev3_text: "\"La estética minimalista unida al equipamiento premium crea una experiencia muy superior. El check-in autónomo fue perfecto y las recomendaciones gastronómicas de Jose inmejorables.\"",
      rev3_author: "Laura & Pierre",
      rev3_from: "Lyon, Francia",
      rev4_text: "\"El casco histórico de Vigo tiene una energía única. Este estudio lo aprovecha al máximo: arquitectura tradicional de piedra con interior contemporáneo y acogedor.\"",
      rev4_author: "Anna S.",
      rev4_from: "Berlín, Alemania",
      rev5_text: "\"Nos alojamos cinco noches en el estudio del centro histórico y superó todas las expectativas. Vistas luminosas, cocina completamente equipada y ubicación inmejorable.\"",
      rev5_author: "Ricardo M.",
      rev5_from: "Lisboa, Portugal",
      rev6_text: "\"Todo limpísimo, comunicación inmediata y el barrio tiene vida pero es muy tranquilo para descansar. La lavadora/secadora fue comodísima.\"",
      rev6_author: "Sophie W.",
      rev6_from: "Ámsterdam, Países Bajos",
      
      // Location
      loc_title: "Ubicación Privilegiada",
      loc_count: "Casco Vello, Vigo",
      loc_desc: "Situados en la zona histórica peatonal de Vigo, nuestros apartamentos se encuentran donde confluyen el patrimonio y la vida urbana contemporánea. Calles empedradas que llevan a terrazas acogedoras, mercados de marisco fresco y el paseo marítimo de la Ría de Vigo.",
      loc_dist1_name: "Praia de Samil (Playa)",
      loc_dist1_val: "12 min en coche",
      loc_dist2_name: "Calle Príncipe (zona comercial)",
      loc_dist2_val: "4 min a pie",
      loc_dist3_name: "Mercado da Pedra (ostras y marisco)",
      loc_dist3_val: "2 min a pie",
      loc_dist4_name: "Ferry a Islas Cíes (Puerto)",
      loc_dist4_val: "8 min a pie al puerto",
      loc_dist5_name: "Estación de Tren Vigo-Urzáiz",
      loc_dist5_val: "10 min a pie",
      loc_dist6_name: "Aeropuerto de Vigo (VGO)",
      loc_dist6_val: "15 min en coche",
      
      // Footer
      footer_desc: "Cuatro apartamentos exclusivos en el corazón peatonal del casco histórico de Vigo. Diseñados para viajeros que valoran el confort, la calma y la autenticidad.",
      footer_explore: "Explorar",
      footer_quick: "Enlaces Directos Airbnb",
      footer_unit1: "1. Estudio Plaza Tranquila ↗",
      footer_unit2: "2. Estudio Centro a Pie ↗",
      footer_unit3: "3. Estudio Vistas Históricas ↗",
      footer_unit4: "4. Ático Dúplex Vistas Mar ↗",
      footer_contact: "Contacto y Anfitrión",
      footer_managed: "Gestionado por",
      footer_rights: "Casco Vello Stays. Todos los derechos reservados."
    },
    en: {
      page_title: "Casco Vello Residences | Luxury Stays in Vigo, Spain",
      meta_desc: "Four quiet-luxury apartments in the pedestrian heart of Casco Vello, Vigo. Curated minimalist stays with premium amenities, ocean views, and effortless exploration.",
      nav_units: "The Units",
      nav_experience: "Experience",
      nav_reviews: "Reviews",
      nav_location: "Location",
      nav_cta: "Book Now",
      hero_meta: "Exclusive Urban Escapes • Vigo, Spain",
      hero_title: "Restyled Heritage.<br>Uncompromising Minimalist Living.",
      hero_sub: "Four quiet-luxury apartments positioned in the pedestrian core of Casco Vello, crafted for long afternoons, remote work, and effortless exploration.",
      hero_btn_explore: "Explore the Collection",
      hero_btn_direct: "Book Your Stay ↗",
      hero_scroll: "Scroll",
      
      // Booking Section (at the end)
      booking_section_title: "Book Your Stay",
      booking_section_count: "Official Availability",
      booking_section_sub: "Select your preferred apartment and dates to verify real-time availability and book securely directly on Airbnb.",
      
      // Booking Mask Fields
      mask_unit_label: "Apartment",
      mask_checkin_label: "Check-in",
      mask_checkout_label: "Check-out",
      mask_guests_label: "Guests",
      mask_btn: "Search on Airbnb ↗",
      mask_opt_1: "Quiet Plaza Studio (★ 5.0)",
      mask_opt_2: "Walkable Center Studio (★ 4.33)",
      mask_opt_3: "Historic Views Studio (★ 5.0)",
      mask_opt_4: "Sea View Duplex Penthouse (★ New)",
      mask_guest_1: "1 Guest",
      mask_guest_2: "2 Guests",
      mask_guest_3: "3 Guests",
      mask_guest_4: "4 Guests",
      
      collection_title: "The Collection",
      collection_count: "4 Curated Spaces",
      
      // Direct Links Ribbon
      ribbon_unit1: "Quiet Plaza Studio",
      ribbon_unit2: "Walkable Center Studio",
      ribbon_unit3: "Historic Views Studio",
      ribbon_unit4: "Sea View Duplex Penthouse",
      
      // Card 1
      card1_badge_view: "Quiet Plaza",
      card1_badge_rating: "★ 5.0 (1 review)",
      card1_title: "Charming Studio in the Heart of Casco Vello",
      card1_desc: "Modern studio in the Old Town of Vigo, situated in a quiet traffic-free plaza. Outfitted with high-speed fiber Wi-Fi, air conditioning, double bed plus sofa bed, and a fully equipped kitchen. Self and online check-in.",
      card1_tag1: "Studio / 1 Bath",
      card1_tag2: "Double Bed + Sofa",
      card1_tag3: "Air Conditioning",
      card1_tag4: "Equipped Kitchen",
      card1_tag5: "Self Check-in",
      
      // Card 2
      card2_badge_view: "Prime Walkability",
      card2_badge_rating: "★ 4.33 (3 reviews)",
      card2_title: "Ideal Studio for Enjoying Vigo on Foot",
      card2_desc: "Modern retreat in the pedestrian core of Casco Vello. Features fast Wi-Fi, air conditioning, dishwasher, in-unit washer/dryer, double bed, and sofa bed in a peaceful square with no traffic.",
      card2_tag1: "Studio / 1 Bath",
      card2_tag2: "Dishwasher",
      card2_tag3: "Washer / Dryer",
      card2_tag4: "Double Bed + Sofa",
      card2_tag5: "Air Conditioning",
      
      // Card 3
      card3_badge_view: "Historic Views",
      card3_badge_rating: "★ 5.0 (2 reviews)",
      card3_title: "Modern & Bright Historic Center Studio",
      card3_desc: "Bright, sunlit studio overlooking the historic center. Complete with premium acoustic insulation, fast Wi-Fi, air conditioning, dishwasher, washer/dryer, and double bed plus sofa bed.",
      card3_tag1: "Studio / 1 Bath",
      card3_tag2: "Historic Center Views",
      card3_tag3: "Dishwasher",
      card3_tag4: "Washer / Dryer",
      card3_tag5: "Fast Wi-Fi",
      
      // Card 4
      card4_badge_view: "Duplex Penthouse",
      card4_badge_rating: "★ New · Sea Views",
      card4_title: "Spectacular Penthouse Duplex with Ocean Views",
      card4_desc: "Top-floor duplex filled with natural light and sweeping Atlantic ocean views. Features a dedicated creative workspace, double bed, hot/cold air conditioning, fully equipped kitchen, and high-speed Wi-Fi.",
      card4_tag1: "Duplex Penthouse",
      card4_tag2: "Atlantic Ocean Views",
      card4_tag3: "Dedicated Workspace",
      card4_tag4: "Hot / Cold A/C",
      card4_tag5: "Fast Wi-Fi",
      
      btn_book_airbnb: "Book on Airbnb",
      
      // Experience
      exp_title: "The Casco Vello Experience",
      exp_count: "What Awaits You",
      exp1_title: "Total Walkability",
      exp1_desc: "Everything within minutes on foot — markets, restaurants, beaches, and the city center. No car needed, ever.",
      exp2_title: "Galician Gastronomy",
      exp2_desc: "Surrounded by pintxo bars, seafood tabernas, and Michelin-quality restaurants in the oldest quarter of the city.",
      exp3_title: "Living History",
      exp3_desc: "Roman ruins, medieval walls, and centuries-old granite architecture create an immersive cultural backdrop.",
      exp4_title: "Atlantic Proximity",
      exp4_desc: "The Ría de Vigo and its beaches are a short stroll away. Sunsets over the Cíes Islands are unforgettable.",
      
      // Reviews
      rev_title: "Guest Voices",
      rev_count: "From Our Visitors",
      rev1_text: "\"The apartment was immaculate and perfectly located. We walked everywhere — to the market, to dinner, to the waterfront. The acoustic insulation was remarkable; total silence in the heart of the old town.\"",
      rev1_author: "Maria C.",
      rev1_from: "Barcelona, Spain",
      rev2_text: "\"Worked remotely for two weeks from the penthouse. The fiber Wi-Fi never dropped, the workspace was thoughtfully designed, and watching sunsets over the Cíes Islands became my evening ritual.\"",
      rev2_author: "James T.",
      rev2_from: "London, UK",
      rev3_text: "\"The minimalist aesthetic paired with premium amenities created an experience far beyond typical rentals. Self check-in was seamless, and Jose's recommendations for restaurants were outstanding.\"",
      rev3_author: "Laura & Pierre",
      rev3_from: "Lyon, France",
      rev4_text: "\"Vigo's old town has an energy you can't find anywhere else in Galicia. This studio captures it perfectly — traditional stone exterior, sleek modern interior. We're already planning our return trip.\"",
      rev4_author: "Anna S.",
      rev4_from: "Berlin, Germany",
      rev5_text: "\"We stayed five nights in the historic center studio and it exceeded every expectation. The city views from the window, the fully stocked kitchen, and the central yet quiet location were perfect.\"",
      rev5_author: "Ricardo M.",
      rev5_from: "Lisbon, Portugal",
      rev6_text: "\"Everything was spotless, communication was instant, and the neighborhood felt alive but never noisy. The washer/dryer was a huge plus for our extended stay. Highly recommended.\"",
      rev6_author: "Sophie W.",
      rev6_from: "Amsterdam, Netherlands",
      
      // Location
      loc_title: "Prime Location",
      loc_count: "Casco Vello, Vigo",
      loc_desc: "Nestled in the pedestrian-only historic quarter of Vigo, our apartments sit at the intersection of heritage and modern urban life. Cobblestone lanes lead to bustling terraces, fresh seafood markets, and the shimmering waterfront of the Ría de Vigo.",
      loc_dist1_name: "Praia de Samil",
      loc_dist1_val: "12 min by car",
      loc_dist2_name: "Calle Príncipe (shopping)",
      loc_dist2_val: "4 min walk",
      loc_dist3_name: "Mercado da Pedra (oyster market)",
      loc_dist3_val: "2 min walk",
      loc_dist4_name: "Ferry to Cíes Islands",
      loc_dist4_val: "8 min walk to port",
      loc_dist5_name: "Vigo-Urzáiz Train Station",
      loc_dist5_val: "10 min walk",
      loc_dist6_name: "Vigo Airport (VGO)",
      loc_dist6_val: "15 min by car",
      
      // Footer
      footer_desc: "Four curated apartments in the pedestrian heart of Vigo's historic quarter. Designed for travelers who appreciate quiet luxury, walkability, and cultural immersion.",
      footer_explore: "Explore",
      footer_quick: "Direct Airbnb Links",
      footer_unit1: "1. Quiet Plaza Studio ↗",
      footer_unit2: "2. Walkable Center Studio ↗",
      footer_unit3: "3. Historic Views Studio ↗",
      footer_unit4: "4. Sea View Duplex Penthouse ↗",
      footer_contact: "Contact & Host",
      footer_managed: "Managed by",
      footer_rights: "Casco Vello Stays. All rights reserved."
    }
  };

  function setLanguage(lang) {
    if (!translations[lang]) lang = 'es';
    document.documentElement.lang = lang;
    localStorage.setItem('casco_vello_lang', lang);

    // Update document title & meta description
    if (translations[lang].page_title) {
      document.title = translations[lang].page_title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang].meta_desc) {
      metaDesc.setAttribute('content', translations[lang].meta_desc);
    }

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    // Update HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });
  }

  // Bind Language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = btn.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });

  // Initialize language (default: Spanish or stored preference)
  const savedLang = localStorage.getItem('casco_vello_lang') || 'es';
  setLanguage(savedLang);

  // ——— Booking Mask (Buchungsmaske) Logic ———
  const bookingForm = document.getElementById('hero-booking-form');
  const checkinInput = document.getElementById('mask-checkin');
  const checkoutInput = document.getElementById('mask-checkout');
  const unitSelect = document.getElementById('mask-unit');
  const guestsSelect = document.getElementById('mask-guests');

  // Set min date to today
  if (checkinInput && checkoutInput) {
    const today = new Date().toISOString().split('T')[0];
    checkinInput.setAttribute('min', today);
    checkoutInput.setAttribute('min', today);

    checkinInput.addEventListener('change', () => {
      if (checkinInput.value) {
        const nextDay = new Date(checkinInput.value);
        nextDay.setDate(nextDay.getDate() + 1);
        const minCheckout = nextDay.toISOString().split('T')[0];
        checkoutInput.setAttribute('min', minCheckout);
        if (checkoutInput.value && checkoutInput.value <= checkinInput.value) {
          checkoutInput.value = minCheckout;
        }
      }
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const unitId = unitSelect ? unitSelect.value : '1445770978229507611';
      const checkin = checkinInput ? checkinInput.value : '';
      const checkout = checkoutInput ? checkoutInput.value : '';
      const guests = guestsSelect ? guestsSelect.value : '2';

      let airbnbUrl = `https://www.airbnb.com/rooms/${unitId}`;
      const params = new URLSearchParams();
      if (checkin) params.append('check_in', checkin);
      if (checkout) params.append('check_out', checkout);
      if (guests) params.append('adults', guests);

      const queryString = params.toString();
      if (queryString) {
        airbnbUrl += `?${queryString}`;
      }

      window.open(airbnbUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // ——— Page Loader ———
  const loader = document.querySelector('.page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
      }, 600);
    });
    // Fallback in case load already fired
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.remove('loading');
    }, 2000);
  }

  // ——— Scroll Progress Bar ———
  const scrollProgress = document.querySelector('.scroll-progress');
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) {
      scrollProgress.style.width = progress + '%';
    }
  }

  // ——— Header Scroll Effect ———
  const header = document.querySelector('header');
  function updateHeaderState() {
    if (!header) return;
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // ——— Parallax Hero ———
  const heroBgImg = document.querySelector('.hero-bg img');
  function updateParallax() {
    if (!heroBgImg) return;
    const scrollTop = window.scrollY;
    const heroHeight = document.querySelector('.hero')?.offsetHeight || 800;
    if (scrollTop < heroHeight) {
      const translateY = scrollTop * 0.35;
      heroBgImg.style.transform = `translateY(${translateY}px) scale(1.08)`;
    }
  }

  // ——— Consolidated Scroll Handler ———
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollProgress();
        updateHeaderState();
        updateParallax();
        updateBackToTop();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ——— Mobile Navigation Toggle ———
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
    });
    // Close on link click (except language switcher)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }

  // ——— Smooth Scroll for Anchor Links ———
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ——— Scroll Reveal Animations ———
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ——— Image Carousels ———
  function initCarousels() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const carousel = card.querySelector('.carousel');
      if (!carousel) return;

      const track = carousel.querySelector('.carousel-track');
      const slides = carousel.querySelectorAll('.carousel-slide');
      const dots = carousel.querySelectorAll('.carousel-dot');
      const prevBtn = carousel.querySelector('.carousel-btn.prev');
      const nextBtn = carousel.querySelector('.carousel-btn.next');

      if (slides.length <= 1) return;

      let currentIndex = 0;
      let startX = 0;
      let isDragging = false;

      function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === currentIndex);
        });
      }

      if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); goToSlide(currentIndex - 1); });
      if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); goToSlide(currentIndex + 1); });

      dots.forEach((dot, i) => {
        dot.addEventListener('click', (e) => { e.stopPropagation(); goToSlide(i); });
      });

      // Touch/swipe support
      carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
      }, { passive: true });

      carousel.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) goToSlide(currentIndex + 1);
          else goToSlide(currentIndex - 1);
        }
        isDragging = false;
      }, { passive: true });

      // Mouse drag support
      carousel.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        isDragging = true;
        carousel.style.cursor = 'grabbing';
      });

      carousel.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        const diff = startX - e.clientX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) goToSlide(currentIndex + 1);
          else goToSlide(currentIndex - 1);
        }
        isDragging = false;
        carousel.style.cursor = '';
      });

      carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        carousel.style.cursor = '';
      });
    });
  }

  initCarousels();

  // ——— Testimonial Carousel ———
  function initTestimonialCarousel() {
    const carousel = document.querySelector('.testimonial-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.testimonial-track');
    const slides = carousel.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');

    if (slides.length <= 1) return;

    let currentIndex = 0;
    let autoplayInterval;

    function goTo(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentIndex = index;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

    function startAutoplay() {
      autoplayInterval = setInterval(() => goTo(currentIndex + 1), 7000);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    startAutoplay();
  }

  initTestimonialCarousel();

  // ——— Animated Counters ———
  function initCounters() {
    const counters = document.querySelectorAll('.counter-value');

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          const duration = 2000;
          const startTime = performance.now();

          function animate(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  initCounters();

  // ——— Back to Top ———
  const backToTop = document.querySelector('.back-to-top');
  function updateBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 600) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ——— Current Year in Footer ———
  const yearEl = document.querySelector('.current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
