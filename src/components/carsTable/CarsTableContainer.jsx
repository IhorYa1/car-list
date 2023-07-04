import React, { useContext, useEffect, useState } from 'react';
import { Search, SearchContext } from '../features/search/Search';
import AddCar from '../features/addCar/AddCar';
import CarsTable from './CarsTable';
import Pagination from '../features/pagination/Pagination';
import './carTableContainer.css'

const CarsTableContainer = ({ cars, setCars }) => {
    const { searchTerm } = useContext(SearchContext);

    const [currentPage, setCurrentPage] = useState(0);
    const [carsPerPage] = useState(14);
    const [selectedCar, setSelectedCar] = useState(null);
    const [filteredCars, setFilteredCars] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    // Handle page navigation
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setCurrentPage(0);
    }, [searchTerm])

    useEffect(() => {

        const filteredCarsbySearchTerm = cars.filter(
            (car) => {
                let carData = `${car.company} ${car.model} ${car.vin} ${car.color} ${car.year} ${car.price} ${car.availability}`
                return carData.toLowerCase().includes(searchTerm.toLowerCase());
            }
        );

        const indexOfFirstCar = currentPage * carsPerPage;
        const indexOfLastCar = indexOfFirstCar + carsPerPage;

        setTotalPages(Math.ceil(filteredCarsbySearchTerm.length / carsPerPage));

        const carsCurrentOnPage = filteredCarsbySearchTerm.slice(indexOfFirstCar, indexOfLastCar);

        setFilteredCars(carsCurrentOnPage);
    }, [cars, searchTerm, currentPage, carsPerPage, setFilteredCars])


    return (
        <div className='wrapper'>
            <div className='top-actions'>
                <Search />
                <AddCar setCars={setCars} />
            </div>

            <CarsTable cars={filteredCars}
                selectedCar={selectedCar}
                setCars={setCars}
                setSelectedCar={setSelectedCar}
            />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={paginate} />
        </div>
    );
};

export default CarsTableContainer;
