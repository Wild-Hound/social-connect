import React from 'react'
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
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "50px auto"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


function PostMeta(props) {
    const classes = useStyles();

    const {id,image,likes,owner,publishDate,tags,text} = props.post
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar src={owner.picture} className={classes.avatar}>
                </Avatar>
                }
                title={`${owner.firstName} ${owner.lastName}`}
                subheader={publishDate}
            />
            <CardMedia
                className={classes.media}
                image={image}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                {likes}
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
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