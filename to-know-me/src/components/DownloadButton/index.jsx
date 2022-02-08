import React from "react";
import downloadIcon from "../../assets/images/icons/download.svg";
import style from "./style.module.scss";

function DownloadButton() {
  return (
    <div className={style.container}>
      <a href="/pdfs/cv_ver_adobeAI.pdf" download="HanyangLi-cv.pdf">
        <img src={downloadIcon} alt="" />
      </a>
    </div>
  );
}

export default DownloadButton;
