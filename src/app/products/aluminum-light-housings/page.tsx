import Link from "next/link";

export const metadata = {
  title: "Aluminum Light Housings Supplier | OEM Die Cast Lamp Housings | HSX DIECASTING",
  description:
    "HSX DIECASTING manufactures OEM aluminum light housings, die cast lamp housings, LED heat-sink bodies, covers, and compact aluminum lighting parts for global buyers.",
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Aluminum Light Housings",
  url: "https://www.hsxdiecasting.com/products/aluminum-light-housings",
  image: ["https://www.hsxdiecasting.com/images/aluminum-light-housing-heat-sink.png"],
  description:
    "OEM aluminum light housings, die cast lamp housings, LED heat-sink bodies, covers, and compact aluminum lighting parts.",
  brand: {
    "@type": "Brand",
    name: "HSX DIECASTING",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Foshan Huashunxiang Hardware Products Co., Ltd.",
    url: "https://www.hsxdiecasting.com",
  },
  material: "Aluminum alloy",
  category: "Aluminum Lighting Housings",
};

export default function AluminumLightHousingsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <section className="px-6 py-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
            Aluminum die cast lighting parts
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight lg:text-7xl">
            OEM Aluminum Light Housings and Die Cast Lamp Bodies
          </h1>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-white/70">
            HSX DIECASTING manufactures compact aluminum light housings, LED lamp
            housings, heat-sink bodies, covers, brackets, shells, and custom aluminum
            lighting parts for global OEM and wholesale buyers.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-semibold">Typical Parts</h2>
              <p className="mt-4 leading-7 text-white/65">
                Aluminum lamp housings, LED heat-sink bodies, rear covers, mounting
                brackets, shell parts, decorative covers, and custom compact castings.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-semibold">Process Support</h2>
              <p className="mt-4 leading-7 text-white/65">
                200T and 300T aluminum die casting, drilling, tapping, polishing,
                grinding, powder coating, spray painting, and anodizing.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-semibold">Buyer Fit</h2>
              <p className="mt-4 leading-7 text-white/65">
                Lighting brands, LED work light suppliers, aftermarket brands,
                importers, distributors, and OEM project buyers.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-amber-300/20 bg-amber-300/[0.08] p-6">
            <h2 className="text-2xl font-semibold">Send aluminum housing drawings</h2>
            <p className="mt-4 leading-7 text-white/70">
              Please provide 2D drawings, 3D files, sample photos, dimensions,
              expected quantity, surface treatment, and packaging request.
            </p>
            <a
              href="https://wa.me/8617666155283"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-black"
            >
              Request Aluminum Housing Quote
            </a>
          </div>

          <div className="mt-10">
            <Link href="/products" className="text-amber-300 underline">
              Back to Products
            </Link>
          </div>
        </div>
      </section>
    
      {/* Deep SEO content: aluminum light housings */}
      <section className="border-t border-white/10 bg-black/30 px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
            Aluminum die cast light housing details
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white lg:text-5xl">
            Aluminum light housings and die-cast lamp bodies for LED lighting products
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-8 text-white/70">
            HSX DIECASTING manufactures compact aluminum light housings, LED lamp bodies, heat-sink
            shells, covers, brackets, and related lighting components for LED work light suppliers,
            automotive lighting brands, motorcycle lighting programs, importers, distributors, and
            OEM buyers.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-lg font-semibold text-white">Part Types</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Aluminum lamp housings, LED heat-sink bodies, rear covers, brackets, compact shells,
                decorative covers, and custom aluminum lighting parts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-lg font-semibold text-white">Production Fit</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                The current 200T and 300T aluminum die casting machines are suited for compact
                light housings and small-to-medium aluminum components.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-lg font-semibold text-white">Finishing Options</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Polishing, grinding, powder coating, painting, anodizing, appearance review, and
                packaging coordination for export-ready aluminum lighting parts.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      {/* Product visual section: /images/aluminum-light-housing-heat-sink.png */}
      <section className="border-t border-white/10 bg-black px-6 py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
              Product image
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white lg:text-5xl">
              Aluminum Light Housing and Heat Sink Showcase
            </h2>
            <p className="mt-6 text-base leading-8 text-white/70 lg:text-lg">
              This product image helps global B2B buyers quickly understand the related supply scope,
              including OEM product development, aluminum die casting, LED lighting components,
              surface finishing, and export-ready project support.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl">
            <img
              src="/images/aluminum-light-housing-heat-sink.png"
              alt="Aluminum light housing heat sink and LED lighting component showcase"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

    
        {/* Product inquiry CTA block */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="rounded-[2rem] border border-[#d7b56d]/25 bg-[#111111] p-8 shadow-2xl shadow-black/30 md:p-10">
            <p className="section-kicker">Send project requirements</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Request pricing for OEM aluminum die casting and LED lighting products
                </h2>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
                  Send drawings, samples, product photos, wattage requirements, housing dimensions,
                  packaging needs, or OEM branding requests. HSX supports compact aluminum die casting
                  parts, LED work lights, automotive LED lights, motorcycle LED lights, aluminum light
                  housings, and decorative brake caliper covers for global B2B buyers.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href="mailto:nicolsonhuang2020@gmail.com?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C"
                  className="inline-flex items-center justify-center rounded-full bg-[#f4d27a] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-white"
                >
                  Get a Quote
                </a>
                <a
                  href="https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%20Please%20contact%20me%20with%20quotation%20details."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#d7b56d]/40 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#f4d27a] hover:text-[#f4d27a]"
                >
                  Contact on WhatsApp
                </a>
                <a
                  href="mailto:nicolsonhuang2020@gmail.com?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white/85 transition hover:border-white/40 hover:text-white sm:col-span-2 lg:col-span-1"
                >
                  Email HSX Diecasting
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-4 text-sm text-white/65 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[#f4d27a]">Email</p>
                <p className="mt-2">nicolsonhuang2020@gmail.com</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[#f4d27a]">WhatsApp / Phone</p>
                <p className="mt-2">+8617666155283</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[#f4d27a]">Factory location</p>
                <p className="mt-2">Foshan, Guangdong, China</p>
              </div>
            </div>
          </div>
        </section>

      </main>
  );
}
