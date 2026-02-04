import Image from "next/image";

export default function Logos() {
  return (
    <Image
      src="/logos.png"
      alt=""
      width={1440}
      height={140}
      className="
      
        w-[1440px]
        h-[140px]
      "
      priority
    />
  );
}
