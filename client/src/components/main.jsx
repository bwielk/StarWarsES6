import React from 'react'
import {Link} from 'react-router'

const Main = ({children}) => (
  <div>
    <h4>STAR WARS CATALOGUE</h4>
    <ul>
      <li><Link to = "/home">HOME</Link></li>
      <li><Link to = "/characters">Characters</Link></li>
      <li><Link to = "/planets">Planets</Link></li>
      <li><Link to = "/starships">Starships</Link></li>
    </ul>
    ({children})
  </div>
  );

export default Main;
