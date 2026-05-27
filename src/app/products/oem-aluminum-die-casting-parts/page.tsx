import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import automotiveLedLight from "../../../../public/images/automotive-led-light.png";
import factoryCapabilities from "../../../../public/images/factory-capabilities.png";
import heroFactory from "../../../../public/images/hero-factory-200t-300t.png";
import ledWorkLight from "../../../../public/images/led-work-light.png";
import motorcycleLedLight from "../../../../public/images/motorcycle-led-light.png";
import oemAluminumParts from "../../../../public/images/oem-small-aluminum-die-casting-parts.png";

type InfoCard = {
  title: string;
  description: string;
};

type VisualProgram = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  tag: string;
  highlights: string[];
};

const pageTitle =
  "OEM Aluminum Die Casting Parts Supplier | HSX DIECASTING";

const pageDescription =
  "HSX DIECASTING supplies OEM small-to-medium aluminum die casting parts, housings, brackets, end caps, covers, and custom aluminum parts from drawings or samples.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/products/oem-aluminum-die-casting-parts",
  },
  keywords: [
    "OEM aluminum die casting parts",
    "small aluminum die casting parts manufacturer",
    "custom aluminum die casting parts China",
    "aluminum die casting parts supplier",
    "small-to-medium aluminum die casting parts",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/products/oem-aluminum-die-casting-parts",
    images: [
      {
        url: "/images/oem-small-aluminum-die-casting-parts.png",
        alt: "OEM small-to-medium aluminum die casting parts for lighting and hardware projects",
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
    label: "Machine Capacity",
    value: "200T + 300T",
    note: "Sized for compact and small-to-medium aluminum die casting parts",
  },
  {
    label: "Secondary Machining",
    value: "7 + 7",
    note: "7 multi-axis drilling machines and 7 multi-axis tapping machines",
  },
  {
    label: "Finishing Support",
    value: "Anodize + Coat",
    note: "3 polishing and grinding machines plus anodizing, powder coating, and spray painting",
  },
];

const manufacturedParts = [
  {
    title: "LED Light Housings",
    description:
      "Compact lamp bodies and housing components for work lights, auxiliary lights, and project-based lighting assemblies.",
  },
  {
    title: "Heat-Sink Aluminum Housings",
    description:
      "Aluminum housings designed for heat dissipation, cover integration, and mounting features in small-to-medium lighting products.",
  },
  {
    title: "Mounting Brackets",
    description:
      "Mounting brackets and support pieces with drilling and tapping features for OEM hardware and accessory projects.",
  },
  {
    title: "End Caps and Closure Parts",
    description:
      "Compact end caps and closure parts for housings, accessories, and enclosure assemblies requiring a clean finished appearance.",
  },
  {
    title: "Enclosure Shells",
    description:
      "Protective aluminum shells for lighting, hardware, and industrial accessory products based on drawing or sample requirements.",
  },
  {
    title: "Motorcycle Light Housings",
    description:
      "Small-to-medium aluminum housings for aftermarket motorcycle lights, trim-oriented lamp bodies, and branded accessory programs.",
  },
  {
    title: "Appearance Covers and Trim Parts",
    description:
      "Appearance-focused covers and trim parts for OEM buyers needing compact aluminum castings with post-finishing support.",
  },
  {
    title: "Custom OEM Aluminum Parts",
    description:
      "OEM aluminum parts manufactured from drawings, samples, or custom project requirements for wholesale and distribution channels.",
  },
];

const manufacturingSupport: InfoCard[] = [
  {
    title: "Drawing and Sample Review",
    description:
      "Projects can start from 2D drawings, 3D files, reference parts, or approved samples so key dimensions, wall thickness, and mounting features are checked before tooling begins.",
  },
  {
    title: "Mold Planning",
    description:
      "Mold planning is arranged after feasibility confirmation for compact housings, brackets, end caps, enclosure shells, and other small-to-medium OEM aluminum parts.",
  },
  {
    title: "Aluminum Die Casting Production",
    description:
      "Production runs on 200-ton and 300-ton aluminum die casting machines sized for practical OEM parts with compact geometry.",
  },
  {
    title: "Drilling and Tapping",
    description:
      "Post-casting machining includes hole processing and threaded features using the factory’s multi-axis drilling and tapping equipment.",
  },
  {
    title: "Surface Finishing Coordination",
    description:
      "Polishing, grinding, anodizing, powder coating, and spray painting are coordinated to meet appearance, corrosion, and end-market requirements.",
  },
  {
    title: "Assembly and Export Packing Support",
    description:
      "The factory can support basic assembly coordination, packing layout, and export packaging requirements for wholesale and OEM project delivery.",
  },
];

const visualPrograms: VisualProgram[] = [
  {
    title: "LED Work Light Housing Programs",
    description:
      "Compact aluminum lamp bodies, covers, end caps, and mounting features for OEM work-light programs supplied to wholesalers and lighting brands.",
    image: ledWorkLight,
    alt: "LED work light with compact aluminum housing for OEM lighting projects",
    tag: "LED Lighting",
    highlights: [
      "Compact cast housings",
      "Heat-dissipation-friendly geometry",
      "Suitable for branded OEM programs",
    ],
  },
  {
    title: "Automotive Lamp Body Programs",
    description:
      "Small-to-medium aluminum housings used for lamp bodies, heat-sink structures, and enclosure-style shells in lighting-related projects.",
    image: automotiveLedLight,
    alt: "Auxiliary LED light with aluminum housing suitable for compact OEM die casting",
    tag: "Lamp Bodies",
    highlights: [
      "Housing and shell formats",
      "Mounting and cover integration",
      "Good fit for 200T and 300T scope",
    ],
  },
  {
    title: "Motorcycle Light Housing Programs",
    description:
      "Compact aluminum light housings and decorative accessory shells for motorcycle aftermarket brands, distributors, and OEM buyers.",
    image: motorcycleLedLight,
    alt: "Motorcycle light with compact aluminum housing for aftermarket and OEM buyers",
    tag: "Motorcycle",
    highlights: [
      "Small housing footprints",
      "Appearance-driven finishing support",
      "Drawings or sample-based development",
    ],
  },
  {
    title: "Custom Aluminum Hardware Programs",
    description:
      "OEM aluminum parts for hardware accessories, enclosure shells, decorative covers, end caps, and compact brackets with post-machining support.",
    image: oemAluminumParts,
    alt: "OEM aluminum die casting parts including small brackets, end caps, and enclosure shells",
    tag: "Hardware",
    highlights: [
      "Drilling and tapping features",
      "Anodizing, coating, or painting",
      "Export-ready small-to-medium parts",
    ],
  },
];

const capacityPoints = [
  "2 aluminum die casting machines: 1 x 200-ton machine and 1 x 300-ton machine",
  "7 multi-axis drilling machines for repeatable hole and mounting-point processing",
  "7 multi-axis tapping machines for threaded features on small-to-medium aluminum parts",
  "3 polishing and grinding machines for appearance preparation before finishing",
  "Aluminum anodizing support for metallic appearance and corrosion resistance",
  "Powder coating for durable exterior surface coverage",
  "Spray painting for project-specific color and visual requirements",
];

const surfaceFinishes: InfoCard[] = [
  {
    title: "Aluminum Die Casting Scope",
    description:
      "The page focuses on OEM aluminum die casting parts within the practical output range of 200T and 300T equipment for compact housings, brackets, covers, caps, and shells.",
  },
  {
    title: "Anodizing",
    description:
      "Used when the part needs a clean metallic look, added corrosion resistance, or a controlled appearance on exposed aluminum surfaces.",
  },
  {
    title: "Powder Coating",
    description:
      "Suitable for durable coverage on housings, decorative covers, brackets, and other OEM aluminum die casting parts supplied to wholesale buyers.",
  },
  {
    title: "Spray Painting",
    description:
      "Applied when the buyer needs color matching, brand-specific presentation, or a painted surface for the target market.",
  },
  {
    title: "Polishing and Grinding",
    description:
      "Surface preparation improves appearance consistency before final finishing or direct visual inspection on compact aluminum parts.",
  },
];

const industries: InfoCard[] = [
  {
    title: "LED Work Light Brands",
    description:
      "LED work light housings, lamp bodies, end caps, and heat-sink-style enclosures for lighting brands and OEM lighting projects.",
  },
  {
    title: "Automotive Aftermarket Accessories",
    description:
      "Compact aluminum housings, decorative covers, and project-based accessory components for aftermarket brands and distributors.",
  },
  {
    title: "Motorcycle Lighting and Accessories",
    description:
      "Motorcycle light housings and compact aluminum accessory parts for wholesalers, importers, and branded accessory lines.",
  },
  {
    title: "OEM Hardware Projects",
    description:
      "Small brackets, enclosure shells, end caps, and custom aluminum hardware accessories for buyer-defined OEM programs.",
  },
  {
    title: "Utility and Industrial Accessories",
    description:
      "Functional aluminum parts for utility products, accessory assemblies, and compact industrial applications needing machining and finishing support.",
  },
  {
    title: "Global Importers and Distributors",
    description:
      "Supply positioned for global wholesalers, importers, distributors, hardware brands, LED lighting brands, and OEM project buyers.",
  },
];

const buyerReasons: InfoCard[] = [
  {
    title: "Drawing and Sample Based OEM Support",
    description:
      "HSX accepts OEM aluminum die casting parts manufacturing based on drawings, samples, or custom project requirements.",
  },
  {
    title: "Realistic 200T and 300T Production Scope",
    description:
      "The factory keeps its offering aligned with 200T and 300T aluminum die casting capacity, which suits compact housings, brackets, caps, shells, and covers.",
  },
  {
    title: "Casting, Machining, and Finishing Coordination",
    description:
      "Drilling, tapping, polishing, anodizing, powder coating, and spray painting are coordinated around the aluminum part project instead of split across multiple vendors.",
  },
  {
    title: "Direct Factory-Side Communication",
    description:
      "Buyers can discuss drawings, samples, tolerances, surface finish, and production limits with a factory-side team that stays closer to the workshop and decision process.",
  },
  {
    title: "Flexible Sample-Stage and Batch Support",
    description:
      "The factory is suitable for new product development, sample-stage confirmation, and small-to-medium batch OEM aluminum parts that need practical review before scaling.",
  },
  {
    title: "Export Buyer Communication",
    description:
      "The business positioning is built for global buyers who need practical RFQ review, clear scope confirmation, and direct export communication.",
  },
  {
    title: "Focused Small Aluminum Die Casting Positioning",
    description:
      "For buyers seeking a small aluminum die casting parts manufacturer or a custom aluminum die casting parts China sourcing partner, the RFQ workflow stays centered on manufacturable compact aluminum parts.",
  },
];

const rfqRequirements = [
  "Part drawings, 3D files, or clear dimensional sketches",
  "Reference samples or product photos when drawings are not complete",
  "Material or appearance requirements for the aluminum part",
  "Estimated order quantity and repeat-order expectations",
  "Required surface finish such as anodizing, powder coating, spray painting, or polishing",
  "Packaging requirements and target market information",
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

export default function OemAluminumDieCastingPartsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative overflow-x-clip">
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
          <a href={contactDetails.whatsappHref} className="gold-button w-full text-center sm:w-auto">
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
              Foshan Huashunxiang Hardware Products Factory provides OEM
              small-to-medium aluminum die casting parts for global
              wholesalers, importers, distributors, hardware brands,
              automotive aftermarket brands, LED lighting brands, and OEM
              project buyers.
            </p>
          </div>

          <nav
            aria-label="Primary"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#ddd2ba]"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <Link
              href="/products"
              className="transition-colors hover:text-white"
            >
              Products
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
              href="#manufacture"
              className="transition-colors hover:text-white"
            >
              Manufacture
            </a>
            <a href="#capacity" className="transition-colors hover:text-white">
              Capacity
            </a>
            <a href={contactDetails.whatsappHref} className="transition-colors hover:text-white">
              RFQ
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.14),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
          <div className="container-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:py-24">
            <div className="motion-rise">
              <p className="section-kicker">OEM aluminum die casting parts</p>
              <h1 className="section-heading mt-6 text-4xl leading-none text-white sm:text-5xl xl:text-6xl">
                OEM Small-to-Medium Aluminum Die Casting Parts Manufacturer
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                Send drawings, samples, or project requirements for compact
                aluminum housings, brackets, end caps, enclosure shells, and
                custom hardware accessories. HSX supports mold development,
                aluminum die casting, machining, drilling, tapping, polishing,
                anodizing, powder coating, spray painting, assembly
                coordination, and export packaging for OEM aluminum die casting
                parts.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#c7beaf]">
                As a China-based aluminum die casting parts supplier, the
                factory stays focused on practical small-to-medium part
                manufacturing that matches 200T and 300T machine capacity.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C`}
                  className="gold-button text-center"
                >
                  Send Your Drawings
                </a>
                <a href={contactDetails.whatsappHref} className="outline-button text-center">
                  Get a Quote
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
              <div className="grid gap-4">
                <div className="industrial-card gold-frame relative overflow-hidden rounded-[2rem] p-3">
                  <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={heroFactory}
                      alt="HSX aluminum die casting workshop aligned with 200-ton and 300-ton machine capacity for compact OEM aluminum parts"
                      fill
                      preload
                      sizes="(min-width: 1280px) 44rem, (min-width: 1024px) 46vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/75" />
                    <div className="absolute left-5 top-5 rounded-2xl border border-white/12 bg-black/55 px-4 py-3 backdrop-blur">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                        Factory positioning
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        200T + 300T small-to-medium aluminum parts
                      </p>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Typical part types
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                          LED light housings, heat-sink shells, brackets, end
                          caps, enclosure shells, decorative covers, and custom
                          aluminum accessories.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Buyer focus
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                          Global wholesalers, importers, distributors, LED
                          lighting brands, automotive aftermarket brands, and
                          OEM project buyers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="industrial-card overflow-hidden p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                      <Image
                        src={oemAluminumParts}
                        alt="Compact OEM aluminum die casting parts with small-to-medium geometry"
                        fill
                        sizes="(min-width: 1024px) 22vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Product fit
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#f2eadb]">
                          Compact part geometry for brackets, caps, shells, and
                          lamp housings.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="industrial-card overflow-hidden p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                      <Image
                        src={factoryCapabilities}
                        alt="Factory capabilities supporting drilling, tapping, polishing, and finishing"
                        fill
                        sizes="(min-width: 1024px) 22vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Process depth
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#f2eadb]">
                          Drilling, tapping, polishing, anodizing, coating, and
                          spray painting support.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="manufacture" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="What we manufacture"
              title="Small-to-medium OEM aluminum parts with realistic product fit"
              description="This page is dedicated to compact OEM aluminum die casting parts that suit 200T and 300T machine capacity. The product scope is written for buyers who need manufacturable housings, shells, brackets, caps, and accessory components with post-machining and finishing support."
            />

            <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
              <div className="industrial-card gold-frame overflow-hidden p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={oemAluminumParts}
                    alt="OEM small-to-medium aluminum die casting parts for LED lighting, hardware accessories, and custom OEM projects"
                    fill
                    sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                    <p className="section-kicker">OEM part coverage</p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      Built around compact aluminum part geometry, mounting
                      features, and export-ready finishing workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {manufacturedParts.map((part, index) => (
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

        <section
          id="programs"
          className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,1)_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Representative OEM part programs"
              title="Visual examples of compact aluminum projects that match the factory fit"
              description="These program examples keep the page grounded in realistic small-to-medium aluminum die casting scope. The focus stays on lamp housings, heat-sink-style shells, brackets, end caps, enclosure shells, and compact custom hardware accessories."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {visualPrograms.map((program, index) => (
                <article
                  key={`${program.title}-${index}`}
                  className="industrial-card group overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.alt}
                      fill
                      sizes="(min-width: 1280px) 22rem, (min-width: 768px) 50vw, 100vw"
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

        <section
          id="support"
          className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,1)_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
              <div className="space-y-4">
                <div className="industrial-card gold-frame overflow-hidden p-3">
                  <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={factoryCapabilities}
                      alt="Factory capability image showing aluminum die casting support, machining, and finishing preparation"
                      fill
                      sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                      <p className="section-kicker">OEM custom manufacturing support</p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        Projects move from drawings and samples into mold
                        development, die casting, machining, finishing, and
                        buyer-ready packaging.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="metric-pill">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                      OEM input
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      Drawings + Samples
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                      Part files, samples, and custom project requirements are
                      reviewed before tooling or production launch.
                    </p>
                  </article>
                  <article className="metric-pill">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                      Process coverage
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      Cast to Finish
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                      Die casting, machining, drilling, tapping, polishing, and
                      finishing can be coordinated inside one OEM workflow.
                    </p>
                  </article>
                </div>
              </div>

              <div>
                <SectionHeading
                  eyebrow="OEM custom manufacturing support"
                  title="From buyer files to finished aluminum parts"
                  description="HSX accepts OEM aluminum die casting parts manufacturing based on drawings, samples, or custom project requirements. The workflow is structured for mold development, die casting, machining, hole processing, finishing, assembly coordination, and packaging support."
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                  {manufacturingSupport.map((item, index) => (
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
          </div>
        </section>

        <section id="capacity" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="industrial-card gold-frame overflow-hidden p-3">
              <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={factoryCapabilities}
                  alt="Factory capabilities for compact aluminum die casting, machining, drilling, tapping, and finishing support"
                  fill
                  sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                  <p className="section-kicker">Factory equipment</p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Compact aluminum die casting supported by machining and
                    finishing capacity matched to OEM part programs.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Factory equipment and capacity"
                title="Equipment sized for compact OEM aluminum part manufacturing"
                description="The factory capacity is described directly and conservatively. It is best suited to small-to-medium aluminum die casting parts that need repeatable casting, drilling, tapping, polishing, and finishing support."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Die casting machines
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">2</p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    1 x 200-ton machine and 1 x 300-ton machine
                  </p>
                </article>
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Secondary equipment
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    17
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    7 drilling machines, 7 tapping machines, and 3 polishing
                    and grinding machines
                  </p>
                </article>
              </div>

              <ul className="mt-8 space-y-4 text-base leading-8 text-[#e7dfcf]">
                {capacityPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="finishing"
          className="border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(199,162,91,0.11),transparent_28%),linear-gradient(180deg,#0c0c0c_0%,#070707_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Materials and surface finishing"
              title="Aluminum parts with project-matched finishing support"
              description="The factory supplies aluminum die casting parts and coordinates finishing around the target appearance, corrosion resistance, and end-market presentation required by the OEM project."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
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

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Application industries"
              title="Buyer industries aligned with compact aluminum part supply"
              description="The new product page is positioned for buyers sourcing practical OEM aluminum housings, shells, covers, and hardware accessories with export-oriented project communication."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {industries.map((industry, index) => (
                <article key={`${industry.title}-${index}`} className="industrial-card p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {industry.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#cbc3b4]">
                    {industry.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <SectionHeading
                eyebrow="Why global buyers choose us"
                title="Clear part scope, OEM support, and practical factory coordination"
                description="The strongest signal for wholesale and OEM buyers is accuracy. HSX is positioned as an aluminum die casting parts supplier focused on compact projects, coordinated secondary processes, and straightforward RFQ communication."
              />
            </div>

            <div className="grid gap-5">
              {buyerReasons.map((reason, index) => (
                <article key={`${reason.title}-${index}`} className="industrial-card p-6">
                  <h2 className="text-xl font-semibold text-white">
                    {reason.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                    {reason.description}
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
              title="Send the details needed for accurate OEM quotation"
              description="For faster review, buyers should send the part files, quantity plan, finish requirements, and packaging information that define the OEM aluminum part project clearly."
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
              title="Explore related aluminum die casting and LED lighting products"
              description="Many OEM aluminum part projects are connected with lighting housings, LED work lights, automotive LED lights, motorcycle LED lights, and decorative appearance covers. These related pages help buyers compare the correct product scope before sending an RFQ."
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
                  Die cast lamp housings, heat-sink-style bodies, covers, brackets,
                  and compact aluminum lighting components.
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
                href="/products/motorcycle-led-lights"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related product</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Motorcycle LED Lights
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Motorcycle LED lights, auxiliary lighting, compact aluminum
                  housings, brackets, covers, and private-label lighting support.
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

        <section className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="gold-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
                <div>
                  <p className="section-kicker">Final inquiry CTA</p>
                  <h2 className="section-heading mt-4 text-3xl text-[#120f08] sm:text-4xl">
                    Send your drawings, samples, or custom project requirements
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#2d2417] sm:text-lg">
                    HSX reviews OEM aluminum die casting parts for global
                    wholesalers, importers, distributors, hardware brands,
                    automotive aftermarket brands, LED lighting brands, and OEM
                    project buyers needing compact small-to-medium aluminum
                    parts.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <a
                      href={contactDetails.whatsappHref}
                      className="rounded-full bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      WhatsApp RFQ
                    </a>
                    <a
                      href={`mailto:${contactDetails.email}?subject=RFQ%20for%20OEM%20Aluminum%20Die%20Casting%20Parts&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20OEM%20aluminum%20die%20casting%20parts.%0A%0APart%20type%3A%0AQuantity%3A%0AMaterial%20/%20finish%3A%0ADrawing%20or%20sample%20available%3A%0APackaging%20requirements%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
                      className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                    >
                      Email Your RFQ
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
                        src={oemAluminumParts}
                        alt="OEM aluminum die casting parts for drawings-based and samples-based custom projects"
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
                          Send drawings, samples, finish requirements, and
                          target quantity for a compact aluminum part review.
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
            <p className="section-heading mt-3 text-2xl text-white">
              Foshan Huashunxiang Hardware Products Factory
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#bbb2a3]">
              OEM small-to-medium aluminum die casting parts supplier for
              global wholesalers, importers, distributors, hardware brands,
              automotive aftermarket brands, LED lighting brands, and OEM
              buyers.
            </p>
          </div>

          <div className="text-sm leading-7 text-[#b7ae9e]">
            <p>
              <span className="text-white/90">Email:</span>{" "}
              <a
                href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C`}
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
