import React, { useState } from 'react';
import { crearBaraja, barajar, repartirCarta, obtenerValorCarta } from './Baraja';
import Mano from './Mano';
import Botones from './BotonAccion';
import Estadisticas from './Stats';

function App() {
  const [baraja, setBaraja] = useState(crearBaraja());
  const [manoJugador, setManoJugador] = useState([]);
  // ... otros estados

  const repartirCartas = () => {
    const nuevaCarta = repartirCarta(barajar);
    setManoJugador([...manoJugador, nuevaCarta]);
    setBaraja[(barajar)];

    const valorMano = manoJugador.reduce((total, carta) => total + obtenerValorCarta(carta), 0);
    console.log('Valor de la mano:', valorMano);
  };

  return (
    <div>
      <crearBaraja baraja={barajar} />
      <Mano cartas={manoJugador} />
      <Botones />
      <Estadisticas />
    </div>
  );
}

export default App;