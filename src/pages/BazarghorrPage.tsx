import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaseStudyContainer } from "@/components/ui/CaseStudyContainer";
import FooterSection from "@/imports/landing/FooterSection";

// Screen Images for Customer Page
import dashboardPage from "@/assets/bazarghorr/screens/dashboard.png";
import searchPage from "@/assets/bazarghorr/screens/search-page.png";
import productPage from "@/assets/bazarghorr/screens/product-page.png";

// Screen Images for Extras Page
import profilePage from "@/assets/bazarghorr/screens/main-profile-page.png";
import yourOrders from "@/assets/bazarghorr/screens/your-orders.png";
import yourFav from "@/assets/bazarghorr/screens/your-favourites-3.png";
import storePage from "@/assets/bazarghorr/screens/store-page.png";
import savedAdress from "@/assets/bazarghorr/screens/saved-addresses-v2.png";
import arrow from "@/assets/bazarghorr/arrow.png";
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
import customerOnboarding from "@/assets/bazarghorr/flows/onboarding-customer.mp4";
import customerFlow from "@/assets/bazarghorr/flows/customer-flow-screen-recording.mp4";
import categoriesNavigation from "@/assets/bazarghorr/flows/categories-navigation.mp4";

// Illustrations
import maleVendor from "@/assets/bazarghorr/illustrations/excited.png";
import maleVendorThinking from "@/assets/bazarghorr/illustrations/thinking.png";
import newOrderIllustration from "@/assets/bazarghorr/illustrations/new-order.png";
import screenIllustration from "@/assets/bazarghorr/illustrations/screen-illustrations.png";
import thinkingWoman from "@/assets/bazarghorr/illustrations/thinking-women.png";
import customerOrder from "@/assets/bazarghorr/illustrations/phone-long.png";
import exitedAunty from "@/assets/bazarghorr/illustrations/excited-aunty.png";

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

// Button

// function ModeButton(){

//   return (
//        <div
//       style={{
//         position: "sticky",
//         top: 20,
//         zIndex: 15,
//         display: "flex",
//         justifyContent: "flex-end",
//         paddingRight: 40, // adjust horizontal offset
//       }}
//     >
//     <button
//       onClick={() => setVendorMode(!vendorMode)}
//       className=""
//       style={{
//         width: 226,
//         height: "auto",
//         backgroundColor: vendorMode ? "#0C582B" : "#33302F",
//         color: "white",
//         padding: 10,
//         display: "flex",
//         // alignItems: "center",
//         // justifyContent: "space-between",
//         gap: 0,
//         zIndex: 15,
//         marginBottom:30,
//         marginLeft:230,
//         fontSize:20,
//         borderRadius:40,
//         position:"sticky",
//         top:20,
//         // left:"90%",
//         // transform: "translateX(-90%)",
//       }}
//     >
//       {vendorMode ? (
//         <div style={{ display: "flex", alignItems: "center",justifyContent:"space-between", gap: 18,marginLeft:9 }}>
//           <h3 style={{ margin: 0 }}>Customer App</h3>
//           <svg
//             style={{ transform: "scale(-1)" }}
//             width="44"
//             height="44"
//             viewBox="0 0 44 44"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle
//               cx="21.8457"
//               cy="21.8458"
//               r="21.2553"
//               stroke="#F9F9F9"
//               stroke-width="1.18085"
//             />
//             <path
//               d="M33.8987 22.0909C34.3598 21.6298 34.3598 20.8821 33.8987 20.421L26.3838 12.9061C25.9226 12.4449 25.1749 12.4449 24.7138 12.9061C24.2526 13.3672 24.2526 14.1149 24.7138 14.576L31.3937 21.2559L24.7138 27.9358C24.2526 28.397 24.2526 29.1447 24.7138 29.6058C25.1749 30.067 25.9226 30.067 26.3838 29.6058L33.8987 22.0909ZM31.8828 21.2559L31.8828 22.4368L33.0637 22.4368L33.0637 21.2559L33.0637 20.0751L31.8828 20.0751L31.8828 21.2559Z"
//               fill="#F9F9F9"
//             />
//             <path
//               d="M22.0901 22.0909C22.5512 21.6298 22.5512 20.8821 22.0901 20.421L14.5752 12.9061C14.114 12.4449 13.3663 12.4449 12.9052 12.9061C12.444 13.3672 12.444 14.1149 12.9052 14.576L19.5851 21.2559L12.9052 27.9358C12.444 28.397 12.444 29.1447 12.9052 29.6058C13.3663 30.067 14.114 30.067 14.5752 29.6058L22.0901 22.0909ZM20.0742 21.2559L20.0742 22.4368L21.2551 22.4368L21.2551 21.2559L21.2551 20.0751L20.0742 20.0751L20.0742 21.2559Z"
//               fill="#F9F9F9"
//             />
//           </svg>
//         </div>
//       ) : (
//                 <div style={{ display: "flex", alignItems: "center",justifyContent:"space-between", gap: 18,marginLeft:9 }}>

