import React from 'react'

class Starships extends React.Component{

  constructor(props){
     super(props);
     this.state = {starships: []};
   }

   componentDidMount(){
     this.loadStarships("http://swapi.co/api/starships/");
   }

   loadCharacters(url){
     const request = new XMLHttpRequest();
     request.open('GET', url);
     request.onload = () => {
       if(request.status !== 200) return;
       const jsonString = request.responseText;
       const data = JSON.parse(jsonString);
       console.log(data);
       this.setState({starships: data})
     }
     request.send();
   }

   render(){
     var shipMap = this.state.starships.map(function(starship, index){
       return (
       <p key = {index} className = "starship-box" >
       <li>{starship.name}</li>
       </p>
       );
     });

     return(
       <div className = "all-starships">
       <p>Characters page</p>
       <ol>
       {shipMap}
       </ol>
       </div>
       )
   }
};

export default Starships;