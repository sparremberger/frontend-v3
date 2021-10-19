import React from "react";
import { Content } from "./index.styled";
import npn from "../../assets/showcase-npn.png";
import tbcax from "../../assets/tbcax.jpg";
import loopstudios from "../../assets/loopstudios.png";

const ProjectsComponent = () => {
    return (
        <>
            <Content>
                <h1>Alguns projetos...</h1>
                <div className='project-card'>
                    <div className='image'>
                        <img src={npn}></img>
                    </div>
                    <p>
                        NPN Links é um encurtador de links criado aos moldes do
                        conhecido Bit.ly. Inteiramente gratuito, ele permite
                        transformar urls extensas em links curtos para facilitar
                        o compartilhamento em redes sociais. Também possui
                        funcionalidades como repositório/portfolio de links, e
                        permite que os usuários criem uma conta para acessar e
                        controlar seus links criados e ver estatísticas úteis
                        sobre eles.
                    </p>
                </div>
                <div className='project-card'>
                    <div className='image'>
                        <img src={loopstudios}></img>
                    </div>
                    <p>
                        LoopStudios foi um dos primeiros exercícios de design
                        responsivo. A partir de arquivos de design do Figma
                        fornecidos pelo site frontendmentor.io, o desafio foi
                        recriar o layout tendo apenas as referências visuais
                        como base.
                    </p>
                </div>
                <div className='project-card'>
                    <div className='image'>
                        <img src={tbcax}></img>
                    </div>
                    <p>
                        TBCAX é um repositório de dados sobre os componentes
                        químicos de mais de 5300 alimentos. Tendo sua API
                        construída com Express rodando no NodeJS, banco de dados
                        MongoDB, e o frontend utilizando a popular framework
                        React, o objetivo é que o TBCAX possa vir ser utilizado
                        por profissionais da área de nutrição, saúde, e pelo
                        público em geral. Ao tornar a API pública, objetiva-se
                        também facilitar e estimular a obtenção e estudo dos
                        dados fornecidos.
                    </p>
                </div>
            </Content>
        </>
    );
};

export default ProjectsComponent;
