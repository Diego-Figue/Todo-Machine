import React from "react";
import "./TargetTodo.css";

function TargetTodo(props) {
    return(
        <div className="TargetTodo">
            {props.children}
        </div>
    )
}

export {TargetTodo}