import React from "react";
import style from "./style.module.scss";
import NavBar from "../../components/NavBar";
import SocialMediaList from "../../components/SocialMediaList";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import inScenelogo from "../../assets/images/inScenelogo.png";
import weatherApiLogo from "../../assets/images/weatherApiLogo.png";
import quantumLogo from "../../assets/images/quantumLogo.svg";

function AsWebDevPage(props) {
  const cnContent = (
    <div className={style.content}>
      <Card className={style.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={inScenelogo}
            alt="logo"
            height="140"
            style={{ height: 180 }}
            className={style.inscene_logo}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              "InScene" 电影拍摄地搜索
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={style.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={weatherApiLogo}
            alt="logo"
            height="140"
            className={style.weather_logo}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              天气预报APP
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={style.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={quantumLogo}
            alt="logo"
            height="140"
            className={style.quantum_logo}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              "Quantum" 租车公司管理系统
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
  const enContent = (
    <div className={style.content}>
      <Card className={style.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={inScenelogo}
            alt="logo"
            height="140"
            style={{ height: 180 }}
            className={style.inscene_logo}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              "InScene" Movie spots search engine
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={style.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={weatherApiLogo}
            alt="logo"
            height="140"
            className={style.weather_logo}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              Simple Weather APP
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={style.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={quantumLogo}
            alt="logo"
            height="140"
            className={style.quantum_logo}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              "Quantum" car rental business management system
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );

  return (
    <div>
      <NavBar asWebActive={true} lan={props.lan} changeLan={props.changeLan} />

      <div className={style.container}>
        {props.lan ? cnContent : enContent}
        <div className={style.social_media_list}>
          <SocialMediaList />
        </div>
      </div>
    </div>
  );
}

export default AsWebDevPage;
