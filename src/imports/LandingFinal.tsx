import React, { useEffect, useRef, useState } from "react";
import BackgroundSection from "./landing/BackgroundSection";
import { NAV_WHITE_SCROLL_END, NAV_WHITE_SCROLL_START } from "./landing/constants";
import FooterSection from "./landing/FooterSection";
import HeroSection from "./landing/HeroSection";
import NavigationBar from "./landing/NavigationBar";
import type { LandingNavigationHandlers } from "./landing/types";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function findScrollParent(element: HTMLElement | null): HTMLElement | null {
  if (!element) {
    return null;
  }

  let current: HTMLElement | null = element.parentElement;
  while (current) {
    const styles = window.getComputedStyle(current);
    const isScrollable = /(auto|scroll|overlay)/.test(styles.overflowY);
    if (isScrollable && current.scrollHeight > current.clientHeight) {
      return current;
    }
    current = current.parentElement;
  }

  return null;
}

function getHeroCoverProgress(
  heroElement: HTMLElement | null,
  backgroundElement: HTMLElement | null,
) {
  if (!heroElement || !backgroundElement) {
    return 0;
  }

  const heroRect = heroElement.getBoundingClientRect();
  const backgroundRect = backgroundElement.getBoundingClientRect();
  const overlapDistance = heroRect.bottom - backgroundRect.top;
  const animationRange = Math.max(heroRect.height * 0.7, 1);

  return clamp(overlapDistance / animationRange, 0, 1);
}

function LandingSections({
  onBackToTop,
  onLetsTalkClick,
  heroRef,
  backgroundRef,
  heroCoverProgress,
}: {
  onBackToTop: () => void;
  onLetsTalkClick: () => void;
  heroRef: React.RefObject<HTMLDivElement | null>;
  backgroundRef: React.RefObject<HTMLDivElement | null>;
  heroCoverProgress: number;
}) {
  return (
    <div
      className="absolute left-1/2 top-[100px] flex w-full flex-col items-center"
      style={{
        transform: "translate(-50%, 0) scale(0.75)",
        transformOrigin: "top center",
      }}
    >
      <HeroSection coverProgress={heroCoverProgress} containerRef={heroRef} />
      <BackgroundSection containerRef={backgroundRef} />
      <FooterSection onBackToTop={onBackToTop} onLetsTalkClick={onLetsTalkClick} />
    </div>
  );
}

export default function LandingFinal({
  onHomeClick,
  onWorkClick,
  onAboutClick,
  onContactClick,
}: LandingNavigationHandlers) {
  const [isNavWhite, setIsNavWhite] = useState(false);
  const [heroCoverProgress, setHeroCoverProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frameId: number | null = null;
    const scrollParent = findScrollParent(heroRef.current);

    const updatePageAnimations = () => {
      const shouldBeWhite =
        window.scrollY >= NAV_WHITE_SCROLL_START &&
        window.scrollY < NAV_WHITE_SCROLL_END;
      setIsNavWhite((current) =>
        current === shouldBeWhite ? current : shouldBeWhite,
      );

      const nextCoverProgress = getHeroCoverProgress(heroRef.current, backgroundRef.current);
      setHeroCoverProgress((current) =>
        Math.abs(current - nextCoverProgress) < 0.001 ? current : nextCoverProgress,
      );

      frameId = null;
    };

    const handleUpdateRequest = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updatePageAnimations);
      }
    };

    handleUpdateRequest();
    window.addEventListener("scroll", handleUpdateRequest, { passive: true });
    window.addEventListener("resize", handleUpdateRequest);
    scrollParent?.addEventListener("scroll", handleUpdateRequest, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleUpdateRequest);
      window.removeEventListener("resize", handleUpdateRequest);
      scrollParent?.removeEventListener("scroll", handleUpdateRequest);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#fefcf4]" data-name="Landing final">
      <NavigationBar
        onHomeClick={onHomeClick}
        onWorkClick={onWorkClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
        isWhite={isNavWhite}
      />
      <LandingSections
        onBackToTop={onHomeClick}
        onLetsTalkClick={onContactClick}
        heroRef={heroRef}
        backgroundRef={backgroundRef}
        heroCoverProgress={heroCoverProgress}
      />
    </div>
  );
}
