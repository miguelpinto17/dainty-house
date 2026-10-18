/* Dainty House — shared content for every design variant.
   Edit THIS file to change links, reviews, amenities or copy everywhere at once. */
(function () {
  var DH = (window.DH = window.DH || {});

  DH.links = {
    airbnb: 'https://www.airbnb.pt/rooms/888126764161156334',
    booking: 'https://www.booking.com/hotel/pt/dainty-house-ovar.pt-pt.html'
  };

  DH.registration = '114521/AL';

  /* Rating shown on Airbnb (fetched 2026-10-18). Booking.com score: add when available. */
  DH.rating = {
    score: '4.76',
    count: 160,
    categories: [
      { key: 'cleanliness', value: 4.6 },
      { key: 'accuracy', value: 4.7 },
      { key: 'checkin', value: 4.9 },
      { key: 'communication', value: 4.8 },
      { key: 'location', value: 4.7 },
      { key: 'value', value: 4.6 }
    ],
    /* Topics Airbnb surfaces from guest reviews, with mention counts */
    mentions: [
      { key: 'hospitality', count: 59 },
      { key: 'jacuzzi', count: 49 },
      { key: 'cleanliness', count: 44 },
      { key: 'parking', count: 7 }
    ]
  };

  /* Photos: files live in assets/photos (1920px) and assets/photos/sm (900px).
     w/h = natural size. focus = object-position used when cropped. */
  DH.photos = {
    '01': { w: 1920, h: 1279, focus: '30% 60%', alt: { en: 'Private garden with jacuzzi, slate stone wall and timber pergola', pt: 'Jardim privado com jacuzzi, parede de xisto e pérgola de madeira' } },
    '02': { w: 1920, h: 1279, focus: '60% 55%', alt: { en: 'Living room with sofa, glass bar cabinet and blue accent lighting', pt: 'Sala de estar com sofá, vitrine de bar e iluminação LED azul' } },
    '03': { w: 1920, h: 1279, focus: '50% 55%', alt: { en: 'Open-plan kitchen with island and bar stools', pt: 'Cozinha em open space com ilha e bancos de bar' } },
    '04': { w: 1920, h: 1279, focus: '55% 50%', alt: { en: 'Kitchen island, living area and hallway to the bathroom', pt: 'Ilha da cozinha, sala e corredor para a casa de banho' } },
    '05': { w: 1920, h: 1279, focus: '60% 55%', alt: { en: 'Sliding glass door opening onto the private garden', pt: 'Porta de vidro de correr para o jardim privado' } },
    '06': { w: 1920, h: 1279, focus: '50% 60%', alt: { en: 'Jacuzzi in the private courtyard with slate wall', pt: 'Jacuzzi no pátio privado com parede de xisto' } },
    '07': { w: 1920, h: 1279, focus: '45% 50%', alt: { en: 'Bathroom with walk-in slate shower and heated towel rail', pt: 'Casa de banho com duche em xisto e toalheiro aquecido' } },
    '08': { w: 1920, h: 1280, focus: '50% 55%', alt: { en: 'Front of the house with stone-clad wall and entrance', pt: 'Fachada da casa com parede em pedra e entrada' } },
    '09': { w: 1920, h: 2560, focus: '50% 40%', alt: { en: 'Jacuzzi and lawn with stools beside the stone wall', pt: 'Jacuzzi e relvado com bancos junto à parede de pedra' } },
    '10': { w: 1920, h: 2560, focus: '50% 40%', alt: { en: 'Garden seating beside the jacuzzi', pt: 'Zona de estar no jardim junto ao jacuzzi' } },
    '11': { w: 1920, h: 2560, focus: '50% 70%', alt: { en: 'Double bed in the living area with wall-mounted TV and air conditioning', pt: 'Cama de casal na sala, com televisão na parede e ar condicionado' } },
    '12': { w: 1920, h: 2560, focus: '50% 60%', alt: { en: 'Double bed with patterned cushions in the living area', pt: 'Cama de casal com almofadas estampadas na sala' } }
  };

  /* Gallery order */
  DH.order = ['03', '02', '06', '01', '04', '05', '12', '07', '08'];

  /* Icons: 24px stroke icons, rendered by <i data-icon="name"></i> */
  DH.icons = {
    wifi: '<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10.5 10.5 0 0 1 14 0M8.5 16a5.5 5.5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',
    car: '<path d="M5 16v-5l2-5h10l2 5v5M3 16h18v3H3zM7.5 13h.01M16.5 13h.01"/>',
    ac: '<rect x="3" y="5" width="18" height="7" rx="2"/><path d="M7 15v3M12 15v4M17 15v3"/>',
    patio: '<path d="M3 21h18M5 21V9l7-5 7 5v12M10 21v-6h4v6"/>',
    leaf: '<path d="M5 19c0-8 5-13 14-14 0 9-5 14-14 14zM5 19l7-7"/>',
    crib: '<rect x="4" y="8" width="16" height="9" rx="1"/><path d="M8 8v9M12 8v9M16 8v9M6 20v-3M18 20v-3"/>',
    dryer: '<path d="M4 9a5 5 0 0 1 5-4h6a3 3 0 0 1 0 6H9a5 5 0 0 1-5-2zM9 11l-1 8h3l1-8"/>',
    fridge: '<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M6 11h12M9 7v1M9 14v2"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    soap: '<path d="M9 3h6v3H9zM8 6h8l1 4v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V10z"/>',
    bed: '<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.5"/>',
    blinds: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M4 8h16M4 12h16M4 16h16"/>',
    iron: '<path d="M3 17h17a1 1 0 0 0 1-1c0-4-3-7-7-7H9a6 6 0 0 0-6 6zM8 13h6"/>',
    hanger: '<path d="M12 8a2 2 0 1 0-2-2M12 8v2l8 6a1 1 0 0 1-.6 1.8H4.6A1 1 0 0 1 4 16l8-6"/>',
    plug: '<rect x="5" y="7" width="14" height="10" rx="1"/><path d="M9 17v3M15 17v3M9 7V4M12 7V4M15 7V4"/>',
    flame: '<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>',
    microwave: '<rect x="3" y="6" width="18" height="12" rx="2"/><rect x="6" y="9" width="9" height="6" rx="1"/><path d="M18 9h.01M18 12h.01M18 15h.01"/>',
    utensils: '<path d="M7 3v8a2 2 0 0 0 2 2v8M5 3v6M9 3v6M17 21V3c-2 1-3 4-3 8h3"/>',
    plate: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/>',
    freezer: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M12 7v6M9.5 8.5l5 3M14.5 8.5l-5 3"/>',
    oven: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M11 6.5h.01"/><rect x="7" y="12" width="10" height="5" rx="1"/>',
    wine: '<path d="M8 3h8l-1 7a3 3 0 0 1-6 0zM12 13v7M8.5 21h7"/>',
    spice: '<path d="M8 3h8v3H8zM7 6h10v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zM10 11h4M10 15h4"/>',
    door: '<path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17M4 21h16M14 12h.01"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M14 9l2 2"/>',
    tv: '<rect x="3" y="5" width="18" height="12" rx="1.5"/><path d="M9 21h6M12 17v4"/>',
    washer: '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="13" r="4"/><path d="M8 6.5h.01M11 6.5h.01"/>',
    jacuzzi: '<path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zM8 3.5c.7.9.7 1.8 0 2.7M12.5 3.5c.7.9.7 1.8 0 2.7M17 3.5c.7.9.7 1.8 0 2.7"/>',
    pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M18 14a6 6 0 0 1 3 6"/>',
    bath: '<path d="M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zM6 12V6a2 2 0 0 1 4 0M5 19l-1 2M19 19l1 2"/>',
    sofa: '<path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3zM6 18v2M18 18v2"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    arrowL: '<path d="M15 5l-7 7 7 7"/>',
    arrowR: '<path d="M9 5l7 7-7 7"/>',
    arrowUR: '<path d="M7 17L17 7M8 7h9v9"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    menu: '<path d="M4 8h16M4 16h16"/>',
    quote: '<path d="M7 17c-2 0-3.500-1.500-3.500-4 0-3.500 2.500-6 6-7M17 17c-2 0-3.500-1.500-3.500-4 0-3.500 2.500-6 6-7"/>',
    expand: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>'
  };

  /* Amenities (from the Airbnb listing). group → items */
  DH.amenityGroups = [
    { key: 'essentials', items: [
      { icon: 'wifi', en: 'Wi-Fi', pt: 'Wi-Fi' },
      { icon: 'ac', en: 'Air conditioning', pt: 'Ar condicionado' },
      { icon: 'flame', en: 'Heating', pt: 'Aquecimento' },
      { icon: 'drop', en: 'Hot water', pt: 'Água quente' },
      { icon: 'bed', en: 'Bed linen', pt: 'Roupa de cama' },
      { icon: 'blinds', en: 'Blackout blinds', pt: 'Estores blackout' },
      { icon: 'hanger', en: 'Built-in wardrobe', pt: 'Roupeiro embutido' },
      { icon: 'iron', en: 'Iron', pt: 'Ferro de passar' },
      { icon: 'dryer', en: 'Hair dryer', pt: 'Secador de cabelo' },
      { icon: 'crib', en: 'Cot available', pt: 'Berço' }
    ]},
    { key: 'kitchen', items: [
      { icon: 'fridge', en: 'Fridge', pt: 'Frigorífico' },
      { icon: 'freezer', en: 'Freezer', pt: 'Congelador' },
      { icon: 'oven', en: 'Oven', pt: 'Forno' },
      { icon: 'microwave', en: 'Microwave', pt: 'Micro-ondas' },
      { icon: 'utensils', en: 'Basic cooking utensils', pt: 'Utensílios básicos de cozinha' },
      { icon: 'plate', en: 'Dishes & cutlery', pt: 'Loiças e talheres' },
      { icon: 'wine', en: 'Wine glasses', pt: 'Copos de vinho' },
      { icon: 'spice', en: 'Cooking spices provided', pt: 'Temperos para cozinhar' }
    ]},
    { key: 'bathroom', items: [
      { icon: 'bath', en: 'Full bathroom with walk-in shower', pt: 'Casa de banho completa com duche' },
      { icon: 'soap', en: 'Shampoo, body wash & soap', pt: 'Champô, gel de banho e sabonete' },
      { icon: 'washer', en: 'Washing machine', pt: 'Máquina de lavar roupa' }
    ]},
    { key: 'outdoors', items: [
      { icon: 'leaf', en: 'Private garden', pt: 'Quintal privado' },
      { icon: 'patio', en: 'Private patio', pt: 'Pátio privado' },
      { icon: 'car', en: 'Free parking nearby', pt: 'Estacionamento gratuito' },
      { icon: 'jacuzzi', en: 'Jacuzzi', pt: 'Jacuzzi', extra: true }
    ]},
    { key: 'media', items: [
      { icon: 'tv', en: 'HDTV with cable', pt: 'HDTV com cabo' },
      { icon: 'plug', en: 'Ethernet connection', pt: 'Ligação com cabo ethernet' }
    ]},
    { key: 'access', items: [
      { icon: 'door', en: 'Private entrance', pt: 'Entrada privada' },
      { icon: 'key', en: 'Self check-in with keypad', pt: 'Check-in autónomo com teclado' }
    ]}
  ];

  /* Booking.com score (fetched 2026-10-18): 8.1 / 10 from 105 reviews */
  DH.booking = { score: '8.1', count: 105 };

  /* ---------------------------------------------------------------
     REVIEWS: real guest reviews copied word for word from Airbnb and Booking.com
     (most recent, selected 2026-10-18). `original` is the language the guest wrote in; the
     other language is a translation and is labelled as such on the card.
     To add one: copy an entry, set platform: 'airbnb' | 'booking'.
     --------------------------------------------------------------- */
  DH.reviews = [
    { platform: 'airbnb', original: 'pt', name: 'Viviana',
      date: { en: 'August 2026', pt: 'Agosto 2026' }, trip: { en: 'One-night stay', pt: 'Estadia de uma noite' },
      pt: 'Espaço simplesmente incrível! Tudo limpo, de fácil acesso com estacionamento perto, simplicidade para entrar, prático, calmo. Jacuzzi excelente, com ar condicionado, produtos de higiene, coisas básicas essenciais na cozinha, sem nenhuma reclamação a fazer. Espaço confortável e aconchegante, o colchão da cama era incrível (e o sofá também). A anfitriã estava sempre pronta a responder às questões, muito clara e simpática. Com toda a certeza vamos voltar!',
      en: 'Simply incredible space! Everything clean, easy to access with parking nearby, simple to get in, practical, quiet. Excellent jacuzzi, with air conditioning, toiletries, basic kitchen essentials, nothing to complain about. Comfortable and cosy space, the mattress was incredible (and the sofa too). The host was always ready to answer questions, very clear and friendly. We will definitely be back!' },
    { platform: 'booking', original: 'pt', name: 'Almeida', origin: 'Portugal',
      date: { en: 'July 2026', pt: 'Julho 2026' }, trip: { en: 'Solo traveller', pt: 'Viajante individual' },
      title: { pt: 'Excelente estadia!!', en: 'Excellent stay!!' },
      pt: 'Casa bonita e confortável. Estadia muito agradável. Quando chegamos estava super limpa e arrumada.',
      en: 'Beautiful, comfortable house. Very pleasant stay. When we arrived it was spotlessly clean and tidy.' },
    { platform: 'airbnb', original: 'pt', name: 'Catarina',
      date: { en: 'June 2026', pt: 'Junho 2026' }, trip: { en: 'One-night stay', pt: 'Estadia de uma noite' },
      pt: 'Gostei muito! Espaco limpo e acolhedor, a Ana Paula mostrou-se disponível para ajudar sempre que a contactei, recomendo',
      en: 'I really liked it! Clean and cosy space, Ana Paula was available to help whenever I contacted her, I recommend it.' },
    { platform: 'booking', original: 'pt', name: 'Diogo', origin: 'Portugal',
      date: { en: 'June 2026', pt: 'Junho 2026' }, trip: { en: 'Couple', pt: 'Casal' },
      title: { pt: 'Boa receção, local agradável, experiência de jacuzzi top!', en: 'Great welcome, pleasant place, top jacuzzi experience!' },
      pt: 'O colchão da cama era excelente e o facto de ser uma casa muito moderna e inteligente foi muito agradável e diferente.',
      en: 'The mattress was excellent, and the fact that it is a very modern and smart house was very pleasant and different.' },
    { platform: 'airbnb', original: 'pt', name: 'Diana',
      date: { en: 'December 2025', pt: 'Dezembro 2025' }, trip: { en: 'One-night stay', pt: 'Estadia de uma noite' },
      pt: 'Recomendo, foi uma ótima estadia. Sem dúvida vale muito a pena o jacuzzi. Uma próxima ida a Ovar, já temos um sítio ótimo onde ficar.',
      en: 'I recommend it, it was a great stay. The jacuzzi is definitely well worth it. Next time we go to Ovar, we already have a great place to stay.' },
    { platform: 'booking', original: 'pt', name: 'Sandra', origin: 'Portugal',
      date: { en: 'June 2026', pt: 'Junho 2026' }, trip: { en: 'Couple', pt: 'Casal' },
      title: { pt: 'Excecional', en: 'Exceptional' },
      pt: 'Gostei de tudo, casa muito moderna com todas as comodidades para a nossa estadia. O jacuzzi foi espetacular. D Ana muito atenciosa',
      en: 'I liked everything, a very modern house with all the amenities for our stay. The jacuzzi was spectacular. Ms. Ana was very attentive.' }
  ];

  /* ---------------------------------------------------------------
     TRANSLATIONS. Use data-i18n="key" (text) or data-i18n-html="key" (HTML).
     Variants can add/override keys with window.DH_EXTRA = { en:{}, pt:{} }.
     Tokens: {score} {count} {year} {reg}
     --------------------------------------------------------------- */
  DH.i18n = {
    en: {
      'nav.reviews': 'Reviews', 'nav.gallery': 'Gallery', 'nav.house': 'The house', 'nav.amenities': 'Amenities', 'nav.location': 'Location',
      'nav.menu': 'Menu', 'nav.close': 'Close menu', 'nav.top': 'Back to top',
      'cta.airbnb': 'Book on Airbnb', 'cta.booking': 'Book on Booking.com',
      'cta.note': 'Reservations are handled securely on Airbnb and Booking.com.',
      'hero.kicker': 'Entire home · Ovar, Portugal',
      'hero.sub': 'A modern private house with its own garden and optional jacuzzi, in the heart of Ovar.',
      'hero.scroll': 'Scroll',
      'rev.title': 'Real reviews from Booking and Airbnb',
      'rev.sub': 'Honest words from guests who have stayed at Dainty House.',
      'rev.outof': 'out of 5', 'rev.based': '{count} reviews on Airbnb', 'rev.mentions': 'Guests mention most',
      'rev.placeholder': 'Placeholder', 'rev.on': 'on',
      'rev.outof10': 'out of 10', 'rev.based.booking': '{bcount} reviews on Booking.com', 'rev.translated': 'Translated from Portuguese', 'rev.cats': 'Airbnb ratings',
      'rev.platform.airbnb': 'Airbnb', 'rev.platform.booking': 'Booking.com',
      'rev.cat.cleanliness': 'Cleanliness', 'rev.cat.accuracy': 'Accuracy', 'rev.cat.checkin': 'Check-in',
      'rev.cat.communication': 'Communication', 'rev.cat.location': 'Location', 'rev.cat.value': 'Value',
      'rev.m.hospitality': 'Hospitality', 'rev.m.jacuzzi': 'Jacuzzi', 'rev.m.cleanliness': 'Cleanliness', 'rev.m.parking': 'Parking',
      'gal.title': 'Step inside', 'gal.sub': 'Swipe, drag or use the arrows. Tap a photo to see it full screen.',
      'gal.prev': 'Previous photo', 'gal.next': 'Next photo', 'gal.open': 'View photo full screen', 'gal.close': 'Close', 'gal.label': 'Photo gallery',
      'house.title': 'The house',
      'house.p1': 'Dainty House is a small single-storey house in the heart of Ovar, surrounded by some of the town’s historic gardens and stretching between the seaside and the Ria. Ovar’s Praça da República is roughly 4.6 km from the coast and, on the lagoon side, 2 km from Cais da Ribeira and 2.65 km from Cais do Carregal.',
      'house.p2': 'The closeness of the sea and the Ria de Aveiro offers guests beautiful views, worthy of a photo story to remember.',
      'house.p3': 'Ovar is a city renowned for its Carnival, prepared with care for months by the town’s revellers. Architecturally marvellous, it is known as the “azulejo museum city”, where the Town Hall and residents have restored the protected tiled façades, honouring the region’s tile heritage.',
      'house.p4': 'A city to visit. Sea, Ria, history…',
      'house.access': 'Guests have exclusive use of the entire house.',
      'house.rate': 'The listed rate covers the house only, an open-plan T0 with a full bathroom, free parking in the surrounding area and free Wi-Fi, in the very centre of Ovar, 4.5 km from Furadouro beach and 2.5 km from the Ria de Aveiro.',
      'fact.guests': '2 guests', 'fact.bedroom': 'Open-plan studio', 'fact.bed': 'Double bed in the living area', 'fact.bath': '1 bathroom', 'fact.sofa': 'Sofa next to the bed', 'fact.access': 'Entire home, private',
      'house.layout': 'There is no separate bedroom: the house is an open-plan studio, and the double bed is in the living room, right next to the sofa.',
      'am.title': 'What the house offers', 'am.sub': 'Everything you need for a comfortable stay.', 'am.extra': 'Optional extra',
      'am.g.essentials': 'Essentials', 'am.g.kitchen': 'Kitchen & dining', 'am.g.bathroom': 'Bathroom & laundry',
      'am.g.outdoors': 'Outdoors & parking', 'am.g.media': 'Entertainment & work', 'am.g.access': 'Access',
      'spa.title': 'Jacuzzi & SPA', 'spa.kicker': 'Optional extra',
      'spa.text': 'The SPA / jacuzzi is an optional extra, not included in the base price. Request it at least 5 hours in advance. It is available from 15:00 to 23:00 (unless otherwise agreed; please confirm beforehand).',
      'spa.note': 'Pricing differs between stay only, stay & SPA, and SPA only.',
      'spa.price': '€35 per day', 'spa.advance': 'Request 5 hours ahead', 'spa.hours': 'Available 15:00–23:00',
      'loc.title': 'In the heart of Ovar', 'loc.sub': 'Between the Atlantic and the Ria de Aveiro.',
      'loc.coast': 'Atlantic coast', 'loc.coast.d': '≈ 4.6 km from Praça da República',
      'loc.furadouro': 'Furadouro beach', 'loc.furadouro.d': '4.5 km from the house',
      'loc.ria': 'Ria de Aveiro', 'loc.ria.d': '2.5 km from the house',
      'loc.ribeira': 'Cais da Ribeira', 'loc.ribeira.d': '2 km on the lagoon',
      'loc.carregal': 'Cais do Carregal', 'loc.carregal.d': '2.65 km on the lagoon',
      'loc.note': 'Rua Grupo Académico Vareiro, Ovar', 'loc.open': 'Open in Google Maps',
      'end.title': 'Ready to stay at Dainty House?', 'end.sub': 'Check dates and book directly on your preferred platform.',
      'foot.reg': 'Local Accommodation registry (AL): {reg}', 'foot.rights': '© {year} Dainty House · Ovar, Portugal',
      'foot.note': 'Photos, ratings and descriptions from the Airbnb and Booking.com listings.',
      'lang.label': 'Language'
    },
    pt: {
      'nav.reviews': 'Opiniões', 'nav.gallery': 'Galeria', 'nav.house': 'A casa', 'nav.amenities': 'Comodidades', 'nav.location': 'Localização',
      'nav.menu': 'Menu', 'nav.close': 'Fechar menu', 'nav.top': 'Voltar ao topo',
      'cta.airbnb': 'Reservar no Airbnb', 'cta.booking': 'Reservar na Booking.com',
      'cta.note': 'As reservas são feitas em segurança no Airbnb e na Booking.com.',
      'hero.kicker': 'Casa inteira · Ovar, Portugal',
      'hero.sub': 'Uma casa moderna e privada, com jardim próprio e jacuzzi opcional, no coração de Ovar.',
      'hero.scroll': 'Deslizar',
      'rev.title': 'Opiniões reais do Booking e do Airbnb',
      'rev.sub': 'Palavras sinceras de hóspedes que ficaram na Dainty House.',
      'rev.outof': 'em 5', 'rev.based': '{count} avaliações no Airbnb', 'rev.mentions': 'O que os hóspedes mais referem',
      'rev.placeholder': 'Exemplo', 'rev.on': 'no',
      'rev.outof10': 'em 10', 'rev.based.booking': '{bcount} avaliações na Booking.com', 'rev.translated': 'Traduzido do português', 'rev.cats': 'Avaliações Airbnb',
      'rev.platform.airbnb': 'Airbnb', 'rev.platform.booking': 'Booking.com',
      'rev.cat.cleanliness': 'Limpeza', 'rev.cat.accuracy': 'Veracidade', 'rev.cat.checkin': 'Check-in',
      'rev.cat.communication': 'Comunicação', 'rev.cat.location': 'Localização', 'rev.cat.value': 'Preço-qualidade',
      'rev.m.hospitality': 'Hospitalidade', 'rev.m.jacuzzi': 'Jacuzzi', 'rev.m.cleanliness': 'Limpeza', 'rev.m.parking': 'Estacionamento',
      'gal.title': 'Entre', 'gal.sub': 'Deslize, arraste ou use as setas. Toque numa foto para a ver em ecrã inteiro.',
      'gal.prev': 'Foto anterior', 'gal.next': 'Foto seguinte', 'gal.open': 'Ver foto em ecrã inteiro', 'gal.close': 'Fechar', 'gal.label': 'Galeria de fotos',
      'house.title': 'A casa',
      'house.p1': 'A Dainty House é uma pequena moradia no coração de Ovar, rodeada por alguns jardins com história e espraiando-se entre a beira-mar e a Ria. A Praça da República de Ovar dista mais ou menos 4.600 metros da costa marítima e, em relação àquela laguna, 2 km do cais da Ribeira e 2.650 metros do cais do Carregal.',
      'house.p2': 'A proximidade do mar e da Ria de Aveiro oferece aos seus visitantes lindas vistas dignas de uma reportagem fotográfica para memória futura.',
      'house.p3': 'Cidade reconhecida pelo seu forte Carnaval, preparado cuidadosamente com vários meses de antecedência pelos foliões da terra. Arquitetonicamente maravilhosa, é considerada a cidade museu do azulejo, onde a Câmara Municipal em parceria com os residentes tem restaurado as fachadas de azulejo protegidas, dignificando a carga histórica do azulejo na região.',
      'house.p4': 'Uma cidade a visitar. Mar, Ria, História…',
      'house.access': 'Os hóspedes têm acesso exclusivo a toda a área da casa.',
      'house.rate': 'O valor anunciado é apenas para o uso da moradia unifamiliar T0 “open space”, com casa de banho completa, estacionamento gratuito na área circundante e Wi-Fi gratuito, em pleno centro de Ovar, a 4.5 km da praia do Furadouro e a 2.5 km da Ria de Aveiro.',
      'fact.guests': '2 hóspedes', 'fact.bedroom': 'Estúdio open space', 'fact.bed': 'Cama de casal na sala', 'fact.bath': '1 casa de banho', 'fact.sofa': 'Sofá junto à cama', 'fact.access': 'Casa inteira, privada',
      'house.layout': 'Não existe um quarto separado: a casa é um estúdio em open space e a cama de casal fica na sala, mesmo ao lado do sofá.',
      'am.title': 'O que a casa oferece', 'am.sub': 'Tudo o que precisa para uma estadia confortável.', 'am.extra': 'Extra opcional',
      'am.g.essentials': 'Essenciais', 'am.g.kitchen': 'Cozinha e refeições', 'am.g.bathroom': 'Casa de banho e lavandaria',
      'am.g.outdoors': 'Exterior e estacionamento', 'am.g.media': 'Entretenimento e trabalho', 'am.g.access': 'Acesso',
      'spa.title': 'Jacuzzi e SPA', 'spa.kicker': 'Extra opcional',
      'spa.text': 'O SPA / jacuzzi é um extra opcional, não incluído no preço base. Deve solicitar o uso com pelo menos 5 horas de antecedência. Fica disponível das 15h às 23h (salvo indicação em contrário; confirme previamente).',
      'spa.note': 'Existe diferença de valor entre alojamento, alojamento e SPA, e apenas SPA.',
      'spa.price': '35€ por dia', 'spa.advance': 'Pedir com 5 horas de antecedência', 'spa.hours': 'Disponível das 15h às 23h',
      'loc.title': 'No coração de Ovar', 'loc.sub': 'Entre o Atlântico e a Ria de Aveiro.',
      'loc.coast': 'Costa atlântica', 'loc.coast.d': '≈ 4,6 km da Praça da República',
      'loc.furadouro': 'Praia do Furadouro', 'loc.furadouro.d': 'a 4,5 km da casa',
      'loc.ria': 'Ria de Aveiro', 'loc.ria.d': 'a 2,5 km da casa',
      'loc.ribeira': 'Cais da Ribeira', 'loc.ribeira.d': 'a 2 km, na laguna',
      'loc.carregal': 'Cais do Carregal', 'loc.carregal.d': 'a 2,65 km, na laguna',
      'loc.note': 'Rua Grupo Académico Vareiro, Ovar', 'loc.open': 'Abrir no Google Maps',
      'end.title': 'Pronto para ficar na Dainty House?', 'end.sub': 'Veja as datas e reserve diretamente na plataforma da sua preferência.',
      'foot.reg': 'Registo de Alojamento Local (AL): {reg}', 'foot.rights': '© {year} Dainty House · Ovar, Portugal',
      'foot.note': 'Fotos, avaliações e descrições dos anúncios no Airbnb e na Booking.com.',
      'lang.label': 'Idioma'
    }
  };
})();
