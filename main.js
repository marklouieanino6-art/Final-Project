// ===== SHARED DATA =====
const destinations = [
  { id:1, name:"Capalonga Beach", city:"Capalonga", category:"Beach", image:"Images/capalonga.jpg",
    desc:"A serene white-sand beach famous for its calm waters and stunning sunsets, ideal for swimming and relaxation.",
    fullDesc:"Capalonga Beach is one of CamNorte's hidden gems — a wide stretch of white sand lapped by calm, crystal-clear waters. Ideal for swimming, beachcombing, and watching spectacular sunsets over the Maqueda Channel.",
    fee:"Free", hours:"6:00 AM – 6:00 PM",
    best:"November to May", activities:["Swimming","Sunbathing","Photography","Beach volleyball"],
    tip:"Visit on weekdays to enjoy the beach almost to yourself." },
  { id:2, name:"Calaguas Islands", city:"Calaguas", category:"Island", image:"Images/calaguas.webp",
    desc:"A group of pristine islands with powdery white sand and turquoise waters, often called CamNorte's paradise.",
    fullDesc:"Calaguas Islands is CamNorte's crown jewel — a stunning archipelago of islands featuring powdery white sand, azure-turquoise waters, and no commercial establishments, preserving its raw, untouched beauty. The main island, Tinaga, is particularly breathtaking.",
    fee:"₱50 environmental fee", hours:"Open 24 hrs (camping allowed)",
    best:"March to May", activities:["Island hopping","Snorkeling","Camping","Cliff diving","Photography"],
    tip:"Book a boat from Paracale or Vinzons. Bring all supplies including food and water as there are no stores on the island." },
  { id:3, name:"Bagasbas Beach", city:"Daet", category:"Beach", image:"Images/bagasbas.jpg",
    desc:"A popular surfing destination fronting the Pacific Ocean, known for consistent waves and vibrant surf culture.",
    fullDesc:"Bagasbas Beach is the surfing capital of Camarines Norte. Facing the open Pacific, it receives consistent waves year-round that attract surfers from across the Philippines. The long, wide beach is also perfect for jogging and watching local fishermen.",
    fee:"Free", hours:"Open 24 hours",
    best:"September to January (surf season)", activities:["Surfing","Bodyboarding","Swimming","Beach walks","Surf lessons"],
    tip:"Surf lessons are available from local instructors for as low as ₱200/hour. Best waves in the morning." },
  { id:4, name:"Mercedes Wetlands", city:"Mercedes", category:"Adventure", image:"Images/mercedes.jpg",
    desc:"A protected wetland ecosystem home to diverse bird species and mangrove forests, perfect for eco-tourism.",
    fullDesc:"Mercedes Wetlands is a biodiversity hotspot and one of the most significant mangrove forest areas in Bicol. The area supports hundreds of migratory and endemic bird species, making it a top destination for birdwatching and eco-tourism. Boat rides through the mangrove channels are a highlight.",
    fee:"₱100 guide fee", hours:"7:00 AM – 5:00 PM",
    best:"October to March (migratory bird season)", activities:["Birdwatching","Boat tours","Photography","Mangrove kayaking"],
    tip:"Hire a local guide for the best birdwatching spots. Bring binoculars!" },
  { id:5, name:"Gumaus Waterfalls", city:"Paracale", category:"Waterfall", image:"Images/gumaus.jpg",
    desc:"A magnificent multi-tiered waterfall nestled in the mountains of Labo, offering a refreshing natural retreat.",
    fullDesc:"Gumaus Waterfalls is Camarines Norte's most spectacular cascade — a multi-tiered falls surrounded by lush tropical forest. The trek to the falls winds through scenic mountain trails, passing through indigenous community lands where visitors can learn about local culture.",
    fee:"₱30", hours:"7:00 AM – 5:00 PM",
    best:"Year-round; best after rainy season", activities:["Trekking","Swimming","Photography","Nature walks"],
    tip:"Wear proper trekking shoes and bring a change of clothes. The trail takes about 1.5 hours." },
  { id:6, name:"Paracale Gold Museum", city:"Paracale", category:"Historical Site", image:"Images/paracale.jpg",
    desc:"A heritage museum showcasing the rich gold mining history of Paracale, one of the oldest gold towns in the Philippines.",
    fullDesc:"The Paracale Gold Museum preserves artifacts and documents the centuries-old gold mining tradition of Paracale, which dates back to pre-colonial times. The museum houses gold jewelry, mining tools, and historical photographs tracing the town's evolution as the 'Gold Town' of the Philippines.",
    fee:"₱50", hours:"Mon–Sat: 8:00 AM – 5:00 PM",
    best:"Year-round", activities:["Museum tour","Gold panning demo","Historical photography","Cultural immersion"],
    tip:"Ask for a guide who can narrate the fascinating history of gold mining in the region." },
  { id:7, name:"Mt. Labo", city:"Labo", category:"Mountain", image:"Images/labo.jpg",
    desc:"The highest peak in Camarines Norte offering challenging trails and panoramic views of the Pacific coast.",
    fullDesc:"Mount Labo stands as the highest point in Camarines Norte, rising to approximately 1,544 meters above sea level. Its trails challenge experienced trekkers with diverse flora, cloud forest sections, and stunning summit views overlooking Camarines Norte and the Pacific Ocean.",
    fee:"₱150 guide fee required", hours:"Start by 5:00 AM recommended",
    best:"November to February", activities:["Mountain trekking","Camping","Bird watching","Photography"],
    tip:"Register with the local DENR office before climbing. A guide is mandatory for safety." },
  { id:8, name:"Daet Town Proper", city:"Daet", category:"Food Destination", image:"Images/daet.jpg",
    desc:"The provincial capital and food hub of CamNorte, known for its fresh seafood markets and local eateries.",
    fullDesc:"Daet, the capital of Camarines Norte, is the ultimate food destination in the province. The public market overflows with fresh Pacific seafood, local produce, and street food. The plaza area is lined with restaurants serving authentic Bicolano dishes and regional specialties.",
    fee:"Free", hours:"All day",
    best:"Year-round", activities:["Food tour","Market visit","Restaurant hopping","Street food crawl"],
    tip:"Visit the public market early morning (5–8 AM) for the freshest catch and the widest selection." },
];

