import Image from "next/image";

export default function ExplodaMask() {
  return (
    <div
      className="
        absolute
        left-1/2
        bottom-0
        -translate-x-1/2
        w-[1353px]
        md:w-[720px]
        lg:w-[980px]
        xl:w-[1353px]
        h-[314px]
        md:h-[200px]
        lg:h-[260px]
        xl:h-[314px]
        overflow-hidden
      "
    >
      <Image
        src="/footer.png"
        alt=""
        width={1902}
        height={2853}
        className="w-full h-full object-top select-none pointer-events-none"
        priority
      />
    </div>
  );
}