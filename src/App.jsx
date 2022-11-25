import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Landing from "./landing/Landing";
import Snowflakes from "./snowflakes/Snowflakes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="*" element={<Navigate to="/" />} />
          <Route index element={<Landing />} />
          <Route path="snowflakes/" element={<Snowflakes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
