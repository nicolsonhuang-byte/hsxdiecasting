import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../components/site-navigation";

import ledWorkLight from "../../../public/images/led-work-light.png";
import oemAluminumParts from "../../../public/images/oem-small-aluminum-die-casting-parts.png";
import sprayPainting from "../../../public/images/hsx-factory/in-house-spray-painting-aluminum-parts.jpg";
import workshopHorizontal from "../../../public/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg";

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
  "Products | Aluminum Die Casting Parts & LED Lights | HSX";

const pageDescription =
  "Browse OEM aluminum die casting parts, die cast aluminum LED light housings, secondary machining and surface finishing support, decorative brake caliper appearance covers, and selected LED lighting products.";

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
    "decorative brake caliper appearance covers",
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
  email: "nicolson@hsxdiecasting.com",
  phone: "+86 176 6615 5283",
  whatsappHref: "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%20Please%20contact%20me%20with%20quotation%20details.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const heroStats = [
  {
    label: "Product Capability Range",
    value: "200T / 300T",
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
    title: "Realistic Aluminum Die Casting Scope",
    description:
      "Production is aligned with the 200T / 300T Product Capability Range for compact housings, brackets, covers, shells, lamp bodies, and other small-to-medium OEM components.",
  },
  {
    title: "LED Lighting Product Programs",
    description:
      "The product mix includes automotive LED lights, motorcycle LED lights, and LED work lights using aluminum housings suited to practical die casting and finishing workflows.",
  },
  {
    title: "OEM Development Support",
    description:
      "Projects can start from drawings, approved samples, or custom development requirements, then move through mold development, production, machining, finishing, and export packing.",
  },
];

const productCategories: ProductCategory[] = [
  {
    title: "Lighting Housings",
    description:
      "Aluminum light housings, heat-dissipation bodies, covers, and compact lighting components reviewed for suitable OEM projects.",
    image: ledWorkLight,
    alt: "Aluminum die casting lighting housing for an OEM project",
    href: "/products/aluminum-light-housings",
    applications: [
      "LED light housings and heat-dissipation bodies",
      "Compact lamp covers and enclosure shells",
      "Lighting parts based on drawings or samples",
    ],
  },
  {
    title: "Enclosures and Housings",
    description:
      "Communication, optical-module, access-control, and industrial enclosure projects reviewed around structure, assembly, finishing, and packing needs.",
    image: oemAluminumParts,
    alt: "Custom aluminum die casting enclosures and housings",
    href: "/products/oem-aluminum-die-casting-parts",
    applications: [
      "Communication equipment housings",
      "Lock and access-control housings",
      "Protective covers and enclosure shells",
    ],
  },
  {
    title: "Hardware and Mechanical Parts",
    description:
      "Brackets, supports, mounting parts, end caps, covers, and other compact components produced from buyer drawings or samples.",
    image: workshopHorizontal,
    alt: "HSX workshop supporting custom aluminum hardware and mechanical parts",
    href: "/products/oem-aluminum-die-casting-parts",
    applications: [
      "Brackets and support parts",
      "End caps, covers, and mounting parts",
      "Hardware and machinery components",
    ],
  },
  {
    title: "Custom OEM Die Cast Parts",
    description:
      "Drawing-based small-to-medium aluminum die casting projects with selected in-house secondary operations, QC, packing, and partner-supported resources when required.",
    image: sprayPainting,
    alt: "Surface finishing support for custom OEM aluminum die cast parts",
    href: "/products/oem-aluminum-die-casting-parts",
    applications: [
      "Parts reviewed from 2D or 3D drawings",
      "Appearance-sensitive aluminum components",
      "Projects requiring coordinated secondary operations",
    ],
  },
];

const productScopeItems = [
  "Aluminum housings and enclosure shells",
  "Lighting housings and heat-dissipation bodies",
  "Brackets and support parts",
  "End caps and covers",
  "Hardware and mechanical components",
  "Lock and access-control housings",
  "Decorative aluminum appearance parts",
  "Other custom OEM aluminum die cast components",
];

