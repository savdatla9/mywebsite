import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';

import Home from './components/homepage/index.jsx';
import Author from './author.js';
// import Comics from './components/bookpage/index.js';
import ImgPage from './components/imgpage/index.js';
import NewsPage from './components/newspage/index.js';
import WeatherPage from './components/weatherpage/index.js';
import CryptoIndex from './components/others/cryptostreet.js';
import MarkerAR from './components/realitycomponents/markerwebar.js';
import SurfaceAR from './components/realitycomponents/surfacewebar.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";

const router = createBrowserRouter([
  {path: "/", element: (<Home />)},
  {path: "author", element: (<Author />)},
  {path: "News", element: (<NewsPage />)},
  // {path: "Comics", element: (<Comics />)},
  {path: "Crypto", element: (<CryptoIndex />)},
  {path: `Gallery`, element: (<ImgPage />)},
  {path: 'Weather', element: (<WeatherPage />)},
  {path: "WebAR/Marker", element: (<MarkerAR />)},
  {path: "WebAR/Surface", element: (<SurfaceAR />)},
]);

function App() {
  return (
    <PrimeReactProvider>
      <div className="App-header">
        <RouterProvider router={router} />
      </div>
    </PrimeReactProvider>
  );
};

export default App;