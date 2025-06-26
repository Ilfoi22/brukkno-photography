import {useState} from "react";
import styles from "./Navigation.module.css";
import {FiMenu, FiMoon, FiSun, FiX} from "react-icons/fi";

interface NavigationProps {
    onToggleTheme: () => void;
    currentTheme: string;
}

export const Navigation = ({onToggleTheme, currentTheme}: NavigationProps) => {
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
                <li className={styles.themeToggle}>
                    <button onClick={onToggleTheme} className={styles.themeBtn}>
                        {currentTheme === "light" ? <FiMoon size={22}/> : <FiSun size={22}/>}
                    </button>
                </li>
            </ul>
        </nav>
    );
};
