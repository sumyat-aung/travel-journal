import React from "react";
import data from "../data";
import Details from "./Details";

export default function Content() {
  const Alldata = data.map((item) => {
    return <Details id={item.id} {...item} />;
  });

  return <div className="content">{Alldata}</div>;
}
