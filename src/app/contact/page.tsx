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

type ContactCard = {
  title: string;
  value: string;
  href?: string;
  note: string;
};

const pageTitle =
  "Contact | Aluminum Die Casting RFQ & OEM Aluminum Die Casting Quotation | HSX DIECASTING";

const pageDescription =
  "Contact HSX DIECASTING for aluminum die casting RFQ, OEM aluminum die casting quotation, LED work lights supplier contact, and China aluminum die casting factory contact support.";

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
        url: "/images/hero-factory-200t-300t.png",
        alt: "HSX DIECASTING contact and RFQ support for aluminum die casting parts and LED lighting products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/hero-factory-200t-300t.png"],
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
    label: "Factory Scope",
    value: "200T + 300T",
    note: "Small-to-medium aluminum die casting parts and compact aluminum housings only",
  },
  {
    label: "Product Mix",
    value: "Parts + LED Lights",
    note: "OEM aluminum parts, automotive LED lights, motorcycle LED lights, LED work lights, and decorative brake caliper covers",
  },
  {
    label: "RFQ Flow",
    value: "Drawings to Shipment",
    note: "Engineering review, quotation, sample confirmation, production, finishing, packaging, and export delivery support",
  },
];

const contactCards: ContactCard[] = [
  {
    title: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    note: "Best for drawings, samples, RFQ files, and detailed OEM project requirements.",
  },
  {
    title: "WhatsApp / Phone",
    value: contactDetails.phone,
    href: contactDetails.whatsappHref,
    note: "Fast contact path for quotation follow-up, buyer communication, and project discussion.",
  },
  {
    title: "WeChat",
    value: contactDetails.wechat,
    note: "Direct communication option for buyers coordinating RFQs, samples, and OEM project details.",
  },
  {
    title: "Factory Address",
    value: contactDetails.address,
    note: "Foshan Huashunxiang Hardware Products Co., Ltd. in Foshan, Guangdong, China.",
  },
];

const rfqChecklist = [
  "Product drawings or samples",
  "Product photos",
  "Material requirements",
  "Quantity",
  "Surface finish",
  "Packaging requirements",
  "Target market",
  "Logo / branding needs",
  "Delivery expectations",
];

const processSteps = [
  "Send drawings / samples",
  "Engineering review",
  "Quotation",
  "Mold development",
  "Sample confirmation",
  "Mass production",
  "Surface finishing",
  "Packaging and shipment",
];

const capabilities = [
  "2 aluminum die casting machines: 1 x 200T and 1 x 300T",
  "7 multi-axis drilling machines",
  "7 multi-axis tapping machines",
  "3 polishing and grinding machines",
  "Aluminum anodizing, powder coating, and spray painting support",
];

