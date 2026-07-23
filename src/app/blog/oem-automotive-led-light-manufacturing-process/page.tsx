import Link from "next/link";

import {
  ArticleStructuredData,
  buildArticleMetadata,
} from "../article-structured-data";

const articleTitle =
  "Automotive LED Light Aluminum Die-Cast Housings: Manufacturing Considerations | HSX DIECASTING";
const articleDescription =
  "Learn what buyers should consider when developing aluminum die-cast housings and structural parts for automotive LED lighting applications, including part structure, heat dissipation, holes, threads, finishing, and project review.";
const articlePath = "/blog/oem-automotive-led-light-manufacturing-process";

export const metadata = buildArticleMetadata({
  title: articleTitle,
  description: articleDescription,
  path: articlePath,
});

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20would%20like%20to%20discuss%20an%20automotive%20LED%20light%20aluminum%20die-cast%20housing%20project.%20I%20can%20share%20drawings%2C%20samples%2C%20quantity%2C%20surface%20finish%2C%20and%20the%20required%20supply%20stage.",
};

const relatedLinks = [
  {
    label: "View Automotive LED Housing Application",
    href: "/products/automotive-led-lights",
  },
  {
    label: "View Aluminum Light Housings",
    href: "/products/aluminum-light-housings",
  },
  {
    label: "View Manufacturing Capabilities",
    href: "/capabilities",
  },
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

const partnerSupportedResources = [
  "CNC Machining",
  "Anodizing for selected suitable parts",
  "Electroplating",
];

const projectReviewInputs = [
  "2D drawing and 3D file",
  "Sample or reference part",
  "Part dimensions and structure",
  "Material requirement",
  "Expected quantity",
  "Tolerance requirements",
  "Hole and thread details",
  "Surface finish requirement",
  "Required supply stage",
];

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <ArticleStructuredData
        title={articleTitle}
        description={articleDescription}
        path={articlePath}
      />

      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <Link href="/blog" className="text-sm font-semibold text-[#f4d27a]">
          ← Back to Blog
        </Link>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.34em] text-[#d4ac67]">
          Automotive LED Housing Guide
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Automotive LED Light Aluminum Die-Cast Housings and Structural Parts
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#d4cdc0]">
          Automotive LED lighting applications can require aluminum die-cast
          housings, lamp bodies, mounting features, heat-dissipation structures,
          and related structural parts. Buyers should evaluate these parts from
          drawings, samples, quantity, surface requirements, and the required
          supply stage before quotation.
        </p>

        <div className="mt-12 space-y-14 text-base leading-8 text-[#cfc6b6]">
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4ac67]">
              01 · Introduction
            </p>
            <h2 className="mt-3 text-2xl font-semibold !text-white">
              Why aluminum die casting is considered for automotive LED housings
            </h2>
            <p className="mt-4">
              Aluminum die casting can form a housing or lamp body with integrated
              mounting areas, ribs, covers, and other structural features. The
              suitability of a design depends on its geometry, wall thickness,
              filling feasibility, visible surfaces, and the operations required
              after casting.
            </p>
            <p className="mt-4">
              The housing should be reviewed as an aluminum die-cast part within
              the buyer&apos;s wider lighting application. HSX focuses on the
              housing and related die-cast structural parts rather than complete
              automotive LED lamp manufacturing.
            </p>
          </section>

          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4ac67]">
              02 · Die-Cast Part Scope
            </p>
            <h2 className="mt-3 text-2xl font-semibold !text-white">
              What parts are typically reviewed for die casting
            </h2>
            <p className="mt-4">
              Project review may cover aluminum housings, lamp bodies, rear
              covers, mounting brackets, structural supports, and other related
              die-cast parts. The exact scope must be confirmed from the
              buyer&apos;s drawing, sample, or reference part.
            </p>
            <p className="mt-4">
              A similar external appearance does not mean two projects use the
              same part structure or manufacturing route. Each part should be
              evaluated from its own dimensions, features, quantity, finish, and
              required delivery stage.
            </p>
          </section>

          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4ac67]">
              03 · Design Review
            </p>
            <h2 className="mt-3 text-2xl font-semibold !text-white">
              Key design and manufacturing considerations
            </h2>
            <div className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {[
                [
                  "Part structure",
                  "Overall geometry, ribs, mounting areas, and visible surfaces affect manufacturability.",
                ],
                [
                  "Wall thickness and filling",
                  "Wall transitions and filling conditions should be reviewed before mold and process decisions.",
                ],
                [
                  "Heat-dissipation features",
                  "Ribbed or fin-style structures must be evaluated as part of the casting design.",
                ],
                [
                  "Mounting features",
                  "Mounting points and interfaces should be clearly defined in the drawing or sample.",
                ],
                [
                  "Holes and threads",
                  "Required drilled holes and tapped features should be identified before quotation.",
                ],
                [
                  "Surface requirements",
                  "Visible areas, finish type, color, and appearance expectations affect the manufacturing plan.",
                ],
              ].map(([title, description]) => (
                <div key={title} className="border-t border-white/15 pt-4">
                  <h3 className="font-semibold !text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4ac67]">
              04 · Possible Manufacturing Route
            </p>
            <h2 className="mt-3 text-2xl font-semibold !text-white">
              The route depends on the part and agreed supply stage
            </h2>
            <p className="mt-4">
              A project may stop after die casting and gate removal, or it may
              continue through selected secondary operations, finishing, QC, and
              packing. The actual route depends on the part structure, project
              requirements, and the supply stage agreed by both sides. It is not a
              fixed process applied to every project.
            </p>

            <div className="mt-7 grid gap-8 border-y border-white/10 py-7 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold !text-white">
                  In-house operations
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {inHouseOperations.map((operation) => (
                    <span
                      key={operation}
                      className="border border-white/15 px-3 py-2 text-sm text-[#e6ddcf]"
                    >
                      {operation}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold !text-white">
                  Partner-supported resources
                </h3>
                <div className="mt-4 space-y-3">
                  {partnerSupportedResources.map((resource) => (
                    <p
                      key={resource}
                      className="border-l border-[#d4ac67] pl-4 text-sm text-[#e6ddcf]"
                    >
                      {resource}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4ac67]">
              05 · Secondary Operations & Finishing
            </p>
            <h2 className="mt-3 text-2xl font-semibold !text-white">
              Match later operations to the drawing and finish requirement
            </h2>
            <p className="mt-4">
              HSX can complete drilling, tapping, and polishing in-house when they
              are required by the reviewed part. CNC machining can be coordinated
              through partner-supported resources when the project requires it.
            </p>
            <p className="mt-4">
              Powder coating and spray painting are in-house finishing options.
              Anodizing for selected suitable parts and electroplating can be
              coordinated through partner-supported resources. Final suitability
              must be reviewed against the actual part and project requirement.
            </p>
          </section>

          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4ac67]">
              06 · Project Review Inputs
            </p>
            <h2 className="mt-3 text-2xl font-semibold !text-white">
              What buyers should send for project review
            </h2>
            <p className="mt-4">
              Clear part information helps HSX review casting feasibility,
              secondary operations, finishing, and the requested supply stage
              before quotation.
            </p>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {projectReviewInputs.map((item) => (
                <li
                  key={item}
                  className="border-b border-white/10 pb-3 text-[#e6ddcf]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4ac67]">
              07 · HSX Supply Scope
            </p>
            <h2 className="mt-3 text-2xl font-semibold !text-white">
              Supply scope follows the project agreement
            </h2>
            <p className="mt-4">
              HSX supply scope focuses on aluminum die-cast housings, lamp bodies,
              mounting parts, and related die-cast structural parts for automotive
              LED lighting applications. The agreed delivery stage may be a
              die-cast blank, a part after gate removal, or a part with selected
              secondary operations, finishing, QC, and packing.
            </p>
            <p className="mt-4">
              This scope does not represent complete automotive LED lamp
              manufacturing. Buyers should define the required die-cast part and
              delivery stage during project review.
            </p>
          </section>
        </div>

        <section className="mt-16 border-t border-[#d7b56d]/35 pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4ac67]">
            08 · Project Review
          </p>
          <h2 className="mt-4 text-3xl font-semibold !text-white">
            Send your drawing for manufacturing review
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#d4cdc0]">
            Share your drawing, 3D file, sample photo, quantity, surface
            requirement, and required supply stage. HSX will review whether the
            aluminum die-cast housing or structural part fits the available
            manufacturing scope.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
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
              WhatsApp Project Details
            </a>
            <a
              href={`mailto:${contactDetails.email}?subject=Automotive%20LED%20Light%20Aluminum%20Die-Cast%20Housing%20Project&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20discuss%20an%20automotive%20LED%20light%20aluminum%20die-cast%20housing%20project.%0A%0APart%20type%3A%0AQuantity%3A%0ADrawing%20/%203D%20file%20/%20sample%20available%3A%0AHoles%20and%20threads%3A%0ASurface%20finish%3A%0ARequired%20supply%20stage%3A%0A%0APlease%20review%20the%20project%20fit.%0A%0ABest%20regards%2C`}
              className="outline-button text-center"
            >
              Email Project Details
            </a>
          </div>
        </section>

        <section className="mt-12 border-t border-white/10 pt-8">
          <h2 className="text-lg font-semibold !text-white">
            Related HSX pages
          </h2>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[#f4d27a]"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
