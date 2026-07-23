import Image from "next/image";
import type { Metadata } from "next";

import { SiteFooter, SiteHeader } from "../components/site-navigation";

import workshopHorizontal from "../../../public/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg";

export const metadata: Metadata = {
  title: "OEM Aluminum Die Casting Project Review Before Quotation | HSX DIECASTING",
  description:
    "Send 3D files, 2D drawings, sample photos, application, quantity, machining needs, finishing requirements, and packing needs. HSX reviews whether aluminum die casting is suitable before quotation.",
  alternates: {
    canonical: "https://www.hsxdiecasting.com/b2b-oem-project-review",
  },
  openGraph: {
    title: "OEM Aluminum Die Casting Project Review Before Quotation | HSX DIECASTING",
    description:
      "Send drawings, 3D files, sample photos, quantity, finishing, and packing requirements for factory-direct OEM aluminum die casting project review.",
    url: "https://www.hsxdiecasting.com/b2b-oem-project-review",
    siteName: "HSX DIECASTING",
    type: "website",
    images: [
      "/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OEM Aluminum Die Casting Project Review Before Quotation | HSX DIECASTING",
    description:
      "Send drawings, 3D files, sample photos, quantity, finishing, and packing requirements for factory-direct OEM aluminum die casting project review.",
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
    "https://wa.me/8617666155283?text=Hello%20HSX%20DIECASTING%2C%20I%20would%20like%20to%20send%20an%20OEM%20aluminum%20die%20casting%20project%20for%20review.",
};

const projectInputs = [
  {
    number: "01",
    title: "Drawing",
    description:
      "Send the drawing you already use for the part, even if some details still need discussion.",
  },
  {
    number: "02",
    title: "3D File",
    description:
      "STEP or STP files help HSX review the part structure and production fit.",
  },
  {
    number: "03",
    title: "Sample Photo",
    description:
      "A clear photo can start the discussion when a drawing or 3D file is not yet available.",
  },
  {
    number: "04",
    title: "Basic Project Requirements",
    description:
      "Share the application, planned quantity, key dimensions, finish, and delivery needs you already know.",
  },
];

const reviewItems = [
  "Part Structure",
  "Wall Thickness and Filling Feasibility",
  "Material Requirement",
  "Planned Quantity",
  "Holes and Threads",
  "Tolerance Requirements",
  "Secondary Operations",
  "Surface Finish",
  "Application Environment",
  "QC and Packing Requirements",
];

const routeExamples = [
  {
    label: "Possible route A",
    title: "Die-cast blank delivery",
    steps: ["Die Casting", "Gate Removal", "Die-Cast Blank Delivery"],
  },
  {
    label: "Possible route B",
    title: "Finished and packed parts",
    steps: [
      "Die Casting",
      "Deburring",
      "Drilling / Tapping",
      "Polishing",
      "Surface Finishing",
      "QC",
      "Packing",
    ],
  },
];

const inHouseCapabilities = [
  "Aluminum Die Casting",
  "Trimming",
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

const partnerSupportedCapabilities = [
  "CNC Machining",
  "Anodizing",
  "Electroplating",
];

const supplyStages = [
  {
    number: "01",
    title: "Die-Cast Blank",
    description: "A die-cast part supplied at the blank stage.",
  },
  {
    number: "02",
    title: "After Gate Removal",
    description: "The agreed part supplied after gate removal.",
  },
  {
    number: "03",
    title: "After Drilling / Tapping",
    description: "The agreed part supplied after required holes or threads.",
  },
  {
    number: "04",
    title: "After Polishing",
    description: "The agreed part supplied after polishing preparation.",
  },
  {
    number: "05",
    title: "Finished / Coated Parts",
    description: "The agreed part supplied after the selected surface finish.",
  },
  {
    number: "06",
    title: "QC and Packing",
    description: "The agreed part checked and packed before delivery.",
  },
];

const nextSteps = [
  {
    number: "01",
    title: "Send available project information",
    description: "Start with the drawing, file, photo, or requirements you have.",
  },
  {
    number: "02",
    title: "HSX reviews project fit",
    description:
      "HSX checks the information received and identifies what still needs clarification.",
  },
  {
    number: "03",
    title: "Clarify route and supply scope",
    description:
      "The manufacturing route and agreed delivery stage are defined for the project.",
  },
  {
    number: "04",
    title: "Move to the appropriate next step",
    description:
      "The discussion can continue to quotation, tooling, sample, or further technical review as appropriate.",
  },
];

function SectionHeader({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid min-w-0 gap-5 border-t border-white/10 pt-6 lg:gap-10">
      <div>
        <span className="font-mono text-sm tracking-[0.24em] text-[#d4ac67]">
          {number}
        </span>
      </div>
      <div className="min-w-0">
        <p className="section-kicker">{eyebrow}</p>
        <h2 className="section-heading mt-4 max-w-4xl text-3xl text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#beb6a8] sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function B2BOemProjectReviewPage() {
  return (
    <div className="relative overflow-x-clip bg-[#050505] text-[#f8f2e6]">
      <SiteHeader />

      <main>
        <section className="relative border-b border-white/10">
          <div className="container-shell grid min-w-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex min-w-0 flex-col justify-center py-16 pr-0 sm:py-20 lg:pr-14 xl:pr-20">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm tracking-[0.24em] text-[#d4ac67]">
                  01
                </span>
                <span className="h-1.5 w-2 bg-[#d4ac67]" />
                <p className="section-kicker">Project Review</p>
              </div>

              <h1 className="section-heading mt-8 max-w-4xl text-5xl leading-[0.98] text-white sm:text-6xl lg:text-7xl">
                Review project fit before quotation.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c9c1b2] sm:text-xl sm:leading-9">
                Send your drawing, 3D file, sample photo, or basic project
                requirements. HSX reviews project fit before quotation.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={contactDetails.emailHref} className="gold-button text-center">
                  Send by Email
                </a>
                <a
                  href={contactDetails.whatsappHref}
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#f4d27a] hover:text-[#f4d27a]"
                >
                  Send by WhatsApp
                </a>
              </div>

              <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8f887c]">
                    Email
                  </p>
                  <a
                    href={contactDetails.emailHref}
                    className="mt-2 block break-all text-sm font-semibold text-[#efe7d9] transition-colors hover:text-[#f4d27a]"
                  >
                    {contactDetails.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8f887c]">
                    WhatsApp
                  </p>
                  <a
                    href={contactDetails.whatsappHref}
                    className="mt-2 block text-sm font-semibold text-[#efe7d9] transition-colors hover:text-[#f4d27a]"
                  >
                    {contactDetails.phone}
                  </a>
                </div>
              </div>
            </div>

            <div
              className="relative overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0"
              style={{ minHeight: "24rem" }}
            >
              <Image
                src={workshopHorizontal}
                alt="HSX aluminum die casting workshop for OEM project review"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/55 p-5 backdrop-blur sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7b56d]">
                  Start with what you have
                </p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#eee6d8]">
                  A complete technical package is not required for the first
                  discussion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
          <div className="container-shell">
            <SectionHeader
              number="02"
              eyebrow="What you can send"
              title="Send what you already have."
              description="One useful file or photo is enough to begin. HSX can identify the missing information during the first review."
            />

            <ol className="mt-12 border-y border-white/10">
              {projectInputs.map((item) => (
                <li
                  key={item.number}
                  className="grid min-w-0 gap-3 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-3 sm:items-start sm:gap-6"
                >
                  <span className="font-mono text-sm tracking-[0.2em] text-[#d4ac67]">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-7 text-[#beb6a8]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#080808] py-16 sm:py-20 lg:py-24">
          <div className="container-shell">
            <SectionHeader
              number="03"
              eyebrow="What HSX will review"
              title="The checks that shape project fit."
              description="HSX reviews the part and its requirements as one manufacturing question before the project moves toward quotation."
            />

            <div className="mt-12 grid border-y border-white/10 md:grid-cols-2">
              {reviewItems.map((item, index) => (
                <div
                  key={item}
                  className={`flex min-w-0 items-start gap-4 border-white/10 py-5 md:px-6 ${
                    index < reviewItems.length - 2 ? "border-b" : ""
                  } ${index % 2 === 0 ? "md:border-r md:pl-0" : ""}`}
                >
                  <span className="mt-1 font-mono text-xs tracking-[0.18em] text-[#7e7568]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-semibold leading-7 text-[#efe7d9]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
          <div className="container-shell">
            <SectionHeader
              number="04"
              eyebrow="How the manufacturing route is judged"
              title="The route follows the project, not a fixed template."
              description="Part structure, required operations, surface finish, inspection, and the agreed delivery stage determine the practical manufacturing route."
            />

            <div className="mt-12 space-y-5">
              {routeExamples.map((route) => (
                <article
                  key={route.label}
                  className="border border-white/12 bg-white/[0.03] p-6 sm:p-8"
                >
                  <div className="grid min-w-0 gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d4ac67]">
                        {route.label}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-white">
                        {route.title}
                      </h3>
                    </div>
                    <ol className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-3 text-sm font-semibold text-[#efe7d9]">
                      {route.steps.map((step, index) => (
                        <li key={step} className="flex min-w-0 items-center gap-3">
                          <span className="whitespace-nowrap">{step}</span>
                          {index < route.steps.length - 1 ? (
                            <span aria-hidden="true" className="text-[#d4ac67]">
                              →
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ol>
                  </div>
                </article>
              ))}
              <p className="border-l-2 border-[#d4ac67] pl-5 text-sm leading-7 text-[#beb6a8]">
                These are possible routes, not fixed steps for every project. If
                aluminum die casting is not a practical fit, HSX can identify the
                concern before tooling investment.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
              <div className="bg-[#080808] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4ac67]">
                  In-house
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {inHouseCapabilities.map((item) => (
                    <span
                      key={item}
                      className="border border-white/12 px-3 py-2 text-sm text-[#efe7d9]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#080808] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4ac67]">
                  Partner-supported
                </p>
                <div className="mt-6 space-y-3">
                  {partnerSupportedCapabilities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm text-[#efe7d9] last:border-b-0"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#d4ac67]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-[#beb6a8]">
                  These operations can be coordinated through partner-supported
                  resources when required by the project.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#080808] py-16 sm:py-20 lg:py-24">
          <div className="container-shell">
            <SectionHeader
              number="05"
              eyebrow="What HSX can supply"
              title="The agreed delivery stage defines the completed scope."
              description="A project can be complete at different supply stages. The required stage is clarified before quotation and production planning."
            />

            <ol className="mt-12 grid border-l border-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {supplyStages.map((stage, index) => (
                <li
                  key={stage.number}
                  className={`relative min-w-0 border-b border-r border-white/10 p-6 sm:p-7 ${
                    index < 3 ? "lg:border-t" : ""
                  }`}
                >
                  <span className="absolute left-4 top-4 h-2 w-2 bg-[#d4ac67]" />
                  <p className="font-mono text-xs tracking-[0.2em] text-[#beb6a8]">
                    {stage.number}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#beb6a8]">
                    {stage.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container-shell">
            <SectionHeader
              number="06"
              eyebrow="What happens next"
              title="Move from available information to a clear next step."
              description="The first message starts the review. HSX then clarifies missing information, manufacturing fit, and the appropriate next discussion."
            />

            <div className="mt-12 grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start">
              <ol className="border-y border-white/10">
                {nextSteps.map((step) => (
                  <li
                    key={step.number}
                    className="grid min-w-0 gap-3 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-3 sm:gap-5"
                  >
                    <span className="font-mono text-xs tracking-[0.18em] text-[#d4ac67]">
                      {step.number}
                    </span>
                    <h3 className="font-semibold leading-7 text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-7 text-[#beb6a8]">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>

              <aside className="gold-panel border border-[#d4ac67]/50 p-6 text-[#120f08] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f4a28]">
                  Start your project review
                </p>
                <h2 className="section-heading mt-4 text-3xl sm:text-4xl">
                  Send Your Drawing
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#2d2417]">
                  Send the information you already have. A complete package is
                  not required for the first discussion.
                </p>
                <div className="mt-7 grid gap-3">
                  <a
                    href={contactDetails.emailHref}
                    className="rounded-full bg-[#120f08] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
                    style={{ color: "#ffffff" }}
                  >
                    Send Your Drawing
                  </a>
                  <a
                    href={contactDetails.whatsappHref}
                    className="rounded-full border border-[#2b2216]/20 px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                  >
                    Send by WhatsApp
                  </a>
                </div>
                <div className="mt-7 border-t border-[#2b2216]/20 pt-6 text-sm leading-7">
                  <p className="break-all">
                    <span className="font-semibold">Email:</span>{" "}
                    <a href={contactDetails.emailHref}>{contactDetails.email}</a>
                  </p>
                  <p>
                    <span className="font-semibold">WhatsApp:</span>{" "}
                    <a href={contactDetails.whatsappHref}>{contactDetails.phone}</a>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
