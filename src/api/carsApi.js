import { mapCar } from "../lib/carMapper";

const API_URL = 'https://myfakeapi.com/api/cars/';

export const fetchCars = async () => {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch car data');
        }

        const { cars } = await response.json();
        return cars.map(mapCar);
    } catch (error) {
        console.error(error);
        throw error;
    }
};