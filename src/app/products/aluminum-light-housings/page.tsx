import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../../components/site-navigation";

import aluminumLightHousing from "../../../../public/images/aluminum-light-housing-heat-sink.png";
import ledWorkLight from "../../../../public/images/led-work-light.png";
import automotiveLedLight from "../../../../public/images/automotive-led-light.png";
import motorcycleLedLight from "../../../../public/images/motorcycle-led-light.png";
import workshopHorizontal from "../../../../public/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg";
import oemAluminumParts from "../../../../public/images/oem-small-aluminum-die-casting-parts.png";

type InfoCard = {
  title: string;
  description: string;
};

type ProductProgram = {
  title: string;
  description: string;
  tag: string;
  image: typeof aluminumLightHousing;
  alt: string;
  points: string[];
};

const pageTitle =
  "OEM Aluminum Die Casting Lighting Parts & Light Housings | HSX";

const pageDescription =
  "OEM aluminum die casting lighting parts and light housings for suitable small-to-medium projects. Send drawings, 3D files, quantity, machining, and finishing requirements for HSX project review.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/products/aluminum-light-housings",
  },
  keywords: [
    "aluminum light housings supplier",
    "OEM aluminum light housings",
    "die cast lamp housings",
    "LED heat sink bodies",
    "aluminum lighting parts",
    "custom aluminum lamp housing",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/products/aluminum-light-housings",
    images: [
      {
        url: "/images/aluminum-light-housing-heat-sink.png",
        alt: "OEM aluminum light housing and LED heat sink body by HSX DIECASTING",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/aluminum-light-housing-heat-sink.png"],
  },
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  phone: "+86 176 6615 5283",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20OEM%20aluminum%20light%20housings%2C%20die%20cast%20lamp%20housings%2C%20or%20LED%20heat-sink%20bodies.%20Please%20contact%20me%20with%20quotation%20details.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const heroStats = [
  {
    label: "Die Casting Scope",
    value: "200T / 300T Product Capability Range",
    note: "Focused on compact aluminum light housings and small-to-medium lamp parts",
  },
  {
    label: "Lighting Part Types",
    value: "Housing + Cover",
    note: "Lamp bodies, rear covers, brackets, shells, and heat-sink style components",
  },
  {
    label: "Finishing Support",
    value: "Coat + Finish",
    note: "Powder coating, spray painting, polishing, and partner-supported anodizing review",
  },
];

const typicalParts: InfoCard[] = [
  {
    title: "Die Cast Aluminum LED Light Housings",
    description:
      "Compact aluminum lamp bodies for outdoor LED lights, LED work lights, motorcycle / off-road auxiliary lights, and focused OEM lighting programs.",
  },
  {
    title: "Outdoor LED Light Housings",
    description:
      "Die cast aluminum housings for suitable outdoor lighting projects where the housing structure, mounting features, finish, and packaging requirements can be reviewed before quotation.",
  },
  {
    title: "Garden Lamp Housings",
    description:
      "Small-to-medium garden lamp bodies, covers, and enclosure-style aluminum parts for buyers who provide drawings, samples, application details, and finishing requirements.",
  },
  {
    title: "LED Heat-Sink Bodies",
    description:
      "Die-cast aluminum heat-sink bodies shaped around ribs, fins, wall thickness, mounting space, cover integration, and compact lighting assembly needs, without overclaiming final product performance.",
  },
  {
    title: "Rear Covers and End Caps",
    description:
      "Cast aluminum covers, caps, and closure parts used in compact lamp bodies and lighting-related enclosure assemblies.",
  },
  {
    title: "Mounting Brackets",
    description:
      "Small aluminum brackets and support features with drilling, tapping, hole position, thread, and mounting review for lighting installation requirements.",
  },
  {
    title: "Aluminum Shells",
    description:
      "Custom compact aluminum shells for lighting products, hardware accessories, and OEM enclosure-style projects.",
  },
  {
    title: "Aluminum Lighting Brackets and Enclosures",
    description:
      "Lighting brackets, compact enclosures, and semi-finished aluminum die casting parts prepared for drilling, tapping, polishing, powder coating, painting, or buyer-specified finishing.",
  },
];

const processSupport: InfoCard[] = [
  {
    title: "Drawing and Sample Review",
    description:
      "Review 2D drawings, 3D files, sample photos, target dimensions, mounting areas, wall thickness, and appearance requirements before quoting.",
  },
  {
    title: "Mold and Part Feasibility",
    description:
      "Actual equipment: 280T and 320T aluminum die casting machines. Check whether the aluminum light housing fits the 200T / 300T Product Capability Range before mold development or production planning, including housing structure, wall thickness, ribs, fins, and machining allowance.",
  },
  {
    title: "Aluminum Die Casting",
    description:
      "Produce compact aluminum lamp housings, covers, brackets, and heat-sink style bodies using small-to-medium die casting capacity.",
  },
  {
    title: "Drilling and Tapping",
    description:
      "In-house drilling and tapping; CNC machining can be coordinated through partner-supported resources when required.",
  },
  {
    title: "Surface Finishing",
    description:
      "Coordinate polishing, powder coating, and spray painting around project appearance and surface preparation needs. Anodizing can be coordinated through partner-supported resources for selected suitable parts when required by the project.",
  },
  {
    title: "Inspection and Packing",
    description:
      "Check appearance, agreed dimensions, mounting features, thread details, and export packing requirements before shipment.",
  },
];

const engineeringReview: InfoCard[] = [
  {
    title: "Die Cast Aluminum LED Light Housing Supplier",
    description:
      "HSX can review suitable OEM aluminum light housing projects based on 2D drawings, 3D files, samples, estimated quantity, product application, machining needs, surface finishing, and packaging requirements.",
  },
  {
    title: "Lighting Housing Applications",
    description:
      "Suitable project directions may include outdoor LED light housings, garden lamp housings, LED work light aluminum housings, motorcycle / off-road LED work light housings, aluminum lighting brackets, and compact enclosure parts.",
  },
  {
    title: "Heat Dissipation Structure Review",
    description:
      "For lighting housings, HSX reviews ribs, fins, housing structure, wall thickness, machining allowance, mounting surfaces, and surface finishing needs where they affect manufacturability. The review does not claim final thermal performance, waterproof performance, certifications, or finished product performance.",
  },
  {
    title: "Secondary Processing and Semi-finished Parts",
    description:
      "The factory can support drilling, tapping, hole and thread review, polishing, powder coating, painting, and semi-finished aluminum die casting parts before final finishing or buyer-side assembly planning.",
  },
  {
    title: "Housing Scope, Not Complete Lamp Assembly",
    description:
      "HSX mainly reviews aluminum housing, heat-sink body, cover, bracket, and die casting related scope. Complete LED lamp assembly should only be discussed when the actual project requirements are confirmed.",
  },
  {
    title: "Right-sized Factory Fit",
    description:
      "HSX focuses on suitable small-to-medium aluminum die casting projects that match its equipment and process control, rather than oversized structural castings or unrelated all-product sourcing.",
  },
];

const productPrograms: ProductProgram[] = [
  {
    title: "LED Work Light Housings",
    description:
      "Compact die cast aluminum housings and heat-sink bodies for LED work lights used in utility, equipment, off-road, and industrial lighting channels.",
    tag: "Work Lights",
    image: ledWorkLight,
    alt: "LED work light using compact aluminum housing and heat sink body",
    points: [
      "Compact aluminum body",
      "Heat-dissipation focused shape",
      "Suitable for OEM lighting programs",
    ],
  },
  {
    title: "Automotive Lamp Housings",
    description:
      "Aluminum housings, rear covers, and mounting parts for automotive auxiliary lights and aftermarket vehicle lighting programs.",
    tag: "Automotive",
    image: automotiveLedLight,
    alt: "Automotive LED light with aluminum lamp housing",
    points: [
      "Aftermarket lighting supply",
      "Aluminum lamp body support",
      "Private-label project fit",
    ],
  },
  {
    title: "Motorcycle Light Housings",
    description:
      "Small aluminum lamp housings and compact shell parts for motorcycle lighting, styling, replacement, and accessory programs.",
    tag: "Motorcycle",
    image: motorcycleLedLight,
    alt: "Motorcycle LED light with compact aluminum housing",
    points: [
      "Small housing footprints",
      "Appearance-driven finishing",
      "Drawing or sample based development",
    ],
  },
  {
    title: "Custom Aluminum Lighting Parts",
    description:
      "OEM aluminum light housing parts, covers, brackets, shells, and lighting-related hardware components based on buyer requirements.",
    tag: "Custom OEM",
    image: oemAluminumParts,
    alt: "Custom aluminum lighting parts and die cast hardware components",
    points: [
      "Covers, caps, and brackets",
      "Drilling and tapping support",
      "Export-ready finishing options",
    ],
  },
];

const finishingOptions: InfoCard[] = [
  {
    title: "Powder Coating",
    description:
      "Durable exterior coverage for aluminum lamp housings, LED heat-sink bodies, covers, and brackets when color, corrosion resistance, and surface protection requirements are confirmed.",
  },
  {
    title: "Spray Painting",
    description:
      "Used where lighting brands require color matching, model-specific appearance, or branded visual presentation.",
  },
  {
    title: "Anodizing",
    description:
      "Anodizing can be coordinated through partner-supported resources for selected suitable parts when required by the project.",
  },
  {
    title: "Polishing and Surface Preparation",
    description:
      "Surface preparation for visible aluminum parts before coating, painting, partner-supported anodizing, or final appearance review.",
  },
];

const buyerFit: InfoCard[] = [
  {
    title: "LED Work Light Brands",
    description:
      "Aluminum work light housings, covers, brackets, and heat-sink bodies for branded lighting product lines.",
  },
  {
    title: "Automotive Aftermarket Buyers",
    description:
      "Compact lamp housings and aluminum lighting components for vehicle accessory programs and distributors.",
  },
  {
    title: "Motorcycle Lighting Suppliers",
    description:
      "Small lamp bodies, covers, and aluminum shells for motorcycle lighting and accessory sourcing programs.",
  },
  {
    title: "OEM Project Buyers",
    description:
      "Custom aluminum lighting parts developed from drawings, samples, or project requirements, with direct factory-side communication for sample-stage review, small-to-medium batch planning, and practical finish confirmation.",
  },
];

const rfqChecklist = [
  "2D drawings with dimensions, mounting points, and important tolerance notes",
  "3D files such as STEP, STP, IGS, IGES, STL, or X_T when available",
  "Sample photos or reference product photos",
  "Product application such as outdoor LED light, garden lamp, work light, motorcycle light, or automotive light",
  "Waterproof, corrosion resistance, heat dissipation, and surface exposure requirements if they apply to the housing project",
  "Estimated quantity and repeat-order expectations",
  "Machining requirements such as drilling, tapping, threaded holes, or assembly features",
  "Surface finishing requirements such as powder coating, painting, polishing, or partner-supported anodizing review",
  "Packaging requirements, branding needs, and target market information",
];

const faqItems: InfoCard[] = [
  {
    title: "What aluminum light housing parts can HSX review?",
    description:
      "HSX can review small-to-medium die-cast aluminum light housings, heat-sink housings, rear covers, mounting brackets, small covers, and OEM aluminum die casting parts used in LED work light and industrial lighting projects.",
  },
  {
    title:
      "Is a bigger die casting machine always better for small aluminum light housings?",
    description:
      "Not always. Small-to-medium aluminum parts need right-sized die casting production. Machine tonnage, mold structure, casting flow, venting, trimming, machining, and surface finishing requirements should be reviewed together before production.",
  },
  {
    title: "What should buyers send for an aluminum light housing RFQ?",
    description:
      "Buyers can send 2D drawings, 3D files, sample photos, existing part photos, target material, quantity, application, machining requirements, drilling or tapping requirements, and surface finishing requirements.",
  },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "OEM Aluminum Light Housing Manufacturing Service",
  url: "https://www.hsxdiecasting.com/products/aluminum-light-housings",
  image: [
    "https://www.hsxdiecasting.com/images/aluminum-light-housing-heat-sink.png",
  ],
  description:
    "B2B OEM manufacturing service for compact aluminum light housings, die cast lamp housings, LED heat-sink bodies, covers, brackets, and lighting-related parts based on buyer drawings, samples, photos, and project requirements.",
  provider: {
    "@type": "Organization",
    name: "Foshan Huashunxiang Hardware Products Factory",
    url: "https://www.hsxdiecasting.com",
  },
  serviceType: "OEM aluminum light housing manufacturing",
  areaServed: "Global B2B Markets",
  category: "Aluminum lighting housing manufacturing",
};

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

export default function AluminumLightHousingsPage() {
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
                href={`mailto:${contactDetails.email}?subject=RFQ%20for%20Aluminum%20Light%20Housings&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20aluminum%20light%20housings.%0A%0AProduct%20type%3A%0AQuantity%3A%0AHousing%20dimensions%3A%0AFinish%20requirement%3A%0ADrawing%20or%20sample%20available%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
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
              <p className="section-kicker">Aluminum die cast lighting parts</p>
              <h1 className="section-heading mt-6 text-4xl leading-none text-white sm:text-5xl xl:text-6xl">
                OEM Aluminum Die Casting Lighting Parts and Light Housings
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                HSX DIECASTING supplies compact aluminum light housings, LED
                work light aluminum housings, die-cast heat-sink bodies,
                covers, brackets, shells, and custom aluminum lighting parts
                for global OEM and wholesale buyers. The product scope is
                focused on suitable small-to-medium aluminum parts within the
                200T / 300T Product Capability Range.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#c7beaf]">
                Buyers can start from drawings, samples, or product photos for
                outdoor LED light housings, LED work light housings,
                motorcycle / off-road light housings, mounting brackets, holes,
                threads, powder coating, and corrosion or heat-dissipation
                review. HSX mainly reviews housing, heat-sink body, cover, and
                bracket-related die casting scope, not complete lamp assembly
                unless confirmed for a specific project.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a href={contactDetails.whatsappHref} className="gold-button text-center">
                  WhatsApp RFQ
                </a>
                <a
                  href={`mailto:${contactDetails.email}?subject=RFQ%20for%20Aluminum%20Light%20Housings&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20aluminum%20light%20housings.%0A%0AProduct%20type%3A%0AQuantity%3A%0AHousing%20dimensions%3A%0AFinish%20requirement%3A%0ADrawing%20or%20sample%20available%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
                  className="outline-button text-center"
                >
                  Email Drawings
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
                    src={aluminumLightHousing}
                    alt="OEM aluminum light housing heat sink and compact die cast lamp body"
                    fill
                    preload
                    sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/15 to-black/80" />
                  <div className="absolute left-5 top-5 rounded-2xl border border-white/12 bg-black/55 px-4 py-3 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                      Lighting housing scope
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Aluminum lamp bodies and heat-sink housings
                    </p>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                      Typical products
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                      LED light housings, die cast lamp bodies, heat-sink
                      shells, rear covers, mounting brackets, and custom
                      aluminum lighting parts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="typical-parts" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Typical aluminum lighting parts"
              title="Compact light housings, covers, brackets, and heat-sink bodies"
              description="This page focuses on die cast aluminum lighting parts that fit practical small-to-medium manufacturing scope. The offering is suitable for LED work lights, automotive lighting, motorcycle lighting, and custom lighting-related OEM projects."
            />

            <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
              <div className="industrial-card gold-frame overflow-hidden p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={aluminumLightHousing}
                    alt="Aluminum light housing heat sink and die cast lamp body parts"
                    fill
                    sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                    <p className="section-kicker">Part coverage</p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      Built for compact lamp housing geometry, heat
                      dissipation, mounting needs, and appearance finishing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {typicalParts.map((part, index) => (
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
              eyebrow="Lighting housing programs"
              title="Aluminum housing programs for LED lighting buyers"
              description="These examples help buyers match their project to realistic aluminum die casting supply. HSX focuses on compact light housings, lamp bodies, covers, brackets, shells, and heat-sink style parts."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                      {program.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d5ae67]" />
                          <span>{point}</span>
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
          id="engineering-review"
          className="border-b border-white/8 py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Engineering review"
              title="Practical review for OEM die cast aluminum LED light housings"
              description="HSX DIECASTING reviews aluminum light housing inquiries as factory-fit projects, not as generic product trading. The focus is on suitable small-to-medium aluminum housings, heat-sink bodies, brackets, holes, threads, surface finishing, and export packing with clear buyer requirements."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {engineeringReview.map((item, index) => (
                <article key={`${item.title}-${index}`} className="industrial-card p-6">
                  <p className="section-kicker">
                    Review {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_center_left,rgba(199,162,91,0.12),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#050505_100%)] py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div className="industrial-card overflow-hidden p-3">
              <video
                className="aspect-video w-full rounded-[1.25rem] bg-black object-cover"
                controls
                playsInline
                preload="metadata"
                aria-label="Aluminum die-cast work light housing parts in batch production at HSX"
              >
                <source
                  src="/media/aluminum-die-cast-work-light-housing-production-hsx.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div>
              <p className="section-kicker">Factory video</p>
              <h2 className="section-heading mt-4 text-3xl text-white sm:text-4xl">
                Aluminum Die-Cast Work Light Housing Production
              </h2>
              <p className="mt-6 text-base leading-8 text-[#d4cdc0] sm:text-lg">
                This production video shows small-to-medium aluminum die-cast
                work light housing parts in batch production at HSX. Depending
                on the project requirements, these housing parts may require
                trimming, drilling, tapping, machining, polishing, powder
                coating, or spray painting after die casting.
              </p>
              <p className="mt-5 text-base leading-8 text-[#c9c1b2]">
                HSX reviews drawings, 3D files, sample photos, quantity,
                machining requirements, and surface finishing requirements
                before quotation.
              </p>
              <p className="mt-5 text-sm leading-7 text-[#bfb6a7]">
                Buyers can compare related{" "}
                <Link
                  href="/products/oem-aluminum-die-casting-parts"
                  className="font-semibold text-[#efcf8d] underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  OEM aluminum die casting parts
                </Link>
                , prepare an{" "}
                <Link
                  href="/blog/rfq-checklist-custom-oem-aluminum-die-casting-parts"
                  className="font-semibold text-[#efcf8d] underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  aluminum die casting RFQ checklist
                </Link>
                , request a{" "}
                <Link
                  href="/b2b-oem-project-review"
                  className="font-semibold text-[#efcf8d] underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  project suitability review
                </Link>
                , or{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-[#efcf8d] underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  contact HSX for project review
                </Link>
                .
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link href="/b2b-oem-project-review" className="gold-button text-center">
                  Request Project Review
                </Link>
                <Link href="/contact" className="outline-button text-center">
                  Send RFQ Details
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <div className="space-y-4">
              <div className="industrial-card gold-frame overflow-hidden p-3">
                <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={workshopHorizontal}
                    alt="HSX aluminum die casting workshop for small-to-medium OEM lighting projects"
                    fill
                    sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                    <p className="section-kicker">Process support</p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      Drawings, samples, mold planning, die casting, machining,
                      finishing, inspection, and export packing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Manufacturing fit
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    Compact Parts
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    Best suited for small-to-medium aluminum lighting housings
                    and related compact OEM parts.
                  </p>
                </article>
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Secondary process
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    Cast to Finish
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    Drilling, tapping, polishing, coating, painting,
                    and partner-supported anodizing review.
                  </p>
                </article>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="OEM manufacturing flow"
                title="From housing drawings to finished aluminum lighting parts"
                description="HSX reviews each aluminum light housing project around manufacturability, assembly needs, finish expectations, and export packing requirements before quotation and production planning."
              />

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {processSupport.map((item, index) => (
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

        <section
          id="finishing"
          className="border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(199,162,91,0.11),transparent_28%),linear-gradient(180deg,#0c0c0c_0%,#070707_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Surface finishing"
              title="Finishing options for aluminum lamp housings"
              description="Finishing is planned around end-market appearance, powder coating needs, corrosion resistance, lighting brand presentation, and practical part requirements."
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
              title="Built for LED lighting brands, importers, and OEM buyers"
              description="The page is positioned for buyers sourcing aluminum light housings and die cast lamp bodies with practical factory support and direct export communication."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {buyerFit.map((buyer, index) => (
                <article key={`${buyer.title}-${index}`} className="industrial-card p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {buyer.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#cbc3b4]">
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
              title="Send the details needed for accurate aluminum housing quotation"
              description="For faster review, buyers should send housing drawings, 3D files, samples, reference photos, finish requirements, quantity plans, mounting details, holes, threads, and application details for the lighting project."
            />

            <div className="mt-10 industrial-card p-6 sm:p-8">
              <ul className="space-y-4 text-base leading-8 text-[#efe7d9]">
                {rfqChecklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[linear-gradient(180deg,#070707_0%,#0c0c0c_100%)] py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="FAQ"
              title="Aluminum light housing project review questions"
              description="These answers help buyers prepare clearer RFQs for die-cast aluminum light housing, heat-sink housing, rear cover, and mounting bracket projects."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {faqItems.map((item) => (
                <article key={item.title} className="industrial-card p-6">
                  <h2 className="text-xl font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Related product pages"
              title="Explore related LED lighting and aluminum die casting products"
              description="Aluminum light housing projects are often connected with LED work lights, automotive LED lights, motorcycle LED lights, OEM aluminum die casting parts, and decorative appearance covers. These related pages help buyers compare the correct product scope before sending an RFQ."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
                    Send your aluminum light housing drawings or samples
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#2d2417] sm:text-lg">
                    HSX reviews OEM aluminum light housings, die cast lamp
                    housings, LED heat-sink bodies, rear covers, brackets, and
                    custom aluminum lighting parts for global wholesalers,
                    importers, distributors, lighting brands, and OEM buyers.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <a
                      href={contactDetails.whatsappHref}
                      className="rounded-full bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      WhatsApp RFQ
                    </a>
                    <a
                      href={`mailto:${contactDetails.email}?subject=RFQ%20for%20Aluminum%20Light%20Housings&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20aluminum%20light%20housings.%0A%0AProduct%20type%3A%0AQuantity%3A%0AHousing%20dimensions%3A%0AFinish%20requirement%3A%0ADrawing%20or%20sample%20available%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
                      className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                    >
                      Email Drawings
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
                        src={aluminumLightHousing}
                        alt="Aluminum light housing heat sink ready for OEM RFQ review"
                        fill
                        sizes="(min-width: 1024px) 30rem, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#efcf8d]">
                          RFQ ready
                        </p>
                        <p className="mt-2 text-base font-semibold leading-7 text-white">
                          Send drawings, samples, finish requirements, and
                          target quantity for aluminum light housing review.
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
                          href={`mailto:${contactDetails.email}?subject=RFQ%20for%20Aluminum%20Light%20Housings&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20request%20a%20quotation%20for%20aluminum%20light%20housings.%0A%0AProduct%20type%3A%0AQuantity%3A%0AHousing%20dimensions%3A%0AFinish%20requirement%3A%0ADrawing%20or%20sample%20available%3A%0A%0APlease%20contact%20me%20with%20pricing%20and%20production%20details.%0A%0ABest%20regards%2C`}
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
