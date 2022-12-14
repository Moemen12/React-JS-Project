import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./GameCalc.module.css";

const GameCalc = (props) => {
  const [name, SetName] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const randomNumber = [];

  const onAddName = (event) => {
    SetName(event.target.value);
  };
  const onAddFirstNumber = (event) => {
    setFirstNumber(event.target.value);
  };
  const onAddSecondNumber = (event) => {
    setSecondNumber(event.target.value);
  };

  const onAddInfoHandler = (event) => {
    event.preventDefault();

    if (
      +firstNumber.trim().length === 0 ||
      +secondNumber.trim().length === 0 ||
      name.trim().length === 0
    ) {
      return;
    }

    const sum = +firstNumber + +secondNumber;

    randomNumber.push(sum);
    for (let x = 0; x < 4; x++) {
      const number = Math.floor(Math.random() * 100);
      randomNumber.push(number);
    }

    props.onSum(randomNumber, sum, name);
    SetName("");
    setFirstNumber("");
    setSecondNumber("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={onAddInfoHandler}>
        <label htmlFor="name">Your Name :</label>
        <input id="name" value={name} type="text" onChange={onAddName} />
        <label htmlFor="first">First Number :</label>
        <input
          id="first"
          value={firstNumber}
          type="number"
          onChange={onAddFirstNumber}
        />
        <label htmlFor="two">Second Number :</label>
        <input
          id="two"
          value={secondNumber}
          type="number"
          onChange={onAddSecondNumber}
        />
        <Button type="submit">Calculate</Button>
      </form>
    </Card>
  );
};

export default GameCalc;
