import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import automotiveLedLight from "../../public/images/automotive-led-light.png";
import brakeCaliperCover from "../../public/images/brake-caliper-cover.png";
import factoryCapabilities from "../../public/images/factory-capabilities.png";
import heroFactory from "../../public/images/hero-factory-200t-300t.png";
import ledWorkLight from "../../public/images/led-work-light.png";
import motorcycleLedLight from "../../public/images/motorcycle-led-light.png";
import oemAluminumParts from "../../public/images/oem-small-aluminum-die-casting-parts.png";

type ProductCategory = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  details: string[];
  href?: string;
};

type InfoCard = {
  title: string;
  description: string;
};

const navigationLinks = [
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Finishing", href: "#finishing" },
  { label: "Quality", href: "#quality" },
  { label: "RFQ", href: "/contact" },
];

const contactDetails = {
  email: "nicolsonhuang2020@gmail.com",
  phone: "+86 176 6615 5283",
  whatsappHref: "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%20Please%20contact%20me%20with%20quotation%20details.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What files should buyers send for quotation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Send drawings, samples, product photos, dimensions, material requirements, surface finish, target quantity, packaging requirements, logo needs, and target market details.",
      },
    },
    {
      "@type": "Question",
      name: "What aluminum die casting scope is suitable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HSX focuses on compact housings, brackets, covers, end caps, shells, lamp bodies, heat-sink-style housings, and other small-to-medium aluminum components suitable for 200T and 300T equipment.",
      },
    },
    {
      "@type": "Question",
      name: "Are brake caliper covers functional brake parts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. HSX decorative brake caliper covers are appearance accessories installed outside the brake caliper. They are not braking-force components. High-temperature paint options for normal driving use, custom colors, custom logo font, and logo color support can be reviewed by project.",
      },
    },
  ],
};

const heroStats = [
  {
    label: "Die Casting Scope",
    value: "200T + 300T",
    note: "Focused on small-to-medium aluminum parts",
  },
  {
    label: "OEM Input",
    value: "Drawings or Samples",
    note: "Project-based manufacturing for wholesale and OEM buyers",
  },
  {
    label: "Secondary Processes",
    value: "Machining + Finishing",
    note: "Drilling, tapping, polishing, anodizing, coating, painting",
  },
];

