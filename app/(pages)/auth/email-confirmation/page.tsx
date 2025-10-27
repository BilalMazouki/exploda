'use client'
// TODO : LET ONLY REDIRECTED PEOPLE SEE THIS PAGE
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { CheckCircle2, MailOpen, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const EmailVerificationPage = () => {
  const [timer, setTimer] = useState(5)
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (timer <= 0) {
      redirect('/login')
    }
  }, [timer])

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-custom-50 to-custom-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/50 dark:border-gray-700/50 shadow-2xl shadow-black/10 p-8 max-w-md w-full text-center animate-in fade-in duration-500">
        
        {/* Success Icon */}
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-linear-to-r from-custom-500 to-custom-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-custom-500/25">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -inset-2 bg-custom-500/20 rounded-full blur-lg animate-pulse"></div>
        </div>

        {/* Main Content */}
        <h1 className="text-2xl font-bold bg-linear-to-r from-custom-600 to-custom-700 bg-clip-text text-transparent mb-3">
          Email Verified!
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Your email has been successfully verified
        </p>
        
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
          Welcome to {process.env.NEXT_PUBLIC_APP_NAME}! You're all set to start your journey.
        </p>

        {/* Countdown Timer */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-3 text-sm text-gray-600 dark:text-gray-400">
            <MailOpen className="w-4 h-4 text-custom-500" />
            <span>Redirecting in</span>
            <div className="px-2 py-1 bg-custom-500/10 text-custom-600 dark:text-custom-400 rounded-lg font-mono font-bold">
              {timer}s
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-6 overflow-hidden">
          <div 
            className="bg-linear-to-r from-custom-500 to-custom-600 h-1.5 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${((4 - timer) / 4) * 100}%` }}
          ></div>
        </div>

        {/* Manual Redirect Button */}
        <Button
          onClick={() => redirect('/login')}
          className="w-full bg-custom-600 hover:bg-custom-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-custom-600/25 transform hover:-translate-y-0.5"
        >
          <ArrowRight className="w-4 h-4 mr-2" />
          Continue to Login
          <span className="ml-2 text-custom-200 text-sm">({timer}s)</span>
        </Button>

        {/* Help Text */}
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
          If you're not redirected automatically, click the button above
        </p>
      </div>
    </div>
  )
}

export default EmailVerificationPage