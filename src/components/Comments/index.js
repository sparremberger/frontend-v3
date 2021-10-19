import React, { useEffect } from "react";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { listComments } from "../../actions/commentActions";
import Comentario from "../Comentario";
import { Content } from "./index.styled";

// Comentario = um único comentário
// Comments = o componente dos comentários, que vai acoplado em uma page
// CommentPage = podia ter qualquer outro nome, é só uma página pro router direcionar.
// Preciso descobrir algum jeito de fazer essa "troca de componentes" sem precisar rotear pra uma nova página...

const Comments = () => {
    const dispatch = useDispatch();

    const commentList = useSelector((state) => state.commentList);
    const { loading, error, comments } = commentList;

    useEffect(() => {
        dispatch(listComments());
    }, [dispatch]);

    return (
        <Content>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <hr></hr>
                    <h1>Comentários:</h1>
                    {comments.map((comment, index) => {
                        return <Comentario key={index} comentario={comment} />;
                    })}
                </div>
            )}
        </Content>
    );
};

export default Comments;