const scopeNotes: InfoCard[] = [
  {
    title: "OEM Small-to-Medium Aluminum Parts",
    description:
      "The aluminum die casting scope stays limited to compact housings, brackets, covers, shells, end caps, and other small-to-medium parts suitable for 200T and 300T machines.",
  },
  {
    title: "Lighting Product Supply",
    description:
      "HSX supplies automotive LED lights, motorcycle LED lights, LED work lights, and related aluminum light housings for global buyers.",
  },
  {
    title: "Decorative Cover Accuracy",
    description:
      "Brake caliper covers are decorative non-load-bearing appearance covers only and are not described as structural braking parts.",
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
  const currentYear = new Date().getFullYear();
  const fieldClass =
    "mt-3 w-full rounded-2xl border border-[#c7a25b]/20 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#948a79] focus:border-[#e4c88f]/55";
  const selectClass =
    "mt-3 w-full rounded-2xl border border-[#c7a25b]/20 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#e4c88f]/55";

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
              href="#rfq-form"
              className="flex items-start gap-3 transition-colors hover:text-white"
            >
              <span className="rounded-full border border-[#c7a25b]/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e7ca8e]">
                Address
              </span>
              <span>{contactDetails.address}</span>
            </a>
          </div>
          <a href="#rfq-form" className="gold-button w-full text-center sm:w-auto">
            Start RFQ
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
              Foshan Huashunxiang Hardware Products Co., Ltd. supplies OEM
              small-to-medium aluminum die casting parts, automotive LED
              lights, motorcycle LED lights, LED work lights, and decorative
              brake caliper covers for global wholesalers, importers,
              distributors, aftermarket brands, and OEM buyers.
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
              href="/capabilities"
              className="transition-colors hover:text-white"
            >
              Capabilities
            </Link>
            <a
              href="#contact-cards"
              className="transition-colors hover:text-white"
            >
              Contact
            </a>
            <a
              href="#rfq-form"
              className="transition-colors hover:text-white"
            >
              RFQ Form
            </a>
            <a
              href="#capability"
              className="transition-colors hover:text-white"
            >
              Capability
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(199,162,91,0.14),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
          <div className="container-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:py-24">
            <div className="motion-rise">
              <p className="section-kicker">Contact / Get a Quote</p>
              <h1 className="section-heading mt-6 text-4xl leading-none text-white sm:text-5xl xl:text-6xl">
                Send Your RFQ or Drawings
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4cdc0]">
                Contact us for OEM aluminum die casting parts, LED work lights,
                automotive LED lights, motorcycle LED lights, and decorative
                brake caliper covers. We review drawings, samples, photos, and
                RFQ details for global wholesalers, importers, distributors,
                aftermarket brands, and OEM buyers.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#c7beaf]">
                The aluminum die casting scope stays focused on
                small-to-medium parts suitable for 200T and 300T machines,
                including compact housings, brackets, covers, shells, and
                related aluminum lighting components.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={contactDetails.whatsappHref}
                  className="gold-button text-center"
                >
                  Contact on WhatsApp
                </a>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="outline-button text-center"
                >
                  Send Email
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
                      alt="HSX factory environment supporting OEM RFQs and compact aluminum part manufacturing"
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
                          decorative brake caliper covers.
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

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {contactCards.map((card) => (
                <article key={card.title} className="industrial-card p-6">
                  <p className="section-kicker">{card.title}</p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="mt-4 block text-xl font-semibold text-white transition-colors hover:text-[#efcf8d]"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-4 text-xl font-semibold text-white">
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
                description="The strongest RFQ starts with the buyer’s part files, quantity plan, finish expectations, branding notes, and delivery requirements."
              />

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

        <section id="rfq-form" className="border-b border-white/8 py-16 lg:py-24">
          <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="RFQ form UI"
                title="Professional frontend-only quotation form layout"
                description="This form layout is prepared for buyer convenience only at this stage. You can also send drawings, photos, or samples directly by email or WhatsApp."
              />

              <div className="industrial-card gold-frame mt-10 overflow-hidden p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={ledWorkLight}
                    alt="LED work light inquiry support and buyer RFQ preparation"
                    fill
                    sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                    <p className="section-kicker">Direct file sharing</p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      You can also send drawings, photos, or samples directly
                      by email or WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="industrial-card mt-6 p-6">
                <p className="section-kicker">Important note</p>
                <p className="mt-4 text-sm leading-8 text-[#e9e1d3]">
                  This RFQ form is frontend-only for now. No backend or email
                  sending logic has been added yet.
                </p>
              </div>
            </div>

            <div className="industrial-card p-6 sm:p-8">
              <form className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm font-medium text-[#f2eadb]">
                    Name
                    <input
                      type="text"
                      placeholder="Your name"
                      className={fieldClass}
                    />
                  </label>
                  <label className="text-sm font-medium text-[#f2eadb]">
                    Company
                    <input
                      type="text"
                      placeholder="Company name"
                      className={fieldClass}
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm font-medium text-[#f2eadb]">
                    Email
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className={fieldClass}
                    />
                  </label>
                  <label className="text-sm font-medium text-[#f2eadb]">
                    WhatsApp / Phone
                    <input
                      type="text"
                      placeholder="+86..."
                      className={fieldClass}
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm font-medium text-[#f2eadb]">
                    Country
                    <input
                      type="text"
                      placeholder="Your country"
                      className={fieldClass}
                    />
                  </label>
                  <label className="text-sm font-medium text-[#f2eadb]">
                    Product category
                    <select className={selectClass} defaultValue="">
                      <option value="" disabled>
                        Select a category
                      </option>
                      <option>OEM Aluminum Die Casting Parts</option>
                      <option>Automotive LED Lights</option>
                      <option>Motorcycle LED Lights</option>
                      <option>LED Work Lights</option>
                      <option>Decorative Brake Caliper Covers</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm font-medium text-[#f2eadb]">
                    Quantity
                    <input
                      type="text"
                      placeholder="Estimated order quantity"
                      className={fieldClass}
                    />
                  </label>
                  <label className="text-sm font-medium text-[#f2eadb]">
                    Surface finish
                    <select className={selectClass} defaultValue="">
                      <option value="" disabled>
                        Select a finish
                      </option>
                      <option>Anodizing</option>
                      <option>Powder Coating</option>
                      <option>Spray Painting</option>
                      <option>Polishing</option>
                      <option>Grinding Preparation</option>
                    </select>
                  </label>
                </div>

                <label className="text-sm font-medium text-[#f2eadb]">
                  Message
                  <textarea
                    rows={6}
                    placeholder="Share your project details, product scope, target market, branding requirements, and delivery expectations."
                    className={fieldClass}
                  />
                </label>

                <label className="text-sm font-medium text-[#f2eadb]">
                  File upload placeholder for drawings or photos
                  <div className="mt-3 rounded-[1.5rem] border border-dashed border-[#c7a25b]/35 bg-black/30 p-5">
                    <input
                      type="file"
                      multiple
                      className="block w-full text-sm text-[#f2eadb] file:mr-4 file:rounded-full file:border-0 file:bg-[#d7b067] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#140f08]"
                    />
                    <p className="mt-4 text-sm leading-7 text-[#bfb6a8]">
                      Placeholder UI only. You can also send drawings, photos,
                      or samples directly by email or WhatsApp.
                    </p>
                  </div>
                </label>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button type="button" className="gold-button text-center">
                    Prepare RFQ Details
                  </button>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="outline-button text-center"
                  >
                    Send by Email Instead
                  </a>
                </div>
              </form>
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
              description="The quotation and production workflow is organized around clear project inputs, engineering review, sample confirmation, production, finishing, and export packing."
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
                  src={factoryCapabilities}
                  alt="Factory capability reminder for compact aluminum parts, drilling, tapping, polishing, and finishing support"
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
                description="The factory supports small-to-medium aluminum die casting parts and related lighting housings with post-machining and finishing coordination."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="metric-pill">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#e8ce97]">
                    Die casting machines
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">2</p>
                  <p className="mt-3 text-sm leading-7 text-[#c4bbaa]">
                    200T and 300T aluminum die casting machines
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
                    Contact us for quotation, drawings review, and OEM project support
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#2d2417] sm:text-lg">
                    Global wholesalers, importers, distributors, aftermarket
                    brands, and OEM buyers can send RFQs for compact aluminum
                    parts, LED work lights, automotive LED lights, motorcycle
                    LED lights, and decorative brake caliper covers.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={contactDetails.whatsappHref}
                      className="rounded-full bg-[#120f08] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f2e6] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      WhatsApp Contact
                    </a>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="rounded-full border border-[#2b2216]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#22190d] transition-colors hover:bg-[#120f08] hover:text-[#f8f2e6]"
                    >
                      Send Email
                    </a>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="overflow-hidden rounded-[1.5rem] border border-[#2b2216]/15 bg-[#120f08] p-3 shadow-[0_18px_48px_rgba(18,15,8,0.22)]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                      <Image
                        src={factoryCapabilities}
                        alt="Factory contact and quotation support for aluminum die casting and LED lighting projects"
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
              Foshan Huashunxiang Hardware Products Co., Ltd.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#bbb2a3]">
              OEM small-to-medium aluminum die casting parts and LED lighting
              supplier for global wholesalers, importers, distributors,
              aftermarket brands, and OEM buyers.
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
