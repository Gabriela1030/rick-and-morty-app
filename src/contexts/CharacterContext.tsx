import React, { createContext, useState, ReactNode } from 'react'; 
import { Character } from '../services/apiService';

interface CharacterContextType {
  selectedCharacter: Character | null;
  setSelectedCharacter: (character: Character | null) => void;
}

export const CharacterContext = createContext<CharacterContextType>({
  selectedCharacter: null,
  setSelectedCharacter: () => {},
});

interface CharacterProviderProps {
  children: ReactNode; 
}

export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <CharacterContext.Provider value={{ selectedCharacter, setSelectedCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};