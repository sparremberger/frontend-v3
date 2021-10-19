import React from "react";
import foto from "../../assets/alanribeiro.jpg";
import styles from "./index.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiInstagram } from "react-icons/fi";

const Picture = () => {
    return (
        <>
            <h1 className={styles.h1}>Álan Sparremberger</h1>
            <img src={foto} className={styles.img}></img>
            <p className={styles.p}>
                Sou um desenvolvedor de sistemas para web, estudante de
                programação e amante da tecnologia.
            </p>
            <div id={styles.icons}>
                <div className={styles.icon}>
                    <a href='https://www.linkedin.com/in/alan-sparremberger-72a145115/'>
                        <FaLinkedinIn size={"1.8em"} />
                    </a>
                </div>
                <div className={styles.icon}>
                    <a href='https://github.com/sparremberger'>
                        <FiGithub size={"1.8em"} />
                    </a>
                </div>
                <div className={styles.icon}>
                    <a href='https://instagram.com/sparremberger_'>
                        <FiInstagram size={"1.8em"} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Picture;
