import Image from "next/image";

interface ArticleCardProps {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  tags?: string[];
  coverImage?: string | null;
  readTime?: number;
  source: "hashnode" | "devto";
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function ArticleCard({
  title,
  description,
  url,
  publishedAt,
  tags,
  coverImage,
  readTime,
  source,
}: ArticleCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-navy-2 border border-white/[0.07] rounded-xl overflow-hidden hover:border-accent/40 hover:-translate-y-1 transition-all duration-200"
    >
      {/* Cover image */}
      {coverImage && (
        <div className="relative h-44 w-full overflow-hidden bg-navy-3">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized={coverImage.startsWith("/")}
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-5">
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[0.68rem] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="font-display font-bold text-[0.97rem] leading-snug text-offwhite group-hover:text-white mb-2 flex-1">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-muted text-[0.85rem] leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/[0.06]">
          <span className="text-[0.75rem] text-muted">{formatDate(publishedAt)}</span>
          <div className="flex items-center gap-2">
            {readTime && (
              <span className="text-[0.72rem] text-muted">{readTime} min read</span>
            )}
            <span className={`text-[0.68rem] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded ${
              source === "hashnode"
                ? "text-blue-300 bg-blue-500/10"
                : "text-purple-300 bg-purple-500/10"
            }`}>
              {source === "hashnode" ? "Tutorial" : "Article"}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
