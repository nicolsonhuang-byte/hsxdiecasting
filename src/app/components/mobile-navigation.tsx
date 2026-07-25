"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./mobile-navigation.module.css";

type NavigationLink = {
  href: string;
  label: string;
  highlight?: boolean;
};

type MobileNavigationProps = {
  links: readonly NavigationLink[];
};

const mobileNavigationId = "primary-mobile-navigation";

function MobileNavigationMenu({ links }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !rootRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const desktopMedia = window.matchMedia("(width >= 64rem)");
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    desktopMedia.addEventListener("change", handleDesktopChange);

    return () => {
      desktopMedia.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div ref={rootRef} className={styles.mobileNavigation}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.menuButton}
        aria-expanded={isOpen}
        aria-controls={mobileNavigationId}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          className={styles.menuIcon}
        >
          {isOpen ? (
            <path d="M5 5l14 14M19 5L5 19" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
        <span>{isOpen ? "Close" : "Menu"}</span>
      </button>

      <nav
        id={mobileNavigationId}
        aria-label="Primary navigation"
        className={styles.mobileMenu}
        hidden={!isOpen}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.mobileMenuLink} ${
              link.highlight ? styles.highlightLink : ""
            }`}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function MobileNavigation({ links }: MobileNavigationProps) {
  const pathname = usePathname();

  return <MobileNavigationMenu key={pathname} links={links} />;
}
