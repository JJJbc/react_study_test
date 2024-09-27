import React from "react";
import SquareTop from "./SquareTop";

const squareComments = [
    {
        name: "서울",
        distance: 2,
        color: "#de3151",
        picture: "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/06/15/3ca26e0b-63de-4a0e-9b93-3670a24aea87.jpg"
    },

    {
        name: "인천",
        distance: 29,
        color: "#cc2d4a",
        picture: "https://img.sbs.co.kr/newsnet/etv/upload/2023/07/13/30000861241_1280.jpg"
    },

    {
        name: "대구",
        distance: 237,
        color: "#d93b30",
        picture: "https://cdn.spotvnews.co.kr/news/photo/202212/572436_797903_450.jpg"
    },

    {
        name: "대전",
        distance: 140,
        color: "#bc1a6e",
        picture: "https://thumb.mt.co.kr/06/2023/01/2023011719032083466_1.jpg/dims/optimize/"
    },
];

function SquareTopList(props){
    return(
        <div>         
            <h1>설레는 다음 여행을 위한 아이디어</h1>
            
            <div>
            {squareComments.map((squareComment) => {
                return(                   
                    <SquareTop color={squareComment.color} name={squareComment.name} distance={squareComment.distance} picture={squareComment.picture} />
                );
            })}
            </div>            
                        
        </div>
        
    );
}

export default SquareTopList;