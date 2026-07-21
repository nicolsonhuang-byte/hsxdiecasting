import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../components/site-navigation";

import batchAluminumDieCastParts from "../../../public/images/hsx-factory/batch-aluminum-die-cast-parts-before-finishing.jpg";
import inHouseSprayPainting from "../../../public/images/hsx-factory/in-house-spray-painting-aluminum-parts.jpg";
import ledWorkLight from "../../../public/images/led-work-light.png";
import oemAluminumParts from "../../../public/images/oem-small-aluminum-die-casting-parts.png";

type InfoCard = {
  title: string;
  description: string;
};

type ContactCard = {
  title: string;
  value: string;
  href?: string;
  note: string;
};

const pageTitle =
  "Send Aluminum Die Casting RFQ to HSX Factory | Contact";

const pageDescription =
  "Send drawings, 3D files, samples, or photos to HSX DIECASTING for quick small-to-medium aluminum die casting project review, RFQ support, machining, finishing, testing, and packaging discussion.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/contact",
  },
  keywords: [
    "aluminum die casting RFQ",
    "OEM aluminum die casting quotation",
    "LED work lights supplier contact",
    "China aluminum die casting factory contact",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/contact",
    images: [
      {
        url: "/images/hsx-factory/in-house-spray-painting-aluminum-parts.jpg",
        alt: "In-house spray painting of aluminum parts at HSX DIECASTING",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/hsx-factory/in-house-spray-painting-aluminum-parts.jpg"],
  },
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  phone: "+86 176 6615 5283",
  whatsappHref: "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%20Please%20contact%20me%20with%20quotation%20details.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const heroStats = [
  {
    label: "Factory Scope",
    value: "280T and 320T aluminum die casting equipment",
    note: "Small-to-medium aluminum die casting parts and compact aluminum housings only",
  },
  {
    label: "Product Mix",
    value: "OEM Parts",
    note: "Small-to-medium aluminum die casting parts, aluminum light housings, brackets, covers, and selected project-based OEM components",
  },
  {
    label: "RFQ Flow",
    value: "Files to Review",
    note: "Drawings, 3D files, samples, photos, quantity, material, application, machining, finishing, testing, and packaging review",
  },
];

const contactCards: ContactCard[] = [
  {
    title: "Email HSX DIECASTING for RFQ Files",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C`,
    note: "Best for drawings, 3D files, samples, RFQ files, and detailed OEM project requirements.",
  },
  {
    title: "WhatsApp HSX DIECASTING for Fast Quotation Contact",
    value: contactDetails.phone,
    href: contactDetails.whatsappHref,
    note: "Fast contact path for product photos, quick project review, buyer communication, and quotation follow-up.",
  },
  {
    title: "WeChat Contact for OEM Project Communication",
    value: contactDetails.wechat,
    note: "Direct communication option for buyers coordinating RFQs, samples, and OEM project details.",
  },
  {
    title: "Factory Address in Foshan, Guangdong, China",
    value: contactDetails.address,
    note: "Foshan Huashunxiang Hardware Products Factory in Foshan, Guangdong, China.",
  },
];

const rfqChecklist = [
  "2D drawings with key dimensions, tolerances, and thread or hole callouts",
  "3D files such as STEP, STP, IGS, IGES, STL, X_T for die casting evaluation",
  "Sample photos, existing part photos, or reference sample details when drawings are incomplete",
  "Product application and end-use environment",
  "Estimated quantity for quotation, small-batch planning, or repeat-order planning",
  "Material expectations for the aluminum part or housing",
  "Surface finishing requirements such as powder coating, spray painting, polishing, or partner-supported anodizing",
  "Machining, drilling, and tapping requirements for mounting or assembly features",
  "Testing or inspection requirements such as key dimensions, threads, appearance, corrosion, waterproofing, or customer-specific checks",
  "Packaging requirements for export shipment or buyer-side retail preparation",
  "Whether the project is new tooling, an existing mold, a sample-copy review, or a second-supplier review",
];

const acceptedFileFormats = [
  {
    title: "3D CAD Files",
    description:
      "STEP / STP, IGS / IGES, STL, and X_T files are accepted for project evaluation, mold feasibility review, and tolerance confirmation on compact aluminum parts.",
  },
  {
    title: "2D Drawings",
    description:
      "PDF, DWG, and DXF drawings are accepted for dimensional review, mounting feature confirmation, surface finish callouts, and thread or hole specifications before quotation.",
  },
  {
    title: "Sample Photos",
    description:
      "Clear product photos, reference samples, or dimensional sketches are accepted when complete drawings are not available, so the factory can still scope the project for quotation review.",
  },
];

const fileDeliveryNotes = [
  {
    title: "Send by Business Email",
    value: contactDetails.email,
    note: "Preferred channel for drawing sets, 3D CAD files, finish specifications, packaging notes, and detailed OEM project briefs.",
  },
  {
    title: "Send by WhatsApp",
    value: contactDetails.phone,
    note: "Fastest channel for product photos, quick samples, sketches, and follow-up communication about quotation details.",
  },
  {
    title: "Discuss by WeChat",
    value: contactDetails.wechat,
    note: "Useful for direct project communication, quick clarification, and sample-stage RFQ follow-up.",
  },
];

const processSteps = [
  "Send files / samples",
  "Quick project review",
  "Quotation",
  "Mold development",
  "Sample confirmation",
  "Mass production",
  "Surface finishing",
  "Packaging and shipment",
];

const capabilities = [
  "280T and 320T aluminum die casting equipment",
  "In-house trimming and deburring after die casting",
  "In-house drilling and tapping for suitable secondary operations",
  "In-house polishing, powder coating, and spray painting support",
  "QC and packing support",
  "CNC machining and anodizing can be coordinated through partner-supported resources when required by the project.",
];

const scopeNotes: InfoCard[] = [
  {
    title: "Small-to-medium Aluminum Die Casting Scope",
    description:
      "The aluminum die casting scope stays limited to compact housings, brackets, covers, shells, end caps, and other small-to-medium parts suitable for 280T and 320T aluminum die casting equipment.",
  },
  {
    title: "Aluminum Light Housing and Lighting-Related Parts",
    description:
      "HSX reviews aluminum light housings, brackets, covers, and selected lighting-related aluminum die casting parts for global buyers. Complete lamp assembly should only be discussed when project details are confirmed.",
  },
  {
    title: "Decorative Brake Caliper Cover Positioning",
    description:
      "Brake caliper covers are decorative non-load-bearing appearance covers only and are not braking-force components.",
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

export default function ContactPage() {
  return (
    <div className="relative min-w-0">
      <div className="border-b border-white/8 bg-black/85">
        <div className="container-shell flex flex-col gap-3 py-3 text-sm text-[#d8ccb2] lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C`}
                className="flex min-w-0 items-center gap-3 transition-colors hover:text-white"
              >
                <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                  Email
                </span>
                <span className="min-w-0 break-all">{contactDetails.email}</span>
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
            <div className="flex items-start gap-3">
              <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                Address
              </span>
              <span>{contactDetails.address}</span>
            </div>
          </div>
          <Link
            href="/b2b-oem-project-review"
            className="gold-button w-full text-center sm:w-auto"
          >
            Request Project Review
          </Link>
        </div>
      </div>

      <SiteHeader />

      <main id="top">
        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.14),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
          <div className="container-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:py-24">
            <div className="motion-rise">
              <p className="section-kicker">Contact / Get a Quote</p>
              <h1 className="section-heading mt-6 text-4xl leading-none text-white sm:text-5xl xl:text-6xl">
                Send Aluminum Die Casting RFQ to HSX Factory
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                Send drawings, 3D files, samples, or product photos for quick
                project review. HSX reviews small-to-medium OEM aluminum die
                casting parts, aluminum light housings, brackets, covers,
                shells, and related project requirements for global B2B buyers.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#c7beaf]">
                The aluminum die casting scope stays focused on parts suitable
                for 280T and 320T aluminum die casting equipment. Small-batch
                and new project support
                can be reviewed when buyers provide quantity, material,
                application, machining, surface finish, testing, packaging, and
                tooling status details.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/b2b-oem-project-review"
                  className="gold-button text-center"
                >
                  Request Project Review
                </Link>
                <a
                  href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C`}
                  className="outline-button text-center"
                >
                  Send RFQ Details
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <article key={stat.label} className="metric-pill">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#bdb5a8]">
                      {stat.note}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="motion-rise-delay">
              <div className="grid gap-4">
                <div className="industrial-card gold-frame relative overflow-hidden rounded-[2rem] p-3">
                  <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={inHouseSprayPainting}
                      alt="In-house spray painting of aluminum parts at HSX DIECASTING"
                      fill
                      preload
                      sizes="(min-width: 1280px) 44rem, (min-width: 1024px) 46vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/75" />
                    <div className="absolute left-5 top-5 rounded-2xl border border-white/12 bg-black/55 px-4 py-3 backdrop-blur">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                        RFQ support
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Drawings, samples, photos, and OEM project details
                      </p>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Best-fit products
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                          Compact housings, light bodies, brackets, end caps,
                          covers, shells, and other small-to-medium aluminum
                          components.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Product mix
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                          OEM aluminum die casting parts, LED work lights,
                          automotive LED lights, motorcycle LED lights, and
                          decorative brake caliper appearance covers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="industrial-card overflow-hidden p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                      <Image
                        src={oemAluminumParts}
                        alt="OEM small-to-medium aluminum die casting parts for quotation review"
                        fill
                        sizes="(min-width: 1024px) 22vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          OEM parts RFQ
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#f2eadb]">
                          Send aluminum part drawings, samples, finish notes,
                          and packaging requirements for quotation review.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="industrial-card overflow-hidden p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                      <Image
                        src={ledWorkLight}
                        alt="LED work light and lighting product inquiry support"
                        fill
                        sizes="(min-width: 1024px) 22vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Lighting RFQ
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#f2eadb]">
                          Share product photos, wattage, application details,
                          branding requirements, and delivery expectations.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact-cards"
          className="border-b border-white/8 py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Contact details"
              title="Direct contact paths for quotation, drawings, and OEM project discussion"
              description="Buyers can contact HSX directly by email, WhatsApp, WeChat, or through the factory address details below."
            />

            <div className="mt-12 grid min-w-0 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {contactCards.map((card) => (
                <article key={card.title} className="industrial-card min-w-0 p-5 sm:p-6">
                  <p className="section-kicker break-words">{card.title}</p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="mt-4 block min-w-0 break-all text-xl font-semibold text-white transition-colors hover:text-[#efcf8d]"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-4 min-w-0 break-words text-xl font-semibold text-white">
                      {card.value}
                    </p>
                  )}
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                    {card.note}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="rfq-info"
          className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,1)_100%)] py-16 lg:py-24"
        >
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="industrial-card gold-frame overflow-hidden p-3">
              <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={oemAluminumParts}
                  alt="OEM aluminum parts and compact housings for RFQ information and project review"
                  fill
                  sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                  <p className="section-kicker">RFQ information</p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Send the product files and commercial details that matter
                    first so quotation review can move faster.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="What to send"
                title="RFQ details that help the factory review your project accurately"
                description="The strongest RFQ starts with buyer part files, quantity planning, material expectations, product application, machining requirements, finishing needs, testing requirements, packaging details, and whether the project is new tooling or an existing mold."
              />
              <p className="mt-6 text-sm leading-7 text-[#d8cfbf]">
                If the project includes anodizing or visible metallic appearance
                requirements, please also review HSX guidance for{" "}
                <Link
                  href="/anodizable-aluminum-die-casting-parts"
                  className="font-semibold text-[#efcf8d] underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  anodizable aluminum die casting parts
                </Link>{" "}
                before sending finish notes.
              </p>

              <ul className="mt-10 space-y-4 text-base leading-8 text-[#e7dfcf]">
                {rfqChecklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {scopeNotes.map((note) => (
                  <article key={note.title} className="industrial-card p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {note.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                      {note.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="rfq-files"
          className="border-b border-white/8 py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Accepted file formats"
              title="Send 3D CAD files, 2D drawings, sample photos, or existing part photos for project evaluation"
              description="HSX evaluates compact aluminum part projects from 3D CAD files, 2D drawings, sample photos, or existing part photos. The factory team reviews part geometry, mold feasibility, secondary operations, surface finishing requirements, and packing support before quotation."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {acceptedFileFormats.map((format) => (
                <article key={format.title} className="industrial-card p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {format.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                    {format.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 min-w-0 industrial-card gold-frame p-5 sm:p-8">
              <p className="section-kicker">How to send files</p>
              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                Send RFQ files by business email, WhatsApp, or WeChat
              </h3>
              <p className="mt-5 text-sm leading-7 text-[#e7dfcf] sm:text-base">
                Please send 3D CAD files, 2D drawings, sample photos, existing
                part photos, and supporting documents directly to the business
                email, WhatsApp, or WeChat contact below. This keeps drawings,
                revisions, and OEM aluminum die casting project review
                communication connected with the factory-side quotation review.
              </p>

              <div className="mt-8 grid min-w-0 gap-5 md:grid-cols-3">
                {fileDeliveryNotes.map((option) => (
                  <article
                    key={option.title}
                    className="min-w-0 rounded-2xl border border-white/10 bg-black/45 p-5 sm:p-6"
                  >
                    <p className="section-kicker break-words">{option.title}</p>
                    <p className="mt-4 min-w-0 break-all text-xl font-semibold text-white">
                      {option.value}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                      {option.note}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/b2b-oem-project-review"
                  className="gold-button text-center"
                >
                  Request Project Review
                </Link>
                <a
                  href={contactDetails.whatsappHref}
                  className="outline-button text-center"
                >
                  Discuss on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="process"
          className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,1)_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="OEM project process"
              title="From buyer RFQ to finished shipment"
              description="The quotation and production workflow is organized around clear project inputs, quick project review, sample confirmation, production, finishing, inspection, and export packing."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <article key={step} className="industrial-card p-6">
                  <p className="section-kicker">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {step}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="capability" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="industrial-card gold-frame overflow-hidden p-3">
              <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={inHouseSprayPainting}
                  alt="In-house spray painting of aluminum parts at HSX DIECASTING"
                  fill
                  sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                  <p className="section-kicker">Factory capability reminder</p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Capacity aligned with compact aluminum parts, light
                    housings, brackets, covers, and other small-to-medium OEM
                    components.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Capability reminder"
                title="Equipment and finishing support for compact OEM part supply"
                description="The factory supports small-to-medium aluminum die casting parts and related lighting housings with drilling, tapping, selected partner CNC machining after casting when required, finishing coordination, and small-batch or new project review."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Die Casting Equipment
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    In-House
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    280T and 320T aluminum die casting equipment
                  </p>
                </article>
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Selected In-House Secondary Operations
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    In-House
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    Drilling, tapping, polishing, trimming, deburring, QC, and
                    packing support for suitable OEM aluminum die casting projects.
                  </p>
                </article>
              </div>

              <ul className="mt-8 space-y-4 text-base leading-8 text-[#e7dfcf]">
                {capabilities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="gold-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
                <div>
                  <p className="section-kicker">Final CTA</p>
                  <h2 className="section-heading mt-4 text-3xl text-[#120f08] sm:text-4xl">
                    Request project review for your aluminum die casting RFQ
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#2d2417] sm:text-lg">
                    Global wholesalers, importers, distributors, aftermarket
                    brands, and OEM buyers can send RFQs for compact aluminum
                    parts, LED work lights, automotive LED lights, motorcycle
                    LED lights, and decorative brake caliper appearance covers.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={contactDetails.whatsappHref}
                      className="rounded-full bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Discuss on WhatsApp
                    </a>
                    <a
                      href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C`}
                      className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                    >
                      Send RFQ Details
                    </a>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="overflow-hidden rounded-[1.5rem] border border-[#2b2216]/15 bg-[#120f08] p-3 shadow-[0_18px_48px_rgba(18,15,8,0.22)]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                      <Image
                        src={batchAluminumDieCastParts}
                        alt="Batch aluminum die cast parts before finishing and project review"
                        fill
                        sizes="(min-width: 1024px) 26rem, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#efcf8d]">
                          RFQ ready
                        </p>
                        <p className="mt-3 text-lg font-semibold text-white">
                          Send your drawings, photos, samples, finish notes,
                          branding requirements, and delivery expectations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-[#2b2216]/15 bg-white/55 p-6 backdrop-blur">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5f4a28]">
                      Direct contact
                    </p>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-[#2c2316]">
                      <p>
                        <span className="font-semibold">Email: </span>
                        <a
                          href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C`}
                          className="break-all transition-colors hover:text-[#120f08]"
                        >
                          {contactDetails.email}
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">WhatsApp / Phone: </span>
                        <a
                          href={contactDetails.whatsappHref}
                          className="transition-colors hover:text-[#120f08]"
                        >
                          {contactDetails.phone}
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">WeChat: </span>
                        {contactDetails.wechat}
                      </p>
                      <p>
                        <span className="font-semibold">Address: </span>
                        {contactDetails.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
