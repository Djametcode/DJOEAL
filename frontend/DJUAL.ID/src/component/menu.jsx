import { useEffect, useState } from "react";

const Menu = () => {
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
      <div className=" bg-cyan-700 rounded-tl-xl rounded-tr-xl">
        {/* <div className=" font-alata text-white/70 p-3 text-base">
          <p>Looking For Something?</p>
          <p>Disini kami menyediakan berbagai kebutuhan digital kalian</p>
        </div> */}
        <div className=" flex flex-col gap-2 p-2">
          {images.map((item, index) => (
            <div>
              <img key={index} className=" rounded-xl" src={item.url} />
              <p className=" font-alata text-white text-sm p-2">
                * Hanya iklan semata
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
