import React from "react";
import Modal from "../BaseModal";
// import './deleteModal.css'

const DeleteModal = ({ isOpen, close, onSubmit }) => {
    return (

        <Modal isOpen={isOpen} close={close} onSubmit={onSubmit} title={'Delete'}>
            <p>Are you sure you want to remove the car?</p>
        </Modal>

    )
}
export default DeleteModal;