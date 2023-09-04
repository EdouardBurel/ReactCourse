import React from "react";

const TestComponents = (props) => {
    return( 
    <div>
        <h5>Voici votre compte de point: {props.points}</h5>
        <button onClick={props.functionClick}>Appuyer ici</button>
    </div>
    );
}

export default TestComponents;