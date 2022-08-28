import '../mainPage/mainPageStyle.css';

import { useState, useEffect } from 'react';
import GridLoader from "react-spinners/GridLoader";




export function MainPage()   {

  const [loading, setLoading] = useState(false)
    useEffect(() => {
    setLoading(true)
    setTimeout(() => {
    setLoading(false)

    }, 500)

  }, [])

    return (
      <div className='body'>
        <div className='containerMainPage'>
          <div className='blok_two'>
            {
              loading ?
              <div className='gridLoader'><GridLoader color={'#2231AA'} loading={loading} size={30} /></div>
              :
              <div className='content1'>
                <div className='text'>Make your Blog <span className="colortext">Online</span></div>
                <div className='lorem'>
                  <div className='textlorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                  <div className='allTextlorem'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
                  Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                  Aldus PageMaker including versions of Lorem Ipsum.
                  <p className='closeLorem'>Close</p>
                  </div>
                </div>
                <button className='button'>Learn More</button>
              </div>
            }
          </div>
        </div>
      </div>
    )
  };
  
  // export default MainPage;