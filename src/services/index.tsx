import axios from "axios";

interface ICharacterParams {
  name: string;
  status: string;
  gender: string;
  page: number;
}

export const getCharacters = async (params?: ICharacterParams) => {
  const res = await axios.get("https://rickandmortyapi.com/api/character", {
    params,
  });
  return res.data;
};
