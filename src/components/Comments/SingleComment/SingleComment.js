import React from "react";
import "./SingleComment.scss";
import { Link } from "react-router-dom";

function SingleComment(props) {
  const { id, owner, message, publishDate } = props.info;
  const date = new Date(publishDate);

  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  function formateDate(date) {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const strDate = day + "/" + month + "/" + year;
    return strDate;
  }

  console.log(date.getDay());

  return (
    <div key={id} className="SGcommentWrapper">
      <Link to={`/profile/${owner.id}`}>
        <div className="SGmeta">
          <img src={owner.picture} />
          <div>
            {owner.firstName} {owner.lastName}
          </div>
        </div>
      </Link>
      <p className="SGemail">Email: {owner.email}</p>
      <p className="SGdate">
        Date: {formateDate(date)} Time: {formatAMPM(date)}
      </p>
      <p className="SGmessage">{message}</p>
    </div>
  );
}

export default SingleComment;
