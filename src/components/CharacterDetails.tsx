import React from 'react';
import { Character } from '../services/apiService';
import styles from '../styles/CharacterDetails.module.css';

interface CharacterDetailsProps {
  character: Character;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
  return (
    <div className={styles.details}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} className={styles.image} />
      <p><strong>Estado:</strong> {character.status}</p>
      <p><strong>Especie:</strong> {character.species}</p>
      <p><strong>Género:</strong> {character.gender}</p>
      <p><strong>Origen:</strong> {character.origin.name}</p>
      <p><strong>Ubicación:</strong> {character.location.name}</p>
    </div>
  );
};

export default CharacterDetails;