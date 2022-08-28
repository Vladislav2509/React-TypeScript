import { useSelector, useDispatch } from 'react-redux';
import { increment,  decrement} from '../../toolkitRedux/toolkitReducer';

import astronaut2 from '../../images/astronauts/astronaut2.png';

import './littlePostCard.css';




function LittlePostCard({dataPost2, textPostThree,}:
    {dataPost2: string, textPostThree: string, }) {
   
    const count = useSelector((state: any) => state.toolkit.count)
    const dispatch = useDispatch()

    return (
        /* 1_postCard */
        <div className='containerLittlePostCard'>
            {/* <div className='astronautFoto'><img src={astronaut} alt="" /></div> */}
            <img className='astronautFoto' src={astronaut2} alt="#" />
            
            <div className='dataPost2'>{dataPost2}</div>
            <div className='textPostThree'>{textPostThree}</div>
                        
            <div className='itemIcons2'>
                <div className='likes2'>
                    <div className='likeUp2'></div>
                    <div className='likeDown2'></div>
                </div>

                <div className='bookmarkHorizontal2'>
                    <div onClick={() => dispatch(increment())} className='bookmark2'></div>
                    <div className='horizontal2'></div>
                </div>
            </div>    
        </div>
    )
}

export default LittlePostCard;