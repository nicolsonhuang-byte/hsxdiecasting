import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import automotiveLedLight from "../../../public/images/automotive-led-light.png";
import brakeCaliperCover from "../../../public/images/brake-caliper-cover.png";
import factoryCapabilities from "../../../public/images/factory-capabilities.png";
import ledWorkLight from "../../../public/images/led-work-light.png";
import motorcycleLedLight from "../../../public/images/motorcycle-led-light.png";
import oemAluminumParts from "../../../public/images/oem-small-aluminum-die-casting-parts.png";

type ProductCategory = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  applications: string[];
  href?: string;
};

type SupportStage = {
  title: string;
  description: string;
};

const pageTitle =
  "Products | OEM Aluminum Die Casting Parts & LED Lights | HSX DIECASTING";

const pageDescription =
  "Browse HSX DIECASTING products for global wholesalers and OEM buyers, including OEM small-to-medium aluminum die casting parts, custom aluminum hardware parts, automotive LED lights, motorcycle LED lights, LED work lights, and decorative brake caliper covers.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/products",
  },
  keywords: [
    "products aluminum die casting",
    "OEM small-to-medium aluminum die casting parts",
    "custom aluminum hardware parts",
    "automotive LED lights",
    "motorcycle LED lights",
    "LED work lights",
    "decorative brake caliper covers",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/products",
    images: [
      {
        url: "/images/oem-small-aluminum-die-casting-parts.png",
        alt: "OEM small-to-medium aluminum die casting parts by HSX DIECASTING",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/oem-small-aluminum-die-casting-parts.png"],
  },
};

const contactDetails = {
  email: "nicolsonhuang2020@gmail.com",
  phone: "+86 176 6615 5283",
  whatsappHref: "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%20Please%20contact%20me%20with%20quotation%20details.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const heroStats = [
  {
    label: "Machine Scope",
    value: "200T + 300T",
    note: "Focused on small-to-medium aluminum die casting parts only",
  },
  {
    label: "OEM Input",
    value: "Drawings + Samples",
    note: "Custom manufacturing accepted from buyer drawings, samples, or project requirements",
  },
  {
    label: "Product Mix",
    value: "Parts + LED Lights",
    note: "Built for wholesale, aftermarket, and OEM sourcing programs",
  },
];

const introCards = [
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Production is aligned with realistic 200T and 300T aluminum die casting scope for compact housings, brackets, covers, shells, lamp bodies, and other small-to-medium OEM components.",
  },
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "The product mix includes automotive LED lights, motorcycle LED lights, and LED work lights using aluminum housings suited to practical die casting and finishing workflows.",
  },
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Projects can start from drawings, approved samples, or custom development requirements, then move through mold development, production, machining, finishing, and export packing.",
  },
];

const productCategories: ProductCategory[] = [
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Compact aluminum housings, end caps, brackets, shells, lamp bodies, and cover parts produced within the practical range of 200T and 300T die casting machines.",
    image: oemAluminumParts,
    alt: "OEM small-to-medium aluminum die casting parts for lighting and hardware projects",
    href: "/products/oem-aluminum-die-casting-parts",
    applications: [
      "Automotive and motorcycle lamp housings",
      "Mounting brackets and enclosure shells",
      "Accessory covers and end-cap components",
    ],
  },
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Custom aluminum hardware parts for distributors, aftermarket brands, and OEM programs needing compact functional parts with drilling, tapping, and surface finishing support.",
    image: oemAluminumParts,
    alt: "Custom aluminum hardware parts with machined mounting features",
    applications: [
      "Accessory bases and mounting parts",
      "Small covers, trims, and enclosure pieces",
      "Project-specific aluminum hardware components",
    ],
  },
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Automotive LED lighting products with aluminum housings and heat-dissipation-focused body structures for wholesale and private-label vehicle accessory programs.",
    image: automotiveLedLight,
    alt: "Automotive LED light product with aluminum housing",
    applications: [
      "Aftermarket vehicle lighting lines",
      "Auxiliary and utility light programs",
      "Private-label automotive accessory supply",
    ],
  },
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Motorcycle LED lights using compact aluminum lamp bodies suitable for replacement, styling, and accessory-focused product ranges.",
    image: motorcycleLedLight,
    alt: "Motorcycle LED light with compact aluminum housing",
    applications: [
      "Motorcycle accessory lighting programs",
      "Replacement and aftermarket lamp supply",
      "Compact model-specific lighting bodies",
    ],
  },
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "LED work lights built around compact aluminum housings for industrial, utility, off-road, and equipment accessory channels.",
    image: ledWorkLight,
    alt: "LED work light product with aluminum housing",
    href: "/products/led-work-lights",
    applications: [
      "Utility vehicle lighting",
      "Industrial service and maintenance lights",
      "Equipment and off-road accessory lines",
    ],
  },
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Decorative non-load-bearing appearance covers for aftermarket styling programs, offered as compact aluminum exterior accessories only.",
    image: brakeCaliperCover,
    alt: "Decorative aluminum brake caliper cover for vehicle appearance upgrades",
    applications: [
      "Aftermarket appearance kits",
      "Private-label vehicle styling accessories",
      "Showroom and cosmetic upgrade programs",
    ],
  },
];

