import React from "react";
import "../css/bplayer.css";
import {
  AiFillPlayCircle,
  AiFillStepBackward,
  AiFillStepForward,
} from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";
import { ImShuffle } from "react-icons/im";
import { FaIndent } from "react-icons/fa";
import { IoIosLaptop } from "react-icons/io";
import { BsFillVolumeUpFill } from "react-icons/bs";

export default function Player() {
  return (
    <div className="play-bar">
      <div className="row w-100 h-100">
        <div className="col-3 d-flex justify-content-start align-items-center left-play">
          <div className="play-img mr-3">
            <img
              id="titleImg"
              src="https://source.unsplash.com/random?33"
              alt=""
            />
          </div>
          <div className="play-name align-middle mr-3">
            <p id="titleM">Lorem ipsum dolor sit.</p>
            <small id="authorM">Lorem</small>
          </div>
          <div className="playL-icon d-flex align-items-center">
            <a href="#" className="mr-3 text align-items-center d-flex">
              <i className="far fa-heart"></i>
            </a>
            <a href="#" className="mr-3 text align-items-center d-flex">
              <i className="far fa-window-maximize"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <div className="row h-100">
            <div className="col-12 play-navigation d-flex justify-content-center align-items-center">
              <ImShuffle id="randomBtn" />
              <AiFillStepBackward id="prewBtn" />
              <AiFillPlayCircle size="2rem" id="playBtn" />
              <AiFillStepForward id="nextBtn" />
              <FiRepeat id="repeatBtn" />
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center input-navigation">
              <small id="timeStartH">00:</small>
              <small id="timeStartM">00</small>
              <input
                className="mx-3"
                id="durationM"
                type="range"
                min="0"
                max="100"
                value="0"
              />
              <small id="timeFinishH">00:</small>
              <small id="timeFinishM">00</small>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-end align-items-center volumeR text-white">
          <FaIndent size="0.8rem" />
          <IoIosLaptop size="1rem" />
          <BsFillVolumeUpFill id="muteM" size="1rem" />
          <input
            className="w-25"
            id="volumeM"
            type="range"
            min="0"
            max="100"
            value="10"
          />
        </div>
      </div>
    </div>
  );
}
