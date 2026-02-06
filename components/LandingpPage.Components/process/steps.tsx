export default function Steps() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[1440px]
        mx-auto

        mt-[460px]
        md:mt-[330px]
        lg:mt-[385px]
        xl:mt-[460px]

        px-[60px]
        md:px-[30px]
        lg:px-[45px]
        xl:px-[60px]

        flex
        justify-end
      "
    >
      {/* Right column */}
      <div
        className="
          w-full
          max-w-[524px]
          md:max-w-[350px]
          lg:max-w-[470px]
          xl:max-w-[524px]

          flex
          flex-col
          gap-[120px]
          md:gap-[72px]
          lg:gap-[96px]
          xl:gap-[120px]
        "
      >
        {/* STEP BLOCK */}
        {[
          {
            step: "STEP 01",
            title: "Your Project Exploration",
            text:
              "We start with a detailed Google Meet consultation to fully understand your Mobile app or website functionality and business vision.",
          },
          {
            step: "STEP 02",
            title: "Your Project Study",
            text:
              "Our expert team studies your app or website and suggests multiple design styles tailored to your needs.",
          },
          {
            step: "STEP 03",
            title: "Your Project Wireframing",
            text:
              "The expert team hands the study to the planning team, which plans out your idea in a form of wireframes.",
          },
          {
            step: "STEP 04",
            title: "Your Project Design",
            text:
              "After your confirmation, we design your project screen by screen, getting your approval at every step.",
          },
        ].map(({ step, title, text }) => (
          <div
            key={step}
            className="
              flex
              flex-col
              gap-[56px]
              md:gap-[32px]
              lg:gap-[42px]
              xl:gap-[56px]
            "
          >
            <div className="flex flex-col gap-[16px] md:gap-[12px] lg:gap-[14px] xl:gap-[16px]">
              <div className="w-full pb-[12px] md:pb-[8px] lg:pb-[10px] xl:pb-[12px] border-b border-[#DDDCDF]">
                <span
                  className="
                    font-creato
                    font-bold
                    text-[18px]
                    md:text-[13px]
                    lg:text-[15px]
                    xl:text-[18px]
                    uppercase
                    bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,_#A480F5_0%,_#CEB2FF_45.67%,_#C6CBFE_81.25%,_#BB9EFF_100%)]
                    bg-clip-text
                    text-transparent
                  "
                >
                  {step}
                </span>
              </div>

              <h3
                className="
                  font-creato
                  font-medium
                  text-[36px]
                  md:text-[22px]
                  lg:text-[28px]
                  xl:text-[36px]
                  leading-[43px]
                  md:leading-[26px]
                  lg:leading-[34px]
                  xl:leading-[43px]
                  tracking-[0.01em]
                  uppercase
                  text-[#1E1E1E]
                "
              >
                {title}
              </h3>
            </div>

            <p
              className="
                font-creato
                font-medium
                text-[20px]
                md:text-[14px]
                lg:text-[16px]
                xl:text-[20px]
                leading-[24px]
                md:leading-[18px]
                lg:leading-[20px]
                xl:leading-[24px]
                tracking-[0.01em]
                uppercase
                text-justify
                text-[#1E1E1E]
              "
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
