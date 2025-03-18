import { describe, test, expect, afterEach } from "vitest";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getCharacters, getCharacterDetails, ApiResponse, Character } from '../services/apiService';

const mock = new MockAdapter(axios);

describe('apiService', () => {
  afterEach(() => {
    mock.reset();
  });

  test('getCharacters debe retornar una lista de personajes', async () => {
    const mockData: ApiResponse = {
      info: {
        count: 2,
        pages: 1,
        next: null,
        prev: null
      },
      results: [
        {
          id: 1,
          name: "Rick Sanchez",
          status: "Alive",
          species: "Human",
          type: "",
          gender: "Male",
          origin: { name: "Earth", url: "" },
          location: { name: "Citadel of Ricks", url: "" },
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          episode: [],
          url: "",
          created: ""
        }
      ]
    };

    mock.onGet('https://rickandmortyapi.com/api/character?page=1').reply(200, mockData);

    const data = await getCharacters(1);
    expect(data).toEqual(mockData);
  });

  test('getCharacterDetails debe retornar los detalles de un personaje', async () => {
    const mockCharacter: Character = {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: { name: "Earth", url: "" },
      location: { name: "Citadel of Ricks", url: "" },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [],
      url: "",
      created: ""
    };

    mock.onGet('https://rickandmortyapi.com/api/character/1').reply(200, mockCharacter);

    const data = await getCharacterDetails(1);
    expect(data).toEqual(mockCharacter);
  });

  test('getCharacterDetails debe lanzar un error si el ID es inválido', async () => {
    mock.onGet('https://rickandmortyapi.com/api/character/9999').reply(404);

    await expect(getCharacterDetails(9999)).rejects.toThrow();
  });
});
