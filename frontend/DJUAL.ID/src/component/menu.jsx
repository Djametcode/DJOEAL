import { useEffect, useState } from "react";

const Menu = () => {
  const text = "Selamat datang di DJUAL.ID";
  const splits = text.split("");
  const [item, setItem] = useState();
  console.log(item);
  const next = () => {
    for (let i = 0; i < splits.length; i++) {
      setItem(splits[i]);
    }
  };

  const auto = true;
  useEffect(() => {
    if (auto) {
      const typeInterval = setInterval(next, 2000);
      return () => clearInterval(typeInterval);
    }
  }, []);
  return (
    <>
      <h3 className=" font-alata text-white/70 p-3">{item}</h3>
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
