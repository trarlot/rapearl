import React from 'react';
/**
 * Composant représentant la couverture d'un album.
 *
 * @component
 * @example
 * <Cover />
 *
 * @description
 * Le composant Cover affiche la couverture d'un album avec le titre et l'artiste associé.
 */
function Cover() {
    return (
        <div className="cover-container">
            <div className="cover">
                <div className="info">
                    <p data-text="S.P.S " className="title">
                        S.P.S
                    </p>
                    <p className="artist"> Ziak</p>
                </div>
            </div>
        </div>
    );
}

export default Cover;
