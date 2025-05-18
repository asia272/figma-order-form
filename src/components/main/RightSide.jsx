import React from 'react';
import "./RightSide.css"
import checkIcon from "../../assets/check.png";
import guaranteeImg from "../../assets/guarantee.png";
import secureImg from "../../assets/secure.png";
import screenImg from "../../assets/secreen.png";

const RightSide = () => {
  return (
    <div className='right-side'>
      <div className="img-box">
        <img src={screenImg} alt="secreenImg" />
        <p>The Ultimate Beverage <br /> <span>Pairing Challenge</span></p>
      </div>
      <section className="section-1">
        <h3> What Winners Receive</h3>
        <div>
          <div>
            <span><img src={checkIcon} alt="checkIcon" /></span>
            <p>
              International media coverage
            </p>
          </div>
          <div>
            <span><img src={checkIcon} alt="checkIcon" /></span>
            <p>
              Professional profile feature
            </p>
          </div>
          <div>
            <span><img src={checkIcon} alt="checkIcon" /></span>
            <p>
              Exclusive industry events access
            </p>

          </div>
          <div>
            <span><img src={checkIcon} alt="checkIcon" /></span>
            <p>
              Network with culinary legends
            </p>


          </div>
          <div>
            <span><img src={checkIcon} alt="checkIcon" /></span>
            <p>
              Scientific validation of your expertise
            </p>
          </div>
          <div>
            <span><img src={checkIcon} alt="checkIcon" /></span>
            <p>
              Platform to showcase your mastery
            </p>
          </div>
          <div>
            <span><img src={checkIcon} alt="checkIcon" /></span>
            <p>
              Recognition in leading industry publications
            </p>
          </div>
        </div>
      </section>
      {/* two */}
      <section className="section-2">
        <h3>But Even If You Don't Win...</h3>
        <p>Every entrant receives</p>
        <div>
          <div>
            <span><img src={checkIcon} alt="checkIcon" /></span>
            <p>
              Detailed feedback from our expert panel
            </p>

          </div>
          <div>
            <span><img src={checkIcon} alt="checkIcon" /></span>
            <p>

              Access to our proprietary testing protocols
            </p>
          </div>
          <div>
            <span><img src={checkIcon} alt="checkIcon" /></span>
            <p>

              Insights into the science of Paired Elevation
            </p>
          </div>
          <div>
            <span><img src={checkIcon} alt="checkIcon" /></span>
            <p>
              Network connections with fellow innovators
            </p>
          </div>
          <div>
            <span><img src={checkIcon} alt="checkIcon" /></span>
            <p>
              Professional development certification
            </p>
          </div>
        </div>
      </section>
      <p className='old-rate'>Normally: <span>$XX.00</span></p>
      <p className='new-rate'>now only <span>$xx.00</span> </p>
      {/* guarantee section */}
      <div className="guarantee">
        <img src={guaranteeImg} alt="img" />
        <div className="guarantee-content">
          <h4>100% Satisfaction Guarantee</h4>
          <p>
            If you're not totally happy with any of our products you can return them for a full, no-questions-asked refund. This is valid for a full 120 days from the date of your order.
          </p>
        </div>
      </div>
      {/* secure section */}
      <div className="guarantee">
        <img src={secureImg} alt="img" />
        <div className="guarantee-content">
          <h4>Secure Checkout</h4>
          <p>
            We partner with the leading online payment processors to secure our checkout. Your information will never be shared with anyone
          </p>
        </div>
      </div>
    </div>
  )
}

export default RightSide
