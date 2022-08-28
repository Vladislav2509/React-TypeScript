import * as React from 'react';
import folder from '../../../components/images/folder.png';



type InputProps = {
    login: string,
    registration: string,
    email: string,
    password: string,
    forgot: string,
    reset: string,
    
}

export const LoginRegistration = (props: InputProps ) => {
    const { login, registration, email, password, forgot, reset,} = props;

    return (
        /* LoginRegistration */
        <div className="container3">
            <div className='content3'>
            <div className='item_login'>
                    <div><img className='folder' src={folder} alt="folder" /></div>

                    <div className='items'>
                        <div className='login_and_registration'>
                            <a className='login' href="">{login}</a> | <a className='registration' href="">{registration}</a> 
                        </div>   
                    </div>

                    {/* item_email_and_password */}
                    <div className='items2'>
                        <div className='email'>
                            <div>
                                {email}
                            </div>
                            <input/>
                        </div> 

                        <div className='password'>
                            <div>
                                {password}
                            </div>
                            <input/>
                        </div> 

                        {/* item_button-login */}
                        <button className='login_button'>{login}</button>

                        {/* item_forgot-password */}
                        <div className='forgot'>{forgot} <a className='reset' href="">{reset}</a></div>
                        
                    </div>  
                </div>
                </div>
        </div>
    )
}

export default LoginRegistration;