const supportStages: SupportStage[] = [
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Start with 2D drawings, 3D files, or dimensional sketches to confirm part geometry, mounting features, and manufacturable aluminum scope.",
  },
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Approved samples or reference parts can be used to align target dimensions, appearance priorities, and assembly expectations before launch.",
  },
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Mold development is arranged after feasibility review so compact aluminum parts can move into repeatable OEM production with clear expectations.",
  },
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "200T and 300T aluminum die casting is paired with drilling and tapping support for compact housings, brackets, covers, and hardware parts.",
  },
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Anodizing, powder coating, spray painting, polishing, final inspection, and export packing are coordinated to match the buyer’s project needs.",
  },
];

const surfaceFinishes = [
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Used for clean metallic appearance, corrosion resistance, and consistent finish on aluminum housings, covers, and hardware parts.",
  },
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Suitable for durable exterior coverage on housings, brackets, decorative covers, and other compact aluminum accessory parts.",
  },
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Applied where the project requires color matching, branded appearance, or a specific visual finish for end-market presentation.",
  },
  {
    title: "HSX DIECASTING | OEM Aluminum Die Casting Parts and Automotive LED Lights",
    description:
      "Used for surface preparation and appearance improvement before coating, painting, or final inspection on visible aluminum parts.",
  },
];

