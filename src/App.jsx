import Header from "./Components/Header";
import Sidebar from "./Components/SideBar";
import Home from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Player from "./Components/Player";
// import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import PlayList from "./pages/PlayList";
import Artists from "./pages/Artists";
import ArtistDetail from "./pages/ArtistDetail";

// async function getAllTracks() {
//     //loader.classList.remove("deactive")
//     let postData = {};
//     try {
//         let data = await fetch(
//             "https://love-lyrics-backend.vercel.app/api/v1/tracks/getAllTrack", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(postData),
//             }
//         );
//         let array = await data.json();
//         console.log(array);
//         trackss = array.tracks;
//         array.tracks.forEach((element, index) => {
//             let AllSong = document.createElement("div");
//             AllSong.setAttribute("class", "all-songs");
//             // console.log(element)
//             AllSong.innerHTML = `<div class="song" onclick="playSong(${index})">
//         <div class="song-inner">
//             <div class="song-banner">
//                 <img src="${element.Image}" alt="song banner" width="100%" height="100%">
//             </div>
//             <div class="song-info">
//                 <h4>${element.Name}</h4>
//                 <span>${element.Artists[0]}</span>

//             </div>
//         </div>
//     </div>`;

//         });
//     } catch (error) {
//     //loader.classList.add("deactive")

//         console.log(error);
//     }
//     finally{
//     //loader.classList.add("deactive")

//     }
// }
// getAllTracks();

// import ArtistDetail from "./pages/ArtistDetail";



const App = () => {
  return (

    <div className="app">
      {/* Sidebar Container */}
      <div className="sidebar-container">
        <Sidebar />
      </div>

      {/* Main Content Container */}
      <div className="main-container">
        <Header />
        {/* <Home /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/playlists" element={<PlayList />} />
          <Route path="/artist/:id" element={<ArtistDetail />} />

          {/* <Route path="/liked" element={<LikedSongs />} /> */}
        </Routes>

      </div>

    </div>
  );
};

export default App;
