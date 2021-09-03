import React from "react";
import { Col } from "react-bootstrap";
import { BsMusicNote } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function AlbumSong({ title, artist, duration, playIt, val }) {
  return (
    <Col
      xs="12"
      className=" d-flex my-2 justify-content-sm-between album-songs"
      key={title + artist}
      value={val}
      onClick={(e) => playIt(e.target)}
    >
      <div className="d-flex">
        <BsMusicNote className="mr-3 my-auto" />
        <div className="d-flex flex-column">
          <h6 className="m-0"> {title}</h6>
          <Link to={"/artist/"+val}><small className='mr-auto'>{artist}</small></Link>
        </div>
      </div>
      <small>
        0{Math.floor(duration / 60)}:{Math.floor(duration % 60)}
      </small>
    </Col>
  );
}
