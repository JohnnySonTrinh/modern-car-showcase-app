export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '98e9d9c7fdmsh4c03b84d28856dfp112ff3jsn39cc342108ce',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
