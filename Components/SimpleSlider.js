import React from 'react'
import Image from 'next/image'
import styles from "../styles/Home.module.css";
import { useState } from "react";
function SimpleSlider() {

  const [index, setIndex] = useState(0);
  const Images = [
    "/lostcity.jpg",
    "/asd.webp",
    "/lostcity2.jpg",
  ]

  const handleArrow = (direction) =>{
    if(direction==="l"){
        setIndex(index !== 0 ? index-1 : 2)
    }
    if(direction==="r"){
        setIndex(index !== 2 ? index+1 : 0)
    }
}
  return (
    <section id='Slider'>
    <div className='pb-10 h-[80vh]'>
    <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
      <img src='/Images/arrowl.png'  height={50} width={50}/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {Images.map((m, i) => (
          <div key={i}>
            <Image  className='object-contain' src={m} layout="fill" alt='' />
          </div>
        ))}
       
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
      <img src='/Images/arrowr.png' height={50} width={50} onClick={()=>handleArrow('r')}/>
      </div>
    </div>
    </section>
  )
}

export default SimpleSlider
