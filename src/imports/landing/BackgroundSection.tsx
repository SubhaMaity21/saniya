import React from "react";
// @ts-ignore
import imgBackground from "figma:asset/59441181721f9ec0057cf0ca5351b45db44c073a.png";

type BackgroundSectionProps = {
  containerRef?: React.RefObject<HTMLDivElement | null>;
};

type ProjectData = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  ctaText: string;
  ctaLink?: string;
  bannerGradient: string;
  bannerTextColor: string;
  subtitleColor: string;
};

const PROJECTS: ProjectData[] = [
  {
    title: "BAZARGHORR",
    subtitle: "HYPERLOCAL GROCERY APP",
    description:
      "A Mobile App Delivering Daily Grocery Essentials From Trusted Local Kirana Stores To Small-Town Residents. Bringing Modern Convenience To Underserved Markets.",
    tags: ["Product Design", "Mobile App", "Handed Off To Development"],
    ctaText: "VIEW CASE STUDY",
    ctaLink: "#",
    bannerGradient:
      "linear-gradient(180deg, #e8f5e3 0%, #c8e6c9 40%, #a5d6a7 100%)",
    bannerTextColor: "#101010",
    subtitleColor: "#555555",
  },

  {
    title: "BUILDMYSTORE",
    subtitle: "ALL-IN-ONE ECOMMERCE PLATFORM",
    description:
      "An All-In-One Ecommerce Platform That Enables Local Businesses To Easily Set Up, Manage, And Grow Their Online Stores, From Storefront Creation To Orders, Payments, And Deliveries.",
    tags: ["UI Design", "Ecom. Website", "Handed Off To Development"],
    ctaText: "VIEW CASE STUDY",
    ctaLink: "#",
    bannerGradient:
      "linear-gradient(180deg, #a0845c 0%, #7a6240 50%, #5c4a30 100%)",
    bannerTextColor: "#ffffff",
    subtitleColor: "rgba(255,255,255,0.65)",
  },
  {
    title: "MENTORME",
    subtitle: "PURPOSE-LED BRAND IDENTITY",
    description:
      "A Purpose-Led Brand Identity Focused On Connecting Learners And Mentors, Enabling Meaningful Growth Through Guidance, Collaboration, And Shared Progress.",
    tags: ["Visual Identity", "Brand Strategy", "Marketing Collaterals"],
    ctaText: "COMING SOON",
    bannerGradient:
      "linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    bannerTextColor: "#ffffff",
    subtitleColor: "rgba(255,255,255,0.65)",
  },
];

function WorkCard({ project }: { project: ProjectData }) {
  return (
    <div
      style={{
        width: 1100,
        borderRadius: 24,
        border: "1px solid rgba(255, 255, 255, 0.30)",
        background: "rgba(255, 255, 255, 0.07)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      {/* Banner / Image Area */}
      <div
        style={{
          margin: 14,
          height: 420,
          borderRadius: 18,
          background: project.bannerGradient,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 48,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h3
          style={{
            fontFamily: "'Clash Display:Bold', sans-serif",
            fontSize: 48,
            color: project.bannerTextColor,
            letterSpacing: 3,
            marginBottom: 8,
            position: "relative",
            zIndex: 1,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "'Martel:Regular', sans-serif",
            fontSize: 14,
            color: project.subtitleColor,
            letterSpacing: 2,
            textTransform: "uppercase",
            position: "relative",
            zIndex: 1,
          }}
        >
          {project.subtitle}
        </p>
        {/* Placeholder for project mockup images */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "85%",
            height: "60%",
            background: "rgba(128, 128, 128, 0.12)",
            borderRadius: "12px 12px 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Martel:Regular', sans-serif",
              fontSize: 14,
              color: "rgba(128, 128, 128, 0.45)",
              letterSpacing: 1,
            }}
          >
            Project Images Placeholder
          </span>
        </div>
      </div>

      {/* Info Section */}
      <div style={{ padding: "20px 32px 28px" }}>
        <h3
          style={{
            fontFamily: "'Clash Display:Bold', sans-serif",
            fontSize: 36,
            color: "#101010",
            letterSpacing: 1,
            marginBottom: 10,
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "'Martel:Regular', sans-serif",
            fontSize: 16,
            fontStyle: "italic",
            color: "rgba(255, 255, 255, 0.85)",
            lineHeight: 1.6,
            marginBottom: 24,
            maxWidth: 820,
          }}
        >
          {project.description}
        </p>

        {/* Tags and CTA Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "8px 20px",
                  borderRadius: 24,
                  border: "1px solid rgba(255, 255, 255, 0.45)",
                  fontFamily: "'Martel:Regular', sans-serif",
                  fontSize: 14,
                  color: "rgba(255, 255, 255, 0.9)",
                  letterSpacing: 0.3,
                  whiteSpace: "nowrap",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            style={{
              padding: "12px 28px",
              borderRadius: 24,
              border: "2px solid #2d6dc3",
              background:
                project.ctaText === "COMING SOON" ? "#fefcf4" : "#ffffff",
              fontFamily: "'Martel:ExtraBold', sans-serif",
              fontSize: 14,
              color: "#2d6dc3",
              letterSpacing: 1.5,
              cursor: project.ctaLink ? "pointer" : "default",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {project.ctaText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BackgroundSection({ containerRef }: BackgroundSectionProps) {
  return (
    <div ref={containerRef} className="relative w-full shrink-0" style={{ minHeight: 2500 }}>
      {/* Full-width background image */}
      <div
        className="absolute left-1/2 top-0 h-full"
        style={{ width: "133.33vw", transform: "translateX(-50%)" }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute left-0 top-0 h-full w-full max-w-none object-cover"
            src={imgBackground}
          />
        </div>
      </div>

      {/* Content: Title + Work Cards */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 80,
          paddingBottom: 100,
          gap: 48,
        }}
      >
        <h2
          style={{
            fontFamily: "'Clash Display:Bold', sans-serif",
            fontSize: 64,
            color: "#101010",
            letterSpacing: 4,
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          SELECTED WORK
        </h2>

        {PROJECTS.map((project) => (
          <WorkCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
