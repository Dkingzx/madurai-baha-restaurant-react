import React, { useState, useEffect, useMemo } from 'react';
import { 
  Utensils, 
  Flame, 
  Calendar, 
  Clock, 
  Phone, 
  MapPin, 
  Star, 
  ShoppingBag, 
  X, 
  Plus, 
  Minus, 
  CheckCircle, 
  Search, 
  Award, 
  MessageCircle, 
  Navigation,
  Play,
  RotateCcw,
  Sparkles,
  Download,
  FileCode,
  Check
} from 'lucide-react';

// Official Logo Image Asset
const LOGO_SRC = "/Gemini_Generated_Image_q6l1v9q6l1v9q6l1.png";

const INTRO_VIDEO_SRC = "/gemini_generated_video_2df878df.mp4";
// Dynamic video asset for Hero background
const HERO_VIDEO_SRC = "/gemini_generated_video_6d7c1a21.mp4";

const MENU_ITEMS = [
  {
    id: 'm1',
    name: 'Special Mutton Kari Dosa',
    category: 'Signature Dosa',
    type: 'non-veg',
    price: 280,
    rating: 4.9,
    reviews: 342,
    spiceLevel: 3,
    description: 'Thick soft tawa dosa layered with spicy minced mutton chukka, cracked pepper egg layer, and Madurai spices.',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800',
    popular: true,
    tags: ['Best Seller', 'Signature']
  },
  {
    id: 'm2',
    name: 'Chicken Kari Dosa',
    category: 'Signature Dosa',
    type: 'non-veg',
    price: 240,
    rating: 4.8,
    reviews: 210,
    spiceLevel: 2,
    description: 'Crispy layered tawa dosa laden with spicy shredded chicken minced gravy and whipped egg top.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800',
    popular: true,
    tags: ['Must Try']
  },
  {
    id: 'm3',
    name: 'Madurai Mutton Chukka',
    category: 'Chukka & Starters',
    type: 'non-veg',
    price: 340,
    rating: 4.95,
    reviews: 512,
    spiceLevel: 3,
    description: 'Tender baby goat cuts slow-cooked in hand-pounded shallots, garlic, dried red chillies, and ginger paste.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    popular: true,
    tags: ['Chef Special']
  },
  {
    id: 'm4',
    name: 'Spicy Chicken Chukka',
    category: 'Chukka & Starters',
    type: 'non-veg',
    price: 260,
    rating: 4.7,
    reviews: 189,
    spiceLevel: 3,
    description: 'Country chicken roast toss-fried with curry leaves, pepper powder, small onions, and cold-pressed sesame oil.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
    popular: false,
    tags: []
  },
  {
    id: 'm5',
    name: 'Charcoal Grill Chicken (Half)',
    category: 'Chukka & Starters',
    type: 'non-veg',
    price: 290,
    rating: 4.8,
    reviews: 275,
    spiceLevel: 2,
    description: 'Juicy chicken marinated in hung curd, Kashmiri chilli, and Madurai garam masala cooked over hot charcoal coals.',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800',
    popular: true,
    tags: ['Smoky']
  },
  {
    id: 'm6',
    name: 'Indo-Chinese Chilly Chicken',
    category: 'Chukka & Starters',
    type: 'non-veg',
    price: 250,
    rating: 4.6,
    reviews: 140,
    spiceLevel: 2,
    description: 'Crispy fried boneless chicken cubes tossed with bell peppers, onions, soy sauce, and slit green chillies.',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800',
    popular: false,
    tags: []
  },
  {
    id: 'm7',
    name: 'Classic Madurai Chicken 65',
    category: 'Chukka & Starters',
    type: 'non-veg',
    price: 230,
    rating: 4.85,
    reviews: 420,
    spiceLevel: 2,
    description: 'Deep-fried spicy chicken morsels tempered with curry leaves, crushed garlic, and whole red chillies.',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=800',
    popular: true,
    tags: ['Popular']
  },
  {
    id: 'm8',
    name: 'Crispy Southern Fried Chicken',
    category: 'Chukka & Starters',
    type: 'non-veg',
    price: 270,
    rating: 4.7,
    reviews: 98,
    spiceLevel: 1,
    description: 'Crispy herb-crusted chicken drumsticks served with hot garlic dip and fresh lemon slice.',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80&w=800',
    popular: false,
    tags: []
  },
  {
    id: 'm9',
    name: 'Famous Madurai Royal Jigarthanda',
    category: 'Desserts & Drinks',
    type: 'veg',
    price: 120,
    rating: 5.0,
    reviews: 890,
    spiceLevel: 0,
    description: 'Madurai iconic dessert beverage made from almond gum (Badam Pisini), condensed milk, nannari syrup, and handmade Basundi ice cream.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800',
    popular: true,
    tags: ['Iconic Madurai']
  },
  {
    id: 'm10',
    name: 'Chilled Elaneer Payasam',
    category: 'Desserts & Drinks',
    type: 'veg',
    price: 140,
    rating: 4.9,
    reviews: 310,
    spiceLevel: 0,
    description: 'Subtle and refreshing tender coconut pudding infused with cardamom and fresh coconut pulp.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    popular: true,
    tags: ['Cooling']
  },
  {
    id: 'm11',
    name: 'Madurai Seeraga Samba Mutton Biryani',
    category: 'Biryani & Meals',
    type: 'non-veg',
    price: 360,
    rating: 4.95,
    reviews: 730,
    spiceLevel: 2,
    description: 'Fragrant Seeraga Samba rice cooked dum style with succulent lamb pieces, woodpressed oil, and aromatic Tamil spices.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    popular: true,
    tags: ['Weekend Special']
  },
  {
    id: 'm12',
    name: 'Flaky Bun Parotta with Chicken Salna',
    category: 'Biryani & Meals',
    type: 'non-veg',
    price: 160,
    rating: 4.8,
    reviews: 620,
    spiceLevel: 3,
    description: '2 pcs soft, multi-layered golden bun parottas served with rich spicy street-style chicken gravy (Salna).',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800',
    popular: true,
    tags: ['Local Favorite']
  }
];