const productCategories: ProductCategory[] = [
  {
    title: "OEM Aluminum Die Casting Parts",
    description:
      "Aluminum housings, end caps, brackets, shells, and lamp bodies produced within realistic 200T and 300T machine scope.",
    image: oemAluminumParts,
    alt: "Small-to-medium aluminum die casting parts for OEM lighting and hardware applications",
    href: "/products/oem-aluminum-die-casting-parts",
    details: [
      "Suitable for compact housings, covers, brackets, and enclosure shells",
      "Production accepted from drawings, samples, or custom project requirements",
      "Ideal for export buyers sourcing repeatable OEM aluminum components",
    ],
  },
  {
    title: "Custom Aluminum Hardware Parts",
    description:
      "Custom aluminum accessories and hardware parts for aftermarket brands, distributors, and industrial hardware buyers.",
    image: oemAluminumParts,
    alt: "Custom aluminum hardware parts with machined openings and mounting points",
    href: "/products/oem-aluminum-die-casting-parts",
    details: [
      "Small brackets, accessory bases, caps, and functional hardware parts",
      "Dimensional features coordinated with drilling and tapping operations",
      "Designed for practical aluminum applications instead of oversized castings",
    ],
  },
  {
    title: "Automotive LED Lights",
    description:
      "Automotive LED lighting products developed for aftermarket brands and wholesale distributors seeking durable aluminum light bodies.",
    image: automotiveLedLight,
    alt: "Automotive LED light with aluminum housing for aftermarket supply",
    href: "/products/automotive-led-lights",
    details: [
      "Aluminum light housings and heat-sink structures suited to compact die casting",
      "Built for buyer-led branding, packaging, and model selection",
      "Appropriate for utility, visibility, and styling-focused vehicle programs",
    ],
  },
  {
    title: "Motorcycle LED Lights",
    description:
      "Motorcycle LED light products with compact aluminum housings for distributors and private-label buyers.",
    image: motorcycleLedLight,
    alt: "Motorcycle LED light product with compact aluminum housing",
    href: "/products/motorcycle-led-lights",
    details: [
      "Compact cast lamp bodies aligned with 200T and 300T aluminum equipment",
      "Fit for model-specific aftermarket and replacement lighting programs",
      "Useful for sourcing projects requiring small, repeatable aluminum lamp parts",
    ],
  },
  {
    title: "LED Work Lights",
    description:
      "LED work light products using aluminum housings and heat-dissipation-focused body structures for industrial and vehicle use.",
    image: ledWorkLight,
    alt: "LED work light with aluminum housing and compact form factor",
    href: "/products/led-work-lights",
    details: [
      "Well suited for cast aluminum housings, bezels, and end caps",
      "Designed for industrial, utility, and off-road accessory channels",
      "Balanced for OEM appearance, thermal structure, and practical assembly",
    ],
  },
  {
    title: "Decorative Brake Caliper Covers",
    description:
      "Decorative non-load-bearing appearance covers for styling programs, manufactured as aluminum exterior accessories.",
    image: brakeCaliperCover,
    alt: "Decorative aluminum brake caliper cover for vehicle appearance upgrades",
    href: "/products/decorative-brake-caliper-covers",
    details: [
      "Appearance-focused cover parts only, not braking-force components",
      "Suitable for aftermarket styling sets and private-label accessory programs",
      "Produced as compact aluminum cover pieces within small-to-medium casting scope",
    ],
  },
];

const capabilities = [
  "2 aluminum die casting machines: 1 x 200-ton and 1 x 300-ton",
  "7 multi-axis drilling machines for repeatable hole processing",
  "7 multi-axis tapping machines for threaded aluminum parts",
  "3 polishing and grinding machines for appearance preparation",
  "Anodizing, powder coating, and spray painting options",
  "Best suited to aluminum lamp housings, brackets, end caps, covers, and shells",
];

const processSteps: InfoCard[] = [
  {
    title: "RFQ and Requirement Review",
    description:
      "Review drawings, samples, quantities, surface requirements, and application details before quoting.",
  },
  {
    title: "Die Casting Feasibility Check",
    description:
      "Confirm part geometry, die casting feasibility, machining features, and finishing expectations before launch.",
  },
  {
    title: "Aluminum Die Casting Production",
    description:
      "Produce compact aluminum castings on 200T and 300T machines sized for small-to-medium OEM parts.",
  },
  {
    title: "Drilling and Tapping",
    description:
      "Complete drilling, tapping, and detail work needed for mounting, assembly, or cosmetic fit-up.",
  },
  {
    title: "Polishing and Surface Preparation",
    description:
      "Polish and grind where required to prepare the part for anodizing, powder coating, or spray painting.",
  },
  {
    title: "Inspection and Export Packing",
    description:
      "Check agreed dimensions, threads, appearance, and packing instructions before shipment to the buyer.",
  },
];

const surfaceFinishes: InfoCard[] = [
  {
    title: "Anodizing",
    description:
      "Used where buyers need a clean metallic appearance, corrosion resistance, or controlled surface tone.",
  },
  {
    title: "Powder Coating",
    description:
      "Suitable for durable exterior coverage on housings, covers, and aluminum accessory parts.",
  },
  {
    title: "Spray Painting",
    description:
      "Applied when color control, styling alignment, or brand-specific appearance is required.",
  },
  {
    title: "Polishing and Grinding",
    description:
      "Surface conditioning for appearance improvement before finishing or direct visual inspection.",
  },
];

