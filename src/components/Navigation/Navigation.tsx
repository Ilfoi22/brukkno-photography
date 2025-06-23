import {useState} from "react";
import styles from "./Navigation.module.css";
import {FiMenu, FiX} from "react-icons/fi";

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <a href="#hero" className={styles.logoText}>brukkno</a>
            </div>

            <div className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? <FiX size={28}/> : <FiMenu size={28}/>}
            </div>

            <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
                <li><a href="#hero" onClick={toggleMenu} className={styles.link}>Головна</a></li>
                <li><a href="#about" onClick={toggleMenu} className={styles.link}>Про мене</a></li>
                <li><a href="#gallery" onClick={toggleMenu} className={styles.link}>Галерея</a></li>
                <li><a href="#testimonials" onClick={toggleMenu} className={styles.link}>Відгуки</a></li>
                <li><a href="#contact" onClick={toggleMenu} className={styles.link}>Контакти</a></li>
            </ul>
        </nav>
    );
};
