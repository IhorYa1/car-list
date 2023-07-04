import React, { useState } from "react";
import Modal from "../BaseModal";
import CarData from "../CarData";

const AddModal = ({ close, isOpen, onSubmit }) => {
    const [newCar, setNewCar] = useState(null);
    const handleSave = () => {
        if (!newCar) return;
        let car = { ...newCar }
        car.id = Date.now();
        onSubmit(car);
    };

    return (
        <Modal isOpen={isOpen} close={close} title='Add car' onSubmit={handleSave}>
            <CarData isDisabled={false} setNewCar={setNewCar} />
        </Modal>
    )
}

export default AddModal;

