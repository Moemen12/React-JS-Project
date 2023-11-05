import React from "react";
import { Tour } from "./Tour";

export const Tours = ({ tours, RemoveTour }) => {
  return (
    <section className="title">
      <h2>our tours</h2>
      <div className="title-underline"></div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={RemoveTour} />;
        })}
      </div>
    </section>
  );
};
