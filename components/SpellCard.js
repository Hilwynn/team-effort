import React, { Fragment, useEffect, useState } from "react";
import { getSpell } from "../utils/api";
import {
  renderLevelString,
  renderParagraphs,
  renderPunctuatedList
} from "../utils/helpers";

const SpellCard = ({ url }) => {
  const [spell, setSpell] = useState(null);

  useEffect(() => {
    getSpell(url)
      .then(response => setSpell(response.data))
      .catch(error => console.error(error));
  }, [url]);

  return (
    <Fragment>
      {spell ? (
        <li className="spell-card">
          <h3>{spell.name}</h3>
          <dl>
            <div className="spell-card_grid">
              <div className="spell-card_field">
                <dt>Casting Time</dt>
                <dd>{spell.casting_time}</dd>
              </div>

              <div className="spell-card_field">
                <dt>Range</dt>
                <dd>{spell.range}</dd>
              </div>

              <div className="spell-card_field">
                <dt>Components</dt>
                <dd>{renderPunctuatedList(spell.components)}</dd>
              </div>

              <div className="spell-card_field">
                <dt>Duration</dt>
                <dd>{spell.duration}</dd>
              </div>

              <div className="spell-card_field">
                <dt>Ritual</dt>
                <dd>{spell.ritual ? "Yes" : "No"}</dd>
              </div>

              <div className="spell-card_field">
                <dt>Concentration</dt>
                <dd>{spell.concentration ? "Yes" : "No"}</dd>
              </div>
            </div>

            <div className="spell-card_materials">
              <dt className="visually-hidden">Material</dt>
              <dd>{spell.material}</dd>
            </div>

            <div className="spell-card_description">
              <dt className="visually-hidden">Description</dt>
              <dd>
                {renderParagraphs(spell.desc)}
                {spell.higher_level && renderParagraphs(spell.higher_level)}
              </dd>
            </div>

            <div className="spell-card_footer">
              <div className="spell-card_field">
                <dt className="visually-hidden">Classes</dt>
                <dd>{renderPunctuatedList(spell.classes, "name")}</dd>
              </div>

              <div className="spell-card_field">
                <dt className="visually-hidden">Level and school</dt>
                <dd>
                  {spell.level === 0
                    ? `${spell.school.name} cantrip`
                    : `${renderLevelString(spell.level)} ${spell.school.name}`}
                </dd>
              </div>
            </div>
          </dl>
        </li>
      ) : (
        <div>Loading...</div>
      )}
    </Fragment>
  );
};

export default SpellCard;
