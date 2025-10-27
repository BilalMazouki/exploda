'use server'
import { verifyUser } from '@/helpers/auth';
import React from 'react'

const page = async () => {
      const { user, response } = await verifyUser('admin');
      if (!user) return <div>{response.status}</div>;
  return (
    <div>this page is only for admin</div>
  )
}

export default page