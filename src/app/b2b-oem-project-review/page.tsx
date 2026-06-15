import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import factoryCapabilities from "../../../public/images/factory-capabilities.png";
import heroFactory from "../../../public/images/hero-factory-200t-300t.png";
import oemAluminumParts from "../../../public/images/oem-small-aluminum-die-casting-parts.png";

export const metadata: Metadata = {
  title: "B2B OEM Project Review | HSX DIECASTING",
  description:
    "B2B OEM project review page for decorative brake caliper appearance covers and custom OEM aluminum die casting parts. Send RFQ details, drawings, 3D files, samples, finishing needs, logo, packaging, and quantity plans to HSX DIECASTING.",
  alternates: {
    canonical: "https://www.hsxdiecasting.com/b2b-oem-project-review",
  },
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  phone: "+86 176 6615 5283",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20would%20like%20to%20send%20B2B%20OEM%20project%20details%20for%20evaluation.",
};

const mailtoRfq =
  "mailto:nicolson@hsxdiecasting.com?subject=B2B%20OEM%20Project%20Review%20for%20HSX%20DIECASTING&body=Hello%20HSX%20DIECASTING%2C%0A%0AI%20would%20like%20to%20send%20B2B%20OEM%20project%20details%20for%20evaluation.%0A%0AProject%20type%3A%0ADrawings%20/%203D%20files%20/%20sample%20photos%20available%3A%0ATarget%20quantity%3A%0ASurface%20finishing%20requirements%3A%0ALogo%20/%20packaging%20requirements%3A%0ADrilling%20/%20tapping%20/%20CNC%20requirements%20if%20needed%3A%0ADestination%20market%3A";

const pathCards = [
  {
    title: "Decorative Brake Caliper Appearance Covers OEM Review",
    description:
      "For Tesla / EV accessory brands, automotive appearance accessory sellers, private-label buyers, and aftermarket resellers looking for decorative appearance cover customization.",
    href: "#appearance-cover-review",
    cta: "Send Appearance Cover OEM Inquiry",
  },
  {
    title: "OEM Aluminum Die Casting Parts RFQ Review",
    description:
      "For buyers sourcing lighting housings, lamp brackets, covers, end caps, enclosure shells, brackets, and compact custom aluminum components.",
    href: "#aluminum-die-casting-review",
    cta: "Send Aluminum Die Casting RFQ",
  },
];

const appearanceInquiryDetails = [
  "Target vehicle model",
  "Product photos or sample reference",
  "Color requirements",
  "Logo / font / logo color requirements",
  "Surface finishing preference",
  "Packaging requirement",
  "Target quantity",
  "Destination market",
  "Sample-stage evaluation needs",
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
  "200T / 300T aluminum die casting machines",
  "Multi-axis drilling",
  "Multi-axis tapping",
  "Polishing / grinding",
  "Powder coating",
  "Paint spraying",
  "Aluminum anodizing",
  "OEM / ODM customization",
  "Cooperative CNC turning / CNC machining support through partner facilities when required",
];

const aluminumRfqDetails = [
  "2D drawings",
  "3D files",
  "Sample photos",
  "Target quantity",
  "Part size and application",
  "Surface finishing requirements",
  "Drilling / tapping / threaded feature requirements",
  "CNC turning / CNC machining requirements if needed",
  "Packaging details",
];

const checklistItems = [
  "Product type",
  "Drawings, 3D files, or sample photos",
  "Target model or application",
  "Main dimensions",
  "Target quantity",
  "Sample-stage needs",
  "Surface finishing requirements",
  "Color requirements",
  "Logo / font / logo color requirements",
  "Packaging requirements",
  "Drilling requirements",
  "Tapping or threaded feature requirements",
  "CNC turning / CNC machining requirements if needed",
  "Destination market",
  "Contact person and company information",
];

