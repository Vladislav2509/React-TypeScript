
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import './addPostStyle.css'

export function AddPost() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
    setLoading(true)
    setTimeout(() => {
    setLoading(false)

    }, 300)

  }, [])
    return (
        /* AddPost */
            <div className='containerAddPost'>
            {
              loading ?
              <div className='gridLoader'><GridLoader color={'#2231AA'} loading={loading} size={30} /></div>
              :
                
                <div className='contentAddPost'>
                    <Link className='linkSidebar' to="/backToHome">Back to Home</Link> 
                <h1>Add Post</h1>
                    <div className='titleuURLWrapper'>
                        <div className='titleuURL'>
                            <label htmlFor="title">Title</label>
                            <input className='inputTitle' type="text" />
                        </div>

                        <div className='titleuURL'>
                            <label htmlFor="title">URL</label>
                            <input className='inputTitle' type="text" />
                        </div>
                    </div>
                </div>
}
            </div>                   
    )
}

export default AddPost;