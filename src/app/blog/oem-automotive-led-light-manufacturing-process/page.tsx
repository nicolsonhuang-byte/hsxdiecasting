import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OEM Automotive LED Light Manufacturing Process | HSX DIECASTING",
  description:
    "A practical overview of OEM automotive LED light manufacturing, including RFQ review, aluminum housing confirmation, finishing, sample review, and export communication.",
  alternates: {
    canonical: "/blog/oem-automotive-led-light-manufacturing-process",
  },
};

const contactDetails = {
  email: "nicolsonhuang2020@gmail.com",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20OEM%20automotive%20LED%20light%20manufacturing.%20Please%20contact%20me%20with%20quotation%20details.",
};

const relatedLinks = [
  { label: "Automotive LED Lights", href: "/products/automotive-led-lights" },
  { label: "Aluminum Light Housings", href: "/products/aluminum-light-housings" },
  { label: "OEM Aluminum Die Casting Parts", href: "/products/oem-aluminum-die-casting-parts" },
  { label: "Contact HSX", href: "/contact" },
];

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <Link href="/blog" className="text-sm font-semibold text-[#f4d27a]">
          ← Back to Blog
        </Link>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.34em] text-[#d4ac67]">
          Automotive LED Light OEM Guide
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          OEM Automotive LED Light Manufacturing Process
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#d4cdc0]">
          OEM automotive LED light manufacturing starts with clear RFQ review.
          Buyers should confirm product photos, drawings, aluminum housing details,
          lighting requirements, finish requests, packaging needs, and target
          quantity before quotation.
        </p>

        <div className="mt-10 space-y-10 text-base leading-8 text-[#cfc6b6]">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              1. RFQ and product information review
            </h2>
            <p className="mt-4">
              Useful RFQ details include reference photos, drawings, housing size,
              mounting points, bracket requirements, lens or cable details if
              available, finish requirements, logo or packaging request, target
              market, and estimated order quantity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              2. Aluminum housing and component confirmation
            </h2>
            <p className="mt-4">
              Many automotive LED light projects include aluminum housings, covers,
              brackets, or related die cast aluminum components. The factory needs
              to review whether the size, shape, wall thickness, mounting areas, and
              finish requirements fit the available manufacturing scope.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. Surface finishing and appearance confirmation
            </h2>
            <p className="mt-4">
              Automotive LED lights often require consistent appearance for brand
              lines and distribution channels. Powder coating, spray painting,
              polishing, grinding, and suitable aluminum finishing options can be
              reviewed based on the housing design and target market.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. Sample review and production planning
            </h2>
            <p className="mt-4">
              After details are confirmed, buyers may move into sample review,
              appearance confirmation, packaging discussion, and small-to-medium
              batch planning. Clear communication helps confirm practical production
              limits before scaling.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              5. Direct factory-side communication
            </h2>
            <p className="mt-4">
              HSX DIECASTING supports automotive LED lights, aluminum light housings,
              and related OEM aluminum parts through direct factory-side communication.
              This helps buyers discuss drawings, samples, finish requirements,
              quantity plans, and project details closer to the workshop.
            </p>
          </section>
        </div>

        <section className="mt-14 rounded-[2rem] border border-[#d7b56d]/25 bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold text-white">Related HSX pages</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm font-semibold text-[#efe7d9] hover:text-[#f4d27a]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#d7b56d]/25 bg-[#d4ac67] p-8 text-[#120f08]">
          <h2 className="text-2xl font-semibold">
            Send your automotive LED light RFQ
          </h2>
          <p className="mt-4 text-sm leading-7">
            Share product photos, drawings, lighting requirements, housing details,
            finish request, quantity plan, and packaging information.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href={contactDetails.whatsappHref} className="rounded-full bg-[#111] px-6 py-3 text-center text-sm font-semibold text-white">
              WhatsApp RFQ
            </a>
            <a
              href={`mailto:${contactDetails.email}?subject=RFQ%20for%20OEM%20Automotive%20LED%20Lights&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20OEM%20automotive%20LED%20lights.%0A%0AProduct%20type%3A%0AQuantity%3A%0AHousing%20size%3A%0ALighting%20requirement%3A%0AFinish%20/%20packaging%20request%3A%0ADrawing%20or%20sample%20available%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
              className="rounded-full border border-[#120f08]/30 px-6 py-3 text-center text-sm font-semibold"
            >
              Email Project Details
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
