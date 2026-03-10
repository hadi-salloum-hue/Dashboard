import './NavBar.css'
import { useLocation } from 'react-router-dom'

const NavBar = ({ PName, PTitle, PImage }) => {

    const location = useLocation()

    const getPageName = () => {
        const path = location.pathname.split("/")

        if (path[2] === "add") return "Add"
        if (path[2] === "edit") return "Edit"
        return ""
    }

    return (
        <div className='nav'>

            <h4>
                Products {getPageName() && ` / ${getPageName()}`}
            </h4>

            <div className="info">
                <img src={PImage} alt="" />
                <div className="name">
                    <h4 className='H'>{PName}</h4>
                    <p className='P'>{PTitle}</p>
                </div>
            </div>

        </div>
    )
}

export default NavBar