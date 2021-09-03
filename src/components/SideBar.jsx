import React from "react";
import { Link } from "react-router-dom";
import '../css/sidebar.css'
import { FaSpotify, FaHome } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { BsSearch, BsPlusSquareFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

export default function SideBar() {
  return (
    <div className="side-bar">
      <div className="h-side-bar">
        <div className="h-logo d-flex mb-n1">
          <div>
            <FaSpotify size="40px" className="mr-1" />
          </div>
          <Link to="/" className="d-flex align-baseline">
            <h4 className="d-block my-auto">Spotify</h4>
          </Link>
        </div>
        {/* <!-- home links --> */}
        <div className="sd-links">
          <Link to="/" className="d-flex active primary-links">
            <FaHome size="1.5rem" />
            <span>Home</span>
          </Link>
          <div className="d-flex mt-1 primary-links">
            <BsSearch size="1.3rem" className="text-white my-auto ml-3" />{" "}
            <input
              type="text"
              className="ml-2"
              id="searchIt"
              onkeyup="fetchAlb(this.value)"
              placeholder="...search"
            />
          </div>
          <Link to="/library" className="d-flex primary-links">
            <VscLibrary size="1.5rem" /> <span>Your library</span>
          </Link>
        </div>
        <br />
        {/* <!-- liked and playlists --> */}
        <div className="playlists">
          <a href="#" className="d-flex">
            <div className="img-icon">
              <BsPlusSquareFill size="1.2rem" />
            </div>
            <span>Create Playlist</span>
          </a>
          <a href="#" className="d-flex">
            <div className="heart-ico">
              <AiFillHeart />{" "}
            </div>
            <span>Liked Songs</span>
          </a>
        </div>
      </div>
      {/* <!-- side bar tracks scroll --> */}
      <div className="side-bar-bottom">
        <div className="side-tracks">
          <Link to={'/artist/'} class="d-flex justify-content-between">
            <p>Funky Heavy Bluesy</p>
            <i class="fas fa-user-friends"></i>
          </Link>
          <a href="#" class="d-flex justify-content-between">
            <p>Rammstein</p>
          </a>
          <a href="#" class="d-flex justify-content-between">
            <p>Queen</p>
          </a>
          <a href="#" class="d-flex justify-content-between">
            <p>AC/DC</p>
          </a>
          <a href="#" class="d-flex justify-content-between">
            <p>Vitalic</p>
            <i class="fas fa-user-friends"></i>
          </a>
          <a href="#" class="d-flex justify-content-between">
            <p>Boney M</p>
          </a>
          <a href="#" class="d-flex justify-content-between">
            <p>Madonna</p>
            <i class="fas fa-user-friends"></i>
          </a>
          <a href="#" class="d-flex justify-content-between">
            <p>Red Hot Chili Peppers</p>
            <i class="fas fa-user-friends"></i>
          </a>
          <a href="#" class="d-flex justify-content-between">
            <p>Kizaru</p>
          </a>
          <a href="#" class="d-flex justify-content-between">
            <p>KINO</p>
          </a>
          <a href="#" class="d-flex justify-content-between">
            <p>Jain</p>
          </a>
          <a href="#" class="d-flex justify-content-between">
            <p>Muse</p>
            <i class="fas fa-user-friends"></i>
          </a>
          <a href="#" class="d-flex justify-content-between">
            <p>Magic Sword</p>
            <i class="fas fa-user-friends"></i>
          </a>
          <a href="#" class="d-flex justify-content-between">
            <p>The Knife</p>
            <i class="fas fa-user-friends"></i>
          </a>
          <a href="#" class="d-flex justify-content-between">
            <p>Dance With the Dead</p>
            <i class="fas fa-user-friends"></i>
          </a>
        </div>
        <br />
        <a href="#" className="d-flex justify-content-start side-download">
          <i className="far fa-arrow-alt-circle-down mr-2"></i>
          <p>Install App</p>
        </a>
        <br />
      </div>
    </div>
  );
}
