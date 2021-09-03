import React from 'react'
import { Link } from 'react-router-dom'

export default function AlbumCard({albumId}) {
    return (
        <Link to={'/album/' + albumId} className="recent-card p-3" key={albumId + 123}>
          <div className="img-card">
            <img
              src="https://i1.sndcdn.com/artworks-000007961789-vo19ve-t500x500.jpg"
              alt=""
            />
          </div>
          <div className="body-card mt-2">
            <h6>Poison Lips</h6>
            <small>Vitalic</small>
          </div>
        </Link>
    )
}
