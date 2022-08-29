import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useData } from './hooks/useData';

const App = () => {
  const [count, setCount] = useState(0);
  const {fetchData, setConfig, hotels, fetchCurrentLocation, latitude, longitude} = useData();

  useEffect(fetchData, []);
  useEffect(fetchCurrentLocation, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
        latitude: {latitude}
        </p>
        <p>
        longitude: {longitude}
        </p>
        {hotels.map((hotel) => <><p>ホテル名：{hotel.name}</p><p>距離：{hotel.distance}km</p>{hotel.roomInfos.map((roomInfo) => <><p>{roomInfo.name}, {roomInfo.planName}: {roomInfo.charge}円</p></>)}<br></br></>)}
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default App;
