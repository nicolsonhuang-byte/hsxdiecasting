import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import factoryCapabilities from "../../../public/images/factory-capabilities.png";
import heroFactory from "../../../public/images/hero-factory-200t-300t.png";
import oemAluminumParts from "../../../public/images/oem-small-aluminum-die-casting-parts.png";

type FactoryEvidenceImage = {
  src: string;
  alt: string;
  caption: string;
};

export const metadata: Metadata = {
  title: "OEM Aluminum Die Casting Project Review Before Quotation | HSX DIECASTING",
  description:
    "Send 3D files, 2D drawings, sample photos, application, quantity, machining needs, finishing requirements, and packing needs. HSX reviews whether aluminum die casting is suitable before quotation.",
  alternates: {
    canonical: "https://www.hsxdiecasting.com/b2b-oem-project-review",
  },
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  emailHref:
    "mailto:nicolson@hsxdiecasting.com?subject=OEM%20Aluminum%20Die%20Casting%20Project%20Review&body=Hello%20HSX%20DIECASTING%2C%0A%0AI%20would%20like%20to%20request%20an%20OEM%20aluminum%20die%20casting%20project%20review.%0A%0AProduct%20application%3A%0ATarget%20material%3A%0AEstimated%20quantity%3A%0ATolerance%20requirements%3A%0ASurface%20finishing%3A%0APacking%20requirements%3A%0A%0AI%20will%20attach%20drawings%2C%203D%20files%2C%20or%20sample%20photos%20where%20available.%0A%0ARegards%2C",
  phone: "+86 176 6615 5283",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20would%20like%20to%20send%20B2B%20OEM%20project%20details%20for%20evaluation.",
};

const pathCards = [
  {
    title: "OEM Aluminum Die Casting Project Review",
    description:
      "For buyers sourcing small-to-medium aluminum housings, covers, brackets, end caps, enclosure shells, light housings, and other suitable OEM aluminum components.",
    href: "#aluminum-die-casting-review",
    cta: "Review OEM Aluminum Project Fit",
  },
  {
    title: "RFQ Details and Process Cost Review",
    description:
      "For buyers who need the quotation reviewed by process, including die casting, trimming, drilling, tapping, finishing, QC, and packing requirements.",
    href: "#cost-review",
    cta: "Check Required RFQ Details",
  },
];

const aluminumProjectTypes = [
  "Lighting housings",
  "Lamp brackets",
  "Covers",
  "End caps",
  "Enclosure shells",
  "Brackets",
  "Compact custom aluminum components",
];

const aluminumCapabilities = [
  "280T and 320T aluminum die casting machines",
  "200T / 300T Product Capability Range for suitable small-to-medium aluminum die casting parts",
  "Trimming and deburring after die casting",
  "In-house bench drilling and multi-spindle drilling",
  "In-house desktop tapping and multi-spindle tapping",
  "Product-specific fixtures designed in-house for repeat positioning",
  "In-house polishing, powder coating, spray painting, QC, and packing",
  "CNC machining and anodizing coordinated with partner resources when required",
];

const aluminumRfqDetails = [
  "3D files",
  "2D drawings",
  "Sample photos",
  "Existing part photos",
  "Application",
  "Target material or material requirement",
  "Quantity",
  "Long-term production plan if available",
  "Hole and thread requirements",
  "Machining requirements",
  "Surface finishing requirements",
  "Color or physical color sample if custom spray painting is needed",
  "Packing requirements",
];

const checklistItems = [
  "Product type",
  "3D files and 2D drawings",
  "Sample photos or existing part photos",
  "Application and working environment",
  "Target material or material requirement",
  "Quantity and long-term production plan if available",
  "Hole and thread requirements",
  "Machining requirements",
  "Surface finishing requirements",
  "Color or physical color sample if custom spray painting is needed",
  "Packing requirements",
];

const processSteps = [
  {
    title: "Send Project Details",
    description:
      "Send drawings, 3D files, sample photos, product application, quantity plan, machining needs, finishing requirements, and packaging details by email or WhatsApp.",
  },
  {
    title: "HSX Reviews Factory Fit",
    description:
      "HSX checks whether the project fits its aluminum die casting equipment, mold experience, machining capability, polishing, coating, painting, and production control.",
  },
  {
    title: "Missing Details Are Confirmed",
    description:
      "If key information is missing, HSX may ask for drawings, photos, dimensions, finishing requirements, or quantity details before the next step.",
  },
  {
    title: "RFQ Or Prototype Discussion Begins",
    description:
      "If the project fits the scope, HSX can discuss quotation preparation, sample-stage evaluation, or prototype confirmation before formal tooling where appropriate.",
  },
  {
    title: "Buyer Confirms The Next Step",
    description:
      "The buyer can decide whether to continue with samples, design adjustment, packaging discussion, or further RFQ communication.",
  },
];

