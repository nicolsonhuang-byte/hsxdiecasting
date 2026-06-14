import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import factoryCapabilities from "../../../public/images/factory-capabilities.png";
import oemAluminumParts from "../../../public/images/oem-small-aluminum-die-casting-parts.png";
import anodizedColorSamplesCollage from "../../../public/images/v2-hsx-anodized-color-samples-collage-16x9.webp";
import anodizedSampleReviewHeroCard from "../../../public/images/v2-hsx-anodized-sample-review-hero-card.webp";
import blueBlackAnodizedSamples from "../../../public/images/v2-hsx-blue-black-anodized-samples-4x5.webp";
import champagneRoseAnodizedSamples from "../../../public/images/v2-hsx-champagne-rose-anodized-samples-4x5.webp";
import redAnodizedSample from "../../../public/images/v2-hsx-red-anodized-sample-4x5.webp";
import styles from "./page.module.css";

type InfoCard = {
  title: string;
  description: string;
};

type Factor = InfoCard & {
  points: string[];
};

const pageTitle =
  "Anodizable Aluminum Die Casting Parts for OEM Projects | HSX DIECASTING";

const pageDescription =
  "HSX DIECASTING helps OEM buyers evaluate anodizable aluminum die casting parts before tooling, including mold design, draft angle, alloy planning, release agent control, mold temperature, die casting process, machining, sandblasting, and anodized finishing requirements.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/anodizable-aluminum-die-casting-parts",
  },
  keywords: [
    "anodizable aluminum die casting",
    "anodized aluminum die casting parts",
    "anodizing-ready die casting",
    "OEM anodized aluminum die casting",
    "aluminum die casting anodizing supplier",
    "anodized die cast aluminum parts",
    "surface finishing for aluminum die casting",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/anodizable-aluminum-die-casting-parts",
    images: [
      {
        url: "/images/oem-small-aluminum-die-casting-parts.png",
        alt: "OEM aluminum die casting parts prepared for technical surface finishing review",
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
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20DIECASTING%2C%20I%20would%20like%20to%20review%20an%20anodizable%20aluminum%20die%20casting%20OEM%20project.%20I%20can%20send%20drawings%2C%20photos%2C%20target%20finish%2C%20anodized%20color%2C%20and%20application%20details.",
};

const mailtoRfq =
  "mailto:nicolson@hsxdiecasting.com?subject=RFQ%20Review%20for%20Anodizable%20Aluminum%20Die%20Casting%20Parts&body=Hello%20HSX%20DIECASTING%2C%0A%0AI%20would%20like%20to%20review%20an%20anodizable%20aluminum%20die%20casting%20OEM%20project.%0A%0APart%20type%3A%0AApplication%3A%0ADrawings%20or%203D%20files%20available%3A%0AProduct%20photos%20or%20sample%20photos%20available%3A%0ATarget%20surface%20finish%3A%0AAnodized%20color%20requirement%3A%0AVisible%20surface%20requirements%3A%0AMachining%20or%20threaded%20feature%20requirements%3A%0ATarget%20quantity%3A%0APackaging%20or%20market%20requirements%3A%0A%0APlease%20help%20review%20whether%20this%20project%20may%20be%20suitable%20before%20tooling.";

const heroHighlights = [
  {
    label: "Scope",
    value: "Die casting + machining",
    note: "HSX handles aluminum die casting, post-processing coordination, project evaluation, and production control.",
  },
  {
    label: "Finish path",
    value: "Partner anodizing",
    note: "Anodized finishing is completed through cooperating anodizing partners after surface preparation.",
  },
  {
    label: "Decision point",
    value: "Before tooling",
    note: "Sample evaluation is recommended because anodizing results depend on the specific part and requirements.",
  },
];

const earlyPlanningReasons: InfoCard[] = [
  {
    title: "Anodizing makes casting surfaces more visible",
    description:
      "Anodized aluminum die casting parts may show flow marks, local surface differences, porosity, polishing marks, or blasting differences more clearly than painted parts. These risks should be discussed before mold design is finalized.",
  },
  {
    title: "Tooling choices affect visible surfaces",
    description:
      "Gate position, parting line planning, ejector areas, venting direction, and machining allowance can influence the final appearance after surface preparation and anodizing.",
  },
  {
    title: "Finishing partners need a realistic sample target",
    description:
      "Because anodized finishing is completed through cooperating anodizing partners, HSX can help align die casting, machining, sandblasting, and sample review around the buyer's target appearance.",
  },
];

const toolingComparison = [
  {
    title: "Conventional die casting tooling",
    description:
      "Often prioritizes dimensional output, cycle efficiency, and general post-finishing such as powder coating or spray painting. This may be suitable for many parts, but it may not give enough attention to visible surface behavior after anodizing.",
  },
  {
    title: "Anodizing-ready die casting tooling",
    description:
      "May require earlier review of visible surfaces, draft direction, gate and overflow planning, polishing allowance, machining sequence, and surface preparation route. The goal is not to guarantee every color result, but to reduce avoidable appearance risks before tooling.",
  },
];

const keyFactors: Factor[] = [
  {
    title: "Mold Design",
    description:
      "For anodizable aluminum die casting, mold planning should consider how molten aluminum flows into visible areas and how later finishing steps may expose surface conditions.",
    points: [
      "Review gate, runner, overflow, venting, and ejector positions around visible surfaces.",
      "Discuss parting lines and areas that may need machining or surface preparation.",
      "Keep decorative or customer-facing surfaces in mind before tooling approval.",
    ],
  },
  {
    title: "Draft Angle Planning",
    description:
      "Draft angle can affect demolding marks, polishing access, machining allowance, and how consistent the finished surface may appear after blasting and anodizing.",
    points: [
      "Review visible faces and demolding direction early.",
      "Avoid treating draft only as a tooling convenience when the surface will be anodized.",
      "Confirm areas where dimensional requirements and appearance requirements may conflict.",
    ],
  },
  {
    title: "Alloy Selection and Material Planning",
    description:
      "Anodizing behavior depends on the aluminum material, the casting process, the part geometry, and the buyer's surface target. HSX can help evaluate material planning without disclosing private formulas or supplier-specific technical parameters.",
    points: [
      "Confirm whether the buyer expects metallic appearance, darker color, or sample matching.",
      "Review whether the target finish is more suitable for anodizing, powder coating, or painting.",
      "Use sample evaluation before committing to appearance-sensitive mass production.",
    ],
  },
  {
    title: "Release Agent Control",
    description:
      "Release agent use and surface residue can influence later cleaning, blasting, and anodizing results. HSX can review production control needs without sharing private ratios or internal process settings.",
    points: [
      "Plan for consistent surface preparation after die casting.",
      "Avoid treating release agent as unrelated to later appearance finishing.",
      "Keep visible surfaces and cleaning requirements in the production control discussion.",
    ],
  },
  {
    title: "Die Casting Parameters and Mold Temperature Control",
    description:
      "Die casting process stability and mold temperature control may affect flow marks, surface density, shrinkage behavior, and local surface appearance. Exact temperatures and internal parameters are project-specific and are not disclosed publicly.",
    points: [
      "Review whether appearance-sensitive faces need additional process attention.",
      "Discuss expected sample review points before approving mass production.",
      "Use cautious acceptance criteria for anodized appearance because results can vary by geometry.",
    ],
  },
  {
    title: "Machining, Post-Processing and Sandblasting Before Anodizing",
    description:
      "Machining, polishing, grinding, deburring, and sandblasting can change how anodized die cast aluminum parts look. These steps should be planned together with the cooperating anodizing partner.",
    points: [
      "Mark machined surfaces, cosmetic surfaces, threads, and assembly areas in the drawing.",
      "Confirm whether sandblasting texture, polishing level, or masked areas are required.",
      "Review samples before locking color, texture, and surface acceptance expectations.",
    ],
  },
];

const colorExperience = [
  "Natural or clear metallic appearance may be reviewed when the casting and surface preparation route is suitable.",
  "Black and dark gray directions may be evaluated for selected projects, but color depth and uniformity should be confirmed by sample.",
  "Gold tone, champagne, red, blue, or other color targets may be discussed with cooperating anodizing partners depending on material, part geometry, and batch requirements.",
  "Color matching against wrought aluminum or previous supplier samples should be treated as a sample-based evaluation, not an automatic guarantee.",
];

const sampleEvaluationCaption =
  "Color direction should be confirmed by project-specific sample evaluation. Final appearance may vary by material, surface preparation, part geometry, batch condition, and anodizing process.";

const anodizedSampleCards = [
  {
    title: "Red anodized sample",
    image: redAnodizedSample,
    alt: "Red anodized aluminum die casting sample after surface preparation",
  },
  {
    title: "Black and blue samples",
    image: blueBlackAnodizedSamples,
    alt: "Black and blue anodized aluminum die casting color samples",
  },
  {
    title: "Champagne and red samples",
    image: champagneRoseAnodizedSamples,
    alt: "Champagne and red anodized aluminum die casting color direction samples",
  },
];

const suitableApplications: InfoCard[] = [
  {
    title: "Visible aluminum housings",
    description:
      "Compact housings, covers, light bodies, and enclosure-style parts where buyers want a metallic appearance instead of paint.",
  },
  {
    title: "OEM aluminum accessories",
    description:
      "Anodizing-ready die casting may be reviewed for accessory parts that need controlled appearance, machining, and surface finishing for brand presentation.",
  },
  {
    title: "Lighting and hardware components",
    description:
      "Aluminum light housings, brackets, end caps, and small hardware parts may be evaluated when visible surface requirements are clearly defined.",
  },
  {
    title: "Projects with sample review time",
    description:
      "The best fit is usually an OEM project where the buyer allows sample evaluation before final tooling approval or mass production confirmation.",
  },
];

const notSuitableProjects = [
  "Projects that require an absolute guarantee that every die cast part will match a perfect wrought aluminum anodized appearance.",
  "Parts with very strict cosmetic uniformity but no allowance for sample evaluation, surface preparation adjustment, or color variation review.",
  "Designs with large uninterrupted visible surfaces, hidden porosity risks, difficult polishing access, or geometry that may show casting flow more clearly.",
  "Projects where the buyer wants anodizing to hide casting defects instead of planning the tooling, die casting, machining, and surface preparation route early.",
  "Projects that require disclosure of exact material formulas, alloy ratios, release agent ratios, mold temperatures, or private process parameters.",
];

const reviewSteps: InfoCard[] = [
  {
    title: "1. Review files and appearance target",
    description:
      "HSX reviews drawings, 3D files, product photos, sample references, target surface finish, anodized color requirement, visible faces, and application details.",
  },
  {
    title: "2. Check tooling and process direction",
    description:
      "The team evaluates whether mold design, draft, gate planning, machining, sandblasting, and production control may support the target finish.",
  },
  {
    title: "3. Coordinate sample route",
    description:
      "When the project appears suitable, HSX can coordinate die casting, surface preparation, and anodizing partner review for sample evaluation.",
  },
  {
    title: "4. Confirm next production decision",
    description:
      "After sample review, the buyer can decide whether to adjust the design, change the finish, continue tooling, or choose another surface finishing route.",
  },
];

const rfqItems = [
  "2D drawings and 3D files, if available",
  "Product photos, reference samples, or target appearance photos",
  "Part application and visible surface requirements",
  "Target surface finish and anodized color requirement",
  "Material expectation or existing material notes, if already defined",
  "Machining, drilling, tapping, threaded feature, or assembly requirements",
  "Sandblasting, polishing, grinding, masking, or texture expectations",
  "Sample-stage needs, target quantity, and repeat-order plan",
  "Packaging requirements and destination market information",
];

const faqs = [
  {
    question: "Can die cast aluminum parts be anodized?",
    answer:
      "Some aluminum die casting projects may be evaluated for anodizing, but suitability depends on material planning, part geometry, mold design, die casting control, machining, surface preparation, and color expectations. Sample evaluation is recommended before mass production.",
  },
  {
    question: "Does HSX operate its own anodizing line?",
    answer:
      "HSX handles aluminum die casting, machining, post-processing coordination, project evaluation, and production control. Anodized finishing is completed through cooperating anodizing partners after die casting and surface preparation.",
  },
  {
    question: "Is anodizing better than powder coating for die casting?",
    answer:
      "It depends on the project. Anodizing may be considered when the buyer wants a metallic appearance and the part is suitable. Powder coating or spray painting may be more practical when the project needs broader color coverage or more forgiving cosmetic consistency.",
  },
  {
    question: "Can HSX guarantee the exact anodized color before tooling?",
    answer:
      "No exact color guarantee should be assumed before sample evaluation. HSX can help review the design and sample route, but anodized color can vary depending on material, casting condition, surface preparation, partner process, and batch conditions.",
  },
  {
    question: "What should buyers send for an anodizing-oriented RFQ?",
    answer:
      "Buyers should send drawings, 3D files, product photos, target surface finish, anodized color requirement, visible surface notes, machining requirements, target quantity, and application details.",
  },
];

const relatedLinks = [
  {
    label: "B2B OEM Project Review",
    href: "/b2b-oem-project-review",
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
    label: "RFQ Checklist for Custom OEM Aluminum Die Casting Parts",
    href: "/blog/rfq-checklist-custom-oem-aluminum-die-casting-parts",
  },
  {
    label: "Powder Coating vs Anodizing for Aluminum Die Casting",
    href: "/blog/powder-coating-vs-anodizing-aluminum-die-casting",
  },
  {
    label: "Factory Capabilities",
    href: "/capabilities",
  },
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Anodizable Aluminum Die Casting Project Evaluation",
  url: "https://www.hsxdiecasting.com/anodizable-aluminum-die-casting-parts",
  image:
    "https://www.hsxdiecasting.com/images/oem-small-aluminum-die-casting-parts.png",
  description: pageDescription,
  provider: {
    "@type": "Organization",
    name: "Foshan Huashunxiang Hardware Products Factory",
    url: "https://www.hsxdiecasting.com",
  },
  serviceType:
    "OEM anodizing-oriented aluminum die casting project evaluation",
  areaServed: "Global B2B Markets",
  category: "Aluminum die casting and surface finishing coordination",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
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

export default function AnodizableAluminumDieCastingPartsPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className={styles.heroSection}>
        <div className={`container-shell ${styles.heroGrid}`}>
          <div className={`motion-rise ${styles.heroContent}`}>
            <p className="section-kicker">Technical OEM project review</p>
            <h1 className={`section-heading ${styles.heroTitle}`}>
              Anodizable Aluminum Die Casting Parts for OEM Projects
            </h1>
            <p className={styles.heroLead}>
              HSX DIECASTING helps OEM buyers evaluate anodizable aluminum die
              casting projects before tooling, including mold design, draft
              angle, alloy planning, release agent control, die casting process
              stability, machining, sandblasting, and anodized finishing
              requirements.
            </p>
            <p className={styles.heroBody}>
              HSX handles aluminum die casting, machining, post-processing
              coordination, project evaluation, and production control. Anodized
              finishing is completed through cooperating anodizing partners
              after die casting and surface preparation.
            </p>

            <div className={styles.heroActions}>
              <a
                href={contactDetails.whatsappHref}
                className={`${styles.actionButton} ${styles.primaryButton}`}
              >
                Request OEM Project Review
              </a>
              <a
                href={mailtoRfq}
                className={`${styles.actionButton} ${styles.secondaryButton}`}
              >
                Send Drawings for Evaluation
              </a>
            </div>
          </div>

          <div className={`motion-rise-delay ${styles.heroMedia}`}>
            <div className={`industrial-card gold-frame ${styles.heroImageCard}`}>
              <div className={styles.heroImageFrame}>
                <Image
                  src={anodizedSampleReviewHeroCard}
                  alt="Anodized aluminum die casting color sample directions for OEM project review"
                  priority
                  sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 38vw, 100vw"
                  className={styles.responsiveImage}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div className={styles.imageCaption}>
                  <p className={styles.captionKicker}>
                    Before tooling
                  </p>
                  <p className={styles.captionText}>
                    {sampleEvaluationCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.metricGrid}>
            {heroHighlights.map((item) => (
              <article key={item.label} className={`metric-pill ${styles.metricCard}`}>
                <p className={styles.metricLabel}>
                  {item.label}
                </p>
                <p className={styles.metricValue}>
                  {item.value}
                </p>
                <p className={styles.metricNote}>
                  {item.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 py-16 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Introduction"
              title="A cautious review path for anodized die cast aluminum parts"
              description="Anodizable aluminum die casting is not only a finishing decision. It is a project planning decision that should be discussed before mold manufacturing, especially when the buyer expects a visible metallic surface."
            />
            <div className="mt-8 space-y-5 text-base leading-8 text-[#c9c1b2]">
              <p>
                HSX can help OEM buyers review whether anodized aluminum die
                casting parts may be practical for a specific drawing,
                application, quantity plan, and appearance requirement.
              </p>
              <p>
                The page is written for buyers who need anodizing-ready die
                casting evaluation, not broad claims that every die cast part can
                be anodized. Sample evaluation is recommended for appearance,
                color, and surface consistency decisions.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-[#d7b56d]/25">
            <div>
              <Image
                src={oemAluminumParts}
                alt="OEM aluminum die casting parts for anodizing-ready project evaluation"
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="block w-full object-cover"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div className="border-t border-[#d7b56d]/20 bg-black/70 p-5">
                <p className="section-kicker">Before tooling</p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Review visible surfaces, process route, sample targets, and
                  anodized color expectations early.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#080808] py-16 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Early planning"
            title="Why anodizing for die cast aluminum needs early planning"
            description="Surface finishing for aluminum die casting should be connected to product design, tooling, process control, and post-processing from the beginning."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {earlyPlanningReasons.map((item) => (
              <article key={item.title} className="industrial-card p-6">
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
      </section>

      <section className="border-b border-white/8 py-16 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <SectionHeading
            eyebrow="Tooling strategy"
            title="Anodizing-ready tooling vs conventional die casting tooling"
            description="The same part geometry may need a different review mindset when the final finish is anodizing instead of coating or painting."
          />

          <div className="grid gap-6">
            {toolingComparison.map((item) => (
              <article key={item.title} className="industrial-card p-6 sm:p-8">
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
      </section>

      <section
        id="key-factors"
        className="border-b border-white/8 bg-[#080808] py-16 lg:py-24"
      >
        <div className="container-shell">
          <SectionHeading
            eyebrow="Key factors"
            title="Key factors for anodizable aluminum die casting"
            description="HSX can help buyers review these technical topics before tooling and before sample confirmation with cooperating anodizing partners."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {keyFactors.map((factor) => (
              <article key={factor.title} className="industrial-card p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-white">
                  {factor.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                  {factor.description}
                </p>
                <div className="mt-5">
                  <BulletList items={factor.points} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.colorSection}>
        <div className={`container-shell ${styles.colorLayout}`}>
          <div>
            <SectionHeading
              eyebrow="Color experience"
              title="Available anodized color experience"
              description="Color experience is discussed cautiously because anodized die cast aluminum parts can vary by material, geometry, surface preparation, and partner process."
            />
            <div className="mt-8 industrial-card p-6 sm:p-8">
              <BulletList items={colorExperience} />
            </div>
          </div>

          <div className={styles.colorCollageCard}>
            <div>
              <Image
                src={anodizedColorSamplesCollage}
                alt="Anodized aluminum die casting color sample directions for OEM project review"
                sizes="(min-width: 1024px) 42vw, 100vw"
                className={styles.responsiveImage}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div className={styles.colorCaption}>
                <p className={styles.captionKicker}>
                  Sample first
                </p>
                <p className={styles.captionText}>
                  {sampleEvaluationCaption}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sampleCardGrid}>
            {anodizedSampleCards.map((sample) => (
              <article
                key={sample.title}
                className={styles.sampleCard}
              >
                <Image
                  src={sample.image}
                  alt={sample.alt}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className={styles.responsiveImage}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div className={styles.sampleCardBody}>
                  <h3 className={styles.sampleCardTitle}>
                    {sample.title}
                  </h3>
                  <p className={styles.sampleCardCaption}>
                    {sampleEvaluationCaption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#080808] py-16 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Applications"
            title="Suitable product applications"
            description="Anodizing-oriented review is most useful when the project has visible aluminum surfaces, realistic appearance targets, and time for sample evaluation."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {suitableApplications.map((item) => (
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
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <SectionHeading
            eyebrow="Project fit"
            title="Projects that may not be suitable"
            description="Not every aluminum die casting project should be directed toward anodizing. HSX can help review fit before the buyer invests in tooling."
          />

          <div className="industrial-card p-6 sm:p-8">
            <BulletList items={notSuitableProjects} />
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#080808] py-16 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Before tooling"
            title="OEM project review before tooling"
            description="A structured review helps buyers decide whether to continue with anodizing-ready die casting, adjust the product design, or choose another finishing route."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reviewSteps.map((step) => (
              <article key={step.title} className="industrial-card p-6">
                <h2 className="text-xl font-semibold text-white">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="rfq"
        className="border-b border-white/8 py-16 lg:py-24"
      >
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="RFQ preparation"
              title="RFQ information buyers should prepare"
              description="The more clearly buyers define the product and surface target, the more useful the pre-tooling review can be."
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href={contactDetails.whatsappHref} className="gold-button text-center">
                WhatsApp RFQ
              </a>
              <a href={mailtoRfq} className="outline-button text-center">
                Email Project Details
              </a>
            </div>
          </div>

          <div className="industrial-card p-6 sm:p-8">
            <BulletList items={rfqItems} />
          </div>
        </div>
      </section>

      <section id="faq" className={styles.faqSection}>
        <div className={`container-shell ${styles.faqLayout}`}>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions about anodized aluminum die casting parts"
            description="These answers use cautious B2B wording because final feasibility depends on the specific OEM project."
          />

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className={styles.faqCard}
              >
                <div className={styles.faqMeta}>
                  <span className={styles.faqNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className={styles.faqLabel}>
                    Buyer FAQ
                  </p>
                </div>
                <h2 className={styles.faqQuestion}>
                  {faq.question}
                </h2>
                <p className={styles.faqAnswer}>
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="related-resources" className={styles.relatedSection}>
        <div className={`container-shell ${styles.relatedLayout}`}>
          <div className={styles.relatedImageCard}>
            <div>
              <Image
                src={factoryCapabilities}
                alt="HSX DIECASTING factory capabilities for aluminum die casting and production control"
                sizes="(min-width: 1024px) 48vw, 100vw"
                className={styles.responsiveImage}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Related resources"
              title="Continue project research with HSX pages"
              description="These internal pages can help buyers prepare a clearer RFQ and compare related aluminum die casting capabilities."
            />
            <ul className={styles.resourceGrid}>
              {relatedLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.resourceCard}
                  >
                    <h3 className={styles.resourceTitle}>
                      {item.label}{" "}
                    </h3>
                    <p className={styles.resourceLabel}>
                      Internal resource{" "}
                    </p>
                    <div className={styles.resourceArrow}>
                      Explore page <span aria-hidden="true">-&gt;</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="project-review-cta" className={styles.ctaSection}>
        <div className="container-shell">
          <div className={styles.ctaPanel}>
            <div className={styles.ctaTopRule} />
            <div className={styles.ctaInner}>
              <div className={styles.ctaGrid}>
                <div>
                  <p className={styles.ctaEyebrow}>
                    OEM project review
                  </p>
                  <h2 className={`section-heading ${styles.ctaTitle}`}>
                    Send Drawings, Photos, Finish Target, and Anodized Color
                    Requirements
                  </h2>
                  <p className={styles.ctaText}>
                    HSX can help review whether your anodizable aluminum die
                    casting project may be suitable before tooling.
                  </p>

                  <div
                    aria-label="Project review actions"
                    className={styles.ctaActions}
                  >
                    <div>
                      <a
                        href={contactDetails.whatsappHref}
                        className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}
                      >
                        WhatsApp Project Review
                      </a>
                    </div>
                    <div>
                      <a
                        href={mailtoRfq}
                        className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
                      >
                        Email Drawings
                      </a>
                    </div>
                    <div>
                      <Link
                        href="/contact"
                        className={`${styles.ctaButton} ${styles.ctaButtonTertiary}`}
                      >
                        Contact HSX
                      </Link>
                    </div>
                  </div>
                </div>

                <aside className={styles.ctaAside}>
                  <p className={styles.ctaAsideTitle}>
                    Include these details
                  </p>
                  <ul className={styles.ctaChecklist}>
                    {[
                      "Drawings, 3D files, or clear product photos",
                      "Target surface finish and anodized color",
                      "Visible surface and application details",
                      "Machining, sandblasting, polishing, or masking needs",
                      "Target quantity and sample-stage expectations",
                    ].map((item) => (
                      <li
                        key={item}
                        className={styles.ctaChecklistItem}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.contactBox}>
                    <p className={styles.contactTitle}>
                      Direct contact
                    </p>
                    <p className={styles.contactLine}>
                      <span className="font-semibold">Email: </span>
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className={styles.contactLink}
                      >
                        {contactDetails.email}
                      </a>
                    </p>
                    <p className={styles.contactLine}>
                      <span className="font-semibold">WhatsApp / Phone: </span>
                      <a
                        href={contactDetails.whatsappHref}
                        className={styles.contactLink}
                      >
                        {contactDetails.phone}
                      </a>
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
