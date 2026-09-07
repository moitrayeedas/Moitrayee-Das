interface HomePanelProps {
  onNavigate: (target: string) => void;
}

import { BriefcaseBusiness, Landmark } from "lucide-react";

export default function HomePanel({ onNavigate }: HomePanelProps) {  return (
    <div className="min-h-full bg-white text-slate-900">
      
            {/* =========================================================
          HERO
      ========================================================= */}
      <section className="px-6 pb-20 pt-28 md:px-10 lg:px-12 xl:px-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="grid items-stretch gap-8 lg:grid-cols-[0.82fr_1.5fr_0.82fr] xl:gap-10">

            {/* =====================================================
    LEFT: PORTRAIT CARD
===================================================== */}
<div className="order-2 self-start lg:order-1">
  <div className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/50 px-8 py-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)] md:px-10">

    {/* Portrait area */}
    <div className="flex items-center justify-center pb-6">
      <div className="w-full max-w-[280px] text-center">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
          <img
            src="/images/home/head.jpeg"
            alt="Dr. Moitrayee Das"
            className="h-[380px] w-full object-cover"
          />
        </div>

      </div>
    </div>

    {/* Identity */}
    <div className="pt-2">
      <div className="mb-7 h-px w-12 bg-blue-700" />

      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-[26px]">
        Dr. Moitrayee Das
      </h1>

      <p className="mt-3 max-w-[240px] text-xs font-medium uppercase leading-6 tracking-[0.16em] text-slate-500">
        Assistant Professor of Psychology
      </p>
    </div>

  </div>
</div>
            {/* =====================================================
                CENTER: INTRODUCTION
            ===================================================== */}
            <div className="order-1 flex flex-col justify-center lg:order-2">

  <div className="flex items-center gap-5">
    <span className="h-px w-9 shrink-0 bg-blue-700" />

    <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
      Psychology · Research · Mental Health
    </span>
  </div>

  <h2 className="mt-5 text-[58px] font-semibold leading-[0.94] tracking-[-0.04em] text-slate-900 sm:text-[64px] lg:text-[60px] xl:text-[68px]">
    Dr. Moitrayee
    <br />
    <span className="font-normal text-blue-800">
      Das
    </span>
  </h2>

  <p className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-blue-700">
    Assistant Prof., FLAME University
  </p>

              <p className="mt-7 max-w-[620px] text-[15px] leading-8 text-slate-600">
                Dr. Das is an Assistant Professor of Psychology at FLAME University, Pune. She received her PhD & M.Phil. in Management and Labour Studies from the Tata Institute of Social Sciences (TISS), Mumbai and has also completed an Executive Post Graduate Diploma in Analytics from the same. Moitrayee currently teaches Industrial and Cross-Cultural Psychology at FLAME.
                <br/>She loves to pursue different courses and has completed 5 Diploma and 21 Certificate courses from different institutes.
              </p>

              {/* Statistics */}
              <div className="mt-8 grid max-w-[620px] grid-cols-3 border-y border-slate-200">
                <div className="py-6 pr-5">
                  <p className="text-[30px] font-semibold tracking-tight text-slate-900">
                    100+
                  </p>

                  <p className="mt-2 text-[10px] font-medium uppercase leading-5 tracking-[0.14em] text-slate-500">
                    Mental Health
                    <br />
                    Sessions
                  </p>
                </div>

                <div className="border-l border-slate-200 px-5 py-6">
                  <p className="text-[30px] font-semibold tracking-tight text-slate-900">
                    50+
                  </p>

                  <p className="mt-2 text-[10px] font-medium uppercase leading-5 tracking-[0.14em] text-slate-500">
                    Co-authored
                    <br />
                    Research Works
                  </p>
                </div>

                <div className="border-l border-slate-200 px-5 py-6">
                  <p className="text-[30px] font-semibold tracking-tight text-slate-900">
                    200+
                  </p>

                  <p className="mt-2 text-[10px] font-medium uppercase leading-5 tracking-[0.14em] text-slate-500">
                    Opinion
                    <br />
                    Editorials
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate("publications")}
                  className="rounded-full bg-blue-700 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-800"
                >
                  View Research
                  <span className="ml-3" aria-hidden="true">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate("invited-talks")}
                  className="rounded-full border border-blue-700 px-8 py-3 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-50"
                >
                  See Outreach
                  <span className="ml-3" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* =====================================================
                RIGHT: AWARDS CARD
            ===================================================== */}
            <aside className="order-3 lg:flex lg:items-center lg:-mt-65">
              <div className="w-full rounded-xl border border-slate-200 bg-white px-7 py-8 shadow-[0_4px_20px_rgba(15,23,42,0.025)] md:px-8">
                
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-700">
                  Recognition
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                  &amp; Awards
                </h3>

                <div className="mt-8">
                  {/* Award 01 */}
                  <div className="flex items-start justify-between gap-5 border-b border-slate-200 py-5 first:pt-0">
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Teaching Award
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        2024–2025
                      </p>
                    </div>

                    <span className="shrink-0 text-sm font-medium text-blue-700">
                      01
                    </span>
                  </div>

                  {/* Award 02 */}
                  <div className="flex items-start justify-between gap-5 border-b border-slate-200 py-5">
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Best Paper Award
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        INDAM 2024
                      </p>
                    </div>

                    <span className="shrink-0 text-sm font-medium text-blue-700">
                      02
                    </span>
                  </div>

                  {/* Award 03 */}
                  <div className="flex items-start justify-between gap-5 py-5">
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Service Award
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        FLAME University
                      </p>
                    </div>

                    <span className="shrink-0 text-sm font-medium text-blue-700">
                      03
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate("awards")}
                  className="mt-7 text-sm font-medium text-blue-700 transition-colors hover:text-blue-900"
                >
                  View All Awards
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

           {/* =========================================================
          HOME FOOTER
      ========================================================= */}
      <footer id="home-footer" className="bg-slate-950 px-6 pt-12 pb-6 text-white md:px-10 lg:px-16">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_0.8fr]">
      {/* Identity */}
      <div>
        <p className="text-xl font-semibold tracking-tight">
          Dr. Moitrayee Das
        </p>

        <p className="mt-2 text-base text-slate-400">
          Assistant Professor of Psychology
        </p>

        <div className="mt-7 h-px w-12 bg-blue-700" />

        <p className="mt-5 max-w-sm text-base leading-7 text-slate-400">
          Research · Teaching · Outreach
        </p>
      </div>

      {/* Contact details */}
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
          Contact
        </p>

        <div className="mt-6 space-y-4">
          {/* Phone */}
          <a
            href="tel:+917002832281"
            className="group flex items-center gap-4 text-base text-slate-300 transition-colors hover:text-white"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors group-hover:border-blue-700 group-hover:text-blue-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 4.5 8.2 3l2.1 4.8-2 1.3a15.4 15.4 0 0 0 6.6 6.6l1.3-2L21 15.8 19.5 19c-.4.8-1.3 1.2-2.2 1-7.1-1.5-12.8-7.2-14.3-14.3-.2-.9.2-1.8 1-2.2Z"
                />
              </svg>
            </span>

            <span>+91 7002832281</span>
          </a>

          {/* Email */}
          <a
            href="mailto:moitrayee.das@flame.edu.in"
            className="group flex items-center gap-4 text-base text-slate-300 transition-colors hover:text-white"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors group-hover:border-blue-700 group-hover:text-blue-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <rect
                  x="3.5"
                  y="5"
                  width="17"
                  height="14"
                  rx="1.5"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 7 7.5 6 7.5-6"
                />
              </svg>
            </span>

            <span>moitrayee.das@flame.edu.in</span>
          </a>

          {/* Address */}
          <div className="flex items-start gap-4 text-base text-slate-300">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 text-slate-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 10.5c0 5.2-8 10-8 10s-8-4.8-8-10a8 8 0 1 1 16 0Z"
                />

                <circle cx="12" cy="10.5" r="2.5" />
              </svg>
            </span>

            <span className="leading-6">
              Gat No. 1270, FLAME University, 
              <br />
              Lavale, Pune
            </span>
          </div>
        </div>
      </div>

      {/* Links */}
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
          Connect
        </p>

        <div className="mt-6 space-y-3">
          {/* LinkedIn */}
