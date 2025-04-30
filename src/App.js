import React, { useState, useEffect } from "react";
import './App.css';
import imgPerfil from './Assets/Image/Perfil.png';
import VisitCounter from './VisitCounter';

const albums = [
  {
    title: "4nxi3ty",
    video: require('./Assets/Video/4nxi3ty.mp4'),
    playerEmbed: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/poisoned-dog/sex-free-9&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    color: "#ff5500"
  },
  {
    title: "Cat eyes",
    video: require('./Assets/Video/cat.mp4'),
    playerEmbed: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/poisoned-dog/cat-eyes&color=%23ff5500",
    color: "#00f3ff"
  }
,
  {
    title: "Anxiety",
    video: require('./Assets/Video/4nxi3ty.mp4'), // Asegúrate de tener este archivo
    playerEmbed: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/poisoned-dog/anxiety-1&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    color: "#ff00aa", 
    type: "soundcloud"
  }
];

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);
  const [glitchEffect, setGlitchEffect] = useState(false);

  useEffect(() => {
    // Efecto glitch aleatorio
    const interval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 300);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`App ${glitchEffect ? 'glitch-effect' : ''}`}>
      <div className="cyberpunk-container">
        {/* Header con efecto neón */}
        <header className="cyber-header">
          <div className="glitch-wrapper">
            <div className="glitch" data-text="POISONED DOG">POISONED DOG</div>
          </div>
          <p className="subtitle">CYBERPUNK MUSIC PROJECT</p>
        </header>

        <VisitCounter />

        {/* Álbumes con efecto hover */}
        <section className="albums-grid">
          {albums.map((album, index) => (
            <div 
              key={index}
              className={`album-card ${selectedAlbum.title === album.title ? 'active' : ''}`}
              onClick={() => setSelectedAlbum(album)}
              style={{ '--accent-color': album.color }}
            >
              <div className="album-overlay">
                <span>{album.title}</span>
              </div>
              <video
                src={album.video}
                muted
                autoPlay
                loop
                playsInline
              />
            </div>
          ))}
        </section>

        {/* Reproductor con estilo neón */}
        <section className="player-section">
          <h2 className="neon-text">NOW PLAYING: <span>{selectedAlbum.title}</span></h2>
          <div className="player-container">
            <iframe
              title={selectedAlbum.title}
              src={selectedAlbum.playerEmbed}
              style={{ border: `1px solid ${selectedAlbum.color}` }}
            ></iframe>
          </div>
        </section>

        {/* Links de plataformas con efecto */}
        <div className="platforms-grid">
          <a href="https://open.spotify.com/intl-es/artist/5WNKkwHpAyRN1hHYwPJ3Gd" 
             target="_blank" 
             rel="noopener noreferrer"
             className="platform-card spotify">
            <i className="fab fa-spotify"></i>
            <span>Spotify</span>
          </a>
          <a href="https://music.youtube.com/channel/UCgvgWwpLQlspUee_K9WbKfw" 
             target="_blank" 
             rel="noopener noreferrer"
             className="platform-card youtube">
            <i className="fab fa-youtube"></i>
            <span>YouTube Music</span>
          </a>
          <a href="https://soundcloud.com/poisoned-dog" 
             target="_blank" 
             rel="noopener noreferrer"
             className="platform-card soundcloud">
            <i className="fab fa-soundcloud"></i>
            <span>SoundCloud</span>
          </a>
          <a href="https://poisoneddogwav.bandcamp.com" 
             target="_blank" 
             rel="noopener noreferrer"
             className="platform-card bandcamp">
            <i className="fab fa-bandcamp"></i>
            <span>Bandcamp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;