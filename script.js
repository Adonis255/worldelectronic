/**
 * WORLD ELECTRONICS KAPSABET — MAIN SCRIPT
 * Vanilla JavaScript E-Commerce Storefront
 * Mobile-First, Accessible, Client-Side Cart & Direct WhatsApp Handoff
 */

// =============================================================================
// 1. BUSINESS CONFIGURATION (EASY TO UPDATE)
// =============================================================================
const STORE_CONFIG = {
  name: "WORLD ELECTRONICS",
  tagline: "Your World of Electronics, All in One Place",
  town: "Kapsabet",
  county: "Nandi County",
  country: "Kenya",
  fullLocation: "Kapsabet, Nandi County, Kenya",
  phoneDisplay: "+254 715 071 820",
  whatsappNumber: "254715071820",
  openingHours: "Every day, 8:00 AM–8:00 PM",
  currency: "KSh",
  googleMapsUrl: "https://maps.app.goo.gl/EYdBgdU8nEiJ3Uev9",
  kyteCatalogueUrl: "https://world-electronics.kyte.site/en",
  carouselIntervalMs: 2000 // 2 seconds rotation as required
};

// =============================================================================
// 2. PRODUCT CATALOGUE (AT LEAST 26 SAMPLE PRODUCTS)
// NOTE FOR STORE OWNER: Prices, stock, and descriptions are sample catalogue
// records for preview and can be adjusted below.
// =============================================================================
const PRODUCTS_CATALOGUE = [
  // --- Smartphones ---
  {
    id: "phone-01",
    name: "Samsung Galaxy A-Series 4G/5G Smartphone",
    category: "Smartphones",
    categorySlug: "smartphones",
    price: 19500,
    originalPrice: 22000,
    discountBadge: "Save 11%",
    isHotDeal: true,
    isNewArrival: false,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80",
    description: "Vibrant AMOLED display with smooth refresh rate, multi-lens camera system for clear day and night photos, and long-lasting 5,000mAh battery for all-day use.",
    specs: ["6.6-inch FHD+ Display", "50MP Triple Camera", "128GB Storage / 4GB RAM", "5000mAh Battery + Fast Charging"],
    inStock: true
  },
  {
    id: "phone-02",
    name: "Redmi Note-Series Smartphone with Fast Charging",
    category: "Smartphones",
    categorySlug: "smartphones",
    price: 24500,
    originalPrice: 27500,
    discountBadge: "Save 10%",
    isHotDeal: true,
    isNewArrival: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
    description: "Ultra-clear camera system with high-speed processor, 120Hz high-refresh rate screen, and rapid 67W turbo charging support.",
    specs: ["108MP Studio Camera", "120Hz AMOLED Screen", "256GB Storage / 8GB RAM", "67W Fast Turbo Charger Included"],
    inStock: true
  },
  {
    id: "phone-03",
    name: "Infinix Note-Series Gaming & Productivity Phone",
    category: "Smartphones",
    categorySlug: "smartphones",
    price: 18000,
    originalPrice: 20000,
    discountBadge: "Save 10%",
    isHotDeal: false,
    isNewArrival: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02560?auto=format&fit=crop&w=700&q=80",
    description: "Powerful octa-core chipset built for smooth multitasking, social media apps, video streaming, and gaming performance.",
    specs: ["6.78-inch Immersive Display", "64MP Ultra-Night Camera", "128GB Storage / 8GB RAM", "Dual Stereo Speakers"],
    inStock: true
  },
  {
    id: "phone-04",
    name: "Tecno Camon-Series Clear Photography Phone",
    category: "Smartphones",
    categorySlug: "smartphones",
    price: 21500,
    originalPrice: null,
    discountBadge: null,
    isHotDeal: false,
    isNewArrival: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=700&q=80",
    description: "Dedicated portrait camera setup engineered for crisp daylight and low-light photos, with slim modern casing and eye-care screen.",
    specs: ["64MP RGBW Sensor", "32MP Selfie Camera", "256GB Storage / 8GB RAM", "Slim Lightweight Design"],
    inStock: true
  },

  // --- Laptops & Computers ---
  {
    id: "laptop-01",
    name: "HP Core i5 15.6-inch Business & Student Laptop",
    category: "Laptops & Computers",
    categorySlug: "laptops",
    price: 46000,
    originalPrice: 51000,
    discountBadge: "Save 10%",
    isHotDeal: true,
    isNewArrival: false,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=700&q=80",
    description: "Reliable Intel Core i5 processor for office paperwork, student assignments, university study, internet browsing, and video conferencing.",
    specs: ["Intel Core i5 Processor", "8GB DDR4 RAM", "256GB High-Speed NVMe SSD", "15.6-inch HD Anti-Glare Display", "Windows 11 Ready"],
    inStock: true
  },
  {
    id: "laptop-02",
    name: "Lenovo ThinkPad Durable Business Laptop",
    category: "Laptops & Computers",
    categorySlug: "laptops",
    price: 49500,
    originalPrice: 55000,
    discountBadge: "Save 10%",
    isHotDeal: false,
    isNewArrival: false,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=700&q=80",
    description: "Military-grade durability, world-famous ergonomic keyboard, long battery endurance, and comprehensive security features.",
    specs: ["Intel Core i5 / AMD Ryzen", "16GB RAM / 512GB SSD", "Full HD IPS Screen", "Legendary Spill-Resistant Keyboard"],
    inStock: true
  },
  {
    id: "laptop-03",
    name: "Dell Business Series 14-inch Compact Laptop",
    category: "Laptops & Computers",
    categorySlug: "laptops",
    price: 42000,
    originalPrice: null,
    discountBadge: null,
    isHotDeal: false,
    isNewArrival: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",
    description: "Compact 14-inch form factor perfect for field work, travel, and mobile professionals in Nandi County.",
    specs: ["Intel Core i5", "8GB RAM / 256GB SSD", "14.0-inch LED Screen", "Lightweight 1.5kg Chassis"],
    inStock: true
  },

  // --- TVs & Entertainment ---
  {
    id: "tv-01",
    name: "Samsung 43-inch Crystal UHD 4K Smart TV",
    category: "TVs & Entertainment",
    categorySlug: "tvs",
    price: 43000,
    originalPrice: 48000,
    discountBadge: "Save 10%",
    isHotDeal: true,
    isNewArrival: false,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=80",
    description: "Crystal Processor 4K delivers vibrant lifelike color, built-in YouTube, Netflix, DSTV streaming apps, and screen mirroring from phone to TV.",
    specs: ["43-inch 4K UHD (3840x2160)", "Smart Hub with YouTube & Netflix", "3x HDMI & 2x USB Ports", "Optical Audio Out"],
    inStock: true
  },
  {
    id: "tv-02",
    name: "Hisense 32-inch Frameless Smart Android TV",
    category: "TVs & Entertainment",
    categorySlug: "tvs",
    price: 19800,
    originalPrice: 22500,
    discountBadge: "Save 12%",
    isHotDeal: true,
    isNewArrival: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=700&q=80",
    description: "Frameless bezel design with built-in Wi-Fi, digital DVB-T2 free-to-air tuner, and Google Play app store for streaming.",
    specs: ["32-inch HD Frameless Screen", "Android TV with Google Assistant", "Built-in Free-to-Air Digital Decoder", "HDMI & USB Media Playback"],
    inStock: true
  },
  {
    id: "tv-03",
    name: "4K Android TV Streaming Media Box",
    category: "TVs & Entertainment",
    categorySlug: "tvs",
    price: 4500,
    originalPrice: 5500,
    discountBadge: "Save 18%",
    isHotDeal: false,
    isNewArrival: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80",
    description: "Convert any standard TV or monitor into a high-speed Smart TV with Netflix, YouTube, web browsing, and 4K playback.",
    specs: ["4K HDR Support @ 60fps", "Android OS with Play Store", "Wi-Fi & Ethernet Connectivity", "Remote Control Included"],
    inStock: true
  },

  // --- Audio & Speakers ---
  {
    id: "audio-01",
    name: "Active Noise-Cancelling Bluetooth Wireless Headphones",
    category: "Audio & Speakers",
    categorySlug: "audio",
    price: 3800,
    originalPrice: 4800,
    discountBadge: "Save 20%",
    isHotDeal: true,
    isNewArrival: false,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    description: "Cushioned over-ear comfort with deep dynamic bass, built-in hands-free calling microphone, and up to 30 hours of playback.",
    specs: ["Bluetooth 5.3 + AUX Jack", "Deep Bass Acoustic Tuning", "30-Hour Battery Life", "Foldable Travel Design"],
    inStock: true
  },
  {
    id: "audio-02",
    name: "True Wireless Earbuds with LED Digital Battery Case",
    category: "Audio & Speakers",
    categorySlug: "audio",
    price: 1800,
    originalPrice: 2400,
    discountBadge: "Save 25%",
    isHotDeal: true,
    isNewArrival: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    description: "Snug ergonomic in-ear fit with smart touch controls, crisp audio profile, and digital battery percentage display on the case.",
    specs: ["Bluetooth 5.3 Instant Pairing", "Touch Volume & Track Control", "LED Charging Case Display", "IPX5 Sweat Resistant"],
    inStock: true
  },
  {
    id: "audio-03",
    name: "Heavy Bass Portable Bluetooth Outdoor Speaker",
    category: "Audio & Speakers",
    categorySlug: "audio",
    price: 3200,
    originalPrice: null,
    discountBadge: null,
    isHotDeal: false,
    isNewArrival: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
    description: "Punchy 360-degree sound with passive radiator for rich low frequencies, FM radio tuner, USB flash drive slot, and durable carry handle.",
    specs: ["Dual Bass Radiators", "FM Radio + USB + MicroSD", "12-Hour Playtime Battery", "Splash-Proof Housing"],
    inStock: true
  },
  {
    id: "audio-04",
    name: "3.1 Channel Bluetooth Home Theatre Speaker System",
    category: "Audio & Speakers",
    categorySlug: "audio",
    price: 12500,
    originalPrice: 14500,
    discountBadge: "Save 13%",
    isHotDeal: false,
    isNewArrival: false,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=700&q=80",
    description: "Room-filling cinema sound with powerful dedicated wooden subwoofer, multi-input connectivity for TV, phone, or laptop.",
    specs: ["Subwoofer + 3 Satellite Speakers", "Bluetooth, Optical & AUX In", "USB/SD Card Reader", "Full Wireless Remote Control"],
    inStock: true
  },

  // --- Wearables ---
  {
    id: "wear-01",
    name: "Smartwatch with Bluetooth Calling & Heart Monitor",
    category: "Smartwatches & Wearables",
    categorySlug: "wearables",
    price: 3500,
    originalPrice: 4500,
    discountBadge: "Save 22%",
    isHotDeal: true,
    isNewArrival: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    description: "Make and receive phone calls directly from your wrist. Monitors daily steps, heart rate, blood oxygen, and WhatsApp message alerts.",
    specs: ["1.85-inch HD Touchscreen", "Bluetooth Wrist Phone Calls", "Heart Rate & SpO2 Tracking", "Over 100 Sports Modes"],
    inStock: true
  },
  {
    id: "wear-02",
    name: "Slim Fitness Activity Tracker Band",
    category: "Smartwatches & Wearables",
    categorySlug: "wearables",
    price: 2200,
    originalPrice: null,
    discountBadge: null,
    isHotDeal: false,
    isNewArrival: false,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=700&q=80",
    description: "Lightweight, water-resistant fitness wristband with 14-day standby battery, calorie counter, sleep monitoring, and alarm notifications.",
    specs: ["OLED Color Display", "14-Day Battery Life", "Sleep & Pedometer Sensors", "5ATM Water Resistance"],
    inStock: true
  },

  // --- Phone Accessories ---
  {
    id: "acc-01",
    name: "Braided Fast-Charging USB-C to USB-C Cable (60W)",
    category: "Phone Accessories",
    categorySlug: "accessories",
    price: 450,
    originalPrice: 600,
    discountBadge: "Save 25%",
    isHotDeal: true,
    isNewArrival: false,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    description: "Heavy-duty nylon braided cable tested for 15,000+ bends. Supports PD fast charging for smartphones, tablets, and modern laptops.",
    specs: ["Up to 60W Power Delivery", "1.2-Meter Length", "Reinforced Tangle-Free Braid", "High-Speed Data Sync"],
    inStock: true
  },
  {
    id: "acc-02",
    name: "Shockproof Armor Phone Case with Ring Kickstand",
    category: "Phone Accessories",
    categorySlug: "accessories",
    price: 650,
    originalPrice: null,
    discountBadge: null,
    isHotDeal: false,
    isNewArrival: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=700&q=80",
    description: "Dual-layer TPU and polycarbonate protection against drops and impacts, with 360-degree rotatable metal ring kickstand.",
    specs: ["Dual-Layer Drop Protection", "360-Degree Ring Stand", "Raised Camera Lip Guard", "Available for Multiple Models"],
    inStock: true
  },
  {
    id: "acc-03",
    name: "9D Full-Coverage Tempered Glass Screen Protector",
    category: "Phone Accessories",
    categorySlug: "accessories",
    price: 350,
    originalPrice: 500,
    discountBadge: "Save 30%",
    isHotDeal: true,
    isNewArrival: false,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=80",
    description: "Edge-to-edge curved glass shield with 9H diamond hardness, oleophobic anti-fingerprint coating, and bubble-free installation.",
    specs: ["9H Hardness Scratch Proof", "Oleophobic Coating", "Crystal-Clear HD Clarity", "Precision Touch Sensitivity"],
    inStock: true
  },

  // --- Power & Charging ---
  {
    id: "power-01",
    name: "20,000mAh Dual USB Fast-Charging Power Bank",
    category: "Power Banks & Chargers",
    categorySlug: "power",
    price: 2900,
    originalPrice: 3500,
    discountBadge: "Save 17%",
    isHotDeal: true,
    isNewArrival: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1609592426861-12501a35773d?auto=format&fit=crop&w=700&q=80",
    description: "High-capacity external battery charges an average smartphone 4 to 5 times. Features dual USB output for charging two devices at once.",
    specs: ["20,000mAh High Capacity", "Dual USB-A + Type-C Input", "Multi-Protection Circuitry", "LED Battery Level Indicator"],
    inStock: true
  },
  {
    id: "power-02",
    name: "33W GaN Dual-Port Fast Wall Charger (Type-C + USB)",
    category: "Power Banks & Chargers",
    categorySlug: "power",
    price: 1500,
    originalPrice: 1800,
    discountBadge: "Save 16%",
    isHotDeal: false,
    isNewArrival: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    description: "Advanced Gallium Nitride (GaN) technology packs massive charging power into a cool, pocket-sized wall plug.",
    specs: ["33W Max Output", "Dual Port: USB-C & USB-A", "Overvoltage Protection", "Universal Smartphone Compatibility"],
    inStock: true
  },
  {
    id: "power-03",
    name: "Multi-Port Heavy-Duty Extension Socket with USB",
    category: "Power Banks & Chargers",
    categorySlug: "power",
    price: 1850,
    originalPrice: null,
    discountBadge: null,
    isHotDeal: false,
    isNewArrival: false,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    description: "Surge-protected 4-gang power extension strip with 4 high-speed USB ports, fire-retardant housing, and master safety switch.",
    specs: ["4 Universal AC Sockets", "4 Built-in USB Ports", "Surge & Spike Protection", "2-Meter Heavy Copper Cable"],
    inStock: true
  },

  // --- Home & Office Electronics ---
  {
    id: "home-01",
    name: "Wireless Ergonomic Keyboard and Optical Mouse Combo",
    category: "Home Electronics",
    categorySlug: "home",
    price: 2400,
    originalPrice: 2900,
    discountBadge: "Save 17%",
    isHotDeal: false,
    isNewArrival: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    description: "2.4GHz wireless plug-and-play desktop set with whisper-quiet keys, ergonomic palm layout, and energy-saving auto sleep.",
    specs: ["2.4GHz Wireless USB Nano Receiver", "Whisper-Quiet Scissor Keys", "1600 DPI Smooth Mouse", "Long Battery Life"],
    inStock: true
  },
  {
    id: "home-02",
    name: "All-in-One Wireless Inkjet Colour Printer & Scanner",
    category: "Home Electronics",
    categorySlug: "home",
    price: 23500,
    originalPrice: 26000,
    discountBadge: "Save 10%",
    isHotDeal: true,
    isNewArrival: false,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=700&q=80",
    description: "Print, copy, and scan from your mobile phone or laptop with built-in Wi-Fi and high-yield refillable ink tanks.",
    specs: ["Print, Copy, Scan 3-in-1", "Wi-Fi & Mobile Cloud Printing", "High-Yield Low Cost per Page", "Vivid Color Document Printing"],
    inStock: true
  },
  {
    id: "home-03",
    name: "High-Gain Dual-Band 4-Antenna Wi-Fi Router",
    category: "Home Electronics",
    categorySlug: "home",
    price: 3600,
    originalPrice: 4200,
    discountBadge: "Save 14%",
    isHotDeal: false,
    isNewArrival: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80",
    description: "Broad wireless coverage designed to eliminate dead zones in homes and small business premises in Kapsabet.",
    specs: ["Dual-Band 2.4GHz & 5GHz", "4x High-Gain 5dBi Antennas", "Supports 30+ Connected Devices", "Gigabit WAN/LAN Ethernet"],
    inStock: true
  },
  {
    id: "home-04",
    name: "Rechargeable LED Emergency Solar Light & Power Source",
    category: "Home Electronics",
    categorySlug: "home",
    price: 2100,
    originalPrice: 2600,
    discountBadge: "Save 19%",
    isHotDeal: true,
    isNewArrival: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=700&q=80",
    description: "Bright wide-beam emergency lighting with solar recharging panel and USB output to charge your mobile phone during blackouts.",
    specs: ["Dual Charging: Solar & AC Mains", "Built-in Emergency Phone Charger", "Up to 16 Hours Continuous Light", "Sturdy Carry & Hang Handle"],
    inStock: true
  }
];

