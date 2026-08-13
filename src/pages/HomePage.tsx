import { ArrowRight, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const button =
  "inline-flex items-center gap-2 rounded-full border-2 border-slate-950 px-6 py-3 text-sm font-black transition-transform hover:-translate-y-1";

function SocialFeed({
  title,
  handle,
  href,
  embedUrl,
  colour,
}: {
  title: string;
  handle: string;
  href: string;
  embedUrl?: string;
  colour: string;
}) {
  return (
    <article
      className={`overflow-hidden rounded-[2rem] border-2 border-slate-950 ${colour}`}
    >
      <div className="flex items-center justify-between p-7">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em]">
            Latest from
          </p>
          <h3 className="mt-2 text-3xl font-black md:text-4xl">{title}</h3>
        </div>
        <a
          className="rounded-full border-2 border-current px-4 py-2 text-sm font-black"
          href={href}
        >
          Open profile
        </a>
      </div>
      {embedUrl ? (
        <iframe
          className="block h-[460px] w-full border-0 bg-white"
          src={embedUrl}
          title={`${title} latest content`}
          loading="lazy"
        />
      ) : (
        <div className="flex h-80 flex-col items-center justify-center gap-5 bg-white p-10 text-center text-slate-950">
          <p className="max-w-sm">
            Connect the {title} widget URL to show the newest posts here
            automatically.
          </p>
          <a className={`${button} bg-slate-950 text-white`} href={href}>
            See {handle}
          </a>
        </div>
      )}
    </article>
  );
}

export function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-screen-2xl items-center gap-4 px-5 pb-12 pt-8 md:px-10 md:pb-20 lg:min-h-[720px] lg:grid-cols-2 lg:gap-10 lg:px-16">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em]">
            Queer · Autistic · Euro-gamer
          </p>
          <h1 className="mt-4 font-['Shrikhand'] text-5xl leading-[.9] text-purple-800 md:text-8xl md:leading-[.82]">
            Board games
            <br />
            <span className="text-pink-500">
              through a queer, autistic lens.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-700 md:text-xl">
            I’m James: board game content creator, and industry consultant. I
            make complicated games easier to understand—and the hobby more
            welcoming while I’m at it.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              className={`${button} bg-pink-500 text-white shadow-[5px_5px_0_#020617]`}
              to="/media"
            >
              <BarChart3 className="size-4" /> View media kit
            </Link>
            <Link className={`${button} bg-white`} to="/consulting">
              Work with me <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
        <div className="relative mx-auto grid min-h-64 w-full max-w-xs place-items-center md:min-h-96 md:max-w-md lg:min-h-[560px] lg:max-w-xl lg:p-8">
          <img
            className="max-h-72 w-full object-contain md:max-h-96 lg:max-h-[540px]"
            src="/assets/bo-board-games.png"
            alt="Bo, the Board Gaymes James cartoon mascot, sitting with colourful dice"
          />
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white md:px-10 md:py-28 lg:px-16">
        <p className="text-xs font-black uppercase tracking-[.18em]">
          What you’ll find here
        </p>
        <h2 className="mt-4 max-w-5xl font-['Shrikhand'] text-4xl leading-none md:text-6xl">
          Reviews, guides, and industry help from my side of the table.
        </h2>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <Link
            className="flex flex-col rounded-[2rem] bg-teal-300 p-7 text-slate-950 transition-transform hover:-translate-y-2 lg:min-h-80"
            to="/marty"
          >
            <img
              className="mb-6 h-52 w-full shrink-0 object-contain lg:mb-8 lg:h-48"
              src="/assets/bo-tabletop.png"
              alt="Bo considering a board game at the table"
            />
            <p className="text-xs font-black uppercase tracking-widest">
              Rating games
            </p>
            <h3 className="mt-3 text-3xl font-black md:text-4xl">
              Meet M.A.R.T.Y.
            </h3>
            <p className="mt-5 leading-relaxed">
              My weighted system for turning five parts of a play experience
              into a fairer score.
            </p>
          </Link>
          <Link
            className="flex flex-col rounded-[2rem] bg-violet-300 p-7 text-slate-950 transition-transform hover:-translate-y-2 lg:min-h-80"
            to="/brain-geek-guide"
          >
            <img
              className="mb-6 h-52 w-full shrink-0 object-contain lg:mb-8 lg:h-48"
              src="assets/brain-geek-guide.png"
              alt="Bo riding a rocket"
            />
            <p className="text-xs font-black uppercase tracking-widest">
              Knowing your needs
            </p>
            <h3 className="mt-3 text-3xl font-black md:text-4xl">
              Brain Geek Guide
            </h3>
            <p className="mt-5 leading-relaxed">
              A neurodivergent lens for understanding what it's like to play a
              game as a neurodivergent
            </p>
          </Link>
          <Link
            className="flex flex-col rounded-[2rem] bg-orange-400 p-7 text-slate-950 transition-transform hover:-translate-y-2 lg:min-h-80"
            to="/consulting"
          >
            <img
              className="mb-6 h-52 w-full shrink-0 object-contain lg:mb-8 lg:h-48"
              src="/assets/bo-rocket.png"
              alt="Bo riding a rocket"
            />
            <p className="text-xs font-black uppercase tracking-widest">
              Industry work
            </p>
            <h3 className="mt-3 text-3xl font-black md:text-4xl">
              Development & Player Experience
            </h3>
            <p className="mt-5 leading-relaxed">
              Rulebook development, blind playtesting, usability, and
              accessibility reviews for games in development.
            </p>
          </Link>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em]">
              Fresh from the feeds
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-7xl">
              Have you interacted yet?
            </h2>
          </div>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <SocialFeed
            title="YouTube"
            handle="@BoardGaymesJames"
            href="https://www.youtube.com/@BoardGaymesJames"
            embedUrl={import.meta.env.VITE_YOUTUBE_WIDGET_URL}
            colour="bg-yellow-300"
          />
          <SocialFeed
            title="Instagram"
            handle="@boardgaymesjames"
            href="https://www.instagram.com/boardgaymesjames/"
            embedUrl={import.meta.env.VITE_INSTAGRAM_WIDGET_URL}
            colour="bg-pink-500 text-white"
          />
        </div>
      </section>

      <section className="grid gap-10 bg-pink-500 px-5 py-20 text-white md:px-10 md:py-28 lg:grid-cols-2 lg:px-16">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em]">
            For publishers & partners
          </p>
          <h2 className="mt-3 text-4xl font-black leading-none tracking-tight md:text-7xl">
            The numbers are live. The perspective is mine.
          </h2>
        </div>
        <div className="max-w-lg self-end text-lg leading-relaxed">
          <p>
            Audience insights, current reach, past work, and the information you
            need to see if we’re a fit.
          </p>
          <Link
            className={`${button} mt-8 border-white bg-white text-slate-950`}
            to="/media"
          >
            Open my media kit <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
