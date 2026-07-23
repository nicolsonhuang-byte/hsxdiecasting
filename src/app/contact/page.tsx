import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../components/site-navigation";

import workshopHorizontal from "../../../public/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg";

const pageTitle =
  "Contact HSX DIECASTING | OEM Aluminum Die Casting Projects";

const pageDescription =
  "Contact HSX DIECASTING for OEM aluminum die casting project communication. Send drawings, 3D files, sample photos, or basic project information by email or WhatsApp.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/contact",
    images: [
      {
        url: "/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg",
        alt: "HSX aluminum die casting workshop in Foshan",
      },
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

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  emailHref:
    "mailto:nicolson@hsxdiecasting.com?subject=OEM%20Aluminum%20Die%20Casting%20Project",
  phone: "+86 176 6615 5283",
  phoneHref: "tel:+8617666155283",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20DIECASTING%2C%20I%20would%20like%20to%20discuss%20an%20OEM%20aluminum%20die%20casting%20project.",
  wechat: "NicolsonHwang",
  address:
    "Huayue Road, National Eco-Industrial Park, Danzao Town, Nanhai District, Foshan, Guangdong, China",
};

export default function ContactPage() {
  return (
    <div className="relative min-w-0 overflow-x-clip">
      <SiteHeader />

      <main>
        <section
          aria-labelledby="contact-hero-title"
          className="border-b border-white/10 bg-black"
        >
          <div className="container-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <p className="section-kicker">Contact HSX</p>
              <h1
                id="contact-hero-title"
                className="section-heading mt-6 text-5xl leading-none text-white sm:text-6xl lg:text-7xl"
              >
                Contact HSX
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-stone-200">
                Contact HSX directly for OEM aluminum die casting project
                communication.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-400 sm:text-lg">
                Drawings, 3D files, sample photos, or basic project information
                can be sent by Email or WhatsApp.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={contactDetails.emailHref}
                  className="gold-button text-center"
                >
                  Email
                </a>
                <a
                  href={contactDetails.whatsappHref}
                  className="outline-button text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <figure
              className="relative overflow-hidden border border-white/10 bg-stone-900"
              style={{ aspectRatio: "16 / 11" }}
            >
              <Image
                src={workshopHorizontal}
                alt="HSX aluminum die casting workshop in Foshan"
                fill
                preload
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-200">
                  Factory location
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  Foshan, Guangdong, China
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          aria-labelledby="direct-contact-title"
          className="border-b border-white/10 bg-stone-950"
        >
          <div className="container-shell py-16 sm:py-20 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="section-kicker">Direct Contact</p>
                <h2
                  id="direct-contact-title"
                  className="section-heading mt-5 text-4xl text-white sm:text-5xl"
                >
                  Contact methods
                </h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-stone-400 sm:text-lg">
                Use the channel that best fits your project communication.
              </p>
            </div>

            <dl className="mt-12 border-t border-white/15">
              <div className="grid gap-4 border-b border-white/15 py-7 md:grid-cols-3 md:items-center">
                <dt className="text-xs font-bold uppercase tracking-widest text-amber-200">
                  Email
                </dt>
                <dd className="md:col-span-2">
                  <a
                    href={contactDetails.emailHref}
                    className="break-all text-xl font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                  >
                    {contactDetails.email}
                  </a>
                </dd>
              </div>

              <div className="grid gap-4 border-b border-white/15 py-7 md:grid-cols-3 md:items-center">
                <dt className="text-xs font-bold uppercase tracking-widest text-amber-200">
                  WhatsApp / Phone
                </dt>
                <dd className="flex flex-col gap-4 md:col-span-2 lg:flex-row lg:items-center lg:justify-between">
                  <span className="text-xl font-semibold text-white">
                    {contactDetails.phone}
                  </span>
                  <span className="flex flex-wrap gap-5">
                    <a
                      href={contactDetails.whatsappHref}
                      className="text-sm font-bold uppercase tracking-widest text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                    >
                      Open WhatsApp
                    </a>
                    <a
                      href={contactDetails.phoneHref}
                      className="text-sm font-bold uppercase tracking-widest text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                    >
                      Call
                    </a>
                  </span>
                </dd>
              </div>

              <div className="grid gap-4 border-b border-white/15 py-7 md:grid-cols-3 md:items-center">
                <dt className="text-xs font-bold uppercase tracking-widest text-amber-200">
                  WeChat
                </dt>
                <dd className="text-xl font-semibold text-white md:col-span-2">
                  {contactDetails.wechat}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          aria-labelledby="contact-person-title"
          className="border-b border-black/15 bg-amber-200 text-black"
          style={{ backgroundColor: "#f0d58f", color: "#11100d" }}
        >
          <div className="container-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-end lg:py-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-black/60">
                Your Contact at HSX
              </p>
              <h2
                id="contact-person-title"
                className="mt-5 text-6xl font-semibold uppercase leading-none tracking-tight sm:text-7xl lg:text-8xl"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                  lineHeight: 0.82,
                  letterSpacing: "-0.065em",
                }}
              >
                Nicolson
              </h2>
              <p className="mt-7 text-sm font-bold uppercase tracking-widest text-black/65">
                Legal representative
              </p>
            </div>
            <p className="max-w-xl text-lg leading-9 text-black/75">
              OEM buyers can contact Nicolson directly for project
              communication.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="factory-location-title"
          className="bg-black"
        >
          <div className="container-shell grid gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="section-kicker">Factory Location</p>
              <h2
                id="factory-location-title"
                className="section-heading mt-5 text-4xl text-white sm:text-5xl"
              >
                Foshan, Guangdong, China
              </h2>
              <address className="mt-8 max-w-xl not-italic text-lg leading-9 text-stone-300">
                {contactDetails.address}
              </address>
            </div>

            <div className="border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="section-kicker">Send a Project</p>
              <h2 className="section-heading mt-5 text-4xl text-white sm:text-5xl">
                Start with the information you have
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-stone-400 sm:text-lg">
                Send your existing project information by Email or WhatsApp.
                Detailed review guidance is available on the Project Review
                page.
              </p>
              <Link
                href="/b2b-oem-project-review"
                className="gold-button mt-9 inline-flex"
              >
                View Project Review
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
