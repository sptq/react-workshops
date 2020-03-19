import React from 'react';


const Tag = (props) => {
    console.log(props);

    return (
        <div>
            <div>Name:</div>
            <div>{props.children}</div>
        </div>
    )
}

export default Tag;