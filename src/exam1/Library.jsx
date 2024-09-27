import React from "react";
import Example from "./Example"

function Library(props){
    return(
        <div>
            <Example name = "조병철" age = {28} 
                     num1 ={1}
                     num2 ={2}
                     num3 ={3}/>                                
        </div>
       
    )
}

export default Library;