import React from "react";
export default function Title({ text, titleLevel = 1, isComment }) {

  let titleElement = "";
  let props = {};
  if (text) {
    const headingLevel = Math.min(Math.max(titleLevel, 1), 6);
    titleElement = `h${headingLevel}`;
  }
  if (isComment) {
    props.className = "comment";
  }

  return React.createElement(titleElement, props, text);
}
