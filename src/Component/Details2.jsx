import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Details2 = () => {

    const [carDetail, setCarDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/RoadRunner/get/${id}`)
            .then((data) => data.json())
            .then((data) => { setCarDetail(data) })
            .catch((e) => console.log(e))
    }, [id])

    return (
        <>
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>View Hotal Details</h3>
                    <div className='card-body'>
                        <div className='row'>

                            <div><img src={carDetail.imageLink} width="400px" height="400px" /></div>
                        </div>
                        <div className='row'>
                            <label><strong>Card Name:</strong></label>
                            <div>{carDetail.nameOfCar}</div>
                        </div>

                        <div className='row'>
                            <label><strong>Discription:</strong></label>
                            <div>{carDetail.longDescription}</div>
                        </div>
                        <Link to={`/Form3/${carDetail.id}`}>
                            <button>Rent Me</button>
                        </Link>
                        {/* Add more details as needed */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details2
