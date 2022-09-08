import { useState, useEffect, useDebugValue } from "react"; //eslint-disable

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  // This allows debugging in the Components developers tools for react
  useDebugValue(
    `Number of values from localStorage: ${
      JSON.parse(localStorage.getItem(animal))?.length
    }`
  );

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localStorage.getItem(animal)) {
      setBreedList(JSON.parse(localStorage.getItem(animal)));
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localStorage.setItem(animal, JSON.stringify(json.breeds));
      setBreedList(json.breeds || []);

      setStatus("loaded");
    }
  }, [animal]);
  return [breedList, status];
}
