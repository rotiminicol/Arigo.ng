"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaSearch, FaShoppingCart, FaHeart, FaStar, FaCheck, FaClock, FaMoneyBillWave, FaExchangeAlt, FaInstagram, FaTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa"
import { FiChevronDown, FiChevronRight } from "react-icons/fi"

const BuySellSwap = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How does the BuySellSwap payment plan work?",
      answer: "You select a product and payment plan, make the first payment, and receive your product immediately. Subsequent payments are automatically deducted from your bank account monthly.",
      open: false,
    },
    {
      question: "What are the requirements to qualify?",
      answer: "You need to be at least 18 years old, have a valid ID, a Nigerian bank account, and meet our basic credit assessment criteria.",
      open: false,
    },
    {
      question: "Can I pay off my plan early?",
      answer: "Yes, you can pay off your plan early without any penalties. Contact our support team to arrange early payment.",
      open: false,
    },
    {
      question: "What happens if I miss a payment?",
      answer: "A late fee may apply, and your account may be temporarily restricted until payment is made. Consistent non-payment may affect future eligibility.",
      open: false,
    },
    {
      question: "Can I return the product if I change my mind?",
      answer: "Returns are accepted within 7 days of purchase, provided the product is in original condition. You'll be responsible for any outstanding payments.",
      open: false,
    },
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [showProductDetails, setShowProductDetails] = useState(false)
  const [showPlanDetails, setShowPlanDetails] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    employmentStatus: "",
    monthlyIncome: "",
    idType: "",
    idNumber: "",
    bankName: "",
    accountNumber: "",
  })
  const [errors, setErrors] = useState({})

  // Platinum color scheme
  const platinumColors = {
    primary: "#2ecc71", // Emerald green
    secondary: "#27ae60", // Darker green
    accent: "#f1c40f", // Gold accent
    dark: "#2c3e50", // Dark blue
    light: "#ecf0f1", // Light gray
  }

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: "₦1,200,000",
      image: (
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="10" width="60" height="80" rx="10" fill="#ecf0f1" stroke="#2c3e50" strokeWidth="2"/>
          <circle cx="75" cy="15" r="5" fill="#2ecc71"/>
          <circle cx="75" cy="15" r="3" fill="#27ae60"/>
          <rect x="30" y="20" width="40" height="60" fill="none" stroke="#2c3e50" strokeWidth="1"/>
        </svg>
      ),
      brand: "Apple",
      rating: 4.9,
      stock: 15,
      description: "6.7-inch Super Retina XDR display, A17 Pro chip, 48MP camera system, and titanium design.",
      paymentPlans: [
        { id: 1, name: "3 Months Plan", duration: 3, monthlyPayment: "₦410,000", interest: "5%", total: "₦1,230,000" },
        { id: 2, name: "6 Months Plan", duration: 6, monthlyPayment: "₦215,000", interest: "8%", total: "₦1,290,000" },
        { id: 3, name: "12 Months Plan", duration: 12, monthlyPayment: "₦115,000", interest: "15%", total: "₦1,380,000" },
      ]
    },
    {
      id: 2,
      name: "PlayStation 5 Digital Edition",
      price: "₦450,000",
      image: (
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="20" width="40" height="60" rx="5" fill="#ecf0f1" stroke="#2c3e50" strokeWidth="2"/>
          <path d="M40 80 L40 85 Q50 90 60 85 L60 80" fill="#2ecc71" stroke="#2c3e50" strokeWidth="1"/>
          <circle cx="50" cy="40" r="5" fill="#27ae60"/>
        </svg>
      ),
      brand: "Sony",
      rating: 4.8,
      stock: 8,
      description: "Next-gen gaming with ultra-high speed SSD, 3D audio, and haptic feedback in the DualSense wireless controller.",
      paymentPlans: [
        { id: 1, name: "3 Months Plan", duration: 3, monthlyPayment: "₦155,000", interest: "5%", total: "₦465,000" },
        { id: 2, name: "6 Months Plan", duration: 6, monthlyPayment: "₦81,000", interest: "8%", total: "₦486,000" },
        { id: 3, name: "12 Months Plan", duration: 12, monthlyPayment: "₦43,500", interest: "15%", total: "₦522,000" },
      ]
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Headphones",
      price: "₦280,000",
      image: (
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 50 Q20 20 50 20 Q80 20 80 50" fill="none" stroke="#2c3e50" strokeWidth="4"/>
          <rect x="15" y="50" width="20" height="30" rx="5" fill="#ecf0f1" stroke="#2c3e50" strokeWidth="2"/>
          <rect x="65" y="50" width="20" height="30" rx="5" fill="#ecf0f1" stroke="#2c3e50" strokeWidth="2"/>
          <circle cx="25" cy="65" r="5" fill="#2ecc71"/>
          <circle cx="75" cy="65" r="5" fill="#2ecc71"/>
        </svg>
      ),
      brand: "Sony",
      rating: 4.7,
      stock: 22,
      description: "Industry-leading noise cancellation with 30-hour battery life and crystal clear hands-free calling.",
      paymentPlans: [
        { id: 1, name: "3 Months Plan", duration: 3, monthlyPayment: "₦96,500", interest: "5%", total: "₦289,500" },
        { id: 2, name: "6 Months Plan", duration: 6, monthlyPayment: "₦50,500", interest: "8%", total: "₦303,000" },
        { id: 3, name: "12 Months Plan", duration: 12, monthlyPayment: "₦26,900", interest: "15%", total: "₦322,800" },
      ]
    },
    {
      id: 4,
      name: "Samsung Galaxy S23 Ultra",
      price: "₦950,000",
      image: (
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="10" width="60" height="80" rx="10" fill="#ecf0f1" stroke="#2c3e50" strokeWidth="2"/>
          <path d="M80 80 L90 90 L85 95 L75 85" fill="#2ecc71" stroke="#2c3e50" strokeWidth="1"/>
          <rect x="30" y="20" width="40" height="60" fill="none" stroke="#2c3e50" strokeWidth="1"/>
        </svg>
      ),
      brand: "Samsung",
      rating: 4.8,
      stock: 12,
      description: "200MP camera, S Pen included, 5000mAh battery, and the fastest Snapdragon processor.",
      paymentPlans: [
        { id: 1, name: "3 Months Plan", duration: 3, monthlyPayment: "₦327,500", interest: "5%", total: "₦982,500" },
        { id: 2, name: "6 Months Plan", duration: 6, monthlyPayment: "₦171,000", interest: "8%", total: "₦1,026,000" },
        { id: 3, name: "12 Months Plan", duration: 12, monthlyPayment: "₦91,000", interest: "15%", total: "₦1,092,000" },
      ]
    },
    {
      id: 5,
      name: "Apple MacBook Pro 14\" M2 Pro",
      price: "₦1,850,000",
      image: (
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="30" width="80" height="50" rx="5" fill="#ecf0f1" stroke="#2c3e50" strokeWidth="2"/>
          <rect x="30" y="60" width="40" height="10" rx="2" fill="#2ecc71" stroke="#2c3e50" strokeWidth="1"/>
          <rect x="10" y="80" width="80" height="10" fill="#2c3e50"/>
        </svg>
      ),
      brand: "Apple",
      rating: 4.9,
      stock: 5,
      description: "M2 Pro chip with 10-core CPU and 16-core GPU, 16GB unified memory, 512GB SSD storage.",
      paymentPlans: [
        { id: 1, name: "3 Months Plan", duration: 3, monthlyPayment: "₦637,500", interest: "5%", total: "₦1,912,500" },
        { id: 2, name: "6 Months Plan", duration: 6, monthlyPayment: "₦333,000", interest: "8%", total: "₦1,998,000" },
        { id: 3, name: "12 Months Plan", duration: 12, monthlyPayment: "₦177,500", interest: "15%", total: "₦2,130,000" },
      ]
    },
    {
      id: 6,
      name: "DJI Mini 3 Pro Drone",
      price: "₦650,000",
      image: (
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="40" width="20" height="20" rx="3" fill="#ecf0f1" stroke="#2c3e50" strokeWidth="2"/>
          <circle cx="30" cy="30" r="5" fill="#2ecc71"/>
          <circle cx="70" cy="30" r="5" fill="#2ecc71"/>
          <circle cx="30" cy="70" r="5" fill="#2ecc71"/>
          <circle cx="70" cy="70" r="5" fill="#2ecc71"/>
          <path d="M30 30 L40 40 M70 30 L60 40 M30 70 L40 60 M70 70 L60 60" stroke="#2c3e50" strokeWidth="1"/>
        </svg>
      ),
      brand: "DJI",
      rating: 4.7,
      stock: 7,
      description: "Ultra-light camera drone with 4K/60fps video, 48MP photos, and 34-min flight time.",
      paymentPlans: [
        { id: 1, name: "3 Months Plan", duration: 3, monthlyPayment: "₦224,000", interest: "5%", total: "₦672,000" },
        { id: 2, name: "6 Months Plan", duration: 6, monthlyPayment: "₦117,000", interest: "8%", total: "₦702,000" },
        { id: 3, name: "12 Months Plan", duration: 12, monthlyPayment: "₦62,400", interest: "15%", total: "₦748,800" },
      ]
    },
  ]

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleProductSelect = (product) => {
    setSelectedProduct(product)
    setShowProductDetails(true)
    setSelectedPlan(null)
    setShowPlanDetails(false)
  }

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan)
    setShowPlanDetails(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: "" })
  }

  const validateStep1 = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.address.trim()) newErrors.address = "Address is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}
    if (!formData.employmentStatus) newErrors.employmentStatus = "Employment status is required"
    if (!formData.monthlyIncome) newErrors.monthlyIncome = "Monthly income is required"
    if (!formData.idType) newErrors.idType = "ID type is required"
    if (!formData.idNumber) newErrors.idNumber = "ID number is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = () => {
    const newErrors = {}
    if (!formData.bankName.trim()) newErrors.bankName = "Bank name is required"
    if (!formData.accountNumber.trim()) newErrors.accountNumber = "Account number is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (currentStep === 1 && !validateStep1()) return
    if (currentStep === 2 && !validateStep2()) return
    if (currentStep === 3 && !validateStep3()) return
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }
    // Animation variants
    const fadeIn = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    }
  
    const stagger = {
      visible: { transition: { staggerChildren: 0.15 } },
    }
  
    const pulse = {
      animate: { scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } },
    }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentStep === 4) {
      // Submit the application
      alert("Your BuySellSwap application has been submitted successfully!")
      // Reset form
      setSelectedProduct(null)
      setSelectedPlan(null)
      setShowProductDetails(false)
      setShowPlanDetails(false)
      setCurrentStep(1)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        employmentStatus: "",
        monthlyIncome: "",
        idType: "",
        idNumber: "",
        bankName: "",
        accountNumber: "",
      })
    } else {
      nextStep()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Enhanced Header */}
    <header className="w-full bg-gradient-to-r from-green-700 to-green-600 text-white py-3 md:py-4 relative shadow-lg">
        {/* Floating decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-400 rounded-full filter blur-[80px] opacity-20 animate-float-slow" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-[80px] opacity-15 animate-float-medium" />
        
        <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span
              className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white"
            >
              Arigo
            </span>
            <span className="text-xs ml-2 bg-yellow-500 text-white px-2 py-1 rounded-full font-semibold">
              .ng
            </span>
          </motion.div>

          {/* Cart and Wishlist Buttons */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              className="p-2 rounded-full bg-green-500/20 hover:bg-green-500/40 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="View cart"
            >
              <FaShoppingCart className="text-white text-lg" />
            </motion.button>
            <motion.button
              className="p-2 rounded-full bg-green-500/20 hover:bg-green-500/40 transition-colors"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="View wishlist"
            >
              <FaHeart className="text-white text-lg" />
            </motion.button>
          </motion.div>
        </div>
      </header>

         {/* Enhanced Main Section */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        {currentStep === 1 && !showProductDetails && !showPlanDetails && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-12"
          >
            {/* Hero Section */}
            <motion.div
              className="text-center"
              variants={fadeIn}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-400 mb-4"
                variants={pulse}
              >
                BuySellSwap Payment Plans
              </motion.h1>
              <motion.p
                className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                variants={fadeIn}
              >
                Discover your dream gadgets and pay with flexible installments. Explore our curated selection and tailored plans.
              </motion.p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              className="relative max-w-lg mx-auto"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <input
                type="text"
                placeholder="Search for gadgets..."
                className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 shadow-sm transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <motion.div
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
                variants={pulse}
              >
                <FaSearch className="text-green-600 text-lg" />
              </motion.div>
            </motion.div>

            {/* Product Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={stagger}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-gray-100 hover:border-green-300 transition-all"
                  variants={fadeIn}
                  whileHover={{ y: -10, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.15)" }}
                  onClick={() => handleProductSelect(product)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  role="button"
                  aria-label={`Select ${product.name}`}
                >
                  <div className="h-56 bg-gray-50 flex items-center justify-center relative">
                    {product.image}
                    <motion.div
                      className="absolute top-3 right-3 bg-green-600 text-white rounded-full p-1.5"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaStar size={16} />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-gray-500 text-sm">{product.brand}</p>
                      </div>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="text-gray-600 text-sm">{product.rating}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="text-2xl font-bold" style={{ color: platinumColors.primary }}>
                        {product.price}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mb-4">
                      <span>Available: {product.stock}</span>
                    </div>
                    <motion.button
                      className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ background: `linear-gradient(to right, ${platinumColors.primary}, ${platinumColors.secondary})` }}
                    >
                      View Plans
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {showProductDetails && !showPlanDetails && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="p-8 md:p-10">
              <motion.button
                onClick={() => {
                  setShowProductDetails(false)
                  setSelectedProduct(null)
                }}
                className="flex items-center text-green-600 mb-6 font-semibold"
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FiChevronRight className="transform rotate-180 mr-2" /> Back to products
              </motion.button>

              <div className="md:flex gap-10">
                <motion.div
                  className="md:w-1/2 mb-8 md:mb-0"
                  variants={fadeIn}
                >
                  <div className="bg-gray-50 rounded-2xl h-80 md:h-96 flex items-center justify-center overflow-hidden relative">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {selectedProduct.image}
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-1/2"
                  variants={stagger}
                >
                  <motion.h2
                    className="text-3xl font-extrabold text-gray-800 mb-3"
                    variants={fadeIn}
                  >
                    {selectedProduct.name}
                  </motion.h2>
                  <motion.p
                    className="text-gray-500 text-sm mb-4"
                    variants={fadeIn}
                  >
                    {selectedProduct.brand}
                  </motion.p>
                  <motion.div
                    className="flex items-center mb-6"
                    variants={fadeIn}
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${i < Math.floor(selectedProduct.rating) ? "text-yellow-400" : "text-gray-300"} mr-1`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-sm">
                      {selectedProduct.rating} ({selectedProduct.stock} available)
                    </span>
                  </motion.div>
                  <motion.div
                    className="mb-8"
                    variants={fadeIn}
                  >
                    <span className="text-4xl font-bold" style={{ color: platinumColors.primary }}>
                      {selectedProduct.price}
                    </span>
                  </motion.div>
                  <motion.p
                    className="text-gray-700 text-base mb-8 leading-relaxed"
                    variants={fadeIn}
                  >
                    {selectedProduct.description}
                  </motion.p>

                  <motion.h3
                    className="text-2xl font-semibold mb-6"
                    style={{ color: platinumColors.dark }}
                    variants={fadeIn}
                  >
                    Available Payment Plans
                  </motion.h3>
                  <motion.div
                    className="space-y-4"
                    variants={stagger}
                  >
                    {selectedProduct.paymentPlans.map((plan, index) => (
                      <motion.div
                        key={plan.id}
                        className={`border border-gray-200 rounded-xl p-5 cursor-pointer transition-all ${
                          selectedPlan?.id === plan.id
                            ? "border-green-500 bg-green-50/50 shadow-md"
                            : "hover:border-green-400 hover:bg-green-50/30"
                        }`}
                        onClick={() => handlePlanSelect(plan)}
                        variants={fadeIn}
                        whileHover={{ y: -5, boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1)" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        role="button"
                        aria-selected={selectedPlan?.id === plan.id}
                      >
                        <AnimatePresence>
                          {selectedPlan?.id === plan.id && (
                            <motion.div
                              className="absolute top-3 right-3 bg-green-600 text-white rounded-full p-1.5"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <FaCheck size={16} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-gray-800">{plan.name}</h4>
                            <p className="text-sm text-gray-500">{plan.duration} months</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-lg" style={{ color: platinumColors.primary }}>
                              {plan.monthlyPayment}/mo
                            </p>
                            <p className="text-sm text-gray-500">Total: {plan.total}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {showPlanDetails && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="p-8 md:p-10">
              <motion.button
                onClick={() => {
                  setShowPlanDetails(false)
                  setSelectedPlan(null)
                }}
                className="flex items-center text-green-600 mb-6 font-semibold"
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FiChevronRight className="transform rotate-180 mr-2" /> Back to plans
              </motion.button>

              <div className="md:flex gap-10">
                <motion.div
                  className="md:w-1/3 mb-8 md:mb-0"
                  variants={fadeIn}
                >
                  <div className="bg-gray-50 rounded-2xl h-64 flex items-center justify-center mb-4 overflow-hidden relative">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {selectedProduct.image}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{selectedProduct.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{selectedProduct.brand}</p>
                  <p className="text-2xl font-bold" style={{ color: platinumColors.primary }}>
                    {selectedProduct.price}
                  </p>
                </motion.div>
                <motion.div
                  className="md:w-2/3"
                  variants={stagger}
                >
                  <motion.h2
                    className="text-3xl font-extrabold text-gray-800 mb-6"
                    variants={fadeIn}
                  >
                    Apply for {selectedPlan.name}
                  </motion.h2>

                  <motion.div
                    className="bg-green-50/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-green-100"
                    variants={fadeIn}
                    whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <h3 className="font-semibold text-lg mb-4" style={{ color: platinumColors.primary }}>
                      Plan Summary
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-gray-600">Monthly Payment</p>
                        <p className="font-semibold text-gray-800">{selectedPlan.monthlyPayment}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-semibold text-gray-800">{selectedPlan.duration} months</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Interest Rate</p>
                        <p className="font-semibold text-gray-800">{selectedPlan.interest}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Amount</p>
                        <p className="font-semibold text-gray-800">{selectedPlan.total}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="mb-8"
                    variants={stagger}
                  >
                    {[
                      "First payment due upon approval",
                      "Subsequent payments automatically deducted from your account",
                      "Receive your product after first payment confirmation",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center mb-4"
                        variants={fadeIn}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mr-3"
                          variants={pulse}
                        >
                          <FaCheck className="text-white text-sm" />
                        </motion.div>
                        <p className="text-gray-700 text-base">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.button
                    onClick={() => setCurrentStep(2)}
                    className="w-full py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variants={fadeIn}
                    style={{ background: `linear-gradient(to right, ${platinumColors.primary}, ${platinumColors.secondary})` }}
                  >
                    Apply Now
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep > 1 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="p-8 md:p-10">
              {/* Progress Steps */}
              <motion.div
                className="flex justify-between mb-10 relative"
                variants={stagger}
              >
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10" />
                <motion.div
                  className="absolute top-1/2 left-0 h-1 bg-green-500 -z-10 transition-all duration-500"
                  animate={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                  style={{ backgroundColor: platinumColors.primary }}
                />
                {[1, 2, 3, 4].map((step, index) => (
                  <motion.div
                    key={step}
                    className="flex flex-col items-center"
                    variants={fadeIn}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center text-base font-semibold ${
                        currentStep >= step
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      } shadow-md`}
                      style={{ backgroundColor: currentStep >= step ? platinumColors.primary : "" }}
                    >
                      {step}
                    </div>
                    <span
                      className={`mt-3 text-sm ${
                        currentStep >= step ? "text-green-500 font-semibold" : "text-gray-500"
                      }`}
                      style={{ color: currentStep >= step ? platinumColors.primary : "" }}
                    >
                      {step === 1 ? "Product" : step === 2 ? "Personal" : step === 3 ? "Financial" : "Review"}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <form onSubmit={handleSubmit}>
                {currentStep === 2 && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                  >
                    <motion.h2
                      className="text-2xl font-extrabold text-gray-800 mb-8"
                      variants={fadeIn}
                      style={{ color: platinumColors.dark }}
                    >
                      Personal Information
                    </motion.h2>
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                      variants={stagger}
                    >
                      {[
                        { id: "fullName", label: "Full Name *", type: "text" },
                        { id: "email", label: "Email *", type: "email" },
                        { id: "phone", label: "Phone Number *", type: "tel" },
                        { id: "address", label: "Address *", type: "text" },
                      ].map((field, index) => (
                        <motion.div
                          key={field.id}
                          variants={fadeIn}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <label
                            htmlFor={field.id}
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            value={formData[field.id]}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 shadow-sm transition-all ${
                              errors[field.id] ? "border-red-500" : ""
                            }`}
                          />
                          {errors[field.id] && (
                            <p className="mt-1 text-xs text-red-600">{errors[field.id]}</p>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div
                      className="flex justify-end"
                      variants={fadeIn}
                    >
                      <motion.button
                        type="button"
                        onClick={nextStep}
                        className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ background: `linear-gradient(to right, ${platinumColors.primary}, ${platinumColors.secondary})` }}
                      >
                        Next: Financial Information
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                  >
                    <motion.h2
                      className="text-2xl font-extrabold text-gray-800 mb-8"
                      variants={fadeIn}
                      style={{ color: platinumColors.dark }}
                    >
                      Financial Information
                    </motion.h2>
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                      variants={stagger}
                    >
                      {[
                        {
                          id: "employmentStatus",
                          label: "Employment Status *",
                          type: "select",
                          options: [
                            { value: "", label: "Select status" },
                            { value: "Employed", label: "Employed" },
                            { value: "Self-employed", label: "Self-employed" },
                            { value: "Student", label: "Student" },
                            { value: "Unemployed", label: "Unemployed" },
                          ],
                        },
                        {
                          id: "monthlyIncome",
                          label: "Monthly Income (₦) *",
                          type: "select",
                          options: [
                            { value: "", label: "Select income range" },
                            { value: "0-50000", label: "₦0 - ₦50,000" },
                            { value: "50000-100000", label: "₦50,000 - ₦100,000" },
                            { value: "100000-200000", label: "₦100,000 - ₦200,000" },
                            { value: "200000-500000", label: "₦200,000 - ₦500,000" },
                            { value: "500000+", label: "₦500,000+" },
                          ],
                        },
                        {
                          id: "idType",
                          label: "ID Type *",
                          type: "select",
                          options: [
                            { value: "", label: "Select ID type" },
                            { value: "National ID", label: "National ID" },
                            { value: "Driver's License", label: "Driver's License" },
                            { value: "Voter's Card", label: "Voter's Card" },
                            { value: "International Passport", label: "International Passport" },
                          ],
                        },
                        { id: "idNumber", label: "ID Number *", type: "text" },
                      ].map((field, index) => (
                        <motion.div
                          key={field.id}
                          variants={fadeIn}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <label
                            htmlFor={field.id}
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            {field.label}
                          </label>
                          {field.type === "select" ? (
                            <select
                              id={field.id}
                              name={field.id}
                              value={formData[field.id]}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 shadow-sm transition-all ${
                                errors[field.id] ? "border-red-500" : ""
                              }`}
                            >
                              {field.options.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type={field.type}
                              id={field.id}
                              name={field.id}
                              value={formData[field.id]}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 shadow-sm transition-all ${
                                errors[field.id] ? "border-red-500" : ""
                              }`}
                            />
                          )}
                          {errors[field.id] && (
                            <p className="mt-1 text-xs text-red-600">{errors[field.id]}</p>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div
                      className="flex justify-between"
                      variants={fadeIn}
                    >
                      <motion.button
                        type="button"
                        onClick={prevStep}
                        className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold border border-gray-200 rounded-xl shadow-sm transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Back
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={nextStep}
                        className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ background: `linear-gradient(to right, ${platinumColors.primary}, ${platinumColors.secondary})` }}
                      >
                        Next: Bank Details
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                  >
                    <motion.h2
                      className="text-2xl font-extrabold text-gray-800 mb-8"
                      variants={fadeIn}
                      style={{ color: platinumColors.dark }}
                    >
                      Bank Details
                    </motion.h2>
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                      variants={stagger}
                    >
                      {[
                        { id: "bankName", label: "Bank Name *", type: "text" },
                        { id: "accountNumber", label: "Account Number *", type: "text" },
                      ].map((field, index) => (
                        <motion.div
                          key={field.id}
                          variants={fadeIn}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <label
                            htmlFor={field.id}
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            value={formData[field.id]}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 shadow-sm transition-all ${
                              errors[field.id] ? "border-red-500" : ""
                            }`}
                          />
                          {errors[field.id] && (
                            <p className="mt-1 text-xs text-red-600">{errors[field.id]}</p>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      className="bg-green-50/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-green-100"
                      variants={fadeIn}
                      whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      <h3 className="font-semibold text-lg mb-4" style={{ color: platinumColors.primary }}>
                        Payment Plan Summary
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-3">Product Details</h4>
                          <motion.div
                            className="flex items-start mb-4"
                            variants={fadeIn}
                          >
                            <div className="w-20 h-20 bg-gray-50 rounded-xl mr-4 flex-shrink-0 flex items-center justify-center overflow-hidden">
                              <motion.div
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                              >
                                {selectedProduct.image}
                              </motion.div>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">{selectedProduct.name}</p>
                              <p className="text-sm text-gray-500">{selectedProduct.brand}</p>
                              <p className="font-bold text-lg" style={{ color: platinumColors.primary }}>
                                {selectedProduct.price}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-3">Plan Details</h4>
                          <motion.div
                            className="space-y-3"
                            variants={stagger}
                          >
                            {[
                              { label: "Plan", value: selectedPlan.name },
                              { label: "Monthly Payment", value: selectedPlan.monthlyPayment },
                              { label: "Duration", value: `${selectedPlan.duration} months` },
                              { label: "Interest Rate", value: selectedPlan.interest },
                              { label: "Total Amount", value: selectedPlan.total, bold: true },
                            ].map((item, index) => (
                              <motion.div
                                key={item.label}
                                className="flex justify-between"
                                variants={fadeIn}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                              >
                                <span className="text-gray-600">{item.label}:</span>
                                <span className={item.bold ? "font-semibold text-gray-800" : "text-gray-800"}>
                                  {item.value}
                                </span>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-yellow-50/80 backdrop-blur-sm border-l-4 border-yellow-400 p-6 mb-8 rounded-xl"
                      variants={fadeIn}
                      whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="flex items-start">
                        <motion.div
                          className="flex-shrink-0 mr-3"
                          variants={pulse}
                        >
                          <svg
                            className="h-6 w-6 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </motion.div>
                        <p className="text-sm text-yellow-800 leading-relaxed">
                          By submitting this application, you agree to automatic monthly deductions from your bank account for the duration of the payment plan.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex justify-between"
                      variants={fadeIn}
                    >
                      <motion.button
                        type="button"
                        onClick={prevStep}
                        className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold border border-gray-200 rounded-xl shadow-sm transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Back
                      </motion.button>
                      <motion.button
                        type="submit"
                        className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ background: `linear-gradient(to right, ${platinumColors.primary}, ${platinumColors.secondary})` }}
                      >
                        Submit Application
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        )}
      </main>

     {/* Enhanced Benefits Section */}
     {currentStep === 1 && !showProductDetails && !showPlanDetails && (
        <section className="py-16 relative bg-gradient-to-b from-green-50 to-white overflow-hidden">
          {/* Floating decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-400 rounded-full filter blur-[100px] opacity-20 animate-float-slow" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 rounded-full filter blur-[100px] opacity-15 animate-float-medium" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-400 mb-4"
                variants={pulse}
              >
                Why Choose BuySellSwap?
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                variants={fadeIn}
              >
                Experience seamless shopping with flexible plans, rapid approvals, and easy upgrades tailored to your needs.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={stagger}
            >
              {[
                {
                  icon: <FaMoneyBillWave size={28} />,
                  title: "Flexible Payments",
                  description: "Choose from 3, 6, or 12-month payment plans that fit your budget seamlessly.",
                },
                {
                  icon: <FaClock size={28} />,
                  title: "Fast Approval",
                  description: "Get approved within 24 hours and receive your product immediately.",
                },
                {
                  icon: <FaExchangeAlt size={28} />,
                  title: "Upgrade Anytime",
                  description: "Trade in your device and upgrade to newer models with ease.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:border-green-300 transition-all relative overflow-hidden"
                  variants={fadeIn}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.15)",
                    borderColor: platinumColors.primary,
                  }}
                  viewport={{ once: true }}
                  role="region"
                  aria-label={benefit.title}
                >
                  {/* Subtle gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-yellow-50/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{ zIndex: -1 }}
                  />
                  <motion.div
                    className="flex justify-center mb-6"
                    variants={pulse}
                  >
                    <div
                      className="h-16 w-16 rounded-full flex items-center justify-center shadow-md"
                      style={{ backgroundColor: platinumColors.light }}
                    >
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        style={{ color: platinumColors.primary }}
                      >
                        {benefit.icon}
                      </motion.div>
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}


      {/* Enhanced FAQ Section */}
      {currentStep === 1 && !showProductDetails && !showPlanDetails && (
        <section className="py-16 relative bg-white/95 backdrop-blur-sm">
          {/* Floating decorative elements */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-green-400 rounded-full filter blur-[100px] opacity-20 animate-float-slow" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400 rounded-full filter blur-[100px] opacity-15 animate-float-medium" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-400 mb-4"
                variants={pulse}
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                variants={fadeIn}
              >
                Find answers to common questions about our payment plans, approvals, and upgrade options.
              </motion.p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto"
              variants={stagger}
            >
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:border-green-300 transition-all overflow-hidden"
                    variants={fadeIn}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <button
                      className="w-full text-left p-6 font-semibold text-gray-800 flex justify-between items-center hover:bg-green-50/50 transition-all"
                      onClick={() => {
                        const newFaqs = [...faqs]
                        newFaqs[index].open = !newFaqs[index].open
                        setFaqs(newFaqs)
                      }}
                      aria-expanded={faq.open}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <span className="text-lg pr-4">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: faq.open ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <FiChevronDown className="text-green-600 text-xl" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {faq.open && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="px-6 pb-6 pt-2 text-gray-600 text-base leading-relaxed bg-green-50/30"
                          id={`faq-answer-${index}`}
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}


       {/* Enhanced Footer */}
       <footer className="bg-gradient-to-b from-gray-900 to-green-900/95 py-12 relative text-white overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-green-400 rounded-full filter blur-[100px] opacity-20 animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400 rounded-full filter blur-[100px] opacity-15 animate-float-medium" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
            variants={stagger}
          >
            {/* About Arigo.ng */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white mb-4"
                variants={pulse}
              >
                Arigo.ng
              </motion.h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Nigerias premier destination for premium gadgets with flexible payment options tailored to your lifestyle.
              </p>
              {/* Social Media Icons */}
              <motion.div
                className="flex space-x-4 mt-6"
                variants={stagger}
              >
                {[
                  { icon: <FaTwitter />, href: "#", label: "Twitter" },
                  { icon: <FaInstagram />, href: "#", label: "Instagram" },
                  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
                  { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-full bg-green-500/20 hover:bg-green-500/40 text-gray-200 hover:text-white transition-all"
                    variants={fadeIn}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Follow us on ${social.label}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3 text-base text-gray-300">
                {[
                  { label: "Home", href: "#" },
                  { label: "Products", href: "#" },
                  { label: "BuySellSwap", href: "#" },
                  { label: "About Us", href: "#" },
                ].map((link, index) => (
                  <motion.li
                    key={link.label}
                    variants={fadeIn}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="hover:text-yellow-300 transition-all flex items-center group"
                      aria-label={link.label}
                    >
                      <motion.span
                        className="mr-2 h-1.5 w-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.5 }}
                      />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3 text-base text-gray-300">
                {[
                  { label: "Contact Us", href: "#" },
                  { label: "FAQs", href: "#" },
                  { label: "Payment Plans", href: "#" },
                  { label: "Returns Policy", href: "#" },
                ].map((link, index) => (
                  <motion.li
                    key={link.label}
                    variants={fadeIn}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="hover:text-yellow-300 transition-all flex items-center group"
                      aria-label={link.label}
                    >
                      <motion.span
                        className="mr-2 h-1.5 w-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.5 }}
                      />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-base text-gray-300">
                {[
                  { label: "Lagos, Nigeria", icon: null },
                  { label: "hello@arigo.ng", icon: null, href: "mailto:hello@arigo.ng" },
                  { label: "+234 800 000 0000", icon: null, href: "tel:+2348000000000" },
                ].map((item, index) => (
                  <motion.li
                    key={item.label}
                    variants={fadeIn}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-yellow-300 transition-all flex items-center group"
                        aria-label={item.label}
                      >
                        <motion.span
                          className="mr-2 h-1.5 w-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.5 }}
                        />
                        {item.label}
                      </a>
                    ) : (
                      <span className="flex items-center">
                        <motion.span
                          className="mr-2 h-1.5 w-1.5 bg-green-500 rounded-full"
                          whileHover={{ scale: 1.5 }}
                        />
                        {item.label}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t border-gray-700 mt-12 pt-8 text-center text-base text-gray-300"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>
              © {new Date().getFullYear()} Arigo.ng. All rights reserved.
              <motion.a
                href="#"
                className="ml-2 text-green-400 hover:text-yellow-300 transition-all"
                whileHover={{ scale: 1.1 }}
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </motion.a>
              {" | "}
              <motion.a
                href="#"
                className="text-green-400 hover:text-yellow-300 transition-all"
                whileHover={{ scale: 1.1 }}
                aria-label="Terms of Service"
              >
                Terms of Service
              </motion.a>
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default BuySellSwap