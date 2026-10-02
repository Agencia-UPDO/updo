'use client';

import { useState } from 'react';

interface VideoDepoimentoProps {
  videoId: string;
  name: string;
}

const VideoDepoimento = ({ videoId, name }: VideoDepoimentoProps) => {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
        title={`Depoimento de ${name}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 size-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group absolute inset-0 size-full cursor-pointer"
      aria-label={`Assistir depoimento de ${name}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="size-full object-cover"
      />
      <span className="bg-secondary/20 absolute inset-0 transition-colors duration-300 group-hover:bg-secondary/35" />
      <span className="absolute top-1/2 left-1/2 flex size-[4.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
        <span className="flex size-[3.25rem] items-center justify-center rounded-full bg-white shadow-lg transition-colors duration-300 group-hover:bg-primary-500">
          <svg viewBox="0 0 24 24" className="fill-secondary stroke-secondary ml-0.5 size-5" aria-hidden="true">
            <path d="M8 6.5v11a1 1 0 0 0 1.5.86l9-5.5a1 1 0 0 0 0-1.72l-9-5.5A1 1 0 0 0 8 6.5z" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
    </button>
  );
};

export default VideoDepoimento;
