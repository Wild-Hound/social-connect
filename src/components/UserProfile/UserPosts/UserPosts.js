import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/Comment';
import { Link } from "react-router-dom";
import Tag from '../../PostsArea/PostMeta/tags/Tag';
import {likePost} from '../../PostsArea/PostMeta/PostMetaMech'

function UserPosts({id,likes,text,tags,image,owner,publishDate}) {
    return (
        <>
        {/* <ul key={id} className="userSinglePost">
                <img src={image} className="USPostImg"></img>
                <p className="USPostText">{text}</p>
                <h5 className="USPostTags">Tags: {tags.map((tag) => <li className="USPostTag">{tag}</li>)}</h5>
                <h4 className="USPostLikes">Likes:{likes}</h4>
        </ul> */}
        <Card className="post">
            {/* <Link to={`/profile/${owner.id}`}> */}
                <CardHeader
                    avatar={
                    <Avatar src={owner.picture}/>
                    }
                    title={`${owner.firstName} ${owner.lastName}`}
                    subheader={publishDate}
                    className="profileHeader"
                />
            {/* </Link> */}
            <CardMedia
                className="postImg"
                image={image}
                // onClick={(event) => singlePost(event)}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {text}
                </Typography>
                <div className="USPostTags">
                  {tags?.map((tg) => <Tag tag={tg} key={tg}></Tag>)}
                </div>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" > 
                {/* onClick={(event) => likePost(event,likeCount,setLikeCount)} */}
                <FavoriteIcon className="like" />
                {likes}
                </IconButton>
                <IconButton aria-label="share" >
                {/* onClick={(event) => sharePost(event)} */}
                <ShareIcon />
                </IconButton>
                <IconButton aria-label="comment">
                {/* onClick={(event) => commentPost(event)} */}
                <CommentIcon />
                </IconButton>
            </CardActions>
        </Card>
        </>
    )
}

export default UserPosts
