import Image from "next/image";
import Link from "next/link";

import housingEvidence from "../../../../public/images/hsx-factory/oem-aluminum-die-cast-housing.jpg";
import sprayPainting from "../../../../public/images/hsx-factory/in-house-spray-painting-aluminum-parts.jpg";
import workshop from "../../../../public/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg";
import ledWorkLight from "../../../../public/images/led-work-light.png";
import {
  ArticleStructuredData,
  buildArticleMetadata,
} from "../article-structured-data";

const articleTitle =
  "LED Work Light Aluminum Die-Cast Housings: What Buyers Should Consider | HSX DIECASTING";
const articleDescription =
  "A buyer guide to aluminum die-cast housings and structural parts for LED work light applications, including part design, manufacturing routes, finishing, supply scope, and project review.";
const articlePath = "/blog/how-to-customize-led-work-lights";

export const metadata = buildArticleMetadata({
  title: articleTitle,
  description: articleDescription,
  path: articlePath,
});

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20would%20like%20to%20discuss%20an%20LED%20work%20light%20aluminum%20die-cast%20housing%20or%20structural%20part%20project.%20I%20can%20share%20drawings%2C%203D%20files%2C%20sample%20photos%2C%20quantity%2C%20holes%20and%20threads%2C%20surface%20requirements%2C%20and%20the%20required%20supply%20stage.",
};

const commonDieCastParts = [
  {
    number: "01",
    title: "Aluminum Die-Cast Housing",
    description:
      "The main enclosure or housing defined by the buyer's drawing, sample, dimensions, and mounting requirements.",
  },
  {
    number: "02",
    title: "Lamp Body",
    description:
      "A die-cast body that can combine the external form, mounting areas, and structural features required by the project.",
  },
  {
    number: "03",
    title: "Heat-Dissipation Structure",
    description:
      "Housing features such as fins and surrounding part geometry that need to be reviewed for die-casting feasibility.",
  },
  {
    number: "04",
    title: "Mounting and Structural Parts",
    description:
      "Related die-cast parts with mounting points, holes, threads, or structural interfaces specified by the buyer.",
  },
];

const manufacturingConsiderations = [
  "Part structure",
  "Wall thickness and filling feasibility",
  "Heat-dissipation features",
  "Mounting features",
  "Holes and threads",
  "Surface requirements",
  "Quantity and project requirements",
];

