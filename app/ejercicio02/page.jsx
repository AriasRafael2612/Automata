'use client'
import React, {useState} from 'react'

const ejercicio02 = () => {
    const [palabra,setPalabra] = useState('');
    const [resultado, setResultado] = useState('');

    const matriz = [
      [1, 200, 200],
      [1, 1, 200],
    ]
const analizar = () => {

  //La palabra que pone el usuario en arreglo
  const c = palabra.split('');
  //La variable que controla el ciclo para la iteracion
  let i = 0;
  //variable estado que funcionara como estado inicial
  let estado = 0;
  //creamos la variable caracter
  let caracter = 0;

  //variable para acceder a la etiqueta HTML resultado
  const resultado = document.querySelector('#resultado');

  //Obtener el ultimo elemento de la palabra ingresada
  const ultimoElemento = c[c.length - 1];

  //Obtener el primer elemento de la palabra ingresada
  const primerElemento = c[0];

  //Expresiones regulares
  const isA = new RegExp('[aA]');
  const isB = new RegExp('[bB]');

  //si el primer elemento es diferente al ultimo, da error pero de lo contrario avanzara con el codigo
  if(primerElemento !== ultimoElemento){
    setResultado('Cadena invalida');
    resultado.className = 'mt-5 bg-red-500 text-center font-bold text-white uppercase rounded';
    return;
  };
  
  while(i < c.length){
    if(isA.test(c[i]) || isB.test(c[i])){
      caracter = 0;
    }else if(isB.test(c[i])){
      caracter = 1;
    }else{
      caracter = 2;
      setResultado('Cadena invalida')
      resultado.className = 'mt-5 bg-red-500 text-center font-bold text-white uppercase rounded';
    }

    estado = matriz[estado][caracter]
    if (estado === 200) {
      setResultado('Cadena invalida')
      resultado.className = 'mt-5 bg-red-500 text-center font-bold text-white uppercase rounded';
      return
    }
    i++
  }
  if(estado === 1){
    setResultado('Cadena aceptada');
    resultado.className = 'mt-5 bg-green-500 text-center font-bold text-white uppercase rounded';
  }else{
    setResultado('Cadena invalida');
    resultado.className = 'mt-5 bg-red-500 text-center font-bold text-white uppercase rounded';
  }
}
const limpiar = () => {

  setPalabra('');
  setResultado('');
}
  return (
    <div className = 'max-w-lg mx-auto mt-5'>
      <h1 className = 'text-center uppercase'></h1>
      <div className = 'mt-5'>
        <input 
        className = 'w-full p-2 rounded'
        value = {palabra} onChange = {e => setPalabra(e.target.value)} id = 'variable' type="text" placeholder = 'Coloca la entrada'/>
      </div>
      <div>
        <button 
        className = 'mt-5 w-full bg-teal-400 p-3 uppercase font-bold cursor-pointer rounded hover:bg-teal-600'
        id = 'analizar' onClick={analizar}>analizar la entrada</button>
      </div>
      <div>
          <button onClick={limpiar} className= 'mt-5 w-full bg-teal-400 p-3 uppercase font-bold cursor-pointer rounded hover:bg-teal-600'>
                    Limpiar
          </button>
      </div>
      <div id = "resultado">
        {resultado}
      </div>
    </div>
  )
}

export default ejercicio02