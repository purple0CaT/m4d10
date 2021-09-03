import React from 'react'
import { Link } from 'react-router-dom'

export default function AlbumCard({albumId, title, artist, image}) {
    return (
        <Link to={'/album/' + albumId} className="recent-card p-3" key={albumId + 123}>
          <div className="img-card">
            <img
              src={image}
              alt=""
            />
          </div>
          <div className="body-card mt-2">
            <h6>{title}</h6>
            <small>{artist}</small>
          </div>
        </Link>
    )
}
