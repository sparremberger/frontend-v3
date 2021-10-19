import React from "react";
import {
    Container,
    Content,
    Image,
    ButtonPrimary,
    ButtonSecondary,
    Separator,
} from "./index.styled";
import { Link } from "react-router-dom";
import foto from "../../assets/foto_eu.jpg";

const About = () => {
    return (
        <>
            <Container>
                <Content>
                    <h1>Alan Sparremberger</h1>
                    <h2>Desenvolvedor Web</h2>
                    <p>
                        Estudante de programação e amante da tecnologia desde o
                        primeiro contato, transformo ideias em código e tento
                        deixar o mundo um pouco melhor do que o encontrei.
                        Atualmente cursando tecnólogo em Análise e
                        Desenvolvimento de Sistemas e participando do Programa
                        Starter, da GrowDev.
                    </p>
                    <div>
                        <ButtonPrimary className='primary'>
                            <Link to={"/projects"}>Projetos</Link>
                        </ButtonPrimary>

                        <ButtonSecondary className='secondary'>
                            <a href='http://alanspa.xyz/docs/latest-portugues.pdf'>
                                {" "}
                                Abrir Currículo
                            </a>
                        </ButtonSecondary>
                    </div>
                </Content>

                <Image>
                    <img src={foto}></img>
                </Image>
            </Container>
        </>
    );
};

export default About;
