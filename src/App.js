import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './components/homepage/index.js';
import Author from './author.js';
import SurfaceAR from './components/realitycomponents/surfacewebar.js';

import './App.css';
import MarkerAR from './components/realitycomponents/markerwebar.js';

const router = createBrowserRouter([
  {path: "/", element: (<Home />)},
  {path: "author", element: (<Author />)},
  {path: "WebXR/websurface", element: (<SurfaceAR />)},
  {path: "WebXR/webmarker", element: (<MarkerAR />)},
]);

function App() {
  return (
    <div className="App-header">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;