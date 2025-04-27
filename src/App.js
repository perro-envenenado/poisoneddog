import React, { useState } from "react";
import './App.css';
import imgPerfil from './Assets/Image/Perfil.png';
import VisitCounter from './VisitCounter';  // Importamos el componente VisitCounter

const albums = [
  {
    title: "4nxi3ty",
    video: require('./Assets/Video/4nxi3ty.mp4'),
    playerEmbed: "https://bandcamp.com/EmbeddedPlayer/album=1379979528/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
  },
  {
    title: "Cat eyes",
    video: require('./Assets/Video/cat.mp4'),
    playerEmbed: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/poisoned-dog/cat-eyes&color=%2333ccff"
  }
];

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]); // Por defecto se muestra el primero

  return (
    <div className="App">
      <div className="container">
        {/* Cabecera con franja negra */}
        <header className="header">
          <img
            src={imgPerfil}
            alt="Poisoneddog logo"
            className="perfil-image"
          />
          <h1 className="gothic-text">PoisoneDDog</h1>
          <p>Welcome to my music page! I'm glad you're here.</p>
        </header>

        {/* Aquí usamos el componente VisitCounter */}
        <VisitCounter />  {/* Mostrará el contador de visitas */}

        {/* Álbumes como tarjetas con video */}
        <section className="albums">
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            {albums.map((album, index) => (
              <div
                key={index}
                className="album-card"
                onClick={() => setSelectedAlbum(album)}
              >
                <video
                  src={album.video}
                  style={{ width: "100%", borderRadius: "10px" }}
                  muted
                  autoPlay
                  loop
                  playsInline
                />
                <h3 style={{ marginTop: "0.5rem" }}>{album.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Reproductor embebido */}
        <section className="player-section" style={{ marginTop: "2rem" }}>
          <h2>Now Playing: {selectedAlbum.title}</h2>
          <iframe
            title={selectedAlbum.title}
            style={{ border: 0, width: "100%", maxWidth: "600px", height: "166px" }}
            src={selectedAlbum.playerEmbed}
            seamless
          ></iframe>
        </section>

        {/* Links de plataformas */}
        <section className="social-links">
  <h2>Follow Me</h2>
  <ul>
    <li>
      <a href="https://open.spotify.com/intl-es/artist/5WNKkwHpAyRN1hHYwPJ3Gd" target="_blank" rel="noopener noreferrer">
        <div className="tooltip-container">
          <i className="fab fa-spotify"></i>
          <span className="tooltip" data-platform="Spotify">Spotify</span>
        </div>
      </a>
    </li>
    <li>
      <a href="https://music.youtube.com/channel/UCgvgWwpLQlspUee_K9WbKfw" target="_blank" rel="noopener noreferrer">
        <div className="tooltip-container">
          <i className="fab fa-youtube"></i>
          <span className="tooltip" data-platform="YouTube Music">YouTube Music</span>
        </div>
      </a>
    </li>
    <li>
      <a href="https://soundcloud.com/poisoned-dog" target="_blank" rel="noopener noreferrer">
        <div className="tooltip-container">
          <i className="fab fa-soundcloud"></i>
          <span className="tooltip" data-platform="SoundCloud">SoundCloud</span>
        </div>
      </a>
    </li>
    <li>
      <a href="https://poisoneddogwav.bandcamp.com" target="_blank" rel="noopener noreferrer">
        <div className="tooltip-container">
          <i className="fab fa-bandcamp"></i>
          <span className="tooltip" data-platform="Bandcamp">Bandcamp</span>
        </div>
      </a>
    </li>
  </ul>
</section>

      </div>

      {/* Redes sociales flotantes */}
      <div className="floating-social-links">
        <a
          href="https://open.spotify.com/intl-es/artist/5WNKkwHpAyRN1hHYwPJ3Gd"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-spotify"></i>
          <span className="platform-name">Spotify</span>
        </a>
        <a
          href="https://music.youtube.com/channel/UCgvgWwpLQlspUee_K9WbKfw"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-youtube"></i>
          <span className="platform-name">YouTube</span>
        </a>
        <a
          href="https://soundcloud.com/poisoned-dog"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-soundcloud"></i>
          <span className="platform-name">SoundCloud</span>
        </a>
        <a
          href="https://poisoneddogwav.bandcamp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-bandcamp"></i>
          <span className="platform-name">Bandcamp</span>
        </a>
      </div>
    </div>
  );
}

export default App;
