import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Choose an Aluminum Die Casting Manufacturer in China | HSX DIECASTING",
  description:
    "A practical checklist for global B2B buyers choosing an aluminum die casting manufacturer in China for OEM parts, housings, finishing, and export projects.",
  alternates: {
    canonical: "/blog/how-to-choose-aluminum-die-casting-manufacturer-china",
  },
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20looking%20for%20an%20aluminum%20die%20casting%20manufacturer%20in%20China.%20Please%20contact%20me%20with%20quotation%20details.",
};

const relatedLinks = [
  { label: "OEM Aluminum Die Casting Parts", href: "/products/oem-aluminum-die-casting-parts" },
  { label: "Factory Capabilities", href: "/capabilities" },
  { label: "Products", href: "/products" },
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
          Supplier Selection Guide
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          How to Choose an Aluminum Die Casting Manufacturer in China
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#d4cdc0]">
          Choosing an aluminum die casting manufacturer in China is not only about
          price. Global B2B buyers also need to check real factory capability,
          communication speed, manufacturable scope, surface finishing support,
          sampling process, and whether the supplier can explain production limits
          clearly before quotation.
        </p>

        <div className="mt-10 space-y-10 text-base leading-8 text-[#cfc6b6]">
          <section>
            <h2 className="text-2xl font-semibold !text-white">
              1. Confirm the supplier is a real manufacturing factory
            </h2>
            <p className="mt-4">
              A real factory should be able to explain its workshop capability,
              machine scope, processing steps, finishing options, and suitable part
              range. For aluminum die casting projects, this helps buyers avoid
              unclear trading-only communication and makes RFQ review more practical.
            </p>
            <p className="mt-4">
              HSX DIECASTING is operated by Foshan Huashunxiang Hardware Products
              Factory in Foshan, Guangdong, China. The factory positioning is focused
              on practical small-to-medium aluminum die casting parts and related
              LED lighting products for global B2B buyers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              2. Match your part size with factory capability
            </h2>
            <p className="mt-4">
              Not every aluminum die casting factory is suitable for every part.
              Buyers should check whether the supplier’s die casting machines and
              post-processing setup match the expected part size, wall thickness,
              shape, surface area, and assembly requirement.
            </p>
            <p className="mt-4">
              HSX keeps its website scope aligned with the 200T / 300T Product
              Capability Range, which is more suitable for compact housings, brackets,
              caps, covers, shells, lamp bodies, and other small-to-medium OEM
              aluminum parts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              3. Check machining and finishing support
            </h2>
            <p className="mt-4">
              Many die cast parts need more than casting. Drilling, tapping,
              polishing, grinding, powder coating, spray painting, and anodizing for
              suitable aluminum projects may be needed before the part is ready for
              assembly, branding, or export packing.
            </p>
            <p className="mt-4">
              A factory that can coordinate casting, post-processing, and finishing
              within one supply chain can reduce communication time and help buyers
              confirm details more efficiently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              4. Prepare a clear RFQ package
            </h2>
            <p className="mt-4">
              Before asking for quotation, buyers should prepare drawings, 3D files,
              sample photos, dimensions, material or finish requirements, target
              quantity, packaging requirements, logo needs, and target market
              information. Clear RFQ details reduce misunderstanding and help the
              factory judge whether the project is suitable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              5. Look for direct factory communication
            </h2>
            <p className="mt-4">
              For sample-stage projects and small-to-medium batch OEM orders, direct
              factory communication is valuable. A shorter communication path helps
              buyers confirm drawings, samples, finish choices, packaging details,
              and production limits before the project moves forward.
            </p>
            <p className="mt-4">
              This is especially useful for brand owners and importers developing
              differentiated products rather than buying widely available public
              market items.
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
          <h2 className="text-2xl font-semibold">Send your sourcing project to HSX</h2>
          <p className="mt-4 text-sm leading-7">
            Share drawings, samples, photos, quantity, finish requirements, and
            packaging needs. HSX can review your project before quotation.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href={contactDetails.whatsappHref} className="rounded-full bg-[#111] px-6 py-3 text-center text-sm font-semibold !text-white">
              WhatsApp RFQ
            </a>
            <a
              href={`mailto:${contactDetails.email}?subject=RFQ%20for%20Aluminum%20Die%20Casting%20Manufacturer%20in%20China&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20looking%20for%20an%20aluminum%20die%20casting%20manufacturer%20in%20China.%0A%0AProduct%20type%3A%0AQuantity%3A%0ADrawing%20or%20sample%20available%3A%0AFinish%20requirement%3A%0ATarget%20market%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
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
