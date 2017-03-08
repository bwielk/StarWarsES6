import React from 'react'

class Planets extends React.Component{
  constructor(props){
     super(props);
     this.state = {planets: []};
   }

   componentDidMount(){
     this.loadPlanets("http://swapi.co/api/planets/");
   }

   loadPlanets(url){
     const request = new XMLHttpRequest();
     request.open('GET', url);
     request.onload = () => {
       if(request.status !== 200) return;
       const jsonString = request.responseText;
       const data = JSON.parse(jsonString);
       console.log(data);
       this.setState({planets: data})
     }
     request.send();
   }

   render(){
     var planetMap = this.state.planets.map(function(planet, index){
       return (
       <p key = {index} className = "planet-box" >
       <li>{planet.name}</li>
       </p>
       );
     });

     return(
       <div className = "all-planets">
       <p>Planets page</p>
       <ol>
       {planetMap}
       </ol>
       </div>
       )
   }
};

export default Planets;