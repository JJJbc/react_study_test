import React from "react";
import Square from "./Square";

const squareComments = [
    {
        name: "A"
    },

    {
        name: "A"
    },

    {
        name: "A"
    },

    {
        name: "A"
    },
];

function SquareList(props){
    return(
        <div>
            {squareComments.map((squareComment) => {
                return(
                    <Square name={squareComment.name} />
                );
            })}            
        </div>
    );
}

export default SquareList;