// components/Baraja.jsx

const crearBaraja = () => {
    const palos = ['corazones', 'diamantes', 'tréboles', 'picas'];
    const valores = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  
    const baraja = [];
    palos.forEach(palo => {
      valores.forEach(valor => {
        baraja.push({ palo, valor });
      });
    });
  
    return baraja;
  };
  
  const barajar = (baraja) => {
    // Algoritmo de Fisher-Yates para barajar la baraja
    for (let i = baraja.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
    }
    return baraja;
  };
  
  const repartirCarta = (baraja) => {
    return baraja.shift();
  };
  
  // Función para obtener el valor numérico de una carta
  const obtenerValorCarta = (carta) => {
    if (['J', 'Q', 'K'].includes(carta.valor)) {
      return 10;
    } else if (carta.valor === 'As') {
      return 11; // Por defecto, el As vale 11. Su valor puede ajustarse más adelante si se pasa de 21.
    } else {
      return parseInt(carta.valor);
    }
  };
  
  export { crearBaraja, barajar, repartirCarta, obtenerValorCarta };