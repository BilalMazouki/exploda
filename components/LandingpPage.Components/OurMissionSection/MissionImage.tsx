import Image from "next/image";

export default function MissionImage() {
  return (
    <Image
      src="/ourmwssionleft.png"
      alt=""
      width={350}
      height={597}
      priority
      className="
        hidden
        xl:block
        absolute
        left-0
        -translate-x-[178px]
        top-[381px]
        scale-x-[-1]
        w-[350px]
        h-[597px]
        pointer-events-none
        select-none
      "
    />
  );
}
