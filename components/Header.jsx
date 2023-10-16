import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='p-1 bg-sky-500/100'>
        <div>
                <h1 className='text-2xl font-bold text-center'> AUTOMATAS FINITOS</h1>
        </div>

    <nav>
        <ul className='flex justify-evenly uppercase'>
            <li className='bg-cyan-500 hover:bg-cyan-600 '><Link href='/'>Inicio</Link></li>
            <li className='bg-cyan-500 hover:bg-cyan-600 '><Link href='/ejercicio01'>Ejercicio 01</Link></li>
            <li className='bg-cyan-500 hover:bg-cyan-600 '><Link href='/ejercicio02'>Ejercicio 02</Link> </li>
            <li className='bg-cyan-500 hover:bg-cyan-600 '><Link href='/ejercicio03'>Ejercicio 03</Link> </li>
            <li className='bg-cyan-500 hover:bg-cyan-600 '><Link href='/ejercicio04'>Ejercicio 04</Link> </li>
            <li className='bg-cyan-500 hover:bg-cyan-600 '><Link href='/ejercicio05'>Ejercicio 05</Link> </li>
        </ul>
    </nav>
    </header>
  )
}

export default Header
