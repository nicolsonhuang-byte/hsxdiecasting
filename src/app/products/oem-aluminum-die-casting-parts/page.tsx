import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../../components/site-navigation";

import communicationEquipmentHousing from "../../../../public/images/hsx-factory/communication-equipment-aluminum-die-cast-housing.jpg";
import workshopHorizontal from "../../../../public/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg";
import machineryPart from "../../../../public/images/hsx-factory/machinery-accessory-aluminum-die-cast-part.jpg";
import opticalModuleHousing from "../../../../public/images/hsx-factory/optical-module-aluminum-die-cast-housing-a.jpg";
import stageLightHousing from "../../../../public/images/hsx-factory/stage-light-aluminum-die-cast-housing.jpg";

type RealPart = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

type FaqItem = {
  question: string;
  answer: string;
  href?: string;
  linkLabel?: string;
};

const pageTitle =
  "OEM Aluminum Die Casting Parts for Small-to-Medium Projects | HSX DIECASTING";

const pageDescription =
  "HSX DIECASTING reviews and produces small-to-medium OEM aluminum die casting parts, housings, covers, brackets, and aluminum die-cast components with partner-supported machining when required. Send drawings, 3D files, sample photos, quantity, machining requirements when needed, and finishing requirements for project review before quotation.";

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
  emailHref:
    "mailto:nicolson@hsxdiecasting.com?subject=OEM%20Aluminum%20Die%20Casting%20Project%20Review&body=Hello%20HSX%20DIECASTING%2C%0A%0AI%20would%20like%20to%20request%20an%20OEM%20aluminum%20die%20casting%20project%20review.%0A%0AI%20will%20attach%20drawings%2C%203D%20files%2C%20sample%20photos%2C%20or%20basic%20project%20requirements.%0A%0ARegards%2C",
  phone: "+86 176 6615 5283",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20DIECASTING%2C%20I%20would%20like%20to%20request%20an%20OEM%20aluminum%20die%20casting%20project%20review.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const projectTypes = [
  {
    title: "Custom Housings and Enclosures",
    description:
      "Drawing-based housings, covers, shells, and enclosure structures for suitable OEM projects.",
  },
  {
    title: "Lighting Housings and Related Die-Cast Structures",
    description:
      "Aluminum housings and related structural parts used in lighting applications.",
  },
  {
    title: "Hardware and Mechanical Parts",
    description:
      "Mounting, support, connection, and other mechanical parts based on project drawings or samples.",
  },
  {
    title: "Other Drawing-Based Aluminum Die-Cast Parts",
    description:
      "Other suitable aluminum components that need a drawing-led manufacturing review before quotation.",
  },
];

const fitSignals = [
  "The project needs repeat production in planned quantities.",
  "The part structure can be evaluated for forming through a die.",
  "Stable repeat manufacturing is important across production batches.",
  "The part has a housing, support, connection, mounting, or structural function.",
  "Holes, threads, surface requirements, or post-processing need to be reviewed as part of the manufacturing route.",
];

const realParts: RealPart[] = [
  {
    title: "Communication Equipment Housing",
    description:
      "Aluminum die-cast communication equipment housing manufactured by HSX.",
    image: communicationEquipmentHousing,
    alt: "Communication equipment aluminum die-cast housing manufactured by HSX",
  },
  {
    title: "Optical Module Housing",
    description:
      "Aluminum die-cast optical module housing manufactured by HSX.",
    image: opticalModuleHousing,
    alt: "Optical module aluminum die-cast housing manufactured by HSX",
  },
  {
    title: "Machinery Part",
    description: "Aluminum die-cast machinery part manufactured by HSX.",
    image: machineryPart,
    alt: "Aluminum die-cast machinery part manufactured by HSX",
  },
  {
    title: "Stage Light Housing",
    description:
      "Aluminum die-cast stage light housing manufactured by HSX.",
    image: stageLightHousing,
    alt: "Aluminum die-cast stage light housing manufactured by HSX",
  },
];

const factoryExperience = [
  "Part structure is reviewed together with mold design and filling conditions.",
  "Hole and thread requirements can affect the drilling, tapping, or partner-supported machining route.",
  "Different parts may require different combinations of mold planning, die casting, trimming, gate removal, and later operations.",
  "Surface and appearance requirements can influence the finishing route.",
  "The agreed supply scope may end at the casting blank or continue through selected secondary operations, QC, and packing.",
];

const supplyStages = [
  "Die-Cast Blank",
  "After Gate Removal",
  "After Drilling / Tapping",
  "After Polishing",
  "Finished / Coated Parts",
  "QC and Packing",
];

const inHouseOperations = [
  "Drilling",
  "Tapping",
  "Polishing",
  "Powder Coating",
  "Spray Painting",
  "QC",
  "Packing",
];

