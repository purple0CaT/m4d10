import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

export default function Artist({ match }) {
  const [Artist, setArtist] = useState({ artistD: "" });
  useEffect(() => {
    fetchArtist();
  }, []);
  // Fetching
  const fetchArtist = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
          match.params.artistId
      );
      if (response.ok) {
        let data = await response.json();
        setArtist({ artistD: data });
        setTimeout(() => {
          console.log(Artist.artistD);
        }, 2000);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {Artist.artistD ? (
        <div className="artist-top-bg">

            <div className="h-100 d-flex flex-column justify-content-center ">
              <h2 className="">{Artist.artistD.name}</h2>
              <p>{Artist.artistD.name}</p>
            </div>
            <div
            className="my-auto text-center h-100 position-absolute"
            style={{
              backgroundImage: "url(" + Artist.artistD.picture_xl + ")",opacity:'0.5'
            }}
          >
          </div>
        </div>
      ) : (
        <Spinner className="mx-auto" animation="grow" variant="light" />
      )}
    </>
  );
}
