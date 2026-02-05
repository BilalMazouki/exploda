export default function RatingCard() {
  return (
    <div className="
      w-[382px]
      md:w-[240px]
      lg:w-[285px]
      xl:w-[385px]
      h-[440px]
      md:h-[320px]
      lg:h-[380px]
      xl:h-[440px]
      rounded-[24px]
      md:rounded-[16px]
      lg:rounded-[20px]
      xl:rounded-[24px]
      border 
      bg-white 
      p-[32px]
      md:p-[20px]
      lg:p-[26px]
      xl:p-[32px]
      flex 
      flex-col 
      justify-between
      flex-shrink-0
    ">
      {/* TOP */}
      <div>
        <div className="flex items-end gap-[6px] md:gap-[4px] lg:gap-[5px] xl:gap-[6px]">
          <span className="
            text-[64px]
            md:text-[40px]
            lg:text-[52px]
            xl:text-[64px]
            font-semibold
          ">
            4.9
          </span>
          <span className="
            text-[20px]
            md:text-[14px]
            lg:text-[17px]
            xl:text-[20px]
            text-gray-400
          ">
            /5
          </span>
        </div>

        <p className="
          mt-[8px]
          md:mt-[6px]
          lg:mt-[7px]
          xl:mt-[8px]
          text-sm
          md:text-xs
          lg:text-sm
          xl:text-sm
          text-gray-500
        ">
          300+ <span className="uppercase">Satisfied Client</span>
        </p>
      </div>

      {/* CENTER TEXT */}
      <div className="text-center">
        <p className="
          text-sm
          md:text-xs
          lg:text-sm
          xl:text-sm
          font-medium 
          tracking-wide
        ">
          TURNING IDEAS <br />
          INTO <span className="text-gray-400">POWERFUL ONLINE</span> <br />
          PRESENCE
        </p>

        {/* STARS */}
        <div className="
          flex 
          justify-center 
          gap-[6px]
          md:gap-[4px]
          lg:gap-[5px]
          xl:gap-[6px]
          mt-[16px]
          md:mt-[12px]
          lg:mt-[14px]
          xl:mt-[16px]
        ">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className="
                text-purple-400 
                text-xl
                md:text-base
                lg:text-lg
                xl:text-xl
              "
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex items-center gap-[12px] md:gap-[8px] lg:gap-[10px] xl:gap-[12px]">
        {/* Client avatars */}
        <div className="flex -space-x-3">
          <img 
            src="/images/user-1.jpg" 
            className="
              w-8 h-8
              md:w-6 md:h-6
              lg:w-7 lg:h-7
              xl:w-8 xl:h-8
              rounded-full 
              border-2 
              border-white
            " 
          />
          <img 
            src="/images/user-2.jpg" 
            className="
              w-8 h-8
              md:w-6 md:h-6
              lg:w-7 lg:h-7
              xl:w-8 xl:h-8
              rounded-full 
              border-2 
              border-white
            " 
          />
          <img 
            src="/images/user-3.jpg" 
            className="
              w-8 h-8
              md:w-6 md:h-6
              lg:w-7 lg:h-7
              xl:w-8 xl:h-8
              rounded-full 
              border-2 
              border-white
            " 
          />
        </div>

        <p className="
          text-sm
          md:text-xs
          lg:text-sm
          xl:text-sm
          font-medium
        ">
          Trusted by client world wide
        </p>
      </div>
    </div>
  );
}