const GALLERY_IMAGES = [
  { id: 1, category: 'Ambiance', title: 'Royal Dark Dining Experience', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Food', title: 'Hot Sizzling Kari Dosa', url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Kitchen', title: 'Master Chef at Tawa Fire', url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'Food', title: 'Traditional Banana Leaf Feast', url: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'Ambiance', title: 'Private Dining Booths', url: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'Food', title: 'Seeraga Samba Dum Biryani', url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800' }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ranganathan S.',
    role: 'Food Critic & Blogger',
    comment: 'The Mutton Kari Dosa at Madurai Basha is unbeatable! Soft dosa base, generous spicy mutton chukka on top. Absolute gold standard.',
    rating: 5,
    date: '2 days ago'
  },
  {
    id: 2,
    name: 'Priya Sundaram',
    role: 'Local Resident',
    comment: 'Best Jigarthanda in town with thick basundi top. The full-screen intro video and dark gold ambiance in person are stunning.',
    rating: 5,
    date: '1 week ago'
  },
  {
    id: 3,
    name: 'Vikram K.',
    role: 'Traveler from Chennai',
    comment: 'Whenever I visit Madurai Meenakshi Temple, Basha Restaurant is my primary dining stop. Mutton Chukka and Bun Parotta are 10/10.',
    rating: 5,
    date: '3 weeks ago'
  }
];

