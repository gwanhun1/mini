import React, { useState,delid } from "react";

const Comment = (props) => {

  return (
    <div className="commentBox">
      <div className="commentId">Dog{props.idnum}</div>
      <div className="commentComment">{props.Cm}</div>
      <div className="commentHeartBox">
        <img alt="heart" className="commentHeart" src="/images/heart.png" />
      </div>
      <div id={props.idnum}className="deleteKey" onClick={(event)=>{props.delid(event)}}>
        삭제
      </div>
    </div>
  );
};
export default Comment;
