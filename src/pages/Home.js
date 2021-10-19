import React from "react";
import Sidebar from "../components/Sidebar";
import { Container } from "./index.styled";
import About from "../components/About";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <>
            <Sidebar />
            <Container>
                <About></About>

                <Skills></Skills>
            </Container>
        </>
    );
};

export default Home;
