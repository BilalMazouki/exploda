import Image from "next/image";
import Link from "next/link";

export default function CountryDiamondImage() {
  return (
    <div className="relative ">
      {/* Diamond image */}
      <Image
        src="/diamond.png"
        alt="Countries"
        width={703}
        height={697}
        className="object-contain"
        priority
      />

      {/* Germany (top) */}
      <Link
        href="/"
        className="absolute top-[140px] left-1/2 -translate-x-1/2
                   w-[56px] h-[56px]"
      />

      {/* Canada (right) */}
      <Link
        href="/canada"
        className="absolute  right-[200px] top-[280px] -translate-y-1/2
                   w-[56px] h-[56px]"
      />

      {/* USA (bottom right) */}
      <Link
        href="/usa"
        className="absolute  bottom-[200px] right-[240px]
                   w-[56px] h-[56px]"
      />

      {/* Netherlands (bottom left) */}
      <Link
        href="/netherlands"
        className="absolute  bottom-[200px] left-[230px]
                   w-[56px] h-[56px]"
      />

      {/* France (left) */}
      <Link
        href="/france"
        className="absolute  left-[150px] top-[280px] -
                   w-[56px] h-[56px]"
      />
    </div>
  );
}
