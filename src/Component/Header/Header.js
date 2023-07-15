import React, { Component } from 'react'
import { Link } from 'react-scroll'
import "./Header.css"
import { FaBars, FaTimes } from 'react-icons/fa'




class Header extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    handleLinks = () => {
        this.setState({clicked: !this.state.clicked })
    }

    render() {
        
        return (
            <div className="header">

                <div className="navbarLeft">
                    <div className='menuIcon' onClick={this.handleClick}>
                        {this.state.clicked ? (<FaTimes size={20} style={{ color: 'white' }} />) : (<FaBars size={20} style={{ color: 'white' }} />)}
                    </div>
                    <h1 style={{ display: 'inline-block' }}>Smart<span> Work</span></h1>
                </div>
                <ul className={this.state.clicked ? "navbarRight active" : "navbarRight"}>
                    <li>
                        <Link onClick={this.handleLinks} to='about' smooth={true} duration={500} offset={-80}>
                            <h4>About Me</h4>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={this.handleLinks} to='skills' smooth={true} duration={500} offset={-190}>
                            <h4>Skills</h4>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={this.handleLinks} to='projects' smooth={true} duration={500} offset={-80}>
                            <h4>Project</h4>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={this.handleLinks} to='exp' smooth={true} duration={500} offset={-80}>
                            <h4>Experience</h4>
                        </Link>
                    </li>

                    <li>
                        <Link onClick={this.handleLinks} to='contact' smooth={true} duration={500} offset={-80}>
                            <h4>Contact</h4>
                        </Link>
                    </li>

                    <li>
                        <Link className='hide' onClick={this.handleLinks} to='joinme' smooth={true} duration={500} offset={-80}>
                            <h4>Join with Me</h4>
                        </Link>
                    </li>

                </ul>

            </div>

        )

    }
}

export default Header;
