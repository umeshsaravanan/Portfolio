import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material"
import "./Contact.css"
import { FaEnvelope, FaGithub } from 'react-icons/fa'

const Contact = () => {
    return (
        <Element className='contact' id='contact'>
            <div className='contact__container'>
                <div className='contact__icons'>
                    <a href='https://mail.google.com/mail/u/0/?tab=rm#inbox'>
                        <IconButton>
                            <FaEnvelope />
                        </IconButton>
                    </a>
                    <a href='https://github.com/umeshsaravanan?tab=repositories'>
                        <IconButton>
                            <FaGithub />
                        </IconButton>
                    </a>
                    <a href='https://www.linkedin.com/in/umesh-s2003/'>
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </a>
                    <a href='https://www.facebook.com/umesh.krishna.7315'>
                        <IconButton>
                            <Facebook />
                        </IconButton>
                    </a>
                    <a href='https://www.instagram.com/umesh_saravanan/'>
                        <IconButton>
                            <Instagram />
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element>
    )
}

export default Contact
