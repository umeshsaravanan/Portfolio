import React, { useState } from 'react'
import { Link } from 'react-scroll'
import "./Header.css"
import { FaBars, FaTimes } from 'react-icons/fa'


const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const handleLinks = () => {
        setClick(!click);
    }

    return (
        <div className="header">

            <div className="navbarLeft">
                <div className='menuIcon' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: 'white' }} />) : (<FaBars size={20} style={{ color: 'white' }} />)}
                </div>
                <h1>Smart<span> Work</span></h1>
            </div>
            <ul className={click ? "navbarRight active" : "navbarRight"}>
                <li>
                    <Link onClick={handleLinks} to='about' smooth={true} duration={500} offset={-80}>
                        <h4>About Me</h4>
                    </Link>
                </li>
                <li>
                    <Link onClick={handleLinks} to='skills' smooth={true} duration={500} offset={-190}>
                        <h4>Skills</h4>
                    </Link>
                </li>
                <li>
                    <Link onClick={handleLinks} to='projects' smooth={true} duration={500} offset={-80}>
                        <h4>Project</h4>
                    </Link>
                </li>
                <li>
                    <Link onClick={handleLinks} to='exp' smooth={true} duration={500} offset={-80}>
                        <h4>Experience</h4>
                    </Link>
                </li>

                <li>
                    <Link onClick={handleLinks} to='contact' smooth={true} duration={500} offset={-80}>
                        <h4>Contact</h4>
                    </Link>
                </li>

                <li>
                    <Link className='hide' onClick={handleLinks} to='joinme' smooth={true} duration={500} offset={-80}>
                        <h4>Join with Me</h4>
                    </Link>
                </li>

            </ul>

        </div>
    )
}

export default Header;