import React from "react";
import "../css/homestyle.css";
import AlbumCard from "./AlbumCard";
import AlbumTopCard from "./AlbumTopCard";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { traverseTwoPhase } from "react-dom/test-utils";

export default function Home() {
  //   ARTISTS DEFAULT
  const artists = [
    {
      id: 641,
      img: "https://cdns-images.dzcdn.net/images/artist/40e4c29fc2c05da589f7d8bba4d25c35/250x250-000000-80-0-0.jpg",
      title: "Vitalic",
    },
    {
      id: 115,
      img: "https://cdns-images.dzcdn.net/images/artist/ad61d6e0fa724d880db979c9ac8cc5e3/250x250-000000-80-0-0.jpg",
      title: "AC/DC",
    },
    {
      id: 464,
      img: "https://cdns-images.dzcdn.net/images/artist/1cae2b50f6668857cf52e14480e21477/250x250-000000-80-0-0.jpg",
      title: "Rammstein",
    },
    {
      id: 412,
      img: "https://cdns-images.dzcdn.net/images/artist/0b17b99897d17ceb7027ed57cdbb7044/250x250-000000-80-0-0.jpg",
      title: "Queen",
    },
    {
      id: 6588061,
      img: "https://cdns-images.dzcdn.net/images/artist/197a025e02d4f5169b7b904dfe687eaa/250x250-000000-80-0-0.jpg",
      title: "Magic Sword",
    },
  ];
  // Albums
  const [Album, setAlbum] = useState({ albumSearch: "" });
  const [AlbumSecond, setAlbumSecond] = useState({ albumSearch: "" });
  // Update
  useEffect(() => {
    fetchAlbum("AC/DC");
    fetchAlbum("Rammstein");
  }, []);
  // fetching
  const fetchAlbum = async (search) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + search
      );
      if (response.ok) {
        let data = await response.json();
        if (search === "AC/DC") {
          setAlbum({ albumSearch: data });
          setTimeout(() => {
            albumSorting();
          }, 7000);
        } else if (search === "Rammstein") {
          setAlbumSecond({ albumSearch: data });
        }
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [Test, setTest] = useState();
  // TEST FUNCTIONS
  const albumSorting = () => {
    let firstN = Album.albumSearch.data.map((ids) => ids.id);
    console.log(Album.albumSearch);
    let thisIds = uniqBy(firstN, JSON.stringify);
    thisIds.slice(0, 2).map((ids) => fetchTest(ids));
  };
  const uniqBy = (a, key) => {
    var index = [];
    return a.filter(function (item) {
      var k = key(item);
      return index.indexOf(k) >= 0 ? false : index.push(k);
    });
  };
  //   searchbyAlbums
  const [TestAlbums, setTestAlbums] = useState();
  const fetchTest = async (albId) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albId
      );
      if (response.ok) {
        let data = await response.json();
        setTestAlbums({ ...TestAlbums, albId: data });
        console.log(TestAlbums);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //
  return (
    <div className="mt-5 px-5">
      <br />
      <h3 className="header">Artists</h3>
      {/* <!-- Good Morning --> */}
      <div className="d-flex morn-tabs" id="albumRow">
        {/* MAPPING HEREE GOES */}
        {artists.map((arr) => (
          <AlbumTopCard image={arr.img} id={arr.id} title={arr.title} />
        ))}
      </div>
      {/* <!-- ALBUMS --> */}
      <br />
      <div className="d-flex justify-content-between align-items-end recently-ply">
        <h4 className="header"> Albums</h4>
        <a href="">
          <small>SEE ALL</small>
        </a>
      </div>
      <div className="recent-played mt-2">
        {Album.albumSearch ? (
          Album.albumSearch.data
            .slice(0, 7)
            .map((albm) => (
              <AlbumCard
                albumId={albm.album.id}
                title={albm.album.title}
                artist={Album.albumSearch.data[0].artist.name}
                image={albm.album.cover}
              />
            ))
        ) : (
          <Spinner className="mx-auto" animation="grow" variant="light" />
        )}
      </div>
      <br />
      {/* <!-- Shows to try --> */}
      <div className="d-flex justify-content-between align-items-end recently-ply">
        <div>
          <h4 className="header"> Shows to try</h4>
          <small style={{ color: "#b3b3b3", fontFamily: "fontBold" }}>
            Podcasts we think you'll get hooked on
          </small>
        </div>
        <a>
          <small>SEE ALL</small>
        </a>
      </div>
      <div className="recent-played mt-2">
        {AlbumSecond.albumSearch ? (
          AlbumSecond.albumSearch.data
            .slice(0, 7)
            .map((albm) => (
              <AlbumCard
                albumId={albm.album.id}
                title={albm.album.title}
                artist={AlbumSecond.albumSearch.data[0].artist.name}
                image={albm.album.cover}
              />
            ))
        ) : (
          <Spinner className="mx-auto" animation="grow" variant="light" />
        )}
      </div>

      {/* <!-- reapeting --> */}
      {/* <br />
      <div className="d-flex justify-content-between align-items-end recently-ply">
        <div>
          <h4 className="header"> Shows to try</h4>
          <small style={{ color: "#b3b3b3", fontFamily: "fontBold" }}>
            Podcasts we think you'll get hooked on
          </small>
        </div>
        <a href="#">
          <small>SEE ALL</small>
        </a>
      </div>
      <div className="recent-played mt-2">
        {album.map((arr) => (
          <AlbumCard />
        ))}
      </div> */}
    </div>
  );
}
