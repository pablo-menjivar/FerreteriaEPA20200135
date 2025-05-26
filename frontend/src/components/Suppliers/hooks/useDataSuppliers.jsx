import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
const useDataSuppliers = () => {
  const [activeTab, setActiveTab] = useState("list")
  const API = "http://localhost:5000/api/suppliers"
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [suppliers, setSuppliers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchSuppliers = async () => {
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error("Hubo un error al obtener los proveedores")
    }
    const data = await response.json()
    setSuppliers(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchSuppliers()
  }, [])
  const saveSupplier = async (e) => {
    e.preventDefault();
    const newSupplier = {
      name,
      contact,
      phone,
      address
    }
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newSupplier)
    })
    if (!response.ok) {
      throw new Error("Hubo un error al registrar el proveedor")
    }
    toast.success("Proveedor registrado")
    setName("")
    setContact("")
    setPhone("")
    setAddress("")
    fetchSuppliers()
  }
  const deleteSupplier = async (id) => {
    const response = await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (!response.ok) {
      throw new Error("Hubo un error al eliminar el proveedor")
    }
    toast.success("Proveedor eliminado")
    fetchSuppliers()
  }
  const updateSupplier = async (dataSupplier) => {
    setId(dataSupplier._id)
    setName(dataSupplier.name)
    setContact(dataSupplier.contact)
    setPhone(dataSupplier.phone)
    setAddress(dataSupplier.address)
    setActiveTab("form")
  }
  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      const editSupplier = {
        name,
        contact,
        phone,
        address
      }
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editSupplier)
      })
      if (!response.ok) {
        throw new Error("Error al actualizar el proveedor")
      }
      toast.success("Proveedor actualizado")
      setId("")
      setName("")
      setContact("")
      setPhone("")
      setAddress("")
      setActiveTab("list")
      fetchSuppliers()
    } catch (error) {
      console.error("Error al editar el proveedor: ", error)
    }
  }
  return {
    activeTab, setActiveTab,
    id,
    name, setName,
    contact, setContact,
    phone, setPhone,
    address, setAddress,
    suppliers,
    loading,
    saveSupplier,
    deleteSupplier,
    updateSupplier,
    handleEdit,
  }
}
export default useDataSuppliers