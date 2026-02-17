import React, { useState, useEffect } from "react";
import svgPaths from "./svg-ghixc67pzt";
import imgLocationPng1 from "figma:asset/33c5347c8865ddee8a9ed022a5443794850405f7.png";
import imgContactMe1 from "figma:asset/1077e5ec0d9d3a9da413e90dbe1960e8121cb40b.png";
import imgMeIcon1 from "figma:asset/c86a38aafd6e5f2f41dab258742a41c31f635ea3.png";
import imgB551D4405Bc31B48D23669C7D041Acd31 from "figma:asset/59441181721f9ec0057cf0ca5351b45db44c073a.png";
import imgThumbsUpFinal1 from "figma:asset/e3f43d7d0d79e436f5e4185b2dd08462a8b334a2.png";

function NavBarText({
  onClick,
  isWhite,
}: {
  onClick: () => void;
  isWhite: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="block cursor-pointer h-[34px] overflow-clip relative shrink-0 text-left w-[64px] group"
      data-name="nav bar text"
    >
      <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[34px]">
        <p
          className={`h-[34px] flex items-center font-bold transition-colors duration-300 ${isWhite ? "text-white" : "text-[#2d6dc3]"}`}
        >
          Home
        </p>
        <p
          className={`h-[34px] flex items-center font-bold transition-colors duration-300 ${isWhite ? "text-white" : "text-[#2d6dc3]"}`}
        >
          Home
        </p>
      </div>
    </button>
  );
}

function NavBarText1({
  onClick,
  isWhite,
}: {
  onClick: () => void;
  isWhite: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="block cursor-pointer h-[34px] overflow-clip relative shrink-0 text-left w-[64px] group"
      data-name="nav bar text"
    >
      <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[34px]">
        <p
          className={`h-[34px] flex items-center font-bold transition-colors duration-300 ${isWhite ? "text-white" : "text-[#2d6dc3]"} `}
        >
          Work
        </p>
        <p
          className={`h-[34px] font-bold flex items-center transition-colors duration-300 ${isWhite ? "text-white" : "text-[#2d6dc3]"} `}
        >
          Work
        </p>
      </div>
    </button>
  );
}

function NavBarText2({
  onClick,
  isWhite,
}: {
  onClick: () => void;
  isWhite: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="block cursor-pointer h-[34px] overflow-clip relative shrink-0 w-[172px] group"
      data-name="nav bar text"
    >
      <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[34px]">
        <p
          className={`h-[34px] flex items-center font-bold transition-colors duration-300 ${isWhite ? "text-white" : "text-[#2d6dc3]"}`}
        >
          Know Me Better
        </p>
        <p
          className={`h-[34px] flex items-center font-bold transition-colors duration-300 ${isWhite ? "text-white" : "text-[#2d6dc3]"}`}
        >
          Know Me Better
        </p>
      </div>
    </button>
  );
}

function NavBarText3({
  onClick,
  isWhite,
}: {
  onClick: () => void;
  isWhite: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="block cursor-pointer h-[34px] overflow-clip relative shrink-0 text-left w-[89px] group"
      data-name="nav bar text"
    >
      <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[34px]">
        <p
          className={`h-[34px] flex items-center font-bold transition-colors duration-300 ${isWhite ? "text-white" : "text-[#2d6dc3]"}`}
        >
          Contact
        </p>
        <p
          className={`h-[34px] flex items-center font-bold transition-colors duration-300 ${isWhite ? "text-white" : "text-[#2d6dc3]"}`}
        >
          Contact
        </p>
      </div>
    </button>
  );
}

