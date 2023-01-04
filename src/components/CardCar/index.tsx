import './style.css'
import cardImg from '../../assets/car-card.png'

export default function CardCar() {

   return(
      <div className='card mb20 mt25'>
         <div className='card-top'>
            <img src={cardImg} alt="" />
         </div>
         <div className='card-bottom'>
            <h2>Lorem ipsum dolor</h2>
         </div>
      </div>
   );
}