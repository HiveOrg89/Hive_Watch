import { useEffect } from "react";
import "./App.css";
import { useAppDispatch } from "./store/hooks/hooks";
import { updateWindowWidth } from "./store/app_store/slice";
import Guide from "./shell/guide/guide";
import Masthead from "./shell/masthead/masthead";
import PageManager from "./routes/PageManager";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(updateWindowWidth(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);

    handleResize();
  }, []);

  return (
    <>
      <Masthead />
      <div className='hvd-app-flexy'>
        <Guide />
        <PageManager />
      </div>
    </>
  );
}

export default App;
