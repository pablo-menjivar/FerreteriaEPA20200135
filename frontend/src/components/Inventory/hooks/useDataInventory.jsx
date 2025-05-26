import { useEffect, useState } from "react";
import { toast } from "react-hot-toast"
const useDataInventory = () => {
  const [activeTab, setActiveTab] = useState("list");
  const API = "http://localhost:5000/api/inventory";
  const [id, setId] = useState("")
  const [productName, setProductName] = useState("")
  const [currentQuantity, setCurrentQuantity] = useState("")
  const [minimumStock, setMinimumStock] = useState("")
  const [lastUpdate, setLastUpdate] = useState("")
  const [inventory, setInventory] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchInventory = async () => {
    const response = await fetch(API)
    if (!response.ok) {
      throw new Error("Hubo un error al obtener el inventario")
    }
    const data = await response.json()
    setInventory(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchInventory()
  }, [])
  const saveInventory = async (e) => {
    e.preventDefault()
    const newInventory = {
      productName: productName,
      currentQuantity,
      minimumStock,
      lastUpdate: lastUpdate
    }
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInventory),
    });
    if (!response.ok) {
      throw new Error("Hubo un error al registrar")
    }
    const data = await response.json()
    toast.success('Inventario registrado')
    setInventory(data)
    fetchInventory()
    setProductName("")
    setCurrentQuantity("")
    setMinimumStock("")
    setLastUpdate("")
  }
  const deleteInventory = async (id) => {
    const response = await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (!response.ok) {
      throw new Error("Hubo un error al eliminar el inventario")
    }
    toast.success('Categoria Eliminada');
    fetchInventory()
  }
  const updateInventory = async (dataInventory) => {
    setId(dataInventory._id)
    setProductName(dataInventory.productName)
    setCurrentQuantity(dataInventory.currentQuantity)
    setMinimumStock(dataInventory.minimumStock)
    setLastUpdate(dataInventory.lastUpdate)
    setActiveTab("form")
  }
  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      const editInventory = {
            productName: productName,
            currentQuantity,
            minimumStock,
            lastUpdate: lastUpdate
        }
        const response = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editInventory)
        })
        if (!response.ok) {
            throw new Error("Error al actualizar el inventario")
        }
        const data = await response.json()
        console.log("data desde handleEdit en custom-hook")
        console.log(data)
        toast.success('inventario actualizado')
        setProductName("")
        setCurrentQuantity("")
        setMinimumStock("")
        setLastUpdate("")
        setActiveTab("list")
        fetchInventory()
        } catch (error) {
            console.error("Error al editar el inventario: ", error)
        }
    }
  return {
    activeTab, setActiveTab,
    id,
    productName, setProductName,
    currentQuantity, setCurrentQuantity,
    minimumStock, setMinimumStock,
    lastUpdate, setLastUpdate,
    inventory,
    loading,
    saveInventory,
    deleteInventory,
    updateInventory,
    handleEdit,
  }
}
export default useDataInventory