// =============================================================================
// 3. BLOG & TECH GUIDES DATA
// =============================================================================
const BLOG_ARTICLES = [
  {
    id: "blog-01",
    title: "How to Choose the Right Smartphone for Your Budget in Kapsabet",
    category: "Smartphones",
    date: "Tech Guide",
    excerpt: "With so many options on the market, finding the right balance between RAM, storage, camera quality, and battery life is key.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02560?auto=format&fit=crop&w=700&q=80",
    content: `
      <h3>Finding Value for Your Hard-Earned Money</h3>
      <p>When shopping for a smartphone in Kapsabet, it is easy to get overwhelmed by technical specifications. However, focusing on four primary aspects guarantees you get great value for your budget:</p>
      <ul>
        <li><strong>RAM and Processor:</strong> Aim for at least 4GB of RAM for smooth everyday WhatsApp, social media, and M-Pesa usage. 6GB to 8GB is ideal if you multitask or play games.</li>
        <li><strong>Storage:</strong> Look for at least 128GB of internal storage so you don't run out of space for photos, videos, and offline documents.</li>
        <li><strong>Battery Capacity:</strong> In Kenya, a 5,000mAh battery is standard for all-day reliability, especially during power fluctuations or travel across Nandi County.</li>
        <li><strong>Network Support:</strong> Ensure the phone supports standard 4G LTE bands in Kenya for reliable internet speeds across all major telecommunications networks.</li>
      </ul>
      <p>Have questions about a specific smartphone brand or model? Feel free to contact World Electronics directly on WhatsApp for guidance!</p>
    `
  },
  {
    id: "blog-02",
    title: "Five Things to Check Before Buying a Laptop for Work or College",
    category: "Computers",
    date: "Buying Advice",
    excerpt: "Whether for college classes, office paperwork, or freelancing, make sure you check these five core essentials before buying.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=700&q=80",
    content: `
      <h3>Key Laptop Buying Criteria</h3>
      <p>A good laptop is an investment in your career, education, and daily productivity. Before choosing a machine at World Electronics, verify these points:</p>
      <ul>
        <li><strong>SSD over HDD:</strong> Always choose a laptop with a Solid State Drive (SSD). An SSD starts up in seconds and runs 5 times faster than traditional spinning hard drives.</li>
        <li><strong>Processor Generation:</strong> Look for Intel Core i5 or AMD Ryzen 5 as sweet spots for long-term speed and longevity.</li>
        <li><strong>Memory:</strong> 8GB RAM is the recommended minimum for modern Windows 11 and web browsers. 16GB is best for heavy multitasking.</li>
        <li><strong>Keyboard & Build:</strong> Look for sturdy chassis and comfortable keys if you type long reports or assignments.</li>
        <li><strong>Battery Endurance:</strong> Choose a machine providing at least 4 to 6 hours of dependable battery operation.</li>
      </ul>
    `
  },
  {
    id: "blog-03",
    title: "Power Banks Explained: Capacity, Charging Speed, and Everyday Care",
    category: "Power",
    date: "Everyday Tech",
    excerpt: "Understand what 10,000mAh vs 20,000mAh means, how fast charging works, and how to make your power bank last for years.",
    image: "https://images.unsplash.com/photo-1609592426861-12501a35773d?auto=format&fit=crop&w=700&q=80",
    content: `
      <h3>Understanding Power Bank Ratings</h3>
      <p>A reliable power bank is essential in Kenya for travel, field work, and unexpected power outages. Here is what the numbers really mean:</p>
      <ul>
        <li><strong>10,000mAh:</strong> Charges a typical smartphone 2 to 2.5 times. Compact and pocket-friendly for daily commutes.</li>
        <li><strong>20,000mAh:</strong> Charges a smartphone 4 to 5 times. Ideal for longer journeys, family trips, or charging multiple devices simultaneously.</li>
        <li><strong>Fast Charging Protocols:</strong> Look for PD (Power Delivery) and QC (Quick Charge) labels for up to 3x faster phone charging.</li>
        <li><strong>Care Tips:</strong> Avoid leaving your power bank on direct hot dashboards and never drain it to absolute 0% regularly to preserve battery lifespan.</li>
      </ul>
    `
  },
  {
    id: "blog-04",
    title: "How to Choose Speakers and Sound Systems for Your Living Room",
    category: "Audio",
    date: "Audio Guide",
    excerpt: "Compare portable Bluetooth speakers and 3.1 home theatre setups to find the right audio profile for music and television.",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=700&q=80",
    content: `
      <h3>Finding the Perfect Sound Balance</h3>
      <p>Good audio enhances music, movies, sports, and church services at home. Consider these guidelines:</p>
      <ul>
        <li><strong>Room Size:</strong> For medium to large living rooms, a multi-speaker setup with a dedicated bass subwoofer provides full sound without distortion.</li>
        <li><strong>Connectivity:</strong> Ensure your speaker supports Bluetooth, USB flash drives, and an AUX or optical input for direct TV connection.</li>
        <li><strong>Portability vs Power:</strong> A portable speaker is great for outdoor gatherings and easy movement, while a home theatre stays firmly anchored to your entertainment center.</li>
      </ul>
    `
  }
];

