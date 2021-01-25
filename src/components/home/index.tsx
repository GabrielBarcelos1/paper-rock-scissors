import React, { useContext}from 'react';
import {Link} from 'react-router-dom'
import  './app.css'
import Results from '../results/index'
import Circle from '../circle/index'
import Rules from '../rules/index'
import triangle from '../../images/bg-triangle.svg'
import paper from '../../images/icon-paper.svg'
import scissors from '../../images/icon-scissors.svg'
import rock from '../../images/icon-rock.svg'
import { DadosContext } from '../context/index' 




function Home(){
    const context = useContext(DadosContext)

    function paperFunction(){
      context.setDados({choose: 'paper', color: 'blue', points: context.dados.points})
  
    }
    function rockFunction(){
      context.setDados({choose: 'rock', color:'red', points: context.dados.points})
    }
    function scissorsFunction(){
      context.setDados({choose: 'scissors', color: 'yellow', points: context.dados.points})
    }
  
  
    return (
      <div className="app-rules">
      <div className="app ">
        <Results/>
        <div className="app-triangle">
            <img src={triangle} alt="triangulo"/>
        </div>
        <div className="app--circles" >
           <Link to="/battle">
           
              <div onClick={paperFunction}>
                <Circle 
                color="blue"
                urlImage={paper}
                isBattle={false}
                />
                </div>
                
            </Link>
            <Link to="/battle">
                <div onClick={scissorsFunction}>
                <Circle
                color="yellow"
                urlImage={scissors}
                isBattle={false}
                />
                </div>
            </Link>
            </div>
        <div className="app--last-circle">
            <Link to="/battle">
            <div onClick={rockFunction}>
                <Circle
                color="red"
                urlImage={rock}
                isBattle={false}
                />
                </div>
            </Link>
           </div>
      </div>
      <Rules/>
      </div>
      
    );
}


export default Home