import React from 'react';
import CharacterList from '../../components/CharacterList';
import styles from '../../styles/CharacterList.module.css';

const MainPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <CharacterList /> 
    </div>
  );
};

export default MainPage;