const rfqChecklist = [
  "Part drawings, sample photos, or reference samples",
  "Required finish such as anodizing, powder coating, spray painting, or polishing",
  "Order quantity, target market, and packaging requirements",
  "Application details for aluminum parts, LED lights, or decorative appearance covers",
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

export default function ProductsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative overflow-x-clip">
      <div className="border-b border-white/8 bg-black/85">
        <div className="container-shell flex flex-col gap-3 py-3 text-sm text-[#d8ccb2] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href={`mailto:${contactDetails.email}`}
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
          <a href="/contact" className="gold-button w-full text-center sm:w-auto">
            Get a Quote
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#050505]/88 backdrop-blur-xl">
        <div className="container-shell flex flex-col gap-5 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-kicker">Foshan, Guangdong, China</p>
            <Link
              href="/"
              className="section-heading mt-3 block text-2xl text-white sm:text-3xl"
            >
              HSX DIECASTING
            </Link>
            <p className="mt-3 text-sm leading-7 text-[#beb6a8]">
              Product programs for OEM small-to-medium aluminum die casting
              parts, custom aluminum hardware parts, and automotive LED
              lighting supply.
            </p>
          </div>

          <nav
            aria-label="Primary"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#ddd2ba]"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
            <Link
              href="/capabilities"
              className="transition-colors hover:text-white"
            >
              Capabilities
            </Link>
            <a
              href="#product-categories"
              className="transition-colors hover:text-white"
            >
              Products
            </a>
            <a
              href="#oem-support"
              className="transition-colors hover:text-white"
            >
              OEM Support
            </a>
            <a
              href="#surface-finishing"
              className="transition-colors hover:text-white"
            >
              Finishing
            </a>
            <a href="/contact" className="transition-colors hover:text-white">
              RFQ
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.14),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
          <div className="container-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:py-24">
            <div className="motion-rise">
              <p className="section-kicker">HSX product range</p>
              <h1 className="section-heading mt-6 text-4xl leading-none text-white sm:text-5xl xl:text-6xl">
                Products for Global Wholesalers & OEM Buyers
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                HSX DIECASTING supplies OEM small-to-medium aluminum die
                casting parts, custom aluminum hardware parts, automotive LED
                lights, motorcycle LED lights, LED work lights, and decorative
                brake caliper covers. The product scope stays inside realistic
                200T and 300T aluminum die casting capacity for compact
                housings, brackets, covers, shells, and other practical OEM
                components.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#product-categories"
                  className="gold-button text-center"
                >
                  Browse Product Categories
                </a>
                <a href="/contact" className="outline-button text-center">
                  Send RFQ Details
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
                    src={oemAluminumParts}
                    alt="OEM small-to-medium aluminum die casting parts for industrial and lighting projects"
                    fill
                    preload
                    sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/15 to-black/80" />
                  <div className="absolute left-5 top-5 rounded-2xl border border-white/12 bg-black/55 px-4 py-3 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                      Realistic scope
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Small-to-medium aluminum parts only
                    </p>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                      Typical products
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                      Compact housings, lamp bodies, end caps, accessory
                      brackets, small covers, shells, and decorative appearance
                      parts for OEM and wholesale supply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-20">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Product introduction"
              title="OEM aluminum parts and LED lighting with clear manufacturing fit"
              description="This page focuses on OEM small-to-medium aluminum die casting parts and automotive LED lighting products that match the factory’s 200T and 300T equipment. The offering is shaped for global wholesalers, importers, distributors, and OEM buyers who need practical product scope and clear project support."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {introCards.map((card) => (
                <article key={card.title} className="industrial-card p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {card.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="product-categories"
          className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,1)_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Product categories"
              title="Category coverage for OEM sourcing programs"
              description="Each category below is described within realistic compact aluminum manufacturing scope. The emphasis stays on small-to-medium OEM parts, aluminum lighting housings, and decorative appearance accessories rather than oversized structural castings."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {productCategories.map((category, index) => (
                <article
                  key={category.title}
                  className="industrial-card group overflow-hidden"
                >
                  {category.href ? (
                    <Link
                      href={category.href}
                      aria-label={category.title}
                      className="block"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={category.image}
                          alt={category.alt}
                          fill
                          sizes="(min-width: 1280px) 24rem, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#efcf8d]">
                          Category {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.alt}
                        fill
                        sizes="(min-width: 1280px) 24rem, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#efcf8d]">
                        Category {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-white">
                      {category.href ? (
                        <Link
                          href={category.href}
                          className="transition-colors hover:text-[#efcf8d]"
                        >
                          {category.title}
                        </Link>
                      ) : (
                        category.title
                      )}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[#c8c0b3]">
                      {category.description}
                    </p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#efcf8d]">
                      Key applications
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-[#f3ecdd]">
                      {category.applications.map((application) => (
                        <li key={application} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d5ae67]" />
                          <span>{application}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className="outline-button mt-6 w-full text-center"
                    >
                      Request Quote
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="oem-support" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="industrial-card gold-frame overflow-hidden p-3">
              <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={factoryCapabilities}
                  alt="Factory capability image showing support for mold development, production, and finishing of compact aluminum parts"
                  fill
                  sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                  <p className="section-kicker">OEM project support</p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Drawings, samples, mold development, production, and
                    finishing arranged as one coordinated project flow.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="OEM project support"
                title="Project development from buyer input to finished parts"
                description="HSX accepts OEM aluminum die casting parts manufacturing based on drawings, samples, or custom project requirements. The workflow is organized to move compact aluminum projects through review, mold development, production, machining, finishing, and shipment with clear buyer communication."
              />

              <div className="mt-8 grid gap-5">
                {supportStages.map((stage) => (
                  <article key={stage.title} className="industrial-card p-6">
                    <h2 className="text-xl font-semibold text-white">
                      {stage.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                      {stage.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="surface-finishing"
          className="border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(199,162,91,0.11),transparent_28%),linear-gradient(180deg,#0c0c0c_0%,#070707_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Surface finishing"
              title="Finishing options for appearance and protection"
              description="Surface treatment is coordinated around the end-market appearance, corrosion resistance, and visual quality required by each aluminum part or lighting program."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {surfaceFinishes.map((finish) => (
                <article key={finish.title} className="industrial-card p-6">
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

        <section id="rfq" className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="gold-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
                <div>
                  <p className="section-kicker">RFQ contact</p>
                  <h2 className="section-heading mt-4 text-3xl text-[#120f08] sm:text-4xl">
                    Send your drawings, samples, or project requirements
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#2d2417] sm:text-lg">
                    Share the product category, drawing set, reference sample,
                    target finish, quantity plan, and packaging requirements.
                    HSX reviews OEM small-to-medium aluminum die casting parts,
                    custom hardware parts, automotive LED lights, motorcycle LED
                    lights, LED work lights, and decorative brake caliper cover
                    inquiries for export-focused buyers.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/"
                      className="rounded-full bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Back to Homepage
                    </Link>
                    <a
                      href="#product-categories"
                      className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                    >
                      Review Products
                    </a>
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
                        href={`mailto:${contactDetails.email}`}
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

                  <div className="mt-8 border-t border-[#2b2216]/15 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5f4a28]">
                      Recommended RFQ details
                    </p>
                    <ul className="mt-5 space-y-4 text-sm leading-7 text-[#2c2316]">
                      {rfqChecklist.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#8d6a2d]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        {/* Internal links: expanded product category pages */}
        <section className="border-t border-white/10 bg-black/20 px-6 py-16 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker">More product categories</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white lg:text-5xl">
              Explore focused product pages for LED lighting and aluminum die casting projects
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-8 text-white/70 lg:text-lg">
              These product category pages help buyers find the right supply scope faster,
              including automotive LED lights, motorcycle LED lights, aluminum light housings,
              and decorative brake caliper covers.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <a
                href="/products/automotive-led-lights"
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-amber-300/50"
              >
                <h3 className="text-lg font-semibold text-white">Automotive LED Lights</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  OEM car LED lights, auxiliary lights, work lights, and aluminum lighting parts.
                </p>
              </a>

              <a
                href="/products/motorcycle-led-lights"
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-amber-300/50"
              >
                <h3 className="text-lg font-semibold text-white">Motorcycle LED Lights</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  Compact motorcycle LED lights, lamp housings, brackets, and lighting accessories.
                </p>
              </a>

              <a
                href="/products/aluminum-light-housings"
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-amber-300/50"
              >
                <h3 className="text-lg font-semibold text-white">Aluminum Light Housings</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  Die cast aluminum lamp housings, heat-sink bodies, covers, and brackets.
                </p>
              </a>

              <a
                href="/products/decorative-brake-caliper-covers"
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-amber-300/50"
              >
                <h3 className="text-lg font-semibold text-white">Decorative Brake Caliper Covers</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  Non-load-bearing decorative caliper covers and automotive appearance accessories.
                </p>
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/8 bg-black/80 py-10">
        <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="section-kicker">Footer</p>
            <p className="section-heading mt-3 text-2xl text-white">
              Foshan Huashunxiang Hardware Products Co., Ltd.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#bbb2a3]">
              OEM small-to-medium aluminum die casting parts and automotive LED
              lighting supplier for global wholesalers, importers,
              distributors, aftermarket brands, and OEM buyers.
            </p>
          </div>

          <div className="text-sm leading-7 text-[#b7ae9e]">
            <p>
              <span className="text-white/90">Email:</span>{" "}
              <a
                href={`mailto:${contactDetails.email}`}
                className="transition-colors hover:text-white"
              >
                {contactDetails.email}
              </a>
            </p>
            <p>
              <span className="text-white/90">WhatsApp / Phone:</span>{" "}
              <a
                href={contactDetails.whatsappHref}
                className="transition-colors hover:text-white"
              >
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
            <p>Small-to-medium aluminum die casting scope: 200T and 300T</p>
            <p>OEM based on drawings, samples, or custom project requirements</p>
            <p className="mt-2">
              © {currentYear} HSX DIECASTING. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
