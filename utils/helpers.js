import React, { Fragment } from "react";

export function renderLevelString(level) {
  let ordinalIndicator;

  switch (level) {
    case 1:
      ordinalIndicator = "st";
      break;
    case 2:
      ordinalIndicator = "nd";
      break;
    case 3:
      ordinalIndicator = "rd";
      break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      ordinalIndicator = "th";
      break;
    default:
      console.error("renderLevelString: Only numbers 1-9 are valid arguments.");
  }

  return `${level}${ordinalIndicator} level`;
}

export function renderParagraphs(array) {
  return array.map(paragraph => <p key={paragraph}>{paragraph}</p>);
}

export function renderPunctuatedList(array, key) {
  return array
    .map((item, index) => {
      const value = key ? item[key] : item;
      const comma = index !== array.length - 1 ? ", " : "";

      return `${value}${comma}`;
    })
    .join("");
}
