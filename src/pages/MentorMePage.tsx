import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaseStudyContainer } from "@/components/ui/CaseStudyContainer";
import FooterSection from "@/imports/landing/FooterSection";
import s1 from "@/assets/mentorme/s1.png";
import s2 from "@/assets/mentorme/s2.png";

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", display: "block", overflow: "visible" }}
      loading="lazy"
    />
  );
}

export default function MentorMePage() {
  const [showStickyButton, setShowStickyButton] = useState(false);
  const navigate = useNavigate();
  const goHome = () => navigate("/");
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
        maxWidth: "100%",
        minHeight: "100vh",
        background: "rgba(0, 0, 0, .87)",
        marginTop: 0,
      }}
    >
      <div style={{ background: "rgba(0, 0, 0, .3)", position: "relative" }}>
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

        {/* Section 1 */}
        <SectionImage src={s1} alt="MentorMe Case Study - Section 1" />

        {/* Section 2 */}

          <div
          style={{
            display: "flex",
            position: "relative",
            margin: "30px 70px",
            height: 400,
            backgroundColor: "rgba(0, 0, 0, .15)",
          }}
        >
          <div
            style={{
              width: "100%",
              objectFit: "fill",
              backgroundColor: "#ffffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >

          </div>
        </div>

        {/* Section 3 */}
                <div style={{ position: "relative" }}>
          <div>
            <CaseStudyContainer
              variant="light"
              zIndex={13}
              style={{
                marginTop: 100,
                position: "relative",
                marginBottom: 0,
                borderBottomLeftRadius: 68,
                borderBottomRightRadius: 68,
                boxShadow: "0 24px 40px rgba(0,0,0,0.08)",
              }}
            >
              <SectionImage src={s2} alt="Potential" />
            </CaseStudyContainer>
          </div>
        </div>

        {/* Footer Section */}
                <div
                  
                  style={{
                    marginBottom: 0,
                    position: "relative",
                    zIndex: 10,
                    marginTop: -160,
                    overflow: "visible",
                    transform: "scale(0.8)",
                    height: 1000,
                  }}
                >
                  {/* <SectionImage src={s13} alt="Footer" /> */}
                  <FooterSection
                    useBgImage={true}
                    onBackToTop={() => {}}
                    onLetsTalkClick={() => {}}
                  />
                </div>
      </div>
    </div>
  );
}
