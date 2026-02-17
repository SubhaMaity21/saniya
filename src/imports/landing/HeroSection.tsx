import React, { useCallback, useState } from "react";
// @ts-ignore
import imgContactMe1 from "figma:asset/1077e5ec0d9d3a9da413e90dbe1960e8121cb40b.png";
// @ts-ignore
import imgLocationPng1 from "figma:asset/33c5347c8865ddee8a9ed022a5443794850405f7.png";
// @ts-ignore
import imgMeIcon1 from "figma:asset/c86a38aafd6e5f2f41dab258742a41c31f635ea3.png";

const EXPANDABLE_CARD_BASE_CLASS =
  "h-[140px] shrink-0 rounded-[48px] border border-solid border-[#2d6dc3] bg-[rgba(226,226,226,0.2)] transition-all duration-500 ease-in-out";

type ExpandableCardProps = {
  isActive: boolean;
  onHover: () => void;
};

type ActiveCard = "profile" | "location" | "phone";

type HeroSectionProps = {
  coverProgress?: number;
  containerRef?: React.RefObject<HTMLDivElement | null>;
};

function HeroHeading() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%-357.5px)] not-italic">
      <div className="absolute left-[calc(50%-832px)] top-[calc(50%-312px)] font-['Clash_Display:Bold',sans-serif] text-[164.816px] leading-[1.03] tracking-[9.889px] text-[#101010]">
        <p className="mb-0">DIGITAL PRODUCT</p>
        <p>DESIGNER</p>
      </div>
      <p className="absolute left-[calc(50%-832px)] top-[calc(50%-343px)] ml-5 font-['Martel:ExtraBold',sans-serif] text-[16px] leading-[normal] tracking-[0.48px] text-[#2d6dc3]">
        <span className="block px-4">
          USERINTERFACE | USEREXPERIENCE | VISUAL IDENTITY
        </span>
      </p>
    </div>
  );
}

function ProfileCard({ isActive, onHover }: ExpandableCardProps) {
  return (
    <div
      className={`${EXPANDABLE_CARD_BASE_CLASS} relative mr-5 overflow-hidden`}
      style={{ width: isActive ? 450 : 170 }}
      onMouseEnter={onHover}
    >
      <div className="relative flex h-full items-center justify-center">
        <div
          className={`relative z-10 flex shrink-0 items-center justify-center transition-all duration-500 ${
            isActive ? "h-[135px] w-[135px]" : "h-[100px] w-[100px]"
          }`}
          style={{ transform: isActive ? "translateX(-110px)" : "translateX(0)" }}
          data-name="me icon"
        >
          <img
            alt="Saniya profile"
            className="h-full w-full rounded-full object-cover"
            src={imgMeIcon1}
          />
        </div>
        <p
          className="absolute left-[170px] whitespace-nowrap font-['Martel:ExtraBold',sans-serif] text-[24px] not-italic leading-[normal] text-[#2d6dc3] transition-opacity duration-300"
          style={{ opacity: isActive ? 1 : 0 }}
        >
          HELLO! I&apos;M SANIYA
        </p>
      </div>
    </div>
  );
}

function LocationCard({ isActive, onHover }: ExpandableCardProps) {
  return (
    <div
      className={EXPANDABLE_CARD_BASE_CLASS}
      style={{ width: isActive ? 450 : 170 }}
      onMouseEnter={onHover}
    >
      <div className="relative flex h-full items-center gap-5 pl-[10px] pr-[10px]">
        <div
          className="relative flex h-[170px] w-[170px] shrink-0 items-center justify-center"
          data-name="location png"
        >
          <img alt="" className="h-full w-full object-cover" src={imgLocationPng1} />
        </div>
        <p
          className="whitespace-nowrap font-['Martel:ExtraBold',sans-serif] text-[24px] not-italic leading-[normal] text-[#2d6dc3] transition-opacity duration-300"
          style={{ opacity: isActive ? 1 : 0 }}
        >
          Ahmedabad | Pune
        </p>
      </div>
    </div>
  );
}

function ContactCard({ isActive, onHover }: ExpandableCardProps) {
  return (
    <div
      className={EXPANDABLE_CARD_BASE_CLASS}
      style={{ width: isActive ? 490 : 170 }}
      onMouseEnter={onHover}
    >
      <div className="relative flex h-full items-center gap-5 pl-[27px] pr-[35px]">
        <div
          className="relative flex h-[135px] w-[135px] shrink-0 items-center justify-center"
          data-name="contact me"
        >
          <img alt="" className="h-full w-full object-contain" src={imgContactMe1} />
        </div>
        <p
          className="whitespace-nowrap font-['Martel:ExtraBold',sans-serif] text-[24px] not-italic leading-[normal] text-[#2d6dc3] transition-opacity duration-300"
          style={{ opacity: isActive ? 1 : 0 }}
        >
          Let&apos;s Talk Design
        </p>
      </div>
    </div>
  );
}

function IntroCards() {
  const [activeCard, setActiveCard] = useState<ActiveCard>("profile");
  const activateProfile = useCallback(() => setActiveCard("profile"), []);
  const activateLocation = useCallback(() => setActiveCard("location"), []);
  const activatePhone = useCallback(() => setActiveCard("phone"), []);

  return (
    <div
      className="absolute left-[937px] top-[200px] flex gap-[7px]"
      data-name="Component 1"
      onMouseLeave={activateProfile}
    >
      <ProfileCard isActive={activeCard === "profile"} onHover={activateProfile} />
      <LocationCard isActive={activeCard === "location"} onHover={activateLocation} />
      <ContactCard isActive={activeCard === "phone"} onHover={activatePhone} />
    </div>
  );
}

export default function HeroSection({
  coverProgress = 0,
  containerRef,
}: HeroSectionProps) {
  const clampedCoverProgress = Math.min(1, Math.max(0, coverProgress));
  const contentScale = 1 - clampedCoverProgress * 0.16;
  const contentOpacity = 1 - clampedCoverProgress * 0.35;
  const contentBlur = clampedCoverProgress * 2;
  const contentLift = clampedCoverProgress * -36;

  return (
    <div
      ref={containerRef}
      className="relative sticky top-[200px] mx-auto h-[780px] w-full shrink-0 overflow-visible"
    >
      <div
        className="relative h-full w-full"
        style={{
          transform: `translate3d(0, ${contentLift}px, 0) scale(${contentScale})`,
          transformOrigin: "50% 35%",
          opacity: contentOpacity,
          filter: `blur(${contentBlur}px)`,
          willChange: "transform, opacity, filter",
          transition: "transform 80ms linear, opacity 80ms linear, filter 80ms linear",
        }}
      >
        <div className="-translate-x-1/2 absolute left-[calc(50%+8.5px)] top-40 mt-5 h-[686px] w-[1664px]">
          <HeroHeading />
          <IntroCards />
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 w-full max-w-[800px] px-4 text-center font-['Martel:ExtraBold',sans-serif] text-[22px] not-italic leading-[normal] text-[#2d6dc3]"
          style={{ top: "550px" }}
        >
          <p className="mb-0">
            Designing meaningful experiences where every interaction is crafted with
            purpose,
          </p>
          <p>From head scratching moments to flows that just make sense.</p>
        </div>
      </div>
    </div>
  );
}
