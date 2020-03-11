import React, { Fragment } from "react";
import { SearchIcon } from "../../assets/icons";

import styles from "./SearchInput.module.scss";

const SearchInput = ({ onChange, value }) => (
  <Fragment>
    <label htmlFor="spellSearch" className="visually-hidden">
      Search
    </label>
    <div className={styles["inner-wrapper"]}>
      <input id="spellSearch" onChange={onChange} value={value} />
      <SearchIcon />
    </div>
  </Fragment>
);

export default SearchInput;
