import React from 'react'
import Daters from './Hello.js'

function Nav(props) {
    return (
      <nav>
        <h1>Nav</h1>
        <Daters 
          daters={this.state.daters.splice(0,3)}
        />
      </nav>
    )
}

export default Nav