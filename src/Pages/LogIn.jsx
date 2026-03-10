import { useEffect, useState } from "react"
import Form from "../Components/Form/Form"
import { useNavigate } from "react-router-dom"

const LogIn = () => {
    const [data, setData] = useState({})
    const navi = useNavigate()

    useEffect(() => {
        if (data.email && data.password) {
            fetch("https://vica.website/api/task-login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    localStorage.setItem("token", ` Bearer ${res.token}`)
                    navi("/dashboard")
                })
                .catch(err => console.log(err))
        }

    }, [data])
    const inputs = [
        {
            type: "email",
            Placeholder: "example@gmail.com",
            name: "email"

        },
        {
            type: "password",
            Placeholder: "Your password",
            name: "password"

        }
    ]
    return (
        <div>

            
            <Form
                title='Sign In'
                info='Please enter your email and password to continue'
                inputs={inputs}
                submit="Log In "
                formFooter={{
                    content: "dont have an account",
                    url: "/regestir",
                    linkContent: "Sign Up",
                }}
                setData={setData}
            />
        </div>
    )
}

export default LogIn
