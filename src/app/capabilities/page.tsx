import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../components/site-navigation";

import batchPartsBeforeTrimming from "../../../public/images/hsx-factory/batch-die-cast-parts-before-trimming.jpg";
import drillingWithFixture from "../../../public/images/hsx-factory/fixture-supported-multi-spindle-drilling-cooling.jpg";
import workshopHorizontal from "../../../public/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg";
import individualWrappingPacking from "../../../public/images/hsx-factory/individual-wrapping-batch-packing-aluminum-parts.jpg";
import sprayPainting from "../../../public/images/hsx-factory/in-house-spray-painting-aluminum-parts.jpg";
import qualityInspectionFinishedAluminumParts from "../../../public/images/hsx-factory/quality-inspection-finished-aluminum-parts.jpg";

const pageTitle =
  "Factory Capabilities | Aluminum Die Casting and Secondary Operations";

const pageDescription =
  "See how HSX manufactures OEM aluminum die-cast parts with in-house die casting, gate removal, trimming, deburring, drilling, tapping, polishing, powder coating, spray painting, QC, and packing. CNC machining, anodizing, and electroplating are partner-supported when required.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/capabilities",
  },
  keywords: [
    "aluminum die casting capabilities",
    "aluminum die casting factory China",
    "OEM aluminum parts manufacturing",
    "small aluminum die casting parts",
    "aluminum die casting secondary operations",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/capabilities",
    images: [
      {
        url: "/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg",
        alt: "HSX DIECASTING capability overview for compact aluminum parts, selected secondary operations, and project coordination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      "/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg",
    ],
  },
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  emailHref:
    "mailto:nicolson@hsxdiecasting.com?subject=OEM%20Aluminum%20Die%20Casting%20Project%20Review&body=Hello%20HSX%20DIECASTING%2C%0A%0AI%20would%20like%20to%20request%20an%20OEM%20aluminum%20die%20casting%20project%20review.%0A%0AProduct%20application%3A%0ATarget%20material%3A%0AEstimated%20quantity%3A%0ATolerance%20requirements%3A%0ASurface%20finishing%3A%0APacking%20requirements%3A%0A%0AI%20will%20attach%20drawings%2C%203D%20files%2C%20or%20sample%20photos%20where%20available.%0A%0ARegards%2C",
  phone: "+86 176 6615 5283",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20DIECASTING%2C%20I%20would%20like%20to%20discuss%20an%20OEM%20aluminum%20die%20casting%20project.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const heroStats = [
  {
    label: "Actual equipment",
    value: "280T and 320T",
    note: "Aluminum die casting machines for suitable small-to-medium OEM parts",
  },
  {
    label: "In-house operations",
    value: "Cast + Process",
    note: "Gate removal, trimming, deburring, drilling, tapping, polishing, QC, and packing",
  },
  {
    label: "Project-dependent route",
    value: "Built to Fit",
    note: "The manufacturing route is selected from actual part and finishing requirements",
  },
];

const coreProcessSteps = [
  {
    step: "01",
    title: "Aluminum Die Casting",
    description:
      "HSX uses 280T and 320T aluminum die casting machines for suitable small-to-medium OEM aluminum parts.",
  },
  {
    step: "02",
    title: "Gate Removal",
    description:
      "Cast runners and gates are removed in-house according to the part structure and agreed blank-delivery scope.",
  },
  {
    step: "03",
    title: "Trimming",
    description:
      "In-house trimming removes remaining flash and prepares part edges for the next required operation.",
  },
  {
    step: "04",
    title: "Deburring",
    description:
      "In-house deburring removes sharp residual edges and supports safe handling, finishing, inspection, or packing.",
  },
];

const secondaryOperations = [
  {
    scope: "In-house",
    title: "Drilling and Tapping",
    description:
      "Hole positions and threads can be processed in-house when they are required by the drawing and production route.",
  },
  {
    scope: "In-house",
    title: "Polishing",
    description:
      "Polishing and surface preparation can be arranged in-house when appearance or downstream finishing requires it.",
  },
  {
    scope: "Partner-supported",
    title: "CNC Machining",
    description:
      "CNC machining can be coordinated through partner-supported resources when required by the project.",
  },
];

const finishingOptions = [
  {
    scope: "In-house",
    title: "Powder Coating",
    description:
      "Powder coating can be completed in-house when the project requires a coated exterior surface.",
  },
  {
    scope: "In-house",
    title: "Spray Painting",
    description:
      "Spray painting can be completed in-house according to confirmed project color and appearance requirements.",
  },
  {
    scope: "Partner-supported",
    title: "Anodizing",
    description:
      "Anodizing can be coordinated through partner-supported resources for selected suitable parts when required by the project.",
  },
  {
    scope: "Partner-supported",
    title: "Electroplating",
    description:
      "Electroplating can be coordinated through partner-supported resources when required by the project.",
  },
];

const manufacturingFactors = [
  "Part structure, wall thickness, and filling conditions",
  "Hole positions, threads, and tolerance requirements",
  "Appearance, downstream processing, and surface finishing",
  "Quality checks, packing requirements, and delivery scope",
];

const qualityChecks = [
  "QC checks are arranged around the confirmed drawing and project requirements.",
  "Finished appearance, holes, and threads are checked when they are part of the agreed supply scope.",
  "Packing is prepared according to the confirmed protection and delivery requirements.",
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

export default function CapabilitiesPage() {
  return (
    <div className="relative">
      <div className="border-b border-white/8 bg-black/85">
        <div className="container-shell flex flex-col gap-3 py-3 text-sm text-[#d8ccb2] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href={contactDetails.emailHref}
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
            Send Your Drawing
          </Link>
        </div>
      </div>

      <SiteHeader />

      <main id="top">
        <section
          aria-labelledby="capability-hero-heading"
          className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.14),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]"
        >
          <div className="container-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:py-24">
            <div className="motion-rise">
              <p className="section-kicker">Manufacturing capability</p>
              <h1
                id="capability-hero-heading"
                className="section-heading mt-6 text-4xl leading-[1.02] text-white sm:text-5xl xl:text-6xl"
              >
                How HSX Manufactures Your Aluminum Die-Cast Parts
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                HSX combines in-house aluminum die casting with selected
                secondary operations, finishing, QC, and packing. The route is
                arranged around the actual drawing, part structure, tolerance,
                appearance, and delivery requirements of each project.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/b2b-oem-project-review"
                  className="gold-button text-center"
                >
                  Send Your Drawing
                </Link>
                <Link href="/products" className="outline-button text-center">
                  View Product Directions
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <article key={stat.label} className="metric-pill">
                    <p className="text-xs uppercase tracking-[0.26em] text-[#e8ce97]">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#bdb5a8]">
                      {stat.note}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="motion-rise-delay border border-[#c7a25b]/25 bg-[#11100e] p-3">
              <div className="relative aspect-[1672/941] min-h-[20rem] overflow-hidden sm:min-h-0">
                <Image
                  src={workshopHorizontal}
                  alt="HSX aluminum die casting workshop for OEM part manufacturing"
                  fill
                  preload
                  sizes="(min-width: 1280px) 42rem, (min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />
                <div className="absolute inset-x-5 bottom-5 border-l-2 border-[#d4ac67] bg-black/70 px-5 py-4 backdrop-blur-sm">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                    Factory route
                  </p>
                  <p className="mt-2 text-base font-semibold leading-7 text-white sm:text-lg">
                    In-house casting and selected operations, with
                    partner-supported resources used only when the project
                    requires them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="core-die-casting"
          className="border-b border-white/8 py-16 lg:py-24"
        >
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-end">
              <SectionHeading
                eyebrow="01 / Core die casting process"
                title="From molten aluminum to a prepared die-cast blank"
                description="The core in-house route covers aluminum die casting, gate removal, trimming, and deburring. Each stage is selected to match the agreed part and delivery scope."
              />
              <p className="border-l border-[#c7a25b]/45 pl-6 text-sm leading-7 text-[#c9c1b2] sm:text-base">
                A project may stop after gate removal for blank delivery, or
                continue into selected secondary operations. The agreed supply
                scope determines the route.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
              {coreProcessSteps.map((item) => (
                <article key={item.step} className="bg-[#090909] p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b56d]">
                    Step {item.step}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#c9c1b2]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
              <div className="relative aspect-[16/9] overflow-hidden border border-white/10">
                <Image
                  src={batchPartsBeforeTrimming}
                  alt="Batch aluminum die-cast parts before trimming at HSX"
                  fill
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/40" />
              </div>
              <div>
                <p className="section-kicker">Project fit first</p>
                <p className="mt-4 text-xl font-semibold leading-8 text-white">
                  Part structure, size, and required downstream work should be
                  reviewed before the manufacturing route is confirmed.
                </p>
                <Link
                  href="/products/oem-aluminum-die-casting-parts"
                  className="outline-button mt-7 inline-flex text-center"
                >
                  Check Project Fit
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="secondary-operations"
          className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,1)_100%)] py-16 lg:py-24"
        >
          <div className="container-shell grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src={drillingWithFixture}
                alt="Fixture-supported drilling operation for aluminum die-cast parts at HSX"
                fill
                sizes="(min-width: 1280px) 38rem, (min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <p className="absolute inset-x-5 bottom-5 border-l-2 border-[#d4ac67] bg-black/70 px-5 py-4 text-sm leading-7 text-[#efe7d9] backdrop-blur-sm">
                Secondary operations are selected only when the drawing and
                agreed supply scope require them.
              </p>
            </div>

            <div>
              <SectionHeading
                eyebrow="02 / Project-dependent secondary operations"
                title="Add only the operations the part actually needs"
                description="Drilling, tapping, and polishing are supported in-house. CNC machining is not presented as an in-house capability and is coordinated through partner-supported resources when required."
              />

              <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
                {secondaryOperations.map((item) => (
                  <article
                    key={item.title}
                    className="grid gap-3 py-6 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d9b56d]">
                      {item.scope}
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#c9c1b2]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="surface-finishing"
          className="border-b border-white/8 py-16 lg:py-24"
        >
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
              <SectionHeading
                eyebrow="03 / Surface finishing options"
                title="Keep in-house finishing separate from partner-supported processes"
                description="Powder coating and spray painting are supported in-house. Anodizing and electroplating are coordinated through partner-supported resources when a suitable project requires them."
              />
              <div className="relative aspect-video overflow-hidden border border-white/10">
                <Image
                  src={sprayPainting}
                  alt="In-house spray painting of aluminum parts at HSX"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40" />
              </div>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
              {finishingOptions.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-4 bg-[#090909] p-6 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:p-7"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d9b56d]">
                    {item.scope}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#c9c1b2]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="manufacturing-route"
          className="border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(199,162,91,0.11),transparent_28%),linear-gradient(180deg,#0c0c0c_0%,#070707_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="04 / How project requirements affect manufacturing"
              title="The manufacturing route is determined by the project"
              description="Different parts do not follow one fixed full process. HSX reviews the actual requirements, then arranges only the casting, secondary operations, finishing, inspection, and packing steps needed for the agreed supply scope."
            />

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="border-y border-white/10 py-2">
                {manufacturingFactors.map((factor) => (
                  <div
                    key={factor}
                    className="flex gap-4 border-b border-white/10 py-5 last:border-b-0"
                  >
                    <span className="mt-3 h-2 w-2 shrink-0 bg-[#d4ac67]" />
                    <p className="text-base leading-8 text-[#e8e0d3]">
                      {factor}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-6">
                <article className="border border-white/10 bg-black/25 p-6 sm:p-8">
                  <p className="section-kicker">Possible route / blank delivery</p>
                  <p className="mt-5 text-xl font-semibold leading-9 text-white sm:text-2xl">
                    Die Casting <span className="text-[#d4ac67]">→</span> Gate
                    Removal <span className="text-[#d4ac67]">→</span> Blank
                    Delivery
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#c9c1b2]">
                    Suitable when the confirmed supply scope ends with a
                    prepared die-cast blank.
                  </p>
                </article>

                <article className="border border-white/10 bg-black/25 p-6 sm:p-8">
                  <p className="section-kicker">Possible route / processed part</p>
                  <p className="mt-5 text-xl font-semibold leading-9 text-white sm:text-2xl">
                    Die Casting <span className="text-[#d4ac67]">→</span>
                    Deburring <span className="text-[#d4ac67]">→</span>
                    Drilling / Tapping <span className="text-[#d4ac67]">→</span>
                    Polishing <span className="text-[#d4ac67]">→</span>
                    Finishing <span className="text-[#d4ac67]">→</span> QC
                    <span className="text-[#d4ac67]"> →</span> Packing
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#c9c1b2]">
                    One possible route when the drawing and delivery scope call
                    for selected secondary operations and finishing.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          id="quality-delivery"
          className="border-b border-white/8 bg-[linear-gradient(180deg,#090909_0%,#050505_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="05 / Quality and delivery preparation"
              title="QC and packing before the agreed delivery point"
              description="HSX keeps this stage practical: check the confirmed supply requirements, protect the parts, and prepare the agreed packing before release."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                  <Image
                    src={qualityInspectionFinishedAluminumParts}
                    alt="Manual visual inspection of finished aluminum parts before packing at HSX"
                    fill
                    sizes="(min-width: 1024px) 36vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <p className="absolute inset-x-4 bottom-4 border-l-2 border-[#d4ac67] bg-black/65 px-4 py-3 text-sm font-semibold text-white">
                    Quality inspection
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                  <Image
                    src={individualWrappingPacking}
                    alt="Individual wrapping and batch packing of aluminum parts at HSX"
                    fill
                    sizes="(min-width: 1024px) 36vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <p className="absolute inset-x-4 bottom-4 border-l-2 border-[#d4ac67] bg-black/65 px-4 py-3 text-sm font-semibold text-white">
                    Packing preparation
                  </p>
                </div>
              </div>

              <div className="border-y border-white/10 px-0 py-2 sm:px-2">
                <div className="grid gap-4 border-b border-white/10 py-6 sm:grid-cols-[5rem_minmax(0,1fr)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d9b56d]">
                    QC
                  </p>
                  <p className="text-base leading-8 text-[#e8e0d3]">
                    Quality checks follow the confirmed drawing and the agreed
                    supply scope for the project.
                  </p>
                </div>
                <div className="grid gap-4 py-6 sm:grid-cols-[5rem_minmax(0,1fr)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d9b56d]">
                    Packing
                  </p>
                  <p className="text-base leading-8 text-[#e8e0d3]">
                    Parts are packed in-house according to the confirmed
                    protection and delivery requirements.
                  </p>
                </div>

                <ul className="border-t border-white/10 py-6 text-sm leading-7 text-[#c9c1b2]">
                  {qualityChecks.map((check) => (
                    <li key={check} className="flex gap-3 py-2">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#d4ac67]" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="gold-panel p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-end">
                <div>
                  <p className="section-kicker">06 / Final action</p>
                  <h2 className="section-heading mt-4 text-3xl text-[#120f08] sm:text-4xl">
                    Send Your Drawing to Plan the Right Manufacturing Route
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#2d2417] sm:text-lg">
                    Share the drawing, quantity, tolerance, finishing, and
                    packing requirements so HSX can review which in-house and
                    partner-supported operations are relevant to the project.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/b2b-oem-project-review"
                      className="rounded-full bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Send Your Drawing
                    </Link>
                    <Link
                      href="/products"
                      className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                    >
                      View Product Directions
                    </Link>
                  </div>
                </div>

                <div className="border-l border-[#2b2216]/25 pl-0 lg:pl-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5f4a28]">
                    Direct contact
                  </p>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-[#2c2316]">
                    <p>
                      <span className="font-semibold">Email: </span>
                      <a
                        href={contactDetails.emailHref}
                        className="underline decoration-[#5f4a28]/35 underline-offset-4 transition-colors hover:text-[#120f08]"
                      >
                        {contactDetails.email}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">WhatsApp / Phone: </span>
                      <a
                        href={contactDetails.whatsappHref}
                        className="underline decoration-[#5f4a28]/35 underline-offset-4 transition-colors hover:text-[#120f08]"
                      >
                        {contactDetails.phone}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Project fit: </span>
                      <Link
                        href="/products/oem-aluminum-die-casting-parts"
                        className="underline decoration-[#5f4a28]/35 underline-offset-4 transition-colors hover:text-[#120f08]"
                      >
                        Check Project Fit
                      </Link>
                    </p>
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
