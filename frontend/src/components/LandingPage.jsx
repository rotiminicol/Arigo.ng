"use client"

import { useState } from "react"
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
  Heart,
  Gift,
  Clock,
  ChevronDown,
} from "lucide-react"

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("buy")
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Image URLs for products
  const productImages = {
    iphone:
      "https://images.unsplash.com/photo-1695048135180-16cda495a2e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    samsung:
      "https://images.unsplash.com/photo-1677432652651-d3c02d5e1fad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    playstation:
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    macbook:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    techGadgets:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    user1: "https://randomuser.me/api/portraits/women/12.jpg",
    user2: "https://randomuser.me/api/portraits/men/32.jpg",
    user3: "https://randomuser.me/api/portraits/women/45.jpg",
    testimonial1: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial2: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial3: "https://randomuser.me/api/portraits/men/75.jpg",
  }

  // Fallback images in case external URLs fail
  const fallbackImages = {
    product: "/placeholder.svg?height=500&width=500",
    user: "/placeholder.svg?height=100&width=100",
    logo: "/placeholder.svg?height=50&width=100",
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-green-600 text-2xl font-bold tracking-tight">
                  <span className="bg-green-600 text-white px-2 py-1 rounded-lg mr-1">Ari</span>go
                  <span className="text-sm text-green-600 ml-1">.ng</span>
                </span>
              </div>
              <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                <a href="#home" className="text-green-600 border-green-600 border-b-2 px-1 pt-1 text-sm font-medium">
                  Home
                </a>
                <a
                  href="#shop"
                  className="text-gray-500 hover:text-green-600 px-1 pt-1 text-sm font-medium transition-colors duration-200"
                >
                  Shop
                </a>
                <a
                  href="#swap"
                  className="text-gray-500 hover:text-green-600 px-1 pt-1 text-sm font-medium transition-colors duration-200"
                >
                  Swap
                </a>
                <a
                  href="#sell"
                  className="text-gray-500 hover:text-green-600 px-1 pt-1 text-sm font-medium transition-colors duration-200"
                >
                  Sell
                </a>
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center text-gray-500 hover:text-green-600 px-1 pt-1 text-sm font-medium transition-colors duration-200"
                  >
                    More <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                      <a
                        href="#blog"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        Blog
                      </a>
                      <a
                        href="#events"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        Events
                      </a>
                      <a
                        href="#support"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        Support
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-6">
              <a
                href="/account"
                className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors duration-200 flex items-center"
              >
                <Heart className="h-5 w-5 mr-1" /> Wishlist
              </a>
              <a
                href="/cart"
                className="relative text-gray-700 hover:text-green-600 text-sm font-medium transition-colors duration-200"
              >
                <div className="flex items-center">
                  <ShoppingCart size={20} />
                  <span className="ml-1">Cart</span>
                </div>
              </a>
              <a
                href="/login"
                className="ml-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Sign In
              </a>
            </div>
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-green-600 focus:outline-none transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white shadow-lg transition-all duration-300">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#home" className="bg-green-50 text-green-600 block pl-3 pr-4 py-3 text-base font-medium">
                Home
              </a>
              <a
                href="#shop"
                className="text-gray-500 hover:bg-gray-50 block pl-3 pr-4 py-3 text-base font-medium transition-colors duration-200"
              >
                Shop
              </a>
              <a
                href="#swap"
                className="text-gray-500 hover:bg-gray-50 block pl-3 pr-4 py-3 text-base font-medium transition-colors duration-200"
              >
                Swap
              </a>
              <a
                href="#sell"
                className="text-gray-500 hover:bg-gray-50 block pl-3 pr-4 py-3 text-base font-medium transition-colors duration-200"
              >
                Sell
              </a>
              <a
                href="#about"
                className="text-gray-500 hover:bg-gray-50 block pl-3 pr-4 py-3 text-base font-medium transition-colors duration-200"
              >
                About
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 px-4">
              <div className="flex flex-col space-y-3">
                <a
                  href="/wishlist"
                  className="text-gray-700 hover:text-green-600 text-base font-medium text-center py-2 transition-colors duration-200 flex items-center justify-center"
                >
                  <Heart className="h-5 w-5 mr-2" /> Wishlist
                </a>
                <a
                  href="/cart"
                  className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-3 rounded-lg text-base font-medium hover:from-green-700 hover:to-green-600 transition-all duration-200 shadow-md text-center flex items-center justify-center"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Cart
                </a>
                <a
                  href="/login"
                  className="border border-green-600 text-green-600 px-4 py-3 rounded-lg text-base font-medium hover:bg-green-50 transition-colors duration-200 text-center"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        )}
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
      <div className="bg-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wider mb-6">
            Trusted by Leading Tech Brands
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 items-center">
            {["Apple", "Samsung", "Sony", "Microsoft", "HP"].map((brand) => (
              <div
                key={brand}
                className="col-span-1 flex justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                <img
                  src={`https://logo.clearbit.com/${brand.toLowerCase()}.com`}
                  alt={brand}
                  className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.parentElement.innerHTML = `<span class="text-xl font-bold text-gray-700">${brand}</span>`
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shop/Swap/Sell Tabs */}
      <div id="shop" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Your Gateway to Smart Tech</h2>
            <p className="mt-4 text-lg text-gray-600">
              Whether youre looking to buy, sell, or exchange devices, we provide the most seamless experience in
              Nigeria.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab("buy")}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${activeTab === "buy" ? "bg-white shadow-sm text-green-600" : "text-gray-600 hover:text-gray-700"}`}
              >
                <ShoppingCart className="inline mr-2 h-4 w-4" />
                Buy New
              </button>
              <button
                onClick={() => setActiveTab("swap")}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${activeTab === "swap" ? "bg-white shadow-sm text-green-600" : "text-gray-600 hover:text-gray-700"}`}
              >
                <RefreshCw className="inline mr-2 h-4 w-4" />
                Swap
              </button>
              <button
                onClick={() => setActiveTab("sell")}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${activeTab === "sell" ? "bg-white shadow-sm text-green-600" : "text-gray-600 hover:text-gray-700"}`}
              >
                <DollarSign className="inline mr-2 h-4 w-4" />
                Sell Used
              </button>
            </div>
          </div>

          {activeTab === "buy" && (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-gray-100 group"
                >
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      onError={(e) => {
                        e.currentTarget.src = fallbackImages.product
                      }}
                    />
                    {product.tag && (
                      <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                        {product.tag}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"></div>
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
                        <span key={i} className={`w-4 h-4 rounded-full ${color} border border-gray-200`}></span>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <button className="text-sm text-green-600 font-medium hover:text-green-800 transition-colors duration-200">
                        View Details
                      </button>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center">
                        <ShoppingCart size={16} className="mr-1" /> Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "swap" && (
            <div className="mt-12">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-8 md:flex md:items-center md:justify-between">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900">Smart Device Swapping</h3>
                    <p className="mt-2 text-gray-600">
                      Our innovative swap system lets you upgrade your devices by paying only the difference. Get fair
                      market value for your current device.
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-green-600" />
                          <span className="ml-2 text-sm font-medium">Fast Process</span>
                        </div>
                        <p className="mt-1 text-xs text-gray-600">Swap completed in 24hrs</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center">
                          <BarChart2 className="h-5 w-5 text-green-600" />
                          <span className="ml-2 text-sm font-medium">Best Value</span>
                        </div>
                        <p className="mt-1 text-xs text-gray-600">Fair market prices</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <a
                        href="#swap-form"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-all duration-200 shadow"
                      >
                        Start Swap Now <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:w-1/2 md:pl-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Smartphone className="h-8 w-8 text-gray-400" />
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-500">Your Device</p>
                            <p className="font-medium text-gray-900">iPhone 12 Pro</p>
                            <p className="text-xs text-gray-500">128GB • Good Condition</p>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                        <div className="flex items-center">
                          <Smartphone className="h-8 w-8 text-green-500" />
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-500">Upgrade To</p>
                            <p className="font-medium text-gray-900">iPhone 15 Pro</p>
                            <p className="text-xs text-gray-500">256GB • Brand New</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Your Device Value</span>
                          <span className="text-sm font-medium text-gray-900">₦320,000</span>
                        </div>
                        <div className="mt-2 flex justify-between">
                          <span className="text-sm text-gray-500">New Device Price</span>
                          <span className="text-sm font-medium text-gray-900">₦850,000</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                          <span className="text-base font-medium text-gray-900">Amount To Pay</span>
                          <span className="text-xl font-bold text-green-600">₦530,000</span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">* Includes free shipping and 1-year warranty</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "sell" && (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900">Sell Your Device in 3 Steps</h3>
                <p className="mt-2 text-gray-600">
                  Get instant cash for your used devices with our hassle-free process.
                </p>
                <div className="mt-6">
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-800 font-bold">
                          1
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Describe your device</p>
                        <p className="mt-1 text-sm text-gray-600">
                          Tell us about your gadgets model, condition, and specifications.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-800 font-bold">
                          2
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Get instant valuation</p>
                        <p className="mt-1 text-sm text-gray-600">
                          Our AI-powered system provides a fair market price immediately.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-800 font-bold">
                          3
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Schedule pickup & get paid</p>
                        <p className="mt-1 text-sm text-gray-600">
                          We collect your device and pay you instantly upon verification.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href="#sell-form"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-all duration-200 shadow"
                    >
                      Get Your Price Now <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900">Current High-Demand Devices</h3>
                <p className="mt-2 text-gray-600">These devices are in high demand and fetch premium prices:</p>
                <div className="mt-6 space-y-4">
                  {[
                    { name: "iPhone 14 Pro Max", price: "₦450,000 - ₦500,000", condition: "Good Condition" },
                    { name: "Samsung S22 Ultra", price: "₦380,000 - ₦420,000", condition: "Like New" },
                    { name: "MacBook Pro M1", price: "₦550,000 - ₦600,000", condition: "Excellent" },
                    { name: "PlayStation 5", price: "₦300,000 - ₦350,000", condition: "Complete Set" },
                  ].map((device, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <div>
                        <span className="text-sm font-medium text-gray-900">{device.name}</span>
                        <p className="text-xs text-gray-500">{device.condition}</p>
                      </div>
                      <span className="text-sm font-bold text-green-600">{device.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <a href="#demand-list" className="text-sm text-green-600 hover:text-green-800 font-medium">
                    View Full Demand List →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">The Arigo Advantage</h2>
            <p className="mt-4 text-lg text-gray-600">
              Were revolutionizing the gadget marketplace with unique benefits you wont find elsewhere.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Shield className="h-8 w-8 text-green-600" />,
                title: "100% Authentic",
                description:
                  "Every device undergoes 25-point inspection to guarantee authenticity and perfect functionality.",
              },
              {
                icon: <RefreshCw className="h-8 w-8 text-green-600" />,
                title: "Seamless Swaps",
                description: "Our proprietary valuation system ensures fair trade-in values for your current devices.",
              },
              {
                icon: <DollarSign className="h-8 w-8 text-green-600" />,
                title: "Price Advantage",
                description: "We offer the most competitive prices in Nigeria, whether you're buying or selling.",
              },
              {
                icon: <Truck className="h-8 w-8 text-green-600" />,
                title: "Swift Logistics",
                description: "Free same-day delivery in Lagos, next-day delivery in other major cities.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
              >
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Trusted by Tech Enthusiasts</h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of satisfied customers whove transformed their tech experience with us.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Sold my iPhone 12 through Arigo and got paid instantly. The process was so smooth and the price was fair. Will definitely use them again!",
                name: "Adebayo Johnson",
                role: "Lagos",
                stars: 5,
                image: productImages.testimonial1,
              },
              {
                quote:
                  "The swap service is a game changer! I upgraded from iPhone 13 to 15 by just paying the difference. The device I received was in perfect condition.",
                name: "Chioma Okeke",
                role: "Abuja",
                stars: 5,
                image: productImages.testimonial2,
              },
              {
                quote:
                  "I was skeptical about buying expensive tech online, but Arigo proved me wrong. Genuine products with warranty and fast delivery. Highly recommended!",
                name: "Emeka Okafor",
                role: "Port Harcourt",
                stars: 5,
                image: productImages.testimonial3,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-gray-600 text-sm">{testimonial.quote}</p>
                <div className="mt-6 flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    onError={(e) => {
                      e.currentTarget.src = fallbackImages.user
                    }}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <span className="text-green-500 text-2xl font-bold tracking-tight">
                  <span className="bg-green-600 text-white px-2 py-1 rounded-lg mr-1">Ari</span>go
                  <span className="text-sm text-green-500 ml-1">.ng</span>
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Nigerias most trusted platform for premium gadgets. Buy new, sell used, or swap for an upgrade.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#shop" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#swap" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Swap
                  </a>
                </li>
                <li>
                  <a href="#sell" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Sell
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-200">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#shipping" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#returns" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#warranty" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Warranty
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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
                  <span>123 Tech Street, Lagos, Nigeria</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+234 123 456 7890</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>support@arigo.ng</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Arigo.ng. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
