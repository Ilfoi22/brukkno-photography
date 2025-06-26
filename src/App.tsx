import './App.css'
import {Navigation} from "./components/Navigation/Navigation.tsx";
import {Hero} from "./components/Hero/Hero.tsx";
import {About} from "./components/About/About.tsx";
import {Gallery} from "./components/Gallery/Gallery.tsx";
import {Testimonials} from "./components/Testimonials/Testimonials.tsx";
import {Contact} from "./components/Contact/Contact.tsx";
import {useEffect, useState} from "react";

const getDefaultTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    return 'light';
};

function App() {
    const [theme, setTheme] = useState(getDefaultTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return (
        <>
            <Navigation onToggleTheme={toggleTheme} currentTheme={theme}/>

            <main>
                <section id="hero">
                    <Hero/>
                </section>
                <section id="about">
                    <About/>
                </section>
                <section id="gallery">
                    <Gallery/>
                </section>
                <section id="testimonials">
                    <Testimonials/>
                </section>
                <section id="contact">
                    <Contact/>
                </section>
            </main>
        </>
    )
}

export default App
