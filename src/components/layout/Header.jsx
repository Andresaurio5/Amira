import React from 'react';
import Button from '../ui/Button';
import { FaSearch, FaUser, FaRegHeart, FaShoppingBag, FaBars } from 'react-icons/fa';
import './Header.css';

export default function Header() {
    const tit = "AMIRA.";
    const links = ["NOVEDADES", "MAQUILLAJE", "NUESTRA HISTORIA", "CONTACTO"];
    const cant = 2;

    return (
        <header className="hdr-cnt">
            <div className="hdr-left">
                <Button txt={<FaBars />} cls="btn-icon" tit="Abrir menu de navegacion" />
                <h1 className="hdr-logo">{tit}</h1>
            </div>
            <nav className="hdr-nav">
                {links.map((item, i) => (
                    <a key={i} href={`#${item.toLowerCase()}`} className="hdr-link" title={`Ir a ${item}`}>
                        {item}
                    </a>
                ))}
            </nav>
            <div className="hdr-right">
                <Button txt={<FaSearch />} cls="btn-icon" tit="Buscar productos" />
                <Button txt={<FaUser />} cls="btn-icon" tit="Mi cuenta" />
                <Button txt={<FaRegHeart />} cls="btn-icon" tit="Lista de deseos" />
                <div className="cart-badge-cnt">
                    <Button txt={<FaShoppingBag />} cls="btn-icon" tit="Ver carrito de compras" />
                    <span className="cart-num">{cant}</span>
                </div>
            </div>
        </header>
    );
}