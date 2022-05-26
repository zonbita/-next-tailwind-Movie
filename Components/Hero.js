import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SimpleSlider from './SimpleSlider'

function Hero() {
    return (
        <div className="text-center bg-white pb-10">
        <div className="w-60 mx-auto">
          
        </div>
        <h1 className="text-2xl text-gray-700 uppercase font-bold">Welcome to WatchMe</h1>
        <p className="text-gray-500">Produce FILM feature, TELEVISION and GAME.</p>
        <Link href="/contact" passHref>
          <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">CONTACT US</button>
        </Link>
        <SimpleSlider/>
      </div>
    )
}

export default Hero
