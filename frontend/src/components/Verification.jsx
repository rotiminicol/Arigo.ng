"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle, Mail, ArrowRight, RefreshCw, Shield, ChevronLeft } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"
import { motion, AnimatePresence } from "framer-motion"

// Company theme colors
const COLORS = {
  primary: "#0F4C81", // Deep blue as primary color
  secondary: "#FF6B35", // Vibrant orange as accent
  success: "#2E8B57", // Sea green for success states
  background: "#F8FAFC", // Light blue-gray background
  text: "#1E293B", // Dark blue-gray for text
  lightText: "#64748B", // Lighter text for secondary information
}

const Verification = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [email, setEmail] = useState(state?.email || "")
  const [verificationCode, setVerificationCode] = useState("")
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [ setIsVerified] = useState(false)
  const [countdown, setCountdown] = useState(30)
  const [canResend, setCanResend] = useState(false)
  const timerRef = useRef(null)
  

  // Check authentication status on mount
  const authUserData = queryClient.getQueryData(["authUser"])
  const authUser = authUserData?.data || {}

  useEffect(() => {
    if (authUser?.isVerified) {
      navigate("/dashboard")
    }

    // If email is not provided in state, redirect to previous page
    if (step === 1 && !state?.email && !email) {
      // You might want to redirect to a specific page instead
      // navigate(-1);
    }

    // Cleanup timer on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [authUser, navigate, state, email, step])

  const handleSendCode = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
      startCountdown()
    }, 1500)
  }

  const handleVerifyCode = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsVerified(true)
      setStep(3)
      queryClient.invalidateQueries({ queryKey: ["authUser"] })
    }, 1500)
  }

  const handleResendCode = () => {
    if (!canResend) return
    setIsLoading(true)
    setCanResend(false)
    setTimeout(() => {
      setIsLoading(false)
      startCountdown()
      // Clear verification code on resend
      setVerificationCode("")
    }, 1500)
  }

  const startCountdown = () => {
    setCountdown(30)
    setCanResend(false)

    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    timerRef.current = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timerRef.current)
          timerRef.current = null
          setCanResend(true)
          return 0
        }
        return prevCount - 1
      })
    }, 1000)
  }

  const handlePinChange = (e) => {
    const value = e.target.value
    if (value.length <= 6 && /^\d*$/.test(value)) {
      setVerificationCode(value)
    }
  }

  const handleContinue = () => {
    navigate("/dashboard")
  }

  const handleGoBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      navigate(-1)
    }
  }

  // For demo purposes, ensure all steps can be seen
  const simulateStepChange = (nextStep) => {
    setStep(nextStep)
    if (nextStep === 2) {
      startCountdown()
    }
    if (nextStep === 3) {
      setIsVerified(true)
    }
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 py-6 sm:px-6"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Company logo */}
      <div className="mb-8">
        <div className="flex items-center justify-center">
          <div className="text-2xl font-bold flex items-center" style={{ color: COLORS.primary }}>
            <Shield className="w-8 h-8 mr-2" />
            <span>ARIGO</span>
            <span style={{ color: COLORS.secondary }}>.NG</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 relative"
        style={{ borderTop: `4px solid ${COLORS.primary}` }}
      >
        {/* Back button */}
        <button
          onClick={handleGoBack}
          className="absolute top-6 left-6 p-1 rounded-full hover:bg-gray-100 transition-colors"
          style={{ color: COLORS.lightText }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Header with step indicator */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-center" style={{ color: COLORS.primary }}>
              Verify Your Account
            </h1>
            <div className="flex space-x-3">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: i === step ? 1.25 : 1,
                    backgroundColor: i === step ? COLORS.primary : i < step ? COLORS.success : "#e5e7eb",
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                />
              ))}
            </div>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                height: "100%",
                borderRadius: "9999px",
                background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})`,
              }}
            />
          </div>
        </div>

        {/* For demo purposes - can be removed in production */}
        <div className="mb-6 flex justify-center gap-2">
          <button
            onClick={() => simulateStepChange(1)}
            className="px-3 py-1 rounded text-xs"
            style={{
              backgroundColor: step === 1 ? COLORS.primary : "#e5e7eb",
              color: step === 1 ? "white" : COLORS.text,
            }}
          >
            Step 1
          </button>
          <button
            onClick={() => simulateStepChange(2)}
            className="px-3 py-1 rounded text-xs"
            style={{
              backgroundColor: step === 2 ? COLORS.primary : "#e5e7eb",
              color: step === 2 ? "white" : COLORS.text,
            }}
          >
            Step 2
          </button>
          <button
            onClick={() => simulateStepChange(3)}
            className="px-3 py-1 rounded text-xs"
            style={{
              backgroundColor: step === 3 ? COLORS.primary : "#e5e7eb",
              color: step === 3 ? "white" : COLORS.text,
            }}
          >
            Step 3
          </button>
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Enter Email */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${COLORS.primary}15` }}
                >
                  <Mail className="w-9 h-9" style={{ color: COLORS.primary }} />
                </div>
              </div>
              <h2 className="text-lg font-semibold text-center mb-2" style={{ color: COLORS.primary }}>
                Verify Your Email
              </h2>
              <p className="text-sm sm:text-base text-center mb-6" style={{ color: COLORS.lightText }}>
                Well send a verification code to your email address
              </p>
              <form onSubmit={handleSendCode}>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: COLORS.text }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg outline-none transition-all text-base placeholder-gray-400"
                    style={{
                      borderColor: `${COLORS.primary}40`,
                      color: COLORS.text,
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                    }}
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full py-3 px-4 flex items-center justify-center rounded-lg text-white font-medium transition-all text-base"
                  style={{
                    backgroundColor: isLoading || !email ? `${COLORS.primary}60` : COLORS.primary,
                    cursor: isLoading || !email ? "not-allowed" : "pointer",
                  }}
                >
                  {isLoading ? (
                    <RefreshCw className="w-5 h-5 animate-spin mr-2" />
                  ) : (
                    <>
                      Send Verification Code
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}

          {/* Step 2: Enter Verification Code */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${COLORS.primary}15` }}
                >
                  <Shield className="w-9 h-9" style={{ color: COLORS.primary }} />
                </div>
              </div>
              <h2 className="text-lg font-semibold text-center mb-2" style={{ color: COLORS.primary }}>
                Enter Verification Code
              </h2>
              <p className="text-sm sm:text-base text-center mb-6" style={{ color: COLORS.lightText }}>
                We sent a 6-digit code to <span style={{ color: COLORS.secondary, fontWeight: 500 }}>{email}</span>
              </p>
              <form onSubmit={handleVerifyCode}>
                <div className="mb-6">
                  <label htmlFor="code" className="block text-sm font-medium mb-1.5" style={{ color: COLORS.text }}>
                    Verification Code
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="code"
                      maxLength={6}
                      value={verificationCode}
                      onChange={handlePinChange}
                      className="w-full text-center tracking-widest text-xl px-4 py-3 border rounded-lg outline-none transition-all placeholder-gray-400"
                      style={{
                        borderColor: `${COLORS.primary}40`,
                        color: COLORS.text,
                        letterSpacing: "0.5em",
                        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                      }}
                      placeholder="••••••"
                      required
                    />
                    <div
                      className="absolute inset-0 pointer-events-none flex justify-between px-4"
                      style={{ display: verificationCode ? "none" : "flex" }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-8 h-full flex items-center justify-center">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: `${COLORS.primary}30` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading || verificationCode.length !== 6}
                  className="w-full py-3 px-4 flex items-center justify-center rounded-lg text-white font-medium transition-all text-base"
                  style={{
                    backgroundColor:
                      isLoading || verificationCode.length !== 6 ? `${COLORS.primary}60` : COLORS.primary,
                    cursor: isLoading || verificationCode.length !== 6 ? "not-allowed" : "pointer",
                  }}
                >
                  {isLoading ? <RefreshCw className="w-5 h-5 animate-spin mr-2" /> : "Verify Code"}
                </button>
                <div className="text-center mt-6">
                  <button
                    type="button"
                    onClick={handleResendCode}
                    disabled={!canResend || isLoading}
                    className="text-sm font-medium transition-all"
                    style={{
                      color: canResend && !isLoading ? COLORS.secondary : `${COLORS.secondary}60`,
                      cursor: canResend && !isLoading ? "pointer" : "not-allowed",
                    }}
                  >
                    {canResend ? "Resend Code" : `Resend code in ${countdown}s`}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 3: Verification Success */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.2,
                  }}
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${COLORS.success}15` }}
                >
                  <CheckCircle className="w-9 h-9" style={{ color: COLORS.success }} />
                </motion.div>
              </div>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <h2 className="text-lg font-semibold text-center mb-2" style={{ color: COLORS.success }}>
                  Verification Successful!
                </h2>
                <p className="text-sm sm:text-base text-center mb-6" style={{ color: COLORS.lightText }}>
                  Your email has been verified successfully. You can now access all features.
                </p>
                <button
                  onClick={handleContinue}
                  className="w-full py-3 px-4 rounded-lg text-white font-medium transition-all text-base"
                  style={{
                    background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})`,
                    boxShadow: "0 4px 14px rgba(15, 76, 129, 0.25)",
                  }}
                >
                  Continue to Dashboard
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer with security note */}
        <div
          className="mt-8 pt-4 border-t text-xs text-center"
          style={{ borderColor: "#f1f5f9", color: COLORS.lightText }}
        >
          <p className="flex items-center justify-center">
            <Shield className="w-3 h-3 mr-1" />
            Secured by Arigo.ng Authentication
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Verification
