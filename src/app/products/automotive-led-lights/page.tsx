import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../../components/site-navigation";

import automotiveLedLight from "../../../../public/images/automotive-led-light.png";
import ledWorkLight from "../../../../public/images/led-work-light.png";
import oemAluminumParts from "../../../../public/images/oem-small-aluminum-die-casting-parts.png";
import sprayPainting from "../../../../public/images/hsx-factory/in-house-spray-painting-aluminum-parts.jpg";

type InfoCard = {
  title: string;
  description: string;
};

type ProductProgram = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  tag: string;
  highlights: string[];
};

const pageTitle =
  "Automotive LED Lights Supplier | OEM Car LED Lighting | HSX DIECASTING";

const pageDescription =
  "HSX DIECASTING supplies OEM automotive LED lights, car LED work lights, auxiliary lights, aluminum lamp housings, brackets, covers, and compact lighting parts.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/products/automotive-led-lights",
  },
  keywords: [
    "automotive LED lights supplier",
    "OEM car LED lights",
    "car LED work lights",
    "automotive auxiliary LED lights",
    "aluminum LED light housings",
    "automotive aftermarket LED lighting",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/products/automotive-led-lights",
    images: [
      {
        url: "/images/automotive-led-work-light.png",
        alt: "Automotive LED work light for global wholesalers and OEM buyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/automotive-led-work-light.png"],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "OEM Automotive LED Lighting Manufacturing Service",
  url: "https://www.hsxdiecasting.com/products/automotive-led-lights",
  image: ["https://www.hsxdiecasting.com/images/automotive-led-work-light.png"],
  description:
    "B2B OEM manufacturing service for automotive LED lights, auxiliary lights, car LED work lights, aluminum lamp housings, brackets, covers, and compact lighting parts for wholesale and aftermarket buyers.",
  provider: {
    "@type": "Organization",
    name: "Foshan Huashunxiang Hardware Products Factory",
    url: "https://www.hsxdiecasting.com",
  },
  serviceType: "OEM automotive LED lighting manufacturing",
  areaServed: "Global B2B Markets",
  category: "Automotive LED lighting manufacturing",
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  phone: "+86 176 6615 5283",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20your%20automotive%20LED%20lights%2C%20car%20LED%20work%20lights%2C%20or%20aluminum%20lighting%20housings.%20Please%20contact%20me%20with%20quotation%20details.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const heroStats = [
  {
    label: "Product Focus",
    value: "Car LED",
    note: "Automotive LED work lights, auxiliary lights, and aluminum lighting components",
  },
  {
    label: "OEM Input",
    value: "Photos + Samples",
    note: "Buyer photos, samples, drawings, size needs, finish requests, and packaging plans accepted",
  },
  {
    label: "Factory Support",
    value: "Cast + Finish",
    note: "In-house aluminum die casting, drilling, tapping, polishing, coating, and painting, with partner-supported anodizing for selected suitable parts",
  },
];

const typicalProducts: InfoCard[] = [
  {
    title: "Car LED Work Lights",
    description:
      "Compact automotive LED work lights for utility, off-road, service vehicle, and aftermarket accessory programs.",
  },
  {
    title: "Auxiliary Driving Lights",
    description:
      "Auxiliary automotive lighting products for car accessory channels, distributors, and private-label programs.",
  },
  {
    title: "Aluminum Lamp Bodies",
    description:
      "Die-cast aluminum lamp bodies and housings with heat-dissipation-friendly geometry and practical mounting features.",
  },
  {
    title: "Rear Covers and End Caps",
    description:
      "Compact aluminum covers, closure parts, and end caps used in lighting assemblies and custom lamp body projects.",
  },
  {
    title: "Mounting Brackets",
    description:
      "Aluminum brackets and support pieces with drilling, tapping, and appearance finishing support for vehicle lighting installation.",
  },
  {
    title: "Custom Lighting Components",
    description:
      "Buyer-defined automotive lighting parts developed from drawings, samples, photos, or project requirements.",
  },
];

const productPrograms: ProductProgram[] = [
  {
    title: "Automotive LED Work Light Programs",
    description:
      "LED work lights for utility vehicles, off-road equipment, maintenance channels, and automotive accessory distributors.",
    image: ledWorkLight,
    alt: "Automotive LED work light for utility vehicle and aftermarket lighting programs",
    tag: "Work Lights",
    highlights: [
      "Compact LED light formats",
      "Aluminum housing support",
      "Wholesale and private-label fit",
    ],
  },
  {
    title: "Auxiliary Vehicle Light Programs",
    description:
      "Auxiliary driving lights and vehicle LED lighting products for aftermarket brands, importers, and distributors.",
    image: automotiveLedLight,
    alt: "Automotive auxiliary LED light with aluminum lighting housing",
    tag: "Automotive",
    highlights: [
      "Car accessory channel supply",
      "Lamp body and cover support",
      "OEM color and packaging needs",
    ],
  },
  {
    title: "Aluminum Housing Programs",
    description:
      "Die-cast aluminum lamp housings, rear covers, brackets, and lighting-related parts matched to compact manufacturing scope.",
    image: oemAluminumParts,
    alt: "Compact aluminum die casting parts for automotive LED lighting housings",
    tag: "Housings",
    highlights: [
      "Small-to-medium aluminum parts",
      "Drilling and tapping support",
      "Surface finishing coordination",
    ],
  },
];

const manufacturingFlow: InfoCard[] = [
  {
    title: "Product Photo and Sample Review",
    description:
      "Buyer photos, samples, target size, wattage requirements, installation needs, and packaging expectations are reviewed before quoting.",
  },
  {
    title: "Housing and Part Feasibility",
    description:
      "Compact aluminum lamp housings, brackets, covers, and mounting features are reviewed for manufacturing fit based on part structure, dimensions, and project requirements.",
  },
  {
    title: "Aluminum Die Casting",
    description:
      "Automotive LED light housings and lighting-related aluminum parts are produced within small-to-medium aluminum part capacity.",
  },
  {
    title: "Drilling and Tapping",
    description:
      "Mounting holes, threaded features, bracket points, and secondary processing details are supported by multi-axis drilling and tapping equipment.",
  },
  {
    title: "Surface Finishing",
    description:
      "In-house powder coating, spray painting, polishing, and surface preparation are coordinated with partner-supported anodizing around appearance, corrosion resistance, and brand presentation.",
  },
  {
    title: "Inspection and Export Packing",
    description:
      "Appearance, basic dimensions, finish requirements, packing layout, and export delivery needs are checked before shipment.",
  },
];

const finishingOptions: InfoCard[] = [
  {
    title: "Powder Coating",
    description:
      "Durable exterior coverage for automotive LED light housings, brackets, covers, and compact aluminum lamp bodies.",
  },
  {
    title: "Spray Painting",
    description:
      "Used when the lighting product requires color matching, branded visual presentation, or model-specific appearance.",
  },
  {
    title: "Partner-Supported Anodizing",
    description:
      "Anodizing can be coordinated through partner-supported resources for selected suitable aluminum parts when required by the project.",
  },
  {
    title: "Polishing and Surface Preparation",
    description:
      "Surface preparation for visible aluminum parts before coating, painting, partner-supported anodizing, or final appearance review.",
  },
];

const buyerFit: InfoCard[] = [
  {
    title: "Automotive Accessory Brands",
    description:
      "Automotive LED lights, auxiliary lights, and lamp housing parts for branded accessory product lines.",
  },
  {
    title: "Aftermarket Distributors",
    description:
      "Car LED work lights, mounting parts, covers, and lighting accessories for wholesale and distribution channels.",
  },
  {
    title: "Off-road and Utility Channels",
    description:
      "LED work lights and auxiliary lighting programs for utility vehicles, service vehicles, and off-road accessory markets.",
  },
  {
    title: "OEM Project Buyers",
    description:
      "Custom automotive lighting parts developed from buyer drawings, samples, product photos, or OEM project requirements, with direct factory-side communication for sample-stage review, new product development, and small-to-medium batch planning.",
  },
];

const rfqRequirements = [
  "Product photos, drawings, samples, or reference models",
  "Lighting type such as LED work light, auxiliary light, or custom vehicle light",
  "Housing dimensions, mounting points, bracket requirements, and assembly needs",
  "Target wattage, voltage, lens, cable, or lighting performance requirements if available",
  "Surface finish such as powder coating, spray painting, polishing, or partner-supported anodizing",
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
    <div className="max-w-3xl">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-heading mt-4 text-3xl text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#c9c1b2] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function AutomotiveLedLightsPage() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="border-b border-white/8 bg-black/85">
        <div className="container-shell flex flex-col gap-3 py-3 text-sm text-[#d8ccb2] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href={`mailto:${contactDetails.email}?subject=RFQ%20for%20Automotive%20LED%20Lights&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20automotive%20LED%20lights.%0A%0AProduct%20type%3A%0AQuantity%3A%0AHousing%20size%3A%0ALighting%20requirement%3A%0AFinish%20/%20packaging%20request%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
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
              href="/contact"
              className="flex items-start gap-3 transition-colors hover:text-white"
            >
              <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                Address
              </span>
              <span>{contactDetails.address}</span>
            </a>
          </div>
          <Link
            href="/b2b-oem-project-review"
            className="gold-button w-full text-center sm:w-auto"
          >
            Request Project Review
          </Link>
        </div>
      </div>

      <SiteHeader />

      <main id="top">
        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.14),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
          <div className="container-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:py-24">
            <div className="motion-rise">
              <p className="section-kicker">Automotive LED lighting</p>
              <h1 className="section-heading mt-6 text-4xl leading-none text-white sm:text-5xl xl:text-6xl">
                Automotive LED Lights Supplier for Global OEM and Aftermarket Buyers
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                HSX DIECASTING supplies OEM automotive LED lights, car LED work
                lights, auxiliary lights, aluminum lamp housings, brackets,
                covers, and compact lighting-related aluminum parts for
                wholesalers, importers, distributors, aftermarket brands, and
                OEM buyers.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#c7beaf]">
                Buyers can start from product photos, samples, drawings, size
                requirements, LED lighting needs, logo requests, finish colors,
                and packaging plans.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={contactDetails.whatsappHref} className="gold-button text-center">
                  WhatsApp RFQ
                </a>
                <a
                  href={`mailto:${contactDetails.email}?subject=RFQ%20for%20Automotive%20LED%20Lights&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20automotive%20LED%20lights.%0A%0AProduct%20type%3A%0AQuantity%3A%0AHousing%20size%3A%0ALighting%20requirement%3A%0AFinish%20/%20packaging%20request%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
                  className="outline-button text-center"
                >
                  Email Project Details
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <article key={stat.label} className="metric-pill">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#bdb5a8]">
                      {stat.note}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="motion-rise-delay">
              <div className="industrial-card gold-frame relative overflow-hidden rounded-[2rem] p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={automotiveLedLight}
                    alt="Automotive LED light with compact aluminum lighting housing for OEM and aftermarket buyers"
                    fill
                    preload
                    sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/15 to-black/80" />
                  <div className="absolute left-5 top-5 rounded-2xl border border-white/12 bg-black/55 px-4 py-3 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                      Automotive lighting scope
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Car LED lights and aluminum lamp body support
                    </p>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                      Typical products
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                      Car LED work lights, auxiliary lights, lamp bodies,
                      aluminum housings, mounting brackets, rear covers, and
                      custom automotive lighting components.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Typical automotive LED lighting products"
              title="Car LED lights, aluminum lamp bodies, brackets, and covers"
              description="This page focuses on automotive LED lighting products and compact aluminum lighting-related parts that fit practical B2B sourcing needs for aftermarket and OEM buyers."
            />

            <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
              <div className="industrial-card gold-frame overflow-hidden p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={automotiveLedLight}
                    alt="Automotive LED light product for wholesale and OEM automotive lighting programs"
                    fill
                    sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                    <p className="section-kicker">Automotive lighting coverage</p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      Built around car LED lighting, aluminum lamp housing
                      support, mounting features, and export-ready B2B supply.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {typicalProducts.map((part, index) => (
                  <article key={`${part.title}-${index}`} className="industrial-card p-6">
                    <h2 className="text-2xl font-semibold text-white">
                      {part.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                      {part.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,1)_100%)] py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Automotive lighting programs"
              title="Product programs for aftermarket and OEM buyers"
              description="These examples help buyers match their project to automotive LED light supply, auxiliary lighting products, and compact aluminum lighting component support."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {productPrograms.map((program, index) => (
                <article
                  key={`${program.title}-${index}`}
                  className="industrial-card group overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.alt}
                      fill
                      sizes="(min-width: 1024px) 28rem, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#efcf8d]">
                      {program.tag}
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-white">
                      {program.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
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

        <section id="process" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <div className="space-y-4">
              <div className="industrial-card gold-frame overflow-hidden p-3">
                <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={sprayPainting}
                    alt="In-house spray painting of aluminum parts at HSX DIECASTING"
                    fill
                    sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                    <p className="section-kicker">OEM manufacturing flow</p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      Photos, samples, housing review, die casting, machining,
                      finishing, inspection, and export packing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Project input
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    Photos + Drawings
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    Product photos, samples, drawings, lighting requirements,
                    and packaging requests can start the RFQ review.
                  </p>
                </article>
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Process coverage
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    Cast to Pack
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    Aluminum die casting, machining, finishing, inspection, and
                    export packing are coordinated for B2B buyers.
                  </p>
                </article>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="OEM project support"
                title="From automotive lighting RFQ to export-ready supply"
                description="HSX reviews automotive LED lighting projects around product requirements, aluminum housing fit, surface finish, packaging, and buyer communication before quotation and production planning."
              />

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {manufacturingFlow.map((item, index) => (
                  <article key={`${item.title}-${index}`} className="industrial-card p-6">
                    <h2 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(199,162,91,0.11),transparent_28%),linear-gradient(180deg,#0c0c0c_0%,#070707_100%)] py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Surface finishing"
              title="Finishing options for automotive LED light housings"
              description="Finishing is planned around appearance, corrosion resistance, brand presentation, and practical automotive lighting part requirements."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {finishingOptions.map((finish, index) => (
                <article key={`${finish.title}-${index}`} className="industrial-card p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {finish.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                    {finish.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Buyer fit"
              title="Built for automotive aftermarket brands, importers, and OEM buyers"
              description="The page is positioned for buyers sourcing automotive LED lights, auxiliary lights, aluminum lamp housings, and lighting components with practical factory support and direct export communication."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {buyerFit.map((buyer, index) => (
                <article key={`${buyer.title}-${index}`} className="industrial-card p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {buyer.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                    {buyer.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="rfq" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="RFQ requirements"
              title="Send the details needed for accurate automotive LED light quotation"
              description="For faster review, buyers should send product photos, lighting requirements, housing details, finish requests, quantity plans, and packaging information."
            />

            <div className="mt-10 industrial-card p-6 sm:p-8">
              <ul className="space-y-4 text-base leading-8 text-[#efe7d9]">
                {rfqRequirements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Related product pages"
              title="Explore related automotive lighting and aluminum product pages"
              description="Automotive LED light programs often need aluminum lamp housings, brackets, covers, heat-sink-style parts, LED work lights, motorcycle LED lighting, and OEM aluminum die casting support. These related pages help buyers review connected product categories."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <Link
                href="/products/aluminum-light-housings"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related product</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Aluminum Light Housings
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Die cast lamp housings, heat-sink-style bodies, covers, brackets, and compact aluminum lighting components.
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
                  LED work lights with aluminum housing support for off-road, utility, truck, machinery, and outdoor equipment programs.
                </p>
              </Link>

              <Link
                href="/products/motorcycle-led-lights"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related product</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Motorcycle LED Lights
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Motorcycle LED lights, auxiliary lighting, compact aluminum housings, brackets, covers, and private-label lighting support.
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
                  Small-to-medium aluminum housings, brackets, covers, shells, end caps, and custom hardware accessories.
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
                  Non-load-bearing appearance covers installed outside the brake caliper, with color finishing and custom logo support.
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

        <section className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="gold-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
                <div>
                  <p className="section-kicker">Final inquiry CTA</p>
                  <h2 className="section-heading mt-4 text-3xl text-[#120f08] sm:text-4xl">
                    Send your automotive LED light photos, samples, or OEM project requirements
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#2d2417] sm:text-lg">
                    HSX reviews automotive LED lights, car LED work lights,
                    auxiliary lights, aluminum lamp housings, brackets, covers,
                    and lighting-related aluminum parts for global wholesalers,
                    importers, distributors, aftermarket brands, and OEM buyers.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <a
                      href={contactDetails.whatsappHref}
                      className="rounded-full bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      WhatsApp RFQ
                    </a>
                    <a
                      href={`mailto:${contactDetails.email}?subject=RFQ%20for%20Automotive%20LED%20Lights&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20automotive%20LED%20lights.%0A%0AProduct%20type%3A%0AQuantity%3A%0AHousing%20size%3A%0ALighting%20requirement%3A%0AFinish%20/%20packaging%20request%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
                      className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                    >
                      Email Project Details
                    </a>
                    <Link
                      href="/products"
                      className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                    >
                      Back to Products
                    </Link>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="overflow-hidden rounded-[1.5rem] border border-[#2b2216]/15 bg-[#120f08] p-3 shadow-[0_18px_48px_rgba(18,15,8,0.22)]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                      <Image
                        src={automotiveLedLight}
                        alt="Automotive LED light ready for RFQ review"
                        fill
                        sizes="(min-width: 1024px) 32rem, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#efcf8d]">
                          RFQ ready
                        </p>
                        <p className="mt-2 text-lg font-semibold leading-7 text-white">
                          Send photos, samples, lighting requirements, finish
                          needs, and target quantity for automotive LED light
                          review.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-[#2b2216]/15 bg-white/55 p-6 backdrop-blur">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5f4a28]">
                      Direct contact
                    </p>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-[#2c2316]">
                      <p>
                        <span className="font-semibold">Email: </span>
                        <a
                          href={`mailto:${contactDetails.email}?subject=RFQ%20for%20Automotive%20LED%20Lights&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20automotive%20LED%20lights.%0A%0AProduct%20type%3A%0AQuantity%3A%0AHousing%20size%3A%0ALighting%20requirement%3A%0AFinish%20/%20packaging%20request%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
                          className="transition-colors hover:text-[#120f08]"
                        >
                          {contactDetails.email}
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">WhatsApp / Phone: </span>
                        <a
                          href={contactDetails.whatsappHref}
                          className="transition-colors hover:text-[#120f08]"
                        >
                          {contactDetails.phone}
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">WeChat: </span>
                        {contactDetails.wechat}
                      </p>
                      <p>
                        <span className="font-semibold">Address: </span>
                        {contactDetails.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
