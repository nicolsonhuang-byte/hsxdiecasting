import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aluminum Die Casting & LED Lighting Blog | HSX DIECASTING",
  description:
    "Practical articles about aluminum die casting, LED light housings, OEM manufacturing, surface finishing, and B2B sourcing from a real Foshan manufacturing factory.",
  alternates: {
    canonical: "/blog",
  },
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%20Please%20contact%20me%20with%20quotation%20details.",
};

const blogPosts = [
  {
    title:
      "Decorative Brake Caliper Covers for Tesla Model 3 / Model Y Accessory Brands",
    description:
      "An OEM supplier checklist for Tesla accessory brands sourcing decorative brake caliper covers with color, logo, packaging, and sample review.",
    href: "/blog/decorative-brake-caliper-covers-tesla-model-3-model-y-accessory-brands",
    category: "Tesla Accessory Brands",
  },
  {
    title: "How to Customize Decorative Brake Caliper Covers for Aftermarket Brands",
    description:
      "A practical B2B guide to decorative brake caliper cover customization, including color, logo, packaging, sample review, and RFQ preparation.",
    href: "/blog/how-to-customize-decorative-brake-caliper-covers-aftermarket-brands",
    category: "Decorative Caliper Covers",
  },
  {
    title: "What Is Aluminum Die Casting?",
    description:
      "A practical introduction to aluminum die casting for compact OEM parts, housings, covers, brackets, and export-oriented manufacturing projects.",
    href: "/blog/what-is-aluminum-die-casting",
    category: "Aluminum Die Casting",
  },
  {
    title: "How to Choose an Aluminum Die Casting Manufacturer in China",
    description:
      "Key points global B2B buyers should check when sourcing aluminum die casting parts from a real manufacturing factory in China.",
    href: "/blog/how-to-choose-aluminum-die-casting-manufacturer-china",
    category: "Supplier Selection",
  },
  {
    title: "Aluminum Die Casting for LED Light Housings",
    description:
      "How aluminum die casting supports compact LED lamp bodies, covers, brackets, and heat-sink-style housings for lighting products.",
    href: "/blog/aluminum-die-casting-led-light-housings",
    category: "LED Light Housings",
  },
  {
    title: "Powder Coating vs Anodizing for Aluminum Die Casting",
    description:
      "A practical comparison of powder coating, spray painting, anodizing, polishing, and appearance finishing options for aluminum parts.",
    href: "/blog/powder-coating-vs-anodizing-aluminum-die-casting",
    category: "Surface Finishing",
  },
  {
    title: "How to Customize LED Work Lights",
    description:
      "What buyers should prepare when customizing LED work lights, aluminum housings, brackets, finishes, logos, packaging, and OEM project details.",
    href: "/blog/how-to-customize-led-work-lights",
    category: "LED Work Lights",
  },
  {
    title: "OEM Automotive LED Light Manufacturing Process",
    description:
      "A step-by-step overview of RFQ review, sample confirmation, housing production, finishing, assembly support, and export communication.",
    href: "/blog/oem-automotive-led-light-manufacturing-process",
    category: "Automotive LED Lights",
  },
];

const productLinks = [
  { label: "OEM Aluminum Die Casting Parts", href: "/products/oem-aluminum-die-casting-parts" },
  { label: "Aluminum Light Housings", href: "/products/aluminum-light-housings" },
  { label: "LED Work Lights", href: "/products/led-work-lights" },
  { label: "Automotive LED Lights", href: "/products/automotive-led-lights" },
  { label: "Motorcycle LED Lights", href: "/products/motorcycle-led-lights" },
  { label: "Decorative Brake Caliper Covers", href: "/products/decorative-brake-caliper-covers" },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(212,172,103,0.16),transparent_34%),linear-gradient(180deg,#0b0b0b_0%,#050505_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d4ac67]">
            HSX DIECASTING Blog
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Aluminum Die Casting, LED Lighting & OEM Manufacturing Guides
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#cfc6b6] sm:text-lg">
            Practical sourcing articles for global B2B buyers looking for OEM aluminum
            die casting parts, LED light housings, LED work lights, automotive and
            motorcycle LED lights, and decorative appearance cover projects from a
            real Foshan manufacturing factory.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href={contactDetails.whatsappHref} className="gold-button text-center">
              WhatsApp RFQ
            </a>
            <a
              href={`mailto:${contactDetails.email}?subject=RFQ%20for%20HSX%20Diecasting%20OEM%20Project&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation.%0A%0AProduct%20type%3A%0AQuantity%3A%0AMaterial%20/%20finish%3A%0ADrawing%20or%20sample%20available%3A%0ATarget%20market%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
              className="outline-button text-center"
            >
              Email Project Details
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4ac67]">
                  {post.category}
                </p>
                <h2 className="mt-4 text-2xl font-semibold !text-white group-hover:text-[#f4d27a]">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#c9c0b0]">
                  {post.description}
                </p>
                <p className="mt-6 text-sm font-semibold text-[#f4d27a]">
                  Read article →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="rounded-[2rem] border border-[#d7b56d]/25 bg-[#111111] p-8 shadow-2xl shadow-black/30">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d4ac67]">
              Product links
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Explore HSX product pages
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#c9c0b0]">
              These articles connect with real product sourcing needs, including
              compact aluminum die casting parts, lighting housings, LED work lights,
              automotive and motorcycle LED lights, and decorative brake caliper covers.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm font-semibold text-[#efe7d9] transition-colors hover:border-[#d7b56d]/40 hover:text-[#f4d27a]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
