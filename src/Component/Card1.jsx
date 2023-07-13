import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Card1 = () => {

    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/RoadRunner/get`)
            .then((data) => data.json())
            .then((data) => { setCard(data) })
            .catch((e) => console.log(e))
    }, [])


    return (
        <>
            {card.map((h) => (
                <div class="card" style={{
                    //  width: '18rem' ,
                    display: 'flex', flexDirection: 'row'
                }}>
                    <img src={h.imageLink} width="500px"
                    // class="card-img-top"
                    />

                    <div class="card-body" style={{ display: "flex", flexDirection: "row" , marginTop:'100px'}}>
                        <Link to={`/Details2/${h.id}`}><h5 class="card-title">Car Name: {h.nameOfCar}</h5></Link>
                        <p
                        // class="card-text"
                        >
                            <strong>Short Description: </strong>
                            {h.shortDescription}</p>
                        <p><strong>Rental Price: </strong>{h.rentalFee}</p>
                        <Link to={`/Form3/${h.id}`}><button style={{padding:'10px', width:'150px'}}>Rent Now</button></Link>
                    </div>

                </div>
            ))}
            <Link to="/Details2">
                link1
            </Link>
        </>
    )
}

export default Card1
