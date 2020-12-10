import React from 'react'

const PostItem = (props) => {
    return (
        <div>
           <h2>{props.content}</h2>
           <h3>{props.user}</h3> 
        </div>
    )
}

export default PostItem;
