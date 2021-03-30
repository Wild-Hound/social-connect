import React from 'react'
import Chip from '@material-ui/core/Chip';
import {useHistory} from "react-router-dom"


function Tag(props) {

    const history = useHistory()

    function TagAction(e, tag) {
        console.log(tag)
        history.push(`/tag/${tag}`)
    }

    return (
        <Chip 
        variant="outlined" 
        size="small" 
        label={props.tag} 
        className="tag"
        onClick={(event) => TagAction(event,props.tag)}
        />
    )
}

export default Tag
