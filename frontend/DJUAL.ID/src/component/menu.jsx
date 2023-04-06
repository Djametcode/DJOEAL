import { useEffect, useState } from "react";

const Menu = () => {
  const text = "Selamat datang di DJUAL.ID";
  return (
    <>
      <h3 className=" font-alata text-white/70 p-3">{text}</h3>
      <div className=" bg-heikei rounded-tl-xl rounded-tr-xl">
        <div className=" font-alata text-white/70 p-3 text-base h-44">
          <p>Looking For Something?</p>
          <p>Disini kami menyediakan berbagai kebutuhan digital kalian</p>
        </div>
      </div>
    </>
  );
};

export default Menu;
