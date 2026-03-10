import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SideBar from '../Components/SideBar/SideBar'
import NavBar from '../Components/NavBar/NavBar'
import PopUp from '../Components/PopUp/PopUp'
import img from ".././assets/img/PImage.png"
import './Dashboard.css'

const Dashboard = () => {

    const [popLogout, setPopLogout] = useState(false)
    const navigate = useNavigate()

    const confirmLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className="dashboard-layout">

            <SideBar
                sp="Dash"
                h="Stack"
                li1=" Dashboard"
                li2=" Products"
                btn=" log Out"
                onLogoutClick={() => setPopLogout(true)}   
            />

            <div className="main-content">
                <NavBar
                    title="Products"
                    PName="Hadi Al-Salloum"
                    PTitle="admin"
                    PImage={img}
                />
                <Outlet />
            </div>

            {popLogout && (
                <PopUp
                    titlePop="Are you sure you want to logout?"
                    onConfirm={confirmLogout}
                    onCancel={() => setPopLogout(false)}
                />
            )}

        </div>
    )
}

export default Dashboard