import { HeroHeader } from '@/components/header'

import { createClient } from '@/utils/supabase/server'
import React from 'react'

const page = async () => {
  const supabase = await createClient()

  return (
    <div>
     hello
    </div>
  )
}

export default page