import React from 'react';

const Welcome = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-accent min-h-screen">
      
      {/* Text Content - Better spacing and typography */}
      <div className="flex-1 px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center py-12 lg:py-0">
        <div className="max-w-2xl mx-auto lg:mx-0 space-y-8">
          
          {/* Title with better hierarchy */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-Primary leading-tight tracking-tight">
              Welcome to Your<br />
              <span className="text-Secondary-Color">Surf & Yoga Escape</span>
            </h2>
            <div className="w-20 h-1 bg-Secondary-Color rounded-full"></div>
          </div>

          {/* Content with improved spacing */}
          <div className="space-y-6 text-Neutral-Dark text-base sm:text-lg leading-relaxed">
            <p className="font-medium">
              Welcome to Taghazout, Morocco&apos;s surf coast where the ocean, sunshine, and laid-back lifestyle meet. 
              Known for world-class waves, warm culture, and golden sunsets, this is where every surfer finds their flow.
            </p>

            <p>
              At <span className="font-semibold text-Primary">Mersawi Surf Experience</span>, we don&apos;t just teach surfing—we are a full surf camp with accommodation, 
              community, and the complete surf lifestyle.
            </p>

            <p>
              Created by local surfers and fueled by pure passion, Mersawi brings together everything that makes a 
              surf trip unforgettable: comfortable stays, daily surf lessons, good food, local adventures, and a 
              friendly family-like atmosphere.
            </p>

            <p>
              Whether you&apos;re joining us for a full surf package, a week of surf & stay, or a short escape, 
              Mersawi is all about connection with the ocean, with new friends, and with real Moroccan surf culture.
            </p>

            <p>
              From sunrise sessions to chilled village afternoons, every moment is crafted to make you feel alive, 
              welcomed, and part of the surf family.
            </p>

            {/* Highlighted Box - Improved styling */}
            <div className="bg-Secondary-Color/10 border-l-4 border-Secondary-Color p-6 sm:p-8 rounded-r-xl mt-8 transform hover:scale-[1.02] transition-transform duration-300">
              <p className="text-lg sm:text-xl font-semibold italic text-Secondary-Color leading-relaxed">
                Because being <span className="font-bold underline text-Primary">Mersawi</span> means one thing: 
                you live by the sea even if just for a while.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Content - Better layout and effects */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-10 lg:px-0 py-8 lg:py-12 xl:py-16 relative">
        <div className="relative w-full max-w-lg lg:max-w-none h-80 sm:h-96 lg:h-full">
          <img
            src="/hero.jpg"
            alt="Surfing at Mersawi Beach in Taghazout, Morocco"
            className="w-full h-full object-cover rounded-2xl lg:rounded-none shadow-2xl transform hover:scale-105 transition-transform duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-l from-accent/30 via-transparent to-transparent rounded-2xl lg:rounded-none"></div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-Secondary-Color/20 rounded-full blur-xl"></div>
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-Primary/20 rounded-full blur-lg"></div>
        </div>
      </div>

    </section>
  );
};

export default Welcome;