<a
  href="https://www.linkedin.com/in/dr-moitrayee-das-she-her-25ba5b55/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 text-base text-slate-300 transition-colors hover:text-white"
>
  <span className="flex h-10 w-10 items-center justify-center border border-slate-700 transition-colors hover:border-blue-700">
    <BriefcaseBusiness
      size={18}
      strokeWidth={1.8}
      className="text-slate-300 transition-colors hover:text-blue-400"
    />
  </span>

  <span>LinkedIn</span>

  <span className="ml-auto text-slate-600">↗</span>
</a>

{/* FLAME University */}
<a
  href="https://www.flame.edu.in/faculty/moitrayee-das"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 text-base text-slate-300 transition-colors hover:text-white"
>
  <span className="flex h-10 w-10 items-center justify-center border border-slate-700 transition-colors hover:border-blue-700">
    <Landmark
      size={18}
      strokeWidth={1.8}
      className="text-slate-300 transition-colors hover:text-blue-400"
    />
  </span>

  <span>FLAME University</span>

  <span className="ml-auto text-slate-600">↗</span>
</a>

          {/* CV */}
          <a
            href="#"
            className="flex items-center gap-3 text-base text-slate-300 transition-colors hover:text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center border border-slate-700">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 3.5h8l4 4v13H6v-17Z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 3.5v4h4M9 12h6M9 15.5h6"
                />
              </svg>
            </span>

            <span>Curriculum Vitae</span>

            <span className="ml-auto text-slate-600">↗</span>
          </a>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-6 pt-4 text-xs text-slate-600">
      <p>© {new Date().getFullYear()} Dr. Moitrayee Das</p>
    </div>
  </div>
</footer>
    </div>
  );
}