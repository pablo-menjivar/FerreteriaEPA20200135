import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
const useDataCategories = () => {
const [activeTab, setActiveTab] = useState("list")
  const API = "http://localhost:5000/api/categories"
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [isActive, setIsActive] = useState(false)
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCategories = async () => {
    const response = await fetch(API)
    if (!response.ok) {
      throw new Error("Hubo un error al obtener las categorías")
    }
    const data = await response.json()
    setCategories(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchCategories()
  }, [])
  const saveCategory = async (e) => {
    e.preventDefault()
    const newCategory = {
      name: name,
      description: description,
      isActive: isActive
    }
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    });
    if (!response.ok) {
      throw new Error("Hubo un error al registrar la categoría")
    }
    const data = await response.json()
    toast.success('Categoría registrada')
    setCategories(data)
    fetchCategories()
    setName("")
    setDescription("")
    setIsActive(false)
  }
  const deleteCategory = async (id) => {
    const response = await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (!response.ok) {
      throw new Error("Hubo un error al eliminar la categoría")
    }
    toast.success('Categoria Eliminada');
    fetchCategories()
  }
  const updateCategories = async (dataCategory) => {
    setId(dataCategory._id)
    setName(dataCategory.name)
    setDescription(dataCategory.description)
    setIsActive(dataCategory.isActive)
    setActiveTab("form")
  }
  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      const editCategory = {
        name: name,
        description,
        isActive: isActive
      }
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editCategory)
      })
      if (!response.ok) {
        throw new Error("Error al actualizar la categoría")
      }
      const data = await response.json()
      console.log("data desde handleEdit en custom-hook")
      console.log(data)
      toast.success('categoría actualizada')
      setId("")
      setDescription("")
      setName("")
      setIsActive(false)
      setActiveTab("list")
      fetchCategories()
    } catch (error) {
      console.error("Error al editar la categoría: ", error)
    }
  }
  return {
    activeTab, setActiveTab,
    id,
    name, setName,
    description, setDescription,
    isActive, setIsActive,
    categories,
    loading,
    saveCategory,
    deleteCategory,
    updateCategories,
    handleEdit,
  }
}
export default useDataCategories