import * as react from "react";
import Djual from "./component/djual";
import Header from "./component/header";
import Annouce from "./component/annocement";
import Main from "./component/main";
import Menu from "./component/menu";

const DjualApp = () => {
  return (
    <div className=" bg-slate-800">
      <div className=" sticky top-0 z-20">
        <Header />
      </div>
      <div className=" z-0">
        <Annouce />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

const App = () => {
  return <DjualApp />;
};

export default App;
