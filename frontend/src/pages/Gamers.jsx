  "use client"

  import { useState, useEffect, useRef } from "react"
  import { Link } from "react-router-dom";
  import { motion, AnimatePresence } from "framer-motion"
  import {
    Search,
    ShoppingCart,
    ChevronRight,
    Star,
    Heart,
    Award,
    Gamepad,
    Cpu,
    ChevronDown,
    Menu,
    X,
    User,
    Clock,
    Zap,
    Gift,
    Headphones,
    GamepadIcon as Controller,
    Disc,
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
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? "py-2 bg-green-700 shadow-md" : "py-4 bg-green-700"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Gamepad size={28} className="text-white" />
                <Link href="/" className="text-2xl font-bold text-white">
                  Arigo Gaming
                </Link>
              </div>

              <div className="hidden md:flex items-center bg-green-600 rounded-lg px-3 py-2 flex-grow max-w-md mx-4">
                <Search size={20} className="text-green-200" />
                <input
                  type="text"
                  placeholder="Search gaming products..."
                  className="bg-transparent border-none outline-none text-white placeholder-green-200 w-full pl-2"
                />
              </div>

              <div className="flex items-center space-x-4">
                <motion.button className="relative text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Heart size={24} />
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                </motion.button>

                <motion.button className="relative text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <ShoppingCart size={24} />
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    5
                  </span>
                </motion.button>

                <div className="hidden md:block">
                  <motion.button
                    className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg font-semibold text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign In
                  </motion.button>
                </div>

                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-16 left-0 right-0 bg-green-700 shadow-lg z-40 md:hidden"
            >
              <div className="container mx-auto px-4 py-3">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search gaming products..."
                    className="w-full bg-green-600 text-white placeholder-green-200 border-none rounded-lg py-2 pl-10 pr-4 focus:outline-none"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-200" size={18} />
                </div>

                <div className="space-y-3 text-white">
                  {mainCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => {
                        setActiveCategory(category.name)
                        setIsMenuOpen(false)
                      }}
                      className={`flex items-center space-x-2 w-full py-2 px-3 rounded-lg ${
                        activeCategory === category.name ? "bg-green-600" : "hover:bg-green-600"
                      }`}
                    >
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </button>
                  ))}

                  <div className="pt-3 border-t border-green-600">
                    <button className="flex items-center space-x-2 w-full py-2 px-3 rounded-lg hover:bg-green-600">
                      <User size={20} />
                      <span>Sign In / Register</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-green-800 to-green-600 text-white pt-24 p-8 md:p-16"
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Ultimate Gaming Experience
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-green-100 mb-6 text-lg"
                >
                  Discover premium consoles, games, and accessories at unbeatable prices. From PlayStation to Retro
                  Gaming, weve got everything for gamers.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
                >
                  <motion.button
                    className="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-6 py-3 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Shop Now
                  </motion.button>
                  <motion.button
                    className="border border-white hover:bg-green-700 px-6 py-3 rounded-lg text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Gaming Deals
                  </motion.button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="md:w-1/2 flex justify-center"
              >
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <img
                      src="/images/hero-gaming.jpg"
                      alt="Gaming Setup"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-2xl object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="container mx-auto py-8">
          <div className="flex overflow-x-auto pb-4 scrollbar-hide gap-2 px-4">
            {mainCategories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-lg whitespace-nowrap ${
                  activeCategory === category.name
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-green-50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Featured Collections */}
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Collections</h2>
            <motion.button
              className="flex items-center text-green-600 hover:text-green-700 font-medium"
              whileHover={{ x: 5 }}
            >
              View All <ChevronRight size={20} />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCollections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {activeCategory === "All" ? "Featured Gaming Products" : `${activeCategory}`}
            </h2>
            <motion.button
              className="flex items-center text-green-600 hover:text-green-700 font-medium"
              whileHover={{ x: 5 }}
            >
              View All <ChevronRight size={20} />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} featured={true} />
            ))}
          </div>
        </div>

        {/* Limited Time Deals */}
        <div className="bg-green-50 py-12 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Clock className="text-red-600 mr-2" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Limited Time Deals</h2>
              </div>
              <motion.button
                className="flex items-center text-green-600 hover:text-green-700 font-medium"
                whileHover={{ x: 5 }}
              >
                View All <ChevronRight size={20} />
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {limitedTimeDeals.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>
        </div>

        {/* Expandable Information Sections */}
        <div className="container mx-auto py-12 px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Gaming Information</h2>

          <ExpandableSection title="Latest Gaming Consoles">
            <div className="space-y-4">
              <p>
                Discover the newest gaming consoles from top brands like Sony PlayStation, Microsoft Xbox, and Nintendo.
                Experience next-generation gaming with cutting-edge graphics, faster load times, and immersive gameplay.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">PlayStation 5</h4>
                  <p className="text-sm text-gray-600">
                    Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with haptic feedback,
                    adaptive triggers, and 3D Audio.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Xbox Series X</h4>
                  <p className="text-sm text-gray-600">
                    The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic
                    processing power.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Nintendo Switch OLED</h4>
                  <p className="text-sm text-gray-600">
                    Featuring a vibrant 7-inch OLED screen, a wide adjustable stand, enhanced audio, and 64 GB of internal
                    storage.
                  </p>
                </div>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection title="Popular Game Titles">
            <div className="space-y-4">
              <p>
                Stay up-to-date with the most popular and newest game releases across all platforms. From action-packed
                adventures to sports simulations, we have games for every type of player.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">FIFA 24</h4>
                  <p className="text-sm text-gray-600">
                    Experience the beautiful game like never before with HyperMotion technology and more realistic player
                    movements.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">WWE 2K24</h4>
                  <p className="text-sm text-gray-600">
                    Step into the ring with the most authentic WWE gaming experience featuring your favorite Superstars
                    and Legends.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Sonic Frontiers</h4>
                  <p className="text-sm text-gray-600">
                    Join Sonic in his newest high-speed adventure as he explores a vibrant and expansive world.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">The Legend of Zelda</h4>
                  <p className="text-sm text-gray-600">
                    Embark on an epic adventure across the land and skies of Hyrule in this breathtaking sequel.
                  </p>
                </div>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection title="Retro Gaming Collection">
            <div className="space-y-4">
              <p>
                Rediscover the magic of classic gaming with our extensive retro collection. From the Sega Genesis to the
                original Game Boy, we have everything you need to relive the golden age of gaming.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Sega Genesis Mini</h4>
                  <p className="text-sm text-gray-600">
                    Relive the glory days with this miniature version of the iconic Sega Genesis console, pre-loaded with
                    42 legendary games.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Game Boy Color</h4>
                  <p className="text-sm text-gray-600">
                    The classic handheld gaming device that revolutionized portable gaming. Includes classic games and
                    colorful display.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">NES Classic Edition</h4>
                  <p className="text-sm text-gray-600">
                    A miniaturized version of the groundbreaking NES, pre-loaded with 30 classic games including Super
                    Mario Bros. and The Legend of Zelda.
                  </p>
                </div>
              </div>
            </div>
          </ExpandableSection>
        </div>

        {/* Features Section */}
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-green-100 p-3 rounded-lg">
                <Award className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600">
                  All gaming products are authentic with manufacturer warranty and after-sales support.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-green-100 p-3 rounded-lg">
                <Gamepad className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Gaming Community</h3>
                <p className="text-gray-600">
                  Join our community of gamers for tips, tricks, tournaments and exclusive deals.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-green-100 p-3 rounded-lg">
                <Zap className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  Get your gaming gear delivered quickly across Nigeria with our express shipping options.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-green-700 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-3">Join Our Gaming Community</h2>
              <p className="text-green-100 mb-6">
                Subscribe to our newsletter for exclusive deals, new releases, and gaming tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none"
                />
                <motion.button
                  className="bg-yellow-400 hover:bg-yellow-300 text-green-900 px-6 py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-green-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Gamepad size={24} />
                  <h2 className="text-xl font-bold">Arigo Gaming</h2>
                </div>
                <p className="text-green-200 mb-4">
                  Your premier destination for gaming gadgets, consoles, and accessories in Nigeria.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-green-200 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" className="text-green-200 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-green-200 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-green-200">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Gaming Deals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Gaming Consoles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Retro Gaming
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Customer Service</h3>
                <ul className="space-y-2 text-green-200">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Shipping Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Returns & Refunds
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Track Your Order
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Contact Information</h3>
                <ul className="space-y-2 text-green-200">
                  <li>123 Gaming Street, Lagos, Nigeria</li>
                  <li>Phone: +234 123 456 7890</li>
                  <li>Email: info@arigogaming.ng</li>
                  <li>Hours: Mon-Sat 9AM - 8PM</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-300">
              <p>© {new Date().getFullYear()} Arigo Gaming. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
