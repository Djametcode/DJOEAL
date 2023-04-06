import * as react from "react";
import Djual from "./component/djual";
import Header from "./component/header";
import Annouce from "./component/annocement";
import Main from "./component/main";

const DjualApp = () => {
  return (
    <div className=" bg-heikei">
      <div className=" sticky top-0 z-20">
        <Header />
      </div>
      <div className=" z-0">
        <Annouce />
      </div>
      <div>{/* <Main /> */}</div>
    </div>
  );
};

const App = () => {
  return <DjualApp />;
};

export default App;
