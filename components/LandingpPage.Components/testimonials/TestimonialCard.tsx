// components/testimonials/TestimonialCard.tsx

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
      h-[440px]
      rounded-[24px]
      border
      bg-white
      p-[32px]
      flex
      flex-col
      justify-between
    ">
      {/* HEADER */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-[12px]">
          <img
            src={data.avatar}
            alt={data.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <p className="font-semibold uppercase">{data.name}</p>
            <p className="text-sm text-gray-400 uppercase">
              {data.role}
            </p>
          </div>
        </div>

        {/* RATING */}
        <div className="flex flex-col gap-[4px]">
          {[...Array(data.rating)].map((_, i) => (
            <span key={i} className="text-purple-400">★</span>
          ))}
        </div>
      </div>

      {/* MESSAGE */}
      <p className="text-[22px] font-medium leading-[32px] uppercase">
        {data.message}
      </p>
    </div>
  );
}
