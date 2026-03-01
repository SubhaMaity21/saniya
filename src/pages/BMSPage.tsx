import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaseStudyContainer } from "@/components/ui/CaseStudyContainer";

//sections
import s1 from "@/assets/bms/s1.jpeg";
import s2 from "@/assets/bms/s2.png";
import s3 from "@/assets/bms/s3.png";
import s4 from "@/assets/bms/s4.png";
import s5 from "@/assets/bms/s5.png";
import s6 from "@/assets/bms/s6.png";
import s7 from "@/assets/bms/s7.jpeg";
import s10 from "@/assets/bms/s10a.jpeg";
import s11 from "@/assets/bms/s11.jpeg";
//videos
import s10v from "@/assets/bms/s10va.mp4";
import s11v from "@/assets/bms/s11v.mp4";

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

export default function BMSPage() {
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
        background: "#FEF9F6",
        marginTop: 0,
      }}
    >
      <div style={{ background: "#FEF9F6", position: "relative" }}>
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

        <SectionImage src={s1} alt="BMS Case Study - Section 1" />

        {/* Section 2 */}

        <div
          style={{
            display: "flex",
            position: "relative",
            margin: 30,
            backgroundColor: "#FEF9F6",
          }}
        >
          <div
            style={{
              width: "50%",
              objectFit: "cover",
              backgroundColor: "#942828ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 800,
                width: "100%",
                objectFit: "cover",
                backgroundColor: "#f6e5e5ff",
                borderRadius: 30,
                padding: 40,
                margin: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "50%",
              objectFit: "cover",
              backgroundColor: "#fffcf4ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={s2}
              alt="BMS Case Study - Section 2"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Section 3 */}
        <SectionImage src={s3} alt="BMS Case Study - Section 3" />

        {/* Section 4 */}
        <div style={{ display: "flex", position: "relative", margin: 30 }}>
          <div
            style={{
              width: "50%",
              objectFit: "cover",
              backgroundColor: "#942828ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 700,
                width: "100%",
                objectFit: "cover",
                backgroundColor: "#f6e5e5ff",
                borderRadius: 30,
                padding: 40,
                margin: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "50%",
              objectFit: "cover",
              backgroundColor: "#fffcf4ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={s4}
              alt="BMS Case Study - Section 4"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Section 5 */}
        <SectionImage src={s5} alt="BMS Case Study - Section 5" />

        {/* Section 6  */}

        <div
          style={{
            display: "flex",
            position: "relative",
            margin: 30,
            height: 500,
          }}
        >
          <div
            style={{
              width: "100%",
              objectFit: "cover",
              backgroundColor: "#942828ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
        </div>
        {/* section 7 */}
        <SectionImage src={s7} alt="BMS Case Study - Section 7" />

        {/* section 8 */}

        {/* section 9 */}

        {/* section 10 */}
        <div style={{ display: "flex", position: "relative", margin: 30 }}>
          <div
            style={{
              width: "60%",
              objectFit: "cover",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 700,
                // width: "100%",
                objectFit: "fill",
                backgroundColor: "#d6f2e4be",
                borderRadius: 30,
                padding: 40,
                margin: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <video
                src={s10v}
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
            </div>
          </div>
          <div
            style={{
              // width: "50%",
              objectFit: "cover",
              backgroundColor: "#fffcf4ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "80px 30px",
            }}
          >
            <img
              src={s10}
              alt="BMS Case Study - Section 10"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Section 11 */}
        <div style={{ display: "flex", position: "relative", margin: 30,marginLeft: 70 }}>
          <div
            style={{
              // width: "50%",
              objectFit: "cover",
              backgroundColor: "#FEF9F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "80px 30px",
              marginBottom:30
            }}
          >
            <img
              src={s11}
              alt="BMS Case Study - Section 11"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              width: "60%",
              objectFit: "cover",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 700,
                // width: "100%",
                objectFit: "fill",
                backgroundColor: "#d6f2e4be",
                borderRadius: 30,
                padding: 40,
                margin: 20,
                marginRight:-60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <video
                src={s11v}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
