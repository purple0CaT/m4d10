import React from "react";
import { useState, useEffect } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import AlbumSong from "./AlbumSong";

export default function Album({ match }) {
  // ALBUMS
  const [Album, setAlbum] = useState(null);
  //   UPDATE
  useEffect(() => {
    fetchingAlbum();
    console.log(match.params.albumId);
  }, [match.params.albumId]);
  //   PLAY IT
  const playIt = (val) => {
      console.log(val)
  };
  // Fetching
  const fetchingAlbum = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" +
          match.params.albumId
      );
      if (response.ok) {
        let data = await response.json();
        setAlbum({ albumSongs: data });
        setTimeout(() => {
          console.log(Album);
        }, 2000);
      } else {
        console.log("Error");
      }
    } catch (error) {}
  };
  return (
    <Row
      className="w-100 text-white h-100 px-5"
      style={{ marginTop: "8rem", padding: "0 5rem" }}
      key={match.params.albumId}
    >
      {Album ? (
        <>
        {/* LEFT COLUMN */}
          <Col xs="5 h-100 text-center my-auto">
            <img
              src={Album.albumSongs.cover_big}
              alt=""
              style={{ width: "70%", objectFit: "cover" }}
            />
            <h2 className="mt-1">{Album.albumSongs.title}</h2>
            <small className="text-muted">{Album.albumSongs.artist.name}</small>
            <Button className="play-alb-btn mt-5" variant="success">
              Play
            </Button>
            <div className="d-flex justify-content-around">
              <small className="text-muted">
                {Math.floor(Album.albumSongs.duration / 60 / 60)}h{" "}
                {Math.floor(Album.albumSongs.duration / 60)}m
              </small>
              <small className="text-muted">
                {Album.albumSongs.nb_tracks} songs
              </small>
            </div>
          </Col>
          <Col xs="7 text-white">
            <Row>
              {Album.albumSongs.tracks.data.map((track) => {
                return (
                  <AlbumSong
                    title={track.title}
                    artist={track.artist.name}
                    duration={track.duration}
                    val={track.id}
                    playIt={playIt}
                  />
                );
              })}
            </Row>
          </Col>
        </>
      ) : (
        <Spinner className="mx-auto" animation="grow" variant="light" />
      )}
    </Row>
  );
}
