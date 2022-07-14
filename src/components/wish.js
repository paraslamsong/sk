import { Image } from "react-bootstrap";
import light from "../assets/images/lights.jpg";
import butterfly from "../assets/images/butterfly.png";
import styles from "../assets/styles/wish.module.css";
import Typewriter from 'typewriter-effect';
import { fadeIn } from 'react-animations'
import { useEffect } from "react";

import music from '../musics/wish.m4a';

var audio = new Audio(music);

export default function WishPage() {

    useEffect(() => {

        // audio.play();
    }, [])
    return <div className="glass  animate__animated animate__zoomIn animate__faster">
        <div className={styles.wish_box}>
            {/* <Image className={styles.img_box} src={light} fluid /> */}
            <div className="row">
                <div className="col-md-5  col-sm-12 animate__animated animate__jackInTheBox">
                    <Image src={butterfly} fluid height={40} />
                </div>
                <div className={"col-md-7 col-sm-12" + styles.wish_text}>
                    <div className={"animate__animated align-middle animate__fadeInUp " + styles.wish_text}>
                        Happy Birthday Sunset!<br />
                        Wishing you the happiest and the brightest day ever!<br />
                        Many many happy returns of the day!
                    </div>
                    <br />
                </div>
            </div> <div className={styles.color_text}>
                <div className={styles.red + " animate__animated  animate__slideInUp"}>
                    May the sun shine you new energy every-day;
                </div>
                <div className={styles.green + " animate__animated  animate__slideInUp"}>
                    May the moon highlight your smile every-night;
                </div>
                <div className={styles.blue + " animate__animated  animate__slideInUp"}>
                    May the coluds smile at you every-dawn;
                </div>
                <div className={styles.yellow + " animate__animated  animate__slideInUp"}>
                    May the breeze blow your hairs every-twilight;
                </div>
                <div className={styles.yellow + " animate__animated  animate__slideInUp"}>
                    May the universe give spark to your eyes every-morning;
                </div>
                <div className={styles.light_blue + " animate__animated  animate__slideInUp"}>
                    And..... the time give you best moments every-dusk;
                </div>
            </div>
        </div>
    </div>
}