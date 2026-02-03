export default function Cta() {
  return (
    <div className="relative flex flex-col items-center">

      {/* Glow */}
      <div
        className="
          absolute
          bottom-[-6px]
          h-[20px]
          w-[119px]
          rounded-full
          bg-gradient-to-r
          from-[#8B63E8]
          to-[#60B7E3]
          blur-[16.9px]
          z-0
        "
        aria-hidden
      />

      {/* Button */}
      <button
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          gap-2
          rounded-lg
          bg-[#1E1E1E]
          py-[13px]
          pl-[20px]
          pr-[25px]
        "
      >
        <span
          className="
            font-creato
            text-[16px]
            font-medium
            uppercase
            leading-[19px]
            tracking-[0.01em]
            bg-gradient-to-r
            from-[#FFF5F5]
            via-[#E6E5FF]
            via-[#D4C6F5]
            to-[#FFFFFF]
            bg-clip-text
            text-transparent
          "
        >
          Get in touch
        </span>
      </button>

    </div>
  );
}