function NavBarText4({ isWhite }: { isWhite: boolean }) {
  return (
    <a
      href="#resume"
      className="block h-[34px] overflow-clip relative shrink-0 w-[94px] group"
      data-name="nav bar text"
    >
      <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[34px]">
        <p
          className={`h-[34px] flex items-center font-bold transition-colors duration-300 ${isWhite ? "text-white" : "text-[#2d6dc3]"}`}
        >
          Resume
        </p>
        <p
          className={`h-[34px] flex items-center font-bold transition-colors duration-300 ${isWhite ? "text-white" : "text-[#2d6dc3]"}`}
        >
          Resume
        </p>
      </div>
    </a>
  );
}

function Frame1({
  onHomeClick,
  onWorkClick,
  onAboutClick,
  onContactClick,
  isWhite,
}: {
  onHomeClick: () => void;
  onWorkClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  isWhite: boolean;
}) {
  return (
    <div className="fixed content-stretch flex font-['Martel:ExtraBold',sans-serif] gap-[50px] items-center justify-center leading-[normal] left-1/2 -translate-x-1/2 not-italic text-[20px] top-[20px] z-50 transition-colors duration-300 font-extrabold">
      <NavBarText onClick={onHomeClick} isWhite={isWhite} />
      <NavBarText1 onClick={onWorkClick} isWhite={isWhite} />
      <NavBarText2 onClick={onAboutClick} isWhite={isWhite} />
      <NavBarText3 onClick={onContactClick} isWhite={isWhite} />
      <NavBarText4 isWhite={isWhite} />
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 not-italic top-[calc(50%-357.5px)] ">
      <div className="absolute font-['Clash_Display:Bold',sans-serif] leading-[1.03] left-[calc(50%-832px)] text-[#101010] text-[164.816px] top-[calc(50%-312px)] tracking-[9.889px]">
        <p className="mb-0">DIGITAL PRODUCT</p>
        <p>DESIGNER</p>
      </div>
      <p className="absolute font-['Martel:ExtraBold',sans-serif] leading-[normal] left-[calc(50%-832px)] text-[#2d6dc3] text-[16px] top-[calc(50%-343px)] tracking-[0.48px] ml-5">
        <div className="px-4">USERINTERFACE | USEREXPERIENCE | VISUAL IDENTITY</div>
      </p>
    </div>
  );
}

// Expandable container for "HELLO! I'M SANIYA"
function Frame({
  isActive,
  onHover,
}: {
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <div
      className="bg-[rgba(226,226,226,0.2)] border border-[#2d6dc3] border-solid h-[140px] rounded-[48px] transition-all duration-500 ease-in-out shrink-0 relative overflow-hidden mr-5"
      style={{ width: isActive ? "450px" : "170px" }}
      onMouseEnter={onHover}
    >
      <div className="relative flex items-center justify-center h-full">
        <div
          className={`shrink-0 relative flex items-center justify-center z-10 transition-all duration-500 ${isActive ? "h-[135px] w-[135px]" : "h-[100px] w-[100px]"}`}
          style={{ 
            transform: isActive ? "translateX(-110px)" : "translateX(0)"
          }}
          data-name="me icon"
        >
          <img
            alt=""
            className="h-full w-full object-cover rounded-full"
            src={imgMeIcon1}
          />
        </div>
        <p
          className="font-['Martel:ExtraBold',sans-serif] leading-[normal] not-italic text-[#2d6dc3] text-[24px] whitespace-nowrap transition-opacity duration-300 absolute left-[170px]"
          style={{ opacity: isActive ? 1 : 0 }}
        >
          HELLO! I'M SANIYA
        </p>
      </div>
    </div>
  );
}

