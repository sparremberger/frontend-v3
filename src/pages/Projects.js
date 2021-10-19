import React from "react";
import Sidebar from "../components/Sidebar";
import { Container } from "./index.styled";
import About from "../components/About";
import Project from "../components/Project";

const Projects = () => {
    return (
        <>
            <Sidebar />
            <Container>
                <About></About>
                <Project></Project>
            </Container>
        </>
    );
};

export default Projects;