const inHouseOperations = [
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

const partnerSupportedResources = [
  "CNC Machining",
  "Anodizing",
  "Electroplating",
];

const projectReviewInputs = [
  "Drawing",
  "3D file",
  "Sample or sample photos",
  "Basic dimensions",
  "Quantity",
  "Holes and threads",
  "Surface requirements",
  "Required supply stage",
];

const relatedLinks = [
  {
    label: "LED Work Light Aluminum Die-Cast Housings",
    href: "/products/led-work-lights",
  },
  {
    label: "Aluminum Light Housings",
    href: "/products/aluminum-light-housings",
  },
  {
    label: "Manufacturing Capabilities",
    href: "/capabilities",
  },
];

export default function ArticlePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#050505] text-white">
      <ArticleStructuredData
        title={articleTitle}
        description={articleDescription}
        path={articlePath}
      />

      <article>
        <header className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0">
            <Image
              src={workshop}
              alt="HSX aluminum die casting workshop"
              fill
              preload
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
            <Link
              href="/blog"
              className="text-sm font-semibold text-[#f4d27a] transition-colors hover:text-white"
            >
              Back to Blog
            </Link>

            <div className="mt-12 max-w-4xl">
              <p className="section-kicker">
                LED Work Light Housing Guide
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                LED Work Light Aluminum Die-Cast Housings and Structural Parts
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d4cdc0]">
                Buyers developing an LED work light application can use this
                guide to prepare an aluminum die-cast housing or related
                structural part for manufacturing review.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#c7beaf]">
                HSX evaluates the die-cast part from drawings, samples, part
                structure, quantity, surface requirements, and the required
                supply stage.
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <section className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
            <div>
              <p className="section-kicker">
                01 / Application Overview
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                Begin with the aluminum die-cast part
              </h2>
              <p className="mt-5 text-base leading-8 text-[#cfc6b6]">
                LED work light applications can use an aluminum die-cast
                housing, lamp body, heat-dissipation structure, mounting part,
                or another related die-cast structural part. The required form
                and supply stage depend on the buyer&apos;s actual project.
              </p>
              <p className="mt-4 text-base leading-8 text-[#cfc6b6]">
                HSX focuses on reviewing and manufacturing the aluminum
                die-cast components within this application.
              </p>
            </div>

            <figure className="overflow-hidden border border-white/10 bg-[#0d0d0d]">
              <div className="relative aspect-[16/9]">
                <Image
                  src={ledWorkLight}
                  alt="Complete LED work light shown as an application reference"
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <p className="absolute left-5 top-5 bg-black/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f4d27a]">
                  Application Reference
                </p>
              </div>
              <figcaption className="border-t border-white/10 p-6 text-sm leading-7 text-[#c8c0b2]">
                The complete light image illustrates the application only. It
                is not evidence of complete lamp manufacturing by HSX.
              </figcaption>
            </figure>
          </section>

          <section className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="section-kicker">
                02 / Common Die-Cast Parts
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                Parts commonly reviewed for this application
              </h2>
              <p className="mt-5 text-base leading-8 text-[#cfc6b6]">
                The buyer&apos;s drawing or sample defines which die-cast part
                is required and how its structural features should be reviewed.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {commonDieCastParts.map((item) => (
                <div
                  key={item.number}
                  className="grid gap-3 py-6 sm:grid-cols-3"
                >
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#d4ac67]">
                    {item.number}
                  </p>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#c7beaf]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <figure className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src={housingEvidence}
                alt="Representative aluminum die-cast housing manufactured by HSX"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-sm leading-7 text-white sm:p-8">
                Representative aluminum die-cast housing manufactured by HSX.
              </figcaption>
            </figure>

            <div>
              <p className="section-kicker">
                03 / Design and Manufacturing Considerations
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                Review the geometry before defining the route
              </h2>
              <p className="mt-5 text-base leading-8 text-[#cfc6b6]">
                Manufacturing review begins with the actual part. Important
                considerations can include:
              </p>
              <ol className="mt-8 grid gap-x-6 border-t border-white/10 sm:grid-cols-2">
                {manufacturingConsiderations.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-white/10 py-5"
                  >
                    <span className="pt-1 text-xs font-semibold tracking-[0.2em] text-[#d4ac67]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-7 text-[#ede6d7]">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="border-b border-white/10 py-16">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
              <div>
                <p className="section-kicker">
                  04 / Possible Manufacturing Route
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                  The agreed supply stage determines where the route ends
                </h2>
              </div>
              <p className="border-l border-[#d4ac67]/50 pl-6 text-base leading-8 text-[#cfc6b6]">
                The route depends on the drawing, part structure, project
                requirements, and agreed supply stage. Not every project uses
                every operation listed below.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border-y border-white/10 py-7">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d4ac67]">
                  In-House Operations
                </p>
                <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3 xl:grid-cols-4">
                  {inHouseOperations.map((item) => (
                    <p
                      key={item}
                      className="border-l border-[#d4ac67]/50 py-1 pl-3 text-sm font-semibold leading-6 text-white"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border border-[#d5ae67]/35 bg-white/[0.03] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d4ac67]">
                  Partner-Supported Resources
                </p>
                <div className="mt-6 space-y-4">
                  {partnerSupportedResources.map((item) => (
                    <p
                      key={item}
                      className="border-l border-[#d4ac67]/50 pl-4 text-base font-semibold text-white"
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-7 text-[#c7beaf]">
                  These processes can be coordinated through partner-supported
                  resources when required by a suitable project.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <p className="section-kicker">
                05 / Finishing and Secondary Operations
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                Match secondary work to the die-cast part
              </h2>
              <p className="mt-5 text-base leading-8 text-[#cfc6b6]">
                Holes, threads, surface appearance, and the required delivery
                stage influence which secondary operations or finishes should
                be reviewed for the aluminum die-cast component.
              </p>
              <p className="mt-4 text-base leading-8 text-[#cfc6b6]">
                In-house drilling, tapping, polishing, powder coating, and spray
                painting can be considered where suitable. CNC machining,
                anodizing, and electroplating remain partner-supported
                resources.
              </p>
            </div>

            <figure className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src={sprayPainting}
                alt="In-house spray painting of aluminum parts at HSX"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-sm leading-7 text-white sm:p-8">
                In-house spray painting of aluminum parts at HSX.
              </figcaption>
            </figure>
          </section>

          <section className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="section-kicker">
                06 / Project Review Inputs
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                What buyers should send
              </h2>
              <p className="mt-5 text-base leading-8 text-[#cfc6b6]">
                Provide available information about the aluminum die-cast
                housing or structural part so HSX can review project fit and the
                required supply stage.
              </p>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {projectReviewInputs.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-r border-white/10 p-5"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#d4ac67]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="border-b border-white/10 py-16">
            <div className="grid gap-10 bg-[#111111] p-7 sm:p-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div>
                <p className="section-kicker">
                  07 / HSX Supply Scope
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                  A defined aluminum die-casting scope
                </h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-[#d4cdc0]">
                <p>
                  HSX focuses on aluminum die-cast housings, lamp bodies,
                  heat-dissipation structures, mounting parts, and related
                  die-cast structural parts for LED work light applications.
                </p>
                <p>
                  The agreed delivery stage may be a die-cast blank, a part
                  after trimming or gate removal, or a part with selected
                  secondary operations, finishing, QC, and packing.
                </p>
                <p>
                  This does not represent the supply of LED modules, lenses,
                  drivers, wiring, electronics, or complete lamp assembly by
                  HSX.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-16">
            <p className="section-kicker">
              08 / Project Review
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
              Send your aluminum die-cast housing project for review
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#cfc6b6]">
              Share available drawings, 3D files, sample photos, quantity,
              holes and threads, surface requirements, and the required supply
              stage for the aluminum die-cast part.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/b2b-oem-project-review"
                className="gold-button text-center"
              >
                Send Your Drawing
              </Link>
              <a
                href={contactDetails.whatsappHref}
                className="outline-button text-center"
              >
                WhatsApp Housing Project
              </a>
              <a
                href={`mailto:${contactDetails.email}?subject=LED%20Work%20Light%20Aluminum%20Die-Cast%20Housing%20Project&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20discuss%20an%20LED%20work%20light%20aluminum%20die-cast%20housing%20or%20structural%20part%20project.%0A%0APart%20type%3A%0AQuantity%3A%0ADrawing%20/%203D%20file%20/%20sample%20available%3A%0ABasic%20dimensions%3A%0AHoles%20and%20threads%3A%0ASurface%20requirements%3A%0ARequired%20supply%20stage%3A%0A%0APlease%20review%20the%20project%20fit.%0A%0ABest%20regards%2C`}
                className="outline-button text-center"
              >
                Email Housing Project
              </a>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <h2 className="text-lg font-semibold text-white">
                Related HSX Pages
              </h2>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {relatedLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-semibold text-[#f4d27a] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
