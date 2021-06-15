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
import Tag from '../../PostsArea/PostMeta/tags/Tag';
import { useHistory } from "react-router-dom";

function PostMetaSection({image,likes,owner,publishDate,tags,text}) {

    const history = useHistory();
    function userProfile(e,profile){
        history.push(`/profile/${profile}`)
    }

    return (
        <Card className="post">
                <CardHeader
                    avatar={
                    <Avatar src={owner.picture}/>
                    }
                    title={`${owner.firstName} ${owner.lastName}`}
                    subheader={publishDate}
                    className="profileHeader"
                    onClick={(event) => userProfile(event, owner.id)}
                />
            <CardMedia
                className="postImg"
                image={image}
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
                <FavoriteIcon className="like" />
                {likes}
                </IconButton>
                <IconButton aria-label="share" >
                <ShareIcon />
                </IconButton>
                <IconButton aria-label="comment">
                <CommentIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default PostMetaSection