// Expandable container for location
function Frame2({
  isActive,
  onHover,
}: {
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <div
      className="bg-[rgba(226,226,226,0.2)] border border-[#2d6dc3] border-solid h-[140px] rounded-[48px] transition-all duration-500 ease-in-out shrink-0"
      style={{ width: isActive ? "450px" : "170px" }}
      onMouseEnter={onHover}
    >
      <div className="relative flex items-center h-full pl-[10px] pr-[10px] gap-5">
        <div
          className="shrink-0 h-[170px] w-[170px] relative flex items-center justify-center"
          data-name="location png"
        >
          <img
            alt=""
            className="h-full w-full object-cover"
            src={imgLocationPng1}
          />
        </div>
        <p
          className="font-['Martel:ExtraBold',sans-serif] leading-[normal] not-italic text-[#2d6dc3] text-[24px] whitespace-nowrap transition-opacity duration-300"
          style={{ opacity: isActive ? 1 : 0 }}
        >
          Ahmedabad | Pune
        </p>
      </div>
    </div>
  );
}

// Expandable container for contact/phone
function Frame4({
  isActive,
  onHover,
}: {
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <div
      className="bg-[rgba(226,226,226,0.2)] border border-[#2d6dc3] border-solid h-[140px] rounded-[48px] transition-all duration-500 ease-in-out shrink-0"
      style={{ width: isActive ? "490px" : "170px" }}
      onMouseEnter={onHover}
    >
      <div className="relative flex items-center h-full pl-[27px] pr-[35px] gap-5">
        <div
          className="shrink-0 h-[135px] w-[135px] relative flex items-center justify-center"
          data-name="contact me"
        >
          <img
            alt=""
            className="h-full w-full object-contain"
            src={imgContactMe1}
          />
        </div>
        <p
          className="font-['Martel:ExtraBold',sans-serif] leading-[normal] not-italic text-[#2d6dc3] text-[24px] whitespace-nowrap transition-opacity duration-300"
          style={{ opacity: isActive ? 1 : 0 }}
        >
          Let's Talk Design
        </p>
      </div>
    </div>
  );
}

function Component() {
  const [activeContainer, setActiveContainer] = useState<
    "profile" | "location" | "phone"
  >("profile");

  return (
    <div
      className="absolute left-[937px] top-[200px] flex gap-[7px]"
      data-name="Component 1"
      onMouseLeave={() => setActiveContainer("profile")}
    >
      <Frame
        isActive={activeContainer === "profile"}
        onHover={() => setActiveContainer("profile")}
      />
      <Frame2
        isActive={activeContainer === "location"}
        onHover={() => setActiveContainer("location")}
      />
      <Frame4
        isActive={activeContainer === "phone"}
        onHover={() => setActiveContainer("phone")}
      />
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 absolute h-[686px] left-[calc(50%+8.5px)] top-40  w-[1664px] mt-5">
      <Group />
      <Component />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[780px] overflow-clip shrink-0 sticky top-[200px] w-full max-w-[1920px] mx-auto relative">
      <Frame3 />
      <div className="-translate-x-1/2 absolute font-['Martel:ExtraBold',sans-serif] leading-[normal] left-1/2 not-italic text-[#2d6dc3] text-[22px] text-center top-[calc(50%+320px)] px-4">
        <p className="mb-0">{`Designing meaningful experiences where every interaction is crafted with purpose, `}</p>
        <p>
          From head scratching moments to flows that just make
          sense.
        </p>
      </div>
    </div>
  );
}

function LetsTalk() {
  return (
    <div
      className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] border-[0.803px] border-[rgba(255,255,255,0.26)] border-solid h-[327px] left-[calc(50%+0.5px)] rounded-[30.507px] top-[187px]"
      style={{ width: "calc(133.33vw - 60px)" }}
      data-name="lets talk"
    />
  );
}

function LetsTalk1() {
  return (
    <div
      className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] border-[0.803px] border-[rgba(255,255,255,0.26)] border-solid h-[328px] left-[calc(50%+0.5px)] rounded-[30.507px] top-[545px]"
      style={{ width: "calc(133.33vw - 60px)" }}
      data-name="lets talk"
    />
  );
}

function LetsTalk2() {
  return (
    <div
      className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] border-[0.803px] border-[rgba(255,255,255,0.26)] border-solid h-[327px] left-[calc(50%+0.5px)] rounded-[30.507px] top-[904px]"
      style={{ width: "calc(133.33vw - 60px)" }}
      data-name="lets talk"
    />
  );
}

