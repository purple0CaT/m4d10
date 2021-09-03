import React from "react";
import { Link } from "react-router-dom";

export default function AlbumTopCard({image, title, id}) {
  return (
    <Link to={"/artist/"+id} className="tab d-flex align-items-center align-middle">
      <div className="mr-3">
        <img
          src={image}
          alt={title}
        />
      </div>
      <p className="inline-block">{title}</p>
    </Link>
  );
}
