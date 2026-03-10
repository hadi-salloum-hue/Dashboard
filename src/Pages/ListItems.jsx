/* import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBin6Line } from "react-icons/ri"
import "./ListItems.css"

const ListItems = () => {
    const [popDelete, setPopDelete] = useState(false)
    const [selectedId, setSelectedId] = useState(null)
    const navigate = useNavigate()
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = () => {
        axios.get("https://vica.website/api/items", {
            headers: {
                Accept: "application/json",
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => setItems(res.data))
            .catch(err => console.log(err))
    }

    const deleteItem = (id) => {
        axios.delete(`https://vica.website/api/items/${id}`, {
            headers: {
                Accept: "application/json",
                Authorization: localStorage.getItem("token")
            }
        })
            .then(() => fetchItems())
            .catch(err => console.log(err))
    }

    return (
        <div className="products-wrapper">

            <div className="products-header">
                <h1>Manage Products</h1>
                <button onClick={() => navigate("/dashboard/add")}>
                    + Add Product
                </button>
            </div>

            <table className="products-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <img src={item.image_url} alt="" />
                            </td>
                            <td className="actions">
                                <button onClick={() => navigate(`/dashboard/edit/${item.id}`)}>
                                    <FiEdit />
                                </button>
                                <button onClick={() => {
                                    setSelectedId(item.id)
                                    setPopDelete(true)
                                }}>
                                    <RiDeleteBin6Line />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default ListItems */
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBin6Line } from "react-icons/ri"
import PopUp from "../Components/PopUp/PopUp" 
import "./ListItems.css"

const ListItems = () => {

    const navigate = useNavigate()

    const [items, setItems] = useState([])
    const [popDelete, setPopDelete] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = () => {
        axios.get("https://vica.website/api/items", {
            headers: {
                Accept: "application/json",
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => setItems(res.data))
            .catch(err => console.log(err))
    }

const confirmDelete = () => {
    console.log("Selected ID:", selectedId)

    axios.delete(`https://vica.website/api/items/${selectedId}`, {
        headers: {
            Accept: "application/json",
            Authorization: localStorage.getItem("token")
        }
    })
        .then(res => {
            console.log("Deleted:", res)
            fetchItems()
            setPopDelete(false)
            setSelectedId(null)
        })
        .catch(err => {
            console.log("Error:", err.response)
        })
}

    return (
        <div className="products-wrapper">

            <div className="products-header">
                <h1>Manage Products</h1>
                <button onClick={() => navigate("/dashboard/add")}>
                    + Add Product
                </button>
            </div>

            <table className="products-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <img src={item.image_url} alt="" />
                            </td>
                            <td className="actions">
                                <button
                                    onClick={() =>
                                        navigate(`/dashboard/edit/${item.id}`)
                                    }
                                >
                                    <FiEdit />
                                </button>

                                <button
                                    onClick={() => {
                                        setSelectedId(item.id)
                                        setPopDelete(true)
                                    }}
                                >
                                    <RiDeleteBin6Line />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {popDelete && (
                <PopUp
                    titlePop="Are you sure you want to delete this product?"
                    onConfirm={confirmDelete}
                    onCancel={() => {
                        setPopDelete(false)
                        setSelectedId(null)
                    }}
                />
            )}

        </div>
    )
}

export default ListItems