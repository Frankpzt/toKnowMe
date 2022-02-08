import style from "./App.module.scss";
import Routes from "./routes";
import bgVideo from "./assets/videos/background.mp4";
import { useState } from "react";

function App() {
  const [lan, setLan] = useState(true);
  const changeLan = () => {
    setLan(!lan);
  };
  const backgorundVideo = (
    <div>
      <video autoPlay muted loop id={style.bg_video}>
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
  return (
    <div className={style.App}>
      {backgorundVideo}
      <Routes lan={lan} changeLan={changeLan} />
    </div>
  );
}

export default App;
