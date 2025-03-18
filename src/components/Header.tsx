import React from "react";
import styles from "../styles/Header.module.css";

/**
 * Componente que representa el encabezado de la página.
 * @returns {JSX.Element} Encabezado con título e imágenes.
 */
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src="/src/assets/rick-atom.svg" alt="Rick Logo" className={styles.logo} />
      <h1>Personajes de Rick y Morty</h1>
      <img src="/src/assets/rick-atom.svg" alt="Morty Logo" className={styles.logo} />
    </header>
  );
};

export default Header;
