"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle, Mail, ArrowRight, RefreshCw, Shield, ChevronLeft } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"
import { motion, AnimatePresence } from "framer-motion"

// Green and white theme colors
const COLORS = {
  primary: "#2E8B57",       // Sea green
  secondary: "#3CB371",     // Medium sea green
  accent: "#228B22",        // Forest green
  success: "#2E8B57",       // Success green
  background: "#F8FFF8",    // Very light green
  text: "#1A3E1A",         // Dark green
  lightText: "#5A7D5A",     // Light green
}

const Verification = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [email, setEmail] = useState(state?.email || "")
  const [verificationCode, setVerificationCode] = useState("")
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [countdown, setCountdown] = useState(30)
  const [canResend, setCanResend] = useState(false)
  const [error, setError] = useState("")
  const [serverCode, setServerCode] = useState("") // Stores the code sent by server
  const timerRef = useRef(null)
  
  // Check authentication status on mount
  const authUserData = queryClient.getQueryData(["authUser"])
  const authUser = authUserData?.data || {}

  // Generate a random 6-digit code for simulation
  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString()
  }

  useEffect(() => {
    if (authUser?.isVerified || isVerified) {
      navigate("/dashboard")
    }

    if (step === 1 && !state?.email && !email) {
      navigate("/login")
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [authUser, isVerified, navigate, state, email, step])

  const handleSendCode = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)
    
    try {
      // Simulate API call to send verification code
      const generatedCode = generateVerificationCode()
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real app, you would:
      // 1. Call your backend API to send the code
      // 2. The backend would send the email with code
      // 3. You would store the code reference (or hash) for verification
      
      // For demo, we'll store the code in state
      setServerCode(generatedCode)
      console.log("Verification code sent:", generatedCode) // For testing
      
      setIsLoading(false)
      setStep(2)
      startCountdown()
    } catch (err) {
      setIsLoading(false)
      setError(err.message || "Failed to send verification code")
    }
  }

  const handleVerifyCode = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)
    
    try {
      // Simulate API verification delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real app, you would:
      // const response = await api.verifyCode(email, verificationCode);
      // if (!response.success) throw new Error(response.message);
      
      // For demo, we'll compare with the generated code
      if (verificationCode.length !== 6) {
        throw new Error("Please enter a valid 6-digit code")
      }
      
      if (verificationCode !== serverCode) {
        throw new Error("Invalid verification code. Please try again.")
      }
      
      // Mark as verified
      setIsVerified(true)
      setIsLoading(false)
      setStep(3)
      
      // In a real app, you would update the user's verified status
      queryClient.invalidateQueries({ queryKey: ["authUser"] })
      
    } catch (err) {
      setIsLoading(false)
      setError(err.message || "Verification failed. Please try again.")
    }
  }

  const handleResendCode = async () => {
    if (!canResend) return
    
    setError("")
    setIsLoading(true)
    setCanResend(false)
    
    try {
      // Generate new code
      const newCode = generateVerificationCode()
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Update the server code
      setServerCode(newCode)
      console.log("New verification code sent:", newCode) // For testing
      
      setIsLoading(false)
      startCountdown()
      setVerificationCode("")
    } catch (err) {
      setIsLoading(false)
      setError(err.message || "Failed to resend code")
      setCanResend(true)
    }
  }

  const startCountdown = () => {
    setCountdown(30)
    setCanResend(false)

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
      setError("")
    }
  }

  const handleContinue = () => {
    navigate("/dashboard")
  }

  const handleGoBack = () => {
    if (step > 1) {
      setStep(step - 1)
      setError("")
    } else {
      navigate(-1)
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
            <span>ECO</span>
            <span style={{ color: COLORS.accent }}>VERSE</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 relative"
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
                background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.accent})`,
              }}
            />
          </div>
        </div>

        {/* Error message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 rounded-lg text-sm font-medium"
            style={{ backgroundColor: "#FFEBEE", color: "#C62828" }}
          >
            {error}
          </motion.div>
        )}

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
                    backgroundColor: isLoading || !email ? `${COLORS.primary}80` : COLORS.primary,
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
                We sent a 6-digit code to <span style={{ color: COLORS.accent, fontWeight: 500 }}>{email}</span>
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
                        borderColor: error ? "#EF5350" : `${COLORS.primary}40`,
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
                  className="w-full py-3 px-4 flex items-center justify-center rounded-lg text-white font-medium transition-all text-base mb-4"
                  style={{
                    backgroundColor:
                      isLoading || verificationCode.length !== 6 ? `${COLORS.primary}80` : COLORS.primary,
                    cursor: isLoading || verificationCode.length !== 6 ? "not-allowed" : "pointer",
                  }}
                >
                  {isLoading ? <RefreshCw className="w-5 h-5 animate-spin mr-2" /> : "Verify Code"}
                </button>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleResendCode}
                    disabled={!canResend || isLoading}
                    className="text-sm font-medium transition-all"
                    style={{
                      color: canResend && !isLoading ? COLORS.accent : `${COLORS.accent}60`,
                      cursor: canResend && !isLoading ? "pointer" : "not-allowed",
                    }}
                  >
                    {canResend ? (
                      "Resend Code"
                    ) : (
                      <span>
                        Resend code in <span style={{ color: COLORS.primary }}>{countdown}s</span>
                      </span>
                    )}
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
                  Your account has been successfully verified.
                </p>
                <button
                  onClick={handleContinue}
                  className="w-full py-3 px-4 rounded-lg text-white font-medium transition-all text-base hover:opacity-90"
                  style={{
                    background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.accent})`,
                    boxShadow: "0 4px 14px rgba(46, 139, 87, 0.25)",
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
            Secured by EcoVerse Authentication
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Verification