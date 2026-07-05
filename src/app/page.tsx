import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import brakeCaliperCover from "../../public/images/brake-caliper-cover.png";
import factoryCapabilities from "../../public/images/factory-capabilities.png";
import heroFactory from "../../public/images/hero-factory-200t-300t.png";
import ledWorkLight from "../../public/images/led-work-light.png";
import oemAluminumParts from "../../public/images/oem-small-aluminum-die-casting-parts.png";

type ProjectDirection = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  href: string;
  cta: string;
};

type ReviewCard = {
  title: string;
  description: string;
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  phone: "+86 176 6615 5283",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%20or%20OEM%20project%20review.%20Please%20contact%20me%20with%20quotation%20details.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const navigationLinks = [
  { label: "Projects", href: "#project-directions" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "RFQ", href: "#rfq" },
  { label: "Contact", href: "/contact" },
];

const projectDirections: ProjectDirection[] = [
  {
    title: "OEM Aluminum Die Casting Parts",
    description:
      "Small-to-medium aluminum housings, covers, brackets, shells, and custom parts reviewed from drawings or samples.",
    image: oemAluminumParts,
    alt: "Small-to-medium OEM aluminum die casting parts",
    href: "/products/oem-aluminum-die-casting-parts",
    cta: "View OEM Parts",
  },
  {
    title: "Aluminum Light Housings",
    description:
      "Die-cast aluminum lamp bodies, heat-sink-style housings, covers, and compact lighting enclosures for OEM lighting projects.",
    image: ledWorkLight,
    alt: "Die-cast aluminum LED light housing",
    href: "/products/aluminum-light-housings",
    cta: "View Light Housings",
  },
  {
    title: "Surface Finishing for Aluminum Parts",
    description:
      "Powder coating, spray painting, polishing, and partner-supported anodizing review for suitable aluminum die casting projects.",
    image: factoryCapabilities,
    alt: "Surface finishing and secondary operations support for aluminum die casting parts",
    href: "/anodizable-aluminum-die-casting-parts",
    cta: "View Finishing Options",
  },
  {
    title: "Decorative Appearance Covers",
    description:
      "Decorative non-load-bearing exterior covers for styling programs, not functional brake parts.",
    image: brakeCaliperCover,
    alt: "Decorative non-load-bearing aluminum appearance cover",
    href: "/products/decorative-brake-caliper-covers",
    cta: "View Decorative Covers",
  },
];

const reviewCards: ReviewCard[] = [
  {
    title: "Drawing and sample review",
    description:
      "Review 2D drawings, 3D files, samples, photos, quantity, and application requirements.",
  },
  {
    title: "Die casting and secondary operations",
    description:
      "In-house operations include die casting, trimming, deburring, drilling, tapping, polishing, powder coating, spray painting, QC, and packing.",
  },
  {
    title: "Partner-supported finishing when required",
    description:
      "CNC machining and anodizing can be coordinated through partner-supported resources when required by the project.",
  },
];

const rfqChecklist = [
  "2D drawings or 3D files",
  "sample photos or existing part photos",
  "quantity and material requirements",
  "tolerance, drilling, tapping, or machining needs",
  "surface finishing and packing requirements",
  "application or target market information",
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
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative overflow-x-clip bg-[#050505] text-white">
      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#050505]/90 backdrop-blur-xl">
        <div className="container-shell flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="max-w-xl">
            <p className="section-kicker">Foshan, Guangdong, China</p>
            <p className="section-heading mt-2 text-2xl text-white sm:text-3xl">
              HSX DIECASTING
            </p>
          </Link>

          <nav
            aria-label="Primary"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#ddd2ba]"
          >
            {navigationLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.14),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)] py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div>
              <p className="section-kicker">OEM aluminum die casting project review</p>
              <h1 className="section-heading mt-5 max-w-4xl text-4xl text-white sm:text-5xl lg:text-6xl">
                Factory-Direct Aluminum Die Casting Support for Small-to-Medium OEM Parts
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                HSX reviews drawings, samples, quantities, machining needs,
                surface finishing requirements, QC, and packing details before
                quotation.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  aria-label="Send RFQ details to HSX"
                  className="gold-button text-center"
                >
                  Send RFQ Details
                </Link>
                <a
                  href="#capabilities"
                  aria-label="View HSX aluminum die casting capabilities"
                  className="outline-button text-center"
                >
                  View Capabilities
                </a>
              </div>
            </div>

            <div className="industrial-card gold-frame overflow-hidden p-3">
              <div className="relative aspect-[4/3] min-h-[320px] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={heroFactory}
                  alt="HSX aluminum die casting workshop for small-to-medium OEM aluminum parts"
                  fill
                  priority
                  sizes="(min-width: 1280px) 42rem, (min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur">
                  <p className="text-sm font-semibold text-[#efcf8d]">
                    Factory-direct review before quotation
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#f6eddf]">
                    Drawings, samples, machining needs, finishing, QC, and
                    packing are checked before production discussion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="project-directions"
          className="border-b border-white/8 py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Project entrance"
              title="What Are You Trying to Make?"
              description="Choose a project direction and send drawings, sample photos, quantity, finish requirements, and application details for review."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {projectDirections.map((item) => (
                <article
                  key={item.title}
                  className="industrial-card group overflow-hidden"
                >
                  <Link href={item.href} aria-label={item.cta} className="block">
                    <div className="relative aspect-[4/3] min-h-[220px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1280px) 18rem, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#c8c0b3]">
                      {item.description}
                    </p>
                    <div className="mt-6">
                      <Link
                        href={item.href}
                        aria-label={item.cta}
                        className="inline-flex rounded-full border border-[#d5ae67]/45 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#efcf8d] transition-colors hover:bg-[#d5ae67] hover:text-black"
                      >
                        {item.cta}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,1)_100%)] py-16 lg:py-24"
        >
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="industrial-card overflow-hidden p-3">
              <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={factoryCapabilities}
                  alt="HSX factory secondary operations support for aluminum die casting parts"
                  fill
                  sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Factory-direct support"
                title="Factory-Direct Project Review Before Quotation"
                description="HSX checks whether a part fits the factory process before quotation, instead of forcing every drawing into the wrong production method."
              />

              <div className="mt-10 grid gap-5">
                {reviewCards.map((card) => (
                  <article key={card.title} className="industrial-card p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="rfq" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <SectionHeading
              eyebrow="RFQ checklist"
              title="What Buyers Can Send for RFQ Review"
              description="Send the practical details HSX needs to judge process fit, finishing requirements, and quotation scope."
            />

            <div className="industrial-card p-6 sm:p-8">
              <ul className="grid gap-3 text-sm leading-7 text-[#efe7d9] sm:grid-cols-2">
                {rfqChecklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/b2b-oem-project-review"
                  aria-label="Request HSX project review"
                  className="gold-button text-center"
                >
                  Request Project Review
                </Link>
                <Link
                  href="/contact"
                  aria-label="Contact HSX with RFQ details"
                  className="outline-button text-center"
                >
                  Contact HSX
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="rounded-[2rem] border border-[#d7b56d]/25 bg-[#0d0d0d] p-8 shadow-2xl shadow-black/30 sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <p className="section-kicker">Final contact</p>
                  <h2 className="section-heading mt-4 text-3xl text-white sm:text-4xl">
                    Have a Drawing or Sample Photo?
                  </h2>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-[#c9c1b2]">
                    Send it for factory review before quotation.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:justify-end">
                  <Link
                    href="/b2b-oem-project-review"
                    aria-label="Request project review from HSX"
                    className="gold-button text-center"
                  >
                    Request Project Review
                  </Link>
                  <Link
                    href="/contact"
                    aria-label="Contact HSX for aluminum die casting project review"
                    className="outline-button text-center"
                  >
                    Contact HSX
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-black/80 py-10">
        <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="section-kicker">Footer</p>
            <p className="section-heading mt-3 text-2xl text-white">
              Foshan Huashunxiang Hardware Products Factory
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#bbb2a3]">
              OEM small-to-medium aluminum die casting parts, aluminum light
              housings, secondary operations, finishing coordination, QC, and
              packing support for B2B buyers.
            </p>
          </div>

          <div className="text-sm leading-7 text-[#b7ae9e]">
            <p>
              <span className="text-white/90">Email:</span>{" "}
              <a
                href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Project%20Review&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20would%20like%20to%20send%20drawings%2C%20sample%20photos%2C%20quantity%2C%20machining%2C%20surface%20finishing%2C%20and%20packing%20requirements%20for%20project%20review.%0A%0ABest%20regards%2C`}
                className="transition-colors hover:text-white"
              >
                {contactDetails.email}
              </a>
            </p>
            <p>
              <span className="text-white/90">WhatsApp / Phone:</span>{" "}
              <a
                href={contactDetails.whatsappHref}
                className="transition-colors hover:text-white"
              >
                {contactDetails.phone}
              </a>
            </p>
            <p>
              <span className="text-white/90">WeChat:</span>{" "}
              {contactDetails.wechat}
            </p>
            <p>
              <span className="text-white/90">Address:</span>{" "}
              {contactDetails.address}
            </p>
            <p className="mt-2">
              {"\u00A9"} {currentYear} HSX DIECASTING. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
