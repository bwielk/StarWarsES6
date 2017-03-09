import React, {Component} from 'react'
import Character from '../components/character'

class Characters extends Component {
  constructor(props){
    super(props)
    this.state = {characters: []}
  }

  componentDidMount(){
    const url = 'http://swapi.co/api/people'
    const request = new XMLHttpRequest()
    request.open('GET', url)

    request.onload = () => {
      if(request.status !==200) return
        const data =JSON.parse(request.responseText)
      this.setState({characters: data.results})
    }
    request.send()
  }

  render() {
    const peopleComponents = this.state.characters.map((character) => {
      return <Character character = {character}/>
    })

    return(
      <div>
      {peopleComponents}
      </div>
      )
  }
}

export default Characters;