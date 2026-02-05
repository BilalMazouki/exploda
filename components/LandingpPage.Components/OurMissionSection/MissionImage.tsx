import Image from "next/image";

export default function MissionImage() {
  return (
    <Image
      src="/ourmissionleft.png"
      alt=""
      width={350}
      height={597}
      className="
        hidden xl:block
        absolute
        left-[-178px]
        top-[381px]
        scale-x-[-1]
        w-[350px]
        h-[597px]
      "
      priority
    />
  );
}