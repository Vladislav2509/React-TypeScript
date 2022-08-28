import * as React from 'react';
import folder from '../../images/folder.png';



function LoginRegistration() {
    return (
        /* login | registration */
        <div className="container1">
            <div className='content1'>

                <div className='item_login'>
                    <div><img className='folder' src={folder} alt="folder" /></div>

                    <div className='items'>
                        <div className='login_and_registration'>
                            <a className='login' href="">Login</a> | <a className='registration' href="">Registration</a> 
                        </div>   
                    </div>

                    {/* item_email_and_password */}
                    <div className='items2'>
                        <div className='email'>
                            <div>
                            <label>Email</label>
                            </div>
                            <input/>
                        </div>  

                        <div className='password'>
                            <div>
                                <label>Password</label>
                            </div>
                            <input/>
                        </div> 

                        {/* item_button-login */}
                        <button className='login_button'>Login</button>

                        {/* item_forgot-password */}
                        <div className='forgot'>Forgot your password? <a className='reset' href="">Reset password</a></div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default LoginRegistration;