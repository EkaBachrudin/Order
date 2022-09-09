import * as React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import MenuAdd from "./pages/MenuAdd";
import MenuEdit from "./pages/MenuEdit";
import Order from "./pages/Order";
import Table from "./pages/Table";
import TableAdd from "./pages/TableAdd";
import TableEdit from "./pages/TableEdit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/add" element={<MenuAdd />} />
          <Route path="/menu/edit/:id" element={<MenuEdit />} />
          <Route path="/table" element={<Table />} />
          <Route path="/table/add" element={<TableAdd />} />
          <Route path="/table/edit/:id" element={<TableEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;