// components/hero/SideText.tsx

export default function SideText() {
  return (
    <div
      className="
        absolute
        left-[1104px]
        top-[611px]
        w-[286px]
        h-[72px]
        
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
        Turning ideas <br className="flex justify-end"></br>into <span
        className=" 
          text-[20px]
          leading-[24px]
          font-medium
          uppercase
          tracking-[0.01em]
          text-[rgba(30,30,30,0.4)]
        "
      >
      powerful online 
      </span><br></br>
      <div className="flex justify-end mr-12">

      <span className="">presence</span>
      </div>
      </div>

      
    </div>
  );
}
