import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/home/index'
import Battle from './components/battle/index'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/battle" component={Battle}/>
            </Switch>
        </BrowserRouter>

    )
}

export default Routes