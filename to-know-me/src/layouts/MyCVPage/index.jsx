import React, { useState } from 'react';
import style from "./style.module.scss";
import SocialMediaList from "../../components/SocialMediaList";
import portrait from "../../assets/images/portrait.jpg";
import NavBar from '../../components/NavBar';
import python_icon from "../../assets/images/icons/python.svg";
import java_icon from "../../assets/images/icons/java.svg";
import php_icon from "../../assets/images/icons/php.svg";
import sql_icon from "../../assets/images/icons/mysql.svg";
import mongodb_icon from "../../assets/images/icons/mongodb.svg";
import html_icon from "../../assets/images/icons/html-5.svg";
import sass_icon from "../../assets/images/icons/sass.svg";
import js_icon from "../../assets/images/icons/javascript.svg";
import mui_icon from "../../assets/images/icons/mui.svg";
import react_icon from "../../assets/images/icons/react.svg";
import jquery_icon from "../../assets/images/icons/jquery.svg";
import codeigniter_icon from "../../assets/images/icons/codeigniter.svg";
import node_icon from "../../assets/images/icons/node-js.svg";
import git_icon from "../../assets/images/icons/git.svg";
import github_icon from "../../assets/images/icons/github.svg";
import bitbucket_icon from "../../assets/images/icons/bitbucket.svg";
import jira_icon from "../../assets/images/icons/jira.svg";
import xd_icon from "../../assets/images/icons/adobe-xd.svg";
import ai_icon from "../../assets/images/icons/adobe-illustrator.svg";
import bootstrap_icon from "../../assets/images/icons/bootstrap.svg";
import DownloadButton from '../../components/DownloadButton';

function MyCVPage(props) {
const [pythonIcon, setPythonIcon] = useState(false);
const [javaIcon, setJavaIcon] = useState(false);
const [phpIcon, setPhpIcon] = useState(false);
const [sqlIcon, setSqlIcon] = useState(false);
const [mongodbIcon, setMongodbIcon] = useState(false);
const [htmlIcon, setHtmlIcon] = useState(false);
const [sassIcon, setSasslIcon] = useState(false);
const [jsIcon, setJsIcon] = useState(false);
const [muiIcon, setMuiIcon] = useState(false);
const [reactIcon, setReactIcon] = useState(false);
const [jqueryIcon, setJqueryIcon] = useState(false);
const [codeigniterIcon, setCodeigniterIcon] = useState(false);
const [nodeIcon, setNodeIcon] = useState(false);
const [gitIcon, setGitIcon] = useState(false);
const [githubIcon, setGithubIcon] = useState(false);
const [bitbucketIcon, setBitbucketIcon] = useState(false);
const [jiraIcon, setJiraIcon] = useState(false);
const [xdIcon, setXdIcon] = useState(false);
const [aiIcon, setAiIcon] = useState(false);
const [bootstrapIcon, setBootstrapIcon] = useState(false);



const togglePythonEffect = () => {
setJavaIcon(false);
setPythonIcon(!pythonIcon);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}
const toggleJavaEffect = () => {
setPythonIcon(false);
setJavaIcon(!javaIcon);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}
const togglePhpEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(!phpIcon);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}
const toggleSqlEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(!sqlIcon);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}
const toggleMongoEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(!mongodbIcon);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}

const toggleHtmlEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(!htmlIcon);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}
const toggleSassEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(!sassIcon);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}
const toggleJsEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(!jsIcon);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}

const toggleMuiEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(!muiIcon);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}

const toggleReactEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(!reactIcon);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}
const toggleJqueryIconEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(!jqueryIcon);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}
const toggleIgniterEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(!codeigniterIcon);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}
const toggleNodeEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(!nodeIcon);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}
const toggleGitEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(!gitIcon);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}
const toggleGithubEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(!githubIcon);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}
const toggleBitbucketEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(!bitbucketIcon);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}
const toggleJiraEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(!jiraIcon);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false)
}

const toggleXdEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(!xdIcon);
setAiIcon(false);
setBootstrapIcon(false)
}
const toggleAiEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(!aiIcon);
setBootstrapIcon(false);
}
const toggleBootstrapEffect = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setGitIcon(false);
setGithubIcon(false);
setBitbucketIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(!bootstrapIcon);
}
const toggleVersioningTool = () => {
setPythonIcon(false);
setJavaIcon(false);
setPhpIcon(false);
setSqlIcon(false);
setMongodbIcon(false);
setHtmlIcon(false);
setSasslIcon(false);
setJsIcon(false);
setMuiIcon(false);
setReactIcon(false);
setJqueryIcon(false);
setCodeigniterIcon(false);
setNodeIcon(false);
setJiraIcon(false);
setXdIcon(false);
setAiIcon(false);
setBootstrapIcon(false);
setGitIcon(!gitIcon);
setGithubIcon(!githubIcon);
setBitbucketIcon(!bitbucketIcon);

}
//

