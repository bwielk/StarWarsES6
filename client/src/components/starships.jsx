import React from 'react'

class Starships extends React.Component{

  constructor(props){
     super(props);
     this.state = {starships: []};
   }

   componentDidMount(){
     this.loadStarships("http://swapi.co/api/starships/");
   }

   loadStarships(url){
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
       <li>
       <h5>{starship.name}</h5>
       <p>{starship.passengers}</p>
       </li>
       </p>
       );
     });

     return(
       <div className = "all-starships">
       <p>Starships page</p>
       <ol>
       {shipMap}
       </ol>
       </div>
       )
   }
};

export default Starships;