const festivals = [
  { name:"Kalilayan Festival", location:"Daet", month:"January", image:"Images/kalilayan.jpeg",
    desc:"The grandest festival in Camarines Norte, held every January in Daet. 'Kalilayan' means happiness in Bicolano. The week-long celebration features street dancing competitions, colorful costumes, drum and bugle corps, cultural shows, trade fairs, and the crowning of festival queens. The festival showcases the artistic talents and cultural heritage of the province." },
  { name:"Cañao Festival", location:"Labo (Agta Communities)", month:"March", image:"Images/canao.jpg",
    desc:"A traditional thanksgiving ritual celebrated by the Agta (Dumagat) indigenous peoples of Labo. The Cañao involves ritual offerings, indigenous music played on traditional instruments, communal feasting, and traditional dances performed in elaborate native costumes. Visitors are welcomed to witness and participate in this authentic cultural experience." },
  { name:"Paracale Gold Festival", location:"Paracale", month:"April", image:"Images/gold.jpg",
    desc:"An annual celebration honoring the rich gold mining heritage of Paracale. The festival features gold-themed street parades, gold panning competitions, cultural performances, trade fairs showcasing gold jewelry and crafts, and historical reenactments of early gold mining traditions dating back to pre-colonial times." },
  { name:"Bantayog Festival", location:"Jose Panganiban", month:"June", image:"Images/bantayog.webp",
    desc:"Celebrated in Jose Panganiban (formerly Mambulao), this festival honors the town's fishing and mining heritage. The highlight is the fluvial procession along the river, accompanied by traditional boat decorations, music, and street dances. The festival also features agricultural exhibits showcasing the town's produce." },
];

