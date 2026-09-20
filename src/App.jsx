import Accordion from "./components/Accordion/Accordion";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.app} id="top">
            <Header />

            <main className={styles.main} id="main-content">
                <Hero />
                <Features />
                <Accordion />
            </main>

            <Footer />
        </div>
    );
}

export default App;
