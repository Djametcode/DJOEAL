import { useEffect, useState } from "react";

const Menu = () => {
  const url = [
    {
      video: "./images/degraded-119282.mp4",
    },
  ];
  const images = [
    {
      url: "https://dlcdnwebimgs.asus.com/gain/21AE219C-6E24-4FD8-B83D-EFC9E131B315/fwebp",
    },
    {
      url: "https://dlcdnwebimgs.asus.com/gain/392B3F7C-55CF-474E-8B37-26B0DD7B1D9E/fwebp",
    },
    {
      url: "https://dlcdnwebimgs.asus.com/gain/CD8686E4-3474-4EF3-99D2-2995E04E5D6E/fwebp",
    },
    {
      url: "https://dlcdnwebimgs.asus.com/gain/5F5A44ED-E9AA-4966-BA1A-8BE913F904CF",
    },
    {
      url: "https://dlcdnwebimgs.asus.com/gain/E8F46A14-D8D6-4EF5-932A-6FC50AD2A73D/fwebp",
    },
  ];
  const text = "Selamat datang di DJUAL.ID";
  return (
    <>
      <h3 className=" font-alata text-white/70 p-3">{text}</h3>
      <video
        className=" absolute z-0 bg-cover w-full top-0 max-sm:rotate-90 max-sm:hidden"
        autoPlay
        muted
        loop
        src={url[0].video}
      ></video>
      <div className=" rounded-tl-xl rounded-tr-xl relative z-10">
        <video
          className=" z-0 rounded-tl-xl rounded-tr-xl relative"
          autoPlay
          muted
          loop
          src="./DJUAL.ID/src/images/degraded-119282.mp4"
        ></video>
        {/* <div className=" font-alata text-white/70 p-3 text-base">
          <p>Looking For Something?</p>
          <p>Disini kami menyediakan berbagai kebutuhan digital kalian</p>
        </div> */}
        <div className=" text-white font-alata flex flex-col gap-2 p-3 absolute top-0 z-10">
          {/* {images.map((item, index) => (
            <div>
              <img key={index} className=" rounded-xl" src={item.url} />
              <p className=" font-alata text-white text-sm p-2">
                * Hanya iklan semata
              </p>
            </div>
          ))} */}
          <p>Hot Promo</p>
          <img
            className=" rounded-lg hover:-translate-x-14 hover:transition-all hover:bg-black/30"
            src={images[0].url}
            alt=""
            style={{}}
          />
          <div className=" absolute right-4 top-2 text-xs text-right">
            <p>Asus Rog Strix Scar 15</p>
            <p>Intel Gen 13, RTX 4090 siap libas semua game</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
