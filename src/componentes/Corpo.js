import React from 'react'
import Dados from './Dados'

export default function Corpo(){
    const cnl=()=>{
        return ' Cfb cursos'
    }
    const yt=' youtube.com'
    const crs=' curso de react' 
    const somar=(v1,v2)=>{
        return v1+v2
    }
    return(
        <section>
            <h2> Marcos o melhor do mundo! </h2>
            <p>He's a nice man!</p>
            <p> Ele é BOM</p>
            <Dados
             canal={cnl}
             youtube={yt}
             urso={crs}
             somar={somar}
     />
        </section>
    )
}