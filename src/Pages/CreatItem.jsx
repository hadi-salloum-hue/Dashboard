import React, { useEffect, useState } from 'react'
import Form from '../Components/Form/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Edit_Add from '../Components/Edit_Add/Edit_Add'

const CreatItem = () => {
  const [data, setData] = useState({})
  const navi=useNavigate()
  useEffect(() => {
    if (data.name) {
      axios.post("https://vica.website/api/items", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: localStorage.getItem("token")
        }
      })
        .then(res => {
          console.log(res.data)
          navi("/dashboard/list")
        })
        .catch(err => console.log(err))
    }

  }, [data])
  const inputs = [{
    type: "text",
    Placeholder: "name",
    name: "name",

  },
  {
    type: "number",
    Placeholder: "price",
    name: "price",
  },
  {
    type: "file",
    name: "image",
  },

  ]

  return (
    <div>
      <Edit_Add
        title="add Items"
        info="hadiiii"
        inputs={inputs}
        submit="add"
        setData={setData}
        
      />
    </div>
  )
}

export default CreatItem
