import React from "react";
import svgPaths from "./svg-ghixc67pzt";
import imgLocationPng1 from "figma:asset/33c5347c8865ddee8a9ed022a5443794850405f7.png";
import imgContactMe1 from "figma:asset/1077e5ec0d9d3a9da413e90dbe1960e8121cb40b.png";
import imgMeIcon1 from "figma:asset/c86a38aafd6e5f2f41dab258742a41c31f635ea3.png";
import imgB551D4405Bc31B48D23669C7D041Acd31 from "figma:asset/59441181721f9ec0057cf0ca5351b45db44c073a.png";
import imgThumbsUpFinal1 from "figma:asset/e3f43d7d0d79e436f5e4185b2dd08462a8b334a2.png";

function NavBarText() {
  return (
    <button className="block cursor-pointer h-[34px] overflow-clip relative shrink-0 text-left w-[64px]" data-name="nav bar text">
      <p className="absolute left-0 top-[calc(50%+17px)]">Home</p>
      <p className="absolute left-0 top-[calc(50%-17px)]">Home</p>
    </button>
  );
}

function NavBarText1() {
  return (
    <button className="block cursor-pointer h-[34px] overflow-clip relative shrink-0 text-left w-[64px]" data-name="nav bar text">
      <p className="absolute left-0 top-[calc(50%+17px)]">Work</p>
      <p className="absolute left-0 top-[calc(50%-17px)]">Work</p>
    </button>
  );
}

function NavBarText2() {
  return (
    <div className="h-[34px] overflow-clip relative shrink-0 w-[172px]" data-name="nav bar text">
      <p className="absolute left-0 top-[calc(50%+17px)]">Know Me Better</p>
      <p className="absolute left-0 top-[calc(50%-17px)]">Know Me Better</p>
    </div>
  );
}

function NavBarText3() {
  return (
    <button className="block cursor-pointer h-[34px] overflow-clip relative shrink-0 text-left w-[89px]" data-name="nav bar text">
      <p className="absolute left-0 top-[calc(50%+17px)]">Contact</p>
      <p className="absolute left-0 top-[calc(50%-17px)]">Contact</p>
    </button>
  );
}

function NavBarText4() {
  return (
    <div className="h-[34px] overflow-clip relative shrink-0 w-[94px]" data-name="nav bar text">
      <p className="absolute left-0 top-[calc(50%+17px)]">Resume</p>
      <p className="absolute left-0 top-[calc(50%-17px)]">Resume</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex font-['Martel:Heavy',sans-serif] gap-[50px] items-center leading-[normal] left-[calc(50%+15.5px)] not-italic text-[#2d6dc3] text-[20px] top-[47px]">
      <NavBarText />
      <NavBarText1 />
      <NavBarText2 />
      <NavBarText3 />
      <NavBarText4 />
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 not-italic top-[calc(50%-157.5px)]">
      <div className="absolute font-['Clash_Display:Semibold',sans-serif] leading-[1.03] left-[calc(50%-829.9px)] text-[#101010] text-[164.816px] top-[calc(50%-312px)] tracking-[9.889px] w-[1661.902px] whitespace-pre-wrap">
        <p className="mb-0">{`             AL PRODUC `}</p>
        <p>DESIGNER</p>
      </div>
      <p className="absolute font-['Clash_Display:Semibold',sans-serif] leading-[1.03] left-[calc(50%+686px)] text-[#101010] text-[164.816px] top-[calc(50%-312px)] tracking-[9.889px]">T</p>
      <p className="absolute font-['Clash_Display:Semibold',sans-serif] leading-[1.08] left-[calc(50%-832px)] text-[#101010] text-[164.816px] top-[calc(50%-315.8px)] tracking-[9.889px] w-[1661.902px] whitespace-pre-wrap">DIGIT</p>
      <p className="absolute font-['Martel:ExtraBold',sans-serif] leading-[normal] left-[8px] text-[#2d6dc3] text-[16px] top-[calc(50%-343px)] tracking-[0.48px]">USERINTERFACE | USEREXPERIENCE | VISUAL IDENTITY</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(226,226,226,0.2)] border border-[#2d6dc3] border-solid h-[110px] left-[32px] rounded-[38px] top-px w-[376px]">
      <p className="absolute font-['Martel:ExtraBold',sans-serif] leading-[normal] left-[calc(50%-78px)] not-italic text-[#2d6dc3] text-[22px] top-[calc(50%-19px)]">HELLO! I’M SANIYA</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(226,226,226,0.2)] border border-[#2d6dc3] border-solid h-[110px] left-[415px] rounded-[38px] top-px w-[140px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[233px] left-[calc(50%-0.5px)] top-[calc(50%+0.5px)] w-[165px]" data-name="location png 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLocationPng1} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[rgba(226,226,226,0.2)] border border-[#2d6dc3] border-solid h-[110px] left-[562px] rounded-[38px] top-0 w-[140px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[161px] left-1/2 top-[calc(50%+0.5px)] w-[114px]" data-name="contact me 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContactMe1} />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[111px] left-[937px] top-[229px] w-[723px]" data-name="Component 1">
      <Frame />
      <div className="absolute h-[164px] left-0 top-[-50px] w-[131px]" data-name="me icon 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[112.49%] left-0 max-w-none top-[-0.03%] w-full" src={imgMeIcon1} />
        </div>
      </div>
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 absolute h-[686px] left-[calc(50%+8.5px)] top-[540px] w-[1664px]">
      <Group />
      <Component />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[1126px] overflow-clip shrink-0 sticky top-0 w-[1631px]">
      <Frame3 />
      <div className="-translate-x-1/2 absolute font-['Martel:ExtraBold',sans-serif] leading-[normal] left-[calc(50%-0.5px)] not-italic text-[#2d6dc3] text-[22px] text-center top-[calc(50%+378px)] whitespace-nowrap">
        <p className="mb-0">{`Designing meaningful experiences where every interaction is crafted with purpose, `}</p>
        <p>From head scratching moments to flows that just make sense.</p>
      </div>
    </div>
  );
}

function LetsTalk() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] border-[0.803px] border-[rgba(255,255,255,0.26)] border-solid h-[327px] left-[calc(50%+0.5px)] rounded-[30.507px] top-[187px] w-[1631px]" data-name="lets talk" />;
}

