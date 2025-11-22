import Header from '@/components/header'
import HeroSlider from '@/components/hero-section';
import HeroSection from '@/components/hero-section';
import Welcome from '@/components/welcome';

import { createClient } from '@/utils/supabase/server'
import React from 'react'

const page = async () => {
  return (
    <div>
    <Header/>
    <HeroSlider/>
    <Welcome/>
    </div>
  );
}



export default page