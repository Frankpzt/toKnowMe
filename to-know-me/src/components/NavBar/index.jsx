import React from 'react';
import {Link} from "react-router-dom";
import style from "./style.module.scss";
import myLogo from "../../assets/images/myLogo.svg";

function NavBar(props) {
    return (
        <div className={style.home_nav}>
            <Link to="/" >
                <img src={myLogo} alt="logo" className={style.avatar}/>
            </Link>
            <Link to="/MyCVPage" className={props.myCvActive? style.myCvActive : style.home_nav_btn}>{props.lan? "我的简历" : <div className={style.title_en}>MY CV</div>}</Link>
            <Link to="/MyCVPage" className={style.home_nav_btn}>{props.lan? "我是WEB工程师" : <div className={style.title_en}>AS WEB DEVELOPER</div>}</Link>
            <Link to="/MyCVPage" className={style.home_nav_btn}>{props.lan? "我是产品经理" : <div className={style.title_en}>AS PRODUCT MANAGER</div>}</Link>
            <Link to="/MyCVPage" className={style.home_nav_btn}>{props.lan? "教育背景" : <div className={style.title_en}>EDUCATION</div>}</Link>
            <Link to="/MyCVPage" className={style.home_nav_btn}>{props.lan? "博客" : <div className={style.title_en}>BLOG</div>}</Link>
            <button  onClick={props.changeLan} className={style.home_translation_btn}>
            <svg t="1642845268050" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1253" width="32" height="32"><path d="M640 416h256c35.36 0 64 28.48 64 64v416c0 35.36-28.48 64-64 64H480c-35.36 0-64-28.48-64-64V640h128c53.312 0 96-42.976 96-96V416zM64 128c0-35.36 28.48-64 64-64h416c35.36 0 64 28.48 64 64v416c0 35.36-28.48 64-64 64H128c-35.36 0-64-28.48-64-64V128z m128 276.256h46.72v-24.768h67.392V497.76h49.504V379.488h68.768v20.64h50.88V243.36H355.616v-34.368c0-10.08 1.376-18.784 4.16-26.112a10.56 10.56 0 0 0 1.344-4.16c0-0.896-3.2-1.792-9.6-2.72h-46.816v67.36H192v160.896z m46.72-122.368h67.392v60.48h-67.36V281.92z m185.664 60.48h-68.768V281.92h68.768v60.48z m203.84 488l19.264-53.632h100.384l19.264 53.632h54.976L732.736 576h-64.64L576 830.4h52.256z m33.024-96.256l37.12-108.608h1.376l34.368 108.608h-72.864zM896 320h-64a128 128 0 0 0-128-128v-64a192 192 0 0 1 192 192zM128 704h64a128 128 0 0 0 128 128v64a192 192 0 0 1-192-192z" fill="#333333" p-id="1254"></path></svg>
            </button>
        </div>
    );
}

export default NavBar;