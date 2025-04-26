"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Calendar, CreditCard, Check, Info, Sparkle } from "lucide-react"
import "tailwindcss/tailwind.css"

const BuyOnCredit = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [startDate, setStartDate] = useState("")

  const paymentPlans = [
    { id: 1, duration: "3 Months", monthly: "₦10,000", total: "₦30,000", interest: "0%" },
    { id: 2, duration: "6 Months", monthly: "₦5,500", total: "₦33,000", interest: "5%" },
    { id: 3, duration: "12 Months", monthly: "₦3,000", total: "₦36,000", interest: "10%" },
  ]

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId)
  }

  const handleApply = () => {
    if (!selectedPlan || !startDate) {
      alert("Please select a payment plan and start date.")
      return
    }
    alert(`Application submitted! Plan: ${paymentPlans.find(plan => plan.id === selectedPlan).duration}, Start Date: ${startDate}`)
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
    animate: { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity } },
  }

  return (
    <div className="h-screen w-screen overflow-auto bg-gradient-to-b from-gray-50 to-green-50 relative flex flex-col hide-scrollbar">
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full filter blur-[120px] opacity-20 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-[120px] opacity-15 animate-float-medium" />

      <motion.div
        className="h-full w-full bg-white shadow-2xl rounded-none overflow-auto flex flex-col hide-scrollbar"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Compact Header */}
        <div className="bg-gradient-to-r from-green-700 to-green-600 text-white p-4 md:p-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-transparent -z-10" />
          <div className="flex items-center justify-between">
            <motion.button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md"
              onClick={() => window.history.back()}
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </motion.button>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div variants={pulse}>
                <CreditCard size={28} className="text-yellow-300" />
              </motion.div>
              <h1 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
                Buy on Credit
              </h1>
            </motion.div>
          </div>
          <motion.p
            className="text-green-100 text-sm md:text-base max-w-2xl mt-2 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Get your dream gadget with easy monthly installments. No hidden fees!
          </motion.p>
        </div>

        <div className="flex-1 p-6 md:p-10 overflow-auto hide-scrollbar">
          {/* Loan Information Banner */}
          <motion.div
            className="bg-green-50/50 backdrop-blur-sm border border-green-100 rounded-2xl p-6 mb-8 flex items-start shadow-sm"
            variants={fadeIn}
            whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <motion.div variants={pulse}>
              <Info className="text-green-600 mr-4 mt-1 flex-shrink-0" size={24} />
            </motion.div>
            <p className="text-green-800 text-base md:text-lg leading-relaxed">
              Based on your profile, you can get a gadget loan of up to <span className="font-bold text-green-700">₦100,000</span>.
              Choose a payment plan that works for your budget.
            </p>
          </motion.div>

          {/* Payment Plans */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 flex items-center">
              <motion.div variants={pulse}>
                <CreditCard className="mr-3 text-green-600" size={28} />
              </motion.div>
              Select Your Payment Plan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {paymentPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  className={`relative p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? "border-green-500 bg-green-50/50 shadow-lg"
                      : "border-gray-100 hover:border-green-300 hover:shadow-md bg-white"
                  }`}
                  onClick={() => handlePlanSelect(plan.id)}
                  variants={fadeIn}
                  whileHover={{ y: -8, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.15)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  role="button"
                  aria-selected={selectedPlan === plan.id}
                >
                  <AnimatePresence>
                    {selectedPlan === plan.id && (
                      <motion.div
                        className="absolute top-3 right-3 bg-green-600 text-white rounded-full p-1.5"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Check size={18} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{plan.duration}</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-600 mb-1">{plan.monthly}</p>
                  <p className="text-gray-600 font-medium">per month</p>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total:</span>
                      <span className="font-semibold text-gray-800">{plan.total}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span className="text-gray-600">Interest:</span>
                      <span className={`font-semibold ${plan.interest === "0%" ? "text-green-600" : "text-gray-800"}`}>
                        {plan.interest}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Start Date Picker */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 flex items-center">
              <motion.div variants={pulse}>
                <Calendar className="mr-3 text-green-600" size={28} />
              </motion.div>
              Payment Start Date
            </h2>
            <motion.div
              className="bg-gray-50/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-sm"
              whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Choose the date of your first payment. Subsequent payments will be due on the same date each month.
              </p>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 shadow-sm"
                min={new Date().toISOString().split("T")[0]}
              />
            </motion.div>
          </motion.div>

          {/* Terms and Conditions */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Terms & Conditions</h2>
            <motion.div
              className="bg-gray-50/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-sm"
              whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <ul className="space-y-4 text-gray-700">
                {[
                  "Eligibility: Must be 18+ and provide valid ID.",
                  "Payments are due monthly on the selected start date.",
                  "Late payments may incur a 2% fee.",
                  "Defaulting on payments may lead to gadget repossession.",
                  "Full terms available upon application.",
                ].map((term, index) => (
                  <motion.li
                    key={term}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="bg-green-100 rounded-full p-1.5 mr-4 mt-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <Check size={16} className="text-green-600" />
                    </motion.div>
                    <span className="text-base leading-relaxed">{term}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Apply Button */}
          <motion.div
            className="text-center pb-8"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              onClick={handleApply}
              className="relative overflow-hidden px-10 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Apply for Credit Now
                <Sparkle size={18} className="text-yellow-300" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            <motion.p
              className="mt-4 text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your application will be reviewed within 24 hours
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default BuyOnCredit