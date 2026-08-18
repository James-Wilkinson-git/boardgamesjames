import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Tagline } from "../components/Tagline";
import { mediaMetrics, platforms } from "../data/brand";
import { trackEvent } from "../lib/analytics";

const button =
  "inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-black transition-transform hover:-translate-y-1";

export function HomePage() {
  return (
    <>
      <section className="bg-purple-800 text-white">
        <div className="content-shell py-10 md:py-14 lg:py-16">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[.18em] text-yellow-300">
              Board game media & consulting
            </p>
            <h1 className="sr-only">Board Gaymes James</h1>
            <img
              className="mt-4 h-auto w-64 sm:w-72 md:w-80 lg:w-96"
              src="/assets/bgj-cream.svg"
              alt="Board Gaymes James"
            />
            <Tagline compact className="mt-4 text-yellow-300" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Board game creator and consultant bringing real play, independent
              analysis, and accessibility expertise to the tabletop industry.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                className={`${button} border-white bg-yellow-300 text-slate-950 shadow-[5px_5px_0_#fffaf0]`}
                to="/media"
                onClick={() => trackEvent("media_kit_visit", "homepage_hero")}
              >
                Media Kit <ArrowRight className="size-4" />
              </Link>
              <Link
                className={`${button} border-white text-white`}
                to="/consulting"
                onClick={() => trackEvent("consulting_visit", "homepage_hero")}
              >
                Consulting <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-300 py-10">
        <div className="content-shell grid gap-8 sm:grid-cols-3">
          <div>
            <strong className="font-display text-5xl">
              {mediaMetrics.youtube.impressions}
            </strong>
            <p className="mt-1 text-sm font-bold">
              YouTube impressions · latest 28 days
            </p>
          </div>
          <div>
            <strong className="font-display text-5xl">
              {mediaMetrics.instagram.views}
            </strong>
            <p className="mt-1 text-sm font-bold">
              Instagram views · latest insights
            </p>
          </div>
          <div>
            <strong className="font-display text-5xl">
              {mediaMetrics.boardGameGeek.thumbs}
            </strong>
            <p className="mt-1 text-sm font-bold">BoardGameGeek thumbs</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="content-shell">
          <p className="text-xs font-black uppercase tracking-[.18em]">
            Two professional paths
          </p>
          <h2 className="mt-3 max-w-5xl text-5xl leading-none text-purple-800 md:text-7xl">
            Media that shows the table. Consulting that improves it.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="flex flex-col bg-teal-300 p-7 md:p-10">
              <p className="text-xs font-black uppercase tracking-[.18em]">
                Media & creator work
              </p>
              <h3 className="mt-3 text-4xl font-bold">
                Real games, played and examined.
              </h3>
              <p className="mt-5 max-w-xl leading-relaxed">
                Live teach-and-play streams, independent written reviews, visual
                Instagram coverage, and convention reporting for players
                actively researching games.
              </p>
              <Link
                className={`${button} mt-8 w-fit border-slate-950 bg-white`}
                to="/media"
              >
                Explore the Media Kit <ArrowRight className="size-4" />
              </Link>
            </article>
            <article className="flex flex-col bg-pink-500 p-7 md:p-10">
              <p className="text-xs font-black uppercase tracking-[.18em]">
                Consulting
              </p>
              <h3 className="mt-3 text-4xl font-bold">
                Find the friction before players do.
              </h3>
              <p className="mt-5 max-w-xl leading-relaxed">
                Blind rulebook playtests, rulebook review and development, and
                player aids shaped around clarity, accessibility, usability, and
                player experience.
              </p>
              <Link
                className={`${button} mt-8 w-fit border-slate-950 bg-white`}
                to="/consulting"
              >
                View consulting services <ArrowRight className="size-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="content-shell">
          <p className="text-xs font-black uppercase tracking-[.18em] text-yellow-300">
            Find the work
          </p>
          <h2 className="mt-3 text-5xl leading-none md:text-7xl">
            Choose the platform for the experience.
          </h2>
          <div className="mt-10 grid gap-px border border-white/20 bg-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(platforms).map(([key, platform]) => (
              <a
                key={platform.name}
                className="group bg-slate-950 p-6 transition-colors hover:bg-purple-800"
                href={platform.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("platform_outbound", key)}
              >
                <span className="flex items-center justify-between text-sm font-bold text-white/60">
                  {platform.name} <ExternalLink className="size-4" />
                </span>
                <strong className="mt-8 block font-editorial text-2xl">
                  {platform.action}
                </strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pink-500 py-14">
        <div className="content-shell grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em]">
              The analytical difference
            </p>
            <h2 className="mt-3 text-5xl leading-none md:text-7xl">
              Beyond a single score.
            </h2>
          </div>
          <div className="max-w-xl self-end leading-relaxed">
            <p>
              M.A.R.T.Y. makes review priorities transparent. The Brain Geek
              Guide looks beyond complexity scores to the mental demands
              involved in learning, processing, and playing.
            </p>
            <div className="mt-6 flex flex-wrap gap-5 font-bold">
              <Link to="/marty">Explore M.A.R.T.Y. →</Link>
              <Link to="/brain-geek-guide">Explore Brain Geek →</Link>
              <Link to="/about">About James →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