const foods = [
  { name:"Laing", image:"Images/laing.jpg", desc:"The quintessential Bicolano dish — taro leaves slow-cooked in rich coconut milk with dried fish, shrimp paste, and red chilies. Creamy, spicy, and deeply flavorful.", where:"Most local restaurants in Daet and Paracale" },
  { name:"Pinangat", image:"Images/pinangat.jpg", desc:"Bite-sized taro leaf parcels stuffed with grated coconut, shrimp, and spicy chilies, then simmered in coconut milk until tender. A Bicolano comfort food staple.", where:"Home-style eateries and carenderias across CamNorte" },
  { name:"Longganisang Daet", image:"Images/longa.jpg", desc:"A local fresh sausage from Daet made with pork and a distinctive blend of native spices and calamansi. Slightly tangy with an irresistible aroma when grilled.", where:"Daet Public Market and local butchers" },
  { name:"Tinawon Fish Sinigang", image:"Images/tinawon.jpg", desc:"A local version of the classic Filipino sour soup using freshly caught Pacific fish, tamarind broth, and native vegetables. The fresh ocean fish gives it an exceptional depth of flavor.", where:"Seafood restaurants near Bagasbas Beach and Daet port area" },
  { name:"Bicol Express", image:"Images/bicol.webp", desc:"A fiery pork dish cooked with coconut milk, shrimp paste, and an abundance of green sili (chili peppers). CamNorte restaurants add local variations with fresh seafood.", where:"Restaurants throughout the province" },
  { name:"Pili Candy", image:"Images/pili.jpg", desc:"Sweet, buttery candy made from the native pili nut — a specialty of Bicol. The pili is coated in caramelized sugar and comes in a variety of flavors. Perfect as a pasalubong.", where:"Pasalubong shops and stalls in Daet market" },
  { name:"Puto Maya", image:"Images/puto.webp", desc:"Sticky purple rice cooked in coconut milk, shaped into small portions, and paired with fresh mangoes and salted egg. A beloved Bicolano breakfast and merienda item.", where:"Morning markets and kakanin stalls in all municipalities" },
  { name:"Sinukmani", image:"Images/sinukmani.jpg", desc:"A sweet glutinous rice dessert cooked in brown sugar and coconut milk until sticky and glossy, then topped with toasted coconut flakes. A traditional Bicolano treat for celebrations.", where:"Local bakeries, kakanin shops, and festival food stalls" },
];

const galleryItems = [
  {image:"Images/gal1.jpg",caption:"Rufino Pabico Ancestral House, a historic landmark located in Daet, Camarines Norte, Philippines"},
  {image:"Images/gal2.jpg",caption:"Camina Balay na Bato"},
  {image:"Images/gal3.webp",caption:"St. Anne Parish Church"},
  {image:"Images/gal4.jpg",caption:"Bulabog-Putian Natural Park"},
  {image:"Images/gal5.jpg",caption:"José Rizal Monument"},
  {image:"Images/gal6.jpeg",caption:"Kalilayan Festival"},
  {image:"Images/gal7.jpg",caption:"National Museum of the Philippines"},
  {image:"Images/gal8.jpg",caption:"Colors of culture"},
  {image:"Images/gal9.jpg",caption:"Cañao – Indigenous traditions"},
  {image:"Images/gal10.jpg",caption:"National Historical Landmark"},
  {image:"Images/gal11.webp",caption:"Parroquia de San Pedro Apostol"},
  {image:"Images/gal12.jpg",caption:"Kalamay, Suman, and Puto"},
  {image:"Images/gal13.jpg",caption:"Laing and Pinangat"},
  {image:"Images/gal14.jpg",caption:"Pili Candy"},
  {image:"Images/gal15.jpg",caption:"Ginataang Santol"},
  {image:"Images/gal16.jpg",caption:"Malatap Falls"},
  {image:"Images/gal17.jpg",caption:"Maligaya Falls"},
  {image:"Images/gal18.webp",caption:"Mampurog River"},  
  {image:"Images/gal19.jpg",caption:"Camarines Norte Provincial Capitol in Daet, Philippines."},
  {image:"Images/gal20.jpg",caption:"Mahabang Buhangin Beach on Tinaga Island"},
  {image:"Images/gal21.jpg",caption:"Sabang Beach in Capalonga, Camarines Norte"},
  {image:"Images/gal22.jpg",caption:"Parroquia de San Pedro Apostol located in Vinzons, Camarines Norte."},
  {image:"Images/gal23.jpg",caption:"Turayog View Deck in Jose Panganiban, Camarines Norte, Philippines."},
  {image:"Images/gal24.jpg",caption:"Bagasbas Beach in Daet, Camarines Norte, Philippines, preparing for a surf lesson."},
  {image:"Images/gal25.jpg",caption:"Bagasbas Beach in Daet, Camarines Norte"},
  {image:"Images/gal26.jpg",caption:"Don Ramon Pajarillo Ancestral House in Vinzons, Camarines Norte."},
  {image:"Images/gal27.jpg",caption:"Hi-Way 411 Resort & Traveller's Inn located in Libmanan, Camarines Sur, Philippines."},
  {image:"Images/gal28.webp",caption:"Binuang Falls - Located at Barangay Daguit in Labo Camarines Norte"},
  {image:"Images/gal29.jpg",caption:"Matukad Island in the Caramoan group of islands, Camarines Sur, Philippines."},
  {image:"Images/gal30.jpg",caption:"Bicol Express/Laing"},
];

