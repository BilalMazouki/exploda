import Image from "next/image";

export default function ExplodaMask() {
  return (
    <div
      className="
        absolute
        left-1/2 bottom-0
        -translate-x-1/2
        w-[1353px] h-[314px]
        overflow-hidden
      "
    >
      {/* Background Image */}
      <Image
        src="/footer.png"
        alt=""
        width={1902}
        height={2853}
        className="
        
          select-none
          pointer-events-none
        "
        priority
      />

     
    </div>
  );
}
