import Image from "next/image";
import Link from "next/link";

export default function CountryDiamondImage() {
  return (
    <div className="relative">
      {/* Diamond image */}
      <Image
        src="/diamond.png"
        alt="Countries"
        width={703}
        height={697}
        className="
          object-contain
          w-[703px]
          lg:w-[500px]
          xl:w-[703px]
          h-auto
        "
        priority
      />

      {/* Germany (top) */}
      <Link
        href="/"
        className="
          absolute 
          top-[140px]
          lg:top-[100px]
          xl:top-[140px]
          left-1/2 
          -translate-x-1/2
          w-[56px]
          lg:w-[40px]
          xl:w-[56px]
          h-[56px]
          lg:h-[40px]
          xl:h-[56px]
          hover:scale-110
          transition-transform
        "
      />

      {/* Canada (right) */}
      <Link
        href="/canada"
        className="
          absolute  
          right-[200px]
          lg:right-[142px]
          xl:right-[200px]
          top-[280px]
          lg:top-[200px]
          xl:top-[280px]
          -translate-y-1/2
          w-[56px]
          lg:w-[40px]
          xl:w-[56px]
          h-[56px]
          lg:h-[40px]
          xl:h-[56px]
          hover:scale-110
          transition-transform
        "
      />

      {/* USA (bottom right) */}
      <Link
        href="/usa"
        className="
          absolute  
          bottom-[200px]
          lg:bottom-[142px]
          xl:bottom-[200px]
          right-[240px]
          lg:right-[171px]
          xl:right-[240px]
          w-[56px]
          lg:w-[40px]
          xl:w-[56px]
          h-[56px]
          lg:h-[40px]
          xl:h-[56px]
          hover:scale-110
          transition-transform
        "
      />

      {/* Netherlands (bottom left) */}
      <Link
        href="/netherlands"
        className="
          absolute  
          bottom-[200px]
          lg:bottom-[142px]
          xl:bottom-[200px]
          left-[230px]
          lg:left-[164px]
          xl:left-[230px]
          w-[56px]
          lg:w-[40px]
          xl:w-[56px]
          h-[56px]
          lg:h-[40px]
          xl:h-[56px]
          hover:scale-110
          transition-transform
        "
      />

      {/* France (left) */}
      <Link
        href="/france"
        className="
          absolute  
          left-[150px]
          lg:left-[107px]
          xl:left-[150px]
          top-[280px]
          lg:top-[200px]
          xl:top-[280px]
          w-[56px]
          lg:w-[40px]
          xl:w-[56px]
          h-[56px]
          lg:h-[40px]
          xl:h-[56px]
          hover:scale-110
          transition-transform
        "
      />
    </div>
  );
}