// =============================================================================
// 4. CLIENT-SIDE SHOPPING CART STATE (LOCALSTORAGE PERSISTED)
// =============================================================================
const CART_STORAGE_KEY = "we_kapsabet_cart_v1";

let cart = [];

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (raw) {
      cart = JSON.parse(raw);
      if (!Array.isArray(cart)) cart = [];
    }
  } catch (err) {
    console.warn("Storage access restricted. Cart running in memory mode.", err);
    cart = [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (err) {
    console.warn("Unable to save cart to localStorage.", err);
  }
  updateCartBadge();
  renderCartDrawer();
}

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS_CATALOGUE.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: quantity
    });
  }

  saveCart();
  showToast(`Added "${product.name}" to your cart`);
  
  // Animate badge
  const badge = document.getElementById("headerCartBadge");
  if (badge) {
    badge.classList.add("bounce");
    setTimeout(() => badge.classList.remove("bounce"), 300);
  }
}

function updateCartQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  showToast("Item removed from cart");
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  saveCart();
  showToast("Cart cleared");
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartTotalCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function formatKSh(amount) {
  return `KSh ${Number(amount).toLocaleString('en-KE')}`;
}

// =============================================================================
// 5. WHATSAPP LINK GENERATION (PRIMARY ORDERING MECHANISM)
// =============================================================================

/**
 * Generate WhatsApp message URL for an individual product enquiry
 */
