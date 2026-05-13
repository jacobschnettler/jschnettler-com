import Link from "next/link";

export function Header() {
  return (
    <section className="bg-gradient-to-b from-[#2F6BFF] to-[#1e4fd6] text-white" id="about">
      <div className="mx-auto max-w-7xl px-6 py-24 flex flex-col items-center text-center">

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Fast & Reliable Mobile Mechanic Service
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
          We come to you — roadside repairs, diagnostics, and maintenance.
          No towing needed. Get back on the road faster.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">

          <Link
            href="/book-service"
            className="bg-white text-[#2F6BFF] px-6 py-3 rounded-md font-bold hover:bg-white/90"
          >
            Book Service
          </Link>

          {/* Phone button */}
          <a
            href="tel:2727720082"
            className="bg-black/20 border border-white/30 px-6 py-3 rounded-md font-bold hover:bg-black/30"
          >
            Call: (272) 772-0082
          </a>

        </div>

        {/* Small trust line */}
        <p className="mt-8 text-sm text-white/70">
          ✔ Fully insured • Mobile service • Scranton, PA • Same-day repairs
        </p>
      </div>
    </section>
  );
}