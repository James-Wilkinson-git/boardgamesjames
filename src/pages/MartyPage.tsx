import { Link } from "react-router-dom";

const row =
  "grid gap-4 border-t border-white/20 py-9 md:grid-cols-[70px_1fr_120px] md:items-center";
const copy = "mt-4 max-w-3xl leading-relaxed text-white/65";

export function MartyPage() {
  return (
    <article>
      <header className="mx-auto grid min-h-[620px] max-w-screen-2xl items-center gap-12 px-5 py-10 md:px-10 lg:grid-cols-[1.2fr_.8fr] lg:px-16">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] text-purple-800">
            My board game rating system
          </p>
          <h1 className="mt-5 font-['Shrikhand'] text-7xl leading-[.85] text-purple-800">
            The <span className="text-pink-500">M.A.R.T.Y.</span> scale!
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate-700">
            A five-category weighted system for evaluating games as fairly as
            possible—and keeping one exciting play from doing all the talking.
          </p>
          <a
            className="mt-8 inline-flex rounded-full border-2 border-slate-950 bg-pink-500 px-6 py-3 text-sm font-black text-white shadow-[5px_5px_0_#020617] transition-transform hover:-translate-y-1"
            href="https://docs.google.com/spreadsheets/d/1-A44kuDjBlm82tE3a1LkeVIBXdMlxqM0rxa6pUdKCXY/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            See all games rated so far
          </a>
        </div>
        <img
          className="mx-auto max-h-[500px] w-full object-contain"
          src="/assets/bo-cowboy.png"
          alt="Bo dressed as a cowboy"
        />
      </header>
      <section className="mx-auto max-w-4xl space-y-5 px-5 py-10 text-xl leading-relaxed">
        <p>
          A single number can hide a lot. A game might be mechanically brilliant
          but difficult to teach. It might look incredible but feel the same
          every time. M.A.R.T.Y. makes those differences visible before
          combining them.
        </p>
        <p>
          The system scores five distinct parts of the experience from 1 to 10.
          Each category then contributes according to its weight, producing a
          final rating that reflects what matters most in my reviews.
        </p>
      </section>
      <section className="bg-slate-950 px-5 py-20 text-white md:px-10 md:py-28 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em]">
          The five categories
        </p>
        <h2 className="mt-3 font-['Shrikhand'] text-6xl md:text-8xl">
          What goes into the number.
        </h2>
        <div className="mt-14">
          <article className={row}>
            <span className="text-2xl font-black text-teal-300">01</span>
            <div>
              <p className="text-xs font-black uppercase tracking-widest">
                Does it tickle the brain?
              </p>
              <h3 className="mt-2 text-4xl font-black">Mechanics</h3>
              <p className={copy}>
                How seamlessly the systems fit together, how engaging the
                decisions feel, and whether the game creates meaningful variety
                and challenge.
              </p>
            </div>
            <strong className="text-5xl font-black text-yellow-300 md:text-right">
              50%
            </strong>
          </article>
          <article className={row}>
            <span className="text-2xl font-black text-teal-300">02</span>
            <div>
              <p className="text-xs font-black uppercase tracking-widest">
                Is it easy to teach and play?
              </p>
              <h3 className="mt-2 text-4xl font-black">Approachability</h3>
              <p className={copy}>
                How clearly the rules communicate the game and how much work is
                required before players can play with confidence.
              </p>
            </div>
            <strong className="text-5xl font-black text-yellow-300 md:text-right">
              10%
            </strong>
          </article>
          <article className={row}>
            <span className="text-2xl font-black text-teal-300">03</span>
            <div>
              <p className="text-xs font-black uppercase tracking-widest">
                How much replay value is there?
              </p>
              <h3 className="mt-2 text-4xl font-black">Replayability</h3>
              <p className={copy}>
                How much a game changes between plays and how long its decisions
                remain fresh instead of predictable.
              </p>
            </div>
            <strong className="text-5xl font-black text-yellow-300 md:text-right">
              5%
            </strong>
          </article>
          <article className={row}>
            <span className="text-2xl font-black text-teal-300">04</span>
            <div>
              <p className="text-xs font-black uppercase tracking-widest">
                Does it make sense?
              </p>
              <h3 className="mt-2 text-4xl font-black">Theme & Art</h3>
              <p className={copy}>
                How strongly the theme, presentation, and systems reinforce one
                another and draw players into the experience.
              </p>
            </div>
            <strong className="text-5xl font-black text-yellow-300 md:text-right">
              30%
            </strong>
          </article>
          <article className={row}>
            <span className="text-2xl font-black text-teal-300">05</span>
            <div>
              <p className="text-xs font-black uppercase tracking-widest">
                How much do you want to play again?
              </p>
              <h3 className="mt-2 text-4xl font-black">Yearning</h3>
              <p className={copy}>
                The emotional pull to return to a game, intentionally kept light
                so excitement and recency do not dominate the rating.
              </p>
            </div>
            <strong className="text-5xl font-black text-yellow-300 md:text-right">
              5%
            </strong>
          </article>
        </div>
      </section>
      <section className="grid gap-10 bg-yellow-300 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2 lg:px-16">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em]">
            Why weighted?
          </p>
          <h2 className="mt-3 font-['Shrikhand'] text-6xl leading-none md:text-8xl">
            Less hype. More signal.
          </h2>
        </div>
        <div className="space-y-6 self-end text-lg leading-relaxed">
          <p>
            I play a lot of new games, so Replayability matters without needing
            to dominate the final score. Yearning is also deliberately light:
            the desire to replay something can fade with time, and lowering its
            weight helps reduce recency bias.
          </p>
          <p>
            M.A.R.T.Y. does not pretend subjectivity disappears. It simply makes
            my priorities visible and keeps every rating grounded in the same
            questions.
          </p>
        </div>
      </section>
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em]">
          The original guide
        </p>
        <div className="mt-7 flex snap-x gap-5 overflow-x-auto pb-5">
          <img
            className="h-[520px] max-w-none rounded-2xl border-2 border-slate-950"
            src="/assets/marty-slides/slide2.jpg"
            alt="M.A.R.T.Y. introduction"
          />
          <img
            className="h-[520px] max-w-none rounded-2xl border-2 border-slate-950"
            src="/assets/marty-slides/slide3.jpg"
            alt="Mechanics rating"
          />
          <img
            className="h-[520px] max-w-none rounded-2xl border-2 border-slate-950"
            src="/assets/marty-slides/slide4.jpg"
            alt="Approachability rating"
          />
          <img
            className="h-[520px] max-w-none rounded-2xl border-2 border-slate-950"
            src="/assets/marty-slides/slide5.jpg"
            alt="Replayability rating"
          />
          <img
            className="h-[520px] max-w-none rounded-2xl border-2 border-slate-950"
            src="/assets/marty-slides/slide6.jpg"
            alt="Theme and art rating"
          />
          <img
            className="h-[520px] max-w-none rounded-2xl border-2 border-slate-950"
            src="/assets/marty-slides/slide7.jpg"
            alt="Yearning rating"
          />
        </div>
      </section>
      <section className="bg-pink-500 px-5 py-20 text-white md:px-10 md:py-28 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em]">
          Another way to understand a game
        </p>
        <h2 className="my-6 font-['Shrikhand'] text-6xl leading-none md:text-8xl">
          Now meet the Brain Geek Guide.
        </h2>
        <Link
          className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950"
          to="/brain-geek-guide"
        >
          Read the guide
        </Link>
      </section>
    </article>
  );
}
