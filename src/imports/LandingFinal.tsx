import React, { useEffect, useState } from "react";
import BackgroundSection from "./landing/BackgroundSection";
import { NAV_WHITE_SCROLL_END, NAV_WHITE_SCROLL_START } from "./landing/constants";
import FooterSection from "./landing/FooterSection";
import HeroSection from "./landing/HeroSection";
import NavigationBar from "./landing/NavigationBar";
import type { LandingNavigationHandlers } from "./landing/types";

function LandingSections({
  onBackToTop,
  onLetsTalkClick,
}: {
  onBackToTop: () => void;
  onLetsTalkClick: () => void;
}) {
  return (
    <div
      className="absolute left-1/2 top-[100px] flex w-full flex-col items-center"
      style={{
        transform: "translate(-50%, 0) scale(0.75)",
        transformOrigin: "top center",
      }}
    >
      <HeroSection />
      <BackgroundSection />
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

  useEffect(() => {
    let frameId: number | null = null;

    const updateNavColor = () => {
      const shouldBeWhite =
        window.scrollY >= NAV_WHITE_SCROLL_START &&
        window.scrollY < NAV_WHITE_SCROLL_END;
      setIsNavWhite((current) =>
        current === shouldBeWhite ? current : shouldBeWhite,
      );
      frameId = null;
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateNavColor);
      }
    };

    updateNavColor();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      <LandingSections onBackToTop={onHomeClick} onLetsTalkClick={onContactClick} />
    </div>
  );
}
