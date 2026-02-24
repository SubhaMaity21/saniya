import NavItem from "./NavItem";
import type { LandingNavigationHandlers } from "./types";
import React from "react";

type NavigationBarProps = LandingNavigationHandlers & {
  isWhite: boolean;
};

export default function NavigationBar({
  onHomeClick,
  onWorkClick,
  onAboutClick,
  onContactClick,
  isWhite,
}: NavigationBarProps) {
  return (
    <div className="fixed left-1/2 top-[20px] z-50 flex -translate-x-1/2 items-center justify-center gap-[50px] font-['Martel:ExtraBold',sans-serif]  not-italic leading-[normal] transition-colors duration-300">
      <NavItem
        
        label="Home"
        widthClass="w-[64px]"
        onClick={onHomeClick}
        isWhite={isWhite}
        textLeft
      />
      <NavItem
        label="Work"
        widthClass="w-[64px]"
        onClick={onWorkClick}
        isWhite={isWhite}
        textLeft
      />
      <NavItem
        label="Know Me Better"
        widthClass="w-[172px]"
        onClick={onAboutClick}
        isWhite={isWhite}
      />
      <NavItem
        label="Contact"
        widthClass="w-[89px]"
        onClick={onContactClick}
        isWhite={isWhite}
        textLeft
      />
      <NavItem
        label="Resume"
        widthClass="w-[94px]"
        href="#resume"
        isWhite={isWhite}
      />
    </div>
  );
}
