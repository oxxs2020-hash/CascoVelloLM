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
      hero_meta: "Residencias Boutique • Casco Vello, Vigo",
      hero_title: "Donde la Piedra Histórica<br>Abraza la Luz del Atlántico.",
      hero_sub: "Cuatro residencias de autor en el corazón peatonal de Vigo. Arquitectura noble de granito, diseño contemporáneo y vistas a la ría concebidas para el descanso y el disfrute sosegado.",
      hero_btn_explore: "Explorar la Colección",
      hero_btn_direct: "Reservar Estancia ↗",
      hero_scroll: "Desplazar",
      
      // Storytelling Section
      story_section_title: "El Carácter de Casco Vello",
      story_section_count: "Detalles de Autor",
      story1_title: "Piedra Noble & Silencio",
      story1_desc: "Muros de sillería de granito gallego del siglo XIX restaurados con carpintería acústica de triple junta para garantizar paz absoluta en pleno casco histórico.",
      story2_title: "Luz Atlántica & Galerías",
      story2_desc: "Galerías acristaladas de madera blanca y orientación solar pensada para bañar los interiores de luz natural y disfrutar de las puestas de sol sobre la Ría.",
      story3_title: "Fibra 600M & Teletrabajo",
      story3_desc: "Conexión ultrarrápida de fibra simétrica y espacios de trabajo dedicados con luz directa para nómadas digitales y estancias prolongadas de trabajo.",
      story4_title: "Check-in Autónomo 24/7",
      story4_desc: "Cerraduras electrónicas inteligentes de alta seguridad con apertura digital y check-in online para llegar a la hora que desees sin esperas ni llaves físicas.",

      // Comparison Section
      comp_section_title: "Compara y Elige tu Estancia",
      comp_section_count: "4 Opciones Únicas",
      comp_th_feature: "Característica",
      comp_row_views: "Vistas",
      comp_row_type: "Tipo & Espacio",
      comp_row_cap: "Capacidad",
      comp_row_kitchen: "Cocina & Equipamiento",
      comp_row_rating: "Opiniones",
      comp_row_book: "Disponibilidad",
      comp_u1_view: "Plaza peatonal tranquila",
      comp_u2_view: "Casco Vello peatonal",
      comp_u3_view: "Tejados y Casco Histórico",
      comp_u4_view: "Ría de Vigo y Océano",
      comp_u1_type: "Estudio / 1 Baño",
      comp_u2_type: "Estudio / 1 Baño",
      comp_u3_type: "Estudio / 1 Baño",
      comp_u4_type: "Dúplex 2 Plantas / 1 Baño",
      comp_u1_kit: "Cocina completa equipada",
      comp_u2_kit: "Lavavajillas + Lavadora/Secadora",
      comp_u3_kit: "Lavavajillas + Lavadora/Secadora",
      comp_u4_kit: "Cocina completa + Workspace",
      btn_book_now: "Reservar ↗",

      // Booking Section
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
      
      // Summary Box
      summary_badge: "✨ Fechas Flexibles",
      summary_dates_hint: "Elige tus fechas para calcular estancia en tiempo real",
      trust_license: "VUT-PO-0130318",
      trust_rating: "Valoración 5.0",
      btn_whatsapp: "WhatsApp Directo",
      
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
      
      // Location & Map
      loc_title: "Ubicación Privilegiada",
      loc_count: "Casco Vello, Vigo",
      loc_desc: "Situados en la zona histórica peatonal de Vigo, nuestros apartamentos se encuentran donde confluyen el patrimonio y la vida urbana contemporánea. Calles empedradas que llevan a terrazas acogedoras, mercados de marisco fresco y el paseo marítimo de la Ría de Vigo.",
      loc_dist0_name: "Casco Vello Residences (Nuestros Alojamientos)",
      loc_dist0_val: "Rúa de Pi y Margall / Praza",
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
      map_location_name: "Casco Vello, Vigo (Galicia)",
      map_btn_center: "📍 Centrar",
      map_btn_gmaps: "Google Maps ↗",
      
      // Skiper UI Mobile & Lightbox
      mobile_dock_units: "Alojamientos",
      mobile_dock_book: "Reservar Airbnb ↗",
      lightbox_btn_book: "Reservar en Airbnb ↗",
      
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
      hero_meta: "Boutique Residences • Casco Vello, Vigo",
      hero_title: "Where Historic Heritage<br>Meets Atlantic Light & Serenity.",
      hero_sub: "Four boutique residences nestled in the pedestrian old quarter of Vigo. Noble granite architecture, refined contemporary design, and sweeping ocean views crafted for discerning travelers.",
      hero_btn_explore: "Explore the Collection",
      hero_btn_direct: "Book Your Stay ↗",
      hero_scroll: "Scroll",
      
      // Storytelling Section
      story_section_title: "The Casco Vello Essence",
      story_section_count: "Curated Craftsmanship",
      story1_title: "Noble Granite & Silence",
      story1_desc: "19th-century restored Galician granite masonry paired with triple-glazed acoustic joinery for absolute tranquility in the historic quarter.",
      story2_title: "Atlantic Light & Balconies",
      story2_desc: "White wooden glass galerías oriented to maximize natural sunshine and frame mesmerizing Atlantic sunsets over the Ría de Vigo.",
      story3_title: "600M Fiber & Remote Work",
      story3_desc: "High-speed symmetric fiber Wi-Fi and sunlit dedicated workspaces designed for digital nomads and productive extended stays.",
      story4_title: "24/7 Keyless Check-in",
      story4_desc: "Smart digital electronic locks and seamless online check-in to arrive whenever you wish with zero delays or physical keys.",

      // Comparison Section
      comp_section_title: "Compare & Choose Your Stay",
      comp_section_count: "4 Unique Stays",
      comp_th_feature: "Feature",
      comp_row_views: "Views",
      comp_row_type: "Space & Layout",
      comp_row_cap: "Capacity",
      comp_row_kitchen: "Kitchen & Laundry",
      comp_row_rating: "Reviews",
      comp_row_book: "Availability",
      comp_u1_view: "Quiet pedestrian plaza",
      comp_u2_view: "Pedestrian Casco Vello",
      comp_u3_view: "Old Town & rooftops",
      comp_u4_view: "Ría de Vigo & ocean",
      comp_u1_type: "Studio / 1 Bath",
      comp_u2_type: "Studio / 1 Bath",
      comp_u3_type: "Studio / 1 Bath",
      comp_u4_type: "2-Floor Duplex / 1 Bath",
      comp_u1_kit: "Fully equipped kitchen",
      comp_u2_kit: "Dishwasher + Washer/Dryer",
      comp_u3_kit: "Dishwasher + Washer/Dryer",
      comp_u4_kit: "Designer kitchen + Workspace",
      btn_book_now: "Book ↗",

      // Booking Section
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
      
      // Summary Box
      summary_badge: "✨ Flexible Dates",
      summary_dates_hint: "Pick dates to calculate stay in real time",
      trust_license: "VUT-PO-0130318",
      trust_rating: "5.0 Rating",
      btn_whatsapp: "Direct WhatsApp",
      
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
      
      // Location & Map
      loc_title: "Prime Location",
      loc_count: "Casco Vello, Vigo",
      loc_desc: "Nestled in the pedestrian-only historic quarter of Vigo, our apartments sit at the intersection of heritage and modern urban life. Cobblestone lanes lead to bustling terraces, fresh seafood markets, and the shimmering waterfront of the Ría de Vigo.",
      loc_dist0_name: "Casco Vello Residences (Our Apartments)",
      loc_dist0_val: "Rúa de Pi y Margall / Plaza",
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
      map_location_name: "Casco Vello, Vigo (Galicia)",
      map_btn_center: "📍 Recenter",
      map_btn_gmaps: "Google Maps ↗",
      
      // Skiper UI Mobile & Lightbox
      mobile_dock_units: "The Units",
      mobile_dock_book: "Book on Airbnb ↗",
      lightbox_btn_book: "Book on Airbnb ↗",
      
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

  // ——— Skiper UI Spotlight Cursor Effect ———
  const spotlightElements = document.querySelectorAll('.card, .exp-card, .testimonial-card, .direct-link-card, .booking-mask, .distance-item, .story-card');
  spotlightElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // ——— Interactive Gallery Lightbox ———
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-nav-btn.prev');
  const lightboxNext = document.querySelector('.lightbox-nav-btn.next');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxBookBtn = document.getElementById('lightbox-book-btn');

  let currentGallery = [];
  let currentGalleryIndex = 0;
  let currentAirbnbUrl = '';

  function openLightbox(images, startIndex, caption, airbnbUrl) {
    if (!lightbox || !images || images.length === 0) return;
    currentGallery = images;
    currentGalleryIndex = startIndex || 0;
    currentAirbnbUrl = airbnbUrl || '';

    updateLightboxView(caption);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightboxView(caption) {
    if (!currentGallery[currentGalleryIndex]) return;
    const item = currentGallery[currentGalleryIndex];
    if (lightboxImg) {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.alt || 'Apartamento Casco Vello';
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${currentGallery.length}`;
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = item.alt || caption || 'Casco Vello Residences';
    }
    if (lightboxBookBtn) {
      lightboxBookBtn.href = currentAirbnbUrl || '#booking';
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => {
      currentGalleryIndex = (currentGalleryIndex - 1 + currentGallery.length) % currentGallery.length;
      updateLightboxView();
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => {
      currentGalleryIndex = (currentGalleryIndex + 1) % currentGallery.length;
      updateLightboxView();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
      if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
    }
  });

  // Attach Lightbox Triggers to Carousel Images
  document.querySelectorAll('.card').forEach(card => {
    const slides = card.querySelectorAll('.carousel-slide img');
    const airbnbLink = card.querySelector('.btn-airbnb')?.getAttribute('href') || '';
    const title = card.querySelector('.card-header h3')?.textContent || '';
    const images = Array.from(slides).map(img => ({ src: img.src, alt: img.alt }));

    slides.forEach((img, index) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        openLightbox(images, index, title, airbnbLink);
      });
    });
  });

  // ——— Interactive Leaflet Map ———
  const mapContainer = document.getElementById('interactive-map');
  let mapInstance = null;
  const mainCoords = [42.2384, -8.7265];
  const markers = {};

  if (mapContainer && typeof L !== 'undefined') {
    mapInstance = L.map('interactive-map', {
      center: mainCoords,
      zoom: 15,
      scrollWheelZoom: false,
      zoomControl: true
    });

    // Official OpenStreetMap tile layer - 100% free, no API key required
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(mapInstance);

    // Custom Icon Creators
    const createCustomIcon = (iconText, isMain = false) => {
      return L.divIcon({
        className: 'custom-pin-wrapper',
        html: `<div class="custom-pin ${isMain ? 'main-pin' : ''}">${iconText}</div>`,
        iconSize: isMain ? [46, 46] : [38, 38],
        iconAnchor: isMain ? [23, 23] : [19, 19],
        popupAnchor: [0, -22]
      });
    };

    // 1. Casco Vello Residences (Main Marker)
    markers['casco-vello'] = L.marker(mainCoords, { icon: createCustomIcon('🏛️', true) })
      .addTo(mapInstance)
      .bindPopup(`
        <div>
          <div class="map-popup-title">Casco Vello Residences</div>
          <div class="map-popup-sub">4 Apartamentos Exclusivos</div>
          <div class="map-popup-desc">Ubicación peatonal histórica en Rúa de Pi y Margall / Praza da Constitución.</div>
          <a href="#properties" class="map-popup-link">Ver Apartamentos ↓</a>
        </div>
      `);

    // 2. Mercado da Pedra
    markers['pedra'] = L.marker([42.2393, -8.7258], { icon: createCustomIcon('🐟') })
      .addTo(mapInstance)
      .bindPopup(`
        <div>
          <div class="map-popup-title">Mercado da Pedra</div>
          <div class="map-popup-sub">2 min a pie (180 m)</div>
          <div class="map-popup-desc">Famosa calle de las ostras y marisquerías tradicionales de la ría.</div>
        </div>
      `);

    // 3. Calle del Príncipe
    markers['principe'] = L.marker([42.2366, -8.7225], { icon: createCustomIcon('🛍️') })
      .addTo(mapInstance)
      .bindPopup(`
        <div>
          <div class="map-popup-title">Calle Príncipe</div>
          <div class="map-popup-sub">4 min a pie (350 m)</div>
          <div class="map-popup-desc">Principal arteria comercial peatonal y de ocio del centro de Vigo.</div>
        </div>
      `);

    // 4. Puerto de Vigo / Ferry Cíes
    markers['puerto'] = L.marker([42.2415, -8.7250], { icon: createCustomIcon('⛴️') })
      .addTo(mapInstance)
      .bindPopup(`
        <div>
          <div class="map-popup-title">Puerto & Ferry a Islas Cíes</div>
          <div class="map-popup-sub">8 min a pie (650 m)</div>
          <div class="map-popup-desc">Salida directa de barcos al Parque Nacional de las Islas Cíes y paseos náuticos.</div>
        </div>
      `);

    // 5. Estación Vigo-Urzáiz
    markers['estacion'] = L.marker([42.2335, -8.7145], { icon: createCustomIcon('🚄') })
      .addTo(mapInstance)
      .bindPopup(`
        <div>
          <div class="map-popup-title">Estación Vigo-Urzáiz</div>
          <div class="map-popup-sub">10 min a pie (900 m)</div>
          <div class="map-popup-desc">Conexión de Alta Velocidad (AVE / Alvia) y centro comercial Vialia.</div>
        </div>
      `);

    // 6. Praia de Samil
    markers['samil'] = L.marker([42.2085, -8.7735], { icon: createCustomIcon('🏖️') })
      .addTo(mapInstance)
      .bindPopup(`
        <div>
          <div class="map-popup-title">Praia de Samil</div>
          <div class="map-popup-sub">12 min en coche</div>
          <div class="map-popup-desc">La playa más emblemática de Vigo con paseo marítimo e increíbles vistas a las Cíes.</div>
        </div>
      `);

    // Open main popup by default
    markers['casco-vello'].openPopup();

    // Recenter Button
    const recenterBtn = document.getElementById('btn-recenter-map');
    if (recenterBtn) {
      recenterBtn.addEventListener('click', () => {
        mapInstance.flyTo(mainCoords, 15, { duration: 1.2 });
        markers['casco-vello'].openPopup();
        document.querySelectorAll('.distance-item').forEach(item => item.classList.toggle('active', item.dataset.id === 'casco-vello'));
      });
    }

    // Distance List Item Clicks -> Fly to Location
    document.querySelectorAll('.distance-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const lat = parseFloat(item.getAttribute('data-lat'));
        const lng = parseFloat(item.getAttribute('data-lng'));
        const zoom = parseInt(item.getAttribute('data-zoom'), 10) || 16;

        document.querySelectorAll('.distance-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');

        if (mapInstance && !isNaN(lat) && !isNaN(lng)) {
          mapInstance.flyTo([lat, lng], zoom, { duration: 1.2 });
          if (markers[id]) {
            setTimeout(() => {
              markers[id].openPopup();
            }, 600);
          }
        }
      });
    });
  }

  // ——— Booking Mask (Buchungsmaske) Logic & Live Estimator ———
  const bookingForm = document.getElementById('hero-booking-form');
  const checkinInput = document.getElementById('mask-checkin');
  const checkoutInput = document.getElementById('mask-checkout');
  const unitSelect = document.getElementById('mask-unit');
  const guestsSelect = document.getElementById('mask-guests');
  const nightsBadge = document.getElementById('booking-nights-badge');
  const datesText = document.getElementById('booking-dates-text');

  function updateNightsSummary() {
    if (!checkinInput || !checkoutInput) return;
    const inVal = checkinInput.value;
    const outVal = checkoutInput.value;
    const lang = localStorage.getItem('casco_vello_lang') || 'es';

    if (inVal && outVal && outVal > inVal) {
      const d1 = new Date(inVal);
      const d2 = new Date(outVal);
      const nights = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));

      if (nightsBadge) {
        nightsBadge.textContent = lang === 'es' ? `✨ ${nights} ${nights === 1 ? 'Noche' : 'Noches'}` : `✨ ${nights} ${nights === 1 ? 'Night' : 'Nights'}`;
      }
      if (datesText) {
        const opt = { day: 'numeric', month: 'short' };
        datesText.textContent = `${d1.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', opt)} — ${d2.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', opt)}`;
      }
    }
  }

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
        updateNightsSummary();
      }
    });

    checkoutInput.addEventListener('change', updateNightsSummary);
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

    // Close on click outside nav
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
      }
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
        // Invalidate map size if map is in view
        if (mapInstance) {
          setTimeout(() => { mapInstance.invalidateSize(); }, 300);
        }
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
