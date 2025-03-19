import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharacterCard from '../components/CharacterCard';
import { Character } from '../services/apiService';


const mockCharacter: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth', url: '' },
  location: { name: 'Citadel of Ricks', url: '' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

describe('CharacterCard Component', () => {
  test('renders character information correctly', () => {
    render(<CharacterCard character={mockCharacter} onClick={() => {}} />);

    // Verificar que la imagen, el nombre y la especie se rendericen correctamente
    const image = screen.getByRole('img', { name: /imagen de rick sanchez/i });
    const name = screen.getByText(/rick sanchez/i);
    const species = screen.getByText(/human/i);

    expect(document.body.contains(image)).toBe(true);
    expect(document.body.contains(name)).toBe(true);
    expect(document.body.contains(species)).toBe(true);
  });

  test('calls onClick when clicked', async () => {
    const onClickMock = vi.fn();
    render(<CharacterCard character={mockCharacter} onClick={onClickMock} />);

    const card = screen.getByRole('button');
    await userEvent.click(card);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});