import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../components/site-navigation";
import styles from "./page.module.css";

import batchBlanks from "../../../public/images/hsx-factory/batch-aluminum-die-cast-parts-before-finishing.jpg";
import chairArmrest from "../../../public/images/hsx-factory/chair-armrest-aluminum-die-cast-part.jpg";
import communicationHousing from "../../../public/images/hsx-factory/communication-equipment-aluminum-die-cast-housing.jpg";
import machineryPart from "../../../public/images/hsx-factory/machinery-accessory-aluminum-die-cast-part.jpg";
import opticalModuleHousingB from "../../../public/images/hsx-factory/optical-module-aluminum-die-cast-housing-b.jpg";
import slidingDoorHandle from "../../../public/images/hsx-factory/sliding-door-handle-aluminum-die-cast-part.jpg";
import smartLockBlank from "../../../public/images/hsx-factory/smart-lock-aluminum-die-cast-blank.jpg";
import stageLightHousing from "../../../public/images/hsx-factory/stage-light-aluminum-die-cast-housing.jpg";
import coatingFrame from "../../../public/images/projects/decorative-brake-caliper-cover-coating.jpg";
import inspectionPhoto from "../../../public/images/projects/decorative-brake-caliper-cover-inspection.jpg";
import workLightHousing from "../../../public/images/projects/work-light-housing-production-evidence.jpg";

const pageTitle = "Projects & Real Parts | HSX DIECASTING";
const pageDescription =
  "Explore real aluminum die-cast lighting housings, enclosures, hardware, mechanical parts, batch cast blanks, and selected project evidence manufactured by HSX for drawing-based OEM projects.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/projects",
    images: [
      {
        url: "/images/hsx-factory/batch-die-cast-parts-before-trimming.jpg",
        width: 1080,
        height: 1822,
        alt: "Batch aluminum die-cast parts manufactured by HSX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/hsx-factory/batch-die-cast-parts-before-trimming.jpg"],
  },
};

type EvidenceRecord = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

type ArchiveCategory = {
  index: string;
  id: string;
  title: string;
  description: string;
  featured: EvidenceRecord;
  records: EvidenceRecord[];
  tone: "base" | "soft";
};

const archiveCategories: ArchiveCategory[] = [
  {
    index: "01",
    id: "lighting-housings",
    title: "Lighting Housings",
    description:
      "Real die-cast housing experience for lighting-related applications. These records concern housings and structural parts, not complete LED lights.",
    featured: {
      title: "Work Light Housing",
      description:
        "Real aluminum die-cast work light housings shown in a production environment. This evidence concerns housings and structural parts, not complete lights.",
      image: workLightHousing,
      alt: "Aluminum die-cast work light housings at HSX production equipment",
    },
    records: [
      {
        title: "Stage Light Housing",
        description:
          "A real aluminum die-cast stage light housing previously manufactured by HSX.",
        image: stageLightHousing,
        alt: "Aluminum die-cast stage light housing previously manufactured by HSX",
      },
    ],
    tone: "base",
  },
  {
    index: "02",
    id: "enclosures-housings",
    title: "Enclosures / Housings",
    description:
      "Selected aluminum die-cast housings and enclosure blanks previously manufactured for customer-specific projects.",
    featured: {
      title: "Smart Lock Die-Cast Blank",
      description:
        "Batch die-cast smart lock housing blanks from a customer-specific project.",
      image: smartLockBlank,
      alt: "Batch smart lock aluminum die-cast housing blanks manufactured by HSX",
    },
    records: [
      {
        title: "Optical Module Housing B",
        description:
          "A confirmed Optical Module Housing B part previously manufactured by HSX.",
        image: opticalModuleHousingB,
        alt: "Confirmed Optical Module Housing B part previously manufactured by HSX",
      },
      {
        title: "Communication Equipment Housing",
        description:
          "A real aluminum die-cast communication equipment housing previously manufactured by HSX.",
        image: communicationHousing,
        alt: "Aluminum die-cast communication equipment housing previously manufactured by HSX",
      },
    ],
    tone: "soft",
  },
  {
    index: "03",
    id: "hardware-mechanical-parts",
    title: "Hardware & Mechanical Parts",
    description:
      "Real die-cast handles, mechanical parts and hardware components from previous customer-specific OEM projects.",
    featured: {
      title: "Sliding Door Handle",
      description:
        "Multiple sliding door handle parts previously manufactured by HSX for a customer-specific project.",
      image: slidingDoorHandle,
      alt: "Multiple aluminum die-cast sliding door handle parts manufactured by HSX",
    },
    records: [
      {
        title: "Machinery / Mechanical Part",
        description:
          "Batch aluminum die-cast mechanical parts previously manufactured by HSX.",
        image: machineryPart,
        alt: "Batch aluminum die-cast mechanical parts previously manufactured by HSX",
      },
      {
        title: "Computer Chair Armrest",
        description:
          "A real aluminum die-cast chair armrest part previously manufactured by HSX.",
        image: chairArmrest,
        alt: "Aluminum die-cast computer chair armrest part previously manufactured by HSX",
      },
    ],
    tone: "base",
  },
  {
    index: "04",
    id: "other-custom-parts",
    title: "Other Custom Parts",
    description:
      "Batch aluminum die-cast blanks shown as general evidence of HSX’s real manufacturing experience.",
    featured: {
      title: "Batch Aluminum Die-Cast Blanks",
      description:
        "Batch aluminum die-cast blanks shown as general manufacturing evidence.",
      image: batchBlanks,
      alt: "Batch aluminum die-cast blanks shown as general manufacturing evidence",
    },
    records: [],
    tone: "soft",
  },
];

