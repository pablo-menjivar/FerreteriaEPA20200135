import React from 'react'
const RegisterCategory = ({ setNameCategory, nameCategory, setDescription, description, setIsActive, isActive, saveCategory, id, handleEdit }) => {
  return (
    <div className="">
      <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Nombre de la categoría</label>
          <input type="text" name="name" value={nameCategory} onChange={(e) => setNameCategory(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Categoría"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Descripción</label>
          <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Descripción"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="isActive">Está activa</label>
          <select name="isActive" value={isActive} onChange={(e) => setIsActive(e.target.value === 'true')} className="w-full px-3 py-2 border rounded">
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        {!id ? (
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={(e) => saveCategory(e)}>
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
export default RegisterCategory