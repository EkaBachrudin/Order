import * as React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/menu/:id" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;