const industriesServed: InfoCard[] = [
  {
    title: "Automotive Aftermarket",
    description:
      "Automotive LED lights, aluminum housings, and appearance accessories for private-label and replacement channels.",
  },
  {
    title: "Motorcycle Lighting",
    description:
      "Compact lamp bodies, motorcycle lighting products, and branded aluminum accessory programs.",
  },
  {
    title: "Industrial and Utility Lighting",
    description:
      "LED work light housings and aluminum heat-sink structures for heavy-duty lighting lines.",
  },
  {
    title: "OEM Aluminum Hardware",
    description:
      "Small aluminum brackets, end caps, enclosure shells, and accessory parts for OEM project sourcing.",
  },
];

const buyerReasons: InfoCard[] = [
  {
    title: "Realistic Machine Scope",
    description:
      "Production focus stays on small-to-medium aluminum parts that fit 200T and 300T die casting reality.",
  },
  {
    title: "Flexible OEM Project Input",
    description:
      "Projects can begin from technical drawings, approved samples, or buyer-defined custom requirements.",
  },
  {
    title: "Machining and Finishing Support",
    description:
      "Drilling, tapping, polishing, and finishing coordination reduce handoff friction across the sourcing process.",
  },
  {
    title: "B2B Export Buyer Focus",
    description:
      "Homepage messaging and production offering are aligned for importers, distributors, aftermarket brands, and OEM buyers.",
  },
  {
    title: "Clear Product Positioning",
    description:
      "Copy focuses on manufacturable aluminum products, clear scope, and realistic factory capabilities.",
  },
];

const qualityChecks = [
  "Drawing and sample review before tooling or production release",
  "In-process dimensional checks for key mounting points and critical features",
  "Thread, hole, and machining verification after drilling and tapping operations",
  "Surface appearance inspection before packing and shipment release",
];

