import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navItems = [
    { to: "/categories", label: "Categorías" },
    { to: "/suppliers", label: "Proveedores" },
    { to: "/inventory", label: "Inventario" }
  ]
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-300 hover:text-gray-400" }>
            ByteShop
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            ☰
          </button>
        </div>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-300 hover:text-gray-400"}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-3">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-300 hover:text-gray-400"} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <button className="w-full text-left bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
export default NavBar