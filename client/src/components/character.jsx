import React from 'react'


const Character = ({character}) => (
  <div>
  <h3>{character.name}</h3>
  </div>
  )


// class Characters extends React.Component{

//   constructor(props){
//     super(props);
//     this.state = {characters: []};
//   }

//   componentDidMount(){
//     this.loadCharacters("http://swapi.co/api/people/");
//   }

//   loadCharacters(url){
//     const request = new XMLHttpRequest();
//     request.open('GET', url);
//     request.onload = () => {
//       if(request.status !== 200) return;
//       const jsonString = request.responseText;
//       const characters = JSON.parse(jsonString);
//       console.log(characters);
//       this.setState({characters: characters})
//     }
//     request.send();
//   }

//   render(){
//     var charMap = this.state.characters.map(function(character, index){
//       return (
//       <p key = {index} className = "character-box" >
//       <li>
//       <p>{character.name}</p>
//       <p>{character.height}</p>
//       </li>
//       </p>
//       );
//     });

//     return(
//       <div className = "all-characters">
//       <p>Characters page</p>
//       <ol>
//       {charMap}
//       </ol>
//       </div>
//       )
//   }
// };

export default Character;