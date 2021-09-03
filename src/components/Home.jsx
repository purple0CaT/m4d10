import React from "react";
import "../css/homestyle.css";
import { Row, Col } from "react-bootstrap";
import AlbumCard from "./AlbumCard";
import AlbumTopCard from "./AlbumTopCard";

export default function Home() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
  let arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div class="mt-5 px-5">
      <br />
      <h3 class="header">Good Morning</h3>
      {/* <!-- Good Morning --> */}
      <div class="d-flex morn-tabs" id="albumRow">
        {/* MAPPING HEREE GOES */}
        {array.map((arr) => (
          <AlbumTopCard />
        ))}
      </div>
      {/* <!-- ALBUMS --> */}
      <br />
      <div class="d-flex justify-content-between align-items-end recently-ply">
        <h4 class="header"> Recently played</h4>
        <a href="#">
          <small>SEE ALL</small>
        </a>
      </div>
      {/* <!-- recent played --> */}
      <div class="recent-played mt-2">
        {arr.map((arr) => (
          <AlbumCard />
        ))}
      </div>
      <br />
      {/* <!-- Shows to try --> */}
      <div class="d-flex justify-content-between align-items-end recently-ply">
        <div>
          <h4 class="header"> Shows to try</h4>
          <small style={{ color: "#b3b3b3", fontFamily: "fontBold" }}>
            Podcasts we think you'll get hooked on
          </small>
        </div>
        <a href="#">
          <small>SEE ALL</small>
        </a>
      </div>
      <div class="recent-played mt-2">
        {arr.map((arr) => (
          <AlbumCard />
        ))}
      </div>

      {/* <!-- reapeting --> */}
      <br />
      <div class="d-flex justify-content-between align-items-end recently-ply">
        <div>
          <h4 class="header"> Shows to try</h4>
          <small style={{ color: "#b3b3b3", fontFamily: "fontBold" }}>
            Podcasts we think you'll get hooked on
          </small>
        </div>
        <a href="#">
          <small>SEE ALL</small>
        </a>
      </div>
      <div class="recent-played mt-2">
        {arr.map((arr) => (
          <AlbumCard />
        ))}
      </div>
    </div>
  );
}
