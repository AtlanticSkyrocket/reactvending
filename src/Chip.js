import { Link } from "react-router-dom";

function Chip() {

  return (
    <div className="Option-details">
      <img className="Option-img" src='https://www.lays.com/sites/lays.com/files/2021-07/XL%20LKC%20Sea%20Salt%20Vinegar.png' alt="chips"/>
      <div className="Option return">
        <Link to="/">Return to Vending!</Link>
      </div>
    </div>
    
  )
}

export default Chip;