const factoryReviewCards = [
  {
    title: "HSX Does Not Quote Blindly",
    description:
      "HSX first reviews whether the part is suitable for aluminum die casting before preparing a quotation. Application, quantity, machining needs, finishing requirements, and production plan are checked together.",
  },
  {
    title: "Direct Factory RFQ Communication",
    description:
      "Buyers can communicate drawings, applications, quantities, machining needs, and finishing requirements with the factory team before production discussion.",
  },
  {
    title: "Suitable Projects Only",
    description:
      "HSX does not blindly accept every inquiry. If another material or process may provide better quality, lower cost, or fewer production risks, HSX will explain this before accepting the project.",
  },
  {
    title: "Quality Budget Stays in Production",
    description:
      "Direct factory communication helps keep more of the project budget inside production quality, tooling control, machining accuracy, finishing preparation, inspection, and stable delivery.",
  },
  {
    title: "Prototype Confirmation Before Tooling",
    description:
      "For suitable OEM projects, after project details and agreed tooling terms are confirmed, HSX may prepare a prototype for assembly confirmation before formal mold production. Prototype methods may include 3D-printed plastic prototypes or CNC-machined aluminum prototypes.",
  },
  {
    title: "Customer-Specific Inspection Requirements",
    description:
      "Quality requirements are reviewed according to each project, customer standard, product application, tolerance, visible surface requirements, and inspection requirements.",
  },
];

const quotationReviewItems = [
  "Part structure and wall thickness",
  "Hole and thread requirements",
  "Assembly areas and visible surfaces",
  "Material requirements and application",
  "Machining needs and tolerance expectations",
  "Surface finishing requirements",
  "Quantity and tooling suitability",
  "Production plan and packing needs",
];

const costReviewItems = [
  "Die casting",
  "Trimming",
  "Deburring",
  "Drilling",
  "Tapping",
  "Polishing",
  "Powder coating",
  "Spray painting",
  "CNC machining if needed through partner resources",
  "Anodizing if needed through partner resources",
  "QC",
  "Packing and packaging requirements",
];

const anotherProcessReasons = [
  "The part is too large for current HSX equipment",
  "The part may be better suited for zinc alloy or plastic",
  "The volume is too low for tooling without a long-term plan",
  "The tolerance target cannot be reached even with die casting plus CNC finishing",
];

const projectReviewEvidenceImages = {
  batchParts: {
    src: "/images/hsx-factory/batch-aluminum-die-cast-parts-before-finishing.jpg",
    alt: "Batch aluminum die-cast parts before finishing and packing",
    caption: "Batch aluminum die-cast parts before finishing",
  },
  drillingFixture: {
    src: "/images/hsx-factory/multi-spindle-drilling-fixture-aluminum-part.jpg",
    alt: "Multi-spindle drilling with product-specific fixture for aluminum die casting parts",
    caption: "Multi-spindle drilling with product-specific fixture",
  },
  coatingInspection: {
    src: "/images/hsx-factory/coating-inspection-qc-aluminum-parts.jpg",
    alt: "In-house coating inspection and surface check before packing",
    caption: "Coating inspection and surface check before packing",
  },
} satisfies Record<string, FactoryEvidenceImage>;

const faqItems = [
  {
    question: "What should I send for an OEM aluminum die casting quotation?",
    answer:
      "Send 3D files, 2D drawings, sample photos, application, quantity, machining requirements, hole and thread requirements, finishing requirements, and packing needs. HSX reviews these details before quotation.",
  },
  {
    question: "Does HSX quote every aluminum die casting project immediately?",
    answer:
      "No. HSX first reviews whether aluminum die casting is suitable for the part structure, application, quantity, material, machining, finishing, and production plan.",
  },
  {
    question: "Can HSX support drilling and tapping after die casting?",
    answer:
      "Yes. HSX supports in-house drilling and tapping, including bench drilling, desktop tapping, multi-spindle drilling, multi-spindle tapping, and product-specific fixtures designed in-house.",
  },
  {
    question: "Can HSX help if a part is not suitable for aluminum die casting?",
    answer:
      "If another material or process is more suitable, HSX will explain the reason when possible instead of forcing the wrong process.",
  },
  {
    question: "Does HSX provide finishing and packing support?",
    answer:
      "Yes. HSX supports in-house polishing, powder coating, spray painting, coating inspection, manual counting, weight checking, QC, and protective packing. CNC machining and anodizing can be coordinated with partner resources when required.",
  },
];

