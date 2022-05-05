
import React,{ Component } from 'react'
import Table from './Table'




class App extends Component {
    state = {
      characters: [
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
    }

    removeCharacter = index => {
      const {characters} = this.state
    
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index
        })
      });
    }

    render() {
      const { characters } = this.state

      return (
          <div className='container'>
                <Table characterData = { characters } removeCharacter = {this.removeCharacter}/>
          </div>
      )
    }
  }

 
  

  export default App