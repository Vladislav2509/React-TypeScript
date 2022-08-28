import folder from '../../../components/images/folder.png';

type InputProps = {
    registration2: string,
    activate_account: string,
    gmail: string,
    check: string,
    home_button: string
}

export const RegistrationConfirmation = (props: InputProps) => {
    const {registration2, activate_account, gmail, check, home_button} = props;

    return (
        /* RegistrationConfirmation */
        <div className='container4'>
            <div className='content4'>
                <div className='registration_confirmation'>
                    <div><img className='folder2' src={folder} alt="folder" /></div>
                    

                    <div className='activate'>
                        <div className='registration2'>{registration2}</div>
                        <div className='activate_account'>{activate_account} <a className='gmail' href="#">{gmail}</a>
                            <br />{check}
                        </div>

                        {/* item_button-home */}
                        <button className='home_button'>{home_button}</button>
                    </div>   
                </div>
            </div>
        </div>   
    )
}

export default RegistrationConfirmation;


// BETTA
// function RegistrationConfirmation() {
//     return (
//         /* RegistrationConfirmation */
//         <div className='container4'>
//             <div className='content4'>
//                 <div className='registration_confirmation'>
//                     <div><img className='folder2' src={folder} alt="folder" /></div>
                    

//                     <div className='activate'>
//                         <div className='registration2'>Registration Confirmation</div>
//                         <div className='activate_account'>Please activate your account with the activation
//                             link in the email <a className='gmail' href="">test@gmail.com</a>
//                             <br /> Please, check your email
//                         </div>

//                         {/* item_button-home */}
//                         <button className='home_button'>Home</button>
//                     </div>   
//                 </div>
//             </div>
//         </div>   
//     )
// }

// export default RegistrationConfirmation;
