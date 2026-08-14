import { ArrowRight, Mail } from "lucide-react";
import { pageMasthead, pageMastheadImage } from "../components/pageStyles";

export function ConsultingPage() {
  return (
    <article>
      <header className={pageMasthead}>
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] text-slate-950">
            Board Game Development & Player Experience Consultant
          </p>
          <h1 className="mt-5 font-['Shrikhand'] text-5xl leading-[.9] text-purple-800 md:text-7xl md:leading-[.85]">
            See what happens when real players open your rulebook.
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate-700">
            My players and I learn and play your game from the supplied
            rulebook, without help from the designer. You receive a recording
            showing where we hesitate, disagree, search for answers, or get
            something wrong.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-950 bg-pink-500 px-6 py-3 text-sm font-black text-slate-950 shadow-[5px_5px_0_#020617]"
              onClick={() =>
                (window.location.href = [
                  "mai",
                  "lto:",
                  "hi",
                  "@",
                  "boardgaymesjames.com",
                  "?subject=Board%20game%20consulting%20inquiry",
                ].join(""))
              }
            >
              <Mail className="size-4" /> Discuss your game
            </button>
            <a
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-950 bg-white px-6 py-3 text-sm font-black"
              href="#services"
            >
              See services <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
        <img
          className={pageMastheadImage}
          src="/assets/bo-detective.png"
          alt="Bo dressed as a detective"
        />
      </header>

      <section
        id="services"
        className="scroll-mt-8 bg-slate-950 px-5 py-20 text-white md:px-10 md:py-28 lg:px-16"
      >
        <p className="text-xs font-black uppercase tracking-[.18em] text-yellow-300">
          Professional services
        </p>
        <h2 className="mt-3 font-['Shrikhand'] text-4xl leading-none md:text-8xl">
          Improve the product before it reaches players.
        </h2>

        <div className="mt-16 divide-y divide-white/20 border-y border-white/20">
          <article className="grid gap-7 py-12 lg:grid-cols-[70px_1fr_1fr_240px]">
            <span className="text-2xl font-black text-teal-300">01</span>
            <div>
              <h3 className="text-3xl font-black">
                Recorded Blind Rulebook Playtest
              </h3>
              <p className="mt-4 max-w-xl leading-relaxed text-white/65">
                Watch how the game performs when the designer is not there to
                explain it.
              </p>
            </div>
            <p className="leading-relaxed text-white/80">
              My players and I learn from the supplied rules, play on camera,
              and send you the recording. You see the questions, edge cases,
              setup problems, teaching friction, and player reactions as they
              happen.
            </p>
            <div className="h-fit rounded-2xl bg-white/10 p-5">
              <span className="block text-xs uppercase tracking-widest text-white/70">
                Project range
              </span>
              <strong className="mt-2 block text-xl"></strong>
            </div>
          </article>

          <article className="grid gap-7 py-12 lg:grid-cols-[70px_1fr_1fr_240px]">
            <span className="text-2xl font-black text-teal-300">02</span>
            <div>
              <h3 className="text-3xl font-black">
                Rulebook Review & Development
              </h3>
              <p className="mt-4 max-w-xl leading-relaxed text-white/65">
                One complete review of clarity, accessibility, usability, and
                the player experience.
              </p>
            </div>
            <p className="leading-relaxed text-white/80">
              Supply the rules as a Google Doc or PDF, depending on their stage.
              I review and annotate them without guidance from the designer or
              publisher, then work through revisions with you until the rules
              communicate the game clearly.
            </p>
            <div className="h-fit rounded-2xl bg-white/10 p-5">
              <span className="block text-xs uppercase tracking-widest text-white/70">
                Project range
              </span>
              <strong className="mt-2 block text-xl"></strong>
            </div>
          </article>

          <article className="grid gap-7 py-12 lg:grid-cols-[70px_1fr_1fr_240px]">
            <span className="text-2xl font-black text-teal-300">03</span>
            <div>
              <h3 className="text-3xl font-black">Player Aid Development</h3>
              <p className="mt-4 max-w-xl leading-relaxed text-white/65">
                Give players the information they need at the table without
                sending them back through the rulebook.
              </p>
            </div>
            <p className="leading-relaxed text-white/80">
              I turn rules, turn structure, iconography, scoring, and common
              edge cases into clear reference material shaped around how the
              game is actually played.
            </p>
            <div className="h-fit rounded-2xl bg-white/10 p-5">
              <span className="block text-xs uppercase tracking-widest text-white/70">
                Project rate
              </span>
              <strong className="mt-2 block text-xl">Quoted by scope</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-amber-50 px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-purple-800">
              Selected work
            </p>
            <h2 className="mt-3 font-['Shrikhand'] text-4xl leading-none text-purple-800 md:text-8xl">
              Player aids built for the table.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700">
              My BoardGameGeek contributions show how I condense complex games
              into practical references players can use during play.
            </p>
          </div>

          <div className="self-center rounded-[2rem] border-2 border-slate-950 bg-white p-7 shadow-[8px_8px_0_#020617] md:p-10">
            <p className="text-xs font-black uppercase tracking-[.18em] text-pink-600">
              Most popular BGG file
            </p>
            <h3 className="mt-3 text-3xl font-black text-slate-950">
              Orloj: The Prague Astronomical Clock
            </h3>
            <p className="mt-4 leading-relaxed text-slate-700">
              My most popular player aid on BoardGameGeek, with strong comments
              from players who have used it at the table.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-950 bg-yellow-300 px-5 py-3 text-sm font-black text-slate-950"
                href="https://boardgamegeek.com/boardgame/429405/orloj-the-prague-astronomical-clock/files"
                target="_blank"
                rel="noreferrer"
              >
                View Orloj files on BGG <ArrowRight className="size-4" />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-950 bg-white px-5 py-3 text-sm font-black text-slate-950"
                href="https://boardgamegeek.com/files/boardgame/all?username=BoardGaymesJames"
                target="_blank"
                rel="noreferrer"
              >
                Browse all my BGG files <ArrowRight className="size-4" />
              </a>
              <a
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-black text-purple-800 underline decoration-2 underline-offset-4"
                href="https://boardgamegeek.com/geeklist/375180/credits"
                target="_blank"
                rel="noreferrer"
              >
                See more credits <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-800 px-5 py-20 text-white md:px-10 md:py-28 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em] text-yellow-300">
          Have a game in development?
        </p>
        <h2 className="my-6 max-w-5xl font-['Shrikhand'] text-4xl leading-none md:text-8xl">
          Let me show you where players get stuck.
        </h2>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950"
          onClick={() =>
            (window.location.href = [
              "mai",
              "lto:",
              "hi",
              "@",
              "boardgaymesjames.com",
              "?subject=Board%20game%20consulting%20inquiry",
            ].join(""))
          }
        >
          Start a conversation <ArrowRight className="size-4" />
        </button>
      </section>
    </article>
  );
}
