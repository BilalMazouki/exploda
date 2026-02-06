type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  message: string;
};

export default function TestimonialCard({ data }: { data: Testimonial }) {
  return (
    <article
      className="
        w-[385px]
        md:w-[240px]
        lg:w-[285px]
        xl:w-[385px]
        h-[440px]
        md:h-[320px]
        lg:h-[380px]
        xl:h-[440px]
        bg-white
        border
        rounded-[24px]
        md:rounded-[16px]
        lg:rounded-[20px]
        xl:rounded-[24px]
        p-[28px]
        md:p-[16px]
        lg:p-[22px]
        xl:p-[28px]
        flex
        flex-col
        justify-between
        flex-shrink-0
      "
    >
      {/* Header: avatar + name + rating */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3 md:gap-2 lg:gap-3">
          <img src={data.avatar} alt={data.name} className="w-12 h-12 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full object-cover" />
          <div>
            <p className="font-semibold uppercase text-[14px] md:text-[11px] lg:text-[13px] xl:text-[14px]">
              {data.name}
            </p>
            <p className="text-[12px] md:text-[10px] lg:text-[11px] xl:text-[12px] text-gray-400 uppercase">
              {data.role}
            </p>
          </div>
        </div>

        {/* vertical stars on the right (matches screenshot) */}
        <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
          {[...Array(data.rating)].map((_, i) => (
            <span key={i} className="text-[#B68BFF] text-[14px] md:text-[11px] lg:text-[13px]">★</span>
          ))}
        </div>
      </div>

      {/* Message area */}
      <p className="text-[22px] md:text-[14px] lg:text-[17px] xl:text-[22px] font-medium leading-[28px] md:leading-[20px] lg:leading-[24px] xl:leading-[28px] uppercase">
        {data.message}
      </p>
    </article>
  );
}