// components/testimonials/RatingCard.tsx

export default function RatingCard() {
  return (
    <div className="w-[382px]  h-[440px] rounded-[24px] border bg-white p-[32px] flex flex-col justify-between">
      {/* TOP */}
      <div>
        <div className="flex items-end gap-[6px]">
          <span className="text-[64px] font-semibold">4.9</span>
          <span className="text-[20px] text-gray-400">/5</span>
        </div>

        <p className="mt-[8px] text-sm text-gray-500">
          {/* 👉 REAL DATA: total satisfied clients */}
          300+ <span className="uppercase">Satisfied Client</span>
        </p>
      </div>

      {/* CENTER TEXT */}
      <div className="text-center">
        <p className="text-sm font-medium tracking-wide">
          TURNING IDEAS <br />
          INTO <span className="text-gray-400">POWERFUL ONLINE</span> <br />
          PRESENCE
        </p>

        {/* STARS */}
        <div className="flex justify-center gap-[6px] mt-[16px]">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-purple-400 text-xl">
              ★
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex items-center gap-[12px]">
        {/* 👉 REAL DATA: client avatars */}
        <div className="flex -space-x-3">
          <img src="/images/user-1.jpg" className="w-8 h-8 rounded-full" />
          <img src="/images/user-2.jpg" className="w-8 h-8 rounded-full" />
          <img src="/images/user-3.jpg" className="w-8 h-8 rounded-full" />
        </div>

        <p className="text-sm font-medium">
          Trusted by client world wide
        </p>
      </div>
    </div>
  );
}
