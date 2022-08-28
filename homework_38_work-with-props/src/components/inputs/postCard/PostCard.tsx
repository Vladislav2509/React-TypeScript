import mountains from '../../../components/images/mountains.jpg';

// import PostLists from '../PostLists2/PostLists';


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

function PostCard({whatIs, textLorem, data, hello}:
     {whatIs: string; textLorem: string; data: string; hello?: string}) {
    return (
        /* 1_postCard */
        <div className='container1'>
            <div className='content1'>
                <div className='card1'>
                    <div className='background'><img src={mountains} alt="#" /></div>
                    <div className='whatIs'>{whatIs}</div>
                    <div className='textLorem'>{textLorem}</div>
                    <div className='data'>{data}</div>
                    {hello ? <div>{hello}</div> : null}
                </div>
            </div> 
        </div>
    )
}

export default PostCard;




