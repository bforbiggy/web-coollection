import './App.scss';
import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import Landing from "./landing/Landing";
const Snowflakes = React.lazy(() => import("./snowflakes/Snowflakes"));
const Blobliquidfollow = React.lazy(() => import("./sites/Blobliquidfollow"));


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route>
          <Route path="*" element={<Navigate to="/" />} />
          <Route index element={<Landing />} />
          <Route path="snowflakes/" element={<Snowflakes />} />
          <Route path="blobliquidfollow/" element={<Blobliquidfollow />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
