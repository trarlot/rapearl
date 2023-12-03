import { useEffect } from 'react';
import { useRef } from 'react';
import '../styles/Nav.css';
/**
 * Calcule l'angle en degrés par rapport au centre d'un élément.
 *
 * @param {HTMLElement} element - L'élément par rapport auquel calculer l'angle.
 * @param {MouseEvent} event - L'événement de la souris contenant les coordonnées.
 * @returns {number} L'angle en degrés par rapport au centre de l'élément.
 */
export const findDegree = (element, event) => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - (rect.left + (rect.right - rect.left) / 2); //x position within the element
    const y = event.clientY - (rect.top + (rect.bottom - rect.top) / 2); //y position within the element

    const degreeRadian = Math.atan2(y, x);
    const degree = (degreeRadian * 180) / Math.PI + 180;
    return degree;
};
/**
 * Hook personnalisé qui applique une rotation de gradient en fonction du mouvement de la souris.
 *
 * @function
 * @returns {React.RefObject} La référence à l'élément DOM où appliquer le gradient.
 */
const useGradient = () => {
    const ref = useRef();

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (window.innerWidth >= 1024 && ref.current) {
                const degree = findDegree(ref.current, event);

                ref.current.style.setProperty(
                    '--gradient-rotation',
                    `${degree + 82}deg`,
                );
            }
        };
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    });
    return ref;
};
/**
 * Composant qui applique une bordure de gradient basée sur le mouvement de la souris.
 *
 * @component
 * @example
 * <GradientBorder>
 *   Contenu du composant avec bordure de gradient.
 * </GradientBorder>
 *
 * @param {ReactNode} children - Le contenu du composant avec bordure de gradient.
 * @returns {React.Element} Le composant avec bordure de gradient.
 */
export const GradientBorder = ({ children }) => {
    const ref = useGradient();

    return (
        <div ref={ref} className="gradient">
            {children}
        </div>
    );
};
