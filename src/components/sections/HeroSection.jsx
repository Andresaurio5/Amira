import React from 'react';
import Button from '../ui/Button';
import './HeroSection.css';
import imgBase from '../../assets/MP.jpeg';

export default function HeroSection() {
    const num = "01";
    const sub = "BELLEZA QUE SE SIENTE TUYA";
    const tit1 = "Tu piel.";
    const tit2 = "Tu ritual.";
    const desc = "Maquillaje esencial, tonos honestos y formulas que cuidan. Creado para realzar todo lo que ya eres.";

    return (
        <section className="hero-cnt">
            <div className="hero-info">
                <span className="hero-num">{num}</span>
                <div className="hero-sub">{sub}</div>
                <h2 className="hero-tit">
                    {tit1}<br />{tit2}
                </h2>
                <p className="hero-desc">{desc}</p>
                <div className="hero-action">
                    <Button
                        txt="DESCUBRIR LA COLECCION ->"
                        cls="btn-main"
                        tit="Ver catálogo completo de productos"
                    />
                    <a
                        href="#conocenos"
                        className="hero-lnk"
                        title="Conocer mas sobre Amira"
                    >
                        CONOCENOS
                    </a>
                </div>
            </div>
            <div className="hero-box">
                <img
                    src={imgBase}
                    alt="Base Airbrush Flawless de Amira"
                    className="hero-img"
                />
            </div>
        </section>
    );
}