import React from "react";
import { Content } from "./index.styled";
import {
    SiHtml5,
    SiJavascript,
    SiCss3,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiCsharp,
    SiDotnet,
    SiReact,
    SiGit,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiMongodb,
    SiHeroku,
    SiAzuredevops,
    SiDocker,
    SiRedis,
} from "react-icons/si";

const Skills = () => {
    return (
        <Content>
            <h1>Skills</h1>
            <p>Mais de dez meses de experiência construindo software!</p>
            <div id='container'>
                <div className='group'>
                    <div className='icons'>
                        <SiJavascript id='js' />
                        <SiTypescript id='ts' />
                        <SiCsharp id='csharp' />
                        <SiHtml5 id='html' />
                        <SiCss3 id='css' />
                    </div>
                    <p>
                        Linguagens de programação são a ferramenta mais básica
                        no toolkit de qualquer desenvolvedor. A propósito, HTML
                        e CSS não são linguagens de programação, ok?
                    </p>
                </div>
                <div className='group'>
                    <div className='icons'>
                        <SiMongodb id='mongo' />
                        <SiPostgresql id='postgre' />
                        <SiMicrosoftsqlserver id='mssql' />
                        <SiRedis id='redis' />
                    </div>
                    <p>
                        Os dados precisam persistir em algum lugar, certo? Seja
                        SQL ou NoSQL, qualquer necessidade está coberta.
                    </p>
                </div>
                <div className='group'>
                    <div className='icons'>
                        <SiReact id='react' />
                        <SiExpress id='express' />
                        <SiNodedotjs id='node' />
                        <SiDotnet id='dotnet' />
                    </div>
                    <p>
                        Frameworks são abstrações que fornecem funcionalidades
                        de uso genérico para o desenvolvimento de software.
                        Eficiência ao programar!
                    </p>
                </div>
                <div className='group'>
                    <div className='icons'>
                        <SiGit id='git' />
                        <SiDocker id='docker' />
                        <SiHeroku id='heroku' />
                        <SiAzuredevops id='azure' />
                    </div>
                    <p>
                        Outras ferramentas indispensáveis: onde hospedar seu
                        código? Como fazer o controle de versão? Onde fazer
                        deploy?{" "}
                    </p>
                </div>
            </div>
        </Content>
    );
};

export default Skills;
