import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../components/site-navigation";
import styles from "./page.module.css";

import batchParts from "../../../public/images/hsx-factory/batch-aluminum-die-cast-parts-before-finishing.jpg";
import chairArmrest from "../../../public/images/hsx-factory/chair-armrest-aluminum-die-cast-part.jpg";
import communicationHousing from "../../../public/images/hsx-factory/communication-equipment-aluminum-die-cast-housing.jpg";
import machineryPart from "../../../public/images/hsx-factory/machinery-accessory-aluminum-die-cast-part.jpg";
import opticalModuleHousing from "../../../public/images/hsx-factory/optical-module-aluminum-die-cast-housing-a.jpg";
import slidingDoorHandle from "../../../public/images/hsx-factory/sliding-door-handle-aluminum-die-cast-part.jpg";
import smartLockBlank from "../../../public/images/hsx-factory/smart-lock-aluminum-die-cast-blank.jpg";
import stageLightHousing from "../../../public/images/hsx-factory/stage-light-aluminum-die-cast-housing.jpg";
import redPackaging from "../../../public/images/custom-decorative-brake-caliper-covers-red-packaging.jpg";
import coatingFrame from "../../../public/images/projects/decorative-brake-caliper-cover-coating.jpg";
import designFrame from "../../../public/images/projects/decorative-brake-caliper-cover-design.jpg";
import dieCastingFrame from "../../../public/images/projects/decorative-brake-caliper-cover-die-casting.jpg";
import finishedPackingFrame from "../../../public/images/projects/decorative-brake-caliper-cover-finished-packing.jpg";
import gateRemovalFrame from "../../../public/images/projects/decorative-brake-caliper-cover-gate-removal.jpg";
import inspectionPhoto from "../../../public/images/projects/decorative-brake-caliper-cover-inspection.jpg";
import polishingFrame from "../../../public/images/projects/decorative-brake-caliper-cover-polishing.jpg";
import rawMaterialFrame from "../../../public/images/projects/decorative-brake-caliper-cover-raw-material.jpg";

const pageTitle = "Projects & Real Parts | HSX DIECASTING";
const pageDescription =
  "See the production journey of a decorative brake caliper cover project and selected real aluminum die-cast parts manufactured by HSX.";

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
        url: "/images/projects/decorative-brake-caliper-cover-inspection.jpg",
        alt: "Finished decorative brake caliper covers handled at the project worktable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      "/images/projects/decorative-brake-caliper-cover-inspection.jpg",
    ],
  },
};

type ProjectRecord = {
  title: string;
  category: string;
  scope: string;
  image: StaticImageData;
  alt: string;
  size: "wide" | "standard" | "tall";
  fit?: "cover" | "contain";
  anchorId?: string;
};

const projectRecords: ProjectRecord[] = [
  {
    title: "Optical Module Housing",
    category: "Enclosures & Housings",
    scope: "Aluminum die-cast optical module housing.",
    image: opticalModuleHousing,
    alt: "Optical module aluminum die-cast housing manufactured by HSX",
    size: "wide",
    fit: "contain",
    anchorId: "enclosures-housings",
  },
  {
    title: "Communication Equipment Housing",
    category: "Enclosures & Housings",
    scope: "Aluminum die-cast communication equipment housing.",
    image: communicationHousing,
    alt: "Communication equipment aluminum die-cast housing manufactured by HSX",
    size: "standard",
    fit: "contain",
  },
  {
    title: "Stage Light Housing",
    category: "Lighting Housings",
    scope: "Aluminum die-cast stage light housing.",
    image: stageLightHousing,
    alt: "Stage light aluminum die-cast housing manufactured by HSX",
    size: "standard",
    fit: "contain",
    anchorId: "lighting-housings",
  },
  {
    title: "Sliding Door Handle",
    category: "Hardware & Mechanical Parts",
    scope: "Aluminum die-cast sliding door handle parts.",
    image: slidingDoorHandle,
    alt: "Sliding door handle aluminum die-cast parts manufactured by HSX",
    size: "wide",
    fit: "contain",
    anchorId: "hardware-mechanical-parts",
  },
  {
    title: "Machinery Part",
    category: "Hardware & Mechanical Parts",
    scope: "Aluminum die-cast machinery parts.",
    image: machineryPart,
    alt: "Aluminum die-cast machinery parts manufactured by HSX",
    size: "wide",
    fit: "contain",
  },
  {
    title: "Smart Lock Die-Cast Blank",
    category: "Enclosures & Housings",
    scope: "Smart lock die-cast blank.",
    image: smartLockBlank,
    alt: "Smart lock aluminum die-cast blank manufactured by HSX",
    size: "tall",
    fit: "contain",
  },
  {
    title: "Chair Armrest Die-Cast Part",
    category: "Hardware & Mechanical Parts",
    scope: "Aluminum die-cast chair armrest part.",
    image: chairArmrest,
    alt: "Chair armrest aluminum die-cast part manufactured by HSX",
    size: "standard",
    fit: "contain",
  },
  {
    title: "Batch Aluminum Die-Cast Parts",
    category: "Other Custom Parts",
    scope: "Batch of aluminum die-cast parts before finishing.",
    image: batchParts,
    alt: "Batch aluminum die-cast parts manufactured by HSX before finishing",
    size: "wide",
    anchorId: "other-custom-parts",
  },
];

