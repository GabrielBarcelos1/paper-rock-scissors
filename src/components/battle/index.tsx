import React, {useEffect , useState , useContext} from 'react'
import {Link} from 'react-router-dom'
import Results from '../results/index'
import Circle from '../circle/index'
import paper from '../../images/icon-paper.svg'
import scissors from '../../images/icon-scissors.svg'
import './battle.css'
import rock from '../../images/icon-rock.svg'
import Rules from '../rules/index'
import { DadosContext } from '../context/index' 




function Battle(){
    const context = useContext(DadosContext)
    const [colorIo,setColorIo] = useState('')
    const [urlImagePlayer,setUrlImagePlayer] = useState('')
    const [urlImageIo,SetUrlImageIo] = useState('')
    const [loadImageIo,setLoadImageIo] = useState(false)
    const [loadResultText,setLoadResultText] = useState(false)
    const [resultText, setResultText] = useState("")
    
    function appearIo(){
        setLoadImageIo(true)
    }
    function appearTextResult(){
        setLoadResultText(true)
    }

    useEffect(()=>{
        let randomNumber = Math.floor( Math.random() * 3 + 1 );
        let choosePLayer = ''
        let chooseIo = ''
            switch(randomNumber){
                case 1: setColorIo("yellow")
                        SetUrlImageIo(scissors)
                        chooseIo = 'scissors'
                break
                case 2: setColorIo("blue")
                        SetUrlImageIo(paper)
                        chooseIo = 'paper'
                break
                case 3: setColorIo("red")
                        SetUrlImageIo(rock)
                        chooseIo = 'rock'
                break
            }

            if(context.dados.choose === 'paper'){
                setUrlImagePlayer(paper)
                choosePLayer = 'paper'
            }else if(context.dados.choose === 'rock'){
                setUrlImagePlayer(rock)
                choosePLayer = 'rock'
            }else if(context.dados.choose === 'scissors'){
                setUrlImagePlayer(scissors)
                choosePLayer = 'scissors'
            }
        
            if(choosePLayer === chooseIo){
                console.log('empate')
                setResultText("A TIE")
                context.setDados({choose: context.dados.choose, color: context.dados.color, points: context.dados.points <= 0 ?context.dados.points = 0  : context.dados.points - 1})               
            }else if(choosePLayer === 'paper' && chooseIo === 'scissors'){

                setResultText("YOU LOSE")
            }else if(choosePLayer === 'paper' && chooseIo === 'rock'){
                setResultText("YOU WIN")
                context.setDados({choose: context.dados.choose, color: context.dados.color, points: context.dados.points + 1})
            }else if(choosePLayer === 'scissors' && chooseIo === 'rock'){
                setResultText("YOU LOSE")
                context.setDados({choose: context.dados.choose, color: context.dados.color, points: context.dados.points <= 0 ?context.dados.points = 0  : context.dados.points - 1})
            }else if(choosePLayer === 'scissors' && chooseIo === 'paper'){
                setResultText("YOU WIN")
                context.setDados({choose: context.dados.choose, color: context.dados.color, points: context.dados.points + 1})
            }else if(choosePLayer === 'rock' && chooseIo === 'paper'){
                setResultText("YOU LOSE")
                context.setDados({choose: context.dados.choose, color: context.dados.color, points: context.dados.points <= 0 ?context.dados.points = 0  : context.dados.points - 1})
            }else if(choosePLayer === 'rock' && chooseIo === 'scissors'){
                setResultText("YOU WIN")
                context.setDados({choose: context.dados.choose, color: context.dados.color, points: context.dados.points + 1})
            }
            setInterval(appearIo,500)
            setInterval(appearTextResult,1200)
            

    },[])
  
    return(
    
        <div>
            <Results/>
            <div className="battle-box">
                <div className="battle--yourChoose">
                    <p className="battle--playerChosse-p">YOU PICKED</p>
                    <div className="battle-circle">
                        <Circle
                            color={context.dados.color}
                            urlImage={urlImagePlayer}
                            isBattle={true}
                        />
                    </div>
                    <p className="battle--playerChosse-p-minor">YOU PICKED</p>
                </div>
                {loadResultText?<div className="battle--play-again-box">
                    <p className="battle--results-text">{resultText}</p>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                    <div>
                        <p className="text">PLAY AGAIN</p>
                        </div>
                    </Link>
                </div>: ''}
                <div className="battle--ioChosse">
                    <p className="battle--ioChosse-p">THE HOUSE PICKED</p>
                    
                    <div className="battle-circle">
                      {loadImageIo ?<Circle 
                        color={colorIo}
                        urlImage={urlImageIo}
                        isBattle={true}
                        /> : <div className="battle--circle-thriller"></div>}
                </div>
                    <p className="battle--ioChosse-p-minor">THE HOUSE PICKED</p>
                </div>
            </div>
            {loadResultText?<div className="battle--play-again-box--minor">
                    <p className="battle--results-text">{resultText}</p>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                    <div>
                        <p className="text">PLAY AGAIN</p>
                        </div>
                    </Link>
                </div>: ''}
            <Rules/>
            
        </div>
    )
}


export default Battle