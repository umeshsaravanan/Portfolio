import React, { useState } from 'react'
import { Link } from 'react-scroll'
import "./Header.css"
import { FaBars, FaTimes } from 'react-icons/fa'


const Header = () => {
    const [click, setClick] = useState(false);
    const [bg, setBg] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const handleLinks = () => {
        setClick(!click);
    }

    const changeBg = () =>{
        if(window.scrollY>=100){
            setBg(true);
        }
        else{
            setBg(false);
        }
    }
    if(click) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    window.addEventListener("scroll",changeBg);
    return (
        <div className={bg?'header header-bg':'header'}>

            <div className="navbarLeft">
                <div className='menuIcon' onClick={handleClick}>
                    {click ? (<FaTimes size={25} style={{ color: 'white' }} />) : (<FaBars size={25} style={{ color: 'white' }} />)}
                </div>
                <h1>Smart<span> Work</span></h1>
            </div>
            <ul className={click ? "navbarRight active" : "navbarRight"}>
                <li>
                    <Link onClick={handleLinks} to='about' smooth={true} duration={500} offset={-80}>
                        <h3>About Me</h3>
                    </Link>
                </li>
                <li>
                    <Link onClick={handleLinks} to='skills' smooth={true} duration={500} offset={-190}>
                        <h3>Skills</h3>
                    </Link>
                </li>
                <li>
                    <Link onClick={handleLinks} to='projects' smooth={true} duration={500} offset={-80}>
                        <h3>Project</h3>
                    </Link>
                </li>
                <li>
                    <Link onClick={handleLinks} to='exp' smooth={true} duration={500} offset={-80}>
                        <h3>Experience</h3>
                    </Link>
                </li>

                <li>
                    <Link onClick={handleLinks} to='join' smooth={true} duration={500} offset={-80}>
                        <h3>Contact</h3>
                    </Link>
                </li>

            </ul>

        </div>
    )
}

export default Header;