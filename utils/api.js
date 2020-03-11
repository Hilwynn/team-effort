import axios from "axios";

const BASE_URL = "https://www.dnd5eapi.co";

export async function getSpells() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getSpell(url) {
  try {
    const response = await axios.get(`${BASE_URL}${url}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function searchSpells(query) {
  try {
    const response = await axios.get(`${BASE_URL}/api/spells/?name=${query}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}
