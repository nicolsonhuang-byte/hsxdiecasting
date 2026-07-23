import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../../components/site-navigation";
import automotiveLedLight from "../../../../public/images/automotive-led-light.png";
import batchDieCastParts from "../../../../public/images/hsx-factory/batch-die-cast-parts-before-trimming.jpg";
import sprayPainting from "../../../../public/images/hsx-factory/in-house-spray-painting-aluminum-parts.jpg";
import workshopHorizontal from "../../../../public/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg";

const pageTitle =
  "Automotive LED Light Aluminum Die-Cast Housings | HSX DIECASTING";
const pageDescription =
  "Custom aluminum die-cast housings and related structural parts for automotive LED lighting applications, based on drawings, samples, and project requirements.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/products/automotive-led-lights",
  },
  keywords: [
    "automotive LED light aluminum die-cast housing",
    "automotive lamp body die casting",
    "aluminum die-cast lighting housing",
    "automotive lighting structural die-cast parts",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/products/automotive-led-lights",
    images: [
      {
        url: "/images/hsx-factory/batch-die-cast-parts-before-trimming.jpg",
        alt: "Batch aluminum die-cast parts at HSX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      "/images/hsx-factory/batch-die-cast-parts-before-trimming.jpg",
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automotive LED Light Housing Die Casting Service",
  url: "https://www.hsxdiecasting.com/products/automotive-led-lights",
  image: [
    "https://www.hsxdiecasting.com/images/hsx-factory/batch-die-cast-parts-before-trimming.jpg",
    "https://www.hsxdiecasting.com/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg",
  ],
  description:
    "Custom aluminum die-cast housings and related structural parts for automotive LED lighting applications, based on drawings, samples, and project requirements.",
  provider: {
    "@type": "Organization",
    name: "Foshan Huashunxiang Hardware Products Factory",
    url: "https://www.hsxdiecasting.com",
  },
  serviceType:
    "Aluminum die-cast housing and structural part manufacturing for automotive LED lighting applications",
  areaServed: "Global B2B Markets",
  category: "Automotive lighting aluminum die casting",
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Supply Scope",
      value:
        "Aluminum die-cast housing and related die-cast mounting or structural parts",
    },
    {
      "@type": "PropertyValue",
      name: "In-house Operations",
      value:
        "Aluminum die casting, gate removal, deburring, drilling, tapping, polishing, powder coating, spray painting, QC, and packing",
    },
    {
      "@type": "PropertyValue",
      name: "Partner-supported Resources",
      value: "CNC machining, anodizing, and electroplating",
    },
  ],
};

const applicationParts = [
  {
    number: "01",
    title: "Aluminum Die-Cast Housing",
    description:
      "The main enclosure reviewed from the buyer's drawing, sample, dimensions, and required supply stage.",
  },
  {
    number: "02",
    title: "Lamp Body",
    description:
      "A die-cast aluminum body with project-specific external form, internal space, and attachment features.",
  },
  {
    number: "03",
    title: "Heat-Dissipation Structure",
    description:
      "Housing geometry with ribs or other heat-dissipation features considered as part of the die-cast part design.",
  },
  {
    number: "04",
    title: "Mounting and Structural Parts",
    description:
      "Related die-cast mounting or structural parts evaluated from the actual project requirements.",
  },
];

const manufacturingConsiderations = [
  "Part structure",
  "Heat-dissipation features",
  "Mounting features",
  "Holes and threads",
  "Surface requirements",
  "Quantity and project requirements",
];

const inHouseOperations = [
  "Aluminum Die Casting",
  "Gate Removal",
  "Deburring",
  "Drilling",
  "Tapping",
  "Polishing",
  "Powder Coating",
  "Spray Painting",
  "QC",
  "Packing",
];

