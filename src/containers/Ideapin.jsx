import React from 'react'
import "../styles/Ideapin.css"

export default function Ideapin({ ideapinpopup, ideapindisplay }) {
    return (
        <div className='ideapins'>
            <div className="ideapin">
                <h1>Your Idea Pin Drafts</h1>
                <p>Start afresh with a new Idea Pin or keep designing a <br /> recent draft</p>
                <button onClick={ideapinpopup}>Creat new</button>
                <br />
                <br />
                <p className='yourdrafts'>Your Drafts</p>
            </div>
            <div className="ideapinbox" style={{display:`${ideapindisplay}`}}>
                <div className="ideapinbox1">
                    <div className="head">
                        <i className="fa-solid fa-xmark" onClick={ideapinpopup}></i>
                        <h1>Add up to 20 images or videos</h1>
                        <i className="fa-solid fa-circle-question"></i>
                    </div>
                    <div className="box">
                        <div className="up">
                            <div className="up1">
                                <div className="mid">
                                    <i className="fa-solid fa-arrow-up"></i>
                                    <p>Drag and Drop or click to upload images and videos</p>
                                </div>
                                <div className="down">
                                    <p>Recomandation: High quality .jpg files smaller than 20MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
