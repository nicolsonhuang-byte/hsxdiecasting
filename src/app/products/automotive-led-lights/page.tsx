import Link from "next/link";

export const metadata = {
  title: "Automotive LED Lights Supplier | OEM Car LED Lighting | HSX DIECASTING",
  description:
    "HSX DIECASTING supplies OEM automotive LED lights, car LED work lights, auxiliary lights, and aluminum lighting housings for global wholesalers, importers, distributors, and aftermarket brands.",
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Automotive LED Lights",
  url: "https://www.hsxdiecasting.com/products/automotive-led-lights",
  image: ["https://www.hsxdiecasting.com/images/hero-factory-200t-300t.png"],
  description:
    "OEM automotive LED lights, auxiliary lights, car LED work lights, and aluminum lighting housings for wholesale and aftermarket buyers.",
  brand: {
    "@type": "Brand",
    name: "HSX DIECASTING",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Foshan Huashunxiang Hardware Products Co., Ltd.",
    url: "https://www.hsxdiecasting.com",
  },
  category: "Automotive LED Lighting",
};

export default function AutomotiveLedLightsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <section className="px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
            Foshan, Guangdong, China
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight lg:text-7xl">
            Automotive LED Lights Supplier for Global OEM and Aftermarket Buyers
          </h1>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-white/70">
            HSX DIECASTING supplies OEM automotive LED lights, auxiliary lights,
            car LED work lights, and aluminum lighting-related components for
            wholesalers, importers, distributors, aftermarket brands, and OEM buyers.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-semibold">Typical Products</h2>
              <p className="mt-4 leading-7 text-white/65">
                Car LED work lights, auxiliary driving lights, lighting housings,
                compact aluminum lamp bodies, brackets, and covers.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-semibold">OEM Support</h2>
              <p className="mt-4 leading-7 text-white/65">
                Samples, drawings, size requirements, LED lighting requirements,
                aluminum housing design notes, logo, color, and packaging support.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-semibold">Factory Capability</h2>
              <p className="mt-4 leading-7 text-white/65">
                Aluminum die casting, drilling, tapping, polishing, powder coating,
                painting, anodizing, and export packaging coordination.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-amber-300/20 bg-amber-300/[0.08] p-6">
            <h2 className="text-2xl font-semibold">Send your automotive LED lighting RFQ</h2>
            <p className="mt-4 leading-7 text-white/70">
              Please send photos, drawings, target quantity, lighting requirements,
              housing size, surface finish, logo request, packaging plan, and target market.
            </p>
            <a
              href="https://wa.me/8617666155283"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-black"
            >
              Request Automotive LED Light Quote
            </a>
          </div>

          <div className="mt-10">
            <Link href="/products" className="text-amber-300 underline">
              Back to Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
