import React from "react";
import Arrows from "./Arrows";
import Player from "./Player";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  return (
    <>
      <section className="d-flex">
        <SideBar />
        <div className="h-main">
          <Arrows/>
          {children}</div>
      </section>
      <Player />
    </>
  );
}
