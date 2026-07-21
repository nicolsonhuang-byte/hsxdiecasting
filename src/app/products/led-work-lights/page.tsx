import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import ledWorkLight from "../../../../public/images/led-work-light.png";
import oemAluminumParts from "../../../../public/images/oem-small-aluminum-die-casting-parts.png";
import workshopHorizontal from "../../../../public/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg";

type CardItem = {
  title: string;
  description: string;
};

type ProgramCard = {
  label: string;
  title: string;
  description: string;
  bullets: string[];
  image: StaticImageData;
  alt: string;
};

const pageTitle =
  "LED Work Lights Supplier | OEM LED Work Lights & Housings";

const pageDescription =
  "HSX DIECASTING supplies OEM LED work lights, off-road lights, truck work lights, machinery work lights, and aluminum LED work light housings.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/products/led-work-lights",
  },
  keywords: [
    "LED work lights supplier",
    "LED work light manufacturer China",
    "OEM LED work lights",
    "off-road LED work lights",
    "truck LED work lights",
    "aluminum LED work light housing",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/products/led-work-lights",
    images: [
      {
        url: "/images/led-work-light.png",
        alt: "LED work light with aluminum housing supplied by HSX DIECASTING",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/led-work-light.png"],
  },
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  phone: "+86 176 6615 5283",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20would%20like%20to%20request%20a%20quotation%20for%20LED%20work%20lights.%20Please%20contact%20me%20with%20pricing%20and%20production%20details.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const mailtoLedRfq =
  "mailto:nicolson@hsxdiecasting.com?subject=RFQ%20for%20LED%20Work%20Lights&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20LED%20work%20lights.%0A%0AProduct%20type%3A%0AQuantity%3A%0AWattage%20or%20lighting%20requirement%3A%0AHousing%20size%20or%20drawing%3A%0AFinish%20/%20packaging%20request%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C";

const heroStats = [
  {
    label: "Product focus",
    value: "Work Lights",
    note: "LED work lights, off-road lights, truck lights, and compact lighting products",
  },
  {
    label: "Product Capability Range",
    value: "200T / 300T",
    note: "Compact aluminum housings, brackets, covers, and heat-sink style parts",
  },
  {
    label: "Finish support",
    value: "Coat + Paint",
    note: "In-house powder coating, spray painting, and polishing, with partner-supported anodizing for selected suitable parts",
  },
];

const productTypes: CardItem[] = [
  {
    title: "Off-road LED Work Lights",
    description:
      "Compact LED work lights for off-road vehicles, utility equipment, outdoor use, and accessory distribution programs.",
  },
  {
    title: "Truck LED Work Lights",
    description:
      "Truck work lights and auxiliary lighting products for aftermarket brands, importers, and wholesale channels.",
  },
  {
    title: "Machinery Work Lights",
    description:
      "Lighting products for agricultural machinery, construction equipment, field-use vehicles, and industrial equipment lines.",
  },
  {
    title: "Aluminum Lamp Housings",
    description:
      "Die-cast aluminum housings, covers, brackets, and heat-dissipation focused parts for compact LED lighting products.",
  },
  {
    title: "Custom Lighting Components",
    description:
      "Buyer-defined LED work light parts developed from product photos, drawings, samples, or OEM project requirements.",
  },
  {
    title: "Private-label Work Light Programs",
    description:
      "OEM support for lighting brands needing product review, finish color, packaging, logo, and export-ready communication.",
  },
];

const productPrograms: ProgramCard[] = [
  {
    label: "Off-road",
    title: "Off-road LED Work Light Programs",
    description:
      "LED work lights for utility vehicles, off-road equipment, maintenance channels, and aftermarket accessory buyers.",
    bullets: [
      "Compact LED light formats",
      "Aluminum housing support",
      "Wholesale and private-label fit",
    ],
    image: ledWorkLight,
    alt: "Off-road LED work light for utility and equipment lighting programs",
  },
  {
    label: "Truck",
    title: "Truck and Utility Light Programs",
    description:
      "Truck LED work lights, auxiliary lights, and compact lamp body support for vehicle accessory distributors.",
    bullets: [
      "Truck accessory channel supply",
      "Lamp body and cover support",
      "OEM color and packaging needs",
    ],
    image: ledWorkLight,
    alt: "Truck LED work light and utility lighting product support",
  },
  {
    label: "Housings",
    title: "Aluminum Housing Programs",
    description:
      "Die-cast aluminum lamp housings, rear covers, brackets, and compact lighting-related parts matched to practical manufacturing scope.",
    bullets: [
      "Small-to-medium aluminum parts",
      "Drilling and tapping support",
      "Surface finishing coordination",
    ],
    image: oemAluminumParts,
    alt: "Aluminum LED work light housing and compact die casting parts",
  },
];

const processSteps: CardItem[] = [
  {
    title: "Product Photo and Sample Review",
    description:
      "Buyer photos, samples, target size, wattage requirements, beam use, and packaging expectations are reviewed before quotation.",
  },
  {
    title: "Housing and Part Feasibility",
    description:
      "Compact aluminum lamp housings, brackets, covers, and mounting features are checked against the practical 200T / 300T Product Capability Range.",
  },
  {
    title: "Aluminum Die Casting",
    description:
      "LED work light housings and lighting-related aluminum parts are produced within small-to-medium aluminum part capacity.",
  },
  {
    title: "Drilling and Tapping",
    description:
      "Mounting holes, threaded features, bracket points, and secondary processing details are supported by multi-axis drilling and tapping equipment.",
  },
  {
    title: "Surface Finishing",
    description:
      "In-house powder coating, spray painting, and polishing are coordinated around appearance, corrosion resistance, and brand presentation. Anodizing can be coordinated through partner-supported resources for selected suitable parts.",
  },
  {
    title: "Inspection and Export Packing",
    description:
      "Appearance, basic dimensions, finish requirements, packing layout, and export delivery needs are checked before shipment.",
  },
];

const finishingOptions: CardItem[] = [
  {
    title: "Powder Coating",
    description:
      "Durable exterior coverage for LED work light housings, brackets, covers, and compact aluminum lamp bodies.",
  },
  {
    title: "Spray Painting",
    description:
      "Used when the LED lighting product requires color matching, branded visual presentation, or model-specific appearance.",
  },
  {
    title: "Partner-Supported Anodizing",
    description:
      "Anodizing can be coordinated through partner-supported resources for selected suitable parts.",
  },
  {
    title: "Polishing and Surface Preparation",
    description:
      "In-house polishing and surface preparation for visible aluminum parts before coating, painting, partner-supported anodizing, or final appearance review.",
  },
];

const buyerFit: CardItem[] = [
  {
    title: "Off-road Accessory Brands",
    description:
      "LED work lights and compact aluminum lamp housings for branded vehicle accessory product lines.",
  },
  {
    title: "Truck Accessory Distributors",
    description:
      "Truck work lights, auxiliary lights, mounting parts, covers, and lighting accessories for wholesale and distribution channels.",
  },
  {
    title: "Machinery Equipment Suppliers",
    description:
      "Work light programs for agricultural machinery, construction equipment, utility vehicles, and field-use equipment channels.",
  },
  {
    title: "OEM Project Buyers",
    description:
      "Custom LED work light parts developed from buyer drawings, samples, product photos, or OEM project requirements, with direct factory-side communication for sample-stage review, new product development, and small-to-medium batch planning.",
  },
];

const rfqRequirements = [
  "Product photos, drawings, samples, or reference models",
  "Lighting type such as off-road light, truck work light, machinery work light, or custom LED light",
  "Target wattage, voltage, beam use, lens, cable, or lighting performance requirements if available",
  "Housing dimensions, bracket points, mounting requirements, and assembly needs",
  "Surface finish such as powder coating, spray painting, partner-supported anodizing, or polishing",
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
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-heading mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#c9c1b2] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function LedWorkLightsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative overflow-x-clip bg-black text-white">
      <div className="border-b border-white/8 bg-black/85">
        <div className="container-shell flex flex-col gap-3 py-3 text-sm text-[#d8ccb2] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a href={mailtoLedRfq} className="flex items-center gap-3 transition-colors hover:text-white">
                <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                  Email
                </span>
                <span>{contactDetails.email}</span>
              </a>
              <a href={contactDetails.whatsappHref} className="flex items-center gap-3 transition-colors hover:text-white">
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
            <div className="flex items-start gap-3">
              <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                Address
              </span>
              <span>{contactDetails.address}</span>
            </div>
          </div>
          <a href={contactDetails.whatsappHref} className="gold-button w-full text-center sm:w-auto">
            Get a Quote
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#050505]/88 backdrop-blur-xl">
        <div className="container-shell flex flex-col gap-5 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-kicker">Foshan, Guangdong, China</p>
            <Link href="/" className="section-heading mt-3 block text-2xl text-white sm:text-3xl">
              HSX DIECASTING
            </Link>
            <p className="mt-3 text-sm leading-7 text-[#beb6a8]">
              LED work lights, off-road lights, truck lights, machinery work lights,
              aluminum lamp housings, brackets, covers, and lighting-related aluminum
              parts for global B2B buyers.
            </p>
          </div>

          <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#ddd2ba]">
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

      <main id="top">
        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.14),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
          <div className="container-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:py-24">
            <div className="motion-rise">
              <p className="section-kicker">LED work lighting</p>
              <h1 className="section-heading mt-6 text-5xl leading-none text-white sm:text-6xl xl:text-7xl">
                LED Work Lights Supplier for Global B2B Buyers
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d4cdc0]">
                HSX DIECASTING supplies LED work lights, off-road LED work lights,
                truck LED work lights, machinery work lights, and related aluminum
                die-cast housings for global wholesalers, importers, distributors,
                lighting brands, and OEM buyers.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#c7beaf]">
                Buyers can start from product photos, samples, drawings, wattage
                requirements, housing size, finish colors, logo requests, and packaging plans.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={contactDetails.whatsappHref} className="gold-button text-center">
                  WhatsApp RFQ
                </a>
                <a href={mailtoLedRfq} className="outline-button text-center">
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
                    src={ledWorkLight}
                    alt="LED work lights and aluminum lamp housing support"
                    fill
                    preload
                    sizes="(min-width: 1280px) 44rem, (min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/15 to-black/80" />
                  <div className="absolute left-5 top-5 rounded-2xl border border-white/12 bg-black/60 px-4 py-3 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                      LED work light scope
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Work lights and aluminum housing support
                    </p>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                      Typical products
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                      LED work lights, off-road lights, truck lights, machinery work lights,
                      aluminum housings, brackets, rear covers, and compact lighting parts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Typical LED work light products"
                title="LED work lights, aluminum lamp bodies, brackets, and covers"
                description="This page focuses on LED work lighting products and compact aluminum lighting-related parts that fit practical B2B sourcing needs for wholesale and OEM buyers."
              />
              <div className="mt-10 industrial-card gold-frame overflow-hidden p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={ledWorkLight}
                    alt="LED work light products and compact aluminum lamp bodies"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                    <p className="section-kicker">Work light coverage</p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      Built around compact LED lighting, aluminum lamp housing support,
                      mounting features, and export-ready B2B supply.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {productTypes.map((item) => (
                <article key={item.title} className="industrial-card p-6">
                  <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="LED work light programs"
              title="Product programs for off-road, truck, machinery, and OEM buyers"
              description="These examples help buyers match their project to LED work light supply, auxiliary lighting products, and compact aluminum lighting component support."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {productPrograms.map((program) => (
                <article key={program.title} className="industrial-card group overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-black/65 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#efcf8d]">
                      {program.label}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-white">{program.title}</h2>
                    <p className="mt-5 text-sm leading-7 text-[#cac1b2]">{program.description}</p>
                    <ul className="mt-6 space-y-3 text-sm text-[#efe7d9]">
                      {program.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4ac67]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(199,162,91,0.11),transparent_28%),linear-gradient(180deg,#0c0c0c_0%,#070707_100%)] py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <div className="space-y-6">
              <div className="industrial-card gold-frame overflow-hidden p-3">
                <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={workshopHorizontal}
                    alt="HSX aluminum die casting workshop for LED work light housing projects"
                    fill
                    sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                    <p className="section-kicker">OEM manufacturing flow</p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      Photos, samples, housing review, die casting,
                      partner-supported machining when required, finishing,
                      inspection, and export packing.
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
                    Photos + Specs
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    Product photos, samples, drawings, wattage requirements,
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
                    Aluminum die casting, partner-supported machining when
                    required, finishing, inspection, and export packing are
                    coordinated for B2B buyers.
                  </p>
                </article>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="OEM project support"
                title="From LED work light RFQ to export-ready supply"
                description="HSX reviews LED work light projects around product requirements, aluminum housing fit, surface finish, packaging, and buyer communication before quotation and production planning."
              />

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {processSteps.map((item) => (
                  <article key={item.title} className="industrial-card p-6">
                    <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-[#cac1b2]">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Surface finishing"
              title="Finishing options for LED work light housings"
              description="Finishing is planned around appearance, corrosion resistance, brand presentation, and practical LED work light part requirements."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {finishingOptions.map((item) => (
                <article key={item.title} className="industrial-card p-6">
                  <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Buyer fit"
              title="Built for off-road brands, truck accessory buyers, machinery suppliers, and OEM buyers"
              description="The page is positioned for buyers sourcing LED work lights, auxiliary lights, aluminum lamp housings, and lighting components with practical factory support and direct export communication."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {buyerFit.map((item) => (
                <article key={item.title} className="industrial-card p-6">
                  <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#cbc3b4]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="rfq" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="RFQ requirements"
              title="Send the details needed for accurate LED work light quotation"
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
              title="Explore related LED lighting and aluminum housing product pages"
              description="LED work light programs often connect with aluminum light housings, automotive LED lights, motorcycle LED lights, OEM aluminum die casting parts, and decorative appearance covers. These pages help buyers compare connected product categories."
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
                href="/products/automotive-led-lights"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related product</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Automotive LED Lights
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  OEM automotive LED lights, auxiliary lights, car LED work lights, aluminum lamp housings, brackets, and compact lighting parts.
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
                  <h2 className="section-heading mt-5 text-4xl font-semibold uppercase tracking-[0.12em] text-[#120f08] lg:text-5xl">
                    Send your LED work light photos, samples, or OEM project requirements
                  </h2>
                  <p className="mt-7 max-w-3xl text-base leading-8 text-[#2d2417] lg:text-lg">
                    HSX reviews LED work lights, off-road LED work lights, truck LED work lights,
                    machinery work lights, aluminum lamp housings, brackets, covers, and
                    lighting-related aluminum parts for global wholesalers, importers, distributors,
                    accessory brands, and OEM buyers.
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
                      href={mailtoLedRfq}
                      className="rounded-full border border-[#2b2216]/20 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#120f08] transition hover:bg-[#120f08] hover:text-white"
                    >
                      Email Project Details
                    </a>
                    <Link
                      href="/products"
                      className="rounded-full border border-[#2b2216]/20 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#120f08] transition hover:bg-[#120f08] hover:text-white"
                    >
                      Back to Products
                    </Link>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="overflow-hidden rounded-[1.5rem] border border-[#2b2216]/15 bg-[#120f08] p-3 shadow-[0_18px_48px_rgba(18,15,8,0.22)]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                      <Image
                        src={ledWorkLight}
                        alt="LED work light ready for OEM quotation and wholesale supply review"
                        fill
                        sizes="(min-width: 1024px) 26rem, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#efcf8d]">
                          RFQ ready
                        </p>
                        <p className="mt-3 text-lg font-semibold text-white">
                          Send photos, samples, lighting requirements, finish needs,
                          and target quantity for LED work light review.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-[#2b2216]/15 bg-white/55 p-6 backdrop-blur">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5f4a28]">
                      Direct contact
                    </p>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-[#2c2316]">
                      <p><span className="font-semibold">Email: </span>{contactDetails.email}</p>
                      <p><span className="font-semibold">WhatsApp / Phone: </span>{contactDetails.phone}</p>
                      <p><span className="font-semibold">WeChat: </span>{contactDetails.wechat}</p>
                      <p><span className="font-semibold">Address: </span>{contactDetails.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-black/80 py-10">
        <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="section-kicker">Footer</p>
            <p className="mt-4 text-3xl font-semibold uppercase tracking-[0.08em] text-white">
              Foshan Huashunxiang Hardware Products Factory
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#bdb5a8]">
              LED work lights, off-road LED work lights, truck LED work lights,
              machinery work lights, aluminum lamp housings, brackets, covers,
              and lighting-related aluminum parts for global wholesalers,
              importers, distributors, accessory brands, and OEM buyers.
            </p>
          </div>

          <div className="text-sm leading-7 text-[#b7ae9e]">
            <p>
              <span className="text-white/90">Email:</span>{" "}
              <a href={mailtoLedRfq} className="transition-colors hover:text-white">
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