//           <svg
//             style={{ transform: "scale(-1)" }}
//             width="44"
//             height="44"
//             viewBox="0 0 44 44"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle
//               cx="21.8457"
//               cy="21.8458"
//               r="21.2553"
//               stroke="#F9F9F9"
//               stroke-width="1.18085"
//             />
//             <path
//               d="M33.8987 22.0909C34.3598 21.6298 34.3598 20.8821 33.8987 20.421L26.3838 12.9061C25.9226 12.4449 25.1749 12.4449 24.7138 12.9061C24.2526 13.3672 24.2526 14.1149 24.7138 14.576L31.3937 21.2559L24.7138 27.9358C24.2526 28.397 24.2526 29.1447 24.7138 29.6058C25.1749 30.067 25.9226 30.067 26.3838 29.6058L33.8987 22.0909ZM31.8828 21.2559L31.8828 22.4368L33.0637 22.4368L33.0637 21.2559L33.0637 20.0751L31.8828 20.0751L31.8828 21.2559Z"
//               fill="#F9F9F9"
//             />
//             <path
//               d="M22.0901 22.0909C22.5512 21.6298 22.5512 20.8821 22.0901 20.421L14.5752 12.9061C14.114 12.4449 13.3663 12.4449 12.9052 12.9061C12.444 13.3672 12.444 14.1149 12.9052 14.576L19.5851 21.2559L12.9052 27.9358C12.444 28.397 12.444 29.1447 12.9052 29.6058C13.3663 30.067 14.114 30.067 14.5752 29.6058L22.0901 22.0909ZM20.0742 21.2559L20.0742 22.4368L21.2551 22.4368L21.2551 21.2559L21.2551 20.0751L20.0742 20.0751L20.0742 21.2559Z"
//               fill="#F9F9F9"
//             />
//           </svg>
//           <h3 style={{ marginLeft: 5 }}>Vendor App</h3>
//         </div>
//       )}
//     </button>
//     </div>
//   );
// }

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
          padding: "0px 40px 80px",
        }}
      >
        <SectionHeader number="09/10" title="VENDOR APP UI BREAKDOWN" />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 80,
            
            margin: "18%",
            marginTop: "10%",
            marginBottom: 60,
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
          <div
            style={{
              flex: 1,
              alignSelf: "flex-end",
              position: "relative",
              overflow: "visible",
            }}
          >
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
              The Onboarding Flow Starts With A Landing Page That Sets Context
              For The Platform. Vendors Log In Using Their Phone Number And
              Complete A Two Step Onboarding With Essential Personal Details And
              Optional Shop Details For Faster Access.
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
          // overflow: "hidden",
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
              marginTop: 140,
            }}
          >
            <div
              className="absolute"
              style={{ zIndex: -1, left: 134, top: 260 }}
            >
              <img
                src={screenIllustration}
                alt="Screen illustration"
                style={{
                  width: 464,
                  height: 416,
                  transform: "rotate(5.85deg)",
                  opacity: 0.8,
                }}
              />
            </div>
            <div className="absolute" style={{ zIndex: -2, left: 6, top: 250 }}>
              <img
                src={screenIllustration}
                alt="Screen illustration"
                style={{
                  width: 501,
                  height: 448,
                  transform: "rotate(-7.85deg)",
                  opacity: 0.8,
                }}
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
                  zIndex: 10,
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
            marginTop: -200,
            marginRight: "9%",
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
                  paddingRight: 5,
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
                Reports, Top Selling Products, And Inventory Performance,
                Helping Them Understand What Is Working, What Is Not, And Make
                Informed Stocking Decisions.
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
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </PhoneMockup>
              <PhoneMockup width={254}>
                <img
                  src={analytics2}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </PhoneMockup>
              <PhoneMockup width={254}>
                <img
                  src={analytics3}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
              marginTop: 190,
            }}
          >
            <div
              className="absolute"
              style={{ zIndex: -1, left: 134, top: 230 }}
            >
              <img
                src={screenIllustration}
                alt="Screen illustration"
                style={{
                  width: 464,
                  height: 416,
                  transform: "rotate(5.85deg)",
                  opacity: 0.8,
                }}
              />
            </div>
            <div className="absolute" style={{ zIndex: -2, left: 6, top: 210 }}>
              <img
                src={screenIllustration}
                alt="Screen illustration"
                style={{
                  width: 501,
                  height: 448,
                  transform: "rotate(-7.85deg)",
                  opacity: 0.8,
                }}
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
          style={{
            position: "relative",
            marginBottom: 80,
            marginTop: -200,
            marginRight: "9%",
          }}
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
                  paddingRight: 5,
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
                The History Page Provides Vendors With Past Order Details
                Including Order ID, Number Of Items, Payout Amount, Date And
                Time, Delivery Duration, And Customer Reviews When Available.
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
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </PhoneMockup>
              <PhoneMockup width={250}>
                <img
                  src={orderHistoryDetails}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
                style={{ objectFit: "fill", width: "100%", height: "100%" }}
              />
            </PhoneMockup>
            <PhoneMockup width={316}>
              <img
                src={profileScreen}
                alt="Profile screen"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </PhoneMockup>
            <div
              className="absolute"
              style={{ zIndex: -1, top: -100, right: 400 }}
            >
              <img
                src={maleVendor}
                alt="Vendor character"
                style={{
                  width: 207,
                  height: 293,
                  borderRadius: 40,
                  objectFit: "cover",
                  zIndex: -5,
                }}
                loading="lazy"
              />
            </div>

            <PhoneMockup width={316}>
              <img
                src={subscriptionScreen}
                alt="Subscription screen"
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "100%",
                  zIndex: 10,
                }}
              />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </CaseStudyContainer>
  );
}

