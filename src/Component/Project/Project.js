import React, { useState } from 'react'
import "./Project.css"

const Project = ({img,title,desc,link}) => {
    const [show,setShow]=useState(false);
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
        setShow(false)
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

  return (
        <div className='project' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} onClick={toggleModal}>
            {
                show?(
                    <div className='project__content'>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                ):(
                    <img src={img} alt=""/>
                )
            }
            {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{(title ==="React js")? "React js Projects" : "Hmtl & CSS Web Pages"}</h2>
            <p>
                {(title ==="React js")? <>
                <h2>Todo List:</h2>
                <p style={{marginBottom : '15px'}}>A minimalist Todo List using React js and Firebase</p>
                <a href='https://todo-list-853a5.web.app/' target='blank'>Check it out</a>
                <h4>GitHub Repository: <a href='https://github.com/umeshsaravanan/Todo_List' target='blank'>umeshsaravanan/Todo_List</a> </h4>
                <h2>Feedback:</h2>
                <p style={{marginBottom : '15px'}}>A ReactJS-based web app for students to provide feedback on faculty</p>
                <h4>GitHub Repository: <a href='https://github.com/umeshsaravanan/Feedback' target='blank'>umeshsaravanan/Feedback</a> </h4>
                </> : <>
                <h2>Revive:</h2>
                <p style={{marginBottom : '15px'}}>It's a simple web page build using HTML, CSS and JS </p>
                <a href='https://umeshsaravanan.github.io/Revive-CSE/' target='blank'>Click to see</a>
                <h4>GitHub Repository: <a href='https://github.com/umeshsaravanan/Revive-CSE' target='blank'>umeshsaravanan/Revive</a> </h4>
                </>}
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
        </div>
  )
}

export default Project
