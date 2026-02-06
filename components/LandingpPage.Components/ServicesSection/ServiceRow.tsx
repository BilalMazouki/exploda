import Image from "next/image";

interface Props {
  index: string;
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function ServiceRow({
  index,
  title,
  isOpen,
  onClick,
}: Props) {
  return (
    <div
      className="
        flex
        flex-col
        md:flex-row
        items-start
        md:items-center
        justify-between
        border-b
        border-gray-200

        py-8
        md:py-[32px]
        lg:py-[40px]
        xl:py-[48px]

        gap-6
        md:gap-0
      "
    >
      {/* Left side (CLICKABLE) */}
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="
          flex
          gap-6
          md:gap-[20px]
          lg:gap-[30px]
          xl:gap-[40px]

          w-full
          md:w-auto
          text-left
        "
      >
        <span
          className="
            text-[16px]
            md:text-[14px]
            lg:text-[16px]
            xl:text-[18px]
            text-gray-400
            shrink-0
          "
        >
          {index}
        </span>

        <div className="flex-1">
          <h3
            className="
              text-[24px]
              md:text-[20px]
              lg:text-[24px]
              xl:text-[28px]
              uppercase
              font-medium
            "
          >
            {title}
          </h3>

          {isOpen && (
            <>
              <p
                className="
                  mt-4
                  md:mt-[12px]
                  lg:mt-[14px]
                  xl:mt-[16px]

                  max-w-full
                  md:max-w-[300px]
                  lg:max-w-[400px]
                  xl:max-w-[520px]

                  text-gray-600
                  leading-[24px]
                  md:leading-[20px]
                  lg:leading-[23px]
                  xl:leading-[26px]

                  text-[15px]
                  md:text-[13px]
                  lg:text-[14px]
                  xl:text-[16px]
                "
              >
                We conduct in-depth user insights and market
                research to give you the best.
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                  md:gap-[8px]
                  lg:gap-[10px]
                  xl:gap-[12px]

                  mt-4
                  md:mt-[12px]
                  lg:mt-[14px]
                  xl:mt-[16px]
                "
              >
                {[
                  "USER BEHAVIOR",
                  "USABILITY TESTING",
                  "PRODUCT INSIGHTS",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3
                      md:px-[10px]
                      lg:px-[12px]
                      xl:px-[14px]

                      py-[5px]
                      md:py-[4px]
                      lg:py-[5px]
                      xl:py-[6px]

                      text-[11px]
                      md:text-[9px]
                      lg:text-[10px]
                      xl:text-[12px]

                      uppercase
                      rounded-full
                      border
                      border-purple-200
                      text-purple-400
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </button>

      {/* Right image */}
      {isOpen && (
        <div className="w-full md:w-auto flex justify-start md:justify-end">
          <Image
            src="/services.png"
            alt=""
            width={400}
            height={268}
            className="
              rounded-[12px]

              p-6
              md:p-4
              lg:p-6
              xl:p-8

              w-full
              max-w-[360px]
              md:w-[280px]
              lg:w-[340px]
              xl:w-[400px]

              h-auto
            "
          />
        </div>
      )}
    </div>
  );
}
