import PostCard from '../MainPostCard/MainPostCard';

import './PostListsStyle.css';



export function PostLists() {

    return (
        <div className="containerPostLists">
            <PostCard dataPost={'April 20, 2021'}
                textPostOne={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...'}
                textPostTwo={'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'}
            />
        </div>
    )
}

export default PostLists;






