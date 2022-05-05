
import React,{ Component } from 'react'
import Table from './Table'


class App extends Component {
    render() {
      const characters = [
        {
          name:'charlie',
          job:'janitor',
        },
        {
          name:'mac',
          job:'bouncer',
        },
        {
          name:'dee',
          job:'actor',
        },
        {
          name:'den',
          job:'bartender',
        }
      ]
      return (
          <div className='container'>
                <Table characterData = { characters }/>
          </div>
      )
    }
  }
  

  export default App