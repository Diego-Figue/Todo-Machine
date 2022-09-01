import React from "react";
import './ContentTodo.css';
function ContentTodo (props){
    return(
        <section className="ContentTodo">
            {props.children}
        </section>
    )
}

export {ContentTodo}