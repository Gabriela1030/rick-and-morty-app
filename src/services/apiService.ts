import axios from 'axios';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export const getCharacters = async (page: number = 1): Promise<ApiResponse> => {
  const response = await axios.get(`${API_BASE_URL}/character?page=${page}`);
  return response.data;
};

export const getCharacterDetails = async (id: number): Promise<Character> => {
  const response = await axios.get(`${API_BASE_URL}/character/${id}`);
  return response.data;
};