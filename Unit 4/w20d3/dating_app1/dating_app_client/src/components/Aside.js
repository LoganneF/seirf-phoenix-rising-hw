  
import React from 'react'
import Daters from './Hello.js'

function Aside(props) {
    return (
      <aside>
        <h1>Aside</h1>
        <Daters 
          daters={this.state.daters.splice(0,3)}
        />
      </aside>
    )
}

export default Aside