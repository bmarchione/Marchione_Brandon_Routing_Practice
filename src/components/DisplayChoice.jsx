import React from 'react';

const DisplayChoice = ({input}) => {
    return(
        <div>
        {
            isNaN(input) ?
                <p>The Word is: {input}</p> :
                <p>The Number is: {input}</p>
            
        }
        </div>
    )
}
export default DisplayChoice;