import React from "react";
import "./Sidebar.css";
import Picture from "../Picture";
import Link from "../Link";
import { FaUserAlt, FaDesktop, FaBlog, FaRegEnvelope } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Picture />
            <div className='linkContainer'>
                <Link text={"Sobre mim"} url={"/"} ico={<FaUserAlt />} />
                <Link text={"Projetos"} url={"/projects"} ico={<FaDesktop />} />
                <Link
                    text={"Currículo"}
                    url={"http://alanspa.xyz/docs/latest-portugues.pdf"}
                    ico={<BsFillBriefcaseFill />}
                />
                <Link text={"Comentários"} url={"/comments"} ico={<FaBlog />} />
                <Link text={"Contato"} url={"#"} ico={<FaRegEnvelope />} />
            </div>
        </div>
    );
};

export default Sidebar;
