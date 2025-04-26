"use client"

import { useState, useEffect } from "react"
import { Laptop, Smartphone, Tablet, Check } from "lucide-react"

const DeviceConvergenceLoader = ({ message = "Bringing your tech together..." }) => {
  const [progress, setProgress] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [devicesJoined, setDevicesJoined] = useState(false)

  // Progress bar effect
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => setAnimationComplete(true), 500)
          return 100
        }
        return prevProgress + 2
      })
    }, 70)

    return () => clearInterval(timer)
  }, [])

  // Devices joining effect
  useEffect(() => {
    if (progress > 75 && !devicesJoined) {
      setDevicesJoined(true)
    }
  }, [progress, devicesJoined])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-green-50 z-50 w-screen h-screen">
      {/* Full screen container */}
      <div className="w-full h-full flex flex-col items-center justify-center p-6">
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Arigo<span className="text-green-600">hub</span>
          </h1>
          <p className="text-lg text-gray-500 mt-2">Nigerias #1 Gadget Store</p>
        </div>

        {/* Animated devices converging - made larger */}
        <div className="h-48 relative mb-16 w-full max-w-md">
          {/* Device container with better positioning */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Smartphone */}
            <div
              className={`absolute transition-all duration-1000 ease-in-out ${
                devicesJoined
                  ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 opacity-80"
                  : "top-1/2 left-0 transform -translate-y-1/2"
              }`}
            >
              <Smartphone
                className={`w-16 h-16 text-blue-500 ${!animationComplete && !devicesJoined ? "animate-pulse" : ""}`}
              />
            </div>

            {/* Laptop */}
            <div
              className={`absolute transition-all duration-1000 ease-in-out ${
                devicesJoined
                  ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 opacity-80"
                  : "top-1/2 right-0 transform -translate-y-1/2"
              }`}
            >
              <Laptop
                className={`w-16 h-16 text-red-500 ${!animationComplete && !devicesJoined ? "animate-pulse" : ""}`}
              />
            </div>

            {/* Tablet */}
            <div
              className={`absolute transition-all duration-1000 ease-in-out ${
                devicesJoined
                  ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 opacity-80"
                  : "bottom-0 left-1/2 transform -translate-x-1/2"
              }`}
            >
              <Tablet
                className={`w-16 h-16 text-green-500 ${!animationComplete && !devicesJoined ? "animate-pulse" : ""}`}
              />
            </div>
          </div>

          {/* Success icon when complete */}
          {animationComplete && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-green-100 rounded-full p-3 animate-fadeIn">
                <Check className="w-16 h-16 text-green-600" />
              </div>
            </div>
          )}
        </div>

        {/* Progress section - wider */}
        <div className="w-full max-w-lg px-6">
          {/* Progress bar - larger */}
          <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden mb-4">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 via-red-400 to-green-400 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Loading text and percentage in a single row */}
          <div className="flex items-center justify-between mb-6">
            {/* Loading text */}
            <div className="text-center flex-1">
              {animationComplete ? (
                <div className="text-green-600 font-medium text-xl">All devices connected!</div>
              ) : (
                <div className="flex items-center justify-center gap-2 text-gray-600 text-xl">
                  <span className="animate-pulse">{message}</span>
                </div>
              )}
            </div>

            {/* Progress percentage */}
            <div className="text-lg text-gray-500 font-medium">{progress}%</div>
          </div>

          {/* Continue button appears when loading is complete - larger */}
          {animationComplete && (
            <button className="w-full mt-8 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 hover:from-blue-600 hover:via-purple-600 hover:to-green-600 text-white py-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center text-lg">
              Continue Shopping
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default DeviceConvergenceLoader