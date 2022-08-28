import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../toolkitRedux/toolkitReducer';
import '../postCard2/postCardStyle2.css';


function PostCard2({textAstronauts, dataPost3}: 
    {textAstronauts: string; dataPost3: string;}) {

        const count = useSelector((state: any) => state.toolkit.count)
        localStorage.setItem("bookmarkHorizontal3", "bookmark3")
        const dispatch = useDispatch()
    return (
        /* 1_postCard2 */
            <div className='contentPostCard2'>
                <div className='AstronautBackground'></div>
                <div className='dataPost3'>{dataPost3}</div>
                <div className='textAstronauts'>{textAstronauts}</div>

                <div className='itemIcons3'>
                    <div className='likes3'>
                        <div className='likeUp3'></div>
                        <div className='likeDown3'></div>
                    </div>

                    <div className='bookmarkHorizontal3'>
                        <div onClick={() => dispatch(increment())} className='bookmark3'></div>
                        <div className='horizontal3'></div>
                    </div>
                </div> 
            </div>                   
    )
}

export default PostCard2;



