import React from 'react'

export default function Dados(props){
    let n1=10
    let n2=20
    return(
        <section>
            <p>canal:{props.canal()}</p>
            <p>youTube:{props.youtube}</p>
            <p>curso:{props.curso}</p>
            <p>{'A soma de ' + n1 + ' com ' + n2 + ' é igual ' + props.somar(n1,n2)}</p>
        </section>
    )
}