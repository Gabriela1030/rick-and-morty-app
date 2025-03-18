import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterDetails, Character } from '../../services/apiService'; 
import CharacterDetails from '../../components/CharacterDetails';
import styles from '../../styles/CharacterDetails.module.css';

const CharacterDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null); 

  useEffect(() => {
    const fetchCharacter = async () => {
      if (id) {
        const data = await getCharacterDetails(parseInt(id));
        setCharacter(data);
      }
    };
    fetchCharacter();
  }, [id]);

  if (!character) return <div>Cargando...</div>;

  return (
    <div className={styles.container}>
      <CharacterDetails character={character} />
    </div>
  );
};

export default CharacterDetailsPage;