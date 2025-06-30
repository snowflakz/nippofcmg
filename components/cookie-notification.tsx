"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function CookieNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasConsented, setHasConsented] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  // Check if user has already consented
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (consent === null) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      setHasConsented(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true")
    setHasConsented(true)
    setIsVisible(false)
  }

  const handleDeny = () => {
    localStorage.setItem("cookie-consent", "false")
    setHasConsented(true)
    setIsVisible(false)
  }

  const handleTogglePreferences = () => {
    setShowPreferences(!showPreferences)
  }

  if (hasConsented) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 z-50 max-w-md bg-white shadow-xl rounded-lg overflow-hidden"
        >
          <div className="relative">
            {!showPreferences ? (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">We use cookies</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We use cookies to ensure the accessibility and functioning of our services, to analyze our visitors' behavior and to personalize their experience.
                </p>
                <div className="flex space-x-2 items-center">
                  <Button
                    variant="default"
                    onClick={handleAccept}
                    className="flex-1"
                  >
                    Accept
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleDeny}
                    className="flex-1"
                  >
                    Deny
                  </Button>
                </div>
                <button
                  onClick={handleTogglePreferences}
                  className="text-xs text-[#28406c] mt-3 hover:underline"
                >
                  Update your preferences
                </button>
              </div>
            ) : (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Cookie Preferences</h3>
                <div className="space-y-4 mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Essential Cookies</p>
                      <p className="text-xs text-gray-500">Required for the website to function</p>
                    </div>
                    <div className="bg-gray-200 rounded-full w-10 h-6 flex items-center px-1">
                      <div className="bg-[#28406c] w-4 h-4 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Analytics Cookies</p>
                      <p className="text-xs text-gray-500">Help us improve our website</p>
                    </div>
                    <div className="bg-gray-200 rounded-full w-10 h-6 flex items-center px-1 cursor-pointer">
                      <div className="bg-white w-4 h-4 rounded-full shadow"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Marketing Cookies</p>
                      <p className="text-xs text-gray-500">Used for personalized ads</p>
                    </div>
                    <div className="bg-gray-200 rounded-full w-10 h-6 flex items-center px-1 cursor-pointer">
                      <div className="bg-white w-4 h-4 rounded-full shadow"></div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="default"
                    onClick={handleAccept}
                    className="flex-1"
                  >
                    Save Preferences
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleTogglePreferences}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 