const Explained = () => {
  return (
    <div className=" bg-heikei pb-10 text-white font-alata p-2 flex flex-col gap-2">
      <h4 className=" p-3">Kenapa belanja disini?</h4>
      <div className=" bg-slate-600/40 p-3 rounded-xl h-40">
        <p>Murah</p>
        <p>
          Kenapa murah ? setiap minggu akan ada diskon gila gilaan sampai 75%
        </p>
      </div>
      <div className=" bg-slate-600/40 p-3 rounded-xl h-40">
        <p>Secure Payment</p>
        <p>Tenang aja pembayaran kamu tersecure 100% dengan api</p>
      </div>
      <div className=" bg-slate-600/40 p-3 rounded-xl h-40">
        <p>Gratis Ongkir</p>
        <p>Gratis ongkir tiap harinya disini</p>
      </div>
    </div>
  );
};

export default Explained;
