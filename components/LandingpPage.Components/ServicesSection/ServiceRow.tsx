import Image from "next/image";

interface Props {
  index: string;
  title: string;
  active?: boolean;
}

export default function ServiceRow({
  index,
  title,
  active = false,
}: Props) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        py-[48px]
        border-b
        border-gray-200
      "
    >
      {/* Left side */}
      <div className="flex gap-[40px]">
        <span
          className="
            text-[18px]
            text-gray-400
          "
        >
          {index}
        </span>

        <div>
          <h3
            className="
              text-[28px]
              uppercase
              font-medium
            "
          >
            {title}
          </h3>

          {active && (
            <>
              <p
                className="
                  mt-[16px]
                  max-w-[520px]
                  text-gray-600
                  leading-[26px]
                "
              >
                We conduct in-depth user insights and market
                research to give you the best.
              </p>

              <div className="flex gap-[12px] mt-[16px]">
                {[
                  "USER BEHAVIOR",
                  "USABILITY TESTING",
                  "PRODUCT INSIGHTS",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-[14px]
                      py-[6px]
                      text-[12px]
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
      </div>

      {/* Right image */}
      {active && (
        <Image
          src="/services.png"
          alt=""
          width={400}
          height={268}
          className="rounded-[12px] p-8"
        />
      )}
    </div>
  );
}
