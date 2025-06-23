import Container from "../Layout/Container"
import styles from "./About.module.css"

export const About = () => {
    return (
        <section id="about" className={styles.about}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.imageWrapper}>
                        <img src="/julia1.jpg" alt="Юліна усмішка" className={styles.photo}/>
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Про мене</h2>
                        <p className={styles.text}>
                            Привіт! Я — Юля, 19 років, археолог за освітою і портретний фотограф
                            за покликанням. Відкрила світ світла і тіней, коли…
                        </p>
                        <ul className={styles.list}>
                            <li>Індивідуальні портретні фотосесії</li>
                            <li>Сімейні та парні зйомки</li>
                            <li>Креативні студійні проєкти</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>

    )
}
