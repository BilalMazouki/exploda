import { ModeToggle } from '@/app/components/ThemeButton'
import React from 'react'

const page = () => {
  return (
    <div className='bg-custom-100 dark:bg-custom-600 w-3xl'>
      <ModeToggle/>
      <h1 className='text-3xl font-bold text-custom-400 dark:text-custom-50'>Login</h1>
    </div>
  )
}

export default page