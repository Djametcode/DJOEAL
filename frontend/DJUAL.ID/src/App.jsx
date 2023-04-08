import * as react from "react";
import Djual from "./component/djual";
import Header from "./component/header";
import Annouce from "./component/annocement";
import Main from "./component/main";
import Menu from "./component/menu";
import SearchData from "./component/data";
import Explained from "./component/explained";
import Slider from "./component/slider";

const DjualApp = () => {
  const [isToggle, setToggel] = react.useState(false);
  return (
    <div className=" bg-slate-800 relative">
      <div className=" fixed w-full z-30 transition-all">
        {isToggle && <Slider setToggel={setToggel} />}
      </div>
      <div className=" sticky top-0 z-20">
        <Header setToggel={setToggel} />
      </div>
      <div className=" z-0">
        <Annouce />
      </div>
      {/* <div>
        <Menu />
      </div> */}
      <div>
        <SearchData />
      </div>
      <div>
        <Explained />
      </div>
    </div>
  );
};

const App = () => {
  return <DjualApp />;
};

export default App;
