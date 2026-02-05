type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  message: string;
};

export default function TestimonialCard({
  data,
}: {
  data: Testimonial;
}) {
  return (
    <div className="
      w-[385px]
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
      {/* HEADER */}
      <div className="flex items-start justify-between">
        <div className="
          flex 
          items-center 
          gap-[12px]
          md:gap-[8px]
          lg:gap-[10px]
          xl:gap-[12px]
        ">
          <img
            src={data.avatar}
            alt={data.name}
            className="
              w-12 h-12
              md:w-8 md:h-8
              lg:w-10 lg:h-10
              xl:w-12 xl:h-12
              rounded-full 
              object-cover
            "
          />

          <div>
            <p className="
              font-semibold 
              uppercase
              text-base
              md:text-xs
              lg:text-sm
              xl:text-base
            ">
              {data.name}
            </p>
            <p className="
              text-sm
              md:text-xs
              lg:text-xs
              xl:text-sm
              text-gray-400 
              uppercase
            ">
              {data.role}
            </p>
          </div>
        </div>

        {/* RATING */}
        <div className="
          flex 
          flex-col 
          gap-[4px]
          md:gap-[2px]
          lg:gap-[3px]
          xl:gap-[4px]
        ">
          {[...Array(data.rating)].map((_, i) => (
            <span 
              key={i} 
              className="
                text-purple-400
                text-base
                md:text-sm
                lg:text-sm
                xl:text-base
              "
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* MESSAGE */}
      <p className="
        text-[22px]
        md:text-[14px]
        lg:text-[17px]
        xl:text-[22px]
        font-medium 
        leading-[32px]
        md:leading-[20px]
        lg:leading-[25px]
        xl:leading-[32px]
        uppercase
      ">
        {data.message}
      </p>
    </div>
  );
}