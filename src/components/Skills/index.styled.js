import styled from "styled-components";

export const Content = styled.div`
    background-color: white;
    width: 89%;
    min-height: 60%;
    margin-left: 2em;

    #container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .group {
        width: 230px;
        height: 230px;
        background-color: rgb(250, 250, 250);
        margin: 1em;
    }

    .icons {
        display: flex;
        font-size: 1.6em;
    }

    .technology {
        display: flex;
        justify-content: center;
        border-radius: 5px;
        margin: 10px;
        width: 40%;
        height: 100px;
        font-size: 2em;
        background-color: rgb(250, 250, 250);
    }
    .group > p {
        margin: 1em;
    }

    .technology > h1 {
        font-size: 0.4em;
    }
    @media (max-width: 767px) {
        #container {
            flex-direction: column;
        }

        .group {
            margin: 1em 0 1em 0;
        }
        .technology {
            width: 80%;
            height: 150px;
            font-size: 3em;

            flex-wrap: wrap;
            align-items: center;
        }
    }

    svg {
        margin: 10px;
    }

    #js {
        color: #f7df1e;
        background-color: black;
    }

    #ts {
        color: rgb(47, 116, 192);
    }

    #csharp,
    #dotnet {
        color: rgb(100, 32, 118);
    }

    #html {
        color: orangered;
    }

    #css {
        color: rgb(37, 75, 221);
    }

    #mongo {
        color: rgb(76, 170, 61);
    }

    #postgre {
        color: rgb(47, 116, 192);
    }

    #mssql {
        color: red;
    }

    #react {
        color: lightblue;
    }

    #node {
        color: rgb(139, 191, 61);
    }

    #git {
        color: orangered;
    }

    #heroku {
        color: purple;
    }

    #docker,
    #azure {
        color: rgb(35, 145, 230);
    }

    #redis {
        color: red;
    }
`;
