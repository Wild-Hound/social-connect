import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import PostMetaSection from './PostMetaSection/PostMetaSection'

function SinglePost() {
    const {id} = useParams()
    const [singlePost, setSinglePost] = useState({postInfo:'',commentInfo:''})
    const posturl = `https://dummyapi.io/data/api/post/${id}`
    const commenturl = `https://dummyapi.io/data/api/post/${id}/comment`

    useEffect(async ()=>{

        let fetchedPostInfo
        let fetchedCommentInfo

        await fetch(posturl,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'app-id':'60525144e509b0bdc2488474'
            }
        })
        .then(res => res.json())
        .then(data => {
            fetchedPostInfo = data
        })

        await fetch(commenturl,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'app-id':'60525144e509b0bdc2488474'
            }
        })
        .then(res => res.json())
        .then(data => {
            fetchedCommentInfo = data
        })

        setSinglePost({postInfo:fetchedPostInfo, commentInfo:fetchedCommentInfo})

    },[])
    let {image,likes,owner,publishDate,tags,text} = singlePost.postInfo
    return (
        <>
        {singlePost.postInfo ? <PostMetaSection 
        image={image} 
        likes={likes} 
        owner={owner} 
        publishDate={publishDate} 
        tags={tags} 
        text={text} 
        ></PostMetaSection> : null}
        </>
    )
}

export default SinglePost