function CategorySection({ category }: { category: ArchiveCategory }) {
  return (
    <section
      id={category.id}
      className={styles.categorySection}
      data-tone={category.tone}
      aria-labelledby={`${category.id}-heading`}
    >
      <div className="container-shell">
        <header className={styles.categoryHeader}>
          <span className={styles.categoryIndex} aria-hidden="true">
            {category.index}
          </span>
          <div>
            <p className="section-kicker">Manufacturing archive</p>
            <h2 id={`${category.id}-heading`}>{category.title}</h2>
          </div>
          <p className={styles.categoryDescription}>{category.description}</p>
        </header>

        <div className={styles.categoryBody}>
          <figure className={styles.featuredMedia}>
            <Image
              src={category.featured.image}
              alt={category.featured.alt}
              sizes="(min-width: 1000px) 42vw, (min-width: 700px) 62vw, 92vw"
              className={styles.featuredImage}
            />
            <figcaption>Real manufacturing evidence</figcaption>
          </figure>

          <div className={styles.evidenceColumn}>
            <article className={styles.featuredCopy}>
              <p className={styles.evidenceLabel}>
                Featured Real Part Evidence
              </p>
              <h3>{category.featured.title}</h3>
              <p>{category.featured.description}</p>
            </article>

            {category.records.length > 0 ? (
              <div className={styles.archiveList}>
                <p className={styles.archiveListTitle}>
                  Supporting archive records
                </p>
                {category.records.map((record) => (
                  <article key={record.title} className={styles.archiveRow}>
                    <figure className={styles.archiveThumb}>
                      <Image
                        src={record.image}
                        alt={record.alt}
                        sizes="(min-width: 1000px) 12rem, 40vw"
                        className={styles.archiveImage}
                      />
                    </figure>
                    <div className={styles.archiveCopy}>
                      <p className={styles.recordLabel}>Real Part Evidence</p>
                      <h3>{record.title}</h3>
                      <p>{record.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className={styles.singleRecordNote}>
                One selected batch record is shown for this broad custom-parts
                category.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />

      <main>
        <section className={styles.hero} aria-labelledby="projects-heading">
          <div className={`container-shell ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className="section-kicker">Manufacturing Evidence</p>
              <h1 id="projects-heading">
                <span>Projects &amp;</span>
                <span>Real Parts</span>
              </h1>
              <p className={styles.heroLead}>
                Explore selected aluminum die-cast housings, enclosures,
                hardware and mechanical parts previously manufactured by HSX
                for customer-specific OEM projects.
              </p>
            </div>

            <aside className={styles.heroLedger} aria-label="Archive summary">
              <p>Archive scope</p>
              <dl>
                <div>
                  <dt>04</dt>
                  <dd>Manufacturing categories</dd>
                </div>
                <div>
                  <dt>09</dt>
                  <dd>Real part records</dd>
                </div>
                <div>
                  <dt>01</dt>
                  <dd>Selected project snapshot</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className={styles.toolingNotice} aria-labelledby="tooling-notice">
          <div className={`container-shell ${styles.toolingNoticeInner}`}>
            <h2 id="tooling-notice">Customer Project &amp; Tooling Notice</h2>
            <p>
              Images are shown only as evidence of HSX’s manufacturing
              experience. Customer-funded tooling and project-specific designs
              remain dedicated to the original customer and are not available
              for third-party production or sale without written authorization.
              New projects are reviewed independently based on the buyer’s own
              drawings, samples and requirements.
            </p>
          </div>
        </section>

        <nav className={styles.archiveNav} aria-label="Project archive categories">
          <div className={`container-shell ${styles.archiveNavInner}`}>
            <span className={styles.archiveNavLabel}>Project archive</span>
            {archiveCategories.map((category) => (
              <a key={category.id} href={`#${category.id}`}>
                {category.title}
              </a>
            ))}
          </div>
        </nav>

        {archiveCategories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}

        <section
          className={styles.decorativeSection}
          aria-labelledby="decorative-project-heading"
        >
          <div className="container-shell">
            <header className={styles.decorativeHeader}>
              <div>
                <p className="section-kicker">Decorative Appearance Application</p>
                <h2 id="decorative-project-heading">
                  Decorative Brake Caliper Cover Project Snapshot
                </h2>
              </div>
              <p>
                A secondary project snapshot, separate from HSX’s core OEM
                aluminum die-casting categories.
              </p>
            </header>

            <div className={styles.decorativeBody}>
              <div className={styles.snapshotCopy}>
                <p className={styles.evidenceLabel}>Project Snapshot</p>
                <p className={styles.snapshotLead}>
                  Real project evidence for a decorative appearance cover. The
                  product is appearance-focused, non-load-bearing and
                  non-structural, and is not a functional braking component.
                </p>
                <ul className={styles.boundaryList}>
                  <li>Appearance-focused</li>
                  <li>Non-load-bearing</li>
                  <li>Non-structural</li>
                  <li>Not a functional braking component</li>
                </ul>
              </div>

              <figure className={styles.snapshotFigure}>
                <div className={styles.snapshotMedia}>
                  <Image
                    src={inspectionPhoto}
                    alt="Decorative brake caliper covers handled during project inspection"
                    sizes="(min-width: 900px) 32vw, 46vw"
                    className={styles.snapshotImage}
                  />
                  <Image
                    src={coatingFrame}
                    alt="Decorative brake caliper cover components during coating"
                    sizes="(min-width: 900px) 32vw, 46vw"
                    className={styles.snapshotImage}
                  />
                </div>
                <figcaption>
                  Selected project stages shown for manufacturing evidence.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="project-review-heading">
          <div className={`container-shell ${styles.finalCtaInner}`}>
            <div>
              <p className="section-kicker">Project Review</p>
              <h2 id="project-review-heading">
                Start a New Project with Your Own Drawing
              </h2>
              <p>
                Every new project is reviewed independently based on the
                buyer’s drawings, samples, quantities, finishing requirements
                and supply scope.
              </p>
            </div>
            <Link
              href="/b2b-oem-project-review"
              className={styles.finalCtaLink}
            >
              Send Your Drawing <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
