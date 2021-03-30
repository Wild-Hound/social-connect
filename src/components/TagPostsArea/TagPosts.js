import React, {useEffect,useState} from 'react'
import {useParams} from "react-router-dom";
import SingleTagPost from './SingleTagPost/SingleTagPost';




function TagPosts() {

    const [tagPosts,setTagPosts] = useState({posts:[],total:''})

    const {id} = useParams()

    useEffect(() =>{
        let url = `https://dummyapi.io/data/api/tag/${id}/post`
        fetch(url,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'app-id':'60525144e509b0bdc2488474'
            }
        })
        .then(res => res.json())
        .then(data => {
            setTagPosts({posts:data.data, total:data.total})
        })
    },[id])
    return (
        <>
        <div>
            <h2>Showing Results For: {id}</h2>
            <h4>Results Found: {tagPosts.total}</h4>
        </div>
        {tagPosts.posts.map(({owner,publishDate,image,text,tags,likes}) => {
            return(
                <SingleTagPost owner={owner} publishDate={publishDate} image={image} text={text} tags={tags} likes={likes}></SingleTagPost>
            )
        })}
        </>
    )
}

export default TagPosts
