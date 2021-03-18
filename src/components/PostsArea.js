import React,{useEffect,useState} from 'react'
import PostMeta from './PostMeta/PostMeta';

function PostsArea() {
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        let head = new Headers();
        head.append("app-id","60525144e509b0bdc2488474")
        let url = "https://dummyapi.io/data/api/post"
        let req = new Request(url,{
        method:"GET",
        headers:head
        })
        fetch(req)
        .then(res => res.json())
        .then(data => setPosts(data.data))
    },[])

    return (
        <div>
            {posts?.map((post) =>{
                return(
                    <PostMeta post={post} key={post.id}></PostMeta>
                )
            })}
        </div>
    )
}

export default PostsArea
