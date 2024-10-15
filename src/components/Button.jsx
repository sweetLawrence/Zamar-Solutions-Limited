
import React from "react";
import Spinner from "./MinorComponents/Spinner";

const Button = ({ content, widenWidth, onClick ,loading }) => {
  return (
    <button className={`button ${widenWidth}`} onClick={onClick}>
      {loading ? (
        <Spinner />
      ) : (
        content
      )}
    </button>
  );
};

export default Button