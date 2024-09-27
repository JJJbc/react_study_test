import React from "react";


const styles = {

    firstMainSquare: {       
        margin: "30px 0px 20px 145px",             
        justifyContent: "center",               
        width: "300px",
        height: "350px",
        float: "left",
    },    

    firstSubSquare: {
        diplay: "iniline-block",
        padding: "10px",
        background: "#5F5F5F",
        margin: "10px",
        border: "1px solid black",
        borderRadius: "10px",
        width: "250px",
        height: "300px",        
        textAlign: "left",
        color: "white"        
    },

    firstSubSquareImg: {
        width: "249px",
        height: "150px"
    },

   

};



function Square2nd(props) {
    return(             
            <div style={styles.firstMainSquare}>                       
                <div style={{...styles.firstSubSquare, backgroundColor: props.color}}>
                    <img style={styles.firstSubSquareImg} src= {`${props.picture}`} />
                    <h2>{props.name}</h2>
                    <h4>{props.distance}km 거리</h4>
                </div>
            </div>
           
    );
}



export default Square2nd;