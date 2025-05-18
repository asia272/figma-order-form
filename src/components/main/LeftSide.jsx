import React from 'react';
import "./LeftSide.css";
import amxImg from "../../assets/amex-color.png";
import discoverImg from "../../assets/discover-color.png";
import masterCartImg from "../../assets/mastercard-color.png";
import paypalImg from "../../assets/paypal-color.png";
import visaImg from "../../assets/visa-color.png";

const LeftSide = () => {
  return (
    <div className='left-side'>
      <div className="step-1 steps">
        <div className="step-heading">
          <p>Step 1</p>
          <span>Contact</span>
        </div>
        <form action="#">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
          <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Phone Number' />
        </form>
      </div>
      <div className="step-2 steps">
        <div className="step-heading">
          <p>Step 2</p>
          <span>billing address</span>
        </div>
        <form action="#">
          <input type="text" placeholder='Complete Address' />
          <input type="text" placeholder='City Name' />
          <input type="text" placeholder='Select Country' />
          <div className="form-group">
            <input type="text" placeholder='State/Province' />
            <input type="text" placeholder='Zip Code' />
          </div>

        </form>
      </div>
      <div className="step-3 steps">
        <div className="step-heading">
          <p>Step 2</p>
          <span>Payment Info</span>
        </div>
        <form action="#">
          <input type="text" placeholder='Credit Card Number' />
          <div className="form-group">
            <input type="text" placeholder='Expiry' />
            <input type="text" placeholder='CVC Code' />
          </div>
          <button>Complete Registration</button>
        </form>
        <div className="form-footer">
          <p>We Respect Your Privacy Information</p>
          <div className="footer-images">
            <img src={paypalImg} alt="footerimg" />
            <img src={visaImg} alt="footerimg" />
            <img src={masterCartImg} alt="footerimg" />
            <img src={amxImg} alt="footerimg" />
            <img src={discoverImg} alt="footerimg" />

          </div>
        </div>


      </div>

    </div>
  )
}

export default LeftSide
