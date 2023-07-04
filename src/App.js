import { useEffect, useState } from 'react';
import './App.css';
import './components/carsTable/CarsTableContainer';
import { SearchProvider } from './components/features/search/Search';

import { CARS } from './lib/constants';
import { fetchCars } from './api/carsApi';
import CarsTableContainer from './components/carsTable/CarsTableContainer';
function App() {
  const [cars, setCars] = useState([]);//table data
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCars = async () => {
      try {
        const storedCars = localStorage.getItem(CARS);
        if (storedCars) {
          setCars(JSON.parse(storedCars));
        } else {
          const fetchedCars = await fetchCars();
          setCars(fetchedCars);
          localStorage.setItem(CARS, JSON.stringify(fetchedCars));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getCars();
  }, []);

  useEffect(() => {
    if (!cars.length) return;
    localStorage.setItem(CARS, JSON.stringify(cars))
  }, [cars])

  if (isLoading) {
    return <p className=''>Loading...</p>
  }


  return (
    <SearchProvider>
      <div className="App">
        <CarsTableContainer cars={cars} setCars={setCars} />
      </div >
    </SearchProvider>
  );
}

export default App;
