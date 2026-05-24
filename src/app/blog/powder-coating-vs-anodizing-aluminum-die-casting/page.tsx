import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Powder Coating vs Anodizing for Aluminum Die Casting | HSX DIECASTING",
  description:
    "A practical comparison of powder coating, spray painting, anodizing, polishing, and appearance finishing options for aluminum die casting parts.",
  alternates: {
    canonical: "/blog/powder-coating-vs-anodizing-aluminum-die-casting",
  },
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20surface%20finishing%20for%20aluminum%20die%20casting%20parts.%20Please%20contact%20me%20with%20quotation%20details.",
};

const relatedLinks = [
  { label: "OEM Aluminum Die Casting Parts", href: "/products/oem-aluminum-die-casting-parts" },
  { label: "Aluminum Light Housings", href: "/products/aluminum-light-housings" },
  { label: "Factory Capabilities", href: "/capabilities" },
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
          Surface Finishing Guide
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Powder Coating vs Anodizing for Aluminum Die Casting
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#d4cdc0]">
          Surface finishing is an important part of many aluminum die casting
          projects. Powder coating, spray painting, anodizing, polishing, and
          grinding can affect the final appearance, color, texture, protection, and
          buyer perception of aluminum parts.
        </p>

        <div className="mt-10 space-y-10 text-base leading-8 text-[#cfc6b6]">
          <section>
            <h2 className="text-2xl font-semibold !text-white">
              What is powder coating?
            </h2>
            <p className="mt-4">
              Powder coating is a common finishing option for aluminum parts that
              need a durable colored surface. It is often used for housings, covers,
              brackets, lighting bodies, and visible accessories where appearance
              consistency and color control are important.
            </p>
            <p className="mt-4">
              For B2B buyers, powder coating can be a practical choice when the
              product requires black, silver, red, or other custom colors for a
              branded product line.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              What is anodizing?
            </h2>
            <p className="mt-4">
              Anodizing is a surface treatment used on suitable aluminum projects to
              create a cleaner metallic appearance and improve surface protection.
              It is not suitable for every die cast part, so the factory should
              review material, surface condition, part structure, appearance target,
              and buyer requirement before confirming.
            </p>
            <p className="mt-4">
              HSX can review anodizing for suitable aluminum projects. This is a
              useful capability because many aluminum die casting suppliers focus
              only on coating or painting and may not support anodizing review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              Powder coating vs anodizing: how to choose
            </h2>
            <p className="mt-4">
              Powder coating is usually considered when buyers want a consistent
              painted appearance, broader color options, and a surface suitable for
              many visible housings and covers. Anodizing is considered when the
              project needs a metallic surface appearance and the aluminum part is
              suitable for the process.
            </p>
            <p className="mt-4">
              The right choice depends on the part geometry, aluminum material,
              surface quality, color target, application market, cost expectation,
              and long-term appearance requirement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              What about spray painting, polishing, and grinding?
            </h2>
            <p className="mt-4">
              Spray painting can be used for appearance color and brand styling.
              Polishing and grinding are often used as preparation steps for visible
              aluminum surfaces before coating, painting, anodizing, or final
              appearance review.
            </p>
            <p className="mt-4">
              For decorative brake caliper covers, high-temperature resistant paint
              options for normal driving use can be reviewed by project, together
              with custom color, logo font, and logo color requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              What should buyers send before finishing quotation?
            </h2>
            <p className="mt-4">
              Buyers should send drawings, photos, finish color, surface texture
              expectations, sample references, logo requirements, target market,
              quantity plan, packaging needs, and any appearance standard required
              by the brand or distributor.
            </p>
          </section>
        </div>

        <section className="mt-14 rounded-[2rem] border border-[#d7b56d]/25 bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold !text-white">Related HSX pages</h2>
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
          <h2 className="text-2xl font-semibold">Send your finishing requirement</h2>
          <p className="mt-4 text-sm leading-7">
            Share your drawings, product photos, finish target, color requirement,
            quantity, and packaging needs for factory-side review.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href={contactDetails.whatsappHref} className="rounded-full bg-[#111] px-6 py-3 text-center text-sm font-semibold !text-white">
              WhatsApp RFQ
            </a>
            <a
              href={`mailto:${contactDetails.email}?subject=RFQ%20for%20Aluminum%20Die%20Casting%20Surface%20Finishing&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20surface%20finishing%20support%20for%20aluminum%20die%20casting%20parts.%0A%0AProduct%20type%3A%0AQuantity%3A%0AFinish%20requirement%3A%0AColor%20or%20sample%20reference%3A%0ADrawing%20or%20photo%20available%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
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
