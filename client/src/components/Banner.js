import React from 'react';
import '../styles/Banner.css';
/**
 * Composant de bannière publicitaire.
 *
 * @component
 * @example
 * <Banner />
 *
 * @description
 * Le composant Banner affiche une bannière publicitaire avec une image.
 * Il utilise la classe CSS 'banner' pour le style.
 */
function Banner() {
    return (
        <div className="banner">
            <img
                alt="Bannière publicitaire"
                src={'../../assets/banner.jpg'}></img>
        </div>
    );
}

export default Banner;
