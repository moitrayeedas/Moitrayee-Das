"use client";

import { useEffect, useRef, useState } from "react";

const awards = [
  {
    title: "Best Paper Award",
    description:
      'For the paper, “Evaluating the perceived utility of AI tools among university students: A cross-sectional study,” presented at the International Conference of Reimagining Self and Society: Dynamics of Psychology in the Age of AI, Woxsen University, Hyderabad (2026).',
  },
  {
    title: "Teaching Award",
    description: "FLAME University, Pune (2024–2025).",
  },
  {
    title: "Service Award",
    description:
      "FLAME University, Pune, in the year the award was introduced (2025).",
  },
  {
    title: "Teaching Award",
    description: "FLAME University, Pune (2023–2024).",
  },
  {
    title: "Best Paper Award",
    description:
      "Best Paper Award in the Indian Management, Culture, and Knowledge Systems track and the overall Best Paper Award at the 9th INDAM Conference on Creating Impact through Responsible Leadership and Sustainable Business Practices (2024).",
  },
  {
    title: "Teaching Award",
    description: "FLAME University, Pune (2022–2023).",
  },
  {
    title: "Outstanding Student Award",
    description:
      "For M.Phil. (Management and Labour Studies), Tata Institute of Social Sciences (TISS), Mumbai (January 2017).",
  },
];

const awardImages = [
  "/images/awards/A (1).jpg",
  "/images/awards/A (4).jpg",
  "/images/awards/A (2).jpg",
  "/images/awards/A (5).jpg",
  "/images/awards/A (3).jpg",
  "/images/awards/A (6).jpg",
  "/images/awards/A (1).jpeg",
  "/images/awards/A (2).jpeg",
];

export default function AwardsPanel() {
  const [openAward, setOpenAward] = useState<number | null>(null);

  // This MUST be here, outside the return()
  const galleryRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    let animationFrame: number;

    const speed = 0.5;

    const scroll = () => {
      if (!gallery) return;

      gallery.scrollTop += speed;

      if (
        gallery.scrollTop + gallery.clientHeight >=
        gallery.scrollHeight - 1
      ) {
        gallery.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white px-8 pb-18 pt-31 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <p className="mb-3 text-[14px] font-medium uppercase tracking-[0.2em] text-blue-700">
            Recognition
          </p>

          <h1 className="text-[37px] font-semibold tracking-tight text-slate-900 md:text-[49px]">
            Awards
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[60%_40%]">

          {/* Awards */}
          <section>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {awards.map((award, index) => {
                const number = String(index + 1).padStart(2, "0");

                return (
                  <article
                    key={`${award.title}-${index}`}
                    className={`border border-blue-200 transition-colors ${
                      openAward === index
                        ? "border-blue-700"
                        : "hover:border-blue-700"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenAward((current) =>
                          current === index ? null : index
                        )
                      }
                      aria-expanded={openAward === index}
                      className="flex w-full items-center gap-4 p-5 text-left"
                    >
                      <span
                        className={`w-7 shrink-0 text-xs font-medium tracking-[0.12em] ${
                          openAward === index
                            ? "text-blue-700"
                            : "text-slate-400"
                        }`}
                      >
                        {number}
                      </span>

                      <span
                        className={`text-[18px] font-medium leading-6 tracking-tight ${
                          openAward === index
                            ? "text-blue-700"
                            : "text-slate-900"
                        }`}
                      >
                        {award.title}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`ml-auto text-[24px] font-light leading-none text-slate-400 transition-transform duration-300 ${
                          openAward === index ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        openAward === index
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 pl-16 text-[13px] leading-6 text-slate-600">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Vertical Image Gallery */}
          {/* Desktop: Vertical Auto-Scrolling Gallery */}
<aside className="hidden lg:block -mt-49 h-full min-h-[700px]">
  <div
  ref={galleryRef}
  className="hide-scrollbar h-[calc(100vh-80px)] min-h-[100px] overflow-y-auto rounded-xl bg-slate-100 p-4"
>
    <div className="space-y-4">
      {awardImages.map((src, index) => (
        <div
          key={src}
          className="overflow-hidden rounded-lg bg-white"
        >
          <img
            src={src}
            alt={`Award recognition ${index + 1}`}
            className="block h-auto w-full"
          />
        </div>
      ))}
    </div>
  </div>
</aside>

{/* Mobile: Original Collage */}
<div className="columns-2 gap-3 lg:hidden">
  {[
    "/images/awards/A (1).jpg",
    "/images/awards/A (4).jpg",
    "/images/awards/A (2).jpg",
    "/images/awards/A (5).jpg",
    "/images/awards/A (3).jpg",
    "/images/awards/A (6).jpg",
    "/images/awards/A (1).jpeg",
    "/images/awards/A (2).jpeg",
  ].map((src, index) => (
    <div
      key={src}
      className="mb-3 break-inside-avoid overflow-hidden rounded-md"
    >
      <img
        src={src}
        alt={`Award recognition ${index + 1}`}
        className="block h-auto w-full"
      />
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
}