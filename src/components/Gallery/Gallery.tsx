import {useState} from "react"
import Container from "../Layout/Container"
import styles from "./Gallery.module.css"

const TOTAL = 5
const items = Array.from({length: TOTAL}, (_, i) => i + 1)

export const Gallery = () => {
    const [current, setCurrent] = useState(0)

    const next = () => setCurrent((current + 1) % TOTAL)
    const prev = () => setCurrent((current - 1 + TOTAL) % TOTAL)

    const visible = [
        current,
        (current + 1) % TOTAL,
        (current + 2) % TOTAL,
    ]

    return (
        <section id="gallery" className={styles.gallery}>
            <Container>
                <h2 className={styles.heading}>Галерея</h2>

                <div className={styles.slider}>
                    <button className={styles.arrow} onClick={prev}>‹</button>

                    <div className={styles.grid}>
                        {visible.map((idx) => (
                            <div key={idx} className={styles.card}>
                                <div className={styles.placeholder}>
                                    <span className={styles.number}>{items[idx]}</span>
                                </div>
                                <div className={styles.overlay}>
                                    <p className={styles.text}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className={styles.arrow} onClick={next}>›</button>
                </div>

                <div className={styles.dots}>
                    {items.map((_, i) => (
                        <span
                            key={i}
                            className={`${styles.dot} ${i === current ? styles.active : ""}`}
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}
