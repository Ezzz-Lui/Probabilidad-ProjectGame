import React from "react";
import { obtenerValorCarta } from "./Baraja";

function Mano({ cartas }){
    const valorMano = cartas.reduce((total, carta) => total + obtenerValorCarta(carta), 0);

    //ajustar el valor de As si el valor supera el 21
    const tieneAs = cartas.some(cara => carta.valor === 'As');
    if (tieneAs & valorMano > 21){
        const nuevoValor = cartas.map(carta => {
            if (carta.valor === 'As'){
                return {...carta, valor: 1};
            }else{
                return carta;
            }
        });
        return nuevoValor.reduce((total, carta) => total + obtenerValorCarta(carta), 0);
    }

    return (
        <div className="flex flex-row gap-4">
          {cartas.map((carta, index) => (
            <div key={index} className="relative w-24 h-32 bg-gray-200 rounded-lg shadow-md">
              <div className="absolute top-0 left-0 p-2 text-sm font-bold">
                {carta.valor}
              </div>
              <div className="absolute bottom-0 right-0 p-2 text-sm font-bold">
                {carta.palo}
              </div>
              <img className="w-full h-full object-cover" src={`./cartas/${carta.valor}_${carta.palo}.png`} alt={carta.valor} />
            </div>
          ))}
        </div>
      );
}

export default Mano;