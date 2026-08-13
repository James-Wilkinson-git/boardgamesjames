import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `border-b-2 py-2 text-sm font-extrabold transition-colors ${isActive ? "border-pink-500" : "border-transparent hover:border-pink-500"}`;

export function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-hidden bg-amber-50 text-slate-950 antialiased">
      <a
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <header className="relative z-40 mx-auto flex max-w-screen-2xl items-center justify-between px-5 py-5 md:px-10 lg:px-16">
        <Link className="block" to="/" aria-label="Board Gaymes James home">
          <img
            className="h-14 w-auto object-contain md:h-16"
            src="/assets/bannertext.png"
            alt="Board Gaymes James"
          />
        </Link>
        <button
          className="grid size-11 place-items-center rounded-full border-2 border-slate-950 md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          className={`${open ? "absolute left-5 right-5 top-20 flex rounded-3xl border-2 border-slate-950 bg-amber-50 p-5 shadow-[8px_8px_0_#020617]" : "hidden"} flex-col gap-2 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          aria-label="Main navigation"
        >
          <NavLink className={linkClass} to="/" end>
            Home
          </NavLink>
          <NavLink className={linkClass} to="/consulting">
            Consulting
          </NavLink>
          <NavLink className={linkClass} to="/media">
            Media
          </NavLink>
          <NavLink className={linkClass} to="/marty">
            M.A.R.T.Y.
          </NavLink>
          <NavLink className={linkClass} to="/brain-geek-guide">
            Brain Geek Guide
          </NavLink>
        </nav>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="grid gap-10 bg-slate-950 px-5 py-16 text-white md:grid-cols-2 md:px-10 lg:px-16">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] text-yellow-300">
            Pull up a chair.
          </p>
          <h2 className="mt-3 font-['Shrikhand'] text-4xl leading-none md:text-5xl">
            There’s room at this table.
          </h2>
          <button
            type="button"
            className="mt-6 inline-block border-b"
            onClick={() =>
              (window.location.href = [
                "mai",
                "lto:",
                "hi",
                "@",
                "boardgaymesjames.com",
              ].join(""))
            }
          >
            Email me
          </button>
        </div>
        <div className="flex flex-wrap content-start gap-x-6 gap-y-3 text-sm font-bold md:justify-end">
          <a
            className="hover:text-yellow-300"
            href="https://www.youtube.com/@BoardGaymesJames"
          >
            YouTube
          </a>
          <a
            className="hover:text-yellow-300"
            href="https://www.instagram.com/boardgaymesjames/"
          >
            Instagram
          </a>
          <a
            className="hover:text-yellow-300"
            href="https://www.twitch.tv/boardgaymesjames"
          >
            Twitch
          </a>
          <a
            className="hover:text-yellow-300"
            href="https://boardgamegeek.com/user/BoardGaymesJames"
          >
            BoardGameGeek
          </a>
        </div>
        <p className="text-xs text-white/50 md:col-span-2">
          © {new Date().getFullYear()} Board Gaymes James
        </p>
      </footer>
    </div>
  );
}
