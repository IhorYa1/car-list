export const mapCar = (carDto) => {
    const { id, car, car_model, car_vin, car_color, car_model_year, price, availability } = carDto;
    return {
        id,
        company: car,
        model: car_model,
        vin: car_vin,
        color: car_color,
        year: car_model_year,
        price: price,
        availability: availability
    }
}
