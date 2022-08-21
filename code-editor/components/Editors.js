import React from "react";

import styles from "./editors.module.css";

export const JavascriptEditor = () => {
  return <Editor title={"Javascript"}/>;
};

export const HtmlEditor = () => {
  return <Editor title={"HTML"}/>;
};

export const CssEditor = () => {
  return <Editor title={"CSS"}/>;
};

const Editor = ({ title }) => {
  return  (
    <div className={styles.editorContainer}>
      <div className={styles.editorTitle}>
        {title}
      </div>
    </div>
  );
};