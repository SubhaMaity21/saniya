import React, { useRef } from "react";
import LandingFinal from "./imports/LandingFinal";

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToWork = () => {
    // Adjusted for 0.75 scale (1200 * 0.75 = 900px)
    window.scrollTo({ top: 900, behavior: "smooth" });
  };

  const scrollToAbout = () => {
    // Adjusted for 0.75 scale (2400 * 0.75 = 1800px)
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  const scrollToContact = () => {
    // Scroll to contact/footer section (bottom of page)
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#fefcf4] relative w-screen h-screen flex justify-center align-center overflow-auto overflow-x-hidden">
      <LandingFinal
        onHomeClick={scrollToTop}
        onWorkClick={scrollToWork}
        onAboutClick={scrollToAbout}
        onContactClick={scrollToContact}
      />
    </div>
  );
}