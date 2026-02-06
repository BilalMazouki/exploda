import Image from "next/image";

export default function RatingCard() {
  return (
    <article
      className="
        min-w-[315px]
        md:min-w-[240px]
        lg:min-w-[285px]
        xl:min-w-[315px]
        bg-white
        border
        rounded-[24px]
        md:rounded-[16px]
        lg:rounded-[20px]
        xl:rounded-[24px]
        p-[32px]
        md:p-[20px]
        lg:p-[26px]
        xl:p-[32px]
        flex
        flex-col
        justify-between
        flex-shrink-0
      "
    >
      {/* TOP */}
      <div>
        <div className="flex items-end gap-3">
          <span className="text-[64px] md:text-[40px] lg:text-[52px] xl:text-[64px] font-semibold">
            4.9
          </span>
          <span className="text-[20px] md:text-[14px] lg:text-[17px] xl:text-[20px] text-gray-400">
            /5
          </span>
        </div>

        <p className="mt-3 text-sm md:text-xs lg:text-sm text-gray-500">
          300+ <span className="uppercase">Satisfied Client</span>
        </p>
      </div>

      {/* CENTER */}
      <div className="text-center">
        <p className="text-sm md:text-xs lg:text-sm font-medium tracking-wide">
          TURNING IDEAS <br />
          INTO <span className="text-gray-400">POWERFUL ONLINE</span> <br />
          PRESENCE
        </p>

        <div className="flex justify-center gap-3 mt-4">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="text-[#B68BFF] text-xl md:text-base lg:text-lg"
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex items-center gap-3 md:gap-2">
        <div className="flex -space-x-3">
          {["user-1.jpg", "user-2.jpg", "user-3.jpg"].map((img, i) => (
            <Image
              key={i}
              src={`/images/${img}`}
              alt=""
              width={32}
              height={32}
              className="
                w-8 h-8
                md:w-6 md:h-6
                rounded-full
                border-2
                border-white
              "
            />
          ))}
        </div>

        <p className="text-sm md:text-xs lg:text-sm font-medium">
          Trusted by client world wide
        </p>
      </div>
    </article>
  );
}
