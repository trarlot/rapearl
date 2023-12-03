import React from 'react';
import '../styles/Row.css';
import Card from './Card.js';
import { Link } from 'react-router-dom';

/**
 * Composant Row représentant une rangée d'albums.
 *
 * @component
 * @param {Object[]} albumsArray - Un tableau d'objets représentant les albums à afficher dans la rangée.
 * @returns {JSX.Element} Composant Row avec une liste d'albums/playlist.
 * @example
 * <Row albumsArray={[{ IdUser: 1, Titre: 'Nom de l'album', Cover: 'url-de-la-couverture.jpg' }, ...]} />
 *
 * @description
 * Le composant Row affiche une rangée d'albums avec un titre et un lien "AFFICHER PLUS" redirigeant vers la bibliothèque.
 */
function Row({ albumsArray }) {
    return (
        <>
            <div className="header-row">
                <h2 className="row-title">Titre</h2>
                <Link to="/bibli">
                    <p className="more">AFFICHER PLUS</p>
                </Link>
            </div>
            <div className="row">
                {albumsArray
                    ? albumsArray.map((albums) => (
                          <Card
                              IdUser={albums.IdUser}
                              Titre={albums.Titre}
                              Cover={albums.Cover}
                          />
                      ))
                    : ''}
            </div>
        </>
    );
}

export default Row;
