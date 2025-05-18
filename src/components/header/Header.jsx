import React from 'react';
import "./Header.css";
import topRightImg from "../../assets/topRight.png";
import topLeftImg from "../../assets/topLeft.png";
import leaveImg from "../../assets/leave.png";

const Header = () => {
    return (
        <header>
            <img src={topRightImg} alt="topRightImg" className='top-right-img' />
            <img src={topLeftImg} alt="topleftImg" className='top-left-img' />
            <img src={leaveImg} alt="LeaveImg" className='leaveImg' />
            <nav>
                <p>Paircraft</p>
            </nav>
            <div className="header-content">
                <p>Limited Entries Available</p>
                <h2>Register Below While Spots Remain</h2>
                <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
        </header>
    )
}

export default Header
