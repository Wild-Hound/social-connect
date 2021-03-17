import React from 'react'
import "./postMeta.css"

function PostMeta(props) {
    const {id,image,likes,owner,publishDate,tags,text} = props.post
    return (
        <div>
            <div>
                <p className="publisherName">Published by: {owner.firstName} {owner.lastName}</p>
                <p className="publishDate">At: {publishDate}</p>
                </div>
            <img src={image} className="postImg"/>
            <h4 className="postText">{text}</h4>
            <ul className="tagsList">
                <li>Tags:</li>
                {tags?.map((tag) =>{
                    return(
                        <li className="tag">{tag},</li>
                    )
                })}
            </ul>
            <p className="likes">Likes: {likes}</p>
        </div>
    )
}

export default PostMeta
