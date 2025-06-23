import {useState} from "react"
import Container from "../Layout/Container"
import styles from "./Testimonials.module.css"

const TOTAL = 5
const testimonials = Array.from({length: TOTAL}, (_, i) => ({
    id: i,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: `Клієнт ${i + 1}`,
}))

export const Testimonials = () => {
    const [current, setCurrent] = useState(0)

    const next = () => setCurrent((current + 1) % TOTAL)
    const prev = () => setCurrent((current - 1 + TOTAL) % TOTAL)

    const visible = [
        current,
        (current + 1) % TOTAL,
        (current + 2) % TOTAL,
    ]

    return (
        <section id="testimonials" className={styles.testimonials}>
            <Container>
                <h2 className={styles.heading}>Відгуки</h2>

                <div className={styles.slider}>
                    <button className={styles.arrow} onClick={prev}>‹</button>

                    <div className={styles.grid}>
                        {visible.map((idx) => {
                            const item = testimonials[idx]
                            return (
                                <div key={item.id} className={styles.card}>
                                    <div className={styles.avatar}/>
                                    <p className={styles.text}>{item.text}</p>
                                    <p className={styles.name}>{item.name}</p>
                                </div>
                            )
                        })}
                    </div>

                    <button className={styles.arrow} onClick={next}>›</button>
                </div>

                <div className={styles.dots}>
                    {testimonials.map((_, i) => (
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
