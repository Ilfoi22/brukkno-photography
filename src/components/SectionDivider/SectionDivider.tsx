import styles from './SectionDivider.module.css';

export const SectionDivider = () => (
    <div className={styles.sectionDivider}>
        <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="var(--bg-alt-1)"
                d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
            />
        </svg>
    </div>
);
