import React from 'react'
import Chip from '@material-ui/core/Chip';



function Tag(props) {

    function tagAction(e){
        console.log("Tag action will be implemented here tagAction")
    }

    return (
        <Chip 
        variant="outlined" 
        size="small" 
        label={props.tag} 
        className="tag"
        onClick={(event) => tagAction(event)}
        />
    )
}

export default Tag
