import React from "react";
import { useState , useEffect} from "react";

export default function Artist({ match }) {
  let id = match.params.artistId;
  useEffect(() => {
    console.log(id);
  }, []);
  return <div></div>;
}
