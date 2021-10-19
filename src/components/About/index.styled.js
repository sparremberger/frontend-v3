import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: row;
    background-color: rgb(250, 250, 250);
    h1 {
        font-weight: 700;
        margin: 0;
        margin-bottom: 10px;
        margin-top: -50px;
    }
    h2 {
        font-weight: 300;
        color: rgb(79, 79, 79);
        margin: 0;

        margin-bottom: 10px;
    }

    @media (max-width: 767px) {
        h1 {
            margin-top: 30px;
        }
        flex-direction: column;
        min-width: 100% !important;
    }
`;

export const Content = styled.div`
    font-family: "Segoe UI";
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin-left: 2em;
    background-color: rgb(250, 250, 250);

    p {
        text-align: justify;
        color: rgb(79, 79, 79);
    }

    div {
        display: flex;
        flex-direction: row;

        justify-content: left;
    }

    @media (max-width: 767px) {
        margin-right: 2em;

        width: 80%;
        div {
            flex-direction: column;
        }
    }

    .primary:hover {
        background-color: rgb(86, 230, 138);
    }

    .secondary:hover {
        background-color: rgb(129, 129, 129);
    }
`;

export const ButtonPrimary = styled.button`
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
    min-width: 30%; // TAMANHO DO BOTÃO PRIMÁRIO
    margin-right: 20px;
    @media (max-width: 767px) {
        width: 60%;
        margin-right: unset;
        align-self: center;
    }
`;

export const ButtonSecondary = styled.button`
    font-family: "Segoe UI";
    background-color: rgb(79, 79, 79);
    border: none;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 5px;
    min-width: 30%; // TAMANHO DO BOTÃO SECUNDÁRIO
    font-weight: 500;

    @media (max-width: 767px) {
        width: 60%;
        align-self: center;
        margin-top: 10px;
    }
`;

export const Image = styled.div`
    display: flex;
    justify-content: center !important;
    align-items: center !important;
    margin: auto;
    height: 100%;
    width: 40%;
    img {
        width: 60%;
        max-height: 90%;
    }

    @media (max-width: 767px) {
        margin-top: 10px;
        width: 100%;
    }
`;

export const Separator = styled.hr`
    width: 100%;
    color: red;
`;
