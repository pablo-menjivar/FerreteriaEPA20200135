import React from "react"
import NavBar from "./NavBar.jsx"
import { BrowserRouter as Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard.jsx"
import Categories from "../pages/Categories.jsx"
import Suppliers from "../pages/Suppliers.jsx"
import Inventory from "../pages/Inventory.jsx"

function Navigation() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}
export default Navigation