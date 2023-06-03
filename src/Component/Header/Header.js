import React, { Component } from 'react'
import { Link } from 'react-scroll'
import "./Header.css"




class Header extends Component {
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
  return (
    <div className="header">
        
        <div className="header__left">
            <div id='mobile' onClick={this.handleClick}>
              <i id='bar' className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
            </div>
            <h1>Smart<span> Work</span></h1>
        </div>
        <div id="header__right" className={this.state.clicked?"#header__right active": "#header__right"}>
            <Link to='about' smooth={true} duration={500} className="active" offset={-80}>
                <h4>About Me</h4>
            </Link>
            <Link to='skills' smooth={true} duration={500} offset={-190}>
                <h4>Skills</h4>
            </Link>
            <Link to='projects' smooth={true} duration={500} offset={-80}>
                <h4>Project</h4>
            </Link>
            <Link to='exp' smooth={true} duration={500} offset={-80}>
                <h4>Experience</h4>
            </Link>
           
            <Link to='contact' smooth={true} duration={500} offset={-80}>
                <h4>Contact</h4>
            </Link>
            
            <Link to='joinme' smooth={true} duration={500} offset={-80}>
                <h4>Join with Me</h4>
            </Link>

        </div>
      
    </div>
   
  )
  
}
}

export default Header;
