import React from 'react';
import { Character } from '../services/apiService';
import styles from '../styles/CharacterCard.module.css';

/**
 * Propiedades del componente CharacterCard.
 * @interface CharacterCardProps
 * @property {Character} character - Datos del personaje a mostrar.
 * @property {() => void} onClick - Función que se ejecuta al hacer clic en la tarjeta.
 */
interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}


const CharacterCard: React.FC<CharacterCardProps> = ({ character, onClick }) => {
  return (
    <div
      className={styles.card}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Tarjeta de ${character.name}`}
    >
      <img
        src={character.image}
        alt={character.name}
        className={styles.image}
        aria-label={`Imagen de ${character.name}`}
      />
      <h3>{character.name}</h3>
      <p>{character.species}</p>
    </div>
  );
};

export default CharacterCard;