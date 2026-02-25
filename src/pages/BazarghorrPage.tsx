import React from "react";
import { useNavigate } from "react-router-dom";
import { CaseStudyContainer } from "@/components/ui/CaseStudyContainer";
import FooterSection from "@/imports/landing/FooterSection";

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
import s13 from "@/assets/bazarghorr/sections/s13.png";
import s14 from "@/assets/bazarghorr/sections/s14.png";


// Videos
import vendorOnboarding from "@/assets/bazarghorr/flows/vendor-onboarding.mp4";
import vendorNewOrder from "@/assets/bazarghorr/flows/vendor-new-order-flow.mp4";
import vendorInventory from "@/assets/bazarghorr/flows/vendor-inventory-flow.mp4";

// Illustrations
import maleVendor from "@/assets/bazarghorr/illustrations/excited.png";
import maleVendorThinking from "@/assets/bazarghorr/illustrations/thinking.png";
import newOrderIllustration from "@/assets/bazarghorr/illustrations/new-order.png";
import screenIllustration from "@/assets/bazarghorr/illustrations/screen-illustrations.png";

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
          maxWidth: 1800,
          margin: "0 auto",
          padding: "60px 40px 80px",
        }}
      >
        <SectionHeader number="09/10" title="VENDOR APP UI BREAKDOWN" />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 80,
            marginTop: 70,
            margin:"18%",
            marginBottom:60
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
          <div style={{ flex: 1, alignSelf: "flex-end", position: "relative", overflow: "visible" }}>
            {/* Image container with bg color */}
            <div
              style={{
                position: "absolute",
                top: -70,
                right: 0,
                width: 130,
                height: 130,
                borderRadius: "50%",
                background: "#e0e0e0",
                overflow: "visible",
                zIndex: 2,
              }}
            >
              <img
                src={maleVendorThinking}
                alt="Vendor illustration"
                style={{
                  width: 150,
                  height: 150,
                  transform: "scaleX(-1)",
                  borderRadius: "50%",
                  objectFit: "cover",
                  position: "absolute",
                  top: -21,
                  left: -4,
                }}
              />
            </div>
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
          maxWidth: 1800,
          margin: "0 auto",
          padding: "60px 40px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <SectionHeader number="10/10" title="MAIN SCREENS" />

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
              marginLeft: "9%",
              marginTop:140
            }}
          >
            <div className="absolute" style={{zIndex:-1,left:134,top:260 }}>
              <img 
                src={screenIllustration}
                alt="Screen illustration"
                style={{ width: 464, height: 416,transform:"rotate(5.85deg)",opacity:0.8 }}
              />
            </div>
            <div className="absolute" style={{zIndex:-2,left:6,top:250 }}>
              <img 
                src={screenIllustration}
                alt="Screen illustration"
                style={{ width: 501, height: 448,transform:"rotate(-7.85deg)",opacity:0.8 }}
              />
            </div>
            <PhoneMockup width={301}>
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
                  zIndex:10
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

              {/* <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
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
              </div> */}
            </div>
          </div>
        </div>

        {/* ── Analytics ── */}
        <div
          style={{
            position: "relative",
            marginBottom: 80,
            marginTop:-200,
            marginRight:"9%"
          }}
        >
          <GreenBlob size={160} top={-20} left={-40} opacity={0.1} />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: 42,
            }}
          >
            {/* Heading + paragraph right beside mockups */}
            <div style={{ alignSelf: "flex-end", textAlign: "right", flex: 1 }}>
              <h3
                style={{
                  fontFamily: HEADING_FONT,
                 
                  fontSize: 24,
                  color: "#101010",
                  marginBottom: 8,
                  paddingRight:5
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
                  maxWidth: 550,
                  marginBottom: 0,
                  marginLeft: "auto",
                }}
              >
                The Screen Provides Vendors With Clear Insights Through Sales
                Reports, Top Selling Products, And Inventory Performance, Helping
                Them Understand What Is Working, What Is Not, And Make Informed
                Stocking Decisions.
              </p>
            </div>

            {/* Phone mockups */}
            <div
              style={{
                display: "flex",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              <PhoneMockup width={254}>
                <img 
                src={analytics1}
                style={{objectFit:"cover",width:"100%",height:"100%"}}
                />
              </PhoneMockup>
              <PhoneMockup width={254}>
                <img 
                src={analytics2}
                style={{objectFit:"cover",width:"100%",height:"100%"}}
                />
              </PhoneMockup>
              <PhoneMockup width={254}>
                <img 
                src={analytics3}
                style={{objectFit:"cover",width:"100%",height:"100%"}}
                />
              </PhoneMockup>
            </div>
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
              marginLeft: "9%",
              marginTop:190
            }}
          >
            <div className="absolute" style={{zIndex:-1,left:134,top:230 }}>
              <img 
                src={screenIllustration}
                alt="Screen illustration"
                style={{ width: 464, height: 416,transform:"rotate(5.85deg)",opacity:0.8 }}
              />
            </div>
            <div className="absolute" style={{zIndex:-2,left:6,top:210 }}>
              <img 
                src={screenIllustration}
                alt="Screen illustration"
                style={{ width: 501, height: 448,transform:"rotate(-7.85deg)",opacity:0.8 }}
              />
            </div>
            <PhoneMockup width={284}>
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

              {/* <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <ScreenThumbnail
                  src={inventoryScreen}
                  alt="Inventory"
                  width={140}
                />
              </div> */}
            </div>
          </div>
        </div>

        {/* ── History ── */}
      <div 
        style={{position: "relative",
            marginBottom: 80,
            marginTop:-200,
            marginRight:"9%"}}
      >
        <div
          style={{
             display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: 42,
          }}
        >
          <div style={{ alignSelf: "flex-end", textAlign: "right", flex: 1 }}>
          <h3
            style={{
              fontFamily: HEADING_FONT,
                  fontSize: 24,
                  color: "#101010",
                  marginBottom: 8,
                  paddingRight:5
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
                  maxWidth: 550,
                  marginBottom: 0,
                  marginLeft: "auto",
            }}
          >
            The History Page Provides Vendors With Past Order Details Including
            Order ID, Number Of Items, Payout Amount, Date And Time, Delivery
            Duration, And Customer Reviews When Available.
          </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            {/* <ScreenThumbnail src={orderHistory} alt="Order history" width={180} />
            <ScreenThumbnail
              src={orderHistoryDetails}
              alt="Order details"
              width={180}
            /> */}
            <PhoneMockup width={250}>
              <img 
              src={orderHistory}
              style={{objectFit:"cover",width:"100%",height:"100%"}}
              />
            </PhoneMockup>
            <PhoneMockup width={250}>
              <img 
              src={orderHistoryDetails}
              style={{objectFit:"cover",width:"100%",height:"100%"}}
              />
            </PhoneMockup>
          </div>
        </div>
      </div>
        {/* ── Extras ── */}
        <div
          style={{
            textAlign: "center",
            position: "relative",
            marginTop: 160,
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
            {/* <ScreenThumbnail
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
            /> */}

            <PhoneMockup width={316}>
              <img 
              src={dashboardActivity}
              alt="Activity dashboard"
              style={{objectFit:"fill",width:"100%",height:"100%"}}
              />
            </PhoneMockup>
             <PhoneMockup width={316}>
              
              <img 
              src={profileScreen}
              alt="Profile screen"
              style={{objectFit:"cover",width:"100%",height:"100%"}}
              />
            </PhoneMockup>
            <div className="absolute" style={{zIndex:-1,top:-100,right:400 }}>
              <img
              src={maleVendor}
              alt="Vendor character"
              style={{
                width: 207,
                height:293,
                borderRadius: 40,
                objectFit: "cover",
                zIndex:-5
              }}
              loading="lazy"
            />
            </div>
            
             <PhoneMockup width={316}>
              <img 
              src={subscriptionScreen}
              alt="Subscription screen"
              style={{objectFit:"fill",width:"100%",height:"100%",zIndex:10}}
              />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </CaseStudyContainer>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────

export default function BazarghorrPage() {
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#fefcf4",
        overflowX: "hidden",
      }}
    >
      {/* s1: Hero — rectangular, light bg */}
      <div style={{ background: "#fefcf4", paddingTop: 80, position: "relative" }}>
        <button
          type="button"
          onClick={goHome}
          style={{
            position: "absolute",
            top: 40,
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

      {/* s2: Design Brief — rectangular, light bg, zIndex 2 */}
      <div style={{ background: "#fefcf4", position: 'relative', zIndex: 2 }}>
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
           <CaseStudyContainer
        variant="light"
        zIndex={11}
        style={{ marginTop: SECTION_OVERLAP, position: "relative",marginBottom:130 }}
      >
        <SectionImage src={s14} alt="Numbers" />
      </CaseStudyContainer>

      {/* s12: Footer Image — s13 */}
      <div style={{marginBottom:0, position: "relative", zIndex: 12, transform: "scale(0.8)",height:900 }}>
        {/* <SectionImage src={s13} alt="Footer" /> */}
        <FooterSection onBackToTop={()=>{}} onLetsTalkClick={()=>{}} />
      </div>
    </div>
  );
}
