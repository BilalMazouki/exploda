export default function StatusBadge() {
  return (
    <div className="
      flex 
      items-center 
      gap-[5px]
      md:gap-[4px]
      lg:gap-[4px]
      xl:gap-[5px]
    ">
      <span className="
        h-2 w-2
        md:h-1.5 md:w-1.5
        lg:h-1.5 lg:w-1.5
        xl:h-2 xl:w-2
        rounded-full 
        bg-[#1AE200]
      " />
      <span className="
        font-creato
        text-[16px]
        md:text-[12px]
        lg:text-[14px]
        xl:text-[16px]
        font-medium
        uppercase
        leading-[19px]
        md:leading-[14px]
        lg:leading-[17px]
        xl:leading-[19px]
        text-[#1E1E1E]
      ">
        Open for new project
      </span>
    </div>
  );
}