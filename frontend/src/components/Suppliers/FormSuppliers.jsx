import React from 'react'
const RegisterInventory = ({ setNameSuppliers, nameSupplier, setContactSuppliers, contactSupplier, setPhoneSuppliers, phoneSuppliers, setAddressSuppliers, addressSupplier, saveSuppliers, id, handleEdit }) => {
  return (
    <div className="">
      <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Nombre</label>
          <input type="text" name="name" value={nameSupplier} onChange={(e) => setNameSuppliers(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Nombre"/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="contact">Contacto</label>
            <input type="text" name="contact" value={contactSupplier} onChange={(e) => setContactSuppliers(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Contacto"/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">Telefono</label>
            <input type="text" name="phone" value={phoneSuppliers} onChange={(e) => setPhoneSuppliers(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Teléfono"/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="address">Dirección</label>
            <input type="text" name="address" value={addressSupplier} onChange={(e) => setAddressSuppliers(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Dirección"/>
        </div>
        {!id ? (
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={(e) => saveSuppliers(e)}>
            Guardar
          </button>
        ) : (
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={(e) => handleEdit(e)}>
            Editar
          </button>
        )}
      </form>
    </div>
  )
}
export default RegisterInventory