import React, { useEffect, useState } from 'react';
import { getCharacters, Character } from '../services/apiService';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import styles from '../styles/CharacterList.module.css';

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data.results);
    };
    fetchCharacters();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={() => console.log('Ver detalles', character.id)}
          />
        ))}

        
        <Link to="/form" className={styles.addButtonContainer}>
          <div className={styles.addButton}>
            <span>+</span>
            <p>Agregar Nuevo Personaje</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CharacterList;