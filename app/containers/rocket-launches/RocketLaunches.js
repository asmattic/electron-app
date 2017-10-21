import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class RocketLaunches extends Component {
   name = 'RocketLaunches'
   state = {
      rockets: [],
      error: ''
   }

   componentDidMount() {
      axios.get('https://launchlibrary.net/1.2/rocket/falcon')
         .then(({data}) => {
            console.log('Rocket data ', data)
            this.setState({rockets: data.rockets},
               () => { console.log('rocket state ', this.state)}
            )
         })
         .catch(err => {
            console.log(`${this.name}`, err)
            this.setState({error: err})
         })
   }

   render() {
      const { error, rockets } = this.state
      return (
         <div id="rocket-launches">
            <Link to='/'>HOME</Link>
            Rocket Launches
            <span style={{color: 'red'}}>{error}</span>
            {!(rockets.length > 0) ? null :
               rockets.map(r => (
                  <div className='rocket' key={r.id}>
                     <ul>
                        <li><a href={r.infoURL} ><img src={r.imageURL} /></a></li>
                        <li>{r.configuration}</li>
                        <li>{r.defaultPads}</li>
                        <li><a href={r.wikiURL} >{r.name}</a></li>
                     </ul>
                  </div>
               ))
            }
         </div>
      )
   }
}

export default RocketLaunches;
