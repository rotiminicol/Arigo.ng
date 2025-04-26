"use client"

import { useState, useEffect  } from "react"
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShoppingCart,
  Shield,
  Menu,
  X,
  Smartphone,
  Zap,
  Truck,
  DollarSign,
  RefreshCw,
  BarChart2,
  Gift,
  Clock,
  ChevronRight
} from "lucide-react"

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("buy")
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const brands = [
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    },
    {
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
    },
    { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    },
    {
      name: "HP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg"
    }
];
    // Handle scroll effect
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  // Image URLs for products
 
  const productImages = {
    // Product images (using Unsplash)
    iphone: "https://www.svgrepo.com/download/483536/iphone-x.svg",
    samsung: "https://www.svgrepo.com/download/485187/smartphone-device.svg",
    playstation: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    macbook: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    techGadgets: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    
    // User avatars
    user1: "https://randomuser.me/api/portraits/women/12.jpg",
    user2: "https://randomuser.me/api/portraits/men/32.jpg",
    user3: "https://randomuser.me/api/portraits/women/45.jpg",
    testimonial1: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial2: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial3: "https://randomuser.me/api/portraits/men/75.jpg",
  
    // SVG Icons (using trusted CDNs)
    icons: {
      shoppingCart: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/cart.svg",
      refresh: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/arrow-repeat.svg",
      dollar: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/currency-dollar.svg",
      shield: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/shield-check.svg",
      truck: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/truck.svg",
      phone: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/phone.svg",
      email: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/envelope.svg",
      location: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/geo-alt.svg",
      star: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/star-fill.svg",
      arrowRight: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/arrow-right.svg",
      facebook: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/facebook.svg",
      twitter: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/twitter.svg",
      instagram: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/instagram.svg",
      smartphone: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/phone.svg",
      clock: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/clock.svg",
      barChart: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/bar-chart.svg",
      chevronRight: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/icons/chevron-right.svg"
    },
  
    // Fallback images
    fallback: {
      product: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      user: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  };
  
  // Usage example:
  // For an icon: <img src={productImages.icons.shoppingCart} alt="Shopping Cart" />
  // For a product: <img src={productImages.iphone} alt="iPhone" />
  

  // Fallback images in case external URLs fail
  const fallbackImages = {
    product: "/placeholder.svg?height=500&width=500",
    user: "/placeholder.svg?height=100&width=100",
    logo: "/placeholder.svg?height=50&width=100",
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Desktop & Mobile */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="text-2xl font-bold tracking-tight flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-lg mr-1"
                whileHover={{ 
                  boxShadow: "0 0 15px rgba(16, 185, 129, 0.6)",
                }}
              >
                Ari
              </motion.span>
              <span className="text-emerald-600">go</span>
              <motion.span 
                className="text-sm text-emerald-500 ml-1"
                animate={{ 
                  opacity: [1, 0.6, 1],
                }} 
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                .ng
              </motion.span>
            </motion.span>
          </motion.div>

          {/* Sign In - Desktop */}
          <div className="hidden sm:block">
            <motion.a
              href="/login"
              className="relative overflow-hidden inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span 
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%", opacity: 0.3 }}
                whileHover={{ x: "100%", opacity: 0.2 }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Buy Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white overflow-hidden"
          >
            <div className="px-4 py-5 border-t border-gray-100">
              <motion.a
                href="/login"
                className="flex justify-center w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-lg text-base font-medium shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Buy Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

      
        {/* Hero Section */}
        <div
        id="home"
        className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 bg-gradient-to-b from-green-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
                <Zap className="w-4 h-4 mr-2" /> Flash Sale: 30% Off Today Only
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Upgrade Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
                  Tech Life
                </span>{" "}
                Effortlessly
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-lg">
                Nigerias most trusted platform for premium gadgets. Buy new, sell used, or swap for an upgrade - all
                with guaranteed quality and best prices.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#shop"
                  className="flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-all duration-200 shadow-lg"
                >
                  Explore Gadgets <ArrowRight size={20} className="ml-2" />
                </a>
                <a
                  href="#swap"
                  className="flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-green-600 border border-green-600 hover:bg-green-50 transition-colors duration-200"
                >
                  <RefreshCw size={18} className="mr-2" /> Start Swapping
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src={productImages.user1 || "/placeholder.svg"}
                      alt="User"
                      onError={(e) => {
                        e.currentTarget.src = fallbackImages.user
                      }}
                    />
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src={productImages.user2 || "/placeholder.svg"}
                      alt="User"
                      onError={(e) => {
                        e.currentTarget.src = fallbackImages.user
                      }}
                    />
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src={productImages.user3 || "/placeholder.svg"}
                      alt="User"
                      onError={(e) => {
                        e.currentTarget.src = fallbackImages.user
                      }}
                    />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">50K+ Happy Users</span>
                </div>
                <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm font-medium">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative">
                <img
                  src={productImages.techGadgets || "/placeholder.svg"}
                  alt="Tech Gadgets"
                  className="w-full rounded-2xl shadow-2xl border-8 border-white"
                  onError={(e) => {
                    e.currentTarget.src = fallbackImages.product
                  }}
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden sm:block">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Truck className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-500">Free Shipping</p>
                      <p className="font-bold text-gray-900">Nationwide</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden sm:block">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Gift className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-500">Free</p>
                      <p className="font-bold text-gray-900">Accessories</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <motion.div 
      className="bg-gradient-to-b from-white to-green-50 py-16 sm:py-24 overflow-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decoration elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/4 opacity-10" width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-green-600" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/4 opacity-10" width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa28" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-green-600" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa28)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="flex flex-col items-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center mb-2"
            animate={{ 
              scale: [1, 1.03, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-green-500"></span>
            <span className="mx-2 text-sm font-medium text-green-600">PARTNERSHIPS</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-green-500"></span>
          </motion.div>
          
          <motion.h2 
            className="text-center text-2xl font-bold text-gray-900 tracking-wide mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              PREMIER
            </span>{" "}
            TECH PARTNERS
          </motion.h2>
        </motion.div>

        <motion.div 
          className="mt-8 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, staggerChildren: 0.1 }}
        >
          {/* Decorative middle line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-5 items-center relative">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                className="col-span-1 flex flex-col items-center justify-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredBrand(brand.name)}
                onHoverEnd={() => setHoveredBrand(null)}
              >
                <div className="relative p-6 w-full">
                  <motion.div 
                    className={`absolute inset-0 bg-white rounded-xl shadow-lg ${hoveredBrand === brand.name ? 'opacity-100' : 'opacity-0'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredBrand === brand.name ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-10 object-contain filter"
                      initial={{ filter: "grayscale(1)" }}
                      animate={{ 
                        filter: hoveredBrand === brand.name ? "grayscale(0)" : "grayscale(1)",
                        y: hoveredBrand === brand.name ? -5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.div 
                      className="mt-3 text-center"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: hoveredBrand === brand.name ? 1 : 0,
                        height: hoveredBrand === brand.name ? "auto" : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-sm font-medium text-green-600">{brand.name}</span>
                      <span className="block text-xs text-gray-500 mt-1">Certified Partner</span>
                    </motion.div>
                  </div>
                </div>
                
                {/* Animated underline */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: hoveredBrand === brand.name ? "80%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="#partnerships"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-green-600 border border-green-200 hover:bg-green-50 transition-colors duration-200 text-sm font-medium"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(240, 253, 244, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            Learn about our partnerships
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>

     {/* Shop/Swap/Sell Tabs */}
<div id="shop" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-gray-900"
      >
        Your Gateway to <span className="text-green-600">Smart Tech</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-lg text-gray-600"
      >
        Whether youre looking to buy, sell, or exchange devices, we provide the most seamless experience in Nigeria.
      </motion.p>
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-8 flex justify-center"
    >
      <div className="inline-flex rounded-lg bg-gray-100 p-1 shadow-inner">
        <button
          onClick={() => setActiveTab("buy")}
          className={`px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 ${activeTab === "buy" ? "bg-white shadow-sm text-green-600 transform scale-105" : "text-gray-600 hover:text-gray-700 hover:bg-gray-50"}`}
        >
          <ShoppingCart className="inline mr-2 h-4 w-4" />
          Buy New
        </button>
        <button
          onClick={() => setActiveTab("swap")}
          className={`px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 ${activeTab === "swap" ? "bg-white shadow-sm text-green-600 transform scale-105" : "text-gray-600 hover:text-gray-700 hover:bg-gray-50"}`}
        >
          <RefreshCw className="inline mr-2 h-4 w-4" />
          Swap
        </button>
        <button
          onClick={() => setActiveTab("sell")}
          className={`px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 ${activeTab === "sell" ? "bg-white shadow-sm text-green-600 transform scale-105" : "text-gray-600 hover:text-gray-700 hover:bg-gray-50"}`}
        >
          <DollarSign className="inline mr-2 h-4 w-4" />
          Sell Used
        </button>
      </div>
    </motion.div>

    <AnimatePresence mode="wait">
      {activeTab === "buy" && (
        <motion.div
          key="buy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              name: "iPhone 15 Pro Max",
              price: "₦850,000",
              originalPrice: "₦950,000",
              discount: "10% off",
              image: productImages.iphone,
              tag: "Best Seller",
              colors: ["bg-blue-500", "bg-black", "bg-gray-300"],
            },
            {
              name: "Samsung Galaxy S23 Ultra",
              price: "₦720,000",
              originalPrice: "₦800,000",
              discount: "10% off",
              image: productImages.samsung,
              tag: "New",
              colors: ["bg-black", "bg-green-600", "bg-purple-600"],
            },
            {
              name: "PlayStation 5 Bundle",
              price: "₦450,000",
              originalPrice: "₦500,000",
              discount: "10% off",
              image: productImages.playstation,
              tag: "Limited Stock",
              colors: ["bg-black", "bg-white"],
            },
            {
              name: "MacBook Air M2",
              price: "₦950,000",
              originalPrice: "₦1,050,000",
              discount: "9.5% off",
              image: productImages.macbook,
              tag: "Trending",
              colors: ["bg-gray-400", "bg-blue-900", "bg-gray-800"],
            },
          ].map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 group relative"
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  onError={(e) => {
                    e.currentTarget.src = fallbackImages.product
                  }}
                />
                {product.tag && (
                  <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <div className="mt-2 flex items-center">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="ml-2 text-sm font-medium text-red-600">{product.discount}</span>
                </div>
                <div className="mt-3 flex space-x-1">
                  {product.colors.map((color, i) => (
                    <span 
                      key={i} 
                      className={`w-4 h-4 rounded-full ${color} border border-gray-200 transition-transform hover:scale-125 hover:shadow-sm`}
                      title={`Color variant ${i+1}`}
                    ></span>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <button className="text-sm text-green-600 font-medium hover:text-green-800 transition-colors duration-200 flex items-center">
                    View Details <ChevronRight size={14} className="ml-1" />
                  </button>
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 flex items-center shadow hover:shadow-md"
                  >
                    <ShoppingCart size={16} className="mr-1" /> Add
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeTab === "swap" && (
        <motion.div
          key="swap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="mt-12"
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="p-8 md:flex md:items-center md:justify-between">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900">Smart Device Swapping</h3>
                <p className="mt-2 text-gray-600">
                  Our innovative swap system lets you upgrade your devices by paying only the difference. Get fair
                  market value for your current device.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ y: -3 }}
                    className="bg-green-50 p-4 rounded-lg border border-green-100 hover:border-green-200 transition-all"
                  >
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-green-600" />
                      <span className="ml-2 text-sm font-medium">Fast Process</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-600">Swap completed in 24hrs</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -3 }}
                    className="bg-green-50 p-4 rounded-lg border border-green-100 hover:border-green-200 transition-all"
                  >
                    <div className="flex items-center">
                      <BarChart2 className="h-5 w-5 text-green-600" />
                      <span className="ml-2 text-sm font-medium">Best Value</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-600">Fair market prices</p>
                  </motion.div>
                </div>
                <div className="mt-6">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#swap-form"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-all duration-200 shadow hover:shadow-md"
                  >
                    Start Swap Now <ArrowRight size={16} className="ml-2" />
                  </motion.a>
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/2 md:pl-8">
                <motion.div 
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center bg-white p-3 rounded-lg shadow-sm"
                    >
                      <Smartphone className="h-8 w-8 text-gray-400" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Your Device</p>
                        <p className="font-medium text-gray-900">iPhone 12 Pro</p>
                        <p className="text-xs text-gray-500">128GB • Good Condition</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      animate={{ x: [-5, 5, -5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="mx-2"
                    >
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center bg-white p-3 rounded-lg shadow-sm"
                    >
                      <Smartphone className="h-8 w-8 text-green-500" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Upgrade To</p>
                        <p className="font-medium text-gray-900">iPhone 15 Pro</p>
                        <p className="text-xs text-gray-500">256GB • Brand New</p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between py-2 hover:bg-gray-100 px-2 rounded transition-colors">
                      <span className="text-sm text-gray-500">Your Device Value</span>
                      <span className="text-sm font-medium text-gray-900">₦320,000</span>
                    </div>
                    <div className="flex justify-between py-2 hover:bg-gray-100 px-2 rounded transition-colors">
                      <span className="text-sm text-gray-500">New Device Price</span>
                      <span className="text-sm font-medium text-gray-900">₦850,000</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center py-3 bg-green-50 px-3 rounded-lg">
                      <span className="text-base font-medium text-gray-900">Amount To Pay</span>
                      <motion.span 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-xl font-bold text-green-600"
                      >
                        ₦530,000
                      </motion.span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">* Includes free shipping and 1-year warranty</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === "sell" && (
        <motion.div
          key="sell"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-bold text-gray-900">Sell Your Device in 3 Steps</h3>
            <p className="mt-2 text-gray-600">
              Get instant cash for your used devices with our hassle-free process.
            </p>
            <div className="mt-6">
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Describe your device",
                    description: "Tell us about your gadget's model, condition, and specifications."
                  },
                  {
                    step: 2,
                    title: "Get instant valuation",
                    description: "Our AI-powered system provides a fair market price immediately."
                  },
                  {
                    step: 3,
                    title: "Schedule pickup & get paid",
                    description: "We collect your device and pay you instantly upon verification."
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-800 font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{step.title}</p>
                      <p className="mt-1 text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#sell-form"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-all duration-200 shadow hover:shadow-md"
                >
                  Get Your Price Now <ArrowRight size={16} className="ml-2" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-bold text-gray-900">Current High-Demand Devices</h3>
            <p className="mt-2 text-gray-600">These devices are in high demand and fetch premium prices:</p>
            <div className="mt-6 space-y-4">
              {[
                { name: "iPhone 14 Pro Max", price: "₦450,000 - ₦500,000", condition: "Good Condition" },
                { name: "Samsung S22 Ultra", price: "₦380,000 - ₦420,000", condition: "Like New" },
                { name: "MacBook Pro M1", price: "₦550,000 - ₦600,000", condition: "Excellent" },
                { name: "PlayStation 5", price: "₦300,000 - ₦350,000", condition: "Complete Set" },
              ].map((device, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  className="flex justify-between items-center py-3 border-b border-gray-100 px-2 rounded-lg transition-colors"
                >
                  <div>
                    <span className="text-sm font-medium text-gray-900">{device.name}</span>
                    <p className="text-xs text-gray-500">{device.condition}</p>
                  </div>
                  <span className="text-sm font-bold text-green-600">{device.price}</span>
                </motion.div>
              ))}
            </div>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="mt-6 text-center"
            >
              <a href="#demand-list" className="text-sm text-green-600 hover:text-green-800 font-medium inline-flex items-center">
                View Full Demand List <ArrowRight size={14} className="ml-1" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</div>

      {/* Why Choose Us */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
        The <span className="text-green-600">Arigo Advantage</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Were revolutionizing the gadget marketplace with unique benefits you wont find elsewhere.
      </p>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
    >
      {[
        {
          icon: <Shield className="h-8 w-8 text-green-600" />,
          title: "100% Authentic",
          description: "Every device undergoes 25-point inspection to guarantee authenticity and perfect functionality.",
          bgColor: "bg-green-50",
          borderColor: "border-green-100"
        },
        {
          icon: <RefreshCw className="h-8 w-8 text-green-600" />,
          title: "Seamless Swaps",
          description: "Our proprietary valuation system ensures fair trade-in values for your current devices.",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-100"
        },
        {
          icon: <DollarSign className="h-8 w-8 text-green-600" />,
          title: "Price Advantage",
          description: "We offer the most competitive prices in Nigeria, whether you're buying or selling.",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-100"
        },
        {
          icon: <Truck className="h-8 w-8 text-green-600" />,
          title: "Swift Logistics",
          description: "Free same-day delivery in Lagos, next-day delivery in other major cities.",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-100"
        },
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className={`p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border ${feature.borderColor} ${feature.bgColor} relative overflow-hidden`}
        >
          {/* Animated background element */}
          <motion.div 
            className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: feature.borderColor.replace('border-', 'bg-') }}
          />
          
          <div className="relative z-10">
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.1 }}
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.bgColor.replace('50', '100')} border ${feature.borderColor} shadow-inner`}
            >
              {feature.icon}
            </motion.div>
            
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            
            <p className="mt-2 text-gray-600">
              {feature.description}
            </p>
            
            <motion.div 
              whileHover={{ x: 5 }}
              className="mt-4 inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800 transition-colors"
            >
              Learn more
              <ArrowRight className="ml-1 h-4 w-4" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Animated decorative elements */}
    <div className="hidden lg:block">
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/4 top-1/3 w-16 h-16 rounded-full bg-green-100 opacity-30 blur-xl"
      />
      <motion.div
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute right-1/4 bottom-1/4 w-20 h-20 rounded-full bg-blue-100 opacity-30 blur-xl"
      />
    </div>
  </div>
</div>

      {/* Testimonials */}
      <div id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Trusted by <span className="text-green-600">Tech Enthusiasts</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Join thousands of satisfied customers whove transformed their tech experience with us.
      </p>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {[
        {
          quote: "Sold my iPhone 12 through Arigo and got paid instantly. The process was so smooth and the price was fair. Will definitely use them again!",
          name: "Adebayo Johnson",
          role: "Lagos",
          stars: 5,
          image: productImages.testimonial1,
          color: "bg-blue-50",
          border: "border-blue-100"
        },
        {
          quote: "The swap service is a game changer! I upgraded from iPhone 13 to 15 by just paying the difference. The device I received was in perfect condition.",
          name: "Chioma Okeke",
          role: "Abuja",
          stars: 5,
          image: productImages.testimonial2,
          color: "bg-green-50",
          border: "border-green-100"
        },
        {
          quote: "I was skeptical about buying expensive tech online, but Arigo proved me wrong. Genuine products with warranty and fast delivery. Highly recommended!",
          name: "Emeka Okafor",
          role: "Port Harcourt",
          stars: 5,
          image: productImages.testimonial3,
          color: "bg-purple-50",
          border: "border-purple-100"
        },
      ].map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className={`p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border ${testimonial.border} ${testimonial.color} relative overflow-hidden group`}
        >
          {/* Floating quote icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -right-4 -top-4 text-gray-300 z-0"
          >
            <svg className="h-24 w-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </motion.div>

          <div className="relative z-10">
            {/* Animated stars */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[...Array(testimonial.stars)].map((_, i) => (
                <motion.svg 
                  key={i}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                    delay: i * 0.1
                  }}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </motion.div>

            {/* Testimonial text with animated border */}
            <motion.div 
              whileHover={{ x: 5 }}
              className="mt-4 relative pl-4"
            >
              <motion.div 
                className="absolute left-0 top-0 h-full w-1 bg-green-500 rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.6 }}
              />
              <p className="text-gray-600 text-sm md:text-base italic">
                {testimonial.quote}
              </p>
            </motion.div>

            {/* Animated author section */}
            <motion.div 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.5)" }}
              className="mt-6 flex items-center p-3 rounded-lg bg-white bg-opacity-30 backdrop-blur-sm transition-all duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <img
                  className="h-10 w-10 rounded-full border-2 border-white shadow-sm"
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  onError={(e) => {
                    e.currentTarget.src = fallbackImages.user
                  }}
                />
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity
                  }}
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"
                />
              </motion.div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Animated decorative elements */}
    <div className="hidden lg:block">
      <motion.div
        animate={{
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/4 top-1/3 w-16 h-16 rounded-full bg-green-100 opacity-30 blur-xl"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute right-1/4 bottom-1/4 w-20 h-20 rounded-full bg-blue-100 opacity-30 blur-xl"
      />
    </div>
  </div>
</div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 py-12 relative overflow-hidden">
  {/* Decorative elements */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-green-500 opacity-10 blur-3xl"
  />
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.3 }}
    className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {/* Brand Column */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-4">
          <motion.span 
            whileHover={{ scale: 1.02 }}
            className="text-green-500 text-2xl font-bold tracking-tight inline-flex items-center"
          >
            <motion.span 
              whileHover={{ rotate: 5 }}
              className="bg-green-600 text-white px-2 py-1 rounded-lg mr-1"
            >
              Ari
            </motion.span>
            go
            <motion.span 
              whileHover={{ scale: 1.2 }}
              className="text-sm text-green-500 ml-1"
            >
              .ng
            </motion.span>
          </motion.span>
        </div>
        <p className="text-gray-400 mb-4">
          Nigeria most trusted platform for premium gadgets. Buy new, sell used, or swap for an upgrade.
        </p>
        <div className="flex space-x-4">
          {[
            {
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
              name: "Facebook"
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              ),
              name: "Twitter"
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
              name: "Instagram"
            }
          ].map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ y: -3, scale: 1.1, color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="text-gray-400 hover:text-white transition-all duration-200"
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Quick Links Column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
          <motion.span 
            className="w-2 h-2 bg-green-500 rounded-full mr-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Quick Links
        </h3>
        <ul className="space-y-3">
          {[
            { name: "Home", href: "#home" },
            { name: "Shop", href: "#shop" },
            { name: "Swap", href: "#swap" },
            { name: "Sell", href: "#sell" },
            { name: "About Us", href: "#about" }
          ].map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a 
                href={link.href} 
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
              >
                <motion.span 
                  className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Support Column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
          <motion.span 
            className="w-2 h-2 bg-green-500 rounded-full mr-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          Support
        </h3>
        <ul className="space-y-3">
          {[
            { name: "FAQ", href: "#faq" },
            { name: "Shipping Policy", href: "#shipping" },
            { name: "Returns & Refunds", href: "#returns" },
            { name: "Warranty", href: "#warranty" },
            { name: "Privacy Policy", href: "#privacy" }
          ].map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a 
                href={link.href} 
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
              >
                <motion.span 
                  className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 + 0.3 }}
                />
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Contact Column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
          <motion.span 
            className="w-2 h-2 bg-green-500 rounded-full mr-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          />
          Contact Us
        </h3>
        <ul className="space-y-3">
          <motion.li
            whileHover={{ x: 5 }}
            className="flex items-start"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              className="h-5 w-5 text-green-500 mr-2 mt-0.5"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </motion.div>
            <span>123 Tech Street, Lagos, Nigeria</span>
          </motion.li>
          
          <motion.li
            whileHover={{ x: 5 }}
            className="flex items-center"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              className="h-5 w-5 text-green-500 mr-2"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </motion.div>
            <span>+234 123 456 7890</span>
          </motion.li>
          
          <motion.li
            whileHover={{ x: 5 }}
            className="flex items-center"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              className="h-5 w-5 text-green-500 mr-2"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </motion.div>
            <span>support@arigo.ng</span>
          </motion.li>
        </ul>
      </motion.div>
    </motion.div>

    {/* Copyright */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400"
    >
      <p>© {new Date().getFullYear()} Arigo.ng. All rights reserved.</p>
    </motion.div>
  </div>
</footer>
    </div>
  )
}

export default LandingPage
