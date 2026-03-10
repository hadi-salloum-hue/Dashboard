import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Edit_Add from '../Components/Edit_Add/Edit_Add'

const EditItem = () => {
    const [data, setData] = useState({})
    const [oldData, setOldData] = useState({})
    const navi = useNavigate()
    const params = useParams()
    useEffect(() => {
        console.log(oldData)
        axios.get(`https://vica.website/api/items/${params.id}`, {
            headers: {
                Accept: "application/json",
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
                console.log(res.data)
                setOldData(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        let sendData = {
            name: data.name ? data.name : oldData.name,
            price: data.price ? data.price : oldData.price,
            image: data.image,
            _method: "PUT"
        }

        axios.post(`https://vica.website/api/items/${params.id}`, sendData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
                console.log(res.data)
                navi("/dashboard/list")
            })
            .catch(err => console.log(err))

    }, [data])
    const inputs = [{
        type: "text",
        Placeholder: "name",
        name: "name",
        oldValue: oldData.name
    },
    {
        type: "number",
        Placeholder: "price",
        name: "price",
        oldValue: oldData.price
    },
    {
        type: "file",
        name: "image",
        oldValue: oldData.image_url
    },
    ]

    return (
        <div>
            <Edit_Add
                title="Edit Items"
                inputs={inputs}
                submit="Edit"
                setData={setData}
            />
        </div>
    )

}

export default EditItem