function getProductWhatsAppUrl(productId, customQty = 1) {
  const product = PRODUCTS_CATALOGUE.find(p => p.id === productId);
  if (!product) return `https://wa.me/${STORE_CONFIG.whatsappNumber}`;

  const message = [
    `Hello ${STORE_CONFIG.name}!`,
    `I would like to enquire about this product from your website:`,
    ``,
    `*Product:* ${product.name}`,
    `*Category:* ${product.category}`,
    `*Displayed Price:* ${formatKSh(product.price)}`,
    `*Quantity:* ${customQty}`,
    ``,
    `Please confirm availability, the current price, and delivery or collection options in Kapsabet.`
  ].join("\n");

  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate WhatsApp checkout URL for the entire cart
 */
function getCartWhatsAppUrl(customerNotes = "") {
  if (cart.length === 0) return null;

  const itemsList = cart.map((item, idx) => {
    const lineTotal = item.price * item.quantity;
    return `${idx + 1}. *${item.name}* x ${item.quantity} — ${formatKSh(item.price)} each (Total: ${formatKSh(lineTotal)})`;
  }).join("\n");

  const subtotal = getCartSubtotal();

  const messageLines = [
    `Hello ${STORE_CONFIG.name}!`,
    `I would like to place an order from your website catalogue:`,
    ``,
    `*ORDER ITEMS:*`,
    itemsList,
    ``,
    `*Estimated Subtotal:* ${formatKSh(subtotal)}`,
    customerNotes ? `*Customer Note / Delivery Area:* ${customerNotes.trim()}` : null,
    ``,
    `Please confirm product availability, final pricing, and collection or delivery arrangements with me.`
  ].filter(line => line !== null);

  const message = messageLines.join("\n");
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Open WhatsApp with prefilled newsletter/broadcast enquiry
 */
function openNewsletterWhatsApp() {
  const message = `Hello ${STORE_CONFIG.name}! Please add my number to your broadcast list for new arrivals and tech offers in Kapsabet.`;
  window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

// =============================================================================
// 6. IMAGE FALLBACK UTILITY (PREVENTS BROKEN IMAGE ICONS)
// =============================================================================
function handleImageError(imgElement, categoryName) {
  imgElement.onerror = null;
  // Replace with clean inline SVG placeholder
  imgElement.parentElement.innerHTML = `
    <div class="product-image-fallback">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
      <span style="font-size: 0.75rem; font-weight: 600; color: #64748b;">${categoryName || 'World Electronics'}</span>
    </div>
  `;
}

// =============================================================================
// 7. CARD RENDERING ENGINE
// =============================================================================
function renderProductCardHTML(product) {
  let badgeHTML = "";
  if (product.discountBadge) {
    badgeHTML += `<span class="product-badge badge-deal">${product.discountBadge}</span>`;
  }
  if (product.isNewArrival) {
    badgeHTML += `<span class="product-badge badge-new">New Arrival</span>`;
  } else if (product.isPopular) {
    badgeHTML += `<span class="product-badge badge-popular">Popular</span>`;
  }

  const oldPriceHTML = product.originalPrice 
    ? `<span class="product-price-old tabular-nums">${formatKSh(product.originalPrice)}</span>` 
    : "";

  return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-image-container" onclick="openProductModal('${product.id}')" title="Click for details">
        ${badgeHTML ? `<div class="product-badge-group">${badgeHTML}</div>` : ""}
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="product-image"
          loading="lazy"
          onerror="handleImageError(this, '${product.category}')"
        />
        <span class="quick-view-btn-hover">Quick View</span>
      </div>
      <div class="product-body">
        <span class="product-category-text">${product.category}</span>
        <h3 class="product-title" onclick="openProductModal('${product.id}')">${product.name}</h3>
        <div class="product-price-row">
          <span class="product-price-current tabular-nums">${formatKSh(product.price)}</span>
          ${oldPriceHTML}
        </div>
        <div class="product-actions-grid">
          <button type="button" class="btn-card-cart" onclick="addToCart('${product.id}')" title="Add to Cart">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Add to Cart
          </button>
          <a href="${getProductWhatsAppUrl(product.id)}" target="_blank" rel="noopener noreferrer" class="btn-card-wa" title="Order via WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
            </svg>
            Order
          </a>
        </div>
      </div>
    </div>
  `;
}

// =============================================================================
// 8. SECTION POPULATORS
// =============================================================================

function populateHotDeals() {
  const container = document.getElementById("hotDealsContainer");
  if (!container) return;

  const deals = PRODUCTS_CATALOGUE.filter(p => p.isHotDeal).slice(0, 8);
  container.innerHTML = deals.map(p => renderProductCardHTML(p)).join("");
}

function populateLatestArrivals() {
  const container = document.getElementById("latestArrivalsContainer");
  if (!container) return;

  const latest = PRODUCTS_CATALOGUE.filter(p => p.isNewArrival).slice(0, 8);
  container.innerHTML = latest.map(p => renderProductCardHTML(p)).join("");
}

function populateCustomerFavourites() {
  const container = document.getElementById("customerFavouritesContainer");
  if (!container) return;

  const favourites = PRODUCTS_CATALOGUE.filter(p => p.isPopular).slice(0, 8);
  container.innerHTML = favourites.map(p => renderProductCardHTML(p)).join("");
}

// Master collection state
let currentFilterCategory = "all";
let currentSearchTerm = "";
let currentSortMode = "featured";

function renderMasterCollection() {
  const container = document.getElementById("masterCollectionGrid");
  const countEl = document.getElementById("collectionProductCount");
  if (!container) return;

  let filtered = [...PRODUCTS_CATALOGUE];

  // Category filter
  if (currentFilterCategory !== "all") {
    filtered = filtered.filter(p => p.categorySlug === currentFilterCategory);
  }

  // Search filter
  if (currentSearchTerm.trim()) {
    const q = currentSearchTerm.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.specs.some(s => s.toLowerCase().includes(q))
    );
  }

  // Sorting
  if (currentSortMode === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSortMode === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSortMode === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSortMode === "newest") {
    filtered.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
  }

  // Update count
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS_CATALOGUE.length} products`;
  }

  // Render cards or empty message
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-results" style="grid-column: 1 / -1;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #101828;">No matching products found</h3>
        <p style="color: #64748b; font-size: 0.9375rem; margin-bottom: 1.5rem;">Try adjusting your search terms or clearing your category filters.</p>
        <button type="button" class="btn btn-navy" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
  } else {
    container.innerHTML = filtered.map(p => renderProductCardHTML(p)).join("");
  }
}

function filterByCategory(slug) {
  currentFilterCategory = slug;
  
  // Update UI active buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-category") === slug);
  });

  // Update header category navigation
  document.querySelectorAll(".category-nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("data-category") === slug);
  });

  renderMasterCollection();

  // Scroll smoothly to collection section
  const section = document.getElementById("collection");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function resetAllFilters() {
  currentFilterCategory = "all";
  currentSearchTerm = "";
  currentSortMode = "featured";

  const searchInput = document.getElementById("collectionSearchInput");
  const headerSearchInput = document.getElementById("headerSearchInput");
  const mobileSearchInput = document.getElementById("mobileSearchInput");
  const sortSelect = document.getElementById("collectionSortSelect");

  if (searchInput) searchInput.value = "";
  if (headerSearchInput) headerSearchInput.value = "";
  if (mobileSearchInput) mobileSearchInput.value = "";
  if (sortSelect) sortSelect.value = "featured";

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-category") === "all");
  });

  document.querySelectorAll(".category-nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("data-category") === "all");
  });

  renderMasterCollection();
}

// =============================================================================
// 9. PROMOTIONAL CAROUSEL (ROTATES EVERY 2 SECONDS)
// =============================================================================
let carouselCurrentIndex = 0;
let carouselTimer = null;
const CAROUSEL_TOTAL_SLIDES = 5;

function initCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  if (slides.length === 0) return;

  function showSlide(index) {
    carouselCurrentIndex = (index + CAROUSEL_TOTAL_SLIDES) % CAROUSEL_TOTAL_SLIDES;
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === carouselCurrentIndex);
    });
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === carouselCurrentIndex);
    });
  }

  function nextSlide() {
    showSlide(carouselCurrentIndex + 1);
  }

  function prevSlide() {
    showSlide(carouselCurrentIndex - 1);
  }

  function startAutoRotation() {
    stopAutoRotation();
    // 2-second rotation per requirements
    carouselTimer = setInterval(nextSlide, STORE_CONFIG.carouselIntervalMs);
  }

  function stopAutoRotation() {
    if (carouselTimer) {
      clearInterval(carouselTimer);
      carouselTimer = null;
    }
  }

  // Next / Prev button listeners
  const nextBtn = document.getElementById("carouselNextBtn");
  const prevBtn = document.getElementById("carouselPrevBtn");
  if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); startAutoRotation(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); startAutoRotation(); });

  // Dots listeners
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      showSlide(idx);
      startAutoRotation();
    });
  });

  // Pause on hover
  const wrapper = document.querySelector(".promo-carousel-wrapper");
  if (wrapper) {
    wrapper.addEventListener("mouseenter", stopAutoRotation);
    wrapper.addEventListener("mouseleave", startAutoRotation);
    wrapper.addEventListener("focusin", stopAutoRotation);
    wrapper.addEventListener("focusout", startAutoRotation);
  }

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  });

  startAutoRotation();
}

// =============================================================================
// 10. PRODUCT DETAILS QUICK-VIEW MODAL
// =============================================================================
let modalCurrentQty = 1;