function VendorSection() {
  // const [vendorMode, setVendorMode] = React.useState(true);
  // const [showButton, setShowButton] = React.useState(true);

  return (
    <div>
      {/* {showButton && (
        <div
          style={{
            position: "sticky",
            top: 20,
            zIndex: 20,
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: 40,
          }}
        >
          <button
            onClick={() => setVendorMode(!vendorMode)}
            className=""
            style={{
              width: 226,
              height: "auto",
              backgroundColor: vendorMode ? "#0C582B" : "#33302F",
              color: "white",
              padding: 10,
              display: "flex",
              gap: 0,
              zIndex: 15,
              marginBottom: 0,
              marginLeft: 230,
              fontSize: 20,
              borderRadius: 40,
              position: "relative",
            }}
          >
            {vendorMode ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 18,
                  marginLeft: 9,
                }}
              >
                <h3 style={{ margin: 0 }}>Customer App</h3>
                <svg
                  style={{ transform: "scale(-1)" }}
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="21.8457"
                    cy="21.8458"
                    r="21.2553"
                    stroke="#F9F9F9"
                    strokeWidth="1.18085"
                  />
                  <path
                    d="M33.8987 22.0909C34.3598 21.6298 34.3598 20.8821 33.8987 20.421L26.3838 12.9061C25.9226 12.4449 25.1749 12.4449 24.7138 12.9061C24.2526 13.3672 24.2526 14.1149 24.7138 14.576L31.3937 21.2559L24.7138 27.9358C24.2526 28.397 24.2526 29.1447 24.7138 29.6058C25.1749 30.067 25.9226 30.067 26.3838 29.6058L33.8987 22.0909ZM31.8828 21.2559L31.8828 22.4368L33.0637 22.4368L33.0637 21.2559L33.0637 20.0751L31.8828 20.0751L31.8828 21.2559Z"
                    fill="#F9F9F9"
                  />
                  <path
                    d="M22.0901 22.0909C22.5512 21.6298 22.5512 20.8821 22.0901 20.421L14.5752 12.9061C14.114 12.4449 13.3663 12.4449 12.9052 12.9061C12.444 13.3672 12.444 14.1149 12.9052 14.576L19.5851 21.2559L12.9052 27.9358C12.444 28.397 12.444 29.1447 12.9052 29.6058C13.3663 30.067 14.114 30.067 14.5752 29.6058L22.0901 22.0909ZM20.0742 21.2559L20.0742 22.4368L21.2551 22.4368L21.2551 21.2559L21.2551 20.0751L20.0742 20.0751L20.0742 21.2559Z"
                    fill="#F9F9F9"
                  />
                </svg>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 18,
                  marginLeft: 9,
                }}
              >
                <svg
                  style={{ transform: "scale(-1)" }}
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="21.8457"
                    cy="21.8458"
                    r="21.2553"
                    stroke="#F9F9F9"
                    strokeWidth="1.18085"
                  />
                  <path
                    d="M33.8987 22.0909C34.3598 21.6298 34.3598 20.8821 33.8987 20.421L26.3838 12.9061C25.9226 12.4449 25.1749 12.4449 24.7138 12.9061C24.2526 13.3672 24.2526 14.1149 24.7138 14.576L31.3937 21.2559L24.7138 27.9358C24.2526 28.397 24.2526 29.1447 24.7138 29.6058C25.1749 30.067 25.9226 30.067 26.3838 29.6058L33.8987 22.0909ZM31.8828 21.2559L31.8828 22.4368L33.0637 22.4368L33.0637 21.2559L33.0637 20.0751L31.8828 20.0751L31.8828 21.2559Z"
                    fill="#F9F9F9"
                  />
                  <path
                    d="M22.0901 22.0909C22.5512 21.6298 22.5512 20.8821 22.0901 20.421L14.5752 12.9061C14.114 12.4449 13.3663 12.4449 12.9052 12.9061C12.444 13.3672 12.444 14.1149 12.9052 14.576L19.5851 21.2559L12.9052 27.9358C12.444 28.397 12.444 29.1447 12.9052 29.6058C13.3663 30.067 14.114 30.067 14.5752 29.6058L22.0901 22.0909ZM20.0742 21.2559L20.0742 22.4368L21.2551 22.4368L21.2551 21.2559L21.2551 20.0751L20.0742 20.0751L20.0742 21.2559Z"
                    fill="#F9F9F9"
                  />
                </svg>
                <h3 style={{ marginLeft: 5 }}>Vendor App</h3>
              </div>
            )}
          </button>
        </div>
      )} */}

      <VendorAppUISection />
      <CaseStudyContainer
        variant="dark"
        zIndex={10}
        style={{ marginTop: SECTION_OVERLAP, position: "relative" }}
      >
        <SectionImage src={s10} alt="Dashboard" />
      </CaseStudyContainer>
      <MainScreensSection />
    </div>
  );
}