const partnerSupported = [
  "CNC Machining",
  "Anodizing",
  "Electroplating",
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

export default function AutomotiveLedLightsPage() {
  return (
    <div className="relative overflow-x-clip bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <SiteHeader />

      <main id="top">
        <section className="relative overflow-hidden border-b border-white/8 bg-[#050505]">
          <div className="absolute inset-0">
            <Image
              src={workshopHorizontal}
              alt="HSX aluminum die casting workshop for custom housing projects"
              fill
              preload
              sizes="100vw"
              className="object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.86)_56%,rgba(0,0,0,0.5)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_12%,rgba(199,162,91,0.18),transparent_30%)]" />
          </div>

          <div className="container-shell relative grid gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.55fr)] lg:items-center lg:py-24">
            <div className="max-w-4xl">
              <p className="section-kicker">Application overview</p>
              <h1 className="section-heading mt-6 text-4xl leading-tight text-white sm:text-5xl xl:text-6xl">
                Automotive LED Light Aluminum Die-Cast Housings
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#e1dacd]">
                HSX reviews custom aluminum die-cast housings, lamp bodies,
                heat-dissipation structures, and related die-cast mounting or
                structural parts for automotive LED lighting applications.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.95)]">
                Project fit is evaluated from drawings, samples, part structure,
                quantity, surface requirements, and the buyer&apos;s required
                supply stage.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/b2b-oem-project-review"
                  className="gold-button text-center"
                >
                  Send Your Drawing
                </Link>
                <Link
                  href="/products/aluminum-light-housings"
                  className="outline-button text-center"
                >
                  View Aluminum Light Housings
                </Link>
              </div>

              <p className="mt-9 max-w-3xl border-l border-[#d6af69]/55 pl-5 text-sm leading-7 text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.95)]">
                HSX focuses on the aluminum die-cast housing and related
                die-cast structural parts for automotive LED lighting
                applications.
              </p>
            </div>

            <figure className="relative min-h-[30rem] overflow-hidden border border-white/12 bg-[#101010] sm:min-h-[36rem]">
              <Image
                src={batchDieCastParts}
                alt="Batch aluminum die-cast parts before gate removal"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="section-kicker">Real die-cast process evidence</p>
                <p className="mt-4 text-lg font-semibold leading-8 text-white">
                  Batch aluminum die-cast parts before gate removal.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <SectionHeading
              eyebrow="What HSX can manufacture for this application"
              title="Die-cast parts defined by the actual automotive lighting project"
              description="The required aluminum part type and supply scope are reviewed from the buyer's drawing, sample, dimensions, and project requirements."
            />

            <div className="divide-y divide-white/10 border-y border-white/10">
              {applicationParts.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-4 py-7 sm:grid-cols-[4rem_minmax(0,0.8fr)_minmax(0,1.2fr)] sm:items-start"
                >
                  <p className="text-sm font-semibold tracking-[0.24em] text-[#d7b36f]">
                    {item.number}
                  </p>
                  <h2 className="text-xl font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="text-sm leading-7 text-[#c5bdaf]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[#080808] py-16 lg:py-24">
          <div className="container-shell grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Manufacturing considerations"
                title="Housing requirements shape the manufacturing route"
                description="HSX evaluates the aluminum die-cast part itself. The review does not extend into LED modules, optics, drivers, wiring, electronic systems, or complete lamp assembly."
              />

              <ol className="mt-10 grid gap-x-8 border-t border-white/10 sm:grid-cols-2">
                {manufacturingConsiderations.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 border-b border-white/10 py-5"
                  >
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#d7b36f]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base text-[#ede6da]">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <figure className="relative min-h-[25rem] overflow-hidden border border-white/10 sm:min-h-[34rem]">
              <Image
                src={sprayPainting}
                alt="In-house spray painting of aluminum parts at HSX"
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="section-kicker">Real process evidence</p>
                <p className="mt-4 max-w-xl text-xl font-semibold leading-8 text-white">
                  In-house spray painting for suitable aluminum parts when
                  required by the project.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
              <SectionHeading
                eyebrow="Possible manufacturing route"
                title="The route depends on the agreed supply stage"
                description="The operations below are a compact summary for suitable aluminum die-cast housing projects. They are not a fixed process required for every part."
              />
              <p className="max-w-2xl border-l border-[#d6af69]/55 pl-6 text-sm leading-7 text-[#c6bdad] lg:justify-self-end">
                A project may end at a die-cast blank, after gate removal, or
                after selected secondary operations, finishing, QC, and packing,
                depending on project requirements and the agreed supply scope.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]">
              <div className="border-y border-white/10 py-7">
                <p className="section-kicker">In-house operations</p>
                <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3 xl:grid-cols-5">
                  {inHouseOperations.map((operation) => (
                    <p
                      key={operation}
                      className="border-l border-[#d6af69]/45 py-1 pl-3 text-sm font-semibold leading-6 text-white"
                    >
                      {operation}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border border-[#d6af69]/30 bg-[#d6af69]/6 p-6 sm:p-7">
                <p className="section-kicker">Partner-supported resources</p>
                <div className="mt-6 space-y-3">
                  {partnerSupported.map((item) => (
                    <p
                      key={item}
                      className="border-l border-[#d6af69]/45 pl-4 text-base font-semibold text-white"
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-7 text-[#c6bdad]">
                  These processes can be coordinated through partner-supported
                  resources when required by a suitable project.
                </p>
                <Link
                  href="/capabilities"
                  className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-[#e9c985] transition-colors hover:text-white"
                >
                  View Manufacturing Capabilities
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[#080808] py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Real application evidence and supply scope"
              title="Automotive lighting application, with a defined die-cast scope"
              description="HSX has experience with aluminum die-cast housings and related structural parts for automotive LED lighting applications. Final feasibility and supply scope are reviewed from the actual project."
            />

            <figure className="mt-12 grid overflow-hidden border border-white/10 bg-[#101010] lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)]">
              <div className="relative overflow-hidden bg-black">
                <Image
                  src={automotiveLedLight}
                  alt="Automotive LED lighting shown only as an application reference"
                  sizes="(min-width: 1024px) 64vw, 100vw"
                  className="block aspect-[16/10] min-h-[22rem] w-full object-cover object-center brightness-110 sm:min-h-[30rem] lg:h-full lg:min-h-[34rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute left-5 top-5 bg-black/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#e9c985]">
                  Application reference
                </p>
              </div>

              <figcaption className="flex flex-col justify-center border-t border-white/10 p-7 sm:p-9 lg:border-l lg:border-t-0">
                <p className="section-kicker">HSX supply scope</p>
                <p className="mt-5 text-2xl font-semibold leading-9 text-white">
                  HSX supply scope focuses on the aluminum die-cast housing or
                  related die-cast structural parts for automotive LED lighting
                  applications.
                </p>
                <p className="mt-5 text-sm leading-7 text-[#c5bdaf]">
                  The complete automotive lighting image illustrates the
                  application only. It does not represent LED modules, lenses,
                  drivers, wiring, electronics, or complete lamp assembly
                  supplied by HSX.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="gold-panel grid gap-10 p-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:p-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5f4a28]">
                  Project review
                </p>
                <h2 className="section-heading mt-5 text-4xl text-[#120f08] sm:text-5xl">
                  Send your automotive housing drawing for review
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-[#332817] lg:text-lg">
                  Send the drawing, 3D file, sample photo, quantity, holes and
                  threads, surface requirements, and required supply stage. HSX
                  will review whether the aluminum die-cast housing or related
                  structural part fits the available manufacturing route.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Link
                  href="/b2b-oem-project-review"
                  className="inline-flex items-center justify-center rounded-full bg-[#120f08] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-black"
                >
                  Send Your Drawing
                </Link>
                <Link
                  href="/products/aluminum-light-housings"
                  className="rounded-full border border-[#2b2216]/25 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#120f08] transition hover:bg-[#120f08] hover:text-white"
                >
                  View Aluminum Light Housings
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
