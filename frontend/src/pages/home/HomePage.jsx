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
  RefreshCw,
  TrendingUp,
  Gift,
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
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button
                  className="flex items-center font-medium hover:text-green-600 transition"
                  style={{ color: platinumColors.dark }}
                >
                  Categories <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100">
                  {categories.map((category) => (
                    <div key={category.name} className="relative group/sub">
                      <button
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex justify-between items-center"
                        onClick={() => toggleCategory(category.name)}
                      >
                        {category.name}
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-lg py-1 invisible group-hover/sub:visible opacity-0 group-hover/sub:opacity-100 transition-all duration-200 transform origin-top-left scale-95 group-hover/sub:scale-100">
                        {category.subcategories.map((subcat) => (
                          <Link
                            key={subcat}
                            to={`/category/${category.name.toLowerCase()}/${subcat.toLowerCase()}`}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {subcat}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/brands"
                className="font-medium hover:text-green-600 transition"
                style={{ color: platinumColors.dark }}
              >
                Brands
              </Link>
              <Link
                to="/deals"
                className="font-medium hover:text-green-600 transition"
                style={{ color: platinumColors.dark }}
              >
                Deals
              </Link>
              <Link
                to="/about"
                className="font-medium hover:text-green-600 transition"
                style={{ color: platinumColors.dark }}
              >
                About Us
              </Link>
            </nav>

            {/* Search and Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button
                  onClick={handleSearch}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
              <Link to="/like" className="p-2 hover:bg-gray-100 rounded-full relative">
                <Heart className="text-gray-600 w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              </Link>
              <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full relative">
                <ShoppingCart className="text-gray-600 w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </Link>
              <Link to="/my-account" className="p-2 hover:bg-gray-100 rounded-full">
                <User className="text-gray-600 w-5 h-5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 focus:outline-none" onClick={toggleMenu}>
              {isMenuOpen ? <X className="text-gray-600 w-6 h-6" /> : <Menu className="text-gray-600 w-6 h-6" />}
            </button>
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
            className="fixed top-16 left-0 right-0 bg-white shadow-lg z-40 md:hidden"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button
                  onClick={handleSearch}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.name}>
                    <button
                      className="flex justify-between items-center w-full py-2 px-2 text-left hover:bg-gray-100 rounded"
                      onClick={() => toggleCategory(category.name)}
                    >
                      <span>{category.name}</span>
                      <ChevronDown
                        className={`transition-transform duration-200 w-4 h-4 ${
                          activeCategory === category.name ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeCategory === category.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 py-1 space-y-1 overflow-hidden"
                        >
                          {category.subcategories.map((subcat) => (
                            <Link
                              key={subcat}
                              to={`/category/${category.name.toLowerCase()}/${subcat.toLowerCase()}`}
                              className="block py-1 px-2 hover:bg-gray-100 rounded"
                              onClick={toggleMenu}
                            >
                              {subcat}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <Link
                  to="/brands"
                  className="block py-2 px-2 hover:bg-gray-100 rounded"
                  onClick={toggleMenu}
                >
                  Brands
                </Link>
                <Link
                  to="/deals"
                  className="block py-2 px-2 hover:bg-gray-100 rounded"
                  onClick={toggleMenu}
                >
                  Deals
                </Link>
                <Link
                  to="/about"
                  className="block py-2 px-2 hover:bg-gray-100 rounded"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </div>

              <div className="flex justify-around mt-4 pt-4 border-t border-gray-200">
                <Link
                  to="/wishlist"
                  className="flex flex-col items-center p-2"
                  onClick={toggleMenu}
                >
                  <Heart className="text-gray-600 mb-1 w-5 h-5" />
                  <span className="text-xs">Wishlist</span>
                </Link>
                <Link
                  to="/cart"
                  className="flex flex-col items-center p-2"
                  onClick={toggleMenu}
                >
                  <ShoppingCart className="text-gray-600 mb-1 w-5 h-5" />
                  <span className="text-xs">Cart</span>
                </Link>
                <Link
                  to="/my-account"
                  className="flex flex-col items-center p-2"
                  onClick={toggleMenu}
                >
                  <User className="text-gray-600 mb-1 w-5 h-5" />
                  <span className="text-xs">Account</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-24 pb-12 container mx-auto px-4">
        {/* Quick Links Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: platinumColors.dark }}>
            Quick Access
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <Link to={link.path} className="block">
                  <div
                    className="h-24 flex items-center justify-center"
                    style={{ backgroundColor: platinumColors.light }}
                  >
                    <div
                      className="h-16 w-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: platinumColors.primary }}
                    >
                      <span className="text-white">{link.icon}</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-center text-sm" style={{ color: platinumColors.dark }}>
                      {link.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl overflow-hidden mb-12"
          style={{ backgroundColor: platinumColors.primary }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 opacity-90"></div>
          <div className="relative z-10 py-16 px-8 text-white">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Premium Gadgets <br /> at Unbeatable Prices
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl mb-8 max-w-2xl"
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
                className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition shadow-md inline-block text-center"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition inline-block text-center"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Categories Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: platinumColors.dark }}>
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <Link to={`/category/${category.name.toLowerCase()}`} className="block">
                  <div
                    className="h-32 flex items-center justify-center"
                    style={{ backgroundColor: platinumColors.light }}
                  >
                    <div
                      className="h-20 w-20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: platinumColors.primary }}
                    >
                      <span className="text-white font-bold text-xl">{category.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-center">{category.name}</h3>
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
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold" style={{ color: platinumColors.dark }}>
              Featured Products
            </h2>
            <Link to="/products" className="text-green-600 font-semibold flex items-center">
              View All <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative">
                    <div className="w-full h-48 relative bg-gray-100 flex items-center justify-center">
                      <img
                        src={product.image || '/placeholder.svg'}
                        alt={product.name}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    {product.isNew && (
                      <div
                        className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded"
                        style={{ backgroundColor: platinumColors.primary }}
                      >
                        NEW
                      </div>
                    )}
                    <div className="absolute bottom-2 left-2 flex">
                      <motion.button
                        className={`p-2 rounded-full shadow hover:bg-gray-100 ${
                          wishlist.find((item) => item.id === product.id) ? 'bg-red-100' : 'bg-white'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(product);
                        }}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            wishlist.find((item) => item.id === product.id)
                              ? 'text-red-500 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      </motion.button>
                      <motion.button
                        className="p-2 bg-white rounded-full shadow hover:bg-gray-100 ml-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                      >
                        <ShoppingCart className="text-gray-600 w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-gray-500 text-sm">{product.brand}</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="text-yellow-400 mr-1 w-4 h-4 fill-current" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="font-bold text-lg" style={{ color: platinumColors.primary }}>
                        {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through text-sm ml-2">{product.oldPrice}</span>
                      )}
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
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: platinumColors.dark }}>
            Top Brands
          </h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  }}
                  className="p-4 border border-gray-200 rounded-lg flex items-center justify-center hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <Link to={`/brand/${brand.toLowerCase()}`} className="block w-full text-center">
                    <span className="font-medium">{brand}</span>
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
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4" style={{ color: platinumColors.dark }}>
                  About Arigo.ng
                </h2>
                <p className="text-gray-600 mb-4">
                  Were Nigerias premier destination for premium gadgets and electronics. Since our founding, weve
                  been committed to bringing the latest technology to our customers at competitive prices.
                </p>
                <p className="text-gray-600 mb-6">
                  Our mission is to make cutting-edge technology accessible to everyone while providing exceptional
                  customer service and support.
                </p>
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-lg font-semibold shadow-md transition inline-block"
                  style={{
                    backgroundColor: platinumColors.primary,
                    color: 'white',
                  }}
                >
                  Our Story
                </Link>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto" style={{ backgroundColor: platinumColors.light }}>
                <div className="h-full flex items-center justify-center">
                  <div
                    className="h-40 w-40 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: platinumColors.primary }}
                  >
                    <span className="text-white font-bold text-2xl">A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: platinumColors.dark }}>
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Uche M.',
                location: 'Lagos',
                rating: 5,
                text: 'I got my PlayStation 5 delivered within 24 hours! The customer service was excellent and the product was brand new as described.',
              },
              {
                name: 'Amina K.',
                location: 'Abuja',
                rating: 4,
                text: 'The prices are competitive and the delivery was faster than expected. Will definitely shop here again for my tech needs.',
              },
              {
                name: 'David O.',
                location: 'Port Harcourt',
                rating: 5,
                text: 'Bought my iPhone from Arigo and the experience was seamless. The product is authentic and came with full warranty coverage.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                }}
                className="bg-white p-6 rounded-xl shadow-md transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} w-4 h-4`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div
                    className="h-10 w-10 rounded-full mr-3 flex items-center justify-center"
                    style={{ backgroundColor: platinumColors.light }}
                  >
                    <span className="font-bold">{testimonial.name.charAt(0)}</span>
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
      <footer className="bg-white pt-12 pb-6" style={{ borderTop: `1px solid ${platinumColors.light}` }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: platinumColors.primary }}>
                Arigo.ng
              </h3>
              <p className="text-gray-600 mb-4">Your trusted partner for premium gadgets and electronics in Nigeria.</p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, backgroundColor: platinumColors.primary, color: 'white' }}
                    className="h-8 w-8 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: platinumColors.light }}
                  >
                    <span className="text-xs">{social.charAt(0)}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                {categories.slice(0, 4).map((category) => (
                  <li key={category.name}>
                    <Link
                      to={`/category/${category.name.toLowerCase()}`}
                      className="text-gray-600 hover:text-green-600 transition"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2">
                {['Contact Us', 'FAQs', 'Shipping', 'Returns'].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-600 hover:text-green-600 transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-600 mb-4">Subscribe to get updates on new products and special offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                />
                <button
                  className="px-4 py-2 rounded-r-lg font-semibold transition-colors duration-300"
                  style={{
                    backgroundColor: platinumColors.primary,
                    color: 'white',
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div
            className="pt-6 border-t border-gray-200 text-center text-gray-500 text-sm"
            style={{ borderTopColor: platinumColors.light }}
          >
            <p>© {new Date().getFullYear()} Arigo.ng. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}