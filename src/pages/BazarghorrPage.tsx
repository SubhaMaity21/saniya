import React from "react";
import { useNavigate } from "react-router-dom";
import { CaseStudyContainer } from "@/components/ui/CaseStudyContainer";
import NavigationBar from "@/imports/landing/NavigationBar";
import svgPaths from "@/imports/svg-ghixc67pzt";

// Section images
import s1 from "@/assets/bazarghorr/sections/s1.png";
import s2 from "@/assets/bazarghorr/sections/s2.png";
import s3 from "@/assets/bazarghorr/sections/s3.png";
import s4 from "@/assets/bazarghorr/sections/s4.png";
import s5 from "@/assets/bazarghorr/sections/s5.png";
import s6 from "@/assets/bazarghorr/sections/s6.png";
import s7 from "@/assets/bazarghorr/sections/s7.png";
import s8 from "@/assets/bazarghorr/sections/s8.png";
import s10 from "@/assets/bazarghorr/sections/s10.png";

// Videos
import vendorOnboarding from "@/assets/bazarghorr/flows/vendor-onboarding.mp4";
import vendorNewOrder from "@/assets/bazarghorr/flows/vendor-new-order-flow.mp4";
import vendorInventory from "@/assets/bazarghorr/flows/vendor-inventory-flow.mp4";

// Illustrations
import maleVendor from "@/assets/bazarghorr/illustrations/male-vendor.png";
import newOrderIllustration from "@/assets/bazarghorr/illustrations/new-order.png";

// Screens for s11
import analytics1 from "@/assets/bazarghorr/screens/analytics-1.png";
import analytics2 from "@/assets/bazarghorr/screens/analytics-2.png";
import analytics3 from "@/assets/bazarghorr/screens/analytics-3.png";
import orderHistory from "@/assets/bazarghorr/screens/order-history.png";
import orderHistoryDetails from "@/assets/bazarghorr/screens/order-history-details-page.png";
import dashboardActivity from "@/assets/bazarghorr/screens/dashboard-0-activity.png";
import profileScreen from "@/assets/bazarghorr/screens/profile.png";
import subscriptionScreen from "@/assets/bazarghorr/screens/subscription-page.png";
import inventoryScreen from "@/assets/bazarghorr/screens/product-page.png";
import vendorDashboard from "@/assets/bazarghorr/screens/vendordashboard.png";
import maleVendorStanding from "@/assets/bazarghorr/illustrations/male-vendor-standing.jpeg";

// ─── Shared constants ────────────────────────────────────────────────

const SECTION_OVERLAP = -30;
const MAX_WIDTH = 1200;
const HEADING_FONT = "'Clash Display:Bold', sans-serif";
const BODY_FONT = "'Martel:Regular', sans-serif";
const BODY_FONT_SEMI = "'Martel:SemiBold', sans-serif";

// ─── Phone Mockup ────────────────────────────────────────────────────

