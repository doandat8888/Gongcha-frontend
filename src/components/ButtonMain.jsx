import React from "react";
 
const ButtonMain = (props) => {

    let {title} = props;

    return (
        <button className="button-main">
            <div className="title">{title}</div>
        </button>
    )
}

export default ButtonMain;