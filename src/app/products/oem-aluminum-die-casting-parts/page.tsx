import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import workshopHorizontal from "../../../../public/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg";
import oemAluminumParts from "../../../../public/images/oem-small-aluminum-die-casting-parts.png";
import communicationEquipmentHousing from "../../../../public/images/hsx-factory/communication-equipment-aluminum-die-cast-housing.jpg";
import machineryAccessoryDieCastPart from "../../../../public/images/hsx-factory/machinery-accessory-aluminum-die-cast-part.jpg";
import opticalModuleHousingA from "../../../../public/images/hsx-factory/optical-module-aluminum-die-cast-housing-a.jpg";
import stageLightDieCastHousing from "../../../../public/images/hsx-factory/stage-light-aluminum-die-cast-housing.jpg";

type InfoCard = {
  title: string;
  description: string;
};

const pageTitle =
  "OEM Aluminum Die Casting Parts for Small-to-Medium Projects | HSX DIECASTING";

const pageDescription =
  "HSX DIECASTING reviews and produces small-to-medium OEM aluminum die casting parts, housings, covers, brackets, and aluminum die-cast components with partner-supported machining when required. Send drawings, 3D files, sample photos, quantity, machining requirements when needed, and finishing requirements for project review before quotation.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/products/oem-aluminum-die-casting-parts",
  },
  keywords: [
    "OEM aluminum die casting parts",
    "small aluminum die casting parts manufacturer",
    "custom aluminum die casting parts China",
    "aluminum die casting parts supplier",
    "small-to-medium aluminum die casting parts",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/products/oem-aluminum-die-casting-parts",
    images: [
      {
        url: "/images/oem-small-aluminum-die-casting-parts.png",
        alt: "OEM small-to-medium aluminum die casting parts for lighting and hardware projects",
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
  whatsappHref: "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%20Please%20contact%20me%20with%20quotation%20details.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const heroStats = [
  {
    label: "Machine Capacity",
    value: "280T + 320T",
    note: "Sized for compact and small-to-medium aluminum die casting parts",
  },
  {
    label: "Secondary Machining",
    value: "Drill + Tap",
    note: "In-house drilling and tapping support for suitable aluminum die casting projects",
  },
  {
    label: "Finishing Support",
    value: "Finish + Pack",
    note: "Polishing, powder coating, spray painting, QC, and packing support",
  },
];

const manufacturedParts = [
  {
    title: "LED Light Housings",
    description:
      "Lighting housings and light enclosure shells for work lights, auxiliary lights, and project-based lighting assemblies.",
  },
  {
    title: "Heat-Sink Aluminum Housings",
    description:
      "Aluminum housings designed for heat dissipation, cover integration, and mounting features in small-to-medium lighting products.",
  },
  {
    title: "Mounting Brackets",
    description:
      "Lamp brackets and compact mounting brackets with drilling and tapping features for OEM hardware and lighting accessory projects.",
  },
  {
    title: "End Caps and Closure Parts",
    description:
      "End caps, covers, and closure parts for housings, accessories, and enclosure assemblies requiring a clean finished appearance.",
  },
  {
    title: "Enclosure Shells",
    description:
      "Protective aluminum shells for lighting, hardware, and industrial accessory products based on drawing or sample requirements.",
  },
  {
    title: "Motorcycle Light Housings",
    description:
      "Small-to-medium aluminum housings for aftermarket motorcycle lights, trim-oriented lamp bodies, and branded accessory programs.",
  },
  {
    title: "Appearance Covers and Trim Parts",
    description:
      "Appearance-focused covers and trim parts for OEM buyers needing compact aluminum castings with post-finishing support.",
  },
  {
    title: "Custom OEM Aluminum Parts",
    description:
      "Compact custom aluminum parts for OEM projects manufactured from drawings, samples, or custom project requirements.",
  },
];

const rfqProjectExamples = [
  {
    image: communicationEquipmentHousing,
    alt: "Communication equipment aluminum die-cast housing for OEM RFQ review",
    title: "Communication Equipment Housing",
    searchIntent: "communication equipment aluminum housing",
    buyerProblem:
      "Need a small aluminum housing or cover for equipment assembly.",
    hsxReviews:
      "Wall thickness, mounting points, surface finishing, quantity, and packing needs.",
  },
  {
    image: opticalModuleHousingA,
    alt: "Optical module aluminum die-cast housing for custom aluminum casting projects",
    title: "Optical Module Housing",
    searchIntent: "optical module aluminum housing",
    buyerProblem:
      "Need a compact die-cast housing with controlled geometry and assembly features.",
    hsxReviews:
      "Part structure, tolerance, secondary operations, finishing, and batch quantity.",
  },
  {
    image: machineryAccessoryDieCastPart,
    alt: "Machinery accessory aluminum die-cast part for drawing-based project review",
    title: "Machinery Accessory Part",
    searchIntent: "custom aluminum machinery parts",
    buyerProblem:
      "Need a metal component for equipment, machinery, or assembly use.",
    hsxReviews:
      "Product size, holes, threaded features, machining needs, finishing, and packing.",
  },
  {
    image: stageLightDieCastHousing,
    alt: "Stage light aluminum die-cast housing for lighting parts RFQ",
    title: "Lighting Housing",
    searchIntent: "aluminum die casting lighting parts",
    buyerProblem:
      "Need an aluminum housing or shell for lighting-related products.",
    hsxReviews:
      "Housing structure, coating or painting, QC, quantity, and project fit.",
  },
];

const dieCastingFitSignals = [
  "Batch production",
  "A molded aluminum structure",
  "Stable shape and repeatability",
  "Controlled cost after tooling investment",
  "Secondary operations such as drilling, tapping, finishing, QC, and packing",
];

const rfqReviewItems = [
  "2D drawings or 3D files",
  "Sample photos",
  "Material and quantity requirements",
  "Tolerance and secondary operation requirements",
  "Surface finishing and packing needs",
  "Application or usage information",
];

const manufacturingSupport: InfoCard[] = [
  {
    title: "Drawing and Sample Review",
    description:
      "New aluminum die casting projects can start from 2D drawings, 3D files, reference samples, or clear product photos so key dimensions, wall thickness, mounting features, and RFQ gaps can be checked quickly.",
  },
  {
    title: "Mold Planning",
    description:
      "Mold planning is arranged after feasibility confirmation for compact housings, brackets, end caps, enclosure shells, and other small-to-medium OEM aluminum parts.",
  },
  {
    title: "Aluminum Die Casting Production",
    description:
      "Production runs on 280T and 320T aluminum die casting equipment sized for practical OEM parts with compact geometry.",
  },
  {
    title: "Partner-Supported CNC Machining",
    description:
      "CNC machining can be coordinated through partner-supported resources when required by the project.",
  },
  {
    title: "Drilling and Tapping",
    description:
      "Post-casting machining includes hole processing and threaded features using the factory’s multi-axis drilling and tapping equipment.",
  },
  {
    title: "Surface Finishing Coordination",
    description:
      "Polishing, powder coating, spray painting, and partner-supported anodizing when required are coordinated around appearance, corrosion, and end-market requirements.",
  },
  {
    title: "Assembly and Export Packing Support",
    description:
      "The factory can support basic assembly coordination, packing layout, and export packaging requirements for wholesale and OEM project delivery.",
  },
];

const capacityPoints = [
  "280T and 320T aluminum die casting equipment is used for suitable small-to-medium aluminum die casting projects",
  "HSX supports in-house drilling, tapping, polishing, powder coating, spray painting, QC, and packing for suitable aluminum die casting projects",
  "CNC machining can be coordinated through partner-supported resources when required by the project.",
  "Partner-supported anodizing can be coordinated when required by the project",
];

const surfaceFinishes: InfoCard[] = [
  {
    title: "Aluminum Die Casting Scope",
    description:
      "The page focuses on OEM aluminum die casting parts aligned with 280T and 320T aluminum die casting equipment for compact housings, brackets, covers, caps, and shells.",
  },
  {
    title: "Partner-Supported Anodizing",
    description:
      "Partner-supported anodizing can be reviewed for suitable projects when the buyer needs a controlled metallic appearance on exposed aluminum surfaces. Final anodized appearance depends on alloy selection, casting quality, surface preparation, and sample evaluation.",
  },
  {
    title: "Powder Coating",
    description:
      "Suitable for durable coverage on housings, decorative covers, brackets, and other OEM aluminum die casting parts supplied to wholesale buyers.",
  },
  {
    title: "Spray Painting",
    description:
      "Applied when the buyer needs color matching, brand-specific presentation, or a painted surface for the target market.",
  },
  {
    title: "Polishing and Grinding",
    description:
      "Surface preparation improves appearance consistency before final finishing or direct visual inspection on compact aluminum parts.",
  },
];

const secondaryOperations = [
  "In-house trimming, deburring, and flash removal after rough casting",
  "In-house drilling and tapping for suitable hole and thread requirements",
  "Polishing, powder coating, spray painting, QC checks, and packing support",
  "CNC machining and anodizing can be coordinated through partner-supported resources when required by the project.",
];

const industries: InfoCard[] = [
  {
    title: "LED Work Light Brands",
    description:
      "LED work light housings, lamp bodies, end caps, and heat-sink-style enclosures for lighting brands and OEM lighting projects.",
  },
  {
    title: "Automotive Aftermarket Accessories",
    description:
      "Compact aluminum housings, decorative covers, and project-based accessory components for aftermarket brands and distributors.",
  },
  {
    title: "Motorcycle Lighting and Accessories",
    description:
      "Motorcycle light housings and compact aluminum accessory parts for wholesalers, importers, and branded accessory lines.",
  },
  {
    title: "OEM Hardware Projects",
    description:
      "Small brackets, enclosure shells, end caps, and custom aluminum hardware accessories for buyer-defined OEM programs.",
  },
  {
    title: "Utility and Industrial Accessories",
    description:
      "Functional aluminum parts for utility products, accessory assemblies, and compact industrial applications that may require partner-supported machining and finishing support.",
  },
  {
    title: "Global Importers and Distributors",
    description:
      "Supply positioned for global wholesalers, importers, distributors, hardware brands, LED lighting brands, and OEM project buyers.",
  },
];

const buyerReasons: InfoCard[] = [
  {
    title: "Drawing and Sample Based OEM Support",
    description:
      "HSX reviews OEM aluminum die casting parts from drawings, 3D files, samples, or photos, which is useful for new product landing, replacement parts, and early-stage project evaluation.",
  },
  {
    title: "Practical 280T and 320T Production Scope",
    description:
      "The factory keeps its offering aligned with 280T and 320T aluminum die casting equipment, which suits compact housings, brackets, caps, shells, and covers.",
  },
  {
    title: "Casting, Partner-Supported Machining, and Finishing Coordination",
    description:
      "Casting, drilling, tapping, partner-supported CNC machining when required, polishing, partner-supported anodizing when required, powder coating, and spray painting are coordinated around the aluminum part project.",
  },
  {
    title: "Direct Factory-Side Communication",
    description:
      "Buyers can discuss drawings, samples, tolerances, surface finish, and production limits with a factory-side team that stays closer to the workshop and decision process.",
  },
  {
    title: "Flexible Sample-Stage and Batch Support",
    description:
      "The factory is suitable for new product development, sample-stage confirmation, and small-to-medium batch OEM aluminum parts that need practical evaluation before scaling.",
  },
  {
    title: "Export Buyer Communication",
    description:
      "The business positioning is built for global buyers who need practical RFQ evaluation, clear scope confirmation, direct export communication, and a quick first response on whether a project fits HSX factory capability.",
  },
  {
    title: "Focused Small Aluminum Die Casting Positioning",
    description:
      "For buyers seeking a small aluminum die casting parts manufacturer or a custom aluminum die casting parts China sourcing partner, the RFQ workflow stays centered on manufacturable compact aluminum parts.",
  },
  {
    title: "Practical Second Supplier Option",
    description:
      "For buyers who already have suppliers, HSX can still review drawings, samples, quality concerns, machining details, or finishing requirements as a practical second option for suitable small-to-medium aluminum die casting projects.",
  },
];

const factoryExperience: InfoCard[] = [
  {
    title: "Right-sized Machine Tonnage",
    description:
      "Bigger die casting machines are not automatically better for small-to-medium aluminum parts. Suitable tonnage, mold stability, casting flow, venting, cycle control, trimming, machining, and finishing control may be more important than simply choosing oversized equipment.",
  },
  {
    title: "Stable Mold Cavity Layout",
    description:
      "For some small-to-medium parts, stable one-cavity or two-cavity molds may be more practical than unstable multi-cavity layouts. HSX reviews cavity count around part structure, aluminum flow, cycle time, trimming work, production stability, and downstream cost.",
  },
  {
    title: "Mold Success Is Not Only the Rough Casting",
    description:
      "A successful mold is not only about forming the casting blank. Gate, runner, overflow, venting, drilling position, tapping features, and machining allowance should help reduce trimming work, machining time, downstream processing cost, and total production cost.",
  },
  {
    title: "Core Pins, Fixed Pins, and Hole Planning",
    description:
      "For some hole structures, core pins or fixed pins may help reduce later drilling or machining steps. The feasibility depends on part design, tolerance requirements, mold structure, and production stability.",
  },
  {
    title: "Prototype Confirmation Before Tooling",
    description:
      "After cooperation terms and agreed tooling terms are confirmed, HSX may make a prototype for customer assembly confirmation before formal mold production. Prototype methods may include a 3D-printed plastic prototype or a CNC-machined aluminum prototype. Too many mold modifications may affect mold life, delay delivery, and sometimes affect casting blank appearance or stability because mold changes may affect molten aluminum flow.",
  },
  {
    title: "Mold Durability Depends on Project Conditions",
    description:
      "Mold durability depends on part structure, alloy, production volume, thermal cycle, maintenance, and mold material selection. HSX reviews these factors cautiously instead of publishing a guaranteed tooling life.",
  },
  {
    title: "We Review Before We Produce",
    description:
      "HSX does not blindly accept every OEM aluminum die casting inquiry. If another material or process may offer better quality, lower cost, or fewer production risks, the factory will explain this before accepting the project.",
  },
  {
    title: "From Sample Approval to Consistent Batch Production Control",
    description:
      "A good sample is only the beginning. HSX supports consistent batch production control, mold maintenance, drilling and tapping control, polishing consistency, finishing preparation, and customer-specific inspection requirements.",
  },
];

const rfqRequirements = [
  "2D drawings, 3D files, or clear dimensional sketches",
  "Sample photos or existing part photos when drawings are not complete",
  "Product application, whether this is new tooling or an existing mold project, and the main reason for supplier review",
  "Material or appearance requirements for the aluminum part",
  "Estimated order quantity and repeat-order expectations",
  "Secondary machining after casting, such as drilling, tapping, threaded features, or partner-supported CNC machining when required",
  "Drilling or tapping requirements, hole positions, thread specifications, and tolerance expectations",
  "Required surface finish such as polishing, powder coating, spray painting, or partner-supported anodizing feasibility review for suitable projects",
  "Packaging needs, testing requirements if applicable, and target market information",
];

const faqItems = [
  {
    question: "What OEM aluminum die casting parts can HSX review?",
    answer:
      "HSX can review small-to-medium OEM aluminum die casting parts such as housings, covers, brackets, rear covers, heat-sink housings, mounting parts, and other aluminum die-cast components based on drawings, 3D files, sample photos, quantity, finishing requirements, and any partner-supported machining needs.",
  },
  {
    question:
      "Is a bigger die casting machine always better for small OEM aluminum parts?",
    answer:
      "Not always. Small-to-medium aluminum parts need right-sized die casting production. Machine tonnage, part size, projected area, mold structure, casting flow, venting, trimming, machining, and finishing requirements should be reviewed together before production.",
  },
  {
    question: "What should buyers send for an OEM aluminum die casting RFQ?",
    answer:
      "Buyers can send 2D drawings, 3D files, sample photos, existing part photos, target material, quantity, application, machining requirements, drilling or tapping requirements, surface finishing requirements, and packaging needs.",
  },
  {
    question: "Can core pins or fixed pins reduce later drilling?",
    answer:
      "For some hole structures, core pins or fixed pins may help reduce later drilling or machining steps. The feasibility depends on part design, tolerance requirements, mold structure, and production stability.",
  },
  {
    question:
      "Can all die-cast aluminum parts be anodized with a perfect appearance?",
    answer:
      "No. Anodized appearance depends on alloy selection, casting quality, porosity, surface preparation, visible surface requirements, and sample evaluation. HSX can review anodizing feasibility and coordinate suitable projects through partner-supported resources.",
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

export default function OemAluminumDieCastingPartsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative overflow-x-clip">
      <div className="border-b border-white/8 bg-black/85">
        <div className="container-shell flex flex-col gap-3 py-3 text-sm text-[#d8ccb2] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ARegards%2C`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                  Email
                </span>
                <span>{contactDetails.email}</span>
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

      <header className="z-40 border-b border-white/8 bg-[#050505]/88 backdrop-blur-xl">
        <div className="container-shell flex flex-col gap-5 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-kicker">Foshan, Guangdong, China</p>
            <Link
              href="/"
              className="section-heading mt-3 block text-2xl text-white sm:text-3xl"
            >
              HSX DIECASTING
            </Link>
            <p className="mt-3 text-sm leading-7 text-[#beb6a8]">
              Foshan Huashunxiang Hardware Products Factory provides OEM
              small-to-medium aluminum die casting parts for global
              wholesalers, importers, distributors, hardware brands,
              automotive aftermarket brands, LED lighting brands, and OEM
              project buyers.
            </p>
          </div>

          <nav
            aria-label="Primary"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#ddd2ba]"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-white">
              About
            </Link>
            <Link
              href="/products"
              className="transition-colors hover:text-white"
            >
              Products
            </Link>
            <Link
              href="/b2b-oem-project-review"
              className="transition-colors hover:text-white"
            >
              Project Review
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.14),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
          <div className="container-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:py-24">
            <div className="motion-rise">
              <p className="section-kicker">OEM aluminum die casting parts</p>
              <h1 className="section-heading mt-6 text-4xl leading-none text-white sm:text-5xl xl:text-6xl">
                OEM Aluminum Die Casting Parts for Small-to-Medium Projects
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                Send drawings, 3D files, samples, or product photos for quick
                factory review of compact aluminum housings, brackets, covers,
                end caps, shells, and custom OEM aluminum parts. HSX is
                small-batch friendly for suitable new product landing projects
                and practical second-supplier reviews.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#c7beaf]">
                As a China-based aluminum die casting factory, HSX stays
                focused on practical small-to-medium parts that match 280T and
                320T aluminum die casting equipment, with secondary drilling, tapping,
                finishing support, and partner-supported CNC machining when required
                after casting.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/b2b-oem-project-review" className="gold-button text-center">
                  Request Project Review
                </Link>
                <Link href="/contact" className="outline-button text-center">
                  Send RFQ Details
                </Link>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#c9c1b2]">
                Useful RFQ details include part drawings, 3D files, sample
                photos, target quantity, surface finishing, drilling / tapping /
                threaded features, and CNC machining requirements when partner-supported
                machining is needed.
              </p>

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
                      src={workshopHorizontal}
                      alt="HSX aluminum die casting workshop for small-to-medium OEM projects"
                      fill
                      preload
                      sizes="(min-width: 1280px) 44rem, (min-width: 1024px) 46vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/75" />
                    <div className="absolute left-5 top-5 rounded-2xl border border-white/12 bg-black/55 px-4 py-3 backdrop-blur">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                        Factory positioning
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Equipment aligned with small-to-medium OEM aluminum parts
                      </p>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Typical part types
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                          LED light housings, heat-sink shells, brackets, end
                          caps, enclosure shells, decorative covers, and custom
                          aluminum accessories.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Buyer focus
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                          Global wholesalers, importers, distributors, LED
                          lighting brands, automotive aftermarket brands, and
                          OEM project buyers.
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
                        alt="Compact OEM aluminum die casting parts with small-to-medium geometry"
                        fill
                        sizes="(min-width: 1024px) 22vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Product fit
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#f2eadb]">
                          Compact part geometry for brackets, caps, shells, and
                          lamp housings.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="industrial-card overflow-hidden p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                      <Image
                        src={workshopHorizontal}
                        alt="HSX aluminum die casting workshop for small-to-medium OEM projects"
                        fill
                        sizes="(min-width: 1024px) 22vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Process depth
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#f2eadb]">
                          Drilling, tapping, polishing, powder coating, spray
                          painting, and partner-supported anodizing.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="manufacture" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="What we manufacture"
              title="OEM Aluminum Parts HSX Can Review"
              description="This page is dedicated to compact OEM aluminum die casting parts that suit 280T and 320T aluminum die casting equipment. HSX reviews whether housings, covers, brackets, rear covers, heat-sink housings, mounting parts, and other aluminum die-cast components fit the factory process, and whether partner-supported machining is required before quotation."
            />

            <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
              <div className="industrial-card gold-frame overflow-hidden p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={oemAluminumParts}
                    alt="OEM small-to-medium aluminum die casting parts for LED lighting, hardware accessories, and custom OEM projects"
                    fill
                    sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                    <p className="section-kicker">OEM part coverage</p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      Built around compact aluminum part geometry, mounting
                      features, and export-ready finishing workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {manufacturedParts.map((part, index) => (
                  <article key={`${part.title}-${index}`} className="industrial-card p-6">
                    <h2 className="text-2xl font-semibold text-white">
                      {part.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                      {part.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-20 lg:py-28">
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="Process fit"
                  title="When Aluminum Die Casting May Be a Suitable Process"
                  description="Aluminum die casting may be suitable when a part needs repeatable molded aluminum structure, batch production, stable shape, and secondary operations after tooling investment."
                />

                <div className="mt-8 rounded-sm border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d4ac67]">
                    Good fit signals
                  </p>
                  <ul className="mt-5 space-y-3 text-base leading-7 text-[#efe7d9]">
                    {dieCastingFitSignals.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="industrial-card p-7 sm:p-9">
                <h2 className="text-2xl font-semibold text-white">
                  RFQ Project Examples We Can Review
                </h2>
                <p className="mt-5 text-base leading-8 text-[#c9c1b2]">
                  Different buyers may search by product, industry, or
                  manufacturing problem. HSX connects these RFQ directions back
                  to drawing review, factory fit, secondary operations,
                  finishing, and packing requirements.
                </p>
                <p className="mt-6 border-l-2 border-[#d4ac67]/50 pl-5 text-sm leading-7 text-[#efe7d9]">
                  Not every aluminum part is suitable for die casting or for our
                  current machine range. Before quotation, HSX reviews the
                  drawing, part size, structure, wall thickness, tolerance, mold
                  design, machine matching, quantity, secondary operations,
                  surface finishing, and packing requirements to confirm whether
                  aluminum die casting is suitable for the project.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-7 lg:grid-cols-2">
              {rfqProjectExamples.map((example) => (
                <article
                  key={example.title}
                  className="industrial-card group overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={example.image}
                      alt={example.alt}
                      fill
                      sizes="(min-width: 1280px) 24rem, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-7">
                    <h2 className="text-lg font-semibold text-white">
                      {example.title}
                    </h2>
                    <dl className="mt-5 space-y-4 text-sm leading-6">
                      <div>
                        <dt className="font-semibold uppercase tracking-[0.16em] text-[#d4ac67]">
                          Search intent
                        </dt>
                        <dd className="mt-1 text-[#efe7d9]">
                          {example.searchIntent}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold uppercase tracking-[0.16em] text-[#d4ac67]">
                          Buyer problem
                        </dt>
                        <dd className="mt-1 text-[#cac1b2]">
                          {example.buyerProblem}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold uppercase tracking-[0.16em] text-[#d4ac67]">
                          HSX reviews
                        </dt>
                        <dd className="mt-1 text-[#cac1b2]">
                          {example.hsxReviews}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href="/b2b-oem-project-review" className="gold-button text-center">
                Request Project Review
              </Link>
              <Link href="/contact" className="outline-button text-center">
                Send RFQ Details
              </Link>
              <a
                href={contactDetails.whatsappHref}
                className="outline-button text-center"
              >
                Discuss on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section
          id="support"
          className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,1)_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
              <div className="space-y-4">
                <div className="industrial-card gold-frame overflow-hidden p-3">
                  <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={workshopHorizontal}
                      alt="HSX aluminum die casting workshop for small-to-medium OEM projects"
                      fill
                      sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                      <p className="section-kicker">OEM custom manufacturing support</p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        Projects move from drawings and samples into mold
                        development, die casting, partner-supported machining when
                        required, finishing, and
                        buyer-ready packaging.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="metric-pill">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                      OEM input
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      Drawings + Samples
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                      Part files, samples, and custom project requirements are
                      checked before tooling or production launch.
                    </p>
                  </article>
                  <article className="metric-pill">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                      Process coverage
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      Cast to Finish
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                      Die casting, drilling, tapping, polishing, finishing, and
                      partner-supported CNC machining when required can be
                      coordinated around one OEM workflow.
                    </p>
                  </article>
                </div>
              </div>

              <div>
                <SectionHeading
                  eyebrow="OEM custom manufacturing support"
                  title="Project Suitability Review Before Quotation"
                  description="HSX reviews part structure, size, wall thickness, holes, threads, machining steps, surface finishing requirements, quantity, and application details before quotation. The workflow is structured for mold development, die casting, partner-supported CNC machining when required, hole processing, finishing, assembly coordination, and packaging support."
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                  {manufacturingSupport.map((item, index) => (
                    <article key={`${item.title}-${index}`} className="industrial-card p-6">
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
            </div>
          </div>
        </section>

        <section id="capacity" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="industrial-card gold-frame overflow-hidden p-3">
              <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={workshopHorizontal}
                  alt="HSX aluminum die casting workshop for small-to-medium OEM projects"
                  fill
                  sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                  <p className="section-kicker">Factory equipment</p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Compact aluminum die casting with partner-supported machining
                    when required and finishing support matched to OEM part
                    programs.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Factory equipment and capacity"
                title="Right-Sized Die Casting Production for Small-to-Medium Aluminum Parts"
                description="The factory capacity is described directly and conservatively. Bigger die casting machines are not always better for small aluminum parts. HSX reviews machine tonnage, projected area, mold structure, casting flow, venting, trimming, machining, and finishing requirements together before production."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Die casting machines
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    280T + 320T
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    Used for suitable small-to-medium aluminum die casting
                    projects.
                  </p>
                </article>
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Secondary operations
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    In-house
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    Drilling, tapping, polishing, powder coating, spray
                    painting, QC, and packing support.
                  </p>
                </article>
              </div>

              <ul className="mt-8 space-y-4 text-base leading-8 text-[#e7dfcf]">
                {capacityPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="factory-experience"
          className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,1)_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Factory experience"
              title="Practical review before OEM aluminum die casting production"
              description="HSX DIECASTING supports factory-direct OEM project communication and factory-controlled production. The factory reviews whether each small-to-medium OEM aluminum die casting project matches its equipment, mold planning, trimming, machining, finishing, and batch control capability before production."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {factoryExperience.map((item, index) => (
                <article key={`${item.title}-${index}`} className="industrial-card p-6">
                  <p className="section-kicker">
                    Experience {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-white">
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
          id="finishing"
          className="border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(199,162,91,0.11),transparent_28%),linear-gradient(180deg,#0c0c0c_0%,#070707_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Materials and surface finishing"
              title="Partner-Supported Machining and Surface Finishing Support"
              description="The factory supplies aluminum die casting parts and coordinates drilling, tapping, polishing, powder coating, spray painting, partner-supported CNC machining when required, and partner-supported anodizing when required around the target application and appearance requirements."
            />
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#c9c1b2]">
              For projects that specifically target an anodized metallic
              appearance, HSX can review{" "}
              <Link
                href="/anodizable-aluminum-die-casting-parts"
                className="font-semibold text-[#f4d27a]"
              >
                anodizable aluminum die casting parts
              </Link>{" "}
              before tooling, including visible surfaces, geometry, material
              direction, machining, and sample evaluation needs.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {surfaceFinishes.map((finish, index) => (
                <article key={`${finish.title}-${index}`} className="industrial-card p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {finish.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                    {finish.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Application industries"
              title="Buyer industries aligned with compact aluminum part supply"
              description="The new product page is positioned for buyers sourcing practical OEM aluminum housings, shells, covers, and hardware accessories with export-oriented project communication."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {industries.map((industry, index) => (
                <article key={`${industry.title}-${index}`} className="industrial-card p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {industry.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#cbc3b4]">
                    {industry.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <SectionHeading
                eyebrow="Why global buyers choose us"
                title="Quick RFQ review, OEM support, and practical factory coordination"
                description="The strongest signal for wholesale and OEM buyers is accuracy. HSX is positioned as an aluminum die casting parts supplier focused on compact projects, small-batch friendly project review, coordinated secondary processes, and straightforward RFQ communication."
              />
            </div>

            <div className="grid gap-5">
              {buyerReasons.map((reason, index) => (
                <article key={`${reason.title}-${index}`} className="industrial-card p-6">
                  <h2 className="text-xl font-semibold text-white">
                    {reason.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="rfq" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="RFQ requirements"
              title="What Buyers Can Send for RFQ Review"
              description="Clear RFQ details help HSX review the process route, tooling feasibility, secondary operations, finishing, and packing needs before quotation."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rfqReviewItems.map((item) => (
                <div
                  key={item}
                  className="rounded-sm border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-semibold leading-6 text-[#efe7d9]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 industrial-card p-6 sm:p-8">
              <ul className="space-y-4 text-base leading-8 text-[#efe7d9]">
                {rfqRequirements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#c9c1b2]">
              Buyers can prepare an{" "}
              <Link
                href="/blog/rfq-checklist-custom-oem-aluminum-die-casting-parts"
                className="font-semibold text-[#f4d27a]"
              >
                aluminum die casting RFQ checklist
              </Link>
              , request a{" "}
              <Link
                href="/b2b-oem-project-review"
                className="font-semibold text-[#f4d27a]"
              >
                project suitability review
              </Link>
              , or{" "}
              <Link href="/contact" className="font-semibold text-[#f4d27a]">
                contact HSX for project review
              </Link>{" "}
              when drawings, samples, machining details, or finishing
              requirements need to be checked before quotation.
            </p>
          </div>
        </section>

        <section
          id="faq"
          className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,1)_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="OEM die casting FAQ"
              title="FAQ for OEM Aluminum Die Casting Projects"
              description="These answers help buyers and AI search systems understand how HSX reviews small-to-medium aluminum die casting projects before quotation, tooling, machining, and finishing."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {faqItems.map((item, index) => (
                <article key={`${item.question}-${index}`} className="industrial-card p-6">
                  <h2 className="text-xl font-semibold text-white">
                    {item.question}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 industrial-card p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
                <div>
                  <p className="section-kicker">Secondary operations</p>
                  <h2 className="section-heading mt-4 text-3xl text-white">
                    Secondary Operations After Die Casting
                  </h2>
                  <p className="mt-5 text-base leading-8 text-[#c9c1b2]">
                    After the rough casting is produced, HSX reviews the required
                    secondary operations based on part structure, hole and thread
                    requirements, surface requirements, and packing needs.
                  </p>
                </div>

                <ul className="space-y-4 text-base leading-8 text-[#efe7d9]">
                  {secondaryOperations.map((operation) => (
                    <li key={operation} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                      <span>{operation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Related product pages"
              title="Explore related aluminum die casting and LED lighting products"
              description="Many OEM aluminum part projects are connected with lighting housings, LED work lights, automotive LED lights, motorcycle LED lights, and decorative appearance covers. These related pages help buyers compare the correct product scope before sending an RFQ."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <Link
                href="/products/aluminum-light-housings"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related product</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Die-Cast Aluminum Light Housings
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Die cast lamp housings, heat-sink-style bodies, covers, brackets,
                  and compact aluminum lighting components.
                </p>
              </Link>

              <Link
                href="/products/led-work-lights"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related product</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  LED Work Lights
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  LED work lights with aluminum housing support for off-road,
                  utility, truck, machinery, and outdoor equipment programs.
                </p>
              </Link>

              <Link
                href="/products/automotive-led-lights"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related product</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Automotive LED Lights
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  OEM automotive LED lights, auxiliary lights, car LED work lights,
                  aluminum lamp housings, brackets, and compact lighting parts.
                </p>
              </Link>

              <Link
                href="/products/motorcycle-led-lights"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related product</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Motorcycle LED Lights
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Motorcycle LED lights, auxiliary lighting, compact aluminum
                  housings, brackets, covers, and private-label lighting support.
                </p>
              </Link>

              <Link
                href="/products/decorative-brake-caliper-covers"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related product</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Decorative Brake Caliper Covers
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Non-load-bearing appearance covers installed outside the brake
                  caliper, with color finishing and custom logo support.
                </p>
              </Link>

              <Link
                href="/products"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">All product categories</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Back to Products Overview
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Review the full HSX product scope before sending drawings,
                  samples, photos, quantity, finish, and packaging requirements.
                </p>
              </Link>

              <Link
                href="/blog/aluminum-die-casting-led-light-housings"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related article</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Aluminum Die Casting LED Light Housings
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Review how aluminum die casting supports lighting housings,
                  covers, brackets, and compact enclosure parts for OEM lighting
                  projects.
                </p>
              </Link>

              <Link
                href="/blog/powder-coating-vs-anodizing-aluminum-die-casting"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related article</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Powder Coating vs. Anodizing
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Compare surface finishing choices for OEM aluminum die casting
                  parts before preparing RFQ requirements.
                </p>
              </Link>

              <Link
                href="/blog/where-to-find-precision-aluminum-die-casting-factory-china"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related article</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Finding a Die Casting Factory in China
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  A buyer-focused guide for matching custom aluminum die casting
                  projects with a practical factory scope.
                </p>
              </Link>

              <Link
                href="/blog/how-to-choose-aluminum-die-casting-manufacturer-china"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">Related article</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Choosing an Aluminum Die Casting Manufacturer
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Check supplier-fit questions for buyers preparing drawings,
                  sample photos, finishing needs, and quantity plans.
                </p>
              </Link>

              <Link
                href="/contact"
                className="industrial-card group block p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="section-kicker">RFQ contact</p>
                <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#f4d27a]">
                  Contact HSX for Project Evaluation
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                  Send drawings, 3D files, sample photos, quantity, finishing,
                  and machining requirements for OEM aluminum part evaluation.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="gold-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
                <div>
                  <p className="section-kicker">Final inquiry CTA</p>
                  <h2 className="section-heading mt-4 text-3xl text-[#120f08] sm:text-4xl">
                    Send your drawings, samples, or custom project requirements
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#2d2417] sm:text-lg">
                    HSX evaluates OEM aluminum die casting parts for global
                    wholesalers, importers, distributors, hardware brands,
                    automotive aftermarket brands, LED lighting brands, and OEM
                    project buyers needing compact small-to-medium aluminum
                    parts.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <Link
                      href="/b2b-oem-project-review"
                      className="rounded-full bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Request Project Review
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                    >
                      Send RFQ Details
                    </Link>
                    <Link
                      href="/products"
                      className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                    >
                      Back to Products
                    </Link>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="overflow-hidden rounded-[1.5rem] border border-[#2b2216]/15 bg-[#120f08] p-3 shadow-[0_18px_48px_rgba(18,15,8,0.22)]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                      <Image
                        src={oemAluminumParts}
                        alt="OEM aluminum die casting parts for drawings-based and samples-based custom projects"
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
                          Send drawings, samples, finish requirements, and
                          target quantity for a compact aluminum part evaluation.
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
                          href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ARegards%2C`}
                          className="transition-colors hover:text-[#120f08]"
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

      <footer className="border-t border-white/8 bg-black/80 py-10">
        <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="section-kicker">Footer</p>
            <p className="section-heading mt-3 text-2xl text-white">
              Foshan Huashunxiang Hardware Products Factory
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#bbb2a3]">
              OEM small-to-medium aluminum die casting parts supplier for
              global wholesalers, importers, distributors, hardware brands,
              automotive aftermarket brands, LED lighting brands, and OEM
              buyers.
            </p>
          </div>

          <div className="text-sm leading-7 text-[#b7ae9e]">
            <p>
              <span className="text-white/90">Email:</span>{" "}
              <a
                href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ARegards%2C`}
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
            <p>Small-to-medium aluminum die casting scope: 280T and 320T aluminum die casting equipment</p>
            <p>OEM based on drawings, samples, or custom project requirements</p>
            <p className="mt-2">
              © {currentYear} HSX DIECASTING. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
