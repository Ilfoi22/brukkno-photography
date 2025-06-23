import styles from "./Contact.module.css"

export const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert("Повідомлення відправлено!")
    }

    return (
        <section id="contact" className={styles.contact}>
            <h2 className={styles.heading}>Контакти</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label htmlFor="name">Ім’я</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="message">Повідомлення</label>
                    <textarea id="message" name="message" required/>
                </div>
                <button type="submit" className={styles.button}>
                    Відправити
                </button>
            </form>
        </section>
    )
}