const internalLinks = [
  {
    label: "OEM aluminum die casting parts",
    href: "/products/oem-aluminum-die-casting-parts",
  },
  {
    label: "die-cast aluminum light housings",
    href: "/products/aluminum-light-housings",
  },
  {
    label: "aluminum die casting RFQ checklist",
    href: "/blog/rfq-checklist-custom-oem-aluminum-die-casting-parts",
  },
  {
    label: "Contact HSX",
    href: "/contact",
  },
  {
    label: "HSX DIECASTING homepage",
    href: "/",
  },
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-7 text-[#d8cfbf]">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function B2bOemProjectReviewPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.14),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
        <div className="container-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:py-24">
          <div className="motion-rise">
            <p className="section-kicker">B2B OEM project review</p>
            <h1 className="section-heading mt-6 text-4xl leading-none text-white sm:text-5xl xl:text-6xl">
              OEM Aluminum Die Casting Project Review Before Quotation
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
              Send your 3D files, 2D drawings, sample photos, application,
              quantity, machining needs, finishing requirements, and packing
              needs. HSX reviews whether aluminum die casting is suitable before
              preparing a quotation.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#c7beaf]">
              HSX does not quote blindly. The factory team first checks the part
              structure, application, quantity, process route, secondary
              machining, surface finishing, and production plan so buyers can
              avoid wasting tooling cost or choosing the wrong process.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href={contactDetails.emailHref} className="gold-button text-center">
                Email RFQ Details
              </a>
              <a
                href={contactDetails.whatsappHref}
                className="outline-button text-center"
              >
                Discuss on WhatsApp
              </a>
              <Link
                href="/blog/rfq-checklist-custom-oem-aluminum-die-casting-parts"
                className="outline-button text-center"
              >
                View RFQ Checklist
              </Link>
            </div>
          </div>

          <div className="motion-rise-delay">
            <div className="industrial-card gold-frame overflow-hidden rounded-[2rem] p-3">
              <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={heroFactory}
                  alt="HSX DIECASTING factory project review for B2B OEM buyers"
                  fill
                  priority
                  sizes="(min-width: 1280px) 42rem, (min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/15" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#efcf8d]">
                    Project details first
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Drawings, 3D files, samples, application, quantity,
                    machining, finishing, packaging, and inspection
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 py-16 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Buyer path selector"
            title="Choose your project type"
            description="This page separates common B2B inquiry paths so buyers can send the right technical and purchasing information to the factory team from the beginning."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {pathCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="industrial-card block p-6 transition-transform duration-200 hover:-translate-y-1 sm:p-8"
              >
                <h2 className="text-2xl font-semibold text-white">
                  {card.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#cfc6b6]">
                  {card.description}
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#f4d27a]">
                  {card.cta}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#080808] py-16 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Before quotation"
            title="What HSX Reviews Before Quotation"
            description="HSX reviews part structure, wall thickness, hole and thread requirements, assembly areas, visible surfaces, material requirements, machining needs, finishing requirements, quantity, tooling suitability, and production plan before preparing a quotation."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quotationReviewItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm font-semibold text-[#efe7d9]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {factoryReviewCards.slice(0, 3).map((card) => (
              <article key={card.title} className="industrial-card p-6">
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#cfc6b6]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>

          <figure className="industrial-card mt-10 overflow-hidden p-3">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem]">
              <Image
                src={projectReviewEvidenceImages.batchParts.src}
                alt={projectReviewEvidenceImages.batchParts.alt}
                fill
                sizes="(min-width: 1280px) 72rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
            <figcaption className="px-4 pb-4 pt-5 text-sm font-semibold text-[#efe7d9]">
              {projectReviewEvidenceImages.batchParts.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        id="aluminum-die-casting-review"
        className="border-b border-white/8 py-16 lg:py-24"
      >
        <div className="container-shell">
          <SectionHeading
            eyebrow="Path 02"
            title="OEM Aluminum Die Casting Parts RFQ Review"
            description="HSX can evaluate suitable small-to-medium OEM aluminum die casting parts for B2B buyers preparing drawings, 3D files, sample photos, product applications, machining requirements, finishing requirements, and inspection needs."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="industrial-card overflow-hidden p-3 lg:row-span-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={oemAluminumParts}
                  alt="Small-to-medium OEM aluminum die casting parts for B2B RFQ evaluation"
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur">
                  <p className="section-kicker">RFQ-ready details</p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Drawings, 3D files, sample photos, quantity, finishing,
                    drilling, tapping, and CNC requirements if needed.
                  </p>
                </div>
              </div>
            </article>
            <article className="industrial-card p-6">
              <h3 className="text-xl font-semibold text-white">
                Typical project types
              </h3>
              <BulletList items={aluminumProjectTypes} />
            </article>
            <article className="industrial-card p-6">
              <h3 className="text-xl font-semibold text-white">
                Capability scope
              </h3>
              <BulletList items={aluminumCapabilities} />
            </article>
            <article className="industrial-card p-6 lg:col-span-2">
              <h3 className="text-xl font-semibold text-white">
                Useful RFQ details
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {aluminumRfqDetails.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-[#efe7d9]"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a href={contactDetails.emailHref} className="gold-button text-center">
                  Email RFQ Details
                </a>
                <Link
                  href="/products/oem-aluminum-die-casting-parts"
                  className="outline-button text-center"
                >
                  OEM aluminum die casting parts
                </Link>
                <Link
                  href="/products/aluminum-light-housings"
                  className="outline-button text-center"
                >
                  die-cast aluminum light housings
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="cost-review"
        className="border-b border-white/8 bg-[#080808] py-16 lg:py-24"
      >
        <div className="container-shell">
          <SectionHeading
            eyebrow="Process cost review"
            title="Aluminum Die Casting + Secondary Operations Cost Review"
            description="Quotation is reviewed by process, including die casting, trimming, deburring, drilling, tapping, polishing, powder coating, spray painting, CNC machining if needed, anodizing if needed, QC, packing, and packaging requirements."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {costReviewItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm font-semibold text-[#efe7d9]"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-[#cfc6b6]">
            CNC machining and anodizing are coordinated with partner resources
            when required. HSX reviews whether these operations are practical
            together with die casting, fixtures, machining allowance, visible
            surface requirements, inspection needs, and packing protection.
          </p>

          <figure className="industrial-card mt-10 overflow-hidden p-3">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem]">
              <Image
                src={projectReviewEvidenceImages.drillingFixture.src}
                alt={projectReviewEvidenceImages.drillingFixture.alt}
                fill
                sizes="(min-width: 1280px) 72rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
            <figcaption className="px-4 pb-4 pt-5 text-sm font-semibold text-[#efe7d9]">
              {projectReviewEvidenceImages.drillingFixture.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#080808] py-16 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="industrial-card gold-frame overflow-hidden p-3">
            <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
              <Image
                src={factoryCapabilities}
                alt="HSX DIECASTING factory capabilities for OEM project evaluation"
                fill
                sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Process suitability"
              title="When HSX May Recommend Another Process"
              description="HSX may recommend another process or decline a project if aluminum die casting is not the most practical route for the part, quantity, tolerance, material, or production plan."
            />
            <div className="mt-8 industrial-card p-6">
              <BulletList items={anotherProcessReasons} />
              <p className="mt-6 text-sm leading-7 text-[#cfc6b6]">
                If another material or process may reduce production risk, HSX
                explains the reason when possible before buyers invest time in
                tooling, sampling, or a quotation route that may not fit the
                project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 py-16 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="RFQ preparation checklist"
            title="What Buyers Should Send"
            description="A complete RFQ helps the HSX factory team check the project scope, possible process route, production risks, and missing information more efficiently before quotation."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {checklistItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm font-semibold text-[#efe7d9]"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-[#cfc6b6]">
            Buyers can also review HSX{" "}
            <Link
              href="/products/oem-aluminum-die-casting-parts"
              className="font-semibold text-[#f4d27a]"
            >
              OEM aluminum die casting parts
            </Link>
            ,{" "}
            <Link
              href="/products/aluminum-light-housings"
              className="font-semibold text-[#f4d27a]"
            >
              die-cast aluminum light housings
            </Link>
            , and the{" "}
            <Link
              href="/blog/rfq-checklist-custom-oem-aluminum-die-casting-parts"
              className="font-semibold text-[#f4d27a]"
            >
              aluminum die casting RFQ checklist
            </Link>{" "}
            before sending details through the{" "}
            <Link href="/contact" className="font-semibold text-[#f4d27a]">
              Send RFQ Details
            </Link>{" "}
            contact path.
          </p>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#080808] py-16 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Honest process advice"
            title="How HSX Helps Buyers Avoid the Wrong Process"
            description="If a project is not suitable for HSX or not suitable for aluminum die casting, HSX explains the reason when possible. The goal is to help buyers avoid wasted tooling cost, production time, or choosing the wrong process."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {factoryReviewCards.slice(3).map((card) => (
              <article key={card.title} className="industrial-card p-6">
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#cfc6b6]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>

          <figure className="industrial-card mt-10 overflow-hidden p-3">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem]">
              <Image
                src={projectReviewEvidenceImages.coatingInspection.src}
                alt={projectReviewEvidenceImages.coatingInspection.alt}
                fill
                sizes="(min-width: 1280px) 72rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
            <figcaption className="px-4 pb-4 pt-5 text-sm font-semibold text-[#efe7d9]">
              {projectReviewEvidenceImages.coatingInspection.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#080808] py-16 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How the review process works"
            title="A simple path from project details to next-step discussion"
            description="The page is designed to make first contact clearer before quotation, prototype discussion, tooling confirmation, machining planning, finishing preparation, or inspection review."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="industrial-card p-6">
                <p className="section-kicker">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#cfc6b6]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 py-16 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="FAQ / GEO project review answers"
            title="OEM Aluminum Die Casting Project Review FAQ"
            description="These short answers help buyers, search engines, and AI search systems understand what HSX needs before quotation and how the factory reviews suitable aluminum die casting projects."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {faqItems.map((item) => (
              <article key={item.question} className="industrial-card p-6">
                <h3 className="text-xl font-semibold text-white">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#cfc6b6]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 py-16 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Factual factory information"
              title="About HSX DIECASTING"
              description="HSX DIECASTING is operated by Foshan Huashunxiang Hardware Products Factory, a Foshan-based manufacturing factory in Guangdong, China."
            />
            <p className="mt-8 text-base leading-8 text-[#c9c1b2]">
              HSX DIECASTING is a real aluminum die casting factory, not a
              trading company. HSX focuses on B2B OEM project evaluation for
              suitable small-to-medium custom aluminum die casting parts and
              decorative brake caliper appearance covers as one product
              category.
            </p>
            <p className="mt-5 text-base leading-8 text-[#c9c1b2]">
              For aluminum die casting projects, HSX operates 280T and 320T
              aluminum die casting machines. The practical product scope includes
              suitable small-to-medium parts within the 200T / 300T Product
              Capability Range, together with multi-axis drilling, multi-axis
              tapping, polishing / grinding, powder coating, spray painting, QC,
              and packing. CNC machining and anodizing can be coordinated through
              partner-supported resources when required by the project.
            </p>
            <p className="mt-5 text-base leading-8 text-[#c9c1b2]">
              HSX reviews each project against the product application,
              tolerance, visible surface requirements, machining plan, finishing
              preparation, inspection requirements, and stable delivery needs
              before accepting the work.
            </p>
            <p className="mt-5 text-base leading-8 text-[#c9c1b2]">
              For decorative brake caliper appearance covers, HSX focuses on
              decorative appearance use only, including color, logo / font /
              logo color, finishing, packaging, and sample-stage customization
              discussion.
            </p>
          </div>

          <div className="industrial-card p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-white">
              Useful internal resources
            </h3>
            <div className="mt-6 grid gap-4">
              {internalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm font-semibold text-[#efe7d9] transition-colors hover:border-[#d7b56d]/40 hover:text-[#f4d27a]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-shell">
          <div className="gold-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start">
              <div>
                <p className="section-kicker">Final contact / RFQ CTA</p>
                <h2 className="section-heading mt-4 text-3xl text-[#120f08] sm:text-4xl">
                  Email or WhatsApp for Project Review
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#2d2417] sm:text-lg">
                  Buyers can send RFQ details directly by email or WhatsApp. Keep
                  the message focused on project review, drawings, application,
                  quantity, machining, finishing, and packing needs.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={contactDetails.emailHref}
                    className="rounded-full bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Email RFQ Details
                  </a>
                  <a
                    href={contactDetails.whatsappHref}
                    className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                  >
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[#2b2216]/15 bg-white/55 p-6 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5f4a28]">
                  Include these details
                </p>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-[#2c2316]">
                  {[
                    "3D files and 2D drawings",
                    "Sample photos or existing part photos",
                    "Product application and working environment",
                    "Target material or material requirement",
                    "Quantity and long-term production plan if available",
                    "Hole, thread, drilling, tapping, or machining needs",
                    "Surface finishing and color requirements",
                    "Packing and protective packaging requirements",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#8d6a2d]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-[#2b2216]/15 pt-6 text-sm leading-7 text-[#2c2316]">
                  <p>
                    <span className="font-semibold">Email: </span>
                    <a href={contactDetails.emailHref}>{contactDetails.email}</a>
                  </p>
                  <p>
                    <span className="font-semibold">WhatsApp: </span>
                    <a href={contactDetails.whatsappHref}>{contactDetails.phone}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