const tips = [
  { num:"01", icon:"fas fa-calendar-alt", title:"Best Time to Visit",
    text:"November to May is the dry season — perfect for beach trips to Calaguas and Bagasbas. For surfing at Bagasbas, September to January offers the best waves. Avoid typhoon season (June–October) for island visits." },
  { num:"02", icon:"fas fa-bus", title:"Transportation Options",
    text:"From Manila: bus to Daet (8–9 hrs via Maharlika Highway) or fly to Naga and take a 2-hour bus. Within the province, rent a tricycle, habal-habal, or multicab. For Calaguas, take a boat from Paracale or Vinzons (2.5–3 hrs)." },
  { num:"03", icon:"fas fa-sun", title:"Pack Smart",
    text:"Bring high-SPF sunscreen, insect repellent, reef-safe products (for Calaguas), a reusable water bottle, a light rain jacket, and cash (most beaches have no ATMs). Bring extra plastic bags to keep electronics dry on boat trips." },
  { num:"04", icon:"fas fa-shield-alt", title:"Safety Reminders",
    text:"Always check weather and sea conditions before island trips. Register with local coast guard for inter-island travel. Swim only in designated areas. Hire licensed guides for mountain treks. Keep emergency numbers saved." },
  { num:"05", icon:"fas fa-leaf", title:"Eco-Friendly Travel",
    text:"Calaguas and the wetlands are protected areas. Never leave trash behind — practice 'leave no trace.' Avoid touching or taking coral, shells, or wildlife. Support local eco-guides and community-based tourism operators." },
  { num:"06", icon:"fas fa-utensils", title:"Food & Budget Tips",
    text:"Budget around ₱500–800/day for meals eating at local carenderias. Try the public market for the cheapest and freshest food. Accommodations in Daet range from ₱500 (budget) to ₱3,000+ (hotels). Calaguas requires camping or resort booking in advance." },
];

// ===== GALLERY GRADIENTS =====
const gradients = [
  'linear-gradient(135deg,#1a6b4a,#2d9b6b)',
  'linear-gradient(135deg,#0a2214,#1a6b4a)',
  'linear-gradient(135deg,#c9a84c,#8b6914)',
  'linear-gradient(135deg,#1a3a6b,#2d6b9b)',
  'linear-gradient(135deg,#6b1a4a,#9b2d7a)',
  'linear-gradient(135deg,#4a6b1a,#7a9b2d)',
];

