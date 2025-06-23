import './App.css'
import {Navigation} from "./components/Navigation/Navigation.tsx";
import {Hero} from "./components/Hero/Hero.tsx";
import {About} from "./components/About/About.tsx";
import {Gallery} from "./components/Gallery/Gallery.tsx";
import {Testimonials} from "./components/Testimonials/Testimonials.tsx";
import {Contact} from "./components/Contact/Contact.tsx";

function App() {
    return (
        <>
            <Navigation/>

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
