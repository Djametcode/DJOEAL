import { useState } from "react";
import data from "../../data";

const SearchData = () => {
  const [phone, setPhone] = useState([]);
  const [include, setInclude] = useState(false);
  const filterItem = (e) => {
    const input = e.target.value.toLowerCase();
    console.log(input);
    const results = data.filter((item) =>
      item.phone.toLowerCase().includes(input)
    );
    console.log(results.length);
    setPhone(results);
  };
  return (
    <>
      <div className=" bg-cyan-700 font-alata rounded-tl-xl rounded-tr-xl p-3 flex justify-between">
        <div className=" flex flex-col justify-center">
          <h3 className=" text-white/80">Cari Sesuatu</h3>
        </div>
        <div className=" flex flex-col justify-center">
          <input
            className=" p-2 bg-cyan-600 rounded-lg placeholder:text-white/60 focus:outline-none focus:text-white/60"
            type="text"
            placeholder="ketikan barang"
            onChange={filterItem}
          />
        </div>
      </div>
      <div className=" bg-cyan-700 p-3 flex flex-col gap-2">
        <h4 className=" text-white/60">Result : </h4>
        <div className=" text-white/70 bg-heikei p-5 rounded-xl flex flex-col gap-2">
          {phone.map((item) => (
            <>
              <div className=" flex font-alata justify-between">
                <p>{item.phone}</p>
                <p>
                  Harga :{" "}
                  {item.price.toLocaleString("ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
              <div>
                <hr className=" text-slate-600 h-1" />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchData;