function PhoneMockup({
  children,
  width = 280,
}: {
  children: React.ReactNode;
  width?: number;
}) {
  return (
    <div
      style={{
        width,
        aspectRatio: "9 / 19.5",
        borderRadius: width * 0.13,
        border: `${Math.max(6, width * 0.028)}px solid #1a1a1a`,
        overflow: "hidden",
        background: "#000",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

// ─── Section Header ──────────────────────────────────────────────────

function SectionHeader({
  number,
  title,
  dark = false,
}: {
  number: string;
  title: string;
  dark?: boolean;
}) {
  const lineColor = dark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.15)";
  return (
    <div style={{ marginBottom: 40 }}>
      <p
        style={{
          fontFamily: BODY_FONT,
          fontSize: 14,
          color: dark ? "rgba(255,255,255,0.5)" : "#888",
          marginBottom: 12,
        }}
      >
        {number}
      </p>
      <div
        style={{
          height: 1,
          background: lineColor,
          marginBottom: 20,
        }}
      />
      <h2
        style={{
          fontFamily: HEADING_FONT,
          fontSize: 48,
          lineHeight: 1.1,
          color: dark ? "#fff" : "#101010",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

// ─── Image Section helper ────────────────────────────────────────────

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", display: "block" }}
      loading="lazy"
    />
  );
}

// ─── S9: Vendor App UI Breakdown (CODED) ─────────────────────────────

function VendorAppUISection() {
  return (
    <CaseStudyContainer
      variant="light"
      zIndex={9}
      style={{ marginTop: SECTION_OVERLAP, position: "relative" }}
    >
      <div
        style={{
          maxWidth: MAX_WIDTH,
          margin: "0 auto",
          padding: "60px 40px 80px",
        }}
      >
        <SectionHeader number="03/10" title="VENDOR APP UI BREAKDOWN" />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 80,
            marginTop: 40,
          }}
        >
          {/* Phone mockup with onboarding video */}
          <PhoneMockup width={300}>
            <video
              src={vendorOnboarding}
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </PhoneMockup>

          {/* Right side: text + illustration */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginBottom: 20,
              }}
            >
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: HEADING_FONT,
                    fontSize: 32,
                    color: "#101010",
                    marginBottom: 16,
                  }}
                >
                  ONBOARDING
                </h3>
                <p
                  style={{
                    fontFamily: BODY_FONT,
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: "#333",
                  }}
                >
                  The Onboarding Flow Starts With A Landing Page That Sets
                  Context For The Platform. Vendors Log In Using Their Phone
                  Number And Complete A Two Step Onboarding With Essential
                  Personal Details And Optional Shop Details For Faster Access.
                </p>
              </div>

              <img
                src={maleVendor}
                alt="Vendor illustration"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                  background: "#e0e0e0",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </CaseStudyContainer>
  );
}

// ─── S11: Main Screens (CODED) ───────────────────────────────────────

function GreenBlob({
  size,
  top,
  left,
  right,
  opacity = 0.15,
}: {
  size: number;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  opacity?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: `rgba(166, 227, 161, ${opacity})`,
        top,
        left,
        right,
        pointerEvents: "none",
      }}
    />
  );
}

function ScreenThumbnail({
  src,
  alt,
  width = 160,
}: {
  src: string;
  alt: string;
  width?: number;
}) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width,
        borderRadius: 16,
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        objectFit: "cover",
      }}
      loading="lazy"
    />
  );
}

