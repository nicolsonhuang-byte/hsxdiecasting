import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import aboutWorkshop from "../../public/images/about-hsx-aluminum-die-casting-workshop.jpg";
import communicationEquipmentHousing from "../../public/images/hsx-factory/communication-equipment-aluminum-die-cast-housing.jpg";
import machineryAccessoryPart from "../../public/images/hsx-factory/machinery-accessory-aluminum-die-cast-part.jpg";
import multiSpindleDrilling from "../../public/images/hsx-factory/multi-spindle-drilling-fixture-aluminum-part.jpg";
import opticalModuleHousing from "../../public/images/hsx-factory/optical-module-aluminum-die-cast-housing-a.jpg";
import qualityInspection from "../../public/images/hsx-factory/quality-inspection-finished-aluminum-parts.jpg";
import sprayPainting from "../../public/images/hsx-factory/in-house-spray-painting-aluminum-parts.jpg";
import stageLightHousing from "../../public/images/hsx-factory/stage-light-aluminum-die-cast-housing.jpg";
import workshopHorizontal from "../../public/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg";
import { SiteFooter, SiteHeader } from "./components/site-navigation";

type ProductFamily = {
  title: string;
  description: string;
  href: string;
};

type RealPart = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  featured?: boolean;
};

type FactoryEvidence = {
  title: string;
  image: StaticImageData;
  alt: string;
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  emailHref:
    "mailto:nicolson@hsxdiecasting.com?subject=OEM%20Aluminum%20Die%20Casting%20Project%20Review",
  phone: "+86 176 6615 5283",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20DIECASTING%2C%20I%20would%20like%20to%20request%20an%20OEM%20aluminum%20die%20casting%20project%20review.",
};

const productFamilies: ProductFamily[] = [
  {
    title: "Lighting Housings",
    description:
      "Aluminum die-cast lamp bodies, heat-sink housings, covers, and related lighting parts.",
    href: "/products/aluminum-light-housings",
  },
  {
    title: "Enclosures / Housings",
    description:
      "Custom aluminum housings and covers reviewed from drawings, samples, and project requirements.",
    href: "/products/oem-aluminum-die-casting-parts",
  },
  {
    title: "Hardware & Mechanical Parts",
    description:
      "Aluminum brackets, mounting parts, mechanical components, and other drawing-based OEM parts.",
    href: "/products/oem-aluminum-die-casting-parts",
  },
];

const realParts: RealPart[] = [
  {
    title: "Stage Light Housing",
    description:
      "Aluminum die-cast stage light housing manufactured by HSX.",
    image: stageLightHousing,
    alt: "Stage light aluminum die-cast housing manufactured by HSX",
    featured: true,
  },
  {
    title: "Optical Module Housing",
    description:
      "Aluminum die-cast optical module housing manufactured by HSX.",
    image: opticalModuleHousing,
    alt: "Optical module aluminum die-cast housing manufactured by HSX",
  },
  {
    title: "Communication Equipment Housing",
    description:
      "Aluminum die-cast communication equipment housing manufactured by HSX.",
    image: communicationEquipmentHousing,
    alt: "Communication equipment aluminum die-cast housing manufactured by HSX",
  },
  {
    title: "Machinery Part",
    description: "Aluminum die-cast machinery part manufactured by HSX.",
    image: machineryAccessoryPart,
    alt: "Machinery accessory aluminum die-cast part manufactured by HSX",
  },
];

const inHouseCapabilityGroups = [
  {
    title: "Casting Preparation",
    processes: "Aluminum die casting, trimming, gate removal, and deburring",
  },
  {
    title: "Hole & Surface Operations",
    processes: "Drilling, tapping, and polishing",
  },
  {
    title: "Appearance Finishing",
    processes: "Powder coating and spray painting",
  },
  {
    title: "Delivery Readiness",
    processes: "QC and packing",
  },
];

