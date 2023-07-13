import React from 'react'
import { useNavigate } from 'react-router-dom';

const Checkout4 = () => {
    const nav = useNavigate();
    const handlebutton = () => {
        localStorage.clear();
        nav("/");
    };
    return (
        <div>
            <h3 style={{ justifyContent: 'center', marginLeft: "49%", marginTop: "60px" }}>Thank You</h3>
            <button style={{ marginLeft: "50%" }} type="button" onClick={handlebutton} className="btn btn-primary">Start Over</button>
        </div>
    )
}

export default Checkout4
