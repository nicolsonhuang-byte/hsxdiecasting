import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Customize LED Work Lights | HSX DIECASTING",
  description:
    "A practical guide for customizing LED work lights, aluminum housings, brackets, finishes, logos, packaging, and OEM project details.",
  alternates: {
    canonical: "/blog/how-to-customize-led-work-lights",
  },
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20custom%20LED%20work%20lights.%20Please%20contact%20me%20with%20quotation%20details.",
};

const relatedLinks = [
  { label: "LED Work Lights", href: "/products/led-work-lights" },
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
          LED Work Light OEM Guide
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          How to Customize LED Work Lights
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#d4cdc0]">
          Custom LED work light projects usually involve more than choosing a lamp
          shape. Buyers should confirm product use, aluminum housing requirements,
          bracket style, lighting details, finish color, logo needs, packaging plan,
          and expected order quantity before requesting quotation.
        </p>

        <div className="mt-10 space-y-10 text-base leading-8 text-[#cfc6b6]">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              1. Define the LED work light application
            </h2>
            <p className="mt-4">
              LED work lights can be used for off-road vehicles, trucks, utility
              vehicles, agricultural machinery, construction equipment, outdoor
              equipment, and field-use lighting programs. Different applications may
              require different housing size, bracket structure, cable details, lens
              requirements, and packaging style.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              2. Confirm aluminum housing and bracket needs
            </h2>
            <p className="mt-4">
              Many LED work lights use aluminum housings because they support a
              solid product appearance and practical lamp body structure. Buyers
              should prepare housing dimensions, mounting points, bracket type,
              assembly needs, and any drawing or sample reference available.
            </p>
            <p className="mt-4">
              If a project requires a custom aluminum housing or cover, factory-side
              review is important before quotation because part size, wall thickness,
              mold feasibility, and finishing requirements affect production planning.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. Choose finish, color, logo, and packaging
            </h2>
            <p className="mt-4">
              OEM LED work light buyers often need custom color, logo, label,
              packaging, or product-line appearance. Powder coating, spray painting,
              polishing, and other finishing steps can be reviewed based on the
              housing design and target market.
            </p>
            <p className="mt-4">
              Clear logo files, packaging references, color requirements, and target
              market information can reduce communication time and help the factory
              confirm details more efficiently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. Prepare lighting and electrical details if available
            </h2>
            <p className="mt-4">
              Buyers can share target wattage, voltage, lens preference, beam use,
              cable requirement, plug requirement, or reference product photos if
              they are available. If the buyer is still developing a new product,
              the factory can first review the housing, appearance, and OEM supply
              scope before final confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              5. Work with a direct factory-side team
            </h2>
            <p className="mt-4">
              For sample-stage LED work light projects, direct factory-side
              communication helps buyers confirm drawings, samples, finish choices,
              packaging, logo details, and small-to-medium batch planning before the
              project scales.
            </p>
            <p className="mt-4">
              HSX DIECASTING supports LED work lights, aluminum lighting housings,
              and related OEM aluminum parts through practical RFQ review and
              factory-side project communication.
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
          <h2 className="text-2xl font-semibold">Send your LED work light RFQ</h2>
          <p className="mt-4 text-sm leading-7">
            Share product photos, drawings, housing size, lighting requirement,
            finish request, logo need, packaging plan, and target quantity.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href={contactDetails.whatsappHref} className="rounded-full bg-[#111] px-6 py-3 text-center text-sm font-semibold text-white">
              WhatsApp RFQ
            </a>
            <a
              href={`mailto:${contactDetails.email}?subject=RFQ%20for%20Custom%20LED%20Work%20Lights&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20custom%20LED%20work%20lights.%0A%0AProduct%20type%3A%0AQuantity%3A%0AWattage%20or%20lighting%20requirement%3A%0AHousing%20size%20or%20drawing%3A%0AFinish%20/%20logo%20/%20packaging%20request%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
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
