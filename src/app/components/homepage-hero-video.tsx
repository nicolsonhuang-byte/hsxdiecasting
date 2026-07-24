"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import aboutWorkshop from "../../../public/images/about-hsx-aluminum-die-casting-workshop.jpg";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", callback);

  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionPreference() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getServerReducedMotionPreference() {
  return true;
}

export function HomepageHeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionPreference,
    getServerReducedMotionPreference,
  );
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => {
        setIsNearViewport(true);
        setHasEnteredViewport(true);
      });

      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isNear = entry.isIntersecting;
        setIsNearViewport(isNear);

        if (isNear) {
          setHasEnteredViewport(true);
        }
      },
      {
        rootMargin: "180px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;

    if (prefersReducedMotion || !isNearViewport) {
      video.pause();
      return;
    }

    void video.play().catch(() => {
      setVideoFailed(true);
    });
  }, [hasEnteredViewport, isNearViewport, prefersReducedMotion]);

  const shouldRenderVideo =
    hasEnteredViewport && !prefersReducedMotion && !videoFailed;

  return (
    <div
      ref={containerRef}
      className="relative aspect-video overflow-hidden border border-[#d5ae67]/35 bg-black"
    >
      <Image
        src={aboutWorkshop}
        alt=""
        aria-hidden="true"
        fill
        preload
        sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 46vw, 100vw"
        className="object-cover object-[center_54%]"
      />

      {shouldRenderVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="metadata"
          poster={aboutWorkshop.src}
          aria-hidden="true"
          tabIndex={-1}
          onLoadedData={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/hsx-mold-setup-hero.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
