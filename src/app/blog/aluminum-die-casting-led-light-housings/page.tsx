import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aluminum Die Casting for LED Light Housings | HSX DIECASTING",
  description:
    "How aluminum die casting supports LED light housings, lamp bodies, covers, brackets, and heat-sink-style aluminum lighting components for OEM projects.",
  alternates: {
    canonical: "/blog/aluminum-die-casting-led-light-housings",
  },
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20aluminum%20die%20casting%20for%20LED%20light%20housings.%20Please%20contact%20me%20with%20quotation%20details.",
};

const relatedLinks = [
  { label: "Aluminum Light Housings", href: "/products/aluminum-light-housings" },
  { label: "LED Work Lights", href: "/products/led-work-lights" },
  { label: "OEM Aluminum Die Casting Parts", href: "/products/oem-aluminum-die-casting-parts" },
  { label: "Factory Capabilities", href: "/capabilities" },
];

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <Link href="/blog" className="text-sm font-semibold text-[#f4d27a]">
          ← Back to Blog
        </Link>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.34em] text-[#d4ac67]">
          LED Light Housing Guide
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Aluminum Die Casting for LED Light Housings
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#d4cdc0]">
          Aluminum die casting is commonly used for LED light housings, lamp bodies,
          covers, brackets, and compact lighting components. For global B2B buyers,
          the key is to match the housing design with realistic die casting,
          machining, finishing, assembly, and export packing requirements.
        </p>

        <div className="mt-10 space-y-10 text-base leading-8 text-[#cfc6b6]">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              Why aluminum is used for LED light housings
            </h2>
            <p className="mt-4">
              Aluminum is widely used in LED lighting products because it supports a
              solid product appearance, practical housing structure, and multiple
              surface finishing options. Die cast aluminum housings can be designed
              for lamp bodies, covers, brackets, end caps, mounting areas, and
              heat-sink-style shapes depending on the product requirement.
            </p>
            <p className="mt-4">
              For OEM lighting projects, aluminum housings also help create a more
              controlled product appearance for private-label brands, distributors,
              and importers developing differentiated product lines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Typical LED housing parts made by die casting
            </h2>
            <p className="mt-4">
              Common die cast lighting parts include work light housings, auxiliary
              light bodies, automotive LED lamp housings, motorcycle light shells,
              compact covers, mounting brackets, rear covers, and aluminum accessory
              components. The final structure depends on drawings, samples, assembly
              needs, wall thickness, and surface finish requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Finishing options for aluminum lamp bodies
            </h2>
            <p className="mt-4">
              Aluminum light housings often require appearance finishing after
              casting and machining. Powder coating, spray painting, polishing,
              grinding, and anodizing for suitable aluminum projects can be reviewed
              based on the target appearance, product line, and market requirement.
            </p>
            <p className="mt-4">
              Buyers should confirm finish color, surface texture, logo requirement,
              packaging plan, and target market before quotation so the factory can
              review whether the finish is practical for the part design.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              What buyers should prepare before quotation
            </h2>
            <p className="mt-4">
              Buyers should prepare 2D drawings, 3D files, sample photos, housing
              dimensions, wall thickness, mounting areas, bracket requirements,
              finish request, estimated quantity, packaging needs, and application
              market such as LED work light, automotive light, motorcycle light, or
              other custom lighting products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              How HSX supports LED light housing projects
            </h2>
            <p className="mt-4">
              HSX DIECASTING supports aluminum light housings and LED lighting
              related aluminum parts through direct factory-side communication,
              drawing and sample review, small-to-medium batch planning, die casting,
              post-processing, and surface finishing coordination.
            </p>
            <p className="mt-4">
              The factory is located in Foshan, Guangdong, China, and focuses on
              realistic aluminum die casting and LED lighting product support rather
              than exaggerated capacity claims.
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
          <h2 className="text-2xl font-semibold">Send your LED housing RFQ</h2>
          <p className="mt-4 text-sm leading-7">
            Share housing drawings, sample photos, dimensions, finish requirements,
            quantity plan, and application market for factory review.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href={contactDetails.whatsappHref} className="rounded-full bg-[#111] px-6 py-3 text-center text-sm font-semibold text-white">
              WhatsApp RFQ
            </a>
            <a
              href={`mailto:${contactDetails.email}?subject=RFQ%20for%20Aluminum%20LED%20Light%20Housings&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20aluminum%20LED%20light%20housings.%0A%0AProduct%20type%3A%0AQuantity%3A%0AHousing%20dimensions%3A%0AFinish%20requirement%3A%0ADrawing%20or%20sample%20available%3A%0AApplication%20market%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
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
