import styles from "../assets/styles/cake.module.css"

export function Cake() {
    return (
        <div>

            <div className={styles.candle}>
                <div className={styles.flame}></div>
            </div>
        </div>
    );
}