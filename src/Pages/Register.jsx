import { useEffect, useState } from 'react'
import Form from '../Components/Form/Form'
import { useNavigate } from 'react-router-dom'
import { SlCloudUpload } from 'react-icons/sl'

const Register = () => {
    const [data, setData] = useState({})
    const navi=useNavigate()
    useEffect(() => {
        const formData = new FormData()
        formData.append("first_name", data.first_name)
        formData.append("last_name", data.last_name)
        formData.append("email", data.email)
        formData.append("user_name", data.email)
        formData.append("password", data.password)
        formData.append("password_confirmation", data.password_confirmation)
        formData.append("profile_image", data.profile_image)
        fetch("https://vica.website/api/register", {
            method: "POST",
            headers: {
                "Accept": "application/json",
            },
            body: formData
        })
            .then(res => res.json())
            .then(res => {console.log(res)
        localStorage.setItem("token",` Bearer ${res.data.token}`)
        navi("/dashboard")
    })
            .catch(err => console.log(err))
    }, [data])

    const inputs = [
        {
            type: "text",
            Placeholder: "first name",
            name: "first_name"
        },
        {
            type: "text",
            Placeholder: "last name",
            name: "last_name"

        },
        {
            type: "hidden",
            Placeholder: "user name",
            name: "user_name"

        },
        {
            type: "email",
            Placeholder: "example@gmail.com",
            name: "email"

        },
        {
            type: "password",
            Placeholder: "Your password",
            name: "password"

        },
        {
            type: "password",
            Placeholder: "password confirmation",
            name: "password_confirmation"

        },
        {
            type: "file",
            Placeholder: "profile_image",
            name: "profile_image",
            img:<SlCloudUpload />

        }
    ]
    return (
        <div className='register'> 
            <Form
                title='Sign Up'
                info='Create a account to continue'
                inputs={inputs}
                submit="Sign Up"
                formFooter={{
                    content: "do you have an account",
                    url: "/",
                    linkContent: "login",
                }}
                setData={setData}
            />
        </div>
    )
}

export default Register
