import React from "react";
import { Link } from "react-router-dom";
import Styles from "../styles/navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbarcont">
            <Link to="/" className="logo">LSKN</Link>
            <ul className="menu">
                <li><Link to="/" className="menu-link">Home</Link></li>
                <li><Link to="/productos" className="menu-link">Productos</Link></li>
                <li><Link to="/productos/buzos" className="menu-link">Buzos</Link></li>
                <li><Link to="/productos/camperas" className="menu-link">Camperas</Link></li>
                <li><Link to="/productos/pantalones" className="menu-link">Pantalones</Link></li>
                <li><Link to="/productos/calzado" className="menu-link">Calzado</Link></li>
                <li><Link to="/cart" className="menu-link">Carrito</Link></li>
            </ul>
        </nav>
    )
}