const partnerSupportedOperations = [
  {
    title: "CNC Machining",
    description:
      "CNC machining can be coordinated through partner-supported resources when required by the project.",
  },
  {
    title: "Anodizing",
    description:
      "Anodizing can be coordinated through partner-supported resources for selected suitable parts when required by the project.",
  },
  {
    title: "Electroplating",
    description:
      "Electroplating can be coordinated through partner-supported resources when required by the project.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Can HSX review a project from a drawing or sample?",
    answer:
      "Yes. HSX can begin with an available drawing, 3D file, sample, sample photo, or clear basic project requirements.",
  },
  {
    question: "Does every project need the same secondary operations?",
    answer:
      "No. The manufacturing route depends on the part structure, holes, threads, surface requirements, agreed supply scope, and other project needs.",
  },
  {
    question: "Can HSX supply die-cast blanks only?",
    answer:
      "Yes. When the agreed delivery stage is a die-cast blank or a part after gate removal, that stage can be the complete supply scope for the project.",
  },
  {
    question: "How do I know whether aluminum die casting fits my part?",
    answer:
      "HSX reviews the actual drawing, structure, planned quantity, material, required secondary operations, and surface requirements before recommending the manufacturing route.",
  },
  {
    question: "What should I send first?",
    answer:
      "Send an available drawing, 3D file, sample photo, or basic project requirements.",
    href: "/b2b-oem-project-review",
    linkLabel: "Review Project Submission Details",
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

export default function OemAluminumDieCastingPartsPage() {
  return (
    <div className="relative overflow-x-clip">
      <div className="border-b border-white/8 bg-black/85">
        <div className="container-shell flex flex-col gap-3 py-3 text-sm text-[#d8ccb2] lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 space-y-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href={contactDetails.emailHref}
                className="flex min-w-0 items-center gap-3 transition-colors hover:text-white"
              >
                <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                  Email
                </span>
                <span className="break-all">{contactDetails.email}</span>
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
            <div className="flex min-w-0 items-start gap-3">
              <span className="shrink-0 rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                Address
              </span>
              <span className="min-w-0 break-words">{contactDetails.address}</span>
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

      <main>
        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.15),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
          <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
            <div className="min-w-0 motion-rise">
              <p className="section-kicker">Evaluate OEM project fit</p>
              <h1 className="section-heading mt-6 max-w-4xl text-4xl leading-[1.02] text-white sm:text-5xl xl:text-6xl">
                OEM Aluminum Die Casting Parts Based on Your Drawings
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                Send a drawing, sample, or basic project requirements. HSX
                reviews the part structure and manufacturing needs to assess
                whether aluminum die casting fits, which later operations may
                be required, and how to move into formal project review.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
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
              <div className="mt-10 grid gap-3 border-t border-white/10 pt-6 text-sm leading-7 text-[#c8c0b3] sm:grid-cols-3">
                <p>Review the actual part structure</p>
                <p>Identify possible manufacturing steps</p>
                <p>Confirm the next project-review action</p>
              </div>
            </div>

            <div className="min-w-0 motion-rise-delay">
              <div className="gold-frame relative overflow-hidden border border-white/10 bg-[#0b0b0b] p-3">
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <Image
                    src={workshopHorizontal}
                    alt="HSX aluminum die casting workshop for OEM project review"
                    fill
                    preload
                    sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 border-l-2 border-[#d5ae67] bg-black/70 px-5 py-4 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#efcf8d]">
                      Drawing-based review
                    </p>
                    <p className="mt-2 text-base font-semibold leading-7 text-white">
                      Project fit is assessed from the actual part and required
                      delivery scope.
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
              eyebrow="OEM project directions"
              title="Types of OEM projects HSX can review"
              description="These directions help buyers recognize whether an aluminum die-cast part is suitable for further review. Full product navigation is available on the Products page."
            />

            <div className="mt-12 grid border-y border-white/10 lg:grid-cols-2">
              {projectTypes.map((project, index) => (
                <article
                  key={project.title}
                  className="border-b border-white/10 py-7 lg:px-8 lg:odd:border-r lg:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8b671]">
                    Direction {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#c9c1b2]">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>

            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#efcf8d] transition-colors hover:text-white"
            >
              View Product Directions
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(199,162,91,0.11),transparent_30%),#080808] py-16 lg:py-24">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Manufacturing fit"
              title="When aluminum die casting is worth evaluating"
              description="A project should be reviewed from its actual drawing and requirements. These signals can indicate that an aluminum die-casting route deserves further evaluation, but they are not fixed rules."
            />

            <div className="border-y border-white/10 py-3">
              {fitSignals.map((signal, index) => (
                <div
                  key={signal}
                  className="flex gap-5 border-b border-white/10 py-5 last:border-b-0"
                >
                  <span className="mt-1 text-xs font-semibold tracking-[0.22em] text-[#d8b671]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-8 text-[#e8dfcf]">{signal}</p>
                </div>
              ))}
              <p className="border-t border-white/10 py-6 text-sm leading-7 text-[#bfb6a8]">
                HSX reviews the drawing, part structure, planned quantity,
                material, required secondary operations, and surface
                requirements before recommending a manufacturing route. If a
                different process is more appropriate, that should be
                identified before tooling.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Representative real parts"
              title="Selected aluminum die-cast parts manufactured by HSX"
              description="Four real parts from separate OEM projects provide direct evidence of HSX aluminum die-casting experience."
            />

            <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {realParts.map((part) => (
                <article key={part.title} className="min-w-0 bg-[#080808]">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "16 / 11" }}
                  >
                    <Image
                      src={part.image}
                      alt={part.alt}
                      fill
                      sizes="(min-width: 1024px) 40rem, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                  <div className="border-t border-white/10 p-6 sm:p-7">
                    <h2 className="text-xl font-semibold text-white">
                      {part.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[#c9c1b2]">
                      {part.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[#070707] py-16 lg:py-24">
          <div className="container-shell">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="min-w-0">
                <SectionHeading
                  eyebrow="Factory experience"
                  title="Manufacturing decisions follow the actual project"
                  description="HSX uses production experience to assess how the part structure, required operations, surface expectations, and delivery stage should shape the manufacturing route."
                />
                <div className="mt-8 border border-white/10 bg-black/30 p-3">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "16 / 10" }}
                  >
                    <Image
                      src={workshopHorizontal}
                      alt="HSX aluminum die casting workshop supporting drawing-based OEM projects"
                      fill
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="border-y border-white/10 py-2">
                {factoryExperience.map((item) => (
                  <p
                    key={item}
                    className="border-b border-white/10 py-5 text-base leading-8 text-[#e4dccf] last:border-b-0"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-14 border-t border-white/10 pt-9">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div className="max-w-xl">
                  <p className="section-kicker">HSX supply scope</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">
                    The agreed delivery stage defines the completed scope
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#bfb6a8]">
                    A project can be complete at the casting-blank stage or
                    after selected later operations. The correct scope is the
                    stage agreed with the buyer.
                  </p>
                </div>
                <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-3">
                  {supplyStages.map((stage) => (
                    <div key={stage} className="bg-[#0a0a0a] px-5 py-5">
                      <p className="text-sm font-semibold text-white">{stage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Possible secondary operations"
              title="Later operations are selected according to the project"
              description="The summary below shows operations that may be considered after casting. The exact route depends on the drawing and agreed supply scope."
            />

            <div className="mt-12 grid gap-10 border-y border-white/10 py-9 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d8b671]">
                  In-house operations
                </p>
                <div className="mt-6 flex flex-wrap gap-x-7 gap-y-4 text-base text-[#f0e8da]">
                  {inHouseOperations.map((operation) => (
                    <span key={operation}>{operation}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d8b671]">
                  Partner-supported resources
                </p>
                <div className="mt-6 space-y-6">
                  {partnerSupportedOperations.map((operation) => (
                    <div key={operation.title}>
                      <h2 className="text-lg font-semibold text-white">
                        {operation.title}
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-[#bfb6a8]">
                        {operation.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/capabilities"
              className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#efcf8d] transition-colors hover:text-white"
            >
              View Manufacturing Capabilities
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[#070707] py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Project-fit FAQ"
              title="Questions before requesting a project review"
              description="These answers help buyers decide whether to send a part for further aluminum die-casting evaluation."
            />

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {faqItems.map((faq) => (
                <details key={faq.question} className="group py-2">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-semibold leading-7 text-white">
                    <span>{faq.question}</span>
                    <span
                      aria-hidden
                      className="mt-1 text-[#d5ae67] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="max-w-4xl pb-6 text-sm leading-7 text-[#c9c1b2] sm:text-base sm:leading-8">
                    <p>{faq.answer}</p>
                    {faq.href && faq.linkLabel ? (
                      <Link
                        href={faq.href}
                        className="mt-3 inline-flex text-sm font-semibold text-[#efcf8d] transition-colors hover:text-white"
                      >
                        {faq.linkLabel}
                      </Link>
                    ) : null}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="gold-panel grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6d5121]">
                  Next step
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#151006] sm:text-4xl">
                  Send Your Drawing for OEM Aluminum Die Casting Review
                </h2>
                <p className="mt-4 text-base leading-8 text-[#332817]">
                  Share an available drawing, 3D file, sample photo, or basic
                  project requirements so HSX can assess project fit and the
                  likely manufacturing route.
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#3a2c18]">
                  <a href={contactDetails.emailHref} className="hover:underline">
                    {contactDetails.email}
                  </a>
                  <a
                    href={contactDetails.whatsappHref}
                    className="hover:underline"
                  >
                    WhatsApp {contactDetails.phone}
                  </a>
                  <Link href="/products" className="hover:underline">
                    View Product Directions
                  </Link>
                  <Link href="/capabilities" className="hover:underline">
                    View Manufacturing Capabilities
                  </Link>
                </div>
              </div>
              <Link
                href="/b2b-oem-project-review"
                className="rounded-full bg-[#120f08] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Send Your Drawing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
