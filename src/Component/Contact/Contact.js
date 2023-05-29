import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import {Facebook,Instagram,LinkedIn} from "@mui/icons-material"
import "./Contact.css"

const Contact = () => {
  return (
   <Element className='contact' id='conatact'>
    <h1>Contact</h1>
    <div className='contact__container'>
        <p>
            Email : <span><a href="https://mail.google.com/mail/u/0/?tab=rm#inbox">umeshsaravanan13@gmail.com</a></span>
        </p>
        <p>
           
            Github Username : <span><a href="https://github.com/umeshsaravanan?tab=repositories">umesh@GitHub</a></span>
            
        </p>
        <div className='contact__icons'>
            <a href='https://www.linkedin.com/in/umesh-s2003/'>
                <IconButton>
                    <LinkedIn/>
                </IconButton>
            </a>
            <a href='https://www.facebook.com/umesh.krishna.7315'>
                <IconButton>
                    <Facebook/>
                </IconButton>
            </a>
            <a href='https://www.instagram.com/umesh_saravanan/'>
                <IconButton>
                    <Instagram/>
                </IconButton>
            </a>
        </div>
    </div>
   </Element>
  )
}

export default Contact
