import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageTitle =
  "OEM Aluminum Die Casting Blog & Project Resources | HSX DIECASTING";
const pageDescription =
  "Explore practical articles about OEM aluminum die casting, part design, manufacturing processes, surface finishing, project review, and real aluminum die casting applications.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/blog",
    siteName: "HSX DIECASTING",
    type: "website",
    images: [
      "/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg",
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

const coreTopics = [
  {
    number: "01",
    title: "Aluminum Die Casting Basics",
    description:
      "Core process concepts, part types, and practical context for OEM buyers.",
  },
  {
    number: "02",
    title: "Part Design & Manufacturability",
    description:
      "How part structure, wall thickness, holes, threads, and surface needs affect review.",
  },
  {
    number: "03",
    title: "Manufacturing Process",
    description:
      "A clearer view of die casting, trimming, gate removal, deburring, and project routes.",
  },
  {
    number: "04",
    title: "Secondary Operations",
    description:
      "Project-dependent drilling, tapping, polishing, and partner-supported resources.",
  },
  {
    number: "05",
    title: "Surface Finishing",
    description:
      "Practical guidance for appearance, coating, painting, anodizing, and finish review.",
  },
  {
    number: "06",
    title: "Quality & Project Review",
    description:
      "What buyers should prepare and what HSX reviews before quotation.",
  },
  {
    number: "07",
    title: "OEM Buyer Guides",
    description:
      "Factory selection, RFQ preparation, sourcing questions, and supply-stage decisions.",
  },
];

const featuredArticles = [
  {
    number: "01",
    category: "Aluminum Die Casting Basics",
    title: "What Is Aluminum Die Casting?",
    description:
      "A practical introduction to aluminum die casting for OEM housings, covers, brackets, and custom parts.",
    href: "/blog/what-is-aluminum-die-casting",
  },
  {
    number: "02",
    category: "OEM Buyer Guide",
    title: "How to Choose an Aluminum Die Casting Manufacturer in China",
    description:
      "Key points buyers can use to review manufacturing fit, communication, process boundaries, and project readiness.",
    href: "/blog/how-to-choose-aluminum-die-casting-manufacturer-china",
  },
  {
    number: "03",
    category: "Project Review",
    title:
      "RFQ Checklist for Custom OEM Aluminum Die Casting Parts: What Buyers Should Prepare",
    description:
      "A focused checklist for drawings, 3D files, samples, quantity, finishing, holes, threads, and supply-stage requirements.",
    href: "/blog/rfq-checklist-custom-oem-aluminum-die-casting-parts",
  },
  {
    number: "04",
    category: "Factory Sourcing",
    title: "Where to Find a Precision Aluminum Die Casting Factory in China?",
    description:
      "A practical sourcing guide for buyers evaluating a factory for custom aluminum die-cast parts.",
    href: "/blog/where-to-find-precision-aluminum-die-casting-factory-china",
  },
  {
    number: "05",
    category: "Surface Finishing",
    title: "Powder Coating vs Anodizing for Aluminum Die Casting",
    description:
      "A comparison of finishing directions and the project details that should be reviewed before selecting a route.",
    href: "/blog/powder-coating-vs-anodizing-aluminum-die-casting",
  },
];

const applicationResources = [
  {
    category: "Aluminum Die-Cast Lighting Applications",
    description:
      "Application-focused resources about aluminum die-cast housings, lamp bodies, heat-dissipation structures, mounting parts, and related structural parts.",
    articles: [
      {
        title: "Aluminum Die Casting for LED Light Housings",
        href: "/blog/aluminum-die-casting-led-light-housings",
      },
      {
        title:
          "LED Work Light Aluminum Die-Cast Housings: What Buyers Should Consider",
        href: "/blog/how-to-customize-led-work-lights",
      },
      {
        title:
          "Automotive LED Light Aluminum Die-Cast Housings: Manufacturing Considerations",
        href: "/blog/oem-automotive-led-light-manufacturing-process",
      },
    ],
  },
  {
    category: "Decorative Appearance Applications",
    description:
      "Additional resources for decorative brake caliper appearance-cover projects. These are not functional braking components.",
    articles: [
      {
        title:
          "OEM Decorative Brake Caliper Covers for Tesla Model 3 / Model Y: RFQ Checklist",
        href: "/blog/oem-decorative-brake-caliper-covers-tesla-model-3-model-y-rfq-checklist",
      },
      {
        title:
          "Decorative Brake Caliper Covers for Tesla Model 3 / Model Y Accessory Brands",
        href: "/blog/decorative-brake-caliper-covers-tesla-model-3-model-y-accessory-brands",
      },
      {
        title:
          "How to Customize Decorative Brake Caliper Covers for Aftermarket Brands",
        href: "/blog/how-to-customize-decorative-brake-caliper-covers-aftermarket-brands",
      },
    ],
  },
];

const supportingLinks = [
  { label: "Product Directions", href: "/products" },
  { label: "Manufacturing Capabilities", href: "/capabilities" },
  { label: "Projects & Real Parts", href: "/projects" },
];

export default function BlogPage() {
  const [leadArticle, ...secondaryArticles] = featuredArticles;

  return (
    <main className="min-h-screen overflow-x-clip bg-[#050505] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(212,172,103,0.16),transparent_34%),linear-gradient(180deg,#0b0b0b_0%,#050505_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:px-12 lg:py-24">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d4ac67]">
              HSX DIECASTING Knowledge Center
            </p>
            <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
              OEM Aluminum Die Casting Knowledge & Project Resources
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#cfc6b6] sm:text-lg">
              Practical resources for buyers reviewing custom aluminum die-cast
              parts, part design, manufacturing routes, finishing, factory fit,
              and project requirements.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href="#featured-articles" className="gold-button text-center">
                Explore Featured Articles
              </a>
              <Link
                href="/projects"
                className="outline-button text-center"
              >
                View Projects & Real Parts
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden border border-[#d7b56d]/25">
            <Image
              src="/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg"
              alt="HSX aluminum die casting workshop in Foshan, China"
              fill
              preload
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f4d27a]">
                Factory Knowledge
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/90">
                Manufacturing guidance grounded in HSX&apos;s OEM aluminum die
                casting work in Foshan, China.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d4ac67]">
                Core Knowledge Topics
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built around the questions OEM buyers ask before quotation
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#c9c0b0]">
                Use these resources to clarify project fit, manufacturing
                decisions, finishing routes, and the information needed for an
                effective review.
              </p>
            </div>

            <div className="grid border-t border-white/10 md:grid-cols-2">
              {coreTopics.map((topic) => (
                <article
                  key={topic.number}
                  className="border-b border-white/10 py-6 sm:px-7"
                >
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 text-xs font-semibold tracking-[0.22em] text-[#d4ac67]">
                      {topic.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {topic.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#bfb6a8]">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="featured-articles"
        className="border-b border-white/10 bg-[#080808] py-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d4ac67]">
                Featured Articles
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Start with the core aluminum die casting resources
              </h2>
            </div>
            <Link
              href="/products/oem-aluminum-die-casting-parts"
              className="text-sm font-semibold text-[#f4d27a] hover:underline"
            >
              Review OEM project fit
            </Link>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <Link
              href={leadArticle.href}
              className="group block overflow-hidden border border-[#d7b56d]/25 bg-[#111111]"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src="/images/hsx-factory/machinery-accessory-aluminum-die-cast-part.jpg"
                  alt="Machinery aluminum die-cast parts manufactured by HSX"
                  fill
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold tracking-[0.22em] text-[#d4ac67]">
                    {leadArticle.number}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4ac67]">
                    {leadArticle.category}
                  </p>
                </div>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white group-hover:text-[#f4d27a]">
                  {leadArticle.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#c9c0b0]">
                  {leadArticle.description}
                </p>
                <p className="mt-6 text-sm font-semibold text-[#f4d27a]">
                  Read article
                </p>
              </div>
            </Link>

            <div className="border-t border-b border-white/10">
              {secondaryArticles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group block border-b border-white/10 py-6"
                >
                  <div className="flex items-start gap-5">
                    <span className="shrink-0 text-xs font-semibold tracking-[0.22em] text-[#d4ac67]">
                      {article.number}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#bfb6a8]">
                        {article.category}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#bfb6a8]">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d4ac67]">
                Real Applications
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Application knowledge within aluminum die casting
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#c9c0b0]">
                These resources cover additional products and real aluminum die
                casting applications. Lighting content relates to housings,
                lamp bodies, heat-dissipation structures, mounting parts, and
                related die-cast structural parts - not complete lamp
                manufacturing.
              </p>

              <div className="relative mt-8 aspect-[4/3] overflow-hidden border border-white/10">
                <Image
                  src="/images/hsx-factory/batch-die-cast-parts-before-trimming.jpg"
                  alt="Batch aluminum die-cast parts manufactured by HSX before trimming"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-10">
              {applicationResources.map((group) => (
                <article
                  key={group.category}
                  className="border-l-2 border-[#d4ac67]/50 pl-5"
                >
                  <h3 className="text-2xl font-semibold text-white">
                    {group.category}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#bfb6a8]">
                    {group.description}
                  </p>
                  <div className="mt-5 divide-y divide-white/8 border-t border-white/10">
                    {group.articles.map((article) => (
                      <Link
                        key={article.href}
                        href={article.href}
                        className="group flex items-start justify-between gap-5 py-4"
                      >
                        <span className="text-sm font-semibold leading-6 text-[#efe7d9] group-hover:text-[#f4d27a]">
                          {article.title}
                        </span>
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-[#d4ac67]"
                        >
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_center_left,rgba(199,162,91,0.12),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#050505_100%)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-8 border-t border-[#d7b56d]/30 pt-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d4ac67]">
                Project Review
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Turn practical research into a project-fit review
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-[#c9c0b0]">
                Send drawings, 3D files, sample photos, quantity, surface
                requirements, and your required supply stage so HSX can review
                the OEM aluminum die casting project before quotation.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {supportingLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-semibold text-[#d4cdc0] hover:text-[#f4d27a]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/b2b-oem-project-review"
              className="gold-button text-center"
            >
              Send Your Drawing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
