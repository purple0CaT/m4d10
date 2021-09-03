import React from "react";
import { Link } from "react-router-dom";

export default function AlbumTopCard() {
  return (
    <Link to="/" className="tab d-flex align-items-center align-middle">
      <div className="mr-3">
        <img
          src="https://i1.sndcdn.com/artworks-000007961789-vo19ve-t500x500.jpg"
          alt=""
        />
      </div>
      <p className="inline-block">123</p>
    </Link>
  );
}