function openProductModal(productId) {
  const product = PRODUCTS_CATALOGUE.find(p => p.id === productId);
  if (!product) return;

  modalCurrentQty = 1;

  const modalEl = document.getElementById("productModal");
  if (!modalEl) return;

  const oldPriceHTML = product.originalPrice 
    ? `<span class="modal-price-old tabular-nums">${formatKSh(product.originalPrice)}</span>` 
    : "";

  const specsListHTML = product.specs && product.specs.length > 0 
    ? product.specs.map(s => `<li>• ${s}</li>`).join("") 
    : "";

  modalEl.innerHTML = `
    <div class="modal-card">
      <button type="button" class="modal-close-btn" onclick="closeProductModal()" aria-label="Close modal">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="modal-grid">
        <div class="modal-image-col">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            onerror="handleImageError(this, '${product.category}')"
          />
        </div>
        <div class="modal-content-col">
          <span class="modal-category-tag">${product.category}</span>
          <h2 class="modal-title">${product.name}</h2>
          <div class="modal-price-row">
            <span class="modal-price-current tabular-nums">${formatKSh(product.price)}</span>
            ${oldPriceHTML}
          </div>
          <p class="modal-description">${product.description}</p>
          ${specsListHTML ? `<ul class="modal-specs-list">${specsListHTML}</ul>` : ""}

          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <span style="font-size: 0.875rem; font-weight: 600; color: #475569;">Quantity:</span>
            <div class="quantity-stepper">
              <button type="button" class="stepper-btn" onclick="changeModalQty(-1)">-</button>
              <span class="stepper-val" id="modalQtyVal">1</span>
              <button type="button" class="stepper-btn" onclick="changeModalQty(1)">+</button>
            </div>
          </div>

          <div class="modal-actions">
            <button type="button" class="btn btn-navy" onclick="addModalItemToCart('${product.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Add to Cart
            </button>
            <a id="modalWhatsAppBtn" href="${getProductWhatsAppUrl(product.id, 1)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
              </svg>
              Enquire & Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  modalEl.classList.add("active");
  document.body.classList.add("modal-open");
}

function changeModalQty(delta) {
  modalCurrentQty = Math.max(1, modalCurrentQty + delta);
  const qtyEl = document.getElementById("modalQtyVal");
  if (qtyEl) qtyEl.textContent = modalCurrentQty;
}

function addModalItemToCart(productId) {
  addToCart(productId, modalCurrentQty);
  closeProductModal();
}

function closeProductModal() {
  const modalEl = document.getElementById("productModal");
  if (modalEl) modalEl.classList.remove("active");
  document.body.classList.remove("modal-open");
}

// =============================================================================
// 11. BLOG ARTICLE MODAL
// =============================================================================
function openBlogArticleModal(articleId) {
  const article = BLOG_ARTICLES.find(a => a.id === articleId);
  if (!article) return;

  const modalEl = document.getElementById("blogModal");
  if (!modalEl) return;

  modalEl.innerHTML = `
    <div class="modal-card blog-modal-card">
      <button type="button" class="modal-close-btn" onclick="closeBlogModal()" aria-label="Close article">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="blog-modal-header">
        <span class="blog-category-tag">${article.category} · ${article.date}</span>
        <h2 class="blog-modal-title">${article.title}</h2>
      </div>
      <div class="blog-modal-content">
        ${article.content}
      </div>
      <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <span style="font-size: 0.875rem; color: #64748b;">Have tech questions in Kapsabet?</span>
        <a href="https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello World Electronics! I read your tech guide (' + article.title + ') and wanted to ask about available products.')}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-whatsapp">
          Ask on WhatsApp
        </a>
      </div>
    </div>
  `;

  modalEl.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeBlogModal() {
  const modalEl = document.getElementById("blogModal");
  if (modalEl) modalEl.classList.remove("active");
  document.body.classList.remove("modal-open");
}

// =============================================================================
// 12. CART DRAWER UI & CHECKOUT
// =============================================================================
function openCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  const drawer = document.getElementById("cartDrawer");
  if (overlay) overlay.classList.add("active");
  if (drawer) drawer.classList.add("active");
  document.body.classList.add("modal-open");
  renderCartDrawer();
}

function closeCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  const drawer = document.getElementById("cartDrawer");
  if (overlay) overlay.classList.remove("active");
  if (drawer) drawer.classList.remove("active");
  document.body.classList.remove("modal-open");
}

function renderCartDrawer() {
  const bodyEl = document.getElementById("cartDrawerBody");
  const footerEl = document.getElementById("cartDrawerFooter");
  const headerCountEl = document.getElementById("cartDrawerHeaderCount");

  const totalCount = getCartTotalCount();
  if (headerCountEl) headerCountEl.textContent = `(${totalCount})`;

  if (!bodyEl || !footerEl) return;

  if (cart.length === 0) {
    bodyEl.innerHTML = `
      <div class="cart-empty-state">
        <svg class="cart-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h4 style="font-size: 1.125rem; font-weight: 700; color: #101828; margin-bottom: 0.5rem;">Your Cart is Empty</h4>
        <p style="font-size: 0.875rem; color: #64748b; margin-bottom: 1.5rem;">Browse our catalogue of electronics and add items to place an order via WhatsApp.</p>
        <button type="button" class="btn btn-navy" onclick="closeCartDrawer(); filterByCategory('all');">
          Explore Products
        </button>
      </div>
    `;
    footerEl.style.display = "none";
    return;
  }

  footerEl.style.display = "block";

  bodyEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="handleImageError(this, '${item.category}')" />
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <span class="cart-item-price tabular-nums">${formatKSh(item.price)} each</span>
        <div class="cart-item-controls">
          <div class="quantity-stepper">
            <button type="button" class="stepper-btn" onclick="updateCartQuantity('${item.id}', -1)" aria-label="Decrease quantity">-</button>
            <span class="stepper-val">${item.quantity}</span>
            <button type="button" class="stepper-btn" onclick="updateCartQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
          <button type="button" class="cart-item-remove-btn" onclick="removeFromCart('${item.id}')">
            Remove
          </button>
        </div>
      </div>
    </div>
  `).join("");

  const subtotal = getCartSubtotal();
  footerEl.innerHTML = `
    <div class="cart-subtotal-row">
      <span>Estimated Total:</span>
      <span class="tabular-nums">${formatKSh(subtotal)}</span>
    </div>
    <p class="cart-disclaimer">
      * Displayed total is an estimate until confirmed by World Electronics via WhatsApp based on current store stock and delivery or collection preferences.
    </p>
    <div class="cart-optional-notes">
      <input 
        type="text" 
        id="cartDeliveryNotes" 
        class="cart-notes-input" 
        placeholder="Optional: Your Name or Delivery Area in Kapsabet"
      />
    </div>
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <button type="button" class="btn btn-whatsapp" style="width: 100%; font-size: 1rem; padding: 0.85rem;" onclick="checkoutCartViaWhatsApp()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
        </svg>
        Checkout Entire Cart via WhatsApp
      </button>
      <div style="display: flex; gap: 0.5rem; justify-content: space-between;">
        <button type="button" class="btn btn-sm btn-ghost" onclick="clearCart()">Clear Cart</button>
        <button type="button" class="btn btn-sm btn-outline" onclick="closeCartDrawer()">Continue Shopping</button>
      </div>
    </div>
  `;
}

function checkoutCartViaWhatsApp() {
  const notesInput = document.getElementById("cartDeliveryNotes");
  const notes = notesInput ? notesInput.value : "";
  const url = getCartWhatsAppUrl(notes);
  if (!url) {
    showToast("Your cart is empty");
    return;
  }
  window.open(url, "_blank");
}

function updateCartBadge() {
  const count = getCartTotalCount();
  const badge = document.getElementById("headerCartBadge");
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }
}

// =============================================================================
// 13. TOAST NOTIFICATIONS
// =============================================================================
let toastTimeout = null;

function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const textEl = document.getElementById("toastText");
  if (!toast || !textEl) return;

  textEl.textContent = message;
  toast.classList.add("active");

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("active");
  }, 2400);
}

