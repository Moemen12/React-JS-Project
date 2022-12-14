import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./NumberList.module.css";

const NumberList = (props) => {
  const [error, setError] = useState();
  const errorHandler = () => {
    setError(null);
  };

  let NewArray = props.takedInfo[0];
  NewArray.sort(() => Math.random() - 0.5);

  const detectAnswer = (event) => {
    if (props.takedInfo[1] === parseInt(event.target.textContent)) {
      setError({
        title: props.takedInfo[2],
        message: "Congratulations :) You Won",
      });
    } else {
      setError({
        title: props.takedInfo[2],
        message: "Opps You lost :(  Try again ",
      });
    }
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <div onClick={detectAnswer} className={classes.container}>
          {NewArray.map((number) => (
            <div key={number}>{number}</div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default NumberList;
