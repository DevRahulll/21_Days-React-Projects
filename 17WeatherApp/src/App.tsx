import { useEffect, useState } from "react";

interface weatherDataTypes {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

export default function App() {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<weatherDataTypes | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const apikey = import.meta.env.VITE_API_KEY as string;

  async function fetchData(cityName: string) {
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`;
      const response = await fetch(url);

      if (!response.ok) {
        alert("City Not Found!");
        setLoading(false);
        return;
      }

      const result = await response.json();
      console.log(result);
      setWeatherData(result);
      setLoading(false);
      setCity("");
    } catch (error) {
      setLoading(false);
      console.error("Error in fetching data", error);
    }
  }

  function handleSearch(): void {
    if (!city.trim()) {
      alert("Please enter a city name");
      return;
    }
    fetchData(city);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchData("Delhi");
  }, []);

  return (
    <div className="">
      <div className="max-w-3xl mx-auto min-h-[600px] mt-15 bg-gray-800 p-8 rounded-md shadow-2xl shadow-green-600 border border-gray-300">
        <h1 className="text-4xl text-center font-semibold font-mono">
          Weather App
        </h1>

        <div className="max-w-2xl mx-auto mt-5 text-center p-2">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Delhi"
            className="w-[60%] bg-gray-700 rounded-md placeholder:text-gray-400 px-8 py-2 text-xl border-none outline-green-500  mr-5"
          />
          <button
            onClick={handleSearch}
            className="px-8 py-2 bg-green-600 outline-none border-none text-xl cursor-pointer hover:bg-green-500 hover:scale-100 active:scale-95 rounded-md text-White font-medium"
          >
            Search
          </button>
        </div>

        <div className="max-w-2xl mx-auto min-h-[350px] mt-6 p-2">
          {loading ? (
            <div className="text-6xl text-red-400 text-center">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="">
              <h1 className="text-xl font-medium text-center">
                {weatherData?.name},{weatherData?.sys?.country}
              </h1>
              <div className="text-center mt-3 mb-5 text-5xl font-bold">
                <p className="text-teal-400 mb-2">
                  {weatherData?.main?.temp} °F
                </p>
                <p className="text-xl font-medium">Temperature</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-2 text-center">
                <div className="">
                  <p className="text-2xl font-medium text-yellow-300">
                    {weatherData?.main?.humidity} g.m-3
                  </p>
                  <p className="text-lg font-light">Humidity</p>
                </div>
                <div className="">
                  <p className="text-2xl font-medium text-yellow-300">
                    {weatherData?.wind?.speed} km/h
                  </p>
                  <p className="text-lg font-light">Wind Speed</p>
                </div>
                <div className="">
                  <p className="text-2xl font-medium text-yellow-300">
                    {weatherData?.main?.temp_max} °F
                  </p>
                  <p className="text-lg font-light">Max Temp</p>
                </div>
                <div className="">
                  <p className="text-2xl font-medium text-yellow-300">
                    {weatherData?.main?.temp_min} °F
                  </p>
                  <p className="text-lg font-light">Min Temp</p>
                </div>
                <div className="">
                  <p className="text-2xl font-medium text-yellow-300">
                    {weatherData?.main?.feels_like} °F
                  </p>
                  <p className="text-lg font-light">Feel Like</p>
                </div>
                <div className="">
                  <p className="mt-2 text-2xl font-medium text-yellow-300">
                    {getCurrentDate()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
