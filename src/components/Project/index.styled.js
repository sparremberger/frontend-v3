import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    image-rendering: crisp-edges;
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */

    .project-card {
        margin: 1em;
        width: 45%;
        height: min-content;

        background-color: rgb(250, 250, 250);
        display: flex;
    }

    .image {
        width: 50%;
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
    }

    p {
        font-size: 12px;
        width: 50%;
        margin: 1em;
    }

    h1 {
        width: 100%;
        margin-left: 1em;
    }

    @media (max-width: 767px) {
        justify-content: center;
        .project-card {
            width: 80%;
            flex-direction: column;
            height: 500px;
            align-items: center;
        }

        p {
        }
    }
`;
