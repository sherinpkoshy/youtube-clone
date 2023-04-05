import React from "react";
import Button from "./Button";

const buttonLists = [
  "All",
  "Music",
  "Mixes",
  "Comedy",
  "Trailer",
  "Gaming",
  "Gadgets",
  "Football",
  "Series",
  "Live",
  "Cricket",
  "Watched",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonLists.map((list) => {
        return <Button name={list} key={list} />;
      })}
    </div>
  );
};

export default ButtonList;
