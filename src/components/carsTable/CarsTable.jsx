import React, { useEffect, useState } from 'react'
import EditModal from '../modals/editModal/EditModal';
import DeleteModal from '../modals/deleteModal/DeleteModal';
import './carsTable.css'

const CarsTable = ({ cars, selectedCar, setCars, setSelectedCar }) => {
    const [selectedAction, setSelectedAction] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        if (showEditModal || showDeleteModal) return;
        setSelectedAction('');
    }, [showEditModal, showDeleteModal]);

    if (!cars || !cars.length) return null;

    const handleActionSelect = (e, car) => {
        setSelectedAction(e.target.value);
        setSelectedCar(car);
        switch (e.target.value) {
            case '':
                break;
            case 'edit':
                setShowEditModal(true);
                break;
            case 'delete':
                setShowDeleteModal(true);
                break;
            default:
                throw new Error('No such action');
        }
    };

    const handleSubmitEditModal = (newCar) => {
        console.log(newCar);
        setShowEditModal(false);
        if (JSON.stringify(newCar) === JSON.stringify(selectedCar)) {
            return;
        }
        setCars(prev => {
            return prev.map((car) => {
                if (car.id === selectedCar?.id) {
                    return newCar;
                }
                return car;
            })
        })
    }

    const handleSubmitDeleteModal = () => {
        setCars(prevCars => {
            return prevCars.filter(car => car.id !== selectedCar?.id);
        })
        setShowDeleteModal(false);
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th><span>Company</span></th>
                        <th><span>Model</span></th>
                        <th><span>VIN</span></th>
                        <th><span>Color</span></th>
                        <th><span>Year</span></th>
                        <th><span>Price</span></th>
                        <th><span>Availability</span></th>
                        <th><span>Actions</span></th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => (
                        <tr key={car.id}>
                            <td>{car.company}</td>
                            <td>{car.model}</td>
                            <td>{car.vin}</td>
                            <td>{car.color}</td>
                            <td>{car.year}</td>
                            <td>{car.price}</td>
                            <td>{car.availability ? 'true' : 'false'}</td>
                            <td className='actions'>
                                <select
                                    value={(selectedCar?.id === car.id) ? selectedAction : ''}
                                    onChange={(e) => handleActionSelect(e, car)}
                                >
                                    <option value="" disabled hidden>Select Action</option>
                                    <option value="edit">Edit</option>
                                    <option value="delete">Delete</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <EditModal isOpen={showEditModal} onSubmit={handleSubmitEditModal} close={() => { setShowEditModal(false) }} car={selectedCar} />
            <DeleteModal isOpen={showDeleteModal} onSubmit={handleSubmitDeleteModal} close={() => { setShowDeleteModal(false) }} />
        </>

    )
}

export default CarsTable;