export default function App() {
  // Intro Video State
  const [showIntro, setShowIntro] = useState(true);
  const [introStep, setIntroStep] = useState(0);

  // App UI State
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegFilter, setVegFilter] = useState('all');

  // Modal States
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [activeGalleryImage, setActiveGalleryImage] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState('All');
  

  // Reservation Form
  const [reservation, setReservation] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2',
    seating: 'AC Central Hall',
    notes: ''
  });

  useEffect(() => {
    if (!showIntro) return;

    const timer1 = setTimeout(() => setIntroStep(1), 1800);
    const timer2 = setTimeout(() => setIntroStep(2), 3800);
    const timer3 = setTimeout(() => {
      setShowIntro(false);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [showIntro]);


  
     
  const cartItemCount = useMemo(() =>
     cart.reduce((total, item) => total + item.quantity, 0), [cart]);
  const cartSubtotal = useMemo(() => 
    cart.reduce((total, item) => total + (item.price * item.quantity), 0), [cart]);
  const gstTax = Math.round(cartSubtotal * 0.05);
  const deliveryFee = cartSubtotal > 0 ? 40 : 0;
  const cartTotal = cartSubtotal + gstTax + deliveryFee;

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) => prev.map((item) => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    if (!reservation.name || !reservation.phone || !reservation.date) {
      return;
    }
    setReservationSuccess(true);
  };

  const filteredMenuItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVeg = vegFilter === 'all' || item.type === vegFilter;
      return matchesCategory && matchesSearch && matchesVeg;
    });
  }, [selectedCategory, searchQuery, vegFilter]);

  const filteredGallery = useMemo(() => {
    if (galleryFilter === 'All') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category === galleryFilter);
  }, [galleryFilter]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans antialiased selection:bg-[#d4af37] selection:text-black">
      
      {}
      {showIntro && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden transition-opacity duration-1000">
          <div className="absolute inset-0 z-0">
           
<div className="absolute inset-0 w-full h-full object-cover opacity-100">
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="w-full h-full object-cover"
  >
    <source src={INTRO_VIDEO_SRC} type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/30z-10"/>
</div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black animate-pulse opacity-80" />
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-ping opacity-30" />
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-red-600/15 rounded-full blur-3xl animate-pulse opacity-20" />
          </div>

          <div className="relative z-10 max-w-2xl px-6 text-center flex flex-col items-center">
            

            <div className={`relative transition-all duration-1000 transform ${introStep >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
             
            </div>

            <div className={`mt-8 space-y-2 transition-all duration-1000 delay-300 transform ${introStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-2xl sm:text-3xl font-serif text-amber-200 font-bold tracking-tight">
                Authentic Tamil Flavors • Since 1978
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm font-light max-w-md mx-auto">
                Hand-ground spices, hot tawa Kari Dosa, and slow-cooked mutton chukka awaits you.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => setShowIntro(false)}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b38b21] via-[#d4af37] to-[#f3cf65] text-black font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 hover:scale-105 transition-all flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-black" />
                Enter Restaurant
              </button>
            </div>

          </div>

          <button
            onClick={() => setShowIntro(false)}
            className="absolute bottom-6 right-6 text-xs text-gray-400 hover:text-amber-400 border border-neutral-800 hover:border-amber-500/40 px-4 py-2 rounded-full backdrop-blur-md bg-black/40 transition-all flex items-center gap-1.5"
          >
            Skip Intro
          </button>
        </div>
      )}

      {}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-amber-900/40 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-amber-500/30 p-1 flex items-center justify-center group-hover:border-amber-400 transition-colors shadow-md">
              <img 
                src={LOGO_SRC} 
                alt="Madurai Basha Emblem" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white block leading-tight font-serif">
                MADURAI <span className="text-[#d4af37]">BASHA</span>
              </span>
              <span className="text-[10px] tracking-widest text-amber-200/70 uppercase font-sans font-semibold block">
                Restaurant • Madurai
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-wider font-semibold text-gray-300">
            {['Home', 'Menu', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
           

            <button
              onClick={() => setShowIntro(true)}
              className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-gray-400 hover:text-amber-400 hover:border-amber-500/40 transition-all text-xs flex items-center gap-1.5"
              title="Replay Video Intro"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Intro</span>
            </button>

            <a
              href="#reservation"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs uppercase tracking-wider font-bold rounded-xl bg-amber-500/10 text-[#d4af37] border border-[#d4af37]/40 hover:bg-[#d4af37] hover:text-black transition-all shadow-sm"
            >
              Reserve Table
            </a>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-gray-200 hover:text-[#d4af37] hover:border-amber-500/40 transition-all"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-400 text-black font-extrabold text-[11px] flex items-center justify-center shadow-lg animate-bounce">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {}
      <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 px-4">
        
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="w-full h-full object-cover object-center"
>
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>

        <div className="absolute inset-0 bg-black/20 z-10" />

        <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8">
          
          <div className="w-32 sm:w-44 mx-auto mb-2 filter drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]">
            <img 
              src={LOGO_SRC} 
              alt="Madurai Basha Restaurant" 
              className="w-full h-auto object-contain mx-auto"
            />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-serif leading-[1.15] drop-shadow-md">
            Authentic Indian &amp; Tamil Nadu Flavors in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-yellow-200 to-[#b38b21]">Heart of Madurai</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-200 leading-relaxed font-light drop-shadow">
            Savor the legendary spice, tender slow-cooked meats, crispy flaky parottas, and signature Kari Dosa served with authentic Madurai hospitality since 1978.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#reservation"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#b38b21] via-[#d4af37] to-[#f3cf65] text-black font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700 font-bold text-xs uppercase tracking-widest hover:border-amber-500/50 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Utensils className="w-4 h-4 text-[#d4af37]" />
              View Full Menu
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 max-w-4xl mx-auto text-left border-t border-neutral-800/80 backdrop-blur-xs">
            <div className="p-3 bg-neutral-900/80 rounded-xl border border-neutral-800/90 shadow-lg">
              <span className="text-[#d4af37] font-bold text-base block">100% Authentic</span>
              <span className="text-gray-300 text-xs">Hand-ground spices daily</span>
            </div>
            <div className="p-3 bg-neutral-900/80 rounded-xl border border-neutral-800/90 shadow-lg">
              <span className="text-[#d4af37] font-bold text-base block">Iconic Kari Dosa</span>
              <span className="text-gray-300 text-xs">Mutton &amp; Chicken options</span>
            </div>
            <div className="p-3 bg-neutral-900/80 rounded-xl border border-neutral-800/90 shadow-lg">
              <span className="text-[#d4af37] font-bold text-base block">Royal Jigarthanda</span>
              <span className="text-gray-300 text-xs">Thick basundi top recipe</span>
            </div>
            <div className="p-3 bg-neutral-900/80 rounded-xl border border-neutral-800/90 shadow-lg">
              <span className="text-[#d4af37] font-bold text-base block">Banana Leaf</span>
              <span className="text-gray-300 text-xs">Traditional dining style</span>
            </div>
          </div>

        </div>
      </section>

      {}
      <section className="py-16 bg-[#070707] border-y border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Chef's Signature Selections</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">Featured Madurai Dishes</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#b38b21] to-[#d4af37] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MENU_ITEMS.filter(i => i.popular).slice(0, 3).map((dish) => (
              <div 
                key={dish.id} 
                className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#d4af37] border border-amber-500/30">
                    {dish.tags[0] || 'Popular'}
                  </div>
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    {dish.rating}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">{dish.name}</h3>
                    <span className="text-base font-bold text-[#d4af37]">₹{dish.price}</span>
                  </div>
                  <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">{dish.description}</p>
                  
                  <div className="pt-3 flex items-center justify-between border-t border-neutral-800">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 3 }).map((_, idx) => (
                        <Flame 
                          key={idx} 
                          className={`w-3.5 h-3.5 ${idx < dish.spiceLevel ? 'text-red-500 fill-red-500' : 'text-neutral-700'}`} 
                        />
                      ))}
                      <span className="text-[10px] text-gray-500 ml-1">Spiciness</span>
                    </div>

                    <button
                      onClick={() => addToCart(dish)}
                      className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-semibold text-xs transition-all flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Fresh From Tawa &amp; Oven</span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white mt-1">Our Grand Menu</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 bg-neutral-900/90 p-4 rounded-2xl border border-neutral-800">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Kari Dosa, Chukka, Biryani..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-black border border-neutral-800 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-amber-500/50"
            />
          </div>

          <div className="flex items-center gap-2 bg-black/60 p-1.5 rounded-xl border border-neutral-800 w-full md:w-auto justify-center">
            <button
              onClick={() => setVegFilter('all')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                vegFilter === 'all' ? 'bg-[#d4af37] text-black font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setVegFilter('veg')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                vegFilter === 'veg' ? 'bg-emerald-600 text-white font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              Veg Only
            </button>
            <button
              onClick={() => setVegFilter('non-veg')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                vegFilter === 'non-veg' ? 'bg-rose-600 text-white font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              Non-Veg
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {['All', 'Signature Dosa', 'Chukka & Starters', 'Biryani & Meals', 'Desserts & Drinks'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === cat 
                  ? 'bg-gradient-to-r from-[#b38b21] to-[#d4af37] text-black font-extrabold border-amber-400 shadow-md' 
                  : 'bg-neutral-900 text-gray-300 border-neutral-800 hover:border-neutral-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMenuItems.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col sm:flex-row bg-neutral-900/60 rounded-2xl overflow-hidden border border-neutral-800 hover:border-amber-500/40 transition-all p-4 gap-4 group"
            >
              <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">{item.name}</h3>
                    <span className="text-sm font-bold text-[#d4af37]">₹{item.price}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] bg-neutral-800 px-2 py-0.5 rounded text-gray-300 font-medium">
                    {item.category}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 py-1.5 rounded-lg bg-[#d4af37] text-black font-bold text-xs hover:scale-105 transition-transform flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="about" className="py-20 bg-gradient-to-b from-black via-neutral-950 to-black border-y border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Our Culinary Story</span>
              <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white leading-tight">
                Honoring Madurai's Centuries-Old Gastronomic Soul
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Madurai is India’s nocturnal food paradise. Established in 1978, <strong className="text-white">Madurai Basha Restaurant</strong> began as a tawa shop famed for thick Kari Dosa laden with hot mutton chukka and hand-crushed spices.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We slow-cook our gravies over wood fires and serve every meal on aromatic fresh banana leaves, staying true to our heritage recipes.
              </p>

              <div className="p-4 bg-neutral-900/80 rounded-2xl border border-amber-500/30 flex items-center gap-4">
                <img 
                  src={LOGO_SRC} 
                  alt="Madurai Basha Quality Seal" 
                  className="w-16 h-16 object-contain flex-shrink-0"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">Official Heritage Seal</h4>
                  <p className="text-xs text-gray-400">Guaranteed authentic taste prepared with pure ground spices.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
                alt="Chef at Tawa" 
                className="rounded-2xl object-cover h-64 w-full border border-neutral-800"
              />
              <img 
                src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=800" 
                alt="Banana Leaf Feast" 
                className="rounded-2xl object-cover h-64 w-full border border-neutral-800 mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="gallery" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Visual Gallery</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mt-1">Inside Madurai Basha</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((img) => (
            <div 
              key={img.id}
              onClick={() => setActiveGalleryImage(img)}
              className="group relative h-60 rounded-2xl overflow-hidden cursor-pointer border border-neutral-800 hover:border-amber-500/50"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-[10px] font-semibold text-[#d4af37] uppercase tracking-wider">{img.category}</span>
                <h4 className="text-white font-bold text-sm">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="testimonials" className="py-20 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Guest Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mt-1">Loved by Food Lovers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review) => (
              <div key={review.id} className="bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800 space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-xs leading-relaxed italic">"{review.comment}"</p>
                <div className="pt-3 border-t border-neutral-800 flex justify-between items-center text-xs">
                  <div>
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <span className="text-gray-500 text-[10px]">{review.role}</span>
                  </div>
                  <span className="text-gray-500 text-[10px]">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="reservation" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <div className="w-20 mx-auto mb-2">
              <img src={LOGO_SRC} alt="Emblem" className="w-full h-auto object-contain" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Reserve Your Spot</span>
            <h2 className="text-3xl font-bold font-serif text-white">Book a Table</h2>
          </div>

          <form onSubmit={handleReservationSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] font-medium text-gray-300 uppercase tracking-wider mb-1.5">Full Name *</label>
              <input 
                type="text" 
                required
                placeholder="Ramesh Kumar"
                value={reservation.name}
                onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black border border-neutral-800 text-white text-xs focus:outline-none focus:border-amber-500/50"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-300 uppercase tracking-wider mb-1.5">Phone Number *</label>
              <input 
                type="tel" 
                required
                placeholder="+91 98765 43210"
                value={reservation.phone}
                onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black border border-neutral-800 text-white text-xs focus:outline-none focus:border-amber-500/50"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-300 uppercase tracking-wider mb-1.5">Date *</label>
              <input 
                type="date" 
                required
                value={reservation.date}
                onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black border border-neutral-800 text-white text-xs focus:outline-none focus:border-amber-500/50"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-300 uppercase tracking-wider mb-1.5">Time</label>
              <select
                value={reservation.time}
                onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black border border-neutral-800 text-white text-xs focus:outline-none focus:border-amber-500/50"
              >
                <option value="12:30">12:30 PM (Lunch)</option>
                <option value="13:30">01:30 PM (Lunch)</option>
                <option value="19:30">07:30 PM (Dinner)</option>
                <option value="20:30">08:30 PM (Dinner)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#b38b21] via-[#d4af37] to-[#f3cf65] text-black font-extrabold text-xs uppercase tracking-widest shadow-lg hover:scale-[1.01] transition-all"
              >
                Confirm Table Reservation
              </button>
            </div>
          </form>
        </div>
      </section>

      {}
      <section id="contact" className="py-20 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Location &amp; Timings</span>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mt-1">Visit Us in Madurai</h2>
              </div>

              <div className="space-y-4 text-xs text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <p>#42 West Veli Street, Near Meenakshi Temple West Tower, Madurai, Tamil Nadu 625001, India</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <p>+91 94433 12345 / +91 0452 2345678</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <p>Open Daily: 11:00 AM – 11:30 PM</p>
                </div>
              </div>

              <a
                href="https://wa.me/919443312345?text=Hello%20Madurai%20Basha%20Restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Chat &amp; Order on WhatsApp
              </a>
            </div>

            <div className="h-80 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 relative flex items-center justify-center p-6 text-center">
              <div className="space-y-2">
                <Navigation className="w-8 h-8 text-[#d4af37] mx-auto animate-bounce" />
                <h3 className="text-white font-bold text-sm">Madurai Central Branch</h3>
                <p className="text-gray-400 text-xs">2 Mins from Meenakshi Amman Temple Tower</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-black py-10 border-t border-neutral-900 text-center text-gray-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <img src={LOGO_SRC} alt="Madurai Basha" className="w-8 h-8 object-contain" />
            <span className="text-white font-serif font-bold text-sm">Madurai Basha Restaurant</span>
          </div>

        

          <p>© {new Date().getFullYear()} Madurai Basha Restaurant. All Rights Reserved. Since 1978.</p>
        </div>
      </footer>

      {}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div onClick={() => setIsCartOpen(false)} className="absolute inset-0 bg-black/70 backdrop-blur-xs" />
          <div className="relative w-full max-w-md bg-neutral-900 h-full shadow-2xl flex flex-col z-10 border-l border-neutral-800">
            <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
                <h3 className="text-lg font-bold text-white">Your Food Order</h3>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-1 rounded-lg text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-10 text-xs">Your cart is currently empty.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-black border border-neutral-800">
                    <div>
                      <h4 className="text-white font-semibold text-xs">{item.name}</h4>
                      <span className="text-amber-400 font-bold text-xs">₹{item.price * item.quantity}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-neutral-900 px-2 py-1 rounded-lg border border-neutral-800">
                      <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-400 hover:text-white"><Minus className="w-3 h-3" /></button>
                      <span className="text-white font-bold text-xs">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-400 hover:text-white"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-5 border-t border-neutral-800 bg-black space-y-3">
                <div className="flex justify-between text-sm font-bold text-white">
                  <span>Total Payable:</span>
                  <span className="text-[#d4af37]">₹{cartTotal}</span>
                </div>
                <button
                  onClick={() => {
                    setOrderSuccess(true);
                    setCart([]);
                  }}
                  className="w-full py-3 rounded-xl bg-[#d4af37] text-black font-extrabold text-xs uppercase tracking-wider"
                >
                  Place Order
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {}
      {reservationSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-amber-500/30 rounded-3xl p-6 max-w-sm w-full text-center space-y-4">
            <CheckCircle className="w-12 h-12 text-[#d4af37] mx-auto" />
            <h3 className="text-xl font-bold font-serif text-white">Table Reserved!</h3>
            <p className="text-gray-300 text-xs">
              Thank you, {reservation.name}. We look forward to welcoming you on {reservation.date} at {reservation.time}.
            </p>
            <button onClick={() => setReservationSuccess(false)} className="w-full py-2.5 rounded-xl bg-[#d4af37] text-black font-bold text-xs">
              Close
            </button>
          </div>
        </div>
      )}

      {orderSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-emerald-500/30 rounded-3xl p-6 max-w-sm w-full text-center space-y-4">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-bold font-serif text-white">Order Sent to Kitchen!</h3>
            <p className="text-gray-300 text-xs">Your authentic Madurai delicacies are being prepared.</p>
            <button onClick={() => { setOrderSuccess(false); setIsCartOpen(false); }} className="w-full py-2.5 rounded-xl bg-emerald-500 text-black font-bold text-xs">
              Done
            </button>
          </div>
        </div>
      )}

      {activeGalleryImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-2xl w-full">
            <button onClick={() => setActiveGalleryImage(null)} className="absolute -top-10 right-0 text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            <img src={activeGalleryImage.url} alt={activeGalleryImage.title} className="w-full h-auto max-h-[75vh] object-contain rounded-2xl border border-neutral-800" />
            <div className="mt-2 text-center">
              <h4 className="text-white font-bold text-sm">{activeGalleryImage.title}</h4>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}