// Customer App UI Breakdown (CODED) ─────────────────────────────
function CustomerAppUISection() {
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
          padding: "0px 40px 80px",
        }}
      >
        <SectionHeader number="09/10" title="Customer APP UI BREAKDOWN" />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 80,
            
            margin: "18%",
            marginTop: "10%",
            marginBottom: 60,
          }}
        >
          {/* Phone mockup with onboarding video */}
          <PhoneMockup width={300}>
            <video
              src={customerOnboarding}
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
          <div
            style={{
              flex: 1,
              alignSelf: "flex-end",
              position: "relative",
              overflow: "visible",
            }}
          >
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
                src={thinkingWoman}
                alt="Customer illustration"
                style={{
                  width: 400,
                  height: 400,
                  transform: "scaleX(1)",
                  borderRadius: "50%",
                  objectFit: "cover",
                  position: "absolute",
                  top: -31,
                  left: -1,
                  right: 5,
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
              Customer onboarding is kept simple with phone number and OTP
              login, requiring only first and last name for quick access.
            </p>
          </div>
        </div>
      </div>
    </CaseStudyContainer>
  );
}

function CustomerMainScreensSection() {
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
          // overflow: "hidden",
        }}
      >
        <SectionHeader number="10/10" title="MAIN SCREENS" />

        {/* ── CATEGORIES NAVIGATION ── */}
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
              marginTop: 140,
            }}
          >
            <div
              className="absolute"
              style={{ zIndex: -1, left: 134, top: 260 }}
            >
              <img
                src={screenIllustration}
                alt="Screen illustration"
                style={{
                  width: 464,
                  height: 416,
                  transform: "rotate(5.85deg)",
                  opacity: 0.8,
                }}
              />
            </div>
            <div className="absolute" style={{ zIndex: -2, left: 6, top: 250 }}>
              <img
                src={screenIllustration}
                alt="Screen illustration"
                style={{
                  width: 501,
                  height: 448,
                  transform: "rotate(-7.85deg)",
                  opacity: 0.8,
                }}
              />
            </div>
            <PhoneMockup width={301}>
              <video
                src={categoriesNavigation}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 10,
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
                CATEGORIES NAVIGATION
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
                Using A Checklist, And Swipe To Update Order Status. Delivery
                Partner Details Are Shown, And Vendors Are Notified Once The
                Order Is Completed While Continuing On The Dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* ── BUY AGAIN ── */}
        <div
          style={{
            position: "relative",
            marginBottom: 80,
            marginTop: -600,
            marginRight: "-10%",
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
            {/* <img src={customerOrder} alt="Customer order"  /> */}
            {/* Heading + paragraph right beside mockups */}
            <div
              style={{
                alignSelf: "flex-start",
                textAlign: "right",
                flex: 1,
                marginRight: "-27%",
                marginTop: 200,
              }}
            >
              <h3
                style={{
                  fontFamily: HEADING_FONT,

                  fontSize: 24,
                  color: "#101010",
                  marginBottom: 8,
                  paddingRight: 5,
                }}
              >
                BUY AGAIN
              </h3>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#444",
                  maxWidth: 450,
                  marginBottom: 0,
                  marginLeft: "auto",
                }}
              >
                The Order Again Page Lets Customers Quickly Reorder Previously
                Purchased Items From The Same Kirana Store, Saving Time And
                Making Repeat Grocery Shopping Effortless.
              </p>
            </div>

            {/* Phone mockups */}
            <div
              style={
                {
                  // display: "flex",
                  // gap: 20,
                  // flexWrap: "wrap",
                }
              }
            >
              <img
                src={customerOrder}
                alt="Customer order"
                style={{ height: 1000, width: 1100, right: -200 }}
              />
            </div>
          </div>
        </div>

        {/* ── CUSTOMER FLOW ── */}
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
              marginTop: 190,
            }}
          >
            <div
              className="absolute"
              style={{ zIndex: -1, left: 134, top: 230 }}
            >
              <img
                src={screenIllustration}
                alt="Screen illustration"
                style={{
                  width: 464,
                  height: 416,
                  transform: "rotate(5.85deg)",
                  opacity: 0.8,
                }}
              />
            </div>
            <div className="absolute" style={{ zIndex: -2, left: 6, top: 210 }}>
              <img
                src={screenIllustration}
                alt="Screen illustration"
                style={{
                  width: 501,
                  height: 448,
                  transform: "rotate(-7.85deg)",
                  opacity: 0.8,
                }}
              />
            </div>
            <PhoneMockup width={284}>
              <video
                src={customerFlow}
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
                Card & Order Tracking
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
                The Cart Flow Allows Customers To Review Selected Items, Choose
                Their Preferred Kirana Store, And Place Orders With Clear
                Pricing And Delivery Details. Once An Order Is Placed, Real Time
                Tracking Keeps Users Informed About Order Status, Delivery
                Progress, And Completion.
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

        {/* ── SEARCH NAVIGATION ── */}
        <div
          style={{
            position: "relative",
            marginBottom: 80,
            marginTop: -200,
            marginRight: "9%",
            zIndex: 9,
          }}
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
                  paddingRight: 5,
                }}
              >
                SEARCH NAVIGATION
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
                The search feature Supports Local Languages And Smart
                Suggestions, Showing Relevant And Similar Products. Selecting a
                Result Takes Users Directly To The Product Page.
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
                  src={dashboardPage}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </PhoneMockup>
              <PhoneMockup width={250}>
                <img
                  src={searchPage}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </PhoneMockup>
              <PhoneMockup width={250}>
                <img
                  src={productPage}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
            overflow: "visible",
            zIndex: 9,
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            Profile
            <img
              src={arrow}
              style={{
                width: 43,
                height: 10,
                marginLeft: 4,
                verticalAlign: "middle",
                display: "inline-block",
              }}
            />
            Your Order
            <img
              src={arrow}
              style={{
                width: 43,
                height: 10,
                marginLeft: 4,
                verticalAlign: "middle",
                display: "inline-block",
              }}
            />
            Your Favourites
            <img
              src={arrow}
              style={{
                width: 43,
                height: 10,
                marginLeft: 4,
                verticalAlign: "middle",
                display: "inline-block",
              }}
            />
            My Adresses
            <img
              src={arrow}
              style={{
                width: 43,
                height: 10,
                marginLeft: 4,
                verticalAlign: "middle",
                display: "inline-block",
              }}
            />
            Store Page
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 30,
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

            <PhoneMockup width={250}>
              <img
                src={profilePage}
                alt="Activity dashboard"
                style={{ objectFit: "fill", width: "100%", height: "100%" }}
              />
            </PhoneMockup>
            <PhoneMockup width={250}>
              <img
                src={yourOrders}
                alt="Profile screen"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </PhoneMockup>
            <div
              className="absolute"
              style={{ zIndex: -1, top: -50, right: "8%" }}
            >
              <img
                src={exitedAunty}
                alt="Vendor character"
                style={{
                  width: 267,
                  height: 350,
                  borderRadius: 40,
                  objectFit: "cover",
                  zIndex: 10,
                  overflow: "visible",
                }}
                loading="lazy"
              />
            </div>

            <PhoneMockup width={250}>
              <img
                src={yourFav}
                alt="Subscription screen"
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "100%",
                  zIndex: 10,
                }}
              />
            </PhoneMockup>
            <PhoneMockup width={250}>
              <img
                src={storePage}
                alt="Store page"
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "100%",
                  zIndex: 10,
                }}
              />
            </PhoneMockup>
            <PhoneMockup width={250}>
              <img
                src={savedAdress}
                alt="Saved addresses screen"
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "100%",
                  zIndex: 10,
                }}
              />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </CaseStudyContainer>
  );
}

