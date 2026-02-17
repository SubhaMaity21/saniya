import React from "react";
// @ts-ignore
import imgB551D4405Bc31B48D23669C7D041Acd31 from "figma:asset/59441181721f9ec0057cf0ca5351b45db44c073a.png";

type BackdropOutlineProps = {
  top: number;
  height: number;
};

function BackdropOutline({ top, height }: BackdropOutlineProps) {
  return (
    <div
      className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] rounded-[30.507px] border-[0.803px] border-solid border-[rgba(255,255,255,0.26)] bg-[rgba(0,0,0,0)]"
      style={{ top, height, width: "calc(133.33vw - 60px)" }}
      data-name="lets talk"
    />
  );
}

export default function BackgroundSection() {
  return (
    <div className="sticky top-0 h-[900px] w-full shrink-0">
      <div
        className="absolute left-1/2 top-0 h-full"
        style={{ width: "133.33vw", transform: "translateX(-50%)" }}
        data-name="b551d4405bc31b48d23669c7d041acd3 1"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute left-0 top-0 h-full w-full max-w-none object-cover"
            src={imgB551D4405Bc31B48D23669C7D041Acd31}
          />
        </div>
      </div>
      <BackdropOutline top={187} height={327} />
      <BackdropOutline top={545} height={328} />
    </div>
  );
}
