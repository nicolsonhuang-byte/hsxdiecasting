import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../components/site-navigation";

import batchPartsBeforeFinishing from "../../../public/images/hsx-factory/batch-aluminum-die-cast-parts-before-finishing.jpg";
import batchPartsBeforeTrimming from "../../../public/images/hsx-factory/batch-die-cast-parts-before-trimming.jpg";
import communicationHousing from "../../../public/images/hsx-factory/communication-equipment-aluminum-die-cast-housing.jpg";
import machineryPart from "../../../public/images/hsx-factory/machinery-accessory-aluminum-die-cast-part.jpg";
import oemHousing from "../../../public/images/hsx-factory/oem-aluminum-die-cast-housing.jpg";
import opticalModuleHousing from "../../../public/images/hsx-factory/optical-module-aluminum-die-cast-housing-a.jpg";
import stageLightHousing from "../../../public/images/hsx-factory/stage-light-aluminum-die-cast-housing.jpg";

type ProductFamily = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  href: string;
  directions: string[];
};

type RealPart = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

const pageTitle = "Products | Custom Aluminum Die-Cast Parts by Type | HSX";

const pageDescription =
  "Explore HSX product directions for OEM aluminum die casting, including lighting housings, enclosures, hardware, mechanical parts, and other drawing-based custom projects.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/products",
  },
  keywords: [
    "custom aluminum die cast parts",
    "OEM aluminum die casting products",
    "aluminum light housings",
    "aluminum die cast enclosures",
    "aluminum hardware parts",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/products",
    images: [
      {
        url: "/images/hsx-factory/batch-aluminum-die-cast-parts-before-finishing.jpg",
        alt: "Batch aluminum die-cast parts manufactured by HSX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      "/images/hsx-factory/batch-aluminum-die-cast-parts-before-finishing.jpg",
    ],
  },
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  emailHref:
    "mailto:nicolson@hsxdiecasting.com?subject=OEM%20Aluminum%20Die%20Casting%20Project%20Review&body=Hello%20HSX%20DIECASTING%2C%0A%0AI%20would%20like%20to%20discuss%20an%20OEM%20aluminum%20die%20casting%20project.%0A%0AI%20will%20attach%20drawings%2C%203D%20files%2C%20or%20sample%20photos%20where%20available.%0A%0ARegards%2C",
  phone: "+86 176 6615 5283",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20DIECASTING%2C%20I%20would%20like%20to%20discuss%20an%20OEM%20aluminum%20die%20casting%20project.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

const productFamilies: ProductFamily[] = [
  {
    title: "Lighting Housings",
    description:
      "Aluminum die-cast lamp bodies, housings, heat-dissipation shells, and related structural parts for suitable lighting projects.",
    image: stageLightHousing,
    alt: "Aluminum die-cast stage light housing manufactured by HSX",
    href: "/products/aluminum-light-housings",
    directions: [
      "Lamp bodies and die-cast exterior housings",
      "Heat-dissipation housings and shells",
      "Related aluminum die-cast lighting structures",
    ],
  },
  {
    title: "Enclosures / Housings",
    description:
      "Non-lighting housings that protect, contain, or support equipment and internal components.",
    image: oemHousing,
    alt: "OEM aluminum die-cast enclosure manufactured by HSX",
    href: "/products/oem-aluminum-die-casting-parts",
    directions: [
      "Communication and optical-module housings",
      "Equipment enclosures and protective shells",
      "Other non-lighting containment housings",
    ],
  },
  {
    title: "Hardware & Mechanical Parts",
    description:
      "Drawing-based aluminum die-cast parts used for mounting, support, connection, or other mechanical functions.",
    image: machineryPart,
    alt: "Aluminum die-cast machinery part manufactured by HSX",
    href: "/products/oem-aluminum-die-casting-parts",
    directions: [
      "Machinery and mounting parts",
      "Supports, connectors, and brackets",
      "Door, window, and other functional hardware",
    ],
  },
];

const realParts: RealPart[] = [
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
    image: communicationHousing,
    alt: "Communication equipment aluminum die-cast housing manufactured by HSX",
  },
  {
    title: "Batch Aluminum Die-Cast Parts",
    description:
      "A batch of aluminum die-cast parts photographed at HSX before trimming.",
    image: batchPartsBeforeTrimming,
    alt: "Batch aluminum die-cast parts before trimming at HSX",
  },
  {
    title: "Machinery Part",
    description:
      "Aluminum die-cast machinery part manufactured by HSX.",
    image: machineryPart,
    alt: "Aluminum die-cast machinery part manufactured by HSX",
  },
];

