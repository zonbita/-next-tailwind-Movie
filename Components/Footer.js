import React from 'react'
const Footer = () => {
    return (
        <footer style={{backgroundImage: `url(/Images/footer-bg.jpg)`}}>
        <div className="relative p-20 md:p-40 pr-2 bg-top bg-cover bg-no-repeat w-full h-full" >
        <div className="text-center h-32 flex items-center justify-center">
            <p className="text-3xl font-bold leading-10 text-white">The Movie - Shows TV <br/>&copy; Copyright 2022 <span className="font-bold">ZONBITA</span></p>
        </div>
        </div>
        </footer>
    )
  }
  

export default Footer
