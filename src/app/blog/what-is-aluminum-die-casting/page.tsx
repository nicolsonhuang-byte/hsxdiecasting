import Link from "next/link";

import {
  ArticleStructuredData,
  buildArticleMetadata,
} from "../article-structured-data";

const articleTitle = "What Is Aluminum Die Casting? | HSX DIECASTING";
const articleDescription =
  "A practical guide to aluminum die casting for OEM aluminum parts, compact housings, covers, brackets, and global B2B sourcing projects.";
const articlePath = "/blog/what-is-aluminum-die-casting";

export const metadata = buildArticleMetadata({
  title: articleTitle,
  description: articleDescription,
  path: articlePath,
});

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20OEM%20aluminum%20die%20casting%20parts.%20Please%20contact%20me%20with%20quotation%20details.",
};

const relatedLinks = [
  { label: "OEM Aluminum Die Casting Parts", href: "/products/oem-aluminum-die-casting-parts" },
  { label: "Aluminum Light Housings", href: "/products/aluminum-light-housings" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Contact HSX", href: "/contact" },
];

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <ArticleStructuredData
        title={articleTitle}
        description={articleDescription}
        path={articlePath}
      />
      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <Link href="/blog" className="text-sm font-semibold text-[#f4d27a]">
          ← Back to Blog
        </Link>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.34em] text-[#d4ac67]">
          Aluminum Die Casting Guide
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          What Is Aluminum Die Casting?
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#d4cdc0]">
          Aluminum die casting is a manufacturing process used to produce aluminum
          parts with stable shape, repeatable dimensions, and practical surface
          finishing options. For global B2B buyers, it is often used for compact
          housings, covers, brackets, shells, end caps, lighting bodies, and custom
          OEM aluminum accessories.
        </p>

        <div className="mt-10 space-y-10 text-base leading-8 text-[#cfc6b6]">
          <section>
            <h2 className="text-2xl font-semibold !text-white">
              How aluminum die casting works
            </h2>
            <p className="mt-4">
              In a typical aluminum die casting project, molten aluminum alloy is
              injected into a metal mold. After cooling and solidifying, the part is
              removed and then processed through trimming, drilling, tapping,
              polishing, surface preparation, coating, painting, partner-supported
              anodizing when suitable, and inspection steps depending on the product
              requirement.
            </p>
            <p className="mt-4">
              The process is suitable when a buyer needs repeatable aluminum parts
              rather than one-off handmade parts. It is especially useful for compact
              parts that need a controlled outside shape, mounting areas, screw holes,
              visible surfaces, or coordination with additional finishing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              What products can use aluminum die casting?
            </h2>
            <p className="mt-4">
              Aluminum die casting can be used for many small-to-medium OEM parts,
              including aluminum light housings, lamp bodies, heat-sink-style covers,
              hardware brackets, end caps, shells, decorative covers, and other
              compact aluminum components. The exact suitability depends on part size,
              wall thickness, structure, mold design, surface finish, and expected
              order quantity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              Why buyers choose aluminum for OEM parts
            </h2>
            <p className="mt-4">
              Aluminum is widely used because it is lightweight, practical for many
              mechanical and appearance parts, and compatible with multiple finishing
              methods. For lighting products, aluminum housings can also support a
              solid product appearance and practical heat-dissipation-style design,
              depending on the engineering structure.
            </p>
            <p className="mt-4">
              For B2B sourcing, aluminum die casting is often selected when buyers
              want a repeatable part for branding, private-label product lines, or
              long-term supply rather than a widely available public-market item.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              What information should buyers prepare?
            </h2>
            <p className="mt-4">
              Before quotation, buyers should prepare 2D drawings, 3D files, sample
              photos, dimensions, material or finish requirements, target quantity,
              packaging requirements, logo needs, and target market information. If
              drawings are not complete, clear photos and measurements can help the
              factory-side team review the project before quoting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              How HSX DIECASTING supports aluminum die casting projects
            </h2>
            <p className="mt-4">
              HSX DIECASTING is operated by Foshan Huashunxiang Hardware Products
              Factory, a real manufacturing factory in Foshan, Guangdong, China. The
              factory focuses on small-to-medium aluminum die casting parts, aluminum
              light housings, LED work lights, automotive and motorcycle LED lights,
              and decorative appearance cover projects for global B2B buyers.
            </p>
            <p className="mt-4">
              Buyers can communicate with a direct factory-side team, which helps
              shorten the communication path for drawings, samples, finish review,
              quantity planning, and practical production-limit confirmation before
              quotation.
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
          <h2 className="text-2xl font-semibold">Send your aluminum die casting RFQ</h2>
          <p className="mt-4 text-sm leading-7">
            Share your drawings, samples, target finish, quantity, and packaging
            needs. HSX can review whether the project fits the available factory
            scope before quotation.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href={contactDetails.whatsappHref} className="rounded-full bg-[#111] px-6 py-3 text-center text-sm font-semibold !text-white">
              WhatsApp RFQ
            </a>
            <a
              href={`mailto:${contactDetails.email}?subject=RFQ%20for%20OEM%20Aluminum%20Die%20Casting%20Parts&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20OEM%20aluminum%20die%20casting%20parts.%0A%0APart%20type%3A%0AQuantity%3A%0AMaterial%20/%20finish%3A%0ADrawing%20or%20sample%20available%3A%0APackaging%20requirements%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
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
