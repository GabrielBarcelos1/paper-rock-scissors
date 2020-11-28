import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './results.css'
import logo from '../../images/logo.svg'
import { DadosContext } from '../context/index' 




   

function Results(){
    const context = useContext(DadosContext)
    return(
        <div className="results--majorBox">
            <div className="results--box ">
                <Link to='/'>
                    <img src={logo} alt="titulo"/>
                </Link>
                <div className="results--stats-results">
                    <p className="results--stats-resuls--score">SCORE</p>
                    <p className="results--stats-resuls--result">{context.dados.points}</p>
                </div>
            </div>
        </div>
    )
}

export default Results