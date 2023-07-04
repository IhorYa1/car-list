import React, { useState } from "react";
import Modal from "../BaseModal";
import CarData from "../CarData";

const EditModal = ({ car, close, isOpen, onSubmit }) => {
    const [newCar, setNewCar] = useState({ ...car });
    const handleSave = () => {
        if (!newCar) return;
        onSubmit(newCar);
    };

    return (
        <Modal isOpen={isOpen} close={close} title='Edit' onSubmit={handleSave}>
            <CarData car={car} isDisabled={true} setNewCar={setNewCar} />
        </Modal>
    )
}

export default EditModal;