import React from "react";
import styles from "./index.module.css";
import { FaUserAlt } from "react-icons/fa";
const Link = ({ ico, text, url }) => {
    return (
        <div id={styles.icon}>
            <div>{ico}</div>
            <a className={styles.a} href={url}>
                {text}
            </a>
        </div>
    );
};

export default Link;
