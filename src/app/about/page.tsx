import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../components/site-navigation";

import workshopHorizontal from "../../../public/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg";
import sprayPainting from "../../../public/images/hsx-factory/in-house-spray-painting-aluminum-parts.jpg";
import qualityInspection from "../../../public/images/hsx-factory/quality-inspection-finished-aluminum-parts.jpg";

const pageTitle =
  "About HSX | OEM Aluminum Die Casting Manufacturer in Foshan";

const pageDescription =
  "HSX is an OEM aluminum die casting manufacturer in Foshan, Guangdong, China. Production started in 2009, and the current operating entity was registered in 2017.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/about",
    images: [
      {
        url: "/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg",
        alt: "HSX aluminum die casting workshop in Foshan, Guangdong, China",
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
    "mailto:nicolson@hsxdiecasting.com?subject=OEM%20Aluminum%20Die%20Casting%20Project%20Review",
  phone: "+86 176 6615 5283",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20DIECASTING%2C%20I%20would%20like%20to%20discuss%20an%20OEM%20aluminum%20die%20casting%20project.",
  wechat: "NicolsonHwang",
};

const collaborationSteps = [
  {
    number: "01",
    title: "Understand the Part",
    description:
      "HSX begins by understanding the part, its intended supply stage, and the available project information.",
  },
  {
    number: "02",
    title: "Review Manufacturing Fit",
    description:
      "The factory reviews whether aluminum die casting and the required follow-up route are suitable for the project.",
  },
  {
    number: "03",
    title: "Define the Supply Scope",
    description:
      "The quotation is based on an agreed scope, which may end at the casting blank or continue through selected later operations, QC, and packing.",
  },
  {
    number: "04",
    title: "Keep Communication Direct",
    description:
      "OEM buyers communicate directly with HSX as technical questions, production details, and next steps are clarified.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-w-0 overflow-x-clip bg-[#070707] text-white">
      <SiteHeader />

      <main>
        <section
          aria-labelledby="about-hero-title"
          className="relative isolate overflow-hidden border-b border-white/10"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(218,177,97,0.16),transparent_34%),linear-gradient(135deg,#0b0b0b_0%,#050505_65%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-[8%] -z-10 w-px bg-gradient-to-b from-transparent via-[#d8b56e]/25 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-[18%] -z-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
          />

          <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-24">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ddb96f]">
                01 / Who HSX Is
              </p>
              <h1
                id="about-hero-title"
                className="mt-6 max-w-[760px] text-[clamp(2.7rem,6.2vw,6.4rem)] font-semibold uppercase leading-[0.9] tracking-[-0.045em] text-white"
              >
                OEM Aluminum Die Casting Manufacturer
              </h1>
              <p className="mt-7 max-w-[620px] text-lg leading-8 text-[#d2cabd] sm:text-xl">
                HSX is based in Foshan, Guangdong, China, working with OEM
                buyers on drawing-based aluminum die casting projects.
              </p>

              <div className="mt-10 grid max-w-[620px] gap-4 border-y border-white/10 py-5 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                    Factory location
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-white">
                    Foshan, Guangdong, China
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                    Manufacturing focus
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-white">
                    OEM Aluminum Die Casting
                  </p>
                </div>
              </div>

              <a
                href="#factory-evidence"
                className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e4c27d] transition hover:text-white"
              >
                See the factory
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <figure className="relative min-w-0">
              <div
                className="relative overflow-hidden border border-white/10 bg-white/5"
                style={{ aspectRatio: "16 / 11" }}
              >
                <Image
                  src={workshopHorizontal}
                  alt="HSX aluminum die casting workshop in Foshan, Guangdong, China"
                  fill
                  priority
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                  <figcaption className="max-w-[430px] text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-white/90">
                    HSX aluminum die casting workshop
                  </figcaption>
                  <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/55 sm:block">
                    Foshan
                  </span>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-[#d8b56e]/25"
              />
            </figure>
          </div>
        </section>

        <section
          aria-labelledby="company-facts-title"
          className="border-b border-white/10 bg-[#d6b064] text-[#11100d]"
        >
          <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-black/55">
                  02 / Company Facts
                </p>
                <h2
                  id="company-facts-title"
                  className="mt-4 max-w-[420px] text-3xl font-semibold uppercase leading-tight tracking-[-0.03em] sm:text-4xl"
                >
                  Two dates define the company record
                </h2>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <article className="border-l border-black/25 pl-5 sm:pl-7">
                  <p className="text-[clamp(4.5rem,11vw,9rem)] font-semibold leading-[0.78] tracking-[-0.07em]">
                    2009
                  </p>
                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-black/70">
                    Production since 2009
                  </p>
                </article>
                <article className="border-l border-black/25 pl-5 sm:pl-7">
                  <p className="text-[clamp(4.5rem,11vw,9rem)] font-semibold leading-[0.78] tracking-[-0.07em]">
                    2017
                  </p>
                  <p className="mt-6 max-w-[390px] text-sm font-bold uppercase leading-6 tracking-[0.16em] text-black/70">
                    Current operating entity registered in 2017
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          id="factory-evidence"
          aria-labelledby="factory-evidence-title"
          className="border-b border-white/10"
        >
          <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ddb96f]">
                  03 / Real Factory Evidence
                </p>
                <h2
                  id="factory-evidence-title"
                  className="mt-5 text-[clamp(2.3rem,5vw,5rem)] font-semibold uppercase leading-[0.94] tracking-[-0.045em]"
                >
                  Inside the HSX factory
                </h2>
              </div>
              <p className="max-w-[650px] text-base leading-8 text-[#bfb7aa] sm:text-lg">
                These views show the HSX workshop, an in-house spray painting
                scene, and finished-part inspection before packing.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              <figure
                className="group relative overflow-hidden bg-white/5 lg:col-span-2"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={workshopHorizontal}
                  alt="HSX aluminum die casting workshop in Foshan"
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.015]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e4c27d]">
                    Workshop floor
                  </p>
                  <p className="mt-2 max-w-[520px] text-lg font-medium text-white">
                    Aluminum die-cast parts inside the HSX workshop.
                  </p>
                </figcaption>
              </figure>

              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
                <figure
                  className="group relative overflow-hidden bg-white/5"
                  style={{ aspectRatio: "3 / 2" }}
                >
                  <Image
                    src={sprayPainting}
                    alt="In-house spray painting of aluminum parts at HSX"
                    fill
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e4c27d]">
                      In-house spray painting
                    </p>
                  </figcaption>
                </figure>

                <figure
                  className="group relative overflow-hidden bg-white/5"
                  style={{ aspectRatio: "3 / 2" }}
                >
                  <Image
                    src={qualityInspection}
                    alt="Quality inspection of finished aluminum parts at HSX"
                    fill
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e4c27d]">
                      Finished-part inspection
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="manufacturer-type-title"
          className="border-b border-white/10 bg-[#0b0b0b]"
        >
          <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ddb96f]">
                04 / What Kind of Manufacturer HSX Is
              </p>
              <h2
                id="manufacturer-type-title"
                className="mt-5 max-w-[650px] text-[clamp(2.35rem,5vw,5.2rem)] font-semibold uppercase leading-[0.94] tracking-[-0.045em]"
              >
                A drawing-led OEM manufacturing partner
              </h2>
              <p className="mt-7 max-w-[620px] text-base leading-8 text-[#c8c0b3] sm:text-lg">
                HSX reviews each project from the part itself rather than from a
                fixed product catalog. The factory uses 280T and 320T aluminum
                die casting machines for suitable OEM parts and confirms the
                manufacturing route according to the project.
              </p>
            </div>

            <div className="self-end border-t border-white/15">
              <dl>
                <div className="grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[180px_1fr]">
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                    Factory role
                  </dt>
                  <dd className="text-base leading-7 text-white">
                    OEM aluminum die casting manufacturer
                  </dd>
                </div>
                <div className="grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[180px_1fr]">
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                    In-house focus
                  </dt>
                  <dd className="text-base leading-7 text-white">
                    Aluminum die casting and selected follow-up operations
                    matched to the agreed project scope.
                  </dd>
                </div>
                <div className="grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[180px_1fr]">
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                    Partner-supported
                  </dt>
                  <dd className="text-base leading-7 text-white">
                    CNC machining, anodizing, and electroplating can be
                    coordinated through partner-supported resources when
                    required by the project.
                  </dd>
                </div>
              </dl>

              <Link
                href="/capabilities"
                className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#e4c27d] transition hover:text-white"
              >
                View manufacturing capabilities
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="oem-collaboration-title"
          className="border-b border-white/10"
        >
          <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
            <div className="max-w-[920px]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ddb96f]">
                05 / How HSX Works With OEM Buyers
              </p>
              <h2
                id="oem-collaboration-title"
                className="mt-5 text-[clamp(2.35rem,5vw,5.2rem)] font-semibold uppercase leading-[0.94] tracking-[-0.045em]"
              >
                From part definition to an agreed supply scope
              </h2>
            </div>

            <div className="mt-14 grid gap-x-10 gap-y-0 border-t border-white/15 md:grid-cols-2">
              {collaborationSteps.map((step) => (
                <article
                  key={step.number}
                  className="grid grid-cols-[52px_1fr] gap-4 border-b border-white/15 py-7 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-9"
                >
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-[#d9b46b] sm:text-3xl">
                    {step.number}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold uppercase tracking-[0.04em] text-white sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#bdb5a8] sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="buyer-contact-title"
          className="border-b border-white/10 bg-[#d8b56e] text-[#11100d]"
        >
          <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-black/55">
                06 / Who Buyers Communicate With
              </p>
              <h2
                id="buyer-contact-title"
                className="mt-5 text-[clamp(3.5rem,8vw,7.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.065em]"
              >
                Nicolson
              </h2>
              <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-black/60">
                Legal representative
              </p>
              <p className="mt-6 max-w-[570px] text-base leading-8 text-black/75 sm:text-lg">
                OEM buyers can contact Nicolson directly to begin a project
                discussion and clarify the next step with HSX.
              </p>
            </div>

            <dl className="self-end border-t border-black/25">
              <div className="grid gap-2 border-b border-black/25 py-5 sm:grid-cols-[130px_1fr] sm:items-center">
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-black/50">
                  Email
                </dt>
                <dd>
                  <a
                    href={contactDetails.emailHref}
                    className="break-all text-base font-semibold text-black underline decoration-black/30 underline-offset-4 transition hover:decoration-black"
                  >
                    {contactDetails.email}
                  </a>
                </dd>
              </div>
              <div className="grid gap-2 border-b border-black/25 py-5 sm:grid-cols-[130px_1fr] sm:items-center">
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-black/50">
                  WhatsApp / Phone
                </dt>
                <dd>
                  <a
                    href={contactDetails.whatsappHref}
                    className="text-base font-semibold text-black underline decoration-black/30 underline-offset-4 transition hover:decoration-black"
                  >
                    {contactDetails.phone}
                  </a>
                </dd>
              </div>
              <div className="grid gap-2 border-b border-black/25 py-5 sm:grid-cols-[130px_1fr] sm:items-center">
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-black/50">
                  WeChat
                </dt>
                <dd className="text-base font-semibold text-white">
                  {contactDetails.wechat}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          aria-labelledby="next-step-title"
          className="relative isolate overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_25%,rgba(216,181,110,0.15),transparent_30%),#070707]"
          />
          <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ddb96f]">
                07 / Next Step
              </p>
              <h2
                id="next-step-title"
                className="mt-5 max-w-[880px] text-[clamp(2.5rem,6vw,6rem)] font-semibold uppercase leading-[0.9] tracking-[-0.05em]"
              >
                Start with your drawing or project information
              </h2>
              <p className="mt-7 max-w-[700px] text-base leading-8 text-[#bfb7aa] sm:text-lg">
                Use Project Review to begin a drawing-based discussion, or
                contact HSX directly by email or WhatsApp.
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/b2b-oem-project-review"
                className="inline-flex min-h-12 items-center justify-center bg-[#d8b56e] px-6 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#11100d] transition hover:bg-[#efd397]"
              >
                Send Your Drawing
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center border border-white/20 px-6 text-center text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#d8b56e] hover:text-[#e4c27d]"
              >
                Contact HSX
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
