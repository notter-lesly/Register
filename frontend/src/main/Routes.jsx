import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import User from '../components/user/User'

export default function Routes(){
    return(
<Switch>
<Route exact path="/" component={Home}/>
<Route path='/users' component={User}/>
<Redirect from='*' to ='/'/>

</Switch>
    )
}