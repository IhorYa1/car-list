import React, { useEffect, useState } from "react";

const CarData = ({
    car,
    isDisabled,
    setNewCar,
}) => {
    const [company, setCompany] = useState('');
    const [model, setModel] = useState('');
    const [vin, setVin] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('$');
    const [availability, setAvailability] = useState(false);

    useEffect(() => {
        if (!car) return;
        const { company, model, vin, year, color, price, availability } = car;
        setCompany(company);
        setModel(model);
        setVin(vin);
        setYear(year);
        setColor(color);
        setPrice(price);
        setAvailability(availability);
        setNewCar(prev => ({
            ...prev,
            id: car.id,
        }))
    }, [car])

    useEffect(() => {
        setNewCar(prev => {
            return ({
                ...prev,
                company, model, vin, year, color, price, availability,
            })

        })
    }, [company, model, vin, year, color, price, availability, setNewCar])

    return (
        <>
            <div className='row'>
                <label>Company:</label>
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} disabled={isDisabled} />
            </div>
            <div className='row'>
                <label>Model:</label>
                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} disabled={isDisabled} />
            </div>
            <div className='row'>
                <label>VIN:</label>
                <input type="text" value={vin} onChange={(e) => setVin(e.target.value)} disabled={isDisabled} />
            </div>
            <div className='row'>
                <label>Year:</label>
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} disabled={isDisabled} />
            </div>
            <div className='row'>
                <label>Color:</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
            <div className='row'>
                <label>Price:</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className='row'>
                <label>Availability:</label>
                <select value={availability} onChange={(e) => setAvailability(e.target.value)}>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                </select>
            </div>
        </>
    )
}

export default CarData;