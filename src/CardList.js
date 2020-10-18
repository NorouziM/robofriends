import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const CardArray = robots.map((user, i) => {
    return <Card name={user.name} email={user.email} id={user.id} />;
  });

  return <div>{CardArray}</div>;
};

export default CardList;
