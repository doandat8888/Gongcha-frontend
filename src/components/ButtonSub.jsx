import React from "react";
 
const ButtonSub = (props) => {
    let {title} = props;
    return (
        <button className="button-sub">
            <div className="title">{title}</div>
        </button>
    )
}

export default ButtonSub;