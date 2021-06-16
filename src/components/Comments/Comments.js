import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import SingleComment from "./SingleComment/SingleComment";
import PostMeta from "../PostsArea/PostMeta/PostMeta";
import "./Comments.scss";

function Comments() {
  const { id } = useParams();
  const [commentsInfo, setCommentsInfo] = useState([]);
  const [postInfo, setPostInfo] = useState({});

  //fetching data from API
  useEffect(() => {
    fetch(`https://dummyapi.io/data/api/post/${id}/comment`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "app-id": "60525144e509b0bdc2488474",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCommentsInfo([...data.data]);
        console.log(data.data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://dummyapi.io/data/api/post/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "app-id": "60525144e509b0bdc2488474",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPostInfo(data);
      });
  }, []);

  useEffect(() => {}, []);

  return (
    <div>
      <PostMeta post={postInfo} />
      <div className="commentsWrapper">
        {commentsInfo.length ? (
          commentsInfo?.map((info) => {
            return <SingleComment info={info} />;
          })
        ) : (
          <h1>No Comments For This Post</h1>
        )}
      </div>
    </div>
  );
}

export default Comments;
