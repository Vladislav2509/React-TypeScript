import { useState, useEffect } from 'react';
import GridLoader from "react-spinners/GridLoader";
import './homePageStyle.css';



export function HomePage() {

  const [open, setOpen] = useState(false);

  // SPINNER
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 500)

  }, [])

  return (
    <div className='body'>
      <div className='containerHomePage'>

        <div className='blok_two'>
          {
            loading ?
              <div className='gridLoader'><GridLoader color={'#2231AA'} loading={loading} size={30} /></div>
              :
              <div className='contentHomePage'>
                <div className='textHomePage'>Make your Blog <span className="colortext">Online</span></div>
                <div className='loremWrapper'>
                  <div className='previewTextLorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>

                  {open && (<div className='allTextlorem' onClick={() => setOpen(!open)}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.
                  </div>)}
                </div>
                <button className='buttonOfAllTextlorem' onClick={() => setOpen(!open)}>Learn More</button>

              </div>
          }
        </div>
      </div>
    </div>
  )
};

  // export default MainPage;

