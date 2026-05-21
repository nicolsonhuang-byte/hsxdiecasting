import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import factoryCapabilities from "../../../public/images/factory-capabilities.png";
import heroFactory from "../../../public/images/hero-factory-200t-300t.png";
import ledWorkLight from "../../../public/images/led-work-light.png";
import oemAluminumParts from "../../../public/images/oem-small-aluminum-die-casting-parts.png";

type InfoCard = {
  title: string;
  description: string;
};

const pageTitle =
  "Factory Capabilities | Aluminum Die Casting & Finishing";

const pageDescription =
  "HSX DIECASTING supports OEM aluminum die casting, drilling, tapping, polishing, anodizing, powder coating, spray painting, and export packaging.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/capabilities",
  },
  keywords: [
    "aluminum die casting capabilities",
    "aluminum die casting factory China",
    "OEM aluminum parts manufacturing",
    "small aluminum die casting parts",
    "aluminum die casting machining and finishing",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/capabilities",
    images: [
      {
        url: "/images/factory-capabilities.png",
        alt: "HSX DIECASTING factory capabilities for compact aluminum parts, machining, and finishing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/factory-capabilities.png"],
  },
};

const contactDetails = {
  email: "nicolsonhuang2020@gmail.com",
  phone: "+86 176 6615 5283",
  whatsappHref: "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%20Please%20contact%20me%20with%20quotation%20details.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const heroStats = [
  {
    label: "Die Casting Scope",
    value: "200T + 300T",
    note: "Focused on small-to-medium aluminum die casting parts and compact aluminum housings",
  },
  {
    label: "Secondary Equipment",
    value: "17",
    note: "7 drilling machines, 7 tapping machines, and 3 polishing and grinding machines",
  },
  {
    label: "OEM Input",
    value: "Drawings + Samples",
    note: "OEM aluminum parts manufacturing based on drawings, samples, or custom project requirements",
  },
];

const equipmentCards: InfoCard[] = [
  {
    title: "200T Aluminum Die Casting Machine",
    description:
      "Used for compact aluminum housings, brackets, end caps, covers, and other small-to-medium die cast parts with practical geometry.",
  },
  {
    title: "300T Aluminum Die Casting Machine",
    description:
      "Supports slightly larger small-to-medium aluminum parts within realistic factory scope for light housings, shells, covers, and OEM hardware accessories.",
  },
  {
    title: "Multi-axis Drilling Support",
    description:
      "Supports repeatable hole processing, mounting-point preparation, and secondary machining for aluminum parts and housings.",
  },
  {
    title: "Multi-axis Tapping Support",
    description:
      "Used for threaded features, assembly-related hole preparation, and OEM aluminum part functional detail work.",
  },
  {
    title: "Polishing and Grinding Equipment",
    description:
      "Provides surface preparation and appearance improvement before finishing or final visual inspection.",
  },
  {
    title: "Surface Finishing Coordination",
    description:
      "Aluminum anodizing, powder coating, and spray painting are coordinated with polishing and grinding preparation.",
  },
];

const castingApplications: InfoCard[] = [
  {
    title: "Aluminum LED Light Housings",
    description:
      "Compact aluminum housings and shells for work lights, auxiliary lights, and industrial lighting-related product programs.",
  },
  {
    title: "Heat Dissipation Aluminum Housings",
    description:
      "Small-to-medium aluminum housings designed around heat dissipation, light body structure, and practical assembly requirements.",
  },
  {
    title: "Compact Aluminum Brackets",
    description:
      "Compact brackets and support parts with drilling and tapping features for lighting and hardware applications.",
  },
  {
    title: "Aluminum End Caps and Covers",
    description:
      "Aluminum end caps and closure parts for housings, shells, and accessory assemblies requiring a finished appearance.",
  },
  {
    title: "Small Aluminum Enclosure Shells",
    description:
      "Compact enclosure shells for lighting, hardware, and OEM aluminum accessories suited to 200T and 300T die casting capacity.",
  },
  {
    title: "Decorative Non-load-bearing Covers",
    description:
      "Appearance-focused covers, including non-load-bearing decorative caliper covers, produced as compact aluminum exterior parts only.",
  },
  {
    title: "Custom OEM Aluminum Hardware Parts",
    description:
      "Custom aluminum hardware parts manufactured from drawings, samples, or custom project requirements for global B2B buyers.",
  },
];

