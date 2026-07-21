import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../components/site-navigation";

const pageTitle =
  "About HSX Die Casting | Aluminum Die Casting Factory in China";

const pageDescription =
  "Learn about HSX Die Casting, an aluminum die casting workshop in China that started production in 2009 and was officially registered in 2017, supporting small-to-medium OEM project review, secondary operations, finishing coordination, QC, and packing.";

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
        url: "/images/about-hsx-aluminum-die-casting-workshop.jpg",
        alt: "HSX aluminum die casting workshop in Foshan China",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/about-hsx-aluminum-die-casting-workshop.jpg"],
  },
};

const heroBadges = [
  "Production since 2009",
  "Registered in 2017",
  "Factory-direct project review",
];

const profileCards = [
  {
    title: "Factory Background",
    description:
      "HSX started aluminum die casting production in 2009 and was officially registered in 2017. The factory focuses on small-to-medium OEM aluminum die casting projects, including housings, covers, brackets, light housings, hardware parts, and appearance-related aluminum components.",
  },
  {
    title: "Direct Factory Communication",
    description:
      "HSX reviews drawings, samples, quantities, machining needs, finishing expectations, and packing requirements before quotation. This helps buyers reduce misunderstanding before tooling or production starts.",
  },
  {
    title: "Project Review and Production Support",
    description:
      "In-house operations include die casting, trimming, deburring, drilling, tapping, polishing, powder coating, spray painting, QC, and packing. CNC machining and anodizing can be coordinated through partner-supported resources when required by the project.",
  },
];

const buyerInputs = [
  "2D drawings or 3D files",
  "Sample photos or existing part photos",
  "Quantity and material requirements",
  "Tolerance, drilling, tapping, or machining needs",
  "Surface finishing and packing requirements",
  "Application or target market information",
];

export default function AboutPage() {
  return (
    <div className="relative min-w-0">
      <SiteHeader />
      <main style={{ background: "#050505", color: "#fff", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "56px 24px" }}>
        <section>
          <p
            style={{
              margin: 0,
              color: "#e8bf71",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
            }}
          >
            ABOUT HSX
          </p>
          <h1
            style={{
              margin: "22px 0 0",
              maxWidth: "860px",
              color: "#fff",
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 0.95,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            About HSX Die Casting
          </h1>
          <p
            style={{
              margin: "24px 0 0",
              maxWidth: "760px",
              color: "#efcf8d",
              fontSize: "24px",
              lineHeight: 1.45,
              fontWeight: 700,
            }}
          >
            Your Aluminum Die Casting Workshop in China
          </p>
          <p
            style={{
              margin: "22px 0 0",
              maxWidth: "820px",
              color: "#d4cdc0",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            HSX started aluminum die casting production in 2009 and was
            officially registered in 2017. We support overseas buyers with
            factory-direct project review for small-to-medium OEM aluminum die
            casting parts, secondary operations, finishing coordination, QC, and
            packing.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {heroBadges.map((badge) => (
              <span
                key={badge}
                style={{
                  display: "inline-flex",
                  padding: "8px 14px",
                  border: "1px solid rgba(232,191,113,0.35)",
                  borderRadius: "999px",
                  background: "rgba(232,191,113,0.08)",
                  color: "#efe2c6",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginTop: "28px",
            }}
          >
            <Link
              href="/b2b-oem-project-review"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 22px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #d7b067 0%, #f0d9a4 100%)",
                color: "#17120a",
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              Request Project Review
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 22px",
                border: "1px solid rgba(237,210,154,0.26)",
                borderRadius: "999px",
                color: "#f2e4c8",
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              Contact HSX
            </Link>
          </div>

          <div
            style={{
              marginTop: "36px",
              padding: "10px",
              border: "1px solid rgba(232,191,113,0.25)",
              borderRadius: "28px",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <Image
              src="/images/about-hsx-aluminum-die-casting-workshop.jpg"
              alt="HSX aluminum die casting workshop in Foshan China"
              width={1200}
              height={900}
              sizes="(min-width: 1180px) 1130px, 100vw"
              style={{
                width: "100%",
                maxHeight: "540px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "24px",
                display: "block",
              }}
            />
          </div>
        </section>

        <section style={{ marginTop: "64px" }}>
          <p
            style={{
              margin: 0,
              color: "#e8bf71",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
            }}
          >
            COMPANY PROFILE
          </p>
          <h2
            style={{
              margin: "14px 0 0",
              color: "#fff",
              fontSize: "36px",
              lineHeight: 1.15,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Company Profile
          </h2>
          <p
            style={{
              margin: "18px 0 0",
              maxWidth: "760px",
              color: "#c9c1b2",
              fontSize: "17px",
              lineHeight: 1.75,
            }}
          >
            HSX supports overseas buyers who need practical aluminum die casting
            project review before tooling, production, finishing, and packing.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginTop: "28px",
            }}
          >
            {profileCards.map((card) => (
              <article
                key={card.title}
                style={{
                  padding: "24px",
                  borderRadius: "22px",
                  border: "1px solid rgba(232,191,113,0.22)",
                  background: "rgba(255,255,255,0.035)",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    color: "#fff",
                    fontSize: "22px",
                    lineHeight: 1.25,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    margin: "14px 0 0",
                    color: "#cfc6b6",
                    fontSize: "15px",
                    lineHeight: 1.75,
                  }}
                >
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginTop: "64px" }}>
          <p
            style={{
              margin: 0,
              color: "#e8bf71",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
            }}
          >
            PROJECT REVIEW INPUT
          </p>
          <h2
            style={{
              margin: "14px 0 0",
              color: "#fff",
              fontSize: "36px",
              lineHeight: 1.15,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            What Buyers Can Send for Project Review
          </h2>
          <p
            style={{
              margin: "18px 0 0",
              maxWidth: "780px",
              color: "#c9c1b2",
              fontSize: "17px",
              lineHeight: 1.75,
            }}
          >
            Clear RFQ details help HSX review whether the part fits aluminum die
            casting, secondary operations, finishing coordination, QC, and
            packing before quotation.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginTop: "28px",
            }}
          >
            {buyerInputs.map((item) => (
              <div
                key={item}
                style={{
                  padding: "16px 18px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.035)",
                  color: "#efe7d9",
                  fontSize: "15px",
                  fontWeight: 700,
                  lineHeight: 1.5,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            marginTop: "64px",
            padding: "32px",
            borderRadius: "28px",
            background: "linear-gradient(135deg, #d8ad55, #f3d99a)",
            color: "#111",
          }}
        >
          <h2
            style={{
              margin: 0,
              maxWidth: "780px",
              fontSize: "34px",
              lineHeight: 1.15,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Send Your Aluminum Die Casting Project for Review
          </h2>
          <p
            style={{
              margin: "18px 0 0",
              maxWidth: "780px",
              color: "#2d2417",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            Share drawings, sample photos, quantity, finishing expectations, and
            application details so HSX can review whether the project fits
            aluminum die casting and related secondary operations.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginTop: "28px",
            }}
          >
            <Link
              href="/b2b-oem-project-review"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 22px",
                borderRadius: "999px",
                background: "#120f08",
                color: "#f8f2e6",
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              Request Project Review
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 22px",
                border: "1px solid rgba(18,15,8,0.28)",
                borderRadius: "999px",
                color: "#17120a",
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              Contact HSX
            </Link>
          </div>
        </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
