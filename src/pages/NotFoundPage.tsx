import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="grid min-h-[70vh] place-content-center gap-7 px-5 text-center">
      <p className="text-xs font-black uppercase tracking-[.18em]">
        404 · Lost a piece?
      </p>
      <h1 className="text-4xl font-black md:text-7xl">
        This page isn’t at the table.
      </h1>
      <Link
        className="mx-auto rounded-full bg-pink-500 px-6 py-3 text-sm font-black text-slate-950"
        to="/"
      >
        Back home
      </Link>
    </section>
  );
}
