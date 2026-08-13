import { Link } from "react-router-dom";

const card =
  "flex min-h-72 flex-col rounded-3xl border border-white/20 bg-white/10 p-7";

export function BrainGeekPage() {
  return (
    <article>
      <header className="mx-auto grid min-h-[560px] max-w-screen-2xl items-center gap-10 px-5 py-12 md:px-10 lg:grid-cols-[1.2fr_.8fr] lg:px-16">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] text-purple-800">
            A neurodivergent perspective on play
          </p>
          <h1 className="mt-5 font-['Shrikhand'] text-7xl leading-[.85] text-purple-800">
            Know what a game asks of your brain.
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate-700">
            A shared language for what a game asks of your attention, memory,
            social energy, agency, and emotions.
          </p>
          <a
            className="mt-8 inline-flex rounded-full border-2 border-slate-950 bg-pink-500 px-6 py-3 text-sm font-black text-white shadow-[5px_5px_0_#020617] transition-transform hover:-translate-y-1"
            href="https://docs.google.com/spreadsheets/d/1-A44kuDjBlm82tE3a1LkeVIBXdMlxqM0rxa6pUdKCXY/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            See all games assessed so far
          </a>
        </div>
        <img
          className="mx-auto max-h-[360px] w-full object-contain"
          src="/assets/brain-geek-guide.png"
          alt="Brain Geek Guide rainbow brain logo"
        />
      </header>
      <section className="mx-auto max-w-4xl space-y-6 px-5 py-14 text-xl leading-relaxed md:px-10 md:py-20 md:text-2xl">
        <p>
          “How heavy is it?” is not always enough. Two games with similar
          complexity ratings can feel completely different depending on what
          your brain needs to track and how the people at the table interact.
        </p>
        <p>
          The Brain Geek Guide describes those demands without declaring a game
          universally safe, accessible, good, or bad. The goal is to give people
          better information so they can decide what works for them.
        </p>
      </section>
      <section className="bg-slate-950 px-5 py-16 text-white md:px-10 md:py-20 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em]">
          Five dimensions
        </p>
        <h2 className="mt-3 font-['Shrikhand'] text-6xl md:text-8xl">
          Know what the table is asking.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
          Each dimension uses plain-language descriptions rather than a score.
          None of the endpoints is automatically better; they describe different
          kinds of demand.
        </p>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article className={card}>
            <span className="text-2xl font-black text-teal-300">01</span>
            <h3 className="mt-8 text-3xl font-black">Table Read</h3>
            <p className="mt-4 leading-relaxed text-white/65">
              How easy is the game state to understand from what is in front of
              you.
            </p>
            <strong className="mt-auto pt-8 text-sm leading-relaxed text-yellow-300">
              Clear · Readable · Mixed · Busy · Overwhelming
            </strong>
          </article>
          <article className={card}>
            <span className="text-2xl font-black text-teal-300">02</span>
            <h3 className="mt-8 text-3xl font-black">Brain Load</h3>
            <p className="mt-4 leading-relaxed text-white/65">
              How much information does the game ask you to hold, update, and
              re-check or process in your head.
            </p>
            <strong className="mt-auto pt-8 text-sm leading-relaxed text-yellow-300">
              Minimal/None · Light · Moderate · Thinky · Heavy
            </strong>
          </article>
          <article className={card}>
            <span className="text-2xl font-black text-teal-300">03</span>
            <h3 className="mt-8 text-3xl font-black">Social Processing</h3>
            <p className="mt-4 leading-relaxed text-white/65">
              How much interaction with other players is required beyond simply
              following the rules.
            </p>
            <strong className="mt-auto pt-8 text-sm leading-relaxed text-yellow-300">
              Not Required · Conversational · Interpretive/Bluffing ·
              Persuasive/Negotiation · Performative/Lying
            </strong>
          </article>
          <article className={card}>
            <span className="text-2xl font-black text-teal-300">04</span>
            <h3 className="mt-8 text-3xl font-black">Control</h3>
            <p className="mt-4 leading-relaxed text-white/65">
              How stable your sense of agency feels during play.
            </p>
            <strong className="mt-auto pt-8 text-sm leading-relaxed text-yellow-300">
              Full control · Mostly steady · Mixed/Swingy · Disrupted/Reactive ·
              Always On/Chaotic
            </strong>
          </article>
          <article className={card}>
            <span className="text-2xl font-black text-teal-300">05</span>
            <h3 className="mt-8 text-3xl font-black">Emotional Impact</h3>
            <p className="mt-4 leading-relaxed text-white/65">
              What kind of conflict is there in the game that could affect you
              emotionally.
            </p>
            <strong className="mt-auto pt-8 text-sm leading-relaxed text-yellow-300">
              Conflict-free · Low impact · Competitive · Destructive ·
              Elimination
            </strong>
          </article>
        </div>
      </section>
      <section className="grid gap-10 bg-yellow-300 px-5 py-16 md:px-10 md:py-20 lg:grid-cols-2 lg:px-16">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em]">
            Information, not opinion
          </p>
          <h2 className="mt-3 font-['Shrikhand'] text-6xl leading-none md:text-8xl">
            Your needs are the point.
          </h2>
        </div>
        <div className="space-y-6 self-end text-lg leading-relaxed">
          <p>
            Someone may enjoy a brain-burning game with minimal social
            processing. Someone else may want lively negotiation but need a
            clear table read and stable sense of control. The guide makes room
            for both.
          </p>
          <p>
            It's an assessment of the play experience from a neurodivergent
            perspective—not medical advice, a certification, or a value
            judgment.
          </p>
        </div>
      </section>
      <section className="px-5 py-16 md:px-10 md:py-20 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em]">
          The original guide
        </p>
        <div className="mt-7 flex snap-x gap-5 overflow-x-auto pb-5">
          <img
            className="h-[390px] max-w-none rounded-2xl border-2 border-slate-950"
            src="/assets/brain-slides/slide1.jpg"
            alt="Brain Geek Guide introduction"
          />
          <img
            className="h-[390px] max-w-none rounded-2xl border-2 border-slate-950"
            src="/assets/brain-slides/slide2.jpg"
            alt="Table Read"
          />
          <img
            className="h-[390px] max-w-none rounded-2xl border-2 border-slate-950"
            src="/assets/brain-slides/slide3.jpg"
            alt="Brain Load"
          />
          <img
            className="h-[390px] max-w-none rounded-2xl border-2 border-slate-950"
            src="/assets/brain-slides/slide4.jpg"
            alt="Social Processing"
          />
          <img
            className="h-[390px] max-w-none rounded-2xl border-2 border-slate-950"
            src="/assets/brain-slides/slide5.jpg"
            alt="Control"
          />
          <img
            className="h-[390px] max-w-none rounded-2xl border-2 border-slate-950"
            src="/assets/brain-slides/slide6.jpg"
            alt="Emotional Impact"
          />
          <img
            className="h-[390px] max-w-none rounded-2xl border-2 border-slate-950"
            src="/assets/brain-slides/slide7.jpg"
            alt="Choosing games"
          />
        </div>
      </section>
      <section className="bg-pink-500 px-5 py-16 text-white md:px-10 md:py-20 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em]">
          How I score the whole experience
        </p>
        <h2 className="my-6 font-['Shrikhand'] text-6xl leading-none md:text-8xl">
          Meet M.A.R.T.Y.
        </h2>
        <Link
          className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950"
          to="/marty"
        >
          See my rating system
        </Link>
      </section>
    </article>
  );
}
