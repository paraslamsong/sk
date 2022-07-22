import { Image } from "react-bootstrap";
// import butterfly from "../assets/images/butterfly.png";
import butterfly from "../assets/images/btfly.png";
import styles from "../assets/styles/wish.module.css";

import { useEffect, useState } from "react";

import music from '../musics/wish.m4a';

var audio = new Audio(music);

var volume = 0;
export default function WishPage() {
    const [time, setTime] = useState(Date.now());
    useEffect(() => {

        const interval = setInterval(() => setTime(Date.now()), 160);
        audio.volume = 0;
        audio.play();
    }, [])

    useEffect(() => {
        if (volume >= 0.8) {
            return;
        }
        volume = volume + 0.08
        audio.volume = volume;

    }, [time])
    return <div className="glass  animate__animated animate__zoomIn animate__faster">
        <div className={styles.wish_box}>
            {/* <Image className={styles.img_box} src={light} fluid /> */}
            <div className="row">
                <div className="col-md-5  col-sm-12 animate__animated animate__jackInTheBox">
                    {/* <Image src={butterfly} fluid height={200} width={200} /> */}
                    <Image src={butterfly} fluid height={200} width={200} />
                </div>
                <div className={"col-md-7 col-sm-12" + styles.wish_text}>
                    <div className={"animate__animated align-middle animate__fadeInUp " + styles.wish_text}>
                        Happy Birthday Sunset!<br />
                        Wishing you the happiest and the brightest day ever!<br />
                        Many many happy returns of the day!
                    </div>
                    <br />
                </div>
            </div>
            {/* <Cake /> */}
            <div className={styles.color_text}>
                <div className={styles.red + " animate__animated  animate__slideInUp"}>
                    May the sun serve you energy, <span style={{ color: "#ff0800" }}>every-day;</span>
                </div>
                <div className={styles.green + " animate__animated  animate__slideInUp"}>
                    May the moon shine your smile, <span style={{ color: "#a7fc00" }}>every-night;</span>
                </div>
                <div className={styles.blue + " animate__animated  animate__slideInUp"}>
                    May the coluds share happiness with you, <span style={{ color: "#00bfff" }}>every-dawn;</span>
                </div>
                <div className={styles.yellow + " animate__animated  animate__slideInUp"}>
                    May the breeze touch your hairs, <span style={{ color: "#990aff" }}>every-twilight;</span>
                </div>
                <div className={styles.yellow + " animate__animated  animate__slideInUp"}>
                    May the universe spark your eyes <span style={{ color: "aqua" }}>every-morning;</span>
                </div>
                <div className={styles.light_blue + " animate__animated  animate__slideInUp"}>
                    And..... the time fill you with joy, <span style={{ color: "yellow" }}>every-moment;</span>
                </div>
            </div>
            <div style={{ height: 100 }} />
        </div>
    </div>
}