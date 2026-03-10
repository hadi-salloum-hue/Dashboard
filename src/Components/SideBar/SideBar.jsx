import './SideBar.css'
import React, { useEffect } from 'react'
import { IoMdStopwatch } from "react-icons/io";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaPowerOff } from "react-icons/fa6";
import { NavLink, useNavigate } from 'react-router-dom';

const SideBar = ({ sp, h, li1, li2, btn, onLogoutClick }) => {
    const logOut = () => {
        fetch("https://vica.website/api/logout", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                localStorage.removeItem("token")
                navi("/")
            })
            .catch(err => console.log(err))
    }
    const navi = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navi("/")
        }
    })

    return (
        <div className='SideBar'>
            <h2 className='title'> <span>{sp}</span>{h}</h2>
            <ul className='list'>
                <li>
                    <IoMdStopwatch />
                    {li1}

                </li>
                <li >
                    <NavLink to="/dashboard/list">
                        <HiOutlineSquares2X2 />
                        {li2}
                    </NavLink>
                </li>
            </ul>
            <button onClick={onLogoutClick} className='btn'>
                <FaPowerOff /> {btn}
            </button>
        </div>
    )
}

export default SideBar
