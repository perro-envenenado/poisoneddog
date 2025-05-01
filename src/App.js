import React, { useState, useEffect } from "react";
import './App.css';
import imgPerfil from './Assets/Image/Perfil.png';

const albums = [
  {
    title: "Free sex",
    video: require('./Assets/Video/4nxi3ty.mp4'),
    playerEmbed: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/poisoned-dog/sex-free-9&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    color: "#ff5500"
  },
  {
    title: "Cat eyes",
    video: require('./Assets/Video/cat.mp4'),
    playerEmbed: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/poisoned-dog/cat-eyes&color=%23ff5500",
    color: "#00f3ff"
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
    video: require('./Assets/Video/4nxi3ty.mp4'),
    playerEmbed: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/poisoned-dog/anxiety-1&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    color: "#ff00aa", 
    type: "soundcloud"
  }
];

const VisitCounter = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Verifica si ya se ejecutó en esta sesión
    const hasCounted = sessionStorage.getItem('hasCounted');
    
    if (!hasCounted) {
      const storedVisits = localStorage.getItem('visits') || 0;
      const newVisits = parseInt(storedVisits) + 1;
      
      localStorage.setItem('visits', newVisits);
      sessionStorage.setItem('hasCounted', 'true'); // Marca como contado
      setVisits(newVisits);
    } else {
      setVisits(localStorage.getItem('visits') || 0);
    }
  }, []);

  return (
    <div className="minimal-counter">
      <div className="cyber-eye">
        <i className="fas fa-eye"></i>
        <div className="pupil"></div>
      </div>
      <span className="visit-number">{visits}</span>
    </div>
  );
};

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);
  const [glitchEffect, setGlitchEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 300);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`App ${glitchEffect ? 'glitch-effect' : ''}`}>
      <div className="cyberpunk-container">
        <header className="cyber-header">
          <div className="glitch-wrapper">
            <div className="glitch" data-text="POISONED DOG">POISONED DOG</div>
          </div>
          <p className="subtitle">CYBERPUNK MUSIC PROJECT</p>
        </header>

        <VisitCounter />

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