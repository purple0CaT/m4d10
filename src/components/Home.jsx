import React from "react";
import "../css/homestyle.css";
import AlbumCard from "./AlbumCard";
import AlbumTopCard from "./AlbumTopCard";
import { useEffect, useState } from "react";

export default function Home() {
  // Albums
  const [Album, setAlbum] = useState();
  // fetching
  const fetchAlbum = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=rammstein"
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
    } catch (error) {
      console.log(error);
    }
  };
  // Update
  useEffect(() => {
    fetchAlbum();
  }, []);
  let artist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
  let album = [1, 2, 3, 4, 5, 6, 7];
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
        <a href="#">
          <small>SEE ALL</small>
        </a>
      </div>
      {/* <!-- recent played --> */}
      <div className="recent-played mt-2">
        {album.map((arr) => (
          <AlbumCard />
        ))}
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
        <a href="#">
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
