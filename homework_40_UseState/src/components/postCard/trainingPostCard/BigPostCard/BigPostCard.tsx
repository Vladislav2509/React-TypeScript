import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../../../store/slices/counterSlice';
import './postCardTwoStyle.css';


function BigPostCard({ titleBigPostCard, dataBigPostCard, textAstronauts }:
    { titleBigPostCard: string; dataBigPostCard: number; textAstronauts: string }) {

    const count = useSelector((state: any) => state.toolkit.count)
    localStorage.setItem("bookmarkHorizontal3", "bookmark3")
    const dispatch = useDispatch()
    return (
        /* 1_postCard2 */
        <div className='contentBigPostCard'>
            <div className='AstronautBackgroundBigPostCard'></div>
            <h3>{titleBigPostCard}</h3>
            <div className='dataBigPostCard'>{dataBigPostCard}</div>
            <div className='textAstronautsBigPostCard'>{textAstronauts}</div>

            <div className='itemIconsBigPostCard'>
                <div className='likesBigPostCard'>
                    <div className='likeUpBigPostCard'></div>
                    <div className='likeDownBigPostCard'></div>
                </div>

                <div className='bookmarkHorizontalBigPostCard'>
                    <div onClick={() => dispatch(increment())} className='bookmarkBigPostCard'></div>
                    <div className='horizontalBigPostCard'></div>
                </div>
            </div>
        </div>
    )
}

export default BigPostCard;



