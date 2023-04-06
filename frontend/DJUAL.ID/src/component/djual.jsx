import React from "react";
import Annouce from "./annocement";
import Header from "./header";
import Main from "./main";

const Djual = () => {
  return (
    <div className=" bg-heikei">
      <div className=" sticky top-0">
        <Header />
      </div>
      <div>
        <Annouce />
      </div>
      <Main />
    </div>
  );
};

export default Djual;
