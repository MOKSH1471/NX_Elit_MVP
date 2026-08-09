export interface RoomCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  sqft: string;
  bed: string;
  capacity: string;
  floorTheme: string;
  floorColorHex: string;
  accentClass: string;
  priceStarting: string;
  image: string;
  amenities: string[];
}

export interface FloorInfo {
  floorNumber: number;
  name: string;
  themeColor: string;
  hex: string;
  borderClass: string;
  bgGlowClass: string;
  description: string;
  roomsCount: number;
  featuredImage: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'rooms' | 'dining' | 'banquet' | 'property';
  imageUrl: string;
  caption: string;
}

export const HOTEL_INFO = {
  name: "NX Elit",
  tagline: "A Boutique Address on EM Bypass, Kolkata",
  address: "EM Bypass Corridor, Near Science City & Salt Lake Sector V, Kolkata, West Bengal 700105",
  phone: "+91 98300 00000",
  whatsapp: "+91 98300 00000",
  email: "reservations@nxelithotel.com",
  checkIn: "14:00 hrs",
  checkOut: "12:00 hrs",
  managingDirector: "Raju Saha",
  interiorDesigner: "Vinoo Chadha",
  totalRooms: 28,
  totalFloors: 5,
  starRating: "4-Star Boutique",
  distanceAirport: "12 km (~25 mins to CCU Airport)",
  distanceITPark: "5 km (~10 mins to Salt Lake Sector V)",
};

export const REAL_PHOTOS = {
  heroExterior: "https://images.t2online.in/cdn-cgi/image/width=1280,height=720,fit=cover,gravity=face,quality=70,format=auto/https://apis.t2online.in/getImageStream/7514/1783774819201.jpeg",
  roomColorInterior1: "https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783774869338.jpg",
  roomInteriorDetail2: "https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783774894830.jpg",
  roomInteriorDetail3: "https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783774924235.jpg",
  nxKitchenLounge: "https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783774948242.jpg",
  nxKitchenRestaurant: "https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783774962930.jpg",
  nxKitchenBacksplash: "https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783774973226.jpg",
  banquetSpace: "https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783774989121.jpg",
  propertyInterior: "https://images.t2online.in/cdn-cgi/image/width=1200,quality=70/https://cms.t2online.in/api/images/1783775033228.jpg",
};

export const FLOORS_DATA: FloorInfo[] = [
  {
    floorNumber: 2,
    name: "2nd Floor — Cobalt & Sapphire Blue",
    themeColor: "Sapphire Blue",
    hex: "#1d4ed8",
    borderClass: "border-blue-500/50",
    bgGlowClass: "from-blue-900/30 via-slate-900 to-black",
    description: "Designed with calming oceanic blues and sleek metallic tones, creating a tranquil environment ideal for deep focus and relaxation.",
    roomsCount: 8,
    featuredImage: REAL_PHOTOS.roomColorInterior1,
    highlights: ["Designer Mood Lighting", "Deep Sapphire Velvet Accents", "Workstation & Ergonomic Seating"]
  },
  {
    floorNumber: 3,
    name: "3rd & 4th Floors — Emerald Forest Green",
    themeColor: "Emerald Green",
    hex: "#059669",
    borderClass: "border-emerald-500/50",
    bgGlowClass: "from-emerald-900/30 via-zinc-900 to-black",
    description: "Bathed in lush botanical greens, warm oak wood finishes, and serene earthy textures curated by Vinoo Chadha.",
    roomsCount: 14,
    featuredImage: REAL_PHOTOS.roomInteriorDetail2,
    highlights: ["Earthy Wood & Brass Detailing", "Forest Velvet Headboards", "Panoramic EM Bypass Corridor Views"]
  },
  {
    floorNumber: 5,
    name: "5th Floor — Velvet Ruby Red & Suites",
    themeColor: "Ruby Red",
    hex: "#e11d48",
    borderClass: "border-rose-500/50",
    bgGlowClass: "from-rose-900/30 via-stone-900 to-black",
    description: "The crown jewel of NX Elit. Rich crimson tones, plush leather furniture, and executive suite indulgence.",
    roomsCount: 6,
    featuredImage: REAL_PHOTOS.roomInteriorDetail3,
    highlights: ["Royal Crimson Accents", "Exclusive Master Suite Layout", "Luxury Rain Shower Enclosure"]
  }
];

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: "executive-deluxe",
    name: "Executive Deluxe",
    tagline: "Tailored for the modern business traveller on EM Bypass",
    description: "Sleek, ergonomic design featuring custom designer furniture, dedicated work spaces, high-speed Wi-Fi, and signature colour floor ambience.",
    sqft: "280 sq ft",
    bed: "King Bed or Twin Beds",
    capacity: "Max 2 Adults + 1 Child",
    floorTheme: "2nd Floor Sapphire / 3rd Floor Emerald",
    floorColorHex: "#3b82f6",
    accentClass: "from-blue-500/20 to-transparent border-blue-500/30",
    priceStarting: "₹4,500 / night",
    image: REAL_PHOTOS.roomColorInterior1,
    amenities: ["High-Speed Wi-Fi", "43\" Smart TV", "Work Desk & Chair", "Tea/Coffee Maker", "Designer Rain Shower", "Electronic Safe"]
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    tagline: "Elevated comfort with designer mood lighting and lavish linens",
    description: "Expanded floor area with mood-controlled lighting, lush velvet lounge seating, premium bath amenities, and quiet city acoustics.",
    sqft: "320 sq ft",
    bed: "Plush King Size Bed",
    capacity: "Max 2 Adults + 1 Child",
    floorTheme: "3rd & 4th Floor Emerald Green",
    floorColorHex: "#10b981",
    accentClass: "from-emerald-500/20 to-transparent border-emerald-500/30",
    priceStarting: "₹5,800 / night",
    image: REAL_PHOTOS.roomInteriorDetail2,
    amenities: ["Corner Lounge Chair", "High-Speed Wi-Fi", "50\" Smart TV", "Stocked Mini Bar", "Premium Toiletries", "24-hr Room Service"]
  },
  {
    id: "super-deluxe",
    name: "Super Deluxe",
    tagline: "Uncompromising luxury with EM Bypass skyline vistas",
    description: "Generous room layout featuring floor-to-ceiling accent drapery, custom brass fixtures, expanded workspace, and elevated luxury finishes.",
    sqft: "380 sq ft",
    bed: "Super King Bed",
    capacity: "Max 3 Adults",
    floorTheme: "4th Floor Emerald / 5th Floor Crimson",
    floorColorHex: "#f59e0b",
    accentClass: "from-amber-500/20 to-transparent border-amber-500/30",
    priceStarting: "₹7,200 / night",
    image: REAL_PHOTOS.roomInteriorDetail3,
    amenities: ["Skyline View Windows", "Nespresso Machine", "Plush Bathrobes & Slippers", "Express Laundry Service", "Complimentary Breakfast"]
  },
  {
    id: "elit-suite",
    name: "The NX Elit Suite",
    tagline: "The flagship sanctuary of design, space, and privacy",
    description: "An extraordinary master residence featuring a separate living salon, designer dining nook, 5th floor ruby red theme, and bespoke concierge treatment.",
    sqft: "550 sq ft",
    bed: "Custom Plush King Suite Bed",
    capacity: "Max 3 Adults or 2 Adults + 2 Children",
    floorTheme: "5th Floor Ruby Red",
    floorColorHex: "#f43f5e",
    accentClass: "from-rose-500/20 to-transparent border-rose-500/30",
    priceStarting: "₹10,500 / night",
    image: REAL_PHOTOS.propertyInterior,
    amenities: ["Separate Living Lounge", "55\" 4K Smart TV", "Walk-in Dressing Closet", "Deep Soak Tub & Rain Shower", "VIP Airport Transfer Option", "Personal Host Service"]
  }
];

