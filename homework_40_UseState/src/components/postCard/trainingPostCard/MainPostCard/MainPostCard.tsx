import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment } from '../../../../store/slices/counterSlice';

import LittlePostCard from '../littlePostCard/LittlePostCard';
import BigPostCard from '../BigPostCard/BigPostCard';

import { GridLoader } from 'react-spinners';

import './MainPostCardStyle.css';



function MainPostCard({ dataPost, textPostOne, textPostTwo }:

    { dataPost: string; textPostOne: string; textPostTwo: string; }) {

    const count = useSelector((state: any) => state.toolkit.count)
    const dispatch = useDispatch()

    const littlePostCard = useSelector((state: any) => state.postLittle)

    const bigPostCard = useSelector((state: any) => state.postBig)

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 300)

    }, [])



    return (
        /* 1_postCard */
        <div className='containerMainPostCard'>
            {
                loading ?
                    <div className='gridLoader'><GridLoader color={'#2231AA'} loading={loading} size={30} /></div>
                    :

                    //  Block_1 
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

                                {
                                    littlePostCard.map((post: any) => {
                                        return (
                                            <LittlePostCard
                                                dataLittlePostCard={post.date}
                                                textLittlePostCard={post.text}
                                                key={post.id}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* Block_2 */}
                        <div className='allPosts'>
                            {
                                bigPostCard
                                    .map((cardBig: any) => {
                                        return (
                                            <BigPostCard
                                                titleBigPostCard={cardBig.title}
                                                dataBigPostCard={cardBig.date}
                                                textAstronauts={cardBig.text}
                                                key={cardBig.id}

                                            />
                                        )
                                    })
                            }

                            <div className='littlePostCard'>
                                {
                                    littlePostCard.map((post: any) => {
                                        return (
                                            <LittlePostCard
                                                dataLittlePostCard={post.date}
                                                textLittlePostCard={post.text}
                                                key={post.id}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* Block_3 */}
                        <div className='allPosts2'>
                            {
                                bigPostCard
                                    .map((cardBig: any) => {
                                        return (
                                            <BigPostCard
                                                titleBigPostCard={cardBig.title}
                                                dataBigPostCard={cardBig.date}
                                                textAstronauts={cardBig.text}
                                                key={cardBig.id}

                                            />
                                        )
                                    })
                            }

                            <div className='littlePostCard'>
                                {
                                    littlePostCard.map((post: any) => {
                                        return (
                                            <LittlePostCard
                                                dataLittlePostCard={post.date}
                                                textLittlePostCard={post.text}
                                                key={post.id}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
            }

        </div>

    )
}

export default MainPostCard;










{/* Old_Version */ }

{/* Block_2 */ }
{/* <div className='allPosts'>
                                <PostCardTwo dataPost3={`April 20, 2021`}
                                textAstronauts={`Astronauts prep for new solar arrays on nearly seven-hour spacewalk`} />

                                <PostCardTwo dataPost3={`April 20, 2021`}
                                textAstronauts={`Astronauts prep for new solar arrays on nearly seven-hour spacewalk`} /> 
                                

                                <div className='littlePostCard'>
                                    <LittlePostCard dataPost2={'April 20, 2021'}
                                    textPostThree={'Astronauts '} />

                                    <LittlePostCard dataPost2={'April 20, 2021'}
                                    textPostThree={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'} />
                                </div>
                            </div> */}

{/* Block_3 */ }
{/* <div className='allPosts2'>
                                <PostCardTwo dataPost3={`April 20, 2021`}
                                textAstronauts={`Astronauts prep for new solar arrays on nearly seven-hour spacewalk`} />

                                <PostCardTwo dataPost3={`April 20, 2021`}
                                textAstronauts={`Astronauts prep for new solar arrays on nearly seven-hour spacewalk`} /> 

                                <div className='littlePostCard'>
                                    <LittlePostCard dataPost2={'April 20, 2021'}
                                    textPostThree={'Astronauts '} />

                                    <LittlePostCard dataPost2={'April 20, 2021'}
                                    textPostThree={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'} />
                                </div>
                            </div> */}





