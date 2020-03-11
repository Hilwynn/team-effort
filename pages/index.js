import React from "react";
import Page from "../components/Page";

const Home = () => {
  return (
    <Page heading="Welcome home!">
      <ul>
        <li>Find the logo Sandra made</li>
        <li>Recreate the database, but without the party functionality</li>
        <li>
          Add functionality for DMs, i.e. ability to save lists of monsters
        </li>
        <li>Add ability to upload images</li>
        <li>Character creation with proper values etc.</li>
        <li>Character levelling help</li>
        <li>Figure out how to deploy the database</li>
      </ul>
    </Page>
  );
};

export default Home;