export const DINING_HIGHLIGHTS = {
  name: "NX Kitchen",
  subtitle: "A Culinary Sanctuary on EM Bypass",
  lounge: {
    title: "30-Seat Cocktail & Wine Lounge",
    aesthetic: "Black-and-gold motif with a striking cherry-red bar",
    description: "Step into an intimate lounge crafted for conversation, artisanal cocktails, imported wines, and curated small plates."
  },
  restaurant: {
    title: "32-Cover Fine Dining Room",
    aesthetic: "Ivory and gold sophistication with purple & blue accents",
    description: "Overseen by Corporate Chef Naresh Kumar, serving an expressive fusion of global classics, modern Indian gastronomy, and regional Bengali delicacies."
  },
  upcoming: [
    "Terrace Tandoor & Grill Lounge (Skyline dining experience coming soon)",
    "Ground-Floor Artisanal Café & Bakery (Fresh bakes & gourmet coffee)"
  ]
};

export const AMENITIES = [
  { icon: "Clock", title: "24-Hour Desk & Security", desc: "Attentive front desk host available day and night" },
  { icon: "Utensils", title: "In-Room Dining", desc: "Curated 24/7 menu from NX Kitchen" },
  { icon: "Wifi", title: "Gigabit High-Speed Wi-Fi", desc: "Seamless connectivity across all rooms & lounges" },
  { icon: "Car", title: "Valet & Private Parking", desc: "Secure on-site parking on EM Bypass corridor" },
  { icon: "Shirt", title: "Same-Day Express Laundry", desc: "Professional dry cleaning and pressing" },
  { icon: "Plane", title: "Airport Shuttle Concierge", desc: "Direct 25-min transfer to CCU International Airport" }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", title: "NX Elit Exterior Skyline", category: "property", imageUrl: REAL_PHOTOS.heroExterior, caption: "Boutique 4-star facade on EM Bypass" },
  { id: "g2", title: "Color-Coded Deluxe Room", category: "rooms", imageUrl: REAL_PHOTOS.roomColorInterior1, caption: "Designer interiors by Vinoo Chadha" },
  { id: "g3", title: "Emerald Green Floor Room", category: "rooms", imageUrl: REAL_PHOTOS.roomInteriorDetail2, caption: "Custom brass fittings and mood lighting" },
  { id: "g4", title: "Ruby Red Suite Bedroom", category: "rooms", imageUrl: REAL_PHOTOS.roomInteriorDetail3, caption: "5th floor luxury suite sanctuary" },
  { id: "g5", title: "NX Kitchen Cherry-Red Bar", category: "dining", imageUrl: REAL_PHOTOS.nxKitchenLounge, caption: "30-seat lounge with cherry-red bar counter" },
  { id: "g6", title: "NX Kitchen Restaurant", category: "dining", imageUrl: REAL_PHOTOS.nxKitchenRestaurant, caption: "32-cover dining in ivory and gold" },
  { id: "g7", title: "NX Kitchen Backsplash", category: "dining", imageUrl: REAL_PHOTOS.nxKitchenBacksplash, caption: "Intimate wine & lounge nook" },
  { id: "g8", title: "2,000 sq ft Banquet Space", category: "banquet", imageUrl: REAL_PHOTOS.banquetSpace, caption: "Versatile venue for corporate offsites & social events" },
  { id: "g9", title: "Lobby & Interior Sanctuary", category: "property", imageUrl: REAL_PHOTOS.propertyInterior, caption: "Curated boutique hospitality experience" }
];