function MainScreensSection() {
  return (
    <CaseStudyContainer
      variant="light"
      zIndex={11}
      style={{ marginTop: SECTION_OVERLAP, position: "relative" }}
    >
      <div
        style={{
          maxWidth: MAX_WIDTH,
          margin: "0 auto",
          padding: "60px 40px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <SectionHeader number="09/10" title="MAIN SCREENS" />

        {/* ── New Orders ── */}
        <div
          style={{
            position: "relative",
            marginBottom: 80,
          }}
        >
          <GreenBlob size={200} top={-40} right={60} opacity={0.12} />
          <GreenBlob size={120} top={180} right={-20} opacity={0.1} />

          <div
            style={{
              display: "flex",
              gap: 48,
              alignItems: "flex-start",
            }}
          >
            <PhoneMockup width={220}>
              <video
                src={vendorNewOrder}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </PhoneMockup>

            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontFamily: HEADING_FONT,
                  fontSize: 24,
                  color: "#101010",
                  marginBottom: 12,
                }}
              >
                NEW ORDERS
              </h3>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#444",
                  marginBottom: 24,
                  maxWidth: 500,
                }}
              >
                Once The Shop Is Online, Vendors Accept New Orders, Pack Items
                Using A Checklist, And Begin To Update Order Status. Delivery
                Partner Details Are Shown, And Products Are Notified Once The
                Order Is Completed While Continuing On The Dashboard.
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <ScreenThumbnail
                  src={newOrderIllustration}
                  alt="New order"
                  width={140}
                />
                <ScreenThumbnail
                  src={vendorDashboard}
                  alt="Vendor dashboard"
                  width={140}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Analytics ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 80,
            position: "relative",
          }}
        >
          <GreenBlob size={160} top={-20} left={-40} opacity={0.1} />

          <h3
            style={{
              fontFamily: HEADING_FONT,
              fontSize: 24,
              color: "#101010",
              marginBottom: 8,
            }}
          >
            ANALYTICS
          </h3>
          <p
            style={{
              fontFamily: BODY_FONT,
              fontSize: 14,
              lineHeight: 1.7,
              color: "#444",
              marginBottom: 24,
              maxWidth: 600,
              margin: "0 auto 24px",
            }}
          >
            The Screen Provides Vendors With Clear Insights Through Sales
            Reports, Top Selling Products, And Inventory Performance, Helping
            Them Understand What Is Working, What Is Not, And Make Informed
            Stocking Decisions.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <ScreenThumbnail src={analytics1} alt="Analytics 1" width={180} />
            <ScreenThumbnail src={analytics2} alt="Analytics 2" width={180} />
            <ScreenThumbnail src={analytics3} alt="Analytics 3" width={180} />
          </div>
        </div>

        {/* ── Inventory Management ── */}
        <div
          style={{
            position: "relative",
            marginBottom: 80,
          }}
        >
          <GreenBlob size={180} top={20} right={-30} opacity={0.1} />

          <div
            style={{
              display: "flex",
              gap: 48,
              alignItems: "flex-start",
            }}
          >
            <PhoneMockup width={220}>
              <video
                src={vendorInventory}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </PhoneMockup>

            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontFamily: HEADING_FONT,
                  fontSize: 24,
                  color: "#101010",
                  marginBottom: 12,
                }}
              >
                INVENTORY MANAGEMENT
              </h3>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#444",
                  marginBottom: 24,
                  maxWidth: 500,
                }}
              >
                The Inventory Management Section Allows Vendors To Review Their
                Stock At A Glance, Showing Items That Are In Stock, Low In
                Stock, Or Out Of Stock. Vendors Can Easily Add New Products,
                Edit Existing Items, And Update Stock Levels As Needed.
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <ScreenThumbnail
                  src={inventoryScreen}
                  alt="Inventory"
                  width={140}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── History ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 80,
            position: "relative",
          }}
        >
          <h3
            style={{
              fontFamily: HEADING_FONT,
              fontSize: 24,
              color: "#101010",
              marginBottom: 8,
            }}
          >
            HISTORY
          </h3>
          <p
            style={{
              fontFamily: BODY_FONT,
              fontSize: 14,
              lineHeight: 1.7,
              color: "#444",
              marginBottom: 24,
              maxWidth: 600,
              margin: "0 auto 24px",
            }}
          >
            The History Page Provides Vendors With Past Order Details Including
            Order ID, Number Of Items, Payout Amount, Date And Time, Delivery
            Duration, And Customer Reviews When Available.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <ScreenThumbnail src={orderHistory} alt="Order history" width={180} />
            <ScreenThumbnail
              src={orderHistoryDetails}
              alt="Order details"
              width={180}
            />
          </div>
        </div>

        {/* ── Extras ── */}
        <div
          style={{
            textAlign: "center",
            position: "relative",
          }}
        >
          <GreenBlob size={100} top={-10} right={100} opacity={0.08} />

          <h3
            style={{
              fontFamily: HEADING_FONT,
              fontSize: 24,
              color: "#101010",
              marginBottom: 8,
            }}
          >
            EXTRAS!
          </h3>
          <p
            style={{
              fontFamily: BODY_FONT,
              fontSize: 14,
              lineHeight: 1.7,
              color: "#444",
              marginBottom: 24,
            }}
          >
            0 Activity Dashboard, Profile, Subscription.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              flexWrap: "wrap",
              alignItems: "flex-end",
            }}
          >
            <ScreenThumbnail
              src={dashboardActivity}
              alt="Activity dashboard"
              width={180}
            />
            <img
              src={maleVendorStanding}
              alt="Vendor character"
              style={{
                width: 80,
                borderRadius: 40,
                objectFit: "cover",
              }}
              loading="lazy"
            />
            <ScreenThumbnail
              src={profileScreen}
              alt="Profile"
              width={180}
            />
            <ScreenThumbnail
              src={subscriptionScreen}
              alt="Subscription"
              width={180}
            />
          </div>
        </div>
      </div>
    </CaseStudyContainer>
  );
}

