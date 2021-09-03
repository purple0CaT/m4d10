import React from "react";
import "../css/homestyle.css";

export default function Home() {
  return (
    <div class="mt-5 px-5">
      <br />
      <h3 class="header">Good Morning</h3>
      {/* <!-- Good Morning --> */}
      <div class="d-flex morn-tabs" id="albumRow">
        {/* <!-- ALBUMS --> */}
      </div>
      <br />
      <div class="d-flex justify-content-between align-items-end recently-ply">
        <h4 class="header"> Recently played</h4>
        <a href="#">
          <small>SEE ALL</small>
        </a>
      </div>
      {/* <!-- recent played --> */}
      <div class="recent-played mt-2">
        <a href="#" class="recent-card p-3">
          <div class="img-card-q">
            <img src="https://source.unsplash.com/random?34" alt="" />
            <img src="https://source.unsplash.com/random?24" alt="" />
            <img src="https://source.unsplash.com/random?14" alt="" />
            <img src="https://source.unsplash.com/random?12" alt="" />
          </div>
          <div class="body-card mt-2">
            <h6>Mix band</h6>
            <small></small>
          </div>
        </a>

        <a href="#" class="recent-card p-3">
          <div class="img-card">
            <img
              src="https://i1.sndcdn.com/artworks-000007961789-vo19ve-t500x500.jpg"
              alt=""
            />
          </div>
          <div class="body-card mt-2">
            <h6>Poison Lips</h6>
            <small>Vitalic</small>
          </div>
        </a>
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
        <a href="#" class="recent-card p-3">
          <div class="img-card-q">
            <img src="https://source.unsplash.com/random?34" alt="" />
            <img src="https://source.unsplash.com/random?24" alt="" />
            <img src="https://source.unsplash.com/random?14" alt="" />
            <img src="https://source.unsplash.com/random?12" alt="" />
          </div>
          <div class="body-card mt-2">
            <h6>Mix band</h6>
            <small></small>
          </div>
        </a>

        <a href="#" class="recent-card p-3">
          <div class="img-card">
            <img
              src="https://i1.sndcdn.com/artworks-000007961789-vo19ve-t500x500.jpg"
              alt=""
            />
          </div>
          <div class="body-card mt-2">
            <h6>Poison Lips</h6>
            <small>Vitalic</small>
          </div>
        </a>
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
        <a href="#" class="recent-card p-3">
          <div class="img-card-q">
            <img src="https://source.unsplash.com/random?34" alt="" />
            <img src="https://source.unsplash.com/random?24" alt="" />
            <img src="https://source.unsplash.com/random?14" alt="" />
            <img src="https://source.unsplash.com/random?12" alt="" />
          </div>
          <div class="body-card mt-2">
            <h6>Mix band</h6>
            <small></small>
          </div>
        </a>

        <a href="#" class="recent-card p-3">
          <div class="img-card">
            <img
              src="https://i1.sndcdn.com/artworks-000007961789-vo19ve-t500x500.jpg"
              alt=""
            />
          </div>
          <div class="body-card mt-2">
            <h6>Poison Lips</h6>
            <small>Vitalic</small>
          </div>
        </a>
      </div>
    </div>
  );
}