const rfqChecklist = [
  "Part drawings, sample photos, or dimensional sketches",
  "Target material and required finish for the aluminum part",
  "Order quantity, target market, and any branding or packaging notes",
  "Application details for LED lighting, hardware accessories, or decorative covers",
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

export default function Home() {
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
            <a
              href="#top"
              className="section-heading mt-3 block text-2xl text-white sm:text-3xl"
            >
              HSX DIECASTING
            </a>
            <p className="mt-3 text-sm leading-7 text-[#beb6a8]">
              Foshan Huashunxiang Hardware Products Factory supplies OEM
              small-to-medium aluminum die casting parts and automotive LED
              lighting for global wholesalers, importers, distributors,
              aftermarket brands, and OEM buyers.
            </p>
          </div>

          <nav
            aria-label="Primary"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#ddd2ba]"
          >
            {navigationLinks.map((link) => (
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.14),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
          <div className="container-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:py-24">
            <div className="motion-rise">
              <p className="section-kicker">
                OEM aluminum die casting and LED lighting supply
              </p>
              <h1 className="section-heading mt-6 text-4xl leading-none text-white sm:text-5xl xl:text-6xl">
                Small-to-Medium Aluminum Die Casting Parts and LED Lighting for
                Global B2B Buyers
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                Foshan Huashunxiang Hardware Products Factory focuses on
                compact aluminum die cast parts, custom aluminum hardware parts,
                automotive LED lights, motorcycle LED lights, LED work lights,
                and decorative brake caliper covers. The production scope is
                aligned with 200T and 300T aluminum die casting capacity and is
                built for wholesale, aftermarket, and OEM sourcing programs.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={contactDetails.whatsappHref} className="gold-button text-center">
                  Start RFQ Review
                </a>
                <a href="#capabilities" className="outline-button text-center">
                  View Factory Capabilities
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

              <div className="industrial-card mt-10 p-6 sm:p-8">
                <p className="section-kicker">Typical aluminum product fit</p>
                <p className="mt-4 text-xl font-semibold text-white">
                  LED work light housings, lamp heat-sink bodies, small
                  brackets, end caps, motorcycle light housings, enclosure
                  shells, decorative covers, and custom aluminum accessories.
                </p>
              </div>
            </div>

            <div className="motion-rise-delay">
              <div className="industrial-card gold-frame relative overflow-hidden rounded-[2rem] p-3">
                <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={heroFactory}
                    alt="Foshan Huashunxiang aluminum die casting workshop showing compact production capability aligned with 200-ton and 300-ton machines"
                    fill
                    preload
                    sizes="(min-width: 1280px) 44rem, (min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/75" />
                  <div className="absolute left-5 top-5 rounded-2xl border border-white/12 bg-black/55 px-4 py-3 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                      Factory Scope
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      200T + 300T aluminum die casting
                    </p>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 grid gap-4 lg:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                        Best-fit products
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                        Compact housings, heat-sink shells, brackets, caps,
                        covers, and other small-to-medium aluminum parts.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                        Buyer positioning
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                        Wholesale importers, aftermarket brands, distributors,
                        and OEM project buyers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Product categories"
              title="Focused aluminum parts and lighting programs"
              description="The homepage stays inside realistic 200T and 300T aluminum die casting scope. Product messaging centers on compact cast components, aluminum housings, and export-ready lighting categories rather than oversized structural castings."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white">
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
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#c8c0b3]">
                      {category.description}
                    </p>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-[#f3ecdd]">
                      {category.details.map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d5ae67]" />
                          <span>{detail}</span>
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
                        Send Inquiry
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,1)_100%)] py-16 lg:py-24"
        >
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="industrial-card gold-frame overflow-hidden p-3">
              <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={factoryCapabilities}
                  alt="Factory capability view showing aluminum die casting and machining support for compact aluminum parts"
                  fill
                  sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                  <p className="section-kicker">Capability focus</p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Compact aluminum parts that match 200T and 300T die casting,
                    secondary machining, and appearance finishing requirements.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Factory capabilities"
                title="Production arranged for compact aluminum component work"
                description="The equipment mix supports small-to-medium aluminum cast parts, post-casting machining, and appearance finishing for lighting housings, hardware parts, decorative covers, and custom OEM accessories."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Die casting machines
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">2</p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    1 x 200-ton and 1 x 300-ton aluminum die casting machine
                  </p>
                </article>
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Machining support
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    14
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    7 multi-axis drilling machines and 7 multi-axis tapping
                    machines
                  </p>
                </article>
              </div>

              <ul className="mt-8 space-y-4 text-base leading-8 text-[#e7dfcf]">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="process" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="OEM custom manufacturing process"
              title="From buyer requirements to finished aluminum parts"
              description="The process is structured for wholesale and OEM sourcing projects that need clear review, compact aluminum part feasibility, secondary machining, and export-ready finishing coordination."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {processSteps.map((step, index) => (
                <article key={`${step.title}-${index}`} className="industrial-card p-6">
                  <p className="section-kicker">Step {index + 1}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#c9c0b1]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="finishing"
          className="border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(199,162,91,0.11),transparent_28%),linear-gradient(180deg,#0c0c0c_0%,#070707_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Surface finishing options"
              title="Appearance and protection options for aluminum parts"
              description="Surface treatment is positioned as a practical extension of the aluminum part manufacturing flow. Finishes are selected around buyer appearance targets, corrosion needs, and brand presentation goals."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {surfaceFinishes.map((finish, index) => (
                <article key={`${finish.title}-${index}`} className="industrial-card p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {finish.title}
                  </h3>
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
              eyebrow="Industries served"
              title="Buyer segments aligned with the product mix"
              description="The homepage is written for sourcing teams that need realistic aluminum part manufacturing support, compact die cast housings, and export-oriented lighting or accessory programs."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {industriesServed.map((industry, index) => (
                <article key={`${industry.title}-${index}`} className="industrial-card p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {industry.title}
                  </h3>
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
                eyebrow="Why global wholesalers choose us"
                title="A homepage built around sourcing clarity"
                description="The strongest B2B signal here is accuracy: realistic machine scope, compact aluminum product focus, and a workflow that matches wholesale and OEM purchasing expectations."
              />
            </div>

            <div className="grid gap-5">
              {buyerReasons.map((reason, index) => (
                <article key={`${reason.title}-${index}`} className="industrial-card p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="quality"
          className="border-b border-white/8 bg-[linear-gradient(180deg,#090909_0%,#050505_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Quality control"
              title="Inspection checkpoints matched to OEM aluminum part supply"
              description="Quality messaging stays practical and production-oriented. The emphasis is on review discipline, feature verification, and appearance inspection for aluminum parts and lighting-related housings."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div className="industrial-card p-6 sm:p-8">
                <ul className="space-y-4 text-base leading-8 text-[#efe7d9]">
                  {qualityChecks.map((check) => (
                    <li key={check} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="industrial-card p-6 sm:p-8">
                <p className="section-kicker">Important product note</p>
                <p className="mt-4 text-2xl font-semibold text-white">
                  Decorative brake caliper covers are presented strictly as
                  non-load-bearing appearance parts.
                </p>
                <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                  The homepage avoids any claim that decorative covers are
                  braking-force components. This keeps the product scope clear
                  for buyers, prevents safety confusion, and aligns the offering
                  with realistic aluminum accessory manufacturing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="factory-trust"
          className="scroll-mt-40 border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(199,162,91,0.1),transparent_30%),linear-gradient(180deg,#0b0b0b_0%,#050505_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Factory / About / FAQ / Trust"
              title="A practical aluminum die casting and LED lighting supplier for B2B buyers"
              description="HSX DIECASTING is presented as a realistic factory partner for global wholesalers, importers, distributors, aftermarket brands, and OEM buyers who need compact aluminum parts, LED lighting products, and clear project communication."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="industrial-card p-6 sm:p-8">
                <p className="section-kicker">Factory background</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Foshan Huashunxiang Hardware Products Factory
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#cac1b2]">
                  HSX DIECASTING is based in Foshan, Guangdong, China, and focuses
                  on small-to-medium aluminum die casting parts, aluminum light
                  housings, LED work lights, automotive LED lights, motorcycle LED
                  lights, and decorative brake caliper covers for export-oriented
                  B2B buyers.
                </p>
                <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                  The factory scope is described carefully around 200T and 300T
                  aluminum die casting machines, drilling, tapping, polishing,
                  grinding, anodizing, powder coating, and spray painting support.
                </p>
              </article>

              <article className="industrial-card p-6 sm:p-8">
                <p className="section-kicker">Why buyers work with HSX</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Clear scope, practical communication, and export-ready support
                </h3>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-[#cac1b2]">
                  <li className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>Realistic small-to-medium aluminum die casting scope instead of exaggerated capacity claims.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>Direct factory communication with a shorter decision path, so RFQ details can be checked closer to the production workshop.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>Flexible support for sample-stage projects, new product development, and small-to-medium batch OEM orders.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>RFQ review based on drawings, samples, product photos, quantity, finish, packaging, and target market.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>Coordinated die casting, post-processing, and surface finishing support, including anodizing for suitable aluminum projects.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>Support for aluminum parts, LED lighting products, decorative covers, and private-label project needs.</span>
                  </li>
                </ul>
              </article>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <article className="industrial-card p-6">
                <p className="section-kicker">FAQ 01</p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  What files should buyers send for quotation?
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                  Send drawings, samples, product photos, dimensions, material
                  requirements, surface finish, target quantity, packaging
                  requirements, logo needs, and target market details.
                </p>
              </article>

              <article className="industrial-card p-6">
                <p className="section-kicker">FAQ 02</p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  What aluminum die casting scope is suitable?
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                  The site focuses on compact housings, brackets, covers, end caps,
                  shells, lamp bodies, heat-sink-style housings, and other
                  small-to-medium aluminum components suitable for 200T and 300T
                  equipment.
                </p>
              </article>

              <article className="industrial-card p-6">
                <p className="section-kicker">FAQ 03</p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  Are brake caliper covers functional brake parts?
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                  No. HSX decorative brake caliper covers are appearance accessories
                  installed outside the brake caliper. They are not braking-force
                  components. High-temperature paint options for normal driving use,
                  custom colors, custom logo font, and logo color support can be
                  reviewed by project.
                </p>
              </article>
            </div>

            <div className="mt-12 rounded-[2rem] border border-[#d7b56d]/25 bg-[#111111] p-8 shadow-2xl shadow-black/30">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="section-kicker">Trust signal</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                    Built for buyers who need a real factory conversation before quotation
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[#cac1b2]">
                    HSX does not position every project as automatically suitable.
                    Buyers are encouraged to send clear RFQ details first, so the
                    factory can review whether the project matches the available
                    die casting machines, secondary processing, finishing options,
                    product category, and export packaging requirements.
                  </p>
                </div>

                <div className="grid gap-4 text-sm text-[#efe7d9] sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[#f4d27a]">Factory location</p>
                    <p className="mt-2">Foshan, Guangdong, China</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[#f4d27a]">Main equipment</p>
                    <p className="mt-2">200T + 300T aluminum die casting</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[#f4d27a]">WhatsApp / Phone</p>
                    <p className="mt-2">+86 176 6615 5283</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[#f4d27a]">Email</p>
                    <p className="mt-2">nicolsonhuang2020@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="rfq" className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="gold-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
                <div>
                  <p className="section-kicker">Final RFQ / inquiry CTA</p>
                  <h2 className="section-heading mt-4 text-3xl text-[#120f08] sm:text-4xl">
                    Send the project details that matter first
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#2d2417] sm:text-lg">
                    Share your drawing set, sample, target finish, and order
                    plan. Foshan Huashunxiang Hardware Products Factory is
                    positioned to review small-to-medium aluminum die casting
                    parts, custom hardware projects, LED light housings, and
                    decorative cover programs for export buyers.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <a
                      href={contactDetails.whatsappHref}
                      className="rounded-full bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      WhatsApp RFQ
                    </a>
                    <a
                      href={`mailto:${contactDetails.email}?subject=RFQ%20for%20OEM%20Aluminum%20Die%20Casting%20or%20LED%20Lighting%20Project&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation.%0A%0AProduct%20type%3A%0AQuantity%3A%0AMaterial%20/%20finish%3A%0ADrawing%20or%20sample%20available%3A%0ATarget%20market%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
                      className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                    >
                      Email Project Details
                    </a>
                    <a
                      href="#products"
                      className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                    >
                      Review Product Range
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
                      RFQ checklist
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
      
        {/* Internal links: homepage product category expansion */}
        <section className="border-t border-white/10 bg-black/25 px-6 py-16 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="section-kicker">Expanded product categories</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white lg:text-5xl">
              More OEM product pages for LED lighting and aluminum die casting buyers
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-8 text-white/70 lg:text-lg">
              Explore focused product pages for automotive LED lights, motorcycle LED lights,
              aluminum light housings, decorative brake caliper covers, LED work lights,
              and OEM aluminum die casting parts.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  Die cast aluminum lamp housings, LED heat-sink bodies, covers, and brackets.
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

              <a
                href="/products/led-work-lights"
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-amber-300/50"
              >
                <h3 className="text-lg font-semibold text-white">LED Work Lights</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  LED work lights and aluminum lighting-related parts for global B2B buyers.
                </p>
              </a>

              <a
                href="/products/oem-aluminum-die-casting-parts"
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-amber-300/50"
              >
                <h3 className="text-lg font-semibold text-white">OEM Aluminum Die Casting Parts</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  Small-to-medium aluminum die casting parts, housings, covers, and custom hardware.
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
              Foshan Huashunxiang Hardware Products Factory
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
