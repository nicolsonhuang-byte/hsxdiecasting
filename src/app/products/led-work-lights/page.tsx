import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import factoryCapabilities from "../../../../public/images/factory-capabilities.png";
import heroFactory from "../../../../public/images/hero-factory-200t-300t.png";
import ledWorkLight from "../../../../public/images/led-work-light.png";
import oemAluminumParts from "../../../../public/images/oem-small-aluminum-die-casting-parts.png";

type InfoCard = {
  title: string;
  description: string;
};

type GalleryItem = {
  title: string;
  caption: string;
  image: StaticImageData;
  alt: string;
};

const pageTitle =
  "LED Work Lights Supplier | OEM LED Work Lights & Aluminum Housings | HSX DIECASTING";

const pageDescription =
  "HSX DIECASTING supports buyers searching for a LED work lights supplier and LED work light manufacturer China source for OEM LED work lights, off-road LED work lights, truck LED work lights, and aluminum LED work light housing support.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/products/led-work-lights",
  },
  keywords: [
    "LED work lights supplier",
    "LED work light manufacturer China",
    "OEM LED work lights",
    "off-road LED work lights",
    "truck LED work lights",
    "aluminum LED work light housing",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/products/led-work-lights",
    images: [
      {
        url: "/images/led-work-light.png",
        alt: "LED work light with aluminum housing supplied by HSX DIECASTING",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/led-work-light.png"],
  },
};

const contactDetails = {
  email: "nicolsonhuang2020@gmail.com",
  phone: "+86 176 6615 5283",
  whatsappHref: "https://wa.me/8617666155283",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const heroStats = [
  {
    label: "Buyer Positioning",
    value: "Wholesale + OEM",
    note: "Built for importers, distributors, private-label brands, and project buyers",
  },
  {
    label: "Housing Support",
    value: "200T + 300T",
    note: "Small-to-medium aluminum die-cast housings aligned with realistic factory scope",
  },
  {
    label: "Finishing Flow",
    value: "Drill to Coat",
    note: "Drilling, tapping, polishing, anodizing, powder coating, and spray painting support",
  },
];

const applications: InfoCard[] = [
  {
    title: "Off-Road Vehicles",
    description:
      "Off-road LED work lights for utility vehicles, side-by-sides, and other accessory-driven vehicle programs.",
  },
  {
    title: "Trucks and Trailers",
    description:
      "Truck LED work lights and trailer-mounted lighting products for fleets, aftermarket brands, and distributor channels.",
  },
  {
    title: "Agricultural Machinery",
    description:
      "LED work lighting for tractors, harvesters, utility machinery, and field-use equipment lines.",
  },
  {
    title: "Construction Equipment",
    description:
      "Machinery work lights suited to construction equipment, site vehicles, and heavy-duty accessory sourcing programs.",
  },
  {
    title: "Marine Accessories",
    description:
      "Compact LED work lights and aluminum housings for marine accessory applications requiring durable light bodies.",
  },
  {
    title: "Motorcycle and Automotive Modification",
    description:
      "Auxiliary lights, compact lamp bodies, and appearance-focused lighting products for automotive and motorcycle modification buyers.",
  },
  {
    title: "Industrial Work Environments",
    description:
      "Industrial service, maintenance, and equipment-lighting applications that need practical OEM supply support.",
  },
];

const productFeatures: InfoCard[] = [
  {
    title: "Durable Aluminum Housing",
    description:
      "LED work lights are positioned around compact aluminum housings that support practical use across vehicles, machinery, and industrial environments.",
  },
  {
    title: "Bright LED Illumination",
    description:
      "The product page is written for buyers sourcing bright LED work lights for visibility, field work, and equipment support applications.",
  },
  {
    title: "Heat Dissipation Design",
    description:
      "Aluminum housing structure supports heat-dissipation-focused design for work lights, auxiliary lights, and other compact lighting products.",
  },
  {
    title: "Mounting Bracket Support",
    description:
      "Related brackets, covers, and compact mounting features can be coordinated with machining, drilling, and tapping support.",
  },
  {
    title: "OEM / ODM Customization",
    description:
      "HSX can review buyer-led work light projects for housing style, structure, branding, packaging, and application-specific requirements.",
  },
  {
    title: "Surface Finishing Options",
    description:
      "Anodizing, powder coating, spray painting, polishing, and grinding support improve appearance and project-fit finishing options.",
  },
  {
    title: "Wholesale Supply Support",
    description:
      "The business positioning is built for bulk buyers, importers, distributors, online sellers, and private-label lighting programs.",
  },
];

const odmSupport: InfoCard[] = [
  {
    title: "Samples and Drawings",
    description:
      "Buyers can send samples, housing drawings, lamp structure files, or reference photos to define the LED work light project clearly.",
  },
  {
    title: "LED Power Requirements",
    description:
      "Share wattage targets, lighting application details, and output expectations so the product scope can be reviewed against the intended use.",
  },
  {
    title: "Housing Design Requirements",
    description:
      "Provide aluminum housing size, bracket layout, cover details, mounting points, and other structure requirements for OEM or ODM review.",
  },
  {
    title: "Quantity and Packaging Plan",
    description:
      "Order quantity, carton requirements, inner packaging, retail presentation, and shipping expectations help shape the quotation process.",
  },
  {
    title: "Logo and Brand Needs",
    description:
      "Private-label, logo, and product-line positioning details can be shared for OEM work light programs intended for distribution or online retail.",
  },
  {
    title: "Project Specification Review",
    description:
      "Technical points such as beam use, application environment, material preference, and finish requirements can all be consolidated in the RFQ.",
  },
];

const manufacturingPoints = [
  "2 aluminum die casting machines: 1 x 200-ton machine and 1 x 300-ton machine",
  "Suitable for LED work light aluminum housings, heat sink housings, brackets, and covers with small-to-medium geometry",
  "7 multi-axis drilling machines for repeatable hole and mounting-point processing",
  "7 multi-axis tapping machines for threaded features and assembly-related details",
  "3 polishing and grinding machines for appearance preparation before finishing",
  "Aluminum anodizing, powder coating, and spray painting support for housing finishing",
  "OEM small-to-medium aluminum die casting parts accepted from drawings, samples, or custom project requirements",
];

const galleryItems: GalleryItem[] = [
  {
    title: "LED work lights for off-road and industrial use",
    caption:
      "LED work light product positioning for off-road vehicles, equipment lighting, and industrial work applications.",
    image: ledWorkLight,
    alt: "LED work light for off-road and industrial use",
  },
  {
    title: "Aluminum die-cast housings for LED lighting products",
    caption:
      "Compact aluminum housings, covers, and related small-to-medium parts that support LED lighting product programs.",
    image: oemAluminumParts,
    alt: "Compact aluminum die-cast housings for LED lighting products",
  },
  {
    title: "Factory capability for small-to-medium aluminum parts",
    caption:
      "Factory support for compact aluminum part production, machining, drilling, tapping, and finishing coordination.",
    image: factoryCapabilities,
    alt: "Factory capability for small-to-medium aluminum parts",
  },
  {
    title: "OEM manufacturing support",
    caption:
      "Production environment aligned with 200T and 300T equipment for LED work light housings and related aluminum components.",
    image: heroFactory,
    alt: "OEM manufacturing support for LED work lights and aluminum housings",
  },
];

const industriesServed: InfoCard[] = [
  {
    title: "Auto Parts Wholesalers",
    description:
      "LED work lights and related aluminum housings for bulk automotive accessory sourcing channels.",
  },
  {
    title: "Off-Road Accessory Distributors",
    description:
      "Product supply for off-road lighting ranges, utility vehicle accessories, and brand-driven distribution programs.",
  },
  {
    title: "Truck Accessory Brands",
    description:
      "Truck LED work lights and housing-related products for aftermarket truck equipment and branded accessory lines.",
  },
  {
    title: "Machinery Parts Suppliers",
    description:
      "Work light and aluminum housing supply for machinery-focused parts businesses and equipment accessory sourcing teams.",
  },
  {
    title: "Agricultural Equipment Suppliers",
    description:
      "Lighting products and compact housings suitable for agricultural machinery and utility equipment lines.",
  },
  {
    title: "Construction Equipment Suppliers",
    description:
      "OEM and wholesale support for work lights used in construction equipment and related site-service machinery.",
  },
  {
    title: "Online Sellers and Private-Label Brands",
    description:
      "Suitable for buyers building branded LED work light programs for e-commerce and private-label channels.",
  },
];

const rfqRequirements = [
  "Product photos or drawings",
  "LED power / wattage requirements",
  "Housing size and material requirements",
  "Beam pattern or lighting application",
  "Quantity",
  "Surface finish",
  "Packaging and branding requirements",
  "Target market",
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

export default function LedWorkLightsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative overflow-x-clip">
      <div className="border-b border-white/8 bg-black/85">
        <div className="container-shell flex flex-col gap-3 py-3 text-sm text-[#d8ccb2] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href={`mailto:${contactDetails.email}`}
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
              href="#rfq"
              className="flex items-start gap-3 transition-colors hover:text-white"
            >
              <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                Address
              </span>
              <span>{contactDetails.address}</span>
            </a>
          </div>
          <a href="#rfq" className="gold-button w-full text-center sm:w-auto">
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
              Foshan Huashunxiang Hardware Products Co., Ltd. supplies LED work
              lights and aluminum light housings for global wholesalers,
              importers, distributors, off-road accessory brands, truck
              accessory suppliers, agricultural machinery suppliers,
              construction equipment suppliers, and OEM buyers.
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
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
            <Link
              href="/capabilities"
              className="transition-colors hover:text-white"
            >
              Capabilities
            </Link>
            <a
              href="#applications"
              className="transition-colors hover:text-white"
            >
              Applications
            </a>
            <a href="#features" className="transition-colors hover:text-white">
              Features
            </a>
            <a href="#gallery" className="transition-colors hover:text-white">
              Gallery
            </a>
            <a href="#rfq" className="transition-colors hover:text-white">
              RFQ
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.14),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
          <div className="container-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:py-24">
            <div className="motion-rise">
              <p className="section-kicker">LED work lights and aluminum housings</p>
              <h1 className="section-heading mt-6 text-4xl leading-none text-white sm:text-5xl xl:text-6xl">
                LED Work Lights Supplier for Global Wholesalers & OEM Buyers
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                HSX supplies LED work lights, off-road LED work lights, truck
                LED work lights, machinery work lights, and related aluminum
                die-cast housings for export-focused buyers. The offering stays
                centered on compact LED lighting products and small-to-medium
                aluminum housings that match 200T and 300T factory capacity.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#c7beaf]">
                The company also manufactures automotive LED lights,
                motorcycle LED lights, and OEM small-to-medium aluminum die
                casting parts based on drawings, samples, or custom project
                requirements.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#rfq" className="gold-button text-center">
                  Get a Quote
                </a>
                <a
                  href={contactDetails.whatsappHref}
                  className="outline-button text-center"
                >
                  Contact on WhatsApp
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
                      alt="HSX production environment supporting compact LED work light housings and related aluminum parts"
                      fill
                      preload
                      sizes="(min-width: 1280px) 44rem, (min-width: 1024px) 46vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/75" />
                    <div className="absolute left-5 top-5 rounded-2xl border border-white/12 bg-black/55 px-4 py-3 backdrop-blur">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                        Factory scope
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        LED work lights + aluminum housings
                      </p>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Typical programs
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                          Off-road lights, truck work lights, machinery work
                          lights, and compact aluminum housings for LED
                          lighting products.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          OEM support
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#ede6d7]">
                          Samples, drawings, wattage requirements, housing
                          design notes, packaging requirements, and private-label
                          branding support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="industrial-card overflow-hidden p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                      <Image
                        src={ledWorkLight}
                        alt="LED work light for off-road, truck, and industrial use"
                        fill
                        sizes="(min-width: 1024px) 22vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Product direction
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#f2eadb]">
                          Work light product supply for off-road, truck, and
                          industrial equipment applications.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="industrial-card overflow-hidden p-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                      <Image
                        src={oemAluminumParts}
                        alt="Compact aluminum housings and lighting-related small-to-medium aluminum parts"
                        fill
                        sizes="(min-width: 1024px) 22vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#efcf8d]">
                          Housing support
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#f2eadb]">
                          Aluminum LED work light housing support for compact
                          lamp bodies, covers, brackets, and heat-sink-style
                          shells.
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
          id="applications"
          className="border-b border-white/8 py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Product applications"
              title="LED work lights for practical B2B equipment and vehicle use"
              description="The product page is positioned for wholesale and OEM buyers needing LED work lights and related aluminum housings for equipment, vehicle, and industrial applications."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {applications.map((application) => (
                <article key={application.title} className="industrial-card p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {application.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                    {application.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="features"
          className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,1)_100%)] py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Product features"
              title="Practical B2B features for wholesale and OEM LED work light supply"
              description="The product positioning focuses on durable aluminum housings, compact thermal structure, mounting support, and OEM / ODM project flexibility for lighting buyers."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {productFeatures.map((feature) => (
                <article key={feature.title} className="industrial-card p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="odm" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <div className="space-y-4">
              <div className="industrial-card gold-frame overflow-hidden p-3">
                <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={factoryCapabilities}
                    alt="Factory capability image for LED work light production support and aluminum housing finishing"
                    fill
                    sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                    <p className="section-kicker">OEM / ODM support</p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      Send product files, light specifications, housing design
                      requirements, and packaging details to define the work
                      light project accurately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Buyer input
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    Samples + Specs
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    Samples, drawings, product specifications, and brand needs
                    can all be reviewed together.
                  </p>
                </article>
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    OEM extension
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    Parts + Lights
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    The factory also accepts OEM small-to-medium aluminum die
                    casting parts from drawings, samples, or custom project
                    requirements.
                  </p>
                </article>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="OEM / ODM support"
                title="Project review built for product specifications and housing requirements"
                description="Buyers can send samples, drawings, product specifications, LED power requirements, housing design requirements, quantity, packaging requirements, and logo or brand needs for LED work light development or bulk supply review."
              />

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {odmSupport.map((item) => (
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

        <section
          id="manufacturing"
          className="border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(199,162,91,0.11),transparent_28%),linear-gradient(180deg,#0c0c0c_0%,#070707_100%)] py-16 lg:py-24"
        >
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="industrial-card gold-frame overflow-hidden p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={oemAluminumParts}
                  alt="Small-to-medium aluminum housings and related compact parts for LED work light manufacturing"
                  fill
                  sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                  <p className="section-kicker">Aluminum housing capability</p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Compact aluminum housings, covers, brackets, and heat-sink-style
                    shells coordinated with drilling, tapping, polishing, and
                    finishing support.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Aluminum housing and manufacturing capability"
                title="Factory support for LED work light housings and related aluminum parts"
                description="The 200T and 300T die casting machines are presented accurately for small-to-medium aluminum parts. This includes support for LED work light aluminum housings, heat sink housings, brackets, covers, and related compact parts that need post-machining and finishing."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Die casting machines
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">2</p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    1 x 200-ton machine and 1 x 300-ton machine
                  </p>
                </article>
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Secondary equipment
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    17
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    7 drilling machines, 7 tapping machines, and 3 polishing
                    and grinding machines
                  </p>
                </article>
              </div>

              <ul className="mt-8 space-y-4 text-base leading-8 text-[#e7dfcf]">
                {manufacturingPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="gallery" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Product gallery"
              title="Visual references for work lights, housings, and factory support"
              description="The gallery uses local project images to show the product direction, compact aluminum housing scope, and manufacturing support behind LED work light supply."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {galleryItems.map((item) => (
                <figure
                  key={item.title}
                  className="industrial-card group overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1280px) 34rem, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  </div>
                  <figcaption className="p-6">
                    <p className="text-xl font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[#cac1b2]">
                      {item.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Industries served"
              title="Buyer segments aligned with LED work light wholesale and OEM supply"
              description="This page is positioned for buyers needing LED work lights supplier support with compact aluminum housing capability, export-ready communication, and realistic factory scope."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {industriesServed.map((industry) => (
                <article key={industry.title} className="industrial-card p-6">
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

        <section id="rfq" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="RFQ requirements"
              title="Send the details needed for accurate LED work light quotation"
              description="For faster review, buyers should send the lighting, housing, quantity, finish, branding, and market details that define the LED work light project clearly."
            />

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
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="gold-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
                <div>
                  <p className="section-kicker">Final inquiry CTA</p>
                  <h2 className="section-heading mt-4 text-3xl text-[#120f08] sm:text-4xl">
                    Send your LED work light or aluminum housing inquiry
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#2d2417] sm:text-lg">
                    HSX reviews OEM LED work lights, off-road LED work lights,
                    truck LED work lights, machinery work lights, and related
                    compact aluminum housing projects for global buyers and
                    wholesale programs.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="rounded-full bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Email Your RFQ
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
                        src={ledWorkLight}
                        alt="LED work light ready for OEM quotation and wholesale supply review"
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
                          Send photos, drawings, wattage requirements, finish
                          details, packaging notes, and target quantity for a
                          faster quotation review.
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
                          href={`mailto:${contactDetails.email}`}
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
              LED work lights and aluminum light housing supplier for global
              wholesalers, importers, distributors, off-road accessory brands,
              truck accessory suppliers, machinery suppliers, and OEM buyers.
            </p>
          </div>

          <div className="text-sm leading-7 text-[#b7ae9e]">
            <p>
              <span className="text-white/90">Email:</span>{" "}
              <a
                href={`mailto:${contactDetails.email}`}
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
            <p>LED work light and aluminum housing supply for OEM buyers</p>
            <p>Small-to-medium aluminum die casting scope: 200T and 300T</p>
            <p className="mt-2">© {currentYear} HSX DIECASTING. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
