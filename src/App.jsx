import './App.scss';
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Landing from "./landing/Landing";
const Snowflakes = React.lazy(() => import("./snowflakes/Snowflakes"));
const Blobliquidfollow = React.lazy(() => import("./blobliquidfollow/Blobliquidfollow"));


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="*" element={<Navigate to="/" />} />
          <Route index element={<Landing />} />
          <Route path="snowflakes/" element={<Snowflakes />} />
          <Route path="blobliquidfollow/" element={<Blobliquidfollow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
