import React, { useEffect, useState } from "react";
import { getAllTracks } from "../api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Player from "../Components/Player";
import "swiper/css";
import "swiper/css/navigation";

import "../Home.css";

const Home = () => {
  const [allTracks, setAllTracks] = useState([]);
const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const response = await getAllTracks();
        setAllTracks(response.tracks);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    }

    fetchTracks();
  }, []);

  const playSong = (track) => {
    console.log("Playing:", track.Name);
    // audio logic will go here later
  };

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Feel the Music</h1>
          <p>Stream millions of songs, anytime and anywhere</p>

          <div className="hero-buttons">
            <button className="btn primary">Explore Music</button>
            <button className="btn secondary">Create Playlist</button>
          </div>
        </div>
      </section>

      {/* Featured Albums / Tracks Slider */}
      <section className="section">
        <h2 className="section-title">Featured Albums</h2>

        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={5}
          spaceBetween={20}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 5 },
          }}
        >
          {allTracks.map((track, index) => (
            <SwiperSlide key={track._id || index}>
              <div className="all-songs" onClick={() => setCurrentTrack(track)}>
                <div className="song-banner">
                  <img src={track.Image} alt={track.Name} />
                </div>

                <div className="song-info">
                  <h4>{track.Name}</h4>
                  <span>{track.Artists[0]}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Player track={currentTrack} />

      </section>

      {/* Recently Played */}
      <section className="section">
        <h2 className="section-title">Recently Played</h2>

        <div className="song-list">
          <div className="song-item">
            <span>🎵</span>
            <div>
              <h4>Song One</h4>
              <p>Artist Name</p>
            </div>
          </div>

          <div className="song-item">
            <span>🎵</span>
            <div>
              <h4>Song Two</h4>
              <p>Artist Name</p>
            </div>
          </div>

          <div className="song-item">
            <span>🎵</span>
            <div>
              <h4>Song Three</h4>
              <p>Artist Name</p>
            </div>
          </div>
        </div>
      </section>
 
    </div>
  );
};

export default Home;
