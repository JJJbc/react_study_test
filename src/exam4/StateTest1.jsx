import React, { useState} from "react";


function StateTest1(props){
    const [count, setCount] = useState(0);

    return (
        <div>
            
            <button onClick={() => setCount(count + 1)}>클릭해줘</button>
            <p style={{border: '1px solid black' }}>할 수 있다 {count}</p>
            
        </div>
    );

}


export default StateTest1;