const machiningSupport: InfoCard[] = [
  {
    title: "Secondary Machining for Aluminum Parts",
    description:
      "Secondary machining supports hole processing, threaded features, mounting details, and assembly-related geometry on compact aluminum parts.",
  },
  {
    title: "Surface Conditioning Before Finishing",
    description:
      "Surface conditioning improves appearance and prepares the part for anodizing, powder coating, spray painting, or direct inspection.",
  },
  {
    title: "Edge and Visible Area Preparation",
    description:
      "Part edges and key visible areas can be prepared before finishing or packing to improve presentation and handling quality.",
  },
  {
    title: "Basic Assembly Coordination",
    description:
      "Basic assembly coordination can be arranged where the OEM project needs bracket matching, cover fit-up, or related component preparation.",
  },
  {
    title: "Export Packaging Support",
    description:
      "Export-oriented packaging and buyer-defined packing requirements are coordinated before shipment release.",
  },
];

const finishingCards: InfoCard[] = [
  {
    title: "Aluminum Anodizing Support",
    description:
      "Used where the part needs a clean metallic appearance, corrosion resistance, or controlled finish tone on exposed aluminum surfaces.",
  },
  {
    title: "Powder Coating for Aluminum Parts",
    description:
      "Suitable for durable exterior coverage on aluminum housings, brackets, covers, and custom hardware accessories.",
  },
  {
    title: "Spray Painting and Color Matching",
    description:
      "Applied where the project requires color matching, market-specific appearance, or brand-oriented visual presentation.",
  },
  {
    title: "Polishing and Grinding Preparation",
    description:
      "Supports appearance preparation and surface improvement before finishing or final shipment inspection.",
  },
];

const workflowSteps = [
  "Drawings or samples received",
  "Engineering review",
  "Mold development",
  "Die casting",
  "Drilling and tapping",
  "Polishing / grinding",
  "Surface finishing",
  "Inspection",
  "Packaging and shipment",
];

const industries: InfoCard[] = [
  {
    title: "LED Work Light Housing Programs",
    description:
      "Compact housings, heat sink shells, covers, and brackets for LED work lights and related lighting product lines.",
  },
  {
    title: "Automotive LED Light and Accessory Parts",
    description:
      "Automotive LED lights, compact aluminum housings, decorative covers, and appearance-focused accessory components.",
  },
  {
    title: "Motorcycle LED Light Housing Parts",
    description:
      "Motorcycle light housings, small aluminum lamp bodies, and compact OEM accessory parts for distributors and private-label buyers.",
  },
  {
    title: "OEM Aluminum Hardware Accessories",
    description:
      "Custom aluminum hardware parts, end caps, brackets, shells, and other small-to-medium OEM aluminum accessories.",
  },
  {
    title: "Off-road and Utility Equipment Lighting Parts",
    description:
      "LED work light housings, mounting parts, and compact aluminum accessories for off-road and utility equipment programs.",
  },
  {
    title: "Global B2B OEM Project Buyers",
    description:
      "Project manufacturing for global wholesalers, importers, distributors, aftermarket brands, and OEM buyers.",
  },
];

