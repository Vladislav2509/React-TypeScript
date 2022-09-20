import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,  decrement} from '../../../../store/slices/counterSlice';
import { CardProps } from "./types";
import iconThumbsUp from "../../../../images/IconsFetch/iconThumbsUp.svg";
import iconThumbsDown from "../../../../images/IconsFetch/iconThumbsDown.svg";
import iconBookmark from "../../../../images/IconsFetch/bookmark.svg";

import {
  H3,
} from "./styled";

import './cardsStyle.css';

export const Cards = ({
  id,
  image,
  text,
  date,
  title,
}: CardProps) => {
  const like = useSelector((state: any) => state.toolkit.count)
  const dislike = useSelector((state: any) => state.toolkit.count)
  const dispatch = useDispatch();

  return (
    <div className="cardsWrapper">
      <img className="cardsImg" src={image}></img>
      <H3 to={`posts/${id}`}>{title}</H3>
      <div className="cardText">{text}</div>
      <div className="cardDate">{date}</div>
      <div className="buttonWrapper">
        <div className="like_dislike">
          <div className="cardLike"
            onClick={() => {
              dispatch(increment());
            }}
          >
            <div>{like}</div>
            <img src={iconThumbsUp} alt="Like"></img>
          </div>
          <div className="cardDislike"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            <div>{dislike}</div>
            <img src={iconThumbsDown} alt="Dislike"></img>
          </div>
        </div>
        <div className="cardBookmark" onClick={() => dispatch(increment())} >
          <img src={iconBookmark} alt="Bookmark"></img>
        </div>
      </div>
    </div>
  );
};