// ─── S12: Footer CTA (CODED) ────────────────────────────────────────

function SocialLink({
  href,
  label,
  children,
  external = false,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{
        width: 46,
        height: 46,
        display: "block",
        cursor: "pointer",
        transition: "transform 0.15s",
      }}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function FooterCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "relative",
        zIndex: 12,
        marginTop: SECTION_OVERLAP,
        borderRadius: "30px 30px 0 0",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #6EAED6 0%, #8FC4E0 30%, #A8D4E8 60%, #C0DFF0 100%)",
        color: "#fff",
      }}
    >
      {/* Main CTA content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 40px 60px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: BODY_FONT_SEMI,
            fontSize: 22,
            marginBottom: 24,
            color: "#fff",
          }}
        >
          That&apos;s a wrap. Or is it?
        </p>

        <h2
          style={{
            fontFamily: "'Clash Display:Semibold', sans-serif",
            fontSize: 80,
            lineHeight: 1.05,
            letterSpacing: 3,
            marginBottom: 24,
            maxWidth: 900,
            color: "#fff",
          }}
        >
          Great design starts with a conversation!
        </h2>

        <p
          style={{
            fontFamily: BODY_FONT_SEMI,
            fontSize: 18,
            marginBottom: 40,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Open to opportunities, collabs, creative challenges, or simply a good
          conversation.
        </p>

        <a
          href="mailto:saniya@example.com"
          style={{
            display: "inline-block",
            padding: "16px 36px",
            borderRadius: 38,
            border: "1.5px solid rgba(255,255,255,0.6)",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(4px)",
            fontFamily: "'Martel:ExtraBold', sans-serif",
            fontSize: 20,
            color: "#fff",
            textDecoration: "none",
            letterSpacing: 1,
            marginBottom: 20,
            cursor: "pointer",
          }}
        >
          Let&apos;s Talk &rarr;
        </a>

        <p
          style={{
            fontFamily: BODY_FONT_SEMI,
            fontSize: 18,
            marginBottom: 16,
            color: "#fff",
          }}
        >
          or
        </p>

        {/* Social icons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
          }}
        >
          <SocialLink
            href="https://www.linkedin.com/in/saniya"
            label="LinkedIn"
            external
          >
            <svg
              style={{ display: "block", width: 46, height: 46 }}
              fill="none"
              viewBox="0 0 46 46"
            >
              <path d={svgPaths.p30ba2c00} fill="#fff" />
            </svg>
          </SocialLink>
          <SocialLink href="mailto:saniya@example.com" label="Email">
            <svg
              style={{ display: "block", width: 46, height: 46 }}
              fill="none"
              viewBox="0 0 46 46"
            >
              <path d={svgPaths.p3150bc00} fill="#fff" />
            </svg>
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/saniya"
            label="Instagram"
            external
          >
            <svg
              style={{ display: "block", width: 46, height: 46 }}
              fill="none"
              viewBox="0 0 46 46"
            >
              <path d={svgPaths.p2bbb0d20} fill="#fff" />
            </svg>
          </SocialLink>
          <SocialLink
            href="https://www.behance.net/saniya"
            label="Behance"
            external
          >
            <svg
              style={{ display: "block", width: 46, height: 46 }}
              fill="none"
              viewBox="0 0 46 46"
            >
              <path d={svgPaths.p2b85ed00} fill="#fff" />
              <path d={svgPaths.p3db6fc00} fill="#fff" />
            </svg>
          </SocialLink>
        </div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.3)",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          type="button"
          onClick={scrollToTop}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "none",
            border: "none",
            color: "#fff",
            fontFamily: BODY_FONT,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Back to top &uarr;
        </button>

        <p
          style={{
            fontFamily: "'Martel:Light', sans-serif",
            fontSize: 14,
            color: "rgba(255,255,255,0.8)",
            textAlign: "center",
          }}
        >
          Built on coffee, love, many iterations, and way too many open tabs.
          Thanks for stopping by, hope to hear from you soon.
        </p>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────

export default function BazarghorrPage() {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const goWork = () => navigate("/#work");
  const goAbout = () => navigate("/#about");
  const goContact = () => navigate("/#contact");

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#fefcf4",
        overflowX: "hidden",
      }}
    >
      {/* Navigation */}
      <NavigationBar
        onHomeClick={goHome}
        onWorkClick={goWork}
        onAboutClick={goAbout}
        onContactClick={goContact}
        isWhite={false}
      />

      {/* s1: Hero — rectangular, light bg */}
      <div style={{ background: "#fefcf4", paddingTop: 80, position: "relative" }}>
        <button
          type="button"
          onClick={goHome}
          style={{
            position: "absolute",
            top: 100,
            left: 32,
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 28px",
            borderRadius: 40,
            border: "2px solid #2d6dc3",
            background: "rgba(226, 226, 226, 0.35)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            cursor: "pointer",
            fontFamily: "'Martel:ExtraBold', sans-serif",
            fontSize: 18,
            color: "#2d6dc3",
            letterSpacing: 0.5,
          }}
        >
          &larr;&nbsp; Go Back
        </button>
        <SectionImage src={s1} alt="Bazarghorr hero" />
      </div>

      {/* s2: Design Brief — rectangular, light bg */}
      <div style={{ background: "#fefcf4" }}>
        <SectionImage src={s2} alt="Design brief" />
      </div>

      {/* s3: Design Process — dark, curved top */}
      <CaseStudyContainer
        variant="dark"
        zIndex={3}
        style={{ marginTop: SECTION_OVERLAP, position: "relative" }}
      >
        <SectionImage src={s3} alt="Design process" />
      </CaseStudyContainer>

      {/* s4: SWOT Analysis — light, curved top */}
      <CaseStudyContainer
        variant="light"
        zIndex={4}
        style={{ marginTop: SECTION_OVERLAP, position: "relative" }}
      >
        <SectionImage src={s4} alt="SWOT analysis" />
      </CaseStudyContainer>

      {/* s5: User Personas — dark, curved top */}
      <CaseStudyContainer
        variant="dark"
        zIndex={5}
        style={{ marginTop: SECTION_OVERLAP, position: "relative" }}
      >
        <SectionImage src={s5} alt="User personas" />
      </CaseStudyContainer>

      {/* s6: Quantitative Research — light, curved top */}
      <CaseStudyContainer
        variant="light"
        zIndex={6}
        style={{ marginTop: SECTION_OVERLAP, position: "relative" }}
      >
        <SectionImage src={s6} alt="Quantitative research" />
      </CaseStudyContainer>

      {/* s7: User Flows — dark, curved top */}
      <CaseStudyContainer
        variant="dark"
        zIndex={7}
        style={{ marginTop: SECTION_OVERLAP, position: "relative" }}
      >
        <SectionImage src={s7} alt="User flows" />
      </CaseStudyContainer>

      {/* s8: Mid-Fidelity — light, curved top */}
      <CaseStudyContainer
        variant="light"
        zIndex={8}
        style={{ marginTop: SECTION_OVERLAP, position: "relative" }}
      >
        <SectionImage src={s8} alt="Mid-fidelity wireframes" />
      </CaseStudyContainer>

      {/* s9: Vendor App UI Breakdown — light, curved top, CODED */}
      <VendorAppUISection />

      {/* s10: Dashboard — dark, curved top */}
      <CaseStudyContainer
        variant="dark"
        zIndex={10}
        style={{ marginTop: SECTION_OVERLAP, position: "relative" }}
      >
        <SectionImage src={s10} alt="Dashboard" />
      </CaseStudyContainer>

      {/* s11: Main Screens — light, curved top, CODED */}
      <MainScreensSection />

      {/* s12: Footer CTA — blue gradient, CODED */}
      <FooterCTA />
    </div>
  );
}
