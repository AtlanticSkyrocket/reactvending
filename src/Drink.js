
import { Link } from "react-router-dom";

function Drink() {

  return (
    <div className="Option-details">
      <img className="Option-img" src='https://www.coca-cola.com/content/dam/onexp/us/en/brands/sprite/Sprite-Desktop-LemonLime-750x750.jpg/width1960.jpg' alt="soda" />
      <div className="Option return">
        <Link to="/">Return to Vending!</Link>
      </div>
    </div>   
  )
}

export default Drink;