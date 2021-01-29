import axios from "axios";

interface ICharacterParams {
  name: string;
}

export const getCharacter = async (params: ICharacterParams) => {
  const res = await axios.get("https://rickandmortyapi.com/api/character", {
    params: params,
  });
  return res.data;
};
