import React from "react";
import SquareBottom from "./SquareBottom";

const squareComments = [
    {
        comment1: "여행 중 만나는",
        comment2: "이색적인 즐길 거리",               
        picture: "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/06/15/3ca26e0b-63de-4a0e-9b93-3670a24aea87.jpg",
        btn: "체험"
    },

    {
        comment1: "집에서 만나는",
        comment2: "다양한 즐길 거리",               
        picture: "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/06/15/3ca26e0b-63de-4a0e-9b93-3670a24aea87.jpg",
        btn: "온라인 체험"
    }


]

const styles ={
    h1Style: {
        clear: "both"
    }
}



function SquareBottomList(props){
    return(
        <div>
            <div style={styles.h1Style}>         
                <h1>에어비앤비 체험 둘러보기</h1>
            </div>
            <div>
            {squareComments.map((squareComment) => {
                return(                   
                    <SquareBottom comment1={squareComment.comment1} comment2={squareComment.comment2} picture={squareComment.picture} btn={squareComment.btn} />
                );
            })}
            </div>            
                        
        </div>
        
    );
}

export default SquareBottomList;