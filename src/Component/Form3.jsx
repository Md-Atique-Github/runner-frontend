
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Form3 = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [driverLicenseNo, setDriverLicenseNo] = useState('');
    const [pickUp, setPickUp] = useState(null);
    const [dropOff, setDropOff] = useState(null);
    const [insurance, setInsurance] = useState(false);
    const [carDetail, setCarDetail] = useState([]);
    const nav = useNavigate();
    const { id } = useParams();

    const [totalPrice, setTotalPrice] = useState(null);
    const [subTotal, setSubTotal] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/RoadRunner/get/${id}`)
            .then((data) => data.json())
            .then((data) => { setCarDetail(data) })
            .catch((e) => console.log(e));

        let prevData = localStorage.getItem("bookData");
        prevData = JSON.parse(prevData);
        if (prevData) {
            setName(prevData?.name || '');
            setAddress(prevData?.address || '');
            setPhone(prevData?.phone || '');
            setDriverLicenseNo(prevData?.driverLicenseNo || '');
            setPickUp(prevData?.pickUp || null);
            setDropOff(prevData?.dropOff || null);
            setInsurance(prevData?.setInsurance || '');
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const bookingData = {
            name: name,
            address: address,
            phone: phone,
            driverLicenseNo: driverLicenseNo,
            insurance: insurance,
            pickUp: pickUp,
            dropOff: dropOff
        };
        console.log(bookingData)

        fetch("http://localhost:8080/user/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("hhhhhh", data);
            })
            .catch((error) => {
                console.error("ooooooo", error);
            });
        console.log('hello');
        nav(`/Checkout4/${carDetail.id}`);
    };

    const handleCheck = (check) => {
        if (check) {
            setInsurance(!insurance);
            const pick = new Date(pickUp);
            const drop = new Date(dropOff);
            const totaltime = Math.floor((drop - pick) / (1000 * 60 * 60 * 24)) + 1;
            const abc = totalPrice + totaltime * 15000;
            setSubTotal(abc);
            console.log({ abc });
        } else {
            setSubTotal(null);
        }
    };

    useEffect(() => {
        if (pickUp && dropOff) {
            console.log(pickUp, dropOff);
            const pick = new Date(pickUp);
            const drop = new Date(dropOff);
            const totaltime = Math.floor((drop - pick) / (1000 * 60 * 60 * 24)) + 1;
            setTotalPrice(totaltime * carDetail.rentalFee);
        }
        if (pickUp > dropOff) {
            setTotalPrice(0);
        }
    }, [pickUp, dropOff, insurance]);

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handlePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleAddress = (event) => {
        setAddress(event.target.value);
    };

    const handlePickDate = (event) => {
        setPickUp(event.target.value);
    };

    const handleDropDate = (event) => {
        setDropOff(event.target.value);
    };

    const handleLicenseNo = (event) => {
        setDriverLicenseNo(event.target.value);
    };

    const handleLocalStorage = () => {
        const bookData = {
            name: name,
            address: address,
            phone: phone,
            driverLicenseNo: driverLicenseNo,
            pickUp: pickUp,
            dropOff: dropOff,
            insurance: insurance
        };

        localStorage.setItem("bookData", JSON.stringify(bookData));
        console.log(bookData);

        nav("/");
    };

    return (
        <>
            <form>
                <div className="card col-md-6 offset-md-3" style={{ backgroundColor: "lightgrey", borderRadius: "20px" }}>
                    <div className="card-body" style={{ display: "flex" }}>
                        <div className="row">
                            <div><img src={carDetail.imageLink} width="120px" height="110px" /></div>
                        </div>
                        <div className="row" style={{ marginTop: "70px", marginLeft: "25px" }}>
                            <label><strong>Car Name: </strong>{carDetail.nameOfCar}</label>
                        </div>
                    </div>
                </div>
                <div style={{ margin: "20px" }}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label" >Name</label>
                        <input type="text" className="form-control" id="name" onChange={handleName} value={name} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" onChange={handleAddress} value={address} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input type="phone" className="form-control" id="phone" onChange={handlePhone} value={phone} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">License No.</label>
                        <input type="text" className="form-control" id="number" onChange={handleLicenseNo} value={driverLicenseNo} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="arivalDate" className="form-label">Pick Date</label>
                        <input type="datetime-local" className="form-control" id="arivalDate" onChange={handlePickDate} value={pickUp || ''} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="departureDate" className="form-label">Drop Date</label>
                        <input type="datetime-local" className="form-control" id="departureDate" onChange={handleDropDate} value={dropOff || ''} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e) => handleCheck(e.target.checked)} />
                        <label className="form-check-label" htmlFor="exampleCheck1">Want Damage Insurance</label>
                    </div>
                </div>
            </form>
            <div style={{ margin: "20px" }}>
                <h5 >Rent For One Day: {carDetail.rentalFee}</h5>
                <h5 >Rent Cost Will Be: {totalPrice}</h5>
                <h5 >subTotal: {subTotal}</h5>
            </div>
            <Link to={`/Checkout4/${carDetail.id}`}>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary" style={{ borderRadius: "10px", marginRight: "14px", marginLeft: "7px" }}>Checkout</button>
            </Link>
            <button type="button" onClick={handleLocalStorage} className="btn btn-primary" style={{ borderRadius: "10px" }}>Change Car</button>
        </>
    );
};

export default Form3;

