import React from "react";
import "../css/homestyle.css";
import AlbumCard from "./AlbumCard";
import AlbumTopCard from "./AlbumTopCard";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

export default function Home() {
  // Albums
  const [Album, setAlbum] = useState({ loaded: false, albumSearch: "" });
  // Update
  useEffect(() => {
    fetchAlbum("AC/DC");
  }, []);
  // fetching
  const fetchAlbum = async (search) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q="+search
      );
      if (response.ok) {
        let data = await response.json();
        setAlbum({albumSearch: data });
        setTimeout(() => {
          console.log(Album.albumSearch);
        }, 2000);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
//   const 
  let artist = [1];
  let album = [1];
  return (
    <div className="mt-5 px-5">
      <br />
      <h3 className="header">Artists</h3>
      {/* <!-- Good Morning --> */}
      <div className="d-flex morn-tabs" id="albumRow">
        {/* MAPPING HEREE GOES */}
        {artist.map((arr) => (
          <AlbumTopCard />
        ))}
      </div>
      {/* <!-- ALBUMS --> */}
      <br />
      <div className="d-flex justify-content-between align-items-end recently-ply">
        <h4 className="header"> Albums</h4>
        <a href=''>
          <small>SEE ALL</small>
        </a>
      </div>
      <div className="recent-played mt-2">
        {Album.albumSearch ? (
          Album.albumSearch.data
            .slice(0, 7)
            .map((albm) => (
              <AlbumCard
                albumId={albm.album.id}
                title={albm.album.title}
                artist={Album.albumSearch.data[0].artist.name}
                image={albm.album.cover}
              />
            ))
        ) : (
          <Spinner className="mx-auto" animation="grow" variant="light" />
        )}
      </div>
      <br />
      {/* <!-- Shows to try --> */}
      <div className="d-flex justify-content-between align-items-end recently-ply">
        <div>
          <h4 className="header"> Shows to try</h4>
          <small style={{ color: "#b3b3b3", fontFamily: "fontBold" }}>
            Podcasts we think you'll get hooked on
          </small>
        </div>
        <a>
          <small>SEE ALL</small>
        </a>
      </div>
      <div className="recent-played mt-2">
        {album.map((arr) => (
          <AlbumCard />
        ))}
      </div>

      {/* <!-- reapeting --> */}
      <br />
      <div className="d-flex justify-content-between align-items-end recently-ply">
        <div>
          <h4 className="header"> Shows to try</h4>
          <small style={{ color: "#b3b3b3", fontFamily: "fontBold" }}>
            Podcasts we think you'll get hooked on
          </small>
        </div>
        <a href="#">
          <small>SEE ALL</small>
        </a>
      </div>
      <div className="recent-played mt-2">
        {album.map((arr) => (
          <AlbumCard />
        ))}
      </div>
    </div>
  );
}
