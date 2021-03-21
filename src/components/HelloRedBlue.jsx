import React from 'react';

const HelloRedBlue = ({input,textColor,bkrnColor}) => {
    return(
        <div style= {{color: textColor, backgroundColor: bkrnColor}}>
            <h1>The Word is: {input} </h1>
        </div>
    )
}
export default HelloRedBlue;