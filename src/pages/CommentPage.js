import React from "react";
import Sidebar from "../components/Sidebar";
import { Container } from "./index.styled";
import About from "../components/About";
import Comments from "../components/Comments";

// Comentario = um único comentário
// Comments = o componente dos comentários, que vai acoplado em uma page
// CommentPage = podia ter qualquer outro nome, é só uma página pro router direcionar.
// Preciso descobrir algum jeito de fazer essa "troca de componentes" sem precisar rotear pra uma nova página...

const CommentPage = () => {
    return (
        <>
            <Sidebar />
            <Container>
                <About></About>
                <Comments></Comments>
            </Container>
        </>
    );
};

export default CommentPage;
