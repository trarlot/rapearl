import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;
/**
 * Composant SwipeUp
 * @component
 * @param {Object} props - Propriétés du composant.
 * @param {boolean} props.visible - Indique si le composant est visible.
 * @param {Function} props.setVisible - Fonction pour définir la visibilité du composant.
 * @param {ReactNode} props.children - Contenu à afficher dans le composant SwipeUp.
 * @returns {JSX.Element} Composant SwipeUp.
 */
export function SwipeUp({ visible, setVisible, children }) {
    // Les états et effets sont utilisés pour gérer le comportement de glissement.
    const [state, setState] = React.useState(visible ? VISIBLE : HIDDEN);
    const [defaultPosition, setDefaultPosition] = useState({ x: 0, y: 0 });
    // Classe d'animation basée sur l'état du composant.
    const animation =
        state === LEAVING || state === ENTERING || state === VISIBLE
            ? 'activeSwipeUp'
            : 'outSwipeUp';
    useEffect(() => {
        // Met à jour l'état en fonction de la visibilité.
        if (!visible) {
            setState((s) => (s === VISIBLE ? LEAVING : HIDDEN));
        } else {
            setState((s) => (s === HIDDEN ? ENTERING : VISIBLE));
        }
    }, [visible]);

    useEffect(() => {
        // Gère l'entrée et la sortie en modifiant l'état.
        if (state === ENTERING) {
            setTimeout(() => {
                setState(VISIBLE);
            }, 200);
        } else if (state === LEAVING) {
            setState(HIDDEN);
        }
    }, [state]);

    const handleStop = (e, data) => {
        // Fonction appelée lorsque le composant est relâché après avoir été glissé.
        if (data.y > 200) {
            setVisible(false);
            setDefaultPosition({ x: 0, y: 0 });
        }
    };

    return (
        <Draggable
            bounds={{ top: 0 }}
            cancel="button"
            position={defaultPosition}
            grid={[10, 10]}
            axis="y"
            onStop={handleStop}>
            <div className={animation + ' swipeUp'}>{children}</div>
        </Draggable>
    );
}
