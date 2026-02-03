export default function QuoteForm() {
  return (
    <div className="flex w-[502px] flex-col gap-[29px]">

      {/* Full Name */}
      <div className="flex items-center border-b border-[#D9D9D9] px-4 py-5">
        <span className="font-creato text-[18px] font-medium uppercase leading-[21px] text-[#1E1E1E]/40">
          Full name
        </span>
      </div>

      {/* Project Title */}
      <div className="flex items-center border-b border-[#D9D9D9] px-4 py-5">
        <span className="font-creato text-[18px] font-medium uppercase leading-[21px] text-[#1E1E1E]/40">
          Project title
        </span>
      </div>

      {/* Select Service */}
      <div className="flex items-center justify-between border-b border-[#D9D9D9] px-4 py-5">
        <span className="font-creato text-[18px] font-medium uppercase leading-[21px] text-[#1E1E1E]/40">
          Select service
        </span>

        {/* Arrow */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="shrink-0"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="#1E1E1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Phone Number */}
      <div className="flex items-center border-b border-[#D9D9D9] px-4 py-5">
        <span className="font-creato text-[18px] font-medium uppercase leading-[21px] text-[#1E1E1E]/40">
          Phone number
        </span>
      </div>

      {/* Personal Email */}
      <div className="flex items-center border-b border-[#D9D9D9] px-4 py-5">
        <span className="font-creato text-[18px] font-medium uppercase leading-[21px] text-[#1E1E1E]/40">
          Personal email
        </span>
      </div>

    </div>
  );
}
