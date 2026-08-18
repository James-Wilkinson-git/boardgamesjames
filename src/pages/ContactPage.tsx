import { Mail } from "lucide-react";
import { contactAddress, contactHref } from "../data/brand";
import { trackEvent } from "../lib/analytics";

const inquiries = [
  {
    title: "Media / publisher inquiry",
    copy: "Review coverage, live play, convention coverage, interviews, or a disclosed partnership.",
    subject: "Media / publisher inquiry",
  },
  {
    title: "Consulting inquiry",
    copy: "Blind rulebook playtesting, rulebook development, player aids, or player-experience work.",
    subject: "Board game consulting inquiry",
  },
  {
    title: "General contact",
    copy: "Events, professional questions, or anything that does not fit the other paths.",
    subject: "General inquiry",
  },
];

export function ContactPage() {
  return (
    <section className="px-5 py-14 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-screen-2xl">
        <p className="text-xs font-black uppercase tracking-[.18em]">Contact</p>
        <h1 className="mt-3 max-w-4xl text-6xl leading-none text-purple-800 md:text-8xl">
          Start with the right conversation.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
          Email is the best way to reach James. Choose a subject below so your
          message arrives with the right context. No phone number or form
          account required.
        </p>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {inquiries.map((inquiry, index) => (
            <article
              key={inquiry.title}
              className={`flex flex-col p-7 ${index === 0 ? "bg-teal-300" : index === 1 ? "bg-pink-500" : "bg-yellow-300"}`}
            >
              <h2 className="text-4xl">{inquiry.title}</h2>
              <p className="mt-4 leading-relaxed">{inquiry.copy}</p>
              <a
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border-2 border-slate-950 bg-white px-5 py-3 text-sm font-black"
                href={contactHref(inquiry.subject)}
                onClick={() => trackEvent("contact_click", inquiry.subject)}
              >
                <Mail className="size-4" /> Email James
              </a>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-slate-700">
          Direct email:{" "}
          <a className="font-bold underline" href={contactHref()}>
            {contactAddress}
          </a>
        </p>
      </div>
    </section>
  );
}