// ===== NAVBAR SCROLL =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (navbar.classList.contains('inner-page')) return; // skip for inner pages
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ===== FOOTER =====
function renderFooter(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
  <footer>
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-4">
          <div class="footer-brand mb-16">Cam<span>Norte</span> Tourism</div>
          <p class="mt-3 mb-4">Promoting the natural wonders, rich culture, and warm hospitality of Camarines Norte — the Gold Province of Bicol.</p>
          <div class="footer-social">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
        <div class="col-lg-2 col-6">
          <h5>Quick Links</h5>
          <ul style="list-style:none;padding:0;margin:0;">
            <li class="mb-2"><a href="index.html">Home</a></li>
            <li class="mb-2"><a href="about.html">About</a></li>
            <li class="mb-2"><a href="destinations.html">Destinations</a></li>
            <li class="mb-2"><a href="festivals.html">Festivals</a></li>
            <li class="mb-2"><a href="food.html">Food</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-6">
          <h5>Explore</h5>
          <ul style="list-style:none;padding:0;margin:0;">
            <li class="mb-2"><a href="gallery.html">Gallery</a></li>
            <li class="mb-2"><a href="tips.html">Travel Tips</a></li>
            <li class="mb-2"><a href="inquiry.html">Inquire</a></li>
          </ul>
        </div>
        <div class="col-lg-4">
          <h5>Contact Info</h5>
          <p><i class="fas fa-map-marker-alt me-2" style="color:var(--gold-light)"></i> Daet, Camarines Norte, Bicol Region V, Philippines</p>
          <p><i class="fas fa-phone me-2" style="color:var(--gold-light)"></i> (054) 440-XXXX</p>
          <p><i class="fas fa-envelope me-2" style="color:var(--gold-light)"></i> tourism@camarnorte.gov.ph</p>
          <p><i class="fas fa-clock me-2" style="color:var(--gold-light)"></i> Mon–Fri: 8:00 AM – 5:00 PM</p>
        </div>
      </div>
      <div class="footer-bottom text-center">
        <p>© 2025 Camarines Norte Provincial Tourism Office. All rights reserved.</p>
      </div>
    </div>
  </footer>`;
}

// ===== RENDER DESTINATIONS =====
let currentFilter = 'All';

function renderDestinations(list) {
  const grid = document.getElementById('destGrid');
  const noR = document.getElementById('no-results');
  if (!grid) return;
  grid.innerHTML = '';
  if (!list.length) { noR.style.display = 'block'; return; }
  noR.style.display = 'none';
  list.forEach(d => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="dest-card">
        <div class="dest-card-img">
          <img src="${d.image}" alt="${d.name}" class="dest-image">
          <span class="dest-badge">${d.category}</span>
        </div>
        <div class="dest-card-body">
          <div class="dest-card-title">${d.name}</div>
          <div class="dest-card-loc"><i class="fas fa-map-marker-alt"></i>${d.city}, Camarines Norte</div>
          <div class="dest-card-desc">${d.desc}</div>
          <div class="dest-meta">
            <span><i class="fas fa-ticket-alt"></i>${d.fee}</span>
            <span><i class="fas fa-clock"></i>${d.hours.split(' – ')[0]}</span>
          </div>
          <button class="btn-view" onclick="openModal(${d.id})">View Details <i class="fas fa-arrow-right ms-1"></i></button>
        </div>
      </div>`;
    grid.appendChild(col);
  });
}

function filterDestinations() {
  const searchInput = document.getElementById('searchInput');
  const q = searchInput ? searchInput.value.toLowerCase() : '';
  let list = destinations;
  if (currentFilter !== 'All') list = list.filter(d => d.category === currentFilter);
  if (q) list = list.filter(d =>
    d.name.toLowerCase().includes(q) ||
    d.city.toLowerCase().includes(q) ||
    d.category.toLowerCase().includes(q)
  );
  renderDestinations(list);
}

function setFilter(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterDestinations();
}

// ===== MODAL =====
function openModal(id) {
  const d = destinations.find(x => x.id === id);
  if (!d) return;
  document.getElementById('modalTitle').textContent = d.name;
  document.getElementById('modalIcon').textContent = d.emoji;
  document.getElementById('m-loc').textContent = d.city + ', Camarines Norte';
  document.getElementById('m-cat').textContent = d.category;
  document.getElementById('m-fee').textContent = d.fee;
  document.getElementById('m-hours').textContent = d.hours;
  document.getElementById('m-best').textContent = d.best;
  document.getElementById('m-desc').textContent = d.fullDesc;
  document.getElementById('m-tip').textContent = d.tip;
  const actDiv = document.getElementById('m-activities');
  actDiv.innerHTML = d.activities.map(a => `<span class="activity-tag">${a}</span>`).join('');
  new bootstrap.Modal(document.getElementById('destModal')).show();
}

// ===== RENDER FESTIVALS =====
function renderFestivals() {
  const grid = document.getElementById('festGrid');
  if (!grid) return;
  festivals.forEach(f => {
    const col = document.createElement('div');
    col.className = 'col-md-6';
    col.innerHTML = `
      <div class="fest-card">
        <div class="fest-icon">
        <img src="${f.image}" alt="${f.name}">
        </div>
        <div class="fest-card-body">
          <h4>${f.name}</h4>
          <div class="fest-meta">
            <span><i class="fas fa-map-marker-alt"></i>${f.location}</span>
            <span><i class="fas fa-calendar-alt"></i>${f.month}</span>
          </div>
          <p>${f.desc}</p>
        </div>
      </div>`;
    grid.appendChild(col);
  });
}

// ===== RENDER FOOD =====
function renderFood() {
  const grid = document.getElementById('foodGrid');
  if (!grid) return;
  foods.forEach(f => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-3';
    col.innerHTML = `
      <div class="food-card">
        <div class="food-emoji-box">
        <img src="${f.image}" alt="${f.name}"></div>
        <div class="food-card-body">
          <h5>${f.name}</h5>
          <p>${f.desc}</p>
          <div class="food-where"><i class="fas fa-store"></i>${f.where}</div>
        </div>
      </div>`;
    grid.appendChild(col);
  });
}

