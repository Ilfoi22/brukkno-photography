import Container from "../Layout/Container.tsx";
import styles from './Hero.module.css'
import {Blob} from "../Blob/Blob.tsx";
import {FaInstagram, FaTiktok} from "react-icons/fa6";

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
                        <div className={styles.socials}>
                            <a href="https://www.instagram.com/brukkno.ph?igsh=b2Ztcm5hcDh3OXM5" target="_blank"
                               rel="noopener noreferrer">
                                <FaInstagram size={28}/>
                            </a>
                            <a href="https://www.tiktok.com/@brukkno.ph?_t=ZM-8xXAqtKloow" target="_blank"
                               rel="noopener noreferrer">
                                <FaTiktok size={24}/>
                            </a>
                        </div>

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