function LetsTalk1() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] border-[0.803px] border-[rgba(255,255,255,0.26)] border-solid h-[328px] left-[calc(50%+0.5px)] rounded-[30.507px] top-[545px] w-[1631px]" data-name="lets talk" />;
}

function LetsTalk2() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] border-[0.803px] border-[rgba(255,255,255,0.26)] border-solid h-[327px] left-[calc(50%+0.5px)] rounded-[30.507px] top-[904px] w-[1631px]" data-name="lets talk" />;
}

function Frame6() {
  return (
    <div className="h-[1519px] shrink-0 sticky top-0 w-full">
      <div className="absolute h-[1519px] left-0 top-0 w-[1920px]" data-name="b551d4405bc31b48d23669c7d041acd3 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[224.75%] left-[-0.01%] max-w-none top-[-0.01%] w-[100.02%]" src={imgB551D4405Bc31B48D23669C7D041Acd31} />
        </div>
      </div>
      <LetsTalk />
      <LetsTalk1 />
      <LetsTalk2 />
    </div>
  );
}

function Group4({ onBackToTop }: { onBackToTop: () => void }) {
  return (
    <button onClick={onBackToTop} className="absolute contents cursor-pointer left-[45px] top-[1159px]">
      <p className="absolute font-['Martel:Regular',sans-serif] leading-[normal] left-[calc(50%-915px)] not-italic text-[#101010] text-[16px] top-[calc(50%+553.5px)]">{`Back to top `}</p>
      <div className="absolute flex h-[14px] items-center justify-center left-[146px] top-[1167px] w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[14px]">
            <div className="absolute inset-[-3.68px_-3.57%_-3.68px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5 7.36396">
                <path d={svgPaths.p3b044f00} fill="var(--stroke-0, #101010)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function Frame11() {
  return <div className="absolute h-[307px] left-[1557px] top-[828px] w-[323px]" />;
}

function MdiLinkedin() {
  return (
    <div className="absolute left-0 size-[46px] top-0" data-name="mdi:linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="mdi:linkedin">
          <path d={svgPaths.p30ba2c00} fill="var(--fill-0, #101010)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IcOutlineEmail() {
  return (
    <div className="absolute left-[74px] size-[46px] top-0" data-name="ic:outline-email">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="ic:outline-email">
          <path d={svgPaths.p3150bc00} fill="var(--fill-0, #101010)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiInstagram() {
  return (
    <div className="absolute left-[148px] size-[46px] top-0" data-name="mdi:instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="mdi:instagram">
          <path d={svgPaths.p2bbb0d20} fill="var(--fill-0, #101010)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MageBehance() {
  return (
    <div className="absolute left-[222px] size-[46px] top-0" data-name="mage:behance">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="mage:behance">
          <path d={svgPaths.p2b85ed00} fill="var(--fill-0, #101010)" id="Vector" />
          <path d={svgPaths.p3db6fc00} fill="var(--fill-0, #101010)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[46px] left-[39px] top-0 w-[268px]">
      <MdiLinkedin />
      <IcOutlineEmail />
      <MdiInstagram />
      <MageBehance />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="absolute h-[77px] left-[801px] top-[1017px] w-[346px]" data-name="social media">
      <Frame10 />
      <p className="absolute font-['Martel:Regular',sans-serif] leading-[normal] left-[calc(50%-156px)] not-italic opacity-0 text-[#101010] text-[18px] top-[calc(50%+29.5px)]">Linkedin</p>
      <p className="absolute font-['Martel:Regular',sans-serif] leading-[normal] left-[calc(50%-67px)] not-italic opacity-0 text-[#101010] text-[18px] top-[calc(50%+29.5px)]">Email</p>
      <p className="absolute font-['Martel:Regular',sans-serif] leading-[normal] left-[calc(50%-9px)] not-italic opacity-0 text-[#101010] text-[18px] top-[calc(50%+29.5px)]">Instagram</p>
      <p className="absolute font-['Martel:Regular',sans-serif] leading-[normal] left-[calc(50%+73px)] not-italic opacity-0 text-[#101010] text-[18px] top-[calc(50%+29.5px)]">Behance</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[140px] top-[316px]">
      <p className="absolute font-['Martel:DemiBold',sans-serif] leading-[normal] left-[calc(50%-140px)] not-italic text-[#101010] text-[28px] top-[calc(50%-289.5px)]">That’s a wrap. Or is it?</p>
      <p className="absolute font-['Martel:DemiBold',sans-serif] leading-[normal] left-[calc(50%-2px)] not-italic text-[#101010] text-[28px] top-[calc(50%+339.5px)]">or</p>
      <p className="absolute font-['Martel:DemiBold',sans-serif] leading-[normal] left-[calc(50%-571px)] not-italic text-[#101010] text-[28px] top-[calc(50%+107.5px)]">Open to opportunities, collabs, creative challenges, or simply a good conversation.</p>
      <p className="-translate-x-1/2 absolute font-['Clash_Display:Semibold',sans-serif] leading-[1.03] left-1/2 not-italic text-[#101010] text-[128px] text-center top-[calc(50%-199.5px)] tracking-[7.68px] w-[1640px] whitespace-pre-wrap">Great design starts with a conversation!</p>
      <SocialMedia />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[307px] left-[683px] overflow-clip top-[15px] w-[323px]">
      <div className="absolute h-[345px] left-[-20px] top-[157px] w-[364px]" data-name="thumbs up final 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[149.22%] left-[-0.03%] max-w-none top-0 w-[100.06%]" src={imgThumbsUpFinal1} />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2">
      <p className="absolute font-['Martel:ExtraBold',sans-serif] leading-[normal] left-[calc(50%-100px)] not-italic text-[#2d6dc3] text-[32px] top-[calc(50%-27px)]">Let’s Talk</p>
      <div className="absolute h-0 left-[176px] top-[27px] w-[24px]">
        <div className="absolute inset-[-7.36px_-4.17%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 14.7279">
            <path d={svgPaths.p3a9c1f00} fill="var(--stroke-0, #2D6DC3)" id="Arrow 2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%+53px)]">
      <p className="absolute font-['Martel:ExtraBold',sans-serif] leading-[normal] left-[calc(50%-100px)] not-italic text-[#2d6dc3] text-[32px] top-[calc(50%+26px)]">Let’s Talk</p>
      <div className="absolute h-0 left-[176px] top-[80px] w-[24px]">
        <div className="absolute inset-[-7.36px_-4.17%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 14.7279">
            <path d={svgPaths.p3a9c1f00} fill="var(--stroke-0, #2D6DC3)" id="Arrow 2" />
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

function LetsTalk3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(226,226,226,0.2)] border border-[#2d6dc3] border-solid h-[95px] left-[calc(50%-368px)] rounded-[38px] top-0 w-[312px]" data-name="lets talk">
      <Frame9 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[355px] left-[801px] top-[812px] w-[1048px]" data-name="Component 2">
      <Frame12 />
      <LetsTalk3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[140px] top-[316px]">
      <Group3 />
      <Component1 />
    </div>
  );
}

function Frame7({ onBackToTop }: { onBackToTop: () => void }) {
  return (
    <div className="bg-[#fefcf4] h-[1211px] relative shrink-0 w-full">
      <div className="absolute bottom-0 h-[1523px] left-[80px] w-[1920px]" data-name="b551d4405bc31b48d23669c7d041acd3 1" />
      <div className="absolute h-0 left-[40px] top-[1135px] w-[1840px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1840 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="1840" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Martel:Light',sans-serif] leading-[normal] left-[calc(50%-470px)] not-italic text-[#101010] text-[16px] top-[calc(50%+553.5px)]">{`Built on coffee, love, many iterations, and way too many open tabs. Thanks for stopping by, hope to hear from you soon. `}</p>
      <Group4 onBackToTop={onBackToTop} />
      <Frame11 />
      <Group5 />
    </div>
  );
}

function Frame8({ onBackToTop }: { onBackToTop: () => void }) {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[3856px] items-center left-1/2 top-0 w-[1920px]">
      <Frame5 />
      <Frame6 />
      <Frame7 onBackToTop={onBackToTop} />
    </div>
  );
}

export default function LandingFinal() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#fefcf4] relative size-full" data-name="Landing final">
      <Frame1 />
      <Frame8 onBackToTop={handleBackToTop} />
    </div>
  );
}