const factoryEvidence: FactoryEvidence[] = [
  {
    title: "Drilling and Tapping",
    image: multiSpindleDrilling,
    alt: "In-house drilling operation for an aluminum die-cast part at HSX",
  },
  {
    title: "Spray Painting",
    image: sprayPainting,
    alt: "In-house spray painting of aluminum parts at HSX",
  },
  {
    title: "Quality Inspection",
    image: qualityInspection,
    alt: "Manual visual inspection of finished aluminum parts before packing at HSX",
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

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <SiteHeader />

      <main id="top">
        {/* 1. Hero */}
        <section
          aria-labelledby="homepage-hero-heading"
          className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.14),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]"
        >
          <div className="container-shell grid min-w-0 gap-10 py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:py-24">
            <div className="min-w-0 motion-rise">
              <p className="section-kicker">China aluminum die casting workshop</p>
              <h1
                id="homepage-hero-heading"
                className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl xl:text-6xl"
              >
                OEM Aluminum Die Casting Manufacturer
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                Custom aluminum die cast parts based on your drawings, samples
                and project requirements.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/b2b-oem-project-review"
                  className="gold-button text-center"
                >
                  Send Your Drawing
                </Link>
                <Link href="/products" className="outline-button text-center">
                  View Products
                </Link>
              </div>

              <div className="mt-10 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e8ce97]">
                    Project input
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c9c1b2]">
                    Drawings, samples, photos, and project requirements
                  </p>
                </div>
                <div className="border-white/10 sm:border-l sm:pl-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e8ce97]">
                    Factory review
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c9c1b2]">
                    Suitability checked before tooling and quotation
                  </p>
                </div>
              </div>
            </div>

            <div className="min-w-0 motion-rise-delay">
              <div className="relative aspect-[4/3] overflow-hidden border border-[#d5ae67]/35 bg-black">
                <Image
                  src={aboutWorkshop}
                  alt="HSX aluminum die casting workshop with production equipment and aluminum die-cast parts"
                  fill
                  preload
                  sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 46vw, 100vw"
                  className="object-cover object-[center_54%]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4d27a]">
                    Real HSX production workshop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. What We Manufacture */}
        <section id="products" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="What We Manufacture"
              title="Aluminum Die Cast Parts We Manufacture"
              description="Explore aluminum die-cast housings, enclosures, hardware, mechanical parts, and other drawing-based OEM projects."
            />

            <div className="mt-12 grid border-y border-white/10 lg:grid-cols-3">
              {productFamilies.map((family, index) => (
                <article
                  key={family.title}
                  className="group min-w-0 border-b border-white/10 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <Link
                    href={family.href}
                    className="flex h-full min-h-64 flex-col px-1 py-8 sm:px-6 lg:px-8"
                  >
                    <span className="text-xs font-semibold tracking-[0.24em] text-[#d5ae67]">
                      0{index + 1}
                    </span>
                    <div className="mt-auto pt-12">
                      <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-[#efcf8d]">
                        {family.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#c8c0b3]">
                        {family.description}
                      </p>
                      <span className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-[#efcf8d]">
                        View details <span aria-hidden="true">&nbsp;→</span>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-12 border-l-4 border-[#d5ae67] bg-[#111111] px-6 py-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-8">
              <div className="max-w-3xl">
                <p className="section-kicker">Other Custom OEM Projects</p>
                <p className="mt-3 text-lg leading-8 text-[#ede6d7]">
                  If your part does not match these product families, send your
                  drawing or sample information for a direct project review.
                </p>
              </div>
              <Link
                href="/b2b-oem-project-review"
                className="outline-button mt-6 inline-flex w-full shrink-0 justify-center text-center sm:mt-0 sm:w-auto"
              >
                Send Your Drawing
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Real Parts & Project Evidence */}
        <section
          aria-labelledby="real-parts-heading"
          className="border-b border-white/8 bg-[linear-gradient(180deg,#090909_0%,#050505_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
              <div>
                <p className="section-kicker">Real Parts & Project Evidence</p>
                <h2
                  id="real-parts-heading"
                  className="section-heading mt-4 text-3xl text-white sm:text-4xl"
                >
                  Selected Parts Manufactured by HSX
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-[#c9c1b2] sm:text-lg">
                Selected aluminum die-cast parts manufactured by HSX.
              </p>
            </div>

            <div className="mt-12 grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-12">
              <style>{`
                @media (min-width: 40rem) {
                  .homepage-real-part-record {
                    grid-template-columns:
                      minmax(11rem, 0.38fr)
                      minmax(0, 0.62fr);
                    align-items: end;
                  }
                }
              `}</style>

              <figure className="min-w-0">
                <Image
                  src={realParts[0].image}
                  alt={realParts[0].alt}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="block h-auto w-full"
                />
                <figcaption className="mt-5 border-t border-white/12 pt-5">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {realParts[0].title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#d8cfbf]">
                    {realParts[0].description}
                  </p>
                </figcaption>
              </figure>

              <div className="grid min-w-0 gap-8">
                {realParts.slice(1).map((part) => (
                  <figure
                    key={part.title}
                    className="homepage-real-part-record grid min-w-0 gap-5 border-t border-white/12 pt-5"
                  >
                    <div className="min-w-0">
                      <Image
                        src={part.image}
                        alt={part.alt}
                        sizes="(min-width: 1024px) 18vw, (min-width: 640px) 40vw, 100vw"
                        className="block h-auto w-full"
                      />
                    </div>
                    <figcaption className="pb-1">
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {part.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-[#d8cfbf]">
                        {part.description}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <Link
              href="/projects"
              className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#efcf8d] transition-colors hover:text-white"
            >
              Explore Projects &amp; Real Parts
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        {/* 4. Manufacturing Capabilities */}
        <section
          id="capabilities"
          className="border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(199,162,91,0.1),transparent_30%),linear-gradient(180deg,#0b0b0b_0%,#050505_100%)] py-16 lg:py-24"
        >
          <div className="container-shell grid min-w-0 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
            <div className="min-w-0">
              <SectionHeading
                eyebrow="Manufacturing Capabilities"
                title="In-house die casting and selected secondary operations"
                description="HSX uses 280T and 320T aluminum die casting machines for suitable OEM projects, with in-house operations arranged around the requirements of each part."
              />
              <Link
                href="/capabilities"
                className="outline-button mt-8 inline-flex w-full justify-center text-center sm:w-auto"
              >
                View Manufacturing Capabilities
              </Link>
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#e8ce97]">
                Confirmed in-house operations
              </p>
              <div className="mt-5 grid gap-x-8 sm:grid-cols-2">
                {inHouseCapabilityGroups.map((group) => (
                  <article
                    key={group.title}
                    className="border-t border-white/12 py-6"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#c9c1b2]">
                      {group.processes}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-6 border border-[#d5ae67]/35 bg-[#120f08] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#f4d27a]">
                  Partner-supported resources
                </p>
                <p className="mt-4 text-base leading-8 text-[#f2eadb]">
                  CNC machining, anodizing, and electroplating can be coordinated
                  through partner-supported resources when required by the
                  project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Factory Evidence */}
        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Factory Evidence"
              title="Real production spaces and in-house operations"
              description="Workshop and process photographs show where HSX carries out aluminum die casting, drilling, tapping, spray painting, inspection, and production preparation."
            />

            <div className="mt-12 grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <figure
                className="relative overflow-hidden border border-white/10 bg-black"
                style={{ minHeight: "min(34rem, 100vw)" }}
              >
                <Image
                  src={workshopHorizontal}
                  alt="HSX aluminum die casting workshop with production equipment"
                  fill
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="section-kicker">Die Casting Workshop</p>
                  <p className="mt-3 max-w-xl text-base leading-7 text-[#ede6d7]">
                    A real view of the HSX production workshop in Foshan.
                  </p>
                </figcaption>
              </figure>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {factoryEvidence.map((evidence, index) => (
                  <figure
                    key={evidence.title}
                    className={`relative min-h-[17rem] overflow-hidden border border-white/10 bg-black ${
                      index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                    }`}
                    style={{ minHeight: "17rem" }}
                  >
                    <Image
                      src={evidence.image}
                      alt={evidence.alt}
                      fill
                      sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-lg font-semibold text-white">
                        {evidence.title}
                      </h3>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Project Review */}
        <section
          id="project-review"
          className="border-b border-[#2b2216]/15 bg-[#d4ac67] py-16 text-[#120f08] lg:py-20"
        >
          <div className="container-shell grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5b4520]">
                Project Review
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Start with the part information you already have
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#2d2417] sm:text-lg">
                Send drawings, 3D files, sample photos, or project requirements
                by email or WhatsApp. HSX will review whether the project fits
                aluminum die casting and the required secondary operations.
              </p>
            </div>

            <div className="border-l-2 border-[#2b2216]/25 pl-6 sm:pl-8">
              <p className="text-sm leading-7 text-[#3d2d16]">
                Drawings <span aria-hidden="true">/</span> 3D files{" "}
                <span aria-hidden="true">/</span> Sample photos{" "}
                <span aria-hidden="true">/</span> Project requirements
              </p>
              <Link
                href="/b2b-oem-project-review"
                className="mt-7 inline-flex w-full justify-center bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
                style={{ color: "#f8f2e6" }}
              >
                Send Your Drawing
              </Link>
            </div>
          </div>
        </section>

        {/* 7. About HSX */}
        <section className="border-b border-white/8 bg-[#070707] py-16 lg:py-24">
          <div className="container-shell grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end">
            <div className="min-w-0">
              <SectionHeading
                eyebrow="About HSX"
                title="A Foshan factory focused on OEM aluminum die casting projects"
                description="HSX supports overseas buyers from drawings, samples, and project requirements through suitable aluminum die casting production, selected secondary operations, QC, and packing."
              />
              <Link
                href="/about"
                className="outline-button mt-8 inline-flex w-full justify-center text-center sm:w-auto"
              >
                About HSX
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-t border-[#d5ae67]/55 pt-6">
                <p className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  2009
                </p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#e8ce97]">
                  Production since 2009
                </p>
              </div>
              <div className="border-t border-[#d5ae67]/55 pt-6">
                <p className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  2017
                </p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#e8ce97]">
                  Registered in 2017
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="bg-[radial-gradient(circle_at_center_left,rgba(199,162,91,0.12),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#050505_100%)] py-16 lg:py-24">
          <div className="container-shell">
            <div className="grid min-w-0 gap-10 border-y border-[#d5ae67]/35 py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:py-14">
              <div className="min-w-0">
                <p className="section-kicker">Start an OEM Project</p>
                <h2 className="section-heading mt-4 max-w-4xl text-3xl text-white sm:text-4xl lg:text-5xl">
                  Send your drawing for a factory-direct project review
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-[#c9c1b2] sm:text-lg">
                  HSX will review the part, required operations, finishing
                  expectations, QC, and packing needs before quotation.
                </p>
              </div>

              <Link
                href="/b2b-oem-project-review"
                className="gold-button w-full justify-center text-center lg:w-auto"
              >
                Send Your Drawing
              </Link>
            </div>

            <div className="mt-7 flex flex-col gap-4 text-sm text-[#c9c1b2] sm:flex-row sm:flex-wrap sm:gap-x-8">
              <p>
                <span className="text-white">Email:</span>{" "}
                <a
                  href={contactDetails.emailHref}
                  className="break-all transition-colors hover:text-[#f4d27a]"
                >
                  {contactDetails.email}
                </a>
              </p>
              <p>
                <span className="text-white">WhatsApp:</span>{" "}
                <a
                  href={contactDetails.whatsappHref}
                  className="transition-colors hover:text-[#f4d27a]"
                >
                  {contactDetails.phone}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
