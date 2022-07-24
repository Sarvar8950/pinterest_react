import React from 'react'
import "../styles/Home.css"

export default function Home({ search }) {
  const [imagelinks, setimagelinks] = React.useState([])
  const [page, setpage] = React.useState(1)
  const [searchdata, setsearchdata] = React.useState(search)
  var size = ["small", "medium", "large"]

  // console.log(index)
  // function showextra() {

  // }

  React.useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos/?page=${page}&query=${search}&client_id=kD2vwv4fI9MMj--P8qUn2Z4gOZTxfwMrzr8KhpCOA-8`)
      .then(res => res.json())
      .then(res => {
        if (search !== searchdata) {
          setsearchdata(search)
          setimagelinks(res.results)
        } else {
          setimagelinks([...imagelinks, ...res.results])
        }
      })
  }, [page,search])

  window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight + 5 >=
      document.documentElement.scrollHeight) {
      if (page <= 15) {
        setpage(page + 1);
      }
    }
  })

  return (
    <div className='home'>
      <div className="container">
        {
          imagelinks.map(ele => {
            var index = Math.round((Math.random() * 10) % 3)
            return <div className={`pin ${size[index]}`} key={ele.id}>
              <img src={ele.urls.raw} alt="home" />
              <div className="extra">
                <div className="up">
                  <button>save</button>
                </div>
                <div className="down">
                  <i className="fa-solid fa-arrow-up-from-bracket"></i>
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>

          })
        }
      </div>
      <div className="seenall">
        <i className="fa-solid fa-circle-check"></i>
        <p>You have seen all</p>
      </div>
    </div>
  )
}
