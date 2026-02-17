import React, { useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import LandingFinal from "./imports/LandingFinal";
import BazarghorrPage from "./pages/BazarghorrPage";
import BMSPage from "./pages/BMSPage";
import MentorMePage from "./pages/MentorMePage";

const WORK_SECTION_TOP = 700;
const ABOUT_SECTION_TOP = 3300;

function HomePage() {
  const scrollTo = useCallback((top: number) => {
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const scrollToTop = useCallback(() => {
    scrollTo(0);
  }, [scrollTo]);

  const scrollToWork = useCallback(() => {
    scrollTo(WORK_SECTION_TOP);
  }, [scrollTo]);

  const scrollToAbout = useCallback(() => {
    scrollTo(ABOUT_SECTION_TOP);
  }, [scrollTo]);

  const scrollToContact = useCallback(() => {
    scrollTo(document.documentElement.scrollHeight);
  }, [scrollTo]);

  return (
    <div className="relative flex h-screen w-screen justify-center overflow-auto overflow-x-hidden bg-[#fefcf4]">
      <LandingFinal
        onHomeClick={scrollToTop}
        onWorkClick={scrollToWork}
        onAboutClick={scrollToAbout}
        onContactClick={scrollToContact}
      />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bazarghorr" element={<BazarghorrPage />} />
      <Route path="/bms" element={<BMSPage />} />
      <Route path="/mentorme" element={<MentorMePage />} />
    </Routes>
  );
}