const supportStages: SupportStage[] = [
  {
    title: "Drawing and Geometry Review",
    description:
      "Start with 2D drawings, 3D files, or dimensional sketches to confirm part geometry, mounting features, and manufacturable aluminum scope.",
  },
  {
    title: "Sample and Appearance Alignment",
    description:
      "Approved samples or reference parts can be used to align target dimensions, appearance priorities, and assembly expectations before launch.",
  },
  {
    title: "Mold Development",
    description:
      "Mold development is arranged after feasibility review so compact aluminum parts can move into repeatable OEM production with clear expectations.",
  },
  {
    title: "Die Casting and Secondary Operations",
    description:
      "The 200T / 300T Product Capability Range is paired with in-house drilling and tapping. CNC machining can be coordinated through partner-supported resources when required by the project.",
  },
  {
    title: "Finishing, Inspection, and Packing",
    description:
      "Anodizing, powder coating, spray painting, polishing, final inspection, and export packing are coordinated to match the buyer’s project needs.",
  },
];

const surfaceFinishes = [
  {
    title: "Partner-Supported Anodizing",
    description:
      "Anodizing can be coordinated through partner-supported resources for selected suitable parts when required by the project.",
  },
  {
    title: "Powder Coating",
    description:
      "Suitable for durable exterior coverage on housings, brackets, decorative covers, and other compact aluminum accessory parts.",
  },
  {
    title: "Spray Painting",
    description:
      "Applied where the project requires color matching, branded appearance, or a specific visual finish for end-market presentation.",
  },
  {
    title: "Polishing and Surface Preparation",
    description:
      "In-house polishing and surface preparation support appearance improvement before coating, painting, or final inspection on visible aluminum parts.",
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
  return (
    <div className="relative">
      <div className="border-b border-white/8 bg-black/85">
        <div className="container-shell flex flex-col gap-3 py-3 text-sm text-[#d8ccb2] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C`}
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
            <div className="flex items-start gap-3">
              <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                Address
              </span>
              <span>{contactDetails.address}</span>
            </div>
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
              <p className="section-kicker">HSX product range</p>
              <h1 className="section-heading mt-6 text-4xl leading-none text-white sm:text-5xl xl:text-6xl">
                Custom OEM Aluminum Die Casting Parts and Selected Applications
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                HSX DIECASTING focuses on small-to-medium custom OEM aluminum die
                casting parts, including lighting housings, enclosures, and
                hardware or mechanical components, with selected secondary
                operations and finishing coordination. The product scope stays
                inside the 200T / 300T Product Capability Range for compact
                housings, brackets, covers, shells, and other practical OEM
                components.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/b2b-oem-project-review"
                  className="gold-button text-center"
                >
                  Request Project Review
                </Link>
                <a
                  href={contactDetails.whatsappHref}
                  className="outline-button text-center"
                >
                  WhatsApp RFQ
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
              title="OEM aluminum die casting parts first, with focused supporting product lines"
              description="This page prioritizes OEM small-to-medium aluminum die casting parts, die cast aluminum LED light housings, secondary machining and surface finishing, then decorative brake caliper appearance covers and selected LED lighting products. The offering is shaped for global wholesalers, importers, distributors, and OEM buyers who need practical product scope and clear project support."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {introCards.map((card, index) => (
                <article key={`${card.title}-${index}`} className="industrial-card p-6">
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
              eyebrow="Core OEM product categories"
              title="Custom OEM Aluminum Die Casting"
              description="Four representative categories help buyers identify a practical project fit. Final feasibility is reviewed from drawings, samples, dimensions, quantity, application, and finishing requirements."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {productCategories.map((category, index) => (
                <article
                  key={`${category.title}-${index}`}
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
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      {category.href ? (
                        <Link
                          href={category.href}
                          className="rounded-full border border-[#d5ae67]/45 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#efcf8d] transition-colors hover:bg-[#d5ae67] hover:text-black"
                        >
                          View Details
                        </Link>
                      ) : null}
                      <a
                        href={contactDetails.whatsappHref}
                        className="rounded-full bg-[#d5ae67] px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-black transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        WhatsApp Inquiry
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <details className="industrial-card group p-6 sm:p-8">
              <summary className="cursor-pointer list-none text-xl font-semibold text-white sm:text-2xl">
                What kinds of aluminum die cast parts can HSX manufacture?
              </summary>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="max-w-4xl text-sm leading-7 text-[#cac1b2]">
                  HSX manufactures custom aluminum die cast parts based on
                  customer drawings, samples, dimensions, quantities, and
                  application requirements.
                </p>
                <p className="mt-4 text-sm font-semibold text-white">
                  Typical project types include:
                </p>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-[#f3ecdd] sm:grid-cols-2">
                  {productScopeItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d5ae67]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 max-w-4xl text-sm leading-7 text-[#cac1b2]">
                  For a new project, customers can send 3D drawings, 2D
                  drawings, sample photos, or basic dimensions for project
                  review.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section id="oem-support" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="industrial-card gold-frame overflow-hidden p-3">
              <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={workshopHorizontal}
                  alt="HSX aluminum die casting workshop for small-to-medium OEM projects"
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
                {supportStages.map((stage, index) => (
                  <article key={`${stage.title}-${index}`} className="industrial-card p-6">
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
            <p className="mt-6 max-w-3xl text-sm leading-7 text-[#cfc5b5]">
              For appearance-sensitive RFQs, buyers can also review{" "}
              <Link
                href="/anodizable-aluminum-die-casting-parts"
                className="font-semibold text-[#efcf8d] underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                aluminum die casting parts for anodizing
              </Link>{" "}
              before confirming surface finishing expectations.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {surfaceFinishes.map((finish, index) => (
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

        <section id="rfq" className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="gold-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
                <div>
                  <p className="section-kicker">RFQ contact</p>
                  <h2 className="section-heading mt-4 text-3xl text-[#120f08] sm:text-4xl">
                    Send us your drawing or sample for project review.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#2d2417] sm:text-lg">
                    Share the product category, drawing set, reference sample,
                    target finish, quantity plan, and packaging requirements.
                    HSX reviews OEM small-to-medium aluminum die casting parts,
                    custom hardware parts, die cast aluminum LED light housings,
                    decorative brake caliper appearance cover inquiries, and
                    selected LED lighting products for export-focused buyers.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <a
                      href={contactDetails.whatsappHref}
                      className="rounded-full bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      WhatsApp RFQ
                    </a>
                    <a
                      href={`mailto:${contactDetails.email}?subject=RFQ%20for%20HSX%20Products%20and%20OEM%20Project&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation.%0A%0AProduct%20category%3A%0AQuantity%3A%0AMaterial%20/%20finish%3A%0ADrawing%20or%20sample%20available%3A%0APackaging%20requirements%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
                      className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                    >
                      Email Project Details
                    </a>
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
                        href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C`}
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
      
        <section className="border-t border-white/10 bg-black/20 py-12">
          <div className="container-shell">
            <details className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                Additional focused product pages
              </summary>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-sm text-[#ddd2ba]">
                <Link href="/products/automotive-led-lights" className="hover:text-white">
                  Automotive LED Lights
                </Link>
                <Link href="/products/motorcycle-led-lights" className="hover:text-white">
                  Motorcycle LED Lights
                </Link>
                <Link href="/products/led-work-lights" className="hover:text-white">
                  LED Work Lights
                </Link>
                <Link
                  href="/products/decorative-brake-caliper-covers"
                  className="hover:text-white"
                >
                  Decorative Brake Caliper Appearance Covers
                </Link>
              </div>
            </details>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
