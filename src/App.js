import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './components/homepage/index.js';

import ImgPage from './components/imgpage/index.js';
import NewsPage from './components/newspage/index.js';
import WeatherPage from './components/weatherpage/index.js';

import SurfaceAR from './components/realitycomponents/surfacewebar.js';
import MarkerAR from './components/realitycomponents/markerwebar.js';

import Shooters from './components/games/Shooters/index.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const router = createBrowserRouter([
  {path: "/", element: (<Home />)},
  {path: "News", element: (<NewsPage />)},
  {path: `Gallery`, element: (<ImgPage />)},
  {path: 'Weather', element: (<WeatherPage />)},
  {path: "WebAR/Marker", element: (<MarkerAR />)},
  {path: "WebAR/Surface", element: (<SurfaceAR />)},
  {path: "Game/Shooters", element: (<Shooters />)},
]);

function App() {
  return (
    <div className="App-header">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;