import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Pagination } from "@mui/material";

import { getPosts } from "../../../../api/fetchPosts";
import { useAppDispatch } from "../../../../store/index";

import { Cards } from "../Cards/Cards";

import GridLoader from "react-spinners/GridLoader";

import './PostCardFetchStyle.css';



export function PostCardFetch({ post }: { post: any }) {

  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const posts = useSelector((state: any) => state.posts.postData);

  useEffect(() => {
    dispatch(getPosts())
  }, []);


  // SEARCH
  const [searchParams] = useSearchParams();
  const postQuery = searchParams.get('post') || '';

  const filteredPosts = posts.filter(
    (post: any) => post.title.toLowerCase().includes(postQuery)
  );


  // Pagination
  const POSTS_COUNT_PAGE = 8;
  const pagesCount = Math.floor(filteredPosts.length / POSTS_COUNT_PAGE);
  const start = (page - 1) * POSTS_COUNT_PAGE;
  const end = start + POSTS_COUNT_PAGE;
  const postsOnPage = filteredPosts.slice(start, end);


  // SPINER
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 500)

  }, [])


  return (
    <div className="containerPostCardFetch">
      <div>
        {
          loading ?
            <div className='gridLoader'><GridLoader color={'#2231AA'} loading={loading} size={30} /></div>
            :
            <>
              <div className="blogH1">
                <h1>Blog</h1>
              </div>

              <div className="wrapperPostFetch">

                {postsOnPage &&
                  postsOnPage
                    .map((result: any): JSX.Element => {
                      return (
                        <Cards
                          key={result.id}
                          id={result.id.toString()}
                          image={result.image}
                          text={result.text}
                          date={result.date}
                          title={result.title} />
                      );
                    })
                }


              </div>

              <div className="pagination">
                {!!pagesCount && (
                  <Pagination
                    count={pagesCount}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                  />
                )
                }
              </div>
            </>
        }
      </div>
    </div>
  );
};