// =============================================================================
// 14. FAQ ACCORDION ENGINE
// =============================================================================
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question-btn");
    const answer = item.querySelector(".faq-answer");
    if (!btn || !answer) return;

    btn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all others
      faqItems.forEach(other => {
        other.classList.remove("active");
        const otherAnswer = other.querySelector(".faq-answer");
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// =============================================================================
// 15. MOBILE MENU DRAWER
// =============================================================================
function initMobileMenu() {
  const overlay = document.getElementById("mobileDrawerOverlay");
  const drawer = document.getElementById("mobileDrawer");
  const openBtn = document.getElementById("mobileMenuToggleBtn");
  const closeBtn = document.getElementById("mobileDrawerCloseBtn");

  function openMenu() {
    if (overlay) overlay.classList.add("active");
    if (drawer) drawer.classList.add("active");
    document.body.classList.add("modal-open");
  }

  function closeMenu() {
    if (overlay) overlay.classList.remove("active");
    if (drawer) drawer.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  if (openBtn) openBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

  // Close menu when clicking navigation links
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

// =============================================================================
// 16. SEARCH SYNC & EVENT LISTENERS
// =============================================================================
function initSearchListeners() {
  const headerInput = document.getElementById("headerSearchInput");
  const mobileInput = document.getElementById("mobileSearchInput");
  const collectionInput = document.getElementById("collectionSearchInput");
  const sortSelect = document.getElementById("collectionSortSelect");

  function handleSearchUpdate(term) {
    currentSearchTerm = term;
    if (headerInput && headerInput.value !== term) headerInput.value = term;
    if (mobileInput && mobileInput.value !== term) mobileInput.value = term;
    if (collectionInput && collectionInput.value !== term) collectionInput.value = term;
    renderMasterCollection();
  }

  if (headerInput) {
    headerInput.addEventListener("input", (e) => handleSearchUpdate(e.target.value));
    headerInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  if (mobileInput) {
    mobileInput.addEventListener("input", (e) => handleSearchUpdate(e.target.value));
  }

  if (collectionInput) {
    collectionInput.addEventListener("input", (e) => handleSearchUpdate(e.target.value));
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSortMode = e.target.value;
      renderMasterCollection();
    });
  }

  // Filter Buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category");
      filterByCategory(cat);
    });
  });

  // Category Nav Links
  document.querySelectorAll(".category-nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = link.getAttribute("data-category");
      filterByCategory(cat);
    });
  });
}

// =============================================================================
// 17. GLOBAL ESCAPE KEY LISTENER & MODAL OVERLAY CLICK
// =============================================================================
function initGlobalModalListeners() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeBlogModal();
      closeCartDrawer();
    }
  });

  const productOverlay = document.getElementById("productModal");
  if (productOverlay) {
    productOverlay.addEventListener("click", (e) => {
      if (e.target === productOverlay) closeProductModal();
    });
  }

  const blogOverlay = document.getElementById("blogModal");
  if (blogOverlay) {
    blogOverlay.addEventListener("click", (e) => {
      if (e.target === blogOverlay) closeBlogModal();
    });
  }

  const cartOverlay = document.getElementById("cartDrawerOverlay");
  if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCartDrawer);
  }
}

// =============================================================================
// 18. INITIALIZE WEBSITE ON DOM READY
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Load cart
  loadCart();
  updateCartBadge();

  // 2. Set dynamic year
  const yearEl = document.getElementById("copyrightYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 3. Populate sections
  populateHotDeals();
  populateLatestArrivals();
  populateCustomerFavourites();
  renderMasterCollection();

  // 4. Initialize interactions
  initCarousel();
  initFAQ();
  initMobileMenu();
  initSearchListeners();
  initGlobalModalListeners();
});


// =============================================================================
// 19. MULTI-PAGE EXTENSION ENGINE: PDP, ORDER FORM, REVIEWS & BLOG SINGLE
// =============================================================================

// --- Review Store & Initial Data ---
const REVIEWS_STORAGE_KEY = "we_kapsabet_reviews_v1";

const INITIAL_REVIEWS = [
  {
    id: "rev-1",
    name: "Brian Kipchumba",
    location: "Kapsabet Town",
    product: "Samsung Galaxy A-Series Smartphone",
    rating: 5,
    date: "Recent Customer",
    comment: "Bought my Samsung A-series phone here last week. Genuine product with good camera clarity and strong battery. They set up my WhatsApp and screen protector right at the shop."
  },
  {
    id: "rev-2",
    name: "Mercy Jepkemboi",
    location: "Near Baraton University",
    product: "HP Core i5 Business Laptop",
    rating: 5,
    date: "Verified Student",
    comment: "I needed a durable laptop for my university coursework. The Core i5 speed is super fast and battery lasts through long lectures. Smooth WhatsApp ordering and pickup!"
  },
  {
    id: "rev-3",
    name: "Dennis Rotich",
    location: "Chepterit, Nandi County",
    product: "20,000mAh Dual Fast Power Bank",
    rating: 5,
    date: "Verified Buyer",
    comment: "A lifesaver during blackouts. Charges my smartphone 4 times completely and the GaN fast charge port is very fast. Definitely recommend World Electronics."
  },
  {
    id: "rev-4",
    name: "Faith Chebet",
    location: "Kapsabet CBD",
    product: "3.1 Channel Bluetooth Home Theatre",
    rating: 5,
    date: "Recent Customer",
    comment: "The sound clarity and bass are unbelievable for the price. Tested it right at the shop before paying. Best electronics shop in Kapsabet."
  }
];

