"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, CreditCard, Check, Info } from "lucide-react"
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
    alert(`Application submitted! Plan: ${selectedPlan}, Start Date: ${startDate}`)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="h-screen w-full overflow-auto bg-gray-50">
      <motion.div
        className="h-full w-full bg-white shadow-xl overflow-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Header with back button */}
        <div className="bg-green-600 text-white p-4 md:p-6">
          <div className="flex items-center mb-4">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-700 transition-colors"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={20} />
            </button>
          </div>
          <h1 className="text-3xl font-bold mb-2">Buy Your Gadget on Credit</h1>
          <p className="text-green-100 text-base md:text-lg max-w-2xl">
            Get your dream gadget today and pay in comfortable monthly installments. No hidden fees!
          </p>
        </div>

        <div className="p-4 md:p-8">
          {/* Loan Information Banner */}
          <motion.div
            className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6 md:mb-8 flex items-start"
            variants={fadeIn}
          >
            <Info className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <p className="text-green-800">
              Based on your profile, you can get a gadget loan of up to <span className="font-bold">₦100,000</span>.
              Choose a payment plan that works for your budget.
            </p>
          </motion.div>

          {/* Payment Plans */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <CreditCard className="mr-2 text-green-600" size={24} />
              Select Your Payment Plan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {paymentPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  className={`p-4 md:p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                    selectedPlan === plan.id
                      ? "border-green-500 bg-green-50 shadow-md"
                      : "border-gray-200 hover:border-green-300 hover:shadow-md"
                  }`}
                  onClick={() => handlePlanSelect(plan.id)}
                  variants={fadeIn}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-800">{plan.duration}</h3>
                    {selectedPlan === plan.id && (
                      <div className="bg-green-600 text-white rounded-full p-1">
                        <Check size={16} />
                      </div>
                    )}
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-green-600 mb-1">{plan.monthly}</p>
                  <p className="text-gray-600 font-medium">per month</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total:</span>
                      <span className="font-semibold text-gray-800">{plan.total}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
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
          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <Calendar className="mr-2 text-green-600" size={24} />
              When Would You Like to Start Paying?
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-gray-600 mb-4">
                Choose the date of your first payment. Subsequent payments will be due on the same date each month.
              </p>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
          </motion.div>

          {/* Terms and Conditions */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Terms & Conditions</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span>Eligibility: Must be 18+ and provide valid ID.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span>Payments are due monthly on the selected start date.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span>Late payments may incur a 2% fee.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span>Defaulting on payments may lead to gadget repossession.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span>Full terms available upon application.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Apply Button */}
          <motion.div className="text-center" variants={fadeIn} initial="hidden" animate="visible">
            <motion.button
              onClick={handleApply}
              className="px-8 py-3 md:px-10 md:py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg w-full"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply for Credit Now
            </motion.button>
            <p className="mt-4 text-gray-500 text-sm">Your application will be reviewed within 24 hours</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default BuyOnCredit