const processChapters = [
  {
    range: "01–03",
    title: "Design & Casting Preparation",
    href: "#design-casting-preparation",
  },
  {
    range: "04–06",
    title: "Casting to Surface Finish",
    href: "#casting-surface-finish",
  },
  {
    range: "07–09",
    title: "Assembly, QC & Packing",
    href: "#assembly-qc-packing",
  },
];

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />

      <main>
        <section className={styles.hero} aria-labelledby="projects-heading">
          <Image
            src={inspectionPhoto}
            alt="Finished decorative brake caliper covers handled at an HSX project worktable"
            fill
            preload
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroShade} />
          <div className={`container-shell ${styles.heroContent}`}>
            <p className="section-kicker">Manufacturing evidence</p>
            <h1 id="projects-heading" className={styles.heroTitle}>
              Projects &amp;
              <br />
              Real Parts
            </h1>
            <p className={styles.heroLead}>
              A visual journey through one complete HSX project, followed by
              selected real parts from other OEM projects.
            </p>
            <a href="#featured-project" className={styles.heroJump}>
              View the featured project <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <nav className={styles.archiveNav} aria-label="Browse project categories">
          <div className={`container-shell ${styles.archiveNavInner}`}>
            <span className={styles.archiveNavLabel}>Browse the archive</span>
            <a href="#lighting-housings">Lighting Housings</a>
            <a href="#enclosures-housings">Enclosures &amp; Housings</a>
            <a href="#hardware-mechanical-parts">
              Hardware &amp; Mechanical Parts
            </a>
            <a href="#other-custom-parts">Other Custom Parts</a>
          </div>
        </nav>

        <article id="featured-project" className={styles.featuredProject}>
          <header className={`container-shell ${styles.caseHeader}`}>
            <div className={styles.caseNumber} aria-hidden="true">
              01
            </div>
            <div className={styles.caseHeadingBlock}>
              <p className="section-kicker">Featured project</p>
              <h2 className={`section-heading ${styles.caseTitle}`}>
                Decorative Brake Caliper Cover Project
              </h2>
              <p className={styles.boundaryStatement}>
                Decorative appearance product, not a functional braking
                component.
              </p>
            </div>
            <div className={styles.caseScope}>
              <p className={styles.caseScopeLabel}>HSX supply scope</p>
              <p>
                Design review through finished product and packing, including
                assembly for this decorative cover project.
              </p>
            </div>
          </header>

          <figure className={`container-shell ${styles.videoRecord}`}>
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/projects/decorative-brake-caliper-cover-die-casting.jpg"
              className={styles.featureVideo}
            >
              <source
                src="/videos/projects/decorative-brake-caliper-cover-process.mp4"
                type="video/mp4"
              />
              Your browser does not support the video element.
            </video>
            <figcaption className={styles.videoCaption}>
              <span>Complete project process</span>
              <span>Design → production → finished packing</span>
            </figcaption>
          </figure>

          <ol className={`container-shell ${styles.processIndex}`}>
            {processChapters.map((chapter) => (
              <li key={chapter.range}>
                <a href={chapter.href}>
                  <span>{chapter.range}</span>
                  {chapter.title}
                </a>
              </li>
            ))}
          </ol>

          <section
            id="design-casting-preparation"
            className={`container-shell ${styles.recordChapter}`}
          >
            <div className={styles.chapterMarker}>
              <span>01–03</span>
              <p>Design &amp; Casting Preparation</p>
            </div>
            <figure className={styles.designFigure}>
              <div className={styles.mediaFrame}>
                <Image
                  src={designFrame}
                  alt="Digital model shown during the decorative brake caliper cover project"
                  fill
                  sizes="(min-width: 900px) 42vw, 100vw"
                  className={styles.coverImage}
                />
              </div>
              <figcaption>
                <span>Design</span>
                The project begins with a digital product model.
              </figcaption>
            </figure>
            <figure className={styles.materialFigure}>
              <div className={styles.mediaFrame}>
                <Image
                  src={rawMaterialFrame}
                  alt="Raw material prepared for the decorative brake caliper cover project"
                  fill
                  sizes="(min-width: 900px) 28vw, 100vw"
                  className={styles.coverImage}
                />
              </div>
              <figcaption>
                <span>Raw Material</span>
                Production input material prepared for the next project stage.
              </figcaption>
            </figure>
          </section>

          <figure className={styles.fullBleedRecord}>
            <Image
              src={dieCastingFrame}
              alt="Die casting equipment operating during the decorative brake caliper cover project"
              fill
              sizes="100vw"
              className={styles.coverImage}
            />
            <figcaption className={styles.fullBleedCaption}>
              <span>03</span>
              <div>
                <p>Mold &amp; Die Casting</p>
                <small>Casting production begins at the die-casting equipment.</small>
              </div>
            </figcaption>
          </figure>

          <section
            id="casting-surface-finish"
            className={`container-shell ${styles.processPair}`}
          >
            <figure className={styles.gateFigure}>
              <div className={styles.mediaFrame}>
                <Image
                  src={gateRemovalFrame}
                  alt="Gate removal on decorative brake caliper cover castings"
                  fill
                  sizes="(min-width: 900px) 58vw, 100vw"
                  className={styles.coverImage}
                />
              </div>
              <figcaption>
                <span>04 / Gate Removal</span>
                Cast components are separated from the visible runner and gate
                material.
              </figcaption>
            </figure>
            <figure className={styles.polishingFigure}>
              <div className={styles.mediaFrame}>
                <Image
                  src={polishingFrame}
                  alt="Polishing a decorative brake caliper cover casting"
                  fill
                  sizes="(min-width: 900px) 34vw, 100vw"
                  className={styles.coverImage}
                />
              </div>
              <figcaption>
                <span>05 / Polishing</span>
                The visible casting surface is prepared before coating.
              </figcaption>
            </figure>
          </section>

          <section className={`container-shell ${styles.coatingChapter}`}>
            <div className={styles.coatingCopy}>
              <span className={styles.largeStep}>06</span>
              <p className="section-kicker">Surface Coating</p>
              <h3 className="section-heading">Coating follows surface preparation.</h3>
              <p>
                The decorative covers receive their visible finish before
                project-specific assembly and quality inspection.
              </p>
            </div>
            <figure className={styles.coatingFigure}>
              <Image
                src={coatingFrame}
                alt="Coating stage for decorative brake caliper cover components"
                fill
                sizes="(min-width: 900px) 62vw, 100vw"
                className={styles.coverImage}
              />
            </figure>
          </section>

          <section id="assembly-qc-packing" className={styles.inspectionChapter}>
            <div className={`container-shell ${styles.inspectionHeading}`}>
              <p className="section-kicker">
                07–08 / Project-specific Assembly &amp; QC
              </p>
              <h3 className="section-heading">
                Project-specific assembly followed by quality inspection.
              </h3>
              <p>
                Assembly is included in this decorative cover project’s supply
                scope. Finished red covers are handled and checked at the
                worktable before packing.
              </p>
            </div>
            <figure className={styles.inspectionFigure}>
              <Image
                src={inspectionPhoto}
                alt="Workers handling and checking finished red decorative brake caliper covers"
                fill
                sizes="100vw"
                className={styles.coverImage}
              />
            </figure>
          </section>

          <section className={`container-shell ${styles.packingChapter}`}>
            <div className={styles.packingCopy}>
              <span className={styles.largeStep}>09</span>
              <p className="section-kicker">Finished Product &amp; Packing</p>
              <h3 className="section-heading">Finished covers prepared for packing.</h3>
              <p>
                Finished decorative covers are arranged in project packaging
                with accompanying components.
              </p>
            </div>
            <figure className={styles.packingWide}>
              <Image
                src={finishedPackingFrame}
                alt="Finished red decorative brake caliper covers arranged in packaging"
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
                className={styles.coverImage}
              />
            </figure>
            <figure className={styles.packingTall}>
              <Image
                src={redPackaging}
                alt="Packed red decorative brake caliper cover set with accompanying components"
                fill
                sizes="(min-width: 900px) 28vw, 100vw"
                className={styles.coverImage}
              />
            </figure>
          </section>
        </article>

        <section className={styles.realPartsSection} aria-labelledby="real-parts-heading">
          <header className={`container-shell ${styles.realPartsHeader}`}>
            <p className="section-kicker">More real parts</p>
            <h2 id="real-parts-heading" className="section-heading">
              Selected real parts manufactured by HSX
            </h2>
            <p>
              Selected aluminum die-cast parts supplied by HSX across different
              OEM projects.
            </p>
          </header>

          <div className={`container-shell ${styles.projectMosaic}`}>
            {projectRecords.map((project, index) => (
              <article
                key={project.title}
                id={project.anchorId}
                className={styles.projectRecord}
                data-size={project.size}
              >
                <div className={styles.projectImage} data-fit={project.fit ?? "cover"}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1000px) 55vw, (min-width: 700px) 50vw, 100vw"
                    className={styles.projectAsset}
                  />
                  <span className={styles.projectSequence}>
                    {String(index + 2).padStart(2, "0")}
                  </span>
                </div>
                <div className={styles.projectMeta}>
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <div className={styles.projectScope}>
                    <span>HSX Supply Scope</span>
                    <strong>{project.scope}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={`container-shell ${styles.finalCtaInner}`}>
            <div>
              <p className="section-kicker">Start with your part</p>
              <p className={styles.finalCtaPrompt}>
                Have a drawing, sample, or real part for review?
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
