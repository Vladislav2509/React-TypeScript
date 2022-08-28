import { useSelector, useDispatch } from 'react-redux';
import { increment,  decrement} from '../../toolkitRedux/toolkitReducer';


import LittlePostCard from '../littlePostCard/LittlePostCard';

import astronaut1 from '../../images/astronauts/astronaut1.png';
import astronaut2 from '../../images/astronauts/astronaut2.png';
import './PostCardStyle.css';
import { useState, useEffect } from 'react';
import { GridLoader } from 'react-spinners';
import PostCard2 from '../postCard2/postCard2';




// import PostLists from '../../PostLists/PostLists';
// function PostCard() {
//     return (
//         /* 1_postCard */
//         <div className='container1'>
//             <div className='content1'>
//                 <PostLists />
//             </div> 
//         </div>
//     )
// }

// export default PostCard;




function PostCard({dataPost, textPostOne, textPostTwo}: 
    
    {dataPost: string; textPostOne: string; textPostTwo: string;}) {

    const count = useSelector((state: any) => state.toolkit.count)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
        useEffect(() => {
        setLoading(true)
        setTimeout(() => {
        setLoading(false)
    }, 500)

  }, [])


    return (
        /* 1_postCard */ 
        <div className='containerMainPostCard'>
            {
              loading ?
              <div className='gridLoader'><GridLoader color={'#2231AA'} loading={loading} size={30} /></div>
              : 
                    <>
                    <div className='contentMainPostCard'>

                        <h1 className='h1Blog'>Blog{count}</h1>

                        <div className='wrapperMainPostCard'>

                            <div className='contentTextAndImage'>
                                <div className='contentTextAstronauts'>
                                    <div className='dataMainPost'>{dataPost}</div>
                                    <div className='textPostOne'>{textPostOne}</div>
                                    <div className='textPostTwo'>{textPostTwo}</div>
                                </div>

                                <div className='postCardSpaceImage'>
                                    <div className='spaceImage'></div>
                                </div>
                            </div>

                            <div className='itemIcons'>
                                <div className='likes'>
                                    <div className='likeUp'></div>
                                    <div className='likeDown'></div>
                                </div>

                                <div className='bookmarkHorizontal'>
                                    <div onClick={() => dispatch(increment())} className='bookmark'></div>
                                    <div className='horizontal'></div>
                                </div>
                            </div>
                        </div>



                        <div className='twoLittlePostCards'>

                            <LittlePostCard dataPost2={'April 20, 2021'}
                                textPostThree={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'} />

                            <LittlePostCard dataPost2={'April 20, 2021'}
                                textPostThree={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'} />
                        </div>
                    </div>

                        <div className='allPosts'>
                            <PostCard2 dataPost3={`April 20, 2021`}
                                textAstronauts={`Astronauts prep for new solar arrays on nearly seven-hour spacewalk`} />

                            <PostCard2 dataPost3={`April 20, 2021`}
                                textAstronauts={`Astronauts prep for new solar arrays on nearly seven-hour spacewalk`} />

                            <div className='littlePostCard'>
                                <LittlePostCard dataPost2={'April 20, 2021'}
                                    textPostThree={'Astronauts '} />

                                <LittlePostCard dataPost2={'April 20, 2021'}
                                    textPostThree={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'} />
                            </div>
                        </div>

                        <div className='allPosts2'>
                            <PostCard2 dataPost3={`April 20, 2021`}
                                textAstronauts={`Astronauts prep for new solar arrays on nearly seven-hour spacewalk`} />

                            <PostCard2 dataPost3={`April 20, 2021`}
                                textAstronauts={`Astronauts prep for new solar arrays on nearly seven-hour spacewalk`} />

                            <div className='littlePostCard'>
                                <LittlePostCard dataPost2={'April 20, 2021'}
                                    textPostThree={'Astronauts '} />

                                <LittlePostCard dataPost2={'April 20, 2021'}
                                    textPostThree={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'} />
                            </div>
                        </div>
                        </>
            }
        </div>
    
        
    )
}

export default PostCard;







