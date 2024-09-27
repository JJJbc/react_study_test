import React from "react";

function Example(props){
    return(
        <div>
            <h1>{`내 이름 : ${props.name}`}</h1>
            <h2>{`내 나이 : ${props.age}`}</h2>   
            <ul>
                <li>{`${props.num1}`}</li>
                <li>{props.num2}</li>
                <li>{props.num3}</li>
            </ul>
            
            
        </div>
        
    )
}

export default Example;