import React, { type ReactNode } from "react";
import svgPaths from "../svg-ghixc67pzt";

type FooterSectionProps = {
  onBackToTop: () => void;
  onLetsTalkClick: () => void;
};

type SocialLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
  external?: boolean;
};

function SocialLink({ href, label, children, external = false }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="size-[46px] cursor-pointer transition-transform hover:scale-110"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function SocialMedia() {
  return (
    <div className="flex items-center justify-center gap-[18px]">
      <SocialLink href="https://www.linkedin.com/in/saniya" label="LinkedIn" external>
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 46 46"
        >
          <path d={svgPaths.p30ba2c00} fill="var(--fill-0, #101010)" />
        </svg>
      </SocialLink>
      <SocialLink href="mailto:saniya@example.com" label="Email">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 46 46"
        >
          <path d={svgPaths.p3150bc00} fill="var(--fill-0, #101010)" />
        </svg>
      </SocialLink>
      <SocialLink href="https://www.instagram.com/saniya" label="Instagram" external>
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 46 46"
        >
          <path d={svgPaths.p2bbb0d20} fill="var(--fill-0, #101010)" />
        </svg>
      </SocialLink>
      <SocialLink href="https://www.behance.net/saniya" label="Behance" external>
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 46 46"
        >
          <path d={svgPaths.p2b85ed00} fill="var(--fill-0, #101010)" />
          <path d={svgPaths.p3db6fc00} fill="var(--fill-0, #101010)" />
        </svg>
      </SocialLink>
    </div>
  );
}

function LetsTalkLabelLine() {
  return (
    <div className="relative flex h-[54px] items-center justify-center">
      <p className="absolute left-[calc(50%-100px)] font-['Martel:ExtraBold',sans-serif] text-[32px] not-italic leading-[normal] text-[#2d6dc3]">
        Let&apos;s Talk
      </p>
      <div className="absolute left-[176px] top-[27px] h-0 w-[24px]">
        <div className="absolute inset-[-7.36px_-4.17%_-7.36px_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 25 14.7279"
          >
            <path d={svgPaths.p3a9c1f00} fill="var(--stroke-0, #2D6DC3)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContactCta({ onLetsTalkClick }: { onLetsTalkClick: () => void }) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="mb-12 font-['Martel:DemiBold',sans-serif] text-[28px] not-italic leading-[normal] text-[#101010]">
        That&apos;s a wrap. Or is it?
      </p>
      <h1 className="mb-8 max-w-[1640px] text-center font-['Clash_Display:Semibold',sans-serif] text-[128px] not-italic leading-[1.03] tracking-[7.68px] text-[#101010]">
        Great design starts with a conversation!
      </h1>
      <p className="mb-12 text-center font-['Martel:DemiBold',sans-serif] text-[28px] not-italic leading-[normal] text-[#101010]">
        Open to opportunities, collabs, creative challenges, or simply a good
        conversation.
      </p>
      <button
        type="button"
        onClick={onLetsTalkClick}
        className="group relative mb-4 h-[95px] w-[312px] cursor-pointer overflow-hidden rounded-[38px] border border-solid border-[#2d6dc3] bg-[rgba(226,226,226,0.2)] px-12 py-6 transition-all hover:scale-105 hover:bg-[rgba(226,226,226,0.4)]"
      >
        <div className="absolute left-[65px] top-[20.5px] h-[54px] w-[200px] overflow-clip">
          <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[54px]">
            <LetsTalkLabelLine />
            <LetsTalkLabelLine />
          </div>
        </div>
      </button>
      <p className="mb-1 font-['Martel:DemiBold',sans-serif] text-[28px] not-italic leading-[normal] text-[#101010]">
        or
      </p>
      <SocialMedia />
    </div>
  );
}

export default function FooterSection({
  onBackToTop,
  onLetsTalkClick,
}: FooterSectionProps) {
  return (
    <div className="relative z-20 h-[960px] w-full shrink-0">
      <div
        className="absolute left-1/2 top-0 h-full bg-[#fefcf4]"
        style={{ width: "133.33vw", transform: "translateX(-50%)" }}
      >
        <div
          className="absolute bottom-0 left-1/2 h-[1523px] w-[1920px] -translate-x-1/2"
          data-name="b551d4405bc31b48d23669c7d041acd3 1"
        />
        <div className="absolute left-1/2 top-[850px] h-0 w-[1840px] -translate-x-1/2">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1840 1"
            >
              <line
                id="Line 1"
                stroke="var(--stroke-0, black)"
                x2="1840"
                y1="0.5"
                y2="0.5"
              />
            </svg>
          </div>
        </div>
        <p className="absolute left-1/2 top-[890px] max-w-[940px] -translate-x-1/2 text-center font-['Martel:Light',sans-serif] text-[16px] not-italic leading-[normal] text-[#101010]">
          Built on coffee, love, many iterations, and way too many open tabs.
          Thanks for stopping by, hope to hear from you soon.
        </p>
        <div className="absolute left-[40px] top-[890px]">
          <button
            type="button"
            onClick={onBackToTop}
            className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-70"
          >
            <p className="font-['Martel:Regular',sans-serif] text-[16px] not-italic leading-[normal] text-[#101010]">
              Back to top
            </p>
            <div className="flex h-[14px] w-0 items-center justify-center">
              <div className="-rotate-90 flex-none">
                <div className="relative h-0 w-[14px]">
                  <div className="absolute inset-[-3.68px_-3.57%_-3.68px_0]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 14.5 7.36396"
                    >
                      <path
                        d={svgPaths.p3b044f00}
                        fill="var(--stroke-0, #101010)"
                        id="Arrow 2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="absolute left-1/2 top-[100px] w-full -translate-x-1/2">
          <ContactCta onLetsTalkClick={onLetsTalkClick} />
        </div>
      </div>
    </div>
  );
}
