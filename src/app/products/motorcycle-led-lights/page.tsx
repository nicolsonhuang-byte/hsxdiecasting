import Link from "next/link";

export const metadata = {
  title: "Motorcycle LED Lights Supplier | OEM Motorcycle Lighting | HSX DIECASTING",
  description:
    "HSX DIECASTING supplies OEM motorcycle LED lights, compact LED work lights, aluminum lamp housings, and custom lighting accessories for global B2B buyers.",
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Motorcycle LED Lights",
  url: "https://www.hsxdiecasting.com/products/motorcycle-led-lights",
  image: ["https://www.hsxdiecasting.com/images/hero-factory-200t-300t.png"],
  description:
    "OEM motorcycle LED lights, compact LED work lights, aluminum lamp housings, and lighting accessories for global B2B buyers.",
  brand: {
    "@type": "Brand",
    name: "HSX DIECASTING",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Foshan Huashunxiang Hardware Products Co., Ltd.",
    url: "https://www.hsxdiecasting.com",
  },
  category: "Motorcycle LED Lighting",
};

export default function MotorcycleLedLightsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <section className="px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
            OEM motorcycle lighting supply
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight lg:text-7xl">
            Motorcycle LED Lights and Aluminum Lighting Parts for B2B Buyers
          </h1>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-white/70">
            HSX DIECASTING supports motorcycle LED lighting programs for importers,
            distributors, accessory brands, repair channels, and OEM project buyers.
            The supply scope includes compact LED lights, aluminum lamp housings,
            brackets, covers, and related custom lighting accessories.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-semibold">Applications</h2>
              <p className="mt-4 leading-7 text-white/65">
                Motorcycle auxiliary lights, LED work lights, compact light housings,
                lamp brackets, aluminum covers, and aftermarket lighting accessories.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-semibold">OEM Project Review</h2>
              <p className="mt-4 leading-7 text-white/65">
                We review buyer photos, drawings, housing requirements, mounting style,
                finish color, logo, packaging, and wholesale order plan.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-semibold">Manufacturing Support</h2>
              <p className="mt-4 leading-7 text-white/65">
                Aluminum die casting, machining, surface finishing, painting, anodizing,
                and packaging coordination for compact lighting components.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-amber-300/20 bg-amber-300/[0.08] p-6">
            <h2 className="text-2xl font-semibold">Request motorcycle LED light quotation</h2>
            <p className="mt-4 leading-7 text-white/70">
              Send drawings, photos, quantity, voltage or lighting requirements, housing material,
              color finish, logo, and packaging requirements for project review.
            </p>
            <a
              href="https://wa.me/8617666155283"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-black"
            >
              Request Motorcycle LED Light Quote
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
