import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { platforms } from "../data/brand";
import { trackEvent } from "../lib/analytics";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `border-b-2 py-2 text-sm font-extrabold transition-colors ${isActive ? "border-yellow-300" : "border-transparent hover:border-yellow-300"}`;

export function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });

    const metadata: Record<string, { title: string; description: string }> = {
      "/": {
        title: "Board Gaymes James | Real. Honest. Analytical.",
        description:
          "Board game creator and consultant bringing real play, independent analysis, and accessibility expertise to the tabletop industry.",
      },
      "/consulting": {
        title: "Board Game Consulting | Board Gaymes James",
        description:
          "Blind rulebook playtesting, rulebook development, player aids, accessibility, and player-experience consulting from Board Gaymes James.",
      },
      "/media": {
        title: "Media Kit | Board Gaymes James",
        description:
          "Board Gaymes James media kit: real live play, independent reviews, analytical coverage, verified reach, and partnership contact.",
      },
      "/about": {
        title: "About James Wilkinson | Board Gaymes James",
        description:
          "Meet James Wilkinson, the queer autistic creator and board-game consultant behind Board Gaymes James.",
      },
      "/contact": {
        title: "Contact | Board Gaymes James",
        description:
          "Contact Board Gaymes James about media, publisher, event, or consulting work.",
      },
      "/marty": {
        title: "M.A.R.T.Y. Rating System | Board Gaymes James",
        description:
          "A transparent weighted framework for analysing the full board-game experience.",
      },
      "/brain-geek-guide": {
        title: "Brain Geek Guide | Board Gaymes James",
        description:
          "A consumer-friendly framework for understanding the mental demands involved in learning and playing a board game.",
      },
    };
    const current = metadata[location.pathname] ?? {
      title: "Page Not Found | Board Gaymes James",
      description: "Board Gaymes James — Real. Honest. Analytical.",
    };
    document.title = current.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", current.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", current.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", current.description);
    trackEvent("page_view", location.pathname);

    const focusFrame = window.requestAnimationFrame(() => {
      const heading = document.querySelector<HTMLElement>("main h1");
      heading?.setAttribute("tabindex", "-1");
      heading?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(focusFrame);
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-hidden bg-amber-50 text-slate-950 antialiased">
      <a
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <header className="relative z-40 bg-purple-800 text-white">
        <div className="content-shell flex items-center justify-between py-5">
          <Link
            className="font-display text-3xl leading-none tracking-wide md:text-4xl"
            to="/"
            aria-label="Board Gaymes James home"
          >
            Board Gaymes James
          </Link>
          <button
            className="grid size-11 place-items-center rounded-full border-2 border-white md:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            className={`${open ? "absolute left-5 right-5 top-20 flex rounded-3xl border-2 border-white bg-purple-800 p-5 shadow-[8px_8px_0_#f1ba3a]" : "hidden"} flex-col gap-2 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
            aria-label="Main navigation"
          >
            <NavLink className={linkClass} to="/" end>
              Home
            </NavLink>
            <NavLink
              className={linkClass}
              to="/media"
              onClick={() => trackEvent("media_kit_visit", "navigation")}
            >
              Media Kit
            </NavLink>
            <NavLink
              className={linkClass}
              to="/consulting"
              onClick={() => trackEvent("consulting_visit", "navigation")}
            >
              Consulting
            </NavLink>
            <NavLink className={linkClass} to="/marty">
              M.A.R.T.Y.
            </NavLink>
            <NavLink className={linkClass} to="/brain-geek-guide">
              Brain Geek Guide
            </NavLink>
            <NavLink className={linkClass} to="/about">
              About
            </NavLink>
            <NavLink className={linkClass} to="/contact">
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="bg-slate-950 py-16 text-white">
        <div className="content-shell grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-yellow-300">
              Pull up a chair.
            </p>
            <h2 className="mt-3 font-display text-4xl leading-none md:text-5xl">
              There’s room at this table.
            </h2>
            <Link
              className="mt-6 inline-block border-b"
              to="/contact"
              onClick={() => trackEvent("contact_click", "footer")}
            >
              Contact James
            </Link>
          </div>
          <div className="flex flex-wrap content-start gap-x-6 gap-y-3 text-sm font-bold md:justify-end">
            <a
              className="hover:text-yellow-300"
              href={platforms.youtube.href}
              onClick={() => trackEvent("platform_outbound", "footer_youtube")}
            >
              YouTube
            </a>
            <a
              className="hover:text-yellow-300"
              href={platforms.instagram.href}
              onClick={() =>
                trackEvent("platform_outbound", "footer_instagram")
              }
            >
              Instagram
            </a>
            <a
              className="hover:text-yellow-300"
              href={platforms.twitch.href}
              onClick={() => trackEvent("platform_outbound", "footer_twitch")}
            >
              Twitch
            </a>
            <a
              className="hover:text-yellow-300"
              href={platforms.boardGameGeek.href}
              onClick={() => trackEvent("platform_outbound", "footer_bgg")}
            >
              BoardGameGeek
            </a>
          </div>
          <p className="text-xs text-white/70 md:col-span-2">
            © {new Date().getFullYear()} Board Gaymes James
          </p>
        </div>
      </footer>
    </div>
  );
}
