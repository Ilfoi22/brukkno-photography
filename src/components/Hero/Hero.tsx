import Container from "../Layout/Container.tsx";
import styles from './Hero.module.css'
import {Blob} from "../Blob/Blob.tsx";

export const Hero = () => {
    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({behavior: "smooth"});
    }

    return (
        <section id="hero" className={styles.hero}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>Я Юля — портретний фотограф</h1>
                        <p className={styles.subtitle}>
                            Ловлю справжні емоції світлом і тінями.
                        </p>
                        <button className={styles.button} onClick={scrollToAbout}>
                            Дізнатись більше
                        </button>
                    </div>
                    <div className={styles.decorativeBlob}>
                        <Blob/>
                    </div>
                </div>
            </Container>
        </section>

    )
}