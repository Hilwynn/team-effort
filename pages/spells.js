import React, { useEffect, useState } from "react";

import Page from "../components/Page";
import SearchInput from "../components/forms/SearchInput";
import SpellCard from "../components/SpellCard";

import { searchSpells } from "../utils/api";
import { useDebounce } from "../utils/hooks";

const Spells = () => {
  const [query, setQuery] = useState("");
  const [spells, setSpells] = useState([]);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      searchSpells(debouncedQuery)
        .then(response => setSpells(response.data.results))
        .catch(error => console.error(error));
    } else {
      setSpells([]);
    }
  }, [debouncedQuery]);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <Page title="Spells">
      <SearchInput onChange={handleChange} value={query} />

      <ul className="spell-list">
        {spells.map(spell => (
          <SpellCard key={spell.index} url={spell.url} />
        ))}
      </ul>
    </Page>
  );
};

export default Spells;
