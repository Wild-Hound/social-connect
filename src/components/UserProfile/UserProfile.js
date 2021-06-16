import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserPosts from "./UserPosts/UserPosts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faGlobeAmericas,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import "./userProfile.scss";

function UserProfile() {
  let { id } = useParams();
  const [userData, setUserData] = useState({});
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // loading users data
    let url = `https://dummyapi.io/data/api/user/${id}`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "app-id": "60525144e509b0bdc2488474",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });

    // loading users posts
    let urlposts = `https://dummyapi.io/data/api/user/${id}/post/`;

    fetch(urlposts, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "app-id": "60525144e509b0bdc2488474",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserPosts(data);
      });
  }, []);

  return (
    <>
      <div className="profileArea">
        <div className="profileMeta">
          <img src={userData?.picture} className="profileImg"></img>
          <h1>
            {userData?.firstName} {userData?.lastName}
          </h1>
          <h4>
            <FontAwesomeIcon icon={faEnvelope} /> {userData?.email}
          </h4>
          <h4>
            <FontAwesomeIcon icon={faPhoneAlt} /> {userData?.phone}
          </h4>
          <h4>
            <FontAwesomeIcon icon={faGlobeAmericas} />{" "}
            {userData?.location?.city}, {userData?.location?.country}
          </h4>
          <h4>
            <FontAwesomeIcon icon={faVenusMars} /> {userData?.gender}
          </h4>
        </div>
        <div className="UserPostArea">
          {userPosts?.data?.map(
            ({ id, likes, text, tags, image, owner, publishDate }) => {
              return (
                <UserPosts
                  id={id}
                  likes={likes}
                  text={text}
                  tags={tags}
                  image={image}
                  owner={owner}
                  publishDate={publishDate}
                ></UserPosts>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
