import React, {useState,useEffect} from 'react'
import "./postMeta.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/Comment';
import { commentPost, likePost, profileClick, sharePost, singlePost } from './PostMetaMech';
import Tag from './tags/Tag';


function PostMeta(props) {
  
    const {id,image,likes,owner,publishDate,tags,text} = props.post
    const [likeCount, setLikeCount] = useState(0)

    useEffect(() => {
        setLikeCount(likes)
    }, [])
    return (
        <Card className="post">
            <CardHeader
                avatar={
                <Avatar src={owner.picture}>
                </Avatar>
                }
                title={`${owner.firstName} ${owner.lastName}`}
                subheader={publishDate}
                className="profileHeader"
                onClick={(event) => profileClick(event)}
            />
            <CardMedia
                className="postImg"
                image={image}
                onClick={(event) => singlePost(event)}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {text}
                </Typography>
                <div className="tagsArea">
                  {tags?.map((tg) => <Tag tag={tg}></Tag>)}
                </div>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={(event) => likePost(event,likeCount,setLikeCount)}>
                <FavoriteIcon className="like" />
                {likeCount}
                </IconButton>
                <IconButton aria-label="share" onClick={(event) => sharePost(event)}>
                <ShareIcon />
                </IconButton>
                <IconButton aria-label="comment" onClick={(event) => commentPost(event)}>
                <CommentIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default PostMeta


{/* <div>
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
        </div> */}