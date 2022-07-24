import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Today.css"

export default function Today() {
    const date = new Date();
    // console.log(date.toLocaleDateString())
  return (
    <div className='today'>
        <h3>{date.toDateString()}</h3>
        <h1>Today's Inspiration 😎</h1>
        <div className="boxes">
            <div className="box">
                <img src="./images/home.jpg" alt="pins" />
                <div className="details">
                    <p>Build a skill</p>
                    <h2>Learn about Farming</h2>
                </div>
            </div>
            <div className="box">
                <img src="./images/home.jpg" alt="pins" />
                <div className="details">
                    <p>Build a skill</p>
                    <h2>Learn about Farming</h2>
                </div>
            </div>
            <div className="box">
                <img src="./images/home.jpg" alt="pins" />
                <div className="details">
                    <p>Build a skill</p>
                    <h2>Learn about Farming</h2>
                </div>
            </div>
            <div className="box">
                <img src="./images/home.jpg" alt="pins" />
                <div className="details">
                    <p>Build a skill</p>
                    <h2>Learn about Farming</h2>
                </div>
            </div>
        </div>
        <div className="down">
        <i className="fa-solid fa-circle-check"></i>
        <p>That's all for today!</p>
        <h2>Come back tomorrow for more inspiration</h2>
        <button>
            <Link to="/">Go to Homepage</Link>
        </button>
        </div>
    </div>
  )
}
