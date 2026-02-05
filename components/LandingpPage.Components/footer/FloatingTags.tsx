import Image from "next/image";

export default function FloatingTags() {
    return (
        <>
            {/* UIUX Design */}
            <Image
                src="/ux.png"
                alt=""
                width={115}
                height={32}
                className="
          absolute
          left-[644px] top-[293px]
        "
                priority
            />

            {/* Website design */}
            <Image
                src="/website.png"
                alt=""
                width={140}
                height={32}
                className="
          absolute
          left-[796px] top-[286px]
          
        "
                priority
            />

            {/* App Design */}
            <Image
                src="/design.png"
                alt=""
                width={112}
                height={32}
                className="
          absolute
          left-[1032px] top-[303px]
        "
                priority
            />

            {/* Development */}
            <Image
                src="/development.png"
                alt=""
                width={129}
                height={32}
                className="
          absolute
          left-[1251px] top-[293px]
        "
                priority
            />
        </>
    );
}