// ===== GALLERY & LIGHTBOX =====
let lbIndex = 0;

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  galleryItems.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.onclick = () => openLightbox(i);
    div.innerHTML = `
      <div class="gallery-thumb" style="background:${gradients[i % gradients.length]}">
        <img src="${item.image}">
        <div class="gallery-overlay"><i class="fas fa-expand-alt"></i></div>
      </div>`;
    grid.appendChild(div);
  });
}


function openLightbox(i) {
  lbIndex = i;
  updateLightbox();
  document.getElementById('lightbox').classList.add('active');
}
function closeLightbox() { document.getElementById('lightbox').classList.remove('active'); }
function lbNav(dir) {
  lbIndex = (lbIndex + dir + galleryItems.length) % galleryItems.length;
  updateLightbox();
}
function updateLightbox() {
  const item = galleryItems[lbIndex];
  document.getElementById('lb-img').innerHTML = `<img src="${item.image}" style="width:100%;height:100%;object-fit:cover;">`;
  document.getElementById('lb-img').style.background = gradients[lbIndex % gradients.length];
  document.getElementById('lb-caption').innerHTML = `<i class="fas fa-image me-2" style="color:var(--gold-light)"></i>${item.caption} <span style="color:rgba(255,255,255,0.4);margin-left:8px;">${lbIndex+1} / ${galleryItems.length}</span>`;
}

function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.addEventListener('click', function(e) { if (e.target === this) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!document.getElementById('lightbox').classList.contains('active')) return;
    if (e.key === 'ArrowLeft') lbNav(-1);
    if (e.key === 'ArrowRight') lbNav(1);
    if (e.key === 'Escape') closeLightbox();
  });
}

// ===== TIPS =====
function renderTips() {
  const grid = document.getElementById('tipsGrid');
  if (!grid) return;
  tips.forEach(t => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="tip-card">
        <div class="tip-num">${t.num}</div>
        <div class="tip-icon"><i class="${t.icon}"></i></div>
        <h5>${t.title}</h5>
        <p>${t.text}</p>
      </div>`;
    grid.appendChild(col);
  });
}

// ===== POPULATE INQUIRY SELECT =====
function populateDestSelect() {
  const sel = document.getElementById('f-dest');
  if (!sel) return;
  destinations.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d.name;
    opt.textContent = d.name;
    sel.appendChild(opt);
  });
}

// ===== FORM VALIDATION =====
function initForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  const dateField = document.getElementById('f-date');
  if (dateField) dateField.min = new Date().toISOString().split('T')[0];

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('f-name');
    const email = document.getElementById('f-email');
    const phone = document.getElementById('f-phone');
    const dest = document.getElementById('f-dest');
    const date = document.getElementById('f-date');
    const visitors = document.getElementById('f-visitors');
    const message = document.getElementById('f-message');

    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRx = /^[0-9]+$/;

    function setValidity(el, ok) {
      el.classList.toggle('is-invalid', !ok);
      if (ok) el.classList.remove('is-invalid');
    }

    setValidity(name, name.value.trim() !== ''); if (!name.value.trim()) valid = false;
    setValidity(email, emailRx.test(email.value.trim())); if (!emailRx.test(email.value.trim())) valid = false;
    setValidity(phone, phoneRx.test(phone.value.trim()) && phone.value.trim() !== ''); if (!phoneRx.test(phone.value.trim()) || !phone.value.trim()) valid = false;
    setValidity(dest, dest.value !== ''); if (!dest.value) valid = false;
    setValidity(date, date.value !== ''); if (!date.value) valid = false;
    setValidity(visitors, parseInt(visitors.value) >= 1 && visitors.value !== ''); if (parseInt(visitors.value) < 1 || !visitors.value) valid = false;
    setValidity(message, message.value.trim() !== ''); if (!message.value.trim()) valid = false;

    if (valid) {
      this.reset();
      document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
      const toast = document.getElementById('toastMsg');
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
      }
    }
  });
}

// ===== HIGHLIGHT ACTIVE NAV =====
function highlightActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page) link.classList.add('active-link');
  });
}
