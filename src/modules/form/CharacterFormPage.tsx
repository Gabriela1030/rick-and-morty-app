import React from 'react';
import CharacterForm from '../../components/CharacterForm';
import styles from '../../styles/CharacterForm.module.css';

const CharacterFormPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Crear Nuevo Personaje</h1>
      <CharacterForm />
    </div>
  );
};

export default CharacterFormPage;