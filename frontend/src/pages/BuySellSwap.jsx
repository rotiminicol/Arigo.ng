"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaSearch, FaShoppingCart, FaHeart, FaStar, FaCheck, FaClock, FaMoneyBillWave, FaExchangeAlt } from "react-icons/fa"
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
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold" style={{ color: platinumColors.primary }}>Arigo</span>
            <span className="text-xs ml-1 bg-yellow-500 text-white px-1 py-0.5 rounded">.ng</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="font-medium hover:text-green-600 transition">Home</a>
            <a href="#" className="font-medium hover:text-green-600 transition">Products</a>
            <a href="#" className="font-medium hover:text-green-600 transition">BuySellSwap</a>
            <a href="#" className="font-medium hover:text-green-600 transition">About Us</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FaShoppingCart className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FaHeart className="text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {currentStep === 1 && !showProductDetails && !showPlanDetails && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2" style={{ color: platinumColors.dark }}>BuySellSwap Payment Plans</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get the gadgets you love today and pay in flexible installments. Choose from our range of products and payment plans.
              </p>
            </div>

            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
                  onClick={() => handleProductSelect(product)}
                >
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    {product.image}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-gray-500 text-sm">{product.brand}</p>
                      </div>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="font-bold text-lg" style={{ color: platinumColors.primary }}>
                        {product.price}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      <span>Available: {product.stock}</span>
                    </div>
                    <button
                      className="mt-4 w-full py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition"
                      style={{ backgroundColor: platinumColors.primary }}
                    >
                      View Plans
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {showProductDetails && !showPlanDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <button
                onClick={() => {
                  setShowProductDetails(false)
                  setSelectedProduct(null)
                }}
                className="flex items-center text-blue-600 mb-4"
              >
                <FiChevronRight className="transform rotate-180 mr-1" /> Back to products
              </button>

              <div className="md:flex gap-8">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="bg-gray-100 rounded-lg h-64 md:h-80 flex items-center justify-center">
                    {selectedProduct.image}
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                  <p className="text-gray-500 mb-4">{selectedProduct.brand}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${i < Math.floor(selectedProduct.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">{selectedProduct.rating} ({selectedProduct.stock} available)</span>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold" style={{ color: platinumColors.primary }}>
                      {selectedProduct.price}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

                  <h3 className="text-xl font-semibold mb-4" style={{ color: platinumColors.dark }}>Available Payment Plans</h3>
                  <div className="space-y-4">
                    {selectedProduct.paymentPlans.map((plan) => (
                      <motion.div
                        key={plan.id}
                        whileHover={{ scale: 1.02 }}
                        className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-green-500 transition"
                        onClick={() => handlePlanSelect(plan)}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">{plan.name}</h4>
                            <p className="text-sm text-gray-500">{plan.duration} months</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium" style={{ color: platinumColors.primary }}>{plan.monthlyPayment}/mo</p>
                            <p className="text-sm text-gray-500">Total: {plan.total}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {showPlanDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <button
                onClick={() => {
                  setShowPlanDetails(false)
                  setSelectedPlan(null)
                }}
                className="flex items-center text-blue-600 mb-4"
              >
                <FiChevronRight className="transform rotate-180 mr-1" /> Back to plans
              </button>

              <div className="md:flex gap-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4">
                    {selectedProduct.image}
                  </div>
                  <h3 className="font-bold">{selectedProduct.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{selectedProduct.brand}</p>
                  <p className="font-bold text-lg" style={{ color: platinumColors.primary }}>{selectedProduct.price}</p>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-6" style={{ color: platinumColors.dark }}>Apply for {selectedPlan.name}</h2>
                  
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold mb-3" style={{ color: platinumColors.primary }}>Plan Summary</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Monthly Payment</p>
                        <p className="font-medium">{selectedPlan.monthlyPayment}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-medium">{selectedPlan.duration} months</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Interest Rate</p>
                        <p className="font-medium">{selectedPlan.interest}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Amount</p>
                        <p className="font-medium">{selectedPlan.total}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <p className="text-sm">First payment due upon approval</p>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <p className="text-sm">Subsequent payments automatically deducted from your account</p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <p className="text-sm">Receive your product after first payment confirmation</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentStep(2)}
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition"
                    style={{ backgroundColor: platinumColors.primary }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              {/* Progress Steps */}
              <div className="flex justify-between mb-8 relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
                <div
                  className="absolute top-1/2 left-0 h-1 bg-green-500 -z-10 transition-all duration-300"
                  style={{
                    width: `${((currentStep - 1) / 3) * 100}%`,
                    backgroundColor: platinumColors.primary
                  }}
                ></div>
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep >= step
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                      style={{ backgroundColor: currentStep >= step ? platinumColors.primary : "" }}
                    >
                      {step}
                    </div>
                    <span
                      className={`mt-2 text-xs ${
                        currentStep >= step ? "text-green-500 font-medium" : "text-gray-500"
                      }`}
                      style={{ color: currentStep >= step ? platinumColors.primary : "" }}
                    >
                      {step === 1 ? "Product" : step === 2 ? "Personal" : step === 3 ? "Financial" : "Review"}
                    </span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-bold mb-6" style={{ color: platinumColors.dark }}>Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                            errors.fullName ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                            errors.address ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition"
                        style={{ backgroundColor: platinumColors.primary }}
                      >
                        Next: Financial Information
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-bold mb-6" style={{ color: platinumColors.dark }}>Financial Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700 mb-1">Employment Status *</label>
                        <select
                          id="employmentStatus"
                          name="employmentStatus"
                          value={formData.employmentStatus}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                            errors.employmentStatus ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          <option value="">Select status</option>
                          <option value="Employed">Employed</option>
                          <option value="Self-employed">Self-employed</option>
                          <option value="Student">Student</option>
                          <option value="Unemployed">Unemployed</option>
                        </select>
                        {errors.employmentStatus && <p className="mt-1 text-xs text-red-600">{errors.employmentStatus}</p>}
                      </div>
                      <div>
                        <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700 mb-1">Monthly Income (₦) *</label>
                        <select
                          id="monthlyIncome"
                          name="monthlyIncome"
                          value={formData.monthlyIncome}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                            errors.monthlyIncome ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          <option value="">Select income range</option>
                          <option value="0-50000">₦0 - ₦50,000</option>
                          <option value="50000-100000">₦50,000 - ₦100,000</option>
                          <option value="100000-200000">₦100,000 - ₦200,000</option>
                          <option value="200000-500000">₦200,000 - ₦500,000</option>
                          <option value="500000+">₦500,000+</option>
                        </select>
                        {errors.monthlyIncome && <p className="mt-1 text-xs text-red-600">{errors.monthlyIncome}</p>}
                      </div>
                      <div>
                        <label htmlFor="idType" className="block text-sm font-medium text-gray-700 mb-1">ID Type *</label>
                        <select
                          id="idType"
                          name="idType"
                          value={formData.idType}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                            errors.idType ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          <option value="">Select ID type</option>
                          <option value="National ID">National ID</option>
                          <option value="Driver's License">Drivers License</option>
                          <option value="Voter's Card">Voters Card</option>
                          <option value="International Passport">International Passport</option>
                        </select>
                        {errors.idType && <p className="mt-1 text-xs text-red-600">{errors.idType}</p>}
                      </div>
                      <div>
                        <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-1">ID Number *</label>
                        <input
                          type="text"
                          id="idNumber"
                          name="idNumber"
                          value={formData.idNumber}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                            errors.idNumber ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.idNumber && <p className="mt-1 text-xs text-red-600">{errors.idNumber}</p>}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-700 font-medium border border-gray-300 rounded-md transition"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition"
                        style={{ backgroundColor: platinumColors.primary }}
                      >
                        Next: Bank Details
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-bold mb-6" style={{ color: platinumColors.dark }}>Bank Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">Bank Name *</label>
                        <input
                          type="text"
                          id="bankName"
                          name="bankName"
                          value={formData.bankName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                            errors.bankName ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.bankName && <p className="mt-1 text-xs text-red-600">{errors.bankName}</p>}
                      </div>
                      <div>
                        <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-1">Account Number *</label>
                        <input
                          type="text"
                          id="accountNumber"
                          name="accountNumber"
                          value={formData.accountNumber}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                            errors.accountNumber ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.accountNumber && <p className="mt-1 text-xs text-red-600">{errors.accountNumber}</p>}
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                      <h3 className="font-semibold mb-3" style={{ color: platinumColors.primary }}>Payment Plan Summary</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2">Product Details</h4>
                          <div className="flex items-start mb-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg mr-4 flex-shrink-0 flex items-center justify-center">
                              {selectedProduct.image}
                            </div>
                            <div>
                              <p className="font-medium">{selectedProduct.name}</p>
                              <p className="text-sm text-gray-500">{selectedProduct.brand}</p>
                              <p className="font-bold" style={{ color: platinumColors.primary }}>{selectedProduct.price}</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Plan Details</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Plan:</span>
                              <span>{selectedPlan.name}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Monthly Payment:</span>
                              <span>{selectedPlan.monthlyPayment}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Duration:</span>
                              <span>{selectedPlan.duration} months</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Interest Rate:</span>
                              <span>{selectedPlan.interest}</span>
                            </div>
                            <div className="flex justify-between font-medium border-t border-gray-200 pt-2">
                              <span>Total Amount:</span>
                              <span>{selectedPlan.total}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-yellow-400"
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
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            By submitting this application, you agree to automatic monthly deductions from your bank account for the duration of the payment plan.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-700 font-medium border border-gray-300 rounded-md transition"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition"
                        style={{ backgroundColor: platinumColors.primary }}
                      >
                        Submit Application
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        )}
      </main>

      {/* Benefits Section */}
      {currentStep === 1 && !showProductDetails && !showPlanDetails && (
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8" style={{ color: platinumColors.dark }}>Why Choose BuySellSwap?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: platinumColors.light }}>
                    <FaMoneyBillWave className="text-xl" style={{ color: platinumColors.primary }} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Flexible Payments</h3>
                <p className="text-gray-600 text-sm">Choose from 3, 6, or 12-month payment plans that fit your budget.</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: platinumColors.light }}>
                    <FaClock className="text-xl" style={{ color: platinumColors.primary }} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Fast Approval</h3>
                <p className="text-gray-600 text-sm">Get approved within 24 hours and receive your product immediately.</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: platinumColors.light }}>
                    <FaExchangeAlt className="text-xl" style={{ color: platinumColors.primary }} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Upgrade Anytime</h3>
                <p className="text-gray-600 text-sm">Trade in your device and upgrade to newer models with ease.</p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {currentStep === 1 && !showProductDetails && !showPlanDetails && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8" style={{ color: platinumColors.dark }}>Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full text-left p-4 font-medium flex justify-between items-center hover:bg-gray-50 transition"
                      onClick={() => {
                        const newFaqs = [...faqs]
                        newFaqs[index].open = !newFaqs[index].open
                        setFaqs(newFaqs)
                      }}
                    >
                      <span>{faq.question}</span>
                      <FiChevronDown className={`transform transition ${faq.open ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {faq.open && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-4 pb-4 text-gray-600 text-sm"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Arigo.ng</h3>
              <p className="text-gray-400 text-sm">Nigerias premier destination for premium gadgets with flexible payment options.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">Products</a></li>
                <li><a href="#" className="hover:text-white transition">BuySellSwap</a></li>
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition">Payment Plans</a></li>
                <li><a href="#" className="hover:text-white transition">Returns Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Lagos, Nigeria</li>
                <li>hello@arigo.ng</li>
                <li>+234 800 000 0000</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Arigo.ng. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BuySellSwap