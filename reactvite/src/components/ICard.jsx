import react from 'react'
import pic from './images/guptajiphoto.jpeg'

function ICard(props) {
  return (
    <div style={{border:'2px solid red'}}>

        <h2>College:{props.college}</h2>
        <h2>Roll:{props.roll}</h2>
        <h2>Image:{props.image}</h2>
        <div>
          <img src={props.image} alt="ID Card" style={{width:'100px', height:'100px'}} />
        </div>
        <h2>Name:{props.name}</h2>
        <h2>Branch:{props.branch}</h2>

    </div>
  )
}
export default ICard
