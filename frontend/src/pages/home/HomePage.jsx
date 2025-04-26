import  { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Star,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Laptop,
  Gamepad,
  CreditCard,
  ChevronLeft,
  RefreshCw,
  TrendingUp,
  Gift,
  Clock,
  UserCog,
  Settings,
} from 'lucide-react';

// Platinum color scheme
const platinumColors = {
  primary: '#2ecc71', // Emerald green
  secondary: '#27ae60', // Darker green
  accent: '#f1c40f', // Gold accent
  dark: '#2c3e50', // Dark blue
  light: '#ecf0f1', // Light gray
};

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      name: 'Smartphones',
      subcategories: ['iPhone', 'Samsung', 'Google Pixel', 'OnePlus'],
    },
    {
      name: 'Gaming',
      subcategories: ['PlayStation', 'Xbox', 'Nintendo', 'Gaming PCs'],
    },
    {
      name: 'Audio',
      subcategories: ['Earbuds', 'Headphones', 'Speakers', 'Microphones'],
    },
    {
      name: 'Accessories',
      subcategories: ['Chargers', 'Cases', 'Screen Protectors', 'Cables'],
    },
    {
      name: 'Smart Home',
      subcategories: ['Smart Lights', 'Security', 'Voice Assistants'],
    },
  ];

  const brands = ['Apple', 'Samsung', 'Sony', 'Bose', 'JBL', 'Microsoft', 'Logitech', 'Anker', 'Razer', 'Xiaomi'];

  const featuredProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: '₦1,200,000',
      oldPrice: '₦1,350,000',
      rating: 4.9,
      image: '/placeholder.svg?height=300&width=300&text=iPhone+15',
      brand: 'Apple',
      category: 'Smartphones',
      isNew: true,
    },
    {
      id: 2,
      name: 'PlayStation 5 Digital Edition',
      price: '₦450,000',
      oldPrice: '₦490,000',
      rating: 4.8,
      image: '/placeholder.svg?height=300&width=300&text=PS5',
      brand: 'Sony',
      category: 'Gaming',
      isNew: false,
    },
    {
      id: 3,
      name: 'Sony WH-1000XM5 Headphones',
      price: '₦280,000',
      oldPrice: '₦320,000',
      rating: 4.7,
      image: '/placeholder.svg?height=300&width=300&text=Sony+XM5',
      brand: 'Sony',
      category: 'Audio',
      isNew: true,
    },
    {
      id: 4,
      name: 'Samsung Galaxy S23 Ultra',
      price: '₦950,000',
      oldPrice: '₦1,050,000',
      rating: 4.8,
      image: '/placeholder.svg?height=300&width=300&text=S23+Ultra',
      brand: 'Samsung',
      category: 'Smartphones',
      isNew: false,
    },
    {
      id: 5,
      name: 'Apple AirPods Pro (2nd Gen)',
      price: '₦180,000',
      oldPrice: '₦210,000',
      rating: 4.6,
      image: '/placeholder.svg?height=300&width=300&text=AirPods+Pro',
      brand: 'Apple',
      category: 'Audio',
      isNew: true,
    },
    {
      id: 6,
      name: 'Xbox Series X',
      price: '₦380,000',
      oldPrice: '₦420,000',
      rating: 4.7,
      image: '/placeholder.svg?height=300&width=300&text=Xbox+X',
      brand: 'Microsoft',
      category: 'Gaming',
      isNew: false,
    },
  ];

  const quickLinks = [
    {
      name: 'Laptops',
      icon: <Laptop className="w-6 h-6" />,
      path: '/laptops',
    },
    {
      name: 'Gaming',
      icon: <Gamepad className="w-6 h-6" />,
      path: '/gamers',
    },
    {
      name: 'Buy on Credit',
      icon: <CreditCard className="w-6 h-6" />,
      path: '/buy-on-credit',
    },
    {
      name: 'Buy/Sell/Swap',
      icon: <RefreshCw className="w-6 h-6" />,
      path: '/buy-sell-swap',
    },
    {
      name: 'Investments',
      icon: <TrendingUp className="w-6 h-6" />,
      path: '/investments',
    },
    {
      name: 'Giveaway',
      icon: <Gift className="w-6 h-6" />,
      path: '/giveaway',
    },
    {
      name: 'My Account',
      icon: <UserCog className="w-6 h-6" />,
      path: '/my-account',
    },
    {
      name: 'Settings',
      icon: <Settings className="w-6 h-6" />,
      path: '/settings',
    },
  ];

  const toggleCategory = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleWishlist = (product) => {
    let updatedWishlist;
    if (wishlist.find((item) => item.id === product.id)) {
      updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      updatedWishlist = [...wishlist, product];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
  className={`fixed w-full z-50 transition-all duration-500 ${
    isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'
  }`}
>
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center">
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center cursor-pointer"
      >
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold" style={{ color: platinumColors.primary }}>
            Arigo
          </span>
          <span className="text-xs ml-1 bg-yellow-500 text-white px-1 py-0.5 rounded">.ng</span>
        </Link>
      </motion.div>

      {/* Enhanced Search Bar */}
      <motion.div 
        className="hidden md:flex items-center mx-4 flex-1 max-w-2xl"
        whileHover={{ y: -1 }}
      >
        <div className="relative w-full group">
          <motion.input
            type="text"
            placeholder="Try 'iPhone 15 Pro' or 'MacBook M2'..."
            className="pl-12 pr-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 w-full shadow-sm text-gray-700 placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            whileFocus={{
              boxShadow: "0 0 0 2px rgba(74, 222, 128, 0.5)",
              borderColor: platinumColors.primary
            }}
          />
          
          {/* Search Icon with Micro-interaction */}
          <motion.button
            onClick={handleSearch}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            whileHover={{ scale: 1.1, color: platinumColors.primary }}
            whileTap={{ scale: 0.9 }}
          >
            <Search className="w-5 h-5" />
          </motion.button>
          
          {/* Dynamic Search Suggestions */}
          {searchQuery && (
            <motion.div 
              className="absolute left-0 right-0 mt-1 bg-white rounded-xl shadow-xl z-50 overflow-hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="p-2 border-b border-gray-100 bg-gray-50">
                <p className="text-xs font-medium text-gray-500">Popular Searches</p>
              </div>
              {[
                `iPhone 15 Pro in ${searchQuery.includes("Pro") ? "256GB" : "128GB"}`,
                `Samsung Galaxy S23 ${searchQuery.includes("Galaxy") ? "Ultra" : ""}`,
                `MacBook ${searchQuery.includes("Mac") ? "Air M2" : "Pro M1"}`,
                `PlayStation 5 ${searchQuery.includes("5") ? "Digital Edition" : ""}`,
                "Wireless Earbuds",
                "Smart Watches"
              ]
              .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
              .slice(0, 5)
              .map((suggestion, index) => (
                <motion.div
                  key={index}
                  whileHover={{ backgroundColor: "#f8fafc" }}
                  className="px-4 py-3 cursor-pointer flex items-center"
                  onClick={() => {
                    setSearchQuery(suggestion);
                    handleSearch();
                  }}
                >
                  <Clock className="w-4 h-4 text-gray-400 mr-3" />
                  <span className="text-gray-700">{suggestion}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Action Icons */}
      <div className="flex items-center space-x-4">
        {/* Wishlist */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <Link to="/like" className="p-2 rounded-full relative group">
            <Heart 
              className="text-gray-600 w-6 h-6 group-hover:text-red-500 transition-colors" 
              fill={wishlist.length > 0 ? "#ef4444" : "none"}
            />
            {wishlist.length > 0 && (
              <motion.span 
                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                {wishlist.length}
              </motion.span>
            )}
          </Link>
        </motion.div>

        {/* Cart */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <Link to="/cart" className="p-2 rounded-full relative group">
            <ShoppingCart 
              className="text-gray-600 w-6 h-6 group-hover:text-green-600 transition-colors" 
            />
            {cart.length > 0 && (
              <motion.span 
                className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.1 }}
              >
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </motion.span>
            )}
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <X className="text-gray-600 w-6 h-6" />
          ) : (
            <Menu className="text-gray-600 w-6 h-6" />
          )}
        </motion.button>
      </div>
    </div>

    {/* Mobile Search - Only shown when menu is open */}
    <motion.div 
      className="md:hidden mt-4"
      initial={{ opacity: 0, height: 0 }}
      animate={{ 
        opacity: isMenuOpen ? 1 : 0,
        height: isMenuOpen ? "auto" : 0
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search 'iPhone 15' or 'PS5'..."
          className="pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  </div>
</header>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="fixed inset-0 top-16 bg-white/95 backdrop-blur-sm z-40 md:hidden overflow-y-auto"
    >
      {/* Overlay with close area */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={toggleMenu}
      />
      
      <div className="container mx-auto px-4 py-6">
        {/* Enhanced Search */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative mb-6"
        >
          <input
            type="text"
            placeholder="Search 'iPhone 15' or 'MacBook Pro'..."
            className="pl-12 pr-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 w-full shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            <Search className="w-5 h-5" />
          </button>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </motion.div>

        {/* Main Menu Items */}
        <motion.div 
          className="space-y-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="border-b border-gray-100 last:border-0"
            >
              <button
                className={`flex justify-between items-center w-full py-4 px-2 text-left transition-colors ${
                  activeCategory === category.name ? 'text-green-600' : 'text-gray-800 hover:text-green-500'
                }`}
                onClick={() => toggleCategory(category.name)}
              >
                <span className="font-medium">{category.name}</span>
                <motion.div
                  animate={{ 
                    rotate: activeCategory === category.name ? 180 : 0,
                    color: activeCategory === category.name ? platinumColors.primary : "#6b7280"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeCategory === category.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 pb-3 space-y-2">
                      {category.subcategories.map((subcat, index) => (
                        <motion.div
                          key={subcat}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={`/category/${category.name.toLowerCase()}/${subcat.toLowerCase()}`}
                            className="block py-2 px-3 hover:bg-gray-50 rounded-lg text-gray-600 hover:text-green-600 transition-colors"
                            onClick={toggleMenu}
                          >
                            <div className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              {subcat}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {['Brands', 'Deals', 'About Us'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="border-b border-gray-100 last:border-0"
            >
              <Link
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="block py-4 px-2 text-gray-800 hover:text-green-600 font-medium transition-colors"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          className="mt-8 pt-6 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: <Heart className="w-6 h-6" />, label: "Wishlist", count: wishlist.length, color: "text-red-500", href: "/wishlist" },
              { icon: <ShoppingCart className="w-6 h-6" />, label: "Cart", count: cart.reduce((total, item) => total + item.quantity, 0), color: "text-green-600", href: "/cart" },
              { icon: <User className="w-6 h-6" />, label: "Account", color: "text-blue-500", href: "/my-account" }
            ].map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={action.href}
                  className="flex flex-col items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  onClick={toggleMenu}
                >
                  <div className="relative">
                    {action.icon}
                    {action.count > 0 && (
                      <motion.span 
                        className={`absolute -top-2 -right-2 bg-current text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ${action.color}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                      >
                        {action.count}
                      </motion.span>
                    )}
                  </div>
                  <span className="text-xs mt-2 font-medium text-gray-700">{action.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social/Contact */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            {['facebook', 'twitter', 'instagram'].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
              >
                <img 
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${social}.svg`} 
                  alt={social} 
                  className="w-5 h-5"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* Main Content */}
      <main className="pt-24 pb-12 container mx-auto px-4">
  {/* Quick Links Section */}
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, type: "spring" }}
    className="mb-16"
  >
    <div className="flex items-end justify-between mb-8">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold"
        style={{ color: platinumColors.dark }}
      >
        Quick Access
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="hidden sm:block"
      >
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </motion.div>
    </div>

    <div className="relative">
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
            }
          }
        }}
      >
        {quickLinks.map((link) => (
          <motion.div
            key={link.name}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{
              y: -8,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
          >
            <Link to={link.path} className="block">
              <div className="relative h-28 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                />
                <motion.div
                  className="h-16 w-16 rounded-2xl flex items-center justify-center shadow-inner"
                  style={{ backgroundColor: platinumColors.primary }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring" }}
                >
                  <span className="text-white text-2xl">{link.icon}</span>
                </motion.div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-center text-sm" style={{ color: platinumColors.dark }}>
                  {link.name}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>

  {/* Hero Section */}
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, type: "spring" }}
    className="relative rounded-2xl overflow-hidden mb-16"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 z-0">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
    </div>
    
    <div className="relative z-10 py-16 px-8 lg:px-16 text-white">
      <div className="max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="inline-block">Premium Gadgets</span> <br />
          <span className="inline-block">at Unbeatable Prices</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl mb-8 max-w-xl"
        >
          Discover the latest tech from top brands with our exclusive deals and fast delivery across Nigeria.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/products"
            className="px-8 py-4 bg-white text-green-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center transform hover:-translate-y-1"
          >
            Shop Now
          </Link>
          <Link
            to="/about"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-700 transition-all duration-300 inline-block text-center transform hover:-translate-y-1"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </div>
    
    {/* Floating device mockups */}
    <motion.div 
      className="hidden lg:block absolute right-16 bottom-0 w-1/3"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      <div className="relative h-64">
        <motion.img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          alt="Devices"
          className="absolute right-0 bottom-0 w-64 h-64 object-contain"
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          alt="Devices"
          className="absolute right-32 bottom-8 w-40 h-40 object-contain"
          animate={{
            y: [0, -15, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
    </motion.div>
  </motion.section>

  {/* Categories Section */}
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="mb-16"
  >
    <div className="flex items-end justify-between mb-8">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold"
        style={{ color: platinumColors.dark }}
      >
        Shop by Category
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link to="/categories" className="text-green-600 font-semibold flex items-center hover:text-green-700 transition">
          View All <ChevronRight className="ml-1 w-5 h-5" />
        </Link>
      </motion.div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {categories.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, type: "spring" }}
          whileHover={{
            y: -8,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
          }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
        >
          <Link to={`/category/${category.name.toLowerCase()}`} className="block">
            <div className="relative h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              />
              <motion.div
                className="h-20 w-20 rounded-2xl flex items-center justify-center shadow-inner"
                style={{ backgroundColor: platinumColors.primary }}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring" }}
              >
                <span className="text-white font-bold text-2xl">{category.name.charAt(0)}</span>
              </motion.div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-center text-lg mb-1">{category.name}</h3>
              <p className="text-gray-500 text-sm text-center">{category.subcategories.length} subcategories</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </motion.section>

  {/* Featured Products */}
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="mb-16"
  >
    <div className="flex items-end justify-between mb-8">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold"
        style={{ color: platinumColors.dark }}
      >
        Featured Products
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link to="/products" className="text-green-600 font-semibold flex items-center hover:text-green-700 transition">
          View All <ChevronRight className="ml-1 w-5 h-5" />
        </Link>
      </motion.div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {featuredProducts.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.03,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
          }}
          transition={{ type: "spring" }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
        >
          <Link to={`/product/${product.id}`} className="block">
            <div className="relative">
              <div className="w-full h-60 relative bg-gray-50 flex items-center justify-center p-4">
                <motion.img
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  className="object-contain w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                {product.isNew && (
                  <motion.div
                    className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    NEW
                  </motion.div>
                )}
              </div>
              
              <div className="absolute bottom-4 left-4 flex space-x-2">
                <motion.button
                  className={`p-3 rounded-full shadow-lg ${
                    wishlist.find((item) => item.id === product.id) 
                      ? 'bg-red-100 text-red-500' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(product);
                  }}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      wishlist.find((item) => item.id === product.id) ? 'fill-current' : ''
                    }`}
                  />
                </motion.button>
                
                <motion.button
                  className="p-3 bg-white rounded-full shadow-lg text-gray-600 hover:bg-gray-50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                >
                  <ShoppingCart className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-500 text-sm">{product.brand}</p>
                </div>
                <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                  <Star className="text-yellow-400 mr-1 w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="font-bold text-xl" style={{ color: platinumColors.primary }}>
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm ml-2">{product.oldPrice}</span>
                  )}
                </div>
                
                <motion.button
                  className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </motion.section>

  {/* Brands Section */}
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="mb-16"
  >
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="text-3xl font-bold mb-8"
      style={{ color: platinumColors.dark }}
    >
      Top Brands
    </motion.h2>
    
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {brands.map((brand, index) => (
          <motion.div
            key={brand}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, type: "spring" }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
            className="p-4 border border-gray-200 rounded-xl flex items-center justify-center hover:shadow-md transition-all duration-300 cursor-pointer group"
          >
            <Link to={`/brand/${brand.toLowerCase()}`} className="block w-full text-center">
              <div className="relative h-16 flex items-center justify-center">
                <motion.img
                  src={`https://logo.clearbit.com/${brand.toLowerCase()}.com?size=80`}
                  alt={brand}
                  className="h-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/80x40?text=${brand.split(' ')[0]}`
                  }}
                />
              </div>
              <span className="font-medium text-sm mt-3 group-hover:text-green-600 transition">{brand}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>

  {/* About Us Section */}
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="mb-16"
  >
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2 p-10 md:p-12 lg:p-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{ color: platinumColors.dark }}
          >
            About Arigo.ng
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mb-4 text-lg"
          >
            Wee Nigeria premier destination for premium gadgets and electronics. Since our founding, weve been committed to bringing the latest technology to our customers at competitive prices.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 mb-8 text-lg"
          >
            Our mission is to make cutting-edge technology accessible to everyone while providing exceptional customer service and support.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="/about"
              className="px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-block transform hover:-translate-y-1"
              style={{
                backgroundColor: platinumColors.primary,
                color: 'white',
              }}
            >
              Our Story
            </Link>
          </motion.div>
        </div>
        
        <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          
          <motion.div
            className="h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="h-40 w-40 rounded-2xl flex items-center justify-center shadow-2xl"
              style={{ backgroundColor: platinumColors.primary }}
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-white font-bold text-4xl">A</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>

  {/* Testimonials */}
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="mb-16"
  >
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="text-3xl font-bold mb-8"
      style={{ color: platinumColors.dark }}
    >
      What Our Customers Say
    </motion.h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: 'Uche M.',
          location: 'Lagos',
          rating: 5,
          text: 'I got my PlayStation 5 delivered within 24 hours! The customer service was excellent and the product was brand new as described.',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
          name: 'Amina K.',
          location: 'Abuja',
          rating: 4,
          text: 'The prices are competitive and the delivery was faster than expected. Will definitely shop here again for my tech needs.',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
          name: 'David O.',
          location: 'Port Harcourt',
          rating: 5,
          text: 'Bought my iPhone from Arigo and the experience was seamless. The product is authentic and came with full warranty coverage.',
          avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
        },
      ].map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, type: "spring" }}
          whileHover={{
            y: -8,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
          }}
          className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 relative overflow-hidden group"
        >
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="flex mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} w-5 h-5`}
              />
            ))}
          </div>
          
          <motion.p
            className="text-gray-600 mb-8 text-lg relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {testimonial.text}
          </motion.p>
          
          <div className="flex items-center relative z-10">
            <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.location}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
