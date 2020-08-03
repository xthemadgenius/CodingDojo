import React from "react";

import styles from "./SingleQuote.module.css";

const SingleQuote = (props) => {
  // console.log(props);

  return (
    <div>
      <q className={`${styles.italic} ${styles.bold}`}>{props.quote.text}</q> -{" "}
      <span>{props.quote.author}</span>
    </div>
  );
};

export default SingleQuote;
