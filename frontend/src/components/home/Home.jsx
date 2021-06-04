import React from 'react'
import Main from '../template/Main'

export default function Home(props){
return(
   
    <Main icon="home" title="React" subtitle="Second project">
        <div className="display-4"> Welcome</div>
        <hr />
        <p className="mb-0">
          System developed for explain the construction of a registry. Developed in react
        </p>
      </Main>
   
)

}