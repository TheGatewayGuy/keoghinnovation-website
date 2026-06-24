"use client";

import { useState } from "react";
import Image from "next/image";

interface YouTubeCardProps {
  videoId: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function YouTubeCard({ videoId, title, publishedAt, thumbnail }: YouTubeCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-navy-2 border border-white/[0.07] rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-200">
      {/* Thumbnail / Embed */}
      <div className="relative aspect-video bg-navy-3 cursor-pointer group" onClick={() => setPlaying(true)}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover group-hover:brightness-75 transition-all duration-200"
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* YouTube badge */}
            <div className="absolute top-3 right-3 bg-black/70 text-white text-[0.65rem] font-bold px-2 py-0.5 rounded flex items-center gap-1">
              <svg viewBox="0 0 24 24" fill="#FF0000" className="w-3 h-3"><path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.8C6.8 19 12 19 12 19s4.8 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l6 3-6 3z"/></svg>
              YouTube
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-display font-bold text-[0.92rem] leading-snug text-offwhite line-clamp-2 mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-[0.75rem] text-muted">{formatDate(publishedAt)}</span>
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.75rem] text-accent hover:text-offwhite font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            Watch on YouTube →
          </a>
        </div>
      </div>
    </div>
  );
}
