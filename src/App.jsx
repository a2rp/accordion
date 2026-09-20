import Header from "./components/Header";
import Hero from "./components/Hero";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

import { Styled } from "./App.styled";
import Features from "./components/Features";

function App() {
    return (
        <Styled.Wrapper id="top">
            <Header />

            <main id="main-content">
                <Hero />

                <Features />

                <Accordion />
            </main>

            <Footer />
        </Styled.Wrapper>
    );
}

export default App;