function Frame6() {
  return (
    <div className="h-[900px] shrink-0 sticky top-0 w-full">
      <div
       className="absolute h-full left-1/2 top-0"
        style={{
          width: "133.33vw", 
          transform: "translateX(-50%)",
        }}
        data-name="b551d4405bc31b48d23669c7d041acd3 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-full left-0 max-w-none top-0 w-full object-cover"
            src={imgB551D4405Bc31B48D23669C7D041Acd31}
          />
        </div>
      </div>
      <LetsTalk />
      <LetsTalk1 />
      {/* <LetsTalk2 /> */}
    </div>
  );
}

function Group4({ onBackToTop }: { onBackToTop: () => void }) {
  return (
    <button
      onClick={onBackToTop}
      className="absolute cursor-pointer left-[45px] top-[1159px] hover:opacity-70 transition-opacity"
    >
      <p className="font-['Martel:Regular',sans-serif] leading-[normal] not-italic text-[#101010] text-[16px]">{`Back to top `}</p>
      <div
        className="absolute flex h-[14px] items-center justify-center left-[146px] top-[8px] w-0"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[14px]">
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
  );
}

function Frame11() {
  return (
    <div className="absolute h-[307px] left-[1557px] top-[828px] w-[323px]" />
  );
}

function SocialMedia() {
  return (
    <div className="flex items-center justify-center gap-[18px]">
      <a
        href="https://www.linkedin.com/in/saniya"
        target="_blank"
        rel="noopener noreferrer"
        className="size-[46px] hover:scale-110 transition-transform cursor-pointer"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 46 46"
        >
          <path
            d={svgPaths.p30ba2c00}
            fill="var(--fill-0, #101010)"
          />
        </svg>
      </a>
      <a
        href="mailto:saniya@example.com"
        className="size-[46px] hover:scale-110 transition-transform cursor-pointer"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 46 46"
        >
          <path
            d={svgPaths.p3150bc00}
            fill="var(--fill-0, #101010)"
          />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/saniya"
        target="_blank"
        rel="noopener noreferrer"
        className="size-[46px] hover:scale-110 transition-transform cursor-pointer"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 46 46"
        >
          <path
            d={svgPaths.p2bbb0d20}
            fill="var(--fill-0, #101010)"
          />
        </svg>
      </a>
      <a
        href="https://www.behance.net/saniya"
        target="_blank"
        rel="noopener noreferrer"
        className="size-[46px] hover:scale-110 transition-transform cursor-pointer"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 46 46"
        >
          <path
            d={svgPaths.p2b85ed00}
            fill="var(--fill-0, #101010)"
          />
          <path
            d={svgPaths.p3db6fc00}
            fill="var(--fill-0, #101010)"
          />
        </svg>
      </a>
    </div>
  );
}

