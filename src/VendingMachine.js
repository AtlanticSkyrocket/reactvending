import React from 'react'
import VendingOptions from './VendingOptions';
import './VendingMachine.css';

function VendingMachine() {

  return (
       <div className="VendingMachine-container">
        <div className='VendingMachine-welcome'>
          <p>Welcome! Select your poison.</p>
        </div>
        <div></div>
        <VendingOptions />
    </div>
  )
}

export default VendingMachine;