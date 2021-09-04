import React from "react";
import { useState, useEffect } from "react";
import { Spinner, Button } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";

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
        <div className="artist-top-bg text-center">
          <img
            className="my-auto text-center artist-img"
            src={Artist.artistD.picture_xl}
            alt=""
          />
          <div className="artist-details">
            <small className="text-muted"> LISTENERS</small>
            <h1 className="font-weight-bold">{Artist.artistD.name}</h1>
            <div className='d-flex justify-content-center mt-3'>
              <Button className='play-alb-btn  mx-2' variant='success'>PLAY</Button>
              <Button className='play-alb-btn mx-2 fllw-btn'> FOLLOW</Button>
              <BsThreeDots className='my-auto ml-2' size='2rem'/>
            </div>{" "}
            <div className='d-flex justify-content-center artistTopMargin'>
              <small className='overview-about font-weight-bold active-artist-about'>OVERVIEW</small>
              <small className='overview-about font-weight-bold'>RELATED ARTISTS</small>
              <small className='overview-about font-weight-bold'>ABOUT</small>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-100 text-center mt-5">
          <Spinner className="mt-5" animation="grow" variant="light" />
        </div>
      )}
    </>
  );
}
