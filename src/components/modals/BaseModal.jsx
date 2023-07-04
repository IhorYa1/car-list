import React, { useEffect, useState } from 'react';
import './style.css';

const defaultInitialPosition = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
};

const Modal = ({ isOpen, close, onSubmit, title, children }) => {
    const [dragging, setDragging] = useState(false);
    const [position, setPosition] = useState(defaultInitialPosition);
    const [initialPosition, setInitialPosition] = useState(defaultInitialPosition);

    const handleMouseDown = (e) => {
        setDragging(true);
        const offsetX = e.clientX - position.x;
        const offsetY = e.clientY - position.y;
        setInitialPosition({ x: offsetX, y: offsetY });
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            const posX = e.clientX - initialPosition.x;
            const posY = e.clientY - initialPosition.y;
            setPosition({ x: posX, y: posY });
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, [])

    const handleKeyPress = (e) => {
        switch (e.key) {
            case "Escape":
                close();
                break;
            default:
                console.log('Not Implemanted')
        }
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="modal"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}
            style={{ left: position.x, top: position.y }}
        >
            <div className="modal-content" >
                <h2>{title}</h2>
                {children}
                <div className="modal-buttons">
                    <button onClick={close}>Close</button>
                    <button onClick={onSubmit}>Ok</button>
                </div>
            </div>
        </div>
    );
};


export default Modal;