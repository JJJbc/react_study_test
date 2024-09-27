import React from "react";


const styles = {
    mainSquare: {
        // border: "1px solid black",              
        justifyContent: "center",
        marginTop: 50,        
        width: "300px",
        height: "350px",
        float: "left",
    },
    subSquare: {
        padding: "10px",
        background: "#5F5F5F",
        margin: "10px",
        border: "1px solid black",
        borderRadius: "10px",
        width: "250px",
        height: "300px",        
        textAlign: "center",
        fontSize: 50,
        lineHeight: "280px"
    }

};

function Square(props) {
    return(
        <div style={styles.mainSquare}>
            <div style={styles.subSquare}>{props.name}</div>           
        </div>
    );
}

export default Square;