const cnContent = (
<div>
    <div className={style.basicInfo}>
        <div className={style.basicInfo_text}>
            <h2>李寒阳</h2>
            <p>男 | 27 | lihanyang19940724@126.com</p>
        </div>
        <img src={portrait} alt="证件照" />
    </div>
    <div className={style.education}>
        <h2>教育经历</h2>
        <p><span>The University of Queensland - 信息技术 (硕士)</span> 2019.07~2021.07</p>
        <p><span>The Queensland University of Technology - 市场营销 (本科)</span> 2015.02~2017.11 </p>
    </div>
    <div className={style.in_uni_experience}>
        <h2>校内经历</h2>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰大学</span> <span>2021.04~2021.06</span></h3>
            <h4>UI设计师</h4>
            <p>
                以TED talk为主题，归纳近10年的演讲主题，设计并绘制了数据可视化作品，成果在校内展示。作品基于
                Adobe Illustrator 和 Adobe InDesign。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰大学</span> <span>2021.03~2021.05</span></h3>
            <h4>软件工程师，硬件工程师</h4>
            <p>
                使用C语言独立开发基于ATmega324A的“Reversi”翻转棋游戏。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰大学</span> <span>2021.03~2021.05</span></h3>
            <h4>网络工程师</h4>
            <p>
                使用python编写类似TCP/IP和UDP的基于OSI 模型的网络协议。该项目涉及socket programming，
                shortest-path algorithm的应用及对使用Wireshark抓取的数据包进行分析和故障排查。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰大学创新中心</span> <span>2021.01~2021.03</span></h3>
            <h4>前端工程师</h4>
            <p>
                担任昆士兰大学旗下的start-up公司 ”SPACE“的实习前端工程师。主要负责为已进入开发尾声的产品的
                React模块编写SCSS文件，优化页面布局，debugging等。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰大学</span> <span>2020.07~2020.11</span></h3>
            <h4>组长，前端工程师</h4>
            <p>
                带领团队提出，设计，开发并部署了全栈项目：电影拍摄地搜索引擎 “InScene”。
                从使用Adobe XD及Adobe Illustrator设计UI/UX模型到使用HTML，CSS，Jquery，AJAX, Leaflet,
                TheMovieDB, RapidAPI进行项目开发。该项目最终通过nginx部署在昆士兰大学自建的云端服务器
                UQzone上。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰大学</span> <span>2020.07~2020.11</span></h3>
            <h4>项目经理，软件工程师</h4>
            <p>
                带领团队开发基于安卓的中文翻译学习软件”MeMa”。
                毕业设计作品。使用Android Studio开发基于安卓平台的中文学习软件。在接到项目提案后，根据目标用
                户选取合适的开发技术及API，包括使用Google Firebase快速建立后端数据库， 使用Android Studio适应
                组内多数工程师偏好Java的需求，加快开发时间，使用成熟的Google Translation API开发核心功能等。成
                功的在四个月的时间内开发出了Minimal Viable Product (MVP) 为该项目的后续迭代提供了基础。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰大学</span> <span>2020.05~2020.07</span></h3>
            <h4>组长，项目经理</h4>
            <p>
                带领团队提出并设计“外侵物种检测软件” *该开发企划已被其他昆士兰大学EAIT开发团队作为该组的毕业
                设计作品开发。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰大学</span> <span>2020.04~2020.06</span></h3>
            <h4>软件开发工程师</h4>
            <p>
                开发基于Java的交通管理系统软件。使用JavaFX搭建GUI框架，该软件可估测道路拥堵情况并对各路口交通
                灯进行自动管理。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰大学</span> <span>2020.04~2020.07</span></h3>
            <h4>UI/UX设计师</h4>
            <p>
                独立设计手机应用"Physical Media Anywhere" (PAW)的高保真交互模型。应用user-centered设计理念，
                模型经历三次迭代，实现了从低到中到高保真度的过渡。模型基于AdobeXD。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰大学</span> <span>2020.03~2021.05</span></h3>
            <h4>全栈工程师</h4>
            <p>
                使用bootstrap，AJAX，CSS及CodeIgniter3(PHP框架)，利用MVC开发原理，开发了一款二手媒体交流、
                交易平台。该平台具有用户登录注册，密码保护，reCAPTCHA，文件上传下载，上传商品，留言等功能。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰大学EAIT学生领导力中心</span> <span>2019.11~2019.12</span></h3>
            <h4>组长</h4>
            <p>
                参与EAIT学院的跨学院领导力小组调研。实地考察昆士兰大学Gatton校区设施，期间与环境科学院，土木
                工程院，数据工程院的其他调研员共同商议校区设施的开发方向。在调研尾声所提出的“在Gatton校区开
                展暑期课程培训从而促进两校区学生合作交流”的提案获得学院认可。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰大学</span> <span>2019.10~2019.11</span></h3>
            <h4>WEB前端工程师</h4>
            <p>
                独立设计并开发了以“度假村”为主题的网站前端页面。全程贯彻基于用户视角的网站开发，懂得如何设计
                具有自适应功能并对用户友好的网站。了解如何设计可通过WCAG 2.0标准的网页，并基于故障弱化和逐步
                加强的理念，确保用户可以在任何设备上使用网站。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰大学</span> <span>2019.09~2019.10</span></h3>
            <h4>软件开发工程师</h4>
            <p>
                独立开发基于python 的 “马里奥 “游戏。期间使用面向对象编程的框架，并使用Tkinter模块搭建GUI组
                件，以及pillow模块对游戏开发所需图片文件进行处理。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰大学</span> <span>2019.07~2020.09</span></h3>
            <h4>数据工程师</h4>
            <p>
                为视讯媒体（HomeCinema）设计数据库并录入数据，并进行持续的升级与维护
                项目内容包括：数据库设计（使用标准的ER模型并遵循BCNF原则），数据库组建（基于MySql），数据录入（使用DDL语言），数据的添删改查（使用DML语言）。后将数据库迁移至Oracle，通过SQL的进阶用法确保该数据库数据的ACID属性。大致内容包括创建
                integrity constraints, 创建materialized/virtual views, triggers, 运用query optimization and
                indexing的方法提高数据查询效率。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰科技大学</span> <span>2017.07~2017.11</span></h3>
            <h4>市场分析师</h4>
            <p>
                为澳大利亚 “MOLTEN STORE” 珠宝公司进行战略市场分析。项目描述
                通过使用SWOT模型，CPC模型等工具，为该公司提供了可行性市场营销企划。
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>昆士兰科技大学</span> <span>2017.02~2017.06</span></h3>
            <h4>市场分析师</h4>
            <p>
                为 澳大利亚“Escape Travel” 旅游公司进行了数字营销市场分析并撰写市场分析报告。通过对该公司的CPC定价模型分析，优化该公司现有的Search Engine Marketing
                (SEM)策略，并给出分析报告。
            </p>
        </div>
    </div>
    <div className={style.working_experience}>
        <h2>工作经历</h2>
        <div className={style.working_expItem}>
            <h3><span>澳大利亚金色湖畔地产开发有限公司</span> 2017.12~2019.03</h3>
            <h4>企业服务部经理</h4>
            <p>
                多次为公司设计营销方案。组织，策划并参与了该公司在中国销售的营销计划。期间为公司宣传并翻译了多
                份销售计划以及其他商业文件。多次作为中国客户，股东和澳大利亚客户，股东之间的沟通人。
            </p>
        </div>
    </div>
    <div className={style.project_experience}>
        <h2>项目经历</h2>
        <div className={style.project_expItem}>
            <h3><span>全栈项目：租车管理平台SPA</span> 2021.08~2021.11</h3>
            <h4>全栈工程师</h4>
            <p>
                使用react+nodejs开发vehicle renting management system (VRMS). 开发模式采取agile模式，参与后
                端server，数据库搭建以及前端页面布局与组件编写的工作。项目运用了material ui， express.js， axios
                等npm package加速开发进度，保证代码可维护性。通过redux管理react state。
            </p>
        </div>
        <div className={style.project_expItem}>
            <h3><span>澳大利亚租车公司 “Qubit Rental” 主页及后台系统开发</span> 2020.12~2021.01</h3>
            <h4>前端工程师，项目经理</h4>
            <p>
                基于客户对于开发时间的要求，使用WordPress为其开发了可以实现车辆展示，在线订车，车辆信息管理
                追踪等功能的商业化网页应用。
                产品URL：<a href="https://www.qubitrental.com.au">https://www.qubitrental.com.au</a>
            </p>
        </div>
    </div>
    <div className={style.skillsSet}>
        <h2>个人技能</h2>
        <div className={style.skillsSet_content}>
            <div className={style.skillsSet_text}>
                <div className={style.programming_language}>
                    <h3>
                        计算机语言：
                    </h3>
                    <ul className={style.programming_language_list}>
                        <li className={style.programming_language_Python}>
                            <h3 onClick={togglePythonEffect} onMouseEnter={togglePythonEffect}>Python 2.0/3.0,</h3>
                        </li>

                        <li className={style.programming_language_Java}>
                            <h3 onClick={toggleJavaEffect} onMouseEnter={toggleJavaEffect}>Java,</h3>
                        </li>

                        <li className={style.programming_language_Php}>
                            <h3 onClick={togglePhpEffect} onMouseEnter={togglePhpEffect}>Php</h3>
                        </li>
                    </ul>
                </div>
                <div className={style.database_language}>
                    <h3>
                        数据库语言：
                    </h3>
                    <ul className={style.database_language_list}>
                        <li className={style.database_language_sql}>
                            <h3 onClick={toggleSqlEffect} onMouseEnter={toggleSqlEffect}>SQL,</h3>
                            {/* <img src={sql_icon} alt="sql_logo" /> */}
                        </li>
                        <li className={style.database_language_mongo}>
                            <h3 onClick={toggleMongoEffect} onMouseEnter={toggleMongoEffect}>MQL (MongoDB Query Language)</h3>
                            {/* <img src={mongodb_icon} alt="mongo_logo" /> */}
                        </li>
                    </ul>
                </div>
                <div className={style.frontend_language}>
                    <h3>
                        其他前端语言：
                    </h3>
                    <ul className={style.frontend_language_list}>
                        <li className={style.frontend_language_html}>
                            <h3 onClick={toggleHtmlEffect} onMouseEnter={toggleHtmlEffect}>HTML5,</h3>
                            {/* <img src={html_icon} alt="html_logo" /> */}
                        </li>
                        <li className={style.frontend_language_css}>
                            <h3 onClick={toggleSassEffect} onMouseEnter={toggleSassEffect}>CSS/SASS,</h3>
                            {/* <img src={sass_icon} alt="css_logo" /> */}
                        </li>
                        <li className={style.frontend_language_js}>
                            <h3 onClick={toggleJsEffect} onMouseEnter={toggleJsEffect}>JavaScript (ECMAScript 6)</h3>
                            {/* <img src={js_icon} alt="js_logo" /> */}
                        </li>
                    </ul>
                </div>
                <div className={style.frontend_framework}>
                    <h3>
                        前端框架：
                    </h3>
                    <ul className={style.frontend_framework_list}>
                        <li className={style.frontend_framework_react}>
                            <h3 onClick={toggleReactEffect} onMouseEnter={toggleReactEffect}>React,</h3>
                            {/* <img src={react_icon} alt="React_logo" /> */}
                        </li>
                        <li className={style.frontend_framework_jQuery}>
                            <h3 onClick={toggleJqueryIconEffect} onMouseEnter={toggleJqueryIconEffect}>jQuery</h3>
                            {/* <img src={jquery_icon} alt="jQuery_logo" /> */}
                        </li>
                    </ul>
                </div>
                <div className={style.backtend_framework}>
                    <h3>
                        后端框架：
                    </h3>
                    <ul className={style.backtend_framework_list}>
                        <li className={style.backtend_framework_codeigniter}>
                            <h3 onClick={toggleIgniterEffect} onMouseEnter={toggleIgniterEffect}>CodeIgniter,</h3>
                            {/* <img src={codeigniter_icon} alt="React_logo" /> */}
                        </li>
                        <li className={style.backtend_framework_node}>
                            <h3 onClick={toggleNodeEffect} onMouseEnter={toggleNodeEffect}>Node Js</h3>
                            {/* <img src={node_icon} alt="jQuery_logo" /> */}
                        </li>
                    </ul>
                </div>
                <div className={style.version_control}>
                    <h3>
                        版本管理系统及团队合作工具：
                    </h3>
                    <ul className={style.version_control_list}>
                        <li className={style.version_control_git}>
                            <h3 onClick={toggleVersioningTool} onMouseEnter={toggleVersioningTool}>Git (偏好Github与Bitbucket)</h3>
                        </li>
                        <li className={style.version_control_kanban}>
                            <h3 onClick={toggleJiraEffect} onMouseEnter={toggleJiraEffect}>Jira </h3>

                        </li>
                    </ul>
                </div>
                <div className={style.UI_framework}>
                    <h3>
                        其他UI/UX/页面布局工具：
                    </h3>
                    <ul className={style.UI_framework_list}>
                        <div className={style.UI_framework_firstRow}>
                            <li className={style.UI_framework_xd}>
                                <h3 onClick={toggleXdEffect} onMouseEnter={toggleXdEffect}>Adobe XD,</h3>

                            </li>
                            <li className={style.UI_framework_Illustrator}>
                                <h3 onClick={toggleAiEffect} onMouseEnter={toggleAiEffect}>Adobe Illustrator,</h3>

                            </li>
                        </div>
                        <div className={style.UI_framework_secondRow}>
                            <li className={style.UI_framework_mui}>
                                <h3 onClick={toggleMuiEffect} onMouseEnter={toggleMuiEffect}>MUI(Material UI),</h3>

                            </li>
                            <li className={style.UI_framework_bootstrap}>
                                <h3 onClick={toggleBootstrapEffect} onMouseEnter={toggleBootstrapEffect}>Bootstrap</h3>

                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className={style.skillsSet_images}>
                <div className={style.skillsSet_images_firstSection}>
                    <img src={python_icon} alt="icon" className={pythonIcon? style.skillsSet_images_iconEffect:
                        style.none} onClick={togglePythonEffect} />
                    <img src={java_icon} alt="icon" className={javaIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleJavaEffect} />
                    <img src={php_icon} alt="icon" className={phpIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={togglePhpEffect} />
                    <img src={sql_icon} alt="icon" className={sqlIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleSqlEffect} />
                </div>
                <div className={style.skillsSet_images_secondSection}>
                    <img src={mongodb_icon} alt="icon" className={mongodbIcon? style.skillsSet_images_iconEffect:
                        style.none} onClick={toggleMongoEffect} />
                    <img src={html_icon} alt="icon" className={htmlIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleHtmlEffect} />
                    <img src={sass_icon} alt="icon" className={sassIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleSassEffect} />
                    <img src={js_icon} alt="icon" className={jsIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleJsEffect} />
                </div>
                <div className={style.skillsSet_images_thirdSection}>
                    <img src={mui_icon} alt="icon" className={muiIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleMuiEffect} />
                    <img src={react_icon} alt="icon" className={reactIcon? style.skillsSet_images_iconEffect:
                        style.none} onClick={toggleReactEffect} />
                    <img src={jquery_icon} alt="icon" className={jqueryIcon? style.skillsSet_images_iconEffect:
                        style.none} onClick={toggleJqueryIconEffect} />
                    <img src={codeigniter_icon} alt="icon" className={codeigniterIcon?
                        style.skillsSet_images_iconEffect: style.none} onClick={toggleIgniterEffect} />
                </div>
                <div className={style.skillsSet_images_fourthSection}>
                    <img src={node_icon} alt="icon" className={nodeIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleNodeEffect} />
                    <img src={git_icon} alt="icon" className={gitIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleGitEffect} />
                    <img src={github_icon} alt="icon" className={githubIcon? style.skillsSet_images_iconEffect:
                        style.none} onClick={toggleGithubEffect} />
                    <img src={bitbucket_icon} alt="icon" className={bitbucketIcon? style.skillsSet_images_iconEffect:
                        style.none} onClick={toggleBitbucketEffect} />
                </div>
                <div className={style.skillsSet_images_fifthSection}>
                    <img src={jira_icon} alt="icon" className={jiraIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleJiraEffect} />
                    <img src={xd_icon} alt="icon" className={xdIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleXdEffect} />
                    <img src={ai_icon} alt="icon" className={aiIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleAiEffect} />
                    <img src={bootstrap_icon} alt="icon" className={bootstrapIcon? style.skillsSet_images_iconEffect:
                        style.none} onClick={toggleBootstrapEffect} />
                </div>


            </div>
        </div>

    </div>
    <div className={style.comment}>
        <div className={style.language}>
            <h3>
                语言：
            </h3>
            <p>
                英语流利，雅思均分7其中听力7.5。PTE均分76/90其中听力81/90, 口语87/90。持有澳大利亚翻译
                协会NATTI认证的社区语言翻译资格（CCL certificate), 可胜任交替传译工作。
            </p>
        </div>
        <h2>自我评价：</h2>
        <p>
            有技术背景，有较强的商业背景，善于把所学的商科知识与IT技术有机的结合起来。崇尚团队精神，执行力强，时间观念强。有很强的学习和沟通能力。有6年的海外学习、工作经历，熟悉海外市场和商业规则。英语熟练，有翻译经验。
        </p>
    </div>
</div>
)
const enContent = (
<div>
    <div className={style.basicInfo}>
        <div className={style.basicInfo_text}>
            <h2>Hanyang LI</h2>
            <p>Male | 27 | lihanyang19940724@126.com</p>
        </div>
        <img src={portrait} alt="证件照" />
    </div>
    <div className={style.education}>
        <h2>Education background</h2>
        <p><span>The University of Queensland - Master of Information Technology</span> 2019.07~2021.07</p>
        <p><span>The Queensland University of Technology - Bachelor of Marketing</span> 2015.02~2017.11 </p>
    </div>
    <div className={style.in_uni_experience}>
        <h2>In-University Projects:</h2>
        <div className={style.in_uni_expItem}>
            <h3><span>The University of Queensland</span> 2021.04~2021.06</h3>
            <h4>UI Designer</h4>
            <p>
                Designed and visualized data in ten years abstracted from “TED talks”, the composition was showcased in
                university, and was created based on Adobe Illustrator and Adobe InDesign.
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The University of Queensland </span> 2021.03~2021.05</h3>
            <h4>Software Engineer and Hardware Engineer</h4>
            <p>
                Developed a “Reversi” game in C based on ATmega324A.
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The University of Queensland </span>2021.03~2021.05</h3>
            <h4>Network Engineer</h4>
            <p>
                Developed a TCP/UDP-like protocol according to the OSI model. This project involved practicing socket
                programming, utilizing shortest-path algorithm and utilizing Wireshark to capture packets-related
                information to be used in analysis and debugging.
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The University of Queensland (IdeaHub) </span> 2021.01~2021.03</h3>
            <h4>Frontend Engineer</h4>
            <p>
                This was an internship with a start-up company named “SPACE” established by the “IdeaHub” of the
                University of Queensland. My responsibilities involved creating React components as required, conducting
                daily maintenance/changes for existing SCSS files, optimizing APP layout and general debugging.
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The University of Queensland</span> 2020.07~2020.11</h3>
            <h4>Team leader and Frontend Engineer</h4>
            <p>
                Led my team to propose, design, develop and deploy a full-stack Web application, “InScene”. The project
                was started by using Adobe XD and Adobe Illustrator to create prototypes, and was developed based on
                multiple web dev technologies which include: HTML，CSS，Jquery，AJAX, Leaflet, TheMovieDB, RapidAPI. As a
                result, the project was deployed on UQzone (a cloud service provided by UQ) visa nginx.
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The University of Queensland</span> 2020.07~2020.11</h3>
            <h4>Project Manager and Software Engineer</h4>
            <p>
                Led my team to develop an Android-based application, “MeMa”. Due to the limited development time, we
                used Google Firebase to fast establish our database, used Android Studio to adapt our team’s Java
                preferences and integrated “Google Translate API” to ensure translation quality. The Minimal Viable
                Product (MVP) was achieved by us in 4 months.
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The University of Queensland </span> 2020.05~2020.07</h3>
            <h4>Team Leader and Project Manager</h4>
            <p>
                Led my team to propose and design a “Invasive species detect application”. The development proposal had
                been used and developed by other UQ teams as their capstone projects.
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The University of Queensland</span> 2020.04~2020.06</h3>
            <h4>Software Engineer</h4>
            <p>
                Developed a traffic management system. JavaFX was used to create GUI. The application is able to predict
                the congestion rate for each simulated intersection.
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The University of Queensland </span> 2020.04~2020.07</h3>
            <h4>UI/UX Designer</h4>
            <p>
                Designed a high-fidelity prototype for a mobile application named “Physical Media Anywhere (PAW)”. The
                project strictly followed HCI design patterns from gathering user insights to conducting three prototype
                iterations to an achieve feasible digital prototype to be used in actual development.
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The University of Queensland</span> 2020.03~2021.05</h3>
            <h4>Full-stack Developer</h4>
            <p>
                In this individual project, I design and created a preowned media trading platform by Utilizing
                bootstrap，AJAX，CSS and CodeIgniter3 (a Php framework), based on MVC structure. The features include:
                user login/logout, password protection, reCAPTCHA, document upload/download, upload/list products, leave
                comments and etc.
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The EAIT Leadership Center of the University of Queensland</span> 2019.11~2019.12</h3>
            <h4>Team Leader</h4>
            <p>
                Participated in a cross-faculty leadership program on the topic of “Analyzing the use purpose of a newly
                developed area at Gatton campus”. As result, our proposal on “organizing activities for students to
                exchange learning gains during public holidays” was highly appreciated by the university.
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The University of Queensland</span> 2019.10~2019.11</h3>
            <h4>Frontend Engineer</h4>
            <p>
                Designed and developed the frontend pages for a “holiday-themed” website. The project involved utilizing
                best practice of responsive design and complying to WCAG 2.0 standards. The website was designed
                according to Progressive Enhancement and Graceful Degradation to ensure the accessibility for everyone.
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The University of Queensland</span> 2019.09~2019.10</h3>
            <h4>Software Engineer</h4>
            <p>
                Developed a “Mario” game copy in python by using Tkinter, pymunk and pillow.
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The University of Queensland</span> 2019.07~2020.09</h3>
            <h4>Data Engineer</h4>
            <p>
                Populated, inserted and maintained data for a virtual film streaming company “HomeCinema”. This project
                involved: DBMS design (ER modeling and Normal Forms), deploy database (MySql), populate data (DDL), data
                CRUD(DML). The DBMS was later on transformed to Oracle platform, and its ACID properties and lookup
                efficiency were ensured by advanced SQL strategies such as making integrity constraints,
                materialized/virtual views, triggers, query optimization,
                Indexing and etc.

            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The Queensland University of Technology</span> 2017.07~2017.11</h3>
            <h4>Marketing Specialist</h4>
            <p>
                Strategic marketing analysis role for “MOLTEN STORE” (A bridal jewelry brand in Australia).
                This project involved utilizing SWOT modeling and CPC analysis to draft feasibility marketing plan for
                the company to improve its sales at local area.
            </p>
        </div>
        <div className={style.in_uni_expItem}>
            <h3><span>The Queensland University of Technology</span>2017.02~2017.06</h3>
            <h4>Marketing Specialist</h4>
            <p>
                Conduct marketing analysis and prepared marketing reports for “Escape Travel Australia”. The major
                mission was to provide insightful advice based on its CPC pricing strategy and the existing Search
                Engine Marketing (SEM) strategy.
            </p>
        </div>
    </div>
    <div className={style.working_experience}>
        <h2>Working Experience</h2>
        <div className={style.working_expItem}>
            <h3><span>Corporate Service Manager for Golden Lakes developments Pty Ltd in Cairns Australia</span>
                2017.12~2019.03</h3>
            <h4>Corporate Service Manager </h4>
            <p>
                Plan, organize and oversee company’s financial and marketing strategy. During my service, I had been
                translating and interpreting multiple business-related documents for our Chinese-speaking clients. I was
                also in the position to maintain a smooth communication between our shareholders and company
                stakeholders.
            </p>
        </div>
    </div>
    <div className={style.project_experience}>
        <h2>Project Experience</h2>
        <div className={style.project_expItem}>
            <h3><span>Full-stack Project：Car renting SPA</span> 2021.08~2021.11</h3>
            <h4>Full-stack Developer</h4>
            <p>
                The project followed a “React + Node.js” development mode. We also effectively used the advantages of
                “Agile” development. I participated in establishing the backend server and its database by using
                “express.js” and “Mongoose”, implementing layouts by using “material UI” and “Sass”, handling data flow
                by using “Axios”, managing React states by using “Redux”. The code was highly “readable”, “reusable” and
                “maintainable” thanks to professional practice and the use of “eslint”.
            </p>
        </div>
        <div className={style.project_expItem}>
            <h3><span>Developed a Car Renting Platfrom for “Qubit Rental” (A Local Australian company)</span>
                2020.12~2021.01</h3>
            <h4>Frontend Engineer and Project Manager</h4>
            <p>
                According to Client’s requirements, as the product manager, I transferred their needs to feasible
                features to be developed by my team. Due to the time limit, we chose to use “WordPress” to minimize
                development time and cost. The final product has the features of showcasing vehicles, handling online
                bookings, vehicle information management and tracking business related figures. This is a commercialized
                project.

                Product URL：<a href="https://www.qubitrental.com.au">https://www.qubitrental.com.au</a>
            </p>
        </div>
    </div>
    <div className={style.skillsSet}>
        <h2>Skills</h2>
        <div className={style.skillsSet_content}>
            <div className={style.skillsSet_text}>
                <div className={style.programming_language}>
                    <h3>
                        Programming languages：
                    </h3>
                    <ul className={style.programming_language_list}>
                        <li className={style.programming_language_Python}>
                            <h3 onClick={togglePythonEffect} onMouseEnter={togglePythonEffect}>Python 2.0/3.0,</h3>
                        </li>

                        <li className={style.programming_language_Java}>
                            <h3 onClick={toggleJavaEffect} onMouseEnter={toggleJavaEffect}>Java,</h3>
                        </li>

                        <li className={style.programming_language_Php}>
                            <h3 onClick={togglePhpEffect} onMouseEnter={togglePhpEffect}>Php</h3>
                        </li>
                    </ul>
                </div>
                <div className={style.database_language}>
                    <h3>
                        Database languages：
                    </h3>
                    <ul className={style.database_language_list}>
                        <li className={style.database_language_sql}>
                            <h3 onClick={toggleSqlEffect} onMouseEnter={toggleSqlEffect}>SQL,</h3>
                        </li>
                        <li className={style.database_language_mongo}>
                            <h3 onClick={toggleMongoEffect} onMouseEnter={toggleMongoEffect}>MQL (MongoDB Query Language)</h3>
                        </li>
                    </ul>
                </div>
                <div className={style.frontend_language}>
                    <h3>
                        Frontend languages：
                    </h3>
                    <ul className={style.frontend_language_list}>
                        <li className={style.frontend_language_html}>
                            <h3 onClick={toggleHtmlEffect} onMouseEnter={toggleHtmlEffect}>HTML5,</h3>
                        </li>
                        <li className={style.frontend_language_css}>
                            <h3 onClick={toggleSassEffect} onMouseEnter={toggleSassEffect}>CSS/SASS,</h3>
                        </li>
                        <li className={style.frontend_language_js}>
                            <h3 onClick={toggleJsEffect} onMouseEnter={toggleJsEffect}>JavaScript (ECMAScript 6)</h3>
                        </li>
                    </ul>
                </div>
                <div className={style.frontend_framework}>
                    <h3>
                        Frontend framework/libraries：
                    </h3>
                    <ul className={style.frontend_framework_list}>
                        <li className={style.frontend_framework_react}>
                            <h3 onClick={toggleReactEffect} onMouseEnter={toggleReactEffect}>React,</h3>
                        </li>
                        <li className={style.frontend_framework_jQuery}>
                            <h3 onClick={toggleJqueryIconEffect} onMouseEnter={toggleJqueryIconEffect}>jQuery</h3>
                        </li>
                    </ul>
                </div>
                <div className={style.backtend_framework}>
                    <h3>
                        Backend framework：
                    </h3>
                    <ul className={style.backtend_framework_list}>
                        <li className={style.backtend_framework_codeigniter}>
                            <h3 onClick={toggleIgniterEffect} onMouseEnter={toggleIgniterEffect}>CodeIgniter,</h3>
                        </li>
                        <li className={style.backtend_framework_node}>
                            <h3 onClick={toggleNodeEffect} onMouseEnter={toggleNodeEffect}>Node Js</h3>
                        </li>
                    </ul>
                </div>
                <div className={style.version_control}>
                    <h3>
                        Versioning/colaboration tools：
                    </h3>
                    <ul className={style.version_control_list}>
                        <li className={style.version_control_git}>
                            <h3 onClick={toggleVersioningTool} onMouseEnter={toggleVersioningTool}>Git (Github and Bitbucket)</h3>
                        </li>
                        <li className={style.version_control_kanban}>
                            <h3 onClick={toggleJiraEffect} onMouseEnter={toggleJiraEffect}>Jira </h3>

                        </li>
                    </ul>
                </div>
                <div className={style.UI_framework}>
                    <h3>
                        其他UI/UX/页面布局工具：
                    </h3>
                    <ul className={style.UI_framework_list}>
                        <div className={style.UI_framework_firstRow}>
                            <li className={style.UI_framework_xd}>
                                <h3 onClick={toggleXdEffect} onMouseEnter={toggleXdEffect}>Adobe XD,</h3>

                            </li>
                            <li className={style.UI_framework_Illustrator}>
                                <h3 onClick={toggleAiEffect} onMouseEnter={toggleAiEffect}>Adobe Illustrator,</h3>

                            </li>
                        </div>
                        <div className={style.UI_framework_secondRow}>
                            <li className={style.UI_framework_mui}>
                                <h3 onClick={toggleMuiEffect} onMouseEnter={toggleMuiEffect}>MUI(Material UI),</h3>

                            </li>
                            <li className={style.UI_framework_bootstrap}>
                                <h3 onClick={toggleBootstrapEffect} onMouseEnter={toggleBootstrapEffect}>Bootstrap</h3>

                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className={style.skillsSet_images}>
                <div className={style.skillsSet_images_firstSection}>
                    <img src={python_icon} alt="icon" className={pythonIcon? style.skillsSet_images_iconEffect:
                        style.none} onClick={togglePythonEffect} />
                    <img src={java_icon} alt="icon" className={javaIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleJavaEffect} />
                    <img src={php_icon} alt="icon" className={phpIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={togglePhpEffect} />
                    <img src={sql_icon} alt="icon" className={sqlIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleSqlEffect} />
                </div>
                <div className={style.skillsSet_images_secondSection}>
                    <img src={mongodb_icon} alt="icon" className={mongodbIcon? style.skillsSet_images_iconEffect:
                        style.none} onClick={toggleMongoEffect} />
                    <img src={html_icon} alt="icon" className={htmlIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleHtmlEffect} />
                    <img src={sass_icon} alt="icon" className={sassIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleSassEffect} />
                    <img src={js_icon} alt="icon" className={jsIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleJsEffect} />
                </div>
                <div className={style.skillsSet_images_thirdSection}>
                    <img src={mui_icon} alt="icon" className={muiIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleMuiEffect} />
                    <img src={react_icon} alt="icon" className={reactIcon? style.skillsSet_images_iconEffect:
                        style.none} onClick={toggleReactEffect} />
                    <img src={jquery_icon} alt="icon" className={jqueryIcon? style.skillsSet_images_iconEffect:
                        style.none} onClick={toggleJqueryIconEffect} />
                    <img src={codeigniter_icon} alt="icon" className={codeigniterIcon?
                        style.skillsSet_images_iconEffect: style.none} onClick={toggleIgniterEffect} />
                </div>
                <div className={style.skillsSet_images_fourthSection}>
                    <img src={node_icon} alt="icon" className={nodeIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleNodeEffect} />
                    <img src={git_icon} alt="icon" className={gitIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleGitEffect} />
                    <img src={github_icon} alt="icon" className={githubIcon? style.skillsSet_images_iconEffect:
                        style.none} onClick={toggleGithubEffect} />
                    <img src={bitbucket_icon} alt="icon" className={bitbucketIcon? style.skillsSet_images_iconEffect:
                        style.none} onClick={toggleBitbucketEffect} />
                </div>
                <div className={style.skillsSet_images_fifthSection}>
                    <img src={jira_icon} alt="icon" className={jiraIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleJiraEffect} />
                    <img src={xd_icon} alt="icon" className={xdIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleXdEffect} />
                    <img src={ai_icon} alt="icon" className={aiIcon? style.skillsSet_images_iconEffect: style.none}
                        onClick={toggleAiEffect} />
                    <img src={bootstrap_icon} alt="icon" className={bootstrapIcon? style.skillsSet_images_iconEffect:
                        style.none} onClick={toggleBootstrapEffect} />
                </div>


            </div>
        </div>

    </div>
    <div className={style.comment}>
    <div className={style.language}>
            <h3>
                Language：
            </h3>
            <p>
                Proficient in English and Mandarin (I am a native Chinese speaker). PTE score: Average 76/90 with 81/90
                in listening and 87/90 in speaking. Accomplished and passed CCL certificate in Australia, therefore, I
                am also able to conduct translation/interpreting assignments between English and Mandarin.
            </p>
        </div>
        <p>
            I am good at combing my ICT know-hows with my business knowledge to benefit your company/organization. I
            also appreciate teamwork dynamics and believe active learning and maintaining heathy relationship with
            co-workers is the key to individual and organizational success. I have 7 years’ oversea studying and working
            experience; therefore, I am familiar with foreign markets and business formalities.
        </p>
    </div>
</div>
)

return (
<div>
    <NavBar myCvActive={true} lan={props.lan} changeLan={props.changeLan} />
    <div className={style.download_btn}>
        <DownloadButton  lan={props.lan}/>
    </div>
    <div className={style.container}>
        {
        props.lan? cnContent : enContent
        }
        <div className={style.social_media_list}>
            <SocialMediaList />
        </div>
    </div>
</div>
);
}

export default MyCVPage;