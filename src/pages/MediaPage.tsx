import { ArrowRight, Mail } from "lucide-react";
import { pageMasthead } from "../components/pageStyles";
import { Tagline } from "../components/Tagline";
import { mediaMetrics } from "../data/brand";
import { trackEvent } from "../lib/analytics";

export function MediaPage() {
  return (
    <article>
      <header className={pageMasthead}>
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] text-slate-950">
            Media kit · {mediaMetrics.period}
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[.9] text-purple-800 md:text-7xl md:leading-[.85]">
            Real games. Independent opinions. Useful analysis.
          </h1>
          <Tagline className="mt-5 text-pink-500" />
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate-700">
            Board Gaymes James brings a queer, autistic, Euro-gamer perspective
            to reviews, live playthroughs, convention coverage, and practical
            guides for an engaged tabletop audience. Live streams are also
            embedded on BoardGameGeek during prime viewing times.
          </p>
          <button
            type="button"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-slate-950 bg-pink-500 px-6 py-3 text-sm font-black text-slate-950 shadow-[5px_5px_0_#020617]"
            onClick={() => {
              trackEvent("contact_click", "media_hero");
              window.location.href = [
                "mai",
                "lto:",
                "hi",
                "@",
                "boardgaymesjames.com",
                "?subject=Media%20partnership%20inquiry",
              ].join("");
            }}
          >
            <Mail className="size-4" /> Discuss a partnership
          </button>
        </div>
      </header>

      <section className="grid gap-px bg-slate-950 px-5 py-16 text-white md:grid-cols-3 md:px-10 md:py-20 lg:px-16">
        <article className="border-white/20 py-6 md:border-r md:pr-8">
          <p className="font-display text-5xl text-yellow-300">Real.</p>
          <p className="mt-4 leading-relaxed text-white/70">
            Live teaching and play show how a game actually behaves at the
            table—not a rehearsed perfect-play performance.
          </p>
        </article>
        <article className="border-t border-white/20 py-6 md:border-l-0 md:border-r md:border-t-0 md:px-8">
          <p className="font-display text-5xl text-yellow-300">Honest.</p>
          <p className="mt-4 leading-relaxed text-white/70">
            Editorial coverage reflects James's real opinion. A review copy
            never guarantees positive coverage.
          </p>
        </article>
        <article className="border-t border-white/20 py-6 md:border-t-0 md:pl-8">
          <p className="font-display text-5xl text-yellow-300">Analytical.</p>
          <p className="mt-4 leading-relaxed text-white/70">
            Coverage examines mechanisms, learning, cognitive load,
            accessibility, friction, and player experience beyond a single
            score.
          </p>
        </article>
      </section>

      <section className="bg-purple-800 px-5 py-16 text-white md:px-10 md:py-20 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em] text-yellow-300">
          Current reach
        </p>
        <h2 className="mt-3 max-w-5xl font-display text-4xl leading-none md:text-8xl">
          The numbers publishers need first.
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-yellow-300 p-8 text-slate-950 md:p-10">
            <p className="text-xs font-black uppercase tracking-[.18em]">
              YouTube video impressions
            </p>
            <strong className="mt-5 block font-display text-8xl leading-none md:text-9xl">
              {mediaMetrics.youtube.impressions}
            </strong>
            <p className="mt-5 font-bold">
              Latest 28 days · {mediaMetrics.youtube.impressionsGrowth} growth
            </p>
          </article>
          <div className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-[2rem] bg-pink-500 p-7 text-slate-950">
              <p className="text-xs font-black uppercase tracking-[.18em]">
                Instagram views
              </p>
              <strong className="mt-5 block font-display text-6xl leading-none md:text-7xl">
                {mediaMetrics.instagram.views}
              </strong>
              <p className="mt-4 text-sm font-bold">Latest account insights</p>
            </article>
            <article className="rounded-[2rem] bg-orange-400 p-7 text-slate-950">
              <p className="text-xs font-black uppercase tracking-[.18em]">
                YouTube views
              </p>
              <strong className="mt-5 block font-display text-6xl leading-none md:text-7xl">
                {mediaMetrics.youtube.views}
              </strong>
              <p className="mt-4 text-sm font-bold">Latest 28 days</p>
            </article>
          </div>
        </div>
      </section>

      <section className="grid gap-8 bg-yellow-300 px-5 py-12 md:px-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em]">
          A direct line to board gamers
        </p>
        <div>
          <h2 className="font-display text-4xl leading-none md:text-7xl">
            Live on Twitch. Embedded on BoardGameGeek.
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed">
            My scheduled streams are embedded on BoardGameGeek during prime
            viewing times. That puts each featured game in front of viewers on
            my live channel and inside the world’s largest dedicated board-game
            community while they are actively discovering and researching games.
          </p>
        </div>
      </section>

      <section className="bg-violet-300 px-5 py-12 text-slate-950 md:px-10 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em] ">
          Established credibility
        </p>
        <div className="mt-7 grid gap-8 sm:grid-cols-3">
          <div>
            <strong className="font-display text-6xl leading-none">
              {mediaMetrics.boardGameGeek.thumbs}
            </strong>
            <p className="mt-2 font-black">BoardGameGeek thumbs</p>
          </div>
          <div>
            <strong className="font-display text-6xl leading-none">
              {mediaMetrics.boardGameGeek.geekGold}
            </strong>
            <p className="mt-2 font-black">GeekGold collected</p>
          </div>
          <div>
            <strong className="font-display text-6xl leading-none">4</strong>
            <p className="mt-2 font-black">Distinct platform roles</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-20 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em]">
          Content formats
        </p>
        <h2 className="mt-3 max-w-5xl text-5xl leading-none text-purple-800 md:text-7xl">
          The right format for each kind of coverage.
        </h2>
        <div className="mt-10 grid gap-px border-2 border-slate-950 bg-slate-950 sm:grid-cols-2">
          <article className="bg-amber-50 p-7">
            <h3 className="text-3xl font-black">Live teach & play</h3>
            <p className="mt-4 leading-relaxed">
              James teaches a modern board game and then plays it live on Twitch
              and YouTube, keeping the real learning and table experience
              visible.
            </p>
          </article>
          <article className="bg-amber-50 p-7">
            <h3 className="text-3xl font-black">Editorial reviews</h3>
            <p className="mt-4 leading-relaxed">
              Detailed, independent written reviews published primarily on
              BoardGameGeek.
            </p>
          </article>
          <article className="bg-amber-50 p-7">
            <h3 className="text-3xl font-black">Instagram review coverage</h3>
            <p className="mt-4 leading-relaxed">
              Condensed visual coverage derived from full reviews, including
              Quick Rating, M.A.R.T.Y., and Brain Geek Guide elements where
              relevant.
            </p>
          </article>
          <article className="bg-amber-50 p-7">
            <h3 className="text-3xl font-black">
              Convention & industry coverage
            </h3>
            <p className="mt-4 leading-relaxed">
              Event reporting, interviews, previews, and pre-release or
              crowdfunding coverage when the project is a fit.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10 md:py-20 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em] ">
          Why work with James
        </p>
        <h2 className="mt-3 max-w-5xl font-display text-4xl leading-none text-purple-800 md:text-7xl">
          Coverage that helps players choose their next game.
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <article className="rounded-[2rem] bg-teal-300 p-7">
            <p className="text-xs font-black uppercase tracking-[.18em]">
              More than a rules recap
            </p>
            <h3 className="mt-3 text-3xl font-black">The play experience</h3>
            <p className="mt-4 leading-relaxed">
              Reviews show what a game feels like to learn, teach, and play.
            </p>
          </article>
          <article className="rounded-[2rem] bg-violet-300 p-7">
            <p className="text-xs font-black uppercase tracking-[.18em]">
              Two clear frameworks
            </p>
            <h3 className="mt-3 text-3xl font-black">
              M.A.R.T.Y. + Brain Geek
            </h3>
            <p className="mt-4 leading-relaxed">
              Transparent ratings meet an autistic lens on cognitive load,
              accessibility, and table experience.
            </p>
          </article>
          <article className="rounded-[2rem] bg-orange-400 p-7">
            <p className="text-xs font-black uppercase tracking-[.18em]">
              Where players discover
            </p>
            <h3 className="mt-3 text-3xl font-black">Multi-platform reach</h3>
            <p className="mt-4 leading-relaxed">
              Video, live, social, and BGG coverage meet players while they are
              researching games.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white md:px-10 md:py-20 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em] text-yellow-300">
          Industry feedback
        </p>
        <h2 className="mt-3 max-w-4xl font-display text-4xl leading-none md:text-7xl">
          What others say.
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <figure className="flex flex-col rounded-[2rem] border-2 border-slate-950 bg-white p-7 text-slate-950">
            <blockquote className="text-lg font-bold leading-relaxed">
              “James goes out of his way to look for our games and cover them. I
              appreciate his continual willingness to be a part of what Capstone
              does in media coverage.”
            </blockquote>
            <figcaption className="mt-8 border-t border-slate-200 pt-5 text-sm font-black uppercase tracking-wider text-purple-800">
              Capstone Games
            </figcaption>
          </figure>
          <figure className="flex flex-col rounded-[2rem] border-2 border-slate-950 bg-white p-7 text-slate-950">
            <blockquote className="text-lg font-bold leading-relaxed">
              “James presents each game in a way that helps viewers decide
              whether it’s a good fit for their gaming preferences.”
            </blockquote>
            <figcaption className="mt-auto border-t border-slate-950/15 pt-5 text-sm font-black uppercase tracking-wider text-purple-800">
              InsideUp Games
            </figcaption>
          </figure>
          <figure className="flex flex-col rounded-[2rem] border-2 border-slate-950 bg-white p-7 text-slate-950">
            <blockquote className="text-lg font-bold leading-relaxed">
              “Amazing channel. James is a phenomenal person and does so much
              for the community.”
            </blockquote>
            <figcaption className="mt-auto border-t border-slate-200 pt-5 text-sm font-black uppercase tracking-wider text-purple-800">
              Richard “Rahdo” Ham
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-20 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em] ">
          By platform
        </p>
        <h2 className="mt-3 font-display text-4xl leading-none text-purple-800 md:text-8xl">
          The detail behind the reach.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border-2 border-slate-950 bg-white p-7">
            <a
              className="inline-flex items-center gap-2 text-3xl font-black hover:text-pink-600"
              href="https://www.youtube.com/@BoardGaymesJames"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("platform_outbound", "media_youtube")}
            >
              YouTube <ArrowRight className="size-5" />
            </a>
            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-7">
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.youtube.views}
                </strong>
                <p className="text-sm text-slate-500">Views</p>
              </div>
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.youtube.watchHours}
                </strong>
                <p className="text-sm text-slate-500">Watch hours</p>
              </div>
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.youtube.ctr}
                </strong>
                <p className="text-sm text-slate-500">Impression CTR</p>
              </div>
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.youtube.averageViewDuration}
                </strong>
                <p className="text-sm text-slate-500">Average view duration</p>
              </div>
            </div>
            <p className="mt-7 border-t border-slate-200 pt-5 font-black">
              {mediaMetrics.youtube.subscribers} subscribers
            </p>
          </article>

          <article className="rounded-[2rem] border-2 border-slate-950 bg-white p-7">
            <a
              className="inline-flex items-center gap-2 text-3xl font-black hover:text-pink-600"
              href="https://www.instagram.com/boardgaymesjames/"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("platform_outbound", "media_instagram")}
            >
              Instagram <ArrowRight className="size-5" />
            </a>
            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-7">
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.instagram.views}
                </strong>
                <p className="text-sm text-slate-500">Views</p>
              </div>
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.instagram.viewers}
                </strong>
                <p className="text-sm text-slate-500">Viewers</p>
              </div>
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.instagram.interactions}
                </strong>
                <p className="text-sm text-slate-500">Interactions</p>
              </div>
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.instagram.nonFollowerViews}
                </strong>
                <p className="text-sm text-slate-500">Non-follower views</p>
              </div>
            </div>
            <p className="mt-7 border-t border-slate-200 pt-5 font-black">
              {mediaMetrics.instagram.followers} followers
            </p>
          </article>

          <article className="rounded-[2rem] border-2 border-slate-950 bg-white p-7">
            <a
              className="inline-flex items-center gap-2 text-3xl font-black hover:text-pink-600"
              href="https://boardgamegeek.com/user/BoardGaymesJames"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("platform_outbound", "media_bgg")}
            >
              BoardGameGeek <ArrowRight className="size-5" />
            </a>
            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-7">
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.boardGameGeek.thumbs}
                </strong>
                <p className="text-sm text-slate-500">Total thumbs</p>
              </div>
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.boardGameGeek.geekGold}
                </strong>
                <p className="text-sm text-slate-500">GeekGold</p>
              </div>
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.boardGameGeek.geekListThumbs}
                </strong>
                <p className="text-sm text-slate-500">GeekList item thumbs</p>
              </div>
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.boardGameGeek.videoThumbs}
                </strong>
                <p className="text-sm text-slate-500">Video thumbs</p>
              </div>
            </div>
            <a
              className="mt-7 inline-flex rounded-full border-2 border-slate-950 bg-yellow-300 px-4 py-2 text-sm font-black"
              href="https://boardgamegeek.com/files/boardgame/all?username=BoardGaymesJames"
              target="_blank"
              rel="noreferrer"
            >
              Browse my BGG files
            </a>
          </article>

          <article className="flex flex-col rounded-[2rem] border-2 border-slate-950 bg-white p-7">
            <a
              className="inline-flex items-center gap-2 text-3xl font-black hover:text-pink-600"
              href="https://www.twitch.tv/boardgaymesjames"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("platform_outbound", "media_twitch")}
            >
              Twitch <ArrowRight className="size-5" />
            </a>
            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-7">
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.twitch.liveViews}
                </strong>
                <p className="text-sm text-slate-500">Live views</p>
              </div>
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.twitch.uniqueViewers}
                </strong>
                <p className="text-sm text-slate-500">Unique viewers</p>
              </div>
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.twitch.peakViewers}
                </strong>
                <p className="text-sm text-slate-500">Peak viewers</p>
              </div>
              <div>
                <strong className="text-3xl font-black">
                  {mediaMetrics.twitch.averageViewers}
                </strong>
                <p className="text-sm text-slate-500">Average viewers</p>
              </div>
            </div>
            <p className="mt-7 border-t border-slate-200 pt-5 font-black">
              {mediaMetrics.twitch.followers} followers
            </p>
          </article>
        </div>
      </section>

      <section className="bg-yellow-300 px-5 py-16 md:px-10 md:py-20 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em] ">
          Work together
        </p>
        <h2 className="mt-3 max-w-5xl font-display text-4xl leading-none text-purple-800 md:text-8xl">
          Put your game in front of a thoughtful tabletop audience.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed">
          Available for review coverage, live playthroughs, previews, convention
          coverage, interviews, and clearly disclosed sponsored content.
        </p>
        <p className="mt-5 max-w-3xl border-l-4 border-slate-950 pl-5 font-bold leading-relaxed">
          Editorial review coverage and paid commissioned work are separate.
          Publishers cannot purchase a positive review, and receiving a review
          copy does not guarantee positive coverage.
        </p>
        <button
          type="button"
          className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-slate-950 bg-white px-6 py-3 text-sm font-black shadow-[5px_5px_0_#020617]"
          onClick={() => {
            trackEvent("contact_click", "media_footer");
            window.location.href = [
              "mai",
              "lto:",
              "hi",
              "@",
              "boardgaymesjames.com",
              "?subject=Media%20partnership%20inquiry",
            ].join("");
          }}
        >
          Start a partnership conversation <ArrowRight className="size-4" />
        </button>
      </section>
    </article>
  );
}
