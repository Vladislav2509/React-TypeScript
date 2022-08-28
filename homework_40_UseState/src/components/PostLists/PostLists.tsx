import PostCard from '../postCard/MainPostCard/PostCard';
import PostCard2 from '../postCard/postCard2/postCard2';
import LittlePostCard from '../postCard/littlePostCard/LittlePostCard';

import astronaut1 from '../images/astronauts/astronaut1.png';
import astronaut2 from '../images/astronauts/astronaut2.png';
import astronaut3 from '../images/astronauts/astronaut3.png';
import '../PostLists/PostListsStyle.css';



export function PostLists() {
    
    return (
        /* 2_postLists */
        <div className="containerPostLists">

            <PostCard dataPost={'April 20, 2021'}
            textPostOne={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...'}
            textPostTwo={'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'} 
            />
            
        
            {/* <div className='PostListsAllPosts'>
                <PostCard2 dataPost3={`April 20, 2021`}    
                textAstronauts={`Astronauts prep for new solar arrays on nearly seven-hour spacewalk`}
                />

                <PostCard2 dataPost3={`April 20, 2021`}    
                textAstronauts={`Astronauts prep for new solar arrays on nearly seven-hour spacewalk`}
                />

                <div className='littlePostCard'>
                    <LittlePostCard dataPost2={'April 20, 2021'}
                    textPostThree={'Astronauts '}                     
                    ></LittlePostCard><img className='astronautFoto' src={astronaut3} alt="#"                
                    />

                    <LittlePostCard dataPost2={'April 20, 2021'} 
                    textPostThree={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}
                    
                    />
                </div>
                
            </div> */}

            {/* repeat */}
            {/* <div className='allPosts'>
                <PostCard2 dataPost3={`April 20, 2021`}    
                textAstronauts={`Astronauts prep for new solar arrays on nearly seven-hour spacewalk`}
                />

                <PostCard2 dataPost3={`April 20, 2021`}    
                textAstronauts={`Astronauts prep for new solar arrays on nearly seven-hour spacewalk`}
                />


                <div className='littlePostCard'>
                    <LittlePostCard dataPost2={'April 20, 2021'} 
                    textPostThree={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}
                    ></LittlePostCard><img className='astronautFoto' src={astronaut3} alt="#" 
                    />

                    <LittlePostCard dataPost2={'April 20, 2021'} 
                    textPostThree={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}
                    ></LittlePostCard><img className='astronautFoto' src={astronaut3} alt="#" 
                    />
                </div>
                
            </div> */}
        </div>
    )
}

export default PostLists;






