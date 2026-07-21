import Link from "next/link";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/b2b-oem-project-review", label: "Project Review" },
  { href: "/contact", label: "Contact" },
];

const emailHref =
  "mailto:nicolson@hsxdiecasting.com?subject=OEM%20Aluminum%20Die%20Casting%20Project%20Review";
const whatsappHref =
  "https://wa.me/8617666155283?text=Hello%20HSX%20DIECASTING%2C%20I%20would%20like%20to%20request%20an%20OEM%20aluminum%20die%20casting%20project%20review.";

export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-white/8 bg-[#050505]/88 backdrop-blur-xl">
      <div className="container-shell flex min-w-0 flex-col gap-4 py-4 sm:py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 max-w-2xl">
          <p className="section-kicker hidden sm:block">Foshan, Guangdong, China</p>
          <Link
            href="/"
            className="section-heading mt-3 block text-2xl text-white transition-colors hover:text-[#efcf8d] sm:text-3xl"
          >
            HSX DIECASTING
          </Link>
          <p className="mt-3 hidden text-sm leading-7 text-[#beb6a8] sm:block">
            Custom OEM aluminum die casting parts, selected secondary
            operations, project review, QC, and packing support for global B2B
            buyers.
          </p>
        </div>

        <nav
          aria-label="Primary"
          className="flex min-w-0 flex-wrap gap-x-5 gap-y-3 text-sm text-[#ddd2ba] lg:justify-end"
        >
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-black/80 py-10">
      <div className="container-shell grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:items-start">
        <div className="min-w-0">
          <p className="section-kicker">HSX DIECASTING</p>
          <p className="section-heading mt-3 text-2xl text-white">
            Foshan Huashunxiang Hardware Products Factory
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#bbb2a3]">
            Factory-direct project review for suitable small-to-medium custom
            OEM aluminum die casting parts. CNC machining and anodizing can be
            coordinated through partner-supported resources when required by
            the project.
          </p>
          <nav
            aria-label="Footer"
            className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#ddd2ba]"
          >
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="min-w-0 text-sm leading-7 text-[#b7ae9e]">
          <p>
            <span className="text-white/90">Email:</span>{" "}
            <a
              href={emailHref}
              className="break-all transition-colors hover:text-white"
            >
              nicolson@hsxdiecasting.com
            </a>
          </p>
          <p>
            <span className="text-white/90">WhatsApp / Phone:</span>{" "}
            <a
              href={whatsappHref}
              className="transition-colors hover:text-white"
            >
              +86 176 6615 5283
            </a>
          </p>
          <p>
            <span className="text-white/90">WeChat:</span> NicolsonHwang
          </p>
          <p className="mt-2">
            {"\u00A9"} {currentYear} HSX DIECASTING. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
