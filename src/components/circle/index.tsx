import React,{useEffect, useState} from 'react'
import './circle.css'
interface Circle{
    color: string,
    urlImage: string,
    isBattle: Boolean
}

function Circle(props: Circle){
    const [battleFirstCircle, setBattleFirstCircle] = useState("home")
    const [battleSecundaryCircle, setBattleSecundaryCircle] = useState("home")

    useEffect(()=>{
        if(props.isBattle){
            setBattleFirstCircle("battle--circle-first")
            setBattleSecundaryCircle("battle--circle-secundary")
        }
    },[])

    return(
        <div className={`circle--first ${props.color} ${battleFirstCircle}`}>
           <div className={`circle--secundary ${battleSecundaryCircle}`}>
               <img src={props.urlImage} alt="imageAção"/>
           </div>
        </div>
    )
}


export default Circle