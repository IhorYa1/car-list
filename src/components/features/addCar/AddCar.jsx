import React, { useState } from 'react'
import AddModal from '../../modals/addModal/AddModal';
import './addCar.css'
const AddCar = ({ setCars }) => {
    const [showAddModal, setShowAddModal] = useState(false);

    const handleSubmitAddModal = (newCar) => {
        setCars(prevCars => {
            return [newCar, ...prevCars]
        })
        setShowAddModal(false);
    }

    const handleCloseAddModal = () => {
        setShowAddModal(false);
    }

    return (
        <>
            <button className='add-car' onClick={() => { setShowAddModal(true) }}>Add car</button>
            <AddModal isOpen={showAddModal} onSubmit={handleSubmitAddModal} close={handleCloseAddModal} />
        </>
    )
}
export default AddCar;