import styles from '../assets/styles/candle.module.css'
export default function Candle(){
    return (
    <div class={styles.container}>
        <div class={styles.candle_body}>
            <div class={styles.candle_stick}></div>
            <div class={styles.candle_flames}></div>
        </div>
    </div>
    );
}