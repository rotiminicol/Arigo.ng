  "use client"

  import { useState, useEffect, useRef } from "react"
  import { Link } from "react-router-dom";
  import { motion, AnimatePresence } from "framer-motion"
  import {
    Search,
    ShoppingCart,
    ChevronRight,
    Mic,
    Star,
    Heart,
    Award,
    Gamepad,
    Cpu,
    ArrowRight,
    ChevronDown,
    ChevronLeft,
    Menu,
    X,
    User,
    Clock,
    Zap,
    Gift,
    Headphones,
    GamepadIcon as Controller,
    Disc,
    CheckCircle,
    Sparkle,
  } from "lucide-react"

  // Game consoles data
  const consoles = [
    {
      id: 1,
      name: "PlayStation 5",
      image: "/images/ps5.jpg",
      price: "₦650,000",
      description:
        "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with haptic feedback, adaptive triggers, and 3D Audio.",
      category: "Consoles",
      brand: "Sony",
      rating: 4.9,
      tag: "Best Seller",
      discount: "5%",
    },
    {
      id: 2,
      name: "Xbox Series X",
      image: "/images/xbox.jpg",
      price: "₦550,000",
      description:
        "The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power.",
      category: "Consoles",
      brand: "Microsoft",
      rating: 4.8,
      tag: "Hot",
      discount: "8%",
    },
    {
      id: 3,
      name: "Nintendo Switch OLED",
      image: "/images/switch.jpg",
      price: "₦320,000",
      description:
        "Featuring a vibrant 7-inch OLED screen, a wide adjustable stand, enhanced audio, and 64 GB of internal storage.",
      category: "Consoles",
      brand: "Nintendo",
      rating: 4.7,
      tag: "New",
      discount: "",
    },
    {
      id: 4,
      name: "Sega Genesis Mini",
      image: "/images/sega.jpg",
      price: "₦75,000",
      description:
        "Relive the glory days with this miniature version of the iconic Sega Genesis console, pre-loaded with 42 legendary games.",
      category: "Retro",
      brand: "Sega",
      rating: 4.6,
      tag: "Classic",
      discount: "15%",
    },
    {
      id: 5,
      name: "Game Boy Color",
      image: "/images/gameboy.jpg",
      price: "₦45,000",
      description:
        "The classic handheld gaming device that revolutionized portable gaming. Includes classic games and colorful display.",
      category: "Retro",
      brand: "Nintendo",
      rating: 4.5,
      tag: "Vintage",
      discount: "",
    },
    {
      id: 6,
      name: "PlayStation 4 Pro",
      image: "/images/ps4.jpg",
      price: "₦280,000",
      description: "Spectacular graphics, enhanced gameplay, and unrivaled power with 4K gaming and HDR technology.",
      category: "Consoles",
      brand: "Sony",
      rating: 4.7,
      tag: "",
      discount: "20%",
    },
  ]

  // Games data
  const games = [
    {
      id: 1,
      name: "FIFA 24",
      image: "/images/fifa24.jpg",
      price: "₦45,000",
      description:
        "Experience the beautiful game like never before with HyperMotion technology, machine learning, and more realistic player movements.",
      category: "Sports",
      platform: "Multi-platform",
      rating: 4.8,
      tag: "New Release",
      discount: "",
    },
    {
      id: 2,
      name: "WWE 2K24",
      image: "/images/wwe2k24.jpg",
      price: "₦40,000",
      description:
        "Step into the ring with the most authentic WWE gaming experience to date, featuring your favorite Superstars and Legends.",
      category: "Sports",
      platform: "Multi-platform",
      rating: 4.7,
      tag: "Hot",
      discount: "10%",
    },
    {
      id: 3,
      name: "Sonic Frontiers",
      image: "/images/sonic.jpg",
      price: "₦35,000",
      description:
        "Join Sonic in his newest high-speed adventure as he explores a vibrant and expansive world filled with action, challenges, and mysteries.",
      category: "Adventure",
      platform: "Multi-platform",
      rating: 4.5,
      tag: "",
      discount: "15%",
    },
    {
      id: 4,
      name: "The Legend of Zelda: Tears of the Kingdom",
      image: "/images/zelda.jpg",
      price: "₦38,000",
      description:
        "Embark on an epic adventure across the land and skies of Hyrule in this breathtaking sequel to Breath of the Wild.",
      category: "Adventure",
      platform: "Nintendo Switch",
      rating: 4.9,
      tag: "Best Seller",
      discount: "",
    },
  ]

  // Accessories data
  const accessories = [
    {
      id: 1,
      name: "Elite Gaming Headset Pro",
      image: "/images/headset.jpg",
      price: "₦75,000",
      description:
        "Immerse yourself in crystal-clear audio with this premium gaming headset featuring 7.1 surround sound and noise-cancelling microphone.",
      category: "Audio",
      brand: "Razer",
      rating: 4.9,
      tag: "Best Seller",
      discount: "",
    },
    {
      id: 2,
      name: "Ultra Gaming Mouse RGB",
      image: "/images/mouse.jpg",
      price: "₦45,000",
      description:
        "Precision gaming mouse with 16,000 DPI optical sensor, customizable RGB lighting, and 8 programmable buttons.",
      category: "Peripherals",
      brand: "Logitech",
      rating: 4.7,
      tag: "New",
      discount: "5%",
    },
    {
      id: 3,
      name: "Mechanical Gaming Keyboard",
      image: "/images/keyboard.jpg",
      price: "₦65,000",
      description:
        "Responsive mechanical keyboard with customizable RGB backlighting, anti-ghosting, and durable construction for intense gaming sessions.",
      category: "Peripherals",
      brand: "Corsair",
      rating: 4.8,
      tag: "",
      discount: "12%",
    },
    {
      id: 4,
      name: "Gaming Chair Ergonomic",
      image: "/images/chair.jpg",
      price: "₦120,000",
      description:
        "Premium gaming chair with ergonomic design, adjustable armrests, lumbar support, and premium materials for maximum comfort during long gaming sessions.",
      category: "Furniture",
      brand: "DXRacer",
      rating: 4.6,
      tag: "Hot",
      discount: "8%",
    },
  ]

  // Featured collections
  const featuredCollections = [
    {
      id: 1,
      title: "PlayStation Collection",
      image: "/images/ps-collection.jpg",
      items: 24,
      color: "from-blue-600 to-indigo-800",
    },
    {
      id: 2,
      title: "Xbox Essentials",
      image: "/images/xbox-collection.jpg",
      items: 18,
      color: "from-green-600 to-green-800",
    },
    {
      id: 3,
      title: "Nintendo World",
      image: "/images/nintendo-collection.jpg",
      items: 32,
      color: "from-red-600 to-red-800",
    },
    {
      id: 4,
      title: "Retro Gaming",
      image: "/images/retro-collection.jpg",
      items: 45,
      color: "from-purple-600 to-purple-800",
    },
  ]

  // Limited time deals
  const limitedTimeDeals = [
    {
      id: 1,
      name: "PlayStation 5 DualSense Controller",
      image: "/images/dualsense.jpg",
      originalPrice: "₦65,000",
      salePrice: "₦45,000",
      discount: "30%",
      endTime: "2023-12-31",
    },
    {
      id: 2,
      name: "Gaming PC RTX 4070",
      image: "/images/gaming-pc.jpg",
      originalPrice: "₦1,200,000",
      salePrice: "₦950,000",
      discount: "20%",
      endTime: "2023-12-25",
    },
    {
      id: 3,
      name: "Nintendo Switch Sports Bundle",
      image: "/images/switch-sports.jpg",
      originalPrice: "₦85,000",
      salePrice: "₦65,000",
      discount: "25%",
      endTime: "2023-12-28",
    },
  ]

  // Main categories
  const mainCategories = [
    { name: "All", icon: <Gamepad size={20} /> },
    { name: "Consoles", icon: <Controller size={20} /> },
    { name: "Games", icon: <Disc size={20} /> },
    { name: "PC Gaming", icon: <Cpu size={20} /> },
    { name: "Accessories", icon: <Headphones size={20} /> },
    { name: "Retro", icon: <Gift size={20} /> },
  ]

  // Product card component
  const ProductCard = ({ product, featured = false }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <motion.div
        className={`bg-white rounded-xl shadow-md overflow-hidden ${featured ? "h-full" : ""}`}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative">
          <div className="w-full h-56 relative bg-gray-100">
            <img
              src={product.image || "/placeholder.svg?height=300&width=300&text=Gaming+Product"}
              alt={product.name}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
          <motion.button
            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
            whileHover={{ scale: 1.1, backgroundColor: "#f8fafc" }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart size={20} className="text-gray-500 hover:text-red-500 transition-colors" />
          </motion.button>
          {product.tag && (
            <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {product.tag}
            </span>
          )}
          {product.discount && (
            <span className="absolute bottom-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              -{product.discount}
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-1">{product.name}</h3>
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>

          <AnimatePresence>
            {isHovered && featured && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm text-gray-600 mb-3 overflow-hidden"
              >
                {product.description}
              </motion.p>
            )}
          </AnimatePresence>

          <div className="flex justify-between items-center">
            <p className="font-bold text-xl text-green-700">{product.price}</p>
            <motion.button
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart size={18} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    )
  }

  // Deal card component
  const DealCard = ({ deal }) => {
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })

    useEffect(() => {
      const calculateTimeLeft = () => {
        const difference = new Date(deal.endTime).getTime() - new Date().getTime()

        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          })
        }
      }

      calculateTimeLeft()
      const timer = setInterval(calculateTimeLeft, 1000)

      return () => clearInterval(timer)
    }, [deal.endTime])

    return (
      <motion.div
        className="bg-white rounded-xl shadow-md overflow-hidden"
        whileHover={{
          scale: 1.03,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <div className="w-full h-48 relative bg-gray-100">
            <img
              src={deal.image || "/placeholder.svg?height=300&width=300&text=Deal"}
              alt={deal.name}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>
          <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {deal.discount} OFF
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">{deal.name}</h3>
          <div className="flex items-center mb-3">
            <p className="font-bold text-xl text-green-700">{deal.salePrice}</p>
            <p className="text-sm text-gray-500 line-through ml-2">{deal.originalPrice}</p>
          </div>

          <div className="flex space-x-2 mb-3">
            <div className="bg-gray-100 rounded p-1 text-center flex-1">
              <span className="block text-lg font-bold">{timeLeft.days}</span>
              <span className="text-xs text-gray-500">Days</span>
            </div>
            <div className="bg-gray-100 rounded p-1 text-center flex-1">
              <span className="block text-lg font-bold">{timeLeft.hours}</span>
              <span className="text-xs text-gray-500">Hours</span>
            </div>
            <div className="bg-gray-100 rounded p-1 text-center flex-1">
              <span className="block text-lg font-bold">{timeLeft.minutes}</span>
              <span className="text-xs text-gray-500">Mins</span>
            </div>
            <div className="bg-gray-100 rounded p-1 text-center flex-1">
              <span className="block text-lg font-bold">{timeLeft.seconds}</span>
              <span className="text-xs text-gray-500">Secs</span>
            </div>
          </div>

          <motion.button
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Buy Now
          </motion.button>
        </div>
      </motion.div>
    )
  }

  // Collection card component
  const CollectionCard = ({ collection }) => {
    return (
      <motion.div
        className="relative rounded-xl overflow-hidden h-48"
        whileHover={{
          scale: 1.03,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r opacity-90 z-10"
          style={{
            backgroundImage: `linear-gradient(to right, ${collection.color.split(" ")[1]}, ${collection.color.split(" ")[3]})`,
          }}
        ></div>
        <img
          src={collection.image || "/placeholder.svg?height=300&width=300&text=Collection"}
          alt={collection.title}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
          <h3 className="text-white text-xl font-bold mb-1">{collection.title}</h3>
          <p className="text-white text-sm opacity-90">{collection.items} Products</p>
          <motion.button
            className="mt-3 bg-white text-gray-800 px-4 py-2 rounded-lg font-medium inline-block w-max"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Collection
          </motion.button>
        </div>
      </motion.div>
    )
  }

  // Expandable section component
  const ExpandableSection = ({ title, children }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
      <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
        <button
          className="w-full flex justify-between items-center p-4 bg-green-50 hover:bg-green-100 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <ChevronDown
            size={20}
            className={`text-gray-600 transition-transform duration-300 ${isExpanded ? "transform rotate-180" : ""}`}
          />
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 bg-white">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  export default function GamingMarketplace() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const heroRef = useRef(null)

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Filter products based on active category
    const filteredProducts =
      activeCategory === "All"
        ? [...consoles, ...games, ...accessories].slice(0, 8)
        : activeCategory === "Consoles"
          ? consoles
          : activeCategory === "Games"
            ? games
            : activeCategory === "Accessories"
              ? accessories
              : activeCategory === "PC Gaming"
                ? [...accessories].filter((item) => item.category === "Peripherals")
                : [...consoles, ...games].filter((item) => item.category === "Retro")

    return (
      <div className="bg-gray-50 min-h-screen">
                {/* Navigation Bar */}
                <header
          className={`fixed w-full z-50 transition-all duration-500 ${
            isScrolled ? "py-2 bg-gradient-to-r from-green-800 to-emerald-800 shadow-xl" : "py-4 bg-gradient-to-r from-green-700 to-emerald-700"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              {/* Back Button (Visible on mobile) */}
              <motion.button
                onClick={() => window.history.back()}
                className="md:hidden flex items-center"
                whileHover={{ x: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={24} className="text-white" />
                <span className="sr-only">Back</span>
              </motion.button>

              {/* Logo/Title - Centered on mobile */}
              <motion.div 
                className="flex items-center justify-center md:justify-start flex-1 md:flex-none"
                whileHover={{ scale: 1.02 }}
              >
                <Link href="/" className="flex items-center space-x-2 group">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Gamepad size={28} className="text-white group-hover:text-yellow-300 transition-colors" />
                  </motion.div>
                  <motion.h1 
                    className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Gaming Hub
                  </motion.h1>
                </Link>
              </motion.div>

              {/* Search Bar - Hidden on mobile */}
              <motion.div 
                className="hidden md:flex items-center bg-green-600/80 hover:bg-green-600 rounded-full px-4 py-2 flex-grow max-w-md mx-6 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <Search size={20} className="text-green-200 mr-2" />
                <input
                  type="text"
                  placeholder="Search games, consoles, accessories..."
                  className="bg-transparent border-none outline-none text-white placeholder-green-200 w-full"
                />
                <motion.button 
                  className="ml-2 text-green-200 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mic size={18} />
                </motion.button>
              </motion.div>

              {/* Action Icons */}
              <div className="flex items-center space-x-4">
                {/* Wishlist */}
                <motion.div 
                  className="relative"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <button className="text-white p-2 rounded-full hover:bg-green-600/50 transition-colors">
                    <Heart size={24} className="hover:fill-current" />
                  </button>
                  <motion.span 
                    className="absolute -top-1 -right-1 bg-yellow-400 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    3
                  </motion.span>
                </motion.div>

                {/* Cart */}
                <motion.div 
                  className="relative"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <button className="text-white p-2 rounded-full hover:bg-green-600/50 transition-colors">
                    <ShoppingCart size={24} />
                  </button>
                  <motion.span 
                    className="absolute -top-1 -right-1 bg-yellow-400 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                  >
                    5
                  </motion.span>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button 
                  className="md:hidden text-white p-2 rounded-full hover:bg-green-600/50"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isMenuOpen ? (
                    <X size={24} className="text-white" />
                  ) : (
                    <Menu size={24} className="text-white" />
                  )}
                </motion.button>
              </div>
            </div>

            {/* Mobile Search - Appears when menu is open */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 md:hidden"
                >
                  <div className="flex items-center bg-green-600/80 rounded-full px-4 py-2">
                    <Search size={20} className="text-green-200 mr-2" />
                    <input
                      type="text"
                      placeholder="Search gaming products..."
                      className="bg-transparent border-none outline-none text-white placeholder-green-200 w-full"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>

                {/* Mobile Menu */}
                <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { type: 'spring', damping: 25, stiffness: 300 }
              }}
              exit={{ 
                opacity: 0, 
                y: -30,
                transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
              }}
              className="fixed top-16 left-0 right-0 bg-gradient-to-b from-green-800 to-green-900 shadow-2xl z-40 md:hidden"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="container mx-auto px-4 py-3"
              >
                {/* Search with floating label effect */}
                <motion.div 
                  className="relative mb-6"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder=" "
                      className="w-full bg-green-700/50 backdrop-blur-sm text-white border border-green-600/30 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent peer"
                      onFocus={(e) => e.target.placeholder = "Search gaming products..."}
                      onBlur={(e) => e.target.placeholder = " "}
                    />
                    <label className="absolute left-12 top-3 text-green-200 text-sm transition-all duration-200 transform -translate-y-7 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">
                      Search products
                    </label>
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-300" size={20} />
                  </div>
                </motion.div>

                {/* Category list with staggered animations */}
                <motion.div 
                  className="space-y-2 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {mainCategories.map((category, index) => (
                    <motion.button
                      key={category.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ 
                        x: 0, 
                        opacity: 1,
                        transition: { 
                          delay: 0.2 + index * 0.05,
                          type: 'spring', 
                          stiffness: 300 
                        }
                      }}
                      exit={{ opacity: 0 }}
                      onClick={() => {
                        setActiveCategory(category.name)
                        setIsMenuOpen(false)
                      }}
                      className={`flex items-center space-x-3 w-full py-3 px-4 rounded-xl transition-all duration-200 ${
                        activeCategory === category.name 
                          ? "bg-green-600/80 shadow-md" 
                          : "hover:bg-green-700/60"
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-green-300">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                      <ChevronRight className="ml-auto text-green-300 opacity-70" size={18} />
                    </motion.button>
                  ))}

                  {/* Auth section with subtle divider */}
                  <motion.div 
                    className="pt-4 mt-4 border-t border-green-700/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.4 } }}
                  >
                    <motion.button 
                      className="flex items-center space-x-3 w-full py-3 px-4 rounded-xl hover:bg-green-700/60 transition-colors duration-200"
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <User size={20} className="text-green-300" />
                      <span className="font-medium">Sign In / Register</span>
                      <ArrowRight className="ml-auto text-green-300 opacity-70" size={16} />
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-teal-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

              {/* Hero Section */}
        <motion.section
          ref={heroRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white pt-24 p-8 md:p-16 overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-600 rounded-full filter blur-[100px] opacity-20 animate-float-slow" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-500 rounded-full filter blur-[100px] opacity-15 animate-float-medium" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-200">
                      Ultimate Gaming
                    </span>
                    <br />
                    <span className="text-white">Experience Awaits</span>
                  </motion.h1>
                  
                  <motion.p
                    className="text-green-100 mb-8 text-lg md:text-xl max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Discover premium consoles, games, and accessories at unbeatable prices. 
                    <span className="block mt-2 text-green-200 font-medium">
                      Exclusive deals for members - join today!
                    </span>
                  </motion.p>
                  
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <motion.button
                      className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-300 text-green-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Shop Now <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                    
                    <motion.button
                      className="relative overflow-hidden border-2 border-green-300 hover:border-green-200 bg-green-700/30 hover:bg-green-700/50 px-8 py-4 rounded-xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center gap-2 text-white">
                        Gaming Deals <Sparkle size={18} className="text-yellow-300 transition-transform group-hover:scale-110" />
                      </span>
                      <span className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="md:w-1/2 flex justify-center relative"
              >
                <div className="relative w-full max-w-xl">
                  {/* Floating console elements */}
                  <motion.img
                    src="/images/ps5-floating.png"
                    alt="PS5"
                    className="absolute -top-10 -left-10 w-24 h-24 object-contain drop-shadow-lg"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.img
                    src="/images/xbox-floating.png"
                    alt="Xbox"
                    className="absolute -bottom-5 -right-5 w-20 h-20 object-contain drop-shadow-lg"
                    initial={{ y: 0 }}
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  
                  {/* Main hero image with 3D effect */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-green-500/20 rounded-2xl transform rotate-2 scale-105 blur-md" />
                    <img
                      src="/images/hero-gaming.jpg"
                      alt="Gaming Setup"
                      width={600}
                      height={400}
                      className="relative rounded-2xl shadow-2xl object-cover border-2 border-green-300/30 transform transition-transform hover:scale-[1.02] duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Categories */}
        <motion.div 
          className="container mx-auto py-12 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative">
            {/* Animated scroll hint */}
            <motion.div 
              className="absolute -top-8 left-0 right-0 flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="text-green-500" size={24} />
            </motion.div>
            
            <div className="relative overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-green-100">
              <div className="flex gap-3 px-1">
                {mainCategories.map((category, index) => (
                  <motion.button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`flex items-center space-x-3 px-6 py-3 rounded-xl whitespace-nowrap transition-all duration-300 ${
                      activeCategory === category.name
                        ? "bg-gradient-to-br from-green-600 to-green-500 text-white shadow-lg"
                        : "bg-white hover:bg-green-50 text-gray-700 shadow-md hover:shadow-lg"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={`transition-colors ${activeCategory === category.name ? 'text-white' : 'text-green-500'}`}>
                      {category.icon}
                    </span>
                    <span className="font-medium">{category.name}</span>
                    {activeCategory === category.name && (
                      <motion.span 
                        className="ml-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                      >
                        <CheckCircle className="text-yellow-300" size={18} />
                      </motion.span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Collections */}
        <motion.section 
          className="container mx-auto py-12 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-4 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
                Featured
              </span> Collections
            </motion.h2>
            
            <motion.button
              className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              View All Collections
              <ArrowRight 
                size={20} 
                className="transition-transform group-hover:translate-x-1 group-hover:text-green-500" 
              />
            </motion.button>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {featuredCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <CollectionCard collection={collection} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

       {/* Featured Products */}
<motion.section
  className="container mx-auto py-12 px-4 relative"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, margin: "-100px" }}
>
  {/* Animated background gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-green-100/20 to-transparent rounded-3xl -z-10" />
  
  <div className="flex flex-col md:flex-row justify-between items-center mb-10">
    <motion.h2
      className="text-4xl font-extrabold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      {activeCategory === "All" ? "Featured Gaming Products" : `${activeCategory}`}
    </motion.h2>
    
    <motion.button
      className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 shadow-md"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.95 }}
    >
      View All <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
    </motion.button>
  </div>

  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ staggerChildren: 0.1 }}
    viewport={{ once: true }}
  >
    {filteredProducts.map((product, index) => (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        whileHover={{ y: -10, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)" }}
      >
        <ProductCard product={product} featured={true} />
      </motion.div>
    ))}
  </motion.div>
</motion.section>

{/* Limited Time Deals */}
<motion.section
  className="bg-gradient-to-br from-green-100 to-green-50 py-16 mt-12 relative overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, margin: "-100px" }}
>
  {/* Floating decorative elements */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full filter blur-[120px] opacity-20 animate-float-slow" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-[120px] opacity-15 animate-float-medium" />

  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center mb-10">
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Clock className="text-red-600 mr-3" size={28} />
        </motion.div>
        <h2 className="text-4xl font-extrabold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
          Limited Time Deals
        </h2>
      </motion.div>

      <motion.button
        className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 shadow-md"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        View All <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
      </motion.button>
    </div>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true }}
    >
      {limitedTimeDeals.map((deal, index) => (
        <motion.div
          key={deal.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          whileHover={{ y: -10, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)" }}
        >
          <DealCard deal={deal} />
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.section>

{/* Expandable Information Sections */}
<motion.section
  className="container mx-auto py-16 px-4 relative"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, margin: "-100px" }}
>
  <motion.h2
    className="text-4xl font-extrabold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 mb-10 text-center"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Gaming Information
  </motion.h2>

  <motion.div
    className="space-y-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ staggerChildren: 0.2 }}
    viewport={{ once: true }}
  >
    <ExpandableSection title="Latest Gaming Consoles">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-600 leading-relaxed">
          Discover the newest gaming consoles from top brands like Sony PlayStation, Microsoft Xbox, and Nintendo.
          Experience next-generation gaming with cutting-edge graphics, faster load times, and immersive gameplay.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["PlayStation 5", "Xbox Series X", "Nintendo Switch OLED"].map((console, index) => (
            <motion.div
              key={console}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h4 className="font-semibold text-lg text-gray-800 mb-3">{console}</h4>
              <p className="text-sm text-gray-600">
                {console === "PlayStation 5"
                  ? "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with haptic feedback, adaptive triggers, and 3D Audio."
                  : console === "Xbox Series X"
                  ? "The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power."
                  : "Featuring a vibrant 7-inch OLED screen, a wide adjustable stand, enhanced audio, and 64 GB of internal storage."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ExpandableSection>

    <ExpandableSection title="Popular Game Titles">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-600 leading-relaxed">
          Stay up-to-date with the most popular and newest game releases across all platforms. From action-packed
          adventures to sports simulations, we have games for every type of player.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["FIFA 24", "WWE 2K24", "Sonic Frontiers", "The Legend of Zelda"].map((game, index) => (
            <motion.div
              key={game}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h4 className="font-semibold text-lg text-gray-800 mb-3">{game}</h4>
              <p className="text-sm text-gray-600">
                {game === "FIFA 24"
                  ? "Experience the beautiful game like never before with HyperMotion technology and more realistic player movements."
                  : game === "WWE 2K24"
                  ? "Step into the ring with the most authentic WWE gaming experience featuring your favorite Superstars and Legends."
                  : game === "Sonic Frontiers"
                  ? "Join Sonic in his newest high-speed adventure as he explores a vibrant and expansive world."
                  : "Embark on an epic adventure across the land and skies of Hyrule in this breathtaking sequel."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ExpandableSection>

    <ExpandableSection title="Retro Gaming Collection">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-600 leading-relaxed">
          Rediscover the magic of classic gaming with our extensive retro collection. From the Sega Genesis to the
          original Game Boy, we have everything you need to relive the golden age of gaming.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Sega Genesis Mini", "Game Boy Color", "NES Classic Edition"].map((retro, index) => (
            <motion.div
              key={retro}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h4 className="font-semibold text-lg text-gray- HAB mb-3">{retro}</h4>
              <p className="text-sm text-gray-600">
                {retro === "Sega Genesis Mini"
                  ? "Relive the glory days with this miniature version of the iconic Sega Genesis console, pre-loaded with 42 legendary games."
                  : retro === "Game Boy Color"
                  ? "The classic handheld gaming device that revolutionized portable gaming. Includes classic games and colorful display."
                  : "A miniaturized version of the groundbreaking NES, pre-loaded with 30 classic games including Super Mario Bros. and The Legend of Zelda."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ExpandableSection>
  </motion.div>
</motion.section>

{/* Features Section */}
<motion.section
  className="container mx-auto py-16 px-4 relative"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, margin: "-100px" }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 to-transparent rounded-3xl -z-10" />
  
  <motion.div
    className="grid grid-cols-1 md:grid-cols-3 gap-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ staggerChildren: 0.2 }}
    viewport={{ once: true }}
  >
    {[
      {
        icon: <Award className="text-green-600" size={28} />,
        title: "Quality Guaranteed",
        description: "All gaming products are authentic with manufacturer warranty and after-sales support.",
      },
      {
        icon: <Gamepad className="text-green-600" size={28} />,
        title: "Gaming Community",
        description: "Join our community of gamers for tips, tricks, tournaments, and exclusive deals.",
      },
      {
        icon: <Zap className="text-green-600" size={28} />,
        title: "Fast Delivery",
        description: "Get your gaming gear delivered quickly across Nigeria with our express shipping options.",
      },
    ].map((feature, index) => (
      <motion.div
        key={feature.title}
        className="bg-white p-8 rounded-2xl shadow-md flex items-start space-x-4 border border-gray-100 hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        whileHover={{ y: -10, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
      >
        <motion.div
          className="bg-green-100 p-3 rounded-lg"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
        >
          {feature.icon}
        </motion.div>
        <div>
          <h3 className="font-bold text-xl text-gray-800 mb-3">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
</motion.section>

{/* Newsletter */}
<motion.section
  className="bg-gradient-to-br from-green-700 to-green-800 py-16 relative overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, margin: "-100px" }}
>
  {/* Floating decorative elements */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-[120px] opacity-20 animate-float-slow" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-[120px] opacity-15 animate-float-medium" />

  <div className="container mx-auto px-4">
    <div className="max-w-2xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-extrabold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Join Our Gaming Community
      </motion.h2>
      <motion.p
        className="text-green-100 mb-8 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Subscribe to our newsletter for exclusive deals, new releases, and gaming tips.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <input
          type="email"
          placeholder="Your email address"
          className="flex-grow px-6 py-4 rounded-xl bg-white/10 text-white placeholder-green-200 border border-green-500/30 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        />
        <motion.button
          className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-300 text-green-900 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Subscribe</span>
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </motion.div>
    </div>
  </div>
</motion.section>

{/* Footer */}
<footer className="bg-gradient-to-b from-green-800 to-green-900 text-white py-16 relative">
  <div className="container mx-auto px-4">
    <motion.div
      className="grid grid-cols-1 md:grid-cols-4 gap-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, staggerChildren: 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center space-x-3 mb-6">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Gamepad size={28} className="text-yellow-300" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white">Arigo Gaming</h2>
        </div>
        <p className="text-green-200 mb-6 leading-relaxed">
          Your premier destination for gaming gadgets, consoles, and accessories in Nigeria.
        </p>
        <div className="flex space-x-4">
          {["facebook", "twitter", "instagram"].map((platform, index) => (
            <motion.a
              key={platform}
              href="#"
              className="text-green-200 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {platform === "facebook" ? (
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                ) : platform === "twitter" ? (
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-lg text-white mb-6">Quick Links</h3>
        <ul className="space-y-3 text-green-200">
          {["Gaming Deals", "New Arrivals", "Gaming Consoles", "Accessories", "Retro Gaming"].map((link, index) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a href="#" className="hover:text-yellow-300 transition-colors duration-200 flex items-center gap-2">
                <ArrowRight size={16} className="opacity-70" />
                {link}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-lg text-white mb-6">Customer Service</h3>
        <ul className="space-y-3 text-green-200">
          {["Contact Us", "FAQs", "Shipping Policy", "Returns & Refunds", "Track Your Order"].map((link, index) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a href="#" className="hover:text-yellow-300 transition-colors duration-200 flex items-center gap-2">
                <ArrowRight size={16} className="opacity-70" />
                {link}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-lg text-white mb-6">Contact Information</h3>
        <ul className="space-y-3 text-green-200">
          {[
            "123 Gaming Street, Lagos, Nigeria",
            "Phone: +234 123 456 7890",
            "Email: info@arigogaming.ng",
            "Hours: Mon-Sat 9AM - 8PM",
          ].map((info, index) => (
            <motion.li
              key={info}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <ArrowRight size={16} className="opacity-70" />
              {info}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>

    <motion.div
      className="border-t border-green-700/50 mt-12 pt-8 text-center text-green-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <p>© {new Date().getFullYear()} Arigo Gaming. All rights reserved.</p>
    </motion.div>
  </div>
</footer>
      </div>
    )
  }
