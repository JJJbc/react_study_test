import React from "react";


const styles = {   

    secondMainSquare: {
        
        margin: "30px 0px 20px 145px",             
        justifyContent: "center",               
        width: "745px",
        height: "745px",
        float: "left",
    },

    secondSubSquare: {
        diplay: "iniline-block",
        padding: "10px",        
        margin: "10px",        
        borderRadius: "10px",
        width: "700px",
        height: "700px",        
        textAlign: "left",
        color: "white"              
    },

    secondSubSquareImg: {
        width: "700px",
        height: "700px"
    },

};



function Square2nd(props) {

    const imgDivStyle = {
        backgroundImage: `url(${props.picture})`,
        backgroundSize: "cover",
        width: "700px",
        height: "700px",        

    };


    return(
      

            <div style={styles.secondMainSquare}>
            <div style={{...styles.secondSubSquare}}>
                    <div style={imgDivStyle}>
                        <h2>{props.comment1}</h2>
                        <h2>{props.comment2}</h2>
                        <div>
                            <button>{props.btn}</button>
                        </div>
                    </div>                    
                </div>
            </div>
                 
    );
}



export default Square2nd;