function getStoredReviews() {
  try {
    const raw = localStorage.getItem(REVIEWS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn("Storage restricted for reviews", e);
  }
  return [...INITIAL_REVIEWS];
}

function saveStoredReviews(reviews) {
  try {
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
  } catch (e) {
    console.warn("Could not save reviews", e);
  }
}

// --- Product Detail Page (PDP) Renderer ---
function initProductDetailPage() {
  const container = document.getElementById("pdpContainer");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id") || PRODUCTS_CATALOGUE[0].id;
  const product = PRODUCTS_CATALOGUE.find(p => p.id === productId) || PRODUCTS_CATALOGUE[0];

  document.title = `${product.name} | World Electronics Kapsabet`;

  const oldPriceHTML = product.originalPrice 
    ? `<span class="modal-price-old tabular-nums">${formatKSh(product.originalPrice)}</span>` 
    : "";

  const specsRows = product.specs.map(spec => `
    <tr>
      <td>${spec.split(":")[0] || "Feature"}</td>
      <td>${spec.split(":")[1] || spec}</td>
    </tr>
  `).join("");

  const related = PRODUCTS_CATALOGUE
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const relatedHTML = related.length > 0 
    ? related.map(p => renderProductCardHTML(p)).join("")
    : PRODUCTS_CATALOGUE.slice(0, 4).map(p => renderProductCardHTML(p)).join("");

  container.innerHTML = `
    <div class="page-breadcrumbs" style="margin-bottom: 2rem;">
      <a href="index.html">Home</a>
      <span>/</span>
      <a href="products.html">Products</a>
      <span>/</span>
      <a href="products.html?category=${product.categorySlug}">${product.category}</a>
      <span>/</span>
      <span style="color: #64748b;">${product.name}</span>
    </div>

    <div class="pdp-grid">
      <div class="pdp-gallery-card">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="pdp-gallery-img"
          onerror="handleImageError(this, '${product.category}')"
        />
      </div>

      <div class="pdp-info-panel">
        <span class="product-category-text" style="font-size: 0.875rem; margin-bottom: 0.5rem;">${product.category}</span>
        <h1 class="page-hero-title" style="color: var(--color-primary); font-size: 2.125rem; margin-bottom: 1rem;">${product.name}</h1>
        
        <div class="product-price-row" style="margin-bottom: 1.5rem;">
          <span class="modal-price-current tabular-nums" style="font-size: 2rem;">${formatKSh(product.price)}</span>
          ${oldPriceHTML}
          ${product.discountBadge ? `<span class="product-badge badge-deal" style="margin-left: 0.5rem;">${product.discountBadge}</span>` : ""}
        </div>

        <p class="modal-description" style="font-size: 1.0625rem; line-height: 1.7; margin-bottom: 1.75rem;">
          ${product.description}
        </p>

        <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.75rem;">Key Specifications</h3>
        <table class="pdp-specs-table">
          <tbody>
            ${specsRows}
            <tr>
              <td>Availability</td>
              <td><span style="color: #059669; font-weight: 700;">● In Stock at Kapsabet Shop</span></td>
            </tr>
            <tr>
              <td>Pickup & Hours</td>
              <td>Daily 8:00 AM–8:00 PM in Kapsabet</td>
            </tr>
          </tbody>
        </table>

        <!-- Purchase & Order Actions -->
        <div style="display: flex; flex-direction: column; gap: 0.875rem; margin-top: auto;">
          <div style="display: flex; gap: 1rem; align-items: center;">
            <div class="quantity-stepper" style="height: 44px; padding: 0 4px;">
              <button type="button" class="stepper-btn" onclick="changePdpQty(-1)" style="width: 36px; height: 36px;">-</button>
              <span class="stepper-val" id="pdpQtyVal" style="min-width: 36px; font-size: 1rem;">1</span>
              <button type="button" class="stepper-btn" onclick="changePdpQty(1)" style="width: 36px; height: 36px;">+</button>
            </div>
            <button type="button" class="btn btn-navy btn-lg" style="flex: 1;" onclick="addPdpToCart('${product.id}')">
              Add to Cart
            </button>
          </div>

          <a href="${getProductWhatsAppUrl(product.id)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
            </svg>
            Instant WhatsApp Enquiry
          </a>

          <a href="order.html?product=${product.id}" class="btn btn-outline btn-lg" style="border-color: var(--color-secondary); color: var(--color-secondary);">
            Open in Interactive Order Form →
          </a>
        </div>
      </div>
    </div>

    <!-- Related Products -->
    <div style="margin-top: 5rem; padding-top: 3.5rem; border-top: 1px solid var(--color-border);">
      <div class="section-header" style="text-align: left; margin-bottom: 2rem;">
        <span class="section-kicker">Recommendations</span>
        <h2 class="section-title" style="font-size: 1.75rem;">Related Electronics You May Like</h2>
      </div>
      <div class="products-grid">
        ${relatedHTML}
      </div>
    </div>
  `;
}

let pdpCurrentQty = 1;
function changePdpQty(delta) {
  pdpCurrentQty = Math.max(1, pdpCurrentQty + delta);
  const el = document.getElementById("pdpQtyVal");
  if (el) el.textContent = pdpCurrentQty;
}

function addPdpToCart(productId) {
  addToCart(productId, pdpCurrentQty);
}

// --- Interactive Order Form Engine (order.html) ---
let orderFormItems = [];

function initOrderFormPage() {
  const formEl = document.getElementById("interactiveOrderForm");
  if (!formEl) return;

  const urlParams = new URLSearchParams(window.location.search);
  const directProductId = urlParams.get("product");

  // Populate product dropdown selector
  const selectEl = document.getElementById("orderProductSelect");
  if (selectEl) {
    selectEl.innerHTML = `
      <option value="">-- Choose a product to add --</option>
      ${PRODUCTS_CATALOGUE.map(p => `
        <option value="${p.id}">${p.name} (${formatKSh(p.price)})</option>
      `).join("")}
    `;
  }

  // Preload items: either from direct parameter or existing cart
  if (directProductId) {
    const p = PRODUCTS_CATALOGUE.find(x => x.id === directProductId);
    if (p) {
      orderFormItems = [{ id: p.id, name: p.name, price: p.price, quantity: 1 }];
    }
  } else if (cart.length > 0) {
    orderFormItems = cart.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity }));
  } else {
    // Default to first product as suggestion
    const first = PRODUCTS_CATALOGUE[0];
    orderFormItems = [{ id: first.id, name: first.name, price: first.price, quantity: 1 }];
  }

  renderOrderFormItemsTable();

  // Add Item Button Listener
  const addItemBtn = document.getElementById("orderAddItemBtn");
  if (addItemBtn) {
    addItemBtn.addEventListener("click", () => {
      const selectedId = selectEl.value;
      if (!selectedId) {
        showToast("Please choose a product from the dropdown");
        return;
      }
      const p = PRODUCTS_CATALOGUE.find(x => x.id === selectedId);
      if (!p) return;

      const existing = orderFormItems.find(x => x.id === p.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        orderFormItems.push({ id: p.id, name: p.name, price: p.price, quantity: 1 });
      }
      selectEl.value = "";
      renderOrderFormItemsTable();
      showToast(`Added ${p.name}`);
    });
  }

  // Radio delivery toggles
  document.querySelectorAll(".radio-card").forEach(card => {
    card.addEventListener("click", () => {
      const radio = card.querySelector("input[type='radio']");
      if (radio) {
        radio.checked = true;
        document.querySelectorAll(".radio-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        updateOrderSummaryDisplay();
      }
    });
  });

  // Submit via WhatsApp
  const submitWaBtn = document.getElementById("submitOrderViaWhatsAppBtn");
  if (submitWaBtn) {
    submitWaBtn.addEventListener("click", submitOrderViaWhatsApp);
  }

  // Generate Receipt
  const generateReceiptBtn = document.getElementById("generateReceiptBtn");
  if (generateReceiptBtn) {
    generateReceiptBtn.addEventListener("click", generatePrintableReceipt);
  }
}

