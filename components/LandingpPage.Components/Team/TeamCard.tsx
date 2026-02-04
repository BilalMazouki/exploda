// components/team/TeamCard.tsx
import Image from "next/image";

type Layout = "image-left" | "image-right";

interface Props {
  image: string;
  layout: Layout;
}

export default function TeamCard({ image, layout }: Props) {
  const isImageLeft = layout === "image-left";

  return (
    <div className="w-[652px] h-[290px] p-[8px] bg-white/10 rounded-[12px]">
      <div
        className={`flex h-full rounded-[8px] ${
          isImageLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Image */}
        <div className="relative w-[268px] h-full bg-white rounded-[8px] overflow-hidden">
          <Image src={image} alt="" fill className="object-cover" />
        </div>

        {/* Text */}
        <div className="w-[368px] h-full flex flex-col justify-between p-[24px]">
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[24px] uppercase font-medium text-[#1E1E1E]">
              Evrahimovic
            </h3>

            <span
              className="
                text-[18px]
                uppercase
                font-bold
                bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,_#A480F5_0%,_#CEB2FF_45.67%,_#C6CBFE_81.25%,_#BB9EFF_100%)]
                bg-clip-text
                text-transparent
              "
            >
              CEO
            </span>
          </div>

          <p className="text-[16px] uppercase text-[#1E1E1E]/50">
            Lorem ipsum dolor sit amet consectetur. Magna id urna est.
          </p>
        </div>
      </div>
    </div>
  );
}
