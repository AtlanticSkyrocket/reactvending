import { Link } from "react-router-dom";

function Gum() {

  return (
    <div className="Option-details">
      <img className="Option-img" src='https://esp.mars.com/sites/g/files/jydpyr391/files/2019-06/Doublemint%20Square%20Small.png' alt="gum"/>
      <div className="Option return">
        <Link to="/">Return to Vending!</Link>
      </div>
    </div>
    
  )
}

export default Gum;