function CustomerSection() {
  return (
    <div>
      <CustomerAppUISection />
      <CustomerMainScreensSection />
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────

export default function BazarghorrPage() {
  const [vendorMode, setVendorMode] = React.useState(true);
  const [showButton, setShowButton] = React.useState(true);
  const [buttonVisible, setButtonVisible] = React.useState(true);
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [buttonAnimating, setButtonAnimating] = React.useState(false);
  const [modeDirection, setModeDirection] = useState<"left" | "right" | null>(
    null,
  );
  const [modeAnimating, setModeAnimating] = useState(false);
  const navigate = useNavigate();

  const vendorRef = React.useRef<HTMLDivElement>(null);
  const customerRef = React.useRef<HTMLDivElement>(null);
  const numbersSectionRef = React.useRef<HTMLDivElement>(null);

  const goHome = () => navigate("/");

  const handleModeChange = () => {
    const nextMode = !vendorMode;
    // decide horizontal slide direction
    setModeDirection(nextMode ? "left" : "right");
    setModeAnimating(true);
    // slide-out duration ~= 350ms, then toggle mode and scroll, then slide back in
    setTimeout(() => {
      setVendorMode(nextMode);
      // small delay to allow DOM to update then scroll
      setTimeout(() => {
        if (nextMode && vendorRef.current) {
          vendorRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else if (!nextMode && customerRef.current) {
          customerRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 120);
      // reset animation state to slide back in
      setModeAnimating(false);
      setModeDirection(null);
    }, 350);
  };

  const getModeButtonTransform = () => {
    const base = buttonAnimating
      ? "translateY(-120%) scaleY(0.7)"
      : "translateY(0) scaleY(1)";
    if (modeAnimating && modeDirection === "right")
      return `${base} translateX(100vw)`;
    if (modeAnimating && modeDirection === "left")
      return `${base} translateX(-100vw)`;
    return base;
  };

  const getInnerButtonTransform = () => {
    // counter-translate horizontal movement so inner content appears static
    if (modeAnimating && modeDirection === "right") return "translateX(-100vw)";
    if (modeAnimating && modeDirection === "left") return "translateX(100vw)";
    return "translateX(0)";
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setButtonAnimating(true);
          setTimeout(() => {
            setShowButton(false);
            setButtonAnimating(false);
          }, 350); // match animation duration
        } else {
          setShowButton(true);
          setButtonVisible(true);
        }
      },
      {
        root: null,
        threshold: 0.9,
      },
    );
    if (numbersSectionRef.current) {
      observer.observe(numbersSectionRef.current);
    }
    return () => {
      if (numbersSectionRef.current) {
        observer.unobserve(numbersSectionRef.current);
      }
    };
  }, []);

  // When showButton becomes true, make button visible again
  useEffect(() => {
    if (showButton) setButtonVisible(true);
  }, [showButton]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setShowStickyButton(true);
      } else {
        setShowStickyButton(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        // width: "100%",
        maxWidth: "100%",
        minHeight: "100vh",
        background: "#fefcf4",
        marginTop: 0,
        // overflowX: "hidden",
      }}
    >
      {/* s1: Hero — rectangular, light bg */}
      <div style={{ background: "#fefcf4", position: "relative" }}>
        {showStickyButton && (
          <button
            type="button"
            onClick={goHome}
            style={{
              position: "sticky",
              top: 20,
              left: 32,
              zIndex: 30,
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
        )}

        <SectionImage src={s1} alt="Bazarghorr hero" />

        {/* s2: Design Brief — rectangular, light bg, zIndex 2 */}
        <div style={{ background: "#fefcf4", position: "relative", zIndex: 2 }}>
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

        {/* Mode changing Button */}

        {showButton && buttonVisible && (
          <div
            style={{
              position: "sticky",
              top: 20,
              zIndex: 20,
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: 40,
              transition:
                "transform 0.35s cubic-bezier(.4,1.6,.6,1), opacity 0.35s cubic-bezier(.4,1.6,.6,1)",
              transform: buttonAnimating
                ? "translateY(-120%) scaleY(0.7)"
                : "translateY(0) scaleY(1)",
              opacity: buttonAnimating ? 0 : 1,
              pointerEvents: buttonAnimating ? "none" : "auto",
            }}
            onTransitionEnd={() => {
              if (buttonAnimating) setButtonVisible(false);
            }}
          >
            <button
              onClick={handleModeChange}
              className=""
              style={{
                width: 226,
                height: "auto",
                backgroundColor: vendorMode ? "#0C582B" : "#33302F",
                color: "white",
                padding: 10,
                display: "flex",
                gap: 0,
                zIndex: 15,
                marginBottom: 0,
                marginLeft: 230,
                fontSize: 20,
                borderRadius: 40,
                position: "relative",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                transition: "background 0.2s",
              }}
            >
              {vendorMode ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 18,
                    marginLeft: 9,
                  }}
                >
                  <h3 style={{ margin: 0 }}>Customer App</h3>
                  <svg
                    style={{ transform: "scale(-1)" }}
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="21.8457"
                      cy="21.8458"
                      r="21.2553"
                      stroke="#F9F9F9"
                      strokeWidth="1.18085"
                    />
                    <path
                      d="M33.8987 22.0909C34.3598 21.6298 34.3598 20.8821 33.8987 20.421L26.3838 12.9061C25.9226 12.4449 25.1749 12.4449 24.7138 12.9061C24.2526 13.3672 24.2526 14.1149 24.7138 14.576L31.3937 21.2559L24.7138 27.9358C24.2526 28.397 24.2526 29.1447 24.7138 29.6058C25.1749 30.067 25.9226 30.067 26.3838 29.6058L33.8987 22.0909ZM31.8828 21.2559L31.8828 22.4368L33.0637 22.4368L33.0637 21.2559L33.0637 20.0751L31.8828 20.0751L31.8828 21.2559Z"
                      fill="#F9F9F9"
                    />
                    <path
                      d="M22.0901 22.0909C22.5512 21.6298 22.5512 20.8821 22.0901 20.421L14.5752 12.9061C14.114 12.4449 13.3663 12.4449 12.9052 12.9061C12.444 13.3672 12.444 14.1149 12.9052 14.576L19.5851 21.2559L12.9052 27.9358C12.444 28.397 12.444 29.1447 12.9052 29.6058C13.3663 30.067 14.114 30.067 14.5752 29.6058L22.0901 22.0909ZM20.0742 21.2559L20.0742 22.4368L21.2551 22.4368L21.2551 21.2559L21.2551 20.0751L20.0742 20.0751L20.0742 21.2559Z"
                      fill="#F9F9F9"
                    />
                  </svg>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 18,
                    marginLeft: 9,
                  }}
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="21.8457"
                      cy="21.8458"
                      r="21.2553"
                      stroke="#F9F9F9"
                      strokeWidth="1.18085"
                    />
                    <path
                      d="M33.8987 22.0909C34.3598 21.6298 34.3598 20.8821 33.8987 20.421L26.3838 12.9061C25.9226 12.4449 25.1749 12.4449 24.7138 12.9061C24.2526 13.3672 24.2526 14.1149 24.7138 14.576L31.3937 21.2559L24.7138 27.9358C24.2526 28.397 24.2526 29.1447 24.7138 29.6058C25.1749 30.067 25.9226 30.067 26.3838 29.6058L33.8987 22.0909ZM31.8828 21.2559L31.8828 22.4368L33.0637 22.4368L33.0637 21.2559L33.0637 20.0751L31.8828 20.0751L31.8828 21.2559Z"
                      fill="#F9F9F9"
                    />
                    <path
                      d="M22.0901 22.0909C22.5512 21.6298 22.5512 20.8821 22.0901 20.421L14.5752 12.9061C14.114 12.4449 13.3663 12.4449 12.9052 12.9061C12.444 13.3672 12.444 14.1149 12.9052 14.576L19.5851 21.2559L12.9052 27.9358C12.444 28.397 12.444 29.1447 12.9052 29.6058C13.3663 30.067 14.114 30.067 14.5752 29.6058L22.0901 22.0909ZM20.0742 21.2559L20.0742 22.4368L21.2551 22.4368L21.2551 21.2559L21.2551 20.0751L20.0742 20.0751L20.0742 21.2559Z"
                      fill="#F9F9F9"
                    />
                  </svg>
                  <h3 style={{ marginLeft: 5 }}>Vendor App</h3>
                </div>
              )}
            </button>
          </div>
        )}

        {/* s9: Vendor App UI Breakdown — light, curved top, CODED */}
        <div ref={vendorMode ? vendorRef : customerRef}>
          {vendorMode ? <VendorSection /> : <CustomerSection />}
        </div>

        <CaseStudyContainer
          variant="light"
          zIndex={11}
          style={{
            marginTop: SECTION_OVERLAP,
            position: "relative",
            marginBottom: 130,
          }}
        >
          <SectionImage src={s14} alt="Numbers" />
        </CaseStudyContainer>

        {/* s12: Footer Image — s13 */}
        <div
          ref={numbersSectionRef}
          style={{
            marginBottom: 0,
            position: "relative",
            zIndex: 12,
            transform: "scale(0.8)",
            height: 10,
          }}
        >
          {/* <SectionImage src={s13} alt="Footer" /> */}
          <FooterSection useBgImage={true} onBackToTop={() => {}} onLetsTalkClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
