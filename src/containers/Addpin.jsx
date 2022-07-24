import React from "react"
import "../styles/Addpin.css"

export default function Addpin({ createboardpopupoption, boardoptiondisplay }) {
    const [totalboard, settotalboard] = React.useState([1])
    const [boarddisplay, setboarddisplay] = React.useState("none")
    const [allboard, setallboard] = React.useState([])
    const [allboardtext, setallboardtext] = React.useState('')
    function addtotalboard() {
        settotalboard([...totalboard,1])
    }
    function removetotalboard() {
        if(totalboard.length > 1) {
            totalboard.pop()
            settotalboard([...totalboard])
        }
    }
    function createboardpopup() {
        if (boarddisplay === "none") {
          setboarddisplay("block")
        } else {
          setboarddisplay("none")
        }
      }

    function addallboard() {
        if(allboardtext.length >= 2) {
            setallboard([...allboard,allboardtext])
            setallboardtext("")
            createboardpopup()
        }
    }

    return (
        <div className="addpins">
            <div className="left">
                <div className="left1">
                    <div className="plus">
                        <i className="fa-solid fa-plus" onClick={addtotalboard}></i>
                    </div>
                    {
                        totalboard.map(() => {
                            return (
                                <div className="addpincount">
                                    <i className="fa-solid fa-image"></i>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="addpin">
                <div className="board">
                    {
                        totalboard.map(() => {
                            return (
                                <div className="board1">
                                    <div className="head">
                                        <div className="ellipse">
                                            <i className="fa-solid fa-ellipsis" onClick={createboardpopupoption}></i>
                                            <div className="ellipsetags" style={{ display: `${boardoptiondisplay}` }} >
                                                <p onClick={removetotalboard}>Delete</p>
                                                <p onClick={addtotalboard}>Duplicate</p>
                                            </div>
                                        </div>
                                        <div className="btns">
                                            <div className="addboards">
                                                <button onClick={createboardpopup}>Add Boards <i className="fa-solid fa-angle-down"></i></button>
                                                <div className="boardtext" style={{ display: `${boarddisplay}` }}>
                                                    <input type="text" placeholder="Add " value={allboardtext} autoFocus="true" onChange={e => setallboardtext(e.target.value)}/>
                                                    <div className="texts">
                                                        <p>All Boards</p>
                                                        <div className="allboards">
                                                            {
                                                                allboard.map(e => {
                                                                    return <p>{e}</p>
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="createboard" onClick={addallboard} >
                                                        <i className="fa-solid fa-plus"></i>
                                                        <button>Create Board</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="savebtn">Save</button>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="left">
                                            <div className="left1">
                                                <div className="up">
                                                    <div className="up1">
                                                        <div className="mid">
                                                            <i className="fa-solid fa-arrow-up"></i>
                                                            <p>Drag and Drop or click on to upload</p>
                                                        </div>
                                                        <div className="down">
                                                            <p>Recomandation: High quality .jpg files smaller than 20MB</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="down">
                                                    <button>Save from Site</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="up">
                                                <input type="text" placeholder="Add Your Title" className="title" />
                                                <div className="user">
                                                    <i className="fa-solid fa-user"></i>
                                                    <p>User Name</p>
                                                </div>
                                                <input type="text" placeholder="Tell everone what you Pin is about" />
                                                <input type="text" placeholder="Explain what people can see in the Pin" />
                                            </div>
                                            <div className="down">
                                                <input type="text" placeholder="Add a description link" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}