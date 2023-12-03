import React from 'react';
/**
 * Composant représentant la couverture d'un album en fullscreen.
 *
 * @component
 * @example
 * <Cover />
 *
 * @description
 * Le composant Cover affiche la couverture d'un album avec le titre et l'artiste associé en fullscreen.
 */
function CoverFs() {
    return (
        <>
            <div className="hedge"></div>
            <div className="containerFs">
                <div className="playlistFs"></div>
                <div className="dots"></div>
            </div>
            <div className="coverFs">
                <img
                    alt="Cover UMLA - Alpha Wann"
                    src="../../assets/covers/500x500.jpg"></img>
            </div>

            <div className="infoFs">
                <p data-text="S.P.S" className="titleFs">
                    Ziak - S.P.S
                </p>
                <p className="artistFs"> Ziak</p>
            </div>
        </>
    );
}
export default CoverFs;
