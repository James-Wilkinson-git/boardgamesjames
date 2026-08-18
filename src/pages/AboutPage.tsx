import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Tagline } from "../components/Tagline";

export function AboutPage() {
  return (
    <article>
      <header className="content-shell py-12 md:py-16">
        <div className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[.18em]">
            About James Wilkinson
          </p>
          <h1 className="mt-4 text-6xl leading-[.88] text-purple-800 md:text-8xl">
            A real person at a real table.
          </h1>
          <Tagline className="mt-5 text-pink-500" />
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-700">
            James Wilkinson is the creator behind Board Gaymes James: a
            board-game media brand and consulting practice shaped by live play,
            independent opinion, and close attention to how games ask people to
            learn, think, and interact.
          </p>
        </div>
      </header>

      <section className="bg-slate-950 px-5 py-16 text-white md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-yellow-300">
              Real
            </p>
            <h2 className="mt-3 text-5xl">The game as it happens.</h2>
            <p className="mt-5 leading-relaxed text-white/70">
              James teaches modern board games and plays them live. The
              hesitations, discoveries, table talk, and learning curve are part
              of the experience—not edited away.
            </p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-yellow-300">
              Honest
            </p>
            <h2 className="mt-3 text-5xl">Opinion stays independent.</h2>
            <p className="mt-5 leading-relaxed text-white/70">
              Review copies do not guarantee positive coverage. Editorial
              reviews and paid, commissioned work are separate and identified
              clearly.
            </p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-yellow-300">
              Analytical
            </p>
            <h2 className="mt-3 text-5xl">More than weight and score.</h2>
            <p className="mt-5 leading-relaxed text-white/70">
              James examines mechanisms, cognitive load, learning demands,
              accessibility, friction, usability, and the full player
              experience.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-10 px-5 py-16 md:px-10 md:py-20 lg:grid-cols-2 lg:px-16">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em]">
            Perspective
          </p>
          <h2 className="mt-3 text-5xl leading-none text-purple-800 md:text-7xl">
            Queer. Autistic. Board-game obsessed.
          </h2>
        </div>
        <div className="space-y-5 self-end text-lg leading-relaxed text-slate-700">
          <p>
            Board Gaymes James makes queer representation visible while bringing
            an autistic perspective to the demands and accessibility of play.
            Neither is a marketing add-on; both are part of how James sees the
            table.
          </p>
          <div className="flex flex-wrap gap-5 pt-3 font-bold text-slate-950">
            <Link to="/media">
              View the Media Kit <ArrowRight className="inline size-4" />
            </Link>
            <Link to="/consulting">
              Explore Consulting <ArrowRight className="inline size-4" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
