import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { searchSpells } from "../utils/api";
import { characterClasses } from "../utils/constants";
import { useDebounce } from "../utils/hooks";

import SpellCard from "../components/SpellCard";

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

  return (
    <Page title="Spells">
      <label htmlFor="spellSearch">Search:</label>
      <input
        id="spellSearch"
        onChange={event => setQuery(event.target.value)}
        value={query}
      />

      <ul className="spell-list">
        {spells.map(spell => (
          <SpellCard key={spell.index} url={spell.url} />
        ))}
      </ul>
    </Page>
  );
};

export default Spells;
