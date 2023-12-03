import React, { useEffect, useState } from 'react';

import '../styles/Card.css';
import { getIdUser } from '../_services/users';
/**
 * Composant de carte représentant un album ou une playlist.
 *
 * @component
 * @example
 * <Card IdUser={1} Titre="Titre de l'album/playlist" Cover="/chemin/vers/cover.jpg" />
 *
 * @param {number} IdUser - Identifiant de l'utilisateur associé à l'album/playlist.
 * @param {string} Titre - Titre de l'album/playlist.
 * @param {string} Cover - Chemin vers l'image de la couverture de l'album/playlist.
 *
 * @description
 * Le composant Card affiche une carte représentant un album ou une playlist, avec son titre,
 * sa couverture, et le nom de l'artiste associé (récupéré à partir de l'IdUser).
 */
function Card({ IdUser, Titre, Cover }) {
    const [ArtistName, setArtistName] = useState(false);
    /**
     * Fonction pour récupérer et définir le nom de l'artiste.
     *
     * @async
     * @function
     * @inner
     */
    useEffect(() => {
        if (IdUser) {
            getIdUser(IdUser)
                .then((response) => {
                    setArtistName(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, []);

    return (
        <div className="card">
            <img alt="Cover de l'album " src={Cover}></img>
            <h3> {Titre}</h3>
            <p>{ArtistName}</p>
        </div>
    );
}

export default Card;
