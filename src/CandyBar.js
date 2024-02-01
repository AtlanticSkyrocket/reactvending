import React from 'react'
import { Link } from "react-router-dom";

function CandyBar() {

  return (
    <div className='Option-details'>
      <img className="Option-img" src='https://can.mars.com/sites/g/files/jydpyr481/files/2019-02/snickers-confectionery%281%29_0.png' alt="candybar"/>
      <div className="Option return">
        <Link to="/">Return to Vending!</Link>
      </div>
    </div>
  )
}

export default CandyBar;