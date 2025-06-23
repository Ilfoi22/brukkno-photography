import styles from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <a href="#hero" className={styles.logoText}>brukkno</a>
            </div>
            <ul className={styles.ul}>
                <li>
                    <a href="#hero" className={styles.link}>
                        Головна
                    </a>
                </li>
                <li>
                    <a href="#about" className={styles.link}>
                        Про мене
                    </a>
                </li>
                <li>
                    <a href="#gallery" className={styles.link}>
                        Галерея
                    </a>
                </li>
                <li>
                    <a href="#testimonials" className={styles.link}>
                        Відгуки
                    </a>
                </li>
                <li>
                    <a href="#contact" className={styles.link}>Контакти</a>
                </li>
            </ul>
        </nav>
    )
}