function renderOrderFormItemsTable() {
  const tbody = document.getElementById("orderItemsTableBody");
  if (!tbody) return;

  if (orderFormItems.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; color: #94a3b8; padding: 2rem;">
          No items selected. Use the dropdown above to choose electronics.
        </td>
      </tr>
    `;
    updateOrderSummaryDisplay();
    return;
  }

  tbody.innerHTML = orderFormItems.map(item => `
    <tr>
      <td>
        <strong>${item.name}</strong>
      </td>
      <td class="tabular-nums">${formatKSh(item.price)}</td>
      <td>
        <div class="quantity-stepper" style="display: inline-flex;">
          <button type="button" class="stepper-btn" onclick="updateOrderFormItemQty('${item.id}', -1)">-</button>
          <span class="stepper-val">${item.quantity}</span>
          <button type="button" class="stepper-btn" onclick="updateOrderFormItemQty('${item.id}', 1)">+</button>
        </div>
      </td>
      <td class="tabular-nums" style="text-align: right;">
        <strong>${formatKSh(item.price * item.quantity)}</strong>
        <button type="button" onclick="removeOrderFormItem('${item.id}')" style="margin-left: 0.5rem; color: #ef4444; font-size: 0.75rem;" title="Delete item">✕</button>
      </td>
    </tr>
  `).join("");

  updateOrderSummaryDisplay();
}

function updateOrderFormItemQty(id, delta) {
  const item = orderFormItems.find(x => x.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    orderFormItems = orderFormItems.filter(x => x.id !== id);
  }
  renderOrderFormItemsTable();
}

function removeOrderFormItem(id) {
  orderFormItems = orderFormItems.filter(x => x.id !== id);
  renderOrderFormItemsTable();
}

function getOrderFormSubtotal() {
  return orderFormItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
}

function updateOrderSummaryDisplay() {
  const subtotalEl = document.getElementById("orderSummarySubtotal");
  const totalEl = document.getElementById("orderSummaryTotal");
  const countEl = document.getElementById("orderSummaryCount");
  
  const subtotal = getOrderFormSubtotal();
  const totalQty = orderFormItems.reduce((a, b) => a + b.quantity, 0);

  if (subtotalEl) subtotalEl.textContent = formatKSh(subtotal);
  if (totalEl) totalEl.textContent = formatKSh(subtotal);
  if (countEl) countEl.textContent = `${totalQty} item(s)`;
}

function submitOrderViaWhatsApp() {
  if (orderFormItems.length === 0) {
    showToast("Please add at least one item to your order");
    return;
  }

  const nameInput = document.getElementById("orderCustomerName");
  const phoneInput = document.getElementById("orderCustomerPhone");
  const locationInput = document.getElementById("orderCustomerLocation");
  const notesInput = document.getElementById("orderCustomerNotes");
  const deliveryType = document.querySelector("input[name='deliveryMethod']:checked")?.value || "Shop Pickup";
  const paymentPref = document.getElementById("orderPaymentPreference")?.value || "M-Pesa";

  const name = nameInput?.value.trim() || "Customer";
  const phone = phoneInput?.value.trim() || "Not specified";
  const location = locationInput?.value.trim() || "Kapsabet Town";
  const notes = notesInput?.value.trim() || "";

  const itemsList = orderFormItems.map((item, idx) => {
    return `${idx + 1}. *${item.name}* x ${item.quantity} — ${formatKSh(item.price)} each (Total: ${formatKSh(item.price * item.quantity)})`;
  }).join("\n");

  const message = [
    `Hello ${STORE_CONFIG.name}!`,
    `I have placed an order using your interactive order form:`,
    ``,
    `*CUSTOMER DETAILS:*`,
    `• Name: ${name}`,
    `• Phone: ${phone}`,
    `• Area / Location: ${location}`,
    `• Method: ${deliveryType}`,
    `• Preferred Payment: ${paymentPref}`,
    ``,
    `*ORDERED ITEMS:*`,
    itemsList,
    ``,
    `*Estimated Total:* ${formatKSh(getOrderFormSubtotal())}`,
    notes ? `*Special Instructions:* ${notes}` : null,
    ``,
    `Please confirm product availability and when I can receive/pick up the items in Kapsabet.`
  ].filter(l => l !== null).join("\n");

  window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

function generatePrintableReceipt() {
  if (orderFormItems.length === 0) {
    showToast("Please add at least one item first");
    return;
  }

  const name = document.getElementById("orderCustomerName")?.value.trim() || "Customer";
  const phone = document.getElementById("orderCustomerPhone")?.value.trim() || "Phone not supplied";
  const location = document.getElementById("orderCustomerLocation")?.value.trim() || "Kapsabet";
  const deliveryType = document.querySelector("input[name='deliveryMethod']:checked")?.value || "In-Store Pickup";
  const paymentPref = document.getElementById("orderPaymentPreference")?.value || "M-Pesa on Pickup/Delivery";

  const orderRef = "WE-KAP-" + Math.floor(100000 + Math.random() * 900000);
  const now = new Date().toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  const modalEl = document.getElementById("receiptModal");
  if (!modalEl) return;

  const itemsRows = orderFormItems.map(i => `
    <div style="display: flex; justify-content: space-between; padding: 0.4rem 0; font-size: 0.875rem;">
      <span>${i.name} (x${i.quantity})</span>
      <span class="tabular-nums font-bold">${formatKSh(i.price * i.quantity)}</span>
    </div>
  `).join("");

  modalEl.innerHTML = `
    <div class="receipt-modal-card">
      <button type="button" class="modal-close-btn" onclick="closeReceiptModal()" aria-label="Close receipt">✕</button>
      
      <div class="receipt-header">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #101828;">WORLD ELECTRONICS KAPSABET</h2>
        <p style="font-size: 0.8125rem; color: #64748b;">Kapsabet, Nandi County, Kenya | +254 715 071 820</p>
        <div class="receipt-ref-code">ORDER SLIP: ${orderRef}</div>
        <p style="font-size: 0.75rem; color: #94a3b8; margin-top: 0.5rem;">Date: ${now}</p>
      </div>

      <div style="margin-bottom: 1.25rem; font-size: 0.875rem; color: #475569;">
        <div><strong>Customer:</strong> ${name} (${phone})</div>
        <div><strong>Delivery Method:</strong> ${deliveryType} (${location})</div>
        <div><strong>Payment Mode:</strong> ${paymentPref}</div>
      </div>

      <div style="border-top: 1px dashed #cbd5e1; border-bottom: 1px dashed #cbd5e1; padding: 0.75rem 0; margin-bottom: 1rem;">
        ${itemsRows}
      </div>

      <div style="display: flex; justify-content: space-between; font-size: 1.25rem; font-weight: 800; color: #101828; margin-bottom: 1.5rem;">
        <span>Total Payable:</span>
        <span class="tabular-nums">${formatKSh(getOrderFormSubtotal())}</span>
      </div>

      <div style="background-color: #f8fafc; padding: 0.75rem; border-radius: 8px; font-size: 0.75rem; color: #64748b; line-height: 1.5; margin-bottom: 1.5rem;">
        * This is an order estimate slip for World Electronics. To confirm stock reservation, present this order number or message us directly on WhatsApp (+254 715 071 820).
      </div>

      <div style="display: flex; gap: 0.75rem;">
        <button type="button" class="btn btn-navy" style="flex: 1;" onclick="window.print()">
          Print Order Slip
        </button>
        <button type="button" class="btn btn-whatsapp" style="flex: 1;" onclick="submitOrderViaWhatsApp()">
          Confirm on WhatsApp
        </button>
      </div>
    </div>
  `;

  modalEl.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeReceiptModal() {
  const modalEl = document.getElementById("receiptModal");
  if (modalEl) modalEl.classList.remove("active");
  document.body.classList.remove("modal-open");
}

// --- Customer Reviews Engine (reviews.html) ---
let userSelectedRating = 5;

function initReviewsPage() {
  const listEl = document.getElementById("reviewsListContainer");
  if (!listEl) return;

  renderReviewsList();

  // Star Rating Selector in submission form
  const stars = document.querySelectorAll(".star-rating-selector .star");
  stars.forEach(star => {
    star.addEventListener("click", () => {
      userSelectedRating = parseInt(star.getAttribute("data-value"), 10) || 5;
      stars.forEach(s => {
        const val = parseInt(s.getAttribute("data-value"), 10);
        s.classList.toggle("active", val <= userSelectedRating);
      });
    });
  });

  // Review Form Submit
  const form = document.getElementById("customerReviewForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("reviewAuthorName")?.value.trim();
      const location = document.getElementById("reviewAuthorLocation")?.value.trim() || "Kapsabet";
      const product = document.getElementById("reviewProductName")?.value.trim() || "General Purchase";
      const text = document.getElementById("reviewCommentText")?.value.trim();

      if (!name || !text) {
        showToast("Please provide your name and review");
        return;
      }

      const newReview = {
        id: "rev-" + Date.now(),
        name: name,
        location: location,
        product: product,
        rating: userSelectedRating,
        date: "Just Now",
        comment: text
      };

      const all = getStoredReviews();
      all.unshift(newReview);
      saveStoredReviews(all);

      form.reset();
      userSelectedRating = 5;
      stars.forEach(s => s.classList.add("active"));

      renderReviewsList();
      showToast("Thank you! Your feedback has been posted.");
    });
  }
}

function renderReviewsList() {
  const listEl = document.getElementById("reviewsListContainer");
  if (!listEl) return;

  const reviews = getStoredReviews();
  listEl.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div>
          <h4 class="reviewer-name">${r.name}</h4>
          <span class="reviewer-location">${r.location} · ${r.date}</span>
        </div>
        <div class="verified-buyer-badge">
          ✓ Verified Customer
        </div>
      </div>
      <div class="stars-display">
        ${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}
      </div>
      <div style="font-size: 0.8125rem; font-weight: 600; color: var(--color-secondary); margin-bottom: 0.4rem;">
        Product: ${r.product}
      </div>
      <p class="review-text">${r.comment}</p>
    </div>
  `).join("");
}

// --- Dedicated Products Page Filter & Grid ---
function initProductsPage() {
  const container = document.getElementById("allProductsGrid");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get("category");
  if (initialCategory) {
    currentFilterCategory = initialCategory;
  }

  // Update filter buttons if any
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-category") === currentFilterCategory);
  });

  renderMasterCollection();
}

// --- Single Blog Article Reader (blog-single.html) ---
function initBlogSinglePage() {
  const container = document.getElementById("blogSingleContainer");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("id") || BLOG_ARTICLES[0].id;
  const article = BLOG_ARTICLES.find(a => a.id === articleId) || BLOG_ARTICLES[0];

  document.title = `${article.title} | World Electronics Kapsabet`;

  container.innerHTML = `
    <div class="page-breadcrumbs" style="margin-bottom: 2rem;">
      <a href="index.html">Home</a>
      <span>/</span>
      <a href="blog.html">Tech Guides</a>
      <span>/</span>
      <span style="color: #64748b;">${article.category}</span>
    </div>

    <article style="max-width: 820px; margin: 0 auto; background-color: #ffffff; padding: 2.5rem; border-radius: 20px; border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);">
      <div style="margin-bottom: 1.5rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1.25rem;">
        <span class="blog-category-tag">${article.category} · ${article.date}</span>
        <h1 class="page-hero-title" style="color: var(--color-primary); font-size: 2.25rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">
          ${article.title}
        </h1>
        <p style="font-size: 1.0625rem; color: #64748b;">Published by World Electronics Kapsabet Tech Editorial Desk</p>
      </div>

      <img 
        src="${article.image}" 
        alt="${article.title}" 
        style="width: 100%; height: 380px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;"
        onerror="handleImageError(this, '${article.category}')"
      />

      <div class="blog-modal-content" style="font-size: 1.0625rem; line-height: 1.8;">
        ${article.content}
      </div>

      <div style="margin-top: 3rem; padding: 1.75rem; background-color: var(--color-bg-alt); border-radius: 12px; border: 1px solid var(--color-border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h4 style="font-size: 1.125rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.25rem;">Looking for recommended devices in Kapsabet?</h4>
          <p style="font-size: 0.875rem; color: #64748b;">Visit World Electronics or text our tech assistants directly on WhatsApp.</p>
        </div>
        <a href="https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello World Electronics! I read your tech guide (' + article.title + ') and wanted advice on purchasing.')}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
          Ask on WhatsApp
        </a>
      </div>
    </article>
  `;
}

// --- Active Nav Link Highlighter ---
function highlightActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Update initialization to run multi-page detectors
document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav();
  initProductDetailPage();
  initOrderFormPage();
  initReviewsPage();
  initProductsPage();
  initBlogSinglePage();
});