const qualityChecks = [
  "Dimensional checks on critical mounting points and geometry",
  "Surface appearance checks before finishing approval or packing release",
  "Thread and hole inspection after drilling and tapping operations",
  "Sample confirmation before mass production release",
  "Packaging checks before shipment",
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

export default function CapabilitiesPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative overflow-x-clip">
      <div className="border-b border-white/8 bg-black/85">
        <div className="container-shell flex flex-col gap-3 py-3 text-sm text-[#d8ccb2] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C`}
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
            <a
              href="#cta"
              className="flex items-start gap-3 transition-colors hover:text-white"
            >
              <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                Address
              </span>
              <span>{contactDetails.address}</span>
            </a>
          </div>
          <a href="#cta" className="gold-button w-full text-center sm:w-auto">
            Get a Quote
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#050505]/88 backdrop-blur-xl">
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
              Foshan Huashunxiang Hardware Products Co., Ltd. manufactures OEM
              small-to-medium aluminum die casting parts, automotive LED
              lights, motorcycle LED lights, LED work lights, decorative brake
              caliper covers, and custom aluminum hardware parts for global
              wholesalers, importers, distributors, aftermarket brands, and
              OEM buyers.
            </p>
          </div>

          <nav
            aria-label="Primary"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#ddd2ba]"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <Link
              href="/products"
              className="transition-colors hover:text-white"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>
            <a href="#equipment" className="transition-colors hover:text-white">
              Equipment
            </a>
            <a href="#workflow" className="transition-colors hover:text-white">
              Workflow
            </a>
            <a href="#quality" className="transition-colors hover:text-white">
              Quality
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.14),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
          <div className="container-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:py-24">
            <div className="motion-rise">
              <p className="section-kicker">Factory capabilities</p>
              <h1 className="section-heading mt-6 text-4xl leading-none text-white sm:text-5xl xl:text-6xl">
                In-House Aluminum Die Casting, Machining & Finishing Capabilities
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                Focused on small-to-medium aluminum die casting parts, LED
                light housings, brackets, decorative covers, and OEM custom
                aluminum hardware parts. The factory capability is aligned with
                realistic 200T and 300T machine scope for compact aluminum
                products and housings.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#c7beaf]">
                The product mix includes automotive LED lights, motorcycle LED
                lights, LED work lights, compact aluminum housings, decorative
                non-load-bearing decorative caliper covers, and OEM aluminum parts
                produced from drawings, samples, or custom project requirements.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C`}
                  className="gold-button text-center"
                >
                  Send Your Drawings
                </a>
                <a href="#cta" className="outline-button text-center">
                  Get a Quote
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
                      src={heroFactory}
                      alt="HSX in-house factory capability aligned with 200T and 300T aluminum die casting and secondary processing"
                      fill
                      preload
                      sizes="(min-width: 1280px) 44rem, (min-width: 1024px) 46vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/75" />
                    <div className="absolute left-5 top-5 rounded-2xl border border-white/12 bg-black/55 px-4 py-3 backdrop-blur">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                        Capability focus
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Compact aluminum parts, machining, and finishing
                      </p>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Best-fit parts
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                          LED work light housings, heat sink housings,
                          brackets, covers, end caps, enclosure shells, and
                          compact aluminum hardware accessories.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          OEM workflow
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                          Drawings, engineering review, mold development, die
                          casting, machining, finishing, inspection, packaging,
                          and shipment support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="industrial-card overflow-hidden p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                      <Image
                        src={factoryCapabilities}
                        alt="Factory equipment, machining, and finishing support for small-to-medium aluminum parts"
                        fill
                        sizes="(min-width: 1024px) 22vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Equipment depth
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#f2eadb]">
                          Die casting, drilling, tapping, polishing, and
                          surface finishing support inside one factory workflow.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="industrial-card overflow-hidden p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                      <Image
                        src={oemAluminumParts}
                        alt="Small-to-medium OEM aluminum parts and housings within realistic factory capacity"
                        fill
                        sizes="(min-width: 1024px) 22vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Product scope
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#f2eadb]">
                          OEM small aluminum die casting parts produced within
                          realistic 200T and 300T factory capacity.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="equipment" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Factory equipment overview"
              title="Key in-house equipment for die casting, machining, and finishing"
              description="The capability overview stays grounded in the actual factory setup for compact aluminum part production and secondary processing."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {equipmentCards.map((card) => (
                <article key={card.title} className="industrial-card p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {card.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="casting"
          className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,1)_100%)] py-16 lg:py-24"
        >
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <div className="space-y-4">
              <div className="industrial-card gold-frame overflow-hidden p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={oemAluminumParts}
                    alt="Small-to-medium aluminum housings and accessories suitable for realistic die casting capability"
                    fill
                    sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                    <p className="section-kicker">Aluminum die casting capability</p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      The factory stays focused on small aluminum die casting
                      parts and compact housings that fit 200T and 300T machine
                      capacity.
                    </p>
                  </div>
                </div>
              </div>

              <article className="metric-pill">
                <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                  Important accuracy
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  Decorative covers only
                </p>
                <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                  Brake caliper covers are decorative non-load-bearing
                  appearance covers only and are not positioned as structural
                  braking parts.
                </p>
              </article>
            </div>

            <div>
              <SectionHeading
                eyebrow="Aluminum die casting capability"
                title="Realistic part scope for compact OEM aluminum manufacturing"
                description="The page is intentionally limited to manufacturable small-to-medium aluminum parts suitable for the factory’s 200T and 300T machines."
              />

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {castingApplications.map((item) => (
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
          </div>
        </section>

        <section id="machining" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Machining and secondary processing"
              title="Secondary operations that support functional fit and appearance"
              description="Drilling, tapping, polishing, grinding, deburring, assembly support, and packaging coordination are part of the broader OEM part manufacturing flow."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {machiningSupport.map((item) => (
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

        <section
          id="finishing"
          className="border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(199,162,91,0.11),transparent_28%),linear-gradient(180deg,#0c0c0c_0%,#070707_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Surface finishing"
              title="Appearance and protection options for aluminum parts"
              description="The finishing capability is positioned around project appearance, corrosion resistance, and wholesale presentation requirements."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {finishingCards.map((card) => (
                <article key={card.title} className="industrial-card p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {card.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="workflow"
          className="border-b border-white/8 py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="OEM project workflow"
              title="From buyer input to finished shipment"
              description="The OEM aluminum parts manufacturing process is structured around review discipline, machining support, finishing, inspection, and export packing."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {workflowSteps.map((step, index) => (
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

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <SectionHeading
                eyebrow="Industries supported"
                title="Buyer industries aligned with compact aluminum part capability"
                description="The factory capabilities are positioned for practical B2B categories that use compact aluminum housings, shells, covers, and OEM accessory parts."
              />
            </div>

            <div className="grid gap-5">
              {industries.map((industry) => (
                <article key={industry.title} className="industrial-card p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#cac1b2]">
                    {industry.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="quality"
          className="border-b border-white/8 bg-[linear-gradient(180deg,#090909_0%,#050505_100%)] py-16 lg:py-24"
        >
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="industrial-card gold-frame overflow-hidden p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={ledWorkLight}
                  alt="Lighting product and housing quality checks before shipment"
                  fill
                  sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                  <p className="section-kicker">Quality and production control</p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Quality content stays practical: dimensional control,
                    surface checks, thread inspection, sample confirmation, and
                    packaging review before shipment.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Quality and production control"
                title="Inspection content matched to compact OEM part supply"
                description="The quality positioning emphasizes controlled review and clear production checkpoints rather than overstated claims."
              />

              <div className="industrial-card mt-10 p-6 sm:p-8">
                <ul className="space-y-4 text-base leading-8 text-[#efe7d9]">
                  {qualityChecks.map((check) => (
                    <li key={check} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="gold-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
                <div>
                  <p className="section-kicker">Final CTA</p>
                  <h2 className="section-heading mt-4 text-3xl text-[#120f08] sm:text-4xl">
                    Send drawings, samples, photos, and market requirements for quotation
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#2d2417] sm:text-lg">
                    Global B2B buyers can send drawings, samples, product
                    photos, quantity, surface finish, and target market
                    requirements for OEM aluminum parts, compact housings, and
                    lighting-related product projects.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C`}
                      className="rounded-full bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Send Email
                    </a>
                    <a
                      href={contactDetails.whatsappHref}
                      className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                    >
                      WhatsApp Contact
                    </a>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="overflow-hidden rounded-[1.5rem] border border-[#2b2216]/15 bg-[#120f08] p-3 shadow-[0_18px_48px_rgba(18,15,8,0.22)]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                      <Image
                        src={factoryCapabilities}
                        alt="Factory capability contact support for OEM aluminum parts manufacturing"
                        fill
                        sizes="(min-width: 1024px) 26rem, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#efcf8d]">
                          Capability RFQ
                        </p>
                        <p className="mt-3 text-lg font-semibold text-white">
                          Contact us with drawings, samples, photos, surface
                          finish needs, packaging details, and target market
                          expectations.
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
              Foshan Huashunxiang Hardware Products Co., Ltd.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#bbb2a3]">
              Aluminum die casting capabilities, machining, and finishing
              support for compact OEM parts, LED lighting housings, and
              wholesale B2B projects.
            </p>
          </div>

          <div className="text-sm leading-7 text-[#b7ae9e]">
            <p>
              <span className="text-white/90">Email:</span>{" "}
              <a
                href={`mailto:${contactDetails.email}?subject=Inquiry%20for%20HSX%20Diecasting%20OEM%20Products&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20interested%20in%20your%20aluminum%20die%20casting%20parts%2C%20LED%20work%20lights%2C%20or%20OEM%20project%20support.%0A%0APlease%20contact%20me%20with%20quotation%20details.%0A%0ABest%20regards%2C`}
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
            <p>Small-to-medium aluminum die casting scope: 200T and 300T</p>
            <p>Brake caliper covers are decorative non-load-bearing appearance covers only</p>
            <p className="mt-2">
              © {currentYear} HSX DIECASTING. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
