import { useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <nav style={{ backgroundColor: '#eee', padding: '12px 16px' }}>
            <div className="logonav">
                <img src="src/assets/logo.svg" style={{ width: '121px', height: '22px' }} />
            </div>
            <div className="searchnav">
                <button className="btn-search">
                    <i className="fa fa-search" />
                </button>
            </div>
            <div className={ isOpen ? "navlinks open" : "navlinks" }>
                <ul>
                    <li className="mainnav" onClick={toggleMenu}>mainnav</li>
                    <li className="usernav" onClick={toggleMenu}>usernav</li>
                </ul>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <i className="fa-solid fa-bars" style={{ color: 'rgb(0, 0, 0)' }} />
            </div>
        </nav>
        </>
    )
}

export default Navbar