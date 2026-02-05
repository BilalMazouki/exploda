type Blog = {
  title: string;
  image: string;
  tag: string;
};

export default function BlogCard({ data }: { data: Blog }) {
  return (
    <article
      className="
        w-[420px]
        md:w-[240px]
        lg:w-[305px]
        xl:w-[420px]
        h-[480px]
        md:h-[320px]
        lg:h-[400px]
        xl:h-[480px]
        rounded-[24px]
        md:rounded-[16px]
        lg:rounded-[20px]
        xl:rounded-[24px]
        bg-white
        border
        overflow-hidden
        flex
        flex-col
        justify-end
        shrink-0
        relative
      "
    >
      {/* ================= IMAGE ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="
        relative 
        p-[24px]
        md:p-[16px]
        lg:p-[20px]
        xl:p-[24px]
        bg-white 
        rounded-t-[16px]
        md:rounded-t-[12px]
        lg:rounded-t-[14px]
        xl:rounded-t-[16px]
      ">
        {/* Category / tag */}
        <p className="
          text-xs
          md:text-[10px]
          lg:text-[11px]
          xl:text-xs
          uppercase 
          text-gray-400 
          mb-2
          md:mb-1
          lg:mb-1.5
          xl:mb-2
        ">
          {data.tag}
        </p>

        {/* Blog title */}
        <h3 className="
          text-lg
          md:text-sm
          lg:text-base
          xl:text-lg
          font-semibold 
          uppercase
        ">
          {data.title}
        </h3>
      </div>
    </article>
  );
}