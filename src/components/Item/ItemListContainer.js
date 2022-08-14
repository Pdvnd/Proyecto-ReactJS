import React, { useState, useEffect } from "react";
import { Data } from "./Data/Data";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData(Data);
    }, 2000);
  });


  return (
    <>
      <ItemList props={data} />
    </>
  );
};
