import React from "react";

// Comentario = um único comentário
// Comments = o componente dos comentários, que vai acoplado em uma page
// CommentPage = podia ter qualquer outro nome, é só uma página pro router direcionar.
// Preciso descobrir algum jeito de fazer essa "troca de componentes" sem precisar rotear pra uma nova página...

const Comentario = (props) => {
    return (
        <div>
            <h3>{props.comentario.nome}</h3>
            <h5>{props.comentario.createdAt}</h5>
            <p>{props.comentario.comentario}</p>
        </div>
    );
};

export default Comentario;
