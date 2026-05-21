import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import decorativeBrakeCaliperCover from "../../../../public/images/decorative-brake-caliper-cover.png";
import factoryCapabilities from "../../../../public/images/factory-capabilities.png";
import heroFactory from "../../../../public/images/hero-factory-200t-300t.png";
import oemAluminumParts from "../../../../public/images/oem-small-aluminum-die-casting-parts.png";

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
  "Decorative Brake Caliper Covers Supplier | OEM Appearance Covers | HSX DIECASTING";

const pageDescription =
  "HSX DIECASTING supplies decorative brake caliper covers and non-load-bearing automotive appearance covers for aftermarket brands, wholesalers, importers, distributors, and OEM buyers.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/products/decorative-brake-caliper-covers",
  },
  keywords: [
    "decorative brake caliper covers supplier",
    "OEM brake caliper covers",
    "decorative caliper cover manufacturer",
    "automotive appearance covers",
    "aftermarket brake caliper covers",
    "non-load-bearing caliper covers",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/products/decorative-brake-caliper-covers",
    images: [
      {
        url: "/images/decorative-brake-caliper-cover.png",
        alt: "Decorative brake caliper cover color options for aftermarket buyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/decorative-brake-caliper-cover.png"],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Decorative Brake Caliper Covers",
  url: "https://www.hsxdiecasting.com/products/decorative-brake-caliper-covers",
  image: ["https://www.hsxdiecasting.com/images/decorative-brake-caliper-cover.png"],
  description:
    "Decorative brake caliper covers and non-load-bearing automotive appearance covers for aftermarket brands, wholesalers, importers, distributors, and OEM buyers.",
  brand: {
    "@type": "Brand",
    name: "HSX DIECASTING",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Foshan Huashunxiang Hardware Products Co., Ltd.",
    url: "https://www.hsxdiecasting.com",
  },
  category: "Automotive Decorative Appearance Covers",
};

const contactDetails = {
  email: "nicolsonhuang2020@gmail.com",
  phone: "+86 176 6615 5283",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20would%20like%20to%20request%20a%20quotation%20for%20decorative%20brake%20caliper%20covers.%20Please%20contact%20me%20with%20pricing%20and%20production%20details.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const mailtoCaliperRfq =
  "mailto:nicolsonhuang2020@gmail.com?subject=RFQ%20for%20Decorative%20Brake%20Caliper%20Covers&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20decorative%20brake%20caliper%20covers.%0A%0AProduct%20style%3A%0AQuantity%3A%0AColor%20/%20finish%20request%3A%0ALogo%20or%20packaging%20request%3A%0ATarget%20vehicle%20or%20market%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C";

const heroStats = [
  {
    label: "Product position",
    value: "Decorative",
    note: "Non-load-bearing appearance covers for automotive accessory programs",
  },
  {
    label: "Buyer focus",
    value: "Aftermarket",
    note: "Accessory brands, importers, distributors, wholesalers, and OEM buyers",
  },
  {
    label: "Finish support",
    value: "Color + Logo",
    note: "Color finish, brand presentation, packaging, and private-label support",
  },
];

const productTypes: CardItem[] = [
  {
    title: "Decorative Caliper Covers",
    description:
      "Appearance-focused brake caliper cover products for visual upgrade and aftermarket accessory programs.",
  },
  {
    title: "Non-load-bearing Covers",
    description:
      "Decorative exterior covers only, positioned as visual accessories rather than structural braking-force components.",
  },
  {
    title: "Color Finish Covers",
    description:
      "Red, blue, black, silver, gold, or buyer-defined color finishes for branded automotive appearance product lines.",
  },
  {
    title: "Logo and Brand Covers",
    description:
      "Private-label logo, model-specific visual presentation, and retail-ready packaging support for distributors.",
  },
  {
    title: "Sample-based Projects",
    description:
      "Buyer samples, photos, dimensions, and reference models can be reviewed before quotation and production planning.",
  },
  {
    title: "Aftermarket Accessory Products",
    description:
      "Decorative automotive cover products for car modification channels, accessory brands, and wholesale programs.",
  },
];

const productPrograms: ProgramCard[] = [
  {
    label: "Appearance",
    title: "Decorative Appearance Cover Programs",
    description:
      "Caliper appearance covers and visual upgrade accessories for aftermarket brands, wholesalers, and distributors.",
    bullets: [
      "Non-load-bearing product positioning",
      "Color finish and logo support",
      "Private-label packaging needs",
    ],
    image: decorativeBrakeCaliperCover,
    alt: "Decorative brake caliper covers for automotive aftermarket programs",
  },
  {
    label: "Branding",
    title: "Private-label Caliper Cover Programs",
    description:
      "Appearance cover programs for buyers needing logo, color, product line presentation, and market-ready packaging.",
    bullets: [
      "Brand visual presentation",
      "Sample and photo review",
      "Wholesale order planning",
    ],
    image: decorativeBrakeCaliperCover,
    alt: "Private-label decorative brake caliper cover product program",
  },
  {
    label: "Parts",
    title: "Aluminum Appearance Part Support",
    description:
      "Small-to-medium decorative aluminum covers and appearance parts matched to practical factory review and finishing support.",
    bullets: [
      "Small-to-medium part scope",
      "Surface finishing coordination",
      "Export communication support",
    ],
    image: oemAluminumParts,
    alt: "Decorative aluminum appearance covers and compact aluminum parts",
  },
];

const processSteps: CardItem[] = [
  {
    title: "Photo and Sample Review",
    description:
      "Buyer photos, samples, dimensions, color expectations, logo needs, and packaging plans are reviewed before quotation.",
  },
  {
    title: "Appearance Feasibility",
    description:
      "Decorative cover style, visible surface, basic dimensions, and fitment information are checked for practical project review.",
  },
  {
    title: "Non-structural Positioning",
    description:
      "The product is positioned clearly as a decorative cover installed outside the brake caliper for appearance upgrade. It is non-load-bearing and not a braking-force component.",
  },
  {
    title: "Color and Finish Planning",
    description:
      "Powder coating, spray painting, polishing, and high-temperature resistant paint needs for normal driving use are coordinated around buyer requirements.",
  },
  {
    title: "Logo and Packaging",
    description:
      "Private-label logo, custom logo font, custom logo color, product line presentation, carton plan, and market positioning can be reviewed with the RFQ.",
  },
  {
    title: "Inspection and Export Packing",
    description:
      "Appearance, finish color, surface quality, basic packing layout, and export delivery needs are checked before shipment.",
  },
];

const finishingOptions: CardItem[] = [
  {
    title: "Powder Coating",
    description:
      "Durable color coverage for decorative caliper covers and automotive appearance accessories, with high-temperature resistant paint options for normal driving use.",
  },
  {
    title: "Spray Painting",
    description:
      "Used for model-specific colors, branded visual presentation, and appearance-focused product lines.",
  },
  {
    title: "Polishing and Grinding",
    description:
      "Surface preparation for visible aluminum cover areas before coating, painting, or final appearance review.",
  },
  {
    title: "Custom Color Review",
    description:
      "Buyer-defined finish colors, custom logo font, and custom logo color can be reviewed based on sample, photo, brand guide, or target market request.",
  },
];

const buyerFit: CardItem[] = [
  {
    title: "Automotive Accessory Brands",
    description:
      "Decorative brake caliper covers and appearance products for branded automotive accessory product lines.",
  },
  {
    title: "Aftermarket Distributors",
    description:
      "Visual upgrade covers, color accessories, and car modification products for wholesale distribution channels.",
  },
  {
    title: "Car Modification Channels",
    description:
      "Decorative cover products positioned for visual enhancement and appearance-focused accessory markets.",
  },
  {
    title: "OEM Project Buyers",
    description:
      "Custom decorative cover projects developed from buyer drawings, samples, product photos, or OEM requirements.",
  },
];

const rfqRequirements = [
  "Product photos, drawings, samples, or reference models",
  "Target vehicle fitment or product application market if available",
  "Cover dimensions, mounting style, appearance surface, and assembly needs",
  "High-temperature resistant paint or color finish such as red, black, blue, silver, gold, powder coating, or spray painting for normal driving use",
  "Custom logo font, logo color request, private-label packaging plan, and product line positioning",
  "Estimated order quantity, target market, and repeat-order expectations",
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

export default function DecorativeBrakeCaliperCoversPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative overflow-x-clip bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="border-b border-white/8 bg-black/85">
        <div className="container-shell flex flex-col gap-3 py-3 text-sm text-[#d8ccb2] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a href={mailtoCaliperRfq} className="flex items-center gap-3 transition-colors hover:text-white">
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
              Decorative brake caliper covers, non-load-bearing appearance covers,
              color finish accessories, logo covers, and automotive visual upgrade
              products for global B2B buyers.
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
              <p className="section-kicker">Automotive appearance accessories</p>
              <h1 className="section-heading mt-6 text-5xl leading-none text-white sm:text-6xl xl:text-7xl">
                Decorative Brake Caliper Covers for Global B2B Buyers
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d4cdc0]">
                HSX DIECASTING supplies decorative brake caliper covers and
                non-load-bearing automotive appearance covers for aftermarket brands,
                wholesalers, importers, distributors, car modification channels, and OEM buyers.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#c7beaf]">
                Buyers can start from product photos, samples, dimensions, target vehicle
                fitment, color finish requests, logo needs, and packaging plans.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={contactDetails.whatsappHref} className="gold-button text-center">
                  WhatsApp RFQ
                </a>
                <a href={mailtoCaliperRfq} className="outline-button text-center">
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
                    src={decorativeBrakeCaliperCover}
                    alt="Decorative brake caliper covers and color finish appearance cover support"
                    fill
                    preload
                    sizes="(min-width: 1280px) 44rem, (min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/15 to-black/80" />
                  <div className="absolute left-5 top-5 rounded-2xl border border-white/12 bg-black/60 px-4 py-3 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                      Appearance cover scope
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Decorative caliper covers and private-label support
                    </p>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                      Important positioning
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                      Decorative appearance covers only. These parts are not
                      structural braking-force components.
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
                eyebrow="Typical decorative cover products"
                title="Decorative caliper covers, color finish covers, logo covers, and appearance parts"
                description="This page focuses on automotive appearance products and non-load-bearing decorative covers that fit practical B2B sourcing needs for aftermarket and OEM buyers."
              />
              <div className="mt-10 industrial-card gold-frame overflow-hidden p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={decorativeBrakeCaliperCover}
                    alt="Decorative brake caliper cover products and visual appearance accessories"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                    <p className="section-kicker">Appearance cover coverage</p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      Built around decorative automotive visual upgrade covers,
                      color finish support, logo needs, and export-ready B2B supply.
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
              eyebrow="Decorative cover programs"
              title="Product programs for appearance accessories, private-label buyers, and OEM projects"
              description="These examples help buyers match their project to decorative caliper cover supply, color finish requirements, and automotive appearance component support."
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
                    src={heroFactory}
                    alt="HSX factory with 200T and 300T die casting machines for decorative automotive cover project support"
                    fill
                    sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                    <p className="section-kicker">OEM manufacturing flow</p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      Photos, samples, appearance review, die casting, finishing,
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
                    Photos + Samples
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    Product photos, samples, dimensions, finish requests,
                    and packaging requests can start the RFQ review.
                  </p>
                </article>
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Process coverage
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    Finish to Pack
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    Appearance finishing, inspection, packaging, and export
                    communication are coordinated for B2B buyers.
                  </p>
                </article>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="OEM project support"
                title="From decorative cover RFQ to export-ready supply"
                description="HSX reviews decorative brake caliper cover projects around product positioning, appearance fit, surface finish, packaging, and buyer communication before quotation and production planning."
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
              title="Finishing options for decorative brake caliper covers"
              description="Finishing is planned around appearance, brand presentation, target market preference, and practical decorative cover requirements."
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
              title="Built for automotive accessory brands, aftermarket distributors, car modification channels, and OEM buyers"
              description="The page is positioned for buyers sourcing decorative brake caliper covers and appearance accessories with practical factory support and direct export communication."
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
              title="Send the details needed for accurate decorative cover quotation"
              description="For faster review, buyers should send product photos, dimensions, finish requests, logo needs, quantity plans, and packaging information."
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

        <section className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="gold-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
                <div>
                  <p className="section-kicker">Final inquiry CTA</p>
                  <h2 className="section-heading mt-5 text-4xl font-semibold uppercase tracking-[0.12em] text-[#120f08] lg:text-5xl">
                    Send your decorative brake caliper cover photos, samples, or OEM project requirements
                  </h2>
                  <p className="mt-7 max-w-3xl text-base leading-8 text-[#2d2417] lg:text-lg">
                    HSX reviews decorative brake caliper covers installed outside the brake caliper,
                    automotive appearance covers, high-temperature paint finish options for normal driving use,
                    custom colors, custom logo font, logo color requests, and non-load-bearing visual upgrade
                    products for global wholesalers, importers, distributors, accessory brands,
                    and OEM buyers.
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
                      href={mailtoCaliperRfq}
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
                        src={decorativeBrakeCaliperCover}
                        alt="Decorative brake caliper cover ready for OEM quotation and wholesale supply review"
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
                          Send photos, samples, dimensions, high-temperature paint needs for normal driving use,
                          custom logo font, logo color requests, and target quantity for decorative cover review.
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
              Foshan Huashunxiang Hardware Products Co., Ltd.
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#bdb5a8]">
              Decorative brake caliper covers installed outside the brake caliper,
              non-load-bearing automotive appearance covers, high-temperature paint finish options
              for normal driving use, custom colors, custom logo font, logo color support,
              and visual upgrade products for global wholesalers, importers, distributors,
              accessory brands, and OEM buyers.
            </p>
          </div>

          <div className="text-sm leading-7 text-[#b7ae9e]">
            <p>
              <span className="text-white/90">Email:</span>{" "}
              <a href={mailtoCaliperRfq} className="transition-colors hover:text-white">
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
            <p>Decorative appearance cover supply for automotive aftermarket buyers</p>
            <p>High-temperature resistant paint helps reduce paint peeling risk under normal driving conditions</p>
            <p>Custom logo font and logo color support for private-label projects</p>
            <p>Non-load-bearing visual accessory product positioning</p>
            <p className="mt-2">
              © {currentYear} HSX DIECASTING. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
