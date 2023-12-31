import '../styles/Nav.css';
import logo from '../assets/icons/logo.svg';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GradientBorder } from './GradientBorder.js';
import { DropDown } from './DropDown.js';
import Player from './Player.js';
import home from '../assets/icons/home.svg';
import lib from '../assets/icons/lib.svg';
import heart from '../assets/icons/heart.svg';
import plus from '../assets/icons/creat-playlist.svg';
import search from '../assets/icons/search.svg';
import user from '../assets/icons/user.svg';
import { logout } from '../_services/AuthApi';
import ClickAwayListener from 'react-click-away-listener';
import Auth from '../contexts/Auth';
/**
 * Composant de barre de navigation principale.
 *
 * @component
 * @example
 * <Nav />
 *
 * @description
 * Le composant Nav représente la barre de navigation principale de l'application.
 * Il inclut des liens vers différentes sections, un bouton de profil, un menu déroulant,
 * et le lecteur audio.
 */
function Nav() {
    const { isAuthenticated } = useContext(Auth);
    const [open, setOpen] = useState(false);
    /**
     * Fonction pour basculer l'état du menu déroulant.
     */
    const toggle = () => {
        setOpen((o) => !o);
    };
    /**
     * Fonction appelée lors d'un clic en dehors du menu déroulant pour le fermer.
     */
    const clickAway = () => {
        if (open) {
            setOpen(false);
        }
    };
    return (
        <>
            <nav>
                <div className="nav">
                    <Link to="/" className="logo">
                        <img alt="Logo Rapearl" src={logo} />
                    </Link>
                    {!isAuthenticated ? (
                        <div>
                            <Link to="/register">Se connecter/S'inscrire</Link>
                        </div>
                    ) : (
                        <ClickAwayListener onClickAway={clickAway}>
                            <div>
                                <>
                                    <button onClick={toggle}>
                                        <img
                                            aria-label="Mon profil"
                                            id="user"
                                            src={user}
                                        />
                                    </button>

                                    <DropDown visible={open}>
                                        <GradientBorder>
                                            <Link
                                                onClick={toggle}
                                                id="pro"
                                                className="link"
                                                to="/pro">
                                                Essayer Rapearl Pro
                                            </Link>
                                        </GradientBorder>
                                        <Link
                                            onClick={toggle}
                                            id="upload"
                                            className="link"
                                            to="/upload">
                                            Upload
                                        </Link>
                                        <Link
                                            onClick={toggle}
                                            id="pro"
                                            className="link"
                                            to="/pro">
                                            Mention Légales
                                        </Link>

                                        <Link
                                            style={{ color: 'red' }}
                                            onClick={logout}>
                                            Se déconnecter
                                        </Link>
                                    </DropDown>
                                </>
                            </div>
                        </ClickAwayListener>
                    )}
                </div>
                <div className="nav-lateral">
                    <div className="links-lateral">
                        <Link to="/">
                            <img aria-label="Accueil" src={home}></img>
                            <h2>Acceuil</h2>
                        </Link>
                        <Link to="/search">
                            <img aria-label="Recherche" src={search}></img>
                            <h2>Recherche</h2>
                        </Link>
                        <Link to="/lib">
                            <img aria-label="Bibliothèque" src={lib}></img>
                            <h2>Bibliothèque</h2>
                        </Link>
                        <div className="others-links">
                            <Link to="/playlists">
                                <img
                                    className="rectangle"
                                    aria-label="Crée une playlist"
                                    src={plus}></img>
                                <h2>Crée une playliste</h2>
                            </Link>
                            <Link to="/playlists">
                                <img
                                    className="rectangle"
                                    aria-label="Titres likés"
                                    src={heart}></img>
                                <h2>Titres likés</h2>
                            </Link>
                        </div>
                    </div>
                    <div className="playlists">
                        <div className="playlists-container">
                            <Link to="/register">Se connecter</Link>
                        </div>
                    </div>
                </div>

                <Player />
            </nav>
        </>
    );
}

export default Nav;
