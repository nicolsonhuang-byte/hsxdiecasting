import Link from "next/link";

export const metadata = {
  title: "Motorcycle LED Lights Supplier | OEM Motorcycle Lighting",
  description:
    "HSX DIECASTING supplies OEM motorcycle LED lights, auxiliary lights, compact LED work lights, aluminum lamp housings, brackets, covers, and lighting accessories.",
  alternates: {
    canonical: "/products/motorcycle-led-lights",
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "OEM Motorcycle LED Lighting Manufacturing Service",
  url: "https://www.hsxdiecasting.com/products/motorcycle-led-lights",
  image: ["https://www.hsxdiecasting.com/images/motorcycle-led-auxiliary-light.png"],
  description:
    "B2B OEM manufacturing service for motorcycle LED lights, auxiliary lights, compact LED work lights, aluminum lamp housings, brackets, covers, and lighting accessories for global buyers.",
  provider: {
    "@type": "Organization",
    name: "Foshan Huashunxiang Hardware Products Factory",
    url: "https://www.hsxdiecasting.com",
  },
  serviceType: "OEM motorcycle LED lighting manufacturing",
  areaServed: "Global B2B Markets",
  category: "Motorcycle LED lighting manufacturing",
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  phone: "+86 176 6615 5283",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20your%20motorcycle%20LED%20lights%2C%20aluminum%20lamp%20housings%2C%20or%20OEM%20motorcycle%20lighting%20project%20support.%20Please%20contact%20me%20with%20quotation%20details.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const mailtoMotorcycleRfq = `mailto:${contactDetails.email}?subject=RFQ%20for%20Motorcycle%20LED%20Lights&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20motorcycle%20LED%20lights%20or%20motorcycle%20lighting%20parts.%0A%0AProduct%20type%3A%0AQuantity%3A%0AHousing%20size%3A%0AMounting%20requirement%3A%0ALighting%20requirement%3A%0AFinish%20/%20packaging%20request%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`;

type InfoCard = {
  title: string;
  description: string;
};

type ProgramCard = {
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
};

const heroStats: InfoCard[] = [
  {
    title: "Motorcycle Focus",
    description:
      "Auxiliary motorcycle lights, compact LED work lights, aluminum lamp housings, brackets, covers, and lighting accessories.",
  },
  {
    title: "OEM Input",
    description:
      "Buyer photos, drawings, samples, size requirements, finish requests, logo needs, and packaging plans accepted.",
  },
  {
    title: "Factory Support",
    description:
      "Aluminum die casting, drilling, tapping, polishing, coating, painting, anodizing, inspection, and export packing support.",
  },
];

const productTypes: InfoCard[] = [
  {
    title: "Motorcycle Auxiliary Lights",
    description:
      "Compact auxiliary LED lights for motorcycle accessory programs, aftermarket supply, and private-label distribution channels.",
  },
  {
    title: "Motorcycle LED Work Lights",
    description:
      "Small LED light products used for utility, repair, riding accessory, and branded lighting product programs.",
  },
  {
    title: "Aluminum Lamp Bodies",
    description:
      "Die-cast aluminum lamp bodies and compact housings shaped around heat dissipation, mounting, and appearance needs.",
  },
  {
    title: "Mounting Brackets",
    description:
      "Small aluminum brackets and support pieces with drilling, tapping, and mounting feature support.",
  },
  {
    title: "Rear Covers and End Caps",
    description:
      "Compact covers, caps, closure parts, and shell components for motorcycle lighting assemblies.",
  },
  {
    title: "Custom Motorcycle Lighting Parts",
    description:
      "Buyer-defined motorcycle lighting parts developed from drawings, samples, product photos, or OEM project requirements.",
  },
];

const productPrograms: ProgramCard[] = [
  {
    tag: "Motorcycle",
    title: "Motorcycle Auxiliary Light Programs",
    description:
      "Compact motorcycle auxiliary lights for aftermarket brands, importers, repair channels, and accessory distributors.",
    image: "/images/motorcycle-led-auxiliary-light.png",
    alt: "Motorcycle LED auxiliary light for OEM motorcycle lighting programs",
    highlights: [
      "Compact motorcycle light format",
      "Appearance-driven finishing",
      "OEM photos or samples accepted",
    ],
  },
  {
    tag: "Work Lights",
    title: "Compact LED Work Light Programs",
    description:
      "Small LED work light formats for motorcycle accessory lines, utility channels, and private-label lighting projects.",
    image: "/images/led-work-light.png",
    alt: "Compact LED work light suitable for motorcycle and utility lighting programs",
    highlights: [
      "Small lighting product scope",
      "Aluminum housing support",
      "Wholesale and private-label fit",
    ],
  },
  {
    tag: "Housings",
    title: "Aluminum Housing Programs",
    description:
      "Die-cast aluminum lamp housings, rear covers, brackets, caps, and compact lighting-related parts matched to practical manufacturing scope.",
    image: "/images/aluminum-light-housing-heat-sink.png",
    alt: "Aluminum light housings and heat-sink bodies for motorcycle lighting projects",
    highlights: [
      "Small-to-medium aluminum parts",
      "Drilling and tapping support",
      "Surface finishing coordination",
    ],
  },
];

const processSteps: InfoCard[] = [
  {
    title: "Product Photo and Sample Review",
    description:
      "Buyer photos, samples, target size, lighting expectations, mounting style, and packaging plans are reviewed before quotation.",
  },
  {
    title: "Housing and Part Feasibility",
    description:
      "Compact aluminum lamp housings, brackets, covers, and mounting features are checked against the practical 200T / 300T Product Capability Range.",
  },
  {
    title: "Aluminum Die Casting",
    description:
      "Motorcycle lighting housings and lighting-related aluminum parts are produced within small-to-medium aluminum part capacity.",
  },
  {
    title: "Drilling and Tapping",
    description:
      "Mounting holes, threaded features, bracket points, and secondary processing details are supported by multi-axis drilling and tapping equipment.",
  },
  {
    title: "Surface Finishing",
    description:
      "Powder coating, spray painting, anodizing, polishing, and grinding are coordinated around appearance, corrosion resistance, and brand presentation.",
  },
  {
    title: "Inspection and Export Packing",
    description:
      "Appearance, basic dimensions, finish requirements, packing layout, and export delivery needs are checked before shipment.",
  },
];

const finishes: InfoCard[] = [
  {
    title: "Powder Coating",
    description:
      "Durable exterior coverage for motorcycle LED light housings, brackets, covers, and compact aluminum lamp bodies.",
  },
  {
    title: "Spray Painting",
    description:
      "Used when the motorcycle lighting product requires color matching, branded visual presentation, or model-specific appearance.",
  },
  {
    title: "Anodizing",
    description:
      "Suitable for selected aluminum parts needing a clean metallic appearance and improved surface protection.",
  },
  {
    title: "Polishing and Grinding",
    description:
      "Surface preparation for visible aluminum parts before coating, painting, anodizing, or final appearance review.",
  },
];

const buyerFit: InfoCard[] = [
  {
    title: "Motorcycle Accessory Brands",
    description:
      "Motorcycle LED lights, auxiliary lights, and aluminum lamp housing parts for branded accessory product lines.",
  },
  {
    title: "Aftermarket Distributors",
    description:
      "Compact motorcycle lighting products, mounting parts, covers, and lighting accessories for wholesale and distribution channels.",
  },
  {
    title: "Repair and Utility Channels",
    description:
      "LED auxiliary lighting and compact work light programs for motorcycle repair, utility use, and practical accessory markets.",
  },
  {
    title: "OEM Project Buyers",
    description:
      "Custom motorcycle lighting parts developed from buyer drawings, samples, product photos, or OEM project requirements, with direct factory-side communication for sample-stage review, new product development, and small-to-medium batch planning.",
  },
];

const rfqRequirements = [
  "Product photos, drawings, samples, or reference models",
  "Lighting type such as motorcycle auxiliary light, compact LED work light, or custom motorcycle light",
  "Housing dimensions, mounting points, bracket requirements, and assembly needs",
  "Target wattage, voltage, lens, cable, or lighting performance requirements if available",
  "Surface finish such as powder coating, spray painting, anodizing, or polishing",
  "Estimated order quantity, logo request, packaging plan, and target market",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
        {eyebrow}
      </p>
      <h2 className="mt-5 text-3xl font-semibold uppercase tracking-[0.12em] text-white lg:text-5xl">
        {title}
      </h2>
      <p className="mt-6 max-w-4xl text-base leading-8 text-[#d6cdbc] lg:text-lg">
        {description}
      </p>
    </div>
  );
}

function DarkCard({ title, description }: InfoCard) {
  return (
    <article className="rounded-[1.5rem] border border-[#d7b56d]/20 bg-white/[0.035] p-6 shadow-2xl shadow-black/20">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#d7d0c2]">{description}</p>
    </article>
  );
}

export default function MotorcycleLedLightsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 text-sm text-[#d8ccb2] lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href={mailtoMotorcycleRfq}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                  Email
                </span>
                <span>{contactDetails.email}</span>
              </a>
              <a
                href={contactDetails.whatsappHref}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                  WhatsApp
                </span>
                <span>{contactDetails.phone}</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                  WeChat
                </span>
                <span>{contactDetails.wechat}</span>
              </div>
            </div>

            <a
              href={contactDetails.whatsappHref}
              className="flex items-start gap-3 transition-colors hover:text-white"
            >
              <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                Address
              </span>
              <span>{contactDetails.address}</span>
            </a>
          </div>

          <a href={contactDetails.whatsappHref} className="rounded-full bg-[#f4d27a] px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white">
            Get a Quote
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
              Foshan, Guangdong, China
            </p>
            <Link href="/" className="mt-4 block text-3xl font-semibold uppercase tracking-[0.08em] text-white">
              HSX DIECASTING
            </Link>
            <p className="mt-4 text-sm leading-7 text-[#bdb5a8]">
              Motorcycle LED lights, auxiliary lights, compact LED work lights,
              aluminum lamp housings, brackets, covers, and lighting accessories
              for global B2B buyers.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#ddd2ba]" aria-label="Primary">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <Link href="/products" className="transition-colors hover:text-white">Products</Link>
            <Link href="/contact" className="transition-colors hover:text-white">Contact</Link>
            <Link href="/capabilities" className="transition-colors hover:text-white">Capabilities</Link>
            <a href="#programs" className="transition-colors hover:text-white">Programs</a>
            <a href="#process" className="transition-colors hover:text-white">Process</a>
            <a href="#rfq" className="transition-colors hover:text-white">RFQ</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(215,181,109,0.12),transparent_35%),linear-gradient(180deg,#090909_0%,#030303_100%)] px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                Motorcycle LED lighting
              </p>
              <h1 className="mt-7 max-w-5xl text-5xl font-semibold uppercase leading-none tracking-[0.12em] text-white lg:text-7xl">
                Motorcycle LED Lights Supplier for Global B2B Buyers
              </h1>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-[#d7d0c2]">
                HSX DIECASTING supports motorcycle LED lighting programs for
                importers, distributors, accessory brands, repair channels, and
                OEM project buyers. The supply scope includes motorcycle
                auxiliary lights, compact LED work lights, aluminum lamp
                housings, brackets, covers, and custom lighting accessories.
              </p>
              <p className="mt-6 max-w-4xl text-base leading-8 text-[#bfb6a8]">
                Buyers can start from product photos, samples, drawings, size
                requirements, mounting style, LED lighting needs, logo requests,
                finish colors, and packaging plans.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={contactDetails.whatsappHref}
                  className="rounded-full bg-[#f4d27a] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-white"
                >
                  WhatsApp RFQ
                </a>
                <a
                  href={mailtoMotorcycleRfq}
                  className="rounded-full border border-[#d7b56d]/30 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#f4d27a] hover:text-[#f4d27a]"
                >
                  Email Project Details
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <DarkCard key={item.title} {...item} />
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#d7b56d]/25 bg-white/[0.035] p-3 shadow-2xl shadow-black/40">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src="/images/motorcycle-led-auxiliary-light.png"
                  alt="Motorcycle LED auxiliary light product for OEM motorcycle lighting supply"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                    Motorcycle lighting scope
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    Motorcycle LED lights and aluminum lamp housing support
                  </p>
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                    Typical products
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#f4ead8]">
                    Motorcycle auxiliary lights, compact LED work lights,
                    aluminum lamp housings, mounting brackets, rear covers, and
                    custom motorcycle lighting components.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="parts" className="border-b border-white/10 px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Typical motorcycle LED lighting products"
              title="Motorcycle lights, aluminum lamp bodies, brackets, and covers"
              description="This page focuses on motorcycle LED lighting products and compact aluminum lighting-related parts that fit practical B2B sourcing needs for aftermarket and OEM buyers."
            />

            <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="rounded-[2rem] border border-[#d7b56d]/25 bg-white/[0.035] p-3 shadow-2xl shadow-black/40">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src="/images/motorcycle-led-auxiliary-light.png"
                    alt="Motorcycle LED light and compact aluminum lighting part coverage"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                      Motorcycle lighting coverage
                    </p>
                    <p className="mt-3 text-xl font-semibold text-white">
                      Built around compact motorcycle LED lighting, lamp housing,
                      mounting, and export-ready B2B supply.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {productTypes.map((item) => (
                  <DarkCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="border-b border-white/10 bg-[#050505] px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Motorcycle lighting programs"
              title="Product programs for accessory brands and OEM buyers"
              description="These examples help buyers match their project to motorcycle LED light supply, compact LED work lights, and aluminum lighting component support."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {productPrograms.map((program) => (
                <article key={program.title} className="overflow-hidden rounded-[1.5rem] border border-[#d7b56d]/20 bg-white/[0.035] shadow-2xl shadow-black/30">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.alt}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                      {program.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white">{program.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#d7d0c2]">
                      {program.description}
                    </p>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-[#f3ecdd]">
                      {program.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d5ae67]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="border-b border-white/10 px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="rounded-[2rem] border border-[#d7b56d]/25 bg-white/[0.035] p-3 shadow-2xl shadow-black/40">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src="/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg"
                    alt="HSX aluminum die casting workshop for motorcycle LED lighting projects"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                      OEM manufacturing flow
                    </p>
                    <p className="mt-3 text-xl font-semibold text-white">
                      Photos, samples, housing review, die casting, machining,
                      finishing, inspection, and export packing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <DarkCard
                  title="Project Input"
                  description="Product photos, samples, drawings, lighting requirements, and packaging requests can start the RFQ review."
                />
                <DarkCard
                  title="Process Coverage"
                  description="Aluminum die casting, machining, finishing, inspection, and export packing are coordinated for B2B buyers."
                />
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="OEM project support"
                title="From motorcycle lighting RFQ to export-ready supply"
                description="HSX reviews motorcycle LED lighting projects around product requirements, aluminum housing fit, mounting style, surface finish, packaging, and buyer communication before quotation and production planning."
              />

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {processSteps.map((item) => (
                  <DarkCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#050505] px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Surface finishing"
              title="Finishing options for motorcycle LED light housings"
              description="Finishing is planned around appearance, corrosion resistance, brand presentation, and practical motorcycle lighting part requirements."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {finishes.map((item) => (
                <DarkCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Buyer fit"
              title="Built for motorcycle accessory brands, importers, and OEM buyers"
              description="The page is positioned for buyers sourcing motorcycle LED lights, auxiliary lights, aluminum lamp housings, and lighting components with practical factory support and direct export communication."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {buyerFit.map((item) => (
                <DarkCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="rfq" className="border-b border-white/10 bg-[#050505] px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="RFQ requirements"
              title="Send the details needed for accurate motorcycle LED light quotation"
              description="For faster review, buyers should send product photos, lighting requirements, housing details, finish requests, quantity plans, and packaging information."
            />

            <div className="mt-10 rounded-[1.5rem] border border-[#d7b56d]/20 bg-white/[0.035] p-8 shadow-2xl shadow-black/30">
              <ul className="space-y-5 text-base leading-8 text-[#f3ecdd]">
                {rfqRequirements.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d5ae67]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#050505] px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Related product pages"
              title="Explore related motorcycle, automotive, and aluminum product pages"
              description="Motorcycle LED light projects may also connect with automotive LED lights, LED work lights, aluminum light housings, OEM aluminum die casting parts, and decorative appearance covers. These pages help buyers compare related product scope."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <Link
                href="/products/automotive-led-lights"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related product</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Automotive LED Lights
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  OEM automotive LED lights, auxiliary lights, car LED work lights,
                  aluminum lamp housings, brackets, and compact lighting parts.
                </p>
              </Link>

              <Link
                href="/products/led-work-lights"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related product</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  LED Work Lights
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  LED work lights with aluminum housing support for off-road,
                  utility, truck, machinery, and outdoor equipment programs.
                </p>
              </Link>

              <Link
                href="/products/aluminum-light-housings"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related product</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Aluminum Light Housings
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Die cast lamp housings, heat-sink-style bodies, covers, brackets,
                  and compact aluminum lighting components.
                </p>
              </Link>

              <Link
                href="/products/oem-aluminum-die-casting-parts"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related product</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  OEM Aluminum Die Casting Parts
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Small-to-medium aluminum housings, brackets, covers, shells,
                  end caps, and custom hardware accessories.
                </p>
              </Link>

              <Link
                href="/products/decorative-brake-caliper-covers"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related product</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Decorative Brake Caliper Covers
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Non-load-bearing appearance covers installed outside the brake
                  caliper, with color finishing and custom logo support.
                </p>
              </Link>

              <Link
                href="/products"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">All product categories</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Back to Products Overview
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Review the full HSX product scope before sending drawings,
                  samples, photos, quantity, finish, and packaging requirements.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-[#f4d27a] to-[#f8ead0] p-8 text-[#130f08] shadow-2xl shadow-black/30 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                  Final inquiry CTA
                </p>
                <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.12em] lg:text-5xl">
                  Send your motorcycle LED light photos, samples, or OEM project requirements
                </h2>
                <p className="mt-7 max-w-3xl text-base leading-8 text-[#2d2417] lg:text-lg">
                  HSX reviews motorcycle LED lights, auxiliary lights, compact
                  LED work lights, aluminum lamp housings, brackets, covers,
                  and lighting-related aluminum parts for global wholesalers,
                  importers, distributors, accessory brands, and OEM buyers.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={contactDetails.whatsappHref}
                    className="inline-flex items-center justify-center rounded-full bg-[#120f08] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] shadow-lg shadow-black/20 transition hover:bg-black"
                    aria-label="WhatsApp RFQ"
                  >
                    <span className="relative z-10" style={{ color: "#ffffff" }}>
                      WhatsApp RFQ
                    </span>
                  </a>
                  <a
                    href={mailtoMotorcycleRfq}
                    className="rounded-full border border-[#2b2216]/20 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#120f08] hover:text-white"
                  >
                    Email Project Details
                  </a>
                  <Link
                    href="/products"
                    className="rounded-full border border-[#2b2216]/20 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#120f08] hover:text-white"
                  >
                    Back to Products
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-[1.5rem] border border-[#120f08]/10 bg-[#120f08] p-3 shadow-2xl shadow-black/20">
                  <div className="relative overflow-hidden rounded-[1rem]">
                    <img
                      src="/images/motorcycle-led-auxiliary-light.png"
                      alt="Motorcycle LED lighting RFQ ready product image"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                        RFQ ready
                      </p>
                      <p className="mt-3 text-xl font-semibold leading-7 text-white">
                        Send photos, samples, lighting requirements, finish
                        needs, and target quantity for motorcycle LED light
                        review.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] bg-white/55 p-6 text-sm leading-7 text-[#2d2417]">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#5b4520]">
                    Direct contact
                  </p>
                  <div className="mt-5 space-y-4">
                    <p><span className="font-semibold">Email:</span> {contactDetails.email}</p>
                    <p><span className="font-semibold">WhatsApp / Phone:</span> {contactDetails.phone}</p>
                    <p><span className="font-semibold">WeChat:</span> {contactDetails.wechat}</p>
                    <p><span className="font-semibold">Address:</span> {contactDetails.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black px-6 py-12 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
              Footer
            </p>
            <p className="mt-4 text-3xl font-semibold uppercase tracking-[0.08em] text-white">
              Foshan Huashunxiang Hardware Products Factory
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#bdb5a8]">
              Motorcycle LED lights, auxiliary lights, compact LED work lights,
              aluminum lamp housings, brackets, covers, and lighting-related
              aluminum parts for global wholesalers, importers, distributors,
              accessory brands, and OEM buyers.
            </p>
          </div>

          <div className="text-sm leading-7 text-[#b7ae9e]">
            <p>
              <span className="text-white/90">Email:</span>{" "}
              <a href={mailtoMotorcycleRfq} className="transition-colors hover:text-white">
                {contactDetails.email}
              </a>
            </p>
            <p>
              <span className="text-white/90">WhatsApp / Phone:</span>{" "}
              <a href={contactDetails.whatsappHref} className="transition-colors hover:text-white">
                {contactDetails.phone}
              </a>
            </p>
            <p>
              <span className="text-white/90">WeChat:</span>{" "}
              {contactDetails.wechat}
            </p>
            <p>
              <span className="text-white/90">Address:</span>{" "}
              {contactDetails.address}
            </p>
            <p>Small-to-medium aluminum parts within the 200T / 300T Product Capability Range</p>
            <p>OEM based on photos, drawings, samples, or custom project requirements</p>
            <p className="mt-2">
              © {currentYear} HSX DIECASTING. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