const productFaqs = [
  {
    question: "What if my part does not fit one of the three product families?",
    answer:
      "Send the drawing, sample photo, or basic part requirements for review. Other suitable OEM aluminum die-casting projects can be evaluated without creating another product category.",
  },
  {
    question: "How are lighting housings different from other enclosures?",
    answer:
      "Lighting housings are grouped by their lighting application and related housing or heat-dissipation structure. Non-lighting protective, containment, and equipment housings are grouped under Enclosures / Housings.",
  },
  {
    question: "Must a mechanical part match the examples shown here?",
    answer:
      "No. The examples show product directions only. HSX can review different mounting parts, supports, connectors, and mechanical components from customer drawings or samples.",
  },
  {
    question: "Can HSX review OEM parts with different shapes?",
    answer:
      "Yes. Drawing-based parts with different structures can be reviewed for aluminum die-casting suitability before quotation.",
  },
  {
    question: "What should a buyer do first?",
    answer:
      "Choose the closest product direction, then send the drawing, 3D file, sample photo, or clear part requirements through the Project Review page.",
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

export default function ProductsPage() {
  return (
    <div className="relative overflow-x-clip">
      <div className="border-b border-white/8 bg-black/85">
        <div className="container-shell flex flex-col gap-3 py-3 text-sm text-[#d8ccb2] lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 space-y-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href={contactDetails.emailHref}
                className="flex min-w-0 items-center gap-3 transition-colors hover:text-white"
              >
                <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                  Email
                </span>
                <span className="break-all">{contactDetails.email}</span>
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
            <div className="flex min-w-0 items-start gap-3">
              <span className="shrink-0 rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                Address
              </span>
              <span className="min-w-0 break-words">{contactDetails.address}</span>
            </div>
          </div>
          <Link
            href="/b2b-oem-project-review"
            className="gold-button w-full text-center sm:w-auto"
          >
            Send Your Drawing
          </Link>
        </div>
      </div>

      <SiteHeader />

      <main id="top">
        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.15),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
          <div className="container-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:items-center lg:py-24">
            <div className="min-w-0 motion-rise">
              <p className="section-kicker">OEM aluminum die casting</p>
              <h1 className="section-heading mt-6 max-w-4xl text-4xl leading-[1.02] text-white sm:text-5xl xl:text-6xl">
                Custom Aluminum Die-Cast Parts by Product Type
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                Use the product directions below to find the closest match for
                your OEM aluminum die-casting project. If the part does not fit
                a listed family, send the drawing or sample information for
                project review.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/b2b-oem-project-review"
                  className="gold-button text-center"
                >
                  Send Your Drawing
                </Link>
                <Link
                  href="/products/oem-aluminum-die-casting-parts"
                  className="outline-button text-center"
                >
                  View OEM Die Casting Fit
                </Link>
              </div>
              <div className="mt-10 grid gap-3 border-t border-white/10 pt-6 text-sm leading-7 text-[#c8c0b3] sm:grid-cols-3">
                <p>Lighting housings and related structures</p>
                <p>Equipment enclosures and protective housings</p>
                <p>Hardware, mounting, and mechanical parts</p>
              </div>
            </div>

            <div className="min-w-0 motion-rise-delay">
              <div className="gold-frame relative overflow-hidden border border-white/10 bg-[#0b0b0b] p-3">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={batchPartsBeforeFinishing}
                    alt="Batch aluminum die-cast parts manufactured by HSX"
                    fill
                    preload
                    sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 border-l-2 border-[#d5ae67] bg-black/70 px-5 py-4 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#efcf8d]">
                      Product navigation
                    </p>
                    <p className="mt-2 text-base font-semibold leading-7 text-white">
                      Find the nearest product direction, then confirm project
                      fit from the actual drawing or sample.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="core-product-families"
          className="border-b border-white/8 py-16 lg:py-24"
        >
          <div className="container-shell">
            <SectionHeading
              eyebrow="Core product families"
              title="Three product directions for aluminum die-cast parts"
              description="Each part is assigned to one primary family so buyers can identify the nearest product direction without seeing the same component repeated across multiple categories."
            />

            <div className="mt-12 border-y border-white/10">
              {productFamilies.map((family, index) => (
                <article
                  key={family.title}
                  className="grid gap-7 border-b border-white/10 py-9 last:border-b-0 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center lg:gap-12"
                >
                  <Link
                    href={family.href}
                    aria-label={`View ${family.title}`}
                    className="group relative block min-w-0 overflow-hidden border border-white/10 bg-[#0b0b0b]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={family.image}
                        alt={family.alt}
                        fill
                        sizes="(min-width: 1024px) 34vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    </div>
                  </Link>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8b671]">
                      Product family {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                      <Link
                        href={family.href}
                        className="transition-colors hover:text-[#efcf8d]"
                      >
                        {family.title}
                      </Link>
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-[#c9c1b2]">
                      {family.description}
                    </p>
                    <ul className="mt-6 grid gap-3 text-sm leading-7 text-[#f0e8d9] sm:grid-cols-2">
                      {family.directions.map((direction) => (
                        <li key={direction} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#d5ae67]" />
                          <span>{direction}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={family.href}
                      className="mt-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#efcf8d] transition-colors hover:text-white"
                    >
                      View Product Direction
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[#0a0a0a] py-14 lg:py-18">
          <div className="container-shell">
            <div className="gold-panel grid gap-8 p-7 sm:p-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:p-11">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6d5121]">
                  Other custom OEM project entry
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#151006] sm:text-4xl">
                  Do not see your part type here?
                </h2>
                <p className="mt-4 text-base leading-8 text-[#332817]">
                  Send the drawing, sample photo, or basic part requirements.
                  HSX will review whether the project is suitable for aluminum
                  die casting instead of forcing it into an unrelated product
                  category.
                </p>
              </div>
              <Link
                href="/b2b-oem-project-review"
                className="rounded-full bg-[#120f08] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Send Your Drawing
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Representative real parts"
              title="Selected parts manufactured by HSX"
              description="Selected aluminum die-cast parts manufactured by HSX across different OEM projects."
            />

            <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {realParts.map((part) => (
                <article key={part.title} className="min-w-0 bg-[#080808]">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "16 / 11" }}
                  >
                    <Image
                      src={part.image}
                      alt={part.alt}
                      fill
                      sizes="(min-width: 1024px) 40rem, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  </div>
                  <div className="border-t border-white/10 p-6 sm:p-7">
                    <h2 className="text-xl font-semibold text-white">
                      {part.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[#c9c1b2]">
                      {part.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(199,162,91,0.11),transparent_30%),#080808] py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <SectionHeading
              eyebrow="Manufacturing fit summary"
              title="When a product direction is ready for project review"
              description="The product family is only the starting point. Further review is appropriate when the buyer has a drawing, sample, or clear part requirements for an aluminum die-cast component."
            />

            <div className="border-y border-white/10 py-7">
              <ul className="space-y-5 text-base leading-8 text-[#e8dfcf]">
                <li className="flex gap-4">
                  <span className="mt-3 h-2 w-2 shrink-0 bg-[#d5ae67]" />
                  <span>A drawing, sample, or clear part requirement is available.</span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-3 h-2 w-2 shrink-0 bg-[#d5ae67]" />
                  <span>The project is for an aluminum die-cast part.</span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-3 h-2 w-2 shrink-0 bg-[#d5ae67]" />
                  <span>
                    Structure, quantity, required operations, and surface
                    requirements can be reviewed before quotation.
                  </span>
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link href="/capabilities" className="outline-button text-center">
                  View Manufacturing Capabilities
                </Link>
                <Link
                  href="/products/oem-aluminum-die-casting-parts"
                  className="outline-button text-center"
                >
                  Check OEM Project Fit
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Product-direction FAQ"
              title="Questions about choosing a product direction"
              description="These answers help buyers select the nearest product family before moving to manufacturing or project review details."
            />

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {productFaqs.map((faq) => (
                <details key={faq.question} className="group py-2">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-semibold leading-7 text-white">
                    <span>{faq.question}</span>
                    <span
                      aria-hidden
                      className="mt-1 text-[#d5ae67] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-4xl pb-6 text-sm leading-7 text-[#c9c1b2] sm:text-base sm:leading-8">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href="/capabilities" className="outline-button text-center">
                Manufacturing Details
              </Link>
              <Link
                href="/b2b-oem-project-review"
                className="outline-button text-center"
              >
                Project Review Details
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[#060606] py-14 lg:py-18">
          <div className="container-shell">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
              <div className="max-w-2xl">
                <p className="section-kicker">Additional product references</p>
                <h2 className="section-heading mt-4 text-3xl text-white sm:text-4xl">
                  Additional Products and Real Aluminum Die Casting Applications
                </h2>
                <p className="mt-5 text-base leading-8 text-[#c9c1b2]">
                  Browse selected lighting-related applications and decorative
                  appearance products connected to HSX aluminum die-casting
                  experience.
                </p>
              </div>

              <div className="border-y border-white/10">
                <div className="py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8b671]">
                    Lighting-related applications
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#bfb6a8]">
                    Reference pages related to aluminum housings and die-cast
                    structures used in lighting applications.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#f0e6d4]">
                    <Link href="/products/led-work-lights" className="hover:text-[#efcf8d]">
                      LED Work Lights
                    </Link>
                    <Link
                      href="/products/automotive-led-lights"
                      className="hover:text-[#efcf8d]"
                    >
                      Automotive LED Lights
                    </Link>
                    <Link
                      href="/products/motorcycle-led-lights"
                      className="hover:text-[#efcf8d]"
                    >
                      Motorcycle LED Lights
                    </Link>
                  </div>
                </div>

                <div className="border-t border-white/10 py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8b671]">
                    Decorative appearance application
                  </p>
                  <Link
                    href="/products/decorative-brake-caliper-covers"
                    className="mt-3 inline-block text-base font-semibold text-white transition-colors hover:text-[#efcf8d]"
                  >
                    Decorative Brake Caliper Covers
                  </Link>
                  <p className="mt-3 text-sm leading-7 text-[#bfb6a8]">
                    Decorative, appearance-focused, non-load-bearing, and
                    non-structural covers only. They are not functional braking
                    components.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container-shell">
            <div className="gold-panel grid gap-8 p-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:p-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6d5121]">
                  Start with the part
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#151006] sm:text-4xl">
                  Send Your Drawing for OEM Aluminum Die Casting Review
                </h2>
                <p className="mt-4 text-base leading-8 text-[#332817]">
                  Share the drawing, 3D file, sample photo, or clear part
                  requirements so HSX can review the nearest product direction
                  and project fit.
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#3a2c18]">
                  <a href={contactDetails.emailHref} className="hover:underline">
                    {contactDetails.email}
                  </a>
                  <a href={contactDetails.whatsappHref} className="hover:underline">
                    WhatsApp {contactDetails.phone}
                  </a>
                </div>
              </div>
              <Link
                href="/b2b-oem-project-review"
                className="rounded-full bg-[#120f08] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Send Your Drawing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
