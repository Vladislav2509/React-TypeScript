import folder from '../../images/folder.png';

function success() {
    return (
        /* Succsess */
        <div className="container2">
            <div className='content2'>

                <div className='block'>
                    <div><img className='folder2' src={folder} alt="folder" /></div>

                    <div className='itemsSuccsess'>
                        <div className='SuccsessStyle'>
                            <p>Succsess</p>
                        </div>      
                    </div>

                    <div className='itemEmail'>
                        <p className='emailConfirmed'>Email confirmed. Your registration is now completed</p>
                    </div>

                    

                    {/* item_button-login */}
                    <div className='itemButton'>
                        <button className='login_button2'>Login</button>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default success;