function Group3({
  onLetsTalkClick,
}: {
  onLetsTalkClick: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full   " >
      {/* "That's a wrap. Or is it?" */}
      <p className="font-['Martel:DemiBold',sans-serif] leading-[normal] not-italic text-[#101010] text-[28px] mb-12">
        That's a wrap. Or is it?
      </p>

      {/* Main heading */}
      <h1 className="font-['Clash_Display:Semibold',sans-serif] leading-[1.03] not-italic text-[#101010] text-[128px] text-center tracking-[7.68px] max-w-[1640px] mb-8">
        Great design starts with a conversation!
      </h1>

      {/* Subtitle */}
      <p className="font-['Martel:DemiBold',sans-serif] leading-[normal] not-italic text-[#101010] text-[28px] text-center mb-12">
        Open to opportunities, collabs, creative challenges, or
        simply a good conversation.
      </p>

      {/* Let's Talk Button with animation */}
      <button
        onClick={onLetsTalkClick}
        className="bg-[rgba(226,226,226,0.2)] border border-[#2d6dc3] border-solid rounded-[38px] cursor-pointer hover:bg-[rgba(226,226,226,0.4)] transition-all hover:scale-105 px-12 py-6 mb-4 relative h-[95px] w-[312px] group overflow-hidden"
      >
        <div className="absolute h-[54px] left-[65px] overflow-clip top-[20.5px] w-[200px]">
          <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[54px]">
            <div className="h-[54px] flex items-center justify-center relative">
              <p className="absolute font-['Martel:ExtraBold',sans-serif] leading-[normal] left-[calc(50%-100px)] not-italic text-[#2d6dc3] text-[32px]">
                Let's Talk
              </p>
              <div className="absolute h-0 left-[176px] top-[27px] w-[24px]">
                <div className="absolute inset-[-7.36px_-4.17%_-7.36px_0]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 25 14.7279"
                  >
                    <path
                      d={svgPaths.p3a9c1f00}
                      fill="var(--stroke-0, #2D6DC3)"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="h-[54px] flex items-center justify-center relative">
              <p className="absolute font-['Martel:ExtraBold',sans-serif] leading-[normal] left-[calc(50%-100px)] not-italic text-[#2d6dc3] text-[32px]">
                Let's Talk
              </p>
              <div className="absolute h-0 left-[176px] top-[27px] w-[24px]">
                <div className="absolute inset-[-7.36px_-4.17%_-7.36px_0]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 25 14.7279"
                  >
                    <path
                      d={svgPaths.p3a9c1f00}
                      fill="var(--stroke-0, #2D6DC3)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>

      {/* "or" text */}
      <p className="font-['Martel:DemiBold',sans-serif] leading-[normal] not-italic text-[#101010] text-[28px] mb-1">
        or
      </p>

      {/* Social Media Icons */}
      <SocialMedia />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[307px] left-[683px] overflow-clip top-[15px] w-[323px]">
      <div
        className="absolute h-[345px] left-[-20px] top-[157px] w-[364px]"
        data-name="thumbs up final 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[149.22%] left-[-0.03%] max-w-none top-0 w-[100.06%]"
            src={imgThumbsUpFinal1}
          />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2">
      <p className="absolute font-['Martel:ExtraBold',sans-serif] leading-[normal] left-[calc(50%-100px)] not-italic text-[#2d6dc3] text-[32px] top-[calc(50%-27px)]">
        Let's Talk
      </p>
      <div className="absolute h-0 left-[176px] top-[27px] w-[24px]">
        <div className="absolute inset-[-7.36px_-4.17%_-7.36px_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 25 14.7279"
          >
            <path
              d={svgPaths.p3a9c1f00}
              fill="var(--stroke-0, #2D6DC3)"
              id="Arrow 2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%+53px)]">
      <p className="absolute font-['Martel:ExtraBold',sans-serif] leading-[normal] left-[calc(50%-100px)] not-italic text-[#2d6dc3] text-[32px] top-[calc(50%+26px)]">
        Let's Talk
      </p>
      <div className="absolute h-0 left-[176px] top-[80px] w-[24px]">
        <div className="absolute inset-[-7.36px_-4.17%_-7.36px_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 25 14.7279"
          >
            <path
              d={svgPaths.p3a9c1f00}
              fill="var(--stroke-0, #2D6DC3)"
              id="Arrow 2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[54px] left-[65px] overflow-clip top-[23px] w-[200px]">
      <Group1 />
      <Group2 />
    </div>
  );
}

function LetsTalk3({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="-translate-x-1/2 absolute bg-[rgba(226,226,226,0.2)] border border-[#2d6dc3] border-solid h-[95px] left-[calc(50%-368px)] rounded-[38px] top-0 w-[312px] cursor-pointer hover:bg-[rgba(226,226,226,0.4)] transition-all hover:scale-105"
      data-name="lets talk"
    >
      <Frame9 />
    </button>
  );
}

