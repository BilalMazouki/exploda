// components/blog/BlogCard.tsx

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
        h-[480px]
        rounded-[24px]
        bg-white
        border
        overflow-hidden
        flex
        flex-col
        justify-end
        shrink-0
      "
    >
      {/* ================= IMAGE ================= */}
      {/* 👉 REAL DATA: blog cover image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative p-[24px] bg-white rounded-t-[16px]">
        {/* 👉 REAL DATA: category / tag */}
        <p className="text-xs uppercase text-gray-400 mb-2">
          {data.tag}
        </p>

        {/* 👉 REAL DATA: blog title */}
        <h3 className="text-lg font-semibold uppercase">
          {data.title}
        </h3>
      </div>
    </article>
  );
}
