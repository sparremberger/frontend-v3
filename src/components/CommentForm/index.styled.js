import styled from "styled-components";

export const Comm = styled.div`
    button {
        font-family: "Segoe UI";
        background-color: rgb(86, 182, 138);
        border: none;
        color: white;
        padding: 10px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        border-radius: 5px;
        max-width: 30%; // TAMANHO DO BOTÃO PRIMÁRIO
        margin-right: 20px;
        @media (max-width: 767px) {
            width: 60%;
            margin-right: unset;
            align-self: center;
        }
    }

    input {
        width: 30%;
    }

    #comment {
        height: 4em;
    }

    form {
        display: flex;
        flex-direction: column;
    }
`;