function Component1({
  onLetsTalkClick,
}: {
  onLetsTalkClick: () => void;
}) {
  return (
    <div
      className="absolute h-[355px] left-[801px] top-[812px] w-[1048px]"
      data-name="Component 2"
    >
      <Frame12 />
      <LetsTalk3 onClick={onLetsTalkClick} />
    </div>
  );
}

function Group5({
  onLetsTalkClick,
}: {
  onLetsTalkClick: () => void;
}) {
  return (
    <div className="w-full">
      <Group3 onLetsTalkClick={onLetsTalkClick} />
    </div>
  );
}

function Frame7({
  onBackToTop,
  onLetsTalkClick,
}: {
  onBackToTop: () => void;
  onLetsTalkClick: () => void;
}) {
  return (
    <div 
      className="bg-[#fefcf4] h-[960px] shrink-0 sticky top-0 relative"
      style={{
        width: "133.33vw",
        
      }}
    >
      <div
        className="absolute bottom-0 h-[1523px] left-1/2 -translate-x-1/2 w-[1920px]"
        data-name="b551d4405bc31b48d23669c7d041acd3 1"
      />
      <div className="absolute h-0 left-1/2 -translate-x-1/2 top-[850px] w-[1840px]">
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
      <p className="absolute font-['Martel:Light',sans-serif] leading-[normal] left-1/2 -translate-x-1/2 not-italic text-[#101010] text-[16px] top-[890px] text-center max-w-[940px]">{`Built on coffee, love, many iterations, and way too many open tabs. Thanks for stopping by, hope to hear from you soon. `}</p>
      <div className="absolute left-[40px] top-[890px]">
        <button
          onClick={onBackToTop}
          className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          <p className="font-['Martel:Regular',sans-serif] leading-[normal] not-italic text-[#101010] text-[16px]">{`Back to top `}</p>
          <div
            className="flex h-[14px] items-center justify-center w-0"
            style={
              {
                "--transform-inner-width": "0",
                "--transform-inner-height": "0",
              } as React.CSSProperties
            }
          >
            <div className="-rotate-90 flex-none">
              <div className="h-0 relative w-[14px]">
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
      <div className="absolute left-1/2 -translate-x-1/2 top-[100px] w-full">
        <Group5 onLetsTalkClick={onLetsTalkClick} />
      </div>
    </div>
  );
}

function Frame8({
  onBackToTop,
  onLetsTalkClick,
}: {
  onBackToTop: () => void;
  onLetsTalkClick: () => void;
}) {
  return (
    <div
      className="absolute content-stretch flex flex-col items-center left-1/2 top-100 w-full"
      style={{
        
        
        transform: "translate(-50%, 0) scale(0.75)",
        transformOrigin: "top center",
      }}
    >
      <Frame5 />
      <Frame6 />
      <Frame7
        onBackToTop={onBackToTop}
        onLetsTalkClick={onLetsTalkClick}
      />
    </div>
  );
}

export default function LandingFinal({
  onHomeClick,
  onWorkClick,
  onAboutClick,
  onContactClick,
}: {
  onHomeClick: () => void;
  onWorkClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}) {
  const [isNavWhite, setIsNavWhite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjusted for 0.75 scale: blue section starts around 845px (1126 * 0.75)
      const blueStart = 800;
      const blueEnd = 1700;

      setIsNavWhite(scrollY >= blueStart && scrollY < blueEnd);
    };

    // Run on mount to check initial position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="bg-[#fefcf4] relative w-full min-h-screen"
      data-name="Landing final"
    >
      <Frame1
        onHomeClick={onHomeClick}
        onWorkClick={onWorkClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
        isWhite={isNavWhite}
      />
      <Frame8
        onBackToTop={onHomeClick}
        onLetsTalkClick={onContactClick}
      />
    </div>
  );
}