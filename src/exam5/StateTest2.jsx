import React, { useState } from "react";


function StateTest2(props){
    const first = '이건 초기 글자 상태';
    const second = '내용을 변경할 때는 역시 state';

    const [text, setText] = useState(first);
    
    // () => second
    // function (){
    //     second;
    // }        

    return (
        <div>
            <div>
                 <p style={{border: '1px solid black'}}>{text}</p>
                 <button onClick={() => setText(second)}>내용을 변경할 때는 역시 state</button>
                 <button onClick={() => setText(first)}>이건 초기 글자 상태</button>                
            </div>
        </div>
    );

}


export default StateTest2;