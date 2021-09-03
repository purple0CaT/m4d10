import React from "react";
import Player from "./Player";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  return (
    <>
      <section className="d-flex">
        <SideBar />
      </section>
      <Player />
    </>
  );
}
