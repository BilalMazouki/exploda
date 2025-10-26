import React from 'react'

const EmailVerificationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold">Verify your email</h1>
      <p className="text-xl text-center">
        We've sent an email to the address you provided during signup.
        Please follow the instructions in the email to verify your account.
      </p>

    </div>
  )
}

export default EmailVerificationPage