</main>

  {/* Footer */}
<footer className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-8 relative overflow-hidden">
  {/* Decorative elements */}
  <motion.div 
    className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-green-100 opacity-10 blur-3xl"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  />
  <motion.div 
    className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 opacity-10 blur-3xl"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.3 }}
  />

  <div className="container mx-auto px-4 relative z-10">
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
          }
        }
      }}
    >
      {/* Brand Column */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <motion.div 
          className="flex items-center mb-6"
          whileHover={{ x: 5 }}
        >
          <span className="text-2xl font-bold" style={{ color: platinumColors.primary }}>Arigo</span>
          <motion.span 
            className="text-xs ml-1 bg-yellow-500 text-white px-1 py-0.5 rounded"
            whileHover={{ rotate: 10, scale: 1.2 }}
          >
            .ng
          </motion.span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-6"
        >
          Your trusted partner for premium gadgets and electronics in Nigeria.
        </motion.p>
        
        <motion.div 
          className="flex space-x-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social, index) => (
            <motion.a
              key={social}
              href="#"
              whileHover={{ 
                y: -5,
                scale: 1.1,
                backgroundColor: platinumColors.primary,
                color: 'white'
              }}
              whileTap={{ scale: 0.9 }}
              className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm"
              style={{ backgroundColor: platinumColors.light }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
            >
              <img 
                src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${social.toLowerCase()}.svg`}
                alt={social}
                className="w-5 h-5"
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Shop Column */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <motion.h4 
          className="font-semibold mb-6 text-lg flex items-center"
          whileHover={{ x: 5 }}
        >
          <motion.span 
            className="w-2 h-2 bg-green-500 rounded-full mr-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Shop
        </motion.h4>
        <ul className="space-y-3">
          {categories.slice(0, 4).map((category, index) => (
            <motion.li
              key={category.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <Link
                to={`/category/${category.name.toLowerCase()}`}
                className="text-gray-600 hover:text-green-600 transition flex items-center group"
              >
                <motion.span 
                  className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                {category.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Help Column */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <motion.h4 
          className="font-semibold mb-6 text-lg flex items-center"
          whileHover={{ x: 5 }}
        >
          <motion.span 
            className="w-2 h-2 bg-green-500 rounded-full mr-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          Help
        </motion.h4>
        <ul className="space-y-3">
          {['Contact Us', 'FAQs', 'Shipping', 'Returns'].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <Link
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-600 hover:text-green-600 transition flex items-center group"
              >
                <motion.span 
                  className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 + index * 0.2 }}
                />
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Newsletter Column */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <motion.h4 
          className="font-semibold mb-6 text-lg flex items-center"
          whileHover={{ x: 5 }}
        >
          <motion.span 
            className="w-2 h-2 bg-green-500 rounded-full mr-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
          Newsletter
        </motion.h4>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-600 mb-6"
        >
          Subscribe to get updates on new products and special offers.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex"
        >
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-3 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-green-500 w-full transition"
          />
          <motion.button
            className="px-6 py-3 rounded-r-xl font-semibold transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: platinumColors.primary,
              color: 'white',
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>

    {/* Copyright */}
    <motion.div 
      className="pt-8 border-t border-gray-200 text-center"
      style={{ borderTopColor: platinumColors.light }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.p 
          className="text-gray-500 text-sm mb-4 md:mb-0"
          whileHover={{ scale: 1.02 }}
        >
          © {new Date().getFullYear()} Arigo.ng. All rights reserved.
        </motion.p>
        
        <div className="flex space-x-6">
          {['Terms', 'Privacy', 'Cookies'].map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="text-gray-500 hover:text-green-600 text-sm transition"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</footer>
    </div>
  );
}