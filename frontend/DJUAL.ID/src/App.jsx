import * as react from "react";
import Djual from "./component/djual";
import Header from "./component/header";
import Annouce from "./component/annocement";
import Main from "./component/main";
import Menu from "./component/menu";
import SearchData from "./component/data";
import Explained from "./component/explained";
import Slider from "./component/slider";
import PacmanLoader from "react-spinners/PacmanLoader";

const DjualApp = () => {
  const [isToggle, setToggel] = react.useState(false);
  const [loading, setLoading] = react.useState(false);
  const [translate, setTranslate] = react.useState(-500);

  react.useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const scrollHeight = () => {
    const position = window.scrollY;
    if (position >= 20) {
      setTranslate(0);
    } else {
      setTranslate(-500);
    }
  };
  window.addEventListener("scroll", scrollHeight);
  return (
    <div className=" bg-slate-600 w-screen">
      {loading ? (
        <div className=" h-screen flex justify-center">
          <div className=" flex flex-col justify-center gap-2">
            <PacmanLoader loading={loading} color="grey" />
          </div>
        </div>
      ) : (
        <div className=" bg-heikei relative">
          <div className=" bg-black/40 fixed w-screen z-30 transition-all">
            {isToggle && <Slider setToggel={setToggel} />}
          </div>
          <div className=" sticky top-0 z-20">
            <Header setToggel={setToggel} />
          </div>
          <div className=" z-0">
            <Annouce />
          </div>
          <div>
            <SearchData />
          </div>
          <div
            className=" transition-all delay-300"
            style={{ transform: `translate(${translate}px, 0px)` }}
          >
            <Explained />
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return <DjualApp />;
};

export default App;
