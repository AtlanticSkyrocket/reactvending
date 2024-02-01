import React from 'react'
import { Link } from "react-router-dom";

function VendingOptions() {
const OPTIONS = ['Chip', 'Drink', 'CandyBar', 'Gum']
  return (
      <div className='VendingOptions'>
        <ul>
          {OPTIONS.map(path => (
            <li key="">
              <Link className="VendingOptions-link" to={`/${path}`}>{path}</Link>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default VendingOptions;