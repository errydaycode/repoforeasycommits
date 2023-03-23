import React from 'react';




const SuperButton = (props) => {
    return (
        <button onClick={props.callBack}>{props.name}</button>
    );
};

export default SuperButton;