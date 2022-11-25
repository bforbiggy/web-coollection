import './App.scss';
import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import Landing from "./landing/Landing";
const Snowflakes = React.lazy(() => import("./sites/Snowflakes"));
const Carvendepict = React.lazy(() => import("./sites/carvendepict"));
const LiquidFollow = React.lazy(() => import("./sites/liquidfollow"));


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route>
          <Route path="*" element={<Navigate to="/" />} />
          <Route index element={<Landing />} />
          <Route path="snowflakes/" element={<Snowflakes />} />
          <Route path="carvendepict/" element={<Carvendepict />} />
          <Route path="liquidfollow/" element={<LiquidFollow />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
