import React from 'react';
import style from "./style.module.scss";
import SocialMediaList from '../../components/SocialMediaList';
import NavBar from "../../components/NavBar";


function HomePage(props) {
    const cnContent = (
                <div className={style.container}>
                    <h1 className={style.title}>觅君万里，终须一见。</h1>
                </div>
                        
                    );
    const enContent = (
    <div className={style.container}>
        <h1 className={style.title}>Welcome to my site, to know me.</h1>
    </div>
        );


    return (
        <div >
            <NavBar lan={props.lan} changeLan={props.changeLan}/>
            {props.lan? cnContent :enContent}
            <div className={style.social_media_list}>
                <SocialMediaList />
            </div>
        </div>
    );
}

export default HomePage;