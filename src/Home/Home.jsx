import './Home.css'

import { useEffect } from 'react'
import {obtenerCanciones} from '../../services/token.js'

export function Home(){


    useEffect(function(){},[
        obtenerCanciones().
        then(function(respuestaDelBack){
            console.log(respuestaDelBack)
        })
    ])


    return(

        <>
        
            <section className="banner">

            </section>

        </>

    )
}