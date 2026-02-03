// components/hero/SideText.tsx

export default function SideText() {
  return (
    <div
      className="
        absolute
        right-[120px]
        top-[611px]
        w-[286px]
        h-[72px]
        text-right
      "
    >
      <div
        className="
          text-[20px]
          leading-[24px]
          font-medium
          uppercase
          tracking-[0.01em]
          text-[#1E1E1E]
        "
      >
        Turning ideas into
      </div>

      <div
        className="
          text-[20px]
          leading-[24px]
          font-medium
          uppercase
          tracking-[0.01em]
          text-[rgba(30,30,30,0.4)]
        "
      >
        powerful online presence
      </div>
    </div>
  );
}
