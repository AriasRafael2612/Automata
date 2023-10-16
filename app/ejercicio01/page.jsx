'use client'
import React, {useState} from 'react'


const Ejericio01 = () => {
    const [palabra,setPalabra] = useState('');
    const [resultado, setResultado] = useState('');
    

    const matriz = [
        [1, 200, 200],
        [1, 1, 200]
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

        //Crear patrones para analizar la palabra caracter por caracter
        const isLetter = new RegExp('[a-zA-Z]');
        const isDigit = new RegExp('[0-9]');


        while (i < c.length) {

        if (isLetter.test(c[i])) {
            caracter = 0
        } else if(isDigit.test(c[i])) {
            caracter = 1
        } else {
            caracter = 2
        }
        estado = matriz[estado][caracter]
        if (estado === 200) {
            setResultado('palabra invalida')
            return
        }
        i++
    }
    if(estado === 1){
        setResultado('palabra aceptada')
    }
}

  return (
    <div className = 'max-w-lg mx-auto'>
      <h1 className = 'text-center uppercase'>automata que valida identificadores</h1>
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
        {resultado}
      </div>
    </div>
  )
}

export default Ejericio01