const processSteps = [
  {
    title: "Send Project Details",
    description:
      "Send drawings, 3D files, sample photos, product requirements, quantity plan, finishing needs, and packaging details by email or WhatsApp.",
  },
  {
    title: "HSX Checks Project Scope",
    description:
      "HSX checks whether the project fits the factory product direction, process scope, and small-to-medium OEM / ODM customization model.",
  },
  {
    title: "Missing Details Are Confirmed",
    description:
      "If key information is missing, HSX may ask for drawings, photos, dimensions, finishing requirements, or quantity details before the next step.",
  },
  {
    title: "Sample-Stage Or RFQ Discussion Begins",
    description:
      "If the project fits the scope, HSX can continue discussing sample-stage evaluation, OEM customization details, or quotation preparation.",
  },
  {
    title: "Buyer Confirms The Next Step",
    description:
      "The buyer can decide whether to continue with samples, design adjustment, packaging discussion, or further RFQ communication.",
  },
];

const internalLinks = [
  {
    label: "Decorative Brake Caliper Appearance Covers",
    href: "/products/decorative-brake-caliper-covers",
  },
  {
    label: "OEM Aluminum Die Casting Parts",
    href: "/products/oem-aluminum-die-casting-parts",
  },
  {
    label: "Aluminum Light Housings",
    href: "/products/aluminum-light-housings",
  },
  {
    label: "Custom Aluminum Die Casting RFQ Checklist",
    href: "/blog/rfq-checklist-custom-oem-aluminum-die-casting-parts",
  },
  {
    label: "Tesla Decorative Appearance Cover RFQ Checklist",
    href: "/blog/oem-decorative-brake-caliper-covers-tesla-model-3-model-y-rfq-checklist",
  },
  {
    label: "Contact HSX",
    href: "/contact",
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
              Choose the right inquiry path before contacting HSX DIECASTING
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
              HSX DIECASTING is a Foshan-based manufacturing factory supporting
              B2B OEM / ODM project evaluation for decorative brake caliper
              appearance covers and custom OEM aluminum die casting parts.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#c7beaf]">
              Send project details by email or WhatsApp, including drawings, 3D
              files, sample photos, target quantity, surface finishing
              requirements, logo / packaging needs, drilling / tapping
              requirements, and CNC requirements if needed.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href={mailtoRfq} className="gold-button text-center">
                Send RFQ Details
              </a>
              <a
                href={contactDetails.whatsappHref}
                className="outline-button text-center"
              >
                WhatsApp Project Review
              </a>
              <Link href="/contact" className="outline-button text-center">
                Email Project Details
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
                    Drawings, 3D files, samples, finishing, logo, packaging,
                    quantity plan, and CNC requirements if needed.
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
            description="This page separates two common B2B inquiry paths so buyers can send the right information from the beginning."
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

      <section
        id="appearance-cover-review"
        className="border-b border-white/8 bg-[#080808] py-16 lg:py-24"
      >
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Path 01"
              title="Decorative Brake Caliper Appearance Covers OEM Review"
              description="HSX can evaluate OEM decorative brake caliper appearance cover projects for Tesla Model 3 / Model Y accessory programs, EV accessory shops, private-label brands, and aftermarket appearance product buyers."
            />
            <div className="mt-8 rounded-[1.5rem] border border-[#d7b56d]/25 bg-[#111111] p-6">
              <p className="text-sm leading-8 text-[#efe7d9]">
                These products are decorative appearance covers only. They are
                not functional brake parts, braking performance components,
                load-bearing brake parts, or structural brake parts.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href={mailtoRfq} className="gold-button text-center">
                Send Appearance Cover OEM Inquiry
              </a>
              <Link
                href="/products/decorative-brake-caliper-covers"
                className="outline-button text-center"
              >
                View Appearance Covers
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="industrial-card p-6">
              <h3 className="text-xl font-semibold text-white">
                HSX can evaluate
              </h3>
              <BulletList
                items={[
                  "Color options",
                  "Logo / font / logo color requirements",
                  "Surface finishing options",
                  "Packaging planning",
                  "Small-to-medium batch OEM customization",
                  "Sample-stage evaluation",
                  "Private-label appearance accessory programs",
                ]}
              />
            </article>
            <article className="industrial-card p-6">
              <h3 className="text-xl font-semibold text-white">
                Useful inquiry details
              </h3>
              <BulletList items={appearanceInquiryDetails} />
            </article>
          </div>
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
            description="HSX can evaluate custom OEM aluminum die casting parts for B2B buyers preparing drawings, 3D files, sample photos, or project requirements."
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
                <a href={mailtoRfq} className="gold-button text-center">
                  Send Aluminum Die Casting RFQ
                </a>
                <Link
                  href="/products/oem-aluminum-die-casting-parts"
                  className="outline-button text-center"
                >
                  View OEM Parts Page
                </Link>
              </div>
            </article>
          </div>
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
              eyebrow="What HSX can evaluate"
              title="Two practical B2B project directions"
              description="HSX can evaluate decorative appearance cover projects and custom aluminum die casting projects with clear project information."
            />
            <div className="mt-8 grid gap-6">
              <article className="industrial-card p-6">
                <h3 className="text-xl font-semibold text-white">
                  Decorative appearance cover projects
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#cfc6b6]">
                  HSX can evaluate decorative brake caliper appearance cover
                  projects for Tesla / EV accessory programs, automotive
                  appearance accessory sellers, and private-label buyers.
                  Discussion can include color, logo / font / logo color,
                  surface finishing, packaging, small-to-medium batch
                  customization, and sample-stage evaluation.
                </p>
              </article>
              <article className="industrial-card p-6">
                <h3 className="text-xl font-semibold text-white">
                  Custom aluminum die casting projects
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#cfc6b6]">
                  HSX can evaluate custom OEM aluminum die casting parts such as
                  lighting housings, lamp brackets, covers, end caps, enclosure
                  shells, brackets, and compact custom aluminum components.
                  Discussion can include die casting, drilling, tapping,
                  polishing / grinding, powder coating, paint spraying,
                  aluminum anodizing, OEM / ODM customization, and cooperative
                  CNC turning / CNC machining support through partner facilities
                  when required.
                  For projects with anodized appearance requirements, HSX can
                  review{" "}
                  <Link
                    href="/anodizable-aluminum-die-casting-parts"
                    className="font-semibold text-[#f4d27a]"
                  >
                    anodized appearance aluminum die casting parts
                  </Link>{" "}
                  before confirming whether the route is practical.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 py-16 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="RFQ preparation checklist"
            title="Prepare the details buyers usually need before first contact"
            description="A complete RFQ helps HSX check the project scope more efficiently and confirm what additional information may be needed."
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
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#080808] py-16 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How the review process works"
            title="A simple path from project details to next-step discussion"
            description="The page is designed to make first contact easier, especially when buyers have technical files, sample photos, finishing needs, or packaging requirements ready."
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
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Factual factory information"
              title="About HSX DIECASTING"
              description="HSX DIECASTING is operated by Foshan Huashunxiang Hardware Products Factory, a Foshan-based manufacturing factory in Guangdong, China."
            />
            <p className="mt-8 text-base leading-8 text-[#c9c1b2]">
              HSX focuses on B2B OEM / ODM project evaluation for decorative
              brake caliper appearance covers and small-to-medium custom
              aluminum die casting parts.
            </p>
            <p className="mt-5 text-base leading-8 text-[#c9c1b2]">
              For aluminum die casting projects, HSX supports 200T / 300T
              aluminum die casting machines, multi-axis drilling, multi-axis
              tapping, polishing / grinding, powder coating, paint spraying,
              aluminum anodizing, and cooperative CNC turning / CNC machining
              support through partner facilities when required.
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
                  Send your OEM project details to HSX
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#2d2417] sm:text-lg">
                  If you are preparing a decorative appearance cover project or
                  a custom OEM aluminum die casting RFQ, send your project
                  details to HSX by email or WhatsApp.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={mailtoRfq}
                    className="rounded-full bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Send RFQ Details
                  </a>
                  <a
                    href={contactDetails.whatsappHref}
                    className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                  >
                    WhatsApp Project Review
                  </a>
                  <Link
                    href="/contact"
                    className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                  >
                    Email Project Details
                  </Link>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[#2b2216]/15 bg-white/55 p-6 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5f4a28]">
                  Include these details
                </p>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-[#2c2316]">
                  {[
                    "Product type",
                    "Drawings, 3D files, or sample photos",
                    "Target quantity",
                    "Surface finishing requirements",
                    "Logo / packaging requirements",
                    "Drilling / tapping / threaded feature requirements",
                    "CNC requirements if needed",
                    "Destination market",
                    "Any sample-stage evaluation needs",
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
                    {contactDetails.email}
                  </p>
                  <p>
                    <span className="font-semibold">WhatsApp: </span>
                    {contactDetails.phone}
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
