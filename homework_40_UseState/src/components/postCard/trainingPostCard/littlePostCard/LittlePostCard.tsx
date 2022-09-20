import { useSelector, useDispatch } from 'react-redux';
import { increment,  decrement} from '../../../../store/slices/counterSlice';

import astronaut2 from '../../../../images/astronauts/astronaut2.png';

import './littlePostCard.css';




function LittlePostCard({dataLittlePostCard, textLittlePostCard}:
    {dataLittlePostCard: string, textLittlePostCard: string;}) {
   
    const count = useSelector((state: any) => state.toolkit.count)
    const dispatch = useDispatch()

    return (
        /* 1_postCard */
        <div className='containerLittlePostCard'>
            {/* <div className='astronautFoto'><img src={astronaut2} alt="" /></div> */}
            <img className='astronautFotoLittlePostCard' src={astronaut2} alt="#" />
            <h3>Card Two</h3>
            <div className='dataPostLittlePostCard'>{dataLittlePostCard}</div>
            <div className='textPostLittlePostCard'>{textLittlePostCard}</div>
                        
            <div className='itemIconsLittlePostCard'>
                <div className='likesLittlePostCard'>
                    <div className='likeUpLittlePostCard'></div>
                    <div className='likeDownLittlePostCard'></div>
                </div>

                <div className='bookmarkHorizontalLittlePostCard'>
                    <div onClick={() => dispatch(increment())} className='bookmarkLittlePostCard'></div>
                    <div className='horizontalLittlePostCard'></div>
                </div>
            </div>    
        </div>
    )
}

export default LittlePostCard;