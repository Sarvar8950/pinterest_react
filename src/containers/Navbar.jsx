import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

export default function Navbar({divdisplay,createpopup, setsearch}) {
    const [searchtext, setsearchtext] = React.useState("")

    function searchfun() {
        setsearch(searchtext)
    }

    return (
        <div className='nav'>
            <nav>
                <div className="left">
                    <Link to="/">
                        <i className="fa-brands fa-pinterest"></i>
                    </Link>
                    <Link to="/" className='tabname'>Home</Link>
                    <Link to="/today" className='tabname'>Today</Link>
                    <div className="create">
                        <p onClick={createpopup}>Create <i className="fa-solid fa-angle-down"></i></p>
                        <div className="createbox" id='createbox' style={{display:`${divdisplay}`}}>
                            <Link to="/ideapin">Create Idea Pin</Link>
                            <Link to="/addpin">Create Pin</Link>
                        </div>
                    </div>
                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass" onClick={searchfun} ></i>
                        <input type="text" placeholder='Search' onChange={e => setsearchtext(e.target.value)} />
                    </div>
                </div>
                <div className="right">
                    <i className="fa-solid fa-bell"></i>
                    <i className="fa-solid fa-comment-dots"></i>
                    <i className="fa-solid fa-user"></i>
                    <i className="fa-solid fa-angle-down"></i>
                </div>

            </nav>
        </div>
    )
}
