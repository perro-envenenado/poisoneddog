import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Revisa si ya se ha contado una vista
    const lastVisitTime = localStorage.getItem('lastVisitTime');
    const currentTime = Date.now();

    // Si no hay visita anterior o ha pasado más de una hora desde la última vez
    if (!lastVisitTime || currentTime - lastVisitTime > 3600000) {
      // Si han pasado más de 60 minutos (3600000 ms), cuenta una nueva vista
      let currentViews = localStorage.getItem('views') || 0;
      currentViews = parseInt(currentViews) + 1; // Aumenta el contador de vistas

      // Guarda la nueva vista y la hora
      localStorage.setItem('views', currentViews);
      localStorage.setItem('lastVisitTime', currentTime);

      setViews(currentViews);
    } else {
      // Si no han pasado 60 minutos, no contamos la vista
      setViews(localStorage.getItem('views') || 0);
    }
  }, []);

  return (
    <div className="App">
      <h1>Poisoneddog</h1>
      <p>Welcome to my music page! Current Views: {views}</p>
    </div>
  );
}

export default App;