import React, {useState}from 'react'
import './rules.css'
import close from '../../images/icon-close.svg'
import rules from '../../images/image-rules.svg'

function Rules(){
    const [display, setDisplay] = useState("hidden")
    const changeDisplay = ()=>{
        if(display === ""){
            setDisplay("hidden")
        }else{
            setDisplay("")
        }
    }
    return(
        <div className="rules--majorBox">
            <div className="rules--box" onClick={changeDisplay}>
                <p>RULES</p>
            </div>
            <div className={`rules--alert ${display}`}>
                <div className="rules--alert--top">
                    <p>RULES</p>
                    <img src={close} alt="close" onClick={changeDisplay}/>
                </div>
                <div className="rules--real-rules">
                    <img src={rules} alt="regras"></img>
                </div>
            </div>
            <div className={`teste ${display}`}>

            </div>
           
        </div>
    )

}

export default Rules