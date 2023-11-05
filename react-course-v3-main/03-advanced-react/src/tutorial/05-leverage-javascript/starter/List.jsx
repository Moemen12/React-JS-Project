import React from "react";
import { people } from "../../../data";
import { Person } from "./Person";

export const List = () => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
